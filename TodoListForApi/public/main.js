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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".todo {\\n  width: 100vw;\\n  height: 100vh;\\n  position: relative;\\n  background-color: #f0efe9;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center; }\\n  .todo .todo__wrapper {\\n    min-width: 280px;\\n    min-height: 500px;\\n    background-color: white;\\n    border-radius: 10px;\\n    position: relative; }\\n\\n.todo__date {\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  padding: 1.5rem 0;\\n  background-color: gainsboro; }\\n  .todo__date .todo__dateMonthYear {\\n    display: flex;\\n    align-items: center; }\\n  .todo__date .todo__dt {\\n    font-size: 2rem;\\n    padding-right: 0.2rem; }\\n\\n.filters {\\n  display: flex;\\n  justify-content: space-around;\\n  padding: 0.2rem 1rem; }\\n  .filters .filters_button {\\n    padding: 0.3rem 0.5rem;\\n    border-radius: 7px;\\n    border: none;\\n    background-color: rgba(80, 227, 164, 0.95);\\n    color: white;\\n    cursor: pointer; }\\n  .filters .filters__not-finished.active, .filters .filters__not-finished:hover {\\n    background-color: #289d9a; }\\n  .filters .filters__out-dated.active, .filters .filters__out-dated:hover {\\n    background-color: #289d9a; }\\n  .filters .filters__tomorrow.active, .filters .filters__tomorrow:hover {\\n    background-color: #289d9a; }\\n\\n.todo__header {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 0 0.3rem;\\n  background-color: #fafafa; }\\n\\n.todo__list {\\n  padding: 0.3rem 0.3rem 3rem 0.3rem; }\\n  .todo__list .todo__item {\\n    display: flex;\\n    justify-content: space-between; }\\n\\n.todo__buttons {\\n  display: flex;\\n  justify-content: space-arround;\\n  position: absolute;\\n  top: 100%;\\n  left: 50%;\\n  transform: translateY(-1.5rem) translateX(-50%); }\\n  .todo__buttons .todo__button {\\n    width: 3rem;\\n    height: 3rem;\\n    background-color: rgba(80, 227, 164, 0.95);\\n    border-radius: 50%;\\n    border: none;\\n    outline: none;\\n    margin: 0 0.2rem; }\\n  .todo__buttons .todo__button:hover {\\n    cursor: pointer;\\n    background-color: rgba(40, 157, 154, 0.95); }\\n  .todo__buttons .button__add:before {\\n    content: '';\\n    display: inline-block;\\n    width: 50%;\\n    height: 50%;\\n    border-top: 4px solid white;\\n    transform: translateY(80%); }\\n  .todo__buttons .button__add:after {\\n    content: '';\\n    display: inline-block;\\n    width: 45%;\\n    height: 45%;\\n    border-right: 4px solid white;\\n    transform: translateY(-80%) translateX(-40%); }\\n  .todo__buttons .button__clear:after {\\n    content: 'clear';\\n    color: white;\\n    font-weight: bold;\\n    display: inline-block; }\\n\\n.delMark {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center; }\\n  .delMark .delMark__delete, .delMark .delMark__mark {\\n    margin: 0 0.2rem;\\n    width: 1.5rem;\\n    height: 1.5rem;\\n    display: inline-block;\\n    border: 1px solid #c8c8c8;\\n    border-radius: 50%;\\n    outline: none; }\\n    .delMark .delMark__delete:hover, .delMark .delMark__mark:hover {\\n      cursor: pointer;\\n      background-color: #507fa4; }\\n  .delMark .delMark__delete :before {\\n    content: '';\\n    display: inline-block;\\n    width: 100%;\\n    height: 100%;\\n    border-top: 2px solid black;\\n    transform: translateY(45%) translateX(0%); }\\n  .delMark .delMark__mark:before {\\n    content: '';\\n    display: inline-block;\\n    width: 5%;\\n    height: 50%;\\n    border-left: 2px solid black;\\n    transform: rotate(-45deg); }\\n  .delMark .delMark__mark:after {\\n    content: '';\\n    display: inline-block;\\n    width: 50%;\\n    height: 50%;\\n    border-right: 2px solid black;\\n    transform: translateX(-15%) translateY(-25%) rotate(45deg); }\\n  .delMark .mark {\\n    background-color: #50e3a4; }\\n\\nbutton.delMark__mark.mark:before {\\n  border-left: 2px solid white; }\\n\\nbutton.delMark__mark.mark:after {\\n  border-right: 2px solid white; }\\n\\n.add-todo {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  position: absolute;\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n  z-index: 2;\\n  background-color: rgba(0, 0, 0, 0.5); }\\n  .add-todo .add-todo__close {\\n    width: 1.5rem;\\n    height: 1.5rem;\\n    border-radius: 50%;\\n    font-size: 1.5rem;\\n    font-weight: bold;\\n    background-color: rgba(150, 150, 150, 0.9);\\n    line-height: 1.5rem;\\n    position: absolute;\\n    top: 0.5rem;\\n    right: 0.5rem;\\n    cursor: pointer; }\\n  .add-todo .add-todo__form {\\n    text-align: center;\\n    position: relative;\\n    background-color: white;\\n    padding: 2rem 0.5rem;\\n    z-index: 3; }\\n  .add-todo.invisible {\\n    z-index: -1; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_core_todoSetDate_todoSetDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/core/todoSetDate/todoSetDate.js */ \"./src/scripts/core/todoSetDate/todoSetDate.js\");\n/* harmony import */ var _scripts_core_addListeners_addListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/core/addListeners/addListeners */ \"./src/scripts/core/addListeners/addListeners.js\");\n/* harmony import */ var _scripts_core_showAllTodo_showAllTodo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/core/showAllTodo/showAllTodo.js */ \"./src/scripts/core/showAllTodo/showAllTodo.js\");\n/* harmony import */ var _scripts_core_todoApi_todoApi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/core/todoApi/todoApi.js */ \"./src/scripts/core/todoApi/todoApi.js\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n // init application\n\nObject(_scripts_core_todoSetDate_todoSetDate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Date());\nlet todoArr = [];\n_scripts_core_todoApi_todoApi_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getTodos().then(result => {\n  todoArr = [].concat(result);\n  console.log(todoArr);\n  Object(_scripts_core_addListeners_addListeners__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(todoArr);\n  Object(_scripts_core_showAllTodo_showAllTodo_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(todoArr);\n}); // TodoList\n// constructor(){\n// //read from local store\n// //init event listeners\n// }\n// this.todos = [];\n// this.renderList = () => {\n//  this.todos.map => // html   \n// }\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scripts/core/addListeners/addListeners.js":
/*!*******************************************************!*\
  !*** ./src/scripts/core/addListeners/addListeners.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _features_addTodo_addTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../features/addTodo/addTodo */ \"./src/scripts/features/addTodo/addTodo.js\");\n/* harmony import */ var _showTodo_showTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../showTodo/showTodo */ \"./src/scripts/core/showTodo/showTodo.js\");\n/* harmony import */ var _features_clearAll_clearAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/clearAll/clearAll */ \"./src/scripts/features/clearAll/clearAll.js\");\n/* harmony import */ var _closeAddTodo_closeAddTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../closeAddTodo/closeAddTodo */ \"./src/scripts/core/closeAddTodo/closeAddTodo.js\");\n/* harmony import */ var _todoFilters_todoFilters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../todoFilters/todoFilters */ \"./src/scripts/todoFilters/todoFilters.js\");\n/* harmony import */ var _core_todoApi_todoApi_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/todoApi/todoApi.js */ \"./src/scripts/core/todoApi/todoApi.js\");\n\n\n\n\n\n\n\nfunction addListeners(todoArr) {\n  let filtersElem = document.querySelector('.filters');\n  filtersElem.addEventListener('click', e => {\n    e.target.classList.toggle('active');\n    Object(_todoFilters_todoFilters__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(todoArr);\n  });\n  let addElem = document.querySelector('.todo__buttons__add');\n  addElem.addEventListener('click', e => {\n    let addTodoElem = document.querySelector('.add-todo');\n    addTodoElem.classList.remove('invisible');\n  });\n  let addTodoForm = document.querySelector('.add-todo__form');\n  addTodoForm.addEventListener('submit', e => {\n    e.preventDefault();\n    let title = document.querySelector('#title').value;\n    document.querySelector('#title').value = '';\n    let dueDate = document.querySelector('#dueDate').value;\n    todoArr = Object(_features_addTodo_addTodo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todoArr, title, dueDate);\n    _core_todoApi_todoApi_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].createTodo({\n      title: title,\n      createdAt: new Date(),\n      dueDate: dueDate,\n      isDone: false\n    }); //localStorage.setItem('todo', JSON.stringify(todoArr));\n\n    Object(_showTodo_showTodo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(todoArr[todoArr.length - 1], todoArr, document.querySelector('.todo__list'));\n  });\n  let clearElem = document.querySelector('.todo__buttons__clear');\n  clearElem.addEventListener('click', e => {\n    todoArr = Object(_features_clearAll_clearAll__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    localStorage.setItem('todo', JSON.stringify(todoArr));\n    let todos = document.querySelectorAll('.todo__item');\n\n    for (let i = 1; i < todos.length; i++) {\n      todos[i].remove();\n    }\n\n    ;\n  });\n  let addTodoElem = document.querySelector('.add-todo');\n  addTodoElem.addEventListener('click', _closeAddTodo_closeAddTodo__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (addListeners);\n\n//# sourceURL=webpack:///./src/scripts/core/addListeners/addListeners.js?");

/***/ }),

/***/ "./src/scripts/core/closeAddTodo/closeAddTodo.js":
/*!*******************************************************!*\
  !*** ./src/scripts/core/closeAddTodo/closeAddTodo.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction closeAddTodo(e) {\n  if (e.target.className == 'add-todo' || e.target.className == 'add-todo__close' || e.target.className == 'add-todo__submit') e.target.closest('.add-todo').classList.add('invisible');\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (closeAddTodo);\n\n//# sourceURL=webpack:///./src/scripts/core/closeAddTodo/closeAddTodo.js?");

/***/ }),

/***/ "./src/scripts/core/showAllTodo/showAllTodo.js":
/*!*****************************************************!*\
  !*** ./src/scripts/core/showAllTodo/showAllTodo.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _showTodo_showTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../showTodo/showTodo.js */ \"./src/scripts/core/showTodo/showTodo.js\");\n\n\nfunction showAllTodo(mas) {\n  let arr = [].concat(mas);\n  let elem = document.querySelector('.todo__list');\n  elem.innerHTML = '';\n\n  for (let i = 0; i < arr.length; i++) {\n    Object(_showTodo_showTodo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr[i], arr, elem);\n  }\n\n  ; //return arr;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (showAllTodo);\n\n//# sourceURL=webpack:///./src/scripts/core/showAllTodo/showAllTodo.js?");

/***/ }),

/***/ "./src/scripts/core/showTodo/showTodo.js":
/*!***********************************************!*\
  !*** ./src/scripts/core/showTodo/showTodo.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _features_deleteTodo_deleteTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../features/deleteTodo/deleteTodo */ \"./src/scripts/features/deleteTodo/deleteTodo.js\");\n/* harmony import */ var _features_markTodo_markTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../features/markTodo/markTodo */ \"./src/scripts/features/markTodo/markTodo.js\");\n/* harmony import */ var _core_todoApi_todoApi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/todoApi/todoApi.js */ \"./src/scripts/core/todoApi/todoApi.js\");\n\n\n\n\nfunction createTitle(todo) {\n  let titleP = document.createElement('p');\n  titleP.innerHTML = todo.title;\n  titleP.dataset.id = todo.id;\n  /*titleP.dataset.title = todo.title;\r\n  titleP.dataset.createdAt = todo.createdAt;\r\n  titleP.dataset.dueDate = todo.dueDate;\r\n  titleP.dataset.isDone = todo.isDone;*/\n\n  return titleP;\n} // const node = createElement('button', 'span__delete', () => {} );\n\n\nfunction createDeleteBt(todo, mas) {\n  let arr = [].concat(mas);\n  let iconDelete = document.createElement('button');\n\n  iconDelete.onclick = e => {\n    let todoItem = e.target.closest('.todo__item');\n    todoItem.remove();\n    _core_todoApi_todoApi_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deleteTodo(todo.id); //localStorage.setItem('todo', JSON.stringify(deleteTodo(arr, todo.id)));\n  };\n\n  let spanDelete = document.createElement('span');\n  spanDelete.classList.add('span__delete');\n  iconDelete.append(spanDelete);\n  iconDelete.classList.add('delMark__delete');\n  return iconDelete;\n}\n\nfunction createMarkBt(todo, mas) {\n  let arr = [].concat(mas);\n  let iconMark = document.createElement('button');\n  if (todo.isDone) iconMark.classList.add('mark');else iconMark.classList.remove('mark');\n\n  iconMark.onclick = e => {\n    arr = Object(_features_markTodo_markTodo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr, todo);\n    _core_todoApi_todoApi_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].changeTodo(todo); //зчитати дані з локалсторедж, порівняти з arr по id і змінти ті які є в arr\n    //блокувати натискання при вімкнених фільтрах обо не зберігати в локалсторедж (повертати arr )\n    //localStorage.setItem('todo', JSON.stringify(arr));\n\n    e.target.closest('.delMark__mark').classList.toggle('mark');\n  };\n\n  let spanMark = document.createElement('span');\n  spanMark.classList.add('span__mark');\n  iconMark.append(spanMark);\n  iconMark.classList.add('delMark__mark');\n  return iconMark;\n}\n\nfunction showTodo(todo, mas, elem) {\n  let arr = [].concat(mas); // console.log(arr);\n\n  let todoItem = document.createElement('div');\n  let titleP = createTitle(todo);\n  let iconDelete = createDeleteBt(todo, arr);\n  let iconMark = createMarkBt(todo, arr);\n  todoItem.classList.add('todo__item');\n  todoItem.append(titleP);\n  let div = document.createElement('div');\n  div.classList.add('delMark');\n  div.append(iconDelete);\n  div.append(iconMark);\n  todoItem.append(div);\n  elem.append(todoItem);\n  return arr;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (showTodo);\n\n//# sourceURL=webpack:///./src/scripts/core/showTodo/showTodo.js?");

/***/ }),

/***/ "./src/scripts/core/todoApi/todoApi.js":
/*!*********************************************!*\
  !*** ./src/scripts/core/todoApi/todoApi.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nasync function getTodos() {\n  let url = '/api/todos';\n  let response = await fetch(url);\n  let result = await response.json(); //console.log(result);\n\n  return result;\n}\n\nasync function createTodo(todo) {\n  let url = '/api/todos';\n  let response = await fetch(url, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json;charset=utf-8'\n    },\n    body: JSON.stringify(todo)\n  });\n  let result = await response.json(); //console.log(result);\n\n  return result;\n}\n\nasync function changeTodo(todo) {\n  let url = '/api/todos';\n  let response = await fetch(url, {\n    method: 'PUT',\n    headers: {\n      'Content-Type': 'application/json;charset=utf-8'\n    },\n    body: JSON.stringify(todo)\n  });\n  let result = await response.json();\n  console.log(result.isDone);\n  return result;\n}\n\nasync function deleteTodo(id) {\n  let url = '/api/todos/' + id;\n  let response = await fetch(url, {\n    method: 'DELETE',\n    headers: {\n      'Content-Type': 'application/json;charset=utf-8'\n    }\n  });\n  let result = await response.json(); //console.log(result);\n\n  return result;\n}\n\nlet todoApi = {\n  getTodos,\n  createTodo,\n  changeTodo,\n  deleteTodo\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (todoApi); //getTodos();\n//createTodo({title:'Ще одна справа', dueDate:'2020-03-01', createDate:new Date(), isDone:false});\n//changeTodo({id:'1',title:'change todo with id=1', dueDate:'2020-03-01', createDate:new Date(), isDone:false});\n//deleteTodo('2');\n//getTodos();\n\n//# sourceURL=webpack:///./src/scripts/core/todoApi/todoApi.js?");

/***/ }),

/***/ "./src/scripts/core/todoSetDate/todoSetDate.js":
/*!*****************************************************!*\
  !*** ./src/scripts/core/todoSetDate/todoSetDate.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction todoSetDate(date) {\n  let monthes = ['JAN', 'FEB', 'MAT', 'APR', 'MAY', 'JUN', 'JUL', 'AG', 'SEP', 'OCT', 'NOV', 'DECM'];\n  let days = ['SUN', 'MON', 'TU', 'WEN', 'TH', \"FR\", \"SAT\"];\n  document.querySelector('.todo__dt').innerHTML = date.getDate();\n  document.querySelector('.todo__month').innerHTML = monthes[date.getMonth()];\n  document.querySelector('.todo__year').innerHTML = date.getFullYear();\n  document.querySelector('.todo__day').innerHTML = days[date.getDay()];\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (todoSetDate);\n\n//# sourceURL=webpack:///./src/scripts/core/todoSetDate/todoSetDate.js?");

/***/ }),

/***/ "./src/scripts/features/addTodo/addTodo.js":
/*!*************************************************!*\
  !*** ./src/scripts/features/addTodo/addTodo.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction addTodo(mas, title, dueDate) {\n  let arr = [].concat(mas); //let arr = JSON.parse(localStorage.getItem('todo'));\n\n  let id = arr.length ? arr[arr.length - 1].id + 1 : 0;\n  arr.push({\n    id: id,\n    title: title,\n    createdAt: new Date(),\n    dueDate: dueDate,\n    isDone: false\n  });\n  return arr; //localStorage.setItem(title, JSON.stringify({createdAt:new Date(), dueDate:dueDate, isDone:false}))\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (addTodo);\n\n//# sourceURL=webpack:///./src/scripts/features/addTodo/addTodo.js?");

/***/ }),

/***/ "./src/scripts/features/clearAll/clearAll.js":
/*!***************************************************!*\
  !*** ./src/scripts/features/clearAll/clearAll.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction clearAll() {\n  let arr = [];\n  return arr;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (clearAll);\n\n//# sourceURL=webpack:///./src/scripts/features/clearAll/clearAll.js?");

/***/ }),

/***/ "./src/scripts/features/deleteTodo/deleteTodo.js":
/*!*******************************************************!*\
  !*** ./src/scripts/features/deleteTodo/deleteTodo.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction deleteTodo(mas, id) {\n  //let arr = [].concat(mas);\n  let arr = JSON.parse(localStorage.getItem('todo'));\n\n  for (let i = 0; i < arr.length; i++) {\n    if (arr[i].id == id) {\n      arr.splice(i, 1);\n      return arr;\n    }\n  }\n\n  return arr;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (deleteTodo);\n\n//# sourceURL=webpack:///./src/scripts/features/deleteTodo/deleteTodo.js?");

/***/ }),

/***/ "./src/scripts/features/markTodo/markTodo.js":
/*!***************************************************!*\
  !*** ./src/scripts/features/markTodo/markTodo.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction markTodo(mas, todo) {\n  let arr = mas.concat();\n\n  for (let i = 0; i < arr.length; i++) {\n    if (arr[i].id == todo.id) arr[i].isDone = !arr[i].isDone;\n  }\n\n  return arr;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (markTodo);\n\n//# sourceURL=webpack:///./src/scripts/features/markTodo/markTodo.js?");

/***/ }),

/***/ "./src/scripts/todoFilters/notFinished/showNotFinished.js":
/*!****************************************************************!*\
  !*** ./src/scripts/todoFilters/notFinished/showNotFinished.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction showNotFinished(mas) {\n  // mas  = JSON.parse(localStorage.getItem('todo'));\n  let arr = [];\n\n  for (let i = 0; i < mas.length; i++) {\n    if (!mas[i].isDone) arr.push(mas[i]);\n  }\n\n  return arr; // mas.filter(item => !item.isDone)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (showNotFinished);\n\n//# sourceURL=webpack:///./src/scripts/todoFilters/notFinished/showNotFinished.js?");

/***/ }),

/***/ "./src/scripts/todoFilters/outDated/outDated.js":
/*!******************************************************!*\
  !*** ./src/scripts/todoFilters/outDated/outDated.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction outDated(mas) {\n  let arr = [];\n\n  for (let i = 0; i < mas.length; i++) {\n    if (new Date(mas[i].dueDate).getTime() + 24 * 3600 * 1000 < new Date().getTime()) {\n      arr.push(mas[i]);\n    }\n  }\n\n  return arr;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (outDated); // enums\n\nconst timeInMs = {\n  DAY: 24 * 3600 * 1000\n}; //usage\n\ntimeInMs.DAY;\n\n//# sourceURL=webpack:///./src/scripts/todoFilters/outDated/outDated.js?");

/***/ }),

/***/ "./src/scripts/todoFilters/todoFilters.js":
/*!************************************************!*\
  !*** ./src/scripts/todoFilters/todoFilters.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_showAllTodo_showAllTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/showAllTodo/showAllTodo */ \"./src/scripts/core/showAllTodo/showAllTodo.js\");\n/* harmony import */ var _notFinished_showNotFinished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notFinished/showNotFinished */ \"./src/scripts/todoFilters/notFinished/showNotFinished.js\");\n/* harmony import */ var _tomorrow_tomorrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tomorrow/tomorrow */ \"./src/scripts/todoFilters/tomorrow/tomorrow.js\");\n/* harmony import */ var _outDated_outDated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./outDated/outDated */ \"./src/scripts/todoFilters/outDated/outDated.js\");\n\n\n\n\n\nfunction todoFilters(mas) {\n  let activeFilters = document.getElementsByClassName('active');\n  let arr = [].concat(mas);\n\n  if (!activeFilters.length) {\n    Object(_core_showAllTodo_showAllTodo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(mas); //тут зберегти arr в localStorage\n\n    return;\n  }\n\n  for (let i = 0; i < activeFilters.length; i++) {\n    switch (activeFilters[i].classList[0]) {\n      case 'filters__not-finished':\n        arr = Object(_notFinished_showNotFinished__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr);\n        break;\n\n      case 'filters__out-dated':\n        arr = Object(_outDated_outDated__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(arr);\n        break;\n\n      case 'filters__tomorrow':\n        arr = Object(_tomorrow_tomorrow__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr);\n        break;\n\n      default:\n        console.log('not filters');\n        break;\n    }\n  }\n\n  Object(_core_showAllTodo_showAllTodo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (todoFilters);\n\n//# sourceURL=webpack:///./src/scripts/todoFilters/todoFilters.js?");

/***/ }),

/***/ "./src/scripts/todoFilters/tomorrow/tomorrow.js":
/*!******************************************************!*\
  !*** ./src/scripts/todoFilters/tomorrow/tomorrow.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction tomorrow(mas) {\n  let dayInMls = 24 * 60 * 60 * 1000;\n  let arr = [];\n\n  for (let i = 0; i < mas.length; i++) {\n    if (new Date(mas[i].dueDate).getTime() < new Date().getTime() + dayInMls && new Date(mas[i].dueDate).getTime() > new Date()) arr.push(mas[i]);\n  }\n\n  return arr;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tomorrow);\n\n//# sourceURL=webpack:///./src/scripts/todoFilters/tomorrow/tomorrow.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/styles/style.scss?");

/***/ })

/******/ });