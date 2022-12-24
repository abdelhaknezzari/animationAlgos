class WebGL {
    //create webGL renderer and size to full window
    renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById('viewport'),
      antialias: true
    });
  
    scene = new THREE.Scene();
  
    //create camera
    camera = new THREE.PerspectiveCamera(
      45,
      this.renderer.domElement.clientWidth /
      this.renderer.domElement.clientHeight,
      0.1, 10000
    );
  
  
    //References and other constants in scene:
    XYplane = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: 0x242424 })); //0x242424
  
    ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  
  
    //handle resizing of webGL canvas, keep full window size.
    //WORLD.webGL.resize() is called every timestep.
    resize() {
      var w = document.getElementById('viewport-wrapper').clientWidth;//document.documentElement.clientWidth;
      var h = document.getElementById('viewport-wrapper').clientHeight;//document.documentElement.clientHeight;
      if (this.renderer.domElement.clientWidth !== w ||
        this.renderer.domElement.clientHeight !== h) {
        //resize output canvas
        this.renderer.setSize(w, h);
        //adjust camera accordingly
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
      }
    };
  
    //render scene through camera onto canvas
    render() { this.renderer.render(this.scene, this.camera) };
    //suppress key & mouse events on canvas element
    keydownHandler(e) { e.preventDefault(); }
    contextmenuHandler(e) { e.preventDefault(); }
  
    init() {
  
      this.renderer.setClearColor(0x202020, 1);
  
      //create scene and add camera to scene
      this.scene.add(this.camera);
      this.scene.add(this.XYplane);
      this.directionalLight.position.set(1, 1, 1);
      this.scene.add(this.ambientLight);
      this.scene.add(this.directionalLight);
  
      this.renderer.domElement.addEventListener('keydown', this.keydownHandler);
      this.renderer.domElement.addEventListener('contextmenu', this.contextmenuHandler);
    }
  
  }
  
  
  