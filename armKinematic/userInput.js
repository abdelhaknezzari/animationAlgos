
class UserInput {

    cursor = {
      q: [0, 0],                  //position relative to
      keys: [false, false, false]
    };
    modeManager = new ModeManager();
  
    setModeManager(kinimatik) {
      //define specific timestep functions
      this.modeManager.CONDITIONALS = {
        IK: () => {
          //if in ik mode, solve inverse kinematics.
          Kinematik.dampedLeastSquares({
            kinematicLink: kinimatik,
            target: this.cursor3D.frame,
            lambda: 5e-3,
            iter: 512
          });
        }
      };
  
      //define actions when switching between modes
      this.modeManager.SWITCH_ACTIONS = {
        IK: () => {
          //disable everything else if solving ik
          this.kinematikBuilder.listen(false);
          this.kinematikActuator.listen(false);
        },
        B: () => {
          //enable building
          this.kinematikBuilder.listen(true);
          this.kinematikActuator.listen(false);
        },
        FK: () => {
          //enable joint actuation with keys
          this.kinematikBuilder.listen(false);
          this.kinematikActuator.listen(true);
        }
      };
    }
    init(scene, camera, renderer, kinimatik) {
  
      //cursor3D: manipulate things in world space
      this.cursor3D = new Cursor3D({
        camera: camera,
        renderer: renderer
      });
  
      //spherical camera controls: navigate viewport
      this.sphericalCameraControls = new SphericalCameraControls({
        camera: camera, renderer: renderer,
        //ocalView: { NUM1: [0, -1, 0, 1], NUM3: [-1, 0, 0, 1], NUM7: [0, 0, -1, 1]},
        trackFrame: this.cursor3D.frame
      });
  
      //kinematicBuilder: construct robot
      this.kinematikBuilder = new KinematikBuilder({
        kinematicLink: kinimatik,
        cursor3D: this.cursor3D
      });
  
      this.setModeManager(kinimatik);
  
      this.cursor3D.initVisual({ scene: scene });
      this.cursor3D.syncVisual();
      this.cursor3D.listen(true);
  
      //set local coord frame to cursor frame: useful combined w/ transforms
      this.sphericalCameraControls.listen(true);
      this.kinematikBuilder.listen(true);
  
      //kinematicActuator: control robot
      this.kinematikActuator = new KinematikActuator({ kinematicLink: kinimatik });
      this.kinematikActuator.listen(true);
  
      //dummy switch to initial mode to ensure all parameters are set correctly
      this.modeManager.SWITCH_ACTIONS[this.modeManager.MODE]();
    }
  }