class KinematicLink {
    VEC4 = new Vec4();
          //kinematic data
    frame = new Frame();
    DH = new DenavitHartenberg();

    constructor(params) {
      //create empty kinematic link object.
  
      //params { parent, DH }
  
      //heirarchy data
      this.parent = null || params.parent;
      this.child = null;
      if (this.parent instanceof KinematicLink) {
        this.parent.child = this;
      }
  
      //joint type. Only revolute joints supported for now.
      this.jointType = params.type;
      this.jointRange = [0, 0];

  
      this.M = numeric.identity(4);
      this.T = numeric.identity(4);
  
      this.jointOffset = params.jointOffset || [0, 0, 0, 1];
    }
    updateDataFromDH(propagate) {
      //calculate M and T matrices from DH parameters
      // & apply appropriate transformation to frame.
      this.M = this.DH.mat4();
      this.T = this.M;
      if (this.parent instanceof KinematicLink) {
        this.T = numeric.dot(this.parent.T, this.M);
      }
      this.frame.setTransform(this.T);
  
      if (propagate && this.child instanceof KinematicLink) {
        this.child.updateDataFromDH(true);
      }
    }
    //actuate and increment: actuate joints by editing joint parameters
    actuate(v) {
      //clamp against joint limits;
      v = Math.min(Math.max(
        v, this.jointRange[0]), this.jointRange[1]);
      if (this.jointType === Kinematik.JOINT_TYPE.REVOLUTE) {
        //revolute joint, active joint parameter is DH.th
        this.DH.th = v;
      } else if (this.jointType === Kinematik.JOINT_TYPE.PRISMATIC) {
        //revolute joint, active joint parameter is DH.d
        this.DH.d = v;
      }
      this.updateDataFromDH(true);
    }
    increment(dv) {
      if (this.jointType === Kinematik.JOINT_TYPE.REVOLUTE) {
        this.actuate(this.DH.th + dv);
      } else if (this.jointType === Kinematik.JOINT_TYPE.PRISMATIC) {
        this.actuate(this.DH.d + dv);
      }
    }
  
    extend(params) {
      //append new link to tip of present chain.
      //traverse down tree if not already at tip.
      if (this.child instanceof KinematicLink) {
        this.child.extend(params); return;
      }
  
  
  
      //if parameters given in terms of joint location and axis:
      if (params.joint) {
        //assign from joint data
  
        //append child to kinematic link
        this.child = new KinematicLink({ parent: this, type: params.joint.type });
  
        var newz = VEC4.unit(params.joint.axis);
        var newo = params.joint.q;
  
        var oldFrame = Kinematik.INERTIAL_FRAME;
        if (this.parent instanceof KinematicLink) {
          oldFrame = this.parent.frame;
        }
        var v = VEC4.sub(newo, oldFrame.o);
  
        var newDH = new DenavitHartenberg();
  
        //when assigning joint i, compute
        //D-H for frame i-1.
  
        //check if new z is parallel to old z.
        if (VEC4.zero(VEC4.x(newz, oldFrame.z))) {
  
          //old and new z-axes are parallel.
          newDH.alf = 0;  //z-axis not rotated, alf is 0.
          newDH.d = 0;    //d is free parameter, 0 by convention.
  
          //common normal vector
          var n = VEC4.sub(v,
            VEC4.mul(VEC4.dot(v, oldFrame.z), oldFrame.z));
  
          if (VEC4.zero(n)) {
            newDH.r = 0;  //new and old origins colinear along z
            newDH.th = 0; //new x arbitrary, is old x by convention.
          } else {
            newDH.r = VEC4.mag(n);
            var newx = VEC4.unit(n);
            newDH.th = VEC4.ang(n, oldFrame.x, oldFrame.z);
          }
  
        } else {
          //old and new axes are not parallel
  
          //obtain endpoints of common normal vector by solving
          //a linear system of equations
          var deltao = VEC4.sub(newo, oldFrame.o)
  
          //where ntip = newo + k newz
          //      ntoe = oldo + t oldz
          var kt = numeric.solve([
            [VEC4.dot(newz, newz), -VEC4.dot(oldFrame.z, newz)],
            [VEC4.dot(newz, oldFrame.z), -VEC4.dot(oldFrame.z, oldFrame.z)],
          ], [
            -VEC4.dot(deltao, newz),
            -VEC4.dot(deltao, oldFrame.z),
          ]);
  
          //endpoints of normal vector.
          var ntip = VEC4.add(newo, VEC4.mul(kt[0], newz));
          var ntoe = VEC4.add(oldFrame.o, VEC4.mul(kt[1], oldFrame.z));
  
          var n = VEC4.sub(ntip, ntoe);
  
          newDH.d = kt[1]; //offset along old axis to common normal
          var newx;
  
          //check if n is zero
          if (VEC4.zero(n)) {
            //two lines coplanar
            newDH.r = 0;
            newx = VEC4.unit(VEC4.x(oldFrame.z, newz));  //new x the common normal
          } else {
            //old and new axes not coplanar
            newDH.r = VEC4.mag(n);
            newx = VEC4.unit(n);
          }
          newDH.th = VEC4.ang(newx, oldFrame.x, oldFrame.z);
          newDH.alf = VEC4.ang(newz, oldFrame.z, n);
  
        }
  
        this.DH = newDH;
        this.updateDataFromDH();
        var jointv = VEC4.sub(params.joint.q, this.frame.o);
        this.jointOffset = [
          VEC4.dot(jointv, this.frame.x),
          VEC4.dot(jointv, this.frame.y),
          VEC4.dot(jointv, this.frame.z),
          1
        ];
  
        //since DH parameters after initialisation may be nonzero &
        //joint ranges were specified w.r.t. initial configuration,
        //update internal joint range limits.
        this.jointRange[0] += (this.jointType === Kinematik.JOINT_TYPE.REVOLUTE
          ? this.DH.th : this.DH.d);
        this.jointRange[1] += (this.jointType === Kinematik.JOINT_TYPE.REVOLUTE
          ? this.DH.th : this.DH.d);
  
  
        //set child joint range. These are temp. values and
        //will be updated when child is initialised.
        this.child.jointRange = params.joint.range || [-Infinity, Infinity];
        if (params.joint.range) {
          this.child.jointRange = [params.joint.range[0], params.joint.range[1]];
        }
  
  
  
      } else {
        //OTHER METHODS OF SPECIFYING LINKAGES NOT SUPPORTED YET.
      }
    }
  
    initVisual(params, propagate) {
      //add to THREE.js scene relevant meshes for visualisation
  
      //IMPORTANT: only call this function for links w/ children.
      //links with no children yet without their D-H parameters
      //calculated will not render correctly.
      if (!(this.child instanceof KinematicLink)) { return; }
      if (this.visual) {
        //initVisual already called, prevent repeated calls.
      } else {
  
        //params {scene, renderer}
        var scene = params.scene;
        var renderer = params.renderer;
        var materialColour = params.materialColour || 0xffffff;
  
        //initialise visuals of auxiliary objects as well
        this.frame.initVisual(params);
  
        //initialise visuals: corresponding elements
        //in the webGL environment
        //parameters that define the appearance of objects
        this.visual = {
          SHAFT_THICKNESS: 0.02,
          JOINT_THICKNESS: { TIP: 0.04, TOE: 0.06 },
          JOINT_HEIGHT: { TIP: 0.06, TOE: 0.04 },
          MATERIAL: new THREE.MeshPhongMaterial({ color: materialColour })
        };
  
        //connect to parent frame if parent frame exists,
        //otherwise connect to origin (case for link 0)
  
        /*
        var tip = VEC4.fromthis.VEC4inFrame(this.jointOffset, this.frame);
        var toe = [0, 0, 0, 1];
        if(this.parent instanceof kinematik.KinematicLink){
          toe = VEC4.fromthis.VEC4inFrame(this.parent.jointOffset, this.parent.frame);
        }
        var shaftLength = VEC4.mag(VEC4.sub(tip,toe));
        */
  
        //add shaft of appropirate thickness to scene.
        //length will be scaled with the synVisual() method.
        this.visual.shaft = new THREE.Mesh(
          new THREE.CubeGeometry(this.visual.SHAFT_THICKNESS,
            this.visual.SHAFT_THICKNESS, 1),
          this.visual.MATERIAL); scene.add(this.visual.shaft);
  
        this.visual.tipJoint = new THREE.Mesh(
          new THREE.CylinderGeometry(this.visual.JOINT_THICKNESS.TIP / 2,
            this.visual.JOINT_THICKNESS.TIP / 2,
            this.visual.JOINT_HEIGHT.TIP, 16),
          this.visual.MATERIAL); scene.add(this.visual.tipJoint);
  
        if (this.parent instanceof KinematicLink) {
          //the joint connecting link i and link i-1:
          //check for existence of link i-1 first
          this.visual.toeJoint = new THREE.Mesh(
            new THREE.CylinderGeometry(this.visual.JOINT_THICKNESS.TOE / 2,
              this.visual.JOINT_THICKNESS.TOE / 2,
              this.visual.JOINT_HEIGHT.TOE, 16),
            this.visual.MATERIAL); scene.add(this.visual.toeJoint);
        }
      }
  
      if (propagate && this.child instanceof KinematicLink) {
        this.child.initVisual(params, propagate);
      }
    }
    syncVisual(propagate) {
      //update visual representation according to link data.
  
      //only links with children will have properly assigned parameters.
      if (!(this.child instanceof KinematicLink)) { return; }
  
      //sync visuals of auxiliary objects as well
      this.frame.syncVisual();
  
      //Position & orient shaft
      var tip = VEC4.fromVec4inFrame(this.jointOffset, this.frame);
      var toe = [0, 0, 0, 1];
      if (this.parent instanceof KinematicLink) {
        toe = VEC4.fromVec4inFrame(this.parent.jointOffset, this.parent.frame);
      }
      var shaftVector = VEC4.sub(tip, toe);
      var shaftCentre = VEC4.mul(0.5, VEC4.add(tip, toe));
      var shaftLength = VEC4.mag(shaftVector);
      this.visual.shaft.scale.set(1, 1, shaftLength + this.visual.SHAFT_THICKNESS);
      this.visual.shaft.position.fromArray(shaftCentre);
      var shaftUp = Math.abs(VEC4.dot(shaftVector, this.frame.z))
        > Math.abs(VEC4.dot(shaftVector, this.frame.x)) ?
        this.frame.x : this.frame.z;
  
      this.visual.shaft.up = VEC4.vec4toTHREEvector3(shaftUp);
      this.visual.shaft.lookAt(VEC4.vec4toTHREEvector3(toe));
  
      //Position & orient joint between i and i+i
      this.visual.tipJoint.position.fromArray(tip);
      this.visual.tipJoint.up = VEC4.vec4toTHREEvector3(this.frame.z);
      this.visual.tipJoint.lookAt(VEC4.vec4toTHREEvector3(VEC4.add(tip, this.frame.x)));
  
      if (this.parent instanceof KinematicLink) {
        //Position & orient joint between i and i-1 if such a joint exists
        this.visual.toeJoint.position.fromArray(toe);
        this.visual.toeJoint.up = VEC4.vec4toTHREEvector3(this.parent.frame.z);
        this.visual.toeJoint.lookAt(VEC4.vec4toTHREEvector3(VEC4.add(toe, this.parent.frame.x)));
      }
  
  
      if (propagate && (this.child instanceof KinematicLink)) {
        this.child.syncVisual(true);
      }
    }  
  }
  
  