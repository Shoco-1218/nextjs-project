webpackHotUpdate("static\\development\\pages\\gallery.js",{

/***/ "./pages/gallery.js":
/*!**************************!*\
  !*** ./pages/gallery.js ***!
  \**************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/NavBar */ "./pages/components/NavBar.js");
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Head */ "./pages/components/Head.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Footer */ "./pages/components/Footer.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\src\\URE3-Next.js\\ure-nextjs\\pages\\gallery.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;







function Gallery(_ref) {
  _s();

  var rows = _ref.rows;
  var row = rows[0].image_path;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(row),
      imgSrc = _useState[0],
      setSrc = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])("stopbtn.png"),
      btn = _useState2[0],
      setBtn = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(true),
      isPlay = _useState3[0],
      setIsPlay = _useState3[1];

  function toggle() {
    btn == "stopbtn.png" ? setBtn("gobtn.png") : setBtn("stopbtn.png");
    setIsPlay(!isPlay);
  }

  var thisAd = 0;
  var adImage = [rows[0].image_path, "inside1.jpg", "inside2.jpg", "inside3.jpg", "inside4.jpg", "inside5.jpg"];
  var timeHandle = null;
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (isPlay) {
      timeHandle = setInterval(function () {
        if (thisAd === adImage.length) {
          thisAd = 0;
        }

        setSrc(adImage[thisAd]);
        thisAd++;
      }, 1000);
    } else {
      clearInterval(timeHandle);
    }

    return function () {
      return clearInterval(timeHandle);
    };
  }, [isPlay]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(_components_Head__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, __jsx("header", {
    className: "elseHeader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "../static/estate-logo.svg",
    width: "300",
    height: "100",
    alt: "Ultimo Real Estate, Sydney, Australia",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  })))), __jsx(_components_NavBar__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "subnav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "./properties",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, "< back"))), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, " Property : ", rows[0].address)), __jsx("main", {
    className: "gallery-main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx("ul", {
    id: "btns",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "../static/" + btn,
    alt: "slide animation starts",
    onClick: function onClick() {
      return toggle();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }))), __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "../static/" + imgSrc,
    id: "adBanner",
    style: {
      width: '100%'
    },
    alt: "house pic",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: "demo cursor",
    src: "../static/" + rows[0].image_path,
    style: {
      height: '150px',
      width: '100%'
    },
    id: "rowImages",
    alt: "Outside",
    onClick: function onClick() {
      return setSrc(rows[0].image_path);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: "demo cursor",
    src: "../static/inside1.jpg",
    style: {
      height: '150px',
      width: '100%'
    },
    id: "rowImages",
    alt: "Inside design",
    onClick: function onClick() {
      return setSrc("inside1.jpg");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: "demo cursor",
    src: "../static/inside2.jpg",
    style: {
      height: '150px',
      width: '100%'
    },
    id: "rowImages",
    alt: "Bed Room",
    onClick: function onClick() {
      return setSrc("inside2.jpg");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: "demo cursor",
    src: "../static/inside3.jpg",
    style: {
      height: '150px',
      width: '100%'
    },
    id: "rowImages",
    alt: "Bath Room",
    onClick: function onClick() {
      return setSrc("inside3.jpg");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: "demo cursor",
    src: "../static/inside4.jpg",
    style: {
      height: '150px',
      width: '100%'
    },
    id: "rowImages",
    alt: "Bed Room",
    onClick: function onClick() {
      return setSrc("inside4.jpg");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: "demo cursor",
    src: "../static/inside5.jpg",
    style: {
      height: '150px',
      width: '100%'
    },
    id: "rowImages",
    alt: "kitchen",
    onClick: function onClick() {
      return setSrc("inside5.jpg");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "caption-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 9
    }
  }, __jsx("p", {
    id: "caption",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 11
    }
  })), __jsx("h2", {
    className: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  }, rows[0].address), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 9
    }
  }), __jsx("div", {
    id: "flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 9
    }
  }, __jsx("div", {
    id: "column1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "../static/bed.png",
    alt: "icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 15
    }
  }), rows[0].bed, __jsx("img", {
    src: "../static/shower.png",
    alt: "icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 15
    }
  }), rows[0].shower, __jsx("img", {
    src: "../static/car.png",
    alt: "icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 15
    }
  }), rows[0].car, "  |", __jsx("img", {
    src: "../static/planner.png",
    alt: "icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 15
    }
  }), rows[0].inspection), __jsx("p", {
    className: "margin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }, "Living is easy in this freshly schemed freestanding home in a quiet cul-de-sac a short stroll Featuring a 15m street frontage and double parking, the three bedroom home's fluid villa-like layout is ideal for the young family or downsizer with sun-filled living space opening to a landscaped north facing garden. One of only a handful of homes in a peaceful enclave with no-through traffic, the immaculately presented home is 850m to nearest station and town centre with close proximity to historic sydney Park. In the heart of the inner west, sydney is on the brink of a boom with close proximity, excellent transport links and great schools.", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 15
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 21
    }
  }), "- Double fronted freestanding home in a quiet cul-de-sac", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 15
    }
  }), "- Modern light-filled interiors, easy indoor/outdoor flow", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 15
    }
  }), "- 3 bedrooms with built-ins, 2 with a tranquil garden outlook", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 15
    }
  }), "- Large main bedroom, 2 way bathroom and a powder room", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 15
    }
  }), "- Spacious living and dining featuring easycare timber floors", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 15
    }
  }), "- Terrace and a level landscaped garden bathed in sunshine", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 15
    }
  }), "- Granite kitchen with Smeg gas cooker, plentiful bench space", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 15
    }
  }), "- Full size laundry, downlights, plush carpeting", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 15
    }
  }), "- Lock-up garage plus off street parking, stroll to city buses", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 15
    }
  }), "- Walk to the soon-to-be-completed Aquatic Centre", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 15
    }
  }))), __jsx("div", {
    id: "column2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 11
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 13
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 15
    }
  }, __jsx("p", {
    style: {
      marginTop: '10px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 17
    }
  }, rows[0].name)), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "../static/" + rows[0].agents_photo,
    width: 70,
    height: 70,
    style: {
      borderRadius: '50%',
      margin: '10px'
    },
    alt: "agency-photo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 19
    }
  }))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 15
    }
  }, __jsx("button", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "../static/phone.png",
    alt: "phone-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 19
    }
  }), "call")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 15
    }
  }, __jsx("p", {
    style: {
      paddingTop: '30px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 17
    }
  }, "Ultimo Real Estate"))), __jsx("div", {
    className: "gmap margin text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "../static/house.png",
    alt: "icons",
    className: "rightAbit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 17
    }
  }), "| ", rows[0].address), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 15
    }
  }), __jsx("iframe", {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2745.5144606993504!2d151.20549893317832!3d-33.87740160551429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3cc9d8039b%3A0x1b0bd5dd57af495f!2sWorld%20Square!5e0!3m2!1sen!2sau!4v1585693877945!5m2!1sen!2sau",
    width: 300,
    height: 300,
    allowFullScreen: true,
    "aria-hidden": "false",
    tabGallery: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 15
    }
  }))))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 7
    }
  })));
}

_s(Gallery, "xu57ajuTijwKKLtJwrj6VeVuETo=");

_c = Gallery;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Gallery);

var _c;

$RefreshReg$(_c, "Gallery");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9nYWxsZXJ5LmpzIl0sIm5hbWVzIjpbIkdhbGxlcnkiLCJyb3dzIiwicm93IiwiaW1hZ2VfcGF0aCIsInVzZVN0YXRlIiwiaW1nU3JjIiwic2V0U3JjIiwiYnRuIiwic2V0QnRuIiwiaXNQbGF5Iiwic2V0SXNQbGF5IiwidG9nZ2xlIiwidGhpc0FkIiwiYWRJbWFnZSIsInRpbWVIYW5kbGUiLCJ1c2VFZmZlY3QiLCJzZXRJbnRlcnZhbCIsImxlbmd0aCIsImNsZWFySW50ZXJ2YWwiLCJhZGRyZXNzIiwid2lkdGgiLCJoZWlnaHQiLCJiZWQiLCJzaG93ZXIiLCJjYXIiLCJpbnNwZWN0aW9uIiwibWFyZ2luVG9wIiwibmFtZSIsImFnZW50c19waG90byIsImJvcmRlclJhZGl1cyIsIm1hcmdpbiIsInBhZGRpbmdUb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBbUJBLFNBQVNBLE9BQVQsT0FBMEI7QUFBQTs7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87QUFFeEIsTUFBSUMsR0FBRyxHQUFHRCxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFFLFVBQWxCOztBQUZ3QixrQkFHQ0Msc0RBQVEsQ0FBQ0YsR0FBRCxDQUhUO0FBQUEsTUFHakJHLE1BSGlCO0FBQUEsTUFHVEMsTUFIUzs7QUFBQSxtQkFJRkYsc0RBQVEsQ0FBQyxhQUFELENBSk47QUFBQSxNQUlqQkcsR0FKaUI7QUFBQSxNQUlaQyxNQUpZOztBQUFBLG1CQUtJSixzREFBUSxDQUFDLElBQUQsQ0FMWjtBQUFBLE1BS2pCSyxNQUxpQjtBQUFBLE1BS1RDLFNBTFM7O0FBT3hCLFdBQVNDLE1BQVQsR0FBaUI7QUFDZkosT0FBRyxJQUFJLGFBQVAsR0FBdUJDLE1BQU0sQ0FBQyxXQUFELENBQTdCLEdBQTZDQSxNQUFNLENBQUMsYUFBRCxDQUFuRDtBQUNBRSxhQUFTLENBQUMsQ0FBQ0Qs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RTtBQUFLLE9BQUcsRUFBQyxxQkFBVDtBQUErQixPQUFHLEVBQUMsWUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLFNBREYsQ0FiRixFQW1CRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxTQUFLLEVBQUU7QUFBQ0MsZ0JBQVUsRUFBRTtBQUFiLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixDQW5CRixDQURGLEVBMEJFO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUMscUJBRE47QUFFRSxPQUFHLEVBQUMsT0FGTjtBQUdFLGFBQVMsRUFBRSxXQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixRQU1POUIsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRa0IsT0FOZixDQURGLEVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBVUU7QUFDRSxPQUFHLEVBQUMsK1FBRE47QUFFRSxTQUFLLEVBQUUsR0FGVDtBQUdFLFVBQU0sRUFBRSxHQUhWO0FBSUUsbUJBQWUsTUFKakI7QUFJa0IsbUJBQVksT0FKOUI7QUFLRSxjQUFVLEVBQUUsQ0FMZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsQ0ExQkYsQ0F4Q0YsQ0E1RkYsQ0F0QkYsRUEyTUUsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM01GLENBSEEsQ0FERjtBQW9ORDs7R0ExUFFuQixPOztLQUFBQSxPOztBQTRQTUEsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGdhbGxlcnkuanMuZTJmN2JmNGQyNDljOTFhZjQ3NzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZCYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdkJhcic7XHJcbmltcG9ydCBNZXRhSGVhZCBmcm9tICcuL2NvbXBvbmVudHMvSGVhZCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHF1ZXJ5QXN5bmMgZnJvbSAnLi4vbXlzcWwnO1xyXG5pbXBvcnQgJy4uL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMocmVxLCByZXMpe1xyXG5cclxuICBsZXQgaWROdW1iZXIgPSBwYXJzZUludChyZXEucXVlcnkuaWQpO1xyXG4gIGxldCBxdWVyeSA9IFxyXG4gICAgXCJTRUxFQ1QgcHJvcGVydHkuaWQsIHByb3BlcnR5LmFkZHJlc3MsIHByb3BlcnR5LmltYWdlX3BhdGgscHJvcGVydHkuaW5zcGVjdGlvbiwgcHJvcGVydHkuYmVkLCBwcm9wZXJ0eS5zaG93ZXIsIHByb3BlcnR5LmNhciwgYWdlbnRzLm5hbWUsIGFnZW50cy5hZ2VudHNfcGhvdG8gRlJPTSAocHJvcGVydHkgSk9JTiBhZ2VudHMgT04gcHJvcGVydHkuYWdlbnRfaWQgPSBhZ2VudHMuaWQpIFdIRVJFIHByb3BlcnR5LmlkID0gXCJcclxuICAgICsgaWROdW1iZXI7XHJcbiAgbGV0IGRiZGF0YSA9IGF3YWl0IHF1ZXJ5QXN5bmMocXVlcnkpO1xyXG5cclxuICBsZXQgcm93cyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGJkYXRhKSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczp7XHJcbiAgICAgIHJvd3NcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBHYWxsZXJ5KHsgcm93cyB9KXtcclxuXHJcbiAgbGV0IHJvdyA9IHJvd3NbMF0uaW1hZ2VfcGF0aDtcclxuICBjb25zdCBbaW1nU3JjLCBzZXRTcmNdID0gdXNlU3RhdGUocm93KTtcclxuICBjb25zdCBbYnRuLCBzZXRCdG5dID0gdXNlU3RhdGUoXCJzdG9wYnRuLnBuZ1wiKTtcclxuICBjb25zdCBbaXNQbGF5LCBzZXRJc1BsYXldID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZSgpe1xyXG4gICAgYnRuID09IFwic3RvcGJ0bi5wbmdcIiA/IHNldEJ0bihcImdvYnRuLnBuZ1wiKSA6IHNldEJ0bihcInN0b3BidG4ucG5nXCIpO1xyXG4gICAgc2V0SXNQbGF5KCFpc1BsYXkpO1xyXG4gIH1cclxuXHJcbiAgbGV0IHRoaXNBZCA9IDA7XHJcbiAgY29uc3QgYWRJbWFnZSA9IFtcclxuICAgIHJvd3NbMF0uaW1hZ2VfcGF0aCxcclxuICAgIFwiaW5zaWRlMS5qcGdcIixcclxuICAgIFwiaW5zaWRlMi5qcGdcIixcclxuICAgIFwiaW5zaWRlMy5qcGdcIixcclxuICAgIFwiaW5zaWRlNC5qcGdcIixcclxuICAgIFwiaW5zaWRlNS5qcGdcIlxyXG4gIF07XHJcbiAgbGV0IHRpbWVIYW5kbGUgPSBudWxsO1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaXNQbGF5KSB7XHJcbiAgICAgIHRpbWVIYW5kbGUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgaWYodGhpc0FkID09PSBhZEltYWdlLmxlbmd0aCl7XHJcbiAgICAgICAgICB0aGlzQWQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTcmMoYWRJbWFnZVt0aGlzQWRdKTtcclxuICAgICAgICB0aGlzQWQrKztcclxuICAgICAgfSwgMTAwMClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZUhhbmRsZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lSGFuZGxlKTtcclxuICB9LCBbaXNQbGF5XSk7IFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuXHJcbiAgICA8TWV0YUhlYWQgLz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdlbHNlSGVhZGVyJz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvZXN0YXRlLWxvZ28uc3ZnXCIgd2lkdGg9XCIzMDBcIiBoZWlnaHQ9XCIxMDBcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiVWx0aW1vIFJlYWwgRXN0YXRlLCBTeWRuZXksIEF1c3RyYWxpYVwiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWUgPSBcInN1Ym5hdlwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWYgPSBcIi4vcHJvcGVydGllc1wiPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxwPiZsdDsgYmFjazwvcD5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPHA+IFByb3BlcnR5IDoge3Jvd3NbMF0uYWRkcmVzc308L3A+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lID0gXCJnYWxsZXJ5LW1haW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPHVsIGlkID0gXCJidG5zXCI+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgc3JjPXtcIi4uL3N0YXRpYy9cIiArIGJ0bn1cclxuICAgICAgICAgICAgICAgIGFsdD1cInNsaWRlIGFuaW1hdGlvbiBzdGFydHNcIiBcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7KCkgPT4gdG9nZ2xlKCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICBzcmM9e1wiLi4vc3RhdGljL1wiICsgaW1nU3JjfSBcclxuICAgICAgICAgICAgICBpZD1cImFkQmFubmVyXCIgXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX0gXHJcbiAgICAgICAgICAgICAgYWx0PVwiaG91c2UgcGljXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtbyBjdXJzb3JcIiBcclxuICAgICAgICAgICAgICBzcmM9e1wiLi4vc3RhdGljL1wiICsgcm93c1swXS5pbWFnZV9wYXRofVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiAnMTUwcHgnLCB3aWR0aDogJzEwMCUnfX0gXHJcbiAgICAgICAgICAgICAgaWQ9XCJyb3dJbWFnZXNcIiBcclxuICAgICAgICAgICAgICBhbHQ9XCJPdXRzaWRlXCIgXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U3JjKHJvd3NbMF0uaW1hZ2VfcGF0aCl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtbyBjdXJzb3JcIiBcclxuICAgICAgICAgICAgICBzcmM9XCIuLi9zdGF0aWMvaW5zaWRlMS5qcGdcIiBcclxuICAgICAgICAgICAgICBzdHlsZT17e2hlaWdodDogJzE1MHB4Jywgd2lkdGg6ICcxMDAlJ319IFxyXG4gICAgICAgICAgICAgIGlkPVwicm93SW1hZ2VzXCIgXHJcbiAgICAgICAgICAgICAgYWx0PVwiSW5zaWRlIGRlc2lnblwiIFxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNyYyhcImluc2lkZTEuanBnXCIpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8gY3Vyc29yXCIgXHJcbiAgICAgICAgICAgICAgc3JjPVwiLi4vc3RhdGljL2luc2lkZTIuanBnXCIgXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6ICcxNTBweCcsIHdpZHRoOiAnMTAwJSd9fSBcclxuICAgICAgICAgICAgICBpZD1cInJvd0ltYWdlc1wiIFxyXG4gICAgICAgICAgICAgIGFsdD1cIkJlZCBSb29tXCIgXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U3JjKFwiaW5zaWRlMi5qcGdcIil9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtbyBjdXJzb3JcIiBcclxuICAgICAgICAgICAgICBzcmM9XCIuLi9zdGF0aWMvaW5zaWRlMy5qcGdcIiBcclxuICAgICAgICAgICAgICBzdHlsZT17e2hlaWdodDogJzE1MHB4Jywgd2lkdGg6ICcxMDAlJ319IFxyXG4gICAgICAgICAgICAgIGlkPVwicm93SW1hZ2VzXCIgXHJcbiAgICAgICAgICAgICAgYWx0PVwiQmF0aCBSb29tXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTcmMoXCJpbnNpZGUzLmpwZ1wiKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vIGN1cnNvclwiIFxyXG4gICAgICAgICAgICAgIHNyYz1cIi4uL3N0YXRpYy9pbnNpZGU0LmpwZ1wiIFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiAnMTUwcHgnLCB3aWR0aDogJzEwMCUnfX0gXHJcbiAgICAgICAgICAgICAgaWQ9XCJyb3dJbWFnZXNcIiBcclxuICAgICAgICAgICAgICBhbHQ9XCJCZWQgUm9vbVwiIFxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNyYyhcImluc2lkZTQuanBnXCIpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8gY3Vyc29yXCIgXHJcbiAgICAgICAgICAgICAgc3JjPVwiLi4vc3RhdGljL2luc2lkZTUuanBnXCIgXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6ICcxNTBweCcsIHdpZHRoOiAnMTAwJSd9fSBcclxuICAgICAgICAgICAgICBpZD1cInJvd0ltYWdlc1wiIFxyXG4gICAgICAgICAgICAgIGFsdD1cImtpdGNoZW5cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNyYyhcImluc2lkZTUuanBnXCIpfSBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcHRpb24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8cCBpZD1cImNhcHRpb25cIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2VudGVyXCI+e3Jvd3NbMF0uYWRkcmVzc308L2gyPlxyXG4gICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICB7LyogZGVzY3JpcHRpb24gb2YgaG91c2VzICovfVxyXG4gICAgICAgIDxkaXYgaWQ9XCJmbGV4XCI+XHJcbiAgICAgICAgICB7LyogbGVmdCBzaWRlICovfVxyXG4gICAgICAgICAgPGRpdiBpZD1cImNvbHVtbjFcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaWNvbnNcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9iZWQucG5nXCIgYWx0PVwiaWNvbnNcIiAvPlxyXG4gICAgICAgICAgICAgIHtyb3dzWzBdLmJlZH1cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9zaG93ZXIucG5nXCIgYWx0PVwiaWNvbnNcIiAvPlxyXG4gICAgICAgICAgICAgIHtyb3dzWzBdLnNob3dlcn1cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9jYXIucG5nXCIgYWx0PVwiaWNvbnNcIiAvPlxyXG4gICAgICAgICAgICAgIHtyb3dzWzBdLmNhcn0gIHwgIFxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL3BsYW5uZXIucG5nXCIgYWx0PVwiaWNvbnNcIiAvPlxyXG4gICAgICAgICAgICAgIHtyb3dzWzBdLmluc3BlY3Rpb259XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWFyZ2luXCI+XHJcbiAgICAgICAgICAgICAgTGl2aW5nIGlzIGVhc3kgaW4gdGhpcyBmcmVzaGx5IHNjaGVtZWQgZnJlZXN0YW5kaW5nIGhvbWUgaW4gYSBxdWlldCBjdWwtZGUtc2FjIGEgc2hvcnQgc3Ryb2xsIEZlYXR1cmluZyBhIDE1bSBzdHJlZXQgZnJvbnRhZ2UgYW5kIGRvdWJsZSBwYXJraW5nLCB0aGUgdGhyZWUgYmVkcm9vbSBob21lJ3MgZmx1aWQgdmlsbGEtbGlrZSBsYXlvdXQgaXMgaWRlYWwgZm9yIHRoZSB5b3VuZyBmYW1pbHkgb3IgZG93bnNpemVyIHdpdGggc3VuLWZpbGxlZCBsaXZpbmcgc3BhY2Ugb3BlbmluZyB0byBhIGxhbmRzY2FwZWQgbm9ydGggZmFjaW5nIGdhcmRlbi4gT25lIG9mIG9ubHkgYSBoYW5kZnVsIG9mIGhvbWVzIGluIGEgcGVhY2VmdWwgZW5jbGF2ZSB3aXRoIG5vLXRocm91Z2ggdHJhZmZpYywgdGhlIGltbWFjdWxhdGVseSBwcmVzZW50ZWQgaG9tZSBpcyA4NTBtIHRvIG5lYXJlc3Qgc3RhdGlvbiBhbmQgdG93biBjZW50cmUgd2l0aCBjbG9zZSBwcm94aW1pdHkgdG8gaGlzdG9yaWMgc3lkbmV5IFBhcmsuIEluIHRoZSBoZWFydCBvZiB0aGUgaW5uZXIgd2VzdCwgc3lkbmV5IGlzIG9uIHRoZSBicmluayBvZiBhIGJvb20gd2l0aCBjbG9zZSBwcm94aW1pdHksIGV4Y2VsbGVudCB0cmFuc3BvcnQgbGlua3MgYW5kIGdyZWF0IHNjaG9vbHMuXHJcbiAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgLSBEb3VibGUgZnJvbnRlZCBmcmVlc3RhbmRpbmcgaG9tZSBpbiBhIHF1aWV0IGN1bC1kZS1zYWNcclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAtIE1vZGVybiBsaWdodC1maWxsZWQgaW50ZXJpb3JzLCBlYXN5IGluZG9vci9vdXRkb29yIGZsb3dcclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAtIDMgYmVkcm9vbXMgd2l0aCBidWlsdC1pbnMsIDIgd2l0aCBhIHRyYW5xdWlsIGdhcmRlbiBvdXRsb29rXHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgLSBMYXJnZSBtYWluIGJlZHJvb20sIDIgd2F5IGJhdGhyb29tIGFuZCBhIHBvd2RlciByb29tXHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgLSBTcGFjaW91cyBsaXZpbmcgYW5kIGRpbmluZyBmZWF0dXJpbmcgZWFzeWNhcmUgdGltYmVyIGZsb29yc1xyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIC0gVGVycmFjZSBhbmQgYSBsZXZlbCBsYW5kc2NhcGVkIGdhcmRlbiBiYXRoZWQgaW4gc3Vuc2hpbmVcclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAtIEdyYW5pdGUga2l0Y2hlbiB3aXRoIFNtZWcgZ2FzIGNvb2tlciwgcGxlbnRpZnVsIGJlbmNoIHNwYWNlXHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgLSBGdWxsIHNpemUgbGF1bmRyeSwgZG93bmxpZ2h0cywgcGx1c2ggY2FycGV0aW5nXHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgLSBMb2NrLXVwIGdhcmFnZSBwbHVzIG9mZiBzdHJlZXQgcGFya2luZywgc3Ryb2xsIHRvIGNpdHkgYnVzZXNcclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAtIFdhbGsgdG8gdGhlIHNvb24tdG8tYmUtY29tcGxldGVkIEFxdWF0aWMgQ2VudHJlXHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHsvKiByaWdodCBzaWRlICovfVxyXG4gICAgICAgICAgPGRpdiBpZD1cImNvbHVtbjJcIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7bWFyZ2luVG9wOiAnMTBweCd9fT5cclxuICAgICAgICAgICAgICAgICAge3Jvd3NbMF0ubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi4uL3N0YXRpYy9cIisgcm93c1swXS5hZ2VudHNfcGhvdG99IHdpZHRoPXs3MH0gaGVpZ2h0PXs3MH0gXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiAnNTAlJywgbWFyZ2luOiAnMTBweCd9fSBcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiYWdlbmN5LXBob3RvXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL3Bob25lLnBuZ1wiIGFsdD1cInBob25lLWljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICBjYWxsIFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3BhZGRpbmdUb3A6ICczMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICBVbHRpbW8gUmVhbCBFc3RhdGVcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdtYXAgbWFyZ2luIHRleHRcIj5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL3N0YXRpYy9ob3VzZS5wbmdcIiBcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiaWNvbnNcIiBcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSBcInJpZ2h0QWJpdFwiIFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgfCB7cm93c1swXS5hZGRyZXNzfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8aWZyYW1lIFxyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMjc0NS41MTQ0NjA2OTkzNTA0ITJkMTUxLjIwNTQ5ODkzMzE3ODMyITNkLTMzLjg3NzQwMTYwNTUxNDI5ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg2YjEyYWUzY2M5ZDgwMzliJTNBMHgxYjBiZDVkZDU3YWY0OTVmITJzV29ybGQlMjBTcXVhcmUhNWUwITNtMiExc2VuITJzYXUhNHYxNTg1NjkzODc3OTQ1ITVtMiExc2VuITJzYXVcIiBcclxuICAgICAgICAgICAgICAgIHdpZHRoPXszMDB9IFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXszMDB9IFxyXG4gICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuIGFyaWEtaGlkZGVuPVwiZmFsc2VcIiBcclxuICAgICAgICAgICAgICAgIHRhYkdhbGxlcnk9ezB9IFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICA8Rm9vdGVyIC8+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==