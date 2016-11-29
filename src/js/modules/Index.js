var Stage = require('./Stage.js');

class Index extends Stage {
    constructor() {
        super();
        // super().HeaderModel.test();
        $(window).load(()=>{
            this.window_load();
        });
    }
    window_load(){
        console.log('about load end');
        super.window_load();
    }
}

module.exports = Index;