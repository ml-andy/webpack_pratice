var HeaderModel = require('./HeaderModel.js');

class Index {
    constructor() {
        console.log('Index constructor');
        this.HeaderModel = new HeaderModel();
        
        $(window).load(function(){
          this.window_load();
        }.bind(this));
    }
    window_load(){
      console.log('12345');

      // $('.loading').fadeOut();
    }
}

module.exports = Index;