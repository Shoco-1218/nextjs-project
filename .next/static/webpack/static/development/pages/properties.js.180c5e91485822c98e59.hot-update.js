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
      setAddProperty = _useState[1]; // 


  var addForm = __jsx("div", {
    className: "addProperty",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 3
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, "Add more property"), __jsx("form", {
    action: "/moreproperty",
    method: "POST",
    id: "moreProperty",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "marginTop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("label", {
    "for": "address",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, "Address of Property"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
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
      lineNumber: 75,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "marginTop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx("label", {
    "for": "inspection",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, "Inspection Date"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
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
      lineNumber: 87,
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
    "for": "image_path",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, "Tytle of the Image File"), __jsx("br", {
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
      lineNumber: 108,
      columnNumber: 9
    }
  }, __jsx("label", {
    "for": "agentName",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
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
      lineNumber: 110,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "marginTop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, "The number of Bed Rooms"), __jsx("div", {
    id: "radio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, "1", __jsx("input", {
    type: "radio",
    name: "bed",
    value: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }), "2", __jsx("input", {
    type: "radio",
    name: "bed",
    value: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }), "3", __jsx("input", {
    type: "radio",
    name: "bed",
    value: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }), "4", __jsx("input", {
    type: "radio",
    name: "bed",
    value: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }), "5", __jsx("input", {
    type: "radio",
    name: "bed",
    value: "5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "marginTop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }, "The number of Shower Rooms"), __jsx("div", {
    id: "radio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }, "1", __jsx("input", {
    type: "radio",
    name: "shower",
    value: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }), "2", __jsx("input", {
    type: "radio",
    name: "shower",
    value: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  }), "3", __jsx("input", {
    type: "radio",
    name: "shower",
    value: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }), "4", __jsx("input", {
    type: "radio",
    name: "shower",
    value: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }), "5", __jsx("input", {
    type: "radio",
    name: "shower",
    value: "5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "marginTop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 11
    }
  }, "The number of Car Parking"), __jsx("div", {
    id: "radio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }, "1", __jsx("input", {
    type: "radio",
    name: "car",
    value: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }), "2", __jsx("input", {
    type: "radio",
    name: "car",
    value: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  }), "3", __jsx("input", {
    type: "radio",
    name: "car",
    value: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }), "4", __jsx("input", {
    type: "radio",
    name: "car",
    value: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }), "5", __jsx("input", {
    type: "radio",
    name: "car",
    value: "5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  }))), __jsx("button", {
    type: "submit",
    id: "addPropertyBtn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
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
        lineNumber: 170,
        columnNumber: 5
      }
    }, __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 7
      }
    }), __jsx("p", {
      className: "right",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 7
      }
    }, "Ultimo Real Estate"), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 7
      }
    }), __jsx("a", {
      target: "_blank",
      href: "./gallery?id=" + row.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 7
      }
    }, __jsx("img", {
      src: "static/" + row.image_path,
      alt: "Home1",
      id: "cardImg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }
    })), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 7
      }
    }), __jsx("h5", {
      className: "obi",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 7
      }
    }, row.name, __jsx("a", {
      href: "#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
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
        lineNumber: 182,
        columnNumber: 11
      }
    }))), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 7
      }
    }), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 7
      }
    }, row.address), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 7
      }
    }), __jsx("p", {
      className: "icons",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 7
      }
    }, __jsx("img", {
      src: "static/bed.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 9
      }
    }), row.bed, __jsx("img", {
      src: "static/shower.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 9
      }
    }), row.shower, __jsx("img", {
      src: "static/car.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 9
      }
    }), row.bed), __jsx("p", {
      className: "inspe",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 7
      }
    }, __jsx("img", {
      src: "static/planner.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 9
      }
    }), " Inspection : ", row.inspection));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Head__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }
  }, __jsx("header", {
    className: "elseHeader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
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
      lineNumber: 210,
      columnNumber: 17
    }
  })))), __jsx(_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 11
    }
  })), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "titleOfPage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 13
    }
  }, "Property of the Week")), __jsx("div", {
    className: "flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "grid-container-pro",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 13
    }
  }, rowsMap), addProperty)), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 9
    }
  })));
}

_s(Index, "bc4Yg7l6hQ8lBb+r2wWImOxPbys=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9wZXJ0aWVzLmpzIl0sIm5hbWVzIjpbIkluZGV4Iiwicm93cyIsImxvZ2dlZEluIiwidXNlU3RhdGUiLCJhZGRQcm9wZXJ0eSIsInNldEFkZFByb3BlcnR5IiwiYWRkRm9ybSIsInJvd3NNYXAiLCJtYXAiLCJyb3ciLCJpZCIsImltYWdlX3BhdGgiLCJuYW1lIiwiYWdlbnRzX3Bob3RvIiwiYm9yZGVyUmFkaXVzIiwiYWRkcmVzcyIsImJlZCIsInNob3dlciIsImluc3BlY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBOENDOztBQUdELFNBQVNBLEtBQVQsT0FBbUM7QUFBQTs7QUFBQTs7QUFBQSxNQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUFBLGtCQUVLQyxzREFBUSxFQUZiO0FBQUEsTUFFMUJDLFdBRjBCO0FBQUEsTUFFYkMsY0FGYSxpQkFJakM7OztBQUdBLE1BQUlDLE9BQU8sR0FDWDtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBRUk7QUFDRSxVQUFNLEVBQUMsZUFEVDtBQUVFLFVBQU0sRUFBQyxNQUZUO0FBR0UsTUFBRSxFQUFDLGNBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sV0FBSSxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUNFLE1BQUUs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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsQ0FERixFQVNFLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLENBREYsRUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixDQURGLEVBS0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHWCxPQURILENBREYsRUFJS0gsV0FKTCxDQUxGLENBYkYsRUF5QkUsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBekJGLENBSEYsQ0FERjtBQWtDRDs7R0FsTFFKLEs7O0tBQUFBLEs7QUFrTFI7O0FBR2NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwcm9wZXJ0aWVzLmpzLjE4MGM1ZTkxNDg1ODIyYzk4ZTU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2QmFyIGZyb20gJy4vTmF2QmFyJztcclxuaW1wb3J0IE1ldGFIZWFkIGZyb20gJy4vSGVhZCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBxdWVyeUFzeW5jIGZyb20gJy4uL215c3FsJztcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBcIi4uL3N0eWxlLmNzc1wiXHJcblxyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0UHJvcGVydGllcygpIHtcclxuICBsZXQgZGJkYXRhID0gYXdhaXQgcXVlcnlBc3luYyhgXHJcbiAgU0VMRUNUIHByb3BlcnR5LmlkLCBwcm9wZXJ0eS5hZGRyZXNzLCBwcm9wZXJ0eS5pbWFnZV9wYXRoLCBwcm9wZXJ0eS5pbnNwZWN0aW9uLCBcclxuICBwcm9wZXJ0eS5iZWQsIHByb3BlcnR5LnNob3dlciwgcHJvcGVydHkuY2FyLCBhZ2VudHMubmFtZSwgYWdlbnRzLmFnZW50c19waG90byBcclxuICBGUk9NIHByb3BlcnR5IFxyXG4gIEpPSU4gYWdlbnRzIE9OIHByb3BlcnR5LmFnZW50X2lkID0gYWdlbnRzLmlkO1xyXG4gIGApO1xyXG5cclxuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYmRhdGEpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tDb29raWVzKGNvbnRleHQpIHtcclxuICBsZXQgY29va2llID0gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWU7XHJcbiAgY29uc3QgcmVnZXggPSAvbG9nSW5Db29raWVcXD0oW0EtWmEtejAtOVxcLlxcX1xcLV0rKS87XHJcbiAgbGV0IHRva2VuID0gY29va2llLm1hdGNoKHJlZ2V4KVsxXTtcclxuICBsZXQgZGVjb2RlZDtcclxuICBsZXQgYWdlbnRMb2dnZWRJbiA9IGZhbHNlO1xyXG4gIHRyeSB7XHJcbiAgICBkZWNvZGVkID0gand0LnZlcmlmeSh0b2tlbiwgJ1Nob2tvRGlkSXQnKTtcclxuICAgIGlmKGRlY29kZWQucm9sZSA9PT0gXCJhZ2VudFwiKSB7XHJcbiAgICAgIGFnZW50TG9nZ2VkSW4gPSB0cnVlO1xyXG4gICAgICByZXR1cm4gYWdlbnRMb2dnZWRJbjtcclxuICAgIH1lbHNle1xyXG4gICAgICByZXR1cm4gYWdlbnRMb2dnZWRJbjtcclxuICAgIH1cclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBhZ2VudExvZ2dlZEluO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcblxyXG4gIGxldCByb3dzID0gYXdhaXQgZ2V0UHJvcGVydGllcygpO1xyXG4gIGxldCBsb2dnZWRJbiA9IGNoZWNrQ29va2llcyhjb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHJvd3MsXHJcbiAgICAgIGxvZ2dlZEluXHJcbiAgICB9LFxyXG4gIH1cclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBJbmRleCh7IHJvd3MsIGxvZ2dlZEluIH0pIHtcclxuXHJcbiAgY29uc3QgW2FkZFByb3BlcnR5LCBzZXRBZGRQcm9wZXJ0eV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAvLyBcclxuICBcclxuXHJcbiAgbGV0IGFkZEZvcm0gPSBcclxuICA8ZGl2IGNsYXNzTmFtZT1cImFkZFByb3BlcnR5XCI+XHJcbiAgICA8aDIgPkFkZCBtb3JlIHByb3BlcnR5PC9oMj5cclxuICAgICAgPGZvcm1cclxuICAgICAgICBhY3Rpb249XCIvbW9yZXByb3BlcnR5XCJcclxuICAgICAgICBtZXRob2Q9XCJQT1NUXCJcclxuICAgICAgICBpZD1cIm1vcmVQcm9wZXJ0eVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmdpblRvcFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cImFkZHJlc3NcIj5BZGRyZXNzIG9mIFByb3BlcnR5PC9sYWJlbD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwiYWRkcmVzc1wiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cImFkZHJlc3NcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByb3BlcnR5IEFkZHJlc3NcIlxyXG4gICAgICAgICAgICBzaXplPVwiMzZcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmdpblRvcFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cImluc3BlY3Rpb25cIj5JbnNwZWN0aW9uIERhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJpbnNwZWN0aW9uXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiaW5zcGVjdGlvblwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiT3BlbiB4eC94eC8geHg6eHhhbS9wbVwiXHJcbiAgICAgICAgICAgIHNpemU9XCIzNlwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFyZ2luVG9wXCI+XHJcbiAgICAgICAgICA8bGFiZWwgZm9yPVwiaW1hZ2VfcGF0aFwiPlR5dGxlIG9mIHRoZSBJbWFnZSBGaWxlPC9sYWJlbD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwiaW1hZ2VfcGF0aFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cImltYWdlX3BhdGhcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImV4YW1wbGUuanBnXCJcclxuICAgICAgICAgICAgc2l6ZT1cIjM2XCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJnaW5Ub3BcIj5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJhZ2VudE5hbWVcIj5BZ2VudCdzIG5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwiYWdlbnROYW1lXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiYWdlbnROYW1lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGdWxsIG5hbWVcIlxyXG4gICAgICAgICAgICBzaXplPVwiMzZcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmdpblRvcFwiPlxyXG4gICAgICAgICAgPGxhYmVsID5UaGUgbnVtYmVyIG9mIEJlZCBSb29tczwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJlZFwiIHZhbHVlPVwiMVwiIC8+XHJcbiAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJiZWRcIiB2YWx1ZT1cIjJcIiAvPlxyXG4gICAgICAgICAgICAzXHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYmVkXCIgdmFsdWU9XCIzXCIgLz5cclxuICAgICAgICAgICAgNFxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJlZFwiIHZhbHVlPVwiNFwiIC8+XHJcbiAgICAgICAgICAgIDVcclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJiZWRcIiB2YWx1ZT1cIjVcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJnaW5Ub3BcIj5cclxuICAgICAgICAgIDxsYWJlbCA+VGhlIG51bWJlciBvZiBTaG93ZXIgUm9vbXM8L2xhYmVsPlxyXG4gICAgICAgICAgPGRpdiBpZD1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJzaG93ZXJcIiB2YWx1ZT1cIjFcIiAvPlxyXG4gICAgICAgICAgICAyXHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwic2hvd2VyXCIgdmFsdWU9XCIyXCIgLz5cclxuICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInNob3dlclwiIHZhbHVlPVwiM1wiIC8+XHJcbiAgICAgICAgICAgIDRcclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJzaG93ZXJcIiB2YWx1ZT1cIjRcIiAvPlxyXG4gICAgICAgICAgICA1XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwic2hvd2VyXCIgdmFsdWU9XCI1XCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFyZ2luVG9wXCI+XHJcbiAgICAgICAgICA8bGFiZWwgPlRoZSBudW1iZXIgb2YgQ2FyIFBhcmtpbmc8L2xhYmVsPlxyXG4gICAgICAgICAgPGRpdiBpZD1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjYXJcIiB2YWx1ZT1cIjFcIiAvPlxyXG4gICAgICAgICAgICAyXHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY2FyXCIgdmFsdWU9XCIyXCIgLz5cclxuICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNhclwiIHZhbHVlPVwiM1wiIC8+XHJcbiAgICAgICAgICAgIDRcclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjYXJcIiB2YWx1ZT1cIjRcIiAvPlxyXG4gICAgICAgICAgICA1XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY2FyXCIgdmFsdWU9XCI1XCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBpZD1cImFkZFByb3BlcnR5QnRuXCI+T0s8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gIDwvZGl2PjtcclxuXHJcbiAgbGV0IHJvd3NNYXAgPSByb3dzLm1hcChyb3cgPT5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ3NcIiBrZXk9e3Jvdy5pZH0gPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicmlnaHRcIj5VbHRpbW8gUmVhbCBFc3RhdGU8L3A+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtcIi4vZ2FsbGVyeT9pZD1cIiArIHJvdy5pZH0+XHJcbiAgICAgICAgPGltZyBzcmM9e1wic3RhdGljL1wiICsgcm93LmltYWdlX3BhdGh9IGFsdD1cIkhvbWUxXCJcclxuICAgICAgICAgIGlkPVwiY2FyZEltZ1wiIC8+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxoNSBjbGFzc05hbWU9XCJvYmlcIj5cclxuICAgICAgICB7cm93Lm5hbWV9XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPXtcInN0YXRpYy9cIiArIHJvdy5hZ2VudHNfcGhvdG99IHdpZHRoPVwiNzBweDtcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCI3MHB4O1wiIHN0eWxlPXt7IGJvcmRlclJhZGl1czogJzUwJScgfX0gLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvaDU+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8aDQ+e3Jvdy5hZGRyZXNzfTwvaDQ+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJpY29uc1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwic3RhdGljL2JlZC5wbmdcIiAvPntyb3cuYmVkfVxyXG4gICAgICAgIDxpbWcgc3JjPVwic3RhdGljL3Nob3dlci5wbmdcIiAvPntyb3cuc2hvd2VyfVxyXG4gICAgICAgIDxpbWcgc3JjPVwic3RhdGljL2Nhci5wbmdcIiAvPntyb3cuYmVkfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImluc3BlXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvcGxhbm5lci5wbmdcIiAvPiBJbnNwZWN0aW9uIDoge3Jvdy5pbnNwZWN0aW9ufVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcblxyXG4gICAgICA8TWV0YUhlYWQgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT0nZWxzZUhlYWRlcic+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvZXN0YXRlLWxvZ28uc3ZnXCIgd2lkdGg9XCIzMDBcIiBoZWlnaHQ9XCIxMDBcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJVbHRpbW8gUmVhbCBFc3RhdGUsIFN5ZG5leSwgQXVzdHJhbGlhXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPE5hdkJhciAvPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVPZlBhZ2VcIj5cclxuICAgICAgICAgICAgPGgxPlByb3BlcnR5IG9mIHRoZSBXZWVrPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyLXByb1wiPlxyXG4gICAgICAgICAgICAgIHtyb3dzTWFwfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7YWRkUHJvcGVydHl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8Lz5cclxuICApXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==