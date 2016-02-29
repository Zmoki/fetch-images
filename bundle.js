/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _fetchImages = __webpack_require__(2);

	var _fetchImages2 = _interopRequireDefault(_fetchImages);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getImageUrl = function getImageUrl() {
	  // Hash in the end to avoid browser caching images
	  return 'http://lorempixel.com/500/500?h=' + Math.floor(Math.random() * 10000);
	};

	var img = new Image();

	var images = [getImageUrl(), getImageUrl(), img];

	var failImages = [getImageUrl(), 'blah'];

	(0, _fetchImages2.default)(images).then(function (values) {
	  values.map(function (value) {
	    return document.getElementById("result").appendChild(value[0]);
	  });
	}).catch(function (err) {
	  return document.getElementById("error").innerText = err;
	});

	(0, _fetchImages2.default)(failImages).then(function (values) {
	  values.map(function (value) {
	    return document.getElementById("result").appendChild(value[0]);
	  });
	}).catch(function (err) {
	  return document.getElementById("error").innerText = err;
	});

	img.src = getImageUrl();

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function fetchImages(images) {
	  return new Promise(function (resolve, reject) {
	    if (!images || !Array.isArray(images) || !images.length) {
	      reject('Images is not defined.');
	    }

	    var promises = [];

	    images.forEach(function (image) {
	      promises.push(new Promise(function (innerResolve, innerReject) {
	        var isHTMLImageElement = image instanceof HTMLImageElement;

	        if (!isHTMLImageElement && typeof image != 'string') {
	          innerReject(image + ' is not image.');
	        }

	        var img = isHTMLImageElement ? image : new Image();

	        img.addEventListener('load', function () {
	          innerResolve([img, 'completed']);
	        });

	        img.addEventListener('error', function () {
	          innerReject('Error while load ' + image + '.');
	        });

	        img.addEventListener('abort', function () {
	          innerReject('Abort loading ' + image + '.');
	        });

	        if (!isHTMLImageElement) {
	          img.src = image;
	        }
	      }));
	    });

	    Promise.all(promises).then(function (result) {
	      return resolve(result);
	    }).catch(function (error) {
	      return reject(error);
	    });
	  });
	}

	exports.default = fetchImages;

/***/ }
/******/ ]);