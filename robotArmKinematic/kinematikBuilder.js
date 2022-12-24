//kinematik builder: interactive construction of kinemtaic chains
//part of kinematik.js, use with THREE.js
class KinematikBuilder {
  LISTENING = false;
  constructor(params) {
    //params: { kinematicLink, cursor3D }
    params = params || {};
    this.kinematicLink = params.kinematicLink || new kinematik.KinematicLink();
    this.cursor3D = params.cursor3D; //leave undefined if not passed
    window.addEventListener('keydown', this.keydownHandler.bind(this));
  }
  update(force) {
    if (this.LISTENING || force) {
      //update.
    }
  }
  listen(t) { this.LISTENING = t; };

  keydownHandler(e) {
    //e.preventDefault();
    if (KEYCHART[e.which] === 'SPACE') {
      //new joint
      console.log('new joint');
      this.kinematicLink.extend({
        joint: {
          q: this.cursor3D.frame.o,
          axis: this.cursor3D.frame.z,
          type: kinematik.JOINT_TYPE.REVOLUTE
        }
      });
      this.kinematicLink.initVisual({ scene: WORLD.webGL.scene }, true);
      this.kinematicLink.syncVisual(true);

      //add to keyboard control map & monitor
      USER.input.kinematikActuator.mapKinematicLink();
    }
    if (KEYCHART[e.which] === 'DELETE') {
      /*
    console.log('reset');
    var resetROBOT = new kinematik.KinematicLink();
    this.kinematicLink = resetROBOT;
    USER.input.kinematikActuator.mapKinematicLink();
        */
      window.location.reload();
    }
  }


}
