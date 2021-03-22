webpackHotUpdate_N_E("pages/SpotifyTinderPage",{

/***/ "./store/actions/playlistAction.js":
/*!*****************************************!*\
  !*** ./store/actions/playlistAction.js ***!
  \*****************************************/
/*! exports provided: getUserPlaylist, getPlaylistById, getPlaylistsList, clearPlaylistById, removeItemsFromPlaylist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserPlaylist", function() { return getUserPlaylist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlaylistById", function() { return getPlaylistById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlaylistsList", function() { return getPlaylistsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearPlaylistById", function() { return clearPlaylistById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItemsFromPlaylist", function() { return removeItemsFromPlaylist; });
/* harmony import */ var C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./store/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./store/utils.js");




 // Get a List of Current User's Playlists

var getUserPlaylist = function getUserPlaylist(accessToken) {
  return /*#__PURE__*/function () {
    var _ref = Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var url, res;
      return C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = 'https://api.spotify.com/v1/me/playlists';
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3___default()(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getOptions"])(accessToken, url));

            case 3:
              res = _context.sent;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["GET_USER_PLAYLIST"],
                userPlaylist: res.data
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
}; // Get a Playlist

var getPlaylistById = function getPlaylistById(accessToken, playlistId) {
  return /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
      var url, res;
      return C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              url = "https://api.spotify.com/v1/playlists/".concat(playlistId);
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3___default()(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getOptions"])(accessToken, url));

            case 3:
              res = _context2.sent;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["GET_PLAYLIST_BY_ID"],
                playlistById: res.data
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
var getPlaylistsList = function getPlaylistsList(accessToken) {
  return /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
      var url, res;
      return C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              url = 'https://api.spotify.com/v1/me/playlists';
              _context3.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3___default()(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getOptions"])(accessToken, url));

            case 3:
              res = _context3.sent;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["GET_PLAYLISTS_LIST"],
                playlists: res.data.items
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
var clearPlaylistById = function clearPlaylistById() {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["CLEAR_PLAYLIST_BY_ID"]
    });
  };
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

var removeItemsFromPlaylist = function removeItemsFromPlaylist(accessToken, playlistId, body) {
  return /*#__PURE__*/function () {
    var _ref4 = Object(C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dispatch) {
      var options, res;
      return C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              options = {
                url: "https://api.spotify.com/v1/playlists/".concat(playlistId, "/tracks"),
                method: 'DELETE',
                headers: {
                  'Accept': 'application/json',
                  'Authorization': 'Bearer ' + accessToken,
                  'Content-Type': 'application/json'
                },
                data: {
                  body: body
                }
              };
              _context4.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3___default()(options);

            case 3:
              res = _context4.sent;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["REMOVE_ITEMS_FROM_PLAYLIST"]
              });

            case 5:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9wbGF5bGlzdEFjdGlvbi5qcyJdLCJuYW1lcyI6WyJnZXRVc2VyUGxheWxpc3QiLCJhY2Nlc3NUb2tlbiIsImRpc3BhdGNoIiwidXJsIiwiYXhpb3MiLCJnZXRPcHRpb25zIiwicmVzIiwidHlwZSIsInR5cGVzIiwidXNlclBsYXlsaXN0IiwiZGF0YSIsImdldFBsYXlsaXN0QnlJZCIsInBsYXlsaXN0SWQiLCJwbGF5bGlzdEJ5SWQiLCJnZXRQbGF5bGlzdHNMaXN0IiwicGxheWxpc3RzIiwiaXRlbXMiLCJjbGVhclBsYXlsaXN0QnlJZCIsIkNMRUFSX1BMQVlMSVNUX0JZX0lEIiwicmVtb3ZlSXRlbXNGcm9tUGxheWxpc3QiLCJib2R5Iiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJSRU1PVkVfSVRFTVNfRlJPTV9QTEFZTElTVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FJQTs7QUFDTyxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLFdBQUQ7QUFBQTtBQUFBLG9YQUFpQixpQkFBTUMsUUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeENDLGlCQUR3QyxHQUNsQyx5Q0FEa0M7QUFBQTtBQUFBLHFCQUU1QkMsNENBQUssQ0FBQ0MseURBQVUsQ0FBQ0osV0FBRCxFQUFjRSxHQUFkLENBQVgsQ0FGdUI7O0FBQUE7QUFFeENHLGlCQUZ3QztBQUc5Q0osc0JBQVEsQ0FBQztBQUNQSyxvQkFBSSxFQUFFQyx3REFEQztBQUVQQyw0QkFBWSxFQUFFSCxHQUFHLENBQUNJO0FBRlgsZUFBRCxDQUFSOztBQUg4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXhCLEMsQ0FTUDs7QUFDTyxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNWLFdBQUQsRUFBY1csVUFBZDtBQUFBO0FBQUEscVhBQTZCLGtCQUFNVixRQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNwREMsaUJBRG9ELGtEQUNOUyxVQURNO0FBQUE7QUFBQSxxQkFFeENSLDRDQUFLLENBQUNDLHlEQUFVLENBQUNKLFdBQUQsRUFBY0UsR0FBZCxDQUFYLENBRm1DOztBQUFBO0FBRXBERyxpQkFGb0Q7QUFHMURKLHNCQUFRLENBQUM7QUFDUEssb0JBQUksRUFBRUMseURBREM7QUFFUEssNEJBQVksRUFBRVAsR0FBRyxDQUFDSTtBQUZYLGVBQUQsQ0FBUjs7QUFIMEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBN0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF4QjtBQVNBLElBQU1JLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ2IsV0FBRDtBQUFBO0FBQUEscVhBQWlCLGtCQUFNQyxRQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN6Q0MsaUJBRHlDLEdBQ25DLHlDQURtQztBQUFBO0FBQUEscUJBRTdCQyw0Q0FBSyxDQUFDQyx5REFBVSxDQUFDSixXQUFELEVBQWNFLEdBQWQsQ0FBWCxDQUZ3Qjs7QUFBQTtBQUV6Q0csaUJBRnlDO0FBRy9DSixzQkFBUSxDQUFDO0FBQ1BLLG9CQUFJLEVBQUVDLHlEQURDO0FBRVBPLHlCQUFTLEVBQUVULEdBQUcsQ0FBQ0ksSUFBSixDQUFTTTtBQUZiLGVBQUQsQ0FBUjs7QUFIK0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBakI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF6QjtBQVNBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0I7QUFBQSxTQUFNLFVBQUFmLFFBQVEsRUFBSTtBQUNqREEsWUFBUSxDQUFDO0FBQ1BLLFVBQUksRUFBRUMsMkRBQTBCVTtBQUR6QixLQUFELENBQVI7QUFHRCxHQUpnQztBQUFBLENBQTFCLEMsQ0FNUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sSUFBTUMsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixDQUFDbEIsV0FBRCxFQUFjVyxVQUFkLEVBQTBCUSxJQUExQjtBQUFBO0FBQUEscVhBQW1DLGtCQUFNbEIsUUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbEVtQixxQkFEa0UsR0FDeEQ7QUFDZGxCLG1CQUFHLGlEQUEwQ1MsVUFBMUMsWUFEVztBQUVkVSxzQkFBTSxFQUFFLFFBRk07QUFHZEMsdUJBQU8sRUFBRTtBQUNQLDRCQUFVLGtCQURIO0FBRVAsbUNBQWlCLFlBQVl0QixXQUZ0QjtBQUdQLGtDQUFnQjtBQUhULGlCQUhLO0FBUWRTLG9CQUFJLEVBQUU7QUFBRVUsc0JBQUksRUFBSkE7QUFBRjtBQVJRLGVBRHdEO0FBQUE7QUFBQSxxQkFXdERoQiw0Q0FBSyxDQUFDaUIsT0FBRCxDQVhpRDs7QUFBQTtBQVdsRWYsaUJBWGtFO0FBWXhFSixzQkFBUSxDQUFDO0FBQ1BLLG9CQUFJLEVBQUVDLGlFQUFnQ2dCO0FBRC9CLGVBQUQsQ0FBUjs7QUFad0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbkM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFoQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9TcG90aWZ5VGluZGVyUGFnZS41MjUyNjBhYWY4MjAzNzc3MzBhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmltcG9ydCB7IGdldE9wdGlvbnMgfSBmcm9tICcuLi91dGlscydcclxuXHJcbi8vIEdldCBhIExpc3Qgb2YgQ3VycmVudCBVc2VyJ3MgUGxheWxpc3RzXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyUGxheWxpc3QgPSAoYWNjZXNzVG9rZW4pID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvcGxheWxpc3RzJ1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zKGdldE9wdGlvbnMoYWNjZXNzVG9rZW4sIHVybCkpXHJcbiAgZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogdHlwZXMuR0VUX1VTRVJfUExBWUxJU1QsXHJcbiAgICB1c2VyUGxheWxpc3Q6IHJlcy5kYXRhXHJcbiAgfSlcclxufVxyXG5cclxuLy8gR2V0IGEgUGxheWxpc3RcclxuZXhwb3J0IGNvbnN0IGdldFBsYXlsaXN0QnlJZCA9IChhY2Nlc3NUb2tlbiwgcGxheWxpc3RJZCkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9wbGF5bGlzdHMvJHtwbGF5bGlzdElkfWBcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyhnZXRPcHRpb25zKGFjY2Vzc1Rva2VuLCB1cmwpKVxyXG4gIGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IHR5cGVzLkdFVF9QTEFZTElTVF9CWV9JRCxcclxuICAgIHBsYXlsaXN0QnlJZDogcmVzLmRhdGFcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UGxheWxpc3RzTGlzdCA9IChhY2Nlc3NUb2tlbikgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9tZS9wbGF5bGlzdHMnXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MoZ2V0T3B0aW9ucyhhY2Nlc3NUb2tlbiwgdXJsKSlcclxuICBkaXNwYXRjaCh7XHJcbiAgICB0eXBlOiB0eXBlcy5HRVRfUExBWUxJU1RTX0xJU1QsXHJcbiAgICBwbGF5bGlzdHM6IHJlcy5kYXRhLml0ZW1zXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNsZWFyUGxheWxpc3RCeUlkID0gKCkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gIGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IHR5cGVzLkNMRUFSX1BMQVlMSVNUX0JZX0lEXHJcbiAgfSlcclxufVxyXG5cclxuLy8gRXhhbXBsZVxyXG4vLyBheGlvcyh7XHJcbi8vICAgbWV0aG9kOiAncG9zdCcsXHJcbi8vICAgdXJsOiBiYXNlVXJsICsgJ2FwcGxpY2F0aW9ucy8nICsgYXBwTmFtZSArICcvZGF0YWV4cG9ydC9wbGFudHlwZXMnICsgcGxhbixcclxuLy8gICBoZWFkZXJzOiB7fSwgXHJcbi8vICAgZGF0YToge1xyXG4vLyAgICAgZm9vOiAnYmFyJywgLy8gVGhpcyBpcyB0aGUgYm9keSBwYXJ0XHJcbi8vICAgfVxyXG4vLyB9KVxyXG5cclxuLy8ge1xyXG4vLyAgIFwidHJhY2tzXCI6IFtcclxuLy8gICAgIHsgXCJ1cmlcIjogXCJzcG90aWZ5OnRyYWNrOjRpVjVXOXVZRWRZVVZhNzlBeGI3UmhcIiB9LFxyXG4vLyAgICAgeyBcInVyaVwiOiBcInNwb3RpZnk6dHJhY2s6MTMwMVdsZXlUOThNU3hWSFBaQ0E2TVwiIH1cclxuLy8gICBdXHJcbi8vIH1cclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVJdGVtc0Zyb21QbGF5bGlzdCA9IChhY2Nlc3NUb2tlbiwgcGxheWxpc3RJZCwgYm9keSkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICB1cmw6IGBodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9wbGF5bGlzdHMvJHtwbGF5bGlzdElkfS90cmFja3NgLFxyXG4gICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyBhY2Nlc3NUb2tlbixcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbiAgICBkYXRhOiB7IGJvZHkgfVxyXG4gIH1cclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyhvcHRpb25zKVxyXG4gIGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IHR5cGVzLlJFTU9WRV9JVEVNU19GUk9NX1BMQVlMSVNUXHJcbiAgfSlcclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=