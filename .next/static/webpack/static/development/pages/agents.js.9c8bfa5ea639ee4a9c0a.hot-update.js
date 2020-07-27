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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
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
        setMoreAgent(moreAgent.concat(dataMap));
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

_s(Index, "C+TNYMoldH/5rkNUsHTSsWC2tJ0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZ2VudHMuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJyb3dzIiwicm93c01hcCIsIm1hcCIsInJvdyIsImlkIiwiYWdlbnRzX3Bob3RvIiwibmFtZSIsInBvc2l0aW9uIiwicGhvbmUiLCJlbWFpbCIsInVzZVN0YXRlIiwibW9yZUFnZW50Iiwic2V0TW9yZUFnZW50IiwiZGF0YU1hcCIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImNvbmNhdCIsImVyciIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQWtCQSxTQUFTQSxLQUFULE9BQXlCO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBRXZCLE1BQUlDLE9BQU8sR0FBR0QsSUFBSSxDQUFDRSxHQUFMLENBQVMsVUFBQUMsR0FBRztBQUFBLFdBQ3hCO0FBQUssU0FBRyxFQUFJQSxHQUFHLENBQUNDO0FBQWhCLE9BQ0U7QUFBSyxTQUFHLEVBQUUsWUFBV0QsR0FBRyxDQUFDRSxZQUF6QjtBQUF1QyxTQUFHLEVBQUMsT0FBM0M7QUFBbUQsY0FBSyxLQUF4RDtBQUE4RCxZQUFNLEVBQUM7QUFBckUsTUFERixFQUVFLGtCQUFLRixHQUFHLENBQUNHLElBQVQsQ0FGRixFQUdFLGlCQUFJSCxHQUFHLENBQUNJLFFBQVIsQ0FIRixFQUlFLGlCQUFHO0FBQUcsVUFBSSxFQUFDO0FBQVIsT0FBYUosR0FBRyxDQUFDSyxLQUFqQixDQUFILENBSkYsRUFLRSxpQkFBSUwsR0FBRyxDQUFDTSxLQUFSLENBTEYsQ0FEd0I7QUFBQSxHQUFaLENBQWQ7O0FBRnVCLGtCQVlXQyxzREFBUSxFQVpuQjtBQUFBLE1BWWhCQyxTQVpnQjtBQUFBLE1BWUxDLFlBWks7O0FBYXZCLE1BQUlDLE9BQUo7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsZ0JBQXBDLENBQXFELE9BQXJELEVBQThELFlBQU07QUFDbEVDLFdBQUssQ0FBQyxzQ0FBRCxDQUFMLENBQ0NDLElBREQsQ0FDTyxVQUFBQyxHQUFHO0FBQUEsZUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxPQURWLEVBRUNGLElBRkQsQ0FFTyxVQUFBRSxJQUFJLEVBQUk7QUFDYlIsZUFBTyxHQUFHUSxJQUFJLENBQUNyQixJQUFMLENBQVVFLEdBQVYsQ0FBYyxVQUFBQyxHQUFHO0FBQUEsaUJBQ3pCO0FBQUssZUFBRyxFQUFJQSxHQUFHLENBQUNDO0FBQWhCLGFBQ0U7QUFDRSxlQUFHLEVBQUUsWUFBV0QsR0FBRyxDQUFDRSxZQUR0QjtBQUVFLGVBQUcsRUFBQyxPQUZOO0FBR0Usb0JBQUssS0FIUDtBQUlFLGtCQUFNLEVBQUM7QUFKVCxZQURGLEVBT0Usa0JBQUtGLEdBQUcsQ0FBQ0csSUFBVCxDQVBGLEVBUUUsaUJBQUlILEdBQUcsQ0FBQ0ksUUFBUixDQVJGLEVBU0UsaUJBQUc7QUFBRyxnQkFBSSxFQUFDO0FBQVIsYUFBYUosR0FBRyxDQUFDSyxLQUFqQixDQUFILENBVEYsRUFVRSxpQkFBSUwsR0FBRyxDQUFDTSxLQUFSLENBVkYsQ0FEeUI7QUFBQSxTQUFqQixDQUFWO0FBY0FHLG9CQUFZLENBQUNELFNBQVMsQ0FBQ1csTUFBVixDQUFpQlQsT0FBakIsQ0FBRCxDQUFaO0FBQ0QsT0FsQkQsV0FtQk8sVUFBQVUsR0FBRyxFQUFJO0FBQUVDLGVBQU8sQ0FBQ0MsS0FBUixDQUFjLFNBQWQsRUFBeUJGLEdBQXpCO0FBQThCLE9BbkI5QztBQW9CRCxLQXJCRDtBQXNCRCxHQXZCUSxFQXVCUCxFQXZCTyxDQUFUO0FBeUJBLFNBQ0EsbUVBQ0UsTUFBQyw2Q0FBRCxPQURGLEVBRUU7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQVEsYUFBUyxFQUFDO0FBQWxCLEtBQ0UsbUJBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLEtBQ0UsaUJBQ0U7QUFBSyxPQUFHLEVBQUMsMkJBQVQ7QUFBcUMsU0FBSyxFQUFDLEtBQTNDO0FBQWlELFVBQU0sRUFBQyxLQUF4RDtBQUNFLE9BQUcsRUFBQztBQUROLElBREYsQ0FERixDQURGLENBREYsRUFTRSxNQUFDLCtDQUFELE9BVEYsQ0FERixFQWFFLG9CQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSxrQ0FERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUc7QUFBakIsS0FDR3RCLE9BREgsQ0FKRixFQU9FO0FBQUssTUFBRSxFQUFHO0FBQVYsS0FDR1UsU0FESCxDQVBGLEVBVUU7QUFDRSxRQUFJLEVBQUcsUUFEVDtBQUVFLE1BQUUsRUFBRztBQUZQLG1CQVZGLENBYkYsRUE0QkUsTUFBQywrQ0FBRCxPQTVCRixDQUZGLENBREE7QUFtQ0Q7O0dBM0VRWixLOztLQUFBQSxLOztBQTZFTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFnZW50cy5qcy45YzhiZmE1ZWE2MzllZTRhOWMwYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdkJhciBmcm9tICcuL05hdkJhcic7XHJcbmltcG9ydCBNZXRhSGVhZCBmcm9tICcuL0hlYWQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgcXVlcnlBc3luYyBmcm9tICcuLi9teXNxbC5qcyc7XHJcblxyXG5pbXBvcnQgXCIuLi9zdHlsZS5jc3NcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKXtcclxuXHJcbiAgbGV0IGRiZGF0YSA9IGF3YWl0IHF1ZXJ5QXN5bmMoYFxyXG4gICAgU0VMRUNUICogRlJPTSBhZ2VudHMgTElNSVQgNiA7XHJcbiAgYClcclxuXHJcbiAgbGV0IHJvd3MgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRiZGF0YSkpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcm93c1xyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBJbmRleCh7IHJvd3MgfSkge1xyXG5cclxuICBsZXQgcm93c01hcCA9IHJvd3MubWFwKHJvdyA9PlxyXG4gICAgPGRpdiBrZXkgPSB7cm93LmlkfT5cclxuICAgICAgPGltZyBzcmM9eydzdGF0aWMvJyArcm93LmFnZW50c19waG90b30gYWx0PVwiYWdlbjFcIiB3aXRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgLz5cclxuICAgICAgPGg0Pntyb3cubmFtZX08L2g0PlxyXG4gICAgICA8cD57cm93LnBvc2l0aW9ufTwvcD5cclxuICAgICAgPHA+PGEgaHJlZj1cIiNcIj57cm93LnBob25lfTwvYT48L3A+XHJcbiAgICAgIDxwPntyb3cuZW1haWx9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgW21vcmVBZ2VudCwgc2V0TW9yZUFnZW50XSA9IHVzZVN0YXRlKCk7XHJcbiAgbGV0IGRhdGFNYXA7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFnZW50QnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9tb3JlYWdlbnRzJyApXHJcbiAgICAgIC50aGVuKCByZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oIGpzb24gPT4ge1xyXG4gICAgICAgIGRhdGFNYXAgPSBqc29uLnJvd3MubWFwKHJvdyA9PlxyXG4gICAgICAgICAgPGRpdiBrZXkgPSB7cm93LmlkfT5cclxuICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICBzcmM9eydzdGF0aWMvJyArcm93LmFnZW50c19waG90b30gXHJcbiAgICAgICAgICAgICAgYWx0PVwiYWdlbjFcIiBcclxuICAgICAgICAgICAgICB3aXRoPVwiMjAwXCIgXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMjAwXCIgXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxoND57cm93Lm5hbWV9PC9oND5cclxuICAgICAgICAgICAgPHA+e3Jvdy5wb3NpdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDxwPjxhIGhyZWY9XCIjXCI+e3Jvdy5waG9uZX08L2E+PC9wPlxyXG4gICAgICAgICAgICA8cD57cm93LmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRNb3JlQWdlbnQobW9yZUFnZW50LmNvbmNhdChkYXRhTWFwKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4geyBjb25zb2xlLmVycm9yKFwiRXJyb3I6IFwiLCBlcnIpfSkgXHJcbiAgICB9KVxyXG4gIH0sW10pXHJcblxyXG4gIHJldHVybihcclxuICA8PlxyXG4gICAgPE1ldGFIZWFkIC8+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT0nZWxzZUhlYWRlcic+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2VzdGF0ZS1sb2dvLnN2Z1wiIHdpZHRoPVwiMzAwXCIgaGVpZ2h0PVwiMTAwXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlVsdGltbyBSZWFsIEVzdGF0ZSwgU3lkbmV5LCBBdXN0cmFsaWFcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE5hdkJhciAvPlxyXG4gICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVPZlBhZ2VcIj5cclxuICAgICAgICAgIDxoMT5VbHRpbW8gQWdlbnRzPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZ3JpZC1jb250YWluZXJcIj5cclxuICAgICAgICAgIHtyb3dzTWFwfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQgPSBcImFnZW50TWVtYmVyXCI+XHJcbiAgICAgICAgICB7bW9yZUFnZW50fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICB0eXBlID0gXCJidXR0b25cIiBcclxuICAgICAgICAgIGlkID0gXCJhZ2VudEJ0blwiXHJcbiAgICAgICAgPk1vcmUgQWdlbnRzPC9idXR0b24+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==