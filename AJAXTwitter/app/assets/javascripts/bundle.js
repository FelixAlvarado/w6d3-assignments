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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/twitter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/api_util.js":
/*!******************************!*\
  !*** ./frontend/api_util.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



const APIUtil = {

  followUser: id => {
    $.ajax({
      type: 'POST',
      url: `/users/${id}/follow`,
      dataType: 'json',
      success (){
         console.log('just worked!!');
      },
      error(){
         console.log('failed ajax!');
      } ,
    });
  },
  unfollowUser: id => {
    $.ajax({
      type: 'DELETE',
      url: `/users/${id}/follow`,
      dataType: 'json',
      success (){
         console.log('just worked!!');
      },
      error(){
       console.log('failed ajax!');
      } ,
    });
  },
};

module.exports = APIUtil;


/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(/*! ./api_util.js */ "./frontend/api_util.js");

class FollowToggle {
  constructor($el) {
    this.el = $el;
    this.userId = $el.data('user-id');
    this.followState = $el.data('initial-follow-state');
    this.render();
    this.handleClick();
  }

  render() {

    if (this.followState) {
      this.el.html("UNFOLLOW!");
    } else {
      this.el.html("FOLLOW!");
    }



  }

  handleClick() {
    this.el.on('click', (event) => {
    event.preventDefault();
    let method;
    const that = this;

    if (this.followState) {
      APIUtil.unfollowUser(this.userId).then(() => {
        that.followState = !that.followState;
        that.render();
      },
      () => {
        console.log('failed ajax!');
      });
    } else {
      APIUtil.followUser(this.userId).then(() => {

        that.followState = !that.followState;
        that.render();
      },
      () => {
        console.log('failed ajax!');
      });
    }
    // const that = this;
    // $.ajax({
    //   type: method,
    //   url: `/users/${this.userId}/follow`,
    //   dataType: 'json',
    //   success (){
    //     if (that.followState){
    //       that.followState = false;
    //     } else {
    //       that.followState = true;
    //     }
    //     that.render();
    //   } ,
    //   error(){
    //     console.log('failed ajax!');
    //   } ,
    // });
  });
  }

}


module.exports = FollowToggle;


/***/ }),

/***/ "./frontend/twitter.js":
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js");

$(() => {
  $('.follow-toggle').each((function(i, el) {
    new FollowToggle($(el));

  })

  
);

});


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map