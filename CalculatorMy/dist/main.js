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

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".container {\\n  background-color: #2e878a;\\n  max-width: 400px;\\n  height: 10rem;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border-radius: 20px; }\\n\\n.calc {\\n  max-width: 80%; }\\n  .calc .calc__input {\\n    border-radius: 5px; }\\n  .calc .calc_padding {\\n    padding: 5px 10px; }\\n  .calc .calc__result {\\n    background-color: white;\\n    border-radius: 5px; }\\n  .calc .calc__equal {\\n    margin: 0 10px; }\\n\\n.calc__calculate {\\n  margin-top: 0.5rem;\\n  background-color: #2e879a;\\n  color: white; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_core_parserString_parserString_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/core/parserString/parserString.js */ \"./src/scripts/core/parserString/parserString.js\");\n/* harmony import */ var _scripts_core_calcResult_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/core/calcResult.js */ \"./src/scripts/core/calcResult.js\");\n\n\n\n\ntry {\n  function getStr(elem) {\n    return elem.value;\n  }\n\n  let elemResult = document.querySelector('.calc__result');\n  document.querySelector('.calc__calculate').addEventListener('click', e => {\n    e.preventDefault();\n    let str = getStr(document.querySelector('.calc__input')); //alert(str);\n\n    let result = _scripts_core_calcResult_js__WEBPACK_IMPORTED_MODULE_2__[\"calc\"].calcResult(Object(_scripts_core_parserString_parserString_js__WEBPACK_IMPORTED_MODULE_1__[\"parserString\"])(str)).toFixed(3); //alert(result);\n\n    elemResult.innerHTML = result;\n    console.log('Результат = ' + result);\n  });\n} catch (err) {\n  console.log('Виникла помилка:' + err.message);\n}\n/*\r\nconst p = new Parser();\r\n\r\nfunction evaluateAsFloat(code) {\r\n    function evaluate(obj) {\r\n        switch (obj.type) {\r\n        case \"number\":  return parseInt(obj.value);\r\n        case \"+\":  return add(evaluate(obj.left), evaluate(obj.right));\r\n        // todo: добавить остальные операции, написать на них тесты \r\n        }\r\n    }\r\n    return evaluate(p.parse(code));\r\n}\r\n\r\n// работает только с \"+\", добавьте остальные операции \r\nconsole.log(evaluateAsFloat('1 + 2 + 3 + 47'));\r\n*/\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scripts/core/add/add.js":
/*!*************************************!*\
  !*** ./src/scripts/core/add/add.js ***!
  \*************************************/
/*! exports provided: add */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\nconst add = (a, b) => a + b;\n\n\n\n//# sourceURL=webpack:///./src/scripts/core/add/add.js?");

/***/ }),

/***/ "./src/scripts/core/calcResult.js":
/*!****************************************!*\
  !*** ./src/scripts/core/calcResult.js ***!
  \****************************************/
/*! exports provided: calc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calc\", function() { return calc; });\n/* harmony import */ var _add_add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add/add.js */ \"./src/scripts/core/add/add.js\");\n/* harmony import */ var _subtract_subtract_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subtract/subtract.js */ \"./src/scripts/core/subtract/subtract.js\");\n/* harmony import */ var _multiply_multiply_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multiply/multiply.js */ \"./src/scripts/core/multiply/multiply.js\");\n/* harmony import */ var _divide_divide_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./divide/divide.js */ \"./src/scripts/core/divide/divide.js\");\n\n\n\n\n\nclass CalcResult {\n  constructor() {\n    this.stec_numbers = [];\n    this.stec_actions = [];\n    this.action_priority = {\n      '+': 1,\n      '-': 1,\n      '*': 2,\n      '/': 2\n    };\n    this.result = 'NO';\n  }\n\n  ifNumber(number) {\n    this.stec_numbers.push(number); //console.log(this.stec_numbers);\n  }\n\n  ifAction(action) {\n    let last_action = this.stec_actions[this.stec_actions.length - 1] || false;\n\n    while (last_action !== false && this.action_priority[action] <= this.action_priority[last_action]) {\n      this.calculate();\n      last_action = this.stec_actions[this.stec_actions.length - 1] || false;\n    }\n\n    this.stec_actions.push(action); //console.log(this.stec_actions);\n  }\n\n  ifParenthesis(item) {\n    if (item == '(') {\n      this.stec_actions.push(item);\n    } else {\n      while (this.stec_actions[this.stec_actions.length - 1] !== '(') {\n        this.calculate();\n      }\n\n      this.stec_actions.pop();\n    }\n\n    ;\n  }\n\n  calculate() {\n    let last = {},\n        num;\n    last.number = this.stec_numbers[this.stec_numbers.length - 1] || false;\n    last.prev_number = this.stec_numbers[this.stec_numbers.length - 2] || false;\n    last.action = this.stec_actions[this.stec_actions.length - 1] || false; //if (last.prev_number === false) {console.log(\"last.number=\"+last.number); return;}\n\n    switch (last.action) {\n      case \"+\":\n        num = Object(_add_add_js__WEBPACK_IMPORTED_MODULE_0__[\"add\"])(+last.prev_number, +last.number);\n        break;\n\n      case \"-\":\n        num = Object(_subtract_subtract_js__WEBPACK_IMPORTED_MODULE_1__[\"subtract\"])(last.prev_number, last.number);\n        break;\n\n      case \"*\":\n        num = Object(_multiply_multiply_js__WEBPACK_IMPORTED_MODULE_2__[\"multiply\"])(last.prev_number, last.number);\n        break;\n\n      case \"/\":\n        num = Object(_divide_divide_js__WEBPACK_IMPORTED_MODULE_3__[\"divide\"])(last.prev_number, last.number);\n        break;\n    }\n\n    this.stec_numbers.splice(-2, 2);\n    this.stec_numbers.push(num);\n    this.stec_actions.pop();\n  }\n\n  calcResult(arr) {\n    try {\n      for (let i = 0; i < arr.length; i++) {\n        if (arr[i].search(/\\d+/) != -1) {\n          this.ifNumber(arr[i]);\n        } else if (arr[i].search(/[-+*\\/]/) != -1) {\n          this.ifAction(arr[i]);\n        } else if (arr[i].search(/[()]/) != -1) {\n          this.ifParenthesis(arr[i]);\n        }\n      }\n\n      while (this.stec_actions[this.stec_actions.length - 1]) this.calculate();\n\n      return this.stec_numbers[0];\n    } catch (err) {\n      throw new Error(err.message);\n    }\n  }\n\n}\n\nconst calc = new CalcResult();\n\n\n//# sourceURL=webpack:///./src/scripts/core/calcResult.js?");

/***/ }),

/***/ "./src/scripts/core/divide/divide.js":
/*!*******************************************!*\
  !*** ./src/scripts/core/divide/divide.js ***!
  \*******************************************/
/*! exports provided: divide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"divide\", function() { return divide; });\nconst divide = (a, b) => {\n  if (b != 0) return a / b;else throw new Error('Ділення на нуль неможливе');\n};\n\n\n\n//# sourceURL=webpack:///./src/scripts/core/divide/divide.js?");

/***/ }),

/***/ "./src/scripts/core/multiply/multiply.js":
/*!***********************************************!*\
  !*** ./src/scripts/core/multiply/multiply.js ***!
  \***********************************************/
/*! exports provided: multiply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"multiply\", function() { return multiply; });\nconst multiply = (a, b) => a * b;\n\n//# sourceURL=webpack:///./src/scripts/core/multiply/multiply.js?");

/***/ }),

/***/ "./src/scripts/core/parserString/parserString.js":
/*!*******************************************************!*\
  !*** ./src/scripts/core/parserString/parserString.js ***!
  \*******************************************************/
/*! exports provided: parserString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parserString\", function() { return parserString; });\nconst parserString = str => {\n  const validate = str => {\n    if (/^[-+()*\\.\\/0-9\\s]+$/.test(str)) {\n      try {\n        //console.log('eval ='+ eval(str));\n        return true;\n      } catch (err) {\n        throw new Error(\"Помилка: \" + err.message); //alert(\"Помилка: \" + e.message);\n\n        return false;\n      }\n\n      ;\n    } else {\n      throw new Error('Можна вводити числа та  знаки: «+», «-», «*», «/», «(» и «)».'); //alert('Можна вводити числа та  знаки: «+», «-», «*», «/», «(» и «)».');\n\n      return false;\n    }\n\n    ;\n  };\n\n  let arr = [];\n\n  if (validate(str)) {\n    arr = str.match(/\\.\\d+|\\d+\\.?\\d*|./g);\n  } //console.log('arr='+ arr);\n\n\n  return arr;\n};\n\n\n\n//# sourceURL=webpack:///./src/scripts/core/parserString/parserString.js?");

/***/ }),

/***/ "./src/scripts/core/subtract/subtract.js":
/*!***********************************************!*\
  !*** ./src/scripts/core/subtract/subtract.js ***!
  \***********************************************/
/*! exports provided: subtract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subtract\", function() { return subtract; });\nconst subtract = (a, b) => a - b;\n\n\n\n//# sourceURL=webpack:///./src/scripts/core/subtract/subtract.js?");

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