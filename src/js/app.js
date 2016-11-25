var Index = require('./modules/Index.js');
require('../css/common.scss');

$(function() {
	var wrapper = $('.wrapper');
	switch (wrapper.attr('class').split('wrapper ')[1]) {
		case 'index':
			this.Index = new Index();
		break;
	}
});