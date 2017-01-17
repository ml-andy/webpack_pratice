var Stage = require('./Stage.js');

class Index extends Stage {
    constructor() {
        super();
        $(window).load(()=>{
            this.window_load();
        });
    }
    window_load(){
        console.log('Index load end');
        super.window_load();
    }
}

module.exports = Index;