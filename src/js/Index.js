var Stage = require('./modules/Stage.js');
var Header = require('./modules/Header.js');
require('../index.pug');

class Index extends Stage {
    constructor() {
        super();
        this.Header = new Header();
        console.log('this is index');
        $(window).load(()=>{
            this.window_load();
        });
    }
    window_load(){
        super.window_load();
    }
}

module.exports = Index;