var Index = require('./modules/Index.js');
var appcss = require('../css/common.scss');

class App {
	constructor() {
		this.wrp = $('.wrapper');
		switch (this.wrp.attr('data-page')) {
			case 'index':
				this.index = new Index();
			break;
		}
	}
}

$(()=>{
    var app = new App();
});