"use strict";
(() => {
var exports = {};
exports.id = "pages/api/user/[id]";
exports.ids = ["pages/api/user/[id]"];
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

/***/ "./pages/api/user/[id].js":
/*!********************************!*\
  !*** ./pages/api/user/[id].js ***!
  \********************************/
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
      await getUser(req, res);
      break;

    case 'PATCH':
      await updateUser(req, res);
      break;

    case 'DELETE':
      await deleteUser(req, res);
      break;
  }
});

const getUser = async (req, res) => {
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

    const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__.default.findById(req.query.id);
    res.json({
      msg: 'Lấy thông tin người dùng thành công!',
      user
    });
  } catch (err) {
    return res.json({
      err: err.message
    });
  }
};

const updateUser = async (req, res) => {
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

    const {
      role
    } = req.body;
    const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__.default.findByIdAndUpdate(req.query.id, {
      role: role
    });
    res.json({
      msg: 'Cập nhật thành công!',
      user
    });
  } catch (err) {
    return res.json({
      err: err.message
    });
  }
};

const deleteUser = async (req, res) => {
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

    await _models_userModel__WEBPACK_IMPORTED_MODULE_1__.default.findByIdAndDelete(req.query.id);
    res.json({
      msg: 'Đã xóa người dùng!'
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/user/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQWpDLENBQU47QUFFQWQsSUFBQUEsR0FBRyxDQUFDSSxJQUFKLENBQVM7QUFDUnFDLE1BQUFBLEdBQUcsRUFBRTtBQURHLEtBQVQ7QUFHQSxHQWRELENBY0UsT0FBT3BDLEdBQVAsRUFBWTtBQUNiLFdBQU9MLEdBQUcsQ0FBQ0ksSUFBSixDQUFTO0FBQUVDLE1BQUFBLEdBQUcsRUFBRUEsR0FBRyxDQUFDcUM7QUFBWCxLQUFULENBQVA7QUFDQTtBQUNELENBbEJEOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBOztBQUVBLE1BQU1ULFNBQVMsR0FBRyxNQUFNO0FBQ3ZCLE1BQUloQiwyRUFBSixFQUF3QztBQUN2QytCLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0FBQ0E7QUFDQTs7QUFDRGhDLEVBQUFBLHVEQUFBLENBQ0NULE9BQU8sQ0FBQ0MsR0FBUixDQUFZMEMsV0FEYixFQUVDO0FBQ0NDLElBQUFBLGNBQWMsRUFBRSxJQURqQjtBQUVDQyxJQUFBQSxnQkFBZ0IsRUFBRSxLQUZuQjtBQUdDQyxJQUFBQSxlQUFlLEVBQUUsSUFIbEI7QUFJQ0MsSUFBQUEsa0JBQWtCLEVBQUU7QUFKckIsR0FGRCxFQVFDbEQsR0FBRyxJQUFJO0FBQ04sUUFBSUEsR0FBSixFQUFTLE1BQU1BLEdBQU47QUFDVDJDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0EsR0FYRjtBQWFBRCxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNBLENBbkJEOztBQXFCQSxpRUFBZWhCLFNBQWY7Ozs7Ozs7Ozs7QUN2QkE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS8uL21pZGRsZXdhcmUvYXV0aC5qcyIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvLi9tb2RlbHMvdXNlck1vZGVsLmpzIiwid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS8uL3BhZ2VzL2FwaS91c2VyL1tpZF0uanMiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhLy4vdXRpbHMvY29ubmVjdERCLmpzIiwid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS9leHRlcm5hbCBcIm1vbmdvb3NlXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi9tb2RlbHMvdXNlck1vZGVsJztcclxuXHJcbmNvbnN0IGF1dGggPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuXHRjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb247XHJcblxyXG5cdGlmICghdG9rZW4pIHJldHVybiByZXMuanNvbih7IGVycjogJ1jDoWMgdGjhu7FjIGtow7RuZyBraOG6oyBk4bulbmcuJyB9KTtcclxuXHJcblx0Y29uc3QgZGVjb2RlZCA9IGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkFDQ0VTU19UT0tFTl9TRUNSRVQpO1xyXG5cdGlmICghZGVjb2RlZCkgcmV0dXJuIHJlcy5qc29uKHsgZXJyOiAnWMOhYyB0aOG7sWMgdGjhuqV0IGLhuqFpLicgfSk7XHJcblxyXG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBfaWQ6IGRlY29kZWQuaWQgfSk7XHJcblx0cmV0dXJuIHsgaWQ6IHVzZXIuX2lkLCByb2xlOiB1c2VyLnJvbGUsIHJvb3Q6IHVzZXIucm9vdCB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0aDtcclxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG5cdHtcclxuXHRcdG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG5cdFx0ZW1haWw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXHJcblx0XHRwYXNzd29yZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcblx0XHRyb2xlOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJ3VzZXInIH0sXHJcblx0XHRyb290OiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH0sXHJcblx0XHRhdmF0YXI6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnL2ltYWdlcy9hdmF0YXJkZWZhdWx0LnBuZycgfSxcclxuXHRcdHR5cGU6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAncmVnaXRlcicgfSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdHRpbWVzdGFtcHM6IHRydWUsXHJcblx0fVxyXG4pO1xyXG5cclxuY29uc3QgVXNlciA9IG1vbmdvb3NlLm1vZGVscy51c2VyIHx8IG1vbmdvb3NlLm1vZGVsKCd1c2VyJywgdXNlclNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tYW5vbnltb3VzLWRlZmF1bHQtZXhwb3J0ICovXHJcbmltcG9ydCBjb25uZWN0REIgZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29ubmVjdERCJztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3VzZXJNb2RlbCc7XHJcbmltcG9ydCBhdXRoIGZyb20gJy4uLy4uLy4uL21pZGRsZXdhcmUvYXV0aCc7XHJcblxyXG5jb25uZWN0REIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cdHN3aXRjaCAocmVxLm1ldGhvZCkge1xyXG5cdFx0Y2FzZSAnR0VUJzpcclxuXHRcdFx0YXdhaXQgZ2V0VXNlcihyZXEsIHJlcyk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAnUEFUQ0gnOlxyXG5cdFx0XHRhd2FpdCB1cGRhdGVVc2VyKHJlcSwgcmVzKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlICdERUxFVEUnOlxyXG5cdFx0XHRhd2FpdCBkZWxldGVVc2VyKHJlcSwgcmVzKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgZ2V0VXNlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBhdXRoKHJlcSwgcmVzKTtcclxuXHJcblx0XHRpZiAoIXJlc3VsdCkgcmV0dXJuIHJlcy5qc29uKHsgZXJyOiAnQuG6oW4ga2jDtG5nIGPDsyBxdXnhu4FuIHRydXkgY+G6rXAuJyB9KTtcclxuXHJcblx0XHRpZiAocmVzdWx0LnJvbGUgIT09ICdhZG1pbicpIHtcclxuXHRcdFx0cmV0dXJuIHJlcy5qc29uKHsgZXJyOiAnQuG6oW4ga2jDtG5nIGPDsyBxdXnhu4FuIHRydXkgY+G6rXAuJyB9KTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kQnlJZChyZXEucXVlcnkuaWQpO1xyXG5cclxuXHRcdHJlcy5qc29uKHtcclxuXHRcdFx0bXNnOiAnTOG6pXkgdGjDtG5nIHRpbiBuZ8aw4budaSBkw7luZyB0aMOgbmggY8O0bmchJyxcclxuXHRcdFx0dXNlcixcclxuXHRcdH0pO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0cmV0dXJuIHJlcy5qc29uKHsgZXJyOiBlcnIubWVzc2FnZSB9KTtcclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVVc2VyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF1dGgocmVxLCByZXMpO1xyXG5cclxuXHRcdGlmICghcmVzdWx0KSByZXR1cm4gcmVzLmpzb24oeyBlcnI6ICdC4bqhbiBraMO0bmcgY8OzIHF1eeG7gW4gdHJ1eSBj4bqtcC4nIH0pO1xyXG5cclxuXHRcdGlmIChyZXN1bHQucm9sZSAhPT0gJ2FkbWluJykge1xyXG5cdFx0XHRyZXR1cm4gcmVzLmpzb24oeyBlcnI6ICdC4bqhbiBraMO0bmcgY8OzIHF1eeG7gW4gdHJ1eSBj4bqtcC4nIH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHsgcm9sZSB9ID0gcmVxLmJvZHk7XHJcblx0XHRjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kQnlJZEFuZFVwZGF0ZShyZXEucXVlcnkuaWQsIHsgcm9sZTogcm9sZSB9KTtcclxuXHJcblx0XHRyZXMuanNvbih7XHJcblx0XHRcdG1zZzogJ0Phuq1wIG5o4bqtdCB0aMOgbmggY8O0bmchJyxcclxuXHRcdFx0dXNlcixcclxuXHRcdH0pO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0cmV0dXJuIHJlcy5qc29uKHsgZXJyOiBlcnIubWVzc2FnZSB9KTtcclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCBkZWxldGVVc2VyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF1dGgocmVxLCByZXMpO1xyXG5cclxuXHRcdGlmICghcmVzdWx0KSByZXR1cm4gcmVzLmpzb24oeyBlcnI6ICdC4bqhbiBraMO0bmcgY8OzIHF1eeG7gW4gdHJ1eSBj4bqtcC4nIH0pO1xyXG5cclxuXHRcdGlmIChyZXN1bHQucm9sZSAhPT0gJ2FkbWluJykge1xyXG5cdFx0XHRyZXR1cm4gcmVzLmpzb24oeyBlcnI6ICdC4bqhbiBraMO0bmcgY8OzIHF1eeG7gW4gdHJ1eSBj4bqtcC4nIH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGF3YWl0IFVzZXIuZmluZEJ5SWRBbmREZWxldGUocmVxLnF1ZXJ5LmlkKTtcclxuXHJcblx0XHRyZXMuanNvbih7XHJcblx0XHRcdG1zZzogJ8SQw6MgeMOzYSBuZ8aw4budaSBkw7luZyEnLFxyXG5cdFx0fSk7XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRyZXR1cm4gcmVzLmpzb24oeyBlcnI6IGVyci5tZXNzYWdlIH0pO1xyXG5cdH1cclxufTtcclxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IGNvbm5lY3REQiA9ICgpID0+IHtcclxuXHRpZiAobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSkge1xyXG5cdFx0Y29uc29sZS5sb2coJ0FscmVhZHkgY29ubmVjdGVkLicpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHRtb25nb29zZS5jb25uZWN0KFxyXG5cdFx0cHJvY2Vzcy5lbnYuTU9OR09EQl9VUkwsXHJcblx0XHR7XHJcblx0XHRcdHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxyXG5cdFx0XHR1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcclxuXHRcdFx0dXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG5cdFx0XHR1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcblx0XHR9LFxyXG5cdFx0ZXJyID0+IHtcclxuXHRcdFx0aWYgKGVycikgdGhyb3cgZXJyO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIG1vbmdvZGIuJyk7XHJcblx0XHR9XHJcblx0KTtcclxuXHRjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIG1vbmdvZGIuJyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwibmFtZXMiOlsiand0IiwiVXNlciIsImF1dGgiLCJyZXEiLCJyZXMiLCJ0b2tlbiIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwianNvbiIsImVyciIsImRlY29kZWQiLCJ2ZXJpZnkiLCJwcm9jZXNzIiwiZW52IiwiQUNDRVNTX1RPS0VOX1NFQ1JFVCIsInVzZXIiLCJmaW5kT25lIiwiX2lkIiwiaWQiLCJyb2xlIiwicm9vdCIsIm1vbmdvb3NlIiwidXNlclNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwiZGVmYXVsdCIsIkJvb2xlYW4iLCJhdmF0YXIiLCJ0aW1lc3RhbXBzIiwibW9kZWxzIiwibW9kZWwiLCJjb25uZWN0REIiLCJtZXRob2QiLCJnZXRVc2VyIiwidXBkYXRlVXNlciIsImRlbGV0ZVVzZXIiLCJyZXN1bHQiLCJmaW5kQnlJZCIsInF1ZXJ5IiwibXNnIiwibWVzc2FnZSIsImJvZHkiLCJmaW5kQnlJZEFuZFVwZGF0ZSIsImZpbmRCeUlkQW5kRGVsZXRlIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJNT05HT0RCX1VSTCIsInVzZUNyZWF0ZUluZGV4IiwidXNlRmluZEFuZE1vZGlmeSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSJdLCJzb3VyY2VSb290IjoiIn0=