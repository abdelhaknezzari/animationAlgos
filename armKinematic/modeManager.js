
//ModeManager: manages list of modes with keypresses
class ModeManager {
  MODELIST = [
    'B',
    'FK',
    'IK'
  ];
  MODEINDEX = 0;
  SWITCH_KEY = 'TAB';
  SWITCH_ACTIONS = {};
  CONDITIONALS = {};
  conditional = () => {};
  MODE = this.MODELIST[this.MODEINDEX];

  constructor() {
    window.addEventListener('keydown', this.keydownHandler.bind(this));
  }

  keydownHandler(e) {
    //e.preventDefault();

    if (KEYCHART[e.which] === this.SWITCH_KEY) {
      e.preventDefault();
      ++this.MODEINDEX;
      this.MODEINDEX %= this.MODELIST.length;
      this.MODE = this.MODELIST[this.MODEINDEX];

      console.log(this.MODE);

      //call switch action function if defined
      if (this.SWITCH_ACTIONS[this.MODE]) {
        this.SWITCH_ACTIONS[this.MODE]();
      }
      //update mode function
      if (this.CONDITIONALS[this.MODE]) {
        this.conditional = this.CONDITIONALS[this.MODE];
      } else {
        this.conditional = ()=> {};
      }
    }
  }

}
