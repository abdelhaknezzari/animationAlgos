//cursor3D: natigate & manipulate in 3D
//requires numeric.js, VEC4.js,
//and Frame.js
class Cursor3D {

  VEC4 = new Vec4();

  LISTENING = false;

  frame = new Frame();
  rot = [0, 0, 0, 1];
  q=undefined;


  STATE = {
    ACT: false,
    AXIS: undefined

  };

  cache = { cursorq: undefined, cursor3D: { q: undefined, rot: undefined } };

  SCALE = {
    T: 1,
    R: 1,
    SHIFT: 1e-1
  }

  REQUEST_UPDATE = false;


  constructor(params) {
    //params: { camera, renderer };
    //webGL the cursor is acting on
    this.camera = params.camera;
    this.renderer = params.renderer;
    this.renderer.domElement.addEventListener('mousedown', this.mousedownHandler.bind(this));
    this.renderer.domElement.addEventListener('mouseup', this.mouseupHandler.bind(this));
    this.renderer.domElement.addEventListener('mousemove', this.mousemoveHandler.bind(this));
    window.addEventListener('keydown', this.keydownHandler.bind(this));

  }

  //attach handlers
  keydownHandler(e) {
    if (this.LISTENING) {
      //e.preventDefault();
      if (KEYCHART[e.which] === 'R'
        || KEYCHART[e.which] === 'T') {
        this.STATE.ACT = KEYCHART[e.which]; //switch to appropriate state
        this.REQUEST_UPDATE = true;

        //remember initial state
        if (this.q === undefined) { /*do nothing*/ } else {
          this.cache.cursorthis.q = [this.q[0], this.q[1]];
        }
        this.cache.cursor3D.q = this.VEC4.clone(this.frame.o);
        this.cache.cursor3D.rot = this.rot;
      }

      if (KEYCHART[e.which] === 'ESC') { //e.preventDefault();
        this.set({
          q: this.cache.cursor3D.q,
          rot: this.cache.cursor3D.rot
        });
        this.STATE.ACT = false;
        this.STATE.AXIS = undefined;

        this.REQUEST_UPDATE = true;
      }

      if (this.STATE.ACT) {
        if (KEYCHART[e.which] === 'X'
          || KEYCHART[e.which] === 'Y'
          || KEYCHART[e.which] === 'Z') {
          //clear rotation first to prevent composite rotation complications
          this.set({
            q: this.cache.cursor3D.q,
            rot: this.cache.cursor3D.rot
          });

          this.STATE.AXIS = this.frame[KEYCHART[e.which].toLowerCase()];
          //this.REQUEST_UPDATE = true;
        }
      }
    }
  }



  mousemoveHandler(e) {
    if (this.LISTENING) {
      //e.preventDefault();
      //calculate location of click
      var rect = this.renderer.domElement.getBoundingClientRect();
      this.q = [e.clientX - rect.left, e.clientY - rect.top]; //click coords in p

      if (this.STATE.ACT) { //in translation/rotation state.
        //get scene basis
        var sceneBasis = this.VEC4.sceneBasis({
          camera: this.camera,
          renderer: this.renderer,
          reference: this.frame.o
        });

        if (this.STATE.ACT === 'T') {  //translate
          if (this.cache.cursorq === undefined) { this.cache.cursorq = [this.q[0], this.q[1]]; }
          var dcursorq = [this.q[0] - this.cache.cursorq[0], this.q[1] - this.cache.cursorq[1]];
          var deltaq = this.VEC4.add(
            this.VEC4.mul(dcursorq[0], sceneBasis.x),
            this.VEC4.mul(-dcursorq[1], sceneBasis.y)
          );

          //if confined to axis, project.
          if (this.STATE.AXIS) {
            deltaq = this.VEC4.mul(
              this.VEC4.dot(deltaq, this.STATE.AXIS),
              this.STATE.AXIS
            );
          }

          this.set({
            q:
              this.VEC4.add(this.cache.cursor3D.q,
                deltaq)
          });

        } else if (this.STATE.ACT === 'R') { //rotate

          if (this.cache.cursorq === undefined) { this.cache.cursorq = [this.q[0], this.q[1]]; }
          var dq = [this.q[0] - this.cache.cursorq[0], this.q[1] - this.cache.cursorq[1]];

          //calculate argument
          var o = this.VEC4.sceneToScreen({
            q: this.frame.o,
            camera: this.camera,
            renderer: this.renderer
          });

          var arg = this.VEC4.ang(
            [this.q[0] - o[0], this.q[1] - o[1], 0, 1], //current offset
            [this.cache.cursorq[0] - o[0],  //present offset
            this.cache.cursorq[1] - o[1], 0, 1],
            [0, 0, 1, 1]);                //screen normal

          var delta;
          if (this.STATE.AXIS) {
            var sign = 1;
            if (this.VEC4.dot(this.STATE.AXIS, this.VEC4.unit(sceneBasis.z)) < -1e-2) {
              sign = -1;
            }
            delta = this.VEC4.mul(arg * sign, this.STATE.AXIS);
          } else {
            //use screen basis
            delta = this.VEC4.mul(arg, this.VEC4.unit(sceneBasis.z));
          }

          var T = numeric.dot(
            this.VEC4.axangToMat4(delta),                  //the increment
            this.VEC4.axangToMat4(this.cache.cursor3D.rot) //initial rotation
          );
          T = this.VEC4.mat4SetTranslate(T, this.cache.cursor3D.q);
          this.set({ T: T });
        }
        this.REQUEST_UPDATE = true;

      } else {
        if (e.buttons & CLICK.LEFT.BUTTONS) {
          //LMB drag, drag the cursor along.
          this.setFromScreen(this.q);
          this.REQUEST_UPDATE = true;
        }
      }
    }
  }


  mousedownHandler(e) {

    if (this.LISTENING) {
      //e.preventDefault();

      //calculate location of click
      var rect = this.renderer.domElement.getBoundingClientRect();
      var q = [e.clientX - rect.left, e.clientY - rect.top]; //click coords in p
      if (e.buttons & CLICK.LEFT.BUTTONS && !(this.STATE.ACT)) {
        //LMB: move 3D cursor
        this.setFromScreen(q);
        this.REQUEST_UPDATE = true;
      }
    }
  }

  mouseupHandler(e) {
    if (this.LISTENING) {
      //e.preventDefault();
      if (e.button === CLICK.LEFT.BUTTON) { //LMB up
        if (this.STATE.ACT) {
          //actuate rotation/translation
          this.STATE.ACT = false;
          this.STATE.AXIS = undefined;
        }
        this.REQUEST_UPDATE = true;
      }
    }
  }
  setFromScreen(q) {
    //set from screen coordinates, project to
    //maintain distance from camera

    //q: position of click, in px, wrt domElement

    var oldq = this.VEC4.sceneToScreen({                    //current cursor3D
      q: this.frame.o,
      camera: this.camera,
      renderer: this.renderer
    });

    //vector from camera to o
    var cameraToCursor = this.VEC4.sub(this.frame.o,
      this.VEC4.THREEvector3toVec4(this.camera.position));
    var cameraDirection = this.VEC4.unit(this.VEC4.THREEvector3toVec4(
      this.camera.getWorldDirection()
    ));

    var basis = this.VEC4.sceneBasis({
      camera: this.camera,
      renderer: this.renderer,
      distance: Math.abs(this.VEC4.dot(cameraToCursor, cameraDirection))
    });

    this.set({
      q:
        this.VEC4.add(this.frame.o,
          this.VEC4.add(
            this.VEC4.mul(q[0] - oldq[0], basis.x),
            this.VEC4.mul(-q[1] + oldq[1], basis.y)
          )
        )
    });
  }
  set(params) {
    //params: { q, rot }
    var T;
    if (params.T) {
      T = params.T;
      this.rot = this.VEC4.mat4toAxang(T);

    } else {
      var q = params.q || this.frame.o;
      var rot = params.rot || this.rot;

      this.rot = rot;
      T = this.VEC4.axangToMat4(rot);
      T[0][3] = q[0];
      T[1][3] = q[1];
      T[2][3] = q[2];
    }
    this.frame.setTransform(T);
  }
  increment(params) {
    //params: { q, rot }
    var dq = params.q || [0, 0, 0, 1];
    var drot = params.rot || [0, 0, 0, 1];
    this.set({
      q: this.VEC4.add(this.frame.o, dq),
      rot: this.VEC4.add(this.rot, drot)
    });
  }
  initVisual(params) {
    //params: { scene }

    //init visual of auxiliary objects: frame
    this.frame.initVisual({ scene: params.scene });

    var scene = params.scene;

    this.visual = {};

    //constants determining appearance of cursor
    this.visual.ORIGIN_COLOUR = 0xffffff;
    this.visual.ORIGIN_SIZE = 0.01;
    this.visual.CIRCLE_RADIUS = 0.1;


    this.visual.origin = new THREE.Mesh(
      new THREE.CubeGeometry(this.visual.ORIGIN_SIZE,
        this.visual.ORIGIN_SIZE,
        this.visual.ORIGIN_SIZE),
      new THREE.MeshBasicMaterial({ color: this.visual.ORIGIN_COLOUR })
    );
    scene.add(this.visual.origin);
  }
  syncVisual() {
    //sync visual of auxiliary objects: frame
    this.frame.syncVisual();

    //position origin at centre of coordinate frame
    this.visual.origin.position.fromArray(this.frame.o);
    this.visual.origin.up = this.frame.visual.THREEq.z;
    this.visual.origin.lookAt(
      this.VEC4.vec4toTHREEvector3(this.VEC4.add(this.frame.o, this.frame.x))
    );
  }

  update(force) {
    if (this.REQUEST_UPDATE || force) {
      this.syncVisual();
      this.REQUEST_UPDATE = false;
    }
  }



  listen(t) { this.LISTENING = t; }


}
