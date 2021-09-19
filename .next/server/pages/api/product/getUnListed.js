"use strict";
(() => {
var exports = {};
exports.id = "pages/api/product/getUnListed";
exports.ids = ["pages/api/product/getUnListed"];
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

/***/ "./pages/api/product/getUnListed.js":
/*!******************************************!*\
  !*** ./pages/api/product/getUnListed.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ "./utils/connectDB.js");
/* harmony import */ var _models_productModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/productModel */ "./models/productModel.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./pages/api/product/index.js");
/* eslint-disable import/no-anonymous-default-export */



(0,_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__.default)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  switch (req.method) {
    case 'GET':
      await getProducts(req, res);
      break;
  }
});

const getProducts = async (req, res) => {
  try {
    const features = new ___WEBPACK_IMPORTED_MODULE_2__.APIfeatures(_models_productModel__WEBPACK_IMPORTED_MODULE_1__.default.findDeleted({}), req.query).filtering().sorting();
    const limit = parseInt(req.query.limit, 10) || 20;
    const page = parseInt(req.query.page, 10) || 1;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const productsResult = await features.query;
    const products = productsResult.slice(startIndex, endIndex);
    res.json({
      msg: 'Success',
      result: productsResult.length,
      products
    });
  } catch (err) {
    res.status(500).json({
      err: err.message
    });
  }
};

/***/ }),

/***/ "./pages/api/product/index.js":
/*!************************************!*\
  !*** ./pages/api/product/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "APIfeatures": () => (/* binding */ APIfeatures)
/* harmony export */ });
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ "./utils/connectDB.js");
/* harmony import */ var _models_productModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/productModel */ "./models/productModel.js");
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../middleware/auth */ "./middleware/auth.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




(0,_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__.default)(); // eslint-disable-next-line import/no-anonymous-default-export

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  switch (req.method) {
    case 'GET':
      await getProducts(req, res);
      break;

    case 'POST':
      await createProduct(req, res);
      break;
  }
});
class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filtering() {
    const queryObj = _objectSpread({}, this.queryString);

    const excludeFields = ['page', 'sort', 'limit'];
    excludeFields.forEach(el => delete queryObj[el]);
    if (queryObj.category !== 'all') this.query.find({
      category: queryObj.category
    });
    if (queryObj.title !== 'all') this.query.find({
      $text: {
        $search: queryObj.title
      }
    });
    this.query.find();
    return this;
  }

  sorting() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join('');
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-createdAt');
    }

    return this;
  }

}

const getProducts = async (req, res) => {
  try {
    const features = new APIfeatures(_models_productModel__WEBPACK_IMPORTED_MODULE_1__.default.find({}), req.query).filtering().sorting();
    const limit = parseInt(req.query.limit, 10) || 8;
    const page = parseInt(req.query.page, 10) || 1;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const productsResult = await features.query;
    const products = productsResult.slice(startIndex, endIndex);
    res.json({
      msg: 'Success',
      result: productsResult.length,
      products
    });
  } catch (err) {
    res.status(500).json({
      err: err.message
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const result = await (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_2__.default)(req, res);
    if (result.role !== 'admin') return res.status(403).json({
      err: 'Bạn không đủ quyền chỉnh sửa sản phẩm.'
    });
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
    if (!title || !priceOrigin || !priceSale || !inStock || !description || !content || category === 'all' || category === '' || images.length === 0) return res.json({
      err: 'Vui lòng điền tất cả các trường.'
    });
    const newProduct = new _models_productModel__WEBPACK_IMPORTED_MODULE_1__.default({
      title: title.toLowerCase(),
      priceOrigin,
      priceSale,
      inStock,
      description,
      content,
      category,
      images
    });
    await newProduct.save();
    res.json({
      msg: 'Tạo sản phẩm mới thành công!',
      newProduct
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/product/getUnListed.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RixHQUFQLEVBQVk7QUFDYkwsSUFBQUEsR0FBRyxDQUFDMkUsTUFBSixDQUFXLEdBQVgsRUFBZ0J2RSxJQUFoQixDQUFxQjtBQUFFQyxNQUFBQSxHQUFHLEVBQUVBLEdBQUcsQ0FBQ3VFO0FBQVgsS0FBckI7QUFDQTtBQUNELENBckNEOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEVBOztBQUVBLE1BQU1yQixTQUFTLEdBQUcsTUFBTTtBQUN2QixNQUFJdEMsMkVBQUosRUFBd0M7QUFDdkNnRixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtBQUNBO0FBQ0E7O0FBQ0RqRixFQUFBQSx1REFBQSxDQUNDVCxPQUFPLENBQUNDLEdBQVIsQ0FBWTJGLFdBRGIsRUFFQztBQUNDQyxJQUFBQSxjQUFjLEVBQUUsSUFEakI7QUFFQ0MsSUFBQUEsZ0JBQWdCLEVBQUUsS0FGbkI7QUFHQ0MsSUFBQUEsZUFBZSxFQUFFLElBSGxCO0FBSUNDLElBQUFBLGtCQUFrQixFQUFFO0FBSnJCLEdBRkQsRUFRQ25HLEdBQUcsSUFBSTtBQUNOLFFBQUlBLEdBQUosRUFBUyxNQUFNQSxHQUFOO0FBQ1Q0RixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNBLEdBWEY7QUFhQUQsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFDQSxDQW5CRDs7QUFxQkEsaUVBQWUzQyxTQUFmOzs7Ozs7Ozs7O0FDdkJBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS8uL21pZGRsZXdhcmUvYXV0aC5qcyIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvLi9tb2RlbHMvcHJvZHVjdE1vZGVsLmpzIiwid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS8uL21vZGVscy91c2VyTW9kZWwuanMiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhLy4vcGFnZXMvYXBpL3Byb2R1Y3QvZ2V0VW5MaXN0ZWQuanMiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhLy4vcGFnZXMvYXBpL3Byb2R1Y3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhLy4vdXRpbHMvY29ubmVjdERCLmpzIiwid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhL2V4dGVybmFsIFwibW9uZ29vc2UtZGVsZXRlXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi9tb2RlbHMvdXNlck1vZGVsJztcclxuXHJcbmNvbnN0IGF1dGggPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuXHRjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb247XHJcblxyXG5cdGlmICghdG9rZW4pIHJldHVybiByZXMuanNvbih7IGVycjogJ1jDoWMgdGjhu7FjIGtow7RuZyBraOG6oyBk4bulbmcuJyB9KTtcclxuXHJcblx0Y29uc3QgZGVjb2RlZCA9IGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkFDQ0VTU19UT0tFTl9TRUNSRVQpO1xyXG5cdGlmICghZGVjb2RlZCkgcmV0dXJuIHJlcy5qc29uKHsgZXJyOiAnWMOhYyB0aOG7sWMgdGjhuqV0IGLhuqFpLicgfSk7XHJcblxyXG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBfaWQ6IGRlY29kZWQuaWQgfSk7XHJcblx0cmV0dXJuIHsgaWQ6IHVzZXIuX2lkLCByb2xlOiB1c2VyLnJvbGUsIHJvb3Q6IHVzZXIucm9vdCB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0aDtcclxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuY29uc3QgbW9uZ29vc2VfZGVsZXRlID0gcmVxdWlyZSgnbW9uZ29vc2UtZGVsZXRlJyk7XHJcblxyXG5jb25zdCBwcm9kdWN0U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuXHR7XHJcblx0XHR0aXRsZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB0cmltOiB0cnVlIH0sXHJcblx0XHRwcmljZU9yaWdpbjogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlLCB0cmltOiB0cnVlIH0sXHJcblx0XHRwcmljZVNhbGU6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSwgdHJpbTogdHJ1ZSB9LFxyXG5cdFx0ZGVzY3JpcHRpb246IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG5cdFx0Y29udGVudDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcblx0XHRjYXRlZ29yeTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcblx0XHRpbWFnZXM6IHsgdHlwZTogQXJyYXksIHJlcXVpcmVkOiB0cnVlIH0sXHJcblx0XHRzaXplczogeyB0eXBlOiBBcnJheSwgZGVmYXVsdDogMCB9LFxyXG5cdFx0Y29sb3JzOiB7IHR5cGU6IEFycmF5LCBkZWZhdWx0OiAwIH0sXHJcblx0XHRpblN0b2NrOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMCB9LFxyXG5cdFx0c29sZDogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDAgfSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdHRpbWVzdGFtcHM6IHRydWUsXHJcblx0fVxyXG4pO1xyXG5cclxucHJvZHVjdFNjaGVtYS5wbHVnaW4obW9uZ29vc2VfZGVsZXRlLCB7IG92ZXJyaWRlTWV0aG9kczogdHJ1ZSB9KTtcclxucHJvZHVjdFNjaGVtYS5pbmRleCh7IHRpdGxlOiAndGV4dCcgfSk7XHJcbmNvbnN0IFByb2R1Y3QgPSBtb25nb29zZS5tb2RlbHMucHJvZHVjdCB8fCBtb25nb29zZS5tb2RlbCgncHJvZHVjdCcsIHByb2R1Y3RTY2hlbWEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcclxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG5cdHtcclxuXHRcdG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG5cdFx0ZW1haWw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXHJcblx0XHRwYXNzd29yZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcblx0XHRyb2xlOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJ3VzZXInIH0sXHJcblx0XHRyb290OiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH0sXHJcblx0XHRhdmF0YXI6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnL2ltYWdlcy9hdmF0YXJkZWZhdWx0LnBuZycgfSxcclxuXHRcdHR5cGU6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAncmVnaXRlcicgfSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdHRpbWVzdGFtcHM6IHRydWUsXHJcblx0fVxyXG4pO1xyXG5cclxuY29uc3QgVXNlciA9IG1vbmdvb3NlLm1vZGVscy51c2VyIHx8IG1vbmdvb3NlLm1vZGVsKCd1c2VyJywgdXNlclNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tYW5vbnltb3VzLWRlZmF1bHQtZXhwb3J0ICovXHJcbmltcG9ydCBjb25uZWN0REIgZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29ubmVjdERCJztcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3Byb2R1Y3RNb2RlbCc7XHJcbmltcG9ydCB7IEFQSWZlYXR1cmVzIH0gZnJvbSAnLic7XHJcblxyXG5jb25uZWN0REIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cdHN3aXRjaCAocmVxLm1ldGhvZCkge1xyXG5cdFx0Y2FzZSAnR0VUJzpcclxuXHRcdFx0YXdhaXQgZ2V0UHJvZHVjdHMocmVxLCByZXMpO1xyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCBnZXRQcm9kdWN0cyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBmZWF0dXJlcyA9IG5ldyBBUElmZWF0dXJlcyhQcm9kdWN0LmZpbmREZWxldGVkKHt9KSwgcmVxLnF1ZXJ5KS5maWx0ZXJpbmcoKS5zb3J0aW5nKCk7XHJcblxyXG5cdFx0Y29uc3QgbGltaXQgPSBwYXJzZUludChyZXEucXVlcnkubGltaXQsIDEwKSB8fCAyMDtcclxuXHRcdGNvbnN0IHBhZ2UgPSBwYXJzZUludChyZXEucXVlcnkucGFnZSwgMTApIHx8IDE7XHJcblx0XHRjb25zdCBzdGFydEluZGV4ID0gKHBhZ2UgLSAxKSAqIGxpbWl0O1xyXG5cdFx0Y29uc3QgZW5kSW5kZXggPSBwYWdlICogbGltaXQ7XHJcblxyXG5cdFx0Y29uc3QgcHJvZHVjdHNSZXN1bHQgPSBhd2FpdCBmZWF0dXJlcy5xdWVyeTtcclxuXHRcdGNvbnN0IHByb2R1Y3RzID0gcHJvZHVjdHNSZXN1bHQuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xyXG5cclxuXHRcdHJlcy5qc29uKHsgbXNnOiAnU3VjY2VzcycsIHJlc3VsdDogcHJvZHVjdHNSZXN1bHQubGVuZ3RoLCBwcm9kdWN0cyB9KTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyOiBlcnIubWVzc2FnZSB9KTtcclxuXHR9XHJcbn07XHJcbiIsImltcG9ydCBjb25uZWN0REIgZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29ubmVjdERCJztcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3Byb2R1Y3RNb2RlbCc7XHJcbmltcG9ydCBhdXRoIGZyb20gJy4uLy4uLy4uL21pZGRsZXdhcmUvYXV0aCc7XHJcblxyXG5jb25uZWN0REIoKTtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tYW5vbnltb3VzLWRlZmF1bHQtZXhwb3J0XHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cdHN3aXRjaCAocmVxLm1ldGhvZCkge1xyXG5cdFx0Y2FzZSAnR0VUJzpcclxuXHRcdFx0YXdhaXQgZ2V0UHJvZHVjdHMocmVxLCByZXMpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgJ1BPU1QnOlxyXG5cdFx0XHRhd2FpdCBjcmVhdGVQcm9kdWN0KHJlcSwgcmVzKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEFQSWZlYXR1cmVzIHtcclxuXHRjb25zdHJ1Y3RvcihxdWVyeSwgcXVlcnlTdHJpbmcpIHtcclxuXHRcdHRoaXMucXVlcnkgPSBxdWVyeTtcclxuXHRcdHRoaXMucXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZztcclxuXHR9XHJcblxyXG5cdGZpbHRlcmluZygpIHtcclxuXHRcdGNvbnN0IHF1ZXJ5T2JqID0geyAuLi50aGlzLnF1ZXJ5U3RyaW5nIH07XHJcblxyXG5cdFx0Y29uc3QgZXhjbHVkZUZpZWxkcyA9IFsncGFnZScsICdzb3J0JywgJ2xpbWl0J107XHJcblx0XHRleGNsdWRlRmllbGRzLmZvckVhY2goZWwgPT4gZGVsZXRlIHF1ZXJ5T2JqW2VsXSk7XHJcblxyXG5cdFx0aWYgKHF1ZXJ5T2JqLmNhdGVnb3J5ICE9PSAnYWxsJykgdGhpcy5xdWVyeS5maW5kKHsgY2F0ZWdvcnk6IHF1ZXJ5T2JqLmNhdGVnb3J5IH0pO1xyXG5cdFx0aWYgKHF1ZXJ5T2JqLnRpdGxlICE9PSAnYWxsJykgdGhpcy5xdWVyeS5maW5kKHsgJHRleHQ6IHsgJHNlYXJjaDogcXVlcnlPYmoudGl0bGUgfSB9KTtcclxuXHRcdHRoaXMucXVlcnkuZmluZCgpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRzb3J0aW5nKCkge1xyXG5cdFx0aWYgKHRoaXMucXVlcnlTdHJpbmcuc29ydCkge1xyXG5cdFx0XHRjb25zdCBzb3J0QnkgPSB0aGlzLnF1ZXJ5U3RyaW5nLnNvcnQuc3BsaXQoJywnKS5qb2luKCcnKTtcclxuXHRcdFx0dGhpcy5xdWVyeSA9IHRoaXMucXVlcnkuc29ydChzb3J0QnkpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5xdWVyeSA9IHRoaXMucXVlcnkuc29ydCgnLWNyZWF0ZWRBdCcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxufVxyXG5cclxuY29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgZmVhdHVyZXMgPSBuZXcgQVBJZmVhdHVyZXMoUHJvZHVjdC5maW5kKHt9KSwgcmVxLnF1ZXJ5KS5maWx0ZXJpbmcoKS5zb3J0aW5nKCk7XHJcblxyXG5cdFx0Y29uc3QgbGltaXQgPSBwYXJzZUludChyZXEucXVlcnkubGltaXQsIDEwKSB8fCA4O1xyXG5cdFx0Y29uc3QgcGFnZSA9IHBhcnNlSW50KHJlcS5xdWVyeS5wYWdlLCAxMCkgfHwgMTtcclxuXHRcdGNvbnN0IHN0YXJ0SW5kZXggPSAocGFnZSAtIDEpICogbGltaXQ7XHJcblx0XHRjb25zdCBlbmRJbmRleCA9IHBhZ2UgKiBsaW1pdDtcclxuXHJcblx0XHRjb25zdCBwcm9kdWN0c1Jlc3VsdCA9IGF3YWl0IGZlYXR1cmVzLnF1ZXJ5O1xyXG5cdFx0Y29uc3QgcHJvZHVjdHMgPSBwcm9kdWN0c1Jlc3VsdC5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleCk7XHJcblxyXG5cdFx0cmVzLmpzb24oeyBtc2c6ICdTdWNjZXNzJywgcmVzdWx0OiBwcm9kdWN0c1Jlc3VsdC5sZW5ndGgsIHByb2R1Y3RzIH0pO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0cmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnI6IGVyci5tZXNzYWdlIH0pO1xyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVByb2R1Y3QgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXV0aChyZXEsIHJlcyk7XHJcblx0XHRpZiAocmVzdWx0LnJvbGUgIT09ICdhZG1pbicpIHJldHVybiByZXMuc3RhdHVzKDQwMykuanNvbih7IGVycjogJ0LhuqFuIGtow7RuZyDEkeG7pyBxdXnhu4FuIGNo4buJbmggc+G7rWEgc+G6o24gcGjhuqltLicgfSk7XHJcblxyXG5cdFx0Y29uc3QgeyB0aXRsZSwgcHJpY2VPcmlnaW4sIHByaWNlU2FsZSwgaW5TdG9jaywgZGVzY3JpcHRpb24sIGNvbnRlbnQsIGNhdGVnb3J5LCBpbWFnZXMgfSA9IHJlcS5ib2R5O1xyXG5cclxuXHRcdGlmIChcclxuXHRcdFx0IXRpdGxlIHx8XHJcblx0XHRcdCFwcmljZU9yaWdpbiB8fFxyXG5cdFx0XHQhcHJpY2VTYWxlIHx8XHJcblx0XHRcdCFpblN0b2NrIHx8XHJcblx0XHRcdCFkZXNjcmlwdGlvbiB8fFxyXG5cdFx0XHQhY29udGVudCB8fFxyXG5cdFx0XHRjYXRlZ29yeSA9PT0gJ2FsbCcgfHxcclxuXHRcdFx0Y2F0ZWdvcnkgPT09ICcnIHx8XHJcblx0XHRcdGltYWdlcy5sZW5ndGggPT09IDBcclxuXHRcdClcclxuXHRcdFx0cmV0dXJuIHJlcy5qc29uKHsgZXJyOiAnVnVpIGzDsm5nIMSRaeG7gW4gdOG6pXQgY+G6oyBjw6FjIHRyxrDhu51uZy4nIH0pO1xyXG5cclxuXHRcdGNvbnN0IG5ld1Byb2R1Y3QgPSBuZXcgUHJvZHVjdCh7XHJcblx0XHRcdHRpdGxlOiB0aXRsZS50b0xvd2VyQ2FzZSgpLFxyXG5cdFx0XHRwcmljZU9yaWdpbixcclxuXHRcdFx0cHJpY2VTYWxlLFxyXG5cdFx0XHRpblN0b2NrLFxyXG5cdFx0XHRkZXNjcmlwdGlvbixcclxuXHRcdFx0Y29udGVudCxcclxuXHRcdFx0Y2F0ZWdvcnksXHJcblx0XHRcdGltYWdlcyxcclxuXHRcdH0pO1xyXG5cclxuXHRcdGF3YWl0IG5ld1Byb2R1Y3Quc2F2ZSgpO1xyXG5cclxuXHRcdHJlcy5qc29uKHsgbXNnOiAnVOG6oW8gc+G6o24gcGjhuqltIG3hu5tpIHRow6BuaCBjw7RuZyEnLCBuZXdQcm9kdWN0IH0pO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0cmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnI6IGVyci5tZXNzYWdlIH0pO1xyXG5cdH1cclxufTtcclxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IGNvbm5lY3REQiA9ICgpID0+IHtcclxuXHRpZiAobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSkge1xyXG5cdFx0Y29uc29sZS5sb2coJ0FscmVhZHkgY29ubmVjdGVkLicpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHRtb25nb29zZS5jb25uZWN0KFxyXG5cdFx0cHJvY2Vzcy5lbnYuTU9OR09EQl9VUkwsXHJcblx0XHR7XHJcblx0XHRcdHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxyXG5cdFx0XHR1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcclxuXHRcdFx0dXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG5cdFx0XHR1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcblx0XHR9LFxyXG5cdFx0ZXJyID0+IHtcclxuXHRcdFx0aWYgKGVycikgdGhyb3cgZXJyO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIG1vbmdvZGIuJyk7XHJcblx0XHR9XHJcblx0KTtcclxuXHRjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIG1vbmdvZGIuJyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZS1kZWxldGVcIik7Il0sIm5hbWVzIjpbImp3dCIsIlVzZXIiLCJhdXRoIiwicmVxIiwicmVzIiwidG9rZW4iLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsImpzb24iLCJlcnIiLCJkZWNvZGVkIiwidmVyaWZ5IiwicHJvY2VzcyIsImVudiIsIkFDQ0VTU19UT0tFTl9TRUNSRVQiLCJ1c2VyIiwiZmluZE9uZSIsIl9pZCIsImlkIiwicm9sZSIsInJvb3QiLCJtb25nb29zZSIsIm1vbmdvb3NlX2RlbGV0ZSIsInJlcXVpcmUiLCJwcm9kdWN0U2NoZW1hIiwiU2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ0cmltIiwicHJpY2VPcmlnaW4iLCJOdW1iZXIiLCJwcmljZVNhbGUiLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJjYXRlZ29yeSIsImltYWdlcyIsIkFycmF5Iiwic2l6ZXMiLCJkZWZhdWx0IiwiY29sb3JzIiwiaW5TdG9jayIsInNvbGQiLCJ0aW1lc3RhbXBzIiwicGx1Z2luIiwib3ZlcnJpZGVNZXRob2RzIiwiaW5kZXgiLCJQcm9kdWN0IiwibW9kZWxzIiwicHJvZHVjdCIsIm1vZGVsIiwidXNlclNjaGVtYSIsIm5hbWUiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwiQm9vbGVhbiIsImF2YXRhciIsImNvbm5lY3REQiIsIkFQSWZlYXR1cmVzIiwibWV0aG9kIiwiZ2V0UHJvZHVjdHMiLCJmZWF0dXJlcyIsImZpbmREZWxldGVkIiwicXVlcnkiLCJmaWx0ZXJpbmciLCJzb3J0aW5nIiwibGltaXQiLCJwYXJzZUludCIsInBhZ2UiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJwcm9kdWN0c1Jlc3VsdCIsInByb2R1Y3RzIiwic2xpY2UiLCJtc2ciLCJyZXN1bHQiLCJsZW5ndGgiLCJzdGF0dXMiLCJtZXNzYWdlIiwiY3JlYXRlUHJvZHVjdCIsImNvbnN0cnVjdG9yIiwicXVlcnlTdHJpbmciLCJxdWVyeU9iaiIsImV4Y2x1ZGVGaWVsZHMiLCJmb3JFYWNoIiwiZWwiLCJmaW5kIiwiJHRleHQiLCIkc2VhcmNoIiwic29ydCIsInNvcnRCeSIsInNwbGl0Iiwiam9pbiIsImJvZHkiLCJuZXdQcm9kdWN0IiwidG9Mb3dlckNhc2UiLCJzYXZlIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJNT05HT0RCX1VSTCIsInVzZUNyZWF0ZUluZGV4IiwidXNlRmluZEFuZE1vZGlmeSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSJdLCJzb3VyY2VSb290IjoiIn0=