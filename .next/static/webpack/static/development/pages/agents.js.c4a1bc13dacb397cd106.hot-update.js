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
        console.lg;
        var combined = moreAgent.concat(dataMap);
        console.log(combined);
        setMoreAgent(combined);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZ2VudHMuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJyb3dzIiwicm93c01hcCIsIm1hcCIsInJvdyIsImlkIiwiYWdlbnRzX3Bob3RvIiwibmFtZSIsInBvc2l0aW9uIiwicGhvbmUiLCJlbWFpbCIsInVzZVN0YXRlIiwibW9yZUFnZW50Iiwic2V0TW9yZUFnZW50IiwiZGF0YU1hcCIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJsZyIsImNvbWJpbmVkIiwiY29uY2F0IiwiZXJyIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7QUFrQkEsU0FBU0EsS0FBVCxPQUF5QjtBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUV2QixNQUFJQyxPQUFPLEdBQUdELElBQUksQ0FBQ0UsR0FBTCxDQUFTLFVBQUFDLEdBQUc7QUFBQSxXQUN4QjtBQUFLLFNBQUcsRUFBSUEsR0FBRyxDQUFDQztBQUFoQixPQUNFO0FBQUssU0FBRyxFQUFFLFlBQVdELEdBQUcsQ0FBQ0UsWUFBekI7QUFBdUMsU0FBRyxFQUFDLE9BQTNDO0FBQW1ELGNBQUssS0FBeEQ7QUFBOEQsWUFBTSxFQUFDO0FBQXJFLE1BREYsRUFFRSxrQkFBS0YsR0FBRyxDQUFDRyxJQUFULENBRkYsRUFHRSxpQkFBSUgsR0FBRyxDQUFDSSxRQUFSLENBSEYsRUFJRSxpQkFBRztBQUFHLFVBQUksRUFBQztBQUFSLE9BQWFKLEdBQUcsQ0FBQ0ssS0FBakIsQ0FBSCxDQUpGLEVBS0UsaUJBQUlMLEdBQUcsQ0FBQ00sS0FBUixDQUxGLENBRHdCO0FBQUEsR0FBWixDQUFkOztBQUZ1QixrQkFZV0Msc0RBQVEsQ0FBQyxFQUFELENBWm5CO0FBQUEsTUFZaEJDLFNBWmdCO0FBQUEsTUFZTEMsWUFaSzs7QUFhdkIsTUFBSUMsT0FBSjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsWUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLEVBQW9DQyxnQkFBcEMsQ0FBcUQsT0FBckQsRUFBOEQsWUFBTTtBQUNsRUMsV0FBSyxDQUFDLHNDQUFELENBQUwsQ0FDQ0MsSUFERCxDQUNPLFVBQUFDLEdBQUc7QUFBQSxlQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLE9BRFYsRUFFQ0YsSUFGRCxDQUVPLFVBQUFFLElBQUksRUFBSTtBQUNiUixlQUFPLEdBQUdRLElBQUksQ0FBQ3JCLElBQUwsQ0FBVUUsR0FBVixDQUFjLFVBQUFDLEdBQUc7QUFBQSxpQkFDekI7QUFBSyxlQUFHLEVBQUlBLEdBQUcsQ0FBQ0M7QUFBaEIsYUFDRTtBQUNFLGVBQUcsRUFBRSxZQUFXRCxHQUFHLENBQUNFLFlBRHRCO0FBRUUsZUFBRyxFQUFDLE9BRk47QUFHRSxvQkFBSyxLQUhQO0FBSUUsa0JBQU0sRUFBQztBQUpULFlBREYsRUFPRSxrQkFBS0YsR0FBRyxDQUFDRyxJQUFULENBUEYsRUFRRSxpQkFBSUgsR0FBRyxDQUFDSSxRQUFSLENBUkYsRUFTRSxpQkFBRztBQUFHLGdCQUFJLEVBQUM7QUFBUixhQUFhSixHQUFHLENBQUNLLEtBQWpCLENBQUgsQ0FURixFQVVFLGlCQUFJTCxHQUFHLENBQUNNLEtBQVIsQ0FWRixDQUR5QjtBQUFBLFNBQWpCLENBQVY7QUFjQWEsZUFBTyxDQUFDQyxHQUFSLENBQVlaLFNBQVo7QUFDQVcsZUFBTyxDQUFDRSxFQUFSO0FBQ0EsWUFBSUMsUUFBUSxHQUFHZCxTQUFTLENBQUNlLE1BQVYsQ0FBaUJiLE9BQWpCLENBQWY7QUFDQVMsZUFBTyxDQUFDQyxHQUFSLENBQVlFLFFBQVo7QUFDQWIsb0JBQVksQ0FBQ2EsUUFBRCxDQUFaO0FBQ0QsT0F0QkQsV0F1Qk8sVUFBQUUsR0FBRyxFQUFJO0FBQUVMLGVBQU8sQ0FBQ00sS0FBUixDQUFjLFNBQWQsRUFBeUJELEdBQXpCO0FBQThCLE9BdkI5QztBQXdCRCxLQXpCRDtBQTBCRCxHQTNCUSxFQTJCUCxFQTNCTyxDQUFUO0FBNkJBLFNBQ0EsbUVBQ0UsTUFBQyw2Q0FBRCxPQURGLEVBRUU7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQVEsYUFBUyxFQUFDO0FBQWxCLEtBQ0UsbUJBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLEtBQ0UsaUJBQ0U7QUFBSyxPQUFHLEVBQUMsMkJBQVQ7QUFBcUMsU0FBSyxFQUFDLEtBQTNDO0FBQWlELFVBQU0sRUFBQyxLQUF4RDtBQUNFLE9BQUcsRUFBQztBQUROLElBREYsQ0FERixDQURGLENBREYsRUFTRSxNQUFDLCtDQUFELE9BVEYsQ0FERixFQWFFLG9CQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSxrQ0FERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUc7QUFBakIsS0FDRzFCLE9BREgsQ0FKRixFQU9FO0FBQUssTUFBRSxFQUFHO0FBQVYsS0FDR1UsU0FESCxDQVBGLEVBVUU7QUFDRSxRQUFJLEVBQUcsUUFEVDtBQUVFLE1BQUUsRUFBRztBQUZQLG1CQVZGLENBYkYsRUE0QkUsTUFBQywrQ0FBRCxPQTVCRixDQUZGLENBREE7QUFtQ0Q7O0dBL0VRWixLOztLQUFBQSxLOztBQWlGTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFnZW50cy5qcy5jNGExYmMxM2RhY2IzOTdjZDEwNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdkJhciBmcm9tICcuL05hdkJhcic7XHJcbmltcG9ydCBNZXRhSGVhZCBmcm9tICcuL0hlYWQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgcXVlcnlBc3luYyBmcm9tICcuLi9teXNxbC5qcyc7XHJcblxyXG5pbXBvcnQgXCIuLi9zdHlsZS5jc3NcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKXtcclxuXHJcbiAgbGV0IGRiZGF0YSA9IGF3YWl0IHF1ZXJ5QXN5bmMoYFxyXG4gICAgU0VMRUNUICogRlJPTSBhZ2VudHMgTElNSVQgNiA7XHJcbiAgYClcclxuXHJcbiAgbGV0IHJvd3MgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRiZGF0YSkpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcm93c1xyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBJbmRleCh7IHJvd3MgfSkge1xyXG5cclxuICBsZXQgcm93c01hcCA9IHJvd3MubWFwKHJvdyA9PlxyXG4gICAgPGRpdiBrZXkgPSB7cm93LmlkfT5cclxuICAgICAgPGltZyBzcmM9eydzdGF0aWMvJyArcm93LmFnZW50c19waG90b30gYWx0PVwiYWdlbjFcIiB3aXRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgLz5cclxuICAgICAgPGg0Pntyb3cubmFtZX08L2g0PlxyXG4gICAgICA8cD57cm93LnBvc2l0aW9ufTwvcD5cclxuICAgICAgPHA+PGEgaHJlZj1cIiNcIj57cm93LnBob25lfTwvYT48L3A+XHJcbiAgICAgIDxwPntyb3cuZW1haWx9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgW21vcmVBZ2VudCwgc2V0TW9yZUFnZW50XSA9IHVzZVN0YXRlKFtdKTtcclxuICBsZXQgZGF0YU1hcDtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWdlbnRCdG5cIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL21vcmVhZ2VudHMnIClcclxuICAgICAgLnRoZW4oIHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbigganNvbiA9PiB7XHJcbiAgICAgICAgZGF0YU1hcCA9IGpzb24ucm93cy5tYXAocm93ID0+XHJcbiAgICAgICAgICA8ZGl2IGtleSA9IHtyb3cuaWR9PlxyXG4gICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgIHNyYz17J3N0YXRpYy8nICtyb3cuYWdlbnRzX3Bob3RvfSBcclxuICAgICAgICAgICAgICBhbHQ9XCJhZ2VuMVwiIFxyXG4gICAgICAgICAgICAgIHdpdGg9XCIyMDBcIiBcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDBcIiBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGg0Pntyb3cubmFtZX08L2g0PlxyXG4gICAgICAgICAgICA8cD57cm93LnBvc2l0aW9ufTwvcD5cclxuICAgICAgICAgICAgPHA+PGEgaHJlZj1cIiNcIj57cm93LnBob25lfTwvYT48L3A+XHJcbiAgICAgICAgICAgIDxwPntyb3cuZW1haWx9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1vcmVBZ2VudCk7XHJcbiAgICAgICAgY29uc29sZS5sZ1xyXG4gICAgICAgIGxldCBjb21iaW5lZCA9IG1vcmVBZ2VudC5jb25jYXQoZGF0YU1hcCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY29tYmluZWQpO1xyXG4gICAgICAgIHNldE1vcmVBZ2VudChjb21iaW5lZCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4geyBjb25zb2xlLmVycm9yKFwiRXJyb3I6IFwiLCBlcnIpfSkgXHJcbiAgICB9KVxyXG4gIH0sW10pXHJcblxyXG4gIHJldHVybihcclxuICA8PlxyXG4gICAgPE1ldGFIZWFkIC8+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT0nZWxzZUhlYWRlcic+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2VzdGF0ZS1sb2dvLnN2Z1wiIHdpZHRoPVwiMzAwXCIgaGVpZ2h0PVwiMTAwXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlVsdGltbyBSZWFsIEVzdGF0ZSwgU3lkbmV5LCBBdXN0cmFsaWFcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE5hdkJhciAvPlxyXG4gICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVPZlBhZ2VcIj5cclxuICAgICAgICAgIDxoMT5VbHRpbW8gQWdlbnRzPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZ3JpZC1jb250YWluZXJcIj5cclxuICAgICAgICAgIHtyb3dzTWFwfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQgPSBcImFnZW50TWVtYmVyXCI+XHJcbiAgICAgICAgICB7bW9yZUFnZW50fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICB0eXBlID0gXCJidXR0b25cIiBcclxuICAgICAgICAgIGlkID0gXCJhZ2VudEJ0blwiXHJcbiAgICAgICAgPk1vcmUgQWdlbnRzPC9idXR0b24+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==