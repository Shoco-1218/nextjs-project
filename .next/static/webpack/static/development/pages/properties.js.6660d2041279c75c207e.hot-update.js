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
                  style: {
                    color: "red",
                    textAlign: "center"
                  },
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 279,
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
        lineNumber: 288,
        columnNumber: 5
      }
    }, __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 7
      }
    }), __jsx("p", {
      className: "right",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 7
      }
    }, "Ultimo Real Estate"), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 7
      }
    }), __jsx("a", {
      target: "_blank",
      href: "./gallery?id=" + row.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 7
      }
    }, __jsx("img", {
      src: "static/" + row.image_path,
      alt: "Home1",
      id: "cardImg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 9
      }
    })), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 7
      }
    }), __jsx("h5", {
      className: "obi",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 7
      }
    }, row.name, __jsx("a", {
      href: "#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299,
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
        lineNumber: 300,
        columnNumber: 11
      }
    }))), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 7
      }
    }), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 7
      }
    }, row.address), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 7
      }
    }), __jsx("p", {
      className: "icons",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 7
      }
    }, __jsx("img", {
      src: "static/bed.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 9
      }
    }), row.bed, __jsx("img", {
      src: "static/shower.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 9
      }
    }), row.shower, __jsx("img", {
      src: "static/car.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 9
      }
    }), row.bed), __jsx("p", {
      className: "inspe",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 7
      }
    }, __jsx("img", {
      src: "static/planner.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 9
      }
    }), " Inspection : ", row.inspection));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_Head__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 7
    }
  }, __jsx("header", {
    className: "elseHeader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
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
      lineNumber: 328,
      columnNumber: 17
    }
  })))), __jsx(_NavBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 11
    }
  })), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "titleOfPage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 13
    }
  }, "Property of the Week")), __jsx("div", {
    className: "flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "grid-container-pro",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 13
    }
  }, rowsMap)), __jsx("div", {
    className: "addProperty",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 11
    }
  }, addForm)), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 9
    }
  })));
}

_s(Index, "3f71IvBHRAEYfykEkkisrAenooQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9wZXJ0aWVzLmpzIl0sIm5hbWVzIjpbIkluZGV4Iiwicm93cyIsImxvZ2dlZEluIiwiYWRkRm9ybSIsIm1lc3NhZ2UiLCJoYW5kbGVBZGRQcm9wZXJ0eSIsImhhbmRsZUNoYW5nZSIsInVzZVN0YXRlIiwiYWRkcmVzcyIsImluc3BlY3Rpb24iLCJpbWFnZV9wYXRoIiwiYWdlbnROYW1lIiwiY2FyIiwic2hvd2VyIiwiYmVkIiwiZGF0YSIsInNldERhdGEiLCJlIiwidGFyZ2V0IiwicHJldiIsIm5hbWUiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsIm9rIiwic2V0TWVzc2FnZSIsImNvbG9yIiwidGV4dEFsaWduIiwicm93c01hcCIsIm1hcCIsInJvdyIsImlkIiwiYWdlbnRzX3Bob3RvIiwiYm9yZGVyUmFkaXVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUErQ0M7O0FBR0QsU0FBU0EsS0FBVCxPQUFtQztBQUFBOztBQUFBOztBQUFBLE1BQWxCQyxJQUFrQixRQUFsQkEsSUFBa0I7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFFakMsTUFBSUMsT0FBTyxHQUFHLENBQUNELFFBQUQsR0FBWSxJQUFaLEdBQ2QsbUVBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNRSxPQUFOLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGLEVBR0k7QUFDRSxVQUFNLEVBQUMsYUFEVDtBQUVFLFVBQU0sRUFBQyxNQUZUO0FBR0UsTUFBRSxFQUFDLGNBSEw7QUFJRSxZQUFRLEVBQUlDLGlCQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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TUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHeUIsT0FESCxDQURGLENBTEYsRUFVRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSy9CLE9BREwsQ0FWRixDQWJGLEVBMkJFLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNCRixDQUhGLENBREY7QUFvQ0Q7O0dBelNRSCxLOztLQUFBQSxLO0FBeVNSOztBQUdjQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccHJvcGVydGllcy5qcy42NjYwZDIwNDEyNzljNzVjMjA3ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdkJhciBmcm9tICcuL05hdkJhcic7XHJcbmltcG9ydCBNZXRhSGVhZCBmcm9tICcuL0hlYWQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgcXVlcnlBc3luYyBmcm9tICcuLi9teXNxbCc7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgXCIuLi9zdHlsZS5jc3NcIlxyXG5cclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFByb3BlcnRpZXMoKSB7XHJcbiAgbGV0IGRiZGF0YSA9IGF3YWl0IHF1ZXJ5QXN5bmMoYFxyXG4gIFNFTEVDVCBwcm9wZXJ0eS5pZCwgcHJvcGVydHkuYWRkcmVzcywgcHJvcGVydHkuaW1hZ2VfcGF0aCwgcHJvcGVydHkuaW5zcGVjdGlvbiwgXHJcbiAgcHJvcGVydHkuYmVkLCBwcm9wZXJ0eS5zaG93ZXIsIHByb3BlcnR5LmNhciwgYWdlbnRzLm5hbWUsIGFnZW50cy5hZ2VudHNfcGhvdG8gXHJcbiAgRlJPTSBwcm9wZXJ0eSBcclxuICBKT0lOIGFnZW50cyBPTiBwcm9wZXJ0eS5hZ2VudF9pZCA9IGFnZW50cy5pZDtcclxuICBgKTtcclxuXHJcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGJkYXRhKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrQ29va2llcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgcmVnZXggPSAvbG9nSW5Db29raWVcXD0oW0EtWmEtejAtOVxcLlxcX1xcLV0rKS87XHJcbiAgbGV0IGRlY29kZWQ7XHJcbiAgbGV0IGFnZW50TG9nZ2VkSW4gPSBmYWxzZTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGxldCBjb29raWUgPSBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZTtcclxuICAgIGxldCB0b2tlbiA9IGNvb2tpZS5tYXRjaChyZWdleClbMV07XHJcbiAgICBkZWNvZGVkID0gand0LnZlcmlmeSh0b2tlbiwgJ1Nob2tvRGlkSXQnKTtcclxuICAgIGlmKGRlY29kZWQucm9sZSA9PT0gXCJhZ2VudFwiKSB7XHJcbiAgICAgIGFnZW50TG9nZ2VkSW4gPSB0cnVlO1xyXG4gICAgICByZXR1cm4gYWdlbnRMb2dnZWRJbjtcclxuICAgIH1lbHNle1xyXG4gICAgICByZXR1cm4gYWdlbnRMb2dnZWRJbjtcclxuICAgIH1cclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBhZ2VudExvZ2dlZEluO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcblxyXG4gIGxldCByb3dzID0gYXdhaXQgZ2V0UHJvcGVydGllcygpO1xyXG4gIGxldCBsb2dnZWRJbiA9IGNoZWNrQ29va2llcyhjb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHJvd3MsXHJcbiAgICAgIGxvZ2dlZEluXHJcbiAgICB9LFxyXG4gIH1cclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBJbmRleCh7IHJvd3MsIGxvZ2dlZEluIH0pIHtcclxuXHJcbiAgbGV0IGFkZEZvcm0gPSAhbG9nZ2VkSW4gPyBudWxsIDpcclxuICA8PlxyXG4gICAgPGRpdj57bWVzc2FnZX08L2Rpdj5cclxuICAgIDxoMiA+QWRkIG1vcmUgcHJvcGVydHk8L2gyPlxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgIGFjdGlvbj1cIi9wcm9wZXJ0aWVzXCJcclxuICAgICAgICBtZXRob2Q9XCJQT1NUXCJcclxuICAgICAgICBpZD1cIm1vcmVQcm9wZXJ0eVwiXHJcbiAgICAgICAgb25TdWJtaXQgPSB7aGFuZGxlQWRkUHJvcGVydHl9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmdpblRvcFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxmbz1cImFkZHJlc3NcIj5BZGRyZXNzIG9mIFByb3BlcnR5PC9sYWJlbD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwiYWRkcmVzc1wiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cImFkZHJlc3NcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByb3BlcnR5IEFkZHJlc3NcIlxyXG4gICAgICAgICAgICBzaXplPVwiMzZcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBvbkNoYW5nZSA9IHtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFyZ2luVG9wXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbGZvPVwiaW5zcGVjdGlvblwiPkluc3BlY3Rpb24gRGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBpZD1cImluc3BlY3Rpb25cIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJpbnNwZWN0aW9uXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPcGVuIHh4L3h4LyB4eDp4eGFtL3BtXCJcclxuICAgICAgICAgICAgc2l6ZT1cIjM2XCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgb25DaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmdpblRvcFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxmbz1cImltYWdlX3BhdGhcIj5UaXRsZSBvZiB0aGUgSW1hZ2UgRmlsZTwvbGFiZWw+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBpZD1cImltYWdlX3BhdGhcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJpbWFnZV9wYXRoXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJleGFtcGxlLmpwZ1wiXHJcbiAgICAgICAgICAgIHNpemU9XCIzNlwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlID0ge2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJnaW5Ub3BcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sZm89XCJhZ2VudE5hbWVcIj5BZ2VudCdzIG5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwiYWdlbnROYW1lXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiYWdlbnROYW1lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGdWxsIG5hbWVcIlxyXG4gICAgICAgICAgICBzaXplPVwiMzZcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBvbkNoYW5nZSA9IHtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFyZ2luVG9wXCI+XHJcbiAgICAgICAgICA8bGFiZWwgPlRoZSBudW1iZXIgb2YgQmVkIFJvb21zPC9sYWJlbD5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAxXHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIiBcclxuICAgICAgICAgICAgICBuYW1lPVwiYmVkXCIgXHJcbiAgICAgICAgICAgICAgdmFsdWU9XCIxXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJiZWRcIiBcclxuICAgICAgICAgICAgICB2YWx1ZT1cIjJcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXHJcbiAgICAgICAgICAgICAgbmFtZT1cImJlZFwiIFxyXG4gICAgICAgICAgICAgIHZhbHVlPVwiM1wiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgNFxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXHJcbiAgICAgICAgICAgICAgbmFtZT1cImJlZFwiIFxyXG4gICAgICAgICAgICAgIHZhbHVlPVwiNFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA1XHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIiBcclxuICAgICAgICAgICAgICBuYW1lPVwiYmVkXCIgXHJcbiAgICAgICAgICAgICAgdmFsdWU9XCI1XCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmdpblRvcFwiPlxyXG4gICAgICAgICAgPGxhYmVsID5UaGUgbnVtYmVyIG9mIFNob3dlciBSb29tczwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXHJcbiAgICAgICAgICAgICAgbmFtZT1cInNob3dlclwiIFxyXG4gICAgICAgICAgICAgIHZhbHVlPVwiMVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgMlxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXHJcbiAgICAgICAgICAgICAgbmFtZT1cInNob3dlclwiIFxyXG4gICAgICAgICAgICAgIHZhbHVlPVwiMlwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAzXHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIiBcclxuICAgICAgICAgICAgICBuYW1lPVwic2hvd2VyXCIgXHJcbiAgICAgICAgICAgICAgdmFsdWU9XCIzXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDRcclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJzaG93ZXJcIiBcclxuICAgICAgICAgICAgICB2YWx1ZT1cIjRcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2hhbmRsZUNoYW5nZX0gXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDVcclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJzaG93ZXJcIiBcclxuICAgICAgICAgICAgICB2YWx1ZT1cIjVcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFyZ2luVG9wXCI+XHJcbiAgICAgICAgICA8bGFiZWwgPlRoZSBudW1iZXIgb2YgQ2FyIFBhcmtpbmc8L2xhYmVsPlxyXG4gICAgICAgICAgPGRpdiBpZD1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJjYXJcIiBcclxuICAgICAgICAgICAgICB2YWx1ZT1cIjFcIiBcclxuICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtoYW5kbGVDaGFuZ2V9IFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAyXHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIiBcclxuICAgICAgICAgICAgICBuYW1lPVwiY2FyXCIgXHJcbiAgICAgICAgICAgICAgdmFsdWU9XCIyXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtoYW5kbGVDaGFuZ2V9IFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAzXHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIiBcclxuICAgICAgICAgICAgICBuYW1lPVwiY2FyXCIgXHJcbiAgICAgICAgICAgICAgdmFsdWU9XCIzXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDRcclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJjYXJcIiBcclxuICAgICAgICAgICAgICB2YWx1ZT1cIjRcIiBcclxuICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDVcclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJjYXJcIiBcclxuICAgICAgICAgICAgICB2YWx1ZT1cIjVcIiBcclxuICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgaWQ9XCJhZGRQcm9wZXJ0eUJ0blwiPk9LPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvPjtcclxuXHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoXHJcbiAgICB7XHJcbiAgICAgIGFkZHJlc3M6IFwiXCIsXHJcbiAgICAgIGluc3BlY3Rpb246IFwiXCIsXHJcbiAgICAgIGltYWdlX3BhdGg6IFwiXCIsXHJcbiAgICAgIGFnZW50TmFtZTogXCJcIixcclxuICAgICAgY2FyOiBcIlwiLFxyXG4gICAgICBzaG93ZXI6IFwiXCIsXHJcbiAgICAgIGJlZDogXCJcIlxyXG4gICAgfVxyXG4gIClcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcclxuICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcclxuXHJcbiAgICBzZXREYXRhKHByZXYgPT4gKHtcclxuICAgICAgLi4ucHJldixcclxuICAgICAgW3RhcmdldC5uYW1lXTogdGFyZ2V0LnZhbHVlXHJcbiAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVBZGRQcm9wZXJ0eShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9tb3JlcHJvcGVydGllcycsIFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfSlcclxuICAgIGlmKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHNldE1lc3NhZ2UoPGgzIHN0eWxlID0ge3tjb2xvcjogXCJyZWRcIiwgdGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICBTdWNjZXNzZnVsbHkgYWRkZWQhXHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGV0IHJvd3NNYXAgPSByb3dzLm1hcChyb3cgPT5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ3NcIiBrZXk9e3Jvdy5pZH0gPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicmlnaHRcIj5VbHRpbW8gUmVhbCBFc3RhdGU8L3A+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtcIi4vZ2FsbGVyeT9pZD1cIiArIHJvdy5pZH0+XHJcbiAgICAgICAgPGltZyBzcmM9e1wic3RhdGljL1wiICsgcm93LmltYWdlX3BhdGh9IGFsdD1cIkhvbWUxXCJcclxuICAgICAgICAgIGlkPVwiY2FyZEltZ1wiIC8+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxoNSBjbGFzc05hbWU9XCJvYmlcIj5cclxuICAgICAgICB7cm93Lm5hbWV9XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPXtcInN0YXRpYy9cIiArIHJvdy5hZ2VudHNfcGhvdG99IHdpZHRoPVwiNzBweDtcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCI3MHB4O1wiIHN0eWxlPXt7IGJvcmRlclJhZGl1czogJzUwJScgfX0gLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvaDU+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8aDQ+e3Jvdy5hZGRyZXNzfTwvaDQ+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJpY29uc1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwic3RhdGljL2JlZC5wbmdcIiAvPntyb3cuYmVkfVxyXG4gICAgICAgIDxpbWcgc3JjPVwic3RhdGljL3Nob3dlci5wbmdcIiAvPntyb3cuc2hvd2VyfVxyXG4gICAgICAgIDxpbWcgc3JjPVwic3RhdGljL2Nhci5wbmdcIiAvPntyb3cuYmVkfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImluc3BlXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvcGxhbm5lci5wbmdcIiAvPiBJbnNwZWN0aW9uIDoge3Jvdy5pbnNwZWN0aW9ufVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcblxyXG4gICAgICA8TWV0YUhlYWQgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT0nZWxzZUhlYWRlcic+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvZXN0YXRlLWxvZ28uc3ZnXCIgd2lkdGg9XCIzMDBcIiBoZWlnaHQ9XCIxMDBcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJVbHRpbW8gUmVhbCBFc3RhdGUsIFN5ZG5leSwgQXVzdHJhbGlhXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPE5hdkJhciAvPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVPZlBhZ2VcIj5cclxuICAgICAgICAgICAgPGgxPlByb3BlcnR5IG9mIHRoZSBXZWVrPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyLXByb1wiPlxyXG4gICAgICAgICAgICAgIHtyb3dzTWFwfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGRQcm9wZXJ0eVwiPlxyXG4gICAgICAgICAgICAgIHthZGRGb3JtfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC8+XHJcbiAgKVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=