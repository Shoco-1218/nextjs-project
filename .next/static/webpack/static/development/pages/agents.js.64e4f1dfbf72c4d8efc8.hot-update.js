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
        var combined = moreAgent.concat(dataMap);
        setMoreAgent();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZ2VudHMuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJyb3dzIiwicm93c01hcCIsIm1hcCIsInJvdyIsImlkIiwiYWdlbnRzX3Bob3RvIiwibmFtZSIsInBvc2l0aW9uIiwicGhvbmUiLCJlbWFpbCIsInVzZVN0YXRlIiwibW9yZUFnZW50Iiwic2V0TW9yZUFnZW50IiwiZGF0YU1hcCIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImNvbWJpbmVkIiwiY29uY2F0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7O0FBa0JBLFNBQVNBLEtBQVQsT0FBeUI7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFFdkIsTUFBSUMsT0FBTyxHQUFHRCxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFBQyxHQUFHO0FBQUEsV0FDeEI7QUFBSyxTQUFHLEVBQUlBLEdBQUcsQ0FBQ0M7QUFBaEIsT0FDRTtBQUFLLFNBQUcsRUFBRSxZQUFXRCxHQUFHLENBQUNFLFlBQXpCO0FBQXVDLFNBQUcsRUFBQyxPQUEzQztBQUFtRCxjQUFLLEtBQXhEO0FBQThELFlBQU0sRUFBQztBQUFyRSxNQURGLEVBRUUsa0JBQUtGLEdBQUcsQ0FBQ0csSUFBVCxDQUZGLEVBR0UsaUJBQUlILEdBQUcsQ0FBQ0ksUUFBUixDQUhGLEVBSUUsaUJBQUc7QUFBRyxVQUFJLEVBQUM7QUFBUixPQUFhSixHQUFHLENBQUNLLEtBQWpCLENBQUgsQ0FKRixFQUtFLGlCQUFJTCxHQUFHLENBQUNNLEtBQVIsQ0FMRixDQUR3QjtBQUFBLEdBQVosQ0FBZDs7QUFGdUIsa0JBWVdDLHNEQUFRLENBQUMsRUFBRCxDQVpuQjtBQUFBLE1BWWhCQyxTQVpnQjtBQUFBLE1BWUxDLFlBWks7O0FBYXZCLE1BQUlDLE9BQUo7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsZ0JBQXBDLENBQXFELE9BQXJELEVBQThELFlBQU07QUFDbEVDLFdBQUssQ0FBQyxzQ0FBRCxDQUFMLENBQ0NDLElBREQsQ0FDTyxVQUFBQyxHQUFHO0FBQUEsZUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxPQURWLEVBRUNGLElBRkQsQ0FFTyxVQUFBRSxJQUFJLEVBQUk7QUFDYlIsZUFBTyxHQUFHUSxJQUFJLENBQUNyQixJQUFMLENBQVVFLEdBQVYsQ0FBYyxVQUFBQyxHQUFHO0FBQUEsaUJBQ3pCO0FBQUssZUFBRyxFQUFJQSxHQUFHLENBQUNDO0FBQWhCLGFBQ0U7QUFDRSxlQUFHLEVBQUUsWUFBV0QsR0FBRyxDQUFDRSxZQUR0QjtBQUVFLGVBQUcsRUFBQyxPQUZOO0FBR0Usb0JBQUssS0FIUDtBQUlFLGtCQUFNLEVBQUM7QUFKVCxZQURGLEVBT0Usa0JBQUtGLEdBQUcsQ0FBQ0csSUFBVCxDQVBGLEVBUUUsaUJBQUlILEdBQUcsQ0FBQ0ksUUFBUixDQVJGLEVBU0UsaUJBQUc7QUFBRyxnQkFBSSxFQUFDO0FBQVIsYUFBYUosR0FBRyxDQUFDSyxLQUFqQixDQUFILENBVEYsRUFVRSxpQkFBSUwsR0FBRyxDQUFDTSxLQUFSLENBVkYsQ0FEeUI7QUFBQSxTQUFqQixDQUFWO0FBY0EsWUFBSWEsUUFBUSxHQUFHWCxTQUFTLENBQUNZLE1BQVYsQ0FBaUJWLE9BQWpCLENBQWY7QUFDQUQsb0JBQVk7QUFDYixPQW5CRCxXQW9CTyxVQUFBWSxHQUFHLEVBQUk7QUFBRUMsZUFBTyxDQUFDQyxLQUFSLENBQWMsU0FBZCxFQUF5QkYsR0FBekI7QUFBOEIsT0FwQjlDO0FBcUJELEtBdEJEO0FBdUJELEdBeEJRLEVBd0JQLEVBeEJPLENBQVQ7QUEwQkEsU0FDQSxtRUFDRSxNQUFDLDZDQUFELE9BREYsRUFFRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBUSxhQUFTLEVBQUM7QUFBbEIsS0FDRSxtQkFDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDO0FBQVgsS0FDRSxpQkFDRTtBQUFLLE9BQUcsRUFBQywyQkFBVDtBQUFxQyxTQUFLLEVBQUMsS0FBM0M7QUFBaUQsVUFBTSxFQUFDLEtBQXhEO0FBQ0UsT0FBRyxFQUFDO0FBRE4sSUFERixDQURGLENBREYsQ0FERixFQVNFLE1BQUMsK0NBQUQsT0FURixDQURGLEVBYUUsb0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLGtDQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBRztBQUFqQixLQUNHdkIsT0FESCxDQUpGLEVBT0U7QUFBSyxNQUFFLEVBQUc7QUFBVixLQUNHVSxTQURILENBUEYsRUFVRTtBQUNFLFFBQUksRUFBRyxRQURUO0FBRUUsTUFBRSxFQUFHO0FBRlAsbUJBVkYsQ0FiRixFQTRCRSxNQUFDLCtDQUFELE9BNUJGLENBRkYsQ0FEQTtBQW1DRDs7R0E1RVFaLEs7O0tBQUFBLEs7O0FBOEVNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWdlbnRzLmpzLjY0ZTRmMWRmYmY3MmM0ZDhlZmM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2QmFyIGZyb20gJy4vTmF2QmFyJztcclxuaW1wb3J0IE1ldGFIZWFkIGZyb20gJy4vSGVhZCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBxdWVyeUFzeW5jIGZyb20gJy4uL215c3FsLmpzJztcclxuXHJcbmltcG9ydCBcIi4uL3N0eWxlLmNzc1wiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpe1xyXG5cclxuICBsZXQgZGJkYXRhID0gYXdhaXQgcXVlcnlBc3luYyhgXHJcbiAgICBTRUxFQ1QgKiBGUk9NIGFnZW50cyBMSU1JVCA2IDtcclxuICBgKVxyXG5cclxuICBsZXQgcm93cyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGJkYXRhKSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICByb3dzXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIEluZGV4KHsgcm93cyB9KSB7XHJcblxyXG4gIGxldCByb3dzTWFwID0gcm93cy5tYXAocm93ID0+XHJcbiAgICA8ZGl2IGtleSA9IHtyb3cuaWR9PlxyXG4gICAgICA8aW1nIHNyYz17J3N0YXRpYy8nICtyb3cuYWdlbnRzX3Bob3RvfSBhbHQ9XCJhZ2VuMVwiIHdpdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIiAvPlxyXG4gICAgICA8aDQ+e3Jvdy5uYW1lfTwvaDQ+XHJcbiAgICAgIDxwPntyb3cucG9zaXRpb259PC9wPlxyXG4gICAgICA8cD48YSBocmVmPVwiI1wiPntyb3cucGhvbmV9PC9hPjwvcD5cclxuICAgICAgPHA+e3Jvdy5lbWFpbH08L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICBjb25zdCBbbW9yZUFnZW50LCBzZXRNb3JlQWdlbnRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGxldCBkYXRhTWFwO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZ2VudEJ0blwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbW9yZWFnZW50cycgKVxyXG4gICAgICAudGhlbiggcmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKCBqc29uID0+IHtcclxuICAgICAgICBkYXRhTWFwID0ganNvbi5yb3dzLm1hcChyb3cgPT5cclxuICAgICAgICAgIDxkaXYga2V5ID0ge3Jvdy5pZH0+XHJcbiAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgc3JjPXsnc3RhdGljLycgK3Jvdy5hZ2VudHNfcGhvdG99IFxyXG4gICAgICAgICAgICAgIGFsdD1cImFnZW4xXCIgXHJcbiAgICAgICAgICAgICAgd2l0aD1cIjIwMFwiIFxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjIwMFwiIFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aDQ+e3Jvdy5uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgIDxwPntyb3cucG9zaXRpb259PC9wPlxyXG4gICAgICAgICAgICA8cD48YSBocmVmPVwiI1wiPntyb3cucGhvbmV9PC9hPjwvcD5cclxuICAgICAgICAgICAgPHA+e3Jvdy5lbWFpbH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGV0IGNvbWJpbmVkID0gbW9yZUFnZW50LmNvbmNhdChkYXRhTWFwKVxyXG4gICAgICAgIHNldE1vcmVBZ2VudCgpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHsgY29uc29sZS5lcnJvcihcIkVycm9yOiBcIiwgZXJyKX0pIFxyXG4gICAgfSlcclxuICB9LFtdKVxyXG5cclxuICByZXR1cm4oXHJcbiAgPD5cclxuICAgIDxNZXRhSGVhZCAvPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9J2Vsc2VIZWFkZXInPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9lc3RhdGUtbG9nby5zdmdcIiB3aWR0aD1cIjMwMFwiIGhlaWdodD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJVbHRpbW8gUmVhbCBFc3RhdGUsIFN5ZG5leSwgQXVzdHJhbGlhXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxOYXZCYXIgLz5cclxuICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlT2ZQYWdlXCI+XHJcbiAgICAgICAgICA8aDE+VWx0aW1vIEFnZW50czwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImdyaWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICB7cm93c01hcH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkID0gXCJhZ2VudE1lbWJlclwiPlxyXG4gICAgICAgICAge21vcmVBZ2VudH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgdHlwZSA9IFwiYnV0dG9uXCIgXHJcbiAgICAgICAgICBpZCA9IFwiYWdlbnRCdG5cIlxyXG4gICAgICAgID5Nb3JlIEFnZW50czwvYnV0dG9uPlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=