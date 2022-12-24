
//kinematik actuator: control interface for kinematik links
//part of kinematik.js, use with THREE.js
class KinematikActuator {
  LISTENING = false;
  //parameters
  ACTUATION_INCREMENT = { TH: 6e-2, D: 2e-2 }  //increment step
  SHIFT_SCALE = 1e-1;          //scale factor when SHIFT
  //list of joints pending actuation
  ACTUATE = [];

 REVERSE = {
    'A': 1, 'S': 2, 'D': 3, 'F': 4,
    'G': 5, 'H': 6, 'J': 7, 'K': 8, 'L': 9
  };


  constructor(params) {

    this.kinematicLink = params.kinematicLink;
    this.mapKinematicLink();
    window.addEventListener('keydown', this.keydownHandler.bind(this));
    window.addEventListener('keyup', this.keyupHandler.bind(this));
  }
  mapKinematicLink() {
    this.L = [];
    for (var r = this.kinematicLink;
      r.child instanceof KinematicLink;
      r = r.child) {
      this.L[this.L.length] = r;
    }
  }
  update() {
    if (this.LISTENING) {
      //actuate joints
      var inc = 0;
      for (var i = 1; i < this.L.length; ++i) {
        if (this.ACTUATE[i]) {
          if (this.L[i].jointType === Kinematik.JOINT_TYPE.REVOLUTE) {
            inc = this.ACTUATION_INCREMENT.TH;
          } else if (this.L[i].jointType === Kinematik.JOINT_TYPE.PRISMATIC) {
            inc = this.ACTUATION_INCREMENT.D;
          }
          this.L[i].increment(this.ACTUATE[i] * inc);
        }
      }
    }
  }
  listen(t) { this.LISTENING = t; }

  keydownHandler(e) {
    if (this.LISTENING) {
      //e.preventDefault();

      var k = KEYCHART[e.which];
      //actuate +
      if (0 < k && k <= 9) {
        if (k >= this.L.length) {
          //check if link has changed,
          //register new links if necessary.
          this.mapKinematicLink();
        }
        if (k < this.L.length) {
          //raise actuation flag on corresponding joint
          this.ACTUATE[k] = (e.shiftKey ? this.SHIFT_SCALE : 1);
        }
      }
      //actuate -
      k = this.REVERSE[k];
      if (0 < k && k <= 9 && k < this.L.length) {
        this.ACTUATE[k] = -(e.shiftKey ? this.SHIFT_SCALE : 1);
      }

    }
  }
  keyupHandler(e) {
    if (this.LISTENING) {
      //
      var k = KEYCHART[e.which];
      if (0 < k && k <= 9 && this.ACTUATE[k] > 0) {
        this.ACTUATE[k] = false;
      }
      k = this.REVERSE[k];
      if (0 < k && k <= 9 && this.ACTUATE[k] < 0) {
        this.ACTUATE[k] = false;
      }
    }
  }

}