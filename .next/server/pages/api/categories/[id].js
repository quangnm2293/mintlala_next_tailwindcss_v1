"use strict";
(() => {
var exports = {};
exports.id = "pages/api/categories/[id]";
exports.ids = ["pages/api/categories/[id]"];
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

/***/ "./pages/api/categories/[id].js":
/*!**************************************!*\
  !*** ./pages/api/categories/[id].js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ "./utils/connectDB.js");
/* harmony import */ var _models_categoriesModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/categoriesModel */ "./models/categoriesModel.js");
/* harmony import */ var _models_productModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/productModel */ "./models/productModel.js");
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../middleware/auth */ "./middleware/auth.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable import/no-anonymous-default-export */




(0,_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__.default)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  switch (req.method) {
    case 'DELETE':
      await deleteCategory(req, res);
      break;

    case 'PUT':
      await updateCategory(req, res);
      break;
  }
});

const deleteCategory = async (req, res) => {
  try {
    const result = await (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_3__.default)(req, res);
    if (!result) return res.status(400).json({
      err: 'Xác thực thất bại.'
    });
    const {
      id
    } = req.query;
    const products = await _models_productModel__WEBPACK_IMPORTED_MODULE_2__.default.findWithDeleted({});
    const productsContainCotegory = products.filter(product => product.category === id);
    if (productsContainCotegory.length > 0) return res.json({
      err: 'Bạn phải xóa sản phẩm chứa danh mục này trước!'
    });
    await _models_categoriesModel__WEBPACK_IMPORTED_MODULE_1__.default.findByIdAndDelete(id);
    res.json({
      msg: 'Xóa danh mục thành công.'
    });
  } catch (err) {
    res.status(500).json({
      err: err.message
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    const result = await (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_3__.default)(req, res);
    if (!result) return res.status(400).json({
      err: 'Xác thực thất bại.'
    });
    const {
      id
    } = req.query;
    const {
      name
    } = req.body;
    const newCategory = await _models_categoriesModel__WEBPACK_IMPORTED_MODULE_1__.default.findByIdAndUpdate(id, {
      name
    });
    res.json({
      msg: 'Cập nhật danh mục thành công.',
      category: _objectSpread(_objectSpread({}, newCategory._doc), {}, {
        name
      })
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/categories/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ04sUUFBSUEsR0FBSixFQUFTLE1BQU1BLEdBQU47QUFDVDBFLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0EsR0FYRjtBQWFBRCxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNBLENBbkJEOztBQXFCQSxpRUFBZXRCLFNBQWY7Ozs7Ozs7Ozs7QUN2QkE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhLy4vbWlkZGxld2FyZS9hdXRoLmpzIiwid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS8uL21vZGVscy9jYXRlZ29yaWVzTW9kZWwuanMiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhLy4vbW9kZWxzL3Byb2R1Y3RNb2RlbC5qcyIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvLi9tb2RlbHMvdXNlck1vZGVsLmpzIiwid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS8uL3BhZ2VzL2FwaS9jYXRlZ29yaWVzL1tpZF0uanMiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhLy4vdXRpbHMvY29ubmVjdERCLmpzIiwid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhL2V4dGVybmFsIFwibW9uZ29vc2UtZGVsZXRlXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi9tb2RlbHMvdXNlck1vZGVsJztcclxuXHJcbmNvbnN0IGF1dGggPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuXHRjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb247XHJcblxyXG5cdGlmICghdG9rZW4pIHJldHVybiByZXMuanNvbih7IGVycjogJ1jDoWMgdGjhu7FjIGtow7RuZyBraOG6oyBk4bulbmcuJyB9KTtcclxuXHJcblx0Y29uc3QgZGVjb2RlZCA9IGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkFDQ0VTU19UT0tFTl9TRUNSRVQpO1xyXG5cdGlmICghZGVjb2RlZCkgcmV0dXJuIHJlcy5qc29uKHsgZXJyOiAnWMOhYyB0aOG7sWMgdGjhuqV0IGLhuqFpLicgfSk7XHJcblxyXG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBfaWQ6IGRlY29kZWQuaWQgfSk7XHJcblx0cmV0dXJuIHsgaWQ6IHVzZXIuX2lkLCByb2xlOiB1c2VyLnJvbGUsIHJvb3Q6IHVzZXIucm9vdCB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0aDtcclxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IGNhdGVnb3JpZXNTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG5cdHtcclxuXHRcdG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdHJpbTogdHJ1ZSB9LFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dGltZXN0YW1wczogdHJ1ZSxcclxuXHR9XHJcbik7XHJcblxyXG5jb25zdCBDYXRlZ29yaWVzID0gbW9uZ29vc2UubW9kZWxzLmNhdGVnb3JpZXMgfHwgbW9uZ29vc2UubW9kZWwoJ2NhdGVnb3JpZXMnLCBjYXRlZ29yaWVzU2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3JpZXM7XHJcbiIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbmNvbnN0IG1vbmdvb3NlX2RlbGV0ZSA9IHJlcXVpcmUoJ21vbmdvb3NlLWRlbGV0ZScpO1xyXG5cclxuY29uc3QgcHJvZHVjdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcblx0e1xyXG5cdFx0dGl0bGU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdHJpbTogdHJ1ZSB9LFxyXG5cdFx0cHJpY2VPcmlnaW46IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSwgdHJpbTogdHJ1ZSB9LFxyXG5cdFx0cHJpY2VTYWxlOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUsIHRyaW06IHRydWUgfSxcclxuXHRcdGRlc2NyaXB0aW9uOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuXHRcdGNvbnRlbnQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG5cdFx0Y2F0ZWdvcnk6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG5cdFx0aW1hZ2VzOiB7IHR5cGU6IEFycmF5LCByZXF1aXJlZDogdHJ1ZSB9LFxyXG5cdFx0c2l6ZXM6IHsgdHlwZTogQXJyYXksIGRlZmF1bHQ6IDAgfSxcclxuXHRcdGNvbG9yczogeyB0eXBlOiBBcnJheSwgZGVmYXVsdDogMCB9LFxyXG5cdFx0aW5TdG9jazogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDAgfSxcclxuXHRcdHNvbGQ6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAwIH0sXHJcblx0fSxcclxuXHR7XHJcblx0XHR0aW1lc3RhbXBzOiB0cnVlLFxyXG5cdH1cclxuKTtcclxuXHJcbnByb2R1Y3RTY2hlbWEucGx1Z2luKG1vbmdvb3NlX2RlbGV0ZSwgeyBvdmVycmlkZU1ldGhvZHM6IHRydWUgfSk7XHJcbnByb2R1Y3RTY2hlbWEuaW5kZXgoeyB0aXRsZTogJ3RleHQnIH0pO1xyXG5jb25zdCBQcm9kdWN0ID0gbW9uZ29vc2UubW9kZWxzLnByb2R1Y3QgfHwgbW9uZ29vc2UubW9kZWwoJ3Byb2R1Y3QnLCBwcm9kdWN0U2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XHJcbiIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuXHR7XHJcblx0XHRuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuXHRcdGVtYWlsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxyXG5cdFx0cGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG5cdFx0cm9sZTogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICd1c2VyJyB9LFxyXG5cdFx0cm9vdDogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxyXG5cdFx0YXZhdGFyOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJy9pbWFnZXMvYXZhdGFyZGVmYXVsdC5wbmcnIH0sXHJcblx0XHR0eXBlOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJ3JlZ2l0ZXInIH0sXHJcblx0fSxcclxuXHR7XHJcblx0XHR0aW1lc3RhbXBzOiB0cnVlLFxyXG5cdH1cclxuKTtcclxuXHJcbmNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbHMudXNlciB8fCBtb25nb29zZS5tb2RlbCgndXNlcicsIHVzZXJTY2hlbWEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWFub255bW91cy1kZWZhdWx0LWV4cG9ydCAqL1xyXG5pbXBvcnQgY29ubmVjdERCIGZyb20gJy4uLy4uLy4uL3V0aWxzL2Nvbm5lY3REQic7XHJcbmltcG9ydCBDYXRlZ29yaWVzIGZyb20gJy4uLy4uLy4uL21vZGVscy9jYXRlZ29yaWVzTW9kZWwnO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuLi8uLi8uLi9tb2RlbHMvcHJvZHVjdE1vZGVsJztcclxuaW1wb3J0IGF1dGggZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS9hdXRoJztcclxuXHJcbmNvbm5lY3REQigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcblx0c3dpdGNoIChyZXEubWV0aG9kKSB7XHJcblx0XHRjYXNlICdERUxFVEUnOlxyXG5cdFx0XHRhd2FpdCBkZWxldGVDYXRlZ29yeShyZXEsIHJlcyk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAnUFVUJzpcclxuXHRcdFx0YXdhaXQgdXBkYXRlQ2F0ZWdvcnkocmVxLCByZXMpO1xyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCBkZWxldGVDYXRlZ29yeSA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBhdXRoKHJlcSwgcmVzKTtcclxuXHRcdGlmICghcmVzdWx0KSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnI6ICdYw6FjIHRo4buxYyB0aOG6pXQgYuG6oWkuJyB9KTtcclxuXHJcblx0XHRjb25zdCB7IGlkIH0gPSByZXEucXVlcnk7XHJcblxyXG5cdFx0Y29uc3QgcHJvZHVjdHMgPSBhd2FpdCBQcm9kdWN0LmZpbmRXaXRoRGVsZXRlZCh7fSk7XHJcblxyXG5cdFx0Y29uc3QgcHJvZHVjdHNDb250YWluQ290ZWdvcnkgPSBwcm9kdWN0cy5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0LmNhdGVnb3J5ID09PSBpZCk7XHJcblx0XHRcclxuXHRcdGlmIChwcm9kdWN0c0NvbnRhaW5Db3RlZ29yeS5sZW5ndGggPiAwKVxyXG5cdFx0XHRyZXR1cm4gcmVzLmpzb24oeyBlcnI6ICdC4bqhbiBwaOG6o2kgeMOzYSBz4bqjbiBwaOG6qW0gY2jhu6lhIGRhbmggbeG7pWMgbsOgeSB0csaw4bubYyEnIH0pO1xyXG5cclxuXHRcdGF3YWl0IENhdGVnb3JpZXMuZmluZEJ5SWRBbmREZWxldGUoaWQpO1xyXG5cclxuXHRcdHJlcy5qc29uKHsgbXNnOiAnWMOzYSBkYW5oIG3hu6VjIHRow6BuaCBjw7RuZy4nIH0pO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0cmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnI6IGVyci5tZXNzYWdlIH0pO1xyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IHVwZGF0ZUNhdGVnb3J5ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF1dGgocmVxLCByZXMpO1xyXG5cdFx0aWYgKCFyZXN1bHQpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycjogJ1jDoWMgdGjhu7FjIHRo4bqldCBi4bqhaS4nIH0pO1xyXG5cclxuXHRcdGNvbnN0IHsgaWQgfSA9IHJlcS5xdWVyeTtcclxuXHRcdGNvbnN0IHsgbmFtZSB9ID0gcmVxLmJvZHk7XHJcblxyXG5cdFx0Y29uc3QgbmV3Q2F0ZWdvcnkgPSBhd2FpdCBDYXRlZ29yaWVzLmZpbmRCeUlkQW5kVXBkYXRlKGlkLCB7IG5hbWUgfSk7XHJcblxyXG5cdFx0cmVzLmpzb24oeyBtc2c6ICdD4bqtcCBuaOG6rXQgZGFuaCBt4bulYyB0aMOgbmggY8O0bmcuJywgY2F0ZWdvcnk6IHsgLi4ubmV3Q2F0ZWdvcnkuX2RvYywgbmFtZSB9IH0pO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0cmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnI6IGVyci5tZXNzYWdlIH0pO1xyXG5cdH1cclxufTtcclxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IGNvbm5lY3REQiA9ICgpID0+IHtcclxuXHRpZiAobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSkge1xyXG5cdFx0Y29uc29sZS5sb2coJ0FscmVhZHkgY29ubmVjdGVkLicpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHRtb25nb29zZS5jb25uZWN0KFxyXG5cdFx0cHJvY2Vzcy5lbnYuTU9OR09EQl9VUkwsXHJcblx0XHR7XHJcblx0XHRcdHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxyXG5cdFx0XHR1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcclxuXHRcdFx0dXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG5cdFx0XHR1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcblx0XHR9LFxyXG5cdFx0ZXJyID0+IHtcclxuXHRcdFx0aWYgKGVycikgdGhyb3cgZXJyO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIG1vbmdvZGIuJyk7XHJcblx0XHR9XHJcblx0KTtcclxuXHRjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIG1vbmdvZGIuJyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZS1kZWxldGVcIik7Il0sIm5hbWVzIjpbImp3dCIsIlVzZXIiLCJhdXRoIiwicmVxIiwicmVzIiwidG9rZW4iLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsImpzb24iLCJlcnIiLCJkZWNvZGVkIiwidmVyaWZ5IiwicHJvY2VzcyIsImVudiIsIkFDQ0VTU19UT0tFTl9TRUNSRVQiLCJ1c2VyIiwiZmluZE9uZSIsIl9pZCIsImlkIiwicm9sZSIsInJvb3QiLCJtb25nb29zZSIsImNhdGVnb3JpZXNTY2hlbWEiLCJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidHJpbSIsInRpbWVzdGFtcHMiLCJDYXRlZ29yaWVzIiwibW9kZWxzIiwiY2F0ZWdvcmllcyIsIm1vZGVsIiwibW9uZ29vc2VfZGVsZXRlIiwicmVxdWlyZSIsInByb2R1Y3RTY2hlbWEiLCJ0aXRsZSIsInByaWNlT3JpZ2luIiwiTnVtYmVyIiwicHJpY2VTYWxlIiwiZGVzY3JpcHRpb24iLCJjb250ZW50IiwiY2F0ZWdvcnkiLCJpbWFnZXMiLCJBcnJheSIsInNpemVzIiwiZGVmYXVsdCIsImNvbG9ycyIsImluU3RvY2siLCJzb2xkIiwicGx1Z2luIiwib3ZlcnJpZGVNZXRob2RzIiwiaW5kZXgiLCJQcm9kdWN0IiwicHJvZHVjdCIsInVzZXJTY2hlbWEiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwiQm9vbGVhbiIsImF2YXRhciIsImNvbm5lY3REQiIsIm1ldGhvZCIsImRlbGV0ZUNhdGVnb3J5IiwidXBkYXRlQ2F0ZWdvcnkiLCJyZXN1bHQiLCJzdGF0dXMiLCJxdWVyeSIsInByb2R1Y3RzIiwiZmluZFdpdGhEZWxldGVkIiwicHJvZHVjdHNDb250YWluQ290ZWdvcnkiLCJmaWx0ZXIiLCJsZW5ndGgiLCJmaW5kQnlJZEFuZERlbGV0ZSIsIm1zZyIsIm1lc3NhZ2UiLCJib2R5IiwibmV3Q2F0ZWdvcnkiLCJmaW5kQnlJZEFuZFVwZGF0ZSIsIl9kb2MiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsIk1PTkdPREJfVVJMIiwidXNlQ3JlYXRlSW5kZXgiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5Il0sInNvdXJjZVJvb3QiOiIifQ==