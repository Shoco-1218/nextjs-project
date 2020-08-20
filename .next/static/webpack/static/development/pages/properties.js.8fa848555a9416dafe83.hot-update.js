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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar */ "./pages/NavBar.js");
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Head */ "./pages/Head.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./pages/Footer.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\shoko\\src\\URE3-Next.js\\ure-nextjs\\pages\\properties.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






;

function Index(_ref) {
  _s();

  var _this = this;

  var rows = _ref.rows,
      loggedIn = _ref.loggedIn;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      addProperty = _useState[0],
      setAddProperty = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (loggedIn) {
      setAddProperty(addForm);
    }
  }, []);

  var addForm = __jsx("div", {
    className: "addProperty",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 3
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, "Add more property"), __jsx("form", {
    action: "/moreproperty",
    method: "POST",
    id: "moreProperty",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "marginTop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx("label", {
    "for": "address",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, "Address of Property"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }), __jsx("input", {
    id: "address",
    type: "text",
    name: "address",
    placeholder: "Property Address",
    size: "36",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "marginTop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, __jsx("label", {
    "for": "inspection",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, "Inspection Date"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }), __jsx("input", {
    id: "inspection",
    type: "text",
    name: "inspection",
    placeholder: "Open xx/xx/ xx:xxam/pm",
    size: "36",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "marginTop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, __jsx("label", {
    "for": "image_path",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, "Tytle of the Image File"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }), __jsx("input", {
    id: "image_path",
    type: "text",
    name: "image_path",
    placeholder: "example.jpg",
    size: "36",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "marginTop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx("label", {
    "for": "agentName",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, "Agent's name"), __jsx("input", {
    id: "agentName",
    type: "text",
    name: "agentName",
    placeholder: "Full name",
    size: "36",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "marginTop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, "The number of Bed Rooms"), __jsx("div", {
    id: "radio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, "1", __jsx("input", {
    type: "radio",
    name: "bed",
    value: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }), "2", __jsx("input", {
    type: "radio",
    name: "bed",
    value: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }), "3", __jsx("input", {
    type: "radio",
    name: "bed",
    value: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }), "4", __jsx("input", {
    type: "radio",
    name: "bed",
    value: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }), "5", __jsx("input", {
    type: "radio",
    name: "bed",
    value: "5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "marginTop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 11
    }
  }, "The number of Shower Rooms"), __jsx("div", {
    id: "radio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, "1", __jsx("input", {
    type: "radio",
    name: "shower",
    value: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }), "2", __jsx("input", {
    type: "radio",
    name: "shower",
    value: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }), "3", __jsx("input", {
    type: "radio",
    name: "shower",
    value: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }), "4", __jsx("input", {
    type: "radio",
    name: "shower",
    value: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }), "5", __jsx("input", {
    type: "radio",
    name: "shower",
    value: "5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "marginTop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  }, "The number of Car Parking"), __jsx("div", {
    id: "radio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  }, "1", __jsx("input", {
    type: "radio",
    name: "car",
    value: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }
  }), "2", __jsx("input", {
    type: "radio",
    name: "car",
    value: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  }), "3", __jsx("input", {
    type: "radio",
    name: "car",
    value: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }
  }), "4", __jsx("input", {
    type: "radio",
    name: "car",
    value: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 13
    }
  }), "5", __jsx("input", {
    type: "radio",
    name: "car",
    value: "5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 13
    }
  }))), __jsx("button", {
    type: "submit",
    id: "addPropertyBtn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 9
    }
  }, "OK")));

  var rowsMap = rows.map(function (row) {
    return __jsx("div", {
      className: "imgs",
      key: row.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 5
      }
    }, __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 7
      }
    }), __jsx("p", {
      className: "right",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 7
      }
    }, "Ultimo Real Estate"), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 7
      }
    }), __jsx("a", {
      target: "_blank",
      href: "./gallery?id=" + row.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 7
      }
    }, __jsx("img", {
      src: "static/" + row.image_path,
      alt: "Home1",
      id: "cardImg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 9
      }
    })), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 7
      }
    }), __jsx("h5", {
      className: "obi",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 7
      }
    }, row.name, __jsx("a", {
      href: "#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
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
        lineNumber: 187,
        columnNumber: 11
      }
    }))), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 7
      }
    }), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 7
      }
    }, row.address), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 7
      }
    }), __jsx("p", {
      className: "icons",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 7
      }
    }, __jsx("img", {
      src: "static/bed.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 9
      }
    }), row.bed, __jsx("img", {
      src: "static/shower.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }
    }), row.shower, __jsx("img", {
      src: "static/car.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 9
      }
    }), row.bed), __jsx("p", {
      className: "inspe",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 7
      }
    }, __jsx("img", {
      src: "static/planner.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 9
      }
    }), " Inspection : ", row.inspection));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Head__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 7
    }
  }, __jsx("header", {
    className: "elseHeader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
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
      lineNumber: 215,
      columnNumber: 17
    }
  })))), __jsx(_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 11
    }
  })), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "titleOfPage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 13
    }
  }, "Property of the Week")), __jsx("div", {
    className: "flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "grid-container-pro",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 13
    }
  }, rowsMap), addProperty)), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 9
    }
  })));
}

_s(Index, "EeXOwcMDat73zsQlDW3WFLMsIJs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9wZXJ0aWVzLmpzIl0sIm5hbWVzIjpbIkluZGV4Iiwicm93cyIsImxvZ2dlZEluIiwidXNlU3RhdGUiLCJhZGRQcm9wZXJ0eSIsInNldEFkZFByb3BlcnR5IiwidXNlRWZmZWN0IiwiYWRkRm9ybSIsInJvd3NNYXAiLCJtYXAiLCJyb3ciLCJpZCIsImltYWdlX3BhdGgiLCJuYW1lIiwiYWdlbnRzX3Bob3RvIiwiYm9yZGVyUmFkaXVzIiwiYWRkcmVzcyIsImJlZCIsInNob3dlciIsImluc3BlY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBOENDOztBQUdELFNBQVNBLEtBQVQsT0FBbUM7QUFBQTs7QUFBQTs7QUFBQSxNQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUFBLGtCQUVLQyxzREFBUSxFQUZiO0FBQUEsTUFFMUJDLFdBRjBCO0FBQUEsTUFFYkMsY0FGYTs7QUFJakNDLHlEQUFTLENBQUMsWUFBTTtBQUVkLFFBQUlKLFFBQUosRUFBYztBQUNaRyxvQkFBYyxDQUFDRSxPQUFELENBQWQ7QUFDRDtBQUVGLEdBTlEsRUFNTixFQU5NLENBQVQ7O0FBUUEsTUFBSUEsT0FBTyxHQUNYO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsRUFFSTtBQUNFLFVBQU0sRUFBQyxlQURUO0FBRUUsVUFBTSxFQUFDLE1BRlQ7QUFHRSxNQUFFLEVBQUMsY0FITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxXQUFJ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O0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLDJCQUFUO0FBQXFDLFNBQUssRUFBQyxLQUEzQztBQUFpRCxVQUFNLEVBQUMsS0FBeEQ7QUFDRSxPQUFHLEVBQUMsdUNBRE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FERixDQURGLEVBU0UsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsQ0FERixFQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLENBREYsRUFLRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dYLE9BREgsQ0FERixFQUlLSixXQUpMLENBTEYsQ0FiRixFQXlCRSxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF6QkYsQ0FIRixDQURGO0FBa0NEOztHQXZMUUosSzs7S0FBQUEsSztBQXVMUjs7QUFHY0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHByb3BlcnRpZXMuanMuOGZhODQ4NTU1YTk0MTZkYWZlODMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZCYXIgZnJvbSAnLi9OYXZCYXInO1xyXG5pbXBvcnQgTWV0YUhlYWQgZnJvbSAnLi9IZWFkJztcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHF1ZXJ5QXN5bmMgZnJvbSAnLi4vbXlzcWwnO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCJcclxuXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRQcm9wZXJ0aWVzKCkge1xyXG4gIGxldCBkYmRhdGEgPSBhd2FpdCBxdWVyeUFzeW5jKGBcclxuICBTRUxFQ1QgcHJvcGVydHkuaWQsIHByb3BlcnR5LmFkZHJlc3MsIHByb3BlcnR5LmltYWdlX3BhdGgsIHByb3BlcnR5Lmluc3BlY3Rpb24sIFxyXG4gIHByb3BlcnR5LmJlZCwgcHJvcGVydHkuc2hvd2VyLCBwcm9wZXJ0eS5jYXIsIGFnZW50cy5uYW1lLCBhZ2VudHMuYWdlbnRzX3Bob3RvIFxyXG4gIEZST00gcHJvcGVydHkgXHJcbiAgSk9JTiBhZ2VudHMgT04gcHJvcGVydHkuYWdlbnRfaWQgPSBhZ2VudHMuaWQ7XHJcbiAgYCk7XHJcblxyXG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRiZGF0YSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0Nvb2tpZXMoY29udGV4dCkge1xyXG4gIGxldCBjb29raWUgPSBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZTtcclxuICBjb25zdCByZWdleCA9IC9sb2dJbkNvb2tpZVxcPShbQS1aYS16MC05XFwuXFxfXFwtXSspLztcclxuICBsZXQgdG9rZW4gPSBjb29raWUubWF0Y2gocmVnZXgpWzFdO1xyXG4gIGxldCBkZWNvZGVkO1xyXG4gIGxldCBhZ2VudExvZ2dlZEluID0gZmFsc2U7XHJcbiAgdHJ5IHtcclxuICAgIGRlY29kZWQgPSBqd3QudmVyaWZ5KHRva2VuLCAnU2hva29EaWRJdCcpO1xyXG4gICAgaWYoZGVjb2RlZC5yb2xlID09PSBcImFnZW50XCIpIHtcclxuICAgICAgYWdlbnRMb2dnZWRJbiA9IHRydWU7XHJcbiAgICAgIHJldHVybiBhZ2VudExvZ2dlZEluO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHJldHVybiBhZ2VudExvZ2dlZEluO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuIGFnZW50TG9nZ2VkSW47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuXHJcbiAgbGV0IHJvd3MgPSBhd2FpdCBnZXRQcm9wZXJ0aWVzKCk7XHJcbiAgbGV0IGxvZ2dlZEluID0gY2hlY2tDb29raWVzKGNvbnRleHQpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcm93cyxcclxuICAgICAgbG9nZ2VkSW5cclxuICAgIH0sXHJcbiAgfVxyXG59O1xyXG5cclxuXHJcbmZ1bmN0aW9uIEluZGV4KHsgcm93cywgbG9nZ2VkSW4gfSkge1xyXG5cclxuICBjb25zdCBbYWRkUHJvcGVydHksIHNldEFkZFByb3BlcnR5XSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBcclxuICAgIGlmIChsb2dnZWRJbikge1xyXG4gICAgICBzZXRBZGRQcm9wZXJ0eShhZGRGb3JtKTtcclxuICAgIH1cclxuICAgIFxyXG4gIH0sIFtdKTtcclxuXHJcbiAgbGV0IGFkZEZvcm0gPSBcclxuICA8ZGl2IGNsYXNzTmFtZT1cImFkZFByb3BlcnR5XCI+XHJcbiAgICA8aDIgPkFkZCBtb3JlIHByb3BlcnR5PC9oMj5cclxuICAgICAgPGZvcm1cclxuICAgICAgICBhY3Rpb249XCIvbW9yZXByb3BlcnR5XCJcclxuICAgICAgICBtZXRob2Q9XCJQT1NUXCJcclxuICAgICAgICBpZD1cIm1vcmVQcm9wZXJ0eVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmdpblRvcFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cImFkZHJlc3NcIj5BZGRyZXNzIG9mIFByb3BlcnR5PC9sYWJlbD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwiYWRkcmVzc1wiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cImFkZHJlc3NcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByb3BlcnR5IEFkZHJlc3NcIlxyXG4gICAgICAgICAgICBzaXplPVwiMzZcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmdpblRvcFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cImluc3BlY3Rpb25cIj5JbnNwZWN0aW9uIERhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJpbnNwZWN0aW9uXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiaW5zcGVjdGlvblwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiT3BlbiB4eC94eC8geHg6eHhhbS9wbVwiXHJcbiAgICAgICAgICAgIHNpemU9XCIzNlwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFyZ2luVG9wXCI+XHJcbiAgICAgICAgICA8bGFiZWwgZm9yPVwiaW1hZ2VfcGF0aFwiPlR5dGxlIG9mIHRoZSBJbWFnZSBGaWxlPC9sYWJlbD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwiaW1hZ2VfcGF0aFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cImltYWdlX3BhdGhcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImV4YW1wbGUuanBnXCJcclxuICAgICAgICAgICAgc2l6ZT1cIjM2XCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJnaW5Ub3BcIj5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJhZ2VudE5hbWVcIj5BZ2VudCdzIG5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwiYWdlbnROYW1lXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiYWdlbnROYW1lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGdWxsIG5hbWVcIlxyXG4gICAgICAgICAgICBzaXplPVwiMzZcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmdpblRvcFwiPlxyXG4gICAgICAgICAgPGxhYmVsID5UaGUgbnVtYmVyIG9mIEJlZCBSb29tczwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJlZFwiIHZhbHVlPVwiMVwiIC8+XHJcbiAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJiZWRcIiB2YWx1ZT1cIjJcIiAvPlxyXG4gICAgICAgICAgICAzXHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYmVkXCIgdmFsdWU9XCIzXCIgLz5cclxuICAgICAgICAgICAgNFxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJlZFwiIHZhbHVlPVwiNFwiIC8+XHJcbiAgICAgICAgICAgIDVcclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJiZWRcIiB2YWx1ZT1cIjVcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJnaW5Ub3BcIj5cclxuICAgICAgICAgIDxsYWJlbCA+VGhlIG51bWJlciBvZiBTaG93ZXIgUm9vbXM8L2xhYmVsPlxyXG4gICAgICAgICAgPGRpdiBpZD1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJzaG93ZXJcIiB2YWx1ZT1cIjFcIiAvPlxyXG4gICAgICAgICAgICAyXHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwic2hvd2VyXCIgdmFsdWU9XCIyXCIgLz5cclxuICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInNob3dlclwiIHZhbHVlPVwiM1wiIC8+XHJcbiAgICAgICAgICAgIDRcclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJzaG93ZXJcIiB2YWx1ZT1cIjRcIiAvPlxyXG4gICAgICAgICAgICA1XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwic2hvd2VyXCIgdmFsdWU9XCI1XCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFyZ2luVG9wXCI+XHJcbiAgICAgICAgICA8bGFiZWwgPlRoZSBudW1iZXIgb2YgQ2FyIFBhcmtpbmc8L2xhYmVsPlxyXG4gICAgICAgICAgPGRpdiBpZD1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjYXJcIiB2YWx1ZT1cIjFcIiAvPlxyXG4gICAgICAgICAgICAyXHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY2FyXCIgdmFsdWU9XCIyXCIgLz5cclxuICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNhclwiIHZhbHVlPVwiM1wiIC8+XHJcbiAgICAgICAgICAgIDRcclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjYXJcIiB2YWx1ZT1cIjRcIiAvPlxyXG4gICAgICAgICAgICA1XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY2FyXCIgdmFsdWU9XCI1XCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBpZD1cImFkZFByb3BlcnR5QnRuXCI+T0s8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gIDwvZGl2PjtcclxuXHJcbiAgbGV0IHJvd3NNYXAgPSByb3dzLm1hcChyb3cgPT5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ3NcIiBrZXk9e3Jvdy5pZH0gPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicmlnaHRcIj5VbHRpbW8gUmVhbCBFc3RhdGU8L3A+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtcIi4vZ2FsbGVyeT9pZD1cIiArIHJvdy5pZH0+XHJcbiAgICAgICAgPGltZyBzcmM9e1wic3RhdGljL1wiICsgcm93LmltYWdlX3BhdGh9IGFsdD1cIkhvbWUxXCJcclxuICAgICAgICAgIGlkPVwiY2FyZEltZ1wiIC8+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxoNSBjbGFzc05hbWU9XCJvYmlcIj5cclxuICAgICAgICB7cm93Lm5hbWV9XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPXtcInN0YXRpYy9cIiArIHJvdy5hZ2VudHNfcGhvdG99IHdpZHRoPVwiNzBweDtcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCI3MHB4O1wiIHN0eWxlPXt7IGJvcmRlclJhZGl1czogJzUwJScgfX0gLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvaDU+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8aDQ+e3Jvdy5hZGRyZXNzfTwvaDQ+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJpY29uc1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwic3RhdGljL2JlZC5wbmdcIiAvPntyb3cuYmVkfVxyXG4gICAgICAgIDxpbWcgc3JjPVwic3RhdGljL3Nob3dlci5wbmdcIiAvPntyb3cuc2hvd2VyfVxyXG4gICAgICAgIDxpbWcgc3JjPVwic3RhdGljL2Nhci5wbmdcIiAvPntyb3cuYmVkfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImluc3BlXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvcGxhbm5lci5wbmdcIiAvPiBJbnNwZWN0aW9uIDoge3Jvdy5pbnNwZWN0aW9ufVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcblxyXG4gICAgICA8TWV0YUhlYWQgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT0nZWxzZUhlYWRlcic+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvZXN0YXRlLWxvZ28uc3ZnXCIgd2lkdGg9XCIzMDBcIiBoZWlnaHQ9XCIxMDBcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJVbHRpbW8gUmVhbCBFc3RhdGUsIFN5ZG5leSwgQXVzdHJhbGlhXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPE5hdkJhciAvPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVPZlBhZ2VcIj5cclxuICAgICAgICAgICAgPGgxPlByb3BlcnR5IG9mIHRoZSBXZWVrPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyLXByb1wiPlxyXG4gICAgICAgICAgICAgIHtyb3dzTWFwfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7YWRkUHJvcGVydHl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8Lz5cclxuICApXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==