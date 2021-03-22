webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Authorization.js":
/*!*************************************!*\
  !*** ./components/Authorization.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_authAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/authAction */ "./store/actions/authAction.js");
/* harmony import */ var _auth_Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/Auth */ "./auth/Auth.js");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal-cookie */ "./node_modules/universal-cookie/es6/index.js");


var _jsxFileName = "C:\\Users\\zengg\\Desktop\\CS499\\final-project-team-10-SpotifyEZ\\components\\Authorization.js",
    _this = undefined,
    _s = $RefreshSig$();







var Authorization = function Authorization() {
  _s();

  var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_5__["default"]();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.auth;
  }),
      accessToken = _useSelector.accessToken,
      isAuthed = _useSelector.isAuthed; //console.log('Access Token === ', accessToken)


  console.log('isAuthed === ', isAuthed);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var params = Object(_auth_Auth__WEBPACK_IMPORTED_MODULE_4__["getHashParams"])();
    var accessToken = params.access_token;
    var expiresIn = params.expires_in;
    console.log('COOOOOOOOKIE', document.cookie);

    if (accessToken) {
      document.cookie = accessToken; // console.log('COOOOOOOOKIE', document.cookie)

      cookies.set('ACESS_TOKEN', accessToken, {
        path: '/'
      });
      cookies.set('IS_AUTHED', true, {
        path: '/'
      }); // console.log('COOOOOOOOOOKIE', cookies.get('ACESS_TOKEN'))
      // console.log('AUUUUUUUUUUTH', cookies.get('IS_AUTHED'))

      if (document.cookie !== undefined) {
        dispatch(Object(_store_actions_authAction__WEBPACK_IMPORTED_MODULE_3__["setAcessToken"])(document.cookie));
      } else {
        dispatch(Object(_store_actions_authAction__WEBPACK_IMPORTED_MODULE_3__["setAcessToken"])(accessToken));
      } //dispatch(setExpiresIn(expiresIn))


      dispatch(Object(_store_actions_authAction__WEBPACK_IMPORTED_MODULE_3__["setIsAuthed"])(true));
    }

    Object(_auth_Auth__WEBPACK_IMPORTED_MODULE_4__["removeHashParamsFromUrl"])();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: function onClick() {
        window.location = Object(_auth_Auth__WEBPACK_IMPORTED_MODULE_4__["getAuthorizeHref"])();
      },
      children: "Authentication"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this), isAuthed === true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
      children: ["Acess Token :", accessToken]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, _this);
};

_s(Authorization, "Xlq9+J9HQaZD+x14ybHkljNcUDg=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = Authorization;
/* harmony default export */ __webpack_exports__["default"] = (Authorization);

var _c;

$RefreshReg$(_c, "Authorization");

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

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (cookies.get('IS_AUTHED') === 'true') {
      dispatch(Object(_store_actions_authAction__WEBPACK_IMPORTED_MODULE_11__["setAcessToken"])(cookies.get('ACESS_TOKEN')));
      dispatch(Object(_store_actions_authAction__WEBPACK_IMPORTED_MODULE_11__["setIsAuthed"])(true));
    }
  }, []);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Authorization__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), isAuthed === true && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TwoColumnLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UserProfile__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 15
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_RecentlyPlayedSongsView__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }, _this)
    }, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, _this);
};

_s(Home, "Q42eKdwsz8Jb3qro5hh/l53Q3ao=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRob3JpemF0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBdXRob3JpemF0aW9uIiwiY29va2llcyIsIkNvb2tpZXMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImF1dGgiLCJhY2Nlc3NUb2tlbiIsImlzQXV0aGVkIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsInBhcmFtcyIsImdldEhhc2hQYXJhbXMiLCJhY2Nlc3NfdG9rZW4iLCJleHBpcmVzSW4iLCJleHBpcmVzX2luIiwiZG9jdW1lbnQiLCJjb29raWUiLCJzZXQiLCJwYXRoIiwidW5kZWZpbmVkIiwic2V0QWNlc3NUb2tlbiIsInNldElzQXV0aGVkIiwicmVtb3ZlSGFzaFBhcmFtc0Zyb21VcmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImdldEF1dGhvcml6ZUhyZWYiLCJIb21lIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFDMUIsTUFBTUMsT0FBTyxHQUFHLElBQUlDLHdEQUFKLEVBQWhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFGMEIscUJBR1FDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsSUFBVjtBQUFBLEdBQU4sQ0FIbkI7QUFBQSxNQUdsQkMsV0FIa0IsZ0JBR2xCQSxXQUhrQjtBQUFBLE1BR0xDLFFBSEssZ0JBR0xBLFFBSEssRUFJMUI7OztBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCRixRQUE3QjtBQUVBRyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxNQUFNLEdBQUdDLGdFQUFh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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixxQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWVELENBNUJEOztHQUFNb0IsSTtVQUVhekIsdUQsRUFFSUMsdUQ7OztLQUpqQndCLEk7QUE4QlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY0MDk4ZGQxZGMyNmI1MzY5ZDRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHNldEFjZXNzVG9rZW4sIHNldEV4cGlyZXNJbiwgc2V0SXNBdXRoZWQgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2F1dGhBY3Rpb24nXHJcbmltcG9ydCB7IGdldEF1dGhvcml6ZUhyZWYsIGdldEhhc2hQYXJhbXMsIHJlbW92ZUhhc2hQYXJhbXNGcm9tVXJsIH0gZnJvbSAnLi4vYXV0aC9BdXRoJ1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJ1xyXG5cclxuY29uc3QgQXV0aG9yaXphdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXNcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCB7IGFjY2Vzc1Rva2VuLCBpc0F1dGhlZCB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYXV0aClcclxuICAvL2NvbnNvbGUubG9nKCdBY2Nlc3MgVG9rZW4gPT09ICcsIGFjY2Vzc1Rva2VuKVxyXG4gIGNvbnNvbGUubG9nKCdpc0F1dGhlZCA9PT0gJywgaXNBdXRoZWQpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBwYXJhbXMgPSBnZXRIYXNoUGFyYW1zKClcclxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gcGFyYW1zLmFjY2Vzc190b2tlblxyXG4gICAgY29uc3QgZXhwaXJlc0luID0gcGFyYW1zLmV4cGlyZXNfaW5cclxuXHJcbiAgICBjb25zb2xlLmxvZygnQ09PT09PT09PS0lFJywgZG9jdW1lbnQuY29va2llKVxyXG5cclxuICAgIGlmIChhY2Nlc3NUb2tlbikge1xyXG5cclxuICAgICAgZG9jdW1lbnQuY29va2llID0gYWNjZXNzVG9rZW5cclxuICAgICAgLy8gY29uc29sZS5sb2coJ0NPT09PT09PT0tJRScsIGRvY3VtZW50LmNvb2tpZSlcclxuXHJcbiAgICAgIGNvb2tpZXMuc2V0KCdBQ0VTU19UT0tFTicsIGFjY2Vzc1Rva2VuLCB7IHBhdGg6ICcvJyB9KVxyXG4gICAgICBjb29raWVzLnNldCgnSVNfQVVUSEVEJywgdHJ1ZSwgeyBwYXRoOiAnLycgfSlcclxuICAgICAgLy8gY29uc29sZS5sb2coJ0NPT09PT09PT09PS0lFJywgY29va2llcy5nZXQoJ0FDRVNTX1RPS0VOJykpXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdBVVVVVVVVVVVVVVRIJywgY29va2llcy5nZXQoJ0lTX0FVVEhFRCcpKVxyXG4gICAgICBpZiAoZG9jdW1lbnQuY29va2llICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBkaXNwYXRjaChzZXRBY2Vzc1Rva2VuKGRvY3VtZW50LmNvb2tpZSkpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0QWNlc3NUb2tlbihhY2Nlc3NUb2tlbikpXHJcbiAgICAgIH1cclxuICAgICAgLy9kaXNwYXRjaChzZXRFeHBpcmVzSW4oZXhwaXJlc0luKSlcclxuICAgICAgZGlzcGF0Y2goc2V0SXNBdXRoZWQodHJ1ZSkpXHJcbiAgICB9XHJcbiAgICByZW1vdmVIYXNoUGFyYW1zRnJvbVVybCgpXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7LyogeyBpc0F1dGhlZCA9PT0gZmFsc2UgJiYgKi99XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBnZXRBdXRob3JpemVIcmVmKClcclxuICAgICAgICB9fT5cclxuICAgICAgICBBdXRoZW50aWNhdGlvblxyXG4gICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIHsgaXNBdXRoZWQgPT09IHRydWUgJiZcclxuICAgICAgICA8aDY+QWNlc3MgVG9rZW4gOnthY2Nlc3NUb2tlbn08L2g2PlxyXG4gICAgICB9XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRob3JpemF0aW9uXHJcbiIsIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBBdXRob3JpemF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvQXV0aG9yaXphdGlvbidcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlclByb2ZpbGUnXHJcbmltcG9ydCBSZWNvbW1lbmRhdGlvbnMgZnJvbSAnLi4vY29tcG9uZW50cy9SZWNvbW1lbmRhdGlvbnMnXHJcbmltcG9ydCBVc2VyQ3VycmVudFBsYXlsaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvVXNlckN1cnJlbnRQbGF5bGlzdCdcclxuaW1wb3J0IFJlY2VudGx5UGxheWVkU29uZ3NWaWV3IGZyb20gJy4uL2NvbXBvbmVudHMvUmVjZW50bHlQbGF5ZWRTb25nc1ZpZXcnXHJcblxyXG5pbXBvcnQgVHdvQ29sdW1uTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvVHdvQ29sdW1uTGF5b3V0J1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJ1xyXG5pbXBvcnQgeyBzZXRBY2Vzc1Rva2VuLCBzZXRFeHBpcmVzSW4sIHNldElzQXV0aGVkIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9hdXRoQWN0aW9uJ1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzXHJcbiAgY29uc3QgeyBpc0F1dGhlZCB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYXV0aClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjb29raWVzLmdldCgnSVNfQVVUSEVEJykgPT09ICd0cnVlJykge1xyXG4gICAgICBkaXNwYXRjaChzZXRBY2Vzc1Rva2VuKGNvb2tpZXMuZ2V0KCdBQ0VTU19UT0tFTicpKSlcclxuICAgICAgZGlzcGF0Y2goc2V0SXNBdXRoZWQodHJ1ZSkpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8QXV0aG9yaXphdGlvbiAvPlxyXG4gICAgICB7IGlzQXV0aGVkID09PSB0cnVlICYmXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxUd29Db2x1bW5MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgPFVzZXJQcm9maWxlIC8+XHJcbiAgICAgICAgICAgICAgPFJlY2VudGx5UGxheWVkU29uZ3NWaWV3IC8+XHJcbiAgICAgICAgICAgIDwvVHdvQ29sdW1uTGF5b3V0PlxyXG4gICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==