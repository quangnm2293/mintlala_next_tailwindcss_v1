"use strict";
(() => {
var exports = {};
exports.id = "pages/api/auth/accessToken";
exports.ids = ["pages/api/auth/accessToken"];
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

/***/ "./pages/api/auth/accessToken.js":
/*!***************************************!*\
  !*** ./pages/api/auth/accessToken.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ "./utils/connectDB.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_generateToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/generateToken */ "./utils/generateToken.js");
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/userModel */ "./models/userModel.js");
/* eslint-disable import/no-anonymous-default-export */




(0,_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__.default)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  try {
    const refresh_token = req.cookies.refreshtoken;
    if (!refresh_token) return res.status(400).json({
      err: 'Vui lòng đăng nhập'
    });
    const result = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(refresh_token, process.env.REFRESH_TOKEN_SECRET);
    if (!result) return res.status(401).json({
      err: 'Token của bạn không đúng hoặc đã hết hạn'
    });
    const {
      id
    } = result;
    _models_userModel__WEBPACK_IMPORTED_MODULE_3__.default.findById(id).lean().then(user => {
      if (!user) return res.status(401).json({
        err: 'Tài khoản không tồn tại'
      });
      const access_token = (0,_utils_generateToken__WEBPACK_IMPORTED_MODULE_2__.createAccessToken)({
        id: user._id
      });
      res.json({
        access_token,
        user: {
          name: user.name,
          email: user.email,
          role: user.role,
          avatar: user.avatar,
          root: user.root,
          type: user.type
        }
      });
    }).catch(err => {
      console.log(err.message);
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
});

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/accessToken.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWV4QixTQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFFTyxNQUFNa0MsaUJBQWlCLEdBQUdDLE9BQU8sSUFBSTtBQUMzQyxTQUFPbEMsd0RBQUEsQ0FBU2tDLE9BQVQsRUFBa0J0QixPQUFPLENBQUNDLEdBQVIsQ0FBWXVCLG1CQUE5QixFQUFtRDtBQUFFQyxJQUFBQSxTQUFTLEVBQUU7QUFBYixHQUFuRCxDQUFQO0FBQ0EsQ0FGTTtBQUdBLE1BQU1wQyxpQkFBaUIsR0FBR2lDLE9BQU8sSUFBSTtBQUMzQyxTQUFPbEMsd0RBQUEsQ0FBU2tDLE9BQVQsRUFBa0J0QixPQUFPLENBQUNDLEdBQVIsQ0FBWXlCLG1CQUE5QixFQUFtRDtBQUFFRCxJQUFBQSxTQUFTLEVBQUU7QUFBYixHQUFuRCxDQUFQO0FBQ0EsQ0FGTTtBQUlBLE1BQU1FLGtCQUFrQixHQUFHTCxPQUFPLElBQUk7QUFDNUMsU0FBT2xDLHdEQUFBLENBQVNrQyxPQUFULEVBQWtCdEIsT0FBTyxDQUFDQyxHQUFSLENBQVlDLG9CQUE5QixFQUFvRDtBQUFFdUIsSUFBQUEsU0FBUyxFQUFFO0FBQWIsR0FBcEQsQ0FBUDtBQUNBLENBRk07Ozs7Ozs7Ozs7QUNUUDs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhLy4vbW9kZWxzL3VzZXJNb2RlbC5qcyIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvLi9wYWdlcy9hcGkvYXV0aC9hY2Nlc3NUb2tlbi5qcyIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvLi91dGlscy9jb25uZWN0REIuanMiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhLy4vdXRpbHMvZ2VuZXJhdGVUb2tlbi5qcyIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvZXh0ZXJuYWwgXCJtb25nb29zZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuXHR7XHJcblx0XHRuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuXHRcdGVtYWlsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxyXG5cdFx0cGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG5cdFx0cm9sZTogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICd1c2VyJyB9LFxyXG5cdFx0cm9vdDogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxyXG5cdFx0YXZhdGFyOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJy9pbWFnZXMvYXZhdGFyZGVmYXVsdC5wbmcnIH0sXHJcblx0XHR0eXBlOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJ3JlZ2l0ZXInIH0sXHJcblx0fSxcclxuXHR7XHJcblx0XHR0aW1lc3RhbXBzOiB0cnVlLFxyXG5cdH1cclxuKTtcclxuXHJcbmNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbHMudXNlciB8fCBtb25nb29zZS5tb2RlbCgndXNlcicsIHVzZXJTY2hlbWEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWFub255bW91cy1kZWZhdWx0LWV4cG9ydCAqL1xyXG5pbXBvcnQgY29ubmVjdERCIGZyb20gJy4uLy4uLy4uL3V0aWxzL2Nvbm5lY3REQic7XHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IHsgY3JlYXRlQWNjZXNzVG9rZW4gfSBmcm9tICcuLi8uLi8uLi91dGlscy9nZW5lcmF0ZVRva2VuJztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3VzZXJNb2RlbCc7XHJcblxyXG5jb25uZWN0REIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZWZyZXNoX3Rva2VuID0gcmVxLmNvb2tpZXMucmVmcmVzaHRva2VuO1xyXG5cdFx0aWYgKCFyZWZyZXNoX3Rva2VuKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnI6ICdWdWkgbMOybmcgxJHEg25nIG5o4bqtcCcgfSk7XHJcblxyXG5cdFx0Y29uc3QgcmVzdWx0ID0gand0LnZlcmlmeShyZWZyZXNoX3Rva2VuLCBwcm9jZXNzLmVudi5SRUZSRVNIX1RPS0VOX1NFQ1JFVCk7XHJcblx0XHRpZiAoIXJlc3VsdCkgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyOiAnVG9rZW4gY+G7p2EgYuG6oW4ga2jDtG5nIMSRw7puZyBob+G6t2MgxJHDoyBo4bq/dCBo4bqhbicgfSk7XHJcblxyXG5cdFx0Y29uc3QgeyBpZCB9ID0gcmVzdWx0O1xyXG5cclxuXHRcdFVzZXIuZmluZEJ5SWQoaWQpXHJcblx0XHRcdC5sZWFuKClcclxuXHRcdFx0LnRoZW4odXNlciA9PiB7XHJcblx0XHRcdFx0aWYgKCF1c2VyKSByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBlcnI6ICdUw6BpIGtob+G6o24ga2jDtG5nIHThu5NuIHThuqFpJyB9KTtcclxuXHRcdFx0XHRjb25zdCBhY2Nlc3NfdG9rZW4gPSBjcmVhdGVBY2Nlc3NUb2tlbih7IGlkOiB1c2VyLl9pZCB9KTtcclxuXHRcdFx0XHRyZXMuanNvbih7XHJcblx0XHRcdFx0XHRhY2Nlc3NfdG9rZW4sXHJcblx0XHRcdFx0XHR1c2VyOiB7XHJcblx0XHRcdFx0XHRcdG5hbWU6IHVzZXIubmFtZSxcclxuXHRcdFx0XHRcdFx0ZW1haWw6IHVzZXIuZW1haWwsXHJcblx0XHRcdFx0XHRcdHJvbGU6IHVzZXIucm9sZSxcclxuXHRcdFx0XHRcdFx0YXZhdGFyOiB1c2VyLmF2YXRhcixcclxuXHRcdFx0XHRcdFx0cm9vdDogdXNlci5yb290LFxyXG5cdFx0XHRcdFx0XHR0eXBlOiB1c2VyLnR5cGUsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycjogZXJyLm1lc3NhZ2UgfSk7XHJcblx0fVxyXG59O1xyXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgY29ubmVjdERCID0gKCkgPT4ge1xyXG5cdGlmIChtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKSB7XHJcblx0XHRjb25zb2xlLmxvZygnQWxyZWFkeSBjb25uZWN0ZWQuJyk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdG1vbmdvb3NlLmNvbm5lY3QoXHJcblx0XHRwcm9jZXNzLmVudi5NT05HT0RCX1VSTCxcclxuXHRcdHtcclxuXHRcdFx0dXNlQ3JlYXRlSW5kZXg6IHRydWUsXHJcblx0XHRcdHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxyXG5cdFx0XHR1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcblx0XHRcdHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuXHRcdH0sXHJcblx0XHRlcnIgPT4ge1xyXG5cdFx0XHRpZiAoZXJyKSB0aHJvdyBlcnI7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gbW9uZ29kYi4nKTtcclxuXHRcdH1cclxuXHQpO1xyXG5cdGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gbW9uZ29kYi4nKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQjtcclxuIiwiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFjdGl2ZVRva2VuID0gcGF5bG9hZCA9PiB7XHJcblx0cmV0dXJuIGp3dC5zaWduKHBheWxvYWQsIHByb2Nlc3MuZW52LkFDVElWRV9UT0tFTl9TRUNSRVQsIHsgZXhwaXJlc0luOiAnMTVtJyB9KTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFjY2Vzc1Rva2VuID0gcGF5bG9hZCA9PiB7XHJcblx0cmV0dXJuIGp3dC5zaWduKHBheWxvYWQsIHByb2Nlc3MuZW52LkFDQ0VTU19UT0tFTl9TRUNSRVQsIHsgZXhwaXJlc0luOiAnMWQnIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlZnJlc2hUb2tlbiA9IHBheWxvYWQgPT4ge1xyXG5cdHJldHVybiBqd3Quc2lnbihwYXlsb2FkLCBwcm9jZXNzLmVudi5SRUZSRVNIX1RPS0VOX1NFQ1JFVCwgeyBleHBpcmVzSW46ICc3ZCcgfSk7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJ1c2VyU2NoZW1hIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJyb2xlIiwiZGVmYXVsdCIsInJvb3QiLCJCb29sZWFuIiwiYXZhdGFyIiwidGltZXN0YW1wcyIsIlVzZXIiLCJtb2RlbHMiLCJ1c2VyIiwibW9kZWwiLCJjb25uZWN0REIiLCJqd3QiLCJjcmVhdGVBY2Nlc3NUb2tlbiIsInJlcSIsInJlcyIsInJlZnJlc2hfdG9rZW4iLCJjb29raWVzIiwicmVmcmVzaHRva2VuIiwic3RhdHVzIiwianNvbiIsImVyciIsInJlc3VsdCIsInZlcmlmeSIsInByb2Nlc3MiLCJlbnYiLCJSRUZSRVNIX1RPS0VOX1NFQ1JFVCIsImlkIiwiZmluZEJ5SWQiLCJsZWFuIiwidGhlbiIsImFjY2Vzc190b2tlbiIsIl9pZCIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25uZWN0IiwiTU9OR09EQl9VUkwiLCJ1c2VDcmVhdGVJbmRleCIsInVzZUZpbmRBbmRNb2RpZnkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjcmVhdGVBY3RpdmVUb2tlbiIsInBheWxvYWQiLCJzaWduIiwiQUNUSVZFX1RPS0VOX1NFQ1JFVCIsImV4cGlyZXNJbiIsIkFDQ0VTU19UT0tFTl9TRUNSRVQiLCJjcmVhdGVSZWZyZXNoVG9rZW4iXSwic291cmNlUm9vdCI6IiJ9