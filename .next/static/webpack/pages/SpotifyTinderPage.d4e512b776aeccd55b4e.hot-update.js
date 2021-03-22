webpackHotUpdate_N_E("pages/SpotifyTinderPage",{

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
      children: "Save Sub-Playlist"
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QbGF5bGlzdFZpZXdDb2x1bW4uanMiXSwibmFtZXMiOlsib3V0ZXJDb250YWluZXJTdHlsaW5nIiwiY3NzIiwiY29udGFpbmVyU3R5bGluZyIsImJ1dHRvbkNvbnRhaW5lclN0eWxpbmciLCJQbGF5bGlzdFRpdGxlIiwic3R5bGVkIiwiZGl2IiwiY29sb3JzIiwiYmxhY2siLCJkYXJrR3JlZW4iLCJTYXZlU3ViUGxheWxpc3RCdXR0b24iLCJidXR0b24iLCJob3ZlckdyZWVuIiwiUGxheWxpc3RWaWV3Q29sdW1uIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInRvZ2dsZU1vZGFsIiwic2V0VG9nZ2xlTW9kYWwiLCJwbGF5bGlzdE5hbWUiLCJzZXRQbGF5bGlzdE5hbWUiLCJwbGF5bGlzdERlY3JpcHRpb24iLCJzZXRQbGF5bGlzdERlc2NyaXB0aW9uIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImF1dGgiLCJhY2Nlc3NUb2tlbiIsInVzZXIiLCJyZW1vdmVkU29uZ1VyaXMiLCJzZXRSZW1vdmVkU29uZ1VyaXMiLCJjcmVhdGVNb2RhbENsaWNrZWQiLCJlIiwicHJldmVudERlZmF1bHQiLCJtYWtlTmV3UGxheWxpc3QiLCJjYW5jZWxNb2RhbENsaWNrZWQiLCJVcGRhdGVQbGF5bGlzdE5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlVwZGF0ZVBsYXlsaXN0RGVzY3JpcHRpb24iLCJzdHlsZXMiLCJyZW1vdmVGcm9tcGxheWxpc3QiLCJ1cmkiLCJzZXRQbGF5bGlzdCIsInBsYXlsaXN0IiwiZmlsdGVyIiwidHJhY2siLCJhZGRlZFNvbmdzIiwibmFtZU9mU29uZyIsIm5hbWVPZlBsYXlsaXN0IiwiZ2V0T3B0aW9ucyIsInVybCIsImRhdGEiLCJtZXRob2QiLCJoZWFkZXJzIiwiaWQiLCJheGlvcyIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJwdXRJdGVtc0luUGxheWxpc3QiLCJET01FeGNlcHRpb24iLCJvcHRpb25zIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibWFwIiwic2F2ZVBsYXlsaXN0IiwicGxheWxpc3RJZCIsInBsYXlsaXN0VGl0bGUiLCJtZW51IiwiaGFzUGx1c0J1dHRvbiIsIm9uUGx1c0J1dHRvbkNsaWNrIiwiaGFzTWludXNCdXR0b24iLCJsZW5ndGgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJmdW5jIiwic3RyaW5nIiwiZWxlbWVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Q0FFRTs7QUFFQSxJQUFNQSxxQkFBcUIsR0FBR0MsMERBQUgsbUJBQTNCO0FBYUEsSUFBTUMsZ0JBQWdCLEdBQUdELDBEQUFILG9CQUF0QjtBQTRCRixJQUFNRSxzQkFBc0IsR0FBQ0YsMERBQUQsb0JBQTVCO0FBZ0JBLElBQU1HLGFBQWEsR0FBR0MsdURBQU0sQ0FBQ0MsR0FBVixxQkFHUkMsc0RBQU0sQ0FBQ0MsS0FIQyxFQU9HRCxzREFBTSxDQUFDRSxTQVBWLENBQW5CO0tBQU1MLGE7QUFXTixJQUFNTSxxQkFBcUIsR0FBR0wsdURBQU0sQ0FBQ00sTUFBVixxQkFXTEosc0RBQU0sQ0FBQ0UsU0FYRixFQWFIRixzREFBTSxDQUFDSyxVQWJKLENBQTNCO01BQU1GLHFCOztBQWlCTixTQUFTRyxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBbUM7QUFBQTs7QUFBQSxrQkFDS0Msc0RBQVEsQ0FBQyxLQUFELENBRGI7QUFBQSxNQUMxQkMsV0FEMEI7QUFBQSxNQUNiQyxjQURhOztBQUFBLG1CQUVPRixzREFBUSxDQUFDLEVBQUQsQ0FGZjtBQUFBLE1BRTFCRyxZQUYwQjtBQUFBLE1BRVpDLGVBRlk7O0FB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MmI3NzZhZWNjZDU1YjRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vc3R5bGVzL2NvbG9ycyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCBQbGF5bGlzdFZpZXcgZnJvbSAnLi9QbGF5bGlzdFZpZXcnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG4gIC8vbW9kYWxcclxuXHJcbiAgY29uc3Qgb3V0ZXJDb250YWluZXJTdHlsaW5nID0gY3NzYFxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA5JTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDEwMTA7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYDtcclxuICBjb25zdCBjb250YWluZXJTdHlsaW5nID0gY3NzYFxyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpdntcclxuICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgIH1cclxuICAgIGlucHV0e1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxuICAgIHRleHRhcmVhe1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxuICAgIC5QbGF5bGlzdERlc2NyaXB0aW9ue1xyXG4gICAgICBoZWlnaHQ6IDUwJTtcclxuICAgIH1cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGZsb3JhbHdoaXRlO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGA7XHJcbmNvbnN0IGJ1dHRvbkNvbnRhaW5lclN0eWxpbmc9Y3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBidXR0b257XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuXHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcbmNvbnN0IFBsYXlsaXN0VGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogJHtjb2xvcnMuYmxhY2t9O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAke2NvbG9ycy5kYXJrR3JlZW59O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBTYXZlU3ViUGxheWxpc3RCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDQwcHg7XHJcbiAgcmlnaHQ6IDEyLjUlO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgZm9udC1zaXplOiAxMjUlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5kYXJrR3JlZW59O1xyXG4gIDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5ob3ZlckdyZWVufTtcclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBQbGF5bGlzdFZpZXdDb2x1bW4ocHJvcHMpIHtcclxuICBjb25zdCBbdG9nZ2xlTW9kYWwsIHNldFRvZ2dsZU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtwbGF5bGlzdE5hbWUsIHNldFBsYXlsaXN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFtwbGF5bGlzdERlY3JpcHRpb24sIHNldFBsYXlsaXN0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCB7IGFjY2Vzc1Rva2VuIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hdXRoKVxyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlcilcclxuICBjb25zdCBbcmVtb3ZlZFNvbmdVcmlzLCBzZXRSZW1vdmVkU29uZ1VyaXNdID0gdXNlU3RhdGUoW10pXHJcbiAgZnVuY3Rpb24gY3JlYXRlTW9kYWxDbGlja2VkKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbWFrZU5ld1BsYXlsaXN0KHBsYXlsaXN0TmFtZSwgcGxheWxpc3REZWNyaXB0aW9uKVxyXG4gICAgc2V0VG9nZ2xlTW9kYWwoIXRvZ2dsZU1vZGFsKVxyXG4gIH1cclxuICBmdW5jdGlvbiBjYW5jZWxNb2RhbENsaWNrZWQoZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRUb2dnbGVNb2RhbCghdG9nZ2xlTW9kYWwpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBVcGRhdGVQbGF5bGlzdE5hbWUoZSl7XHJcbiAgICBzZXRQbGF5bGlzdE5hbWUoZS50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIFVwZGF0ZVBsYXlsaXN0RGVzY3JpcHRpb24oZSl7XHJcbiAgICBzZXRQbGF5bGlzdERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxuICBjb25zdCBzdHlsZXMgPSBjc3NgXHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgYDtcclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlRnJvbXBsYXlsaXN0KHVyaSkge1xyXG4gICAgLy9UT0RPOiBJcyB0aGVyZSBhIHdheSB0byBub3QgcmVtb3ZlIGR1cGxpY2F0ZSBzb25ncz9cclxuICAgIHByb3BzLnNldFBsYXlsaXN0KFtcclxuICAgICAgLi4ucHJvcHMucGxheWxpc3QuZmlsdGVyKHRyYWNrID0+IHRyYWNrLnVyaSAhPT0gdXJpKSxcclxuICAgICAgLi4ucHJvcHMuYWRkZWRTb25ncy5maWx0ZXIodHJhY2sgPT4gdHJhY2sudXJpICE9PSB1cmkpXHJcbiAgICBdKVxyXG5cclxuICAgIHNldFJlbW92ZWRTb25nVXJpcyhbLi4ucmVtb3ZlZFNvbmdVcmlzLCB1cmldKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gbWFrZU5ld1BsYXlsaXN0KG5hbWVPZlNvbmcsIG5hbWVPZlBsYXlsaXN0KSB7XHJcbiAgICBjb25zdCBnZXRPcHRpb25zID0gKGFjY2Vzc1Rva2VuLCB1cmwsIGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgYWNjZXNzVG9rZW4sXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvdXNlcnMvJHt1c2VyLmlkfS9wbGF5bGlzdHNgXHJcbiAgICAgIGF4aW9zKGdldE9wdGlvbnMoYWNjZXNzVG9rZW4sIHVybCwge1xyXG4gICAgICAgICduYW1lJzogbmFtZU9mU29uZyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiBuYW1lT2ZQbGF5bGlzdCxcclxuICAgICAgICAncHVibGljJzogJ2ZhbHNlJ1xyXG4gICAgICB9KSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWFrZSBuZXcgcGxheWxpc3QgcmVzcG9uc2U6XCIsIHJlc3BvbnNlKVxyXG4gICAgICAgICAgcHV0SXRlbXNJblBsYXlsaXN0KHJlc3BvbnNlLmRhdGEuaWQpXHJcbiAgICAgICAgICAvL3NldE1ha2luZ3BsYXlsaXN0KGZhbHNlKVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIVFRQIHJlcXVlc3QgYWJvcnRlZFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gcHV0SXRlbXNJblBsYXlsaXN0KGlkKSB7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICB1cmw6IGBodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9wbGF5bGlzdHMvJHtpZH0vdHJhY2tzP3VyaXM9JHtlbmNvZGVVUklDb21wb25lbnQocHJvcHMuYWRkZWRTb25ncy5tYXAoKHVyaSkgPT4gdXJpLnVyaSkpfWAsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyBhY2Nlc3NUb2tlbixcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBheGlvcyhvcHRpb25zKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJQdXR0aW5nIEl0ZW1zIGluIHRoYXQgbmV3IHBsYXlsaXN0OiBcIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIVFRQIHJlcXVlc3QgYWJvcnRlZFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBmdW5jdGlvbiBzYXZlUGxheWxpc3QoKSB7XHJcblxyXG4gICAgaWYgKHByb3BzLnBsYXlsaXN0SWQpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJBZGRpbmcgdG8gdGhpcyBwbGF5bGlzdDogXCIsIHByb3BzLnBsYXlsaXN0SWQpO1xyXG4gICAgICBwdXRJdGVtc0luUGxheWxpc3QocHJvcHMucGxheWxpc3RJZClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiTWFraW5nIGEgbmV3IHBsYXlsaXN0XCIpO1xyXG4gICAgICAvL1RPR0dMRSBNT0RBTCwgbGV0IHRoZSB1c2VyIGVudGVyIHRoZSBwbGF5bGlzdCBkYXRhXHJcbiAgICAgIC8vb25TVUJNSVQsIHBhc3MgZGF0YSB0byBtYWtlTmV3UGxheWxpc3RcclxuICAgICAgc2V0VG9nZ2xlTW9kYWwoIXRvZ2dsZU1vZGFsKVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKFwiUGxheWxpc3RWaWV3Q29sdW1uIHByb3BzOiBcIiwgcHJvcHMpO1xyXG4gIHJldHVybihcclxuICAgIDxkaXYgY3NzPXtzdHlsZXN9PlxyXG4gICAgICA8UGxheWxpc3RUaXRsZT57cHJvcHMucGxheWxpc3RUaXRsZX08L1BsYXlsaXN0VGl0bGU+XHJcbiAgICAgIHtwcm9wcy5tZW51fVxyXG4gICAgICA8UGxheWxpc3RWaWV3XHJcbiAgICAgICAgcGxheWxpc3Q9e3Byb3BzLmFkZGVkU29uZ3M/IHByb3BzLmFkZGVkU29uZ3MgOiBbXX1cclxuICAgICAgICBoYXNQbHVzQnV0dG9uPXtwcm9wcy5oYXNQbHVzQnV0dG9ufVxyXG4gICAgICAgIG9uUGx1c0J1dHRvbkNsaWNrPXtwcm9wcy5vblBsdXNCdXR0b25DbGlja31cclxuICAgICAgICBoYXNNaW51c0J1dHRvbj17cHJvcHMuaGFzTWludXNCdXR0b259XHJcbiAgICAgICAgb25NaW51c0J1dHRvbkNsaWNrPXtyZW1vdmVGcm9tcGxheWxpc3R9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxQbGF5bGlzdFZpZXdcclxuICAgICAgICBwbGF5bGlzdD17cHJvcHMucGxheWxpc3R9XHJcbiAgICAgICAgaGFzUGx1c0J1dHRvbj17cHJvcHMuaGFzUGx1c0J1dHRvbn1cclxuICAgICAgICBvblBsdXNCdXR0b25DbGljaz17cHJvcHMub25QbHVzQnV0dG9uQ2xpY2t9XHJcbiAgICAgICAgaGFzTWludXNCdXR0b249e3Byb3BzLmhhc01pbnVzQnV0dG9ufVxyXG4gICAgICAgIG9uTWludXNCdXR0b25DbGljaz17cmVtb3ZlRnJvbXBsYXlsaXN0fVxyXG4gICAgICAvPlxyXG4gICAgICB7KChwcm9wcy5hZGRlZFNvbmdzICYmIHByb3BzLmFkZGVkU29uZ3MubGVuZ3RoID4gMCkgfHwgcmVtb3ZlZFNvbmdVcmlzLmxlbmd0aCA+IDApICYmXHJcbiAgICAgICAgPFNhdmVTdWJQbGF5bGlzdEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4geyBzYXZlUGxheWxpc3QoKSB9fT5cclxuICAgICAgICAgIFNhdmUgU3ViLVBsYXlsaXN0XHJcbiAgICAgICAgPC9TYXZlU3ViUGxheWxpc3RCdXR0b24+XHJcbiAgICAgIH1cclxuICAgICAgPGRpdj5cclxuICAgICB7dG9nZ2xlTW9kYWw/IChcclxuICAgICAgIDxkaXYgY3NzPXtvdXRlckNvbnRhaW5lclN0eWxpbmd9PlxyXG4gICAgICAgICA8Zm9ybSBjc3M9e2NvbnRhaW5lclN0eWxpbmd9PlxyXG4gICAgICAgICAgIDxkaXY+TmV3IHBsYXlsaXN0IGluZm9ybWF0aW9uPC9kaXY+XHJcbiAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJQbGF5bGlzdCBuYW1lLi4uXCIgb25DaGFuZ2U9e1VwZGF0ZVBsYXlsaXN0TmFtZX0gdmFsdWU9e3BsYXlsaXN0TmFtZX0vPlxyXG4gICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJQbGF5bGlzdERlc2NyaXB0aW9uXCJ0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiUGxheWxpc3QgZGVzY3JpcHRpb24uLi5cIiBvbkNoYW5nZT17VXBkYXRlUGxheWxpc3REZXNjcmlwdGlvbn0gdmFsdWU9e3BsYXlsaXN0RGVjcmlwdGlvbn0vPlxyXG5cclxuICAgICAgICAgPGRpdiBjc3M9e2J1dHRvbkNvbnRhaW5lclN0eWxpbmd9PlxyXG4gICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y2FuY2VsTW9kYWxDbGlja2VkfT4gQ2FuY2VsIDwvYnV0dG9uPlxyXG4gICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y3JlYXRlTW9kYWxDbGlja2VkfT4gQWRkIG5ldyBwbGF5bGlzdCA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZm9ybT5cclxuICAgICAgIDwvZGl2PilcclxuICAgICA6IG51bGxcclxuICAgICB9XHJcbiAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcblBsYXlsaXN0Vmlld0NvbHVtbi5wcm9wVHlwZXMgPSB7XHJcbiAgcGxheWxpc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICBhZGRlZFNvbmdzOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgc2V0UGxheWxpc3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgcGxheWxpc3RUaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBwbGF5bGlzdElkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIG1lbnU6IFByb3BUeXBlcy5lbGVtZW50LFxyXG4gIGhhc1BsdXNCdXR0b246IFByb3BUeXBlcy5ib29sZWFuLFxyXG4gIGhhc01pbnVzQnV0dG9uOiBQcm9wVHlwZXMuYm9vbGVhbixcclxuICBvblBsdXNCdXR0b25DbGljazogUHJvcFR5cGVzLmZ1bmNcclxufVxyXG5cclxuUGxheWxpc3RWaWV3Q29sdW1uLmRlZmF1bHRQcm9wcyA9IHtcclxuICBhZGRlZFNvbmdzOiBbXSxcclxuICBwbGF5bGlzdFRpdGxlOiBcIlwiLFxyXG4gIHBsYXlsaXN0SWQ6IFwiXCIsXHJcbiAgbWVudTogbnVsbCxcclxuICBoYXNQbHVzQnV0dG9uOiBmYWxzZSxcclxuICBoYXNNaW51c0J1dHRvbjogZmFsc2UsXHJcbiAgb25QbHVzQnV0dG9uQ2xpY2s6IG51bGxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWxpc3RWaWV3Q29sdW1uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9