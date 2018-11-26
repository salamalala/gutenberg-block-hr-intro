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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/**\n * BLOCK: homepage-intro\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    PlainText = _wp$editor.PlainText,\n    URLInputButton = _wp$editor.URLInputButton,\n    AlignmentToolbar = _wp$editor.AlignmentToolbar,\n    BlockControls = _wp$editor.BlockControls,\n    InspectorControls = _wp$editor.InspectorControls,\n    ColorPalette = _wp$editor.ColorPalette;\nvar Button = wp.components.Button;\n\n\nregisterBlockType('cgb/block-homepage-intro', {\n\n\ttitle: __('Homepage Intro'),\n\ticon: 'controls-play',\n\tcategory: 'hr-home-blocks',\n\tkeywords: [__('Homepage Intro'), __('Homepage')],\n\n\tattributes: {\n\t\talignment: {\n\t\t\ttype: 'string'\n\t\t},\n\t\tblockText: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'text',\n\t\t\tselector: '.intro-block__title'\n\t\t},\n\t\turl: {\n\t\t\ttype: 'string'\n\t\t},\n\t\turlText: {\n\t\t\ttype: 'string'\n\t\t},\n\t\tbuttonText: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'text',\n\t\t\tselector: '.intro-block__text'\n\t\t},\n\t\tbackgroundColor: { // NEW attribute!\n\t\t\ttype: 'string'\n\t\t}\n\t},\n\n\tedit: function edit(_ref) {\n\t\tvar attributes = _ref.attributes,\n\t\t    className = _ref.className,\n\t\t    setAttributes = _ref.setAttributes,\n\t\t    focus = _ref.focus;\n\t\tvar alignment = attributes.alignment;\n\n\n\t\treturn [wp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'h2',\n\t\t\t\t\tnull,\n\t\t\t\t\t'Select a Background color:'\n\t\t\t\t),\n\t\t\t\twp.element.createElement(ColorPalette, {\n\t\t\t\t\tvalue: attributes.backgroundColor,\n\t\t\t\t\tonChange: function onChange(color) {\n\t\t\t\t\t\tsetAttributes({ backgroundColor: color });\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t)\n\t\t), wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className, style: { backgroundColor: attributes.backgroundColor } },\n\t\t\twp.element.createElement(PlainText, {\n\t\t\t\tvalue: attributes.blockText,\n\t\t\t\tplaceholder: 'Your intro text',\n\t\t\t\tclassName: className + '__text',\n\t\t\t\tonChange: function onChange(content) {\n\t\t\t\t\treturn setAttributes({ blockText: content });\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(URLInputButton, {\n\t\t\t\turl: attributes.url,\n\t\t\t\tplaceholder: 'Your url text',\n\t\t\t\tonChange: function onChange(url, post) {\n\t\t\t\t\treturn setAttributes({ url: url, urlText: post && post.title || 'Click here' });\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(PlainText, {\n\t\t\t\tvalue: attributes.buttonText,\n\t\t\t\tplaceholder: 'Button Text',\n\t\t\t\tclassName: 'heading',\n\t\t\t\tonChange: function onChange(content) {\n\t\t\t\t\treturn setAttributes({ buttonText: content });\n\t\t\t\t}\n\t\t\t})\n\t\t)];\n\t},\n\n\tsave: function save(_ref2) {\n\t\tvar attributes = _ref2.attributes;\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'homepage-intro', style: { backgroundColor: attributes.backgroundColor } },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'site-wrapper' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\t{ className: 'homepage-intro__text' },\n\t\t\t\t\tattributes.blockText\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'a',\n\t\t\t\t\t{ href: attributes.url, className: 'homepage-intro__button' },\n\t\t\t\t\tattributes.buttonText\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t},\n\n\tsupports: _defineProperty({\n\t\talign: true\n\t}, 'align', ['full'])\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbi8qKlxuICogQkxPQ0s6IGhvbWVwYWdlLWludHJvXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcbnZhciBfd3AkZWRpdG9yID0gd3AuZWRpdG9yLFxuICAgIFJpY2hUZXh0ID0gX3dwJGVkaXRvci5SaWNoVGV4dCxcbiAgICBQbGFpblRleHQgPSBfd3AkZWRpdG9yLlBsYWluVGV4dCxcbiAgICBVUkxJbnB1dEJ1dHRvbiA9IF93cCRlZGl0b3IuVVJMSW5wdXRCdXR0b24sXG4gICAgQWxpZ25tZW50VG9vbGJhciA9IF93cCRlZGl0b3IuQWxpZ25tZW50VG9vbGJhcixcbiAgICBCbG9ja0NvbnRyb2xzID0gX3dwJGVkaXRvci5CbG9ja0NvbnRyb2xzLFxuICAgIEluc3BlY3RvckNvbnRyb2xzID0gX3dwJGVkaXRvci5JbnNwZWN0b3JDb250cm9scyxcbiAgICBDb2xvclBhbGV0dGUgPSBfd3AkZWRpdG9yLkNvbG9yUGFsZXR0ZTtcbnZhciBCdXR0b24gPSB3cC5jb21wb25lbnRzLkJ1dHRvbjtcblxuXG5yZWdpc3RlckJsb2NrVHlwZSgnY2diL2Jsb2NrLWhvbWVwYWdlLWludHJvJywge1xuXG5cdHRpdGxlOiBfXygnSG9tZXBhZ2UgSW50cm8nKSxcblx0aWNvbjogJ2NvbnRyb2xzLXBsYXknLFxuXHRjYXRlZ29yeTogJ2hyLWhvbWUtYmxvY2tzJyxcblx0a2V5d29yZHM6IFtfXygnSG9tZXBhZ2UgSW50cm8nKSwgX18oJ0hvbWVwYWdlJyldLFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRhbGlnbm1lbnQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnXG5cdFx0fSxcblx0XHRibG9ja1RleHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0c291cmNlOiAndGV4dCcsXG5cdFx0XHRzZWxlY3RvcjogJy5pbnRyby1ibG9ja19fdGl0bGUnXG5cdFx0fSxcblx0XHR1cmw6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnXG5cdFx0fSxcblx0XHR1cmxUZXh0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJ1xuXHRcdH0sXG5cdFx0YnV0dG9uVGV4dDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRzb3VyY2U6ICd0ZXh0Jyxcblx0XHRcdHNlbGVjdG9yOiAnLmludHJvLWJsb2NrX190ZXh0J1xuXHRcdH0sXG5cdFx0YmFja2dyb3VuZENvbG9yOiB7IC8vIE5FVyBhdHRyaWJ1dGUhXG5cdFx0XHR0eXBlOiAnc3RyaW5nJ1xuXHRcdH1cblx0fSxcblxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KF9yZWYpIHtcblx0XHR2YXIgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcblx0XHQgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG5cdFx0ICAgIHNldEF0dHJpYnV0ZXMgPSBfcmVmLnNldEF0dHJpYnV0ZXMsXG5cdFx0ICAgIGZvY3VzID0gX3JlZi5mb2N1cztcblx0XHR2YXIgYWxpZ25tZW50ID0gYXR0cmlidXRlcy5hbGlnbm1lbnQ7XG5cblxuXHRcdHJldHVybiBbd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdFx0XHRudWxsLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdoMicsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHQnU2VsZWN0IGEgQmFja2dyb3VuZCBjb2xvcjonXG5cdFx0XHRcdCksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChDb2xvclBhbGV0dGUsIHtcblx0XHRcdFx0XHR2YWx1ZTogYXR0cmlidXRlcy5iYWNrZ3JvdW5kQ29sb3IsXG5cdFx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGNvbG9yKSB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHsgYmFja2dyb3VuZENvbG9yOiBjb2xvciB9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHQpXG5cdFx0KSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogY2xhc3NOYW1lLCBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6IGF0dHJpYnV0ZXMuYmFja2dyb3VuZENvbG9yIH0gfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChQbGFpblRleHQsIHtcblx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMuYmxvY2tUZXh0LFxuXHRcdFx0XHRwbGFjZWhvbGRlcjogJ1lvdXIgaW50cm8gdGV4dCcsXG5cdFx0XHRcdGNsYXNzTmFtZTogY2xhc3NOYW1lICsgJ19fdGV4dCcsXG5cdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShjb250ZW50KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBibG9ja1RleHQ6IGNvbnRlbnQgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFVSTElucHV0QnV0dG9uLCB7XG5cdFx0XHRcdHVybDogYXR0cmlidXRlcy51cmwsXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiAnWW91ciB1cmwgdGV4dCcsXG5cdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh1cmwsIHBvc3QpIHtcblx0XHRcdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyh7IHVybDogdXJsLCB1cmxUZXh0OiBwb3N0ICYmIHBvc3QudGl0bGUgfHwgJ0NsaWNrIGhlcmUnIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChQbGFpblRleHQsIHtcblx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMuYnV0dG9uVGV4dCxcblx0XHRcdFx0cGxhY2Vob2xkZXI6ICdCdXR0b24gVGV4dCcsXG5cdFx0XHRcdGNsYXNzTmFtZTogJ2hlYWRpbmcnLFxuXHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoY29udGVudCkge1xuXHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgYnV0dG9uVGV4dDogY29udGVudCB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHQpXTtcblx0fSxcblxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKF9yZWYyKSB7XG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBfcmVmMi5hdHRyaWJ1dGVzO1xuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6ICdob21lcGFnZS1pbnRybycsIHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogYXR0cmlidXRlcy5iYWNrZ3JvdW5kQ29sb3IgfSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICdzaXRlLXdyYXBwZXInIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQncCcsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdob21lcGFnZS1pbnRyb19fdGV4dCcgfSxcblx0XHRcdFx0XHRhdHRyaWJ1dGVzLmJsb2NrVGV4dFxuXHRcdFx0XHQpLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2EnLFxuXHRcdFx0XHRcdHsgaHJlZjogYXR0cmlidXRlcy51cmwsIGNsYXNzTmFtZTogJ2hvbWVwYWdlLWludHJvX19idXR0b24nIH0sXG5cdFx0XHRcdFx0YXR0cmlidXRlcy5idXR0b25UZXh0XG5cdFx0XHRcdClcblx0XHRcdClcblx0XHQpO1xuXHR9LFxuXG5cdHN1cHBvcnRzOiBfZGVmaW5lUHJvcGVydHkoe1xuXHRcdGFsaWduOiB0cnVlXG5cdH0sICdhbGlnbicsIFsnZnVsbCddKVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);