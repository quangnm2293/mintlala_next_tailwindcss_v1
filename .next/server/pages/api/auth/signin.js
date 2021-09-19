"use strict";
(() => {
var exports = {};
exports.id = "pages/api/auth/signin";
exports.ids = ["pages/api/auth/signin"];
exports.modules = {

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

/***/ "./pages/api/auth/signin.js":
/*!**********************************!*\
  !*** ./pages/api/auth/signin.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ "./utils/connectDB.js");
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/userModel */ "./models/userModel.js");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_generateToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/generateToken */ "./utils/generateToken.js");
/* eslint-disable import/no-anonymous-default-export */




(0,_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__.default)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  switch (req.method) {
    case 'POST':
      await signin(req, res);
      break;
  }
});

const signin = async (req, res) => {
  try {
    const {
      email,
      password
    } = req.body;
    const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__.default.findOne({
      email
    });
    if (!user) return res.json({
      err: 'Tài khoản không tồn tại.'
    });
    const isMatch = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compare(password, user.password);
    if (!isMatch) return res.json({
      err: 'Mật khẩu không chính xác.'
    });
    const access_token = (0,_utils_generateToken__WEBPACK_IMPORTED_MODULE_3__.createAccessToken)({
      id: user._id
    });
    const refresh_token = (0,_utils_generateToken__WEBPACK_IMPORTED_MODULE_3__.createRefreshToken)({
      id: user._id
    });
    res.json({
      msg: 'Đăng nhập thành công.',
      access_token,
      refresh_token,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        root: user.root
      }
    });
  } catch (err) {
    return res.status(500).json({
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

/***/ "./utils/generateToken.js":
/*!********************************!*\
  !*** ./utils/generateToken.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createActiveToken": () => (/* binding */ createActiveToken),
/* harmony export */   "createAccessToken": () => (/* binding */ createAccessToken),
/* harmony export */   "createRefreshToken": () => (/* binding */ createRefreshToken)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

const createActiveToken = payload => {
  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(payload, process.env.ACTIVE_TOKEN_SECRET, {
    expiresIn: '15m'
  });
};
const createAccessToken = payload => {
  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '1d'
  });
};
const createRefreshToken = payload => {
  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: '7d'
  });
};

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/signin.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0MsT0FBTyxJQUFJO0FBQzNDLFNBQU9GLHdEQUFBLENBQVNFLE9BQVQsRUFBa0JULE9BQU8sQ0FBQ0MsR0FBUixDQUFZVSxtQkFBOUIsRUFBbUQ7QUFBRUMsSUFBQUEsU0FBUyxFQUFFO0FBQWIsR0FBbkQsQ0FBUDtBQUNBLENBRk07QUFHQSxNQUFNcEMsaUJBQWlCLEdBQUdpQyxPQUFPLElBQUk7QUFDM0MsU0FBT0Ysd0RBQUEsQ0FBU0UsT0FBVCxFQUFrQlQsT0FBTyxDQUFDQyxHQUFSLENBQVlZLG1CQUE5QixFQUFtRDtBQUFFRCxJQUFBQSxTQUFTLEVBQUU7QUFBYixHQUFuRCxDQUFQO0FBQ0EsQ0FGTTtBQUlBLE1BQU1uQyxrQkFBa0IsR0FBR2dDLE9BQU8sSUFBSTtBQUM1QyxTQUFPRix3REFBQSxDQUFTRSxPQUFULEVBQWtCVCxPQUFPLENBQUNDLEdBQVIsQ0FBWWEsb0JBQTlCLEVBQW9EO0FBQUVGLElBQUFBLFNBQVMsRUFBRTtBQUFiLEdBQXBELENBQVA7QUFDQSxDQUZNOzs7Ozs7Ozs7O0FDVFA7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhLy4vbW9kZWxzL3VzZXJNb2RlbC5qcyIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvLi9wYWdlcy9hcGkvYXV0aC9zaWduaW4uanMiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhLy4vdXRpbHMvY29ubmVjdERCLmpzIiwid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS8uL3V0aWxzL2dlbmVyYXRlVG9rZW4uanMiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhL2V4dGVybmFsIFwiYmNyeXB0XCIiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhL2V4dGVybmFsIFwibW9uZ29vc2VcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcblx0e1xyXG5cdFx0bmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcblx0XHRlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcclxuXHRcdHBhc3N3b3JkOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuXHRcdHJvbGU6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAndXNlcicgfSxcclxuXHRcdHJvb3Q6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcclxuXHRcdGF2YXRhcjogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICcvaW1hZ2VzL2F2YXRhcmRlZmF1bHQucG5nJyB9LFxyXG5cdFx0dHlwZTogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdyZWdpdGVyJyB9LFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dGltZXN0YW1wczogdHJ1ZSxcclxuXHR9XHJcbik7XHJcblxyXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWxzLnVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ3VzZXInLCB1c2VyU2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1hbm9ueW1vdXMtZGVmYXVsdC1leHBvcnQgKi9cclxuaW1wb3J0IGNvbm5lY3REQiBmcm9tICcuLi8uLi8uLi91dGlscy9jb25uZWN0REInO1xyXG5pbXBvcnQgVXNlcnMgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3VzZXJNb2RlbCc7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0JztcclxuaW1wb3J0IHsgY3JlYXRlQWNjZXNzVG9rZW4sIGNyZWF0ZVJlZnJlc2hUb2tlbiB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2dlbmVyYXRlVG9rZW4nO1xyXG5cclxuY29ubmVjdERCKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuXHRzd2l0Y2ggKHJlcS5tZXRob2QpIHtcclxuXHRcdGNhc2UgJ1BPU1QnOlxyXG5cdFx0XHRhd2FpdCBzaWduaW4ocmVxLCByZXMpO1xyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCBzaWduaW4gPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xyXG5cclxuXHRcdGNvbnN0IHVzZXIgPSBhd2FpdCBVc2Vycy5maW5kT25lKHsgZW1haWwgfSk7XHJcblx0XHRpZiAoIXVzZXIpIHJldHVybiByZXMuanNvbih7IGVycjogJ1TDoGkga2hv4bqjbiBraMO0bmcgdOG7k24gdOG6oWkuJyB9KTtcclxuXHJcblx0XHRjb25zdCBpc01hdGNoID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xyXG5cdFx0aWYgKCFpc01hdGNoKSByZXR1cm4gcmVzLmpzb24oeyBlcnI6ICdN4bqtdCBraOG6qXUga2jDtG5nIGNow61uaCB4w6FjLicgfSk7XHJcblxyXG5cdFx0Y29uc3QgYWNjZXNzX3Rva2VuID0gY3JlYXRlQWNjZXNzVG9rZW4oeyBpZDogdXNlci5faWQgfSk7XHJcblx0XHRjb25zdCByZWZyZXNoX3Rva2VuID0gY3JlYXRlUmVmcmVzaFRva2VuKHsgaWQ6IHVzZXIuX2lkIH0pO1xyXG5cclxuXHRcdHJlcy5qc29uKHtcclxuXHRcdFx0bXNnOiAnxJDEg25nIG5o4bqtcCB0aMOgbmggY8O0bmcuJyxcclxuXHRcdFx0YWNjZXNzX3Rva2VuLFxyXG5cdFx0XHRyZWZyZXNoX3Rva2VuLFxyXG5cdFx0XHR1c2VyOiB7XHJcblx0XHRcdFx0bmFtZTogdXNlci5uYW1lLFxyXG5cdFx0XHRcdGVtYWlsOiB1c2VyLmVtYWlsLFxyXG5cdFx0XHRcdHJvbGU6IHVzZXIucm9sZSxcclxuXHRcdFx0XHRhdmF0YXI6IHVzZXIuYXZhdGFyLFxyXG5cdFx0XHRcdHJvb3Q6IHVzZXIucm9vdCxcclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyOiBlcnIubWVzc2FnZSB9KTtcclxuXHR9XHJcbn07XHJcbiIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBjb25uZWN0REIgPSAoKSA9PiB7XHJcblx0aWYgKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpIHtcclxuXHRcdGNvbnNvbGUubG9nKCdBbHJlYWR5IGNvbm5lY3RlZC4nKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0bW9uZ29vc2UuY29ubmVjdChcclxuXHRcdHByb2Nlc3MuZW52Lk1PTkdPREJfVVJMLFxyXG5cdFx0e1xyXG5cdFx0XHR1c2VDcmVhdGVJbmRleDogdHJ1ZSxcclxuXHRcdFx0dXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXHJcblx0XHRcdHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuXHRcdFx0dXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG5cdFx0fSxcclxuXHRcdGVyciA9PiB7XHJcblx0XHRcdGlmIChlcnIpIHRocm93IGVycjtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBtb25nb2RiLicpO1xyXG5cdFx0fVxyXG5cdCk7XHJcblx0Y29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBtb25nb2RiLicpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCO1xyXG4iLCJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlQWN0aXZlVG9rZW4gPSBwYXlsb2FkID0+IHtcclxuXHRyZXR1cm4gand0LnNpZ24ocGF5bG9hZCwgcHJvY2Vzcy5lbnYuQUNUSVZFX1RPS0VOX1NFQ1JFVCwgeyBleHBpcmVzSW46ICcxNW0nIH0pO1xyXG59O1xyXG5leHBvcnQgY29uc3QgY3JlYXRlQWNjZXNzVG9rZW4gPSBwYXlsb2FkID0+IHtcclxuXHRyZXR1cm4gand0LnNpZ24ocGF5bG9hZCwgcHJvY2Vzcy5lbnYuQUNDRVNTX1RPS0VOX1NFQ1JFVCwgeyBleHBpcmVzSW46ICcxZCcgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlUmVmcmVzaFRva2VuID0gcGF5bG9hZCA9PiB7XHJcblx0cmV0dXJuIGp3dC5zaWduKHBheWxvYWQsIHByb2Nlc3MuZW52LlJFRlJFU0hfVE9LRU5fU0VDUkVULCB7IGV4cGlyZXNJbjogJzdkJyB9KTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJ1c2VyU2NoZW1hIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJyb2xlIiwiZGVmYXVsdCIsInJvb3QiLCJCb29sZWFuIiwiYXZhdGFyIiwidGltZXN0YW1wcyIsIlVzZXIiLCJtb2RlbHMiLCJ1c2VyIiwibW9kZWwiLCJjb25uZWN0REIiLCJVc2VycyIsImJjcnlwdCIsImNyZWF0ZUFjY2Vzc1Rva2VuIiwiY3JlYXRlUmVmcmVzaFRva2VuIiwicmVxIiwicmVzIiwibWV0aG9kIiwic2lnbmluIiwiYm9keSIsImZpbmRPbmUiLCJqc29uIiwiZXJyIiwiaXNNYXRjaCIsImNvbXBhcmUiLCJhY2Nlc3NfdG9rZW4iLCJpZCIsIl9pZCIsInJlZnJlc2hfdG9rZW4iLCJtc2ciLCJzdGF0dXMiLCJtZXNzYWdlIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkwiLCJ1c2VDcmVhdGVJbmRleCIsInVzZUZpbmRBbmRNb2RpZnkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJqd3QiLCJjcmVhdGVBY3RpdmVUb2tlbiIsInBheWxvYWQiLCJzaWduIiwiQUNUSVZFX1RPS0VOX1NFQ1JFVCIsImV4cGlyZXNJbiIsIkFDQ0VTU19UT0tFTl9TRUNSRVQiLCJSRUZSRVNIX1RPS0VOX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=