//4-vector arithmetic
class Vec4 {
  EPSILON = 1e-15;

  //debugging tools
  log(u, text){
  console.log(text + ':(' + u[0] + ',' + u[1] + ','
                          + u[2] + ',' + u[3] + ')');};
  
  //clone
  clone(u){ return [u[0], u[1], u[2], u[3]]; }
  
  //addition, subtraction, scalar multiplication
  add(u, v){ return [u[0]+v[0], u[1]+v[1], u[2]+v[2], 1]; };
  sub(u, v){ return [u[0]-v[0], u[1]-v[1], u[2]-v[2], 1]; };
  mul(a, u){ return [u[0]*a, u[1]*a, u[2]*a, 1]; };
  
  //sum an array of vectors
  sum(uArray){
    var u = [0, 0, 0, 1];
    for(var i = 0; i < uArray.length; ++i){
      u[0] += uArray[i][0];
      u[1] += uArray[i][1];
      u[2] += uArray[i][2];
    }
    return u;
  }
  
  
  //dot and cross products
  dot(u, v){ return u[0]*v[0]+u[1]*v[1]+u[2]*v[2]; };
  x(u, v){ return [u[1]*v[2]-v[1]*u[2],
                                   u[2]*v[0]-v[2]*u[0],
                                   u[0]*v[1]-v[0]*u[1],
                                   1]; };
  
  //magnitude and normalisation
  mag(u){ return Math.sqrt(u[0]*u[0]+u[1]*u[1]+u[2]*u[2]);};
  mag2(u){ return u[0]*u[0]+u[1]*u[1]+u[2]*u[2];};
  unit(u){
    if(this.zero(u)){ return false; }
    return this.mul(1/this.mag(u), u);
  };
  
  zero(u){ return (this.mag2(u) < this.EPSILON);};
  
  //direction'd angle between two vectors
  //notice order of variables: angle is u to v wrt n
  ang(v, u, n){
    var maguv = Math.sqrt(this.mag2(u)*this.mag2(v));
    var theta = Math.acos(this.dot(u, v)/maguv);
    var sign = this.dot(this.x(u, v), n) > 0 ? 1 : -1;
    return sign*theta;
  }
  
  //THREE.js specific conversions
  vec4toTHREEvector3(v){
    return (new THREE.Vector3().set(v[0], v[1], v[2]));
  }
  THREEvector3toVec4(t){ return [t.x, t.y, t.z, 1]; };
  
  //spherical coordinates
  sphq(){ return { o: [0, 0, 0, 1], r: 0, th: 0, phi: 0}};
  vec4toSphq(v, o){
    o = o || [0, 0, 0, 1];
    var r = this.sub(v, o);
    var sphq = {};
    sphq.o = o;
    sphq.r = this.mag(r);
    sphq.th = Math.acos(v[2]/sphq.r);
    sphq.phi = Math.atan2(v[1], v[0]);
    return sphq;
  }

  sphqToVec4(sphq){
    var v = [
    sphq.r*Math.sin(sphq.th)*Math.cos(sphq.phi) + sphq.o[0],
    sphq.r*Math.sin(sphq.th)*Math.sin(sphq.phi) + sphq.o[1],
    sphq.r*Math.cos(sphq.th)                    + sphq.o[2],
    1
    ];
    return v;
  }
  
  //rotations and rotation matrices
  THETA_EPSILON = 1e-15;

  mat4SetTranslate(T, dq){
    T[0][3] = dq[0];
    T[1][3] = dq[1];
    T[2][3] = dq[2];
    return T;
  }
  
  axangToMat4(v, dq){
    //axis-angle to rotation 4-matrix
    //optional translation too
    dq = dq || [0, 0, 0, 1];
    var R = [
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1]
    ];
    var theta = this.mag(v);
    //return identity matrix if there is no rotation
    if(theta < this.THETA_EPSILON){ return R; }
    //otherwise, compute rotation
    var c = Math.cos(theta);
    var s = Math.sin(theta);
    var t = 1-c;
    v = this.unit(v);
    var R = [
      [t*v[0]*v[0]+c, t*v[0]*v[1]-v[2]*s, t*v[0]*v[2]+v[1]*s, dq[0]],
      [t*v[0]*v[1]+v[2]*s, t*v[1]*v[1]+c, t*v[1]*v[2]-v[0]*s, dq[1]],
      [t*v[0]*v[2]-v[1]*s, t*v[1]*v[2]+v[0]*s, t*v[2]*v[2]+c, dq[2]],
      [0, 0, 0, 1]
    ];
    return R;
  }

  mat4toAxang(T){
    var r = [
      T[2][1]-T[1][2],
      T[0][2]-T[2][0],
      T[1][0]-T[0][1], 1];
  
    if(this.zero(r)){
      //singularity
      return [0, 0, 0, 1];
    }
    var th = Math.acos(0.5*(T[0][0]+T[1][1]+T[2][2]-1));
    r = this.mul(th, this.unit(r));
    return r;
  }
  
  
  //use with kinematik.Frame:
  toVec4inFrame(v, f){
    //express v in frame f
    var v = this.sub(v, f.o);
    return [this.dot(v, f.x),
            this.dot(v, f.y),
            this.dot(v, f.z), 1];
  }
  fromVec4inFrame(v, f){
    //convert v in f to global frame
    return this.sum([f.o, this.mul(v[0], f.x),
    this.mul(v[1], f.y), this.mul(v[2], f.z)]);
  }
  //rotations and rotation matrices cont. :
  //use with mat4
  framesToMat4(f2, f1){ //UNTESTED
    //transformation from f1 to f2
    var deltao = this.sub(f2.o, f1.o);
    var R = [
    [this.dot(f2.x, f1.x), this.dot(f2.y, f1.x), this.dot(f2.z, f1.x), deltao[0]],
    [this.dot(f2.x, f1.y), this.dot(f2.y, f1.y), this.dot(f2.z, f1.y), deltao[1]],
    [this.dot(f2.x, f1.z), this.dot(f2.y, f1.z), this.dot(f2.z, f1.z), deltao[2]],
    [0, 0, 0, 1]
    ];
    return R;
  }
  
  //projections: use with THREE.js
  sceneToScreen(params){
    //converts from scene coordinates to pixel coordinates
    //params: {q,  camera, renderer}
    var qproj = new THREE.Vector3().fromArray(params.q);
    qproj.project(params.camera);
    var qret = [params.renderer.domElement.width*(qproj.x+1)/2,
                params.renderer.domElement.height*(1-qproj.y)/2];
    return qret;
  }
  screenToScene = function(params){
  
  }
  sceneBasis(params){
    //returns a basis in world space with
    //y parallel to up and x to the right wrt camera
  
    //params: { camera, renderer, distance (or) reference}
    var scaleFactor = 1;
    var distance;
    if(params.distance === undefined){
      distance = this.dot(
        this.THREEvector3toVec4(params.camera.getWorldDirection()),
        this.sub(
          params.reference,
          this.THREEvector3toVec4(params.camera.position)
        )
      )
    } else {
      distance = params.distance;
    }
    //given distance in world units:
    //work out basis vectors at corresponding scale.
    //1 px on screen is (scaleFactor) units in world at distance.
    scaleFactor = distance*
    2*Math.tan(params.camera.fov*Math.PI/360)
    /params.renderer.domElement.getBoundingClientRect().height;
  
    var z = this.mul(scaleFactor, this.unit(this.THREEvector3toVec4(params.camera.getWorldDirection())));
    var y = this.mul(scaleFactor, this.unit(this.THREEvector3toVec4(params.camera.up)));
    var x = this.mul(scaleFactor, this.unit(this.x(z, y)));
  
    return {'x': x, 'y': y, 'z': z};
  }
  
  
  
  

}
