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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/dropdown.js":
/*!***************************************!*\
  !*** ./src/js/components/dropdown.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var dropdownList = document.querySelectorAll('.dropdown');
  if (!dropdownList.length) return;
  dropdownList.forEach(function (dropdown) {
    dropdown.querySelector('.dropdown__current-box').addEventListener('click', function () {
      var active = document.querySelector('.dropdown--active');
      if (active && dropdown !== active) {
        active.classList.remove('dropdown--active');
      }
      dropdown.classList.toggle('dropdown--active');
    });
    var current = dropdown.querySelector('.dropdown__value');
    var input = dropdown.querySelector('.dropdown__input');
    var dropdownItems = dropdown.querySelectorAll('.dropdown__list-item');
    dropdownItems.forEach(function (item) {
      item.addEventListener('click', function () {
        current.innerHTML = item.innerHTML;
        input.value = item.querySelector('.dropdown__title').innerText;
        var oldSelected = dropdown.querySelector('.dropdown__list-item--selected');
        oldSelected.classList.remove('dropdown__list-item--selected');
        item.classList.add('dropdown__list-item--selected');
        item.closest('.dropdown').classList.remove('dropdown--active');
      });
    });
  });
  document.addEventListener('click', function (evt) {
    return closeAllDropdowns(evt);
  });
  function closeAllDropdowns(evt) {
    if (!(evt !== null && evt !== void 0 && evt.target.closest('.dropdown'))) {
      var activeList = document.querySelectorAll('.dropdown--active');
      activeList.forEach(function (dropdown) {
        dropdown.classList.remove('dropdown--active');
      });
    }
  }
});

/***/ }),

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var profileBox = document.querySelector('.header__profile-box');
profileBox === null || profileBox === void 0 ? void 0 : profileBox.addEventListener('click', function () {
  profileBox.closest('.header__profile').classList.toggle('header__profile--active');
});
var navElemsList = document.querySelectorAll('.header__nav-elem--dropdown');
navElemsList === null || navElemsList === void 0 ? void 0 : navElemsList.forEach(function (navElem) {
  navElem.addEventListener('click', function () {
    navElem.classList.toggle('header__nav-elem--active');
  });
});

/***/ }),

/***/ "./src/js/components/password.js":
/*!***************************************!*\
  !*** ./src/js/components/password.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var passwordsList = document.querySelectorAll('.form-group--password');
passwordsList === null || passwordsList === void 0 ? void 0 : passwordsList.forEach(function (password) {
  var btn = password.querySelector('.form-group__show-btn');
  btn.addEventListener('click', function () {
    //password.classList.toggle('form-group--password-show')
    var input = password.querySelector('.form-group__input');
    if (password.classList.contains('form-group--password-show')) {
      input.type = "password";
      password.classList.remove('form-group--password-show');
    } else {
      input.type = "text";
      password.classList.add('form-group--password-show');
    }
  });
});

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/components/dropdown.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header */ "./src/js/components/header.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_header__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_password__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/password */ "./src/js/components/password.js");
/* harmony import */ var _components_password__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_password__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

/******/ });
//# sourceMappingURL=main.js.map