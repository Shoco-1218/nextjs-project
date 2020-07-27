webpackHotUpdate("static\\development\\pages\\agents.js",{

/***/ "./pages/agents.js":
/*!*************************!*\
  !*** ./pages/agents.js ***!
  \*************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar */ "./pages/NavBar.js");
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Head */ "./pages/Head.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./pages/Footer.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;







function Index(_ref) {
  _s();

  var rows = _ref.rows;
  var rowsMap = rows.map(function (row) {
    return __jsx("div", {
      key: row.id
    }, __jsx("img", {
      src: 'static/' + row.agents_photo,
      alt: "agen1",
      "with": "200",
      height: "200"
    }), __jsx("h4", null, row.name), __jsx("p", null, row.position), __jsx("p", null, __jsx("a", {
      href: "#"
    }, row.phone)), __jsx("p", null, row.email));
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      moreAgent = _useState[0],
      setMoreAgent = _useState[1];

  var dataMap;
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    document.getElementById("agentBtn").addEventListener('click', function () {
      fetch('http://localhost:3000/api/moreagents').then(function (res) {
        return res.json();
      }).then(function (json) {
        dataMap = json.rows.map(function (row) {
          return __jsx("div", {
            key: row.id
          }, __jsx("img", {
            src: 'static/' + row.agents_photo,
            alt: "agen1",
            "with": "200",
            height: "200"
          }), __jsx("h4", null, row.name), __jsx("p", null, row.position), __jsx("p", null, __jsx("a", {
            href: "#"
          }, row.phone)), __jsx("p", null, row.email));
        });
        setMoreAgent(function (prev) {
          return prev.concat(dataMap);
        });
      })["catch"](function (err) {
        console.error("Error: ", err);
      });
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(_Head__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx("div", {
    className: "App"
  }, __jsx("header", {
    className: "elseHeader"
  }, __jsx("div", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/"
  }, __jsx("a", null, __jsx("img", {
    src: "../static/estate-logo.svg",
    width: "300",
    height: "100",
    alt: "Ultimo Real Estate, Sydney, Australia"
  })))), __jsx(_NavBar__WEBPACK_IMPORTED_MODULE_0__["default"], null)), __jsx("main", null, __jsx("div", {
    className: "titleOfPage"
  }, __jsx("h1", null, "Ultimo Agents")), __jsx("div", {
    className: "grid-container"
  }, rowsMap), __jsx("div", {
    id: "agentMember"
  }, moreAgent), __jsx("button", {
    type: "button",
    id: "agentBtn"
  }, "More Agents")), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
}

_s(Index, "i82/mN7Dr9At3O5WW936ox/tTZg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZ2VudHMuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJyb3dzIiwicm93c01hcCIsIm1hcCIsInJvdyIsImlkIiwiYWdlbnRzX3Bob3RvIiwibmFtZSIsInBvc2l0aW9uIiwicGhvbmUiLCJlbWFpbCIsInVzZVN0YXRlIiwibW9yZUFnZW50Iiwic2V0TW9yZUFnZW50IiwiZGF0YU1hcCIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInByZXYiLCJjb25jYXQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7QUFrQkEsU0FBU0EsS0FBVCxPQUF5QjtBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUV2QixNQUFJQyxPQUFPLEdBQUdELElBQUksQ0FBQ0UsR0FBTCxDQUFTLFVBQUFDLEdBQUc7QUFBQSxXQUN4QjtBQUFLLFNBQUcsRUFBSUEsR0FBRyxDQUFDQztBQUFoQixPQUNFO0FBQUssU0FBRyxFQUFFLFlBQVdELEdBQUcsQ0FBQ0UsWUFBekI7QUFBdUMsU0FBRyxFQUFDLE9BQTNDO0FBQW1ELGNBQUssS0FBeEQ7QUFBOEQsWUFBTSxFQUFDO0FBQXJFLE1BREYsRUFFRSxrQkFBS0YsR0FBRyxDQUFDRyxJQUFULENBRkYsRUFHRSxpQkFBSUgsR0FBRyxDQUFDSSxRQUFSLENBSEYsRUFJRSxpQkFBRztBQUFHLFVBQUksRUFBQztBQUFSLE9BQWFKLEdBQUcsQ0FBQ0ssS0FBakIsQ0FBSCxDQUpGLEVBS0UsaUJBQUlMLEdBQUcsQ0FBQ00sS0FBUixDQUxGLENBRHdCO0FBQUEsR0FBWixDQUFkOztBQUZ1QixrQkFZV0Msc0RBQVEsQ0FBQyxFQUFELENBWm5CO0FBQUEsTUFZaEJDLFNBWmdCO0FBQUEsTUFZTEMsWUFaSzs7QUFhdkIsTUFBSUMsT0FBSjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsWUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLEVBQW9DQyxnQkFBcEMsQ0FBcUQsT0FBckQsRUFBOEQsWUFBTTtBQUNsRUMsV0FBSyxDQUFDLHNDQUFELENBQUwsQ0FDQ0MsSUFERCxDQUNPLFVBQUFDLEdBQUc7QUFBQSxlQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLE9BRFYsRUFFQ0YsSUFGRCxDQUVPLFVBQUFFLElBQUksRUFBSTtBQUNiUixlQUFPLEdBQUdRLElBQUksQ0FBQ3JCLElBQUwsQ0FBVUUsR0FBVixDQUFjLFVBQUFDLEdBQUc7QUFBQSxpQkFDekI7QUFBSyxlQUFHLEVBQUlBLEdBQUcsQ0FBQ0M7QUFBaEIsYUFDRTtBQUNFLGVBQUcsRUFBRSxZQUFXRCxHQUFHLENBQUNFLFlBRHRCO0FBRUUsZUFBRyxFQUFDLE9BRk47QUFHRSxvQkFBSyxLQUhQO0FBSUUsa0JBQU0sRUFBQztBQUpULFlBREYsRUFPRSxrQkFBS0YsR0FBRyxDQUFDRyxJQUFULENBUEYsRUFRRSxpQkFBSUgsR0FBRyxDQUFDSSxRQUFSLENBUkYsRUFTRSxpQkFBRztBQUFHLGdCQUFJLEVBQUM7QUFBUixhQUFhSixHQUFHLENBQUNLLEtBQWpCLENBQUgsQ0FURixFQVVFLGlCQUFJTCxHQUFHLENBQUNNLEtBQVIsQ0FWRixDQUR5QjtBQUFBLFNBQWpCLENBQVY7QUFlQUcsb0JBQVksQ0FBQyxVQUFBVSxJQUFJO0FBQUEsaUJBQUlBLElBQUksQ0FBQ0MsTUFBTCxDQUFZVixPQUFaLENBQUo7QUFBQSxTQUFMLENBQVo7QUFDRCxPQW5CRCxXQW9CTyxVQUFBVyxHQUFHLEVBQUk7QUFBRUMsZUFBTyxDQUFDQyxLQUFSLENBQWMsU0FBZCxFQUF5QkYsR0FBekI7QUFBOEIsT0FwQjlDO0FBcUJELEtBdEJEO0FBdUJELEdBeEJRLEVBd0JQLEVBeEJPLENBQVQ7QUEwQkEsU0FDQSxtRUFDRSxNQUFDLDZDQUFELE9BREYsRUFFRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBUSxhQUFTLEVBQUM7QUFBbEIsS0FDRSxtQkFDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDO0FBQVgsS0FDRSxpQkFDRTtBQUFLLE9BQUcsRUFBQywyQkFBVDtBQUFxQyxTQUFLLEVBQUMsS0FBM0M7QUFBaUQsVUFBTSxFQUFDLEtBQXhEO0FBQ0UsT0FBRyxFQUFDO0FBRE4sSUFERixDQURGLENBREYsQ0FERixFQVNFLE1BQUMsK0NBQUQsT0FURixDQURGLEVBYUUsb0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLGtDQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBRztBQUFqQixLQUNHdkIsT0FESCxDQUpGLEVBT0U7QUFBSyxNQUFFLEVBQUc7QUFBVixLQUNHVSxTQURILENBUEYsRUFVRTtBQUNFLFFBQUksRUFBRyxRQURUO0FBRUUsTUFBRSxFQUFHO0FBRlAsbUJBVkYsQ0FiRixFQTRCRSxNQUFDLCtDQUFELE9BNUJGLENBRkYsQ0FEQTtBQW1DRDs7R0E1RVFaLEs7O0tBQUFBLEs7O0FBOEVNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWdlbnRzLmpzLmM1YmE1MjIwODBlYzM2NWY0NzA5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2QmFyIGZyb20gJy4vTmF2QmFyJztcclxuaW1wb3J0IE1ldGFIZWFkIGZyb20gJy4vSGVhZCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBxdWVyeUFzeW5jIGZyb20gJy4uL215c3FsLmpzJztcclxuXHJcbmltcG9ydCBcIi4uL3N0eWxlLmNzc1wiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpe1xyXG5cclxuICBsZXQgZGJkYXRhID0gYXdhaXQgcXVlcnlBc3luYyhgXHJcbiAgICBTRUxFQ1QgKiBGUk9NIGFnZW50cyBMSU1JVCA2IDtcclxuICBgKVxyXG5cclxuICBsZXQgcm93cyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGJkYXRhKSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICByb3dzXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIEluZGV4KHsgcm93cyB9KSB7XHJcblxyXG4gIGxldCByb3dzTWFwID0gcm93cy5tYXAocm93ID0+XHJcbiAgICA8ZGl2IGtleSA9IHtyb3cuaWR9PlxyXG4gICAgICA8aW1nIHNyYz17J3N0YXRpYy8nICtyb3cuYWdlbnRzX3Bob3RvfSBhbHQ9XCJhZ2VuMVwiIHdpdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIiAvPlxyXG4gICAgICA8aDQ+e3Jvdy5uYW1lfTwvaDQ+XHJcbiAgICAgIDxwPntyb3cucG9zaXRpb259PC9wPlxyXG4gICAgICA8cD48YSBocmVmPVwiI1wiPntyb3cucGhvbmV9PC9hPjwvcD5cclxuICAgICAgPHA+e3Jvdy5lbWFpbH08L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICBjb25zdCBbbW9yZUFnZW50LCBzZXRNb3JlQWdlbnRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGxldCBkYXRhTWFwO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZ2VudEJ0blwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbW9yZWFnZW50cycgKVxyXG4gICAgICAudGhlbiggcmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKCBqc29uID0+IHtcclxuICAgICAgICBkYXRhTWFwID0ganNvbi5yb3dzLm1hcChyb3cgPT5cclxuICAgICAgICAgIDxkaXYga2V5ID0ge3Jvdy5pZH0+XHJcbiAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgc3JjPXsnc3RhdGljLycgK3Jvdy5hZ2VudHNfcGhvdG99IFxyXG4gICAgICAgICAgICAgIGFsdD1cImFnZW4xXCIgXHJcbiAgICAgICAgICAgICAgd2l0aD1cIjIwMFwiIFxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjIwMFwiIFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aDQ+e3Jvdy5uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgIDxwPntyb3cucG9zaXRpb259PC9wPlxyXG4gICAgICAgICAgICA8cD48YSBocmVmPVwiI1wiPntyb3cucGhvbmV9PC9hPjwvcD5cclxuICAgICAgICAgICAgPHA+e3Jvdy5lbWFpbH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHNldE1vcmVBZ2VudChwcmV2ID0+IHByZXYuY29uY2F0KGRhdGFNYXApKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7IGNvbnNvbGUuZXJyb3IoXCJFcnJvcjogXCIsIGVycil9KSBcclxuICAgIH0pXHJcbiAgfSxbXSlcclxuXHJcbiAgcmV0dXJuKFxyXG4gIDw+XHJcbiAgICA8TWV0YUhlYWQgLz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdlbHNlSGVhZGVyJz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvZXN0YXRlLWxvZ28uc3ZnXCIgd2lkdGg9XCIzMDBcIiBoZWlnaHQ9XCIxMDBcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiVWx0aW1vIFJlYWwgRXN0YXRlLCBTeWRuZXksIEF1c3RyYWxpYVwiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZU9mUGFnZVwiPlxyXG4gICAgICAgICAgPGgxPlVsdGltbyBBZ2VudHM8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJncmlkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAge3Jvd3NNYXB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZCA9IFwiYWdlbnRNZW1iZXJcIj5cclxuICAgICAgICAgIHttb3JlQWdlbnR9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgIHR5cGUgPSBcImJ1dHRvblwiIFxyXG4gICAgICAgICAgaWQgPSBcImFnZW50QnRuXCJcclxuICAgICAgICA+TW9yZSBBZ2VudHM8L2J1dHRvbj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9