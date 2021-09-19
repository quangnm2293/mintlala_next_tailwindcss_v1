"use strict";
(() => {
var exports = {};
exports.id = "pages/api/user";
exports.ids = ["pages/api/user"];
exports.modules = {

/***/ "./middleware/auth.js":
/*!****************************!*\
  !*** ./middleware/auth.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/userModel */ "./models/userModel.js");



const auth = async (req, res) => {
  const token = req.headers.authorization;
  if (!token) return res.json({
    err: 'Xác thực không khả dụng.'
  });
  const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.ACCESS_TOKEN_SECRET);
  if (!decoded) return res.json({
    err: 'Xác thực thất bại.'
  });
  const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__.default.findOne({
    _id: decoded.id
  });
  return {
    id: user._id,
    role: user.role,
    root: user.root
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);

/***/ }),

/***/ "./models/userModel.js":
/*!*****************************!*\
  !*** ./models/userModel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user'
  },
  root: {
    type: Boolean,
    default: false
  },
  avatar: {
    type: String,
    default: '/images/avatardefault.png'
  },
  type: {
    type: String,
    default: 'regiter'
  }
}, {
  timestamps: true
});
const User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.user) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('user', userSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);

/***/ }),

/***/ "./pages/api/user/index.js":
/*!*********************************!*\
  !*** ./pages/api/user/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ "./utils/connectDB.js");
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/userModel */ "./models/userModel.js");
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../middleware/auth */ "./middleware/auth.js");
/* eslint-disable import/no-anonymous-default-export */



(0,_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__.default)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  switch (req.method) {
    case 'GET':
      await getUsers(req, res);
      break;
  }
});

const getUsers = async (req, res) => {
  try {
    const result = await (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_2__.default)(req, res);
    if (!result) return res.json({
      err: 'Bạn không có quyền truy cập.'
    });

    if (result.role !== 'admin') {
      return res.json({
        err: 'Bạn không có quyền truy cập.'
      });
    }

    const limit = parseInt(req.query.limit, 10) || 8;
    const page = parseInt(req.query.page, 10) || 1;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const usersResult = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__.default.find({});
    const users = usersResult.slice(startIndex, endIndex);
    res.json({
      msg: 'Lấy danh sách người dùng thành công!',
      users: users,
      result: usersResult.length
    });
  } catch (err) {
    return res.json({
      err: err.message
    });
  }
};

/***/ }),

/***/ "./utils/connectDB.js":
/*!****************************!*\
  !*** ./utils/connectDB.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);


const connectDB = () => {
  if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {
    console.log('Already connected.');
    return;
  }

  mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URL, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, err => {
    if (err) throw err;
    console.log('Connected to mongodb.');
  });
  console.log('Connected to mongodb.');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/user/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVA7QUFDQTtBQUNELENBMUJEOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7O0FBRUEsTUFBTWhCLFNBQVMsR0FBRyxNQUFNO0FBQ3ZCLE1BQUloQiwyRUFBSixFQUF3QztBQUN2Q21DLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0FBQ0E7QUFDQTs7QUFDRHBDLEVBQUFBLHVEQUFBLENBQ0NULE9BQU8sQ0FBQ0MsR0FBUixDQUFZOEMsV0FEYixFQUVDO0FBQ0NDLElBQUFBLGNBQWMsRUFBRSxJQURqQjtBQUVDQyxJQUFBQSxnQkFBZ0IsRUFBRSxLQUZuQjtBQUdDQyxJQUFBQSxlQUFlLEVBQUUsSUFIbEI7QUFJQ0MsSUFBQUEsa0JBQWtCLEVBQUU7QUFKckIsR0FGRCxFQVFDdEQsR0FBRyxJQUFJO0FBQ04sUUFBSUEsR0FBSixFQUFTLE1BQU1BLEdBQU47QUFDVCtDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0EsR0FYRjtBQWFBRCxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNBLENBbkJEOztBQXFCQSxpRUFBZXBCLFNBQWY7Ozs7Ozs7Ozs7QUN2QkE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS8uL21pZGRsZXdhcmUvYXV0aC5qcyIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvLi9tb2RlbHMvdXNlck1vZGVsLmpzIiwid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS8uL3BhZ2VzL2FwaS91c2VyL2luZGV4LmpzIiwid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS8uL3V0aWxzL2Nvbm5lY3REQi5qcyIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvZXh0ZXJuYWwgXCJtb25nb29zZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vbW9kZWxzL3VzZXJNb2RlbCc7XHJcblxyXG5jb25zdCBhdXRoID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcblx0Y29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uO1xyXG5cclxuXHRpZiAoIXRva2VuKSByZXR1cm4gcmVzLmpzb24oeyBlcnI6ICdYw6FjIHRo4buxYyBraMO0bmcga2jhuqMgZOG7pW5nLicgfSk7XHJcblxyXG5cdGNvbnN0IGRlY29kZWQgPSBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU5fU0VDUkVUKTtcclxuXHRpZiAoIWRlY29kZWQpIHJldHVybiByZXMuanNvbih7IGVycjogJ1jDoWMgdGjhu7FjIHRo4bqldCBi4bqhaS4nIH0pO1xyXG5cclxuXHRjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgX2lkOiBkZWNvZGVkLmlkIH0pO1xyXG5cdHJldHVybiB7IGlkOiB1c2VyLl9pZCwgcm9sZTogdXNlci5yb2xlLCByb290OiB1c2VyLnJvb3QgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF1dGg7XHJcbiIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuXHR7XHJcblx0XHRuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuXHRcdGVtYWlsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxyXG5cdFx0cGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG5cdFx0cm9sZTogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICd1c2VyJyB9LFxyXG5cdFx0cm9vdDogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxyXG5cdFx0YXZhdGFyOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJy9pbWFnZXMvYXZhdGFyZGVmYXVsdC5wbmcnIH0sXHJcblx0XHR0eXBlOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJ3JlZ2l0ZXInIH0sXHJcblx0fSxcclxuXHR7XHJcblx0XHR0aW1lc3RhbXBzOiB0cnVlLFxyXG5cdH1cclxuKTtcclxuXHJcbmNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbHMudXNlciB8fCBtb25nb29zZS5tb2RlbCgndXNlcicsIHVzZXJTY2hlbWEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWFub255bW91cy1kZWZhdWx0LWV4cG9ydCAqL1xyXG5pbXBvcnQgY29ubmVjdERCIGZyb20gJy4uLy4uLy4uL3V0aWxzL2Nvbm5lY3REQic7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uLy4uL21vZGVscy91c2VyTW9kZWwnO1xyXG5pbXBvcnQgYXV0aCBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL2F1dGgnO1xyXG5cclxuY29ubmVjdERCKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuXHRzd2l0Y2ggKHJlcS5tZXRob2QpIHtcclxuXHRcdGNhc2UgJ0dFVCc6XHJcblx0XHRcdGF3YWl0IGdldFVzZXJzKHJlcSwgcmVzKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgZ2V0VXNlcnMgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXV0aChyZXEsIHJlcyk7XHJcblxyXG5cdFx0aWYgKCFyZXN1bHQpIHJldHVybiByZXMuanNvbih7IGVycjogJ0LhuqFuIGtow7RuZyBjw7MgcXV54buBbiB0cnV5IGPhuq1wLicgfSk7XHJcblxyXG5cdFx0aWYgKHJlc3VsdC5yb2xlICE9PSAnYWRtaW4nKSB7XHJcblx0XHRcdHJldHVybiByZXMuanNvbih7IGVycjogJ0LhuqFuIGtow7RuZyBjw7MgcXV54buBbiB0cnV5IGPhuq1wLicgfSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgbGltaXQgPSBwYXJzZUludChyZXEucXVlcnkubGltaXQsIDEwKSB8fCA4O1xyXG5cdFx0Y29uc3QgcGFnZSA9IHBhcnNlSW50KHJlcS5xdWVyeS5wYWdlLCAxMCkgfHwgMTtcclxuXHRcdGNvbnN0IHN0YXJ0SW5kZXggPSAocGFnZSAtIDEpICogbGltaXQ7XHJcblx0XHRjb25zdCBlbmRJbmRleCA9IHBhZ2UgKiBsaW1pdDtcclxuXHJcblx0XHRjb25zdCB1c2Vyc1Jlc3VsdCA9IGF3YWl0IFVzZXIuZmluZCh7fSk7XHJcblx0XHRjb25zdCB1c2VycyA9IHVzZXJzUmVzdWx0LnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcclxuXHJcblx0XHRyZXMuanNvbih7XHJcblx0XHRcdG1zZzogJ0zhuqV5IGRhbmggc8OhY2ggbmfGsOG7nWkgZMO5bmcgdGjDoG5oIGPDtG5nIScsXHJcblx0XHRcdHVzZXJzOiB1c2VycyxcclxuXHRcdFx0cmVzdWx0OiB1c2Vyc1Jlc3VsdC5sZW5ndGgsXHJcblx0XHR9KTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdHJldHVybiByZXMuanNvbih7IGVycjogZXJyLm1lc3NhZ2UgfSk7XHJcblx0fVxyXG59O1xyXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgY29ubmVjdERCID0gKCkgPT4ge1xyXG5cdGlmIChtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKSB7XHJcblx0XHRjb25zb2xlLmxvZygnQWxyZWFkeSBjb25uZWN0ZWQuJyk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdG1vbmdvb3NlLmNvbm5lY3QoXHJcblx0XHRwcm9jZXNzLmVudi5NT05HT0RCX1VSTCxcclxuXHRcdHtcclxuXHRcdFx0dXNlQ3JlYXRlSW5kZXg6IHRydWUsXHJcblx0XHRcdHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxyXG5cdFx0XHR1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcblx0XHRcdHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuXHRcdH0sXHJcblx0XHRlcnIgPT4ge1xyXG5cdFx0XHRpZiAoZXJyKSB0aHJvdyBlcnI7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gbW9uZ29kYi4nKTtcclxuXHRcdH1cclxuXHQpO1xyXG5cdGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gbW9uZ29kYi4nKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyJdLCJuYW1lcyI6WyJqd3QiLCJVc2VyIiwiYXV0aCIsInJlcSIsInJlcyIsInRva2VuIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJqc29uIiwiZXJyIiwiZGVjb2RlZCIsInZlcmlmeSIsInByb2Nlc3MiLCJlbnYiLCJBQ0NFU1NfVE9LRU5fU0VDUkVUIiwidXNlciIsImZpbmRPbmUiLCJfaWQiLCJpZCIsInJvbGUiLCJyb290IiwibW9uZ29vc2UiLCJ1c2VyU2NoZW1hIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJkZWZhdWx0IiwiQm9vbGVhbiIsImF2YXRhciIsInRpbWVzdGFtcHMiLCJtb2RlbHMiLCJtb2RlbCIsImNvbm5lY3REQiIsIm1ldGhvZCIsImdldFVzZXJzIiwicmVzdWx0IiwibGltaXQiLCJwYXJzZUludCIsInF1ZXJ5IiwicGFnZSIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsInVzZXJzUmVzdWx0IiwiZmluZCIsInVzZXJzIiwic2xpY2UiLCJtc2ciLCJsZW5ndGgiLCJtZXNzYWdlIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJNT05HT0RCX1VSTCIsInVzZUNyZWF0ZUluZGV4IiwidXNlRmluZEFuZE1vZGlmeSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSJdLCJzb3VyY2VSb290IjoiIn0=