"use strict";
(() => {
var exports = {};
exports.id = "pages/api/product/hardDelete";
exports.ids = ["pages/api/product/hardDelete"];
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

/***/ "./models/productModel.js":
/*!********************************!*\
  !*** ./models/productModel.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);


const mongoose_delete = __webpack_require__(/*! mongoose-delete */ "mongoose-delete");

const productSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  title: {
    type: String,
    required: true,
    trim: true
  },
  priceOrigin: {
    type: Number,
    required: true,
    trim: true
  },
  priceSale: {
    type: Number,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  images: {
    type: Array,
    required: true
  },
  sizes: {
    type: Array,
    default: 0
  },
  colors: {
    type: Array,
    default: 0
  },
  inStock: {
    type: Number,
    default: 0
  },
  sold: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});
productSchema.plugin(mongoose_delete, {
  overrideMethods: true
});
productSchema.index({
  title: 'text'
});
const Product = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.product) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('product', productSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);

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

/***/ "./pages/api/product/hardDelete.js":
/*!*****************************************!*\
  !*** ./pages/api/product/hardDelete.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ "./utils/connectDB.js");
/* harmony import */ var _models_productModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/productModel */ "./models/productModel.js");
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../middleware/auth */ "./middleware/auth.js");



(0,_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__.default)();

const hardDelete = async (req, res) => {
  try {
    const result = await (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_2__.default)(req, res);
    if (result.role !== 'admin') return res.status(403).json({
      err: 'Bạn không đủ quyền chỉnh sửa sản phẩm.'
    });
    const {
      id
    } = req.body;
    await _models_productModel__WEBPACK_IMPORTED_MODULE_1__.default.deleteOne({
      _id: id
    });
    res.json({
      msg: 'Đã xóa sản phẩm thành công!'
    });
  } catch (err) {
    res.status(500).json({
      err: err.message
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hardDelete);

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

/***/ }),

/***/ "mongoose-delete":
/*!**********************************!*\
  !*** external "mongoose-delete" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("mongoose-delete");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/product/hardDelete.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7O0FBRUEsTUFBTUQsU0FBUyxHQUFHLE1BQU07QUFDdkIsTUFBSXRDLDJFQUFKLEVBQXdDO0FBQ3ZDZ0QsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7QUFDQTtBQUNBOztBQUNEakQsRUFBQUEsdURBQUEsQ0FDQ1QsT0FBTyxDQUFDQyxHQUFSLENBQVkyRCxXQURiLEVBRUM7QUFDQ0MsSUFBQUEsY0FBYyxFQUFFLElBRGpCO0FBRUNDLElBQUFBLGdCQUFnQixFQUFFLEtBRm5CO0FBR0NDLElBQUFBLGVBQWUsRUFBRSxJQUhsQjtBQUlDQyxJQUFBQSxrQkFBa0IsRUFBRTtBQUpyQixHQUZELEVBUUNuRSxHQUFHLElBQUk7QUFDTixRQUFJQSxHQUFKLEVBQVMsTUFBTUEsR0FBTjtBQUNUNEQsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFDQSxHQVhGO0FBYUFELEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0EsQ0FuQkQ7O0FBcUJBLGlFQUFlWCxTQUFmOzs7Ozs7Ozs7O0FDdkJBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS8uL21pZGRsZXdhcmUvYXV0aC5qcyIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvLi9tb2RlbHMvcHJvZHVjdE1vZGVsLmpzIiwid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS8uL21vZGVscy91c2VyTW9kZWwuanMiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhLy4vcGFnZXMvYXBpL3Byb2R1Y3QvaGFyZERlbGV0ZS5qcyIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvLi91dGlscy9jb25uZWN0REIuanMiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhL2V4dGVybmFsIFwibW9uZ29vc2VcIiIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvZXh0ZXJuYWwgXCJtb25nb29zZS1kZWxldGVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uL21vZGVscy91c2VyTW9kZWwnO1xyXG5cclxuY29uc3QgYXV0aCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cdGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbjtcclxuXHJcblx0aWYgKCF0b2tlbikgcmV0dXJuIHJlcy5qc29uKHsgZXJyOiAnWMOhYyB0aOG7sWMga2jDtG5nIGto4bqjIGThu6VuZy4nIH0pO1xyXG5cclxuXHRjb25zdCBkZWNvZGVkID0gand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuQUNDRVNTX1RPS0VOX1NFQ1JFVCk7XHJcblx0aWYgKCFkZWNvZGVkKSByZXR1cm4gcmVzLmpzb24oeyBlcnI6ICdYw6FjIHRo4buxYyB0aOG6pXQgYuG6oWkuJyB9KTtcclxuXHJcblx0Y29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IF9pZDogZGVjb2RlZC5pZCB9KTtcclxuXHRyZXR1cm4geyBpZDogdXNlci5faWQsIHJvbGU6IHVzZXIucm9sZSwgcm9vdDogdXNlci5yb290IH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoO1xyXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5jb25zdCBtb25nb29zZV9kZWxldGUgPSByZXF1aXJlKCdtb25nb29zZS1kZWxldGUnKTtcclxuXHJcbmNvbnN0IHByb2R1Y3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG5cdHtcclxuXHRcdHRpdGxlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHRyaW06IHRydWUgfSxcclxuXHRcdHByaWNlT3JpZ2luOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUsIHRyaW06IHRydWUgfSxcclxuXHRcdHByaWNlU2FsZTogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlLCB0cmltOiB0cnVlIH0sXHJcblx0XHRkZXNjcmlwdGlvbjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcblx0XHRjb250ZW50OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuXHRcdGNhdGVnb3J5OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuXHRcdGltYWdlczogeyB0eXBlOiBBcnJheSwgcmVxdWlyZWQ6IHRydWUgfSxcclxuXHRcdHNpemVzOiB7IHR5cGU6IEFycmF5LCBkZWZhdWx0OiAwIH0sXHJcblx0XHRjb2xvcnM6IHsgdHlwZTogQXJyYXksIGRlZmF1bHQ6IDAgfSxcclxuXHRcdGluU3RvY2s6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAwIH0sXHJcblx0XHRzb2xkOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMCB9LFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dGltZXN0YW1wczogdHJ1ZSxcclxuXHR9XHJcbik7XHJcblxyXG5wcm9kdWN0U2NoZW1hLnBsdWdpbihtb25nb29zZV9kZWxldGUsIHsgb3ZlcnJpZGVNZXRob2RzOiB0cnVlIH0pO1xyXG5wcm9kdWN0U2NoZW1hLmluZGV4KHsgdGl0bGU6ICd0ZXh0JyB9KTtcclxuY29uc3QgUHJvZHVjdCA9IG1vbmdvb3NlLm1vZGVscy5wcm9kdWN0IHx8IG1vbmdvb3NlLm1vZGVsKCdwcm9kdWN0JywgcHJvZHVjdFNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xyXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcblx0e1xyXG5cdFx0bmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcblx0XHRlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcclxuXHRcdHBhc3N3b3JkOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuXHRcdHJvbGU6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAndXNlcicgfSxcclxuXHRcdHJvb3Q6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcclxuXHRcdGF2YXRhcjogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICcvaW1hZ2VzL2F2YXRhcmRlZmF1bHQucG5nJyB9LFxyXG5cdFx0dHlwZTogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdyZWdpdGVyJyB9LFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dGltZXN0YW1wczogdHJ1ZSxcclxuXHR9XHJcbik7XHJcblxyXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWxzLnVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ3VzZXInLCB1c2VyU2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7XHJcbiIsImltcG9ydCBjb25uZWN0REIgZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29ubmVjdERCJztcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3Byb2R1Y3RNb2RlbCc7XHJcbmltcG9ydCBhdXRoIGZyb20gJy4uLy4uLy4uL21pZGRsZXdhcmUvYXV0aCc7XHJcblxyXG5jb25uZWN0REIoKTtcclxuXHJcbmNvbnN0IGhhcmREZWxldGUgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXV0aChyZXEsIHJlcyk7XHJcblx0XHRpZiAocmVzdWx0LnJvbGUgIT09ICdhZG1pbicpIHJldHVybiByZXMuc3RhdHVzKDQwMykuanNvbih7IGVycjogJ0LhuqFuIGtow7RuZyDEkeG7pyBxdXnhu4FuIGNo4buJbmggc+G7rWEgc+G6o24gcGjhuqltLicgfSk7XHJcblxyXG5cdFx0Y29uc3QgeyBpZCB9ID0gcmVxLmJvZHk7XHJcblxyXG5cdFx0YXdhaXQgUHJvZHVjdC5kZWxldGVPbmUoeyBfaWQ6IGlkIH0pO1xyXG5cclxuXHRcdHJlcy5qc29uKHsgbXNnOiAnxJDDoyB4w7NhIHPhuqNuIHBo4bqpbSB0aMOgbmggY8O0bmchJyB9KTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyOiBlcnIubWVzc2FnZSB9KTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYXJkRGVsZXRlO1xyXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgY29ubmVjdERCID0gKCkgPT4ge1xyXG5cdGlmIChtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKSB7XHJcblx0XHRjb25zb2xlLmxvZygnQWxyZWFkeSBjb25uZWN0ZWQuJyk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdG1vbmdvb3NlLmNvbm5lY3QoXHJcblx0XHRwcm9jZXNzLmVudi5NT05HT0RCX1VSTCxcclxuXHRcdHtcclxuXHRcdFx0dXNlQ3JlYXRlSW5kZXg6IHRydWUsXHJcblx0XHRcdHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxyXG5cdFx0XHR1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcblx0XHRcdHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuXHRcdH0sXHJcblx0XHRlcnIgPT4ge1xyXG5cdFx0XHRpZiAoZXJyKSB0aHJvdyBlcnI7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gbW9uZ29kYi4nKTtcclxuXHRcdH1cclxuXHQpO1xyXG5cdGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gbW9uZ29kYi4nKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlLWRlbGV0ZVwiKTsiXSwibmFtZXMiOlsiand0IiwiVXNlciIsImF1dGgiLCJyZXEiLCJyZXMiLCJ0b2tlbiIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwianNvbiIsImVyciIsImRlY29kZWQiLCJ2ZXJpZnkiLCJwcm9jZXNzIiwiZW52IiwiQUNDRVNTX1RPS0VOX1NFQ1JFVCIsInVzZXIiLCJmaW5kT25lIiwiX2lkIiwiaWQiLCJyb2xlIiwicm9vdCIsIm1vbmdvb3NlIiwibW9uZ29vc2VfZGVsZXRlIiwicmVxdWlyZSIsInByb2R1Y3RTY2hlbWEiLCJTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInRyaW0iLCJwcmljZU9yaWdpbiIsIk51bWJlciIsInByaWNlU2FsZSIsImRlc2NyaXB0aW9uIiwiY29udGVudCIsImNhdGVnb3J5IiwiaW1hZ2VzIiwiQXJyYXkiLCJzaXplcyIsImRlZmF1bHQiLCJjb2xvcnMiLCJpblN0b2NrIiwic29sZCIsInRpbWVzdGFtcHMiLCJwbHVnaW4iLCJvdmVycmlkZU1ldGhvZHMiLCJpbmRleCIsIlByb2R1Y3QiLCJtb2RlbHMiLCJwcm9kdWN0IiwibW9kZWwiLCJ1c2VyU2NoZW1hIiwibmFtZSIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJCb29sZWFuIiwiYXZhdGFyIiwiY29ubmVjdERCIiwiaGFyZERlbGV0ZSIsInJlc3VsdCIsInN0YXR1cyIsImJvZHkiLCJkZWxldGVPbmUiLCJtc2ciLCJtZXNzYWdlIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJNT05HT0RCX1VSTCIsInVzZUNyZWF0ZUluZGV4IiwidXNlRmluZEFuZE1vZGlmeSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSJdLCJzb3VyY2VSb290IjoiIn0=