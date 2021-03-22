module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/store */ "./store/store.js");

var _jsxFileName = "C:\\Users\\zengg\\Desktop\\CS499\\final-project-team-10-SpotifyEZ\\pages\\_app.js";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: _store_store__WEBPACK_IMPORTED_MODULE_4__["default"],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2896126945",
      children: "html,body,body>div:first-child,div#__next,div#__next>div{height:100%;background:#034143;background:-webkit-linear-gradient(top left,#034143,#B64A2F);background:-moz-linear-gradient(top left,#034143,#B64A2F);background:linear-gradient(to bottom right,#034143,#B64A2F);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcemVuZ2dcXERlc2t0b3BcXENTNDk5XFxmaW5hbC1wcm9qZWN0LXRlYW0tMTAtU3BvdGlmeUVaXFxwYWdlc1xcX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPdUIsQUFPbUIsWUFDTyxtQkFDNEMsNkRBQ0gsMERBQ0UsNERBQ2hFIiwiZmlsZSI6IkM6XFxVc2Vyc1xcemVuZ2dcXERlc2t0b3BcXENTNDk5XFxmaW5hbC1wcm9qZWN0LXRlYW0tMTAtU3BvdGlmeUVaXFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZS9zdG9yZSdcclxuXHJcbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICBodG1sLFxyXG4gICAgYm9keSxcclxuICAgIGJvZHkgPiBkaXY6Zmlyc3QtY2hpbGQsXHJcbiAgICBkaXYjX19uZXh0LFxyXG4gICAgZGl2I19fbmV4dCA+IGRpdiB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZDogIzAzNDE0MztcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wIGxlZnQsICMwMzQxNDMsICNCNjRBMkYpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AgbGVmdCwgIzAzNDE0MywgI0I2NEEyRik7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMwMzQxNDMsICNCNjRBMkYpO1xyXG4gICAgfTtcclxuICAgIH1cclxuICBgfTwvc3R5bGU+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBtYWtlc3RvcmUgPSAoKSA9PiBzdG9yZVxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihtYWtlc3RvcmUpXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcClcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\zengg\\\\Desktop\\\\CS499\\\\final-project-team-10-SpotifyEZ\\\\pages\\\\_app.js */"
    }, void 0, false, void 0, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
      className: "jsx-2896126945" + " " + (pageProps && pageProps.className != null && pageProps.className || "")
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

const makestore = () => _store_store__WEBPACK_IMPORTED_MODULE_4__["default"];

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__["createWrapper"])(makestore);
/* harmony default export */ __webpack_exports__["default"] = (wrapper.withRedux(MyApp));

/***/ }),

/***/ "./store/reducers/authReducer.js":
/*!***************************************!*\
  !*** ./store/reducers/authReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./store/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  accessToken: '',
  expiresIn: 0,
  expireDate: '',
  isAuthed: 'false'
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_ACCESS_TOKEN"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        accessToken: action.accessToken
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_EXPIRES_IN"]:
      const expireDate = new Date();

      if (action.expiresIn > 0) {
        expireDate.setSeconds(expireDate.getSeconds() + action.expiresIn);
      } else {
        expireDate.setSeconds(expireDate.getSeconds());
      }

      return _objectSpread(_objectSpread({}, state), {}, {
        expiresIn: action.expiresIn,
        expireDate: expireDate.toISOString()
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_IS_AUTHED"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isAuthed: action.isAuthed
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (authReducer);

/***/ }),

/***/ "./store/reducers/index.js":
/*!*********************************!*\
  !*** ./store/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authReducer */ "./store/reducers/authReducer.js");
/* harmony import */ var _userReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userReducer */ "./store/reducers/userReducer.js");
/* harmony import */ var _songReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./songReducer */ "./store/reducers/songReducer.js");
/* harmony import */ var _playlistReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playlistReducer */ "./store/reducers/playlistReducer.js");





const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _authReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  user: _userReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  song: _songReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  playlist: _playlistReducer__WEBPACK_IMPORTED_MODULE_4__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./store/reducers/playlistReducer.js":
/*!*******************************************!*\
  !*** ./store/reducers/playlistReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./store/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {};

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["GET_USER_PLAYLIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        userPlaylist: action.userPlaylist
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["GET_PLAYLIST_BY_ID"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        playlistById: action.playlistById
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["GET_PLAYLISTS_LIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        playlists: action.playlists
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["CLEAR_PLAYLIST_BY_ID"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        playlistById: []
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (playlistReducer);

/***/ }),

/***/ "./store/reducers/songReducer.js":
/*!***************************************!*\
  !*** ./store/reducers/songReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./store/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  genreSeeds: [],
  searchSongs: []
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["GET_GENRE_SEEDS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        genreSeeds: action.genreSeeds
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["GET_RECOMMENDATIONS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        recommendations: action.recommendations
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["GET_SONGS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        searchSongs: action.searchSongs
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["GET_RECENTS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        recentSongs: action.recentSongs
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (songReducer);

/***/ }),

/***/ "./store/reducers/userReducer.js":
/*!***************************************!*\
  !*** ./store/reducers/userReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./store/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const userReducer = (state = {}, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["GET_USER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        user: action.user
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (userReducer);

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./store/reducers/index.js");




const initialState = {};
const middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a];
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware)));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./store/types.js":
/*!************************!*\
  !*** ./store/types.js ***!
  \************************/
/*! exports provided: SET_ACCESS_TOKEN, SET_EXPIRES_IN, SET_IS_AUTHED, GET_USER, GET_GENRE_SEEDS, GET_RECOMMENDATIONS, GET_SONGS, GET_RECENTS, GET_USER_PLAYLIST, GET_PLAYLIST_BY_ID, GET_PLAYLISTS_LIST, CLEAR_PLAYLIST_BY_ID, REMOVE_ITEMS_FROM_PLAYLIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ACCESS_TOKEN", function() { return SET_ACCESS_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_EXPIRES_IN", function() { return SET_EXPIRES_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_IS_AUTHED", function() { return SET_IS_AUTHED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER", function() { return GET_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_GENRE_SEEDS", function() { return GET_GENRE_SEEDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_RECOMMENDATIONS", function() { return GET_RECOMMENDATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SONGS", function() { return GET_SONGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_RECENTS", function() { return GET_RECENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_PLAYLIST", function() { return GET_USER_PLAYLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PLAYLIST_BY_ID", function() { return GET_PLAYLIST_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PLAYLISTS_LIST", function() { return GET_PLAYLISTS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_PLAYLIST_BY_ID", function() { return CLEAR_PLAYLIST_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEMS_FROM_PLAYLIST", function() { return REMOVE_ITEMS_FROM_PLAYLIST; });
// Auth
const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';
const SET_EXPIRES_IN = 'SET_EXPIRES_IN';
const SET_IS_AUTHED = 'SET_IS_AUTHED'; // User

const GET_USER = 'GET_USER'; // Song

const GET_GENRE_SEEDS = 'GET_GENRE_SEEDS';
const GET_RECOMMENDATIONS = 'GET_RECOMMENDATIONS';
const GET_SONGS = 'GET_SONGS';
const GET_RECENTS = 'GET_RECENTS'; // Playlist

const GET_USER_PLAYLIST = 'GET_USER_PLAYLIST';
const GET_PLAYLIST_BY_ID = 'GET_PLAYLIST_BY_ID';
const GET_PLAYLISTS_LIST = 'GET_PLAYLISTS_LIST';
const CLEAR_PLAYLIST_BY_ID = 'CLEAR_PLAYLIST_BY_ID';
const REMOVE_ITEMS_FROM_PLAYLIST = 'REMOVE_ITEMS_FROM_PLAYLIST';

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9hdXRoUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9wbGF5bGlzdFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvc29uZ1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvdXNlclJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJtYWtlc3RvcmUiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsIndpdGhSZWR1eCIsImluaXRpYWxTdGF0ZSIsImFjY2Vzc1Rva2VuIiwiZXhwaXJlc0luIiwiZXhwaXJlRGF0ZSIsImlzQXV0aGVkIiwiYXV0aFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ0eXBlcyIsIkRhdGUiLCJzZXRTZWNvbmRzIiwiZ2V0U2Vjb25kcyIsInRvSVNPU3RyaW5nIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJhdXRoIiwidXNlciIsInVzZXJSZWR1Y2VyIiwic29uZyIsInNvbmdSZWR1Y2VyIiwicGxheWxpc3QiLCJwbGF5bGlzdFJlZHVjZXIiLCJ1c2VyUGxheWxpc3QiLCJwbGF5bGlzdEJ5SWQiLCJwbGF5bGlzdHMiLCJnZW5yZVNlZWRzIiwic2VhcmNoU29uZ3MiLCJyZWNvbW1lbmRhdGlvbnMiLCJyZWNlbnRTb25ncyIsIm1pZGRsZXdhcmUiLCJ0aHVuayIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsIlNFVF9BQ0NFU1NfVE9LRU4iLCJTRVRfRVhQSVJFU19JTiIsIlNFVF9JU19BVVRIRUQiLCJHRVRfVVNFUiIsIkdFVF9HRU5SRV9TRUVEUyIsIkdFVF9SRUNPTU1FTkRBVElPTlMiLCJHRVRfU09OR1MiLCJHRVRfUkVDRU5UUyIsIkdFVF9VU0VSX1BMQVlMSVNUIiwiR0VUX1BMQVlMSVNUX0JZX0lEIiwiR0VUX1BMQVlMSVNUU19MSVNUIiwiQ0xFQVJfUExBWUxJU1RfQllfSUQiLCJSRU1PVkVfSVRFTVNfRlJPTV9QTEFZTElTVCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUE4QjtBQUMxQyxzQkFDRSxxRUFBQyxvREFBRDtBQUFVLFNBQUssRUFBRUMsb0RBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdURBZUUscUVBQUMsU0FBRCxrQ0FBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQW1CRCxDQXBCRDs7QUFzQkEsTUFBTUUsU0FBUyxHQUFHLE1BQU1ELG9EQUF4Qjs7QUFDQSxNQUFNRSxPQUFPLEdBQUdDLHdFQUFhLENBQUNGLFNBQUQsQ0FBN0I7QUFFZUMsc0VBQU8sQ0FBQ0UsU0FBUixDQUFrQlAsS0FBbEIsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUVBLE1BQU1RLFlBQVksR0FBRztBQUNuQkMsYUFBVyxFQUFFLEVBRE07QUFFbkJDLFdBQVMsRUFBRSxDQUZRO0FBR25CQyxZQUFVLEVBQUUsRUFITztBQUluQkMsVUFBUSxFQUFFO0FBSlMsQ0FBckI7O0FBT0EsTUFBTUMsV0FBVyxHQUFHLENBQUNDLEtBQUssR0FBR04sWUFBVCxFQUF1Qk8sTUFBdkIsS0FBa0M7QUFDcEQsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBRUUsU0FBS0MsdURBQUw7QUFDRSw2Q0FDS0gsS0FETDtBQUVFTCxtQkFBVyxFQUFFTSxNQUFNLENBQUNOO0FBRnRCOztBQUtGLFNBQUtRLHFEQUFMO0FBQ0UsWUFBTU4sVUFBVSxHQUFHLElBQUlPLElBQUosRUFBbkI7O0FBQ0EsVUFBSUgsTUFBTSxDQUFDTCxTQUFQLEdBQW1CLENBQXZCLEVBQTBCO0FBQ3hCQyxrQkFBVSxDQUFDUSxVQUFYLENBQXNCUixVQUFVLENBQUNTLFVBQVgsS0FBMEJMLE1BQU0sQ0FBQ0wsU0FBdkQ7QUFDRCxPQUZELE1BRU87QUFDTEMsa0JBQVUsQ0FBQ1EsVUFBWCxDQUFzQlIsVUFBVSxDQUFDUyxVQUFYLEVBQXRCO0FBQ0Q7O0FBQ0QsNkNBQ0tOLEtBREw7QUFFRUosaUJBQVMsRUFBRUssTUFBTSxDQUFDTCxTQUZwQjtBQUdFQyxrQkFBVSxFQUFFQSxVQUFVLENBQUNVLFdBQVg7QUFIZDs7QUFNRixTQUFLSixvREFBTDtBQUNFLDZDQUNLSCxLQURMO0FBRUVGLGdCQUFRLEVBQUVHLE1BQU0sQ0FBQ0g7QUFGbkI7O0FBS0Y7QUFDRSxhQUFPRSxLQUFQO0FBNUJKO0FBOEJELENBL0JEOztBQWlDZUQsMEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1TLFdBQVcsR0FBR0MsNkRBQWUsQ0FBQztBQUNsQ0MsTUFBSSxFQUFFWCxvREFENEI7QUFFbENZLE1BQUksRUFBRUMsb0RBRjRCO0FBR2xDQyxNQUFJLEVBQUVDLG9EQUg0QjtBQUlsQ0MsVUFBUSxFQUFFQyx3REFBZUE7QUFKUyxDQUFELENBQW5DO0FBT2VSLDBFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFFQSxNQUFNZCxZQUFZLEdBQUcsRUFBckI7O0FBR0EsTUFBTXNCLGVBQWUsR0FBRyxDQUFDaEIsS0FBSyxHQUFHTixZQUFULEVBQXVCTyxNQUF2QixLQUFrQztBQUN4RCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLQyx3REFBTDtBQUNFLDZDQUNLSCxLQURMO0FBRUVpQixvQkFBWSxFQUFFaEIsTUFBTSxDQUFDZ0I7QUFGdkI7O0FBSUYsU0FBS2QseURBQUw7QUFDRSw2Q0FDS0gsS0FETDtBQUVFa0Isb0JBQVksRUFBRWpCLE1BQU0sQ0FBQ2lCO0FBRnZCOztBQUlGLFNBQUtmLHlEQUFMO0FBQ0UsNkNBQ0tILEtBREw7QUFFRW1CLGlCQUFTLEVBQUVsQixNQUFNLENBQUNrQjtBQUZwQjs7QUFJRixTQUFLaEIsMkRBQUw7QUFDRSw2Q0FDS0gsS0FETDtBQUVFa0Isb0JBQVksRUFBRTtBQUZoQjs7QUFLRjtBQUNFLGFBQU9sQixLQUFQO0FBdkJKO0FBeUJELENBMUJEOztBQTJCZWdCLDhFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBRUEsTUFBTXRCLFlBQVksR0FBRztBQUNuQjBCLFlBQVUsRUFBRSxFQURPO0FBRW5CQyxhQUFXLEVBQUU7QUFGTSxDQUFyQjs7QUFLQSxNQUFNUCxXQUFXLEdBQUcsQ0FBQ2QsS0FBSyxHQUFHTixZQUFULEVBQXVCTyxNQUF2QixLQUFrQztBQUNwRCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLQyxzREFBTDtBQUNFLDZDQUNLSCxLQURMO0FBRUVvQixrQkFBVSxFQUFFbkIsTUFBTSxDQUFDbUI7QUFGckI7O0FBS0YsU0FBS2pCLDBEQUFMO0FBQ0UsNkNBQ0tILEtBREw7QUFFRXNCLHVCQUFlLEVBQUVyQixNQUFNLENBQUNxQjtBQUYxQjs7QUFLRixTQUFLbkIsZ0RBQUw7QUFDRSw2Q0FDS0gsS0FETDtBQUVFcUIsbUJBQVcsRUFBRXBCLE1BQU0sQ0FBQ29CO0FBRnRCOztBQUlGLFNBQUtsQixrREFBTDtBQUNFLDZDQUNLSCxLQURMO0FBRUV1QixtQkFBVyxFQUFFdEIsTUFBTSxDQUFDc0I7QUFGdEI7O0FBS0Y7QUFDRSxhQUFPdkIsS0FBUDtBQXpCSjtBQTJCRCxDQTVCRDs7QUE4QmVjLDBFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNBOztBQUVBLE1BQU1GLFdBQVcsR0FBRyxDQUFDWixLQUFLLEdBQUcsRUFBVCxFQUFhQyxNQUFiLEtBQXdCO0FBQzFDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtDLCtDQUFMO0FBQ0UsNkNBQ0tILEtBREw7QUFFRVcsWUFBSSxFQUFFVixNQUFNLENBQUNVO0FBRmY7O0FBSUY7QUFDRSxhQUFPWCxLQUFQO0FBUEo7QUFTRCxDQVZEOztBQVllWSwwRUFBZixFOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQSxNQUFNbEIsWUFBWSxHQUFHLEVBQXJCO0FBQ0EsTUFBTThCLFVBQVUsR0FBRyxDQUFDQyxrREFBRCxDQUFuQjtBQUVBLE1BQU1wQyxLQUFLLEdBQUdxQyx5REFBVyxDQUFDbEIsaURBQUQsRUFBY2QsWUFBZCxFQUE0QmlDLG9GQUFtQixDQUFDQyw2REFBZSxDQUFDLEdBQUdKLFVBQUosQ0FBaEIsQ0FBL0MsQ0FBekI7QUFFZW5DLG9FQUFmLEU7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPLE1BQU13QyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLGVBQXRCLEMsQ0FFUDs7QUFDTyxNQUFNQyxRQUFRLEdBQUcsVUFBakIsQyxDQUVQOztBQUNPLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxTQUFTLEdBQUcsV0FBbEI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsYUFBcEIsQyxDQUVQOztBQUNPLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLE1BQU1DLDBCQUEwQixHQUFHLDRCQUFuQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CUCwrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlL3N0b3JlJ1xyXG5cclxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgIGh0bWwsXHJcbiAgICBib2R5LFxyXG4gICAgYm9keSA+IGRpdjpmaXJzdC1jaGlsZCxcclxuICAgIGRpdiNfX25leHQsXHJcbiAgICBkaXYjX19uZXh0ID4gZGl2IHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMDM0MTQzO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AgbGVmdCwgIzAzNDE0MywgI0I2NEEyRik7XHJcbiAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCBsZWZ0LCAjMDM0MTQzLCAjQjY0QTJGKTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzAzNDE0MywgI0I2NEEyRik7XHJcbiAgICB9O1xyXG4gICAgfVxyXG4gIGB9PC9zdHlsZT5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IG1ha2VzdG9yZSA9ICgpID0+IHN0b3JlXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VzdG9yZSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE15QXBwKVxyXG4iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcydcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBhY2Nlc3NUb2tlbjogJycsXHJcbiAgZXhwaXJlc0luOiAwLFxyXG4gIGV4cGlyZURhdGU6ICcnLFxyXG4gIGlzQXV0aGVkOiAnZmFsc2UnXHJcbn1cclxuXHJcbmNvbnN0IGF1dGhSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgY2FzZSB0eXBlcy5TRVRfQUNDRVNTX1RPS0VOOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFjY2Vzc1Rva2VuOiBhY3Rpb24uYWNjZXNzVG9rZW5cclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgdHlwZXMuU0VUX0VYUElSRVNfSU46XHJcbiAgICAgIGNvbnN0IGV4cGlyZURhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICAgIGlmIChhY3Rpb24uZXhwaXJlc0luID4gMCkge1xyXG4gICAgICAgIGV4cGlyZURhdGUuc2V0U2Vjb25kcyhleHBpcmVEYXRlLmdldFNlY29uZHMoKSArIGFjdGlvbi5leHBpcmVzSW4pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXhwaXJlRGF0ZS5zZXRTZWNvbmRzKGV4cGlyZURhdGUuZ2V0U2Vjb25kcygpKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZXhwaXJlc0luOiBhY3Rpb24uZXhwaXJlc0luLFxyXG4gICAgICAgIGV4cGlyZURhdGU6IGV4cGlyZURhdGUudG9JU09TdHJpbmcoKVxyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSB0eXBlcy5TRVRfSVNfQVVUSEVEOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzQXV0aGVkOiBhY3Rpb24uaXNBdXRoZWRcclxuICAgICAgfVxyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0aFJlZHVjZXJcclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCBhdXRoUmVkdWNlciBmcm9tICcuL2F1dGhSZWR1Y2VyJ1xyXG5pbXBvcnQgdXNlclJlZHVjZXIgZnJvbSAnLi91c2VyUmVkdWNlcidcclxuaW1wb3J0IHNvbmdSZWR1Y2VyIGZyb20gJy4vc29uZ1JlZHVjZXInXHJcbmltcG9ydCBwbGF5bGlzdFJlZHVjZXIgZnJvbSAnLi9wbGF5bGlzdFJlZHVjZXInXHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgYXV0aDogYXV0aFJlZHVjZXIsXHJcbiAgdXNlcjogdXNlclJlZHVjZXIsXHJcbiAgc29uZzogc29uZ1JlZHVjZXIsXHJcbiAgcGxheWxpc3Q6IHBsYXlsaXN0UmVkdWNlclxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXIiLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcydcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxufVxyXG5cclxuY29uc3QgcGxheWxpc3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIHR5cGVzLkdFVF9VU0VSX1BMQVlMSVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXJQbGF5bGlzdDogYWN0aW9uLnVzZXJQbGF5bGlzdFxyXG4gICAgICB9XHJcbiAgICBjYXNlIHR5cGVzLkdFVF9QTEFZTElTVF9CWV9JRDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwbGF5bGlzdEJ5SWQ6IGFjdGlvbi5wbGF5bGlzdEJ5SWRcclxuICAgICAgfVxyXG4gICAgY2FzZSB0eXBlcy5HRVRfUExBWUxJU1RTX0xJU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcGxheWxpc3RzOiBhY3Rpb24ucGxheWxpc3RzXHJcbiAgICAgIH1cclxuICAgIGNhc2UgdHlwZXMuQ0xFQVJfUExBWUxJU1RfQllfSUQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcGxheWxpc3RCeUlkOiBbXVxyXG4gICAgICB9XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHBsYXlsaXN0UmVkdWNlclxyXG4iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcydcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBnZW5yZVNlZWRzOiBbXSxcclxuICBzZWFyY2hTb25nczogW11cclxufVxyXG5cclxuY29uc3Qgc29uZ1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgdHlwZXMuR0VUX0dFTlJFX1NFRURTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGdlbnJlU2VlZHM6IGFjdGlvbi5nZW5yZVNlZWRzXHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlIHR5cGVzLkdFVF9SRUNPTU1FTkRBVElPTlM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcmVjb21tZW5kYXRpb25zOiBhY3Rpb24ucmVjb21tZW5kYXRpb25zXHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlIHR5cGVzLkdFVF9TT05HUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzZWFyY2hTb25nczogYWN0aW9uLnNlYXJjaFNvbmdzXHJcbiAgICAgIH1cclxuICAgIGNhc2UgdHlwZXMuR0VUX1JFQ0VOVFM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcmVjZW50U29uZ3M6IGFjdGlvbi5yZWNlbnRTb25nc1xyXG4gICAgICB9XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzb25nUmVkdWNlclxyXG4iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcydcclxuXHJcbmNvbnN0IHVzZXJSZWR1Y2VyID0gKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgdHlwZXMuR0VUX1VTRVI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdXNlcjogYWN0aW9uLnVzZXJcclxuICAgICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyUmVkdWNlciIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJ1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xyXG5cclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMnXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fVxyXG5jb25zdCBtaWRkbGV3YXJlID0gW3RodW5rXVxyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgaW5pdGlhbFN0YXRlLCBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZSIsIi8vIEF1dGhcclxuZXhwb3J0IGNvbnN0IFNFVF9BQ0NFU1NfVE9LRU4gPSAnU0VUX0FDQ0VTU19UT0tFTidcclxuZXhwb3J0IGNvbnN0IFNFVF9FWFBJUkVTX0lOID0gJ1NFVF9FWFBJUkVTX0lOJ1xyXG5leHBvcnQgY29uc3QgU0VUX0lTX0FVVEhFRCA9ICdTRVRfSVNfQVVUSEVEJ1xyXG5cclxuLy8gVXNlclxyXG5leHBvcnQgY29uc3QgR0VUX1VTRVIgPSAnR0VUX1VTRVInXHJcblxyXG4vLyBTb25nXHJcbmV4cG9ydCBjb25zdCBHRVRfR0VOUkVfU0VFRFMgPSAnR0VUX0dFTlJFX1NFRURTJ1xyXG5leHBvcnQgY29uc3QgR0VUX1JFQ09NTUVOREFUSU9OUyA9ICdHRVRfUkVDT01NRU5EQVRJT05TJ1xyXG5leHBvcnQgY29uc3QgR0VUX1NPTkdTID0gJ0dFVF9TT05HUydcclxuZXhwb3J0IGNvbnN0IEdFVF9SRUNFTlRTID0gJ0dFVF9SRUNFTlRTJ1xyXG5cclxuLy8gUGxheWxpc3RcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX1BMQVlMSVNUID0gJ0dFVF9VU0VSX1BMQVlMSVNUJ1xyXG5leHBvcnQgY29uc3QgR0VUX1BMQVlMSVNUX0JZX0lEID0gJ0dFVF9QTEFZTElTVF9CWV9JRCdcclxuZXhwb3J0IGNvbnN0IEdFVF9QTEFZTElTVFNfTElTVCA9ICdHRVRfUExBWUxJU1RTX0xJU1QnXHJcbmV4cG9ydCBjb25zdCBDTEVBUl9QTEFZTElTVF9CWV9JRCA9ICdDTEVBUl9QTEFZTElTVF9CWV9JRCdcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JVEVNU19GUk9NX1BMQVlMSVNUID0gJ1JFTU9WRV9JVEVNU19GUk9NX1BMQVlMSVNUJ1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=