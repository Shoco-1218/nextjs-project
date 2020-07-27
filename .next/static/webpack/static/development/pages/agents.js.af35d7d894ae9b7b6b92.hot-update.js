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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZ2VudHMuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJyb3dzIiwicm93c01hcCIsIm1hcCIsInJvdyIsImlkIiwiYWdlbnRzX3Bob3RvIiwibmFtZSIsInBvc2l0aW9uIiwicGhvbmUiLCJlbWFpbCIsInVzZVN0YXRlIiwibW9yZUFnZW50Iiwic2V0TW9yZUFnZW50IiwiZGF0YU1hcCIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImNvbmNhdCIsImVyciIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQWtCQSxTQUFTQSxLQUFULE9BQXlCO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBRXZCLE1BQUlDLE9BQU8sR0FBR0QsSUFBSSxDQUFDRSxHQUFMLENBQVMsVUFBQUMsR0FBRztBQUFBLFdBQ3hCO0FBQUssU0FBRyxFQUFJQSxHQUFHLENBQUNDO0FBQWhCLE9BQ0U7QUFBSyxTQUFHLEVBQUUsWUFBV0QsR0FBRyxDQUFDRSxZQUF6QjtBQUF1QyxTQUFHLEVBQUMsT0FBM0M7QUFBbUQsY0FBSyxLQUF4RDtBQUE4RCxZQUFNLEVBQUM7QUFBckUsTUFERixFQUVFLGtCQUFLRixHQUFHLENBQUNHLElBQVQsQ0FGRixFQUdFLGlCQUFJSCxHQUFHLENBQUNJLFFBQVIsQ0FIRixFQUlFLGlCQUFHO0FBQUcsVUFBSSxFQUFDO0FBQVIsT0FBYUosR0FBRyxDQUFDSyxLQUFqQixDQUFILENBSkYsRUFLRSxpQkFBSUwsR0FBRyxDQUFDTSxLQUFSLENBTEYsQ0FEd0I7QUFBQSxHQUFaLENBQWQ7O0FBRnVCLGtCQVlXQyxzREFBUSxDQUFDLEVBQUQsQ0FabkI7QUFBQSxNQVloQkMsU0FaZ0I7QUFBQSxNQVlMQyxZQVpLOztBQWF2QixNQUFJQyxPQUFKO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxZQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NDLGdCQUFwQyxDQUFxRCxPQUFyRCxFQUE4RCxZQUFNO0FBQ2xFQyxXQUFLLENBQUMsc0NBQUQsQ0FBTCxDQUNDQyxJQURELENBQ08sVUFBQUMsR0FBRztBQUFBLGVBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsT0FEVixFQUVDRixJQUZELENBRU8sVUFBQUUsSUFBSSxFQUFJO0FBQ2JSLGVBQU8sR0FBR1EsSUFBSSxDQUFDckIsSUFBTCxDQUFVRSxHQUFWLENBQWMsVUFBQUMsR0FBRztBQUFBLGlCQUN6QjtBQUFLLGVBQUcsRUFBSUEsR0FBRyxDQUFDQztBQUFoQixhQUNFO0FBQ0UsZUFBRyxFQUFFLFlBQVdELEdBQUcsQ0FBQ0UsWUFEdEI7QUFFRSxlQUFHLEVBQUMsT0FGTjtBQUdFLG9CQUFLLEtBSFA7QUFJRSxrQkFBTSxFQUFDO0FBSlQsWUFERixFQU9FLGtCQUFLRixHQUFHLENBQUNHLElBQVQsQ0FQRixFQVFFLGlCQUFJSCxHQUFHLENBQUNJLFFBQVIsQ0FSRixFQVNFLGlCQUFHO0FBQUcsZ0JBQUksRUFBQztBQUFSLGFBQWFKLEdBQUcsQ0FBQ0ssS0FBakIsQ0FBSCxDQVRGLEVBVUUsaUJBQUlMLEdBQUcsQ0FBQ00sS0FBUixDQVZGLENBRHlCO0FBQUEsU0FBakIsQ0FBVjtBQWNBRyxvQkFBWSxDQUFDRCxTQUFTLENBQUNXLE1BQVYsQ0FBaUJULE9BQWpCLENBQUQsQ0FBWjtBQUNELE9BbEJELFdBbUJPLFVBQUFVLEdBQUcsRUFBSTtBQUFFQyxlQUFPLENBQUNDLEtBQVIsQ0FBYyxTQUFkLEVBQXlCRixHQUF6QjtBQUE4QixPQW5COUM7QUFvQkQsS0FyQkQ7QUFzQkQsR0F2QlEsRUF1QlAsRUF2Qk8sQ0FBVDtBQXlCQSxTQUNBLG1FQUNFLE1BQUMsNkNBQUQsT0FERixFQUVFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFRLGFBQVMsRUFBQztBQUFsQixLQUNFLG1CQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLGlCQUNFO0FBQUssT0FBRyxFQUFDLDJCQUFUO0FBQXFDLFNBQUssRUFBQyxLQUEzQztBQUFpRCxVQUFNLEVBQUMsS0FBeEQ7QUFDRSxPQUFHLEVBQUM7QUFETixJQURGLENBREYsQ0FERixDQURGLEVBU0UsTUFBQywrQ0FBRCxPQVRGLENBREYsRUFhRSxvQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0Usa0NBREYsQ0FERixFQUlFO0FBQUssYUFBUyxFQUFHO0FBQWpCLEtBQ0d0QixPQURILENBSkYsRUFPRTtBQUFLLE1BQUUsRUFBRztBQUFWLEtBQ0dVLFNBREgsQ0FQRixFQVVFO0FBQ0UsUUFBSSxFQUFHLFFBRFQ7QUFFRSxNQUFFLEVBQUc7QUFGUCxtQkFWRixDQWJGLEVBNEJFLE1BQUMsK0NBQUQsT0E1QkYsQ0FGRixDQURBO0FBbUNEOztHQTNFUVosSzs7S0FBQUEsSzs7QUE2RU1BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZ2VudHMuanMuYWYzNWQ3ZDg5NGFlOWI3YjZiOTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZCYXIgZnJvbSAnLi9OYXZCYXInO1xyXG5pbXBvcnQgTWV0YUhlYWQgZnJvbSAnLi9IZWFkJztcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHF1ZXJ5QXN5bmMgZnJvbSAnLi4vbXlzcWwuanMnO1xyXG5cclxuaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCl7XHJcblxyXG4gIGxldCBkYmRhdGEgPSBhd2FpdCBxdWVyeUFzeW5jKGBcclxuICAgIFNFTEVDVCAqIEZST00gYWdlbnRzIExJTUlUIDYgO1xyXG4gIGApXHJcblxyXG4gIGxldCByb3dzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYmRhdGEpKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHJvd3NcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gSW5kZXgoeyByb3dzIH0pIHtcclxuXHJcbiAgbGV0IHJvd3NNYXAgPSByb3dzLm1hcChyb3cgPT5cclxuICAgIDxkaXYga2V5ID0ge3Jvdy5pZH0+XHJcbiAgICAgIDxpbWcgc3JjPXsnc3RhdGljLycgK3Jvdy5hZ2VudHNfcGhvdG99IGFsdD1cImFnZW4xXCIgd2l0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiIC8+XHJcbiAgICAgIDxoND57cm93Lm5hbWV9PC9oND5cclxuICAgICAgPHA+e3Jvdy5wb3NpdGlvbn08L3A+XHJcbiAgICAgIDxwPjxhIGhyZWY9XCIjXCI+e3Jvdy5waG9uZX08L2E+PC9wPlxyXG4gICAgICA8cD57cm93LmVtYWlsfTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IFttb3JlQWdlbnQsIHNldE1vcmVBZ2VudF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgbGV0IGRhdGFNYXA7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFnZW50QnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9tb3JlYWdlbnRzJyApXHJcbiAgICAgIC50aGVuKCByZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oIGpzb24gPT4ge1xyXG4gICAgICAgIGRhdGFNYXAgPSBqc29uLnJvd3MubWFwKHJvdyA9PlxyXG4gICAgICAgICAgPGRpdiBrZXkgPSB7cm93LmlkfT5cclxuICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICBzcmM9eydzdGF0aWMvJyArcm93LmFnZW50c19waG90b30gXHJcbiAgICAgICAgICAgICAgYWx0PVwiYWdlbjFcIiBcclxuICAgICAgICAgICAgICB3aXRoPVwiMjAwXCIgXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMjAwXCIgXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxoND57cm93Lm5hbWV9PC9oND5cclxuICAgICAgICAgICAgPHA+e3Jvdy5wb3NpdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDxwPjxhIGhyZWY9XCIjXCI+e3Jvdy5waG9uZX08L2E+PC9wPlxyXG4gICAgICAgICAgICA8cD57cm93LmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRNb3JlQWdlbnQobW9yZUFnZW50LmNvbmNhdChkYXRhTWFwKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4geyBjb25zb2xlLmVycm9yKFwiRXJyb3I6IFwiLCBlcnIpfSkgXHJcbiAgICB9KVxyXG4gIH0sW10pXHJcblxyXG4gIHJldHVybihcclxuICA8PlxyXG4gICAgPE1ldGFIZWFkIC8+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT0nZWxzZUhlYWRlcic+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2VzdGF0ZS1sb2dvLnN2Z1wiIHdpZHRoPVwiMzAwXCIgaGVpZ2h0PVwiMTAwXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlVsdGltbyBSZWFsIEVzdGF0ZSwgU3lkbmV5LCBBdXN0cmFsaWFcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE5hdkJhciAvPlxyXG4gICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVPZlBhZ2VcIj5cclxuICAgICAgICAgIDxoMT5VbHRpbW8gQWdlbnRzPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZ3JpZC1jb250YWluZXJcIj5cclxuICAgICAgICAgIHtyb3dzTWFwfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQgPSBcImFnZW50TWVtYmVyXCI+XHJcbiAgICAgICAgICB7bW9yZUFnZW50fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICB0eXBlID0gXCJidXR0b25cIiBcclxuICAgICAgICAgIGlkID0gXCJhZ2VudEJ0blwiXHJcbiAgICAgICAgPk1vcmUgQWdlbnRzPC9idXR0b24+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==