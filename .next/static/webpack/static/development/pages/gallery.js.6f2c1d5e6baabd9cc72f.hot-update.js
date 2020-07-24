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
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, null), __jsx("a", {
    href: "../property"
  }, __jsx("p", null, "< back")), __jsx("p", null, " Property > ", rows[0].address)), __jsx("main", {
    className: "gallery-main"
  }, __jsx("div", {
    className: "container"
  }, __jsx("ul", null, __jsx("li", null, __jsx("img", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9nYWxsZXJ5LmpzIl0sIm5hbWVzIjpbIkluZGV4Iiwicm93cyIsImFkZHJlc3MiLCJpbWFnZV9wYXRoIiwid2lkdGgiLCJoZWlnaHQiLCJiZWQiLCJzaG93ZXIiLCJjYXIiLCJpbnNwZWN0aW9uIiwibWFyZ2luVG9wIiwibmFtZSIsImFnZW50c19waG90byIsImJvcmRlclJhZGl1cyIsIm1hcmdpbiIsInBhZGRpbmdUb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFvQkEsU0FBU0EsS0FBVCxPQUF3QjtBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTztBQUV0QixTQUNFLG1FQUVBLE1BQUMsNkNBQUQsT0FGQSxFQUdBO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFRLGFBQVMsRUFBQztBQUFsQixLQUNFLG1CQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLGlCQUNFO0FBQUssT0FBRyxFQUFDLDJCQUFUO0FBQXFDLFNBQUssRUFBQyxLQUEzQztBQUFpRCxVQUFNLEVBQUMsS0FBeEQ7QUFDRSxPQUFHLEVBQUM7QUFETixJQURGLENBREYsQ0FERixDQURGLEVBU0UsTUFBQywrQ0FBRCxPQVRGLENBREYsRUFhRTtBQUFLLGFBQVMsRUFBRztBQUFqQixLQUNFLE1BQUMsZ0RBQUQsT0FERixFQUdFO0FBQUcsUUFBSSxFQUFHO0FBQVYsS0FDRSwwQkFERixDQUhGLEVBTUUsaUNBQW1CQSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFDLE9BQTNCLENBTkYsQ0FiRixFQXNCRTtBQUFNLGFBQVMsRUFBRztBQUFsQixLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSxrQkFDRSxrQkFDRTtBQUFLLE9BQUcsRUFBQyxxQkFBVDtBQUErQixNQUFFLEVBQUMsT0FBbEM7QUFBMEMsT0FBRyxFQUFDO0FBQTlDLElBREYsQ0FERixFQUtFLGtC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RTtBQUFHLFNBQUssRUFBRTtBQUFDQyxnQkFBVSxFQUFFO0FBQWI7QUFBViwwQkFERixDQW5CRixDQURGLEVBMEJFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSxpQkFDRTtBQUFLLE9BQUcsRUFBQyxxQkFBVDtBQUErQixPQUFHLEVBQUM7QUFBbkMsSUFERixRQUVPZCxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFDLE9BRmYsQ0FERixFQUtFLGlCQUxGLEVBTUU7QUFBUSxPQUFHLEVBQUMsK1FBQVo7QUFBNFIsU0FBSyxFQUFFLEdBQW5TO0FBQXdTLFVBQU0sRUFBRSxHQUFoVDtBQUFxVCxtQkFBZSxNQUFwVTtBQUFxVSxtQkFBWSxPQUFqVjtBQUF5VixZQUFRLEVBQUU7QUFBblcsSUFORixDQTFCRixDQXhDRixDQTFERixDQXRCRixFQStKRSxNQUFDLCtDQUFELE9BL0pGLENBSEEsQ0FERjtBQXdLRDs7S0ExS1FGLEs7O0FBNEtNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZ2FsbGVyeS5qcy42ZjJjMWQ1ZTZiYWFiZDljYzcyZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdkJhciBmcm9tICcuL05hdkJhcic7XHJcbmltcG9ydCBNZXRhSGVhZCBmcm9tICcuL0hlYWQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgcXVlcnlBc3luYyBmcm9tICcuLi9teXNxbCc7XHJcblxyXG5pbXBvcnQgJy4uL3N0eWxlLmNzcyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHJlcSwgcmVzKXtcclxuXHJcbiAgbGV0IGlkTnVtYmVyID0gcGFyc2VJbnQocmVxLnF1ZXJ5LmlkKTtcclxuICBsZXQgcXVlcnkgPSBcclxuICAgIFwiU0VMRUNUIHByb3BlcnR5LmlkLCBwcm9wZXJ0eS5hZGRyZXNzLCBwcm9wZXJ0eS5pbWFnZV9wYXRoLHByb3BlcnR5Lmluc3BlY3Rpb24sIHByb3BlcnR5LmJlZCwgcHJvcGVydHkuc2hvd2VyLCBwcm9wZXJ0eS5jYXIsIGFnZW50cy5uYW1lLCBhZ2VudHMuYWdlbnRzX3Bob3RvIEZST00gKHByb3BlcnR5IEpPSU4gYWdlbnRzIE9OIHByb3BlcnR5LmFnZW50X2lkID0gYWdlbnRzLmlkKSBXSEVSRSBwcm9wZXJ0eS5pZCA9IFwiXHJcbiAgICArIGlkTnVtYmVyO1xyXG4gIGxldCBkYmRhdGEgPSBhd2FpdCBxdWVyeUFzeW5jKHF1ZXJ5KTtcclxuXHJcbiAgbGV0IHJvd3MgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRiZGF0YSkpO1xyXG5cclxuICBcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6e1xyXG4gICAgICByb3dzXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gSW5kZXgoeyByb3dzIH0pe1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuXHJcbiAgICA8TWV0YUhlYWQgLz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdlbHNlSGVhZGVyJz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvZXN0YXRlLWxvZ28uc3ZnXCIgd2lkdGg9XCIzMDBcIiBoZWlnaHQ9XCIxMDBcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiVWx0aW1vIFJlYWwgRXN0YXRlLCBTeWRuZXksIEF1c3RyYWxpYVwiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWUgPSBcInN1Ym5hdlwiPlxyXG4gICAgICAgIDxMaW5rPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8YSBocmVmID0gXCIuLi9wcm9wZXJ0eVwiPlxyXG4gICAgICAgICAgPHA+Jmx0OyBiYWNrPC9wPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8cD4gUHJvcGVydHkgJmd0OyB7cm93c1swXS5hZGRyZXNzfTwvcD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWUgPSBcImdhbGxlcnktbWFpblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9nb2J0bi5wbmdcIiBpZD1cImdvQnRuXCIgYWx0PVwic2xpZGUgYW5pbWF0aW9uIHN0YXJ0c1wiIC8+XHJcbiAgICAgICAgICAgICAgey8qIG9uY2xpY2sgPSBcInJlc3RhcnQoKVwiICovfVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvc3RvcGJ0bi5wbmdcIiBpZD1cInN0b3BCdG5cIiBhbHQ9XCJzbGlkZSBhbmltYXRpb24gc3RhcnRzXCIgLz5cclxuICAgICAgICAgICAgICB7Lyogb25jbGljayA9IFwic3RvcCgpXCIgKi99XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPGEgaHJlZj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e1wiLi4vc3RhdGljL1wiICsgcm93c1swXS5pbWFnZV9wYXRofSBpZD1cImFkQmFubmVyXCIgXHJcbiAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICcxMDAlJ319IGFsdD1cImhvdXNlIHBpY1wiIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZGVtbyBjdXJzb3JcIiBzcmM9e1wiLi4vc3RhdGljL1wiICsgcm93c1swXS5pbWFnZV9wYXRofVxyXG4gICAgICAgICAgICBzdHlsZT17e2hlaWdodDogJzE1MHB4Jywgd2lkdGg6ICcxMDAlJ319IGlkPVwicm93SW1hZ2VzXCIgYWx0PVwiT3V0c2lkZVwiIC8+XHJcbiAgICAgICAgICAgIHsvKiBvbmNsaWNrPVwiY3VycmVudFNsaWRlKDEpXCIgKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZGVtbyBjdXJzb3JcIiBzcmM9XCIuLi9zdGF0aWMvaW5zaWRlMS5qcGdcIiBcclxuICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6ICcxNTBweCcsIHdpZHRoOiAnMTAwJSd9fSBpZD1cInJvd0ltYWdlc1wiIGFsdD1cIkluc2lkZSBkZXNpZ25cIiAvPlxyXG4gICAgICAgICAgICB7Lyogb25jbGljaz1cImN1cnJlbnRTbGlkZSgyKVwiICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImRlbW8gY3Vyc29yXCIgc3JjPVwiLi4vc3RhdGljL2luc2lkZTIuanBnXCIgXHJcbiAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiAnMTUwcHgnLCB3aWR0aDogJzEwMCUnfX0gaWQ9XCJyb3dJbWFnZXNcIiBhbHQ9XCJCZWQgUm9vbVwiIC8+XHJcbiAgICAgICAgICAgIHsvKiBvbmNsaWNrPVwiY3VycmVudFNsaWRlKDMpXCIgKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZGVtbyBjdXJzb3JcIiBzcmM9XCIuLi9zdGF0aWMvaW5zaWRlMy5qcGdcIiBcclxuICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6ICcxNTBweCcsIHdpZHRoOiAnMTAwJSd9fSBpZD1cInJvd0ltYWdlc1wiIGFsdD1cIkJhdGggUm9vbVwiIC8+XHJcbiAgICAgICAgICAgIHsvKiBvbmNsaWNrPVwiY3VycmVudFNsaWRlKDQpXCIgKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZGVtbyBjdXJzb3JcIiBzcmM9XCIuLi9zdGF0aWMvaW5zaWRlNC5qcGdcIiBcclxuICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6ICcxNTBweCcsIHdpZHRoOiAnMTAwJSd9fSBpZD1cInJvd0ltYWdlc1wiIGFsdD1cIkJlZCBSb29tXCIgLz5cclxuICAgICAgICAgICAgey8qIG9uY2xpY2s9XCJjdXJyZW50U2xpZGUoNSlcIiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJkZW1vIGN1cnNvclwiIHNyYz1cIi4uL3N0YXRpYy9pbnNpZGU1LmpwZ1wiIFxyXG4gICAgICAgICAgICBzdHlsZT17e2hlaWdodDogJzE1MHB4Jywgd2lkdGg6ICcxMDAlJ319IGlkPVwicm93SW1hZ2VzXCIgYWx0PVwia2l0Y2hlblwiIC8+XHJcbiAgICAgICAgICAgIHsvKiBvbmNsaWNrPVwiY3VycmVudFNsaWRlKDYpXCIgKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXB0aW9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPHAgaWQ9XCJjYXB0aW9uXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1hcmdpbiB0ZXh0XCI+e3Jvd3NbMF0uYWRkcmVzc308L2gyPlxyXG4gICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICB7LyogZGVzY3JpcHRpb24gb2YgaG91c2VzICovfVxyXG4gICAgICAgIDxkaXYgaWQ9XCJmbGV4XCI+XHJcbiAgICAgICAgICB7LyogbGVmdCBzaWRlICovfVxyXG4gICAgICAgICAgPGRpdiBpZD1cImNvbHVtbjFcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaWNvbnNcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9iZWQucG5nXCIgYWx0PVwiaWNvbnNcIiAvPlxyXG4gICAgICAgICAgICAgIHtyb3dzWzBdLmJlZH1cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9zaG93ZXIucG5nXCIgYWx0PVwiaWNvbnNcIiAvPlxyXG4gICAgICAgICAgICAgIHtyb3dzWzBdLnNob3dlcn1cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9jYXIucG5nXCIgYWx0PVwiaWNvbnNcIiAvPlxyXG4gICAgICAgICAgICAgIHtyb3dzWzBdLmNhcn0gIHwgIFxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL3BsYW5uZXIucG5nXCIgYWx0PVwiaWNvbnNcIiAvPlxyXG4gICAgICAgICAgICAgIHtyb3dzWzBdLmluc3BlY3Rpb259XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWFyZ2luXCI+XHJcbiAgICAgICAgICAgICAgTGl2aW5nIGlzIGVhc3kgaW4gdGhpcyBmcmVzaGx5IHNjaGVtZWQgZnJlZXN0YW5kaW5nIGhvbWUgaW4gYSBxdWlldCBjdWwtZGUtc2FjIGEgc2hvcnQgc3Ryb2xsIEZlYXR1cmluZyBhIDE1bSBzdHJlZXQgZnJvbnRhZ2UgYW5kIGRvdWJsZSBwYXJraW5nLCB0aGUgdGhyZWUgYmVkcm9vbSBob21lJ3MgZmx1aWQgdmlsbGEtbGlrZSBsYXlvdXQgaXMgaWRlYWwgZm9yIHRoZSB5b3VuZyBmYW1pbHkgb3IgZG93bnNpemVyIHdpdGggc3VuLWZpbGxlZCBsaXZpbmcgc3BhY2Ugb3BlbmluZyB0byBhIGxhbmRzY2FwZWQgbm9ydGggZmFjaW5nIGdhcmRlbi4gT25lIG9mIG9ubHkgYSBoYW5kZnVsIG9mIGhvbWVzIGluIGEgcGVhY2VmdWwgZW5jbGF2ZSB3aXRoIG5vLXRocm91Z2ggdHJhZmZpYywgdGhlIGltbWFjdWxhdGVseSBwcmVzZW50ZWQgaG9tZSBpcyA4NTBtIHRvIG5lYXJlc3Qgc3RhdGlvbiBhbmQgdG93biBjZW50cmUgd2l0aCBjbG9zZSBwcm94aW1pdHkgdG8gaGlzdG9yaWMgc3lkbmV5IFBhcmsuIEluIHRoZSBoZWFydCBvZiB0aGUgaW5uZXIgd2VzdCwgc3lkbmV5IGlzIG9uIHRoZSBicmluayBvZiBhIGJvb20gd2l0aCBjbG9zZSBwcm94aW1pdHksIGV4Y2VsbGVudCB0cmFuc3BvcnQgbGlua3MgYW5kIGdyZWF0IHNjaG9vbHMuXHJcbiAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgLSBEb3VibGUgZnJvbnRlZCBmcmVlc3RhbmRpbmcgaG9tZSBpbiBhIHF1aWV0IGN1bC1kZS1zYWNcclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAtIE1vZGVybiBsaWdodC1maWxsZWQgaW50ZXJpb3JzLCBlYXN5IGluZG9vci9vdXRkb29yIGZsb3dcclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAtIDMgYmVkcm9vbXMgd2l0aCBidWlsdC1pbnMsIDIgd2l0aCBhIHRyYW5xdWlsIGdhcmRlbiBvdXRsb29rXHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgLSBMYXJnZSBtYWluIGJlZHJvb20sIDIgd2F5IGJhdGhyb29tIGFuZCBhIHBvd2RlciByb29tXHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgLSBTcGFjaW91cyBsaXZpbmcgYW5kIGRpbmluZyBmZWF0dXJpbmcgZWFzeWNhcmUgdGltYmVyIGZsb29yc1xyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIC0gVGVycmFjZSBhbmQgYSBsZXZlbCBsYW5kc2NhcGVkIGdhcmRlbiBiYXRoZWQgaW4gc3Vuc2hpbmVcclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAtIEdyYW5pdGUga2l0Y2hlbiB3aXRoIFNtZWcgZ2FzIGNvb2tlciwgcGxlbnRpZnVsIGJlbmNoIHNwYWNlXHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgLSBGdWxsIHNpemUgbGF1bmRyeSwgZG93bmxpZ2h0cywgcGx1c2ggY2FycGV0aW5nXHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgLSBMb2NrLXVwIGdhcmFnZSBwbHVzIG9mZiBzdHJlZXQgcGFya2luZywgc3Ryb2xsIHRvIGNpdHkgYnVzZXNcclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAtIFdhbGsgdG8gdGhlIHNvb24tdG8tYmUtY29tcGxldGVkIEFxdWF0aWMgQ2VudHJlXHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHsvKiByaWdodCBzaWRlICovfVxyXG4gICAgICAgICAgPGRpdiBpZD1cImNvbHVtbjJcIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7bWFyZ2luVG9wOiAnMTBweCd9fT5cclxuICAgICAgICAgICAgICAgICAge3Jvd3NbMF0ubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi4uL3N0YXRpYy9cIisgcm93c1swXS5hZ2VudHNfcGhvdG99IHdpZHRoPXs3MH0gaGVpZ2h0PXs3MH0gXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiAnNTAlJywgbWFyZ2luOiAnMTBweCd9fSBcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiYWdlbmN5LXBob3RvXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL3Bob25lLnBuZ1wiIGFsdD1cInBob25lLWljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICBjYWxsIFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3BhZGRpbmdUb3A6ICczMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICBVbHRpbW8gUmVhbCBFc3RhdGVcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdtYXAgbWFyZ2luIHRleHRcIj5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2hvdXNlLnBuZ1wiIGFsdD1cImljb25zXCIgLz5cclxuICAgICAgICAgICAgICAgICAgfCB7cm93c1swXS5hZGRyZXNzfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDI3NDUuNTE0NDYwNjk5MzUwNCEyZDE1MS4yMDU0OTg5MzMxNzgzMiEzZC0zMy44Nzc0MDE2MDU1MTQyOSEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4NmIxMmFlM2NjOWQ4MDM5YiUzQTB4MWIwYmQ1ZGQ1N2FmNDk1ZiEyc1dvcmxkJTIwU3F1YXJlITVlMCEzbTIhMXNlbiEyc2F1ITR2MTU4NTY5Mzg3Nzk0NSE1bTIhMXNlbiEyc2F1XCIgd2lkdGg9ezMwMH0gaGVpZ2h0PXszMDB9IGFsbG93RnVsbFNjcmVlbiBhcmlhLWhpZGRlbj1cImZhbHNlXCIgdGFiSW5kZXg9ezB9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICA8Rm9vdGVyIC8+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=