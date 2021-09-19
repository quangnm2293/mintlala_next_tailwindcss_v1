"use strict";
(() => {
var exports = {};
exports.id = "pages/api/product/getListed";
exports.ids = ["pages/api/product/getListed"];
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

/***/ "./pages/api/product/getListed.js":
/*!****************************************!*\
  !*** ./pages/api/product/getListed.js ***!
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
    const features = new ___WEBPACK_IMPORTED_MODULE_2__.APIfeatures(_models_productModel__WEBPACK_IMPORTED_MODULE_1__.default.findWithDeleted({}), req.query).filtering().sorting();
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/product/getListed.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBUCxFQUFZO0FBQ2JMLElBQUFBLEdBQUcsQ0FBQzJFLE1BQUosQ0FBVyxHQUFYLEVBQWdCdkUsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsR0FBRyxFQUFFQSxHQUFHLENBQUN1RTtBQUFYLEtBQXJCO0FBQ0E7QUFDRCxDQXJDRDs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFQTs7QUFFQSxNQUFNckIsU0FBUyxHQUFHLE1BQU07QUFDdkIsTUFBSXRDLDJFQUFKLEVBQXdDO0FBQ3ZDZ0YsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7QUFDQTtBQUNBOztBQUNEakYsRUFBQUEsdURBQUEsQ0FDQ1QsT0FBTyxDQUFDQyxHQUFSLENBQVkyRixXQURiLEVBRUM7QUFDQ0MsSUFBQUEsY0FBYyxFQUFFLElBRGpCO0FBRUNDLElBQUFBLGdCQUFnQixFQUFFLEtBRm5CO0FBR0NDLElBQUFBLGVBQWUsRUFBRSxJQUhsQjtBQUlDQyxJQUFBQSxrQkFBa0IsRUFBRTtBQUpyQixHQUZELEVBUUNuRyxHQUFHLElBQUk7QUFDTixRQUFJQSxHQUFKLEVBQVMsTUFBTUEsR0FBTjtBQUNUNEYsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFDQSxHQVhGO0FBYUFELEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0EsQ0FuQkQ7O0FBcUJBLGlFQUFlM0MsU0FBZjs7Ozs7Ozs7OztBQ3ZCQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvLi9taWRkbGV3YXJlL2F1dGguanMiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhLy4vbW9kZWxzL3Byb2R1Y3RNb2RlbC5qcyIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvLi9tb2RlbHMvdXNlck1vZGVsLmpzIiwid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS8uL3BhZ2VzL2FwaS9wcm9kdWN0L2dldExpc3RlZC5qcyIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvLi9wYWdlcy9hcGkvcHJvZHVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvLi91dGlscy9jb25uZWN0REIuanMiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhL2V4dGVybmFsIFwibW9uZ29vc2VcIiIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvZXh0ZXJuYWwgXCJtb25nb29zZS1kZWxldGVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uL21vZGVscy91c2VyTW9kZWwnO1xyXG5cclxuY29uc3QgYXV0aCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cdGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbjtcclxuXHJcblx0aWYgKCF0b2tlbikgcmV0dXJuIHJlcy5qc29uKHsgZXJyOiAnWMOhYyB0aOG7sWMga2jDtG5nIGto4bqjIGThu6VuZy4nIH0pO1xyXG5cclxuXHRjb25zdCBkZWNvZGVkID0gand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuQUNDRVNTX1RPS0VOX1NFQ1JFVCk7XHJcblx0aWYgKCFkZWNvZGVkKSByZXR1cm4gcmVzLmpzb24oeyBlcnI6ICdYw6FjIHRo4buxYyB0aOG6pXQgYuG6oWkuJyB9KTtcclxuXHJcblx0Y29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IF9pZDogZGVjb2RlZC5pZCB9KTtcclxuXHRyZXR1cm4geyBpZDogdXNlci5faWQsIHJvbGU6IHVzZXIucm9sZSwgcm9vdDogdXNlci5yb290IH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoO1xyXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5jb25zdCBtb25nb29zZV9kZWxldGUgPSByZXF1aXJlKCdtb25nb29zZS1kZWxldGUnKTtcclxuXHJcbmNvbnN0IHByb2R1Y3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG5cdHtcclxuXHRcdHRpdGxlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHRyaW06IHRydWUgfSxcclxuXHRcdHByaWNlT3JpZ2luOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUsIHRyaW06IHRydWUgfSxcclxuXHRcdHByaWNlU2FsZTogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlLCB0cmltOiB0cnVlIH0sXHJcblx0XHRkZXNjcmlwdGlvbjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcblx0XHRjb250ZW50OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuXHRcdGNhdGVnb3J5OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuXHRcdGltYWdlczogeyB0eXBlOiBBcnJheSwgcmVxdWlyZWQ6IHRydWUgfSxcclxuXHRcdHNpemVzOiB7IHR5cGU6IEFycmF5LCBkZWZhdWx0OiAwIH0sXHJcblx0XHRjb2xvcnM6IHsgdHlwZTogQXJyYXksIGRlZmF1bHQ6IDAgfSxcclxuXHRcdGluU3RvY2s6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAwIH0sXHJcblx0XHRzb2xkOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMCB9LFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dGltZXN0YW1wczogdHJ1ZSxcclxuXHR9XHJcbik7XHJcblxyXG5wcm9kdWN0U2NoZW1hLnBsdWdpbihtb25nb29zZV9kZWxldGUsIHsgb3ZlcnJpZGVNZXRob2RzOiB0cnVlIH0pO1xyXG5wcm9kdWN0U2NoZW1hLmluZGV4KHsgdGl0bGU6ICd0ZXh0JyB9KTtcclxuY29uc3QgUHJvZHVjdCA9IG1vbmdvb3NlLm1vZGVscy5wcm9kdWN0IHx8IG1vbmdvb3NlLm1vZGVsKCdwcm9kdWN0JywgcHJvZHVjdFNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xyXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcblx0e1xyXG5cdFx0bmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcblx0XHRlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcclxuXHRcdHBhc3N3b3JkOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuXHRcdHJvbGU6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAndXNlcicgfSxcclxuXHRcdHJvb3Q6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcclxuXHRcdGF2YXRhcjogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICcvaW1hZ2VzL2F2YXRhcmRlZmF1bHQucG5nJyB9LFxyXG5cdFx0dHlwZTogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdyZWdpdGVyJyB9LFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dGltZXN0YW1wczogdHJ1ZSxcclxuXHR9XHJcbik7XHJcblxyXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWxzLnVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ3VzZXInLCB1c2VyU2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1hbm9ueW1vdXMtZGVmYXVsdC1leHBvcnQgKi9cclxuaW1wb3J0IGNvbm5lY3REQiBmcm9tICcuLi8uLi8uLi91dGlscy9jb25uZWN0REInO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuLi8uLi8uLi9tb2RlbHMvcHJvZHVjdE1vZGVsJztcclxuaW1wb3J0IHsgQVBJZmVhdHVyZXMgfSBmcm9tICcuJztcclxuXHJcbmNvbm5lY3REQigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcblx0c3dpdGNoIChyZXEubWV0aG9kKSB7XHJcblx0XHRjYXNlICdHRVQnOlxyXG5cdFx0XHRhd2FpdCBnZXRQcm9kdWN0cyhyZXEsIHJlcyk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IGZlYXR1cmVzID0gbmV3IEFQSWZlYXR1cmVzKFByb2R1Y3QuZmluZFdpdGhEZWxldGVkKHt9KSwgcmVxLnF1ZXJ5KS5maWx0ZXJpbmcoKS5zb3J0aW5nKCk7XHJcblxyXG5cdFx0Y29uc3QgbGltaXQgPSBwYXJzZUludChyZXEucXVlcnkubGltaXQsIDEwKSB8fCAxMDtcclxuXHRcdGNvbnN0IHBhZ2UgPSBwYXJzZUludChyZXEucXVlcnkucGFnZSwgMTApIHx8IDE7XHJcblx0XHRjb25zdCBzdGFydEluZGV4ID0gKHBhZ2UgLSAxKSAqIGxpbWl0O1xyXG5cdFx0Y29uc3QgZW5kSW5kZXggPSBwYWdlICogbGltaXQ7XHJcblxyXG5cdFx0Y29uc3QgcHJvZHVjdHNSZXN1bHQgPSBhd2FpdCBmZWF0dXJlcy5xdWVyeTtcclxuXHRcdGNvbnN0IHByb2R1Y3RzID0gcHJvZHVjdHNSZXN1bHQuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xyXG5cclxuXHRcdHJlcy5qc29uKHsgbXNnOiAnU3VjY2VzcycsIHJlc3VsdDogcHJvZHVjdHNSZXN1bHQubGVuZ3RoLCBwcm9kdWN0cyB9KTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyOiBlcnIubWVzc2FnZSB9KTtcclxuXHR9XHJcbn07XHJcbiIsImltcG9ydCBjb25uZWN0REIgZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29ubmVjdERCJztcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3Byb2R1Y3RNb2RlbCc7XHJcbmltcG9ydCBhdXRoIGZyb20gJy4uLy4uLy4uL21pZGRsZXdhcmUvYXV0aCc7XHJcblxyXG5jb25uZWN0REIoKTtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tYW5vbnltb3VzLWRlZmF1bHQtZXhwb3J0XHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cdHN3aXRjaCAocmVxLm1ldGhvZCkge1xyXG5cdFx0Y2FzZSAnR0VUJzpcclxuXHRcdFx0YXdhaXQgZ2V0UHJvZHVjdHMocmVxLCByZXMpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgJ1BPU1QnOlxyXG5cdFx0XHRhd2FpdCBjcmVhdGVQcm9kdWN0KHJlcSwgcmVzKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEFQSWZlYXR1cmVzIHtcclxuXHRjb25zdHJ1Y3RvcihxdWVyeSwgcXVlcnlTdHJpbmcpIHtcclxuXHRcdHRoaXMucXVlcnkgPSBxdWVyeTtcclxuXHRcdHRoaXMucXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZztcclxuXHR9XHJcblxyXG5cdGZpbHRlcmluZygpIHtcclxuXHRcdGNvbnN0IHF1ZXJ5T2JqID0geyAuLi50aGlzLnF1ZXJ5U3RyaW5nIH07XHJcblxyXG5cdFx0Y29uc3QgZXhjbHVkZUZpZWxkcyA9IFsncGFnZScsICdzb3J0JywgJ2xpbWl0J107XHJcblx0XHRleGNsdWRlRmllbGRzLmZvckVhY2goZWwgPT4gZGVsZXRlIHF1ZXJ5T2JqW2VsXSk7XHJcblxyXG5cdFx0aWYgKHF1ZXJ5T2JqLmNhdGVnb3J5ICE9PSAnYWxsJykgdGhpcy5xdWVyeS5maW5kKHsgY2F0ZWdvcnk6IHF1ZXJ5T2JqLmNhdGVnb3J5IH0pO1xyXG5cdFx0aWYgKHF1ZXJ5T2JqLnRpdGxlICE9PSAnYWxsJykgdGhpcy5xdWVyeS5maW5kKHsgJHRleHQ6IHsgJHNlYXJjaDogcXVlcnlPYmoudGl0bGUgfSB9KTtcclxuXHRcdHRoaXMucXVlcnkuZmluZCgpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRzb3J0aW5nKCkge1xyXG5cdFx0aWYgKHRoaXMucXVlcnlTdHJpbmcuc29ydCkge1xyXG5cdFx0XHRjb25zdCBzb3J0QnkgPSB0aGlzLnF1ZXJ5U3RyaW5nLnNvcnQuc3BsaXQoJywnKS5qb2luKCcnKTtcclxuXHRcdFx0dGhpcy5xdWVyeSA9IHRoaXMucXVlcnkuc29ydChzb3J0QnkpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5xdWVyeSA9IHRoaXMucXVlcnkuc29ydCgnLWNyZWF0ZWRBdCcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxufVxyXG5cclxuY29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgZmVhdHVyZXMgPSBuZXcgQVBJZmVhdHVyZXMoUHJvZHVjdC5maW5kKHt9KSwgcmVxLnF1ZXJ5KS5maWx0ZXJpbmcoKS5zb3J0aW5nKCk7XHJcblxyXG5cdFx0Y29uc3QgbGltaXQgPSBwYXJzZUludChyZXEucXVlcnkubGltaXQsIDEwKSB8fCA4O1xyXG5cdFx0Y29uc3QgcGFnZSA9IHBhcnNlSW50KHJlcS5xdWVyeS5wYWdlLCAxMCkgfHwgMTtcclxuXHRcdGNvbnN0IHN0YXJ0SW5kZXggPSAocGFnZSAtIDEpICogbGltaXQ7XHJcblx0XHRjb25zdCBlbmRJbmRleCA9IHBhZ2UgKiBsaW1pdDtcclxuXHJcblx0XHRjb25zdCBwcm9kdWN0c1Jlc3VsdCA9IGF3YWl0IGZlYXR1cmVzLnF1ZXJ5O1xyXG5cdFx0Y29uc3QgcHJvZHVjdHMgPSBwcm9kdWN0c1Jlc3VsdC5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleCk7XHJcblxyXG5cdFx0cmVzLmpzb24oeyBtc2c6ICdTdWNjZXNzJywgcmVzdWx0OiBwcm9kdWN0c1Jlc3VsdC5sZW5ndGgsIHByb2R1Y3RzIH0pO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0cmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnI6IGVyci5tZXNzYWdlIH0pO1xyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVByb2R1Y3QgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXV0aChyZXEsIHJlcyk7XHJcblx0XHRpZiAocmVzdWx0LnJvbGUgIT09ICdhZG1pbicpIHJldHVybiByZXMuc3RhdHVzKDQwMykuanNvbih7IGVycjogJ0LhuqFuIGtow7RuZyDEkeG7pyBxdXnhu4FuIGNo4buJbmggc+G7rWEgc+G6o24gcGjhuqltLicgfSk7XHJcblxyXG5cdFx0Y29uc3QgeyB0aXRsZSwgcHJpY2VPcmlnaW4sIHByaWNlU2FsZSwgaW5TdG9jaywgZGVzY3JpcHRpb24sIGNvbnRlbnQsIGNhdGVnb3J5LCBpbWFnZXMgfSA9IHJlcS5ib2R5O1xyXG5cclxuXHRcdGlmIChcclxuXHRcdFx0IXRpdGxlIHx8XHJcblx0XHRcdCFwcmljZU9yaWdpbiB8fFxyXG5cdFx0XHQhcHJpY2VTYWxlIHx8XHJcblx0XHRcdCFpblN0b2NrIHx8XHJcblx0XHRcdCFkZXNjcmlwdGlvbiB8fFxyXG5cdFx0XHQhY29udGVudCB8fFxyXG5cdFx0XHRjYXRlZ29yeSA9PT0gJ2FsbCcgfHxcclxuXHRcdFx0Y2F0ZWdvcnkgPT09ICcnIHx8XHJcblx0XHRcdGltYWdlcy5sZW5ndGggPT09IDBcclxuXHRcdClcclxuXHRcdFx0cmV0dXJuIHJlcy5qc29uKHsgZXJyOiAnVnVpIGzDsm5nIMSRaeG7gW4gdOG6pXQgY+G6oyBjw6FjIHRyxrDhu51uZy4nIH0pO1xyXG5cclxuXHRcdGNvbnN0IG5ld1Byb2R1Y3QgPSBuZXcgUHJvZHVjdCh7XHJcblx0XHRcdHRpdGxlOiB0aXRsZS50b0xvd2VyQ2FzZSgpLFxyXG5cdFx0XHRwcmljZU9yaWdpbixcclxuXHRcdFx0cHJpY2VTYWxlLFxyXG5cdFx0XHRpblN0b2NrLFxyXG5cdFx0XHRkZXNjcmlwdGlvbixcclxuXHRcdFx0Y29udGVudCxcclxuXHRcdFx0Y2F0ZWdvcnksXHJcblx0XHRcdGltYWdlcyxcclxuXHRcdH0pO1xyXG5cclxuXHRcdGF3YWl0IG5ld1Byb2R1Y3Quc2F2ZSgpO1xyXG5cclxuXHRcdHJlcy5qc29uKHsgbXNnOiAnVOG6oW8gc+G6o24gcGjhuqltIG3hu5tpIHRow6BuaCBjw7RuZyEnLCBuZXdQcm9kdWN0IH0pO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0cmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnI6IGVyci5tZXNzYWdlIH0pO1xyXG5cdH1cclxufTtcclxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IGNvbm5lY3REQiA9ICgpID0+IHtcclxuXHRpZiAobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSkge1xyXG5cdFx0Y29uc29sZS5sb2coJ0FscmVhZHkgY29ubmVjdGVkLicpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHRtb25nb29zZS5jb25uZWN0KFxyXG5cdFx0cHJvY2Vzcy5lbnYuTU9OR09EQl9VUkwsXHJcblx0XHR7XHJcblx0XHRcdHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxyXG5cdFx0XHR1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcclxuXHRcdFx0dXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG5cdFx0XHR1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcblx0XHR9LFxyXG5cdFx0ZXJyID0+IHtcclxuXHRcdFx0aWYgKGVycikgdGhyb3cgZXJyO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIG1vbmdvZGIuJyk7XHJcblx0XHR9XHJcblx0KTtcclxuXHRjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIG1vbmdvZGIuJyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZS1kZWxldGVcIik7Il0sIm5hbWVzIjpbImp3dCIsIlVzZXIiLCJhdXRoIiwicmVxIiwicmVzIiwidG9rZW4iLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsImpzb24iLCJlcnIiLCJkZWNvZGVkIiwidmVyaWZ5IiwicHJvY2VzcyIsImVudiIsIkFDQ0VTU19UT0tFTl9TRUNSRVQiLCJ1c2VyIiwiZmluZE9uZSIsIl9pZCIsImlkIiwicm9sZSIsInJvb3QiLCJtb25nb29zZSIsIm1vbmdvb3NlX2RlbGV0ZSIsInJlcXVpcmUiLCJwcm9kdWN0U2NoZW1hIiwiU2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ0cmltIiwicHJpY2VPcmlnaW4iLCJOdW1iZXIiLCJwcmljZVNhbGUiLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJjYXRlZ29yeSIsImltYWdlcyIsIkFycmF5Iiwic2l6ZXMiLCJkZWZhdWx0IiwiY29sb3JzIiwiaW5TdG9jayIsInNvbGQiLCJ0aW1lc3RhbXBzIiwicGx1Z2luIiwib3ZlcnJpZGVNZXRob2RzIiwiaW5kZXgiLCJQcm9kdWN0IiwibW9kZWxzIiwicHJvZHVjdCIsIm1vZGVsIiwidXNlclNjaGVtYSIsIm5hbWUiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwiQm9vbGVhbiIsImF2YXRhciIsImNvbm5lY3REQiIsIkFQSWZlYXR1cmVzIiwibWV0aG9kIiwiZ2V0UHJvZHVjdHMiLCJmZWF0dXJlcyIsImZpbmRXaXRoRGVsZXRlZCIsInF1ZXJ5IiwiZmlsdGVyaW5nIiwic29ydGluZyIsImxpbWl0IiwicGFyc2VJbnQiLCJwYWdlIiwic3RhcnRJbmRleCIsImVuZEluZGV4IiwicHJvZHVjdHNSZXN1bHQiLCJwcm9kdWN0cyIsInNsaWNlIiwibXNnIiwicmVzdWx0IiwibGVuZ3RoIiwic3RhdHVzIiwibWVzc2FnZSIsImNyZWF0ZVByb2R1Y3QiLCJjb25zdHJ1Y3RvciIsInF1ZXJ5U3RyaW5nIiwicXVlcnlPYmoiLCJleGNsdWRlRmllbGRzIiwiZm9yRWFjaCIsImVsIiwiZmluZCIsIiR0ZXh0IiwiJHNlYXJjaCIsInNvcnQiLCJzb3J0QnkiLCJzcGxpdCIsImpvaW4iLCJib2R5IiwibmV3UHJvZHVjdCIsInRvTG93ZXJDYXNlIiwic2F2ZSIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0IiwiTU9OR09EQl9VUkwiLCJ1c2VDcmVhdGVJbmRleCIsInVzZUZpbmRBbmRNb2RpZnkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiXSwic291cmNlUm9vdCI6IiJ9