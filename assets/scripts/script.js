/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/admin/admin.scss":
/*!************************************!*\
  !*** ./resources/admin/admin.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/admin/editor.scss":
/*!*************************************!*\
  !*** ./resources/admin/editor.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/admin/login.scss":
/*!************************************!*\
  !*** ./resources/admin/login.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/scripts/app.ts":
/*!**********************************!*\
  !*** ./resources/scripts/app.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
// import global from './global.js';
var menu_1 = __webpack_require__(/*! ./lib/menu */ "./resources/scripts/lib/menu.ts");
// import { Map } from './lib/map';
var home_move_1 = __webpack_require__(/*! ./lib/home_move */ "./resources/scripts/lib/home_move.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var menu = new menu_1.Menu('navbar');
        menu.bindMobileBtn('open_menu');
        // Animate logo
        var logo = document.querySelector('#home svg');
        setTimeout(function () {
            logo.classList.add('active');
        }, 500);
        //Animate mouvement home banner
        var movement = new home_move_1.HomeMove('home', 10);
        console.log('Site Start');
    }
    return AppComponent;
}());
exports.AppComponent = AppComponent;
window.addEventListener('DOMContentLoaded', function () {
    new AppComponent();
});


/***/ }),

/***/ "./resources/scripts/lib/home_move.ts":
/*!********************************************!*\
  !*** ./resources/scripts/lib/home_move.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeMove = void 0;
var HomeMove = /** @class */ (function () {
    function HomeMove(id, max) {
        var _this = this;
        this.max = max;
        this.element = document.getElementById(id);
        this.size = {
            x: window.innerWidth,
            y: window.innerHeight,
        };
        this.element.onmousemove = (function (e) {
            var valX = _this.calcMove(e.clientX, _this.size.x);
            var valY = _this.calcMove(e.clientY, _this.size.y);
            _this.element.style.backgroundPosition = String(valX * -1) + 'px ' + String(valY * -1) + 'px';
        });
    }
    HomeMove.prototype.calcMove = function (position, size) {
        var percent = (position * 100) / size;
        return (percent * this.max) / 100;
    };
    return HomeMove;
}());
exports.HomeMove = HomeMove;


/***/ }),

/***/ "./resources/scripts/lib/menu.ts":
/*!***************************************!*\
  !*** ./resources/scripts/lib/menu.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var Menu = /** @class */ (function () {
    function Menu(id) {
        this.id = id;
    }
    /**
     * Bind the btn open and close the menu
     */
    Menu.prototype.bindMobileBtn = function (id) {
        var _this = this;
        var btn = document.getElementById(id);
        var body = document.querySelector('body');
        if (btn != null) {
            btn.addEventListener('click', function (e) {
                btn.classList.toggle('open');
                document.getElementById(_this.id).classList.toggle('open');
                body.classList.toggle('no-scroll');
            });
        }
    };
    return Menu;
}());
exports.Menu = Menu;


/***/ }),

/***/ "./resources/styles/_vendor.scss":
/*!***************************************!*\
  !*** ./resources/styles/_vendor.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/styles/style.scss":
/*!*************************************!*\
  !*** ./resources/styles/style.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi ./resources/scripts/app.ts ./resources/admin/login.scss ./resources/admin/admin.scss ./resources/admin/editor.scss ./resources/styles/_vendor.scss ./resources/styles/style.scss ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/html/portfolio.test/resources/scripts/app.ts */"./resources/scripts/app.ts");
__webpack_require__(/*! /var/www/html/portfolio.test/resources/admin/login.scss */"./resources/admin/login.scss");
__webpack_require__(/*! /var/www/html/portfolio.test/resources/admin/admin.scss */"./resources/admin/admin.scss");
__webpack_require__(/*! /var/www/html/portfolio.test/resources/admin/editor.scss */"./resources/admin/editor.scss");
__webpack_require__(/*! /var/www/html/portfolio.test/resources/styles/_vendor.scss */"./resources/styles/_vendor.scss");
module.exports = __webpack_require__(/*! /var/www/html/portfolio.test/resources/styles/style.scss */"./resources/styles/style.scss");


/***/ })

/******/ });