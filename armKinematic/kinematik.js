//kinematik: the kinematics
VEC4 = new Vec4();

class Kinematik {

  static INERTIAL_FRAME = new Frame();
  static JOINT_TYPE = {
    REVOLUTE: 1,//0;
    PRISMATIC: 2,//1;
  }

  static DEFAULT = {
    TARGET: Kinematik.INERTIAL_FRAME,
    LAMBDA: 1e-2,
    ITER: 512,
    THRESHOLD: 1e-4,
    DTH_CLAMP: Infinity
  }

  denavitHartenberg = new DenavitHartenberg();

  static dampedLeastSquares(params) {
    //params: { kinematicLink, target, lambda, iter, threshold }
    //build link list
    var L = [];
    for (var r = params.kinematicLink;
      r.child instanceof KinematicLink;
      r = r.child) { L[L.length] = r; }
    var targi = L.length - 1;

    //calc target. Since there is a tool offset
    //and setTransform is mutable, do a copy.
    var target = (params.target || Kinematik.DEFAULT.TARGET).clone();
    var toolR = VEC4.framesToMat4(target, Kinematik.INERTIAL_FRAME);

    //parameters for DLS
    var iter = params.iter || Kinematik.DEFAULT.ITER;
    var lambda = params.lambda || Kinematik.DEFAULT.LAMBDA;
    var threshold = params.threshold || Kinematik.DEFAULT.THRESHOLD;
    var dthClamp = Math.abs(params.dthClamp) || Kinematik.DEFAULT.DTH_CLAMP;
    //calculate tool offset
    var toolOffset = VEC4.sum([
      VEC4.mul(L[targi].jointOffset[0], target.x),
      VEC4.mul(L[targi].jointOffset[1], target.y),
      VEC4.mul(L[targi].jointOffset[2], target.z)]);
    target.o = VEC4.sub(target.o, toolOffset);

    var error = 0;
    //calculate jacobian
    var J = [[], [], [], [], [], []]; var j;

    for (var it = 0; it < iter; ++it) {

      //evaluate e: desired effect on end effector frame
      var e = [];
      e[0] = target.o[0] - L[targi].frame.o[0];
      e[1] = target.o[1] - L[targi].frame.o[1];
      e[2] = target.o[2] - L[targi].frame.o[2];

      //calculate target transformation
      //for use in inverse orientation dynamics

      var nd = [toolR[0][0], toolR[1][0], toolR[2][0], 1];
      var sd = [toolR[0][1], toolR[1][1], toolR[2][1], 1];
      var ad = [toolR[0][2], toolR[1][2], toolR[2][2], 1];

      var Re = L[targi].T;

      var ne = [Re[0][0], Re[1][0], Re[2][0], 1];
      var se = [Re[0][1], Re[1][1], Re[2][1], 1];
      var ae = [Re[0][2], Re[1][2], Re[2][2], 1];

      var eo = VEC4.mul(0.5,
        VEC4.add(VEC4.add(
          VEC4.x(ne, nd), VEC4.x(se, sd)
        ), VEC4.x(ae, ad)));


      e[3] = eo[0];
      e[4] = eo[1];
      e[5] = eo[2];

      //if error is already small, return.
      error = numeric.norm2Squared(e);
      if (error < threshold) { return iter; }

      //if error is still large, continue with a DLS iteration
      for (var i = 0; i < targi; ++i) {
        j = i + 1;

        if (L[j].jointType === this.JOINT_TYPE.REVOLUTE) {

          var zxd = VEC4.x(L[i].frame.z,
            VEC4.sub(L[targi].frame.o, L[i].frame.o));

          J[0][i] = zxd[0];
          J[1][i] = zxd[1];
          J[2][i] = zxd[2];
          J[3][i] = L[i].frame.z[0];
          J[4][i] = L[i].frame.z[1];
          J[5][i] = L[i].frame.z[2];

        } else if (L[j].jointType === Kinematik.JOINT_TYPE.PRISMATIC) {
          J[0][i] = L[i].frame.z[0];//zxd[0];
          J[1][i] = L[i].frame.z[1];//zxd[1];
          J[2][i] = L[i].frame.z[2];//zxd[2];
          J[3][i] = 0;//L[i].frame.z[0];
          J[4][i] = 0;//L[i].frame.z[1];
          J[5][i] = 0;//L[i].frame.z[2];
        } else {
          console.log('weh');
        }
      }
      var Jt = numeric.transpose(J);


      var dth = numeric.dot(Jt,
        numeric.inv(
          numeric.add(
            numeric.dot(J, Jt),
            numeric.mul(lambda * lambda, numeric.identity(6))
          )
        ));
      dth = numeric.dotMV(dth, e);

      //implement increment
      for (var i = 0; i < targi; ++i) {
        j = i + 1;
        dth[i] = Math.min(Math.max(-dthClamp, dth[i]), dthClamp);
        L[j].increment(dth[i]);
      }
    }

    //if this exectues, failed to converge.
    return false;
  }
}

