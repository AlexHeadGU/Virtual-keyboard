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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".keyboard {\\n  display: flex;\\n  gap: 10px 5px;\\n  flex-wrap: wrap;\\n  background-color: #ebdeff;\\n  width: 100%;\\n  user-select: none;\\n  border: 1px solid #e1e6f5;\\n  box-shadow: 0 0 5px #888;\\n  padding: 10px;\\n  border-radius: 10px;\\n}\\n\\n.key {\\n  display: flex;\\n  background-color: #8bb9fd;\\n  justify-content: center;\\n  align-items: center;\\n  border: 1px solid #686666;\\n  width: 50px;\\n  height: 50px;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  box-shadow: 0 0 5px #888;\\n}\\n\\n.press_key, .caps-is-on {\\n  background-color: #0357d2;\\n  animation: animation_reduce 0.1s linear forwards;\\n}\\n\\n@keyframes animation_reduce {\\n  from {\\n    transform: scale(1, 1);\\n  }\\n  to {\\n    transform: scale(0.9, 0.9);\\n  }\\n}\\n.keyOver {\\n  background-color: #227afb;\\n}\\n\\n.wrapper {\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n  width: 873px;\\n  margin: auto;\\n  row-gap: 1rem;\\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\\n}\\n\\n.text_area {\\n  resize: none;\\n  height: 150px;\\n  background-color: #ebdeff;\\n  border: 1px solid #e1e6f5;\\n  box-shadow: 0 0 5px #888;\\n  width: 100%;\\n  border-radius: 10px;\\n  padding: 10px;\\n}\\n\\nh1 {\\n  color: #53315c;\\n  font-size: 2rem;\\n}\\n\\n.instruction {\\n  font-size: 20px;\\n  color: #7c4a8b;\\n  text-align: center;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://myrepovkeyboardjs/./src/sass/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://myrepovkeyboardjs/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://myrepovkeyboardjs/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://myrepovkeyboardjs/./src/sass/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://myrepovkeyboardjs/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://myrepovkeyboardjs/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://myrepovkeyboardjs/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://myrepovkeyboardjs/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://myrepovkeyboardjs/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://myrepovkeyboardjs/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"keyboard\": () => (/* binding */ keyboard)\n/* harmony export */ });\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/createKeysObj */ \"./src/js/createKeysObj.js\");\n\r\n\r\n\r\n// Отрисовка страницы\r\nconst section = document.createElement('section');\r\nconst wrapper = document.createElement('div');\r\nconst title = document.createElement('h1');\r\nconst textArea = document.createElement('textarea');\r\n// eslint-disable-next-line import/prefer-default-export\r\nconst keyboard = document.createElement('div');\r\nconst instruction = document.createElement('div');\r\nconst p = document.createElement('p');\r\n\r\nsection.className = 'main';\r\nwrapper.className = 'wrapper';\r\nkeyboard.className = 'keyboard';\r\np.className = 'instruction';\r\n\r\ntitle.innerHTML = 'Виртуальная клавиатура RSS';\r\ntextArea.placeholder = 'Здесь будет отображаться введенный текст...';\r\ntextArea.classList.add('text_area');\r\np.innerHTML = 'Клавиатура создавалась на операционной системе Windows<br>CTRL + ALT для переключения раскладки';\r\n\r\ndocument.body.append(section);\r\nsection.append(wrapper);\r\nwrapper.append(title);\r\nwrapper.append(textArea);\r\nwrapper.append(keyboard);\r\nwrapper.append(instruction);\r\ninstruction.append(p);\r\n\r\nfor (let i = 0; i < 64; i++) {\r\n  const key = document.createElement('div');\r\n  const div = document.createElement('div');\r\n  key.classList.add('key', _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[i].className);\r\n  keyboard.append(key);\r\n  key.append(div);\r\n  div.classList.add('symbol');\r\n  div.innerHTML = _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[i].symbol;\r\n}\r\n\r\nconst bs = keyboard.children[13];\r\nconst tab = keyboard.children[14];\r\nconst cl = keyboard.children[29];\r\nconst enter = keyboard.children[41];\r\nconst shiftLeft = keyboard.children[42];\r\nconst ctrlLeft = keyboard.children[55];\r\nconst sp = keyboard.children[58];\r\nconst ctrlRight = keyboard.children[60];\r\nconst keysOver = document.querySelectorAll('.key');\r\n\r\nbs.style.width = '130px';\r\ntab.style.width = '71px';\r\ncl.style.width = '135px';\r\nenter.style.width = '100px';\r\nshiftLeft.style.width = '185px';\r\nctrlLeft.style.width = '75px';\r\nsp.style.width = '363px';\r\nctrlRight.style.width = '75px';\r\n\r\n// Функционал кнопок\r\nconst switchDirectShift = () => {\r\n  for (let j = 0; j < 64; j++) {\r\n    if (_js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[j].className === 'key__symbol' && _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[52].symbol === keyboard.children[52].innerText) {\r\n      keyboard.children[j].innerHTML = _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[j].secSymbol;\r\n    } else if (_js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[j].className === 'key__symbol' && _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[52].secSymbol === keyboard.children[52].innerText) {\r\n      keyboard.children[j].innerHTML = _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[j].symbol;\r\n    } else if (_js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[j].className === 'key__symbol' && _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[52].ruSymbol === keyboard.children[52].innerText) {\r\n      keyboard.children[j].innerHTML = _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[j].secRuSymbol;\r\n    } else if (_js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[j].className === 'key__symbol' && _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[52].secRuSymbol === keyboard.children[52].innerText) {\r\n      keyboard.children[j].innerHTML = _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[j].ruSymbol;\r\n    }\r\n    if (_js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[j].className === 'key__number' && _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[12].symbol === keyboard.children[12].innerText) {\r\n      keyboard.children[j].innerHTML = _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[j].secSymbol;\r\n    } else if (_js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[j].className === 'key__number' && _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[12].secSymbol === keyboard.children[12].innerText) {\r\n      keyboard.children[j].innerHTML = _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[j].symbol;\r\n    }\r\n  }\r\n};\r\n\r\nconst switchDirectCaps = () => {\r\n  for (let j = 0; j < 64; j++) {\r\n    if (_js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[j].className === 'key__symbol' && _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[52].symbol === keyboard.children[52].innerText) {\r\n      keyboard.children[j].innerHTML = _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[j].secSymbol;\r\n    } else if (_js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[j].className === 'key__symbol' && _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[52].secSymbol === keyboard.children[52].innerText) {\r\n      keyboard.children[j].innerHTML = _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[j].symbol;\r\n    } else if (_js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[j].className === 'key__symbol' && _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[52].ruSymbol === keyboard.children[52].innerText) {\r\n      keyboard.children[j].innerHTML = _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[j].secRuSymbol;\r\n    } else if (_js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[j].className === 'key__symbol' && _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[52].secRuSymbol === keyboard.children[52].innerText) {\r\n      keyboard.children[j].innerHTML = _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[j].ruSymbol;\r\n    }\r\n  }\r\n};\r\n\r\nconst switchLanguage = () => {\r\n  for (let j = 0; j < 64; j++) {\r\n    if (_js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[j].className === 'key__symbol' && _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[52].symbol === keyboard.children[52].innerText) {\r\n      keyboard.children[j].innerHTML = _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[j].ruSymbol;\r\n    } else if (_js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[j].className === 'key__symbol' && _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[52].secSymbol === keyboard.children[52].innerText) {\r\n      keyboard.children[j].innerHTML = _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[j].secRuSymbol;\r\n    } else if (_js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[j].className === 'key__symbol' && _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[52].ruSymbol === keyboard.children[52].innerText) {\r\n      keyboard.children[j].innerHTML = _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[j].symbol;\r\n    } else if (_js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[j].className === 'key__symbol' && _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[52].secRuSymbol === keyboard.children[52].innerText) {\r\n      keyboard.children[j].innerHTML = _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[j].secSymbol;\r\n    }\r\n  }\r\n};\r\n\r\nconst backspaceDelete = (shift) => {\r\n  const str = textArea.value;\r\n  const position = textArea.selectionStart - 1;\r\n  if (textArea.selectionStart === textArea.selectionEnd) {\r\n    textArea.value = `${str.substring(0, position + shift)}${str.substring(position + shift + 1)}`;\r\n    textArea.selectionStart = position + shift;\r\n    textArea.selectionEnd = textArea.selectionStart;\r\n  } else {\r\n    textArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd, 'end');\r\n  }\r\n};\r\n\r\nconst tabEnterInsert = (value, posValue) => {\r\n  const position = textArea.selectionStart - 1;\r\n  textArea.setRangeText(value, textArea.selectionStart, textArea.selectionEnd, 'end');\r\n  textArea.selectionStart = position + posValue;\r\n  textArea.selectionEnd = textArea.selectionStart;\r\n};\r\n\r\nkeysOver.forEach((element) => {\r\n  element.addEventListener('mouseover', () => {\r\n    element.classList.add('keyOver');\r\n  });\r\n  element.addEventListener('mouseout', () => {\r\n    element.classList.remove('keyOver');\r\n    element.classList.remove('press_key');\r\n  });\r\n  element.addEventListener('mousedown', () => {\r\n    if (element.textContent === 'Shift') {\r\n      switchDirectShift();\r\n    }\r\n    element.classList.add('press_key');\r\n    element.classList.remove('keyOver');\r\n  });\r\n  element.addEventListener('mouseup', () => {\r\n    if (element.textContent === 'Shift') {\r\n      switchDirectShift();\r\n    }\r\n    element.classList.remove('press_key');\r\n  });\r\n\r\n  element.addEventListener('click', (event) => {\r\n    if (element.classList.contains('key__symbol') || element.classList.contains('key__number')) {\r\n      textArea.value += element.textContent;\r\n    } else if (element.textContent === 'DEL') {\r\n      backspaceDelete(1);\r\n    } else if (element.textContent === 'Backspace') {\r\n      backspaceDelete(0);\r\n    } else if (element.textContent === 'Enter') {\r\n      tabEnterInsert('\\n', 2);\r\n    } else if (element.textContent === ' ') {\r\n      tabEnterInsert(' ', 2);\r\n    } else if (element.textContent === 'Caps Lock') {\r\n      cl.classList.toggle('caps-is-on');\r\n      switchDirectCaps();\r\n    } else if (element.textContent === 'Tab') {\r\n      tabEnterInsert('    ', 5);\r\n    } else if (element.textContent === '◄') {\r\n      if (textArea.selectionStart !== 0) {\r\n        textArea.selectionEnd -= 1;\r\n      }\r\n    } else if (element.textContent === '►') {\r\n      if (textArea.selectionStart !== textArea.value.length) {\r\n        textArea.selectionStart += 1;\r\n      }\r\n    } else if (element.textContent === '▼' || element.textContent === '▲') {\r\n      tabEnterInsert(element.textContent, 2);\r\n    }\r\n    event.preventDefault();\r\n    textArea.focus();\r\n  });\r\n});\r\n\r\ndocument.addEventListener('keydown', (event) => {\r\n  for (let i = 0; i < 64; i++) {\r\n    if (event.code === _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[i].code) {\r\n      if (event.key === 'Shift' && !event.repeat) {\r\n        switchDirectShift();\r\n      } else if (event.key === 'Shift' && event.repeat) {\r\n        break;\r\n      } else if (event.key === 'CapsLock') {\r\n        cl.classList.toggle('caps-is-on');\r\n        switchDirectCaps();\r\n      } else if (event.key === 'ArrowLeft') {\r\n        if (textArea.selectionStart !== 0) {\r\n          textArea.selectionEnd -= 1;\r\n        }\r\n      } else if (event.key === 'ArrowRight') {\r\n        if (textArea.selectionStart !== textArea.value.length) {\r\n          textArea.selectionStart += 1;\r\n        }\r\n      } else if (event.key === 'Backspace') {\r\n        backspaceDelete(0);\r\n      } else if (event.key === 'Delete') {\r\n        backspaceDelete(1);\r\n      } else if (event.key === 'Tab') {\r\n        tabEnterInsert('    ', 5);\r\n      } else if (event.key === 'Enter') {\r\n        tabEnterInsert('\\n', 2);\r\n      } else if (event.altKey && event.ctrlKey) {\r\n        switchLanguage();\r\n      } else if (!(event.key === 'Control' || event.key === 'Alt')) {\r\n        tabEnterInsert(keyboard.children[i].textContent, 2);\r\n      }\r\n      keyboard.children[i].classList.add('press_key');\r\n    }\r\n  }\r\n  event.preventDefault();\r\n  textArea.focus();\r\n});\r\n\r\ndocument.addEventListener('keyup', (event) => {\r\n  if (event.key === 'Shift') {\r\n    switchDirectShift();\r\n  }\r\n  for (let i = 0; i < 64; i++) {\r\n    if (event.code === _js_createKeysObj__WEBPACK_IMPORTED_MODULE_1__.keys[i].code) {\r\n      event.preventDefault();\r\n      keyboard.children[i].classList.remove('press_key');\r\n    }\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://myrepovkeyboardjs/./src/index.js?");

/***/ }),

/***/ "./src/js/createKeysObj.js":
/*!*********************************!*\
  !*** ./src/js/createKeysObj.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"keys\": () => (/* binding */ keys)\n/* harmony export */ });\nclass Keys {\r\n  constructor(code, symbol, secSymbol, ruSymbol, secRuSymbol, className) {\r\n    this.code = code;\r\n    this.symbol = symbol;\r\n    this.secSymbol = secSymbol;\r\n    this.ruSymbol = ruSymbol;\r\n    this.secRuSymbol = secRuSymbol;\r\n    this.className = className;\r\n  }\r\n}\r\n\r\n// eslint-disable-next-line import/prefer-default-export\r\nconst keys = [\r\n  new Keys('Backquote', '`', '~', 'ё', 'Ё', 'key__symbol'),\r\n  new Keys('Digit1', '1', '!', null, null, 'key__number'),\r\n  new Keys('Digit2', '2', '@', null, null, 'key__number'),\r\n  new Keys('Digit3', '3', '#', null, null, 'key__number'),\r\n  new Keys('Digit4', '4', '$', null, null, 'key__number'),\r\n  new Keys('Digit5', '5', '%', null, null, 'key__number'),\r\n  new Keys('Digit6', '6', '^', null, null, 'key__number'),\r\n  new Keys('Digit7', '7', '&', null, null, 'key__number'),\r\n  new Keys('Digit8', '8', '*', null, null, 'key__number'),\r\n  new Keys('Digit9', '9', '(', null, null, 'key__number'),\r\n  new Keys('Digit0', '0', ')', null, null, 'key__number'),\r\n  new Keys('Minus', '-', '_', null, null, 'key__number'),\r\n  new Keys('Equal', '=', '+', null, null, 'key__number'),\r\n  new Keys('Backspace', 'Backspace', null, null, null, 'key__manage'),\r\n  new Keys('Tab', 'Tab', null, null, null, 'key__manage'),\r\n  new Keys('KeyQ', 'q', 'Q', 'й', 'Й', 'key__symbol'),\r\n  new Keys('KeyW', 'w', 'W', 'ц', 'Ц', 'key__symbol'),\r\n  new Keys('KeyE', 'e', 'E', 'у', 'У', 'key__symbol'),\r\n  new Keys('KeyR', 'r', 'R', 'к', 'К', 'key__symbol'),\r\n  new Keys('KeyT', 't', 'T', 'е', 'Е', 'key__symbol'),\r\n  new Keys('KeyY', 'y', 'Y', 'н', 'Н', 'key__symbol'),\r\n  new Keys('KeyU', 'u', 'U', 'г', 'Г', 'key__symbol'),\r\n  new Keys('KeyI', 'i', 'I', 'ш', 'Ш', 'key__symbol'),\r\n  new Keys('KeyO', 'o', 'O', 'щ', 'Щ', 'key__symbol'),\r\n  new Keys('KeyP', 'p', 'P', 'з', 'З', 'key__symbol'),\r\n  new Keys('BracketLeft', '[', '{', 'х', 'Х', 'key__symbol'),\r\n  new Keys('BracketRight', ']', '}', 'ъ', 'Ъ', 'key__symbol'),\r\n  new Keys('Backslash', '\\\\', '|', '\\\\', '/', 'key__symbol'),\r\n  new Keys('Delete', 'DEL', null, null, null, 'key__manage'),\r\n  new Keys('CapsLock', 'Caps Lock', null, null, null, 'key__manage'),\r\n  new Keys('KeyA', 'a', 'A', 'ф', 'Ф', 'key__symbol'),\r\n  new Keys('KeyS', 's', 'S', 'ы', 'Ы', 'key__symbol'),\r\n  new Keys('KeyD', 'd', 'D', 'в', 'В', 'key__symbol'),\r\n  new Keys('KeyF', 'f', 'F', 'а', 'А', 'key__symbol'),\r\n  new Keys('KeyG', 'g', 'G', 'п', 'П', 'key__symbol'),\r\n  new Keys('KeyH', 'h', 'H', 'р', 'Р', 'key__symbol'),\r\n  new Keys('KeyJ', 'j', 'J', 'о', 'О', 'key__symbol'),\r\n  new Keys('KeyK', 'k', 'K', 'л', 'Л', 'key__symbol'),\r\n  new Keys('KeyL', 'l', 'L', 'д', 'Д', 'key__symbol'),\r\n  new Keys('Semicolon', ';', ':', 'ж', 'Ж', 'key__symbol'),\r\n  new Keys('Quote', '\\'', '\"', 'э', 'Э', 'key__symbol'),\r\n  new Keys('Enter', 'Enter', null, null, null, 'key__manage'),\r\n  new Keys('ShiftLeft', 'Shift', null, null, null, 'key__manage'),\r\n  new Keys('KeyZ', 'z', 'Z', 'я', 'Я', 'key__symbol'),\r\n  new Keys('KeyX', 'x', 'X', 'ч', 'Ч', 'key__symbol'),\r\n  new Keys('KeyC', 'c', 'C', 'с', 'С', 'key__symbol'),\r\n  new Keys('KeyV', 'v', 'V', 'м', 'М', 'key__symbol'),\r\n  new Keys('KeyB', 'b', 'B', 'и', 'И', 'key__symbol'),\r\n  new Keys('KeyN', 'n', 'N', 'т', 'Т', 'key__symbol'),\r\n  new Keys('KeyM', 'm', 'M', 'ь', 'Ь', 'key__symbol'),\r\n  new Keys('Comma', ',', '<', 'б', 'Б', 'key__symbol'),\r\n  new Keys('Period', '.', '>', 'ю', 'Ю', 'key__symbol'),\r\n  new Keys('Slash', '/', '?', '.', ',', 'key__symbol'),\r\n  new Keys('ArrowUp', '&#9650;', null, null, null, 'key__manage'),\r\n  new Keys('ShiftRight', 'Shift', null, null, null, 'key__manage'),\r\n  new Keys('ControlLeft', 'Ctrl', null, null, null, 'key__manage'),\r\n  new Keys('MetaLeft', 'Win', null, null, null, 'key__manage'),\r\n  new Keys('AltLeft', 'Alt', null, null, null, 'key__manage'),\r\n  new Keys('Space', ' ', null, null, null, 'key__manage'),\r\n  new Keys('AltRight', 'Alt', null, null, null, 'key__manage'),\r\n  new Keys('ControlRight', 'Ctrl', null, null, null, 'key__manage'),\r\n  new Keys('ArrowLeft', '&#9668;', null, null, null, 'key__manage'),\r\n  new Keys('ArrowDown', '&#9660;', null, null, null, 'key__manage'),\r\n  new Keys('ArrowRight', '&#9658;', null, null, null, 'key__manage'),\r\n];\r\n\n\n//# sourceURL=webpack://myrepovkeyboardjs/./src/js/createKeysObj.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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