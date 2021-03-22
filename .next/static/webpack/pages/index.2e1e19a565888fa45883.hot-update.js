webpackHotUpdate_N_E("pages/index",{

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
            oneSongSeed: "48tAdjG4ng2JfECa7OQujk"
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyLmpzIl0sIm5hbWVzIjpbIlN0eWxlZFNpZGViYXIiLCJzdHlsZWQiLCJkaXYiLCJjb2xvcnMiLCJkYXJrR3JlZW4iLCJQbGF5bGlzdHNMaXN0IiwiU2lkZWJhciIsInVzZVBsYXlsaXN0cyIsInBsYXlsaXN0cyIsInNpZGViYXJJY29uU3R5bGVzIiwiY3NzIiwibmV3UGxheWxpc3RCdXR0b25TdHlsZXMiLCJwYXRobmFtZSIsInF1ZXJ5IiwicGxheWxpc3RJZCIsIm9uZVNvbmdTZWVkIiwiaGVpZ2h0IiwibWFwIiwicGxheWxpc3QiLCJpZCIsImltYWdlcyIsInVybCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHQyx1REFBTSxDQUFDQyxHQUFWLG9CQWFLQyxzREFBTSxDQUFDQyxTQWJaLENBQW5CO0tBQU1KLGE7QUFvQk4sSUFBTUssYUFBYSxHQUFHSix1REFBTSxDQUFDQyxHQUFWLG9CQUFuQjtNQUFNRyxhOztBQU9OLFNBQVNDLE9BQVQsR0FBbUI7QUFBQTs7QUFBQTs7QUFBQSxzQkFDT0MsbUVBQVksRUFEbkI7QUFBQSxNQUNQQyxTQURPLGlCQUNQQSxTQURPOztBQUdmLE1BQU1DLGlCQUFpQixHQUFHQywwREFBSCxvQkFBdkI7QUFlQSxNQUFNQyx1QkFBdUIsR0FBR0QsMERBQUgscUJBQ3ZCRCxpQkFEdUIsRUFJaEJOLHNEQUFNLENBQUNDLFNBSlMsQ0FBN0I7QUFZQSxTQUNJLDhFQUFDLGFBQUQ7QUFBQSxjQUNJLDhFQUFDLGFBQUQ7QUFBQSxpQkFDQSw4RUFBQyxnREFBRDtBQUFNLFlBQUksRUFBRTtBQUFDUSxrQkFBUSxFQUFFLG9CQUFYO0FBQWlDQyxlQUFLLEVBQUU7QUFBQ0Msc0JBQVUsRUFBRSxJQUFiO0FBQW1CQyx1QkFBVyxFQUFFO0FBQWhDO0FBQXhDLFNBQVo7QUFBQSxrQkFDSTtBQUFNLGFBQUcsRUFBRUosdUJBQVg7QUFBQSxvQkFDSSw4RUFBQyxxREFBRDtBQUFRLGVBQUcsRUFBRUQsMERBQUcsQ0FBQztBQUFDTSxvQkFBTSxFQUFDO0FBQVIsYUFBRDtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxFQU1JUixTQUFTLElBQUlBLFNBQVMsQ0FBQ1MsR0FBVixDQUFjLFVBQUFDLFFBQVE7QUFBQSxlQUMvQiw4RUFBQyxnREFBRDtBQUFNLGNBQUksdUJBQWdCQSxRQUFRLENBQUNDLEVBQXpCLENBQVY7QUFBQSxvQkFDSTtBQUNJLGVBQUcsRUFDREQsUUFBUSxDQUFDRSxNQUFULENBQWdCLENBQWhCLElBQ0FGLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQixDQUFoQixFQUFtQkMsR0FEbkIsR0FFQSwwQkFKTjtBQU1JLGVBQUcsRUFBRVosaUJBTlQ7QUFPSSxpQkFBSyxFQUFFUyxRQUFRLENBQUNJLElBUHBCO0FBUUksZUFBRyxFQUFFSixRQUFRLENBQUNJO0FBUmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixXQUE4Q0osUUFBUSxDQUFDQyxFQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUQrQjtBQUFBLE9BQXRCLENBTmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTJCSDs7R0F6RFFiLE87VUFDaUJDLDJEOzs7TUFEakJELE87QUEyRE1BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJlMWUxOWE1NjU4ODhmYTQ1ODgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vc3R5bGVzL2NvbG9ycyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IEZhUGx1cyB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHVzZVBsYXlsaXN0cyBmcm9tICcuLi9ob29rcy91c2VQbGF5bGlzdHMnO1xyXG5cclxuY29uc3QgU3R5bGVkU2lkZWJhciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KTsgLy9mYWN0b3IgaW4gdGhlIHRvcCBhbmQgYm90dG9tXHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0b3A6IDgxcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItY29sb3I6IGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5kYXJrR3JlZW59O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG5cclxuYDtcclxuXHJcbmNvbnN0IFBsYXlsaXN0c0xpc3QgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5gO1xyXG5cclxuZnVuY3Rpb24gU2lkZWJhcigpIHtcclxuICAgIGNvbnN0IHsgcGxheWxpc3RzIH0gPSB1c2VQbGF5bGlzdHMoKVxyXG5cclxuICAgIGNvbnN0IHNpZGViYXJJY29uU3R5bGVzID0gY3NzYFxyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAgIDpob3ZlcntcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgIH1cclxuICAgIGA7XHJcblxyXG4gICAgY29uc3QgbmV3UGxheWxpc3RCdXR0b25TdHlsZXMgPSBjc3NgXHJcbiAgICAgICAgJHtzaWRlYmFySWNvblN0eWxlc307XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAke2NvbG9ycy5kYXJrR3JlZW59O1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHlsZWRTaWRlYmFyPlxyXG4gICAgICAgICAgICA8UGxheWxpc3RzTGlzdD5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17e3BhdGhuYW1lOiBcIi9TcG90aWZ5VGluZGVyUGFnZVwiLCBxdWVyeToge3BsYXlsaXN0SWQ6IG51bGwsIG9uZVNvbmdTZWVkOiBcIjQ4dEFkakc0bmcySmZFQ2E3T1F1amtcIn19fT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNzcz17bmV3UGxheWxpc3RCdXR0b25TdHlsZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGYVBsdXMgY3NzPXtjc3Moe2hlaWdodDonMTAwJSd9KX0gLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIHsgcGxheWxpc3RzICYmIHBsYXlsaXN0cy5tYXAocGxheWxpc3QgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcGxheWxpc3RzLyR7cGxheWxpc3QuaWR9YH0ga2V5PXtwbGF5bGlzdC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlsaXN0LmltYWdlc1swXSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlsaXN0LmltYWdlc1swXS51cmwgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9pbWFnZXMvc3BvdGlmeS1sb2dvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3M9e3NpZGViYXJJY29uU3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3BsYXlsaXN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3BsYXlsaXN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICA8L1BsYXlsaXN0c0xpc3Q+XHJcblxyXG4gICAgICAgIDwvU3R5bGVkU2lkZWJhcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=