webpackHotUpdate_N_E("pages/playlists/[playlist]",{

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
/* harmony import */ var _store_actions_playlistAction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../store/actions/playlistAction */ "./store/actions/playlistAction.js");






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

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])();

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
      var body;
      return C_Users_zengg_Desktop_CS499_final_project_team_10_SpotifyEZ_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (props.playlistId) {
                console.log("Adding to this playlist: ", props.playlistId);
                putItemsInPlaylist(props.playlistId); // removedSongUris

                body = {
                  'tracks': [removedSongUris.map(function (uri) {
                    return {
                      'uri': uri
                    };
                  })]
                };
                console.log("BODYYYYYYYYYYYY", body); //dispatch(removeItemsFromPlaylist(props.playlistId, body))
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
      lineNumber: 224,
      columnNumber: 7
    }, this), props.menu, Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_PlaylistView__WEBPACK_IMPORTED_MODULE_11__["default"], {
      playlist: props.addedSongs ? props.addedSongs : [],
      hasPlusButton: props.hasPlusButton,
      onPlusButtonClick: props.onPlusButtonClick,
      hasMinusButton: props.hasMinusButton,
      onMinusButtonClick: removeFromplaylist
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 7
    }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_PlaylistView__WEBPACK_IMPORTED_MODULE_11__["default"], {
      playlist: props.playlist,
      hasPlusButton: props.hasPlusButton,
      onPlusButtonClick: props.onPlusButtonClick,
      hasMinusButton: props.hasMinusButton,
      onMinusButtonClick: removeFromplaylist
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 7
    }, this), (props.addedSongs && props.addedSongs.length > 0 || removedSongUris.length > 0) && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(SaveSubPlaylistButton, {
      onClick: function onClick() {
        savePlaylist();
      },
      children: "Save Sub-Playlist"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 241,
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
            lineNumber: 250,
            columnNumber: 15
          }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Playlist name...",
            onChange: UpdatePlaylistName,
            value: playlistName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 15
          }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("textarea", {
            className: "PlaylistDescription",
            type: "text",
            placeholder: "Playlist description...",
            onChange: UpdatePlaylistDescription,
            value: playlistDecription
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 15
          }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            css: buttonContainerStyling,
            children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
              onClick: cancelModalClicked,
              children: " Cancel "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 255,
              columnNumber: 17
            }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
              onClick: createModalClicked,
              children: " Add new playlist "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 256,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 254,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 11
      }, this) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 223,
    columnNumber: 5
  }, this);
}

_s(PlaylistViewColumn, "3T0GsN8gHV/5bECzkLF55CLDUiU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"]];
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
            playlistId: '2lpfJwne7mbb6g7GzfHYyU',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QbGF5bGlzdFZpZXdDb2x1bW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2lkZWJhci5qcyJdLCJuYW1lcyI6WyJvdXRlckNvbnRhaW5lclN0eWxpbmciLCJjc3MiLCJjb250YWluZXJTdHlsaW5nIiwiYnV0dG9uQ29udGFpbmVyU3R5bGluZyIsIlBsYXlsaXN0VGl0bGUiLCJzdHlsZWQiLCJkaXYiLCJjb2xvcnMiLCJibGFjayIsImRhcmtHcmVlbiIsIlNhdmVTdWJQbGF5bGlzdEJ1dHRvbiIsImJ1dHRvbiIsImhvdmVyR3JlZW4iLCJQbGF5bGlzdFZpZXdDb2x1bW4iLCJwcm9wcyIsInVzZVN0YXRlIiwidG9nZ2xlTW9kYWwiLCJzZXRUb2dnbGVNb2RhbCIsInBsYXlsaXN0TmFtZSIsInNldFBsYXlsaXN0TmFtZSIsInBsYXlsaXN0RGVjcmlwdGlvbiIsInNldFBsYXlsaXN0RGVzY3JpcHRpb24iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYXV0aCIsImFjY2Vzc1Rva2VuIiwidXNlciIsInJlbW92ZWRTb25nVXJpcyIsInNldFJlbW92ZWRTb25nVXJpcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJjcmVhdGVNb2RhbENsaWNrZWQiLCJlIiwicHJldmVudERlZmF1bHQiLCJtYWtlTmV3UGxheWxpc3QiLCJjYW5jZWxNb2RhbENsaWNrZWQiLCJVcGRhdGVQbGF5bGlzdE5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlVwZGF0ZVBsYXlsaXN0RGVzY3JpcHRpb24iLCJzdHlsZXMiLCJyZW1vdmVGcm9tcGxheWxpc3QiLCJ1cmkiLCJzZXRQbGF5bGlzdCIsInBsYXlsaXN0IiwiZmlsdGVyIiwidHJhY2siLCJhZGRlZFNvbmdzIiwibmFtZU9mU29uZyIsIm5hbWVPZlBsYXlsaXN0IiwiZ2V0T3B0aW9ucyIsInVybCIsImRhdGEiLCJtZXRob2QiLCJoZWFkZXJzIiwiaWQiLCJheGlvcyIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJwdXRJdGVtc0luUGxheWxpc3QiLCJET01FeGNlcHRpb24iLCJvcHRpb25zIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibWFwIiwic2F2ZVBsYXlsaXN0IiwicGxheWxpc3RJZCIsImJvZHkiLCJwbGF5bGlzdFRpdGxlIiwibWVudSIsImhhc1BsdXNCdXR0b24iLCJvblBsdXNCdXR0b25DbGljayIsImhhc01pbnVzQnV0dG9uIiwibGVuZ3RoIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImFycmF5IiwiZnVuYyIsInN0cmluZyIsImVsZW1lbnQiLCJkZWZhdWx0UHJvcHMiLCJTdHlsZWRTaWRlYmFyIiwiUGxheWxpc3RzTGlzdCIsIlNpZGViYXIiLCJ1c2VQbGF5bGlzdHMiLCJwbGF5bGlzdHMiLCJzaWRlYmFySWNvblN0eWxlcyIsIm5ld1BsYXlsaXN0QnV0dG9uU3R5bGVzIiwicGF0aG5hbWUiLCJxdWVyeSIsIm9uZVNvbmdTZWVkIiwiaGVpZ2h0IiwiaW1hZ2VzIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Q0FFQTs7QUFFQSxJQUFNQSxxQkFBcUIsR0FBR0MsMERBQUgsbUJBQTNCO0FBYUEsSUFBTUMsZ0JBQWdCLEdBQUdELDBEQUFILG9CQUF0QjtBQTRCQSxJQUFNRSxzQkFBc0IsR0FBR0YsMERBQUgsb0JBQTVCO0FBZ0JBLElBQU1HLGFBQWEsR0FBR0MsdURBQU0sQ0FBQ0MsR0FBVixxQkFHUkMsc0RBQU0sQ0FBQ0MsS0FIQyxFQU9HRCxzREFBTSxDQUFDRSxTQVBWLENBQW5CO0tBQU1MLGE7QUFXTixJQUFNTSxxQkFBcUIsR0FBR0wsdURBQU0sQ0FB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QTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMkJIOztHQXpEUStCLE87VUFDaUJDLDJEOzs7TUFEakJELE87QUEyRE1BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BsYXlsaXN0cy9bcGxheWxpc3RdLjgxODQyZTViMWQxMjhiODE3NzBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vc3R5bGVzL2NvbG9ycyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCBQbGF5bGlzdFZpZXcgZnJvbSAnLi9QbGF5bGlzdFZpZXcnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyByZW1vdmVJdGVtc0Zyb21QbGF5bGlzdCB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvcGxheWxpc3RBY3Rpb24nXHJcbi8vbW9kYWxcclxuXHJcbmNvbnN0IG91dGVyQ29udGFpbmVyU3R5bGluZyA9IGNzc2BcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogOSU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDEwO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGA7XHJcbmNvbnN0IGNvbnRhaW5lclN0eWxpbmcgPSBjc3NgXHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGl2e1xyXG4gICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgfVxyXG4gICAgaW5wdXR7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG4gICAgdGV4dGFyZWF7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG4gICAgLlBsYXlsaXN0RGVzY3JpcHRpb257XHJcbiAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgfVxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZmxvcmFsd2hpdGU7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYDtcclxuY29uc3QgYnV0dG9uQ29udGFpbmVyU3R5bGluZyA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYnV0dG9ue1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcblxyXG4gIH1cclxuYDtcclxuXHJcblxyXG5jb25zdCBQbGF5bGlzdFRpdGxlID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICR7Y29sb3JzLmJsYWNrfTtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJHtjb2xvcnMuZGFya0dyZWVufTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgU2F2ZVN1YlBsYXlsaXN0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiA0MHB4O1xyXG4gIHJpZ2h0OiAxMi41JTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTI1JTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuZGFya0dyZWVufTtcclxuICA6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuaG92ZXJHcmVlbn07XHJcbiAgfVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gUGxheWxpc3RWaWV3Q29sdW1uKHByb3BzKSB7XHJcbiAgY29uc3QgW3RvZ2dsZU1vZGFsLCBzZXRUb2dnbGVNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbcGxheWxpc3ROYW1lLCBzZXRQbGF5bGlzdE5hbWVdID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBbcGxheWxpc3REZWNyaXB0aW9uLCBzZXRQbGF5bGlzdERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgeyBhY2Nlc3NUb2tlbiB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYXV0aClcclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIpXHJcbiAgY29uc3QgW3JlbW92ZWRTb25nVXJpcywgc2V0UmVtb3ZlZFNvbmdVcmlzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGZ1bmN0aW9uIGNyZWF0ZU1vZGFsQ2xpY2tlZChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBtYWtlTmV3UGxheWxpc3QocGxheWxpc3ROYW1lLCBwbGF5bGlzdERlY3JpcHRpb24pXHJcbiAgICBzZXRUb2dnbGVNb2RhbCghdG9nZ2xlTW9kYWwpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNhbmNlbE1vZGFsQ2xpY2tlZChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRUb2dnbGVNb2RhbCghdG9nZ2xlTW9kYWwpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBVcGRhdGVQbGF5bGlzdE5hbWUoZSkge1xyXG4gICAgc2V0UGxheWxpc3ROYW1lKGUudGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxuICBmdW5jdGlvbiBVcGRhdGVQbGF5bGlzdERlc2NyaXB0aW9uKGUpIHtcclxuICAgIHNldFBsYXlsaXN0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG4gIGNvbnN0IHN0eWxlcyA9IGNzc2BcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICBgO1xyXG5cclxuICBmdW5jdGlvbiByZW1vdmVGcm9tcGxheWxpc3QodXJpKSB7XHJcbiAgICAvL1RPRE86IElzIHRoZXJlIGEgd2F5IHRvIG5vdCByZW1vdmUgZHVwbGljYXRlIHNvbmdzP1xyXG4gICAgcHJvcHMuc2V0UGxheWxpc3QoW1xyXG4gICAgICAuLi5wcm9wcy5wbGF5bGlzdC5maWx0ZXIodHJhY2sgPT4gdHJhY2sudXJpICE9PSB1cmkpLFxyXG4gICAgICAuLi5wcm9wcy5hZGRlZFNvbmdzLmZpbHRlcih0cmFjayA9PiB0cmFjay51cmkgIT09IHVyaSlcclxuICAgIF0pXHJcblxyXG4gICAgc2V0UmVtb3ZlZFNvbmdVcmlzKFsuLi5yZW1vdmVkU29uZ1VyaXMsIHVyaV0pXHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBtYWtlTmV3UGxheWxpc3QobmFtZU9mU29uZywgbmFtZU9mUGxheWxpc3QpIHtcclxuICAgIGNvbnN0IGdldE9wdGlvbnMgPSAoYWNjZXNzVG9rZW4sIHVybCwgZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgYWNjZXNzVG9rZW4sXHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvdXNlcnMvJHt1c2VyLmlkfS9wbGF5bGlzdHNgXHJcbiAgICAgIGF4aW9zKGdldE9wdGlvbnMoYWNjZXNzVG9rZW4sIHVybCwge1xyXG4gICAgICAgICduYW1lJzogbmFtZU9mU29uZyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiBuYW1lT2ZQbGF5bGlzdCxcclxuICAgICAgICAncHVibGljJzogJ2ZhbHNlJ1xyXG4gICAgICB9KSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWFrZSBuZXcgcGxheWxpc3QgcmVzcG9uc2U6XCIsIHJlc3BvbnNlKVxyXG4gICAgICAgICAgcHV0SXRlbXNJblBsYXlsaXN0KHJlc3BvbnNlLmRhdGEuaWQpXHJcbiAgICAgICAgICAvL3NldE1ha2luZ3BsYXlsaXN0KGZhbHNlKVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIVFRQIHJlcXVlc3QgYWJvcnRlZFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gcHV0SXRlbXNJblBsYXlsaXN0KGlkKSB7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICB1cmw6IGBodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9wbGF5bGlzdHMvJHtpZH0vdHJhY2tzP3VyaXM9JHtlbmNvZGVVUklDb21wb25lbnQocHJvcHMuYWRkZWRTb25ncy5tYXAoKHVyaSkgPT4gdXJpLnVyaSkpfWAsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyBhY2Nlc3NUb2tlbixcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBheGlvcyhvcHRpb25zKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJQdXR0aW5nIEl0ZW1zIGluIHRoYXQgbmV3IHBsYXlsaXN0OiBcIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIVFRQIHJlcXVlc3QgYWJvcnRlZFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBmdW5jdGlvbiBzYXZlUGxheWxpc3QoKSB7XHJcblxyXG4gICAgaWYgKHByb3BzLnBsYXlsaXN0SWQpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJBZGRpbmcgdG8gdGhpcyBwbGF5bGlzdDogXCIsIHByb3BzLnBsYXlsaXN0SWQpO1xyXG4gICAgICBwdXRJdGVtc0luUGxheWxpc3QocHJvcHMucGxheWxpc3RJZClcclxuXHJcbiAgICAgIC8vIHJlbW92ZWRTb25nVXJpc1xyXG5cclxuICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAndHJhY2tzJzogW1xyXG4gICAgICAgICAgcmVtb3ZlZFNvbmdVcmlzLm1hcCgodXJpKSA9PiB7IFxyXG4gICAgICAgICAgICByZXR1cm4geyAndXJpJzogdXJpIH0gXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJCT0RZWVlZWVlZWVlZWVlcIiwgYm9keSlcclxuICAgICAgLy9kaXNwYXRjaChyZW1vdmVJdGVtc0Zyb21QbGF5bGlzdChwcm9wcy5wbGF5bGlzdElkLCBib2R5KSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiTWFraW5nIGEgbmV3IHBsYXlsaXN0XCIpO1xyXG4gICAgICAvL1RPR0dMRSBNT0RBTCwgbGV0IHRoZSB1c2VyIGVudGVyIHRoZSBwbGF5bGlzdCBkYXRhXHJcbiAgICAgIC8vb25TVUJNSVQsIHBhc3MgZGF0YSB0byBtYWtlTmV3UGxheWxpc3RcclxuICAgICAgc2V0VG9nZ2xlTW9kYWwoIXRvZ2dsZU1vZGFsKVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKFwiUGxheWxpc3RWaWV3Q29sdW1uIHByb3BzOiBcIiwgcHJvcHMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNzcz17c3R5bGVzfT5cclxuICAgICAgPFBsYXlsaXN0VGl0bGU+e3Byb3BzLnBsYXlsaXN0VGl0bGV9PC9QbGF5bGlzdFRpdGxlPlxyXG4gICAgICB7cHJvcHMubWVudX1cclxuICAgICAgPFBsYXlsaXN0Vmlld1xyXG4gICAgICAgIHBsYXlsaXN0PXtwcm9wcy5hZGRlZFNvbmdzID8gcHJvcHMuYWRkZWRTb25ncyA6IFtdfVxyXG4gICAgICAgIGhhc1BsdXNCdXR0b249e3Byb3BzLmhhc1BsdXNCdXR0b259XHJcbiAgICAgICAgb25QbHVzQnV0dG9uQ2xpY2s9e3Byb3BzLm9uUGx1c0J1dHRvbkNsaWNrfVxyXG4gICAgICAgIGhhc01pbnVzQnV0dG9uPXtwcm9wcy5oYXNNaW51c0J1dHRvbn1cclxuICAgICAgICBvbk1pbnVzQnV0dG9uQ2xpY2s9e3JlbW92ZUZyb21wbGF5bGlzdH1cclxuICAgICAgLz5cclxuICAgICAgPFBsYXlsaXN0Vmlld1xyXG4gICAgICAgIHBsYXlsaXN0PXtwcm9wcy5wbGF5bGlzdH1cclxuICAgICAgICBoYXNQbHVzQnV0dG9uPXtwcm9wcy5oYXNQbHVzQnV0dG9ufVxyXG4gICAgICAgIG9uUGx1c0J1dHRvbkNsaWNrPXtwcm9wcy5vblBsdXNCdXR0b25DbGlja31cclxuICAgICAgICBoYXNNaW51c0J1dHRvbj17cHJvcHMuaGFzTWludXNCdXR0b259XHJcbiAgICAgICAgb25NaW51c0J1dHRvbkNsaWNrPXtyZW1vdmVGcm9tcGxheWxpc3R9XHJcbiAgICAgIC8+XHJcbiAgICAgIHsoKHByb3BzLmFkZGVkU29uZ3MgJiYgcHJvcHMuYWRkZWRTb25ncy5sZW5ndGggPiAwKSB8fCByZW1vdmVkU29uZ1VyaXMubGVuZ3RoID4gMCkgJiZcclxuICAgICAgICA8U2F2ZVN1YlBsYXlsaXN0QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNhdmVQbGF5bGlzdCgpIH19PlxyXG4gICAgICAgICAgU2F2ZSBTdWItUGxheWxpc3RcclxuICAgICAgICA8L1NhdmVTdWJQbGF5bGlzdEJ1dHRvbj5cclxuICAgICAgfVxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHt0b2dnbGVNb2RhbCA/IChcclxuICAgICAgICAgIDxkaXYgY3NzPXtvdXRlckNvbnRhaW5lclN0eWxpbmd9PlxyXG4gICAgICAgICAgICA8Zm9ybSBjc3M9e2NvbnRhaW5lclN0eWxpbmd9PlxyXG4gICAgICAgICAgICAgIDxkaXY+TmV3IHBsYXlsaXN0IGluZm9ybWF0aW9uPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJQbGF5bGlzdCBuYW1lLi4uXCIgb25DaGFuZ2U9e1VwZGF0ZVBsYXlsaXN0TmFtZX0gdmFsdWU9e3BsYXlsaXN0TmFtZX0gLz5cclxuICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiUGxheWxpc3REZXNjcmlwdGlvblwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJQbGF5bGlzdCBkZXNjcmlwdGlvbi4uLlwiIG9uQ2hhbmdlPXtVcGRhdGVQbGF5bGlzdERlc2NyaXB0aW9ufSB2YWx1ZT17cGxheWxpc3REZWNyaXB0aW9ufSAvPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNzcz17YnV0dG9uQ29udGFpbmVyU3R5bGluZ30+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NhbmNlbE1vZGFsQ2xpY2tlZH0+IENhbmNlbCA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y3JlYXRlTW9kYWxDbGlja2VkfT4gQWRkIG5ldyBwbGF5bGlzdCA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuUGxheWxpc3RWaWV3Q29sdW1uLnByb3BUeXBlcyA9IHtcclxuICBwbGF5bGlzdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gIGFkZGVkU29uZ3M6IFByb3BUeXBlcy5hcnJheSxcclxuICBzZXRQbGF5bGlzdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBwbGF5bGlzdFRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHBsYXlsaXN0SWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbWVudTogUHJvcFR5cGVzLmVsZW1lbnQsXHJcbiAgaGFzUGx1c0J1dHRvbjogUHJvcFR5cGVzLmJvb2xlYW4sXHJcbiAgaGFzTWludXNCdXR0b246IFByb3BUeXBlcy5ib29sZWFuLFxyXG4gIG9uUGx1c0J1dHRvbkNsaWNrOiBQcm9wVHlwZXMuZnVuY1xyXG59XHJcblxyXG5QbGF5bGlzdFZpZXdDb2x1bW4uZGVmYXVsdFByb3BzID0ge1xyXG4gIGFkZGVkU29uZ3M6IFtdLFxyXG4gIHBsYXlsaXN0VGl0bGU6IFwiXCIsXHJcbiAgcGxheWxpc3RJZDogXCJcIixcclxuICBtZW51OiBudWxsLFxyXG4gIGhhc1BsdXNCdXR0b246IGZhbHNlLFxyXG4gIGhhc01pbnVzQnV0dG9uOiBmYWxzZSxcclxuICBvblBsdXNCdXR0b25DbGljazogbnVsbFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5bGlzdFZpZXdDb2x1bW47XHJcbiIsIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcblxyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9zdHlsZXMvY29sb3JzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgRmFQbHVzIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgdXNlUGxheWxpc3RzIGZyb20gJy4uL2hvb2tzL3VzZVBsYXlsaXN0cyc7XHJcblxyXG5jb25zdCBTdHlsZWRTaWRlYmFyID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpOyAvL2ZhY3RvciBpbiB0aGUgdG9wIGFuZCBib3R0b21cclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogODFweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JleTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmRhcmtHcmVlbn07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcblxyXG5gO1xyXG5cclxuY29uc3QgUGxheWxpc3RzTGlzdCA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBTaWRlYmFyKCkge1xyXG4gICAgY29uc3QgeyBwbGF5bGlzdHMgfSA9IHVzZVBsYXlsaXN0cygpXHJcblxyXG4gICAgY29uc3Qgc2lkZWJhckljb25TdHlsZXMgPSBjc3NgXHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICAgOmhvdmVye1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgfVxyXG4gICAgYDtcclxuXHJcbiAgICBjb25zdCBuZXdQbGF5bGlzdEJ1dHRvblN0eWxlcyA9IGNzc2BcclxuICAgICAgICAke3NpZGViYXJJY29uU3R5bGVzfTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICR7Y29sb3JzLmRhcmtHcmVlbn07XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBgO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZFNpZGViYXI+XHJcbiAgICAgICAgICAgIDxQbGF5bGlzdHNMaXN0PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXt7cGF0aG5hbWU6IFwiL1Nwb3RpZnlUaW5kZXJQYWdlXCIsIHF1ZXJ5OiB7cGxheWxpc3RJZDogJzJscGZKd25lN21iYjZnN0d6ZkhZeVUnLCBvbmVTb25nU2VlZDogXCI0OHRBZGpHNG5nMkpmRUNhN09RdWprXCJ9fX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjc3M9e25ld1BsYXlsaXN0QnV0dG9uU3R5bGVzfT5cclxuICAgICAgICAgICAgICAgICAgICA8RmFQbHVzIGNzcz17Y3NzKHtoZWlnaHQ6JzEwMCUnfSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICB7IHBsYXlsaXN0cyAmJiBwbGF5bGlzdHMubWFwKHBsYXlsaXN0ID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3BsYXlsaXN0cy8ke3BsYXlsaXN0LmlkfWB9IGtleT17cGxheWxpc3QuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5bGlzdC5pbWFnZXNbMF0gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5bGlzdC5pbWFnZXNbMF0udXJsIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvaW1hZ2VzL3Nwb3RpZnktbG9nby5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzPXtzaWRlYmFySWNvblN0eWxlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwbGF5bGlzdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwbGF5bGlzdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgPC9QbGF5bGlzdHNMaXN0PlxyXG5cclxuICAgICAgICA8L1N0eWxlZFNpZGViYXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9