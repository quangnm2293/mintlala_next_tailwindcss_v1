"use strict";
(() => {
var exports = {};
exports.id = "pages/api/categories";
exports.ids = ["pages/api/categories"];
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

/***/ "./models/categoriesModel.js":
/*!***********************************!*\
  !*** ./models/categoriesModel.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const categoriesSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  name: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});
const Categories = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.categories) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('categories', categoriesSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Categories);

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

/***/ "./pages/api/categories/index.js":
/*!***************************************!*\
  !*** ./pages/api/categories/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ "./utils/connectDB.js");
/* harmony import */ var _models_categoriesModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/categoriesModel */ "./models/categoriesModel.js");
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../middleware/auth */ "./middleware/auth.js");
/* eslint-disable import/no-anonymous-default-export */



(0,_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__.default)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  switch (req.method) {
    case 'GET':
      await getCategories(req, res);
      break;

    case 'POST':
      await createCategories(req, res);
      break;
  }
});

const getCategories = async (req, res) => {
  try {
    const categories = await _models_categoriesModel__WEBPACK_IMPORTED_MODULE_1__.default.find({});
    res.json({
      status: 'Lấy danh sách danh mục thành công.',
      categories
    });
  } catch (err) {
    res.status(500).json({
      err: err.message
    });
  }
};

const createCategories = async (req, res) => {
  try {
    const result = await (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_2__.default)(req, res);
    if (!result) return res.status(400).json({
      err: 'Xác thực thất bại.'
    });
    const {
      name
    } = req.body;
    if (!name) return res.status(400).json({
      err: 'Danh mục không được là khoảng trắng.'
    });
    const newCategory = new _models_categoriesModel__WEBPACK_IMPORTED_MODULE_1__.default({
      name
    });
    await newCategory.save();
    res.json({
      msg: 'Tạo danh mục mới thành công.',
      newCategory
    });
  } catch (err) {
    res.status(500).json({
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/categories/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksdUJBQVo7QUFDQSxHQVhGO0FBYUFELEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0EsQ0FuQkQ7O0FBcUJBLGlFQUFlZixTQUFmOzs7Ozs7Ozs7O0FDdkJBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvLi9taWRkbGV3YXJlL2F1dGguanMiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhLy4vbW9kZWxzL2NhdGVnb3JpZXNNb2RlbC5qcyIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvLi9tb2RlbHMvdXNlck1vZGVsLmpzIiwid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS8uL3BhZ2VzL2FwaS9jYXRlZ29yaWVzL2luZGV4LmpzIiwid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS8uL3V0aWxzL2Nvbm5lY3REQi5qcyIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvZXh0ZXJuYWwgXCJtb25nb29zZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vbW9kZWxzL3VzZXJNb2RlbCc7XHJcblxyXG5jb25zdCBhdXRoID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcblx0Y29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uO1xyXG5cclxuXHRpZiAoIXRva2VuKSByZXR1cm4gcmVzLmpzb24oeyBlcnI6ICdYw6FjIHRo4buxYyBraMO0bmcga2jhuqMgZOG7pW5nLicgfSk7XHJcblxyXG5cdGNvbnN0IGRlY29kZWQgPSBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU5fU0VDUkVUKTtcclxuXHRpZiAoIWRlY29kZWQpIHJldHVybiByZXMuanNvbih7IGVycjogJ1jDoWMgdGjhu7FjIHRo4bqldCBi4bqhaS4nIH0pO1xyXG5cclxuXHRjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgX2lkOiBkZWNvZGVkLmlkIH0pO1xyXG5cdHJldHVybiB7IGlkOiB1c2VyLl9pZCwgcm9sZTogdXNlci5yb2xlLCByb290OiB1c2VyLnJvb3QgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF1dGg7XHJcbiIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBjYXRlZ29yaWVzU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuXHR7XHJcblx0XHRuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHRyaW06IHRydWUgfSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdHRpbWVzdGFtcHM6IHRydWUsXHJcblx0fVxyXG4pO1xyXG5cclxuY29uc3QgQ2F0ZWdvcmllcyA9IG1vbmdvb3NlLm1vZGVscy5jYXRlZ29yaWVzIHx8IG1vbmdvb3NlLm1vZGVsKCdjYXRlZ29yaWVzJywgY2F0ZWdvcmllc1NjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yaWVzO1xyXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcblx0e1xyXG5cdFx0bmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcblx0XHRlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcclxuXHRcdHBhc3N3b3JkOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuXHRcdHJvbGU6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAndXNlcicgfSxcclxuXHRcdHJvb3Q6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcclxuXHRcdGF2YXRhcjogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICcvaW1hZ2VzL2F2YXRhcmRlZmF1bHQucG5nJyB9LFxyXG5cdFx0dHlwZTogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdyZWdpdGVyJyB9LFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dGltZXN0YW1wczogdHJ1ZSxcclxuXHR9XHJcbik7XHJcblxyXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWxzLnVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ3VzZXInLCB1c2VyU2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1hbm9ueW1vdXMtZGVmYXVsdC1leHBvcnQgKi9cclxuaW1wb3J0IGNvbm5lY3REQiBmcm9tICcuLi8uLi8uLi91dGlscy9jb25uZWN0REInO1xyXG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tICcuLi8uLi8uLi9tb2RlbHMvY2F0ZWdvcmllc01vZGVsJztcclxuaW1wb3J0IGF1dGggZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS9hdXRoJztcclxuXHJcbmNvbm5lY3REQigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcblx0c3dpdGNoIChyZXEubWV0aG9kKSB7XHJcblx0XHRjYXNlICdHRVQnOlxyXG5cdFx0XHRhd2FpdCBnZXRDYXRlZ29yaWVzKHJlcSwgcmVzKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlICdQT1NUJzpcclxuXHRcdFx0YXdhaXQgY3JlYXRlQ2F0ZWdvcmllcyhyZXEsIHJlcyk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IGdldENhdGVnb3JpZXMgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IENhdGVnb3JpZXMuZmluZCh7fSk7XHJcblxyXG5cdFx0cmVzLmpzb24oeyBzdGF0dXM6ICdM4bqleSBkYW5oIHPDoWNoIGRhbmggbeG7pWMgdGjDoG5oIGPDtG5nLicsIGNhdGVnb3JpZXMgfSk7XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRyZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycjogZXJyLm1lc3NhZ2UgfSk7XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlQ2F0ZWdvcmllcyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBhdXRoKHJlcSwgcmVzKTtcclxuXHRcdGlmICghcmVzdWx0KSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnI6ICdYw6FjIHRo4buxYyB0aOG6pXQgYuG6oWkuJyB9KTtcclxuXHJcblx0XHRjb25zdCB7IG5hbWUgfSA9IHJlcS5ib2R5O1xyXG5cdFx0aWYgKCFuYW1lKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnI6ICdEYW5oIG3hu6VjIGtow7RuZyDEkcaw4bujYyBsw6Aga2hv4bqjbmcgdHLhuq9uZy4nIH0pO1xyXG5cclxuXHRcdGNvbnN0IG5ld0NhdGVnb3J5ID0gbmV3IENhdGVnb3JpZXMoeyBuYW1lIH0pO1xyXG5cclxuXHRcdGF3YWl0IG5ld0NhdGVnb3J5LnNhdmUoKTtcclxuXHJcblx0XHRyZXMuanNvbih7IG1zZzogJ1ThuqFvIGRhbmggbeG7pWMgbeG7m2kgdGjDoG5oIGPDtG5nLicsIG5ld0NhdGVnb3J5IH0pO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0cmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnI6IGVyci5tZXNzYWdlIH0pO1xyXG5cdH1cclxufTtcclxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IGNvbm5lY3REQiA9ICgpID0+IHtcclxuXHRpZiAobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSkge1xyXG5cdFx0Y29uc29sZS5sb2coJ0FscmVhZHkgY29ubmVjdGVkLicpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHRtb25nb29zZS5jb25uZWN0KFxyXG5cdFx0cHJvY2Vzcy5lbnYuTU9OR09EQl9VUkwsXHJcblx0XHR7XHJcblx0XHRcdHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxyXG5cdFx0XHR1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcclxuXHRcdFx0dXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG5cdFx0XHR1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcblx0XHR9LFxyXG5cdFx0ZXJyID0+IHtcclxuXHRcdFx0aWYgKGVycikgdGhyb3cgZXJyO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIG1vbmdvZGIuJyk7XHJcblx0XHR9XHJcblx0KTtcclxuXHRjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIG1vbmdvZGIuJyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwibmFtZXMiOlsiand0IiwiVXNlciIsImF1dGgiLCJyZXEiLCJyZXMiLCJ0b2tlbiIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwianNvbiIsImVyciIsImRlY29kZWQiLCJ2ZXJpZnkiLCJwcm9jZXNzIiwiZW52IiwiQUNDRVNTX1RPS0VOX1NFQ1JFVCIsInVzZXIiLCJmaW5kT25lIiwiX2lkIiwiaWQiLCJyb2xlIiwicm9vdCIsIm1vbmdvb3NlIiwiY2F0ZWdvcmllc1NjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ0cmltIiwidGltZXN0YW1wcyIsIkNhdGVnb3JpZXMiLCJtb2RlbHMiLCJjYXRlZ29yaWVzIiwibW9kZWwiLCJ1c2VyU2NoZW1hIiwiZW1haWwiLCJ1bmlxdWUiLCJwYXNzd29yZCIsImRlZmF1bHQiLCJCb29sZWFuIiwiYXZhdGFyIiwiY29ubmVjdERCIiwibWV0aG9kIiwiZ2V0Q2F0ZWdvcmllcyIsImNyZWF0ZUNhdGVnb3JpZXMiLCJmaW5kIiwic3RhdHVzIiwibWVzc2FnZSIsInJlc3VsdCIsImJvZHkiLCJuZXdDYXRlZ29yeSIsInNhdmUiLCJtc2ciLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsIk1PTkdPREJfVVJMIiwidXNlQ3JlYXRlSW5kZXgiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5Il0sInNvdXJjZVJvb3QiOiIifQ==