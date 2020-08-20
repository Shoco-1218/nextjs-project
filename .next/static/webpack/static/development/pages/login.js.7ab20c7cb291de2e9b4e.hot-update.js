webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavBar */ "./pages/NavBar.js");
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Head */ "./pages/Head.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer */ "./pages/Footer.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "C:\\Users\\shoko\\src\\URE3-Next.js\\ure-nextjs\\pages\\login.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([""]),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([""]),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([""]),
      password = _useState3[0],
      setPass = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(["Log In"]),
      logMes = _useState4[0],
      setLogmes = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([""]),
      failed = _useState5[0],
      setFailed = _useState5[1];

  function handleChange(e) {
    var target = e.target;

    if (target.name == "name") {
      setName(target.value);
    } else if (target.name == "email") {
      setEmail(target.value);
    } else if (target.name == "password") {
      setPass(target.value);
    }
  }

  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  } // async function handleLogout(e){
  //   e.preventDefault();
  //   let data ={action: "logout"};
  //   let response = await fetch('http://localhost:3000/api/auth', 
  //   {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   })
  //   if(response.ok) {
  //     setLogmes("Logged out! Thank you.");
  //     setFailed("");
  //   }
  // }


  function _handleSubmit() {
    _handleSubmit = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var data, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              data = {
                action: "login",
                name: name,
                email: email,
                password: password
              };
              _context.next = 4;
              return fetch('http://localhost:3000/api/auth', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              });

            case 4:
              response = _context.sent;

              if (response.ok) {
                setLogmes("Successfully logged in");
                setFailed("");
                document.querySelector("#myForm").reset();
              } else {
                setFailed("Failed to proceed. Please try it again");
                document.querySelector("#password").reset();
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  function handleLogout(e) {
    e.pr;
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_Head__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx("header", {
    className: "elseHeader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "../static/estate-logo.svg",
    width: "300",
    height: "100",
    alt: "Ultimo Real Estate, Sydney, Australia",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  })))), __jsx(_NavBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  })), __jsx("main", {
    id: "loginMain",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, logMes), __jsx("div", {
    className: "display",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, " "), __jsx("div", {
    className: "login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, __jsx("form", {
    method: "POST",
    id: "myForm",
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  }, __jsx("h4", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, failed), __jsx("div", {
    className: "loginForm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 19
    }
  }, "Name"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 19
    }
  }), __jsx("input", {
    type: "text",
    id: "name",
    name: "name",
    placeholder: "your full name",
    onChange: handleChange,
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "loginForm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 19
    }
  }, "Email address"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 19
    }
  }), __jsx("input", {
    type: "email",
    id: "email",
    name: "email",
    placeholder: "you@example.com",
    onChange: handleChange,
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "loginForm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 19
    }
  }, "Password"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 19
    }
  }), __jsx("input", {
    type: "password",
    id: "password",
    name: "password",
    placeholder: "Enter 6 characters or more",
    onChange: handleChange,
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 19
    }
  })), __jsx("button", {
    type: "submit",
    id: "submitBtn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }, "Log In"), __jsx("p", {
    style: {
      marginTop: '20px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }, "Not a member yet?.....", __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/register",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 19
    }
  }, __jsx("a", {
    id: "hover",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 21
    }
  }, "Register")))), __jsx("form", {
    action: "/logout",
    method: "POST",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 15
    }
  }, __jsx("button", {
    id: "logout",
    onClick: handleLogout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 17
    }
  }, "Log Out"))))), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 9
    }
  })));
}

_s(Index, "vZhxM0pr+b3dF/VQ7KNXvOykCsc=");

_c = Index;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzIiwibG9nTWVzIiwic2V0TG9nbWVzIiwiZmFpbGVkIiwic2V0RmFpbGVkIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiYWN0aW9uIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsIm9rIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicmVzZXQiLCJoYW5kbGVMb2dvdXQiLCJwciIsImNvbG9yIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUdBLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBQyxDQUFDLEVBQUQsQ0FBRCxDQURqQjtBQUFBLE1BQ1JDLElBRFE7QUFBQSxNQUNGQyxPQURFOztBQUFBLG1CQUVXRixzREFBUSxDQUFDLENBQUMsRUFBRCxDQUFELENBRm5CO0FBQUEsTUFFUkcsS0FGUTtBQUFBLE1BRURDLFFBRkM7O0FBQUEsbUJBR2FKLHNEQUFRLENBQUMsQ0FBQyxFQUFELENBQUQsQ0FIckI7QUFBQSxNQUdSSyxRQUhRO0FBQUEsTUFHRUMsT0FIRjs7QUFBQSxtQkFLWU4sc0RBQVEsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUxwQjtBQUFBLE1BS1RPLE1BTFM7QUFBQSxNQUtEQyxTQUxDOztBQUFBLG1CQU1ZUixzREFBUSxDQUFDLENBQUMsRUFBRCxDQUFELENBTnBCO0FBQUEsTUFNVFMsTUFOUztBQUFBLE1BTURDLFNBTkM7O0FB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LFVBQU0sRUFBQyxNQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDQSxNQUFFLEVBQUMsUUFESDtBQUVBLFdBQU8sRUFBSUgsWUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0F4REYsQ0FGRixDQUZGLENBaEJGLEVBeUZFLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpGRixDQUZGLENBREY7QUFrR0Q7O0dBMUtRL0IsSzs7S0FBQUEsSztBQTRLTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGxvZ2luLmpzLjdhYjIwYzdjYjI5MWRlMmU5YjRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2QmFyIGZyb20gJy4vTmF2QmFyJztcclxuaW1wb3J0IE1ldGFIZWFkIGZyb20gJy4vSGVhZCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgJy4uL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFtcIlwiXSk7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShbXCJcIl0pO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc10gPSB1c2VTdGF0ZShbXCJcIl0pO1xyXG5cclxuICBjb25zdFtsb2dNZXMsIHNldExvZ21lc10gPSB1c2VTdGF0ZShbXCJMb2cgSW5cIl0pO1xyXG4gIGNvbnN0W2ZhaWxlZCwgc2V0RmFpbGVkXSA9IHVzZVN0YXRlKFtcIlwiXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKXtcclxuICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICBcclxuICAgIGlmKHRhcmdldC5uYW1lID09IFwibmFtZVwiKSB7XHJcbiAgICAgIHNldE5hbWUodGFyZ2V0LnZhbHVlKTtcclxuICAgIH1lbHNlIGlmKHRhcmdldC5uYW1lID09IFwiZW1haWxcIikge1xyXG4gICAgICBzZXRFbWFpbCh0YXJnZXQudmFsdWUpO1xyXG4gICAgfWVsc2UgaWYodGFyZ2V0Lm5hbWUgPT0gXCJwYXNzd29yZFwiKXtcclxuICAgICAgc2V0UGFzcyh0YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0IChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgIGFjdGlvbjogXCJsb2dpblwiLFxyXG4gICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9hdXRoJywgXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICB9KVxyXG5cclxuICAgIGlmKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHNldExvZ21lcyhcIlN1Y2Nlc3NmdWxseSBsb2dnZWQgaW5cIik7XHJcbiAgICAgIHNldEZhaWxlZChcIlwiKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNteUZvcm1cIikucmVzZXQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEZhaWxlZChcIkZhaWxlZCB0byBwcm9jZWVkLiBQbGVhc2UgdHJ5IGl0IGFnYWluXCIpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3N3b3JkXCIpLnJlc2V0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBhc3luYyBmdW5jdGlvbiBoYW5kbGVMb2dvdXQoZSl7XHJcbiAgLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIC8vICAgbGV0IGRhdGEgPXthY3Rpb246IFwibG9nb3V0XCJ9O1xyXG5cclxuICAvLyAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2F1dGgnLCBcclxuICAvLyAgIHtcclxuICAvLyAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgLy8gICAgIGhlYWRlcnM6IHtcclxuICAvLyAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAvLyAgIH0pXHJcblxyXG4gIC8vICAgaWYocmVzcG9uc2Uub2spIHtcclxuICAvLyAgICAgc2V0TG9nbWVzKFwiTG9nZ2VkIG91dCEgVGhhbmsgeW91LlwiKTtcclxuICAvLyAgICAgc2V0RmFpbGVkKFwiXCIpO1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuICBmdW5jdGlvbiBoYW5kbGVMb2dvdXQoZSkge1xyXG4gICAgZS5wclxyXG4gIH1cclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPD5cclxuICAgICAgPE1ldGFIZWFkIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9J2Vsc2VIZWFkZXInPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL3N0YXRpYy9lc3RhdGUtbG9nby5zdmdcIiBcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBcIiBoZWlnaHQ9XCIxMDBcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJVbHRpbW8gUmVhbCBFc3RhdGUsIFN5ZG5leSwgQXVzdHJhbGlhXCIgXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICAgIDxtYWluIGlkPVwibG9naW5NYWluXCI+XHJcbiAgICAgICAgICA8aDE+e2xvZ01lc308L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5XCI+XHJcbiAgICAgICAgICAgIDxkaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luXCI+XHJcbiAgICAgICAgICAgICAgPGZvcm0gXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q9XCJQT1NUXCJcclxuICAgICAgICAgICAgICAgIGlkID0gXCJteUZvcm1cIlxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQgPXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGg0IHN0eWxlID0ge3tjb2xvcjogXCJyZWRcIn19PntmYWlsZWR9PC9oND5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5Gb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIiBcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInlvdXIgZnVsbCBuYW1lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luRm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWwgYWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwieW91QGV4YW1wbGUuY29tXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luRm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIDYgY2hhcmFjdGVycyBvciBtb3JlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgaWQgPSBcInN1Ym1pdEJ0blwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIExvZyBJblxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Ub3A6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgTm90IGEgbWVtYmVyIHlldD8uLi4uLlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaWQgPSBcImhvdmVyXCI+UmVnaXN0ZXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiL2xvZ291dFwiIG1ldGhvZD1cIlBPU1RcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICBpZD1cImxvZ291dFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrID0ge2hhbmRsZUxvZ291dH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgTG9nIE91dFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L21haW4+XHJcblxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=