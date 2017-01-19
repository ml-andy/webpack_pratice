var Index = require('./modules/Index.js');
require('../css/common.scss');
require('../index.pug');
require('../images/fake_video.jpg');
require('../images/fb_icon.png');

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
	console.log('this is index');
    var app = new App();
});