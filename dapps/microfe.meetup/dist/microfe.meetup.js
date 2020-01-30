(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@evan.network/ui-dapp-browser"));
	else if(typeof define === 'function' && define.amd)
		define("microfe.meetup.js", ["@evan.network/ui-dapp-browser"], factory);
	else if(typeof exports === 'object')
		exports["microfe.meetup.js"] = factory(require("@evan.network/ui-dapp-browser"));
	else
		root["microfe.meetup.js"] = factory(root["@evan.network/ui-dapp-browser"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__evan_network_ui_dapp_browser__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: startDApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startDApp\", function() { return startDApp; });\n/* harmony import */ var _evan_network_ui_dapp_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @evan.network/ui-dapp-browser */ \"@evan.network/ui-dapp-browser\");\n/* harmony import */ var _evan_network_ui_dapp_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_evan_network_ui_dapp_browser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _test_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.scss */ \"./src/test.scss\");\n/* harmony import */ var _test_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_test_scss__WEBPACK_IMPORTED_MODULE_1__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\nfunction startDApp(container, dbcpName, dappEnsOrContract, dappBaseUrl) {\n    return __awaiter(this, void 0, void 0, function () {\n        var newEl;\n        return __generator(this, function (_a) {\n            console.log(container);\n            console.log(dbcpName);\n            console.log(dappEnsOrContract);\n            console.log(dappBaseUrl);\n            newEl = document.createElement('div');\n            newEl.innerHTML = \"\\n    <div id=\\\"twitest\\\">\\n      my nice dapp!\\n    </div>\\n  \";\n            container.appendChild(newEl);\n            _evan_network_ui_dapp_browser__WEBPACK_IMPORTED_MODULE_0__[\"loading\"].finishDAppLoading();\n            return [2 /*return*/];\n        });\n    });\n}\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taWNyb2ZlLm1lZXR1cC5qcy8uL3NyYy9pbmRleC50cz9mZmI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RDtBQUNuQztBQUVkLFNBQWUsU0FBUyxDQUFDLFNBQWtCLEVBQUUsUUFBZ0IsRUFBRSxpQkFBeUIsRUFBRSxXQUFtQjs7OztZQUNsSCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFbkIsS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxpRUFJakIsQ0FBQztZQUNGLFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IscUVBQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDOzs7O0NBQzdCIiwiZmlsZSI6Ii4vc3JjL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZGluZyB9IGZyb20gJ0BldmFuLm5ldHdvcmsvdWktZGFwcC1icm93c2VyJztcbmltcG9ydCAnLi90ZXN0LnNjc3MnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RhcnREQXBwKGNvbnRhaW5lcjogRWxlbWVudCwgZGJjcE5hbWU6IHN0cmluZywgZGFwcEVuc09yQ29udHJhY3Q6IHN0cmluZywgZGFwcEJhc2VVcmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zb2xlLmxvZyhjb250YWluZXIpO1xuICBjb25zb2xlLmxvZyhkYmNwTmFtZSk7XG4gIGNvbnNvbGUubG9nKGRhcHBFbnNPckNvbnRyYWN0KTtcbiAgY29uc29sZS5sb2coZGFwcEJhc2VVcmwpO1xuXG4gIGNvbnN0IG5ld0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5ld0VsLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGlkPVwidHdpdGVzdFwiPlxuICAgICAgbXkgbmljZSBkYXBwIVxuICAgIDwvZGl2PlxuICBgO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWwpO1xuICBsb2FkaW5nLmZpbmlzaERBcHBMb2FkaW5nKCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/test.scss":
/*!***********************!*\
  !*** ./src/test.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taWNyb2ZlLm1lZXR1cC5qcy8uL3NyYy90ZXN0LnNjc3M/NWIzYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL3NyYy90ZXN0LnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/test.scss\n");

/***/ }),

/***/ "@evan.network/ui-dapp-browser":
/*!************************************************!*\
  !*** external "@evan.network/ui-dapp-browser" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__evan_network_ui_dapp_browser__;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taWNyb2ZlLm1lZXR1cC5qcy9leHRlcm5hbCBcIkBldmFuLm5ldHdvcmsvdWktZGFwcC1icm93c2VyXCI/ZTAyNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAZXZhbi5uZXR3b3JrL3VpLWRhcHAtYnJvd3Nlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZXZhbl9uZXR3b3JrX3VpX2RhcHBfYnJvd3Nlcl9fOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///@evan.network/ui-dapp-browser\n");

/***/ })

/******/ });
});