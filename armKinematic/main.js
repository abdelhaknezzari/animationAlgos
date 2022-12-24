class World {
  userInput = new UserInput();
  webGL = new WebGL();
  myRobot = new MyRobot();

  //timestep
  t = 0;
  dt = 1e-4;

  timestep() {
    this.t += this.dt;
    this.webGL.resize();

    if (this.userInput.modeManager.MODE !== 'B') {
      this.myRobot.getKinimatik().syncVisual(true);
    }

    this.userInput.kinematikActuator.update();
    this.userInput.kinematikBuilder.update();

    this.userInput.cursor3D.update();
    this.userInput.sphericalCameraControls.update();

    this.userInput.modeManager.conditional();

    this.webGL.render();
    window.requestAnimationFrame(() => { this.timestep(); });
  }

  init() {
    this.webGL.init();
    this.myRobot.init(this.webGL.scene);
    this.userInput.init(this.webGL.scene, this.webGL.camera, this.webGL.renderer, this.myRobot.getKinimatik());

    this.timestep();
  }



}

var world = new World();
world.init();