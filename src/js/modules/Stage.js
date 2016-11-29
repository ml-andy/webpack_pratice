var HeaderModel = require('./HeaderModel.js');
class Stage {
    constructor() {
        console.log('Stage constructor');
        this.HeaderModel = new HeaderModel();
        
    }
    window_load(){
      // this.HeaderModel.init();
      console.log('loading FadeOut');
    }
}

module.exports = Stage;