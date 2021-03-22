webpackHotUpdate_N_E("pages/SpotifyTinderPage",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-burger-menu */ "./node_modules/react-burger-menu/lib/BurgerMenu.js");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
/* harmony import */ var _styles_breakpoints__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/breakpoints */ "./styles/breakpoints.js");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! universal-cookie */ "./node_modules/universal-cookie/es6/index.js");




var _jsxFileName = "C:\\Users\\zengg\\Desktop\\CS499\\final-project-team-10-SpotifyEZ\\components\\Navbar.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function _templateObject6() {
  var data = Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        :hover {\n            background-color: ", ";\n        }\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        ", ";\n        float: right;\n        padding: 30px 10px 0 0;\n        font-size: 16px;\n        width: 10%;\n        height: calc(100% - 30px); //subtract the padding\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        ", "\n\n        width: 15%;\n        padding-top: 10px;\n        height: calc(100% - 10px);  //subtract the padding;\n\n        font-size: 40px;\n        color: ", ";\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        padding-top: 25px;\n        height: calc(100% - 25px); //subtract the padding;\n        width: 8%;\n        border-radius: 2px;\n        font-weight: bold;\n        font-size: 20px;\n        text-align: center;\n        color: floralwhite;\n        text-decoration: none;\n        float: left;\n\n        :hover {\n            cursor: pointer;\n            color:  ", ";\n            background-color: ", ";\n        }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        width: 100%;\n        height: 80px;\n        top: 0;\n        left: 0;\n        position: fixed;\n        background-color: ", ";\n        border-style: solid;\n        border-width: 1px;\n        border-color: grey;\n        border-radius: 4px;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        display: inline-block;\n        border: 2px solid darkgray;\n        height: 50px;\n        margin: 15px;\n        width: 50%;\n        background-color: white;\n        color: darkgray;\n\n        form {\n            height: 100%;\n        }\n\n        //Styles for the search text box\n        form input {\n            float: left;\n            height: inherit;\n            background-color: transparent;\n            border: 0;\n            font-size: 20px;\n            outline: 0;\n            width: calc(100% - 90px); //subtract the width of the button\n            margin-left: 20px;\n        }\n\n        //Styles for the search icon button\n        form button {\n            border-radius: 50%;\n            height: inherit;\n            background-color: transparent;\n            width: 50px;\n            border: 0;\n            outline: 0;\n            font-size: 20px;\n            float: right;\n        }\n\n        button:hover {\n            cursor: pointer;\n            color: ", ";\n        }\n\n        @media (max-width: ", "px) and (min-width: ", "px) {\n            width: 78%;\n        }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsxImportSource @emotion/react */








 //Search bar for the Navbar

function SearchBar() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      searchString = _useState[0],
      setSearchString = _useState[1]; //Styles for the search bar


  var searchBarStyles = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject(), _styles_colors__WEBPACK_IMPORTED_MODULE_8__["default"].darkGreen, _styles_breakpoints__WEBPACK_IMPORTED_MODULE_9__["default"].lg, _styles_breakpoints__WEBPACK_IMPORTED_MODULE_9__["default"].sm);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: searchBarStyles,
    children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: function onSubmit(e) {
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
        onChange: function onChange(e) {
          return setSearchString(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaSearch"], {}, void 0, false, {
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

_s(SearchBar, "L1tJ2/MLfttTQ/Fs0C5yd1RZEHI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
});

_c = SearchBar;

function Navbar() {
  _s2();

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      showHamnav = _useState2[0],
      setShowHamnav = _useState2[1]; //Styles for the entire navbar


  var navbarStyles = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject2(), _styles_colors__WEBPACK_IMPORTED_MODULE_8__["default"].black); //Parent styles for all links on the Navbar

  var navItemStyles = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject3(), _styles_colors__WEBPACK_IMPORTED_MODULE_8__["default"].darkGreen, _styles_colors__WEBPACK_IMPORTED_MODULE_8__["default"].hoverBlack); //Styles for the site title on the Navbar

  var siteTitleStyles = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject4(), navItemStyles, _styles_colors__WEBPACK_IMPORTED_MODULE_8__["default"].darkGreen); //Styles for the logout button

  var logOutButtonStyles = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject5(), navItemStyles);
  var burgerMenuItemStyles = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject6(), _styles_colors__WEBPACK_IMPORTED_MODULE_8__["default"].hoverBlack);
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
      background: "".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_8__["default"].black),
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
  var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_10__["default"]();

  var updateMedia = function updateMedia() {
    setShowHamnav(window.innerWidth <= _styles_breakpoints__WEBPACK_IMPORTED_MODULE_9__["default"].lg);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    window.addEventListener("resize", updateMedia);
    return function () {
      return window.removeEventListener("resize", updateMedia);
    };
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setShowHamnav(window.innerWidth <= _styles_breakpoints__WEBPACK_IMPORTED_MODULE_9__["default"].lg);
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
      }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_burger_menu__WEBPACK_IMPORTED_MODULE_6__["slide"], {
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
        onClick: function onClick() {
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

_s2(Navbar, "9XO4ETrZXwt7Dam87DChfK1vKpk=");

_c2 = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c, _c2;

$RefreshReg$(_c, "SearchBar");
$RefreshReg$(_c2, "Navbar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/PlaylistColumn.js":
/*!**************************************!*\
  !*** ./components/PlaylistColumn.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/readOnlyError */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/utils */ "./store/utils.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store_actions_playlistAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/actions/playlistAction */ "./store/actions/playlistAction.js");
/* harmony import */ var _components_PlaylistViewColumn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/PlaylistViewColumn */ "./components/PlaylistViewColumn.js");





var _jsxFileName = "C:\\Users\\zengg\\Desktop\\CS499\\final-project-team-10-SpotifyEZ\\components\\PlaylistColumn.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











function PlaylistColumn(props) {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.auth;
  }),
      accessToken = _useSelector.accessToken;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.playlist;
  }),
      playlistById = _useSelector2.playlistById;

  var _useSelector3 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      user = _useSelector3.user;

  var dummyPlaylistID = "08ERR8tNrl7WBI3om8YkyK";
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (props.playlistId) {
      console.log("==Getting playlist with ID: ", props.playlistId);
      dispatch(Object(_store_actions_playlistAction__WEBPACK_IMPORTED_MODULE_10__["getPlaylistById"])(accessToken, props.playlistId));
    } else {
      console.log("Rendering a client-side playlist, props: ", props);
    }
  }, [props.playlistId]);
  console.log("PlaylistViewColumn: " + "==playlistById: ".concat(playlistById, " \n==playlist: ").concat(props.playlist, " \n==playlistId: ").concat(props.playlistId));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: (playlistById || props.playlist) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PlaylistViewColumn__WEBPACK_IMPORTED_MODULE_11__["default"], _objectSpread(_objectSpread({}, props), {}, {
        playlistTitle: playlistById ? playlistById.name : props.playlistTitle,
        playlist: playlistById ? playlistById.tracks.items.map(function (item) {
          return item.track;
        }) : props.playlist,
        setPlaylist: playlistById ? function (newPlaylist) {
          playlistById = (Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__["default"])("playlistById"), newPlaylist);
        } : props.setPlaylist
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 7
      }, this)
    }, void 0, false)
  }, void 0, false);
}

_s(PlaylistColumn, "o9UrGri+VWeJIGuG6EGLykS2HMM=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = PlaylistColumn;
PlaylistColumn.propTypes = {
  addedSongs: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array,
  playlist: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array,
  playlistId: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  menu: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element,
  onPlusButtonClick: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  setPlaylist: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  playlistTitle: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
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

var _c;

$RefreshReg$(_c, "PlaylistColumn");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/PlaylistViewColumn.js":
/*!******************************************!*\
  !*** ./components/PlaylistViewColumn.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _PlaylistView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PlaylistView */ "./components/PlaylistView.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);






var _jsxFileName = "C:\\Users\\zengg\\Desktop\\CS499\\final-project-team-10-SpotifyEZ\\components\\PlaylistViewColumn.js",
    _s = $RefreshSig$();

function _templateObject6() {
  var data = Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n    width: 45%;\n    float: left;\n    padding: 0 20px;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n  position: fixed;\n  bottom: 40px;\n  right: 12.5%;\n  width: 200px;\n  height: 60px;\n  cursor: pointer;\n  border: 0;\n  border-radius:10px;\n  font-size: 125%;\n  color: white;\n  background-color: ", ";\n  :hover {\n    background-color: ", ";\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n  width: 100%;\n  text-align: center;\n  color: ", ";\n  font-size: 40px;\n  font-weight: bold;\n  margin: 20px 0;\n  border: 2px solid ", ";\n  border-radius: 10px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n  display: flex;\n  flex-direction: row;\n  button{\n    width: 45%;\n    height: 80%;\n    padding: 5px;\n    margin: 5px;\n    border-radius: 8px;\n    border-style: solid;\n    border-width: 1px;\n\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    div{\n      font-size: 40px;\n      padding: 10px;\n      margin: 5px;\n    }\n    input{\n      padding: 10px;\n      margin: 5px;\n      width: 80%;\n    }\n    textarea{\n      padding: 10px;\n      margin: 5px;\n      width: 80%;\n    }\n    .PlaylistDescription{\n      height: 50%;\n    }\n    background-color: floralwhite;\n    width: 40%;\n    height: 50%;\n    border-radius: 8px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n    position: fixed;\n    top: 9%;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 1010;\n    overflow: scroll;\n    background-color: rgba(0, 0, 0, 0.65);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsxImportSource @emotion/react */







 //modal

var outerContainerStyling = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["css"])(_templateObject());
var containerStyling = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["css"])(_templateObject2());
var buttonContainerStyling = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["css"])(_templateObject3());
var PlaylistTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject4(), _styles_colors__WEBPACK_IMPORTED_MODULE_7__["default"].black, _styles_colors__WEBPACK_IMPORTED_MODULE_7__["default"].darkGreen);
_c = PlaylistTitle;
var SaveSubPlaylistButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].button(_templateObject5(), _styles_colors__WEBPACK_IMPORTED_MODULE_7__["default"].darkGreen, _styles_colors__WEBPACK_IMPORTED_MODULE_7__["default"].hoverGreen);
_c2 = SaveSubPlaylistButton;

function PlaylistViewColumn(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(false),
      toggleModal = _useState[0],
      setToggleModal = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(""),
      playlistName = _useState2[0],
      setPlaylistName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(""),
      playlistDecription = _useState3[0],
      setPlaylistDescription = _useState3[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(function (state) {
    return state.auth;
  }),
      accessToken = _useSelector.accessToken;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(function (state) {
    return state.user;
  }),
      user = _useSelector2.user;

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])([]),
      removedSongUris = _useState4[0],
      setRemovedSongUris = _useState4[1];

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

  var styles = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["css"])(_templateObject6());

  function removeFromplaylist(uri) {
    //TODO: Is there a way to not remove duplicate songs?
    props.setPlaylist([].concat(Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(props.playlist.filter(function (track) {
      return track.uri !== uri;
    })), Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(props.addedSongs.filter(function (track) {
      return track.uri !== uri;
    }))));
    setRemovedSongUris([].concat(Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(removedSongUris), [uri]));
  }

  function makeNewPlaylist(_x, _x2) {
    return _makeNewPlaylist.apply(this, arguments);
  }

  function _makeNewPlaylist() {
    _makeNewPlaylist = Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(nameOfSong, nameOfPlaylist) {
      var getOptions, url;
      return C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              getOptions = function getOptions(accessToken, url, data) {
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
                url = "https://api.spotify.com/v1/users/".concat(user.id, "/playlists");
                axios__WEBPACK_IMPORTED_MODULE_8___default()(getOptions(accessToken, url, {
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

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _makeNewPlaylist.apply(this, arguments);
  }

  function putItemsInPlaylist(_x3) {
    return _putItemsInPlaylist.apply(this, arguments);
  }

  function _putItemsInPlaylist() {
    _putItemsInPlaylist = Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
      var options;
      return C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              options = {
                url: "https://api.spotify.com/v1/playlists/".concat(id, "/tracks?uris=").concat(encodeURIComponent(props.addedSongs.map(function (uri) {
                  return uri.uri;
                }))),
                method: 'POST',
                headers: {
                  'Authorization': 'Bearer ' + accessToken,
                  'Content-Type': 'application/json'
                }
              };

              try {
                axios__WEBPACK_IMPORTED_MODULE_8___default()(options).then(function (response) {
                  console.log("Putting Items in that new playlist: ", response);
                });
              } catch (e) {
                if (e instanceof DOMException) {
                  console.log("HTTP request aborted");
                } else {
                  console.log(e);
                }
              }

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _putItemsInPlaylist.apply(this, arguments);
  }

  function savePlaylist() {
    return _savePlaylist.apply(this, arguments);
  }

  function _savePlaylist() {
    _savePlaylist = Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      return C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (props.playlistId) {
                console.log("Adding to this playlist: ", props.playlistId);
                putItemsInPlaylist(props.playlistId);
              } else {
                console.log("Making a new playlist"); //TOGGLE MODAL, let the user enter the playlist data
                //onSUBMIT, pass data to makeNewPlaylist

                setToggleModal(!toggleModal);
              }

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _savePlaylist.apply(this, arguments);
  }

  console.log("PlaylistViewColumn props: ", props);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    css: styles,
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(PlaylistTitle, {
      children: props.playlistTitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 7
    }, this), props.menu, Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_PlaylistView__WEBPACK_IMPORTED_MODULE_11__["default"], {
      playlist: props.addedSongs ? props.addedSongs : [],
      hasPlusButton: props.hasPlusButton,
      onPlusButtonClick: props.onPlusButtonClick,
      hasMinusButton: props.hasMinusButton,
      onMinusButtonClick: removeFromplaylist
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 7
    }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_PlaylistView__WEBPACK_IMPORTED_MODULE_11__["default"], {
      playlist: props.playlist,
      hasPlusButton: props.hasPlusButton,
      onPlusButtonClick: props.onPlusButtonClick,
      hasMinusButton: props.hasMinusButton,
      onMinusButtonClick: removeFromplaylist
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 7
    }, this), (props.addedSongs && props.addedSongs.length > 0 || removedSongUris.length > 0) && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(SaveSubPlaylistButton, {
      onClick: function onClick() {
        savePlaylist();
      },
      children: "Save Playlist"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 9
    }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: toggleModal ? Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        css: outerContainerStyling,
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
          css: containerStyling,
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            children: "New playlist information"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 12
          }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Playlist name...",
            onChange: UpdatePlaylistName,
            value: playlistName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 12
          }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("textarea", {
            className: "PlaylistDescription",
            type: "text",
            placeholder: "Playlist description...",
            onChange: UpdatePlaylistDescription,
            value: playlistDecription
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 12
          }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            css: buttonContainerStyling,
            children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
              onClick: cancelModalClicked,
              children: " Cancel "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 12
            }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
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

_s(PlaylistViewColumn, "3CFDco+j2888WpoEizwTNdgjRtY=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"]];
});

_c3 = PlaylistViewColumn;
PlaylistViewColumn.propTypes = {
  playlist: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object.isRequired,
  addedSongs: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.array,
  setPlaylist: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func.isRequired,
  playlistTitle: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
  playlistId: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
  menu: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.element,
  hasPlusButton: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a["boolean"],
  hasMinusButton: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a["boolean"],
  onPlusButtonClick: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func
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

var _c, _c2, _c3;

$RefreshReg$(_c, "PlaylistTitle");
$RefreshReg$(_c2, "SaveSubPlaylistButton");
$RefreshReg$(_c3, "PlaylistViewColumn");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _hooks_usePlaylists__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/usePlaylists */ "./hooks/usePlaylists.js");



var _jsxFileName = "C:\\Users\\zengg\\Desktop\\CS499\\final-project-team-10-SpotifyEZ\\components\\Sidebar.js",
    _s = $RefreshSig$();

function _templateObject4() {
  var data = Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        ", ";\n        background-color: white;\n        text-decoration: none;\n        color: ", ";\n\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 20px;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        object-fit: cover;\n        border-radius: 50%;\n        height: 50px;\n        width: 50px;\n        margin-bottom: 10px;\n\n        cursor: pointer;\n        transition: all .2s ease-in-out;\n\n        :hover{\n            transform: scale(1.1);\n        }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    position: absolute;\n    height: calc(100% - 100px); //factor in the top and bottom\n    width: 80px;\n    position: fixed;\n    z-index: 1;\n    top: 81px;\n    left: 0px;\n    padding: 10px 0;\n    border-style: solid;\n    border-width: 1px;\n    border-color: grey;\n    border-radius: 4px;\n    background-color: ", ";\n    color: white;\n\n    overflow-y:scroll;\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsxImportSource @emotion/react */






var StyledSidebar = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].darkGreen);
_c = StyledSidebar;
var PlaylistsList = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
_c2 = PlaylistsList;

function Sidebar() {
  _s();

  var _this = this;

  var _usePlaylists = Object(_hooks_usePlaylists__WEBPACK_IMPORTED_MODULE_7__["default"])(),
      playlists = _usePlaylists.playlists;

  var sidebarIconStyles = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject3());
  var newPlaylistButtonStyles = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject4(), sidebarIconStyles, _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].darkGreen);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StyledSidebar, {
    children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PlaylistsList, {
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: {
          pathname: "/SpotifyTinderPage",
          query: {
            playlistId: null,
            oneSongSeed: null
          }
        },
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          css: newPlaylistButtonStyles,
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaPlus"], {
            css: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])({
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
      }, this), playlists && playlists.map(function (playlist) {
        return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/playlists/".concat(playlist.id),
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: playlist.images[0] ? playlist.images[0].url : "/images/spotify-logo.png",
            css: sidebarIconStyles,
            title: playlist.name,
            alt: playlist.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, _this)
        }, playlist.id, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, _this);
      })]
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

_s(Sidebar, "179Lqg+mamO39o/p0mNeKHlvfFc=", false, function () {
  return [_hooks_usePlaylists__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c3 = Sidebar;
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

var _c, _c2, _c3;

$RefreshReg$(_c, "StyledSidebar");
$RefreshReg$(_c2, "PlaylistsList");
$RefreshReg$(_c3, "Sidebar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./hooks/usePlaylists.js":
/*!*******************************!*\
  !*** ./hooks/usePlaylists.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_playlistAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/playlistAction */ "./store/actions/playlistAction.js");
var _s = $RefreshSig$();





function usePlaylists() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.auth;
  }),
      accessToken = _useSelector.accessToken;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.playlist;
  }),
      playlists = _useSelector2.playlists;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log("Access token: ", accessToken);
    dispatch(Object(_store_actions_playlistAction__WEBPACK_IMPORTED_MODULE_2__["getPlaylistsList"])(accessToken));
  }, []);
  return {
    playlists: playlists
  };
}

_s(usePlaylists, "oFfDD/uaxGZG+OepDYxw+Eqt0sE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

/* harmony default export */ __webpack_exports__["default"] = (usePlaylists);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/string-hash/index.js":
false,

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
false,

/***/ "./node_modules/styled-jsx/dist/style.js":
false,

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
false,

/***/ "./node_modules/styled-jsx/style.js":
false,

/***/ "./pages/SpotifyTinderPage.js":
/*!************************************!*\
  !*** ./pages/SpotifyTinderPage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TestHalfPagePlaylist; });
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _components_HalfPagePlaylist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HalfPagePlaylist */ "./components/HalfPagePlaylist.js");
/* harmony import */ var _components_SpotifyTinder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SpotifyTinder */ "./components/SpotifyTinder.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Sidebar */ "./components/Sidebar.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_songAction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../store/actions/songAction */ "./store/actions/songAction.js");
/* harmony import */ var _components_PlaylistColumn__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/PlaylistColumn */ "./components/PlaylistColumn.js");
/* harmony import */ var _components_PlaylistViewColumn__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/PlaylistViewColumn */ "./components/PlaylistViewColumn.js");





var _jsxFileName = "C:\\Users\\zengg\\Desktop\\CS499\\final-project-team-10-SpotifyEZ\\pages\\SpotifyTinderPage.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    display:flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsxImportSource @emotion/react */













 //note track is an array with one object, and that object contains

function TestHalfPagePlaylist() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"])(function (state) {
    return state.auth;
  }),
      accessToken = _useSelector.accessToken;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"])(function (state) {
    return state.song;
  }),
      recommendations = _useSelector2.recommendations;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])([]),
      swipeRightList = _useState[0],
      addSwipeRightList = _useState[1];

  var _useSelector3 = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"])(function (state) {
    return state.song;
  }),
      recentSongs = _useSelector3.recentSongs;

  function swipeRight(songObject) {
    addSwipeRightList([].concat(Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(swipeRightList), [songObject]));
    console.log("Song object: " + songObject);
  }

  console.log(router.query);
  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(function () {
    console.log("query seed is : " + router.query.oneSongSeed);

    if (router.query.oneSongSeed) {
      dispatch(Object(_store_actions_songAction__WEBPACK_IMPORTED_MODULE_13__["getSongRecommendations"])(accessToken, router.query.oneSongSeed));
    } else {
      dispatch(Object(_store_actions_songAction__WEBPACK_IMPORTED_MODULE_13__["getRecents"])(accessToken));
      dispatch(Object(_store_actions_songAction__WEBPACK_IMPORTED_MODULE_13__["getSongRecommendations"])(accessToken, recentSongs.items[0].track.id));
      console.log("recent song first item: " + recentSongs.items[0].track.id);
    }
  }, []);
  console.log('Recommendation === ', recommendations);
  var SpotifyTinderPageContainerStyling = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_9__["css"])(_templateObject());

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])({
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
  }),
      dummyData = _useState2[0],
      setDummyData = _useState2[1];

  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: SpotifyTinderPageContainerStyling,
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SpotifyTinder__WEBPACK_IMPORTED_MODULE_4__["default"], {
          playlist: recommendations ? recommendations.tracks : dummyData.tracks,
          SwipeRight: swipeRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 7
        }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: router.query.playlistId ? Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PlaylistColumn__WEBPACK_IMPORTED_MODULE_14__["default"], {
            playlist: [],
            addedSongs: swipeRightList ? swipeRightList : dummyData.tracks,
            setPlaylist: addSwipeRightList,
            hasMinusButton: true,
            playlistId: router.query.playlistId
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 311,
            columnNumber: 9
          }, this) : Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PlaylistViewColumn__WEBPACK_IMPORTED_MODULE_15__["default"], {
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

_s(TestHalfPagePlaylist, "EsgU4an3R1Ug8YhksC5IJS2BD5A=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_12__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"]];
});

_c = TestHalfPagePlaylist;

var _c;

$RefreshReg$(_c, "TestHalfPagePlaylist");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./store/actions/songAction.js":
/*!*************************************!*\
  !*** ./store/actions/songAction.js ***!
  \*************************************/
/*! exports provided: getGenreSeeds, getRecommendations, getSongRecommendations, getSongs, getRecents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGenreSeeds", function() { return getGenreSeeds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecommendations", function() { return getRecommendations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSongRecommendations", function() { return getSongRecommendations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSongs", function() { return getSongs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecents", function() { return getRecents; });
/* harmony import */ var C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./store/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./store/utils.js");





var getGenreSeeds = function getGenreSeeds(accessToken) {
  return /*#__PURE__*/function () {
    var _ref = Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var url, res;
      return C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = 'https://api.spotify.com/v1/recommendations/available-genre-seeds';
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3___default()(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getOptions"])(accessToken, url));

            case 3:
              res = _context.sent;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["GET_GENRE_SEEDS"],
                genreSeeds: res.data
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var getRecommendations = function getRecommendations(accessToken, query) {
  return /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
      var url, res;
      return C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              url = "https://api.spotify.com/v1/recommendations?limit=10&seed_genres=".concat(query);
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3___default()(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getOptions"])(accessToken, url));

            case 3:
              res = _context2.sent;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["GET_RECOMMENDATIONS"],
                recommendations: res.data
              });

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var getSongRecommendations = function getSongRecommendations(accessToken, query) {
  return /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
      var url, res;
      return C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              url = "https://api.spotify.com/v1/recommendations?limit=50&seed_tracks=".concat(query);
              _context3.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3___default()(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getOptions"])(accessToken, url));

            case 3:
              res = _context3.sent;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["GET_RECOMMENDATIONS"],
                recommendations: res.data
              });

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};
var getSongs = function getSongs(accessToken, query) {
  return /*#__PURE__*/function () {
    var _ref4 = Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dispatch) {
      var url, res;
      return C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              url = "https://api.spotify.com/v1/search?q=".concat(query, "&type=track&market=US&limit=10");
              _context4.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3___default()(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getOptions"])(accessToken, url));

            case 3:
              res = _context4.sent;
              console.log("==Searh results: ", res.data);
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["GET_SONGS"],
                searchSongs: res.data
              });

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};
var getRecents = function getRecents(accessToken, query) {
  return /*#__PURE__*/function () {
    var _ref5 = Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(dispatch) {
      var url, res;
      return C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              url = "https://api.spotify.com/v1/me/player/recently-played";
              _context5.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3___default()(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getOptions"])(accessToken, url));

            case 3:
              res = _context5.sent;
              console.log("log", res.data);
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["GET_RECENTS"],
                recentSongs: res.data
              });

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }();
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGxheWxpc3RDb2x1bW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGxheWxpc3RWaWV3Q29sdW1uLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZVBsYXlsaXN0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvU3BvdGlmeVRpbmRlclBhZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL2FjdGlvbnMvc29uZ0FjdGlvbi5qcyJdLCJuYW1lcyI6WyJTZWFyY2hCYXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInNlYXJjaFN0cmluZyIsInNldFNlYXJjaFN0cmluZyIsInNlYXJjaEJhclN0eWxlcyIsImNzcyIsImNvbG9ycyIsImRhcmtHcmVlbiIsImJyZWFrcG9pbnRzIiwibGciLCJzbSIsImUiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJOYXZiYXIiLCJzaG93SGFtbmF2Iiwic2V0U2hvd0hhbW5hdiIsIm5hdmJhclN0eWxlcyIsImJsYWNrIiwibmF2SXRlbVN0eWxlcyIsImhvdmVyQmxhY2siLCJzaXRlVGl0bGVTdHlsZXMiLCJsb2dPdXRCdXR0b25TdHlsZXMiLCJidXJnZXJNZW51SXRlbVN0eWxlcyIsImJ1cmdlck1lbnVTdHlsZXMiLCJibUJ1cmdlckJ1dHRvbiIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJyaWdodCIsInRvcCIsImJtQnVyZ2VyQmFycyIsImJhY2tncm91bmQiLCJibUNyb3NzQnV0dG9uIiwiYm1Dcm9zcyIsImJtTWVudVdyYXAiLCJib3R0b20iLCJibU1lbnUiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJibU1vcnBoU2hhcGUiLCJmaWxsIiwiYm1JdGVtTGlzdCIsImNvbG9yIiwib3ZlcmZsb3ciLCJibUl0ZW0iLCJkaXNwbGF5IiwidGV4dERlY29yYXRpb24iLCJ0ZXh0QWxpZ24iLCJibU92ZXJsYXkiLCJsZWZ0IiwiY29va2llcyIsIkNvb2tpZXMiLCJ1cGRhdGVNZWRpYSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsIlBsYXlsaXN0Q29sdW1uIiwicHJvcHMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImF1dGgiLCJhY2Nlc3NUb2tlbiIsInBsYXlsaXN0IiwicGxheWxpc3RCeUlkIiwidXNlciIsImR1bW15UGxheWxpc3RJRCIsInBsYXlsaXN0SWQiLCJjb25zb2xlIiwibG9nIiwiZ2V0UGxheWxpc3RCeUlkIiwibmFtZSIsInBsYXlsaXN0VGl0bGUiLCJ0cmFja3MiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJ0cmFjayIsIm5ld1BsYXlsaXN0Iiwic2V0UGxheWxpc3QiLCJwcm9wVHlwZXMiLCJhZGRlZFNvbmdzIiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJzdHJpbmciLCJtZW51IiwiZWxlbWVudCIsIm9uUGx1c0J1dHRvbkNsaWNrIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsIm91dGVyQ29udGFpbmVyU3R5bGluZyIsImNvbnRhaW5lclN0eWxpbmciLCJidXR0b25Db250YWluZXJTdHlsaW5nIiwiUGxheWxpc3RUaXRsZSIsInN0eWxlZCIsImRpdiIsIlNhdmVTdWJQbGF5bGlzdEJ1dHRvbiIsImJ1dHRvbiIsImhvdmVyR3JlZW4iLCJQbGF5bGlzdFZpZXdDb2x1bW4iLCJ0b2dnbGVNb2RhbCIsInNldFRvZ2dsZU1vZGFsIiwicGxheWxpc3ROYW1lIiwic2V0UGxheWxpc3ROYW1lIiwicGxheWxpc3REZWNyaXB0aW9uIiwic2V0UGxheWxpc3REZXNjcmlwdGlvbiIsInJlbW92ZWRTb25nVXJpcyIsInNldFJlbW92ZWRTb25nVXJpcyIsImNyZWF0ZU1vZGFsQ2xpY2tlZCIsIm1ha2VOZXdQbGF5bGlzdCIsImNhbmNlbE1vZGFsQ2xpY2tlZCIsIlVwZGF0ZVBsYXlsaXN0TmFtZSIsIlVwZGF0ZVBsYXlsaXN0RGVzY3JpcHRpb24iLCJzdHlsZXMiLCJyZW1vdmVGcm9tcGxheWxpc3QiLCJ1cmkiLCJmaWx0ZXIiLCJuYW1lT2ZTb25nIiwibmFtZU9mUGxheWxpc3QiLCJnZXRPcHRpb25zIiwidXJsIiwiZGF0YSIsIm1ldGhvZCIsImhlYWRlcnMiLCJpZCIsImF4aW9zIiwidGhlbiIsInJlc3BvbnNlIiwicHV0SXRlbXNJblBsYXlsaXN0IiwiRE9NRXhjZXB0aW9uIiwib3B0aW9ucyIsImVuY29kZVVSSUNvbXBvbmVudCIsInNhdmVQbGF5bGlzdCIsImhhc1BsdXNCdXR0b24iLCJoYXNNaW51c0J1dHRvbiIsImxlbmd0aCIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJTdHlsZWRTaWRlYmFyIiwiUGxheWxpc3RzTGlzdCIsIlNpZGViYXIiLCJ1c2VQbGF5bGlzdHMiLCJwbGF5bGlzdHMiLCJzaWRlYmFySWNvblN0eWxlcyIsIm5ld1BsYXlsaXN0QnV0dG9uU3R5bGVzIiwib25lU29uZ1NlZWQiLCJpbWFnZXMiLCJnZXRQbGF5bGlzdHNMaXN0IiwiVGVzdEhhbGZQYWdlUGxheWxpc3QiLCJzb25nIiwicmVjb21tZW5kYXRpb25zIiwic3dpcGVSaWdodExpc3QiLCJhZGRTd2lwZVJpZ2h0TGlzdCIsInJlY2VudFNvbmdzIiwic3dpcGVSaWdodCIsInNvbmdPYmplY3QiLCJnZXRTb25nUmVjb21tZW5kYXRpb25zIiwiZ2V0UmVjZW50cyIsIlNwb3RpZnlUaW5kZXJQYWdlQ29udGFpbmVyU3R5bGluZyIsImR1bW15RGF0YSIsInNldER1bW15RGF0YSIsImdldEdlbnJlU2VlZHMiLCJyZXMiLCJ0eXBlIiwidHlwZXMiLCJnZW5yZVNlZWRzIiwiZ2V0UmVjb21tZW5kYXRpb25z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MEM7QUFBQTtBQUFBLHFCQUU5QkssNENBQUssQ0FBQ04seURBQVUsQ0FBQ3pELFdBQUQsRUFBYzBELEdBQWQsQ0FBWCxDQUZ5Qjs7QUFBQTtBQUUxQzBDLGlCQUYwQztBQUdoRDlGLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CNkYsR0FBRyxDQUFDekMsSUFBdkI7QUFDQWhFLHNCQUFRLENBQUM7QUFDUDBHLG9CQUFJLEVBQUVDLGtEQURDO0FBRVBYLDJCQUFXLEVBQUVTLEdBQUcsQ0FBQ3pDO0FBRlYsZUFBRCxDQUFSOztBQUpnRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1Nwb3RpZnlUaW5kZXJQYWdlLjIxMmI2NzI2Mjc0ZTQ2NWJlNzgyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgeyBGYVNlYXJjaCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgc2xpZGUgYXMgTWVudSB9IGZyb20gJ3JlYWN0LWJ1cmdlci1tZW51JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL3N0eWxlcy9jb2xvcnMnO1xyXG5pbXBvcnQgYnJlYWtwb2ludHMgZnJvbSAnLi4vc3R5bGVzL2JyZWFrcG9pbnRzJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAndW5pdmVyc2FsLWNvb2tpZSdcclxuXHJcbi8vU2VhcmNoIGJhciBmb3IgdGhlIE5hdmJhclxyXG5mdW5jdGlvbiBTZWFyY2hCYXIoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgWyBzZWFyY2hTdHJpbmcsIHNldFNlYXJjaFN0cmluZ10gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgLy9TdHlsZXMgZm9yIHRoZSBzZWFyY2ggYmFyXHJcbiAgICBjb25zdCBzZWFyY2hCYXJTdHlsZXMgPSBjc3NgXHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGRhcmtncmF5O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBtYXJnaW46IDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBjb2xvcjogZGFya2dyYXk7XHJcblxyXG4gICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1N0eWxlcyBmb3IgdGhlIHNlYXJjaCB0ZXh0IGJveFxyXG4gICAgICAgIGZvcm0gaW5wdXQge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA5MHB4KTsgLy9zdWJ0cmFjdCB0aGUgd2lkdGggb2YgdGhlIGJ1dHRvblxyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vU3R5bGVzIGZvciB0aGUgc2VhcmNoIGljb24gYnV0dG9uXHJcbiAgICAgICAgZm9ybSBidXR0b24ge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMuZGFya0dyZWVufTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke2JyZWFrcG9pbnRzLmxnfXB4KSBhbmQgKG1pbi13aWR0aDogJHticmVha3BvaW50cy5zbX1weCkge1xyXG4gICAgICAgICAgICB3aWR0aDogNzglO1xyXG4gICAgICAgIH1cclxuICAgIGA7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNzcz17c2VhcmNoQmFyU3R5bGVzfSA+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9UT0RPOiBIb29rIHRoaXMgdXAgdG8gc2VuZCBxdWVyeSBzdHJpbmcgcGFyYW1ldGVycyB0byBTZWFyY2ggcGFnZVxyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9zZWFyY2gnLFxyXG4gICAgICAgICAgICAgICAgICBxdWVyeTogJ3E9JyArIHNlYXJjaFN0cmluZ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHNldFNlYXJjaFN0cmluZygnJyk7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFN0cmluZ31cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VhcmNoIGZvciBhIHNvbmcgb3IgYXJ0aXN0Li4uJ1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoU3RyaW5nKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RmFTZWFyY2ggLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIGNvbnN0IFtzaG93SGFtbmF2LCBzZXRTaG93SGFtbmF2XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy9TdHlsZXMgZm9yIHRoZSBlbnRpcmUgbmF2YmFyXHJcbiAgY29uc3QgbmF2YmFyU3R5bGVzID0gY3NzYFxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuYmxhY2t9O1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBncmV5O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGA7XHJcblxyXG4gIC8vUGFyZW50IHN0eWxlcyBmb3IgYWxsIGxpbmtzIG9uIHRoZSBOYXZiYXJcclxuICBjb25zdCBuYXZJdGVtU3R5bGVzID0gY3NzYFxyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjVweCk7IC8vc3VidHJhY3QgdGhlIHBhZGRpbmc7XHJcbiAgICAgICAgd2lkdGg6IDglO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiBmbG9yYWx3aGl0ZTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gICAgICAgIDpob3ZlciB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICAke2NvbG9ycy5kYXJrR3JlZW59O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5ob3ZlckJsYWNrfTtcclxuICAgICAgICB9XHJcbiAgICBgO1xyXG5cclxuICAvL1N0eWxlcyBmb3IgdGhlIHNpdGUgdGl0bGUgb24gdGhlIE5hdmJhclxyXG4gIGNvbnN0IHNpdGVUaXRsZVN0eWxlcyA9IGNzc2BcclxuICAgICAgICAke25hdkl0ZW1TdHlsZXN9XHJcblxyXG4gICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMHB4KTsgIC8vc3VidHJhY3QgdGhlIHBhZGRpbmc7XHJcblxyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICBjb2xvcjogJHtjb2xvcnMuZGFya0dyZWVufTtcclxuICAgIGA7XHJcblxyXG4gIC8vU3R5bGVzIGZvciB0aGUgbG9nb3V0IGJ1dHRvblxyXG4gIGNvbnN0IGxvZ091dEJ1dHRvblN0eWxlcyA9IGNzc2BcclxuICAgICAgICAke25hdkl0ZW1TdHlsZXN9O1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4IDEwcHggMCAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7IC8vc3VidHJhY3QgdGhlIHBhZGRpbmdcclxuICAgIGA7XHJcblxyXG4gIGNvbnN0IGJ1cmdlck1lbnVJdGVtU3R5bGVzID0gY3NzYFxyXG4gICAgICAgIDpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmhvdmVyQmxhY2t9O1xyXG4gICAgICAgIH1cclxuICAgIGA7XHJcbiAgdmFyIGJ1cmdlck1lbnVTdHlsZXMgPSB7XHJcbiAgICBibUJ1cmdlckJ1dHRvbjoge1xyXG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgd2lkdGg6ICczNnB4JyxcclxuICAgICAgaGVpZ2h0OiAnMzBweCcsXHJcbiAgICAgIHJpZ2h0OiAnMzZweCcsXHJcbiAgICAgIHRvcDogJzI1cHgnXHJcbiAgICB9LFxyXG4gICAgYm1CdXJnZXJCYXJzOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICB9LFxyXG4gICAgYm1Dcm9zc0J1dHRvbjoge1xyXG4gICAgICBoZWlnaHQ6ICc0MHB4JyxcclxuICAgICAgd2lkdGg6ICc0MHB4JyxcclxuICAgIH0sXHJcbiAgICBibUNyb3NzOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICcjYmRjM2M3JyxcclxuICAgICAgaGVpZ2h0OiAnMzBweCcsXHJcbiAgICAgIHJpZ2h0OiAnMTBweCdcclxuICAgIH0sXHJcbiAgICBibU1lbnVXcmFwOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGJvdHRvbTogMFxyXG4gICAgfSxcclxuICAgIGJtTWVudToge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBgJHtjb2xvcnMuYmxhY2t9YCxcclxuICAgICAgcGFkZGluZzogJzgwcHggMCcsXHJcbiAgICAgIGZvbnRTaXplOiAnMS4xNWVtJ1xyXG4gICAgfSxcclxuICAgIGJtTW9ycGhTaGFwZToge1xyXG4gICAgICBmaWxsOiAnIzM3M2E0NydcclxuICAgIH0sXHJcbiAgICBibUl0ZW1MaXN0OiB7XHJcbiAgICAgIGNvbG9yOiAnI2I4YjdhZCcsXHJcbiAgICAgIG92ZXJmbG93OiAnbm9uZScsXHJcbiAgICAgIGhlaWdodDogJzIwJSdcclxuICAgIH0sXHJcbiAgICBibUl0ZW06IHtcclxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBwYWRkaW5nOiAnMTBweCAwcHgnLFxyXG4gICAgICBmb250U2l6ZTogJzI1cHgnLFxyXG4gICAgfSxcclxuICAgIGJtT3ZlcmxheToge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjMpJyxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBsZWZ0OiAwXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llc1xyXG4gIGNvbnN0IHVwZGF0ZU1lZGlhID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd0hhbW5hdih3aW5kb3cuaW5uZXJXaWR0aCA8PSBicmVha3BvaW50cy5sZyk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZU1lZGlhKTtcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGVNZWRpYSk7XHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRTaG93SGFtbmF2KHdpbmRvdy5pbm5lcldpZHRoIDw9IGJyZWFrcG9pbnRzLmxnKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7c2hvd0hhbW5hdiA/XHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY3NzPXtuYXZiYXJTdHlsZXN9PlxyXG4gICAgICAgICAgICA8U2VhcmNoQmFyIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxNZW51IHJpZ2h0IHN0eWxlcz17YnVyZ2VyTWVudVN0eWxlc30+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY3NzPXtidXJnZXJNZW51SXRlbVN0eWxlc30+SG9tZTwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImFib3V0XCIgY3NzPXtidXJnZXJNZW51SXRlbVN0eWxlc30+QWJvdXQ8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY3NzPXtidXJnZXJNZW51SXRlbVN0eWxlc30+TG9nIE91dDwvYT5cclxuICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICA8Lz4gOlxyXG4gICAgICAgIDxkaXYgY3NzPXtuYXZiYXJTdHlsZXN9PlxyXG4gICAgICAgICAgPGEgY3NzPXtzaXRlVGl0bGVTdHlsZXN9IGhyZWY9XCIvXCI+U3BvdGlmeUVaPC9hPlxyXG4gICAgICAgICAgPGEgY3NzPXtuYXZJdGVtU3R5bGVzfSBocmVmPVwiL1wiPkhvbWU8L2E+XHJcbiAgICAgICAgICA8YSBjc3M9e25hdkl0ZW1TdHlsZXN9IGhyZWY9XCJhYm91dFwiPkFib3V0PC9hPlxyXG4gICAgICAgICAgPFNlYXJjaEJhciAvPlxyXG4gICAgICAgICAgPGEgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBjb29raWVzLnJlbW92ZSgnQUNFU1NfVE9LRU4nKVxyXG4gICAgICAgICAgICBjb29raWVzLnJlbW92ZSgnSVNfQVVUSEVEJylcclxuICAgICAgICAgIH19IGNzcz17bG9nT3V0QnV0dG9uU3R5bGVzfSBocmVmPVwiL1wiPkxvZyBPdXQ8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vc3R5bGVzL2NvbG9ycyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IGdldE9wdGlvbnMgfSBmcm9tICcuLi9zdG9yZS91dGlscydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuaW1wb3J0IHsgZ2V0UGxheWxpc3RCeUlkLCBjbGVhclBsYXlsaXN0QnlJZCB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvcGxheWxpc3RBY3Rpb24nO1xyXG5pbXBvcnQgUGxheWxpc3RWaWV3Q29sdW1uIGZyb20gJy4uL2NvbXBvbmVudHMvUGxheWxpc3RWaWV3Q29sdW1uJ1xyXG5cclxuXHJcbmZ1bmN0aW9uIFBsYXlsaXN0Q29sdW1uKHByb3BzKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgeyBhY2Nlc3NUb2tlbiB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYXV0aClcclxuICBjb25zdCB7IHBsYXlsaXN0QnlJZCB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucGxheWxpc3QpXHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyKVxyXG5cclxuICBjb25zdCBkdW1teVBsYXlsaXN0SUQgPSBcIjA4RVJSOHROcmw3V0JJM29tOFlreUtcIlxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocHJvcHMucGxheWxpc3RJZCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiPT1HZXR0aW5nIHBsYXlsaXN0IHdpdGggSUQ6IFwiLCBwcm9wcy5wbGF5bGlzdElkKTtcclxuICAgICAgZGlzcGF0Y2goZ2V0UGxheWxpc3RCeUlkKGFjY2Vzc1Rva2VuLCBwcm9wcy5wbGF5bGlzdElkKSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVuZGVyaW5nIGEgY2xpZW50LXNpZGUgcGxheWxpc3QsIHByb3BzOiBcIiwgcHJvcHMpO1xyXG4gICAgfVxyXG4gIH0sIFtwcm9wcy5wbGF5bGlzdElkXSlcclxuXHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBcIlBsYXlsaXN0Vmlld0NvbHVtbjogXCIgK1xyXG4gICAgYD09cGxheWxpc3RCeUlkOiAke3BsYXlsaXN0QnlJZH0gXFxuPT1wbGF5bGlzdDogJHtwcm9wcy5wbGF5bGlzdH0gXFxuPT1wbGF5bGlzdElkOiAke3Byb3BzLnBsYXlsaXN0SWR9YFxyXG4gICk7XHJcbiAgcmV0dXJuKFxyXG4gICAgPD5cclxuICAgIHsocGxheWxpc3RCeUlkIHx8IHByb3BzLnBsYXlsaXN0KSAmJlxyXG4gICAgICA8PlxyXG4gICAgICA8UGxheWxpc3RWaWV3Q29sdW1uXHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgIHBsYXlsaXN0VGl0bGU9e3BsYXlsaXN0QnlJZCA/XHJcbiAgICAgICAgICBwbGF5bGlzdEJ5SWQubmFtZSA6XHJcbiAgICAgICAgICBwcm9wcy5wbGF5bGlzdFRpdGxlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBsYXlsaXN0PXtwbGF5bGlzdEJ5SWQgP1xyXG4gICAgICAgICAgICBwbGF5bGlzdEJ5SWQudHJhY2tzLml0ZW1zLm1hcChpdGVtID0+IGl0ZW0udHJhY2spIDpcclxuICAgICAgICAgICAgcHJvcHMucGxheWxpc3RcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0UGxheWxpc3Q9e3BsYXlsaXN0QnlJZCA/XHJcbiAgICAgICAgICAobmV3UGxheWxpc3QpID0+IHtwbGF5bGlzdEJ5SWQgPSBuZXdQbGF5bGlzdH06XHJcbiAgICAgICAgICBwcm9wcy5zZXRQbGF5bGlzdFxyXG4gICAgICAgIH1cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gICAgfVxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5QbGF5bGlzdENvbHVtbi5wcm9wVHlwZXMgPSB7XHJcbiAgYWRkZWRTb25nczogUHJvcFR5cGVzLmFycmF5LFxyXG4gIHBsYXlsaXN0OiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgcGxheWxpc3RJZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBtZW51OiBQcm9wVHlwZXMuZWxlbWVudCxcclxuICBvblBsdXNCdXR0b25DbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgc2V0UGxheWxpc3Q6IFByb3BUeXBlcy5mdW5jLFxyXG4gIHBsYXlsaXN0VGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn1cclxuUGxheWxpc3RDb2x1bW4uZGVmYXVsdFByb3BzID0ge1xyXG4gIGFkZGVkU29uZ3M6IFtdLFxyXG4gIHBsYXlsaXN0OiBbXSxcclxuICBwbGF5bGlzdFRpdGxlOiBcIlwiLFxyXG4gIHBsYXlsaXN0SWQ6IFwiXCIsXHJcbiAgbWVudTogbnVsbCxcclxuICBvblBsdXNCdXR0b25DbGljazogbnVsbFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5bGlzdENvbHVtblxyXG4iLCIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vc3R5bGVzL2NvbG9ycyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCBQbGF5bGlzdFZpZXcgZnJvbSAnLi9QbGF5bGlzdFZpZXcnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG4gIC8vbW9kYWxcclxuXHJcbiAgY29uc3Qgb3V0ZXJDb250YWluZXJTdHlsaW5nID0gY3NzYFxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA5JTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDEwMTA7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYDtcclxuICBjb25zdCBjb250YWluZXJTdHlsaW5nID0gY3NzYFxyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpdntcclxuICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgIH1cclxuICAgIGlucHV0e1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxuICAgIHRleHRhcmVhe1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxuICAgIC5QbGF5bGlzdERlc2NyaXB0aW9ue1xyXG4gICAgICBoZWlnaHQ6IDUwJTtcclxuICAgIH1cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGZsb3JhbHdoaXRlO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGA7XHJcbmNvbnN0IGJ1dHRvbkNvbnRhaW5lclN0eWxpbmc9Y3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBidXR0b257XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuXHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcbmNvbnN0IFBsYXlsaXN0VGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogJHtjb2xvcnMuYmxhY2t9O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAke2NvbG9ycy5kYXJrR3JlZW59O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBTYXZlU3ViUGxheWxpc3RCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDQwcHg7XHJcbiAgcmlnaHQ6IDEyLjUlO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgZm9udC1zaXplOiAxMjUlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5kYXJrR3JlZW59O1xyXG4gIDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5ob3ZlckdyZWVufTtcclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBQbGF5bGlzdFZpZXdDb2x1bW4ocHJvcHMpIHtcclxuICBjb25zdCBbdG9nZ2xlTW9kYWwsIHNldFRvZ2dsZU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtwbGF5bGlzdE5hbWUsIHNldFBsYXlsaXN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFtwbGF5bGlzdERlY3JpcHRpb24sIHNldFBsYXlsaXN0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCB7IGFjY2Vzc1Rva2VuIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hdXRoKVxyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlcilcclxuICBjb25zdCBbcmVtb3ZlZFNvbmdVcmlzLCBzZXRSZW1vdmVkU29uZ1VyaXNdID0gdXNlU3RhdGUoW10pXHJcbiAgZnVuY3Rpb24gY3JlYXRlTW9kYWxDbGlja2VkKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbWFrZU5ld1BsYXlsaXN0KHBsYXlsaXN0TmFtZSwgcGxheWxpc3REZWNyaXB0aW9uKVxyXG4gICAgc2V0VG9nZ2xlTW9kYWwoIXRvZ2dsZU1vZGFsKVxyXG4gIH1cclxuICBmdW5jdGlvbiBjYW5jZWxNb2RhbENsaWNrZWQoZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRUb2dnbGVNb2RhbCghdG9nZ2xlTW9kYWwpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBVcGRhdGVQbGF5bGlzdE5hbWUoZSl7XHJcbiAgICBzZXRQbGF5bGlzdE5hbWUoZS50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIFVwZGF0ZVBsYXlsaXN0RGVzY3JpcHRpb24oZSl7XHJcbiAgICBzZXRQbGF5bGlzdERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxuICBjb25zdCBzdHlsZXMgPSBjc3NgXHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgYDtcclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlRnJvbXBsYXlsaXN0KHVyaSkge1xyXG4gICAgLy9UT0RPOiBJcyB0aGVyZSBhIHdheSB0byBub3QgcmVtb3ZlIGR1cGxpY2F0ZSBzb25ncz9cclxuICAgIHByb3BzLnNldFBsYXlsaXN0KFtcclxuICAgICAgLi4ucHJvcHMucGxheWxpc3QuZmlsdGVyKHRyYWNrID0+IHRyYWNrLnVyaSAhPT0gdXJpKSxcclxuICAgICAgLi4ucHJvcHMuYWRkZWRTb25ncy5maWx0ZXIodHJhY2sgPT4gdHJhY2sudXJpICE9PSB1cmkpXHJcbiAgICBdKVxyXG5cclxuICAgIHNldFJlbW92ZWRTb25nVXJpcyhbLi4ucmVtb3ZlZFNvbmdVcmlzLCB1cmldKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gbWFrZU5ld1BsYXlsaXN0KG5hbWVPZlNvbmcsIG5hbWVPZlBsYXlsaXN0KSB7XHJcbiAgICBjb25zdCBnZXRPcHRpb25zID0gKGFjY2Vzc1Rva2VuLCB1cmwsIGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgYWNjZXNzVG9rZW4sXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvdXNlcnMvJHt1c2VyLmlkfS9wbGF5bGlzdHNgXHJcbiAgICAgIGF4aW9zKGdldE9wdGlvbnMoYWNjZXNzVG9rZW4sIHVybCwge1xyXG4gICAgICAgICduYW1lJzogbmFtZU9mU29uZyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiBuYW1lT2ZQbGF5bGlzdCxcclxuICAgICAgICAncHVibGljJzogJ2ZhbHNlJ1xyXG4gICAgICB9KSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWFrZSBuZXcgcGxheWxpc3QgcmVzcG9uc2U6XCIsIHJlc3BvbnNlKVxyXG4gICAgICAgICAgcHV0SXRlbXNJblBsYXlsaXN0KHJlc3BvbnNlLmRhdGEuaWQpXHJcbiAgICAgICAgICAvL3NldE1ha2luZ3BsYXlsaXN0KGZhbHNlKVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIVFRQIHJlcXVlc3QgYWJvcnRlZFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gcHV0SXRlbXNJblBsYXlsaXN0KGlkKSB7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICB1cmw6IGBodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9wbGF5bGlzdHMvJHtpZH0vdHJhY2tzP3VyaXM9JHtlbmNvZGVVUklDb21wb25lbnQocHJvcHMuYWRkZWRTb25ncy5tYXAoKHVyaSkgPT4gdXJpLnVyaSkpfWAsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyBhY2Nlc3NUb2tlbixcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBheGlvcyhvcHRpb25zKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJQdXR0aW5nIEl0ZW1zIGluIHRoYXQgbmV3IHBsYXlsaXN0OiBcIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIVFRQIHJlcXVlc3QgYWJvcnRlZFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBmdW5jdGlvbiBzYXZlUGxheWxpc3QoKSB7XHJcblxyXG4gICAgaWYgKHByb3BzLnBsYXlsaXN0SWQpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJBZGRpbmcgdG8gdGhpcyBwbGF5bGlzdDogXCIsIHByb3BzLnBsYXlsaXN0SWQpO1xyXG4gICAgICBwdXRJdGVtc0luUGxheWxpc3QocHJvcHMucGxheWxpc3RJZClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiTWFraW5nIGEgbmV3IHBsYXlsaXN0XCIpO1xyXG4gICAgICAvL1RPR0dMRSBNT0RBTCwgbGV0IHRoZSB1c2VyIGVudGVyIHRoZSBwbGF5bGlzdCBkYXRhXHJcbiAgICAgIC8vb25TVUJNSVQsIHBhc3MgZGF0YSB0byBtYWtlTmV3UGxheWxpc3RcclxuICAgICAgc2V0VG9nZ2xlTW9kYWwoIXRvZ2dsZU1vZGFsKVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKFwiUGxheWxpc3RWaWV3Q29sdW1uIHByb3BzOiBcIiwgcHJvcHMpO1xyXG4gIHJldHVybihcclxuICAgIDxkaXYgY3NzPXtzdHlsZXN9PlxyXG4gICAgICA8UGxheWxpc3RUaXRsZT57cHJvcHMucGxheWxpc3RUaXRsZX08L1BsYXlsaXN0VGl0bGU+XHJcbiAgICAgIHtwcm9wcy5tZW51fVxyXG4gICAgICA8UGxheWxpc3RWaWV3XHJcbiAgICAgICAgcGxheWxpc3Q9e3Byb3BzLmFkZGVkU29uZ3M/IHByb3BzLmFkZGVkU29uZ3MgOiBbXX1cclxuICAgICAgICBoYXNQbHVzQnV0dG9uPXtwcm9wcy5oYXNQbHVzQnV0dG9ufVxyXG4gICAgICAgIG9uUGx1c0J1dHRvbkNsaWNrPXtwcm9wcy5vblBsdXNCdXR0b25DbGlja31cclxuICAgICAgICBoYXNNaW51c0J1dHRvbj17cHJvcHMuaGFzTWludXNCdXR0b259XHJcbiAgICAgICAgb25NaW51c0J1dHRvbkNsaWNrPXtyZW1vdmVGcm9tcGxheWxpc3R9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxQbGF5bGlzdFZpZXdcclxuICAgICAgICBwbGF5bGlzdD17cHJvcHMucGxheWxpc3R9XHJcbiAgICAgICAgaGFzUGx1c0J1dHRvbj17cHJvcHMuaGFzUGx1c0J1dHRvbn1cclxuICAgICAgICBvblBsdXNCdXR0b25DbGljaz17cHJvcHMub25QbHVzQnV0dG9uQ2xpY2t9XHJcbiAgICAgICAgaGFzTWludXNCdXR0b249e3Byb3BzLmhhc01pbnVzQnV0dG9ufVxyXG4gICAgICAgIG9uTWludXNCdXR0b25DbGljaz17cmVtb3ZlRnJvbXBsYXlsaXN0fVxyXG4gICAgICAvPlxyXG4gICAgICB7KChwcm9wcy5hZGRlZFNvbmdzICYmIHByb3BzLmFkZGVkU29uZ3MubGVuZ3RoID4gMCkgfHwgcmVtb3ZlZFNvbmdVcmlzLmxlbmd0aCA+IDApICYmXHJcbiAgICAgICAgPFNhdmVTdWJQbGF5bGlzdEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4geyBzYXZlUGxheWxpc3QoKSB9fT5cclxuICAgICAgICAgIFNhdmUgUGxheWxpc3RcclxuICAgICAgICA8L1NhdmVTdWJQbGF5bGlzdEJ1dHRvbj5cclxuICAgICAgfVxyXG4gICAgICA8ZGl2PlxyXG4gICAgIHt0b2dnbGVNb2RhbD8gKFxyXG4gICAgICAgPGRpdiBjc3M9e291dGVyQ29udGFpbmVyU3R5bGluZ30+XHJcbiAgICAgICAgIDxmb3JtIGNzcz17Y29udGFpbmVyU3R5bGluZ30+XHJcbiAgICAgICAgICAgPGRpdj5OZXcgcGxheWxpc3QgaW5mb3JtYXRpb248L2Rpdj5cclxuICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlBsYXlsaXN0IG5hbWUuLi5cIiBvbkNoYW5nZT17VXBkYXRlUGxheWxpc3ROYW1lfSB2YWx1ZT17cGxheWxpc3ROYW1lfS8+XHJcbiAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cIlBsYXlsaXN0RGVzY3JpcHRpb25cInR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJQbGF5bGlzdCBkZXNjcmlwdGlvbi4uLlwiIG9uQ2hhbmdlPXtVcGRhdGVQbGF5bGlzdERlc2NyaXB0aW9ufSB2YWx1ZT17cGxheWxpc3REZWNyaXB0aW9ufS8+XHJcblxyXG4gICAgICAgICA8ZGl2IGNzcz17YnV0dG9uQ29udGFpbmVyU3R5bGluZ30+XHJcbiAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjYW5jZWxNb2RhbENsaWNrZWR9PiBDYW5jZWwgPC9idXR0b24+XHJcbiAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjcmVhdGVNb2RhbENsaWNrZWR9PiBBZGQgbmV3IHBsYXlsaXN0IDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgPC9kaXY+KVxyXG4gICAgIDogbnVsbFxyXG4gICAgIH1cclxuICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuUGxheWxpc3RWaWV3Q29sdW1uLnByb3BUeXBlcyA9IHtcclxuICBwbGF5bGlzdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gIGFkZGVkU29uZ3M6IFByb3BUeXBlcy5hcnJheSxcclxuICBzZXRQbGF5bGlzdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBwbGF5bGlzdFRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHBsYXlsaXN0SWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbWVudTogUHJvcFR5cGVzLmVsZW1lbnQsXHJcbiAgaGFzUGx1c0J1dHRvbjogUHJvcFR5cGVzLmJvb2xlYW4sXHJcbiAgaGFzTWludXNCdXR0b246IFByb3BUeXBlcy5ib29sZWFuLFxyXG4gIG9uUGx1c0J1dHRvbkNsaWNrOiBQcm9wVHlwZXMuZnVuY1xyXG59XHJcblxyXG5QbGF5bGlzdFZpZXdDb2x1bW4uZGVmYXVsdFByb3BzID0ge1xyXG4gIGFkZGVkU29uZ3M6IFtdLFxyXG4gIHBsYXlsaXN0VGl0bGU6IFwiXCIsXHJcbiAgcGxheWxpc3RJZDogXCJcIixcclxuICBtZW51OiBudWxsLFxyXG4gIGhhc1BsdXNCdXR0b246IGZhbHNlLFxyXG4gIGhhc01pbnVzQnV0dG9uOiBmYWxzZSxcclxuICBvblBsdXNCdXR0b25DbGljazogbnVsbFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5bGlzdFZpZXdDb2x1bW47XHJcbiIsIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcblxyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9zdHlsZXMvY29sb3JzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgRmFQbHVzIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgdXNlUGxheWxpc3RzIGZyb20gJy4uL2hvb2tzL3VzZVBsYXlsaXN0cyc7XHJcblxyXG5jb25zdCBTdHlsZWRTaWRlYmFyID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpOyAvL2ZhY3RvciBpbiB0aGUgdG9wIGFuZCBib3R0b21cclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogODFweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JleTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmRhcmtHcmVlbn07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcblxyXG5gO1xyXG5cclxuY29uc3QgUGxheWxpc3RzTGlzdCA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBTaWRlYmFyKCkge1xyXG4gICAgY29uc3QgeyBwbGF5bGlzdHMgfSA9IHVzZVBsYXlsaXN0cygpXHJcblxyXG4gICAgY29uc3Qgc2lkZWJhckljb25TdHlsZXMgPSBjc3NgXHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICAgOmhvdmVye1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgfVxyXG4gICAgYDtcclxuXHJcbiAgICBjb25zdCBuZXdQbGF5bGlzdEJ1dHRvblN0eWxlcyA9IGNzc2BcclxuICAgICAgICAke3NpZGViYXJJY29uU3R5bGVzfTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICR7Y29sb3JzLmRhcmtHcmVlbn07XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBgO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZFNpZGViYXI+XHJcbiAgICAgICAgICAgIDxQbGF5bGlzdHNMaXN0PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXt7cGF0aG5hbWU6IFwiL1Nwb3RpZnlUaW5kZXJQYWdlXCIsIHF1ZXJ5OiB7cGxheWxpc3RJZDogbnVsbCwgb25lU29uZ1NlZWQ6IG51bGx9fX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjc3M9e25ld1BsYXlsaXN0QnV0dG9uU3R5bGVzfT5cclxuICAgICAgICAgICAgICAgICAgICA8RmFQbHVzIGNzcz17Y3NzKHtoZWlnaHQ6JzEwMCUnfSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICB7IHBsYXlsaXN0cyAmJiBwbGF5bGlzdHMubWFwKHBsYXlsaXN0ID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3BsYXlsaXN0cy8ke3BsYXlsaXN0LmlkfWB9IGtleT17cGxheWxpc3QuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5bGlzdC5pbWFnZXNbMF0gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5bGlzdC5pbWFnZXNbMF0udXJsIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvaW1hZ2VzL3Nwb3RpZnktbG9nby5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzPXtzaWRlYmFySWNvblN0eWxlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwbGF5bGlzdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwbGF5bGlzdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgPC9QbGF5bGlzdHNMaXN0PlxyXG5cclxuICAgICAgICA8L1N0eWxlZFNpZGViYXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGdldFBsYXlsaXN0c0xpc3QgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL3BsYXlsaXN0QWN0aW9uJ1xyXG5cclxuZnVuY3Rpb24gdXNlUGxheWxpc3RzKCkge1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gICAgY29uc3QgeyBhY2Nlc3NUb2tlbiB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYXV0aClcclxuICAgIGNvbnN0IHsgcGxheWxpc3RzIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wbGF5bGlzdClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWNjZXNzIHRva2VuOiBcIiwgYWNjZXNzVG9rZW4pO1xyXG4gICAgICAgIGRpc3BhdGNoKGdldFBsYXlsaXN0c0xpc3QoYWNjZXNzVG9rZW4pKVxyXG5cclxuICAgIH0sIFtdKVxyXG4gICAgcmV0dXJuIHsgcGxheWxpc3RzIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlUGxheWxpc3RzO1xyXG4iLCIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgSGFsZlBhZ2VQbGF5bGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0hhbGZQYWdlUGxheWxpc3QnXHJcbmltcG9ydCBTcG90aWZ5VGluZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvU3BvdGlmeVRpbmRlcidcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInXHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhcidcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBnZXRTb25nUmVjb21tZW5kYXRpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9zb25nQWN0aW9uJztcclxuaW1wb3J0IFBsYXlsaXN0Q29sdW1uIGZyb20gJy4uL2NvbXBvbmVudHMvUGxheWxpc3RDb2x1bW4nXHJcbmltcG9ydCBQbGF5bGlzdFZpZXdDb2x1bW4gZnJvbSAnLi4vY29tcG9uZW50cy9QbGF5bGlzdFZpZXdDb2x1bW4nO1xyXG5pbXBvcnQgeyBnZXRSZWNlbnRzIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9zb25nQWN0aW9uJztcclxuXHJcbi8vbm90ZSB0cmFjayBpcyBhbiBhcnJheSB3aXRoIG9uZSBvYmplY3QsIGFuZCB0aGF0IG9iamVjdCBjb250YWluc1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0SGFsZlBhZ2VQbGF5bGlzdCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCB7IGFjY2Vzc1Rva2VuIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hdXRoKVxyXG4gIGNvbnN0IHsgcmVjb21tZW5kYXRpb25zIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5zb25nKVxyXG4gIGNvbnN0IFtzd2lwZVJpZ2h0TGlzdCwgYWRkU3dpcGVSaWdodExpc3RdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgeyByZWNlbnRTb25ncyB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuc29uZylcclxuICBmdW5jdGlvbiBzd2lwZVJpZ2h0KHNvbmdPYmplY3Qpe1xyXG4gICAgYWRkU3dpcGVSaWdodExpc3QoWy4uLnN3aXBlUmlnaHRMaXN0LCBzb25nT2JqZWN0XSlcclxuICAgIGNvbnNvbGUubG9nKFwiU29uZyBvYmplY3Q6IFwiICsgc29uZ09iamVjdClcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwicXVlcnkgc2VlZCBpcyA6IFwiICsgcm91dGVyLnF1ZXJ5Lm9uZVNvbmdTZWVkKVxyXG4gICAgaWYgKHJvdXRlci5xdWVyeS5vbmVTb25nU2VlZCl7XHJcbiAgICAgIGRpc3BhdGNoKGdldFNvbmdSZWNvbW1lbmRhdGlvbnMoYWNjZXNzVG9rZW4sIHJvdXRlci5xdWVyeS5vbmVTb25nU2VlZCkpXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgZGlzcGF0Y2goZ2V0UmVjZW50cyhhY2Nlc3NUb2tlbikpXHJcbiAgICAgIGRpc3BhdGNoKGdldFNvbmdSZWNvbW1lbmRhdGlvbnMoYWNjZXNzVG9rZW4sIHJlY2VudFNvbmdzLml0ZW1zWzBdLnRyYWNrLmlkKSlcclxuICAgICAgY29uc29sZS5sb2coXCJyZWNlbnQgc29uZyBmaXJzdCBpdGVtOiBcIisgcmVjZW50U29uZ3MuaXRlbXNbMF0udHJhY2suaWQpO1xyXG4gICAgfVxyXG5cclxuICB9LCBbXSlcclxuXHJcbiAgY29uc29sZS5sb2coJ1JlY29tbWVuZGF0aW9uID09PSAnLCByZWNvbW1lbmRhdGlvbnMpXHJcblxyXG4gIGNvbnN0IFNwb3RpZnlUaW5kZXJQYWdlQ29udGFpbmVyU3R5bGluZyA9IGNzc2BcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBgO1xyXG4gIGNvbnN0IFtkdW1teURhdGEsIHNldER1bW15RGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgXCJ0cmFja3NcIjogW1xyXG4gICAge1xyXG4gICAgICBcImFsYnVtXCI6IHtcclxuICAgICAgICBcImFsYnVtX3R5cGVcIjogXCJBTEJVTVwiLFxyXG4gICAgICAgIFwiYXJ0aXN0c1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZXh0ZXJuYWxfdXJsc1wiOiB7XHJcbiAgICAgICAgICAgICAgXCJzcG90aWZ5XCI6IFwiaHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC8yNlZGVGcyejhZUjBjQ3V3THpFU2kyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvYXJ0aXN0cy8yNlZGVGcyejhZUjBjQ3V3THpFU2kyXCIsXHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIyNlZGVGcyejhZUjBjQ3V3THpFU2kyXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkhhbHNleVwiLFxyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJhcnRpc3RcIixcclxuICAgICAgICAgICAgXCJ1cmlcIjogXCJzcG90aWZ5OmFydGlzdDoyNlZGVGcyejhZUjBjQ3V3THpFU2kyXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiZXh0ZXJuYWxfdXJsc1wiOiB7XHJcbiAgICAgICAgICBcInNwb3RpZnlcIjogXCJodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vN0dqRzkxdHlIUU5HRUh6S0phcU9pMFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9hbGJ1bXMvN0dqRzkxdHlIUU5HRUh6S0phcU9pMFwiLFxyXG4gICAgICAgIFwiaWRcIjogXCI3R2pHOTF0eUhRTkdFSHpLSmFxT2kwXCIsXHJcbiAgICAgICAgXCJpbWFnZXNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImhlaWdodFwiOiA2NDAsXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzBmN2FkNmQ4ZDgyOTkwNmMxN2NhZTIxMFwiLFxyXG4gICAgICAgICAgICBcIndpZHRoXCI6IDY0MFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJoZWlnaHRcIjogMzAwLFxyXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMDFlMDIwZjdhZDZkOGQ4Mjk5MDZjMTdjYWUyMTBcIixcclxuICAgICAgICAgICAgXCJ3aWR0aFwiOiAzMDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDY0LFxyXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMDQ4NTEwZjdhZDZkOGQ4Mjk5MDZjMTdjYWUyMTBcIixcclxuICAgICAgICAgICAgXCJ3aWR0aFwiOiA2NFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiaG9wZWxlc3MgZm91bnRhaW4ga2luZ2RvbSAoRGVsdXhlKVwiLFxyXG4gICAgICAgIFwicmVsZWFzZV9kYXRlXCI6IFwiMjAxNy0wNi0wMlwiLFxyXG4gICAgICAgIFwicmVsZWFzZV9kYXRlX3ByZWNpc2lvblwiOiBcImRheVwiLFxyXG4gICAgICAgIFwidG90YWxfdHJhY2tzXCI6IDE2LFxyXG4gICAgICAgIFwidHlwZVwiOiBcImFsYnVtXCIsXHJcbiAgICAgICAgXCJ1cmlcIjogXCJzcG90aWZ5OmFsYnVtOjdHakc5MXR5SFFOR0VIektKYXFPaTBcIlxyXG4gICAgICB9LFxyXG4gICAgICBcImFydGlzdHNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiZXh0ZXJuYWxfdXJsc1wiOiB7XHJcbiAgICAgICAgICAgIFwic3BvdGlmeVwiOiBcImh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvMjZWRlRnMno4WVIwY0N1d0x6RVNpMlwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvYXJ0aXN0cy8yNlZGVGcyejhZUjBjQ3V3THpFU2kyXCIsXHJcbiAgICAgICAgICBcImlkXCI6IFwiMjZWRlRnMno4WVIwY0N1d0x6RVNpMlwiLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwiSGFsc2V5XCIsXHJcbiAgICAgICAgICBcInR5cGVcIjogXCJhcnRpc3RcIixcclxuICAgICAgICAgIFwidXJpXCI6IFwic3BvdGlmeTphcnRpc3Q6MjZWRlRnMno4WVIwY0N1d0x6RVNpMlwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBcImRpc2NfbnVtYmVyXCI6IDEsXHJcbiAgICAgIFwiZHVyYXRpb25fbXNcIjogMjAyNDM4LFxyXG4gICAgICBcImV4cGxpY2l0XCI6IGZhbHNlLFxyXG4gICAgICBcImV4dGVybmFsX2lkc1wiOiB7XHJcbiAgICAgICAgXCJpc3JjXCI6IFwiVVNVTTcxNzAyMjEzXCJcclxuICAgICAgfSxcclxuICAgICAgXCJleHRlcm5hbF91cmxzXCI6IHtcclxuICAgICAgICBcInNwb3RpZnlcIjogXCJodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svMldRbjdZdnM3MjhLWm1tWTZ0Z1dxSFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL3RyYWNrcy8yV1FuN1l2czcyOEtabW1ZNnRnV3FIXCIsXHJcbiAgICAgIFwiaWRcIjogXCIyV1FuN1l2czcyOEtabW1ZNnRnV3FIXCIsXHJcbiAgICAgIFwiaXNfbG9jYWxcIjogZmFsc2UsXHJcbiAgICAgIFwiaXNfcGxheWFibGVcIjogdHJ1ZSxcclxuICAgICAgXCJuYW1lXCI6IFwiRXllcyBDbG9zZWRcIixcclxuICAgICAgXCJwb3B1bGFyaXR5XCI6IDYwLFxyXG4gICAgICBcInByZXZpZXdfdXJsXCI6IG51bGwsXHJcbiAgICAgIFwidHJhY2tfbnVtYmVyXCI6IDMsXHJcbiAgICAgIFwidHlwZVwiOiBcInRyYWNrXCIsXHJcbiAgICAgIFwidXJpXCI6IFwic3BvdGlmeTp0cmFjazoyV1FuN1l2czcyOEtabW1ZNnRnV3FIXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiYWxidW1cIjoge1xyXG4gICAgICAgIFwiYWxidW1fdHlwZVwiOiBcIkFMQlVNXCIsXHJcbiAgICAgICAgXCJhcnRpc3RzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJleHRlcm5hbF91cmxzXCI6IHtcclxuICAgICAgICAgICAgICBcInNwb3RpZnlcIjogXCJodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzVXSWQ0bzVqZEdWaHB0TlUwdXFLeHVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9hcnRpc3RzLzVXSWQ0bzVqZEdWaHB0TlUwdXFLeHVcIixcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjVXSWQ0bzVqZEdWaHB0TlUwdXFLeHVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiU3QuIEx1Y2lhXCIsXHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImFydGlzdFwiLFxyXG4gICAgICAgICAgICBcInVyaVwiOiBcInNwb3RpZnk6YXJ0aXN0OjVXSWQ0bzVqZEdWaHB0TlUwdXFLeHVcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJleHRlcm5hbF91cmxzXCI6IHtcclxuICAgICAgICAgIFwic3BvdGlmeVwiOiBcImh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS81UGpmdDlFYm5lR21saE9RMm1vNmJvXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL2FsYnVtcy81UGpmdDlFYm5lR21saE9RMm1vNmJvXCIsXHJcbiAgICAgICAgXCJpZFwiOiBcIjVQamZ0OUVibmVHbWxoT1EybW82Ym9cIixcclxuICAgICAgICBcImltYWdlc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDY0MCxcclxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczNmZmOWVmMWZhMGRkY2QyZmY5ZGE1MDVmXCIsXHJcbiAgICAgICAgICAgIFwid2lkdGhcIjogNjQwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImhlaWdodFwiOiAzMDAsXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwMWUwMjZmZjllZjFmYTBkZGNkMmZmOWRhNTA1ZlwiLFxyXG4gICAgICAgICAgICBcIndpZHRoXCI6IDMwMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJoZWlnaHRcIjogNjQsXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwNDg1MTZmZjllZjFmYTBkZGNkMmZmOWRhNTA1ZlwiLFxyXG4gICAgICAgICAgICBcIndpZHRoXCI6IDY0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcIm5hbWVcIjogXCJXaGVuIFRoZSBOaWdodCAoRGVsdXhlKVwiLFxyXG4gICAgICAgIFwicmVsZWFzZV9kYXRlXCI6IFwiMjAxMlwiLFxyXG4gICAgICAgIFwicmVsZWFzZV9kYXRlX3ByZWNpc2lvblwiOiBcInllYXJcIixcclxuICAgICAgICBcInRvdGFsX3RyYWNrc1wiOiAxNCxcclxuICAgICAgICBcInR5cGVcIjogXCJhbGJ1bVwiLFxyXG4gICAgICAgIFwidXJpXCI6IFwic3BvdGlmeTphbGJ1bTo1UGpmdDlFYm5lR21saE9RMm1vNmJvXCJcclxuICAgICAgfSxcclxuICAgICAgXCJhcnRpc3RzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImV4dGVybmFsX3VybHNcIjoge1xyXG4gICAgICAgICAgICBcInNwb3RpZnlcIjogXCJodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzVXSWQ0bzVqZEdWaHB0TlUwdXFLeHVcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL2FydGlzdHMvNVdJZDRvNWpkR1ZocHROVTB1cUt4dVwiLFxyXG4gICAgICAgICAgXCJpZFwiOiBcIjVXSWQ0bzVqZEdWaHB0TlUwdXFLeHVcIixcclxuICAgICAgICAgIFwibmFtZVwiOiBcIlN0LiBMdWNpYVwiLFxyXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYXJ0aXN0XCIsXHJcbiAgICAgICAgICBcInVyaVwiOiBcInNwb3RpZnk6YXJ0aXN0OjVXSWQ0bzVqZEdWaHB0TlUwdXFLeHVcIlxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgXCJkaXNjX251bWJlclwiOiAxLFxyXG4gICAgICBcImR1cmF0aW9uX21zXCI6IDMwODM2MCxcclxuICAgICAgXCJleHBsaWNpdFwiOiBmYWxzZSxcclxuICAgICAgXCJleHRlcm5hbF9pZHNcIjoge1xyXG4gICAgICAgIFwiaXNyY1wiOiBcIlVTU00xMTMwMzcxMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiZXh0ZXJuYWxfdXJsc1wiOiB7XHJcbiAgICAgICAgXCJzcG90aWZ5XCI6IFwiaHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzBwQkxmUTVKQmpoMTJINkRHWmpNd01cIlxyXG4gICAgICB9LFxyXG4gICAgICBcImhyZWZcIjogXCJodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS90cmFja3MvMHBCTGZRNUpCamgxMkg2REdaak13TVwiLFxyXG4gICAgICBcImlkXCI6IFwiMHBCTGZRNUpCamgxMkg2REdaak13TVwiLFxyXG4gICAgICBcImlzX2xvY2FsXCI6IGZhbHNlLFxyXG4gICAgICBcImlzX3BsYXlhYmxlXCI6IHRydWUsXHJcbiAgICAgIFwibmFtZVwiOiBcIkVsZXZhdGVcIixcclxuICAgICAgXCJwb3B1bGFyaXR5XCI6IDU1LFxyXG4gICAgICBcInByZXZpZXdfdXJsXCI6IFwiaHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvMWJlOGE4NTJjZmJlMDUwYTIyNWI3ZmJjODAzMjE1ZDU3ZTQ4YjM0MT9jaWQ9Nzc0YjI5ZDRmMTM4NDRjNDk1ZjIwNmNhZmRhZDljODZcIixcclxuICAgICAgXCJ0cmFja19udW1iZXJcIjogMyxcclxuICAgICAgXCJ0eXBlXCI6IFwidHJhY2tcIixcclxuICAgICAgXCJ1cmlcIjogXCJzcG90aWZ5OnRyYWNrOjBwQkxmUTVKQmpoMTJINkRHWmpNd01cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJhbGJ1bVwiOiB7XHJcbiAgICAgICAgXCJhbGJ1bV90eXBlXCI6IFwiQUxCVU1cIixcclxuICAgICAgICBcImFydGlzdHNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImV4dGVybmFsX3VybHNcIjoge1xyXG4gICAgICAgICAgICAgIFwic3BvdGlmeVwiOiBcImh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvMnhlOElYZ0NUcHdIRTNlQTloVHM0blwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL2FydGlzdHMvMnhlOElYZ0NUcHdIRTNlQTloVHM0blwiLFxyXG4gICAgICAgICAgICBcImlkXCI6IFwiMnhlOElYZ0NUcHdIRTNlQTloVHM0blwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJCQU5LU1wiLFxyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJhcnRpc3RcIixcclxuICAgICAgICAgICAgXCJ1cmlcIjogXCJzcG90aWZ5OmFydGlzdDoyeGU4SVhnQ1Rwd0hFM2VBOWhUczRuXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiZXh0ZXJuYWxfdXJsc1wiOiB7XHJcbiAgICAgICAgICBcInNwb3RpZnlcIjogXCJodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMWVlWVlnSzIwOHh2a0NFR2tZcVdhaFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9hbGJ1bXMvMWVlWVlnSzIwOHh2a0NFR2tZcVdhaFwiLFxyXG4gICAgICAgIFwiaWRcIjogXCIxZWVZWWdLMjA4eHZrQ0VHa1lxV2FoXCIsXHJcbiAgICAgICAgXCJpbWFnZXNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImhlaWdodFwiOiA2NDAsXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzljOGRkNzQyMjVhMWZiODM4ZmE3ZGNhNlwiLFxyXG4gICAgICAgICAgICBcIndpZHRoXCI6IDY0MFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJoZWlnaHRcIjogMzAwLFxyXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMDFlMDI5YzhkZDc0MjI1YTFmYjgzOGZhN2RjYTZcIixcclxuICAgICAgICAgICAgXCJ3aWR0aFwiOiAzMDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDY0LFxyXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMDQ4NTE5YzhkZDc0MjI1YTFmYjgzOGZhN2RjYTZcIixcclxuICAgICAgICAgICAgXCJ3aWR0aFwiOiA2NFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiR29kZGVzcyAoRGVsdXhlKVwiLFxyXG4gICAgICAgIFwicmVsZWFzZV9kYXRlXCI6IFwiMjAxNC0wMS0wMVwiLFxyXG4gICAgICAgIFwicmVsZWFzZV9kYXRlX3ByZWNpc2lvblwiOiBcImRheVwiLFxyXG4gICAgICAgIFwidG90YWxfdHJhY2tzXCI6IDE4LFxyXG4gICAgICAgIFwidHlwZVwiOiBcImFsYnVtXCIsXHJcbiAgICAgICAgXCJ1cmlcIjogXCJzcG90aWZ5OmFsYnVtOjFlZVlZZ0syMDh4dmtDRUdrWXFXYWhcIlxyXG4gICAgICB9LFxyXG4gICAgICBcImFydGlzdHNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiZXh0ZXJuYWxfdXJsc1wiOiB7XHJcbiAgICAgICAgICAgIFwic3BvdGlmeVwiOiBcImh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvMnhlOElYZ0NUcHdIRTNlQTloVHM0blwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvYXJ0aXN0cy8yeGU4SVhnQ1Rwd0hFM2VBOWhUczRuXCIsXHJcbiAgICAgICAgICBcImlkXCI6IFwiMnhlOElYZ0NUcHdIRTNlQTloVHM0blwiLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwiQkFOS1NcIixcclxuICAgICAgICAgIFwidHlwZVwiOiBcImFydGlzdFwiLFxyXG4gICAgICAgICAgXCJ1cmlcIjogXCJzcG90aWZ5OmFydGlzdDoyeGU4SVhnQ1Rwd0hFM2VBOWhUczRuXCJcclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIFwiZGlzY19udW1iZXJcIjogMSxcclxuICAgICAgXCJkdXJhdGlvbl9tc1wiOiAyNDk3MzksXHJcbiAgICAgIFwiZXhwbGljaXRcIjogZmFsc2UsXHJcbiAgICAgIFwiZXh0ZXJuYWxfaWRzXCI6IHtcclxuICAgICAgICBcImlzcmNcIjogXCJVU1VNNzE0MDUyNTlcIlxyXG4gICAgICB9LFxyXG4gICAgICBcImV4dGVybmFsX3VybHNcIjoge1xyXG4gICAgICAgIFwic3BvdGlmeVwiOiBcImh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay80UHZEMDZQbWJtMnJIRzJKalNsRWxGXCJcclxuICAgICAgfSxcclxuICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvdHJhY2tzLzRQdkQwNlBtYm0yckhHMkpqU2xFbEZcIixcclxuICAgICAgXCJpZFwiOiBcIjRQdkQwNlBtYm0yckhHMkpqU2xFbEZcIixcclxuICAgICAgXCJpc19sb2NhbFwiOiBmYWxzZSxcclxuICAgICAgXCJpc19wbGF5YWJsZVwiOiB0cnVlLFxyXG4gICAgICBcIm5hbWVcIjogXCJCZWdnaW4gRm9yIFRocmVhZFwiLFxyXG4gICAgICBcInBvcHVsYXJpdHlcIjogNTgsXHJcbiAgICAgIFwicHJldmlld191cmxcIjogbnVsbCxcclxuICAgICAgXCJ0cmFja19udW1iZXJcIjogMTAsXHJcbiAgICAgIFwidHlwZVwiOiBcInRyYWNrXCIsXHJcbiAgICAgIFwidXJpXCI6IFwic3BvdGlmeTp0cmFjazo0UHZEMDZQbWJtMnJIRzJKalNsRWxGXCJcclxuICAgIH1cclxuICBdLFxyXG4gIFwic2VlZHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImluaXRpYWxQb29sU2l6ZVwiOiAyNzcsXHJcbiAgICAgIFwiYWZ0ZXJGaWx0ZXJpbmdTaXplXCI6IDE3OSxcclxuICAgICAgXCJhZnRlclJlbGlua2luZ1NpemVcIjogMTc5LFxyXG4gICAgICBcImlkXCI6IFwiNE5IUVVHemh0VExGdmdGNVNaZXNMS1wiLFxyXG4gICAgICBcInR5cGVcIjogXCJBUlRJU1RcIixcclxuICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvYXJ0aXN0cy80TkhRVUd6aHRUTEZ2Z0Y1U1plc0xLXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaW5pdGlhbFBvb2xTaXplXCI6IDM0MyxcclxuICAgICAgXCJhZnRlckZpbHRlcmluZ1NpemVcIjogNDMsXHJcbiAgICAgIFwiYWZ0ZXJSZWxpbmtpbmdTaXplXCI6IDQzLFxyXG4gICAgICBcImlkXCI6IFwiMGM2eElERHB6RTgxbTJxNzk3b3JkQVwiLFxyXG4gICAgICBcInR5cGVcIjogXCJUUkFDS1wiLFxyXG4gICAgICBcImhyZWZcIjogXCJodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS90cmFja3MvMGM2eElERHB6RTgxbTJxNzk3b3JkQVwiXHJcbiAgICB9XHJcbiAgXVxyXG59KTtcclxuICByZXR1cm4oXHJcbiAgICA8PlxyXG4gICAgPExheW91dD5cclxuXHJcbiAgICA8ZGl2IGNzcz17U3BvdGlmeVRpbmRlclBhZ2VDb250YWluZXJTdHlsaW5nfT5cclxuICAgICAgPFNwb3RpZnlUaW5kZXIgcGxheWxpc3Q9e3JlY29tbWVuZGF0aW9ucyAgPyByZWNvbW1lbmRhdGlvbnMudHJhY2tzIDogZHVtbXlEYXRhLnRyYWNrc30gU3dpcGVSaWdodD17c3dpcGVSaWdodH0vPlxyXG4gICAgICA8PlxyXG4gICAgICB7cm91dGVyLnF1ZXJ5LnBsYXlsaXN0SWQgP1xyXG4gICAgICAgIDxQbGF5bGlzdENvbHVtblxyXG4gICAgICAgICAgcGxheWxpc3Q9e1tdfVxyXG4gICAgICAgICAgYWRkZWRTb25ncz17c3dpcGVSaWdodExpc3QgPyBzd2lwZVJpZ2h0TGlzdCA6IGR1bW15RGF0YS50cmFja3N9XHJcbiAgICAgICAgICBzZXRQbGF5bGlzdD17YWRkU3dpcGVSaWdodExpc3R9XHJcbiAgICAgICAgICBoYXNNaW51c0J1dHRvbj17dHJ1ZX1cclxuICAgICAgICAgIHBsYXlsaXN0SWQ9e3JvdXRlci5xdWVyeS5wbGF5bGlzdElkfVxyXG4gICAgICAgIC8+IDpcclxuICAgICAgICA8UGxheWxpc3RWaWV3Q29sdW1uXHJcbiAgICAgICAgICBwbGF5bGlzdD17W119XHJcbiAgICAgICAgICBhZGRlZFNvbmdzPXtzd2lwZVJpZ2h0TGlzdCA/IHN3aXBlUmlnaHRMaXN0IDogZHVtbXlEYXRhLnRyYWNrc31cclxuICAgICAgICAgIHBsYXlsaXN0VGl0bGU9e1wiTmV3IHBsYXlsaXN0XCJ9XHJcbiAgICAgICAgICBzZXRQbGF5bGlzdD17YWRkU3dpcGVSaWdodExpc3R9XHJcbiAgICAgICAgICBoYXNNaW51c0J1dHRvbj17dHJ1ZX1cclxuICAgICAgICAvPlxyXG4gICAgICB9XHJcbiAgICAgIDwvPlxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuICAgIDwvTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuaW1wb3J0IHsgZ2V0T3B0aW9ucyB9IGZyb20gJy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEdlbnJlU2VlZHMgPSAoYWNjZXNzVG9rZW4pID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvcmVjb21tZW5kYXRpb25zL2F2YWlsYWJsZS1nZW5yZS1zZWVkcydcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyhnZXRPcHRpb25zKGFjY2Vzc1Rva2VuLCB1cmwpKVxyXG4gIGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IHR5cGVzLkdFVF9HRU5SRV9TRUVEUyxcclxuICAgIGdlbnJlU2VlZHM6IHJlcy5kYXRhXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFJlY29tbWVuZGF0aW9ucyA9IChhY2Nlc3NUb2tlbiwgcXVlcnkpID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvcmVjb21tZW5kYXRpb25zP2xpbWl0PTEwJnNlZWRfZ2VucmVzPSR7cXVlcnl9YFxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zKGdldE9wdGlvbnMoYWNjZXNzVG9rZW4sIHVybCkpXHJcbiAgZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogdHlwZXMuR0VUX1JFQ09NTUVOREFUSU9OUyxcclxuICAgIHJlY29tbWVuZGF0aW9uczogcmVzLmRhdGFcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U29uZ1JlY29tbWVuZGF0aW9ucyA9IChhY2Nlc3NUb2tlbiwgcXVlcnkpID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvcmVjb21tZW5kYXRpb25zP2xpbWl0PTUwJnNlZWRfdHJhY2tzPSR7cXVlcnl9YFxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zKGdldE9wdGlvbnMoYWNjZXNzVG9rZW4sIHVybCkpXHJcbiAgZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogdHlwZXMuR0VUX1JFQ09NTUVOREFUSU9OUyxcclxuICAgIHJlY29tbWVuZGF0aW9uczogcmVzLmRhdGFcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U29uZ3MgPSAoYWNjZXNzVG9rZW4sIHF1ZXJ5KSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL3NlYXJjaD9xPSR7cXVlcnl9JnR5cGU9dHJhY2smbWFya2V0PVVTJmxpbWl0PTEwYFxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zKGdldE9wdGlvbnMoYWNjZXNzVG9rZW4sIHVybCkpXHJcbiAgY29uc29sZS5sb2coXCI9PVNlYXJoIHJlc3VsdHM6IFwiLCByZXMuZGF0YSk7XHJcbiAgZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogdHlwZXMuR0VUX1NPTkdTLFxyXG4gICAgc2VhcmNoU29uZ3M6IHJlcy5kYXRhXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFJlY2VudHMgPSAoYWNjZXNzVG9rZW4sIHF1ZXJ5KSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL21lL3BsYXllci9yZWNlbnRseS1wbGF5ZWRgXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MoZ2V0T3B0aW9ucyhhY2Nlc3NUb2tlbiwgdXJsKSlcclxuICBjb25zb2xlLmxvZyhcImxvZ1wiLCByZXMuZGF0YSk7XHJcbiAgZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogdHlwZXMuR0VUX1JFQ0VOVFMsXHJcbiAgICByZWNlbnRTb25nczogcmVzLmRhdGFcclxuICB9KVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=