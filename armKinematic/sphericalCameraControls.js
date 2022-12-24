//spherical camera controls
//requires keychart.js
class SphericalCameraControls {
  LISTENING = false;
  REQUEST_UPDATE = false;
  //camera location, spherical coordinates
  //this.sphq = { o: [0, 0, 0, 1], r: 3, th: Math.PI/3, phi: Math.PI/4, }
  sphq = { o: [0, 0, 0, 1], r: 3, th: Math.PI / 2, phi: 0, }
  //sensitivity to mouse movements
  SCALE = {
    O : 1,
    R : 5e-3,
    TH : 1e-2,
    PHI : 1e-2
  };

  //clamp variables
  RANGE = {
    R: [0.2, 32],
    //epsilon to prevent singularity on phi
    TH: [1e-3, Math.PI - 1e-3],
    PHI: [-Infinity, Infinity]
  };

  REQUEST_UPDATE = true;

  //default views: global are given in sphq,
  GLOBAL_VIEWS = {
    NUM1: { th: Math.PI / 2, phi: Math.PI / 2, o: [0, 0, 0, 1] },         //down Y
    NUM3: { th: Math.PI / 2, phi: 0, o: [0, 0, 0, 1] },                 //down X
    NUM7: { th: this.RANGE.TH[0], phi: -Math.PI / 2, o: [0, 0, 0, 1] }//down Z

  };

  //optionally track a frame with frames.js,
  //or with any object with appropriately designated
  //memebers .x, .y, .z
  TRACK_FRAME = false;

  //data kept for event reference
  cache = {
    cursorq: null,
    lookAt: new THREE.Vector3() //reuse lookAt vector

  };

  constructor(params) {
    //params { camera, renderer, (localViews), (trackFrame) }
    this.camera = params.camera;
    this.renderer = params.renderer;

    //local view: alternative set of axes, toggled with ALT+NUMKEY.
    //are inverted GOBAL_VIEWS by default
    params.localViews = params.localViews || {};

    this.LOCAL_VIEWS = {
      NUM1: params.localViews.NUM1 || [0, -1, 0, 1],
      NUM3: params.localViews.NUM3 || [-1, 0, 0, 1],
      NUM7: params.localViews.NUM7 || [0, 0, -1, 1],
      O: params.localViews.O || [0, 0, 0, 1]
    }

    this.renderer.domElement.addEventListener('wheel', this.wheelHandler.bind(this));
    this.renderer.domElement.addEventListener('mousemove', this.mousemoveHandler.bind(this));
    //this.renderer.domElement.addEventListener('contextmenu', this.contextmenuHandler.bind(this));

    //key handlers are added to the window instead
    window.addEventListener('keydown', this.keydownHandler.bind(this));

  }
  update(force) {
    if (this.REQUEST_UPDATE || force) {
      this.setCameraSphq();
      this.REQUEST_UPDATE = false;
    }

    //if track frame, update local views
    if (this.TRACK_FRAME) {
      this.LOCAL_VIEWS = {
        NUM1: this.TRACK_FRAME.y,
        NUM3: this.TRACK_FRAME.x,
        NUM7: this.TRACK_FRAME.z,
        O: this.TRACK_FRAME.o
      };
    }

  }
  listen(t) { this.LISTENING = t; }

  //mouse: drags camera around
  wheelHandler(e) {
    if (this.LISTENING) {
      //e.preventDefault();
      //always check if active
      this.sphq.r += this.SCALE.R * e.deltaY;
      this.sphq.r = Math.min(Math.max(this.sphq.r, this.RANGE.R[0]), this.RANGE.R[1]);
      this.REQUEST_UPDATE = true;
    }
  }

  mousemoveHandler(e) {
    if (this.LISTENING) {
      //e.preventDefault();
      var rect = this.renderer.domElement.getBoundingClientRect();
      var q = [e.clientX - rect.left, e.clientY - rect.top];
      if (this.cache.cursorq === null) { this.cache.cursorq = [q[0], q[1]]; }
      var dq = [q[0] - this.cache.cursorq[0], q[1] - this.cache.cursorq[1]];

      if (e.buttons & CLICK.MIDDLE.BUTTONS) { //MMB
        if (e.shiftKey) {
          //SHIFT+MMB: pan camera
          //figure out pan direction
          var basis = VEC4.sceneBasis({
            camera: this.camera,
            renderer: this.renderer,
            distance: this.sphq.r
          });

          this.sphq.o = VEC4.add(this.sphq.o, VEC4.add(
            VEC4.mul(-this.SCALE.O * dq[0], basis.x),
            VEC4.mul(this.SCALE.O * dq[1], basis.y)
          ));
        } else {
          //MMB: rotate view
          this.sphq.phi -= dq[0] * this.SCALE.PHI;
          this.sphq.th -= dq[1] * this.SCALE.TH;

          /*
          this.sphq.phi = Math.min(Math.max(
            this.sphq.phi, this.RANGE.PHI[0]), this.RANGE.PHI[1]);
          this.sphq.th = Math.min(Math.max(
            this.sphq.th, this.RANGE.TH[0]), this.RANGE.TH[1]);
          */
        }
        this.REQUEST_UPDATE = true;
      }
      this.cache.cursorq = q;
    }
  }
  //this.contextmenuHandler = function(e){ e.preventDefault(); }

  //keyboard: numpad for specific views, useful for reset
  keydownHandler(e) {
    if (this.LISTENING) {
      console.log(KEYCHART[e.which] || e.which);
      //e.preventDefault();
      //numkeys move camera to preset views
      if (KEYCHART[e.which] === 'NUM1'
        || KEYCHART[e.which] === 'NUM3'
        || KEYCHART[e.which] === 'NUM7') {
        if (e.altKey) {
          var newsphq = VEC4.vec4toSphq(
            this.LOCAL_VIEWS[KEYCHART[e.which]], this.LOCAL_VIEWS.O
          );
          //catch singularity
          if (isNaN(newsphq.th)) { newsphq.th = this.RANGE.TH[0]; }
          this.sphq.phi = newsphq.phi;
          this.sphq.th = newsphq.th;
          this.sphq.o = newsphq.o;
        } else {
          this.sphq.phi = this.GLOBAL_VIEWS[KEYCHART[e.which]].phi;
          this.sphq.th = this.GLOBAL_VIEWS[KEYCHART[e.which]].th;
          this.sphq.o = this.GLOBAL_VIEWS[KEYCHART[e.which]].o;
        }
        this.REQUEST_UPDATE = true;
      }
    }
  }


  //set camera location from this.sphq
  setCameraSphq() {
    //extra safeguards: check for nan & clamp
    if (isNaN(this.sphq.phi)) {
      console.log('!attempted to set camera phi to NaN');
      this.sphq.phi = 0;
    }
    if (isNaN(this.sphq.th)) {
      console.log('!attempted to set camera theta to NaN');
      this.sphq.th = Math.PI / 4;
    }
    this.sphq.phi = Math.max(Math.min(
      this.sphq.phi,
      this.RANGE.PHI[1]),
      this.RANGE.PHI[0]);
    this.sphq.th = Math.max(Math.min(
      this.sphq.th,
      this.RANGE.TH[1]),
      this.RANGE.TH[0]);


    var cartq = VEC4.sphqToVec4(this.sphq);
    var r = VEC4.sub(cartq, this.sphq.o);
    this.camera.position.set(cartq[0], cartq[1], cartq[2]);
    var upVector = VEC4.unit(VEC4.x(VEC4.x(r, [0, 0, 1, 1]), r));
    this.camera.up.set(upVector[0], upVector[1], upVector[2]);
    this.camera.lookAt(VEC4.vec4toTHREEvector3(this.sphq.o));
  }



}
