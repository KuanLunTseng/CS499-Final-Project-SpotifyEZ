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
      document.cookie = accessToken;
      console.log('COOOOOOOOKIE', document.cookie);
      cookies.set('ACESS_TOKEN', accessToken, {
        path: '/'
      });
      console.log('COOOOOOOOOOKIE, get', cookies.get('ACESS_TOKEN'));

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
      lineNumber: 45,
      columnNumber: 7
    }, _this), "// }", isAuthed === true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
      children: ["Acess Token :", accessToken]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRob3JpemF0aW9uLmpzIl0sIm5hbWVzIjpbIkF1dGhvcml6YXRpb24iLCJjb29raWVzIiwiQ29va2llcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYXV0aCIsImFjY2Vzc1Rva2VuIiwiaXNBdXRoZWQiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwicGFyYW1zIiwiZ2V0SGFzaFBhcmFtcyIsImFjY2Vzc190b2tlbiIsImV4cGlyZXNJbiIsImV4cGlyZXNfaW4iLCJkb2N1bWVudCIsImNvb2tpZSIsInNldCIsInBhdGgiLCJnZXQiLCJ1bmRlZmluZWQiLCJzZXRBY2Vzc1Rva2VuIiwic2V0SXNBdXRoZWQiLCJyZW1vdmVIYXNoUGFyYW1zRnJvbVVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiZ2V0QXV0aG9yaXplSHJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQzFCLE1BQU1DLE9BQU8sR0FBRyxJQUFJQyx3REFBSixFQUFoQjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRjBCLHFCQUdRQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLElBQVY7QUFBQSxHQUFOLENBSG5CO0FBQUEsTUFHbEJDLFdBSGtCLGdCQUdsQkEsV0FIa0I7QUFBQSxNQUdMQyxRQUhLLGdCQUdMQSxRQUhLLEVBSTFCOzs7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QkYsUUFBN0I7QUFJQUcseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsTUFBTSxHQUFHQyxnRUFBYSxFQUE1QjtBQUNBLFFBQU1OLFdBQVcsR0FBR0ssTUFBTSxDQUFDRSxZQUEzQjtBQUNBLFFBQU1DLFNBQVMsR0FBR0gsTUFBTSxDQUFDSSxVQUF6QjtBQUVBUCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCTyxRQUFRLENBQUNDLE1BQXJDOztBQUVBLFFBQUlYLFdBQUosRUFBaUI7QUFFZlUsY0FBUSxDQUFDQyxNQUFULEdBQWtCWCxXQUFsQjtBQUNBRSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCTyxRQUFRLENBQUNDLE1BQXJDO0FBRUFsQixhQUFPLENBQUNtQixHQUFSLENBQVksYUFBWixFQUEyQlosV0FBM0IsRUFBd0M7QUFBRWEsWUFBSSxFQUFFO0FBQVIsT0FBeEM7QUFDQVgsYUFBTyxDQUFDQyxHQUFSLENBQVkscUJBQVosRUFBbUNWLE9BQU8sQ0FBQ3FCLEdBQVIsQ0FBWSxhQUFaLENBQW5DOztBQUVBLFVBQUlKLFFBQVEsQ0FBQ0MsTUFBVCxLQUFvQkksU0FBeEIsRUFBbUM7QUFDakNwQixnQkFBUSxDQUFDcUIsK0VBQWEsQ0FBQ04sUUFBUSxDQUFDQyxNQUFWLENBQWQsQ0FBUjtBQUNELE9BRkQsTUFFTztBQUNMaEIsZ0JBQVEsQ0FBQ3FCLCtFQUFhLENBQUNoQixXQUFELENBQWQsQ0FBUjtBQUNELE9BWmMsQ0FhZjs7O0FBQ0FMLGNBQVEsQ0FBQ3NCLDZFQUFXLENBQUMsSUFBRCxDQUFaLENBQVI7QUFDRDs7QUFDREMsOEVBQXVCO0FBQ3hCLEdBeEJRLEVBd0JOLEVBeEJNLENBQVQ7QUEwQkEsc0JBQ0U7QUFBQSw0QkFFRTtBQUNFLGFBQU8sRUFBRSxtQkFBTTtBQUNiQyxjQUFNLENBQUNDLFFBQVAsR0FBa0JDLG1FQUFnQixFQUFsQztBQUNELE9BSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixVQVNJcEIsUUFBUSxLQUFLLElBQWIsaUJBQ0E7QUFBQSxrQ0FBa0JELFdBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0JELENBbkREOztHQUFNUixhO1VBRWFJLHVELEVBQ2lCQyx1RDs7O0tBSDlCTCxhO0FBcURTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xM2Q2MTUwY2ExYmMwN2ExMjYyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBzZXRBY2Vzc1Rva2VuLCBzZXRFeHBpcmVzSW4sIHNldElzQXV0aGVkIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9hdXRoQWN0aW9uJ1xyXG5pbXBvcnQgeyBnZXRBdXRob3JpemVIcmVmLCBnZXRIYXNoUGFyYW1zLCByZW1vdmVIYXNoUGFyYW1zRnJvbVVybCB9IGZyb20gJy4uL2F1dGgvQXV0aCdcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAndW5pdmVyc2FsLWNvb2tpZSdcclxuXHJcbmNvbnN0IEF1dGhvcml6YXRpb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgeyBhY2Nlc3NUb2tlbiwgaXNBdXRoZWQgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmF1dGgpXHJcbiAgLy9jb25zb2xlLmxvZygnQWNjZXNzIFRva2VuID09PSAnLCBhY2Nlc3NUb2tlbilcclxuICBjb25zb2xlLmxvZygnaXNBdXRoZWQgPT09ICcsIGlzQXV0aGVkKVxyXG4gIFxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IGdldEhhc2hQYXJhbXMoKVxyXG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBwYXJhbXMuYWNjZXNzX3Rva2VuXHJcbiAgICBjb25zdCBleHBpcmVzSW4gPSBwYXJhbXMuZXhwaXJlc19pblxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdDT09PT09PT09LSUUnLCBkb2N1bWVudC5jb29raWUpXHJcblxyXG4gICAgaWYgKGFjY2Vzc1Rva2VuKSB7XHJcblxyXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBhY2Nlc3NUb2tlblxyXG4gICAgICBjb25zb2xlLmxvZygnQ09PT09PT09PS0lFJywgZG9jdW1lbnQuY29va2llKVxyXG5cclxuICAgICAgY29va2llcy5zZXQoJ0FDRVNTX1RPS0VOJywgYWNjZXNzVG9rZW4sIHsgcGF0aDogJy8nIH0pXHJcbiAgICAgIGNvbnNvbGUubG9nKCdDT09PT09PT09PT0tJRSwgZ2V0JywgY29va2llcy5nZXQoJ0FDRVNTX1RPS0VOJykpXHJcblxyXG4gICAgICBpZiAoZG9jdW1lbnQuY29va2llICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBkaXNwYXRjaChzZXRBY2Vzc1Rva2VuKGRvY3VtZW50LmNvb2tpZSkpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0QWNlc3NUb2tlbihhY2Nlc3NUb2tlbikpXHJcbiAgICAgIH1cclxuICAgICAgLy9kaXNwYXRjaChzZXRFeHBpcmVzSW4oZXhwaXJlc0luKSlcclxuICAgICAgZGlzcGF0Y2goc2V0SXNBdXRoZWQodHJ1ZSkpXHJcbiAgICB9XHJcbiAgICByZW1vdmVIYXNoUGFyYW1zRnJvbVVybCgpXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7LyogeyBpc0F1dGhlZCA9PT0gZmFsc2UgJiYgKi99XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBnZXRBdXRob3JpemVIcmVmKClcclxuICAgICAgICB9fT5cclxuICAgICAgICBBdXRoZW50aWNhdGlvblxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAvLyB9XHJcbiAgICAgIHsgaXNBdXRoZWQgPT09IHRydWUgJiZcclxuICAgICAgICA8aDY+QWNlc3MgVG9rZW4gOnthY2Nlc3NUb2tlbn08L2g2PlxyXG4gICAgICB9XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRob3JpemF0aW9uXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=