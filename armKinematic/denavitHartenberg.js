
class DenavitHartenberg {

    constructor(d, th, r, alf) {
      //structure for D-H parameters
      this.d = d || 0; this.th = th || 0;
      this.r = r || 0; this.alf = alf || 0;
  
    }
  
  
    mat4() {
      //return 4-matrix transformation
      var M = [
        [Math.cos(this.th),
        -Math.sin(this.th) * Math.cos(this.alf),
        Math.sin(this.th) * Math.sin(this.alf),
        this.r * Math.cos(this.th)],
        [Math.sin(this.th),
        Math.cos(this.th) * Math.cos(this.alf),
        -Math.cos(this.th) * Math.sin(this.alf),
        this.r * Math.sin(this.th)],
        [0, Math.sin(this.alf), Math.cos(this.alf), this.d],
        [0, 0, 0, 1]
      ];
      return M;
    }
  
  
  }
  
  