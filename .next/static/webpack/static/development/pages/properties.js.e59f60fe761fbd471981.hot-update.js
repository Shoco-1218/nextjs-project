webpackHotUpdate("static\\development\\pages\\properties.js",{

/***/ "./pages/properties.js":
/*!*****************************!*\
  !*** ./pages/properties.js ***!
  \*****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavBar */ "./pages/NavBar.js");
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Head */ "./pages/Head.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Footer */ "./pages/Footer.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "C:\\Users\\shoko\\src\\URE3-Next.js\\ure-nextjs\\pages\\properties.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







;

function Index(_ref) {
  _s();

  var _this = this;

  var rows = _ref.rows,
      loggedIn = _ref.loggedIn;
  var addForm = !loggedIn ? null : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, message), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, "Add more property"), __jsx("form", {
    action: "/properties",
    method: "POST",
    id: "moreProperty",
    onSubmit: handleAddProperty,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "marginTop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlfo: "address",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, "Address of Property"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }), __jsx("input", {
    id: "address",
    type: "text",
    name: "address",
    placeholder: "Property Address",
    size: "36",
    required: true,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "marginTop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlfo: "inspection",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, "Inspection Date"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }), __jsx("input", {
    id: "inspection",
    type: "text",
    name: "inspection",
    placeholder: "Open xx/xx/ xx:xxam/pm",
    size: "36",
    required: true,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "marginTop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlfo: "image_path",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, "Title of the Image File"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }), __jsx("input", {
    id: "image_path",
    type: "text",
    name: "image_path",
    placeholder: "example.jpg",
    size: "36",
    required: true,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "marginTop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlfo: "agentName",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, "Agent's name"), __jsx("input", {
    id: "agentName",
    type: "text",
    name: "agentName",
    placeholder: "Full name",
    size: "36",
    required: true,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "marginTop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, "The number of Bed Rooms"), __jsx("div", {
    id: "radio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, "1", __jsx("input", {
    type: "radio",
    name: "bed",
    value: "1",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }), "2", __jsx("input", {
    type: "radio",
    name: "bed",
    value: "2",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }), "3", __jsx("input", {
    type: "radio",
    name: "bed",
    value: "3",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }), "4", __jsx("input", {
    type: "radio",
    name: "bed",
    value: "4",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }), "5", __jsx("input", {
    type: "radio",
    name: "bed",
    value: "5",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "marginTop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 11
    }
  }, "The number of Shower Rooms"), __jsx("div", {
    id: "radio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 11
    }
  }, "1", __jsx("input", {
    type: "radio",
    name: "shower",
    value: "1",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }
  }), "2", __jsx("input", {
    type: "radio",
    name: "shower",
    value: "2",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }
  }), "3", __jsx("input", {
    type: "radio",
    name: "shower",
    value: "3",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }
  }), "4", __jsx("input", {
    type: "radio",
    name: "shower",
    value: "4",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 13
    }
  }), "5", __jsx("input", {
    type: "radio",
    name: "shower",
    value: "5",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "marginTop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 11
    }
  }, "The number of Car Parking"), __jsx("div", {
    id: "radio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 11
    }
  }, "1", __jsx("input", {
    type: "radio",
    name: "car",
    value: "1",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 13
    }
  }), "2", __jsx("input", {
    type: "radio",
    name: "car",
    value: "2",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 13
    }
  }), "3", __jsx("input", {
    type: "radio",
    name: "car",
    value: "3",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 13
    }
  }), "4", __jsx("input", {
    type: "radio",
    name: "car",
    value: "4",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 13
    }
  }), "5", __jsx("input", {
    type: "radio",
    name: "car",
    value: "5",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 13
    }
  }))), __jsx("button", {
    type: "submit",
    id: "addPropertyBtn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 9
    }
  }, "OK")));

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    address: "",
    inspection: "",
    image_path: "",
    agentName: "",
    car: "",
    shower: "",
    bed: ""
  }),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      message = _useState2[0],
      setMessage = _useState2[1];

  function handleChange(e) {
    var target = e.target;
    setData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, target.name, target.value));
    });
  }

  function handleAddProperty(_x) {
    return _handleAddProperty.apply(this, arguments);
  }

  function _handleAddProperty() {
    _handleAddProperty = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.next = 3;
              return fetch('http://localhost:3000/api/moreproperties', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              });

            case 3:
              response = _context.sent;

              if (response.ok) {
                setMessage(__jsx("h3", {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 280,
                    columnNumber: 18
                  }
                }, "Successfully added!"));
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    return _handleAddProperty.apply(this, arguments);
  }

  var rowsMap = rows.map(function (row) {
    return __jsx("div", {
      className: "imgs",
      key: row.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 5
      }
    }, __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 7
      }
    }), __jsx("p", {
      className: "right",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 7
      }
    }, "Ultimo Real Estate"), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 7
      }
    }), __jsx("a", {
      target: "_blank",
      href: "./gallery?id=" + row.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 7
      }
    }, __jsx("img", {
      src: "static/" + row.image_path,
      alt: "Home1",
      id: "cardImg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 9
      }
    })), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 7
      }
    }), __jsx("h5", {
      className: "obi",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 7
      }
    }, row.name, __jsx("a", {
      href: "#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 9
      }
    }, __jsx("img", {
      src: "static/" + row.agents_photo,
      width: "70px;",
      height: "70px;",
      style: {
        borderRadius: '50%'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 11
      }
    }))), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 7
      }
    }), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 7
      }
    }, row.address), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 7
      }
    }), __jsx("p", {
      className: "icons",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 7
      }
    }, __jsx("img", {
      src: "static/bed.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 9
      }
    }), row.bed, __jsx("img", {
      src: "static/shower.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 9
      }
    }), row.shower, __jsx("img", {
      src: "static/car.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 9
      }
    }), row.bed), __jsx("p", {
      className: "inspe",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 7
      }
    }, __jsx("img", {
      src: "static/planner.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 9
      }
    }), " Inspection : ", row.inspection));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_Head__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 7
    }
  }, __jsx("header", {
    className: "elseHeader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "../static/estate-logo.svg",
    width: "300",
    height: "100",
    alt: "Ultimo Real Estate, Sydney, Australia",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 17
    }
  })))), __jsx(_NavBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 11
    }
  })), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "titleOfPage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 13
    }
  }, "Property of the Week")), __jsx("div", {
    className: "flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "grid-container-pro",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 13
    }
  }, rowsMap)), __jsx("div", {
    className: "addProperty",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 11
    }
  }, addForm)), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 9
    }
  })));
}

_s(Index, "pDFUWxVrAy73FDvPidqCCOMoV4M=");

_c = Index;
;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9wZXJ0aWVzLmpzIl0sIm5hbWVzIjpbIkluZGV4Iiwicm93cyIsImxvZ2dlZEluIiwiYWRkRm9ybSIsIm1lc3NhZ2UiLCJoYW5kbGVBZGRQcm9wZXJ0eSIsImhhbmRsZUNoYW5nZSIsInVzZVN0YXRlIiwiYWRkcmVzcyIsImluc3BlY3Rpb24iLCJpbWFnZV9wYXRoIiwiYWdlbnROYW1lIiwiY2FyIiwic2hvd2VyIiwiYmVkIiwiZGF0YSIsInNldERhdGEiLCJzZXRNZXNzYWdlIiwiZSIsInRhcmdldCIsInByZXYiLCJuYW1lIiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJvayIsInJvd3NNYXAiLCJtYXAiLCJyb3ciLCJpZCIsImFnZW50c19waG90byIsImJvcmRlclJhZGl1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBK0NDOztBQUdELFNBQVNBLEtBQVQsT0FBbUM7QUFBQTs7QUFBQTs7QUFBQSxNQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBRWpDLE1BQUlDLE9BQU8sR0FBRyxDQUFDRCxRQUFELEdBQVksSUFBWixHQUNkLG1FQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTUUsT0FBTixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRixFQUdJO0FBQ0UsVUFBTSxFQUFDLGFBRFQ7QUFFRSxVQUFNLEVBQUMsTUFGVDtBQUdFLE1BQUUsRUFBQyxjQUhMO0FBSUUsWUFBUSxFQUFJQyxpQkFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUU7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxVQUFNLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFDRSxNQUFFLEVBQUMsU0FETDtBQUVFLFFBQUksRUFBQyxNQUZQO0FBR0UsUUFBSSxFQUFDLFNBSFA7QUFJRSxlQUFXLEVBQUMsa0JBSmQ7QUFLRSxRQUFJLEVBQUMsSUFMUDtBQU1FLFlBQVEsTUFOVjtBQU9FLFlBQVEsRUFBSUMsWUFQZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FORixFQW1CRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFVBQU0sRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUNFLE1BQUUsRUFBQyxZQURMO0FBRUUsUUFBSSxFQUFDLE1BRlA7QUFHRSxRQUFJLEVBQUMsWUFIUDtBQUlFLGVBQVcsRUFBQyx3QkFKZDtBQUtFLFFBQUksRUFBQyxJQUxQO0FBTUUsWUFBUSxNQU5WO0FBT0UsWUFBUSxFQUFJQSxZQVBkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQW5CRixFQWdDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFVBQU0sRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUNFLE1BQUUsRUFBQyxZQURMO0FBRUUsUUFBSSxFQUFDLE1BRlA7QUFHRSxRQUFJLEVBQUMsWUFIUDtBQUlFLGVBQVcsRUFBQyxhQUpkO0FBS0UsUUFBSSxFQUFDLElBTFA7QUFNRSxZQUFRLE1BTlY7QUFPRSxZQUFRLEVBQUlBLFlBUGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBaENGLEVBNkNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sVUFBTSxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQ0UsTUFBRSxFQUFDLFdBREw7QUFFRSxRQUFJLEVBQUMsTUFGUDtBQUdFLFFBQUksRUFBQyxXQUhQO0FBSUUsZUFBVyxFQUFDLFdBSmQ7QUFLRSxRQUFJLEVBQUMsSUFMUDtBQU1FLFlBQVEsTUFOVjtBQU9FLFlBQVEsRUFBSUEsWUFQZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0E3Q0YsRUF5REU7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFERixFQUVFO0FBQUssTUFBRSxFQUFDLE9BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUVFO0FBQ0UsUUFBSSxFQUFDLE9BRFA7QUFFRSxRQUFJLEVBQUMsS0FGUDtBQUdFLFNBQUssRUFBQyxHQUhSO0FBSUUsWUFBUSxFQUFJQSxZQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixPQVNFO0FBQ0UsUUFBSSxFQUFDLE9BRFA7QUFFRSxRQUFJLEVBQUMsS0FGUDtBQUdFLFNBQUssRUFBQyxHQUhSO0FBSUUsWUFBUSxFQUFJQSxZQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixPQWdCRTtBQUNFLFFBQUksRUFBQyxPQURQO0FBRUUsUUFBSSxFQUFDLEtBRlA7QUFHRSxTQUFLLEVBQUMsR0FIUjtBQUlFLFlBQVEsRUFBSUEsWUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJGLE9BdUJFO0FBQ0UsUUFBSSxFQUFDLE9BRFA7QUFFRSxRQUFJLEVBQUMsS0FGUDtBQUdFLFNBQUssRUFBQyxHQUhSO0FBSUUsWUFBUSxFQUFJQSxZQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2QkYsT0E4QkU7QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLFFBQUksRUFBQyxLQUZQO0FBR0UsU0FBSyxFQUFDLEdBSFI7QUFJRSxZQUFRLEVBQUlBLFlBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlCRixDQUZGLENBekRGLEVBaUdFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREYsRUFFRTtBQUFLLE1BQUUsRUFBQyxPQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFFRTtBQUNFLFFBQUksRUFBQyxPQURQO0FBRUUsUUFBSSxFQUFDLFFBRlA7QUFHRSxTQUFLLEVBQUMsR0FIUjtBQUlFLFlBQVEsRUFBSUEsWUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsT0FTRTtBQUNFLFFBQUksRUFBQyxPQURQO0FBRUUsUUFBSSxFQUFDLFFBRlA7QUFHRSxTQUFLLEVBQUMsR0FIUjtBQUlFLFlBQVEsRUFBSUEsWUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsT0FnQkU7QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLFFBQUksRUFBQyxRQUZQO0FBR0UsU0FBSyxFQUFDLEdBSFI7QUFJRSxZQUFRLEVBQUlBLFlBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRixPQXVCRTtBQUNFLFFBQUksRUFBQyxPQURQO0FBRUUsUUFBSSxFQUFDLFFBRlA7QUFHRSxTQUFLLEVBQUMsR0FIUjtBQUlFLFlBQVEsRUFBSUEsWUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkJGLE9BOEJFO0FBQ0UsUUFBSSxFQUFDLE9BRFA7QUFFRSxRQUFJLEVBQUMsUUFGUDtBQUdFLFNBQUssRUFBQyxHQUhSO0FBSUUsWUFBUSxFQUFJQSxZQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE5QkYsQ0FGRixDQWpHRixFQXlJRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGLEVBRUU7QUFBSyxNQUFFLEVBQUMsT0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRUU7QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLFFBQUksRUFBQyxLQUZQO0FBR0UsU0FBSyxFQUFDLEdBSFI7QUFJRSxZQUFRLEVBQUlBLFlBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLE9BU0U7QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLFFBQUksRUFBQyxLQUZQO0FBR0UsU0FBSyxFQUFDLEdBSFI7QUFJRSxZQUFRLEVBQUlBLFlBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLE9BZ0JFO0FBQ0UsUUFBSSxFQUFDLE9BRFA7QUFFRSxRQUFJLEVBQUMsS0FGUDtBQUdFLFNBQUssRUFBQyxHQUhSO0FBSUUsWUFBUSxFQUFJQSxZQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQkYsT0F1QkU7QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLFFBQUksRUFBQyxLQUZQO0FBR0UsU0FBSyxFQUFDLEdBSFI7QUFJRSxZQUFRLEVBQUlBLFlBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZCRixPQThCRTtBQUNFLFFBQUksRUFBQyxPQURQO0FBRUUsUUFBSSxFQUFDLEtBRlA7QUFHRSxTQUFLLEVBQUMsR0FIUjtBQUlFLFlBQVEsRUFBSUEsWUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBOUJGLENBRkYsQ0F6SUYsRUFpTEU7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixNQUFFLEVBQUMsZ0JBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFqTEYsQ0FISixDQURBOztBQUZpQyxrQkEyTFRDLHNEQUFRLENBQzlCO0FBQ0VDLFdBQU8sRUFBRSxFQURYO0FBRUVDLGNBQVUsRUFBRSxFQUZkO0FBR0VDLGNBQVUsRUFBRSxFQUhkO0FBSUVDLGFBQVMsRUFBRSxFQUpiO0FBS0VDLE9BQUcsRUFBRSxFQUxQO0FBTUVDLFVBQU0sRUFBRSxFQU5WO0FBT0VDLE9BQUcsRUFBRTtBQVBQLEdBRDhCLENBM0xDO0FBQUEsTUEyTDFCQyxJQTNMMEI7QUFBQSxNQTJMcEJDLE9BM0xvQjs7QUFBQSxtQkFzTUhULHNEQUFRLENBQUMsRUFBRCxDQXRNTDtBQUFBLE1Bc00xQkgsT0F0TTBCO0FBQUEsTUFzTWpCYSxVQXRNaUI7O0FBd01qQyxXQUFTWCxZQUFULENBQXNCWSxDQUF0QixFQUF5QjtBQUN2QixRQUFJQyxNQUFNLEdBQUdELENBQUMsQ0FBQ0MsTUFBZjtBQUVBSCxXQUFPLENBQUMsVUFBQUksSUFBSTtBQUFBLDZDQUNQQSxJQURPLHFHQUVURCxNQUFNLENBQUNFLElBRkUsRUFFS0YsTUFBTSxDQUFDRyxLQUZaO0FBQUEsS0FBTCxDQUFQO0FBTUQ7O0FBak5nQyxXQW1ObEJqQixpQkFuTmtCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDBNQW1OakMsaUJBQWlDYSxDQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRUEsZUFBQyxDQUFDSyxjQUFGO0FBREY7QUFBQSxxQkFFdUJDLEtBQUssQ0FBQywwQ0FBRCxFQUMxQjtBQUNFQyxzQkFBTSxFQUFFLE1BRFY7QUFFRUMsdUJBQU8sRUFBRTtBQUNQLGtDQUFnQjtBQURULGlCQUZYO0FBS0VDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlZCxJQUFmO0FBTFIsZUFEMEIsQ0FGNUI7O0FBQUE7QUFFTWUsc0JBRk47O0FBVUUsa0JBQUdBLFFBQVEsQ0FBQ0MsRUFBWixFQUFnQjtBQUNkZCwwQkFBVSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUNBQUQsQ0FBVjtBQUNEOztBQVpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBbk5pQztBQUFBO0FBQUE7O0FBa09qQyxNQUFJZSxPQUFPLEdBQUcvQixJQUFJLENBQUNnQyxHQUFMLENBQVMsVUFBQUMsR0FBRztBQUFBLFdBRXhCO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBc0IsU0FBRyxFQUFFQSxHQUFHLENBQUNDLEVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFHLGVBQVMsRUFBQyxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEYsRUFJRTtBQUFHLFlBQU0sRUFBQyxRQUFWO0FBQW1CLFVBQUksRUFBRSxrQkFBa0JELEdBQUcsQ0FBQ0MsRUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssU0FBRyxFQUFFLFlBQVlELEdBQUcsQ0FBQ3hCLFVBQTFCO0FBQXNDLFNBQUcsRUFBQyxPQUExQztBQUNFLFFBQUUsRUFBQyxTQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQUpGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVJGLEVBU0U7QUFBSSxlQUFTLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0d3QixHQUFHLENBQUNiLElBRFAsRUFFRTtBQUFHLFVBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBRSxZQUFZYSxHQUFHLENBQUNFLFlBQTFCO0FBQXdDLFdBQUssRUFBQyxPQUE5QztBQUNFLFlBQU0sRUFBQyxPQURUO0FBQ2lCLFdBQUssRUFBRTtBQUFFQyxvQkFBWSxFQUFFO0FBQWhCLE9BRHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQUZGLENBVEYsRUFnQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWhCRixFQWlCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtILEdBQUcsQ0FBQzFCLE9BQVQsQ0FqQkYsRUFrQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWxCRixFQW1CRTtBQUFHLGVBQVMsRUFBQyxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBQyxnQkFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFDK0IwQixHQUFHLENBQUNwQixHQURuQyxFQUVFO0FBQUssU0FBRyxFQUFDLG1CQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixFQUVrQ29CLEdBQUcsQ0FBQ3JCLE1BRnRDLEVBR0U7QUFBSyxTQUFHLEVBQUMsZ0JBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhGLEVBRytCcUIsR0FBRyxDQUFDcEIsR0FIbkMsQ0FuQkYsRUF3QkU7QUFBRyxlQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxTQUFHLEVBQUMsb0JBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLG9CQUNpRG9CLEdBQUcsQ0FBQ3pCLFVBRHJELENBeEJGLENBRndCO0FBQUEsR0FBWixDQUFkO0FBaUNBLFNBQ0UsbUVBRUUsTUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBQyxZQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLDJCQUFUO0FBQXFDLFNBQUssRUFBQyxLQUEzQztBQUFpRCxVQUFNLEVBQUMsS0FBeEQ7QUFDRSxPQUFHLEVBQUMsdUNBRE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FERixDQURGLEVBU0UsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsQ0FERixFQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLENBREYsRUFLRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0d1QixPQURILENBREYsQ0FMRixFQVVFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLN0IsT0FETCxDQVZGLENBYkYsRUEyQkUsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0JGLENBSEYsQ0FERjtBQW9DRDs7R0F2U1FILEs7O0tBQUFBLEs7QUF1U1I7O0FBR2NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwcm9wZXJ0aWVzLmpzLmU1OWY2MGZlNzYxZmJkNDcxOTgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2QmFyIGZyb20gJy4vTmF2QmFyJztcclxuaW1wb3J0IE1ldGFIZWFkIGZyb20gJy4vSGVhZCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBxdWVyeUFzeW5jIGZyb20gJy4uL215c3FsJztcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBcIi4uL3N0eWxlLmNzc1wiXHJcblxyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0UHJvcGVydGllcygpIHtcclxuICBsZXQgZGJkYXRhID0gYXdhaXQgcXVlcnlBc3luYyhgXHJcbiAgU0VMRUNUIHByb3BlcnR5LmlkLCBwcm9wZXJ0eS5hZGRyZXNzLCBwcm9wZXJ0eS5pbWFnZV9wYXRoLCBwcm9wZXJ0eS5pbnNwZWN0aW9uLCBcclxuICBwcm9wZXJ0eS5iZWQsIHByb3BlcnR5LnNob3dlciwgcHJvcGVydHkuY2FyLCBhZ2VudHMubmFtZSwgYWdlbnRzLmFnZW50c19waG90byBcclxuICBGUk9NIHByb3BlcnR5IFxyXG4gIEpPSU4gYWdlbnRzIE9OIHByb3BlcnR5LmFnZW50X2lkID0gYWdlbnRzLmlkO1xyXG4gIGApO1xyXG5cclxuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYmRhdGEpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tDb29raWVzKGNvbnRleHQpIHtcclxuICBjb25zdCByZWdleCA9IC9sb2dJbkNvb2tpZVxcPShbQS1aYS16MC05XFwuXFxfXFwtXSspLztcclxuICBsZXQgZGVjb2RlZDtcclxuICBsZXQgYWdlbnRMb2dnZWRJbiA9IGZhbHNlO1xyXG5cclxuICB0cnkge1xyXG4gICAgbGV0IGNvb2tpZSA9IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llO1xyXG4gICAgbGV0IHRva2VuID0gY29va2llLm1hdGNoKHJlZ2V4KVsxXTtcclxuICAgIGRlY29kZWQgPSBqd3QudmVyaWZ5KHRva2VuLCAnU2hva29EaWRJdCcpO1xyXG4gICAgaWYoZGVjb2RlZC5yb2xlID09PSBcImFnZW50XCIpIHtcclxuICAgICAgYWdlbnRMb2dnZWRJbiA9IHRydWU7XHJcbiAgICAgIHJldHVybiBhZ2VudExvZ2dlZEluO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHJldHVybiBhZ2VudExvZ2dlZEluO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuIGFnZW50TG9nZ2VkSW47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuXHJcbiAgbGV0IHJvd3MgPSBhd2FpdCBnZXRQcm9wZXJ0aWVzKCk7XHJcbiAgbGV0IGxvZ2dlZEluID0gY2hlY2tDb29raWVzKGNvbnRleHQpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcm93cyxcclxuICAgICAgbG9nZ2VkSW5cclxuICAgIH0sXHJcbiAgfVxyXG59O1xyXG5cclxuXHJcbmZ1bmN0aW9uIEluZGV4KHsgcm93cywgbG9nZ2VkSW4gfSkge1xyXG5cclxuICBsZXQgYWRkRm9ybSA9ICFsb2dnZWRJbiA/IG51bGwgOlxyXG4gIDw+XHJcbiAgICA8ZGl2PnttZXNzYWdlfTwvZGl2PlxyXG4gICAgPGgyID5BZGQgbW9yZSBwcm9wZXJ0eTwvaDI+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgYWN0aW9uPVwiL3Byb3BlcnRpZXNcIlxyXG4gICAgICAgIG1ldGhvZD1cIlBPU1RcIlxyXG4gICAgICAgIGlkPVwibW9yZVByb3BlcnR5XCJcclxuICAgICAgICBvblN1Ym1pdCA9IHtoYW5kbGVBZGRQcm9wZXJ0eX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFyZ2luVG9wXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbGZvPVwiYWRkcmVzc1wiPkFkZHJlc3Mgb2YgUHJvcGVydHk8L2xhYmVsPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJhZGRyZXNzXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiYWRkcmVzc1wiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJvcGVydHkgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgIHNpemU9XCIzNlwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlID0ge2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJnaW5Ub3BcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sZm89XCJpbnNwZWN0aW9uXCI+SW5zcGVjdGlvbiBEYXRlPC9sYWJlbD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwiaW5zcGVjdGlvblwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cImluc3BlY3Rpb25cIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9wZW4geHgveHgvIHh4Onh4YW0vcG1cIlxyXG4gICAgICAgICAgICBzaXplPVwiMzZcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBvbkNoYW5nZSA9IHtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFyZ2luVG9wXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbGZvPVwiaW1hZ2VfcGF0aFwiPlRpdGxlIG9mIHRoZSBJbWFnZSBGaWxlPC9sYWJlbD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwiaW1hZ2VfcGF0aFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cImltYWdlX3BhdGhcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImV4YW1wbGUuanBnXCJcclxuICAgICAgICAgICAgc2l6ZT1cIjM2XCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgb25DaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmdpblRvcFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxmbz1cImFnZW50TmFtZVwiPkFnZW50J3MgbmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJhZ2VudE5hbWVcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJhZ2VudE5hbWVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZ1bGwgbmFtZVwiXHJcbiAgICAgICAgICAgIHNpemU9XCIzNlwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlID0ge2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJnaW5Ub3BcIj5cclxuICAgICAgICAgIDxsYWJlbCA+VGhlIG51bWJlciBvZiBCZWQgUm9vbXM8L2xhYmVsPlxyXG4gICAgICAgICAgPGRpdiBpZD1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJiZWRcIiBcclxuICAgICAgICAgICAgICB2YWx1ZT1cIjFcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgMlxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXHJcbiAgICAgICAgICAgICAgbmFtZT1cImJlZFwiIFxyXG4gICAgICAgICAgICAgIHZhbHVlPVwiMlwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAzXHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIiBcclxuICAgICAgICAgICAgICBuYW1lPVwiYmVkXCIgXHJcbiAgICAgICAgICAgICAgdmFsdWU9XCIzXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtoYW5kbGVDaGFuZ2V9IFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA0XHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIiBcclxuICAgICAgICAgICAgICBuYW1lPVwiYmVkXCIgXHJcbiAgICAgICAgICAgICAgdmFsdWU9XCI0XCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDVcclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJiZWRcIiBcclxuICAgICAgICAgICAgICB2YWx1ZT1cIjVcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFyZ2luVG9wXCI+XHJcbiAgICAgICAgICA8bGFiZWwgPlRoZSBudW1iZXIgb2YgU2hvd2VyIFJvb21zPC9sYWJlbD5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAxXHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIiBcclxuICAgICAgICAgICAgICBuYW1lPVwic2hvd2VyXCIgXHJcbiAgICAgICAgICAgICAgdmFsdWU9XCIxXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtoYW5kbGVDaGFuZ2V9IFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAyXHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIiBcclxuICAgICAgICAgICAgICBuYW1lPVwic2hvd2VyXCIgXHJcbiAgICAgICAgICAgICAgdmFsdWU9XCIyXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDNcclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJzaG93ZXJcIiBcclxuICAgICAgICAgICAgICB2YWx1ZT1cIjNcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgNFxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXHJcbiAgICAgICAgICAgICAgbmFtZT1cInNob3dlclwiIFxyXG4gICAgICAgICAgICAgIHZhbHVlPVwiNFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgNVxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXHJcbiAgICAgICAgICAgICAgbmFtZT1cInNob3dlclwiIFxyXG4gICAgICAgICAgICAgIHZhbHVlPVwiNVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJnaW5Ub3BcIj5cclxuICAgICAgICAgIDxsYWJlbCA+VGhlIG51bWJlciBvZiBDYXIgUGFya2luZzwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXHJcbiAgICAgICAgICAgICAgbmFtZT1cImNhclwiIFxyXG4gICAgICAgICAgICAgIHZhbHVlPVwiMVwiIFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2hhbmRsZUNoYW5nZX0gXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJjYXJcIiBcclxuICAgICAgICAgICAgICB2YWx1ZT1cIjJcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2hhbmRsZUNoYW5nZX0gXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDNcclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJjYXJcIiBcclxuICAgICAgICAgICAgICB2YWx1ZT1cIjNcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgNFxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXHJcbiAgICAgICAgICAgICAgbmFtZT1cImNhclwiIFxyXG4gICAgICAgICAgICAgIHZhbHVlPVwiNFwiIFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgNVxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXHJcbiAgICAgICAgICAgICAgbmFtZT1cImNhclwiIFxyXG4gICAgICAgICAgICAgIHZhbHVlPVwiNVwiIFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBpZD1cImFkZFByb3BlcnR5QnRuXCI+T0s8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC8+O1xyXG5cclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShcclxuICAgIHtcclxuICAgICAgYWRkcmVzczogXCJcIixcclxuICAgICAgaW5zcGVjdGlvbjogXCJcIixcclxuICAgICAgaW1hZ2VfcGF0aDogXCJcIixcclxuICAgICAgYWdlbnROYW1lOiBcIlwiLFxyXG4gICAgICBjYXI6IFwiXCIsXHJcbiAgICAgIHNob3dlcjogXCJcIixcclxuICAgICAgYmVkOiBcIlwiXHJcbiAgICB9XHJcbiAgKVxyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xyXG4gICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG5cclxuICAgIHNldERhdGEocHJldiA9PiAoe1xyXG4gICAgICAuLi5wcmV2LFxyXG4gICAgICBbdGFyZ2V0Lm5hbWVdOiB0YXJnZXQudmFsdWVcclxuICAgIH0pXHJcbiAgICApO1xyXG5cclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUFkZFByb3BlcnR5KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL21vcmVwcm9wZXJ0aWVzJywgXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICB9KVxyXG4gICAgaWYocmVzcG9uc2Uub2spIHtcclxuICAgICAgc2V0TWVzc2FnZSg8aDM+U3VjY2Vzc2Z1bGx5IGFkZGVkITwvaDM+KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGV0IHJvd3NNYXAgPSByb3dzLm1hcChyb3cgPT5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ3NcIiBrZXk9e3Jvdy5pZH0gPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicmlnaHRcIj5VbHRpbW8gUmVhbCBFc3RhdGU8L3A+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtcIi4vZ2FsbGVyeT9pZD1cIiArIHJvdy5pZH0+XHJcbiAgICAgICAgPGltZyBzcmM9e1wic3RhdGljL1wiICsgcm93LmltYWdlX3BhdGh9IGFsdD1cIkhvbWUxXCJcclxuICAgICAgICAgIGlkPVwiY2FyZEltZ1wiIC8+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxoNSBjbGFzc05hbWU9XCJvYmlcIj5cclxuICAgICAgICB7cm93Lm5hbWV9XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPXtcInN0YXRpYy9cIiArIHJvdy5hZ2VudHNfcGhvdG99IHdpZHRoPVwiNzBweDtcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCI3MHB4O1wiIHN0eWxlPXt7IGJvcmRlclJhZGl1czogJzUwJScgfX0gLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvaDU+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8aDQ+e3Jvdy5hZGRyZXNzfTwvaDQ+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJpY29uc1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwic3RhdGljL2JlZC5wbmdcIiAvPntyb3cuYmVkfVxyXG4gICAgICAgIDxpbWcgc3JjPVwic3RhdGljL3Nob3dlci5wbmdcIiAvPntyb3cuc2hvd2VyfVxyXG4gICAgICAgIDxpbWcgc3JjPVwic3RhdGljL2Nhci5wbmdcIiAvPntyb3cuYmVkfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImluc3BlXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvcGxhbm5lci5wbmdcIiAvPiBJbnNwZWN0aW9uIDoge3Jvdy5pbnNwZWN0aW9ufVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcblxyXG4gICAgICA8TWV0YUhlYWQgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT0nZWxzZUhlYWRlcic+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvZXN0YXRlLWxvZ28uc3ZnXCIgd2lkdGg9XCIzMDBcIiBoZWlnaHQ9XCIxMDBcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJVbHRpbW8gUmVhbCBFc3RhdGUsIFN5ZG5leSwgQXVzdHJhbGlhXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPE5hdkJhciAvPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVPZlBhZ2VcIj5cclxuICAgICAgICAgICAgPGgxPlByb3BlcnR5IG9mIHRoZSBXZWVrPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyLXByb1wiPlxyXG4gICAgICAgICAgICAgIHtyb3dzTWFwfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGRQcm9wZXJ0eVwiPlxyXG4gICAgICAgICAgICAgIHthZGRGb3JtfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC8+XHJcbiAgKVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=