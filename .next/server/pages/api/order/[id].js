"use strict";
(() => {
var exports = {};
exports.id = "pages/api/order/[id]";
exports.ids = ["pages/api/order/[id]"];
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

/***/ "./models/orderModel.js":
/*!******************************!*\
  !*** ./models/orderModel.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const orderSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  user: {
    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId),
    ref: 'user'
  },
  address: String,
  phone: String,
  fullName: String,
  cart: Array,
  total: Number,
  paymentMethod: {
    type: String,
    default: 'cod'
  },
  delivered: {
    type: Boolean,
    default: false
  },
  isPaid: {
    type: Boolean,
    default: false
  },
  paidAt: {
    type: Date
  },
  guestOrder: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});
const Order = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.order) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('order', orderSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Order);

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

/***/ "./pages/api/order/[id].js":
/*!*********************************!*\
  !*** ./pages/api/order/[id].js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ "./utils/connectDB.js");
/* harmony import */ var _models_orderModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/orderModel */ "./models/orderModel.js");
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../middleware/auth */ "./middleware/auth.js");
/* eslint-disable import/no-anonymous-default-export */



(0,_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__.default)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  switch (req.method) {
    case 'GET':
      await getOrder(req, res);
      break;

    case 'PATCH':
      await updateDelivered(req, res);
      break;
  }
});

const getOrder = async (req, res) => {
  try {
    const result = await (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_2__.default)(req, res);
    if (!result) return res.status(401).json({
      err: 'Vui lòng đăng nhập.'
    });
    const order = await _models_orderModel__WEBPACK_IMPORTED_MODULE_1__.default.findOne({
      _id: req.query.id
    }).populate('user', '-password');
    res.json({
      order
    });
  } catch (err) {
    res.status(500).json({
      err: err.message
    });
  }
};

const updateDelivered = async (req, res) => {
  try {
    await _models_orderModel__WEBPACK_IMPORTED_MODULE_1__.default.findByIdAndUpdate(req.query.id, {
      delivered: true,
      isPaid: true,
      total: 0
    });
    const order = await _models_orderModel__WEBPACK_IMPORTED_MODULE_1__.default.findById(req.query.id);
    res.json({
      msg: 'Đánh dấu đã giao hàng.',
      order
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/order/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VDtBQUNBLEdBTkQsQ0FNRSxPQUFPdEMsR0FBUCxFQUFZO0FBQ2JMLElBQUFBLEdBQUcsQ0FBQ3lELE1BQUosQ0FBVyxHQUFYLEVBQWdCckQsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsR0FBRyxFQUFFQSxHQUFHLENBQUN1RDtBQUFYLEtBQXJCO0FBQ0E7QUFDRCxDQVZEOzs7Ozs7Ozs7Ozs7Ozs7O0FDaENBOztBQUVBLE1BQU1SLFNBQVMsR0FBRyxNQUFNO0FBQ3ZCLE1BQUluQywyRUFBSixFQUF3QztBQUN2Q2lELElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0FBQ0E7QUFDQTs7QUFDRGxELEVBQUFBLHVEQUFBLENBQ0NULE9BQU8sQ0FBQ0MsR0FBUixDQUFZNEQsV0FEYixFQUVDO0FBQ0NDLElBQUFBLGNBQWMsRUFBRSxJQURqQjtBQUVDQyxJQUFBQSxnQkFBZ0IsRUFBRSxLQUZuQjtBQUdDQyxJQUFBQSxlQUFlLEVBQUUsSUFIbEI7QUFJQ0MsSUFBQUEsa0JBQWtCLEVBQUU7QUFKckIsR0FGRCxFQVFDcEUsR0FBRyxJQUFJO0FBQ04sUUFBSUEsR0FBSixFQUFTLE1BQU1BLEdBQU47QUFDVDZELElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0EsR0FYRjtBQWFBRCxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNBLENBbkJEOztBQXFCQSxpRUFBZWYsU0FBZjs7Ozs7Ozs7OztBQ3ZCQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhLy4vbWlkZGxld2FyZS9hdXRoLmpzIiwid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS8uL21vZGVscy9vcmRlck1vZGVsLmpzIiwid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS8uL21vZGVscy91c2VyTW9kZWwuanMiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhLy4vcGFnZXMvYXBpL29yZGVyL1tpZF0uanMiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhLy4vdXRpbHMvY29ubmVjdERCLmpzIiwid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS9leHRlcm5hbCBcIm1vbmdvb3NlXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi9tb2RlbHMvdXNlck1vZGVsJztcclxuXHJcbmNvbnN0IGF1dGggPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuXHRjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb247XHJcblxyXG5cdGlmICghdG9rZW4pIHJldHVybiByZXMuanNvbih7IGVycjogJ1jDoWMgdGjhu7FjIGtow7RuZyBraOG6oyBk4bulbmcuJyB9KTtcclxuXHJcblx0Y29uc3QgZGVjb2RlZCA9IGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkFDQ0VTU19UT0tFTl9TRUNSRVQpO1xyXG5cdGlmICghZGVjb2RlZCkgcmV0dXJuIHJlcy5qc29uKHsgZXJyOiAnWMOhYyB0aOG7sWMgdGjhuqV0IGLhuqFpLicgfSk7XHJcblxyXG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBfaWQ6IGRlY29kZWQuaWQgfSk7XHJcblx0cmV0dXJuIHsgaWQ6IHVzZXIuX2lkLCByb2xlOiB1c2VyLnJvbGUsIHJvb3Q6IHVzZXIucm9vdCB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0aDtcclxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IG9yZGVyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuXHR7XHJcblx0XHR1c2VyOiB7IHR5cGU6IG1vbmdvb3NlLlR5cGVzLk9iamVjdElkLCByZWY6ICd1c2VyJyB9LFxyXG5cdFx0YWRkcmVzczogU3RyaW5nLFxyXG5cdFx0cGhvbmU6IFN0cmluZyxcclxuXHRcdGZ1bGxOYW1lOiBTdHJpbmcsXHJcblx0XHRjYXJ0OiBBcnJheSxcclxuXHRcdHRvdGFsOiBOdW1iZXIsXHJcblx0XHRwYXltZW50TWV0aG9kOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJ2NvZCcgfSxcclxuXHRcdGRlbGl2ZXJlZDoge1xyXG5cdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRkZWZhdWx0OiBmYWxzZSxcclxuXHRcdH0sXHJcblx0XHRpc1BhaWQ6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcclxuXHRcdHBhaWRBdDogeyB0eXBlOiBEYXRlIH0sXHJcblx0XHRndWVzdE9yZGVyOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH0sXHJcblx0fSxcclxuXHR7XHJcblx0XHR0aW1lc3RhbXBzOiB0cnVlLFxyXG5cdH1cclxuKTtcclxuXHJcbmNvbnN0IE9yZGVyID0gbW9uZ29vc2UubW9kZWxzLm9yZGVyIHx8IG1vbmdvb3NlLm1vZGVsKCdvcmRlcicsIG9yZGVyU2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9yZGVyO1xyXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcblx0e1xyXG5cdFx0bmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcblx0XHRlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcclxuXHRcdHBhc3N3b3JkOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuXHRcdHJvbGU6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAndXNlcicgfSxcclxuXHRcdHJvb3Q6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcclxuXHRcdGF2YXRhcjogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICcvaW1hZ2VzL2F2YXRhcmRlZmF1bHQucG5nJyB9LFxyXG5cdFx0dHlwZTogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdyZWdpdGVyJyB9LFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dGltZXN0YW1wczogdHJ1ZSxcclxuXHR9XHJcbik7XHJcblxyXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWxzLnVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ3VzZXInLCB1c2VyU2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1hbm9ueW1vdXMtZGVmYXVsdC1leHBvcnQgKi9cclxuaW1wb3J0IGNvbm5lY3REQiBmcm9tICcuLi8uLi8uLi91dGlscy9jb25uZWN0REInO1xyXG5pbXBvcnQgT3JkZXIgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL29yZGVyTW9kZWwnO1xyXG5pbXBvcnQgYXV0aCBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL2F1dGgnO1xyXG5cclxuY29ubmVjdERCKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuXHRzd2l0Y2ggKHJlcS5tZXRob2QpIHtcclxuXHRcdGNhc2UgJ0dFVCc6XHJcblx0XHRcdGF3YWl0IGdldE9yZGVyKHJlcSwgcmVzKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlICdQQVRDSCc6XHJcblx0XHRcdGF3YWl0IHVwZGF0ZURlbGl2ZXJlZChyZXEsIHJlcyk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IGdldE9yZGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF1dGgocmVxLCByZXMpO1xyXG5cclxuXHRcdGlmICghcmVzdWx0KSByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBlcnI6ICdWdWkgbMOybmcgxJHEg25nIG5o4bqtcC4nIH0pO1xyXG5cclxuXHRcdGNvbnN0IG9yZGVyID0gYXdhaXQgT3JkZXIuZmluZE9uZSh7IF9pZDogcmVxLnF1ZXJ5LmlkIH0pLnBvcHVsYXRlKCd1c2VyJywgJy1wYXNzd29yZCcpO1xyXG5cclxuXHRcdHJlcy5qc29uKHsgb3JkZXIgfSk7XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRyZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycjogZXJyLm1lc3NhZ2UgfSk7XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlRGVsaXZlcmVkID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGF3YWl0IE9yZGVyLmZpbmRCeUlkQW5kVXBkYXRlKHJlcS5xdWVyeS5pZCwgeyBkZWxpdmVyZWQ6IHRydWUsIGlzUGFpZDogdHJ1ZSwgdG90YWw6IDAgfSk7XHJcblxyXG5cdFx0Y29uc3Qgb3JkZXIgPSBhd2FpdCBPcmRlci5maW5kQnlJZChyZXEucXVlcnkuaWQpO1xyXG5cclxuXHRcdHJlcy5qc29uKHsgbXNnOiAnxJDDoW5oIGThuqV1IMSRw6MgZ2lhbyBow6BuZy4nLCBvcmRlciB9KTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyOiBlcnIubWVzc2FnZSB9KTtcclxuXHR9XHJcbn07XHJcbiIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBjb25uZWN0REIgPSAoKSA9PiB7XHJcblx0aWYgKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpIHtcclxuXHRcdGNvbnNvbGUubG9nKCdBbHJlYWR5IGNvbm5lY3RlZC4nKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0bW9uZ29vc2UuY29ubmVjdChcclxuXHRcdHByb2Nlc3MuZW52Lk1PTkdPREJfVVJMLFxyXG5cdFx0e1xyXG5cdFx0XHR1c2VDcmVhdGVJbmRleDogdHJ1ZSxcclxuXHRcdFx0dXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXHJcblx0XHRcdHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuXHRcdFx0dXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG5cdFx0fSxcclxuXHRcdGVyciA9PiB7XHJcblx0XHRcdGlmIChlcnIpIHRocm93IGVycjtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBtb25nb2RiLicpO1xyXG5cdFx0fVxyXG5cdCk7XHJcblx0Y29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBtb25nb2RiLicpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7Il0sIm5hbWVzIjpbImp3dCIsIlVzZXIiLCJhdXRoIiwicmVxIiwicmVzIiwidG9rZW4iLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsImpzb24iLCJlcnIiLCJkZWNvZGVkIiwidmVyaWZ5IiwicHJvY2VzcyIsImVudiIsIkFDQ0VTU19UT0tFTl9TRUNSRVQiLCJ1c2VyIiwiZmluZE9uZSIsIl9pZCIsImlkIiwicm9sZSIsInJvb3QiLCJtb25nb29zZSIsIm9yZGVyU2NoZW1hIiwiU2NoZW1hIiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJhZGRyZXNzIiwiU3RyaW5nIiwicGhvbmUiLCJmdWxsTmFtZSIsImNhcnQiLCJBcnJheSIsInRvdGFsIiwiTnVtYmVyIiwicGF5bWVudE1ldGhvZCIsImRlZmF1bHQiLCJkZWxpdmVyZWQiLCJCb29sZWFuIiwiaXNQYWlkIiwicGFpZEF0IiwiRGF0ZSIsImd1ZXN0T3JkZXIiLCJ0aW1lc3RhbXBzIiwiT3JkZXIiLCJtb2RlbHMiLCJvcmRlciIsIm1vZGVsIiwidXNlclNjaGVtYSIsIm5hbWUiLCJyZXF1aXJlZCIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJhdmF0YXIiLCJjb25uZWN0REIiLCJtZXRob2QiLCJnZXRPcmRlciIsInVwZGF0ZURlbGl2ZXJlZCIsInJlc3VsdCIsInN0YXR1cyIsInF1ZXJ5IiwicG9wdWxhdGUiLCJtZXNzYWdlIiwiZmluZEJ5SWRBbmRVcGRhdGUiLCJmaW5kQnlJZCIsIm1zZyIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0IiwiTU9OR09EQl9VUkwiLCJ1c2VDcmVhdGVJbmRleCIsInVzZUZpbmRBbmRNb2RpZnkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiXSwic291cmNlUm9vdCI6IiJ9