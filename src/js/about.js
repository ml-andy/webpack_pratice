var Index = require('./modules/Index.js');
require('../css/common.scss');
require('../about.pug');

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
    console.log('this is about');
    var app = new App();
});