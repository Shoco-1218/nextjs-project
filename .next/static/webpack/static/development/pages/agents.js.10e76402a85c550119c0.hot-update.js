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
        console.log(moreAgent);
        console.log(dataMap);
        var combined = moreAgent.concat(dataMap);
        console.log(combined);
        setMoreAgent(combined);
        console.log(moreAgent);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZ2VudHMuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJyb3dzIiwicm93c01hcCIsIm1hcCIsInJvdyIsImlkIiwiYWdlbnRzX3Bob3RvIiwibmFtZSIsInBvc2l0aW9uIiwicGhvbmUiLCJlbWFpbCIsInVzZVN0YXRlIiwibW9yZUFnZW50Iiwic2V0TW9yZUFnZW50IiwiZGF0YU1hcCIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJjb21iaW5lZCIsImNvbmNhdCIsImVyciIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7O0FBa0JBLFNBQVNBLEtBQVQsT0FBeUI7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFFdkIsTUFBSUMsT0FBTyxHQUFHRCxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFBQyxHQUFHO0FBQUEsV0FDeEI7QUFBSyxTQUFHLEVBQUlBLEdBQUcsQ0FBQ0M7QUFBaEIsT0FDRTtBQUFLLFNBQUcsRUFBRSxZQUFXRCxHQUFHLENBQUNFLFlBQXpCO0FBQXVDLFNBQUcsRUFBQyxPQUEzQztBQUFtRCxjQUFLLEtBQXhEO0FBQThELFlBQU0sRUFBQztBQUFyRSxNQURGLEVBRUUsa0JBQUtGLEdBQUcsQ0FBQ0csSUFBVCxDQUZGLEVBR0UsaUJBQUlILEdBQUcsQ0FBQ0ksUUFBUixDQUhGLEVBSUUsaUJBQUc7QUFBRyxVQUFJLEVBQUM7QUFBUixPQUFhSixHQUFHLENBQUNLLEtBQWpCLENBQUgsQ0FKRixFQUtFLGlCQUFJTCxHQUFHLENBQUNNLEtBQVIsQ0FMRixDQUR3QjtBQUFBLEdBQVosQ0FBZDs7QUFGdUIsa0JBWVdDLHNEQUFRLENBQUMsRUFBRCxDQVpuQjtBQUFBLE1BWWhCQyxTQVpnQjtBQUFBLE1BWUxDLFlBWks7O0FBYXZCLE1BQUlDLE9BQUo7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsZ0JBQXBDLENBQXFELE9BQXJELEVBQThELFlBQU07QUFDbEVDLFdBQUssQ0FBQyxzQ0FBRCxDQUFMLENBQ0NDLElBREQsQ0FDTyxVQUFBQyxHQUFHO0FBQUEsZUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxPQURWLEVBRUNGLElBRkQsQ0FFTyxVQUFBRSxJQUFJLEVBQUk7QUFDYlIsZUFBTyxHQUFHUSxJQUFJLENBQUNyQixJQUFMLENBQVVFLEdBQVYsQ0FBYyxVQUFBQyxHQUFHO0FBQUEsaUJBQ3pCO0FBQUssZUFBRyxFQUFJQSxHQUFHLENBQUNDO0FBQWhCLGFBQ0U7QUFDRSxlQUFHLEVBQUUsWUFBV0QsR0FBRyxDQUFDRSxZQUR0QjtBQUVFLGVBQUcsRUFBQyxPQUZOO0FBR0Usb0JBQUssS0FIUDtBQUlFLGtCQUFNLEVBQUM7QUFKVCxZQURGLEVBT0Usa0JBQUtGLEdBQUcsQ0FBQ0csSUFBVCxDQVBGLEVBUUUsaUJBQUlILEdBQUcsQ0FBQ0ksUUFBUixDQVJGLEVBU0UsaUJBQUc7QUFBRyxnQkFBSSxFQUFDO0FBQVIsYUFBYUosR0FBRyxDQUFDSyxLQUFqQixDQUFILENBVEYsRUFVRSxpQkFBSUwsR0FBRyxDQUFDTSxLQUFSLENBVkYsQ0FEeUI7QUFBQSxTQUFqQixDQUFWO0FBY0FhLGVBQU8sQ0FBQ0MsR0FBUixDQUFZWixTQUFaO0FBQ0FXLGVBQU8sQ0FBQ0MsR0FBUixDQUFZVixPQUFaO0FBQ0EsWUFBSVcsUUFBUSxHQUFHYixTQUFTLENBQUNjLE1BQVYsQ0FBaUJaLE9BQWpCLENBQWY7QUFDQVMsZUFBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVo7QUFDQVosb0JBQVksQ0FBQ1ksUUFBRCxDQUFaO0FBQ0FGLGVBQU8sQ0FBQ0MsR0FBUixDQUFZWixTQUFaO0FBQ0QsT0F2QkQsV0F3Qk8sVUFBQWUsR0FBRyxFQUFJO0FBQUVKLGVBQU8sQ0FBQ0ssS0FBUixDQUFjLFNBQWQsRUFBeUJELEdBQXpCO0FBQThCLE9BeEI5QztBQXlCRCxLQTFCRDtBQTJCRCxHQTVCUSxFQTRCUCxFQTVCTyxDQUFUO0FBOEJBLFNBQ0EsbUVBQ0UsTUFBQyw2Q0FBRCxPQURGLEVBRUU7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQVEsYUFBUyxFQUFDO0FBQWxCLEtBQ0UsbUJBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLEtBQ0UsaUJBQ0U7QUFBSyxPQUFHLEVBQUMsMkJBQVQ7QUFBcUMsU0FBSyxFQUFDLEtBQTNDO0FBQWlELFVBQU0sRUFBQyxLQUF4RDtBQUNFLE9BQUcsRUFBQztBQUROLElBREYsQ0FERixDQURGLENBREYsRUFTRSxNQUFDLCtDQUFELE9BVEYsQ0FERixFQWFFLG9CQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSxrQ0FERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUc7QUFBakIsS0FDR3pCLE9BREgsQ0FKRixFQU9FO0FBQUssTUFBRSxFQUFHO0FBQVYsS0FDR1UsU0FESCxDQVBGLEVBVUU7QUFDRSxRQUFJLEVBQUcsUUFEVDtBQUVFLE1BQUUsRUFBRztBQUZQLG1CQVZGLENBYkYsRUE0QkUsTUFBQywrQ0FBRCxPQTVCRixDQUZGLENBREE7QUFtQ0Q7O0dBaEZRWixLOztLQUFBQSxLOztBQWtGTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFnZW50cy5qcy4xMGU3NjQwMmE4NWM1NTAxMTljMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdkJhciBmcm9tICcuL05hdkJhcic7XHJcbmltcG9ydCBNZXRhSGVhZCBmcm9tICcuL0hlYWQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgcXVlcnlBc3luYyBmcm9tICcuLi9teXNxbC5qcyc7XHJcblxyXG5pbXBvcnQgXCIuLi9zdHlsZS5jc3NcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKXtcclxuXHJcbiAgbGV0IGRiZGF0YSA9IGF3YWl0IHF1ZXJ5QXN5bmMoYFxyXG4gICAgU0VMRUNUICogRlJPTSBhZ2VudHMgTElNSVQgNiA7XHJcbiAgYClcclxuXHJcbiAgbGV0IHJvd3MgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRiZGF0YSkpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcm93c1xyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBJbmRleCh7IHJvd3MgfSkge1xyXG5cclxuICBsZXQgcm93c01hcCA9IHJvd3MubWFwKHJvdyA9PlxyXG4gICAgPGRpdiBrZXkgPSB7cm93LmlkfT5cclxuICAgICAgPGltZyBzcmM9eydzdGF0aWMvJyArcm93LmFnZW50c19waG90b30gYWx0PVwiYWdlbjFcIiB3aXRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgLz5cclxuICAgICAgPGg0Pntyb3cubmFtZX08L2g0PlxyXG4gICAgICA8cD57cm93LnBvc2l0aW9ufTwvcD5cclxuICAgICAgPHA+PGEgaHJlZj1cIiNcIj57cm93LnBob25lfTwvYT48L3A+XHJcbiAgICAgIDxwPntyb3cuZW1haWx9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgW21vcmVBZ2VudCwgc2V0TW9yZUFnZW50XSA9IHVzZVN0YXRlKFtdKTtcclxuICBsZXQgZGF0YU1hcDtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWdlbnRCdG5cIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL21vcmVhZ2VudHMnIClcclxuICAgICAgLnRoZW4oIHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbigganNvbiA9PiB7XHJcbiAgICAgICAgZGF0YU1hcCA9IGpzb24ucm93cy5tYXAocm93ID0+XHJcbiAgICAgICAgICA8ZGl2IGtleSA9IHtyb3cuaWR9PlxyXG4gICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgIHNyYz17J3N0YXRpYy8nICtyb3cuYWdlbnRzX3Bob3RvfSBcclxuICAgICAgICAgICAgICBhbHQ9XCJhZ2VuMVwiIFxyXG4gICAgICAgICAgICAgIHdpdGg9XCIyMDBcIiBcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDBcIiBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGg0Pntyb3cubmFtZX08L2g0PlxyXG4gICAgICAgICAgICA8cD57cm93LnBvc2l0aW9ufTwvcD5cclxuICAgICAgICAgICAgPHA+PGEgaHJlZj1cIiNcIj57cm93LnBob25lfTwvYT48L3A+XHJcbiAgICAgICAgICAgIDxwPntyb3cuZW1haWx9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1vcmVBZ2VudCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YU1hcCk7XHJcbiAgICAgICAgbGV0IGNvbWJpbmVkID0gbW9yZUFnZW50LmNvbmNhdChkYXRhTWFwKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb21iaW5lZCk7XHJcbiAgICAgICAgc2V0TW9yZUFnZW50KGNvbWJpbmVkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhtb3JlQWdlbnQpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHsgY29uc29sZS5lcnJvcihcIkVycm9yOiBcIiwgZXJyKX0pIFxyXG4gICAgfSlcclxuICB9LFtdKVxyXG5cclxuICByZXR1cm4oXHJcbiAgPD5cclxuICAgIDxNZXRhSGVhZCAvPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9J2Vsc2VIZWFkZXInPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9lc3RhdGUtbG9nby5zdmdcIiB3aWR0aD1cIjMwMFwiIGhlaWdodD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJVbHRpbW8gUmVhbCBFc3RhdGUsIFN5ZG5leSwgQXVzdHJhbGlhXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxOYXZCYXIgLz5cclxuICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlT2ZQYWdlXCI+XHJcbiAgICAgICAgICA8aDE+VWx0aW1vIEFnZW50czwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImdyaWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICB7cm93c01hcH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkID0gXCJhZ2VudE1lbWJlclwiPlxyXG4gICAgICAgICAge21vcmVBZ2VudH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgdHlwZSA9IFwiYnV0dG9uXCIgXHJcbiAgICAgICAgICBpZCA9IFwiYWdlbnRCdG5cIlxyXG4gICAgICAgID5Nb3JlIEFnZW50czwvYnV0dG9uPlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=