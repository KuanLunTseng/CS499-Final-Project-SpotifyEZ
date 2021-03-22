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
      lineNumber: 46,
      columnNumber: 7
    }, _this), isAuthed === true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
      children: ["Acess Token :", accessToken]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRob3JpemF0aW9uLmpzIl0sIm5hbWVzIjpbIkF1dGhvcml6YXRpb24iLCJjb29raWVzIiwiQ29va2llcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYXV0aCIsImFjY2Vzc1Rva2VuIiwiaXNBdXRoZWQiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwicGFyYW1zIiwiZ2V0SGFzaFBhcmFtcyIsImFjY2Vzc190b2tlbiIsImV4cGlyZXNJbiIsImV4cGlyZXNfaW4iLCJkb2N1bWVudCIsImNvb2tpZSIsInNldCIsInBhdGgiLCJ1bmRlZmluZWQiLCJzZXRBY2Vzc1Rva2VuIiwic2V0SXNBdXRoZWQiLCJyZW1vdmVIYXNoUGFyYW1zRnJvbVVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiZ2V0QXV0aG9yaXplSHJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQzFCLE1BQU1DLE9BQU8sR0FBRyxJQUFJQyx3REFBSixFQUFoQjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRjBCLHFCQUdRQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLElBQVY7QUFBQSxHQUFOLENBSG5CO0FBQUEsTUFHbEJDLFdBSGtCLGdCQUdsQkEsV0FIa0I7QUFBQSxNQUdMQyxRQUhLLGdCQUdMQSxRQUhLLEVBSTFCOzs7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QkYsUUFBN0I7QUFJQUcseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsTUFBTSxHQUFHQyxnRUFBYSxFQUE1QjtBQUNBLFFBQU1OLFdBQVcsR0FBR0ssTUFBTSxDQUFDRSxZQUEzQjtBQUNBLFFBQU1DLFNBQVMsR0FBR0gsTUFBTSxDQUFDSSxVQUF6QjtBQUVBUCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCTyxRQUFRLENBQUNDLE1BQXJDOztBQUVBLFFBQUlYLFdBQUosRUFBaUI7QUFFZlUsY0FBUSxDQUFDQyxNQUFULEdBQWtCWCxXQUFsQixDQUZlLENBR2Y7O0FBRUFQLGFBQU8sQ0FBQ21CLEdBQVIsQ0FBWSxhQUFaLEVBQTJCWixXQUEzQixFQUF3QztBQUFFYSxZQUFJLEVBQUU7QUFBUixPQUF4QztBQUNBcEIsYUFBTyxDQUFDbUIsR0FBUixDQUFZLFdBQVosRUFBeUIsSUFBekIsRUFBK0I7QUFBRUMsWUFBSSxFQUFFO0FBQVIsT0FBL0IsRUFOZSxDQU9mO0FBQ0E7O0FBQ0EsVUFBSUgsUUFBUSxDQUFDQyxNQUFULEtBQW9CRyxTQUF4QixFQUFtQztBQUNqQ25CLGdCQUFRLENBQUNvQiwrRUFBYSxDQUFDTCxRQUFRLENBQUNDLE1BQVYsQ0FBZCxDQUFSO0FBQ0QsT0FGRCxNQUVPO0FBQ0xoQixnQkFBUSxDQUFDb0IsK0VBQWEsQ0FBQ2YsV0FBRCxDQUFkLENBQVI7QUFDRCxPQWJjLENBY2Y7OztBQUNBTCxjQUFRLENBQUNxQiw2RUFBVyxDQUFDLElBQUQsQ0FBWixDQUFSO0FBQ0Q7O0FBQ0RDLDhFQUF1QjtBQUN4QixHQXpCUSxFQXlCTixFQXpCTSxDQUFUO0FBMkJBLHNCQUNFO0FBQUEsNEJBRUU7QUFDRSxhQUFPLEVBQUUsbUJBQU07QUFDYkMsY0FBTSxDQUFDQyxRQUFQLEdBQWtCQyxtRUFBZ0IsRUFBbEM7QUFDRCxPQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsRUFTSW5CLFFBQVEsS0FBSyxJQUFiLGlCQUNBO0FBQUEsa0NBQWtCRCxXQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdCRCxDQXBERDs7R0FBTVIsYTtVQUVhSSx1RCxFQUNpQkMsdUQ7OztLQUg5QkwsYTtBQXNEU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODMxMDUwZjhkNDM0N2VmNWQ3NjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgc2V0QWNlc3NUb2tlbiwgc2V0RXhwaXJlc0luLCBzZXRJc0F1dGhlZCB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvYXV0aEFjdGlvbidcclxuaW1wb3J0IHsgZ2V0QXV0aG9yaXplSHJlZiwgZ2V0SGFzaFBhcmFtcywgcmVtb3ZlSGFzaFBhcmFtc0Zyb21VcmwgfSBmcm9tICcuLi9hdXRoL0F1dGgnXHJcbmltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnXHJcblxyXG5jb25zdCBBdXRob3JpemF0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llc1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IHsgYWNjZXNzVG9rZW4sIGlzQXV0aGVkIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hdXRoKVxyXG4gIC8vY29uc29sZS5sb2coJ0FjY2VzcyBUb2tlbiA9PT0gJywgYWNjZXNzVG9rZW4pXHJcbiAgY29uc29sZS5sb2coJ2lzQXV0aGVkID09PSAnLCBpc0F1dGhlZClcclxuXHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcGFyYW1zID0gZ2V0SGFzaFBhcmFtcygpXHJcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IHBhcmFtcy5hY2Nlc3NfdG9rZW5cclxuICAgIGNvbnN0IGV4cGlyZXNJbiA9IHBhcmFtcy5leHBpcmVzX2luXHJcblxyXG4gICAgY29uc29sZS5sb2coJ0NPT09PT09PT0tJRScsIGRvY3VtZW50LmNvb2tpZSlcclxuXHJcbiAgICBpZiAoYWNjZXNzVG9rZW4pIHtcclxuXHJcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGFjY2Vzc1Rva2VuXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdDT09PT09PT09LSUUnLCBkb2N1bWVudC5jb29raWUpXHJcblxyXG4gICAgICBjb29raWVzLnNldCgnQUNFU1NfVE9LRU4nLCBhY2Nlc3NUb2tlbiwgeyBwYXRoOiAnLycgfSlcclxuICAgICAgY29va2llcy5zZXQoJ0lTX0FVVEhFRCcsIHRydWUsIHsgcGF0aDogJy8nIH0pXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdDT09PT09PT09PT0tJRScsIGNvb2tpZXMuZ2V0KCdBQ0VTU19UT0tFTicpKVxyXG4gICAgICAvLyBjb25zb2xlLmxvZygnQVVVVVVVVVVVVVVUSCcsIGNvb2tpZXMuZ2V0KCdJU19BVVRIRUQnKSlcclxuICAgICAgaWYgKGRvY3VtZW50LmNvb2tpZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0QWNlc3NUb2tlbihkb2N1bWVudC5jb29raWUpKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldEFjZXNzVG9rZW4oYWNjZXNzVG9rZW4pKVxyXG4gICAgICB9XHJcbiAgICAgIC8vZGlzcGF0Y2goc2V0RXhwaXJlc0luKGV4cGlyZXNJbikpXHJcbiAgICAgIGRpc3BhdGNoKHNldElzQXV0aGVkKHRydWUpKVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlSGFzaFBhcmFtc0Zyb21VcmwoKVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgey8qIHsgaXNBdXRoZWQgPT09IGZhbHNlICYmICovfVxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gZ2V0QXV0aG9yaXplSHJlZigpXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgQXV0aGVudGljYXRpb25cclxuICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICB7IGlzQXV0aGVkID09PSB0cnVlICYmXHJcbiAgICAgICAgPGg2PkFjZXNzIFRva2VuIDp7YWNjZXNzVG9rZW59PC9oNj5cclxuICAgICAgfVxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aG9yaXphdGlvblxyXG4iXSwic291cmNlUm9vdCI6IiJ9