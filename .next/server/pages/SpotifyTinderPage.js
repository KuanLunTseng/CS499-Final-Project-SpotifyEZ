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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/SpotifyTinderPage.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./components/HalfPagePlaylist.js":
/*!****************************************!*\
  !*** ./components/HalfPagePlaylist.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _HalfPagePlaylistItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HalfPagePlaylistItem */ "./components/HalfPagePlaylistItem.js");


var _jsxFileName = "C:\\Users\\zengg\\Desktop\\CS499\\final-project-team-10-SpotifyEZ\\components\\HalfPagePlaylist.js";

/** @jsxImportSource @emotion/react */




const HalfPagePlaylistContainerStyling = _emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"]`
  list-style: none;
  width: 100%;
  height: 100%;
`;

function HalfPagePlaylist(props) {
  console.log("==half page playlist: ", props.playlist);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        css: HalfPagePlaylistContainerStyling,
        children: props.playlist.map((num, index) => Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HalfPagePlaylistItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
          imgUrl: props.playlist[index].album.images[0] ? props.playlist[index].album.images[0].url : "/images/spotify-logo.png",
          index: index + 1,
          songName: props.playlist[index].name,
          uri: props.playlist[index].uri
        }, props.playlist[index].id, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 45
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (HalfPagePlaylist);

/***/ }),

/***/ "./components/HalfPagePlaylistItem.js":
/*!********************************************!*\
  !*** ./components/HalfPagePlaylistItem.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SpotifyPlayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpotifyPlayer */ "./components/SpotifyPlayer.js");
/* harmony import */ var _HalfPagePlaylistItemPlayButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HalfPagePlaylistItemPlayButton */ "./components/HalfPagePlaylistItemPlayButton.js");
/* harmony import */ var _HalfPagePlaylistItemRemoveButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HalfPagePlaylistItemRemoveButton */ "./components/HalfPagePlaylistItemRemoveButton.js");


var _jsxFileName = "C:\\Users\\zengg\\Desktop\\CS499\\final-project-team-10-SpotifyEZ\\components\\HalfPagePlaylistItem.js";

/** @jsxImportSource @emotion/react */






const HalfPagePlaylistItemStyling = _emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"]`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  img {
    padding: 10px;
  };
  h2 {
    margin-right: 15%;
  };
  border-style: solid;
  border-radius: 4px;
  border-width: 2px;
  border-color: black;
  color: floralwhite;
  width: 100%;
  height: 100px;
  background-color: #121212;
  div {
    font-size: 20px;
    margin: 3%;

  };
  .songName{
    width: 40%;
  }
  transition: 100ms all ease;
  &:hover {
    background-color: #404040;
  }
`;

function HalfPagePlaylistItem(props) {
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: HalfPagePlaylistItemStyling,
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: props.index
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 9
        }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SpotifyPlayer__WEBPACK_IMPORTED_MODULE_4__["default"], {
          uri: props.uri,
          playerHeight: "80px",
          playerWidth: "300px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HalfPagePlaylistItemRemoveButton__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (HalfPagePlaylistItem);

/***/ }),

/***/ "./components/HalfPagePlaylistItemPlayButton.js":
/*!******************************************************!*\
  !*** ./components/HalfPagePlaylistItemPlayButton.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\zengg\\Desktop\\CS499\\final-project-team-10-SpotifyEZ\\components\\HalfPagePlaylistItemPlayButton.js";

/** @jsxImportSource @emotion/react */




function HalfPagePlaylistItemPlayButton() {
  const {
    0: isPlaying,
    1: setisPlaying
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const playButtonStyling = _emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"]`
    border: 0;
    background: transparent;
    box-sizing: border-box;
    width: 0;
    height: 74px;

    border-color: transparent transparent transparent floralwhite;
    transition: 100ms all ease;
    cursor: pointer;

    // play state
    border-style: solid;
    border-width: 37px 0 37px 60px;

    &.paused {
      border-style: double;
      border-width: 0px 0 0px 60px;
    }
    transform:scale(0.8,0.8);
    -webkit-transform:scale(0.8,0.8);
    -moz-transform:scale(0.8,0.8);
    &:hover {
      transform:scale(0.9,0.9);
      -webkit-transform:scale(0.9,0.9);
      -moz-transform:scale(0.9,0.9);
    }
  `;

  function playButtonClicked(e) {
    e.preventDefault();
    setisPlaying(!isPlaying);
  }

  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: isPlaying ? "paused" : null,
      css: playButtonStyling,
      onClick: playButtonClicked
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (HalfPagePlaylistItemPlayButton);

/***/ }),

/***/ "./components/HalfPagePlaylistItemRemoveButton.js":
/*!********************************************************!*\
  !*** ./components/HalfPagePlaylistItemRemoveButton.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\zengg\\Desktop\\CS499\\final-project-team-10-SpotifyEZ\\components\\HalfPagePlaylistItemRemoveButton.js";

/** @jsxImportSource @emotion/react */




function HalfPagePlaylistItemRemoveButton() {
  const removeButtonStyling = _emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"]`
    cursor: pointer;
    width: 50px;
    height: 50px;
    margin: 10px;
    &:hover{
      transform:scale(1.1,1.1);
      -webkit-transform:scale(1.1,1.1);
      -moz-transform:scale(1.1,1.1);
    }
  `;

  function removeButtonClicked(e) {
    e.preventDefault();
  }

  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      css: removeButtonStyling,
      src: "../images/x-icon-transparent.png",
      alt: "swipe left",
      onClick: removeButtonClicked
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (HalfPagePlaylistItemRemoveButton);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sidebar */ "./components/Sidebar.js");

var _jsxFileName = "C:\\Users\\zengg\\Desktop\\CS499\\final-project-team-10-SpotifyEZ\\components\\Layout.js";

/** @jsxImportSource @emotion/react */




function Layout({
  children
}) {
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"])({
        marginLeft: '80px',
        marginTop: '90px'
      }),
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-burger-menu */ "react-burger-menu");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
/* harmony import */ var _styles_breakpoints__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/breakpoints */ "./styles/breakpoints.js");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal-cookie */ "universal-cookie");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "C:\\Users\\zengg\\Desktop\\CS499\\final-project-team-10-SpotifyEZ\\components\\Navbar.js";

/** @jsxImportSource @emotion/react */








 //Search bar for the Navbar

function SearchBar() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const {
    0: searchString,
    1: setSearchString
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''); //Styles for the search bar

  const searchBarStyles = _emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"]`
        display: inline-block;
        border: 2px solid darkgray;
        height: 50px;
        margin: 15px;
        width: 50%;
        background-color: white;
        color: darkgray;

        form {
            height: 100%;
        }

        //Styles for the search text box
        form input {
            float: left;
            height: inherit;
            background-color: transparent;
            border: 0;
            font-size: 20px;
            outline: 0;
            width: calc(100% - 90px); //subtract the width of the button
            margin-left: 20px;
        }

        //Styles for the search icon button
        form button {
            border-radius: 50%;
            height: inherit;
            background-color: transparent;
            width: 50px;
            border: 0;
            outline: 0;
            font-size: 20px;
            float: right;
        }

        button:hover {
            cursor: pointer;
            color: ${_styles_colors__WEBPACK_IMPORTED_MODULE_7__["default"].darkGreen};
        }

        @media (max-width: ${_styles_breakpoints__WEBPACK_IMPORTED_MODULE_8__["default"].lg}px) and (min-width: ${_styles_breakpoints__WEBPACK_IMPORTED_MODULE_8__["default"].sm}px) {
            width: 78%;
        }
    `;
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: searchBarStyles,
    children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: e => {
        //TODO: Hook this up to send query string parameters to Search page
        router.push({
          pathname: '/search',
          query: 'q=' + searchString
        });
        setSearchString('');
        e.preventDefault();
      },
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        value: searchString,
        placeholder: "Search for a song or artist...",
        onChange: e => setSearchString(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaSearch"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 9
  }, this);
}

function Navbar() {
  const {
    0: showHamnav,
    1: setShowHamnav
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false); //Styles for the entire navbar

  const navbarStyles = _emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"]`
        width: 100%;
        height: 80px;
        top: 0;
        left: 0;
        position: fixed;
        background-color: ${_styles_colors__WEBPACK_IMPORTED_MODULE_7__["default"].black};
        border-style: solid;
        border-width: 1px;
        border-color: grey;
        border-radius: 4px;
    `; //Parent styles for all links on the Navbar

  const navItemStyles = _emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"]`
        padding-top: 25px;
        height: calc(100% - 25px); //subtract the padding;
        width: 8%;
        border-radius: 2px;
        font-weight: bold;
        font-size: 20px;
        text-align: center;
        color: floralwhite;
        text-decoration: none;
        float: left;

        :hover {
            cursor: pointer;
            color:  ${_styles_colors__WEBPACK_IMPORTED_MODULE_7__["default"].darkGreen};
            background-color: ${_styles_colors__WEBPACK_IMPORTED_MODULE_7__["default"].hoverBlack};
        }
    `; //Styles for the site title on the Navbar

  const siteTitleStyles = _emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"]`
        ${navItemStyles}

        width: 15%;
        padding-top: 10px;
        height: calc(100% - 10px);  //subtract the padding;

        font-size: 40px;
        color: ${_styles_colors__WEBPACK_IMPORTED_MODULE_7__["default"].darkGreen};
    `; //Styles for the logout button

  const logOutButtonStyles = _emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"]`
        ${navItemStyles};
        float: right;
        padding: 30px 10px 0 0;
        font-size: 16px;
        width: 10%;
        height: calc(100% - 30px); //subtract the padding
    `;
  const burgerMenuItemStyles = _emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"]`
        :hover {
            background-color: ${_styles_colors__WEBPACK_IMPORTED_MODULE_7__["default"].hoverBlack};
        }
    `;
  var burgerMenuStyles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '25px'
    },
    bmBurgerBars: {
      background: 'white'
    },
    bmCrossButton: {
      height: '40px',
      width: '40px'
    },
    bmCross: {
      background: '#bdc3c7',
      height: '30px',
      right: '10px'
    },
    bmMenuWrap: {
      position: 'fixed',
      top: 0,
      bottom: 0
    },
    bmMenu: {
      background: `${_styles_colors__WEBPACK_IMPORTED_MODULE_7__["default"].black}`,
      padding: '80px 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      overflow: 'none',
      height: '20%'
    },
    bmItem: {
      display: 'inline-block',
      width: '100%',
      textDecoration: 'none',
      textAlign: 'center',
      color: 'white',
      padding: '10px 0px',
      fontSize: '25px'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
      top: 0,
      left: 0
    }
  };
  const cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_9___default.a();

  const updateMedia = () => {
    setShowHamnav(window.innerWidth <= _styles_breakpoints__WEBPACK_IMPORTED_MODULE_8__["default"].lg);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setShowHamnav(window.innerWidth <= _styles_breakpoints__WEBPACK_IMPORTED_MODULE_8__["default"].lg);
  }, []);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: showHamnav ? Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: navbarStyles,
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SearchBar, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 11
      }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_burger_menu__WEBPACK_IMPORTED_MODULE_5__["slide"], {
        right: true,
        styles: burgerMenuStyles,
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "/",
          css: burgerMenuItemStyles,
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 13
        }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "about",
          css: burgerMenuItemStyles,
          children: "About"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 13
        }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "/",
          css: burgerMenuItemStyles,
          children: "Log Out"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 11
      }, this)]
    }, void 0, true) : Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: navbarStyles,
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        css: siteTitleStyles,
        href: "/",
        children: "SpotifyEZ"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 11
      }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        css: navItemStyles,
        href: "/",
        children: "Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 11
      }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        css: navItemStyles,
        href: "about",
        children: "About"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 11
      }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SearchBar, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 11
      }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        onClick: () => {
          cookies.remove('ACESS_TOKEN');
          cookies.remove('IS_AUTHED');
        },
        css: logOutButtonStyles,
        href: "/",
        children: "Log Out"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 9
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/PlaylistColumn.js":
/*!**************************************!*\
  !*** ./components/PlaylistColumn.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/utils */ "./store/utils.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_actions_playlistAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/actions/playlistAction */ "./store/actions/playlistAction.js");
/* harmony import */ var _components_PlaylistViewColumn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/PlaylistViewColumn */ "./components/PlaylistViewColumn.js");


var _jsxFileName = "C:\\Users\\zengg\\Desktop\\CS499\\final-project-team-10-SpotifyEZ\\components\\PlaylistColumn.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function PlaylistColumn(props) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    accessToken
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.auth);
  const {
    playlistById
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.playlist);
  const {
    user
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  const dummyPlaylistID = "08ERR8tNrl7WBI3om8YkyK";
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (props.playlistId) {
      console.log("==Getting playlist with ID: ", props.playlistId);
      dispatch(Object(_store_actions_playlistAction__WEBPACK_IMPORTED_MODULE_8__["getPlaylistById"])(accessToken, props.playlistId));
    } else {
      console.log("Rendering a client-side playlist, props: ", props);
    }
  }, [props.playlistId]);
  console.log("PlaylistViewColumn: " + `==playlistById: ${playlistById} \n==playlist: ${props.playlist} \n==playlistId: ${props.playlistId}`);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: (playlistById || props.playlist) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PlaylistViewColumn__WEBPACK_IMPORTED_MODULE_9__["default"], _objectSpread(_objectSpread({}, props), {}, {
        playlistTitle: playlistById ? playlistById.name : props.playlistTitle,
        playlist: playlistById ? playlistById.tracks.items.map(item => item.track) : props.playlist,
        setPlaylist: playlistById ? newPlaylist => {
          playlistById = newPlaylist;
        } : props.setPlaylist
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 7
      }, this)
    }, void 0, false)
  }, void 0, false);
}

PlaylistColumn.propTypes = {
  addedSongs: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array,
  playlist: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array,
  playlistId: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  menu: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.element,
  onPlusButtonClick: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  setPlaylist: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  playlistTitle: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string
};
PlaylistColumn.defaultProps = {
  addedSongs: [],
  playlist: [],
  playlistTitle: "",
  playlistId: "",
  menu: null,
  onPlusButtonClick: null
};
/* harmony default export */ __webpack_exports__["default"] = (PlaylistColumn);

/***/ }),

/***/ "./components/PlaylistView.js":
/*!************************************!*\
  !*** ./components/PlaylistView.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SpotifyPlayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SpotifyPlayer */ "./components/SpotifyPlayer.js");

var _jsxFileName = "C:\\Users\\zengg\\Desktop\\CS499\\final-project-team-10-SpotifyEZ\\components\\PlaylistView.js";

/** @jsxImportSource @emotion/react */





const playlistViewItemButtonStyles = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  height: 30px;
  width: 30px;

  color: white;
  border: 0;
  font-size: 100%;
  float: right;
  position: relative;
  cursor: pointer;
`;
const PlusButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default.a.button`
  ${playlistViewItemButtonStyles};
  background-color: ${_styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].darkGreen};
  :hover {
    background-color: ${_styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].hoverGreen};
  }
`;
const MinusButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default.a.button`
  ${playlistViewItemButtonStyles};
  background-color: ${_styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].red};
  :hover {
    background-color: ${_styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].hoverRed};
  }
`;

function PlaylistViewItem(props) {
  function onPlusButtonClick() {
    props.onPlusButtonClick(props.track);
  }

  function onMinusButtonClick() {
    props.onMinusButtonClick(props.track.uri);
  }

  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SpotifyPlayer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      uri: props.track.uri,
      playerHeight: "80px",
      playerWidth: props.hasPlusButton || props.hasMinusButton ? "90%" : "100%"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), props.hasPlusButton && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PlusButton, {
      onClick: onPlusButtonClick,
      children: "+"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 31
    }, this), props.hasMinusButton && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MinusButton, {
      onClick: onMinusButtonClick,
      children: "-"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 32
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

function PlaylistView(props) {
  const styles = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column-reverse;
  `;
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    css: styles,
    children: props.playlist.map((track, idx) => Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PlaylistViewItem, {
      track: track,
      hasPlusButton: props.hasPlusButton,
      hasMinusButton: props.hasMinusButton,
      onPlusButtonClick: props.onPlusButtonClick,
      onMinusButtonClick: props.onMinusButtonClick
    }, idx, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 5
  }, this);
}

PlaylistView.propTypes = {
  playlist: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  hasPlusButton: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.boolean,
  hasMinusButton: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.boolean,
  onPlusButtonClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.function,
  onMinusButtonClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.function
};
PlaylistView.defaultProps = {
  hasPlusButton: false,
  hasMinusButton: false,
  onPlusButtonClick: null,
  onMinusButtonClick: null
};
/* harmony default export */ __webpack_exports__["default"] = (PlaylistView);

/***/ }),

/***/ "./components/PlaylistViewColumn.js":
/*!******************************************!*\
  !*** ./components/PlaylistViewColumn.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _PlaylistView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PlaylistView */ "./components/PlaylistView.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\zengg\\Desktop\\CS499\\final-project-team-10-SpotifyEZ\\components\\PlaylistViewColumn.js";

/** @jsxImportSource @emotion/react */







 //modal

const outerContainerStyling = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
    position: fixed;
    top: 9%;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1010;
    overflow: scroll;
    background-color: rgba(0, 0, 0, 0.65);
    display: flex;
    justify-content: center;
    align-items: center;
  `;
const containerStyling = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div{
      font-size: 40px;
      padding: 10px;
      margin: 5px;
    }
    input{
      padding: 10px;
      margin: 5px;
      width: 80%;
    }
    textarea{
      padding: 10px;
      margin: 5px;
      width: 80%;
    }
    .PlaylistDescription{
      height: 50%;
    }
    background-color: floralwhite;
    width: 40%;
    height: 50%;
    border-radius: 8px;
  `;
const buttonContainerStyling = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  display: flex;
  flex-direction: row;
  button{
    width: 45%;
    height: 80%;
    padding: 5px;
    margin: 5px;
    border-radius: 8px;
    border-style: solid;
    border-width: 1px;

  }
`;
const PlaylistTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  width: 100%;
  text-align: center;
  color: ${_styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].black};
  font-size: 40px;
  font-weight: bold;
  margin: 20px 0;
  border: 2px solid ${_styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].darkGreen};
  border-radius: 10px;
`;
const SaveSubPlaylistButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default.a.button`
  position: fixed;
  bottom: 40px;
  right: 12.5%;
  width: 200px;
  height: 60px;
  cursor: pointer;
  border: 0;
  border-radius:10px;
  font-size: 125%;
  color: white;
  background-color: ${_styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].darkGreen};
  :hover {
    background-color: ${_styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].hoverGreen};
  }
`;

function PlaylistViewColumn(props) {
  const {
    0: toggleModal,
    1: setToggleModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false);
  const {
    0: playlistName,
    1: setPlaylistName
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])("");
  const {
    0: playlistDecription,
    1: setPlaylistDescription
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])("");
  const {
    accessToken
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.auth);
  const {
    user
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.user);
  const {
    0: removedSongUris,
    1: setRemovedSongUris
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]);

  function createModalClicked(e) {
    e.preventDefault();
    makeNewPlaylist(playlistName, playlistDecription);
    setToggleModal(!toggleModal);
  }

  function cancelModalClicked(e) {
    e.preventDefault();
    setToggleModal(!toggleModal);
  }

  function UpdatePlaylistName(e) {
    setPlaylistName(e.target.value);
  }

  function UpdatePlaylistDescription(e) {
    setPlaylistDescription(e.target.value);
  }

  const styles = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
    width: 45%;
    float: left;
    padding: 0 20px;
  `;

  function removeFromplaylist(uri) {
    //TODO: Is there a way to not remove duplicate songs?
    props.setPlaylist([...props.playlist.filter(track => track.uri !== uri), ...props.addedSongs.filter(track => track.uri !== uri)]);
    setRemovedSongUris([...removedSongUris, uri]);
  }

  async function makeNewPlaylist(nameOfSong, nameOfPlaylist) {
    const getOptions = (accessToken, url, data) => {
      return {
        url: url,
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + accessToken,
          'Content-Type': 'application/json'
        },
        data: data
      };
    };

    try {
      const url = `https://api.spotify.com/v1/users/${user.id}/playlists`;
      axios__WEBPACK_IMPORTED_MODULE_4___default()(getOptions(accessToken, url, {
        'name': nameOfSong,
        'description': nameOfPlaylist,
        'public': 'false'
      })).then(function (response) {
        console.log("Make new playlist response:", response);
        putItemsInPlaylist(response.data.id); //setMakingplaylist(false)
      });
    } catch (e) {
      if (e instanceof DOMException) {
        console.log("HTTP request aborted");
      } else {
        console.log(e);
      }
    }
  }

  async function putItemsInPlaylist(id) {
    const options = {
      url: `https://api.spotify.com/v1/playlists/${id}/tracks?uris=${encodeURIComponent(props.addedSongs.map(uri => uri.uri))}`,
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        'Content-Type': 'application/json'
      }
    };

    try {
      axios__WEBPACK_IMPORTED_MODULE_4___default()(options).then(function (response) {
        console.log("Putting Items in that new playlist: ", response);
      });
    } catch (e) {
      if (e instanceof DOMException) {
        console.log("HTTP request aborted");
      } else {
        console.log(e);
      }
    }
  }

  async function savePlaylist() {
    if (props.playlistId) {
      console.log("Adding to this playlist: ", props.playlistId);
      putItemsInPlaylist(props.playlistId);
    } else {
      console.log("Making a new playlist"); //TOGGLE MODAL, let the user enter the playlist data
      //onSUBMIT, pass data to makeNewPlaylist

      setToggleModal(!toggleModal);
    }
  }

  console.log("PlaylistViewColumn props: ", props);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: styles,
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PlaylistTitle, {
      children: props.playlistTitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 7
    }, this), props.menu, Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PlaylistView__WEBPACK_IMPORTED_MODULE_7__["default"], {
      playlist: props.addedSongs ? props.addedSongs : [],
      hasPlusButton: props.hasPlusButton,
      onPlusButtonClick: props.onPlusButtonClick,
      hasMinusButton: props.hasMinusButton,
      onMinusButtonClick: removeFromplaylist
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 7
    }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PlaylistView__WEBPACK_IMPORTED_MODULE_7__["default"], {
      playlist: props.playlist,
      hasPlusButton: props.hasPlusButton,
      onPlusButtonClick: props.onPlusButtonClick,
      hasMinusButton: props.hasMinusButton,
      onMinusButtonClick: removeFromplaylist
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 7
    }, this), (props.addedSongs && props.addedSongs.length > 0 || removedSongUris.length > 0) && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SaveSubPlaylistButton, {
      onClick: () => {
        savePlaylist();
      },
      children: "Save Playlist"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 9
    }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: toggleModal ? Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: outerContainerStyling,
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          css: containerStyling,
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: "New playlist information"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 12
          }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Playlist name...",
            onChange: UpdatePlaylistName,
            value: playlistName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 12
          }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
            className: "PlaylistDescription",
            type: "text",
            placeholder: "Playlist description...",
            onChange: UpdatePlaylistDescription,
            value: playlistDecription
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 12
          }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            css: buttonContainerStyling,
            children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: cancelModalClicked,
              children: " Cancel "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 12
            }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: createModalClicked,
              children: " Add new playlist "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 12
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 10
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 10
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 8
      }, this) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 208,
    columnNumber: 5
  }, this);
}

PlaylistViewColumn.propTypes = {
  playlist: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  addedSongs: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array,
  setPlaylist: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  playlistTitle: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  playlistId: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  menu: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.element,
  hasPlusButton: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.boolean,
  hasMinusButton: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.boolean,
  onPlusButtonClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
};
PlaylistViewColumn.defaultProps = {
  addedSongs: [],
  playlistTitle: "",
  playlistId: "",
  menu: null,
  hasPlusButton: false,
  hasMinusButton: false,
  onPlusButtonClick: null
};
/* harmony default export */ __webpack_exports__["default"] = (PlaylistViewColumn);

/***/ }),

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_usePlaylists__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/usePlaylists */ "./hooks/usePlaylists.js");

var _jsxFileName = "C:\\Users\\zengg\\Desktop\\CS499\\final-project-team-10-SpotifyEZ\\components\\Sidebar.js";

/** @jsxImportSource @emotion/react */






const StyledSidebar = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    position: absolute;
    height: calc(100% - 100px); //factor in the top and bottom
    width: 80px;
    position: fixed;
    z-index: 1;
    top: 81px;
    left: 0px;
    padding: 10px 0;
    border-style: solid;
    border-width: 1px;
    border-color: grey;
    border-radius: 4px;
    background-color: ${_styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].darkGreen};
    color: white;

    overflow-y:scroll;

`;
const PlaylistsList = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`;

function Sidebar() {
  const {
    playlists
  } = Object(_hooks_usePlaylists__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const sidebarIconStyles = _emotion_react__WEBPACK_IMPORTED_MODULE_2__["css"]`
        object-fit: cover;
        border-radius: 50%;
        height: 50px;
        width: 50px;
        margin-bottom: 10px;

        cursor: pointer;
        transition: all .2s ease-in-out;

        :hover{
            transform: scale(1.1);
        }
    `;
  const newPlaylistButtonStyles = _emotion_react__WEBPACK_IMPORTED_MODULE_2__["css"]`
        ${sidebarIconStyles};
        background-color: white;
        text-decoration: none;
        color: ${_styles_colors__WEBPACK_IMPORTED_MODULE_3__["default"].darkGreen};

        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
    `;
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StyledSidebar, {
    children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PlaylistsList, {
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: {
          pathname: "/SpotifyTinderPage",
          query: {
            playlistId: null,
            oneSongSeed: null
          }
        },
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          css: newPlaylistButtonStyles,
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaPlus"], {
            css: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["css"])({
              height: '100%'
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }, this), playlists && playlists.map(playlist => Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: `/playlists/${playlist.id}`,
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: playlist.images[0] ? playlist.images[0].url : "/images/spotify-logo.png",
          css: sidebarIconStyles,
          title: playlist.name,
          alt: playlist.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 25
        }, this)
      }, playlist.id, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 21
      }, this))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./components/SpotifyPlayer.js":
/*!*************************************!*\
  !*** ./components/SpotifyPlayer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\zengg\\Desktop\\CS499\\final-project-team-10-SpotifyEZ\\components\\SpotifyPlayer.js";

/** @jsxImportSource @emotion/react */




function SpotifyPlayer(props) {
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
    src: `https://open.spotify.com/embed?uri=${props.uri}`,
    width: props.playerWidth,
    height: props.playerHeight,
    frameborder: "0",
    allowtransparency: "true",
    allow: "encrypted-media"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (SpotifyPlayer);

/***/ }),

/***/ "./components/SpotifyTinder.js":
/*!*************************************!*\
  !*** ./components/SpotifyTinder.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SpotifyPlayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpotifyPlayer */ "./components/SpotifyPlayer.js");


var _jsxFileName = "C:\\Users\\zengg\\Desktop\\CS499\\final-project-team-10-SpotifyEZ\\components\\SpotifyTinder.js";

/** @jsxImportSource @emotion/react */





function SpotifyTinder(props) {
  const {
    0: counter,
    1: setCounter
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const SpotifyTinderContainerStyling = _emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"]`
  display:flex;
  flex-direction: column;
  img{
    width: 50px;
    height: 50px;
    margin: 10px;
    cursor: pointer;
    &:hover{
      transform:scale(1.1,1.1);
      -webkit-transform:scale(1.1,1.1);
      -moz-transform:scale(1.1,1.1);
    }
  }
  align-items: center;
`;

  function swipeLeftClicked(e) {
    if (counter < props.playlist.length - 1) {
      setCounter(counter + 1);
    } else {
      //request new api call
      setCounter(0); //reset counter
    }
  }

  function swipeRightClicked(e) {
    if (counter < props.playlist.length - 1) {
      // add song uri into redux props.playlist[counter].uri
      props.SwipeRight(props.playlist[counter]);
      console.log("Song object in component: " + props.playlist[counter]);
      setCounter(counter + 1);
    } else {
      //request new api call
      setCounter(0); //reset counter
    }
  }

  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: SpotifyTinderContainerStyling,
      children: [console.log("Playlist object: " + props.playlist[counter].uri), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SpotifyPlayer__WEBPACK_IMPORTED_MODULE_4__["default"], {
        uri: props.playlist[counter].uri,
        playerWidth: "380px",
        playerHeight: "380px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 7
      }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "../images/x-icon-transparent.png",
          alt: "swipe left",
          onClick: swipeLeftClicked
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 7
        }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "../images/heart-icon-transparent.png",
          alt: "swipe right",
          onClick: swipeRightClicked
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (SpotifyTinder);

/***/ }),

/***/ "./hooks/usePlaylists.js":
/*!*******************************!*\
  !*** ./hooks/usePlaylists.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_actions_playlistAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/playlistAction */ "./store/actions/playlistAction.js");




function usePlaylists() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    accessToken
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.auth);
  const {
    playlists
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.playlist);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log("Access token: ", accessToken);
    dispatch(Object(_store_actions_playlistAction__WEBPACK_IMPORTED_MODULE_2__["getPlaylistsList"])(accessToken));
  }, []);
  return {
    playlists
  };
}

/* harmony default export */ __webpack_exports__["default"] = (usePlaylists);

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://err.sh/next.js/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/SpotifyTinderPage.js":
/*!************************************!*\
  !*** ./pages/SpotifyTinderPage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TestHalfPagePlaylist; });
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_HalfPagePlaylist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HalfPagePlaylist */ "./components/HalfPagePlaylist.js");
/* harmony import */ var _components_SpotifyTinder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SpotifyTinder */ "./components/SpotifyTinder.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Sidebar */ "./components/Sidebar.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _store_actions_songAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/actions/songAction */ "./store/actions/songAction.js");
/* harmony import */ var _components_PlaylistColumn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/PlaylistColumn */ "./components/PlaylistColumn.js");
/* harmony import */ var _components_PlaylistViewColumn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/PlaylistViewColumn */ "./components/PlaylistViewColumn.js");


var _jsxFileName = "C:\\Users\\zengg\\Desktop\\CS499\\final-project-team-10-SpotifyEZ\\pages\\SpotifyTinderPage.js";

/** @jsxImportSource @emotion/react */













 //note track is an array with one object, and that object contains

function TestHalfPagePlaylist() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])();
  const {
    accessToken
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(state => state.auth);
  const {
    recommendations
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(state => state.song);
  const {
    0: swipeRightList,
    1: addSwipeRightList
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([]);
  const {
    recentSongs
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(state => state.song);

  function swipeRight(songObject) {
    addSwipeRightList([...swipeRightList, songObject]);
    console.log("Song object: " + songObject);
  }

  console.log(router.query);
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(() => {
    console.log("query seed is : " + router.query.oneSongSeed);

    if (router.query.oneSongSeed) {
      dispatch(Object(_store_actions_songAction__WEBPACK_IMPORTED_MODULE_11__["getSongRecommendations"])(accessToken, router.query.oneSongSeed));
    } else {
      dispatch(Object(_store_actions_songAction__WEBPACK_IMPORTED_MODULE_11__["getRecents"])(accessToken));
      dispatch(Object(_store_actions_songAction__WEBPACK_IMPORTED_MODULE_11__["getSongRecommendations"])(accessToken, recentSongs.items[0].track.id));
      console.log("recent song first item: " + recentSongs.items[0].track.id);
    }
  }, []);
  console.log('Recommendation === ', recommendations);
  const SpotifyTinderPageContainerStyling = _emotion_react__WEBPACK_IMPORTED_MODULE_7__["css"]`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  `;
  const {
    0: dummyData,
    1: setDummyData
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])({
    "tracks": [{
      "album": {
        "album_type": "ALBUM",
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/26VFTg2z8YR0cCuwLzESi2"
          },
          "href": "https://api.spotify.com/v1/artists/26VFTg2z8YR0cCuwLzESi2",
          "id": "26VFTg2z8YR0cCuwLzESi2",
          "name": "Halsey",
          "type": "artist",
          "uri": "spotify:artist:26VFTg2z8YR0cCuwLzESi2"
        }],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/7GjG91tyHQNGEHzKJaqOi0"
        },
        "href": "https://api.spotify.com/v1/albums/7GjG91tyHQNGEHzKJaqOi0",
        "id": "7GjG91tyHQNGEHzKJaqOi0",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2730f7ad6d8d829906c17cae210",
          "width": 640
        }, {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e020f7ad6d8d829906c17cae210",
          "width": 300
        }, {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048510f7ad6d8d829906c17cae210",
          "width": 64
        }],
        "name": "hopeless fountain kingdom (Deluxe)",
        "release_date": "2017-06-02",
        "release_date_precision": "day",
        "total_tracks": 16,
        "type": "album",
        "uri": "spotify:album:7GjG91tyHQNGEHzKJaqOi0"
      },
      "artists": [{
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/26VFTg2z8YR0cCuwLzESi2"
        },
        "href": "https://api.spotify.com/v1/artists/26VFTg2z8YR0cCuwLzESi2",
        "id": "26VFTg2z8YR0cCuwLzESi2",
        "name": "Halsey",
        "type": "artist",
        "uri": "spotify:artist:26VFTg2z8YR0cCuwLzESi2"
      }],
      "disc_number": 1,
      "duration_ms": 202438,
      "explicit": false,
      "external_ids": {
        "isrc": "USUM71702213"
      },
      "external_urls": {
        "spotify": "https://open.spotify.com/track/2WQn7Yvs728KZmmY6tgWqH"
      },
      "href": "https://api.spotify.com/v1/tracks/2WQn7Yvs728KZmmY6tgWqH",
      "id": "2WQn7Yvs728KZmmY6tgWqH",
      "is_local": false,
      "is_playable": true,
      "name": "Eyes Closed",
      "popularity": 60,
      "preview_url": null,
      "track_number": 3,
      "type": "track",
      "uri": "spotify:track:2WQn7Yvs728KZmmY6tgWqH"
    }, {
      "album": {
        "album_type": "ALBUM",
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5WId4o5jdGVhptNU0uqKxu"
          },
          "href": "https://api.spotify.com/v1/artists/5WId4o5jdGVhptNU0uqKxu",
          "id": "5WId4o5jdGVhptNU0uqKxu",
          "name": "St. Lucia",
          "type": "artist",
          "uri": "spotify:artist:5WId4o5jdGVhptNU0uqKxu"
        }],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/5Pjft9EbneGmlhOQ2mo6bo"
        },
        "href": "https://api.spotify.com/v1/albums/5Pjft9EbneGmlhOQ2mo6bo",
        "id": "5Pjft9EbneGmlhOQ2mo6bo",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2736ff9ef1fa0ddcd2ff9da505f",
          "width": 640
        }, {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e026ff9ef1fa0ddcd2ff9da505f",
          "width": 300
        }, {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048516ff9ef1fa0ddcd2ff9da505f",
          "width": 64
        }],
        "name": "When The Night (Deluxe)",
        "release_date": "2012",
        "release_date_precision": "year",
        "total_tracks": 14,
        "type": "album",
        "uri": "spotify:album:5Pjft9EbneGmlhOQ2mo6bo"
      },
      "artists": [{
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/5WId4o5jdGVhptNU0uqKxu"
        },
        "href": "https://api.spotify.com/v1/artists/5WId4o5jdGVhptNU0uqKxu",
        "id": "5WId4o5jdGVhptNU0uqKxu",
        "name": "St. Lucia",
        "type": "artist",
        "uri": "spotify:artist:5WId4o5jdGVhptNU0uqKxu"
      }],
      "disc_number": 1,
      "duration_ms": 308360,
      "explicit": false,
      "external_ids": {
        "isrc": "USSM11303710"
      },
      "external_urls": {
        "spotify": "https://open.spotify.com/track/0pBLfQ5JBjh12H6DGZjMwM"
      },
      "href": "https://api.spotify.com/v1/tracks/0pBLfQ5JBjh12H6DGZjMwM",
      "id": "0pBLfQ5JBjh12H6DGZjMwM",
      "is_local": false,
      "is_playable": true,
      "name": "Elevate",
      "popularity": 55,
      "preview_url": "https://p.scdn.co/mp3-preview/1be8a852cfbe050a225b7fbc803215d57e48b341?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number": 3,
      "type": "track",
      "uri": "spotify:track:0pBLfQ5JBjh12H6DGZjMwM"
    }, {
      "album": {
        "album_type": "ALBUM",
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2xe8IXgCTpwHE3eA9hTs4n"
          },
          "href": "https://api.spotify.com/v1/artists/2xe8IXgCTpwHE3eA9hTs4n",
          "id": "2xe8IXgCTpwHE3eA9hTs4n",
          "name": "BANKS",
          "type": "artist",
          "uri": "spotify:artist:2xe8IXgCTpwHE3eA9hTs4n"
        }],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/1eeYYgK208xvkCEGkYqWah"
        },
        "href": "https://api.spotify.com/v1/albums/1eeYYgK208xvkCEGkYqWah",
        "id": "1eeYYgK208xvkCEGkYqWah",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2739c8dd74225a1fb838fa7dca6",
          "width": 640
        }, {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e029c8dd74225a1fb838fa7dca6",
          "width": 300
        }, {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048519c8dd74225a1fb838fa7dca6",
          "width": 64
        }],
        "name": "Goddess (Deluxe)",
        "release_date": "2014-01-01",
        "release_date_precision": "day",
        "total_tracks": 18,
        "type": "album",
        "uri": "spotify:album:1eeYYgK208xvkCEGkYqWah"
      },
      "artists": [{
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/2xe8IXgCTpwHE3eA9hTs4n"
        },
        "href": "https://api.spotify.com/v1/artists/2xe8IXgCTpwHE3eA9hTs4n",
        "id": "2xe8IXgCTpwHE3eA9hTs4n",
        "name": "BANKS",
        "type": "artist",
        "uri": "spotify:artist:2xe8IXgCTpwHE3eA9hTs4n"
      }],
      "disc_number": 1,
      "duration_ms": 249739,
      "explicit": false,
      "external_ids": {
        "isrc": "USUM71405259"
      },
      "external_urls": {
        "spotify": "https://open.spotify.com/track/4PvD06Pmbm2rHG2JjSlElF"
      },
      "href": "https://api.spotify.com/v1/tracks/4PvD06Pmbm2rHG2JjSlElF",
      "id": "4PvD06Pmbm2rHG2JjSlElF",
      "is_local": false,
      "is_playable": true,
      "name": "Beggin For Thread",
      "popularity": 58,
      "preview_url": null,
      "track_number": 10,
      "type": "track",
      "uri": "spotify:track:4PvD06Pmbm2rHG2JjSlElF"
    }],
    "seeds": [{
      "initialPoolSize": 277,
      "afterFilteringSize": 179,
      "afterRelinkingSize": 179,
      "id": "4NHQUGzhtTLFvgF5SZesLK",
      "type": "ARTIST",
      "href": "https://api.spotify.com/v1/artists/4NHQUGzhtTLFvgF5SZesLK"
    }, {
      "initialPoolSize": 343,
      "afterFilteringSize": 43,
      "afterRelinkingSize": 43,
      "id": "0c6xIDDpzE81m2q797ordA",
      "type": "TRACK",
      "href": "https://api.spotify.com/v1/tracks/0c6xIDDpzE81m2q797ordA"
    }]
  });
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: SpotifyTinderPageContainerStyling,
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SpotifyTinder__WEBPACK_IMPORTED_MODULE_2__["default"], {
          playlist: recommendations ? recommendations.tracks : dummyData.tracks,
          SwipeRight: swipeRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 7
        }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: router.query.playlistId ? Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PlaylistColumn__WEBPACK_IMPORTED_MODULE_12__["default"], {
            playlist: [],
            addedSongs: swipeRightList ? swipeRightList : dummyData.tracks,
            setPlaylist: addSwipeRightList,
            hasMinusButton: true,
            playlistId: router.query.playlistId
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 311,
            columnNumber: 9
          }, this) : Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PlaylistViewColumn__WEBPACK_IMPORTED_MODULE_13__["default"], {
            playlist: [],
            addedSongs: swipeRightList ? swipeRightList : dummyData.tracks,
            playlistTitle: "New playlist",
            setPlaylist: addSwipeRightList,
            hasMinusButton: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 318,
            columnNumber: 9
          }, this)
        }, void 0, false)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 5
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./store/actions/playlistAction.js":
/*!*****************************************!*\
  !*** ./store/actions/playlistAction.js ***!
  \*****************************************/
/*! exports provided: getUserPlaylist, getPlaylistById, getPlaylistsList, clearPlaylistById, removeItemsFromPlaylist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserPlaylist", function() { return getUserPlaylist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlaylistById", function() { return getPlaylistById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlaylistsList", function() { return getPlaylistsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearPlaylistById", function() { return clearPlaylistById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItemsFromPlaylist", function() { return removeItemsFromPlaylist; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./store/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./store/utils.js");


 // Get a List of Current User's Playlists

const getUserPlaylist = accessToken => async dispatch => {
  const url = 'https://api.spotify.com/v1/me/playlists';
  const res = await axios__WEBPACK_IMPORTED_MODULE_1___default()(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getOptions"])(accessToken, url));
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_USER_PLAYLIST"],
    userPlaylist: res.data
  });
}; // Get a Playlist

const getPlaylistById = (accessToken, playlistId) => async dispatch => {
  const url = `https://api.spotify.com/v1/playlists/${playlistId}`;
  const res = await axios__WEBPACK_IMPORTED_MODULE_1___default()(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getOptions"])(accessToken, url));
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_PLAYLIST_BY_ID"],
    playlistById: res.data
  });
};
const getPlaylistsList = accessToken => async dispatch => {
  const url = 'https://api.spotify.com/v1/me/playlists';
  const res = await axios__WEBPACK_IMPORTED_MODULE_1___default()(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getOptions"])(accessToken, url));
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_PLAYLISTS_LIST"],
    playlists: res.data.items
  });
};
const clearPlaylistById = () => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["CLEAR_PLAYLIST_BY_ID"]
  });
}; // Example
// axios({
//   method: 'post',
//   url: baseUrl + 'applications/' + appName + '/dataexport/plantypes' + plan,
//   headers: {}, 
//   data: {
//     foo: 'bar', // This is the body part
//   }
// })
// {
//   "tracks": [
//     { "uri": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" },
//     { "uri": "spotify:track:1301WleyT98MSxVHPZCA6M" }
//   ]
// }

const removeItemsFromPlaylist = (accessToken, playlistId, body) => async dispatch => {
  const options = {
    url: `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + accessToken,
      'Content-Type': 'application/json'
    },
    data: {
      body
    }
  };
  const res = await axios__WEBPACK_IMPORTED_MODULE_1___default()(options);
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["REMOVE_ITEMS_FROM_PLAYLIST"]
  });
};

/***/ }),

/***/ "./store/actions/songAction.js":
/*!*************************************!*\
  !*** ./store/actions/songAction.js ***!
  \*************************************/
/*! exports provided: getGenreSeeds, getRecommendations, getSongRecommendations, getSongs, getRecents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGenreSeeds", function() { return getGenreSeeds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecommendations", function() { return getRecommendations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSongRecommendations", function() { return getSongRecommendations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSongs", function() { return getSongs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecents", function() { return getRecents; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./store/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./store/utils.js");



const getGenreSeeds = accessToken => async dispatch => {
  const url = 'https://api.spotify.com/v1/recommendations/available-genre-seeds';
  const res = await axios__WEBPACK_IMPORTED_MODULE_1___default()(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getOptions"])(accessToken, url));
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_GENRE_SEEDS"],
    genreSeeds: res.data
  });
};
const getRecommendations = (accessToken, query) => async dispatch => {
  const url = `https://api.spotify.com/v1/recommendations?limit=10&seed_genres=${query}`;
  const res = await axios__WEBPACK_IMPORTED_MODULE_1___default()(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getOptions"])(accessToken, url));
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_RECOMMENDATIONS"],
    recommendations: res.data
  });
};
const getSongRecommendations = (accessToken, query) => async dispatch => {
  const url = `https://api.spotify.com/v1/recommendations?limit=50&seed_tracks=${query}`;
  const res = await axios__WEBPACK_IMPORTED_MODULE_1___default()(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getOptions"])(accessToken, url));
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_RECOMMENDATIONS"],
    recommendations: res.data
  });
};
const getSongs = (accessToken, query) => async dispatch => {
  const url = `https://api.spotify.com/v1/search?q=${query}&type=track&market=US&limit=10`;
  const res = await axios__WEBPACK_IMPORTED_MODULE_1___default()(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getOptions"])(accessToken, url));
  console.log("==Searh results: ", res.data);
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_SONGS"],
    searchSongs: res.data
  });
};
const getRecents = (accessToken, query) => async dispatch => {
  const url = `https://api.spotify.com/v1/me/player/recently-played`;
  const res = await axios__WEBPACK_IMPORTED_MODULE_1___default()(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getOptions"])(accessToken, url));
  console.log("log", res.data);
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_RECENTS"],
    recentSongs: res.data
  });
};

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

/***/ "./store/utils.js":
/*!************************!*\
  !*** ./store/utils.js ***!
  \************************/
/*! exports provided: getOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptions", function() { return getOptions; });
const getOptions = (accessToken, url) => {
  const options = {
    url: url,
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + accessToken,
      'Content-Type': 'application/json'
    }
  };
  return options;
};

/***/ }),

/***/ "./styles/breakpoints.js":
/*!*******************************!*\
  !*** ./styles/breakpoints.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const breakpoints = {
  sm: 512,
  med: 768,
  lg: 1024,
  xl: 1280
};
/* harmony default export */ __webpack_exports__["default"] = (breakpoints);

/***/ }),

/***/ "./styles/colors.js":
/*!**************************!*\
  !*** ./styles/colors.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const colors = {
  gray: '#C4C4C4',
  hoverGray: 'lightgray',
  darkGreen: '#2CAC60',
  hoverGreen: '#38eb38',
  black: '#121212',
  hoverBlack: '#2b2b2b',
  red: '#cf2e2e',
  hoverRed: '#902020'
};
/* harmony default export */ __webpack_exports__["default"] = (colors);

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/react");

/***/ }),

/***/ "@emotion/react/jsx-dev-runtime":
/*!*************************************************!*\
  !*** external "@emotion/react/jsx-dev-runtime" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/react/jsx-dev-runtime");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-burger-menu":
/*!************************************!*\
  !*** external "react-burger-menu" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-burger-menu");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

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

/***/ "universal-cookie":
/*!***********************************!*\
  !*** external "universal-cookie" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hhbGZQYWdlUGxheWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IYWxmUGFnZVBsYXlsaXN0SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hhbGZQYWdlUGxheWxpc3RJdGVtUGxheUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hhbGZQYWdlUGxheWxpc3RJdGVtUmVtb3ZlQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2YmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGxheWxpc3RDb2x1bW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QbGF5bGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QbGF5bGlzdFZpZXdDb2x1bW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3BvdGlmeVBsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Nwb3RpZnlUaW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlUGxheWxpc3RzLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLW5vb3AudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9TcG90aWZ5VGluZGVyUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3BsYXlsaXN0QWN0aW9uLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc29uZ0FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvYnJlYWtwb2ludHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBlbW90aW9uL3JlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBlbW90aW9uL3N0eWxlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1idXJnZXItbWVudVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ZhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVuaXZlcnNhbC1jb29raWVcIiJdLCJuYW1lcyI6WyJIYWxmUGFnZVBsYXlsaXN0Q29udGFpbmVyU3R5bGluZyIsImNzcyIsIkhhbGZQYWdlUGxheWxpc3QiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJwbGF5bGlzdCIsIm1hcCIsIm51bSIsImluZGV4IiwiYWxidW0iLCJpbWFnZXMiLCJ1cmwiLCJuYW1lIiwidXJpIiwiaWQiLCJIYWxmUGFnZVBsYXlsaXN0SXRlbVN0eWxpbmciLCJIYWxmUGFnZVBsYXlsaXN0SXRlbSIsIkhhbGZQYWdlUGxheWxpc3RJdGVtUGxheUJ1dHRvbiIsImlzUGxheWluZyIsInNldGlzUGxheWluZyIsInVzZVN0YXRlIiwicGxheUJ1dHRvblN0eWxpbmciLCJwbGF5QnV0dG9uQ2xpY2tlZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIkhhbGZQYWdlUGxheWxpc3RJdGVtUmVtb3ZlQnV0dG9uIiwicmVtb3ZlQnV0dG9uU3R5bGluZyIsInJlbW92ZUJ1dHRvbkNsaWNrZWQiLCJMYXlvdXQiLCJjaGlsZHJlbiIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJTZWFyY2hCYXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzZWFyY2hTdHJpbmciLCJzZXRTZWFyY2hTdHJpbmciLCJzZWFyY2hCYXJTdHlsZXMiLCJjb2xvcnMiLCJkYXJrR3JlZW4iLCJicmVha3BvaW50cyIsImxnIiwic20iLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsInRhcmdldCIsInZhbHVlIiwiTmF2YmFyIiwic2hvd0hhbW5hdiIsInNldFNob3dIYW1uYXYiLCJuYXZiYXJTdHlsZXMiLCJibGFjayIsIm5hdkl0ZW1TdHlsZXMiLCJob3ZlckJsYWNrIiwic2l0ZVRpdGxlU3R5bGVzIiwibG9nT3V0QnV0dG9uU3R5bGVzIiwiYnVyZ2VyTWVudUl0ZW1TdHlsZXMiLCJidXJnZXJNZW51U3R5bGVzIiwiYm1CdXJnZXJCdXR0b24iLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwicmlnaHQiLCJ0b3AiLCJibUJ1cmdlckJhcnMiLCJiYWNrZ3JvdW5kIiwiYm1Dcm9zc0J1dHRvbiIsImJtQ3Jvc3MiLCJibU1lbnVXcmFwIiwiYm90dG9tIiwiYm1NZW51IiwicGFkZGluZyIsImZvbnRTaXplIiwiYm1Nb3JwaFNoYXBlIiwiZmlsbCIsImJtSXRlbUxpc3QiLCJjb2xvciIsIm92ZXJmbG93IiwiYm1JdGVtIiwiZGlzcGxheSIsInRleHREZWNvcmF0aW9uIiwidGV4dEFsaWduIiwiYm1PdmVybGF5IiwibGVmdCIsImNvb2tpZXMiLCJDb29raWVzIiwidXBkYXRlTWVkaWEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJQbGF5bGlzdENvbHVtbiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJhY2Nlc3NUb2tlbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJhdXRoIiwicGxheWxpc3RCeUlkIiwidXNlciIsImR1bW15UGxheWxpc3RJRCIsInBsYXlsaXN0SWQiLCJnZXRQbGF5bGlzdEJ5SWQiLCJwbGF5bGlzdFRpdGxlIiwidHJhY2tzIiwiaXRlbXMiLCJpdGVtIiwidHJhY2siLCJuZXdQbGF5bGlzdCIsInNldFBsYXlsaXN0IiwicHJvcFR5cGVzIiwiYWRkZWRTb25ncyIsIlByb3BUeXBlcyIsImFycmF5Iiwic3RyaW5nIiwibWVudSIsImVsZW1lbnQiLCJvblBsdXNCdXR0b25DbGljayIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJwbGF5bGlzdFZpZXdJdGVtQnV0dG9uU3R5bGVzIiwiUGx1c0J1dHRvbiIsInN0eWxlZCIsImJ1dHRvbiIsImhvdmVyR3JlZW4iLCJNaW51c0J1dHRvbiIsInJlZCIsImhvdmVyUmVkIiwiUGxheWxpc3RWaWV3SXRlbSIsIm9uTWludXNCdXR0b25DbGljayIsImhhc1BsdXNCdXR0b24iLCJoYXNNaW51c0J1dHRvbiIsIlBsYXlsaXN0VmlldyIsInN0eWxlcyIsImlkeCIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJib29sZWFuIiwiZnVuY3Rpb24iLCJvdXRlckNvbnRhaW5lclN0eWxpbmciLCJjb250YWluZXJTdHlsaW5nIiwiYnV0dG9uQ29udGFpbmVyU3R5bGluZyIsIlBsYXlsaXN0VGl0bGUiLCJkaXYiLCJTYXZlU3ViUGxheWxpc3RCdXR0b24iLCJQbGF5bGlzdFZpZXdDb2x1bW4iLCJ0b2dnbGVNb2RhbCIsInNldFRvZ2dsZU1vZGFsIiwicGxheWxpc3ROYW1lIiwic2V0UGxheWxpc3ROYW1lIiwicGxheWxpc3REZWNyaXB0aW9uIiwic2V0UGxheWxpc3REZXNjcmlwdGlvbiIsInJlbW92ZWRTb25nVXJpcyIsInNldFJlbW92ZWRTb25nVXJpcyIsImNyZWF0ZU1vZGFsQ2xpY2tlZCIsIm1ha2VOZXdQbGF5bGlzdCIsImNhbmNlbE1vZGFsQ2xpY2tlZCIsIlVwZGF0ZVBsYXlsaXN0TmFtZSIsIlVwZGF0ZVBsYXlsaXN0RGVzY3JpcHRpb24iLCJyZW1vdmVGcm9tcGxheWxpc3QiLCJmaWx0ZXIiLCJuYW1lT2ZTb25nIiwibmFtZU9mUGxheWxpc3QiLCJnZXRPcHRpb25zIiwiZGF0YSIsIm1ldGhvZCIsImhlYWRlcnMiLCJheGlvcyIsInRoZW4iLCJyZXNwb25zZSIsInB1dEl0ZW1zSW5QbGF5bGlzdCIsIkRPTUV4Y2VwdGlvbiIsIm9wdGlvbnMiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzYXZlUGxheWxpc3QiLCJsZW5ndGgiLCJTdHlsZWRTaWRlYmFyIiwiUGxheWxpc3RzTGlzdCIsIlNpZGViYXIiLCJwbGF5bGlzdHMiLCJ1c2VQbGF5bGlzdHMiLCJzaWRlYmFySWNvblN0eWxlcyIsIm5ld1BsYXlsaXN0QnV0dG9uU3R5bGVzIiwib25lU29uZ1NlZWQiLCJTcG90aWZ5UGxheWVyIiwicGxheWVyV2lkdGgiLCJwbGF5ZXJIZWlnaHQiLCJTcG90aWZ5VGluZGVyIiwiY291bnRlciIsInNldENvdW50ZXIiLCJTcG90aWZ5VGluZGVyQ29udGFpbmVyU3R5bGluZyIsInN3aXBlTGVmdENsaWNrZWQiLCJzd2lwZVJpZ2h0Q2xpY2tlZCIsIlN3aXBlUmlnaHQiLCJnZXRQbGF5bGlzdHNMaXN0IiwicHJlZmV0Y2hlZCIsImVyciIsImN1ckxvY2FsZSIsImhyZWYiLCJldmVudCIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsImxvY2FsZSIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwIiwicmVzb2x2ZWRBcyIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNWaXNpYmxlIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIk1TX01BWF9JRExFX0RFTEFZIiwiZW50cnkiLCJQcm9taXNlIiwicHJvbSIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1dHVyZSIsImdlbmVyYXRvciIsImxpbmsiLCJjYW5QcmVmZXRjaCIsImhhc1ByZWZldGNoIiwicmVzIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsInNjcmlwdCIsInJlamVjdCIsIm1hcmtBc3NldEVycm9yIiwic3JjIiwib25CdWlsZE1hbmlmZXN0IiwiaWRsZVRpbWVvdXQiLCJzY3JpcHRzIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwibWFuaWZlc3QiLCJyb3V0ZSIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwiYXBwZW5kU2NyaXB0IiwiZmV0Y2giLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJnZXRGaWxlc0ZvclJvdXRlIiwiZW50cnlwb2ludCIsImNuIiwibmF2aWdhdG9yIiwib3V0cHV0IiwicHJlZmV0Y2hWaWFEb20iLCJjcmVhdGVSb3V0ZUxvYWRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImlkbGVDYWxsYmFjayIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImVudHJpZXMiLCJjYWxsYmFjayIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJwYXRobmFtZVBhcnRzIiwibG9jYWxlcyIsImRldGVjdGVkTG9jYWxlIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImFkZFBhdGhQcmVmaXgiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJzZWdtZW50IiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImlzTG9jYWxVUkwiLCJyZXNvbHZlQXMiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJvcmlnaW4iLCJyZXNvbHZlSHJlZiIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInN0cmlwT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJhZGRCYXNlUGF0aCIsInByZXBhcmVkQXMiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5Iiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiaXNMb2NhbGVEb21haW4iLCJfaWR4IiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJhZGRMb2NhbGUiLCJkZWxCYXNlUGF0aCIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJub3RGb3VuZFJvdXRlIiwiYXBwQ29tcCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJmb3JjZWRTY3JvbGwiLCJ4IiwieSIsImNoYW5nZVN0YXRlIiwiX19OIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJUZXN0SGFsZlBhZ2VQbGF5bGlzdCIsInJlY29tbWVuZGF0aW9ucyIsInNvbmciLCJzd2lwZVJpZ2h0TGlzdCIsImFkZFN3aXBlUmlnaHRMaXN0IiwicmVjZW50U29uZ3MiLCJzd2lwZVJpZ2h0Iiwic29uZ09iamVjdCIsImdldFNvbmdSZWNvbW1lbmRhdGlvbnMiLCJnZXRSZWNlbnRzIiwiU3BvdGlmeVRpbmRlclBhZ2VDb250YWluZXJTdHlsaW5nIiwiZHVtbXlEYXRhIiwic2V0RHVtbXlEYXRhIiwiZ2V0VXNlclBsYXlsaXN0IiwidHlwZSIsInR5cGVzIiwidXNlclBsYXlsaXN0IiwiY2xlYXJQbGF5bGlzdEJ5SWQiLCJDTEVBUl9QTEFZTElTVF9CWV9JRCIsInJlbW92ZUl0ZW1zRnJvbVBsYXlsaXN0IiwiYm9keSIsIlJFTU9WRV9JVEVNU19GUk9NX1BMQVlMSVNUIiwiZ2V0R2VucmVTZWVkcyIsImdlbnJlU2VlZHMiLCJnZXRSZWNvbW1lbmRhdGlvbnMiLCJnZXRTb25ncyIsInNlYXJjaFNvbmdzIiwiU0VUX0FDQ0VTU19UT0tFTiIsIlNFVF9FWFBJUkVTX0lOIiwiU0VUX0lTX0FVVEhFRCIsIkdFVF9VU0VSIiwiR0VUX0dFTlJFX1NFRURTIiwiR0VUX1JFQ09NTUVOREFUSU9OUyIsIkdFVF9TT05HUyIsIkdFVF9SRUNFTlRTIiwiR0VUX1VTRVJfUExBWUxJU1QiLCJHRVRfUExBWUxJU1RfQllfSUQiLCJHRVRfUExBWUxJU1RTX0xJU1QiLCJtZWQiLCJ4bCIsImdyYXkiLCJob3ZlckdyYXkiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztR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LFdBQVMsRUFBRSxXQUZBO0FBR1hoaUIsV0FBUyxFQUFFLFNBSEE7QUFJWHdGLFlBQVUsRUFBRSxTQUpEO0FBS1gzRSxPQUFLLEVBQUUsU0FMSTtBQU1YRSxZQUFVLEVBQUUsU0FORDtBQVFYMkUsS0FBRyxFQUFFLFNBUk07QUFTWEMsVUFBUSxFQUFFO0FBVEMsQ0FBZjtBQVllNUYscUVBQWYsRTs7Ozs7Ozs7Ozs7QUNaQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9TcG90aWZ5VGluZGVyUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvU3BvdGlmeVRpbmRlclBhZ2UuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcbmltcG9ydCBIYWxmUGFnZVBsYXlsaXN0SXRlbSBmcm9tICcuL0hhbGZQYWdlUGxheWxpc3RJdGVtJ1xyXG5cclxuY29uc3QgSGFsZlBhZ2VQbGF5bGlzdENvbnRhaW5lclN0eWxpbmcgPSBjc3NgXHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBIYWxmUGFnZVBsYXlsaXN0KHByb3BzKXtcclxuICBjb25zb2xlLmxvZyhcIj09aGFsZiBwYWdlIHBsYXlsaXN0OiBcIiwgcHJvcHMucGxheWxpc3QpXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8dWwgY3NzPXtIYWxmUGFnZVBsYXlsaXN0Q29udGFpbmVyU3R5bGluZ30+XHJcbiAgICAgICAge3Byb3BzLnBsYXlsaXN0Lm1hcCgobnVtLCBpbmRleCkgPT4gPEhhbGZQYWdlUGxheWxpc3RJdGVtIGtleT17cHJvcHMucGxheWxpc3RbaW5kZXhdLmlkfVxyXG4gICAgICAgICAgaW1nVXJsPXtwcm9wcy5wbGF5bGlzdFtpbmRleF0uYWxidW0uaW1hZ2VzWzBdID9cclxuICAgICAgICAgIHByb3BzLnBsYXlsaXN0W2luZGV4XS5hbGJ1bS5pbWFnZXNbMF0udXJsIDogXCIvaW1hZ2VzL3Nwb3RpZnktbG9nby5wbmdcIn1cclxuICAgICAgICAgIGluZGV4PXtpbmRleCsxfSBzb25nTmFtZT17cHJvcHMucGxheWxpc3RbaW5kZXhdLm5hbWV9IHVyaT17cHJvcHMucGxheWxpc3RbaW5kZXhdLnVyaX0vPil9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSGFsZlBhZ2VQbGF5bGlzdDtcclxuIiwiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcbmltcG9ydCBTcG90aWZ5UGxheWVyIGZyb20gJy4vU3BvdGlmeVBsYXllcic7XHJcbmltcG9ydCBIYWxmUGFnZVBsYXlsaXN0SXRlbVBsYXlCdXR0b24gZnJvbSAnLi9IYWxmUGFnZVBsYXlsaXN0SXRlbVBsYXlCdXR0b24nO1xyXG5pbXBvcnQgSGFsZlBhZ2VQbGF5bGlzdEl0ZW1SZW1vdmVCdXR0b24gZnJvbSAnLi9IYWxmUGFnZVBsYXlsaXN0SXRlbVJlbW92ZUJ1dHRvbic7XHJcbmNvbnN0IEhhbGZQYWdlUGxheWxpc3RJdGVtU3R5bGluZz0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgaW1nIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfTtcclxuICBoMiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcclxuICB9O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlci13aWR0aDogMnB4O1xyXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IGZsb3JhbHdoaXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcclxuICBkaXYge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAzJTtcclxuXHJcbiAgfTtcclxuICAuc29uZ05hbWV7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxuICB0cmFuc2l0aW9uOiAxMDBtcyBhbGwgZWFzZTtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDQwNDA7XHJcbiAgfVxyXG5gO1xyXG5mdW5jdGlvbiBIYWxmUGFnZVBsYXlsaXN0SXRlbShwcm9wcyl7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8bGk+XHJcbiAgICAgIDxkaXYgY3NzPXtIYWxmUGFnZVBsYXlsaXN0SXRlbVN0eWxpbmd9PlxyXG4gICAgICAgIDxkaXY+e3Byb3BzLmluZGV4fTwvZGl2PlxyXG4gICAgICAgIDxTcG90aWZ5UGxheWVyIHVyaT17cHJvcHMudXJpfSBwbGF5ZXJIZWlnaHQ9XCI4MHB4XCIgcGxheWVyV2lkdGg9XCIzMDBweFwiLz5cclxuICAgICAgICA8SGFsZlBhZ2VQbGF5bGlzdEl0ZW1SZW1vdmVCdXR0b24vPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2xpPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBIYWxmUGFnZVBsYXlsaXN0SXRlbTtcclxuIiwiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcblxyXG5cclxuZnVuY3Rpb24gSGFsZlBhZ2VQbGF5bGlzdEl0ZW1QbGF5QnV0dG9uKCl7XHJcbiAgY29uc3QgW2lzUGxheWluZywgc2V0aXNQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBwbGF5QnV0dG9uU3R5bGluZyA9IGNzcyBgXHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogNzRweDtcclxuXHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IGZsb3JhbHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogMTAwbXMgYWxsIGVhc2U7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgLy8gcGxheSBzdGF0ZVxyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMzdweCAwIDM3cHggNjBweDtcclxuXHJcbiAgICAmLnBhdXNlZCB7XHJcbiAgICAgIGJvcmRlci1zdHlsZTogZG91YmxlO1xyXG4gICAgICBib3JkZXItd2lkdGg6IDBweCAwIDBweCA2MHB4O1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDAuOCwwLjgpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMC44LDAuOCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgwLjgsMC44KTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06c2NhbGUoMC45LDAuOSk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDAuOSwwLjkpO1xyXG4gICAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgwLjksMC45KTtcclxuICAgIH1cclxuICBgO1xyXG4gIGZ1bmN0aW9uIHBsYXlCdXR0b25DbGlja2VkKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0aXNQbGF5aW5nKCFpc1BsYXlpbmcpO1xyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17aXNQbGF5aW5nPyBcInBhdXNlZFwiIDogbnVsbH0gY3NzPXtwbGF5QnV0dG9uU3R5bGluZ30gb25DbGljaz17cGxheUJ1dHRvbkNsaWNrZWR9PjwvYnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBIYWxmUGFnZVBsYXlsaXN0SXRlbVBsYXlCdXR0b247XHJcbiIsIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEhhbGZQYWdlUGxheWxpc3RJdGVtUmVtb3ZlQnV0dG9uKCl7XHJcblxyXG4gIGNvbnN0IHJlbW92ZUJ1dHRvblN0eWxpbmcgPSBjc3MgYFxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICB0cmFuc2Zvcm06c2NhbGUoMS4xLDEuMSk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMSwxLjEpO1xyXG4gICAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjEsMS4xKTtcclxuICAgIH1cclxuICBgO1xyXG4gIGZ1bmN0aW9uIHJlbW92ZUJ1dHRvbkNsaWNrZWQoZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxpbWcgY3NzPXtyZW1vdmVCdXR0b25TdHlsaW5nfSBzcmM9XCIuLi9pbWFnZXMveC1pY29uLXRyYW5zcGFyZW50LnBuZ1wiIGFsdD1cInN3aXBlIGxlZnRcIiBvbkNsaWNrPXtyZW1vdmVCdXR0b25DbGlja2VkfS8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhhbGZQYWdlUGxheWxpc3RJdGVtUmVtb3ZlQnV0dG9uO1xyXG4iLCIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9OYXZiYXInO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL1NpZGViYXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TmF2YmFyIC8+XHJcbiAgICAgIDxTaWRlYmFyIC8+XHJcbiAgICAgIDxkaXYgY3NzPXtjc3Moe1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6JzgwcHgnLFxyXG4gICAgICAgIG1hcmdpblRvcDogJzkwcHgnXHJcbiAgICAgIH0pfT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSIsIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcbmltcG9ydCB7IEZhU2VhcmNoIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgeyBzbGlkZSBhcyBNZW51IH0gZnJvbSAncmVhY3QtYnVyZ2VyLW1lbnUnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vc3R5bGVzL2NvbG9ycyc7XHJcbmltcG9ydCBicmVha3BvaW50cyBmcm9tICcuLi9zdHlsZXMvYnJlYWtwb2ludHMnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJ1xyXG5cclxuLy9TZWFyY2ggYmFyIGZvciB0aGUgTmF2YmFyXHJcbmZ1bmN0aW9uIFNlYXJjaEJhcigpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBbIHNlYXJjaFN0cmluZywgc2V0U2VhcmNoU3RyaW5nXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICAvL1N0eWxlcyBmb3IgdGhlIHNlYXJjaCBiYXJcclxuICAgIGNvbnN0IHNlYXJjaEJhclN0eWxlcyA9IGNzc2BcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgZGFya2dyYXk7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMTVweDtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGNvbG9yOiBkYXJrZ3JheTtcclxuXHJcbiAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vU3R5bGVzIGZvciB0aGUgc2VhcmNoIHRleHQgYm94XHJcbiAgICAgICAgZm9ybSBpbnB1dCB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDkwcHgpOyAvL3N1YnRyYWN0IHRoZSB3aWR0aCBvZiB0aGUgYnV0dG9uXHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9TdHlsZXMgZm9yIHRoZSBzZWFyY2ggaWNvbiBidXR0b25cclxuICAgICAgICBmb3JtIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5kYXJrR3JlZW59O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICR7YnJlYWtwb2ludHMubGd9cHgpIGFuZCAobWluLXdpZHRoOiAke2JyZWFrcG9pbnRzLnNtfXB4KSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3OCU7XHJcbiAgICAgICAgfVxyXG4gICAgYDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY3NzPXtzZWFyY2hCYXJTdHlsZXN9ID5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL1RPRE86IEhvb2sgdGhpcyB1cCB0byBzZW5kIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJzIHRvIFNlYXJjaCBwYWdlXHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL3NlYXJjaCcsXHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAncT0nICsgc2VhcmNoU3RyaW5nXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc2V0U2VhcmNoU3RyaW5nKCcnKTtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoU3RyaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZWFyY2ggZm9yIGEgc29uZyBvciBhcnRpc3QuLi4nXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hTdHJpbmcoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGYVNlYXJjaCAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5mdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgY29uc3QgW3Nob3dIYW1uYXYsIHNldFNob3dIYW1uYXZdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvL1N0eWxlcyBmb3IgdGhlIGVudGlyZSBuYXZiYXJcclxuICBjb25zdCBuYXZiYXJTdHlsZXMgPSBjc3NgXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5ibGFja307XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICBib3JkZXItY29sb3I6IGdyZXk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYDtcclxuXHJcbiAgLy9QYXJlbnQgc3R5bGVzIGZvciBhbGwgbGlua3Mgb24gdGhlIE5hdmJhclxyXG4gIGNvbnN0IG5hdkl0ZW1TdHlsZXMgPSBjc3NgXHJcbiAgICAgICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyNXB4KTsgLy9zdWJ0cmFjdCB0aGUgcGFkZGluZztcclxuICAgICAgICB3aWR0aDogOCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IGZsb3JhbHdoaXRlO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuXHJcbiAgICAgICAgOmhvdmVyIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogICR7Y29sb3JzLmRhcmtHcmVlbn07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmhvdmVyQmxhY2t9O1xyXG4gICAgICAgIH1cclxuICAgIGA7XHJcblxyXG4gIC8vU3R5bGVzIGZvciB0aGUgc2l0ZSB0aXRsZSBvbiB0aGUgTmF2YmFyXHJcbiAgY29uc3Qgc2l0ZVRpdGxlU3R5bGVzID0gY3NzYFxyXG4gICAgICAgICR7bmF2SXRlbVN0eWxlc31cclxuXHJcbiAgICAgICAgd2lkdGg6IDE1JTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwcHgpOyAgLy9zdWJ0cmFjdCB0aGUgcGFkZGluZztcclxuXHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIGNvbG9yOiAke2NvbG9ycy5kYXJrR3JlZW59O1xyXG4gICAgYDtcclxuXHJcbiAgLy9TdHlsZXMgZm9yIHRoZSBsb2dvdXQgYnV0dG9uXHJcbiAgY29uc3QgbG9nT3V0QnV0dG9uU3R5bGVzID0gY3NzYFxyXG4gICAgICAgICR7bmF2SXRlbVN0eWxlc307XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMTBweCAwIDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KTsgLy9zdWJ0cmFjdCB0aGUgcGFkZGluZ1xyXG4gICAgYDtcclxuXHJcbiAgY29uc3QgYnVyZ2VyTWVudUl0ZW1TdHlsZXMgPSBjc3NgXHJcbiAgICAgICAgOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuaG92ZXJCbGFja307XHJcbiAgICAgICAgfVxyXG4gICAgYDtcclxuICB2YXIgYnVyZ2VyTWVudVN0eWxlcyA9IHtcclxuICAgIGJtQnVyZ2VyQnV0dG9uOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICB3aWR0aDogJzM2cHgnLFxyXG4gICAgICBoZWlnaHQ6ICczMHB4JyxcclxuICAgICAgcmlnaHQ6ICczNnB4JyxcclxuICAgICAgdG9wOiAnMjVweCdcclxuICAgIH0sXHJcbiAgICBibUJ1cmdlckJhcnM6IHtcclxuICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgIH0sXHJcbiAgICBibUNyb3NzQnV0dG9uOiB7XHJcbiAgICAgIGhlaWdodDogJzQwcHgnLFxyXG4gICAgICB3aWR0aDogJzQwcHgnLFxyXG4gICAgfSxcclxuICAgIGJtQ3Jvc3M6IHtcclxuICAgICAgYmFja2dyb3VuZDogJyNiZGMzYzcnLFxyXG4gICAgICBoZWlnaHQ6ICczMHB4JyxcclxuICAgICAgcmlnaHQ6ICcxMHB4J1xyXG4gICAgfSxcclxuICAgIGJtTWVudVdyYXA6IHtcclxuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgYm90dG9tOiAwXHJcbiAgICB9LFxyXG4gICAgYm1NZW51OiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGAke2NvbG9ycy5ibGFja31gLFxyXG4gICAgICBwYWRkaW5nOiAnODBweCAwJyxcclxuICAgICAgZm9udFNpemU6ICcxLjE1ZW0nXHJcbiAgICB9LFxyXG4gICAgYm1Nb3JwaFNoYXBlOiB7XHJcbiAgICAgIGZpbGw6ICcjMzczYTQ3J1xyXG4gICAgfSxcclxuICAgIGJtSXRlbUxpc3Q6IHtcclxuICAgICAgY29sb3I6ICcjYjhiN2FkJyxcclxuICAgICAgb3ZlcmZsb3c6ICdub25lJyxcclxuICAgICAgaGVpZ2h0OiAnMjAlJ1xyXG4gICAgfSxcclxuICAgIGJtSXRlbToge1xyXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIHBhZGRpbmc6ICcxMHB4IDBweCcsXHJcbiAgICAgIGZvbnRTaXplOiAnMjVweCcsXHJcbiAgICB9LFxyXG4gICAgYm1PdmVybGF5OiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsIDAsIDAsIDAuMyknLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGxlZnQ6IDBcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzXHJcbiAgY29uc3QgdXBkYXRlTWVkaWEgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93SGFtbmF2KHdpbmRvdy5pbm5lcldpZHRoIDw9IGJyZWFrcG9pbnRzLmxnKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlTWVkaWEpO1xyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZU1lZGlhKTtcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFNob3dIYW1uYXYod2luZG93LmlubmVyV2lkdGggPD0gYnJlYWtwb2ludHMubGcpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtzaG93SGFtbmF2ID9cclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjc3M9e25hdmJhclN0eWxlc30+XHJcbiAgICAgICAgICAgIDxTZWFyY2hCYXIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPE1lbnUgcmlnaHQgc3R5bGVzPXtidXJnZXJNZW51U3R5bGVzfT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBjc3M9e2J1cmdlck1lbnVJdGVtU3R5bGVzfT5Ib21lPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiYWJvdXRcIiBjc3M9e2J1cmdlck1lbnVJdGVtU3R5bGVzfT5BYm91dDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBjc3M9e2J1cmdlck1lbnVJdGVtU3R5bGVzfT5Mb2cgT3V0PC9hPlxyXG4gICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgIDwvPiA6XHJcbiAgICAgICAgPGRpdiBjc3M9e25hdmJhclN0eWxlc30+XHJcbiAgICAgICAgICA8YSBjc3M9e3NpdGVUaXRsZVN0eWxlc30gaHJlZj1cIi9cIj5TcG90aWZ5RVo8L2E+XHJcbiAgICAgICAgICA8YSBjc3M9e25hdkl0ZW1TdHlsZXN9IGhyZWY9XCIvXCI+SG9tZTwvYT5cclxuICAgICAgICAgIDxhIGNzcz17bmF2SXRlbVN0eWxlc30gaHJlZj1cImFib3V0XCI+QWJvdXQ8L2E+XHJcbiAgICAgICAgICA8U2VhcmNoQmFyIC8+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvb2tpZXMucmVtb3ZlKCdBQ0VTU19UT0tFTicpXHJcbiAgICAgICAgICAgIGNvb2tpZXMucmVtb3ZlKCdJU19BVVRIRUQnKVxyXG4gICAgICAgICAgfX0gY3NzPXtsb2dPdXRCdXR0b25TdHlsZXN9IGhyZWY9XCIvXCI+TG9nIE91dDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9zdHlsZXMvY29sb3JzJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgZ2V0T3B0aW9ucyB9IGZyb20gJy4uL3N0b3JlL3V0aWxzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5pbXBvcnQgeyBnZXRQbGF5bGlzdEJ5SWQsIGNsZWFyUGxheWxpc3RCeUlkIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9wbGF5bGlzdEFjdGlvbic7XHJcbmltcG9ydCBQbGF5bGlzdFZpZXdDb2x1bW4gZnJvbSAnLi4vY29tcG9uZW50cy9QbGF5bGlzdFZpZXdDb2x1bW4nXHJcblxyXG5cclxuZnVuY3Rpb24gUGxheWxpc3RDb2x1bW4ocHJvcHMpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCB7IGFjY2Vzc1Rva2VuIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hdXRoKVxyXG4gIGNvbnN0IHsgcGxheWxpc3RCeUlkIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wbGF5bGlzdClcclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIpXHJcblxyXG4gIGNvbnN0IGR1bW15UGxheWxpc3RJRCA9IFwiMDhFUlI4dE5ybDdXQkkzb204WWt5S1wiXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwcm9wcy5wbGF5bGlzdElkKXtcclxuICAgICAgY29uc29sZS5sb2coXCI9PUdldHRpbmcgcGxheWxpc3Qgd2l0aCBJRDogXCIsIHByb3BzLnBsYXlsaXN0SWQpO1xyXG4gICAgICBkaXNwYXRjaChnZXRQbGF5bGlzdEJ5SWQoYWNjZXNzVG9rZW4sIHByb3BzLnBsYXlsaXN0SWQpKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJSZW5kZXJpbmcgYSBjbGllbnQtc2lkZSBwbGF5bGlzdCwgcHJvcHM6IFwiLCBwcm9wcyk7XHJcbiAgICB9XHJcbiAgfSwgW3Byb3BzLnBsYXlsaXN0SWRdKVxyXG5cclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwiUGxheWxpc3RWaWV3Q29sdW1uOiBcIiArXHJcbiAgICBgPT1wbGF5bGlzdEJ5SWQ6ICR7cGxheWxpc3RCeUlkfSBcXG49PXBsYXlsaXN0OiAke3Byb3BzLnBsYXlsaXN0fSBcXG49PXBsYXlsaXN0SWQ6ICR7cHJvcHMucGxheWxpc3RJZH1gXHJcbiAgKTtcclxuICByZXR1cm4oXHJcbiAgICA8PlxyXG4gICAgeyhwbGF5bGlzdEJ5SWQgfHwgcHJvcHMucGxheWxpc3QpICYmXHJcbiAgICAgIDw+XHJcbiAgICAgIDxQbGF5bGlzdFZpZXdDb2x1bW5cclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgcGxheWxpc3RUaXRsZT17cGxheWxpc3RCeUlkID9cclxuICAgICAgICAgIHBsYXlsaXN0QnlJZC5uYW1lIDpcclxuICAgICAgICAgIHByb3BzLnBsYXlsaXN0VGl0bGVcclxuICAgICAgICB9XHJcbiAgICAgICAgcGxheWxpc3Q9e3BsYXlsaXN0QnlJZCA/XHJcbiAgICAgICAgICAgIHBsYXlsaXN0QnlJZC50cmFja3MuaXRlbXMubWFwKGl0ZW0gPT4gaXRlbS50cmFjaykgOlxyXG4gICAgICAgICAgICBwcm9wcy5wbGF5bGlzdFxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRQbGF5bGlzdD17cGxheWxpc3RCeUlkID9cclxuICAgICAgICAgIChuZXdQbGF5bGlzdCkgPT4ge3BsYXlsaXN0QnlJZCA9IG5ld1BsYXlsaXN0fTpcclxuICAgICAgICAgIHByb3BzLnNldFBsYXlsaXN0XHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgICB9XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcblBsYXlsaXN0Q29sdW1uLnByb3BUeXBlcyA9IHtcclxuICBhZGRlZFNvbmdzOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgcGxheWxpc3Q6IFByb3BUeXBlcy5hcnJheSxcclxuICBwbGF5bGlzdElkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIG1lbnU6IFByb3BUeXBlcy5lbGVtZW50LFxyXG4gIG9uUGx1c0J1dHRvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcclxuICBzZXRQbGF5bGlzdDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgcGxheWxpc3RUaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxufVxyXG5QbGF5bGlzdENvbHVtbi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYWRkZWRTb25nczogW10sXHJcbiAgcGxheWxpc3Q6IFtdLFxyXG4gIHBsYXlsaXN0VGl0bGU6IFwiXCIsXHJcbiAgcGxheWxpc3RJZDogXCJcIixcclxuICBtZW51OiBudWxsLFxyXG4gIG9uUGx1c0J1dHRvbkNsaWNrOiBudWxsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXlsaXN0Q29sdW1uXHJcbiIsIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9zdHlsZXMvY29sb3JzJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IFNwb3RpZnlQbGF5ZXIgZnJvbSAnLi9TcG90aWZ5UGxheWVyJ1xyXG5cclxuY29uc3QgcGxheWxpc3RWaWV3SXRlbUJ1dHRvblN0eWxlcyA9IGNzc2BcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcblxyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDA7XHJcbiAgZm9udC1zaXplOiAxMDAlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5cclxuY29uc3QgUGx1c0J1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgJHtwbGF5bGlzdFZpZXdJdGVtQnV0dG9uU3R5bGVzfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5kYXJrR3JlZW59O1xyXG4gIDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5ob3ZlckdyZWVufTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBNaW51c0J1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgJHtwbGF5bGlzdFZpZXdJdGVtQnV0dG9uU3R5bGVzfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5yZWR9O1xyXG4gIDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5ob3ZlclJlZH07XHJcbiAgfVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gUGxheWxpc3RWaWV3SXRlbShwcm9wcyl7XHJcbiAgZnVuY3Rpb24gb25QbHVzQnV0dG9uQ2xpY2soKXtcclxuICAgIHByb3BzLm9uUGx1c0J1dHRvbkNsaWNrKHByb3BzLnRyYWNrKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb25NaW51c0J1dHRvbkNsaWNrKCl7XHJcbiAgICBwcm9wcy5vbk1pbnVzQnV0dG9uQ2xpY2socHJvcHMudHJhY2sudXJpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPGxpPlxyXG4gICAgICA8U3BvdGlmeVBsYXllclxyXG4gICAgICAgIHVyaT17cHJvcHMudHJhY2sudXJpfVxyXG4gICAgICAgIHBsYXllckhlaWdodD1cIjgwcHhcIlxyXG4gICAgICAgIHBsYXllcldpZHRoPXtwcm9wcy5oYXNQbHVzQnV0dG9uIHx8IHByb3BzLmhhc01pbnVzQnV0dG9uID8gXCI5MCVcIiA6IFwiMTAwJVwifVxyXG4gICAgICAvPlxyXG4gICAgICB7cHJvcHMuaGFzUGx1c0J1dHRvbiAmJiA8UGx1c0J1dHRvbiBvbkNsaWNrPXtvblBsdXNCdXR0b25DbGlja30+KzwvUGx1c0J1dHRvbj59XHJcbiAgICAgIHtwcm9wcy5oYXNNaW51c0J1dHRvbiAmJiA8TWludXNCdXR0b24gb25DbGljaz17b25NaW51c0J1dHRvbkNsaWNrfT4tPC9NaW51c0J1dHRvbj59XHJcbiAgICA8L2xpPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gUGxheWxpc3RWaWV3KHByb3BzKSB7XHJcbiAgY29uc3Qgc3R5bGVzID0gY3NzYFxyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gIGA7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dWwgY3NzPXtzdHlsZXN9PlxyXG4gICAgICB7cHJvcHMucGxheWxpc3QubWFwKCh0cmFjaywgaWR4KSA9PlxyXG4gICAgICAgIDxQbGF5bGlzdFZpZXdJdGVtXHJcbiAgICAgICAgICBrZXkgPSB7aWR4fVxyXG4gICAgICAgICAgdHJhY2sgPSB7dHJhY2t9XHJcbiAgICAgICAgICBoYXNQbHVzQnV0dG9uID0ge3Byb3BzLmhhc1BsdXNCdXR0b259XHJcbiAgICAgICAgICBoYXNNaW51c0J1dHRvbiA9IHtwcm9wcy5oYXNNaW51c0J1dHRvbn1cclxuICAgICAgICAgIG9uUGx1c0J1dHRvbkNsaWNrID0ge3Byb3BzLm9uUGx1c0J1dHRvbkNsaWNrfVxyXG4gICAgICAgICAgb25NaW51c0J1dHRvbkNsaWNrID0ge3Byb3BzLm9uTWludXNCdXR0b25DbGlja31cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgPC91bD5cclxuICApXHJcbn1cclxuXHJcblBsYXlsaXN0Vmlldy5wcm9wVHlwZXMgPSB7XHJcbiAgcGxheWxpc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICBoYXNQbHVzQnV0dG9uOiBQcm9wVHlwZXMuYm9vbGVhbixcclxuICBoYXNNaW51c0J1dHRvbjogUHJvcFR5cGVzLmJvb2xlYW4sXHJcbiAgb25QbHVzQnV0dG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jdGlvbixcclxuICBvbk1pbnVzQnV0dG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jdGlvblxyXG59XHJcblxyXG5QbGF5bGlzdFZpZXcuZGVmYXVsdFByb3BzID0ge1xyXG4gIGhhc1BsdXNCdXR0b246IGZhbHNlLFxyXG4gIGhhc01pbnVzQnV0dG9uOiBmYWxzZSxcclxuICBvblBsdXNCdXR0b25DbGljazogbnVsbCxcclxuICBvbk1pbnVzQnV0dG9uQ2xpY2s6IG51bGxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWxpc3RWaWV3O1xyXG4iLCIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vc3R5bGVzL2NvbG9ycyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCBQbGF5bGlzdFZpZXcgZnJvbSAnLi9QbGF5bGlzdFZpZXcnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG4gIC8vbW9kYWxcclxuXHJcbiAgY29uc3Qgb3V0ZXJDb250YWluZXJTdHlsaW5nID0gY3NzYFxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA5JTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDEwMTA7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYDtcclxuICBjb25zdCBjb250YWluZXJTdHlsaW5nID0gY3NzYFxyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpdntcclxuICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgIH1cclxuICAgIGlucHV0e1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxuICAgIHRleHRhcmVhe1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxuICAgIC5QbGF5bGlzdERlc2NyaXB0aW9ue1xyXG4gICAgICBoZWlnaHQ6IDUwJTtcclxuICAgIH1cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGZsb3JhbHdoaXRlO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGA7XHJcbmNvbnN0IGJ1dHRvbkNvbnRhaW5lclN0eWxpbmc9Y3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBidXR0b257XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuXHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcbmNvbnN0IFBsYXlsaXN0VGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogJHtjb2xvcnMuYmxhY2t9O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAke2NvbG9ycy5kYXJrR3JlZW59O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBTYXZlU3ViUGxheWxpc3RCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDQwcHg7XHJcbiAgcmlnaHQ6IDEyLjUlO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgZm9udC1zaXplOiAxMjUlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5kYXJrR3JlZW59O1xyXG4gIDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5ob3ZlckdyZWVufTtcclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBQbGF5bGlzdFZpZXdDb2x1bW4ocHJvcHMpIHtcclxuICBjb25zdCBbdG9nZ2xlTW9kYWwsIHNldFRvZ2dsZU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtwbGF5bGlzdE5hbWUsIHNldFBsYXlsaXN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFtwbGF5bGlzdERlY3JpcHRpb24sIHNldFBsYXlsaXN0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCB7IGFjY2Vzc1Rva2VuIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hdXRoKVxyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlcilcclxuICBjb25zdCBbcmVtb3ZlZFNvbmdVcmlzLCBzZXRSZW1vdmVkU29uZ1VyaXNdID0gdXNlU3RhdGUoW10pXHJcbiAgZnVuY3Rpb24gY3JlYXRlTW9kYWxDbGlja2VkKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbWFrZU5ld1BsYXlsaXN0KHBsYXlsaXN0TmFtZSwgcGxheWxpc3REZWNyaXB0aW9uKVxyXG4gICAgc2V0VG9nZ2xlTW9kYWwoIXRvZ2dsZU1vZGFsKVxyXG4gIH1cclxuICBmdW5jdGlvbiBjYW5jZWxNb2RhbENsaWNrZWQoZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRUb2dnbGVNb2RhbCghdG9nZ2xlTW9kYWwpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBVcGRhdGVQbGF5bGlzdE5hbWUoZSl7XHJcbiAgICBzZXRQbGF5bGlzdE5hbWUoZS50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIFVwZGF0ZVBsYXlsaXN0RGVzY3JpcHRpb24oZSl7XHJcbiAgICBzZXRQbGF5bGlzdERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxuICBjb25zdCBzdHlsZXMgPSBjc3NgXHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgYDtcclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlRnJvbXBsYXlsaXN0KHVyaSkge1xyXG4gICAgLy9UT0RPOiBJcyB0aGVyZSBhIHdheSB0byBub3QgcmVtb3ZlIGR1cGxpY2F0ZSBzb25ncz9cclxuICAgIHByb3BzLnNldFBsYXlsaXN0KFtcclxuICAgICAgLi4ucHJvcHMucGxheWxpc3QuZmlsdGVyKHRyYWNrID0+IHRyYWNrLnVyaSAhPT0gdXJpKSxcclxuICAgICAgLi4ucHJvcHMuYWRkZWRTb25ncy5maWx0ZXIodHJhY2sgPT4gdHJhY2sudXJpICE9PSB1cmkpXHJcbiAgICBdKVxyXG5cclxuICAgIHNldFJlbW92ZWRTb25nVXJpcyhbLi4ucmVtb3ZlZFNvbmdVcmlzLCB1cmldKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gbWFrZU5ld1BsYXlsaXN0KG5hbWVPZlNvbmcsIG5hbWVPZlBsYXlsaXN0KSB7XHJcbiAgICBjb25zdCBnZXRPcHRpb25zID0gKGFjY2Vzc1Rva2VuLCB1cmwsIGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgYWNjZXNzVG9rZW4sXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvdXNlcnMvJHt1c2VyLmlkfS9wbGF5bGlzdHNgXHJcbiAgICAgIGF4aW9zKGdldE9wdGlvbnMoYWNjZXNzVG9rZW4sIHVybCwge1xyXG4gICAgICAgICduYW1lJzogbmFtZU9mU29uZyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiBuYW1lT2ZQbGF5bGlzdCxcclxuICAgICAgICAncHVibGljJzogJ2ZhbHNlJ1xyXG4gICAgICB9KSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWFrZSBuZXcgcGxheWxpc3QgcmVzcG9uc2U6XCIsIHJlc3BvbnNlKVxyXG4gICAgICAgICAgcHV0SXRlbXNJblBsYXlsaXN0KHJlc3BvbnNlLmRhdGEuaWQpXHJcbiAgICAgICAgICAvL3NldE1ha2luZ3BsYXlsaXN0KGZhbHNlKVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIVFRQIHJlcXVlc3QgYWJvcnRlZFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gcHV0SXRlbXNJblBsYXlsaXN0KGlkKSB7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICB1cmw6IGBodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9wbGF5bGlzdHMvJHtpZH0vdHJhY2tzP3VyaXM9JHtlbmNvZGVVUklDb21wb25lbnQocHJvcHMuYWRkZWRTb25ncy5tYXAoKHVyaSkgPT4gdXJpLnVyaSkpfWAsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyBhY2Nlc3NUb2tlbixcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBheGlvcyhvcHRpb25zKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJQdXR0aW5nIEl0ZW1zIGluIHRoYXQgbmV3IHBsYXlsaXN0OiBcIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIVFRQIHJlcXVlc3QgYWJvcnRlZFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBmdW5jdGlvbiBzYXZlUGxheWxpc3QoKSB7XHJcblxyXG4gICAgaWYgKHByb3BzLnBsYXlsaXN0SWQpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJBZGRpbmcgdG8gdGhpcyBwbGF5bGlzdDogXCIsIHByb3BzLnBsYXlsaXN0SWQpO1xyXG4gICAgICBwdXRJdGVtc0luUGxheWxpc3QocHJvcHMucGxheWxpc3RJZClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiTWFraW5nIGEgbmV3IHBsYXlsaXN0XCIpO1xyXG4gICAgICAvL1RPR0dMRSBNT0RBTCwgbGV0IHRoZSB1c2VyIGVudGVyIHRoZSBwbGF5bGlzdCBkYXRhXHJcbiAgICAgIC8vb25TVUJNSVQsIHBhc3MgZGF0YSB0byBtYWtlTmV3UGxheWxpc3RcclxuICAgICAgc2V0VG9nZ2xlTW9kYWwoIXRvZ2dsZU1vZGFsKVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKFwiUGxheWxpc3RWaWV3Q29sdW1uIHByb3BzOiBcIiwgcHJvcHMpO1xyXG4gIHJldHVybihcclxuICAgIDxkaXYgY3NzPXtzdHlsZXN9PlxyXG4gICAgICA8UGxheWxpc3RUaXRsZT57cHJvcHMucGxheWxpc3RUaXRsZX08L1BsYXlsaXN0VGl0bGU+XHJcbiAgICAgIHtwcm9wcy5tZW51fVxyXG4gICAgICA8UGxheWxpc3RWaWV3XHJcbiAgICAgICAgcGxheWxpc3Q9e3Byb3BzLmFkZGVkU29uZ3M/IHByb3BzLmFkZGVkU29uZ3MgOiBbXX1cclxuICAgICAgICBoYXNQbHVzQnV0dG9uPXtwcm9wcy5oYXNQbHVzQnV0dG9ufVxyXG4gICAgICAgIG9uUGx1c0J1dHRvbkNsaWNrPXtwcm9wcy5vblBsdXNCdXR0b25DbGlja31cclxuICAgICAgICBoYXNNaW51c0J1dHRvbj17cHJvcHMuaGFzTWludXNCdXR0b259XHJcbiAgICAgICAgb25NaW51c0J1dHRvbkNsaWNrPXtyZW1vdmVGcm9tcGxheWxpc3R9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxQbGF5bGlzdFZpZXdcclxuICAgICAgICBwbGF5bGlzdD17cHJvcHMucGxheWxpc3R9XHJcbiAgICAgICAgaGFzUGx1c0J1dHRvbj17cHJvcHMuaGFzUGx1c0J1dHRvbn1cclxuICAgICAgICBvblBsdXNCdXR0b25DbGljaz17cHJvcHMub25QbHVzQnV0dG9uQ2xpY2t9XHJcbiAgICAgICAgaGFzTWludXNCdXR0b249e3Byb3BzLmhhc01pbnVzQnV0dG9ufVxyXG4gICAgICAgIG9uTWludXNCdXR0b25DbGljaz17cmVtb3ZlRnJvbXBsYXlsaXN0fVxyXG4gICAgICAvPlxyXG4gICAgICB7KChwcm9wcy5hZGRlZFNvbmdzICYmIHByb3BzLmFkZGVkU29uZ3MubGVuZ3RoID4gMCkgfHwgcmVtb3ZlZFNvbmdVcmlzLmxlbmd0aCA+IDApICYmXHJcbiAgICAgICAgPFNhdmVTdWJQbGF5bGlzdEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4geyBzYXZlUGxheWxpc3QoKSB9fT5cclxuICAgICAgICAgIFNhdmUgUGxheWxpc3RcclxuICAgICAgICA8L1NhdmVTdWJQbGF5bGlzdEJ1dHRvbj5cclxuICAgICAgfVxyXG4gICAgICA8ZGl2PlxyXG4gICAgIHt0b2dnbGVNb2RhbD8gKFxyXG4gICAgICAgPGRpdiBjc3M9e291dGVyQ29udGFpbmVyU3R5bGluZ30+XHJcbiAgICAgICAgIDxmb3JtIGNzcz17Y29udGFpbmVyU3R5bGluZ30+XHJcbiAgICAgICAgICAgPGRpdj5OZXcgcGxheWxpc3QgaW5mb3JtYXRpb248L2Rpdj5cclxuICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlBsYXlsaXN0IG5hbWUuLi5cIiBvbkNoYW5nZT17VXBkYXRlUGxheWxpc3ROYW1lfSB2YWx1ZT17cGxheWxpc3ROYW1lfS8+XHJcbiAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cIlBsYXlsaXN0RGVzY3JpcHRpb25cInR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJQbGF5bGlzdCBkZXNjcmlwdGlvbi4uLlwiIG9uQ2hhbmdlPXtVcGRhdGVQbGF5bGlzdERlc2NyaXB0aW9ufSB2YWx1ZT17cGxheWxpc3REZWNyaXB0aW9ufS8+XHJcblxyXG4gICAgICAgICA8ZGl2IGNzcz17YnV0dG9uQ29udGFpbmVyU3R5bGluZ30+XHJcbiAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjYW5jZWxNb2RhbENsaWNrZWR9PiBDYW5jZWwgPC9idXR0b24+XHJcbiAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjcmVhdGVNb2RhbENsaWNrZWR9PiBBZGQgbmV3IHBsYXlsaXN0IDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgPC9kaXY+KVxyXG4gICAgIDogbnVsbFxyXG4gICAgIH1cclxuICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuUGxheWxpc3RWaWV3Q29sdW1uLnByb3BUeXBlcyA9IHtcclxuICBwbGF5bGlzdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gIGFkZGVkU29uZ3M6IFByb3BUeXBlcy5hcnJheSxcclxuICBzZXRQbGF5bGlzdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBwbGF5bGlzdFRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHBsYXlsaXN0SWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbWVudTogUHJvcFR5cGVzLmVsZW1lbnQsXHJcbiAgaGFzUGx1c0J1dHRvbjogUHJvcFR5cGVzLmJvb2xlYW4sXHJcbiAgaGFzTWludXNCdXR0b246IFByb3BUeXBlcy5ib29sZWFuLFxyXG4gIG9uUGx1c0J1dHRvbkNsaWNrOiBQcm9wVHlwZXMuZnVuY1xyXG59XHJcblxyXG5QbGF5bGlzdFZpZXdDb2x1bW4uZGVmYXVsdFByb3BzID0ge1xyXG4gIGFkZGVkU29uZ3M6IFtdLFxyXG4gIHBsYXlsaXN0VGl0bGU6IFwiXCIsXHJcbiAgcGxheWxpc3RJZDogXCJcIixcclxuICBtZW51OiBudWxsLFxyXG4gIGhhc1BsdXNCdXR0b246IGZhbHNlLFxyXG4gIGhhc01pbnVzQnV0dG9uOiBmYWxzZSxcclxuICBvblBsdXNCdXR0b25DbGljazogbnVsbFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5bGlzdFZpZXdDb2x1bW47XHJcbiIsIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcblxyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9zdHlsZXMvY29sb3JzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgRmFQbHVzIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgdXNlUGxheWxpc3RzIGZyb20gJy4uL2hvb2tzL3VzZVBsYXlsaXN0cyc7XHJcblxyXG5jb25zdCBTdHlsZWRTaWRlYmFyID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpOyAvL2ZhY3RvciBpbiB0aGUgdG9wIGFuZCBib3R0b21cclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogODFweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JleTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmRhcmtHcmVlbn07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcblxyXG5gO1xyXG5cclxuY29uc3QgUGxheWxpc3RzTGlzdCA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBTaWRlYmFyKCkge1xyXG4gICAgY29uc3QgeyBwbGF5bGlzdHMgfSA9IHVzZVBsYXlsaXN0cygpXHJcblxyXG4gICAgY29uc3Qgc2lkZWJhckljb25TdHlsZXMgPSBjc3NgXHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICAgOmhvdmVye1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgfVxyXG4gICAgYDtcclxuXHJcbiAgICBjb25zdCBuZXdQbGF5bGlzdEJ1dHRvblN0eWxlcyA9IGNzc2BcclxuICAgICAgICAke3NpZGViYXJJY29uU3R5bGVzfTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICR7Y29sb3JzLmRhcmtHcmVlbn07XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBgO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZFNpZGViYXI+XHJcbiAgICAgICAgICAgIDxQbGF5bGlzdHNMaXN0PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXt7cGF0aG5hbWU6IFwiL1Nwb3RpZnlUaW5kZXJQYWdlXCIsIHF1ZXJ5OiB7cGxheWxpc3RJZDogbnVsbCwgb25lU29uZ1NlZWQ6IG51bGx9fX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjc3M9e25ld1BsYXlsaXN0QnV0dG9uU3R5bGVzfT5cclxuICAgICAgICAgICAgICAgICAgICA8RmFQbHVzIGNzcz17Y3NzKHtoZWlnaHQ6JzEwMCUnfSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICB7IHBsYXlsaXN0cyAmJiBwbGF5bGlzdHMubWFwKHBsYXlsaXN0ID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3BsYXlsaXN0cy8ke3BsYXlsaXN0LmlkfWB9IGtleT17cGxheWxpc3QuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5bGlzdC5pbWFnZXNbMF0gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5bGlzdC5pbWFnZXNbMF0udXJsIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvaW1hZ2VzL3Nwb3RpZnktbG9nby5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzPXtzaWRlYmFySWNvblN0eWxlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwbGF5bGlzdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwbGF5bGlzdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgPC9QbGF5bGlzdHNMaXN0PlxyXG5cclxuICAgICAgICA8L1N0eWxlZFNpZGViYXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xyXG4iLCIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIFNwb3RpZnlQbGF5ZXIocHJvcHMpe1xyXG4gIHJldHVybihcclxuICAgIDxpZnJhbWUgc3JjPXtgaHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2VtYmVkP3VyaT0ke3Byb3BzLnVyaX1gfSB3aWR0aD17cHJvcHMucGxheWVyV2lkdGh9IGhlaWdodD17cHJvcHMucGxheWVySGVpZ2h0fSBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvd3RyYW5zcGFyZW5jeT1cInRydWVcIiBhbGxvdz1cImVuY3J5cHRlZC1tZWRpYVwiPjwvaWZyYW1lPlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTcG90aWZ5UGxheWVyO1xyXG4iLCIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcclxuaW1wb3J0IFNwb3RpZnlQbGF5ZXIgZnJvbSAnLi9TcG90aWZ5UGxheWVyJ1xyXG5mdW5jdGlvbiBTcG90aWZ5VGluZGVyKHByb3BzKXtcclxuICBjb25zdCBbY291bnRlciwgc2V0Q291bnRlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBTcG90aWZ5VGluZGVyQ29udGFpbmVyU3R5bGluZz1jc3NgXHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaW1ne1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICB0cmFuc2Zvcm06c2NhbGUoMS4xLDEuMSk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMSwxLjEpO1xyXG4gICAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjEsMS4xKTtcclxuICAgIH1cclxuICB9XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbiAgZnVuY3Rpb24gc3dpcGVMZWZ0Q2xpY2tlZChlKXtcclxuICAgIGlmIChjb3VudGVyIDwgcHJvcHMucGxheWxpc3QubGVuZ3RoIC0gMSl7XHJcbiAgICAgIHNldENvdW50ZXIoY291bnRlcisxKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAvL3JlcXVlc3QgbmV3IGFwaSBjYWxsXHJcbiAgICAgIHNldENvdW50ZXIoMCk7IC8vcmVzZXQgY291bnRlclxyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBzd2lwZVJpZ2h0Q2xpY2tlZChlKXtcclxuICAgIGlmIChjb3VudGVyIDwgcHJvcHMucGxheWxpc3QubGVuZ3RoIC0gMSl7XHJcbiAgICAgIC8vIGFkZCBzb25nIHVyaSBpbnRvIHJlZHV4IHByb3BzLnBsYXlsaXN0W2NvdW50ZXJdLnVyaVxyXG4gICAgICBwcm9wcy5Td2lwZVJpZ2h0KHByb3BzLnBsYXlsaXN0W2NvdW50ZXJdKVxyXG4gICAgICBjb25zb2xlLmxvZyhcIlNvbmcgb2JqZWN0IGluIGNvbXBvbmVudDogXCIgKyBwcm9wcy5wbGF5bGlzdFtjb3VudGVyXSlcclxuICAgICAgc2V0Q291bnRlcihjb3VudGVyKzEpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIC8vcmVxdWVzdCBuZXcgYXBpIGNhbGxcclxuICAgICAgc2V0Q291bnRlcigwKTsgLy9yZXNldCBjb3VudGVyXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGRpdiBjc3M9e1Nwb3RpZnlUaW5kZXJDb250YWluZXJTdHlsaW5nfT5cclxuICAgICAge2NvbnNvbGUubG9nKFwiUGxheWxpc3Qgb2JqZWN0OiBcIiArIHByb3BzLnBsYXlsaXN0W2NvdW50ZXJdLnVyaSl9XHJcblxyXG4gICAgICA8U3BvdGlmeVBsYXllciB1cmk9e3Byb3BzLnBsYXlsaXN0W2NvdW50ZXJdLnVyaX0gcGxheWVyV2lkdGg9XCIzODBweFwiIHBsYXllckhlaWdodD1cIjM4MHB4XCIvPlxyXG5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxpbWcgc3JjPVwiLi4vaW1hZ2VzL3gtaWNvbi10cmFuc3BhcmVudC5wbmdcIiBhbHQ9XCJzd2lwZSBsZWZ0XCIgb25DbGljaz17c3dpcGVMZWZ0Q2xpY2tlZH0vPlxyXG4gICAgICA8aW1nIHNyYz1cIi4uL2ltYWdlcy9oZWFydC1pY29uLXRyYW5zcGFyZW50LnBuZ1wiIGFsdD1cInN3aXBlIHJpZ2h0XCIgb25DbGljaz17c3dpcGVSaWdodENsaWNrZWR9Lz5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTcG90aWZ5VGluZGVyXHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgZ2V0UGxheWxpc3RzTGlzdCB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvcGxheWxpc3RBY3Rpb24nXHJcblxyXG5mdW5jdGlvbiB1c2VQbGF5bGlzdHMoKSB7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgICBjb25zdCB7IGFjY2Vzc1Rva2VuIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hdXRoKVxyXG4gICAgY29uc3QgeyBwbGF5bGlzdHMgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnBsYXlsaXN0KVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBY2Nlc3MgdG9rZW46IFwiLCBhY2Nlc3NUb2tlbik7XHJcbiAgICAgICAgZGlzcGF0Y2goZ2V0UGxheWxpc3RzTGlzdChhY2Nlc3NUb2tlbikpXHJcblxyXG4gICAgfSwgW10pXHJcbiAgICByZXR1cm4geyBwbGF5bGlzdHMgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VQbGF5bGlzdHM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgLy8gRklYTUU6IHByb3BlciByb3V0ZSBhbm5vdW5jaW5nIGF0IFJvdXRlciBsZXZlbCwgbm90IExpbms6XG4gICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9XG4gICAgICByb3V0ZXIgJiZcbiAgICAgIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgY3VyTG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGlkbGVUaW1lb3V0PFQ+KG1zOiBudW1iZXIsIGVycjogRXJyb3IpOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChfcmVzb2x2ZSwgcmVqZWN0KSA9PlxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VGltZW91dCgoKSA9PiByZWplY3QoZXJyKSwgbXMpKVxuICApXG59XG5cbi8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpOiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+IHtcbiAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICB9XG5cbiAgY29uc3Qgb25CdWlsZE1hbmlmZXN0OiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+ID0gbmV3IFByb21pc2U8XG4gICAgQ2xpZW50QnVpbGRNYW5pZmVzdFxuICA+KChyZXNvbHZlKSA9PiB7XG4gICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCXG4gICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuICByZXR1cm4gUHJvbWlzZS5yYWNlKFtcbiAgICBvbkJ1aWxkTWFuaWZlc3QsXG4gICAgaWRsZVRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gICAgKSxcbiAgXSlcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHsgc2NyaXB0cywgY3NzIH0gPSBhd2FpdCBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICBjb25zdCBbLCBzdHlsZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgIF0gYXMgY29uc3QpXG5cbiAgICAgICAgICBjb25zdCBlbnRyeXBvaW50OiBSb3V0ZUVudHJ5cG9pbnQgPSBhd2FpdCBQcm9taXNlLnJhY2UoW1xuICAgICAgICAgICAgdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSksXG4gICAgICAgICAgICBpZGxlVGltZW91dDxSb3V0ZUxvYWRlckVudHJ5PihcbiAgICAgICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgICAgIG1hcmtBc3NldEVycm9yKFxuICAgICAgICAgICAgICAgIG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSlcbiAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICA+KHsgc3R5bGVzIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUpKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuICAnaXNMb2NhbGVEb21haW4nLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgJiZcbiAgICAgIHBhdGggIT09ICcvJyArIGxvY2FsZVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgfHwgcGF0aCA9PT0gJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgKHNlZ21lbnQpID0+IGVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbilcbiAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pXG5cbiAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKVxuICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBc1xuXG4gIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZilcbiAgY29uc3QgcHJlcGFyZWRBcyA9IGFzXG4gICAgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNSZWFkeTogYm9vbGVhblxuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICAgIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9XG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnRcblxuICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICB0aGlzLmlzUmVhZHkgPSAhIShcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8XG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8XG4gICAgICAoIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaClcbiAgICApXG4gICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgaWYgKChvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRvIHNjcm9sbCByZXNldCBiZWhhdmlvciB1bmxlc3MgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYmVcbiAgICAvLyBgZmFsc2VgISBUaGlzIG1ha2VzIHRoZSBiZWhhdmlvciBiZXR3ZWVuIHVzaW5nIGBSb3V0ZXIjcHVzaGAgYW5kIGFcbiAgICAvLyBgPExpbmsgLz5gIGNvbnNpc3RlbnQuXG4gICAgb3B0aW9ucy5zY3JvbGwgPSAhIShvcHRpb25zLnNjcm9sbCA/PyB0cnVlKVxuXG4gICAgbGV0IGxvY2FsZUNoYW5nZSA9IG9wdGlvbnMubG9jYWxlICE9PSB0aGlzLmxvY2FsZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID1cbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlXG4gICAgICAgICAgPyB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKVxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpXG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgICBoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICAgICkucGF0aG5hbWVcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2VcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsZXM/LmluY2x1ZGVzKHRoaXMubG9jYWxlISkpIHtcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgKVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICFkaWROYXZpZ2F0ZSAmJlxuICAgICAgICAgIGRldGVjdGVkRG9tYWluICYmXG4gICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcylcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtcbiAgICAgICAgICAgIGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICAgIH0ke2FkZEJhc2VQYXRoKFxuICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgIDogYC8ke3RoaXMubG9jYWxlfWBcbiAgICAgICAgICAgIH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLydcbiAgICAgICAgICApfWBcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByb3V0ZVByb3BzID0geyBzaGFsbG93IH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKVxuICAgIH1cblxuICAgIGFzID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgICBvcHRpb25zLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBsZXQgcGFnZXM6IGFueSwgcmV3cml0ZXM6IGFueVxuICAgIHRyeSB7XG4gICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShkZWxCYXNlUGF0aChhcyksIHRoaXMubG9jYWxlKSksXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lISxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG4gICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICByb3V0ZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMsIGZhbHNlKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG4gICAgICBhd2FpdCB0aGlzLnNldChcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lISxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGNsZWFuZWRBcyxcbiAgICAgICAgcm91dGVJbmZvLFxuICAgICAgICBmb3JjZWRTY3JvbGwgfHxcbiAgICAgICAgICAoaXNWYWxpZFNoYWxsb3dSb3V0ZSB8fCAhb3B0aW9ucy5zY3JvbGwgPyBudWxsIDogeyB4OiAwLCB5OiAwIH0pXG4gICAgICApLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgfSlcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgICAgIHJvdXRlSW5mb0VycixcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wcyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJlc29sdmVkQXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXNcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID0gdGhpcy5jb21wb25lbnRzW1xuICAgICAgICByb3V0ZVxuICAgICAgXVxuICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPVxuICAgICAgICBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDogZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGFyc2VkSHJlZi5wYXRobmFtZSEpXG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcywgZmFsc2UpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHVybCkudGhlbigoaXNTc2c6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgcmV0dXJuIGlzU3NnXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzUGF0aCxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoKSB7fVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vc2VydmVyL2NvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIHVuc3RhYmxlX0pzUHJlbG9hZD86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGRlZmVyPzogc3RyaW5nW107IGVhZ2VyPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgSGFsZlBhZ2VQbGF5bGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0hhbGZQYWdlUGxheWxpc3QnXHJcbmltcG9ydCBTcG90aWZ5VGluZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvU3BvdGlmeVRpbmRlcidcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInXHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhcidcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBnZXRTb25nUmVjb21tZW5kYXRpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9zb25nQWN0aW9uJztcclxuaW1wb3J0IFBsYXlsaXN0Q29sdW1uIGZyb20gJy4uL2NvbXBvbmVudHMvUGxheWxpc3RDb2x1bW4nXHJcbmltcG9ydCBQbGF5bGlzdFZpZXdDb2x1bW4gZnJvbSAnLi4vY29tcG9uZW50cy9QbGF5bGlzdFZpZXdDb2x1bW4nO1xyXG5pbXBvcnQgeyBnZXRSZWNlbnRzIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9zb25nQWN0aW9uJztcclxuXHJcbi8vbm90ZSB0cmFjayBpcyBhbiBhcnJheSB3aXRoIG9uZSBvYmplY3QsIGFuZCB0aGF0IG9iamVjdCBjb250YWluc1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0SGFsZlBhZ2VQbGF5bGlzdCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCB7IGFjY2Vzc1Rva2VuIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hdXRoKVxyXG4gIGNvbnN0IHsgcmVjb21tZW5kYXRpb25zIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5zb25nKVxyXG4gIGNvbnN0IFtzd2lwZVJpZ2h0TGlzdCwgYWRkU3dpcGVSaWdodExpc3RdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgeyByZWNlbnRTb25ncyB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuc29uZylcclxuICBmdW5jdGlvbiBzd2lwZVJpZ2h0KHNvbmdPYmplY3Qpe1xyXG4gICAgYWRkU3dpcGVSaWdodExpc3QoWy4uLnN3aXBlUmlnaHRMaXN0LCBzb25nT2JqZWN0XSlcclxuICAgIGNvbnNvbGUubG9nKFwiU29uZyBvYmplY3Q6IFwiICsgc29uZ09iamVjdClcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwicXVlcnkgc2VlZCBpcyA6IFwiICsgcm91dGVyLnF1ZXJ5Lm9uZVNvbmdTZWVkKVxyXG4gICAgaWYgKHJvdXRlci5xdWVyeS5vbmVTb25nU2VlZCl7XHJcbiAgICAgIGRpc3BhdGNoKGdldFNvbmdSZWNvbW1lbmRhdGlvbnMoYWNjZXNzVG9rZW4sIHJvdXRlci5xdWVyeS5vbmVTb25nU2VlZCkpXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgZGlzcGF0Y2goZ2V0UmVjZW50cyhhY2Nlc3NUb2tlbikpXHJcbiAgICAgIGRpc3BhdGNoKGdldFNvbmdSZWNvbW1lbmRhdGlvbnMoYWNjZXNzVG9rZW4sIHJlY2VudFNvbmdzLml0ZW1zWzBdLnRyYWNrLmlkKSlcclxuICAgICAgY29uc29sZS5sb2coXCJyZWNlbnQgc29uZyBmaXJzdCBpdGVtOiBcIisgcmVjZW50U29uZ3MuaXRlbXNbMF0udHJhY2suaWQpO1xyXG4gICAgfVxyXG5cclxuICB9LCBbXSlcclxuXHJcbiAgY29uc29sZS5sb2coJ1JlY29tbWVuZGF0aW9uID09PSAnLCByZWNvbW1lbmRhdGlvbnMpXHJcblxyXG4gIGNvbnN0IFNwb3RpZnlUaW5kZXJQYWdlQ29udGFpbmVyU3R5bGluZyA9IGNzc2BcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBgO1xyXG4gIGNvbnN0IFtkdW1teURhdGEsIHNldER1bW15RGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgXCJ0cmFja3NcIjogW1xyXG4gICAge1xyXG4gICAgICBcImFsYnVtXCI6IHtcclxuICAgICAgICBcImFsYnVtX3R5cGVcIjogXCJBTEJVTVwiLFxyXG4gICAgICAgIFwiYXJ0aXN0c1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZXh0ZXJuYWxfdXJsc1wiOiB7XHJcbiAgICAgICAgICAgICAgXCJzcG90aWZ5XCI6IFwiaHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC8yNlZGVGcyejhZUjBjQ3V3THpFU2kyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvYXJ0aXN0cy8yNlZGVGcyejhZUjBjQ3V3THpFU2kyXCIsXHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIyNlZGVGcyejhZUjBjQ3V3THpFU2kyXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkhhbHNleVwiLFxyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJhcnRpc3RcIixcclxuICAgICAgICAgICAgXCJ1cmlcIjogXCJzcG90aWZ5OmFydGlzdDoyNlZGVGcyejhZUjBjQ3V3THpFU2kyXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiZXh0ZXJuYWxfdXJsc1wiOiB7XHJcbiAgICAgICAgICBcInNwb3RpZnlcIjogXCJodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vN0dqRzkxdHlIUU5HRUh6S0phcU9pMFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9hbGJ1bXMvN0dqRzkxdHlIUU5HRUh6S0phcU9pMFwiLFxyXG4gICAgICAgIFwiaWRcIjogXCI3R2pHOTF0eUhRTkdFSHpLSmFxT2kwXCIsXHJcbiAgICAgICAgXCJpbWFnZXNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImhlaWdodFwiOiA2NDAsXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzBmN2FkNmQ4ZDgyOTkwNmMxN2NhZTIxMFwiLFxyXG4gICAgICAgICAgICBcIndpZHRoXCI6IDY0MFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJoZWlnaHRcIjogMzAwLFxyXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMDFlMDIwZjdhZDZkOGQ4Mjk5MDZjMTdjYWUyMTBcIixcclxuICAgICAgICAgICAgXCJ3aWR0aFwiOiAzMDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDY0LFxyXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMDQ4NTEwZjdhZDZkOGQ4Mjk5MDZjMTdjYWUyMTBcIixcclxuICAgICAgICAgICAgXCJ3aWR0aFwiOiA2NFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiaG9wZWxlc3MgZm91bnRhaW4ga2luZ2RvbSAoRGVsdXhlKVwiLFxyXG4gICAgICAgIFwicmVsZWFzZV9kYXRlXCI6IFwiMjAxNy0wNi0wMlwiLFxyXG4gICAgICAgIFwicmVsZWFzZV9kYXRlX3ByZWNpc2lvblwiOiBcImRheVwiLFxyXG4gICAgICAgIFwidG90YWxfdHJhY2tzXCI6IDE2LFxyXG4gICAgICAgIFwidHlwZVwiOiBcImFsYnVtXCIsXHJcbiAgICAgICAgXCJ1cmlcIjogXCJzcG90aWZ5OmFsYnVtOjdHakc5MXR5SFFOR0VIektKYXFPaTBcIlxyXG4gICAgICB9LFxyXG4gICAgICBcImFydGlzdHNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiZXh0ZXJuYWxfdXJsc1wiOiB7XHJcbiAgICAgICAgICAgIFwic3BvdGlmeVwiOiBcImh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvMjZWRlRnMno4WVIwY0N1d0x6RVNpMlwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvYXJ0aXN0cy8yNlZGVGcyejhZUjBjQ3V3THpFU2kyXCIsXHJcbiAgICAgICAgICBcImlkXCI6IFwiMjZWRlRnMno4WVIwY0N1d0x6RVNpMlwiLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwiSGFsc2V5XCIsXHJcbiAgICAgICAgICBcInR5cGVcIjogXCJhcnRpc3RcIixcclxuICAgICAgICAgIFwidXJpXCI6IFwic3BvdGlmeTphcnRpc3Q6MjZWRlRnMno4WVIwY0N1d0x6RVNpMlwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBcImRpc2NfbnVtYmVyXCI6IDEsXHJcbiAgICAgIFwiZHVyYXRpb25fbXNcIjogMjAyNDM4LFxyXG4gICAgICBcImV4cGxpY2l0XCI6IGZhbHNlLFxyXG4gICAgICBcImV4dGVybmFsX2lkc1wiOiB7XHJcbiAgICAgICAgXCJpc3JjXCI6IFwiVVNVTTcxNzAyMjEzXCJcclxuICAgICAgfSxcclxuICAgICAgXCJleHRlcm5hbF91cmxzXCI6IHtcclxuICAgICAgICBcInNwb3RpZnlcIjogXCJodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svMldRbjdZdnM3MjhLWm1tWTZ0Z1dxSFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL3RyYWNrcy8yV1FuN1l2czcyOEtabW1ZNnRnV3FIXCIsXHJcbiAgICAgIFwiaWRcIjogXCIyV1FuN1l2czcyOEtabW1ZNnRnV3FIXCIsXHJcbiAgICAgIFwiaXNfbG9jYWxcIjogZmFsc2UsXHJcbiAgICAgIFwiaXNfcGxheWFibGVcIjogdHJ1ZSxcclxuICAgICAgXCJuYW1lXCI6IFwiRXllcyBDbG9zZWRcIixcclxuICAgICAgXCJwb3B1bGFyaXR5XCI6IDYwLFxyXG4gICAgICBcInByZXZpZXdfdXJsXCI6IG51bGwsXHJcbiAgICAgIFwidHJhY2tfbnVtYmVyXCI6IDMsXHJcbiAgICAgIFwidHlwZVwiOiBcInRyYWNrXCIsXHJcbiAgICAgIFwidXJpXCI6IFwic3BvdGlmeTp0cmFjazoyV1FuN1l2czcyOEtabW1ZNnRnV3FIXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiYWxidW1cIjoge1xyXG4gICAgICAgIFwiYWxidW1fdHlwZVwiOiBcIkFMQlVNXCIsXHJcbiAgICAgICAgXCJhcnRpc3RzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJleHRlcm5hbF91cmxzXCI6IHtcclxuICAgICAgICAgICAgICBcInNwb3RpZnlcIjogXCJodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzVXSWQ0bzVqZEdWaHB0TlUwdXFLeHVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9hcnRpc3RzLzVXSWQ0bzVqZEdWaHB0TlUwdXFLeHVcIixcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjVXSWQ0bzVqZEdWaHB0TlUwdXFLeHVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiU3QuIEx1Y2lhXCIsXHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImFydGlzdFwiLFxyXG4gICAgICAgICAgICBcInVyaVwiOiBcInNwb3RpZnk6YXJ0aXN0OjVXSWQ0bzVqZEdWaHB0TlUwdXFLeHVcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJleHRlcm5hbF91cmxzXCI6IHtcclxuICAgICAgICAgIFwic3BvdGlmeVwiOiBcImh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS81UGpmdDlFYm5lR21saE9RMm1vNmJvXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL2FsYnVtcy81UGpmdDlFYm5lR21saE9RMm1vNmJvXCIsXHJcbiAgICAgICAgXCJpZFwiOiBcIjVQamZ0OUVibmVHbWxoT1EybW82Ym9cIixcclxuICAgICAgICBcImltYWdlc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDY0MCxcclxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczNmZmOWVmMWZhMGRkY2QyZmY5ZGE1MDVmXCIsXHJcbiAgICAgICAgICAgIFwid2lkdGhcIjogNjQwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImhlaWdodFwiOiAzMDAsXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwMWUwMjZmZjllZjFmYTBkZGNkMmZmOWRhNTA1ZlwiLFxyXG4gICAgICAgICAgICBcIndpZHRoXCI6IDMwMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJoZWlnaHRcIjogNjQsXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwNDg1MTZmZjllZjFmYTBkZGNkMmZmOWRhNTA1ZlwiLFxyXG4gICAgICAgICAgICBcIndpZHRoXCI6IDY0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcIm5hbWVcIjogXCJXaGVuIFRoZSBOaWdodCAoRGVsdXhlKVwiLFxyXG4gICAgICAgIFwicmVsZWFzZV9kYXRlXCI6IFwiMjAxMlwiLFxyXG4gICAgICAgIFwicmVsZWFzZV9kYXRlX3ByZWNpc2lvblwiOiBcInllYXJcIixcclxuICAgICAgICBcInRvdGFsX3RyYWNrc1wiOiAxNCxcclxuICAgICAgICBcInR5cGVcIjogXCJhbGJ1bVwiLFxyXG4gICAgICAgIFwidXJpXCI6IFwic3BvdGlmeTphbGJ1bTo1UGpmdDlFYm5lR21saE9RMm1vNmJvXCJcclxuICAgICAgfSxcclxuICAgICAgXCJhcnRpc3RzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImV4dGVybmFsX3VybHNcIjoge1xyXG4gICAgICAgICAgICBcInNwb3RpZnlcIjogXCJodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzVXSWQ0bzVqZEdWaHB0TlUwdXFLeHVcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL2FydGlzdHMvNVdJZDRvNWpkR1ZocHROVTB1cUt4dVwiLFxyXG4gICAgICAgICAgXCJpZFwiOiBcIjVXSWQ0bzVqZEdWaHB0TlUwdXFLeHVcIixcclxuICAgICAgICAgIFwibmFtZVwiOiBcIlN0LiBMdWNpYVwiLFxyXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYXJ0aXN0XCIsXHJcbiAgICAgICAgICBcInVyaVwiOiBcInNwb3RpZnk6YXJ0aXN0OjVXSWQ0bzVqZEdWaHB0TlUwdXFLeHVcIlxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgXCJkaXNjX251bWJlclwiOiAxLFxyXG4gICAgICBcImR1cmF0aW9uX21zXCI6IDMwODM2MCxcclxuICAgICAgXCJleHBsaWNpdFwiOiBmYWxzZSxcclxuICAgICAgXCJleHRlcm5hbF9pZHNcIjoge1xyXG4gICAgICAgIFwiaXNyY1wiOiBcIlVTU00xMTMwMzcxMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiZXh0ZXJuYWxfdXJsc1wiOiB7XHJcbiAgICAgICAgXCJzcG90aWZ5XCI6IFwiaHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzBwQkxmUTVKQmpoMTJINkRHWmpNd01cIlxyXG4gICAgICB9LFxyXG4gICAgICBcImhyZWZcIjogXCJodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS90cmFja3MvMHBCTGZRNUpCamgxMkg2REdaak13TVwiLFxyXG4gICAgICBcImlkXCI6IFwiMHBCTGZRNUpCamgxMkg2REdaak13TVwiLFxyXG4gICAgICBcImlzX2xvY2FsXCI6IGZhbHNlLFxyXG4gICAgICBcImlzX3BsYXlhYmxlXCI6IHRydWUsXHJcbiAgICAgIFwibmFtZVwiOiBcIkVsZXZhdGVcIixcclxuICAgICAgXCJwb3B1bGFyaXR5XCI6IDU1LFxyXG4gICAgICBcInByZXZpZXdfdXJsXCI6IFwiaHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvMWJlOGE4NTJjZmJlMDUwYTIyNWI3ZmJjODAzMjE1ZDU3ZTQ4YjM0MT9jaWQ9Nzc0YjI5ZDRmMTM4NDRjNDk1ZjIwNmNhZmRhZDljODZcIixcclxuICAgICAgXCJ0cmFja19udW1iZXJcIjogMyxcclxuICAgICAgXCJ0eXBlXCI6IFwidHJhY2tcIixcclxuICAgICAgXCJ1cmlcIjogXCJzcG90aWZ5OnRyYWNrOjBwQkxmUTVKQmpoMTJINkRHWmpNd01cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJhbGJ1bVwiOiB7XHJcbiAgICAgICAgXCJhbGJ1bV90eXBlXCI6IFwiQUxCVU1cIixcclxuICAgICAgICBcImFydGlzdHNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImV4dGVybmFsX3VybHNcIjoge1xyXG4gICAgICAgICAgICAgIFwic3BvdGlmeVwiOiBcImh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvMnhlOElYZ0NUcHdIRTNlQTloVHM0blwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL2FydGlzdHMvMnhlOElYZ0NUcHdIRTNlQTloVHM0blwiLFxyXG4gICAgICAgICAgICBcImlkXCI6IFwiMnhlOElYZ0NUcHdIRTNlQTloVHM0blwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJCQU5LU1wiLFxyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJhcnRpc3RcIixcclxuICAgICAgICAgICAgXCJ1cmlcIjogXCJzcG90aWZ5OmFydGlzdDoyeGU4SVhnQ1Rwd0hFM2VBOWhUczRuXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiZXh0ZXJuYWxfdXJsc1wiOiB7XHJcbiAgICAgICAgICBcInNwb3RpZnlcIjogXCJodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMWVlWVlnSzIwOHh2a0NFR2tZcVdhaFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9hbGJ1bXMvMWVlWVlnSzIwOHh2a0NFR2tZcVdhaFwiLFxyXG4gICAgICAgIFwiaWRcIjogXCIxZWVZWWdLMjA4eHZrQ0VHa1lxV2FoXCIsXHJcbiAgICAgICAgXCJpbWFnZXNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImhlaWdodFwiOiA2NDAsXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzljOGRkNzQyMjVhMWZiODM4ZmE3ZGNhNlwiLFxyXG4gICAgICAgICAgICBcIndpZHRoXCI6IDY0MFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJoZWlnaHRcIjogMzAwLFxyXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMDFlMDI5YzhkZDc0MjI1YTFmYjgzOGZhN2RjYTZcIixcclxuICAgICAgICAgICAgXCJ3aWR0aFwiOiAzMDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDY0LFxyXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMDQ4NTE5YzhkZDc0MjI1YTFmYjgzOGZhN2RjYTZcIixcclxuICAgICAgICAgICAgXCJ3aWR0aFwiOiA2NFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiR29kZGVzcyAoRGVsdXhlKVwiLFxyXG4gICAgICAgIFwicmVsZWFzZV9kYXRlXCI6IFwiMjAxNC0wMS0wMVwiLFxyXG4gICAgICAgIFwicmVsZWFzZV9kYXRlX3ByZWNpc2lvblwiOiBcImRheVwiLFxyXG4gICAgICAgIFwidG90YWxfdHJhY2tzXCI6IDE4LFxyXG4gICAgICAgIFwidHlwZVwiOiBcImFsYnVtXCIsXHJcbiAgICAgICAgXCJ1cmlcIjogXCJzcG90aWZ5OmFsYnVtOjFlZVlZZ0syMDh4dmtDRUdrWXFXYWhcIlxyXG4gICAgICB9LFxyXG4gICAgICBcImFydGlzdHNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiZXh0ZXJuYWxfdXJsc1wiOiB7XHJcbiAgICAgICAgICAgIFwic3BvdGlmeVwiOiBcImh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvMnhlOElYZ0NUcHdIRTNlQTloVHM0blwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvYXJ0aXN0cy8yeGU4SVhnQ1Rwd0hFM2VBOWhUczRuXCIsXHJcbiAgICAgICAgICBcImlkXCI6IFwiMnhlOElYZ0NUcHdIRTNlQTloVHM0blwiLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwiQkFOS1NcIixcclxuICAgICAgICAgIFwidHlwZVwiOiBcImFydGlzdFwiLFxyXG4gICAgICAgICAgXCJ1cmlcIjogXCJzcG90aWZ5OmFydGlzdDoyeGU4SVhnQ1Rwd0hFM2VBOWhUczRuXCJcclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIFwiZGlzY19udW1iZXJcIjogMSxcclxuICAgICAgXCJkdXJhdGlvbl9tc1wiOiAyNDk3MzksXHJcbiAgICAgIFwiZXhwbGljaXRcIjogZmFsc2UsXHJcbiAgICAgIFwiZXh0ZXJuYWxfaWRzXCI6IHtcclxuICAgICAgICBcImlzcmNcIjogXCJVU1VNNzE0MDUyNTlcIlxyXG4gICAgICB9LFxyXG4gICAgICBcImV4dGVybmFsX3VybHNcIjoge1xyXG4gICAgICAgIFwic3BvdGlmeVwiOiBcImh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay80UHZEMDZQbWJtMnJIRzJKalNsRWxGXCJcclxuICAgICAgfSxcclxuICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvdHJhY2tzLzRQdkQwNlBtYm0yckhHMkpqU2xFbEZcIixcclxuICAgICAgXCJpZFwiOiBcIjRQdkQwNlBtYm0yckhHMkpqU2xFbEZcIixcclxuICAgICAgXCJpc19sb2NhbFwiOiBmYWxzZSxcclxuICAgICAgXCJpc19wbGF5YWJsZVwiOiB0cnVlLFxyXG4gICAgICBcIm5hbWVcIjogXCJCZWdnaW4gRm9yIFRocmVhZFwiLFxyXG4gICAgICBcInBvcHVsYXJpdHlcIjogNTgsXHJcbiAgICAgIFwicHJldmlld191cmxcIjogbnVsbCxcclxuICAgICAgXCJ0cmFja19udW1iZXJcIjogMTAsXHJcbiAgICAgIFwidHlwZVwiOiBcInRyYWNrXCIsXHJcbiAgICAgIFwidXJpXCI6IFwic3BvdGlmeTp0cmFjazo0UHZEMDZQbWJtMnJIRzJKalNsRWxGXCJcclxuICAgIH1cclxuICBdLFxyXG4gIFwic2VlZHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImluaXRpYWxQb29sU2l6ZVwiOiAyNzcsXHJcbiAgICAgIFwiYWZ0ZXJGaWx0ZXJpbmdTaXplXCI6IDE3OSxcclxuICAgICAgXCJhZnRlclJlbGlua2luZ1NpemVcIjogMTc5LFxyXG4gICAgICBcImlkXCI6IFwiNE5IUVVHemh0VExGdmdGNVNaZXNMS1wiLFxyXG4gICAgICBcInR5cGVcIjogXCJBUlRJU1RcIixcclxuICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvYXJ0aXN0cy80TkhRVUd6aHRUTEZ2Z0Y1U1plc0xLXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaW5pdGlhbFBvb2xTaXplXCI6IDM0MyxcclxuICAgICAgXCJhZnRlckZpbHRlcmluZ1NpemVcIjogNDMsXHJcbiAgICAgIFwiYWZ0ZXJSZWxpbmtpbmdTaXplXCI6IDQzLFxyXG4gICAgICBcImlkXCI6IFwiMGM2eElERHB6RTgxbTJxNzk3b3JkQVwiLFxyXG4gICAgICBcInR5cGVcIjogXCJUUkFDS1wiLFxyXG4gICAgICBcImhyZWZcIjogXCJodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS90cmFja3MvMGM2eElERHB6RTgxbTJxNzk3b3JkQVwiXHJcbiAgICB9XHJcbiAgXVxyXG59KTtcclxuICByZXR1cm4oXHJcbiAgICA8PlxyXG4gICAgPExheW91dD5cclxuXHJcbiAgICA8ZGl2IGNzcz17U3BvdGlmeVRpbmRlclBhZ2VDb250YWluZXJTdHlsaW5nfT5cclxuICAgICAgPFNwb3RpZnlUaW5kZXIgcGxheWxpc3Q9e3JlY29tbWVuZGF0aW9ucyAgPyByZWNvbW1lbmRhdGlvbnMudHJhY2tzIDogZHVtbXlEYXRhLnRyYWNrc30gU3dpcGVSaWdodD17c3dpcGVSaWdodH0vPlxyXG4gICAgICA8PlxyXG4gICAgICB7cm91dGVyLnF1ZXJ5LnBsYXlsaXN0SWQgP1xyXG4gICAgICAgIDxQbGF5bGlzdENvbHVtblxyXG4gICAgICAgICAgcGxheWxpc3Q9e1tdfVxyXG4gICAgICAgICAgYWRkZWRTb25ncz17c3dpcGVSaWdodExpc3QgPyBzd2lwZVJpZ2h0TGlzdCA6IGR1bW15RGF0YS50cmFja3N9XHJcbiAgICAgICAgICBzZXRQbGF5bGlzdD17YWRkU3dpcGVSaWdodExpc3R9XHJcbiAgICAgICAgICBoYXNNaW51c0J1dHRvbj17dHJ1ZX1cclxuICAgICAgICAgIHBsYXlsaXN0SWQ9e3JvdXRlci5xdWVyeS5wbGF5bGlzdElkfVxyXG4gICAgICAgIC8+IDpcclxuICAgICAgICA8UGxheWxpc3RWaWV3Q29sdW1uXHJcbiAgICAgICAgICBwbGF5bGlzdD17W119XHJcbiAgICAgICAgICBhZGRlZFNvbmdzPXtzd2lwZVJpZ2h0TGlzdCA/IHN3aXBlUmlnaHRMaXN0IDogZHVtbXlEYXRhLnRyYWNrc31cclxuICAgICAgICAgIHBsYXlsaXN0VGl0bGU9e1wiTmV3IHBsYXlsaXN0XCJ9XHJcbiAgICAgICAgICBzZXRQbGF5bGlzdD17YWRkU3dpcGVSaWdodExpc3R9XHJcbiAgICAgICAgICBoYXNNaW51c0J1dHRvbj17dHJ1ZX1cclxuICAgICAgICAvPlxyXG4gICAgICB9XHJcbiAgICAgIDwvPlxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuICAgIDwvTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuaW1wb3J0IHsgZ2V0T3B0aW9ucyB9IGZyb20gJy4uL3V0aWxzJ1xyXG5cclxuLy8gR2V0IGEgTGlzdCBvZiBDdXJyZW50IFVzZXIncyBQbGF5bGlzdHNcclxuZXhwb3J0IGNvbnN0IGdldFVzZXJQbGF5bGlzdCA9IChhY2Nlc3NUb2tlbikgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9tZS9wbGF5bGlzdHMnXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MoZ2V0T3B0aW9ucyhhY2Nlc3NUb2tlbiwgdXJsKSlcclxuICBkaXNwYXRjaCh7XHJcbiAgICB0eXBlOiB0eXBlcy5HRVRfVVNFUl9QTEFZTElTVCxcclxuICAgIHVzZXJQbGF5bGlzdDogcmVzLmRhdGFcclxuICB9KVxyXG59XHJcblxyXG4vLyBHZXQgYSBQbGF5bGlzdFxyXG5leHBvcnQgY29uc3QgZ2V0UGxheWxpc3RCeUlkID0gKGFjY2Vzc1Rva2VuLCBwbGF5bGlzdElkKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL3BsYXlsaXN0cy8ke3BsYXlsaXN0SWR9YFxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zKGdldE9wdGlvbnMoYWNjZXNzVG9rZW4sIHVybCkpXHJcbiAgZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogdHlwZXMuR0VUX1BMQVlMSVNUX0JZX0lELFxyXG4gICAgcGxheWxpc3RCeUlkOiByZXMuZGF0YVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQbGF5bGlzdHNMaXN0ID0gKGFjY2Vzc1Rva2VuKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL21lL3BsYXlsaXN0cydcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyhnZXRPcHRpb25zKGFjY2Vzc1Rva2VuLCB1cmwpKVxyXG4gIGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IHR5cGVzLkdFVF9QTEFZTElTVFNfTElTVCxcclxuICAgIHBsYXlsaXN0czogcmVzLmRhdGEuaXRlbXNcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2xlYXJQbGF5bGlzdEJ5SWQgPSAoKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogdHlwZXMuQ0xFQVJfUExBWUxJU1RfQllfSURcclxuICB9KVxyXG59XHJcblxyXG4vLyBFeGFtcGxlXHJcbi8vIGF4aW9zKHtcclxuLy8gICBtZXRob2Q6ICdwb3N0JyxcclxuLy8gICB1cmw6IGJhc2VVcmwgKyAnYXBwbGljYXRpb25zLycgKyBhcHBOYW1lICsgJy9kYXRhZXhwb3J0L3BsYW50eXBlcycgKyBwbGFuLFxyXG4vLyAgIGhlYWRlcnM6IHt9LCBcclxuLy8gICBkYXRhOiB7XHJcbi8vICAgICBmb286ICdiYXInLCAvLyBUaGlzIGlzIHRoZSBib2R5IHBhcnRcclxuLy8gICB9XHJcbi8vIH0pXHJcblxyXG4vLyB7XHJcbi8vICAgXCJ0cmFja3NcIjogW1xyXG4vLyAgICAgeyBcInVyaVwiOiBcInNwb3RpZnk6dHJhY2s6NGlWNVc5dVlFZFlVVmE3OUF4YjdSaFwiIH0sXHJcbi8vICAgICB7IFwidXJpXCI6IFwic3BvdGlmeTp0cmFjazoxMzAxV2xleVQ5OE1TeFZIUFpDQTZNXCIgfVxyXG4vLyAgIF1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUl0ZW1zRnJvbVBsYXlsaXN0ID0gKGFjY2Vzc1Rva2VuLCBwbGF5bGlzdElkLCBib2R5KSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHVybDogYGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL3BsYXlsaXN0cy8ke3BsYXlsaXN0SWR9L3RyYWNrc2AsXHJcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIGFjY2Vzc1Rva2VuLFxyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSxcclxuICAgIGRhdGE6IHsgYm9keSB9XHJcbiAgfVxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zKG9wdGlvbnMpXHJcbiAgZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogdHlwZXMuUkVNT1ZFX0lURU1TX0ZST01fUExBWUxJU1RcclxuICB9KVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmltcG9ydCB7IGdldE9wdGlvbnMgfSBmcm9tICcuLi91dGlscydcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRHZW5yZVNlZWRzID0gKGFjY2Vzc1Rva2VuKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL3JlY29tbWVuZGF0aW9ucy9hdmFpbGFibGUtZ2VucmUtc2VlZHMnXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MoZ2V0T3B0aW9ucyhhY2Nlc3NUb2tlbiwgdXJsKSlcclxuICBkaXNwYXRjaCh7XHJcbiAgICB0eXBlOiB0eXBlcy5HRVRfR0VOUkVfU0VFRFMsXHJcbiAgICBnZW5yZVNlZWRzOiByZXMuZGF0YVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRSZWNvbW1lbmRhdGlvbnMgPSAoYWNjZXNzVG9rZW4sIHF1ZXJ5KSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL3JlY29tbWVuZGF0aW9ucz9saW1pdD0xMCZzZWVkX2dlbnJlcz0ke3F1ZXJ5fWBcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyhnZXRPcHRpb25zKGFjY2Vzc1Rva2VuLCB1cmwpKVxyXG4gIGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IHR5cGVzLkdFVF9SRUNPTU1FTkRBVElPTlMsXHJcbiAgICByZWNvbW1lbmRhdGlvbnM6IHJlcy5kYXRhXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNvbmdSZWNvbW1lbmRhdGlvbnMgPSAoYWNjZXNzVG9rZW4sIHF1ZXJ5KSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL3JlY29tbWVuZGF0aW9ucz9saW1pdD01MCZzZWVkX3RyYWNrcz0ke3F1ZXJ5fWBcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyhnZXRPcHRpb25zKGFjY2Vzc1Rva2VuLCB1cmwpKVxyXG4gIGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IHR5cGVzLkdFVF9SRUNPTU1FTkRBVElPTlMsXHJcbiAgICByZWNvbW1lbmRhdGlvbnM6IHJlcy5kYXRhXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNvbmdzID0gKGFjY2Vzc1Rva2VuLCBxdWVyeSkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9zZWFyY2g/cT0ke3F1ZXJ5fSZ0eXBlPXRyYWNrJm1hcmtldD1VUyZsaW1pdD0xMGBcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyhnZXRPcHRpb25zKGFjY2Vzc1Rva2VuLCB1cmwpKVxyXG4gIGNvbnNvbGUubG9nKFwiPT1TZWFyaCByZXN1bHRzOiBcIiwgcmVzLmRhdGEpO1xyXG4gIGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IHR5cGVzLkdFVF9TT05HUyxcclxuICAgIHNlYXJjaFNvbmdzOiByZXMuZGF0YVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRSZWNlbnRzID0gKGFjY2Vzc1Rva2VuLCBxdWVyeSkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9tZS9wbGF5ZXIvcmVjZW50bHktcGxheWVkYFxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zKGdldE9wdGlvbnMoYWNjZXNzVG9rZW4sIHVybCkpXHJcbiAgY29uc29sZS5sb2coXCJsb2dcIiwgcmVzLmRhdGEpO1xyXG4gIGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IHR5cGVzLkdFVF9SRUNFTlRTLFxyXG4gICAgcmVjZW50U29uZ3M6IHJlcy5kYXRhXHJcbiAgfSlcclxufVxyXG4iLCIvLyBBdXRoXHJcbmV4cG9ydCBjb25zdCBTRVRfQUNDRVNTX1RPS0VOID0gJ1NFVF9BQ0NFU1NfVE9LRU4nXHJcbmV4cG9ydCBjb25zdCBTRVRfRVhQSVJFU19JTiA9ICdTRVRfRVhQSVJFU19JTidcclxuZXhwb3J0IGNvbnN0IFNFVF9JU19BVVRIRUQgPSAnU0VUX0lTX0FVVEhFRCdcclxuXHJcbi8vIFVzZXJcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSID0gJ0dFVF9VU0VSJ1xyXG5cclxuLy8gU29uZ1xyXG5leHBvcnQgY29uc3QgR0VUX0dFTlJFX1NFRURTID0gJ0dFVF9HRU5SRV9TRUVEUydcclxuZXhwb3J0IGNvbnN0IEdFVF9SRUNPTU1FTkRBVElPTlMgPSAnR0VUX1JFQ09NTUVOREFUSU9OUydcclxuZXhwb3J0IGNvbnN0IEdFVF9TT05HUyA9ICdHRVRfU09OR1MnXHJcbmV4cG9ydCBjb25zdCBHRVRfUkVDRU5UUyA9ICdHRVRfUkVDRU5UUydcclxuXHJcbi8vIFBsYXlsaXN0XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9QTEFZTElTVCA9ICdHRVRfVVNFUl9QTEFZTElTVCdcclxuZXhwb3J0IGNvbnN0IEdFVF9QTEFZTElTVF9CWV9JRCA9ICdHRVRfUExBWUxJU1RfQllfSUQnXHJcbmV4cG9ydCBjb25zdCBHRVRfUExBWUxJU1RTX0xJU1QgPSAnR0VUX1BMQVlMSVNUU19MSVNUJ1xyXG5leHBvcnQgY29uc3QgQ0xFQVJfUExBWUxJU1RfQllfSUQgPSAnQ0xFQVJfUExBWUxJU1RfQllfSUQnXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSVRFTVNfRlJPTV9QTEFZTElTVCA9ICdSRU1PVkVfSVRFTVNfRlJPTV9QTEFZTElTVCdcclxuIiwiZXhwb3J0IGNvbnN0IGdldE9wdGlvbnMgPSAoYWNjZXNzVG9rZW4sIHVybCkgPT4ge1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICB1cmw6IHVybCxcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgYWNjZXNzVG9rZW4sXHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBvcHRpb25zXHJcbn1cclxuIiwiY29uc3QgYnJlYWtwb2ludHMgPSB7XHJcbiAgICBzbTogNTEyLFxyXG4gICAgbWVkOiA3NjgsXHJcbiAgICBsZzogMTAyNCxcclxuICAgIHhsOiAxMjgwXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJyZWFrcG9pbnRzOyIsImNvbnN0IGNvbG9ycyA9IHtcclxuICAgIGdyYXk6ICcjQzRDNEM0JyxcclxuICAgIGhvdmVyR3JheTogJ2xpZ2h0Z3JheScsXHJcbiAgICBkYXJrR3JlZW46ICcjMkNBQzYwJyxcclxuICAgIGhvdmVyR3JlZW46ICcjMzhlYjM4JyxcclxuICAgIGJsYWNrOiAnIzEyMTIxMicsXHJcbiAgICBob3ZlckJsYWNrOiAnIzJiMmIyYicsXHJcblxyXG4gICAgcmVkOiAnI2NmMmUyZScsXHJcbiAgICBob3ZlclJlZDogJyM5MDIwMjAnXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbG9ycztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3N0eWxlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJ1cmdlci1tZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2ZhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1bml2ZXJzYWwtY29va2llXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=