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
        console.log;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZ2VudHMuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJyb3dzIiwicm93c01hcCIsIm1hcCIsInJvdyIsImlkIiwiYWdlbnRzX3Bob3RvIiwibmFtZSIsInBvc2l0aW9uIiwicGhvbmUiLCJlbWFpbCIsInVzZVN0YXRlIiwibW9yZUFnZW50Iiwic2V0TW9yZUFnZW50IiwiZGF0YU1hcCIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJjb21iaW5lZCIsImNvbmNhdCIsImVyciIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7O0FBa0JBLFNBQVNBLEtBQVQsT0FBeUI7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFFdkIsTUFBSUMsT0FBTyxHQUFHRCxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFBQyxHQUFHO0FBQUEsV0FDeEI7QUFBSyxTQUFHLEVBQUlBLEdBQUcsQ0FBQ0M7QUFBaEIsT0FDRTtBQUFLLFNBQUcsRUFBRSxZQUFXRCxHQUFHLENBQUNFLFlBQXpCO0FBQXVDLFNBQUcsRUFBQyxPQUEzQztBQUFtRCxjQUFLLEtBQXhEO0FBQThELFlBQU0sRUFBQztBQUFyRSxNQURGLEVBRUUsa0JBQUtGLEdBQUcsQ0FBQ0csSUFBVCxDQUZGLEVBR0UsaUJBQUlILEdBQUcsQ0FBQ0ksUUFBUixDQUhGLEVBSUUsaUJBQUc7QUFBRyxVQUFJLEVBQUM7QUFBUixPQUFhSixHQUFHLENBQUNLLEtBQWpCLENBQUgsQ0FKRixFQUtFLGlCQUFJTCxHQUFHLENBQUNNLEtBQVIsQ0FMRixDQUR3QjtBQUFBLEdBQVosQ0FBZDs7QUFGdUIsa0JBWVdDLHNEQUFRLENBQUMsRUFBRCxDQVpuQjtBQUFBLE1BWWhCQyxTQVpnQjtBQUFBLE1BWUxDLFlBWks7O0FBYXZCLE1BQUlDLE9BQUo7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsZ0JBQXBDLENBQXFELE9BQXJELEVBQThELFlBQU07QUFDbEVDLFdBQUssQ0FBQyxzQ0FBRCxDQUFMLENBQ0NDLElBREQsQ0FDTyxVQUFBQyxHQUFHO0FBQUEsZUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxPQURWLEVBRUNGLElBRkQsQ0FFTyxVQUFBRSxJQUFJLEVBQUk7QUFDYlIsZUFBTyxHQUFHUSxJQUFJLENBQUNyQixJQUFMLENBQVVFLEdBQVYsQ0FBYyxVQUFBQyxHQUFHO0FBQUEsaUJBQ3pCO0FBQUssZUFBRyxFQUFJQSxHQUFHLENBQUNDO0FBQWhCLGFBQ0U7QUFDRSxlQUFHLEVBQUUsWUFBV0QsR0FBRyxDQUFDRSxZQUR0QjtBQUVFLGVBQUcsRUFBQyxPQUZOO0FBR0Usb0JBQUssS0FIUDtBQUlFLGtCQUFNLEVBQUM7QUFKVCxZQURGLEVBT0Usa0JBQUtGLEdBQUcsQ0FBQ0csSUFBVCxDQVBGLEVBUUUsaUJBQUlILEdBQUcsQ0FBQ0ksUUFBUixDQVJGLEVBU0UsaUJBQUc7QUFBRyxnQkFBSSxFQUFDO0FBQVIsYUFBYUosR0FBRyxDQUFDSyxLQUFqQixDQUFILENBVEYsRUFVRSxpQkFBSUwsR0FBRyxDQUFDTSxLQUFSLENBVkYsQ0FEeUI7QUFBQSxTQUFqQixDQUFWO0FBY0FhLGVBQU8sQ0FBQ0MsR0FBUixDQUFZWixTQUFaO0FBQ0FXLGVBQU8sQ0FBQ0MsR0FBUixDQUFZVixPQUFaO0FBQ0EsWUFBSVcsUUFBUSxHQUFHYixTQUFTLENBQUNjLE1BQVYsQ0FBaUJaLE9BQWpCLENBQWY7QUFDQVMsZUFBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVo7QUFDQVosb0JBQVksQ0FBQ1ksUUFBRCxDQUFaO0FBQ0FGLGVBQU8sQ0FBQ0MsR0FBUjtBQUNELE9BdkJELFdBd0JPLFVBQUFHLEdBQUcsRUFBSTtBQUFFSixlQUFPLENBQUNLLEtBQVIsQ0FBYyxTQUFkLEVBQXlCRCxHQUF6QjtBQUE4QixPQXhCOUM7QUF5QkQsS0ExQkQ7QUEyQkQsR0E1QlEsRUE0QlAsRUE1Qk8sQ0FBVDtBQThCQSxTQUNBLG1FQUNFLE1BQUMsNkNBQUQsT0FERixFQUVFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFRLGFBQVMsRUFBQztBQUFsQixLQUNFLG1CQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLGlCQUNFO0FBQUssT0FBRyxFQUFDLDJCQUFUO0FBQXFDLFNBQUssRUFBQyxLQUEzQztBQUFpRCxVQUFNLEVBQUMsS0FBeEQ7QUFDRSxPQUFHLEVBQUM7QUFETixJQURGLENBREYsQ0FERixDQURGLEVBU0UsTUFBQywrQ0FBRCxPQVRGLENBREYsRUFhRSxvQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0Usa0NBREYsQ0FERixFQUlFO0FBQUssYUFBUyxFQUFHO0FBQWpCLEtBQ0d6QixPQURILENBSkYsRUFPRTtBQUFLLE1BQUUsRUFBRztBQUFWLEtBQ0dVLFNBREgsQ0FQRixFQVVFO0FBQ0UsUUFBSSxFQUFHLFFBRFQ7QUFFRSxNQUFFLEVBQUc7QUFGUCxtQkFWRixDQWJGLEVBNEJFLE1BQUMsK0NBQUQsT0E1QkYsQ0FGRixDQURBO0FBbUNEOztHQWhGUVosSzs7S0FBQUEsSzs7QUFrRk1BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZ2VudHMuanMuMDlhMTUxNWYwZTg4Y2U0YTYxMzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZCYXIgZnJvbSAnLi9OYXZCYXInO1xyXG5pbXBvcnQgTWV0YUhlYWQgZnJvbSAnLi9IZWFkJztcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHF1ZXJ5QXN5bmMgZnJvbSAnLi4vbXlzcWwuanMnO1xyXG5cclxuaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCl7XHJcblxyXG4gIGxldCBkYmRhdGEgPSBhd2FpdCBxdWVyeUFzeW5jKGBcclxuICAgIFNFTEVDVCAqIEZST00gYWdlbnRzIExJTUlUIDYgO1xyXG4gIGApXHJcblxyXG4gIGxldCByb3dzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYmRhdGEpKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHJvd3NcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gSW5kZXgoeyByb3dzIH0pIHtcclxuXHJcbiAgbGV0IHJvd3NNYXAgPSByb3dzLm1hcChyb3cgPT5cclxuICAgIDxkaXYga2V5ID0ge3Jvdy5pZH0+XHJcbiAgICAgIDxpbWcgc3JjPXsnc3RhdGljLycgK3Jvdy5hZ2VudHNfcGhvdG99IGFsdD1cImFnZW4xXCIgd2l0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiIC8+XHJcbiAgICAgIDxoND57cm93Lm5hbWV9PC9oND5cclxuICAgICAgPHA+e3Jvdy5wb3NpdGlvbn08L3A+XHJcbiAgICAgIDxwPjxhIGhyZWY9XCIjXCI+e3Jvdy5waG9uZX08L2E+PC9wPlxyXG4gICAgICA8cD57cm93LmVtYWlsfTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IFttb3JlQWdlbnQsIHNldE1vcmVBZ2VudF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgbGV0IGRhdGFNYXA7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFnZW50QnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9tb3JlYWdlbnRzJyApXHJcbiAgICAgIC50aGVuKCByZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oIGpzb24gPT4ge1xyXG4gICAgICAgIGRhdGFNYXAgPSBqc29uLnJvd3MubWFwKHJvdyA9PlxyXG4gICAgICAgICAgPGRpdiBrZXkgPSB7cm93LmlkfT5cclxuICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICBzcmM9eydzdGF0aWMvJyArcm93LmFnZW50c19waG90b30gXHJcbiAgICAgICAgICAgICAgYWx0PVwiYWdlbjFcIiBcclxuICAgICAgICAgICAgICB3aXRoPVwiMjAwXCIgXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMjAwXCIgXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxoND57cm93Lm5hbWV9PC9oND5cclxuICAgICAgICAgICAgPHA+e3Jvdy5wb3NpdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDxwPjxhIGhyZWY9XCIjXCI+e3Jvdy5waG9uZX08L2E+PC9wPlxyXG4gICAgICAgICAgICA8cD57cm93LmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhtb3JlQWdlbnQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGFNYXApO1xyXG4gICAgICAgIGxldCBjb21iaW5lZCA9IG1vcmVBZ2VudC5jb25jYXQoZGF0YU1hcCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY29tYmluZWQpO1xyXG4gICAgICAgIHNldE1vcmVBZ2VudChjb21iaW5lZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2dcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7IGNvbnNvbGUuZXJyb3IoXCJFcnJvcjogXCIsIGVycil9KSBcclxuICAgIH0pXHJcbiAgfSxbXSlcclxuXHJcbiAgcmV0dXJuKFxyXG4gIDw+XHJcbiAgICA8TWV0YUhlYWQgLz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdlbHNlSGVhZGVyJz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvZXN0YXRlLWxvZ28uc3ZnXCIgd2lkdGg9XCIzMDBcIiBoZWlnaHQ9XCIxMDBcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiVWx0aW1vIFJlYWwgRXN0YXRlLCBTeWRuZXksIEF1c3RyYWxpYVwiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZU9mUGFnZVwiPlxyXG4gICAgICAgICAgPGgxPlVsdGltbyBBZ2VudHM8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJncmlkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAge3Jvd3NNYXB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZCA9IFwiYWdlbnRNZW1iZXJcIj5cclxuICAgICAgICAgIHttb3JlQWdlbnR9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgIHR5cGUgPSBcImJ1dHRvblwiIFxyXG4gICAgICAgICAgaWQgPSBcImFnZW50QnRuXCJcclxuICAgICAgICA+TW9yZSBBZ2VudHM8L2J1dHRvbj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9