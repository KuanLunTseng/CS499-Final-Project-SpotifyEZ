webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
/* harmony import */ var _styles_breakpoints__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/breakpoints */ "./styles/breakpoints.js");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal-cookie */ "./node_modules/universal-cookie/es6/index.js");




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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      searchString = _useState[0],
      setSearchString = _useState[1]; //Styles for the search bar


  var searchBarStyles = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject(), _styles_colors__WEBPACK_IMPORTED_MODULE_7__["default"].darkGreen, _styles_breakpoints__WEBPACK_IMPORTED_MODULE_8__["default"].lg, _styles_breakpoints__WEBPACK_IMPORTED_MODULE_8__["default"].sm);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: searchBarStyles,
    children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: function onSubmit(e) {
        //TODO: Hook this up to send query string parameters to Search page
        alert("Searched for: " + searchString);
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
        lineNumber: 73,
        columnNumber: 9
      }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaSearch"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, this);
}

_s(SearchBar, "PmxOCRHk0izsRiRmDCHMYiqi/hI=");

_c = SearchBar;

function Navbar() {
  _s2();

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      showHamnav = _useState2[0],
      setShowHamnav = _useState2[1]; //Styles for the entire navbar


  var navbarStyles = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject2(), _styles_colors__WEBPACK_IMPORTED_MODULE_7__["default"].black); //Parent styles for all links on the Navbar

  var navItemStyles = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject3(), _styles_colors__WEBPACK_IMPORTED_MODULE_7__["default"].darkGreen, _styles_colors__WEBPACK_IMPORTED_MODULE_7__["default"].hoverBlack); //Styles for the site title on the Navbar

  var siteTitleStyles = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject4(), navItemStyles, _styles_colors__WEBPACK_IMPORTED_MODULE_7__["default"].darkGreen); //Styles for the logout button

  var logOutButtonStyles = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject5(), navItemStyles);
  var burgerMenuItemStyles = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject6(), _styles_colors__WEBPACK_IMPORTED_MODULE_7__["default"].hoverBlack);
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
      background: "".concat(_styles_colors__WEBPACK_IMPORTED_MODULE_7__["default"].black),
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
  var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_9__["default"]();

  var updateMedia = function updateMedia() {
    setShowHamnav(window.innerWidth <= _styles_breakpoints__WEBPACK_IMPORTED_MODULE_8__["default"].lg);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    window.addEventListener("resize", updateMedia);
    return function () {
      return window.removeEventListener("resize", updateMedia);
    };
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setShowHamnav(window.innerWidth <= _styles_breakpoints__WEBPACK_IMPORTED_MODULE_8__["default"].lg);
  }, []);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: showHamnav ? Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: navbarStyles,
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SearchBar, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 220,
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
          lineNumber: 224,
          columnNumber: 13
        }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "about",
          css: burgerMenuItemStyles,
          children: "About"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 13
        }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "/",
          css: burgerMenuItemStyles,
          children: "Log Out"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 223,
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
        lineNumber: 230,
        columnNumber: 11
      }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        css: navItemStyles,
        href: "/",
        children: "Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 11
      }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        css: navItemStyles,
        href: "about",
        children: "About"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 11
      }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SearchBar, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 233,
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
        lineNumber: 234,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 229,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwidXNlU3RhdGUiLCJzZWFyY2hTdHJpbmciLCJzZXRTZWFyY2hTdHJpbmciLCJzZWFyY2hCYXJTdHlsZXMiLCJjc3MiLCJjb2xvcnMiLCJkYXJrR3JlZW4iLCJicmVha3BvaW50cyIsImxnIiwic20iLCJlIiwiYWxlcnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwiTmF2YmFyIiwic2hvd0hhbW5hdiIsInNldFNob3dIYW1uYXYiLCJuYXZiYXJTdHlsZXMiLCJibGFjayIsIm5hdkl0ZW1TdHlsZXMiLCJob3ZlckJsYWNrIiwic2l0ZVRpdGxlU3R5bGVzIiwibG9nT3V0QnV0dG9uU3R5bGVzIiwiYnVyZ2VyTWVudUl0ZW1TdHlsZXMiLCJidXJnZXJNZW51U3R5bGVzIiwiYm1CdXJnZXJCdXR0b24iLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwicmlnaHQiLCJ0b3AiLCJibUJ1cmdlckJhcnMiLCJiYWNrZ3JvdW5kIiwiYm1Dcm9zc0J1dHRvbiIsImJtQ3Jvc3MiLCJibU1lbnVXcmFwIiwiYm90dG9tIiwiYm1NZW51IiwicGFkZGluZyIsImZvbnRTaXplIiwiYm1Nb3JwaFNoYXBlIiwiZmlsbCIsImJtSXRlbUxpc3QiLCJjb2xvciIsIm92ZXJmbG93IiwiYm1JdGVtIiwiZGlzcGxheSIsInRleHREZWNvcmF0aW9uIiwidGV4dEFsaWduIiwiYm1PdmVybGF5IiwibGVmdCIsImNvb2tpZXMiLCJDb29raWVzIiwidXBkYXRlTWVkaWEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LEVBQUVyQyxrQkFIUjtBQUc0QixZQUFJLEVBQUMsR0FIakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFaSixtQkFERjtBQTBCRDs7SUE3SlFSLE07O01BQUFBLE07QUErSk1BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIwYTIyYTc5NmU0Mzk2NGU3N2IwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgeyBGYVNlYXJjaCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgc2xpZGUgYXMgTWVudSB9IGZyb20gJ3JlYWN0LWJ1cmdlci1tZW51JztcclxuXHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vc3R5bGVzL2NvbG9ycyc7XHJcbmltcG9ydCBicmVha3BvaW50cyBmcm9tICcuLi9zdHlsZXMvYnJlYWtwb2ludHMnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJ1xyXG5cclxuLy9TZWFyY2ggYmFyIGZvciB0aGUgTmF2YmFyXHJcbmZ1bmN0aW9uIFNlYXJjaEJhcigpIHtcclxuICBjb25zdCBbc2VhcmNoU3RyaW5nLCBzZXRTZWFyY2hTdHJpbmddID0gdXNlU3RhdGUoJycpO1xyXG4gIFxyXG4gIC8vU3R5bGVzIGZvciB0aGUgc2VhcmNoIGJhclxyXG4gIGNvbnN0IHNlYXJjaEJhclN0eWxlcyA9IGNzc2BcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgZGFya2dyYXk7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMTVweDtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGNvbG9yOiBkYXJrZ3JheTtcclxuXHJcbiAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vU3R5bGVzIGZvciB0aGUgc2VhcmNoIHRleHQgYm94XHJcbiAgICAgICAgZm9ybSBpbnB1dCB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDkwcHgpOyAvL3N1YnRyYWN0IHRoZSB3aWR0aCBvZiB0aGUgYnV0dG9uXHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9TdHlsZXMgZm9yIHRoZSBzZWFyY2ggaWNvbiBidXR0b25cclxuICAgICAgICBmb3JtIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5kYXJrR3JlZW59O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICR7YnJlYWtwb2ludHMubGd9cHgpIGFuZCAobWluLXdpZHRoOiAke2JyZWFrcG9pbnRzLnNtfXB4KSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3OCU7XHJcbiAgICAgICAgfVxyXG4gICAgYDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY3NzPXtzZWFyY2hCYXJTdHlsZXN9ID5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiB7XHJcbiAgICAgICAgLy9UT0RPOiBIb29rIHRoaXMgdXAgdG8gc2VuZCBxdWVyeSBzdHJpbmcgcGFyYW1ldGVycyB0byBTZWFyY2ggcGFnZVxyXG4gICAgICAgIGFsZXJ0KFwiU2VhcmNoZWQgZm9yOiBcIiArIHNlYXJjaFN0cmluZyk7XHJcbiAgICAgICAgc2V0U2VhcmNoU3RyaW5nKCcnKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH19PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaFN0cmluZ31cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZWFyY2ggZm9yIGEgc29uZyBvciBhcnRpc3QuLi4nXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFN0cmluZyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgIDxGYVNlYXJjaCAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIGNvbnN0IFtzaG93SGFtbmF2LCBzZXRTaG93SGFtbmF2XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy9TdHlsZXMgZm9yIHRoZSBlbnRpcmUgbmF2YmFyXHJcbiAgY29uc3QgbmF2YmFyU3R5bGVzID0gY3NzYFxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuYmxhY2t9O1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBncmV5O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGA7XHJcblxyXG4gIC8vUGFyZW50IHN0eWxlcyBmb3IgYWxsIGxpbmtzIG9uIHRoZSBOYXZiYXJcclxuICBjb25zdCBuYXZJdGVtU3R5bGVzID0gY3NzYFxyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjVweCk7IC8vc3VidHJhY3QgdGhlIHBhZGRpbmc7XHJcbiAgICAgICAgd2lkdGg6IDglO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiBmbG9yYWx3aGl0ZTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gICAgICAgIDpob3ZlciB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICAke2NvbG9ycy5kYXJrR3JlZW59O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5ob3ZlckJsYWNrfTtcclxuICAgICAgICB9XHJcbiAgICBgO1xyXG5cclxuICAvL1N0eWxlcyBmb3IgdGhlIHNpdGUgdGl0bGUgb24gdGhlIE5hdmJhclxyXG4gIGNvbnN0IHNpdGVUaXRsZVN0eWxlcyA9IGNzc2BcclxuICAgICAgICAke25hdkl0ZW1TdHlsZXN9XHJcblxyXG4gICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMHB4KTsgIC8vc3VidHJhY3QgdGhlIHBhZGRpbmc7XHJcblxyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICBjb2xvcjogJHtjb2xvcnMuZGFya0dyZWVufTtcclxuICAgIGA7XHJcblxyXG4gIC8vU3R5bGVzIGZvciB0aGUgbG9nb3V0IGJ1dHRvblxyXG4gIGNvbnN0IGxvZ091dEJ1dHRvblN0eWxlcyA9IGNzc2BcclxuICAgICAgICAke25hdkl0ZW1TdHlsZXN9O1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4IDEwcHggMCAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7IC8vc3VidHJhY3QgdGhlIHBhZGRpbmdcclxuICAgIGA7XHJcblxyXG4gIGNvbnN0IGJ1cmdlck1lbnVJdGVtU3R5bGVzID0gY3NzYFxyXG4gICAgICAgIDpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmhvdmVyQmxhY2t9O1xyXG4gICAgICAgIH1cclxuICAgIGA7XHJcbiAgdmFyIGJ1cmdlck1lbnVTdHlsZXMgPSB7XHJcbiAgICBibUJ1cmdlckJ1dHRvbjoge1xyXG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgd2lkdGg6ICczNnB4JyxcclxuICAgICAgaGVpZ2h0OiAnMzBweCcsXHJcbiAgICAgIHJpZ2h0OiAnMzZweCcsXHJcbiAgICAgIHRvcDogJzI1cHgnXHJcbiAgICB9LFxyXG4gICAgYm1CdXJnZXJCYXJzOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICB9LFxyXG4gICAgYm1Dcm9zc0J1dHRvbjoge1xyXG4gICAgICBoZWlnaHQ6ICc0MHB4JyxcclxuICAgICAgd2lkdGg6ICc0MHB4JyxcclxuICAgIH0sXHJcbiAgICBibUNyb3NzOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICcjYmRjM2M3JyxcclxuICAgICAgaGVpZ2h0OiAnMzBweCcsXHJcbiAgICAgIHJpZ2h0OiAnMTBweCdcclxuICAgIH0sXHJcbiAgICBibU1lbnVXcmFwOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGJvdHRvbTogMFxyXG4gICAgfSxcclxuICAgIGJtTWVudToge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBgJHtjb2xvcnMuYmxhY2t9YCxcclxuICAgICAgcGFkZGluZzogJzgwcHggMCcsXHJcbiAgICAgIGZvbnRTaXplOiAnMS4xNWVtJ1xyXG4gICAgfSxcclxuICAgIGJtTW9ycGhTaGFwZToge1xyXG4gICAgICBmaWxsOiAnIzM3M2E0NydcclxuICAgIH0sXHJcbiAgICBibUl0ZW1MaXN0OiB7XHJcbiAgICAgIGNvbG9yOiAnI2I4YjdhZCcsXHJcbiAgICAgIG92ZXJmbG93OiAnbm9uZScsXHJcbiAgICAgIGhlaWdodDogJzIwJSdcclxuICAgIH0sXHJcbiAgICBibUl0ZW06IHtcclxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBwYWRkaW5nOiAnMTBweCAwcHgnLFxyXG4gICAgICBmb250U2l6ZTogJzI1cHgnLFxyXG4gICAgfSxcclxuICAgIGJtT3ZlcmxheToge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjMpJyxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBsZWZ0OiAwXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llc1xyXG4gIGNvbnN0IHVwZGF0ZU1lZGlhID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd0hhbW5hdih3aW5kb3cuaW5uZXJXaWR0aCA8PSBicmVha3BvaW50cy5sZyk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZU1lZGlhKTtcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGVNZWRpYSk7XHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRTaG93SGFtbmF2KHdpbmRvdy5pbm5lcldpZHRoIDw9IGJyZWFrcG9pbnRzLmxnKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7c2hvd0hhbW5hdiA/XHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY3NzPXtuYXZiYXJTdHlsZXN9PlxyXG4gICAgICAgICAgICA8U2VhcmNoQmFyIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxNZW51IHJpZ2h0IHN0eWxlcz17YnVyZ2VyTWVudVN0eWxlc30+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY3NzPXtidXJnZXJNZW51SXRlbVN0eWxlc30+SG9tZTwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImFib3V0XCIgY3NzPXtidXJnZXJNZW51SXRlbVN0eWxlc30+QWJvdXQ8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY3NzPXtidXJnZXJNZW51SXRlbVN0eWxlc30+TG9nIE91dDwvYT5cclxuICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICA8Lz4gOlxyXG4gICAgICAgIDxkaXYgY3NzPXtuYXZiYXJTdHlsZXN9PlxyXG4gICAgICAgICAgPGEgY3NzPXtzaXRlVGl0bGVTdHlsZXN9IGhyZWY9XCIvXCI+U3BvdGlmeUVaPC9hPlxyXG4gICAgICAgICAgPGEgY3NzPXtuYXZJdGVtU3R5bGVzfSBocmVmPVwiL1wiPkhvbWU8L2E+XHJcbiAgICAgICAgICA8YSBjc3M9e25hdkl0ZW1TdHlsZXN9IGhyZWY9XCJhYm91dFwiPkFib3V0PC9hPlxyXG4gICAgICAgICAgPFNlYXJjaEJhciAvPlxyXG4gICAgICAgICAgPGEgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBjb29raWVzLnJlbW92ZSgnQUNFU1NfVE9LRU4nKVxyXG4gICAgICAgICAgICBjb29raWVzLnJlbW92ZSgnSVNfQVVUSEVEJylcclxuICAgICAgICAgIH19IGNzcz17bG9nT3V0QnV0dG9uU3R5bGVzfSBocmVmPVwiL1wiPkxvZyBPdXQ8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==