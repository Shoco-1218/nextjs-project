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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar */ "./pages/NavBar.js");
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Head */ "./pages/Head.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./pages/Footer.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Index(_ref) {
  var rows = _ref.rows;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Head__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx("div", {
    className: "App"
  }, __jsx("header", {
    className: "elseHeader"
  }, __jsx("div", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/"
  }, __jsx("a", null, __jsx("img", {
    src: "../static/estate-logo.svg",
    width: "300",
    height: "100",
    alt: "Ultimo Real Estate, Sydney, Australia"
  })))), __jsx(_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], null)), __jsx("div", {
    className: "subnav"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "../property"
  }, __jsx("a", null, __jsx("p", null, "< back"))), __jsx("p", null, " Property : ", rows[0].address)), __jsx("main", {
    className: "gallery-main"
  }, __jsx("div", {
    className: "container"
  }, __jsx("ul", {
    id: "btns"
  }, __jsx("li", null, __jsx("img", {
    src: "../static/gobtn.png",
    id: "goBtn",
    alt: "slide animation starts"
  })), __jsx("li", null, __jsx("img", {
    src: "../static/stopbtn.png",
    id: "stopBtn",
    alt: "slide animation starts"
  }))), __jsx("a", {
    href: true
  }, __jsx("img", {
    src: "../static/" + rows[0].image_path,
    id: "adBanner",
    style: {
      width: '100%'
    },
    alt: "house pic"
  }))), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "column"
  }, __jsx("img", {
    className: "demo cursor",
    src: "../static/" + rows[0].image_path,
    style: {
      height: '150px',
      width: '100%'
    },
    id: "rowImages",
    alt: "Outside"
  })), __jsx("div", {
    className: "column"
  }, __jsx("img", {
    className: "demo cursor",
    src: "../static/inside1.jpg",
    style: {
      height: '150px',
      width: '100%'
    },
    id: "rowImages",
    alt: "Inside design"
  })), __jsx("div", {
    className: "column"
  }, __jsx("img", {
    className: "demo cursor",
    src: "../static/inside2.jpg",
    style: {
      height: '150px',
      width: '100%'
    },
    id: "rowImages",
    alt: "Bed Room"
  })), __jsx("div", {
    className: "column"
  }, __jsx("img", {
    className: "demo cursor",
    src: "../static/inside3.jpg",
    style: {
      height: '150px',
      width: '100%'
    },
    id: "rowImages",
    alt: "Bath Room"
  })), __jsx("div", {
    className: "column"
  }, __jsx("img", {
    className: "demo cursor",
    src: "../static/inside4.jpg",
    style: {
      height: '150px',
      width: '100%'
    },
    id: "rowImages",
    alt: "Bed Room"
  })), __jsx("div", {
    className: "column"
  }, __jsx("img", {
    className: "demo cursor",
    src: "../static/inside5.jpg",
    style: {
      height: '150px',
      width: '100%'
    },
    id: "rowImages",
    alt: "kitchen"
  }))), __jsx("div", {
    className: "caption-container"
  }, __jsx("p", {
    id: "caption"
  })), __jsx("h2", {
    className: "margin text"
  }, rows[0].address), __jsx("br", null), __jsx("div", {
    id: "flex"
  }, __jsx("div", {
    id: "column1"
  }, __jsx("p", {
    className: "icons"
  }, __jsx("img", {
    src: "../static/bed.png",
    alt: "icons"
  }), rows[0].bed, __jsx("img", {
    src: "../static/shower.png",
    alt: "icons"
  }), rows[0].shower, __jsx("img", {
    src: "../static/car.png",
    alt: "icons"
  }), rows[0].car, "  |", __jsx("img", {
    src: "../static/planner.png",
    alt: "icons"
  }), rows[0].inspection), __jsx("p", {
    className: "margin"
  }, "Living is easy in this freshly schemed freestanding home in a quiet cul-de-sac a short stroll Featuring a 15m street frontage and double parking, the three bedroom home's fluid villa-like layout is ideal for the young family or downsizer with sun-filled living space opening to a landscaped north facing garden. One of only a handful of homes in a peaceful enclave with no-through traffic, the immaculately presented home is 850m to nearest station and town centre with close proximity to historic sydney Park. In the heart of the inner west, sydney is on the brink of a boom with close proximity, excellent transport links and great schools.", __jsx("br", null), __jsx("br", null), "- Double fronted freestanding home in a quiet cul-de-sac", __jsx("br", null), "- Modern light-filled interiors, easy indoor/outdoor flow", __jsx("br", null), "- 3 bedrooms with built-ins, 2 with a tranquil garden outlook", __jsx("br", null), "- Large main bedroom, 2 way bathroom and a powder room", __jsx("br", null), "- Spacious living and dining featuring easycare timber floors", __jsx("br", null), "- Terrace and a level landscaped garden bathed in sunshine", __jsx("br", null), "- Granite kitchen with Smeg gas cooker, plentiful bench space", __jsx("br", null), "- Full size laundry, downlights, plush carpeting", __jsx("br", null), "- Lock-up garage plus off street parking, stroll to city buses", __jsx("br", null), "- Walk to the soon-to-be-completed Aquatic Centre", __jsx("br", null))), __jsx("div", {
    id: "column2"
  }, __jsx("ul", null, __jsx("li", null, __jsx("p", {
    style: {
      marginTop: '10px'
    }
  }, rows[0].name)), __jsx("li", null, __jsx("a", {
    href: "#"
  }, __jsx("img", {
    src: "../static/" + rows[0].agents_photo,
    width: 70,
    height: 70,
    style: {
      borderRadius: '50%',
      margin: '10px'
    },
    alt: "agency-photo"
  }))), __jsx("li", null, __jsx("button", null, __jsx("img", {
    src: "../static/phone.png",
    alt: "phone-icon"
  }), "call")), __jsx("li", null, __jsx("p", {
    style: {
      paddingTop: '30px'
    }
  }, "Ultimo Real Estate"))), __jsx("div", {
    className: "gmap margin text"
  }, __jsx("p", null, __jsx("img", {
    src: "../static/house.png",
    alt: "icons"
  }), "| ", rows[0].address), __jsx("br", null), __jsx("iframe", {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2745.5144606993504!2d151.20549893317832!3d-33.87740160551429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3cc9d8039b%3A0x1b0bd5dd57af495f!2sWorld%20Square!5e0!3m2!1sen!2sau!4v1585693877945!5m2!1sen!2sau",
    width: 300,
    height: 300,
    allowFullScreen: true,
    "aria-hidden": "false",
    tabIndex: 0
  }))))), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
}

_c = Index;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9nYWxsZXJ5LmpzIl0sIm5hbWVzIjpbIkluZGV4Iiwicm93cyIsImFkZHJlc3MiLCJpbWFnZV9wYXRoIiwid2lkdGgiLCJoZWlnaHQiLCJiZWQiLCJzaG93ZXIiLCJjYXIiLCJpbnNwZWN0aW9uIiwibWFyZ2luVG9wIiwibmFtZSIsImFnZW50c19waG90byIsImJvcmRlclJhZGl1cyIsIm1hcmdpbiIsInBhZGRpbmdUb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFvQkEsU0FBU0EsS0FBVCxPQUF3QjtBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTztBQUV0QixTQUNFLG1FQUVBLE1BQUMsNkNBQUQsT0FGQSxFQUdBO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFRLGFBQVMsRUFBQztBQUFsQixLQUNFLG1CQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLGlCQUNFO0FBQUssT0FBRyxFQUFDLDJCQUFUO0FBQXFDLFNBQUssRUFBQyxLQUEzQztBQUFpRCxVQUFNLEVBQUMsS0FBeEQ7QUFDRSxPQUFHLEVBQUM7QUFETixJQURGLENBREYsQ0FERixDQURGLEVBU0UsTUFBQywrQ0FBRCxPQVRGLENBREYsRUFhRTtBQUFLLGFBQVMsRUFBRztBQUFqQixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUc7QUFBYixLQUNFLGlCQUNFLDBCQURGLENBREYsQ0FERixFQU1FLGlDQUFnQkEsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRQyxPQUF4QixDQU5GLENBYkYsRUFzQkU7QUFBTSxhQUFTLEVBQUc7QUFBbEIsS0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSSxNQUFFLEVBQUc7QUFBVCxLQUNFLGtCQUNFO0FBQUssT0FBRyxFQUFDLHFCQUFUO0FBQStCLE1BQUUsRUFBQyxPQUFsQztBQUEwQyxPQUFHLEVBQUM7QUFB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U0FERixDQWJGLEVBbUJFLGtCQUNFO0FBQUcsU0FBSyxFQUFFO0FBQUNDLGdCQUFVLEVBQUU7QUFBYjtBQUFWLDBCQURGLENBbkJGLENBREYsRUEwQkU7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLGlCQUNFO0FBQUssT0FBRyxFQUFDLHFCQUFUO0FBQStCLE9BQUcsRUFBQztBQUFuQyxJQURGLFFBRU9kLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUMsT0FGZixDQURGLEVBS0UsaUJBTEYsRUFNRTtBQUFRLE9BQUcsRUFBQywrUUFBWjtBQUE0UixTQUFLLEVBQUUsR0FBblM7QUFBd1MsVUFBTSxFQUFFLEdBQWhUO0FBQXFULG1CQUFlLE1BQXBVO0FBQXFVLG1CQUFZLE9BQWpWO0FBQXlWLFlBQVEsRUFBRTtBQUFuVyxJQU5GLENBMUJGLENBeENGLENBM0RGLENBdEJGLEVBZ0tFLE1BQUMsK0NBQUQsT0FoS0YsQ0FIQSxDQURGO0FBeUtEOztLQTNLUUYsSzs7QUE2S01BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxnYWxsZXJ5LmpzLmQ1N2Q0NjZlOGE5ODhiMDBiYjJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2QmFyIGZyb20gJy4vTmF2QmFyJztcclxuaW1wb3J0IE1ldGFIZWFkIGZyb20gJy4vSGVhZCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBxdWVyeUFzeW5jIGZyb20gJy4uL215c3FsJztcclxuXHJcbmltcG9ydCAnLi4vc3R5bGUuY3NzJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMocmVxLCByZXMpe1xyXG5cclxuICBsZXQgaWROdW1iZXIgPSBwYXJzZUludChyZXEucXVlcnkuaWQpO1xyXG4gIGxldCBxdWVyeSA9IFxyXG4gICAgXCJTRUxFQ1QgcHJvcGVydHkuaWQsIHByb3BlcnR5LmFkZHJlc3MsIHByb3BlcnR5LmltYWdlX3BhdGgscHJvcGVydHkuaW5zcGVjdGlvbiwgcHJvcGVydHkuYmVkLCBwcm9wZXJ0eS5zaG93ZXIsIHByb3BlcnR5LmNhciwgYWdlbnRzLm5hbWUsIGFnZW50cy5hZ2VudHNfcGhvdG8gRlJPTSAocHJvcGVydHkgSk9JTiBhZ2VudHMgT04gcHJvcGVydHkuYWdlbnRfaWQgPSBhZ2VudHMuaWQpIFdIRVJFIHByb3BlcnR5LmlkID0gXCJcclxuICAgICsgaWROdW1iZXI7XHJcbiAgbGV0IGRiZGF0YSA9IGF3YWl0IHF1ZXJ5QXN5bmMocXVlcnkpO1xyXG5cclxuICBsZXQgcm93cyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGJkYXRhKSk7XHJcblxyXG4gIFxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczp7XHJcbiAgICAgIHJvd3NcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBJbmRleCh7IHJvd3MgfSl7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG5cclxuICAgIDxNZXRhSGVhZCAvPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9J2Vsc2VIZWFkZXInPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9lc3RhdGUtbG9nby5zdmdcIiB3aWR0aD1cIjMwMFwiIGhlaWdodD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJVbHRpbW8gUmVhbCBFc3RhdGUsIFN5ZG5leSwgQXVzdHJhbGlhXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxOYXZCYXIgLz5cclxuICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwic3VibmF2XCI+XHJcbiAgICAgICAgPExpbmsgaHJlZiA9IFwiLi4vcHJvcGVydHlcIj5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8cD4mbHQ7IGJhY2s8L3A+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxwPiBQcm9wZXJ0eSA6IHtyb3dzWzBdLmFkZHJlc3N9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZSA9IFwiZ2FsbGVyeS1tYWluXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDx1bCBpZCA9IFwiYnRuc1wiPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvZ29idG4ucG5nXCIgaWQ9XCJnb0J0blwiIGFsdD1cInNsaWRlIGFuaW1hdGlvbiBzdGFydHNcIiAvPlxyXG4gICAgICAgICAgICAgIHsvKiBvbmNsaWNrID0gXCJyZXN0YXJ0KClcIiAqL31cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL3N0b3BidG4ucG5nXCIgaWQ9XCJzdG9wQnRuXCIgYWx0PVwic2xpZGUgYW5pbWF0aW9uIHN0YXJ0c1wiIC8+XHJcbiAgICAgICAgICAgICAgey8qIG9uY2xpY2sgPSBcInN0b3AoKVwiICovfVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDxhIGhyZWY+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtcIi4uL3N0YXRpYy9cIiArIHJvd3NbMF0uaW1hZ2VfcGF0aH0gaWQ9XCJhZEJhbm5lclwiIFxyXG4gICAgICAgICAgICBzdHlsZT17e3dpZHRoOiAnMTAwJSd9fSBhbHQ9XCJob3VzZSBwaWNcIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJkZW1vIGN1cnNvclwiIHNyYz17XCIuLi9zdGF0aWMvXCIgKyByb3dzWzBdLmltYWdlX3BhdGh9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiAnMTUwcHgnLCB3aWR0aDogJzEwMCUnfX0gaWQ9XCJyb3dJbWFnZXNcIiBhbHQ9XCJPdXRzaWRlXCIgLz5cclxuICAgICAgICAgICAgey8qIG9uY2xpY2s9XCJjdXJyZW50U2xpZGUoMSlcIiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJkZW1vIGN1cnNvclwiIHNyYz1cIi4uL3N0YXRpYy9pbnNpZGUxLmpwZ1wiIFxyXG4gICAgICAgICAgICBzdHlsZT17e2hlaWdodDogJzE1MHB4Jywgd2lkdGg6ICcxMDAlJ319IGlkPVwicm93SW1hZ2VzXCIgYWx0PVwiSW5zaWRlIGRlc2lnblwiIC8+XHJcbiAgICAgICAgICAgIHsvKiBvbmNsaWNrPVwiY3VycmVudFNsaWRlKDIpXCIgKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZGVtbyBjdXJzb3JcIiBzcmM9XCIuLi9zdGF0aWMvaW5zaWRlMi5qcGdcIiBcclxuICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6ICcxNTBweCcsIHdpZHRoOiAnMTAwJSd9fSBpZD1cInJvd0ltYWdlc1wiIGFsdD1cIkJlZCBSb29tXCIgLz5cclxuICAgICAgICAgICAgey8qIG9uY2xpY2s9XCJjdXJyZW50U2xpZGUoMylcIiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJkZW1vIGN1cnNvclwiIHNyYz1cIi4uL3N0YXRpYy9pbnNpZGUzLmpwZ1wiIFxyXG4gICAgICAgICAgICBzdHlsZT17e2hlaWdodDogJzE1MHB4Jywgd2lkdGg6ICcxMDAlJ319IGlkPVwicm93SW1hZ2VzXCIgYWx0PVwiQmF0aCBSb29tXCIgLz5cclxuICAgICAgICAgICAgey8qIG9uY2xpY2s9XCJjdXJyZW50U2xpZGUoNClcIiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJkZW1vIGN1cnNvclwiIHNyYz1cIi4uL3N0YXRpYy9pbnNpZGU0LmpwZ1wiIFxyXG4gICAgICAgICAgICBzdHlsZT17e2hlaWdodDogJzE1MHB4Jywgd2lkdGg6ICcxMDAlJ319IGlkPVwicm93SW1hZ2VzXCIgYWx0PVwiQmVkIFJvb21cIiAvPlxyXG4gICAgICAgICAgICB7Lyogb25jbGljaz1cImN1cnJlbnRTbGlkZSg1KVwiICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImRlbW8gY3Vyc29yXCIgc3JjPVwiLi4vc3RhdGljL2luc2lkZTUuanBnXCIgXHJcbiAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiAnMTUwcHgnLCB3aWR0aDogJzEwMCUnfX0gaWQ9XCJyb3dJbWFnZXNcIiBhbHQ9XCJraXRjaGVuXCIgLz5cclxuICAgICAgICAgICAgey8qIG9uY2xpY2s9XCJjdXJyZW50U2xpZGUoNilcIiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcHRpb24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8cCBpZD1cImNhcHRpb25cIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWFyZ2luIHRleHRcIj57cm93c1swXS5hZGRyZXNzfTwvaDI+XHJcbiAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgIHsvKiBkZXNjcmlwdGlvbiBvZiBob3VzZXMgKi99XHJcbiAgICAgICAgPGRpdiBpZD1cImZsZXhcIj5cclxuICAgICAgICAgIHsvKiBsZWZ0IHNpZGUgKi99XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiY29sdW1uMVwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpY29uc1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2JlZC5wbmdcIiBhbHQ9XCJpY29uc1wiIC8+XHJcbiAgICAgICAgICAgICAge3Jvd3NbMF0uYmVkfVxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL3Nob3dlci5wbmdcIiBhbHQ9XCJpY29uc1wiIC8+XHJcbiAgICAgICAgICAgICAge3Jvd3NbMF0uc2hvd2VyfVxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2Nhci5wbmdcIiBhbHQ9XCJpY29uc1wiIC8+XHJcbiAgICAgICAgICAgICAge3Jvd3NbMF0uY2FyfSAgfCAgXHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvcGxhbm5lci5wbmdcIiBhbHQ9XCJpY29uc1wiIC8+XHJcbiAgICAgICAgICAgICAge3Jvd3NbMF0uaW5zcGVjdGlvbn1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYXJnaW5cIj5cclxuICAgICAgICAgICAgICBMaXZpbmcgaXMgZWFzeSBpbiB0aGlzIGZyZXNobHkgc2NoZW1lZCBmcmVlc3RhbmRpbmcgaG9tZSBpbiBhIHF1aWV0IGN1bC1kZS1zYWMgYSBzaG9ydCBzdHJvbGwgRmVhdHVyaW5nIGEgMTVtIHN0cmVldCBmcm9udGFnZSBhbmQgZG91YmxlIHBhcmtpbmcsIHRoZSB0aHJlZSBiZWRyb29tIGhvbWUncyBmbHVpZCB2aWxsYS1saWtlIGxheW91dCBpcyBpZGVhbCBmb3IgdGhlIHlvdW5nIGZhbWlseSBvciBkb3duc2l6ZXIgd2l0aCBzdW4tZmlsbGVkIGxpdmluZyBzcGFjZSBvcGVuaW5nIHRvIGEgbGFuZHNjYXBlZCBub3J0aCBmYWNpbmcgZ2FyZGVuLiBPbmUgb2Ygb25seSBhIGhhbmRmdWwgb2YgaG9tZXMgaW4gYSBwZWFjZWZ1bCBlbmNsYXZlIHdpdGggbm8tdGhyb3VnaCB0cmFmZmljLCB0aGUgaW1tYWN1bGF0ZWx5IHByZXNlbnRlZCBob21lIGlzIDg1MG0gdG8gbmVhcmVzdCBzdGF0aW9uIGFuZCB0b3duIGNlbnRyZSB3aXRoIGNsb3NlIHByb3hpbWl0eSB0byBoaXN0b3JpYyBzeWRuZXkgUGFyay4gSW4gdGhlIGhlYXJ0IG9mIHRoZSBpbm5lciB3ZXN0LCBzeWRuZXkgaXMgb24gdGhlIGJyaW5rIG9mIGEgYm9vbSB3aXRoIGNsb3NlIHByb3hpbWl0eSwgZXhjZWxsZW50IHRyYW5zcG9ydCBsaW5rcyBhbmQgZ3JlYXQgc2Nob29scy5cclxuICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cclxuICAgICAgICAgICAgICAtIERvdWJsZSBmcm9udGVkIGZyZWVzdGFuZGluZyBob21lIGluIGEgcXVpZXQgY3VsLWRlLXNhY1xyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIC0gTW9kZXJuIGxpZ2h0LWZpbGxlZCBpbnRlcmlvcnMsIGVhc3kgaW5kb29yL291dGRvb3IgZmxvd1xyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIC0gMyBiZWRyb29tcyB3aXRoIGJ1aWx0LWlucywgMiB3aXRoIGEgdHJhbnF1aWwgZ2FyZGVuIG91dGxvb2tcclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAtIExhcmdlIG1haW4gYmVkcm9vbSwgMiB3YXkgYmF0aHJvb20gYW5kIGEgcG93ZGVyIHJvb21cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAtIFNwYWNpb3VzIGxpdmluZyBhbmQgZGluaW5nIGZlYXR1cmluZyBlYXN5Y2FyZSB0aW1iZXIgZmxvb3JzXHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgLSBUZXJyYWNlIGFuZCBhIGxldmVsIGxhbmRzY2FwZWQgZ2FyZGVuIGJhdGhlZCBpbiBzdW5zaGluZVxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIC0gR3Jhbml0ZSBraXRjaGVuIHdpdGggU21lZyBnYXMgY29va2VyLCBwbGVudGlmdWwgYmVuY2ggc3BhY2VcclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAtIEZ1bGwgc2l6ZSBsYXVuZHJ5LCBkb3dubGlnaHRzLCBwbHVzaCBjYXJwZXRpbmdcclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAtIExvY2stdXAgZ2FyYWdlIHBsdXMgb2ZmIHN0cmVldCBwYXJraW5nLCBzdHJvbGwgdG8gY2l0eSBidXNlc1xyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIC0gV2FsayB0byB0aGUgc29vbi10by1iZS1jb21wbGV0ZWQgQXF1YXRpYyBDZW50cmVcclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgey8qIHJpZ2h0IHNpZGUgKi99XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiY29sdW1uMlwiPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3ttYXJnaW5Ub3A6ICcxMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICB7cm93c1swXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiLi4vc3RhdGljL1wiKyByb3dzWzBdLmFnZW50c19waG90b30gd2lkdGg9ezcwfSBoZWlnaHQ9ezcwfSBcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tib3JkZXJSYWRpdXM6ICc1MCUnLCBtYXJnaW46ICcxMHB4J319IFxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJhZ2VuY3ktcGhvdG9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvcGhvbmUucG5nXCIgYWx0PVwicGhvbmUtaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIGNhbGwgXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7cGFkZGluZ1RvcDogJzMwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgIFVsdGltbyBSZWFsIEVzdGF0ZVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ21hcCBtYXJnaW4gdGV4dFwiPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvaG91c2UucG5nXCIgYWx0PVwiaWNvbnNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICB8IHtyb3dzWzBdLmFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMjc0NS41MTQ0NjA2OTkzNTA0ITJkMTUxLjIwNTQ5ODkzMzE3ODMyITNkLTMzLjg3NzQwMTYwNTUxNDI5ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg2YjEyYWUzY2M5ZDgwMzliJTNBMHgxYjBiZDVkZDU3YWY0OTVmITJzV29ybGQlMjBTcXVhcmUhNWUwITNtMiExc2VuITJzYXUhNHYxNTg1NjkzODc3OTQ1ITVtMiExc2VuITJzYXVcIiB3aWR0aD17MzAwfSBoZWlnaHQ9ezMwMH0gYWxsb3dGdWxsU2NyZWVuIGFyaWEtaGlkZGVuPVwiZmFsc2VcIiB0YWJJbmRleD17MH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgIDxGb290ZXIgLz5cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==