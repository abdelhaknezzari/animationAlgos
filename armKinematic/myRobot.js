
class MyRobot {
    kinimatik = new KinematicLink({});
    init(scene) {
      this.kinimatik.extend({ joint: { q: [0, 0, 0.1, 1], axis: [0, 0, 1, 1], type: Kinematik.JOINT_TYPE.REVOLUTE } });
  
      this.kinimatik.extend({ joint: { q: [0.14, 0, 0.2, 1], axis: [1, 0, 0, 1], type: Kinematik.JOINT_TYPE.REVOLUTE } });
  
      this.kinimatik.extend({ joint: { q: [0.12, 0, 0.6, 1], axis: [1, 0, 0, 1], type: Kinematik.JOINT_TYPE.REVOLUTE } });
      this.kinimatik.extend({ joint: { q: [0, 0.1, 0.6, 1], axis: [0, 1, 0, 1], type: Kinematik.JOINT_TYPE.REVOLUTE } });
      this.kinimatik.extend({ joint: { q: [0, 0.3, 0.6, 1], axis: [1, 0, 0, 1], type: Kinematik.JOINT_TYPE.REVOLUTE } });
      this.kinimatik.extend({ joint: { q: [0, 0.3, 0.6, 1], axis: [0, 1, 0, 1], type: Kinematik.JOINT_TYPE.REVOLUTE } });
      this.kinimatik.extend({ joint: { q: [0, 0.4, 0.6, 1], axis: [0, 1, 0, 1], type: Kinematik.JOINT_TYPE.REVOLUTE } });
  
      this.kinimatik.initVisual({ scene: scene }, true);
      this.kinimatik.syncVisual(true);
    }
  
    getKinimatik() {
      return this.kinimatik;
    }
  
  }
  
  
  