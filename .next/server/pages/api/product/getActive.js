"use strict";
(() => {
var exports = {};
exports.id = "pages/api/product/getActive";
exports.ids = ["pages/api/product/getActive"];
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

/***/ "./pages/api/product/getActive.js":
/*!****************************************!*\
  !*** ./pages/api/product/getActive.js ***!
  \****************************************/
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
    const features = new ___WEBPACK_IMPORTED_MODULE_2__.APIfeatures(_models_productModel__WEBPACK_IMPORTED_MODULE_1__.default.find({}), req.query).filtering().sorting();
    const limit = parseInt(req.query.limit, 10) || 10;
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/product/getActive.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBWTtBQUNiTCxJQUFBQSxHQUFHLENBQUMyRSxNQUFKLENBQVcsR0FBWCxFQUFnQnZFLElBQWhCLENBQXFCO0FBQUVDLE1BQUFBLEdBQUcsRUFBRUEsR0FBRyxDQUFDdUU7QUFBWCxLQUFyQjtBQUNBO0FBQ0QsQ0FyQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRUE7O0FBRUEsTUFBTXJCLFNBQVMsR0FBRyxNQUFNO0FBQ3ZCLE1BQUl0QywyRUFBSixFQUF3QztBQUN2QytFLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0FBQ0E7QUFDQTs7QUFDRGhGLEVBQUFBLHVEQUFBLENBQ0NULE9BQU8sQ0FBQ0MsR0FBUixDQUFZMEYsV0FEYixFQUVDO0FBQ0NDLElBQUFBLGNBQWMsRUFBRSxJQURqQjtBQUVDQyxJQUFBQSxnQkFBZ0IsRUFBRSxLQUZuQjtBQUdDQyxJQUFBQSxlQUFlLEVBQUUsSUFIbEI7QUFJQ0MsSUFBQUEsa0JBQWtCLEVBQUU7QUFKckIsR0FGRCxFQVFDbEcsR0FBRyxJQUFJO0FBQ04sUUFBSUEsR0FBSixFQUFTLE1BQU1BLEdBQU47QUFDVDJGLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0EsR0FYRjtBQWFBRCxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNBLENBbkJEOztBQXFCQSxpRUFBZTFDLFNBQWY7Ozs7Ozs7Ozs7QUN2QkE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhLy4vbWlkZGxld2FyZS9hdXRoLmpzIiwid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS8uL21vZGVscy9wcm9kdWN0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhLy4vbW9kZWxzL3VzZXJNb2RlbC5qcyIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvLi9wYWdlcy9hcGkvcHJvZHVjdC9nZXRBY3RpdmUuanMiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhLy4vcGFnZXMvYXBpL3Byb2R1Y3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhLy4vdXRpbHMvY29ubmVjdERCLmpzIiwid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhL2V4dGVybmFsIFwibW9uZ29vc2UtZGVsZXRlXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi9tb2RlbHMvdXNlck1vZGVsJztcclxuXHJcbmNvbnN0IGF1dGggPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuXHRjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb247XHJcblxyXG5cdGlmICghdG9rZW4pIHJldHVybiByZXMuanNvbih7IGVycjogJ1jDoWMgdGjhu7FjIGtow7RuZyBraOG6oyBk4bulbmcuJyB9KTtcclxuXHJcblx0Y29uc3QgZGVjb2RlZCA9IGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkFDQ0VTU19UT0tFTl9TRUNSRVQpO1xyXG5cdGlmICghZGVjb2RlZCkgcmV0dXJuIHJlcy5qc29uKHsgZXJyOiAnWMOhYyB0aOG7sWMgdGjhuqV0IGLhuqFpLicgfSk7XHJcblxyXG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBfaWQ6IGRlY29kZWQuaWQgfSk7XHJcblx0cmV0dXJuIHsgaWQ6IHVzZXIuX2lkLCByb2xlOiB1c2VyLnJvbGUsIHJvb3Q6IHVzZXIucm9vdCB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0aDtcclxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuY29uc3QgbW9uZ29vc2VfZGVsZXRlID0gcmVxdWlyZSgnbW9uZ29vc2UtZGVsZXRlJyk7XHJcblxyXG5jb25zdCBwcm9kdWN0U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuXHR7XHJcblx0XHR0aXRsZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB0cmltOiB0cnVlIH0sXHJcblx0XHRwcmljZU9yaWdpbjogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlLCB0cmltOiB0cnVlIH0sXHJcblx0XHRwcmljZVNhbGU6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSwgdHJpbTogdHJ1ZSB9LFxyXG5cdFx0ZGVzY3JpcHRpb246IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG5cdFx0Y29udGVudDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcblx0XHRjYXRlZ29yeTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcblx0XHRpbWFnZXM6IHsgdHlwZTogQXJyYXksIHJlcXVpcmVkOiB0cnVlIH0sXHJcblx0XHRzaXplczogeyB0eXBlOiBBcnJheSwgZGVmYXVsdDogMCB9LFxyXG5cdFx0Y29sb3JzOiB7IHR5cGU6IEFycmF5LCBkZWZhdWx0OiAwIH0sXHJcblx0XHRpblN0b2NrOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMCB9LFxyXG5cdFx0c29sZDogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDAgfSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdHRpbWVzdGFtcHM6IHRydWUsXHJcblx0fVxyXG4pO1xyXG5cclxucHJvZHVjdFNjaGVtYS5wbHVnaW4obW9uZ29vc2VfZGVsZXRlLCB7IG92ZXJyaWRlTWV0aG9kczogdHJ1ZSB9KTtcclxucHJvZHVjdFNjaGVtYS5pbmRleCh7IHRpdGxlOiAndGV4dCcgfSk7XHJcbmNvbnN0IFByb2R1Y3QgPSBtb25nb29zZS5tb2RlbHMucHJvZHVjdCB8fCBtb25nb29zZS5tb2RlbCgncHJvZHVjdCcsIHByb2R1Y3RTY2hlbWEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcclxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG5cdHtcclxuXHRcdG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG5cdFx0ZW1haWw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXHJcblx0XHRwYXNzd29yZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcblx0XHRyb2xlOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJ3VzZXInIH0sXHJcblx0XHRyb290OiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH0sXHJcblx0XHRhdmF0YXI6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnL2ltYWdlcy9hdmF0YXJkZWZhdWx0LnBuZycgfSxcclxuXHRcdHR5cGU6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAncmVnaXRlcicgfSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdHRpbWVzdGFtcHM6IHRydWUsXHJcblx0fVxyXG4pO1xyXG5cclxuY29uc3QgVXNlciA9IG1vbmdvb3NlLm1vZGVscy51c2VyIHx8IG1vbmdvb3NlLm1vZGVsKCd1c2VyJywgdXNlclNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tYW5vbnltb3VzLWRlZmF1bHQtZXhwb3J0ICovXHJcbmltcG9ydCBjb25uZWN0REIgZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29ubmVjdERCJztcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3Byb2R1Y3RNb2RlbCc7XHJcbmltcG9ydCB7IEFQSWZlYXR1cmVzIH0gZnJvbSAnLic7XHJcblxyXG5jb25uZWN0REIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cdHN3aXRjaCAocmVxLm1ldGhvZCkge1xyXG5cdFx0Y2FzZSAnR0VUJzpcclxuXHRcdFx0YXdhaXQgZ2V0UHJvZHVjdHMocmVxLCByZXMpO1xyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCBnZXRQcm9kdWN0cyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBmZWF0dXJlcyA9IG5ldyBBUElmZWF0dXJlcyhQcm9kdWN0LmZpbmQoe30pLCByZXEucXVlcnkpLmZpbHRlcmluZygpLnNvcnRpbmcoKTtcclxuXHJcblx0XHRjb25zdCBsaW1pdCA9IHBhcnNlSW50KHJlcS5xdWVyeS5saW1pdCwgMTApIHx8IDEwO1xyXG5cdFx0Y29uc3QgcGFnZSA9IHBhcnNlSW50KHJlcS5xdWVyeS5wYWdlLCAxMCkgfHwgMTtcclxuXHRcdGNvbnN0IHN0YXJ0SW5kZXggPSAocGFnZSAtIDEpICogbGltaXQ7XHJcblx0XHRjb25zdCBlbmRJbmRleCA9IHBhZ2UgKiBsaW1pdDtcclxuXHJcblx0XHRjb25zdCBwcm9kdWN0c1Jlc3VsdCA9IGF3YWl0IGZlYXR1cmVzLnF1ZXJ5O1xyXG5cdFx0Y29uc3QgcHJvZHVjdHMgPSBwcm9kdWN0c1Jlc3VsdC5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleCk7XHJcblxyXG5cdFx0cmVzLmpzb24oeyBtc2c6ICdTdWNjZXNzJywgcmVzdWx0OiBwcm9kdWN0c1Jlc3VsdC5sZW5ndGgsIHByb2R1Y3RzIH0pO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0cmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnI6IGVyci5tZXNzYWdlIH0pO1xyXG5cdH1cclxufTtcclxuIiwiaW1wb3J0IGNvbm5lY3REQiBmcm9tICcuLi8uLi8uLi91dGlscy9jb25uZWN0REInO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuLi8uLi8uLi9tb2RlbHMvcHJvZHVjdE1vZGVsJztcclxuaW1wb3J0IGF1dGggZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS9hdXRoJztcclxuXHJcbmNvbm5lY3REQigpO1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1hbm9ueW1vdXMtZGVmYXVsdC1leHBvcnRcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcblx0c3dpdGNoIChyZXEubWV0aG9kKSB7XHJcblx0XHRjYXNlICdHRVQnOlxyXG5cdFx0XHRhd2FpdCBnZXRQcm9kdWN0cyhyZXEsIHJlcyk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAnUE9TVCc6XHJcblx0XHRcdGF3YWl0IGNyZWF0ZVByb2R1Y3QocmVxLCByZXMpO1xyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgQVBJZmVhdHVyZXMge1xyXG5cdGNvbnN0cnVjdG9yKHF1ZXJ5LCBxdWVyeVN0cmluZykge1xyXG5cdFx0dGhpcy5xdWVyeSA9IHF1ZXJ5O1xyXG5cdFx0dGhpcy5xdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nO1xyXG5cdH1cclxuXHJcblx0ZmlsdGVyaW5nKCkge1xyXG5cdFx0Y29uc3QgcXVlcnlPYmogPSB7IC4uLnRoaXMucXVlcnlTdHJpbmcgfTtcclxuXHJcblx0XHRjb25zdCBleGNsdWRlRmllbGRzID0gWydwYWdlJywgJ3NvcnQnLCAnbGltaXQnXTtcclxuXHRcdGV4Y2x1ZGVGaWVsZHMuZm9yRWFjaChlbCA9PiBkZWxldGUgcXVlcnlPYmpbZWxdKTtcclxuXHJcblx0XHRpZiAocXVlcnlPYmouY2F0ZWdvcnkgIT09ICdhbGwnKSB0aGlzLnF1ZXJ5LmZpbmQoeyBjYXRlZ29yeTogcXVlcnlPYmouY2F0ZWdvcnkgfSk7XHJcblx0XHRpZiAocXVlcnlPYmoudGl0bGUgIT09ICdhbGwnKSB0aGlzLnF1ZXJ5LmZpbmQoeyAkdGV4dDogeyAkc2VhcmNoOiBxdWVyeU9iai50aXRsZSB9IH0pO1xyXG5cdFx0dGhpcy5xdWVyeS5maW5kKCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdHNvcnRpbmcoKSB7XHJcblx0XHRpZiAodGhpcy5xdWVyeVN0cmluZy5zb3J0KSB7XHJcblx0XHRcdGNvbnN0IHNvcnRCeSA9IHRoaXMucXVlcnlTdHJpbmcuc29ydC5zcGxpdCgnLCcpLmpvaW4oJycpO1xyXG5cdFx0XHR0aGlzLnF1ZXJ5ID0gdGhpcy5xdWVyeS5zb3J0KHNvcnRCeSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnF1ZXJ5ID0gdGhpcy5xdWVyeS5zb3J0KCctY3JlYXRlZEF0Jyk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBnZXRQcm9kdWN0cyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBmZWF0dXJlcyA9IG5ldyBBUElmZWF0dXJlcyhQcm9kdWN0LmZpbmQoe30pLCByZXEucXVlcnkpLmZpbHRlcmluZygpLnNvcnRpbmcoKTtcclxuXHJcblx0XHRjb25zdCBsaW1pdCA9IHBhcnNlSW50KHJlcS5xdWVyeS5saW1pdCwgMTApIHx8IDg7XHJcblx0XHRjb25zdCBwYWdlID0gcGFyc2VJbnQocmVxLnF1ZXJ5LnBhZ2UsIDEwKSB8fCAxO1xyXG5cdFx0Y29uc3Qgc3RhcnRJbmRleCA9IChwYWdlIC0gMSkgKiBsaW1pdDtcclxuXHRcdGNvbnN0IGVuZEluZGV4ID0gcGFnZSAqIGxpbWl0O1xyXG5cclxuXHRcdGNvbnN0IHByb2R1Y3RzUmVzdWx0ID0gYXdhaXQgZmVhdHVyZXMucXVlcnk7XHJcblx0XHRjb25zdCBwcm9kdWN0cyA9IHByb2R1Y3RzUmVzdWx0LnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcclxuXHJcblx0XHRyZXMuanNvbih7IG1zZzogJ1N1Y2Nlc3MnLCByZXN1bHQ6IHByb2R1Y3RzUmVzdWx0Lmxlbmd0aCwgcHJvZHVjdHMgfSk7XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRyZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycjogZXJyLm1lc3NhZ2UgfSk7XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlUHJvZHVjdCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBhdXRoKHJlcSwgcmVzKTtcclxuXHRcdGlmIChyZXN1bHQucm9sZSAhPT0gJ2FkbWluJykgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5qc29uKHsgZXJyOiAnQuG6oW4ga2jDtG5nIMSR4bunIHF1eeG7gW4gY2jhu4luaCBz4butYSBz4bqjbiBwaOG6qW0uJyB9KTtcclxuXHJcblx0XHRjb25zdCB7IHRpdGxlLCBwcmljZU9yaWdpbiwgcHJpY2VTYWxlLCBpblN0b2NrLCBkZXNjcmlwdGlvbiwgY29udGVudCwgY2F0ZWdvcnksIGltYWdlcyB9ID0gcmVxLmJvZHk7XHJcblxyXG5cdFx0aWYgKFxyXG5cdFx0XHQhdGl0bGUgfHxcclxuXHRcdFx0IXByaWNlT3JpZ2luIHx8XHJcblx0XHRcdCFwcmljZVNhbGUgfHxcclxuXHRcdFx0IWluU3RvY2sgfHxcclxuXHRcdFx0IWRlc2NyaXB0aW9uIHx8XHJcblx0XHRcdCFjb250ZW50IHx8XHJcblx0XHRcdGNhdGVnb3J5ID09PSAnYWxsJyB8fFxyXG5cdFx0XHRjYXRlZ29yeSA9PT0gJycgfHxcclxuXHRcdFx0aW1hZ2VzLmxlbmd0aCA9PT0gMFxyXG5cdFx0KVxyXG5cdFx0XHRyZXR1cm4gcmVzLmpzb24oeyBlcnI6ICdWdWkgbMOybmcgxJFp4buBbiB04bqldCBj4bqjIGPDoWMgdHLGsOG7nW5nLicgfSk7XHJcblxyXG5cdFx0Y29uc3QgbmV3UHJvZHVjdCA9IG5ldyBQcm9kdWN0KHtcclxuXHRcdFx0dGl0bGU6IHRpdGxlLnRvTG93ZXJDYXNlKCksXHJcblx0XHRcdHByaWNlT3JpZ2luLFxyXG5cdFx0XHRwcmljZVNhbGUsXHJcblx0XHRcdGluU3RvY2ssXHJcblx0XHRcdGRlc2NyaXB0aW9uLFxyXG5cdFx0XHRjb250ZW50LFxyXG5cdFx0XHRjYXRlZ29yeSxcclxuXHRcdFx0aW1hZ2VzLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0YXdhaXQgbmV3UHJvZHVjdC5zYXZlKCk7XHJcblxyXG5cdFx0cmVzLmpzb24oeyBtc2c6ICdU4bqhbyBz4bqjbiBwaOG6qW0gbeG7m2kgdGjDoG5oIGPDtG5nIScsIG5ld1Byb2R1Y3QgfSk7XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRyZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycjogZXJyLm1lc3NhZ2UgfSk7XHJcblx0fVxyXG59O1xyXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgY29ubmVjdERCID0gKCkgPT4ge1xyXG5cdGlmIChtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKSB7XHJcblx0XHRjb25zb2xlLmxvZygnQWxyZWFkeSBjb25uZWN0ZWQuJyk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdG1vbmdvb3NlLmNvbm5lY3QoXHJcblx0XHRwcm9jZXNzLmVudi5NT05HT0RCX1VSTCxcclxuXHRcdHtcclxuXHRcdFx0dXNlQ3JlYXRlSW5kZXg6IHRydWUsXHJcblx0XHRcdHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxyXG5cdFx0XHR1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcblx0XHRcdHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuXHRcdH0sXHJcblx0XHRlcnIgPT4ge1xyXG5cdFx0XHRpZiAoZXJyKSB0aHJvdyBlcnI7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gbW9uZ29kYi4nKTtcclxuXHRcdH1cclxuXHQpO1xyXG5cdGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gbW9uZ29kYi4nKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlLWRlbGV0ZVwiKTsiXSwibmFtZXMiOlsiand0IiwiVXNlciIsImF1dGgiLCJyZXEiLCJyZXMiLCJ0b2tlbiIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwianNvbiIsImVyciIsImRlY29kZWQiLCJ2ZXJpZnkiLCJwcm9jZXNzIiwiZW52IiwiQUNDRVNTX1RPS0VOX1NFQ1JFVCIsInVzZXIiLCJmaW5kT25lIiwiX2lkIiwiaWQiLCJyb2xlIiwicm9vdCIsIm1vbmdvb3NlIiwibW9uZ29vc2VfZGVsZXRlIiwicmVxdWlyZSIsInByb2R1Y3RTY2hlbWEiLCJTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInRyaW0iLCJwcmljZU9yaWdpbiIsIk51bWJlciIsInByaWNlU2FsZSIsImRlc2NyaXB0aW9uIiwiY29udGVudCIsImNhdGVnb3J5IiwiaW1hZ2VzIiwiQXJyYXkiLCJzaXplcyIsImRlZmF1bHQiLCJjb2xvcnMiLCJpblN0b2NrIiwic29sZCIsInRpbWVzdGFtcHMiLCJwbHVnaW4iLCJvdmVycmlkZU1ldGhvZHMiLCJpbmRleCIsIlByb2R1Y3QiLCJtb2RlbHMiLCJwcm9kdWN0IiwibW9kZWwiLCJ1c2VyU2NoZW1hIiwibmFtZSIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJCb29sZWFuIiwiYXZhdGFyIiwiY29ubmVjdERCIiwiQVBJZmVhdHVyZXMiLCJtZXRob2QiLCJnZXRQcm9kdWN0cyIsImZlYXR1cmVzIiwiZmluZCIsInF1ZXJ5IiwiZmlsdGVyaW5nIiwic29ydGluZyIsImxpbWl0IiwicGFyc2VJbnQiLCJwYWdlIiwic3RhcnRJbmRleCIsImVuZEluZGV4IiwicHJvZHVjdHNSZXN1bHQiLCJwcm9kdWN0cyIsInNsaWNlIiwibXNnIiwicmVzdWx0IiwibGVuZ3RoIiwic3RhdHVzIiwibWVzc2FnZSIsImNyZWF0ZVByb2R1Y3QiLCJjb25zdHJ1Y3RvciIsInF1ZXJ5U3RyaW5nIiwicXVlcnlPYmoiLCJleGNsdWRlRmllbGRzIiwiZm9yRWFjaCIsImVsIiwiJHRleHQiLCIkc2VhcmNoIiwic29ydCIsInNvcnRCeSIsInNwbGl0Iiwiam9pbiIsImJvZHkiLCJuZXdQcm9kdWN0IiwidG9Mb3dlckNhc2UiLCJzYXZlIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJNT05HT0RCX1VSTCIsInVzZUNyZWF0ZUluZGV4IiwidXNlRmluZEFuZE1vZGlmeSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSJdLCJzb3VyY2VSb290IjoiIn0=