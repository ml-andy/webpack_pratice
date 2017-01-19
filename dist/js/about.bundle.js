/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

﻿var Stage = __webpack_require__(3);

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

/***/ },
/* 2 */
/***/ function(module, exports) {

﻿class HeaderModel {
    constructor() {
        console.log('HeaderModel constructor');
        this.wrp = $('.wrapper');
    }
    init(){
        console.log('this is Header init');
    }
}

module.exports = HeaderModel;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

﻿var HeaderModel = __webpack_require__(2);

class Stage {
    constructor() {
        console.log('Stage constructor');
        this.HeaderModel = new HeaderModel();
    }
    window_load(){
      // this.HeaderModel.init();
      console.log('loading out');
    }
}

module.exports = Stage;

/***/ },
/* 4 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

var Index = __webpack_require__(1);
__webpack_require__(0);
__webpack_require__(4);

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

/***/ }
/******/ ]);
//# sourceMappingURL=about.bundle.js.map