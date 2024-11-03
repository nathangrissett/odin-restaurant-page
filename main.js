/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutLoad: () => (/* binding */ aboutLoad)\n/* harmony export */ });\nfunction aboutLoad () {\n    const content = document.querySelector(\"div#content\");\n    const body = document.querySelector(\"body\");\n    const about = document.createElement(\"div\");\n    const h1 = document.createElement(\"h1\");\n    const p = document.createElement(\"p\");\n\n    h1.innerText = \"About Us\";\n    p.innerText = \"We are the best restaurant in the entire world. Don't believe us? Come check us out and be proven wrong.\"\n\n    content.appendChild(about);\n    about.appendChild(h1);\n    about.appendChild(p);\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/alt.js":
/*!********************!*\
  !*** ./src/alt.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageLoad: () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _restaurant_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../restaurant.webp */ \"./restaurant.webp\");\n\n\nfunction pageLoad () {\n    const content = document.querySelector(\"div#content\");\n    const home = document.createElement(\"div\");\n    const h1 = document.createElement(\"h1\");\n    const p = document.createElement(\"p\");\n    function addImage(alt) {\n        const img = document.createElement('img');\n        img.src = _restaurant_webp__WEBPACK_IMPORTED_MODULE_0__;\n        img.alt = alt;\n        \n        content.appendChild(img);\n    }\n\n    h1.innerText = \"EXAMPLE RESTAURANT\";\n    p.innerText = \"This restaurant is awesome. Insert details here about how awesome this restaurant is. Come eat here to see how awesome it is.\"\n\n    content.appendChild(home);\n    home.appendChild(h1);\n    home.appendChild(p);\n    addImage('Interior of restaurant');\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/alt.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _alt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alt */ \"./src/alt.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\n\nconst content = document.querySelector(\"div#content\");\n\n(0,_alt__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();\n\nconst homeButton = document.querySelector(\"#home\");\nconst menuButton = document.querySelector(\"#menu\");\nconst aboutButton = document.querySelector(\"#about\");\n\nhomeButton.addEventListener(\"click\", function() {\n    content.innerText = \"\";\n    (0,_alt__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();\n});\n\nmenuButton.addEventListener(\"click\", function() {\n    content.innerText = \"\";\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuLoad)();\n});\n\naboutButton.addEventListener(\"click\", function() {\n    content.innerText = \"\";\n    (0,_about__WEBPACK_IMPORTED_MODULE_2__.aboutLoad)();\n});\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuLoad: () => (/* binding */ menuLoad)\n/* harmony export */ });\nfunction menuLoad () {\n    const content = document.querySelector(\"div#content\");    \n    const body = document.querySelector(\"body\");\n    const menu = document.createElement(\"div\");\n    const h1 = document.createElement(\"h1\");\n    const p = document.createElement(\"p\");\n    const h1B = document.createElement('h1');\n    const pB = document.createElement('p');\n    const h1C = document.createElement('h1');\n    const pC = document.createElement('p');\n\n    h1.innerText = \"Fruits\";\n    p.innerText = \"Watermelon, Pineapple, Kiwi, Cantaloupe\"\n    h1B.innerText = \"Vegetables\";\n    pB.innerText = \"Lettuce, Spinach, Broccoli, Asparagus\";\n    h1C.innerText = \"Meats\";\n    pC.innerText = \"Chicken, Fish, Beef, Pork\";\n\n    content.appendChild(menu);\n    menu.appendChild(h1);\n    menu.appendChild(p);\n    menu.appendChild(h1B);\n    menu.appendChild(pB);\n    menu.appendChild(h1C);\n    menu.appendChild(pC);\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./restaurant.webp":
/*!*************************!*\
  !*** ./restaurant.webp ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bea5e558bf85ba869d06.webp\";\n\n//# sourceURL=webpack://odin-restaurant-page/./restaurant.webp?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;