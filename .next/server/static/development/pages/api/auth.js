module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./mysql.js":
/*!******************!*\
  !*** ./mysql.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ "mysql");
/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ "util");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);


const connection = mysql__WEBPACK_IMPORTED_MODULE_0___default.a.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'shoko12180315',
  database: 'expressproject'
});
connection.connect();

const queryAsync = function (sql, args) {
  return util__WEBPACK_IMPORTED_MODULE_1___default.a.promisify(connection.query).call(connection, sql, args);
};

/* harmony default export */ __webpack_exports__["default"] = (queryAsync);

/***/ }),

/***/ "./pages/api/auth.js":
/*!***************************!*\
  !*** ./pages/api/auth.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mysql */ "./mysql.js");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);




async function auth(req, res) {
  let data = req.body;

  if (data.action === "login") {
    let email = data.email;
    let pass = data.password;
    let hash = crypto__WEBPACK_IMPORTED_MODULE_1___default.a.createHash('sha256').update(pass).digest('base64');
    let rows = await Object(_mysql__WEBPACK_IMPORTED_MODULE_0__["default"])(`
      SELECT * FROM register WHERE email LIKE "${email}"`);

    try {
      if (rows.length > 0 && rows[0].password == hash) {
        let token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.sign({
          email: email,
          role: rows[0].role
        }, 'ShokoDidIt');
        res.setHeader('Set-Cookie', `logInCookie=${token}; Path=/;`);
        res.statusCode = 200;
        res.end();
      } else {
        res.statusCode = 401;
        res.end();
      }
    } catch (err) {
      res.statusCode = 401;
      res.end();
    }
  } else if (data.action === "register") {
    let name = data.name;
    let email = data.email;
    let pass = data.password;
    let hash = crypto__WEBPACK_IMPORTED_MODULE_1___default.a.createHash('sha256').update(pass).digest('base64');
    await Object(_mysql__WEBPACK_IMPORTED_MODULE_0__["default"])(`
    INSERT INTO register (name, email, password, role) 
    VALUES('${name}', '${email}', '${hash}', '' )`);
    res.statusCode = 200;
    res.end();
  } else {
    res.redirect('/index');
    res.end();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (auth);

/***/ }),

/***/ 6:
/*!*********************************!*\
  !*** multi ./pages/api/auth.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\shoko\src\URE3-Next.js\ure-nextjs\pages\api\auth.js */"./pages/api/auth.js");


/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mysql");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbXlzcWwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2F1dGguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY3J5cHRvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibXlzcWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dGlsXCIiXSwibmFtZXMiOlsiY29ubmVjdGlvbiIsIm15c3FsIiwiY3JlYXRlQ29ubmVjdGlvbiIsImhvc3QiLCJ1c2VyIiwicGFzc3dvcmQiLCJkYXRhYmFzZSIsImNvbm5lY3QiLCJxdWVyeUFzeW5jIiwic3FsIiwiYXJncyIsInV0aWwiLCJwcm9taXNpZnkiLCJxdWVyeSIsImNhbGwiLCJhdXRoIiwicmVxIiwicmVzIiwiZGF0YSIsImJvZHkiLCJhY3Rpb24iLCJlbWFpbCIsInBhc3MiLCJoYXNoIiwiY3J5cHRvIiwiY3JlYXRlSGFzaCIsInVwZGF0ZSIsImRpZ2VzdCIsInJvd3MiLCJsZW5ndGgiLCJ0b2tlbiIsImp3dCIsInNpZ24iLCJyb2xlIiwic2V0SGVhZGVyIiwic3RhdHVzQ29kZSIsImVuZCIsImVyciIsIm5hbWUiLCJyZWRpcmVjdCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7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LFFBQUlrQixJQUFJLEdBQUdDLDZDQUFNLENBQUNDLFVBQVAsQ0FBa0IsUUFBbEIsRUFBNEJDLE1BQTVCLENBQW1DSixJQUFuQyxFQUF5Q0ssTUFBekMsQ0FBZ0QsUUFBaEQsQ0FBWDtBQUVBLFVBQU1uQixzREFBVSxDQUFFOztjQUVSOEIsSUFBSyxPQUFNakIsS0FBTSxPQUFNRSxJQUFLLFNBRnRCLENBQWhCO0FBSUFOLE9BQUcsQ0FBQ2tCLFVBQUosR0FBaUIsR0FBakI7QUFDQWxCLE9BQUcsQ0FBQ21CLEdBQUo7QUFDRCxHQVpNLE1BWUE7QUFDTG5CLE9BQUcsQ0FBQ3NCLFFBQUosQ0FBYSxRQUFiO0FBQ0F0QixPQUFHLENBQUNtQixHQUFKO0FBQ0Q7QUFDRjs7QUFHY3JCLG1FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakRBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhcGlcXGF1dGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG4iLCJpbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwnO1xyXG5pbXBvcnQgdXRpbCBmcm9tICAndXRpbCc7XHJcblxyXG5jb25zdCBjb25uZWN0aW9uID0gbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XHJcbiAgaG9zdDogJ2xvY2FsaG9zdCcsXHJcbiAgdXNlcjogJ3Jvb3QnLFxyXG4gIHBhc3N3b3JkOiAnc2hva28xMjE4MDMxNScsXHJcbiAgZGF0YWJhc2U6ICdleHByZXNzcHJvamVjdCdcclxufSlcclxuXHJcbmNvbm5lY3Rpb24uY29ubmVjdCgpXHJcblxyXG5jb25zdCBxdWVyeUFzeW5jID0gZnVuY3Rpb24oc3FsLCBhcmdzKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICB1dGlsLnByb21pc2lmeShjb25uZWN0aW9uLnF1ZXJ5KS5jYWxsKGNvbm5lY3Rpb24sIHNxbCwgYXJncylcclxuICApO1xyXG4gIFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcXVlcnlBc3luYztcclxuIiwiaW1wb3J0IHF1ZXJ5QXN5bmMgZnJvbSBcIi4uLy4uL215c3FsXCI7XHJcbmltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gYXV0aChyZXEsIHJlcykge1xyXG4gIGxldCBkYXRhID0gcmVxLmJvZHk7XHJcblxyXG4gIGlmKGRhdGEuYWN0aW9uID09PSBcImxvZ2luXCIpIHtcclxuICAgIGxldCBlbWFpbCA9IGRhdGEuZW1haWw7XHJcbiAgICBsZXQgcGFzcyA9IGRhdGEucGFzc3dvcmQ7XHJcbiAgICBsZXQgaGFzaCA9IGNyeXB0by5jcmVhdGVIYXNoKCdzaGEyNTYnKS51cGRhdGUocGFzcykuZGlnZXN0KCdiYXNlNjQnKTtcclxuICAgIFxyXG4gICAgbGV0IHJvd3MgPSBhd2FpdCBxdWVyeUFzeW5jKGBcclxuICAgICAgU0VMRUNUICogRlJPTSByZWdpc3RlciBXSEVSRSBlbWFpbCBMSUtFIFwiJHtlbWFpbH1cImBcclxuICAgICk7XHJcblxyXG4gICAgdHJ5e1xyXG4gICAgICBpZihyb3dzLmxlbmd0aCA+IDAgJiYgcm93c1swXS5wYXNzd29yZCA9PSBoYXNoKSB7XHJcbiAgICAgICAgbGV0IHRva2VuID0gand0LnNpZ24oe2VtYWlsOiBlbWFpbCwgcm9sZTogcm93c1swXS5yb2xlfSwgJ1Nob2tvRGlkSXQnKTtcclxuICAgICAgICByZXMuc2V0SGVhZGVyKCdTZXQtQ29va2llJywgYGxvZ0luQ29va2llPSR7dG9rZW59OyBQYXRoPS87YCk7XHJcbiAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSAyMDA7IFxyXG4gICAgICAgIHJlcy5lbmQoKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDE7XHJcbiAgICAgICAgcmVzLmVuZCgpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICByZXMuc3RhdHVzQ29kZSA9IDQwMTtcclxuICAgICAgcmVzLmVuZCgpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoZGF0YS5hY3Rpb24gPT09IFwicmVnaXN0ZXJcIikge1xyXG4gICAgbGV0IG5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICBsZXQgZW1haWwgPSBkYXRhLmVtYWlsO1xyXG4gICAgbGV0IHBhc3MgPSBkYXRhLnBhc3N3b3JkO1xyXG4gICAgbGV0IGhhc2ggPSBjcnlwdG8uY3JlYXRlSGFzaCgnc2hhMjU2JykudXBkYXRlKHBhc3MpLmRpZ2VzdCgnYmFzZTY0Jyk7XHJcblxyXG4gICAgYXdhaXQgcXVlcnlBc3luYyhgXHJcbiAgICBJTlNFUlQgSU5UTyByZWdpc3RlciAobmFtZSwgZW1haWwsIHBhc3N3b3JkLCByb2xlKSBcclxuICAgIFZBTFVFUygnJHtuYW1lfScsICcke2VtYWlsfScsICcke2hhc2h9JywgJycgKWBcclxuICAgICk7XHJcbiAgICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcclxuICAgIHJlcy5lbmQoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnJlZGlyZWN0KCcvaW5kZXgnKTtcclxuICAgIHJlcy5lbmQoKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJteXNxbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dGlsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=