webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Authorization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Authorization */ "./components/Authorization.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UserProfile */ "./components/UserProfile.js");
/* harmony import */ var _components_Recommendations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Recommendations */ "./components/Recommendations.js");
/* harmony import */ var _components_UserCurrentPlaylist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UserCurrentPlaylist */ "./components/UserCurrentPlaylist.js");
/* harmony import */ var _components_RecentlyPlayedSongsView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/RecentlyPlayedSongsView */ "./components/RecentlyPlayedSongsView.js");
/* harmony import */ var _components_TwoColumnLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/TwoColumnLayout */ "./components/TwoColumnLayout.js");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! universal-cookie */ "./node_modules/universal-cookie/es6/index.js");



var _jsxFileName = "C:\\Users\\zengg\\Desktop\\CS499\\final-project-team-10-SpotifyEZ\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

/** @jsxImportSource @emotion/react */












var Home = function Home() {
  _s();

  var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_10__["default"]();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.auth;
  }),
      isAuthed = _useSelector.isAuthed;

  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Authorization__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), cookies.get('IS_AUTHED') === true && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TwoColumnLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UserProfile__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 15
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_RecentlyPlayedSongsView__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, _this)
    }, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, _this);
};

_s(Home, "kIPs5/h6oIPe6zuAlItSDn5EGow=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImNvb2tpZXMiLCJDb29raWVzIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImF1dGgiLCJpc0F1dGhlZCIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUdBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFFakIsTUFBTUMsT0FBTyxHQUFHLElBQUlDLHlEQUFKLEVBQWhCOztBQUZpQixxQkFHSUMsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFWO0FBQUEsR0FBTixDQUhmO0FBQUEsTUFHVEMsUUFIUyxnQkFHVEEsUUFIUzs7QUFJakIsU0FDRTtBQUFBLGVBQ0UsOEVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUlMLE9BQU8sQ0FBQ00sR0FBUixDQUFZLFdBQVosTUFBNkIsSUFBN0IsSUFDQTtBQUFBLGdCQUNFLDhFQUFDLDBEQUFEO0FBQUEsa0JBQ0UsOEVBQUMsbUVBQUQ7QUFBQSxxQkFDRSw4RUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUUsOEVBQUMsMkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYscUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFlRCxDQW5CRDs7R0FBTVAsSTtVQUdpQkcsdUQ7OztLQUhqQkgsSTtBQXFCU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDYwNTdkNjJjNDE1N2YxYzJiMzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBBdXRob3JpemF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvQXV0aG9yaXphdGlvbidcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlclByb2ZpbGUnXHJcbmltcG9ydCBSZWNvbW1lbmRhdGlvbnMgZnJvbSAnLi4vY29tcG9uZW50cy9SZWNvbW1lbmRhdGlvbnMnXHJcbmltcG9ydCBVc2VyQ3VycmVudFBsYXlsaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvVXNlckN1cnJlbnRQbGF5bGlzdCdcclxuaW1wb3J0IFJlY2VudGx5UGxheWVkU29uZ3NWaWV3IGZyb20gJy4uL2NvbXBvbmVudHMvUmVjZW50bHlQbGF5ZWRTb25nc1ZpZXcnXHJcblxyXG5pbXBvcnQgVHdvQ29sdW1uTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvVHdvQ29sdW1uTGF5b3V0J1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJ1xyXG5cclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llc1xyXG4gIGNvbnN0IHsgaXNBdXRoZWQgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmF1dGgpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxBdXRob3JpemF0aW9uIC8+XHJcbiAgICAgIHsgY29va2llcy5nZXQoJ0lTX0FVVEhFRCcpID09PSB0cnVlICYmXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxUd29Db2x1bW5MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgPFVzZXJQcm9maWxlIC8+XHJcbiAgICAgICAgICAgICAgPFJlY2VudGx5UGxheWVkU29uZ3NWaWV3IC8+XHJcbiAgICAgICAgICAgIDwvVHdvQ29sdW1uTGF5b3V0PlxyXG4gICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==