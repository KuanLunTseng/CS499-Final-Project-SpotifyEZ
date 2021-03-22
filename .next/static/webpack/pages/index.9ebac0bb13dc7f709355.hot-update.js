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
/* harmony import */ var _store_actions_authAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/actions/authAction */ "./store/actions/authAction.js");



var _jsxFileName = "C:\\Users\\zengg\\Desktop\\CS499\\final-project-team-10-SpotifyEZ\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

/** @jsxImportSource @emotion/react */













var Home = function Home() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_10__["default"]();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.auth;
  }),
      isAuthed = _useSelector.isAuthed;

  if (cookies.get('IS_AUTHED') === 'true') {
    dispatch(Object(_store_actions_authAction__WEBPACK_IMPORTED_MODULE_11__["setAcessToken"])(cookies.get('ACESS_TOKEN')));
    dispatch(Object(_store_actions_authAction__WEBPACK_IMPORTED_MODULE_11__["setIsAuthed"])(true));
  }

  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Authorization__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), isAuthed === true && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TwoColumnLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UserProfile__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 15
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_RecentlyPlayedSongsView__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, _this)
    }, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, _this);
};

_s(Home, "LapEI5PNWZZKsHQzfnQN1Lwyot0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJjb29raWVzIiwiQ29va2llcyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJhdXRoIiwiaXNBdXRoZWQiLCJnZXQiLCJzZXRBY2Vzc1Rva2VuIiwic2V0SXNBdXRoZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBRWpCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxPQUFPLEdBQUcsSUFBSUMseURBQUosRUFBaEI7O0FBSGlCLHFCQUlJQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLElBQVY7QUFBQSxHQUFOLENBSmY7QUFBQSxNQUlUQyxRQUpTLGdCQUlUQSxRQUpTOztBQU1qQixNQUFJTCxPQUFPLENBQUNNLEdBQVIsQ0FBWSxXQUFaLE1BQTZCLE1BQWpDLEVBQXlDO0FBQ3ZDUixZQUFRLENBQUNTLGdGQUFhLENBQUNQLE9BQU8sQ0FBQ00sR0FBUixDQUFZLGFBQVosQ0FBRCxDQUFkLENBQVI7QUFDQVIsWUFBUSxDQUFDVSw4RUFBVyxDQUFDLElBQUQsQ0FBWixDQUFSO0FBQ0Q7O0FBRUQsU0FDRTtBQUFBLGVBQ0UsOEVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUlILFFBQVEsS0FBSyxJQUFiLElBQ0E7QUFBQSxnQkFDRSw4RUFBQywwREFBRDtBQUFBLGtCQUNFLDhFQUFDLG1FQUFEO0FBQUEscUJBQ0UsOEVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFLDhFQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHFCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZUQsQ0ExQkQ7O0dBQU1SLEk7VUFFYUUsdUQsRUFFSUcsdUQ7OztLQUpqQkwsSTtBQTRCU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWViYWMwYmIxM2RjN2Y3MDkzNTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBBdXRob3JpemF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvQXV0aG9yaXphdGlvbidcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlclByb2ZpbGUnXHJcbmltcG9ydCBSZWNvbW1lbmRhdGlvbnMgZnJvbSAnLi4vY29tcG9uZW50cy9SZWNvbW1lbmRhdGlvbnMnXHJcbmltcG9ydCBVc2VyQ3VycmVudFBsYXlsaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvVXNlckN1cnJlbnRQbGF5bGlzdCdcclxuaW1wb3J0IFJlY2VudGx5UGxheWVkU29uZ3NWaWV3IGZyb20gJy4uL2NvbXBvbmVudHMvUmVjZW50bHlQbGF5ZWRTb25nc1ZpZXcnXHJcblxyXG5pbXBvcnQgVHdvQ29sdW1uTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvVHdvQ29sdW1uTGF5b3V0J1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJ1xyXG5pbXBvcnQgeyBzZXRBY2Vzc1Rva2VuLCBzZXRFeHBpcmVzSW4sIHNldElzQXV0aGVkIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9hdXRoQWN0aW9uJ1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzXHJcbiAgY29uc3QgeyBpc0F1dGhlZCB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYXV0aClcclxuXHJcbiAgaWYgKGNvb2tpZXMuZ2V0KCdJU19BVVRIRUQnKSA9PT0gJ3RydWUnKSB7XHJcbiAgICBkaXNwYXRjaChzZXRBY2Vzc1Rva2VuKGNvb2tpZXMuZ2V0KCdBQ0VTU19UT0tFTicpKSlcclxuICAgIGRpc3BhdGNoKHNldElzQXV0aGVkKHRydWUpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxBdXRob3JpemF0aW9uIC8+XHJcbiAgICAgIHsgaXNBdXRoZWQgPT09IHRydWUgJiZcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPFR3b0NvbHVtbkxheW91dD5cclxuICAgICAgICAgICAgICA8VXNlclByb2ZpbGUgLz5cclxuICAgICAgICAgICAgICA8UmVjZW50bHlQbGF5ZWRTb25nc1ZpZXcgLz5cclxuICAgICAgICAgICAgPC9Ud29Db2x1bW5MYXlvdXQ+XHJcbiAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8Lz5cclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9