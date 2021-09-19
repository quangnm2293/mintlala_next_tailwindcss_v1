"use strict";
(() => {
var exports = {};
exports.id = "pages/api/product/[id]";
exports.ids = ["pages/api/product/[id]"];
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

/***/ "./pages/api/product/[id].js":
/*!***********************************!*\
  !*** ./pages/api/product/[id].js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ "./utils/connectDB.js");
/* harmony import */ var _models_productModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/productModel */ "./models/productModel.js");
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../middleware/auth */ "./middleware/auth.js");
/* eslint-disable import/no-anonymous-default-export */



(0,_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__.default)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  switch (req.method) {
    case 'GET':
      await getProduct(req, res);
      break;

    case 'PUT':
      await updateProduct(req, res);
      break;

    case 'DELETE':
      await deleteProduct(req, res);
      break;

    case 'PATCH':
      await showProduct(req, res);
      break;
  }
});

const getProduct = async (req, res) => {
  try {
    const product = await _models_productModel__WEBPACK_IMPORTED_MODULE_1__.default.findOne({
      _id: req.query.id
    });
    if (!product) return res.status(400).json({
      err: 'Sản phẩm không tồn tại'
    });
    res.json({
      status: 'success',
      product
    });
  } catch (err) {
    res.status(500).json({
      err: err.message
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const result = await (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_2__.default)(req, res);
    if (result.role !== 'admin') return res.status(403).json({
      err: 'Bạn không đủ quyền chỉnh sửa sản phẩm.'
    });
    const {
      id
    } = req.query;
    const {
      title,
      priceOrigin,
      priceSale,
      inStock,
      description,
      content,
      category,
      images
    } = req.body;
    if (!title || !priceOrigin || !priceSale || !inStock || !description || !content || category === 'all' || category === '' || images.length === 0) return res.status(400).json({
      err: 'Vui lòng điền tất cả các trường.'
    });
    await _models_productModel__WEBPACK_IMPORTED_MODULE_1__.default.findByIdAndUpdate(id, {
      title: title.toLowerCase(),
      priceOrigin,
      priceSale,
      inStock,
      description,
      content,
      category,
      images
    });
    res.json({
      msg: 'Cập nhật sản phẩm thành công!'
    });
  } catch (err) {
    res.status(500).json({
      err: err.message
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const result = await (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_2__.default)(req, res);
    if (result.role !== 'admin') return res.status(403).json({
      err: 'Bạn không đủ quyền chỉnh sửa sản phẩm.'
    });
    const {
      id
    } = req.query;
    await _models_productModel__WEBPACK_IMPORTED_MODULE_1__.default.delete({
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

const showProduct = async (req, res) => {
  try {
    const result = await (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_2__.default)(req, res);
    if (result.role !== 'admin') return res.status(403).json({
      err: 'Bạn không đủ quyền chỉnh sửa sản phẩm.'
    });
    const {
      id
    } = req.query;
    const product = await _models_productModel__WEBPACK_IMPORTED_MODULE_1__.default.restore({
      _id: id
    });
    res.json({
      msg: 'Đã hiển thị sản phẩm thành công!',
      product
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/product/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WCxLQUFyQjtBQUNBO0FBQ0QsQ0FiRDs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGQTs7QUFFQSxNQUFNUixTQUFTLEdBQUcsTUFBTTtBQUN2QixNQUFJdEMsMkVBQUosRUFBd0M7QUFDdkN5RCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtBQUNBO0FBQ0E7O0FBQ0QxRCxFQUFBQSx1REFBQSxDQUNDVCxPQUFPLENBQUNDLEdBQVIsQ0FBWW9FLFdBRGIsRUFFQztBQUNDQyxJQUFBQSxjQUFjLEVBQUUsSUFEakI7QUFFQ0MsSUFBQUEsZ0JBQWdCLEVBQUUsS0FGbkI7QUFHQ0MsSUFBQUEsZUFBZSxFQUFFLElBSGxCO0FBSUNDLElBQUFBLGtCQUFrQixFQUFFO0FBSnJCLEdBRkQsRUFRQzVFLEdBQUcsSUFBSTtBQUNOLFFBQUlBLEdBQUosRUFBUyxNQUFNQSxHQUFOO0FBQ1RxRSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNBLEdBWEY7QUFhQUQsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFDQSxDQW5CRDs7QUFxQkEsaUVBQWVwQixTQUFmOzs7Ozs7Ozs7O0FDdkJBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS8uL21pZGRsZXdhcmUvYXV0aC5qcyIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvLi9tb2RlbHMvcHJvZHVjdE1vZGVsLmpzIiwid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS8uL21vZGVscy91c2VyTW9kZWwuanMiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhLy4vcGFnZXMvYXBpL3Byb2R1Y3QvW2lkXS5qcyIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvLi91dGlscy9jb25uZWN0REIuanMiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhL2V4dGVybmFsIFwibW9uZ29vc2VcIiIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvZXh0ZXJuYWwgXCJtb25nb29zZS1kZWxldGVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uL21vZGVscy91c2VyTW9kZWwnO1xyXG5cclxuY29uc3QgYXV0aCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cdGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbjtcclxuXHJcblx0aWYgKCF0b2tlbikgcmV0dXJuIHJlcy5qc29uKHsgZXJyOiAnWMOhYyB0aOG7sWMga2jDtG5nIGto4bqjIGThu6VuZy4nIH0pO1xyXG5cclxuXHRjb25zdCBkZWNvZGVkID0gand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuQUNDRVNTX1RPS0VOX1NFQ1JFVCk7XHJcblx0aWYgKCFkZWNvZGVkKSByZXR1cm4gcmVzLmpzb24oeyBlcnI6ICdYw6FjIHRo4buxYyB0aOG6pXQgYuG6oWkuJyB9KTtcclxuXHJcblx0Y29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IF9pZDogZGVjb2RlZC5pZCB9KTtcclxuXHRyZXR1cm4geyBpZDogdXNlci5faWQsIHJvbGU6IHVzZXIucm9sZSwgcm9vdDogdXNlci5yb290IH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoO1xyXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5jb25zdCBtb25nb29zZV9kZWxldGUgPSByZXF1aXJlKCdtb25nb29zZS1kZWxldGUnKTtcclxuXHJcbmNvbnN0IHByb2R1Y3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG5cdHtcclxuXHRcdHRpdGxlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHRyaW06IHRydWUgfSxcclxuXHRcdHByaWNlT3JpZ2luOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUsIHRyaW06IHRydWUgfSxcclxuXHRcdHByaWNlU2FsZTogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlLCB0cmltOiB0cnVlIH0sXHJcblx0XHRkZXNjcmlwdGlvbjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcblx0XHRjb250ZW50OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuXHRcdGNhdGVnb3J5OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuXHRcdGltYWdlczogeyB0eXBlOiBBcnJheSwgcmVxdWlyZWQ6IHRydWUgfSxcclxuXHRcdHNpemVzOiB7IHR5cGU6IEFycmF5LCBkZWZhdWx0OiAwIH0sXHJcblx0XHRjb2xvcnM6IHsgdHlwZTogQXJyYXksIGRlZmF1bHQ6IDAgfSxcclxuXHRcdGluU3RvY2s6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAwIH0sXHJcblx0XHRzb2xkOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMCB9LFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dGltZXN0YW1wczogdHJ1ZSxcclxuXHR9XHJcbik7XHJcblxyXG5wcm9kdWN0U2NoZW1hLnBsdWdpbihtb25nb29zZV9kZWxldGUsIHsgb3ZlcnJpZGVNZXRob2RzOiB0cnVlIH0pO1xyXG5wcm9kdWN0U2NoZW1hLmluZGV4KHsgdGl0bGU6ICd0ZXh0JyB9KTtcclxuY29uc3QgUHJvZHVjdCA9IG1vbmdvb3NlLm1vZGVscy5wcm9kdWN0IHx8IG1vbmdvb3NlLm1vZGVsKCdwcm9kdWN0JywgcHJvZHVjdFNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xyXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcblx0e1xyXG5cdFx0bmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcblx0XHRlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcclxuXHRcdHBhc3N3b3JkOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuXHRcdHJvbGU6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAndXNlcicgfSxcclxuXHRcdHJvb3Q6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcclxuXHRcdGF2YXRhcjogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICcvaW1hZ2VzL2F2YXRhcmRlZmF1bHQucG5nJyB9LFxyXG5cdFx0dHlwZTogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdyZWdpdGVyJyB9LFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dGltZXN0YW1wczogdHJ1ZSxcclxuXHR9XHJcbik7XHJcblxyXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWxzLnVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ3VzZXInLCB1c2VyU2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1hbm9ueW1vdXMtZGVmYXVsdC1leHBvcnQgKi9cclxuaW1wb3J0IGNvbm5lY3REQiBmcm9tICcuLi8uLi8uLi91dGlscy9jb25uZWN0REInO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuLi8uLi8uLi9tb2RlbHMvcHJvZHVjdE1vZGVsJztcclxuaW1wb3J0IGF1dGggZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS9hdXRoJztcclxuXHJcbmNvbm5lY3REQigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcblx0c3dpdGNoIChyZXEubWV0aG9kKSB7XHJcblx0XHRjYXNlICdHRVQnOlxyXG5cdFx0XHRhd2FpdCBnZXRQcm9kdWN0KHJlcSwgcmVzKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlICdQVVQnOlxyXG5cdFx0XHRhd2FpdCB1cGRhdGVQcm9kdWN0KHJlcSwgcmVzKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlICdERUxFVEUnOlxyXG5cdFx0XHRhd2FpdCBkZWxldGVQcm9kdWN0KHJlcSwgcmVzKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlICdQQVRDSCc6XHJcblx0XHRcdGF3YWl0IHNob3dQcm9kdWN0KHJlcSwgcmVzKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UHJvZHVjdCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBwcm9kdWN0ID0gYXdhaXQgUHJvZHVjdC5maW5kT25lKHsgX2lkOiByZXEucXVlcnkuaWQgfSk7XHJcblx0XHRpZiAoIXByb2R1Y3QpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycjogJ1PhuqNuIHBo4bqpbSBraMO0bmcgdOG7k24gdOG6oWknIH0pO1xyXG5cclxuXHRcdHJlcy5qc29uKHsgc3RhdHVzOiAnc3VjY2VzcycsIHByb2R1Y3QgfSk7XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRyZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycjogZXJyLm1lc3NhZ2UgfSk7XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlUHJvZHVjdCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBhdXRoKHJlcSwgcmVzKTtcclxuXHRcdGlmIChyZXN1bHQucm9sZSAhPT0gJ2FkbWluJykgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5qc29uKHsgZXJyOiAnQuG6oW4ga2jDtG5nIMSR4bunIHF1eeG7gW4gY2jhu4luaCBz4butYSBz4bqjbiBwaOG6qW0uJyB9KTtcclxuXHJcblx0XHRjb25zdCB7IGlkIH0gPSByZXEucXVlcnk7XHJcblx0XHRjb25zdCB7IHRpdGxlLCBwcmljZU9yaWdpbiwgcHJpY2VTYWxlLCBpblN0b2NrLCBkZXNjcmlwdGlvbiwgY29udGVudCwgY2F0ZWdvcnksIGltYWdlcyB9ID0gcmVxLmJvZHk7XHJcblxyXG5cdFx0aWYgKFxyXG5cdFx0XHQhdGl0bGUgfHxcclxuXHRcdFx0IXByaWNlT3JpZ2luIHx8XHJcblx0XHRcdCFwcmljZVNhbGUgfHxcclxuXHRcdFx0IWluU3RvY2sgfHxcclxuXHRcdFx0IWRlc2NyaXB0aW9uIHx8XHJcblx0XHRcdCFjb250ZW50IHx8XHJcblx0XHRcdGNhdGVnb3J5ID09PSAnYWxsJyB8fFxyXG5cdFx0XHRjYXRlZ29yeSA9PT0gJycgfHxcclxuXHRcdFx0aW1hZ2VzLmxlbmd0aCA9PT0gMFxyXG5cdFx0KVxyXG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnI6ICdWdWkgbMOybmcgxJFp4buBbiB04bqldCBj4bqjIGPDoWMgdHLGsOG7nW5nLicgfSk7XHJcblxyXG5cdFx0YXdhaXQgUHJvZHVjdC5maW5kQnlJZEFuZFVwZGF0ZShpZCwge1xyXG5cdFx0XHR0aXRsZTogdGl0bGUudG9Mb3dlckNhc2UoKSxcclxuXHRcdFx0cHJpY2VPcmlnaW4sXHJcblx0XHRcdHByaWNlU2FsZSxcclxuXHRcdFx0aW5TdG9jayxcclxuXHRcdFx0ZGVzY3JpcHRpb24sXHJcblx0XHRcdGNvbnRlbnQsXHJcblx0XHRcdGNhdGVnb3J5LFxyXG5cdFx0XHRpbWFnZXMsXHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXMuanNvbih7IG1zZzogJ0Phuq1wIG5o4bqtdCBz4bqjbiBwaOG6qW0gdGjDoG5oIGPDtG5nIScgfSk7XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRyZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycjogZXJyLm1lc3NhZ2UgfSk7XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgZGVsZXRlUHJvZHVjdCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBhdXRoKHJlcSwgcmVzKTtcclxuXHRcdGlmIChyZXN1bHQucm9sZSAhPT0gJ2FkbWluJykgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5qc29uKHsgZXJyOiAnQuG6oW4ga2jDtG5nIMSR4bunIHF1eeG7gW4gY2jhu4luaCBz4butYSBz4bqjbiBwaOG6qW0uJyB9KTtcclxuXHJcblx0XHRjb25zdCB7IGlkIH0gPSByZXEucXVlcnk7XHJcblxyXG5cdFx0YXdhaXQgUHJvZHVjdC5kZWxldGUoeyBfaWQ6IGlkIH0pO1xyXG5cclxuXHRcdHJlcy5qc29uKHsgbXNnOiAnxJDDoyB4w7NhIHPhuqNuIHBo4bqpbSB0aMOgbmggY8O0bmchJyB9KTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyOiBlcnIubWVzc2FnZSB9KTtcclxuXHR9XHJcbn07XHJcbmNvbnN0IHNob3dQcm9kdWN0ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF1dGgocmVxLCByZXMpO1xyXG5cdFx0aWYgKHJlc3VsdC5yb2xlICE9PSAnYWRtaW4nKSByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLmpzb24oeyBlcnI6ICdC4bqhbiBraMO0bmcgxJHhu6cgcXV54buBbiBjaOG7iW5oIHPhu61hIHPhuqNuIHBo4bqpbS4nIH0pO1xyXG5cclxuXHRcdGNvbnN0IHsgaWQgfSA9IHJlcS5xdWVyeTtcclxuXHJcblx0XHRjb25zdCBwcm9kdWN0ID0gYXdhaXQgUHJvZHVjdC5yZXN0b3JlKHsgX2lkOiBpZCB9KTtcclxuXHJcblx0XHRyZXMuanNvbih7IG1zZzogJ8SQw6MgaGnhu4NuIHRo4buLIHPhuqNuIHBo4bqpbSB0aMOgbmggY8O0bmchJywgcHJvZHVjdCB9KTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyOiBlcnIubWVzc2FnZSB9KTtcclxuXHR9XHJcbn07XHJcbiIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBjb25uZWN0REIgPSAoKSA9PiB7XHJcblx0aWYgKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpIHtcclxuXHRcdGNvbnNvbGUubG9nKCdBbHJlYWR5IGNvbm5lY3RlZC4nKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0bW9uZ29vc2UuY29ubmVjdChcclxuXHRcdHByb2Nlc3MuZW52Lk1PTkdPREJfVVJMLFxyXG5cdFx0e1xyXG5cdFx0XHR1c2VDcmVhdGVJbmRleDogdHJ1ZSxcclxuXHRcdFx0dXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXHJcblx0XHRcdHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuXHRcdFx0dXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG5cdFx0fSxcclxuXHRcdGVyciA9PiB7XHJcblx0XHRcdGlmIChlcnIpIHRocm93IGVycjtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBtb25nb2RiLicpO1xyXG5cdFx0fVxyXG5cdCk7XHJcblx0Y29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBtb25nb2RiLicpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2UtZGVsZXRlXCIpOyJdLCJuYW1lcyI6WyJqd3QiLCJVc2VyIiwiYXV0aCIsInJlcSIsInJlcyIsInRva2VuIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJqc29uIiwiZXJyIiwiZGVjb2RlZCIsInZlcmlmeSIsInByb2Nlc3MiLCJlbnYiLCJBQ0NFU1NfVE9LRU5fU0VDUkVUIiwidXNlciIsImZpbmRPbmUiLCJfaWQiLCJpZCIsInJvbGUiLCJyb290IiwibW9uZ29vc2UiLCJtb25nb29zZV9kZWxldGUiLCJyZXF1aXJlIiwicHJvZHVjdFNjaGVtYSIsIlNjaGVtYSIsInRpdGxlIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidHJpbSIsInByaWNlT3JpZ2luIiwiTnVtYmVyIiwicHJpY2VTYWxlIiwiZGVzY3JpcHRpb24iLCJjb250ZW50IiwiY2F0ZWdvcnkiLCJpbWFnZXMiLCJBcnJheSIsInNpemVzIiwiZGVmYXVsdCIsImNvbG9ycyIsImluU3RvY2siLCJzb2xkIiwidGltZXN0YW1wcyIsInBsdWdpbiIsIm92ZXJyaWRlTWV0aG9kcyIsImluZGV4IiwiUHJvZHVjdCIsIm1vZGVscyIsInByb2R1Y3QiLCJtb2RlbCIsInVzZXJTY2hlbWEiLCJuYW1lIiwiZW1haWwiLCJ1bmlxdWUiLCJwYXNzd29yZCIsIkJvb2xlYW4iLCJhdmF0YXIiLCJjb25uZWN0REIiLCJtZXRob2QiLCJnZXRQcm9kdWN0IiwidXBkYXRlUHJvZHVjdCIsImRlbGV0ZVByb2R1Y3QiLCJzaG93UHJvZHVjdCIsInF1ZXJ5Iiwic3RhdHVzIiwibWVzc2FnZSIsInJlc3VsdCIsImJvZHkiLCJsZW5ndGgiLCJmaW5kQnlJZEFuZFVwZGF0ZSIsInRvTG93ZXJDYXNlIiwibXNnIiwiZGVsZXRlIiwicmVzdG9yZSIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0IiwiTU9OR09EQl9VUkwiLCJ1c2VDcmVhdGVJbmRleCIsInVzZUZpbmRBbmRNb2RpZnkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiXSwic291cmNlUm9vdCI6IiJ9