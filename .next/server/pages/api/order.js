"use strict";
(() => {
var exports = {};
exports.id = "pages/api/order";
exports.ids = ["pages/api/order"];
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

/***/ "./pages/api/order/index.js":
/*!**********************************!*\
  !*** ./pages/api/order/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ "./utils/connectDB.js");
/* harmony import */ var _models_orderModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/orderModel */ "./models/orderModel.js");
/* harmony import */ var _models_productModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/productModel */ "./models/productModel.js");
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../middleware/auth */ "./middleware/auth.js");
/* eslint-disable import/no-anonymous-default-export */




(0,_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__.default)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  switch (req.method) {
    case 'POST':
      await createOrder(req, res);
      break;

    case 'GET':
      await getOrders(req, res);
      break;
  }
});

const createOrder = async (req, res) => {
  try {
    const {
      address,
      phone,
      cart,
      total,
      paymentMethod,
      fullName,
      guestOrder
    } = req.body;
    let result = {
      id: process.env.GUEST_ID
    };

    if (!guestOrder) {
      result = await (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_3__.default)(req, res);
      if (!result) return res.status(400).json({
        error: 'Xác thực thất bại.'
      });
    }

    const newOrder = new _models_orderModel__WEBPACK_IMPORTED_MODULE_1__.default({
      user: result.id,
      address,
      phone,
      cart,
      total,
      paymentMethod,
      fullName,
      guestOrder
    });
    cart.filter(item => {
      return sold(item._id, item.quantity, item.inStock, item.sold);
    });
    await newOrder.save();
    res.json({
      msg: 'Thanh toán thành công!',
      newOrder
    });
  } catch (err) {
    res.json({
      error: err.message
    });
  }
};

const sold = async (id, quantity, oldInStock, oldSold) => {
  await _models_productModel__WEBPACK_IMPORTED_MODULE_2__.default.findOneAndUpdate({
    _id: id
  }, {
    inStock: oldInStock - quantity,
    sold: oldSold + quantity
  });
};

const getOrders = async (req, res) => {
  try {
    const result = await (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_3__.default)(req, res);
    let orders;

    if (result.role !== 'admin') {
      orders = await _models_orderModel__WEBPACK_IMPORTED_MODULE_1__.default.find({
        user: result.id
      }).populate('user', '-password');
    } else {
      orders = await _models_orderModel__WEBPACK_IMPORTED_MODULE_1__.default.find({});
    }

    res.json({
      orders
    });
  } catch (err) {
    res.status(500).json({
      error: err.message
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/order/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLGdCQUFnQixFQUFFLEtBRm5CO0FBR0NDLElBQUFBLGVBQWUsRUFBRSxJQUhsQjtBQUlDQyxJQUFBQSxrQkFBa0IsRUFBRTtBQUpyQixHQUZELEVBUUNsRyxHQUFHLElBQUk7QUFDTixRQUFJQSxHQUFKLEVBQVMsTUFBTUEsR0FBTjtBQUNUMkYsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFDQSxHQVhGO0FBYUFELEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0EsQ0FuQkQ7O0FBcUJBLGlFQUFlekIsU0FBZjs7Ozs7Ozs7OztBQ3ZCQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvLi9taWRkbGV3YXJlL2F1dGguanMiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhLy4vbW9kZWxzL29yZGVyTW9kZWwuanMiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhLy4vbW9kZWxzL3Byb2R1Y3RNb2RlbC5qcyIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvLi9tb2RlbHMvdXNlck1vZGVsLmpzIiwid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS8uL3BhZ2VzL2FwaS9vcmRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvLi91dGlscy9jb25uZWN0REIuanMiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhL2V4dGVybmFsIFwibW9uZ29vc2VcIiIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvZXh0ZXJuYWwgXCJtb25nb29zZS1kZWxldGVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uL21vZGVscy91c2VyTW9kZWwnO1xyXG5cclxuY29uc3QgYXV0aCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cdGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbjtcclxuXHJcblx0aWYgKCF0b2tlbikgcmV0dXJuIHJlcy5qc29uKHsgZXJyOiAnWMOhYyB0aOG7sWMga2jDtG5nIGto4bqjIGThu6VuZy4nIH0pO1xyXG5cclxuXHRjb25zdCBkZWNvZGVkID0gand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuQUNDRVNTX1RPS0VOX1NFQ1JFVCk7XHJcblx0aWYgKCFkZWNvZGVkKSByZXR1cm4gcmVzLmpzb24oeyBlcnI6ICdYw6FjIHRo4buxYyB0aOG6pXQgYuG6oWkuJyB9KTtcclxuXHJcblx0Y29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IF9pZDogZGVjb2RlZC5pZCB9KTtcclxuXHRyZXR1cm4geyBpZDogdXNlci5faWQsIHJvbGU6IHVzZXIucm9sZSwgcm9vdDogdXNlci5yb290IH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoO1xyXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3Qgb3JkZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG5cdHtcclxuXHRcdHVzZXI6IHsgdHlwZTogbW9uZ29vc2UuVHlwZXMuT2JqZWN0SWQsIHJlZjogJ3VzZXInIH0sXHJcblx0XHRhZGRyZXNzOiBTdHJpbmcsXHJcblx0XHRwaG9uZTogU3RyaW5nLFxyXG5cdFx0ZnVsbE5hbWU6IFN0cmluZyxcclxuXHRcdGNhcnQ6IEFycmF5LFxyXG5cdFx0dG90YWw6IE51bWJlcixcclxuXHRcdHBheW1lbnRNZXRob2Q6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnY29kJyB9LFxyXG5cdFx0ZGVsaXZlcmVkOiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdGRlZmF1bHQ6IGZhbHNlLFxyXG5cdFx0fSxcclxuXHRcdGlzUGFpZDogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxyXG5cdFx0cGFpZEF0OiB7IHR5cGU6IERhdGUgfSxcclxuXHRcdGd1ZXN0T3JkZXI6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdHRpbWVzdGFtcHM6IHRydWUsXHJcblx0fVxyXG4pO1xyXG5cclxuY29uc3QgT3JkZXIgPSBtb25nb29zZS5tb2RlbHMub3JkZXIgfHwgbW9uZ29vc2UubW9kZWwoJ29yZGVyJywgb3JkZXJTY2hlbWEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3JkZXI7XHJcbiIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbmNvbnN0IG1vbmdvb3NlX2RlbGV0ZSA9IHJlcXVpcmUoJ21vbmdvb3NlLWRlbGV0ZScpO1xyXG5cclxuY29uc3QgcHJvZHVjdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcblx0e1xyXG5cdFx0dGl0bGU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdHJpbTogdHJ1ZSB9LFxyXG5cdFx0cHJpY2VPcmlnaW46IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSwgdHJpbTogdHJ1ZSB9LFxyXG5cdFx0cHJpY2VTYWxlOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUsIHRyaW06IHRydWUgfSxcclxuXHRcdGRlc2NyaXB0aW9uOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuXHRcdGNvbnRlbnQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG5cdFx0Y2F0ZWdvcnk6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG5cdFx0aW1hZ2VzOiB7IHR5cGU6IEFycmF5LCByZXF1aXJlZDogdHJ1ZSB9LFxyXG5cdFx0c2l6ZXM6IHsgdHlwZTogQXJyYXksIGRlZmF1bHQ6IDAgfSxcclxuXHRcdGNvbG9yczogeyB0eXBlOiBBcnJheSwgZGVmYXVsdDogMCB9LFxyXG5cdFx0aW5TdG9jazogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDAgfSxcclxuXHRcdHNvbGQ6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAwIH0sXHJcblx0fSxcclxuXHR7XHJcblx0XHR0aW1lc3RhbXBzOiB0cnVlLFxyXG5cdH1cclxuKTtcclxuXHJcbnByb2R1Y3RTY2hlbWEucGx1Z2luKG1vbmdvb3NlX2RlbGV0ZSwgeyBvdmVycmlkZU1ldGhvZHM6IHRydWUgfSk7XHJcbnByb2R1Y3RTY2hlbWEuaW5kZXgoeyB0aXRsZTogJ3RleHQnIH0pO1xyXG5jb25zdCBQcm9kdWN0ID0gbW9uZ29vc2UubW9kZWxzLnByb2R1Y3QgfHwgbW9uZ29vc2UubW9kZWwoJ3Byb2R1Y3QnLCBwcm9kdWN0U2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XHJcbiIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuXHR7XHJcblx0XHRuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuXHRcdGVtYWlsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxyXG5cdFx0cGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG5cdFx0cm9sZTogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICd1c2VyJyB9LFxyXG5cdFx0cm9vdDogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxyXG5cdFx0YXZhdGFyOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJy9pbWFnZXMvYXZhdGFyZGVmYXVsdC5wbmcnIH0sXHJcblx0XHR0eXBlOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJ3JlZ2l0ZXInIH0sXHJcblx0fSxcclxuXHR7XHJcblx0XHR0aW1lc3RhbXBzOiB0cnVlLFxyXG5cdH1cclxuKTtcclxuXHJcbmNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbHMudXNlciB8fCBtb25nb29zZS5tb2RlbCgndXNlcicsIHVzZXJTY2hlbWEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWFub255bW91cy1kZWZhdWx0LWV4cG9ydCAqL1xyXG5pbXBvcnQgY29ubmVjdERCIGZyb20gJy4uLy4uLy4uL3V0aWxzL2Nvbm5lY3REQic7XHJcbmltcG9ydCBPcmRlciBmcm9tICcuLi8uLi8uLi9tb2RlbHMvb3JkZXJNb2RlbCc7XHJcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4uLy4uLy4uL21vZGVscy9wcm9kdWN0TW9kZWwnO1xyXG5pbXBvcnQgYXV0aCBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL2F1dGgnO1xyXG5cclxuY29ubmVjdERCKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuXHRzd2l0Y2ggKHJlcS5tZXRob2QpIHtcclxuXHRcdGNhc2UgJ1BPU1QnOlxyXG5cdFx0XHRhd2FpdCBjcmVhdGVPcmRlcihyZXEsIHJlcyk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAnR0VUJzpcclxuXHRcdFx0YXdhaXQgZ2V0T3JkZXJzKHJlcSwgcmVzKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlT3JkZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuXHR0cnkge1xyXG5cclxuXHRcdGNvbnN0IHsgYWRkcmVzcywgcGhvbmUsIGNhcnQsIHRvdGFsLCBwYXltZW50TWV0aG9kLCBmdWxsTmFtZSwgZ3Vlc3RPcmRlciB9ID0gcmVxLmJvZHk7XHJcblxyXG5cdFx0bGV0IHJlc3VsdCA9IHsgaWQ6IHByb2Nlc3MuZW52LkdVRVNUX0lEIH07XHJcblx0XHRpZiAoIWd1ZXN0T3JkZXIpIHtcclxuXHRcdFx0cmVzdWx0ID0gYXdhaXQgYXV0aChyZXEsIHJlcyk7XHJcblx0XHRcdGlmICghcmVzdWx0KSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ1jDoWMgdGjhu7FjIHRo4bqldCBi4bqhaS4nIH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IG5ld09yZGVyID0gbmV3IE9yZGVyKHtcclxuXHRcdFx0dXNlcjogcmVzdWx0LmlkLFxyXG5cdFx0XHRhZGRyZXNzLFxyXG5cdFx0XHRwaG9uZSxcclxuXHRcdFx0Y2FydCxcclxuXHRcdFx0dG90YWwsXHJcblx0XHRcdHBheW1lbnRNZXRob2QsXHJcblx0XHRcdGZ1bGxOYW1lLFxyXG5cdFx0XHRndWVzdE9yZGVyLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y2FydC5maWx0ZXIoaXRlbSA9PiB7XHJcblx0XHRcdHJldHVybiBzb2xkKGl0ZW0uX2lkLCBpdGVtLnF1YW50aXR5LCBpdGVtLmluU3RvY2ssIGl0ZW0uc29sZCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRhd2FpdCBuZXdPcmRlci5zYXZlKCk7XHJcblxyXG5cdFx0cmVzLmpzb24oeyBtc2c6ICdUaGFuaCB0b8OhbiB0aMOgbmggY8O0bmchJywgbmV3T3JkZXIgfSk7XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRyZXMuanNvbih7IGVycm9yOiBlcnIubWVzc2FnZSB9KTtcclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCBzb2xkID0gYXN5bmMgKGlkLCBxdWFudGl0eSwgb2xkSW5TdG9jaywgb2xkU29sZCkgPT4ge1xyXG5cdGF3YWl0IFByb2R1Y3QuZmluZE9uZUFuZFVwZGF0ZSh7IF9pZDogaWQgfSwgeyBpblN0b2NrOiBvbGRJblN0b2NrIC0gcXVhbnRpdHksIHNvbGQ6IG9sZFNvbGQgKyBxdWFudGl0eSB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldE9yZGVycyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBhdXRoKHJlcSwgcmVzKTtcclxuXHJcblx0XHRsZXQgb3JkZXJzO1xyXG5cdFx0aWYgKHJlc3VsdC5yb2xlICE9PSAnYWRtaW4nKSB7XHJcblx0XHRcdG9yZGVycyA9IGF3YWl0IE9yZGVyLmZpbmQoeyB1c2VyOiByZXN1bHQuaWQgfSkucG9wdWxhdGUoJ3VzZXInLCAnLXBhc3N3b3JkJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRvcmRlcnMgPSBhd2FpdCBPcmRlci5maW5kKHt9KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXMuanNvbih7IG9yZGVycyB9KTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGVyci5tZXNzYWdlIH0pO1xyXG5cdH1cclxufTsiLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgY29ubmVjdERCID0gKCkgPT4ge1xyXG5cdGlmIChtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKSB7XHJcblx0XHRjb25zb2xlLmxvZygnQWxyZWFkeSBjb25uZWN0ZWQuJyk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdG1vbmdvb3NlLmNvbm5lY3QoXHJcblx0XHRwcm9jZXNzLmVudi5NT05HT0RCX1VSTCxcclxuXHRcdHtcclxuXHRcdFx0dXNlQ3JlYXRlSW5kZXg6IHRydWUsXHJcblx0XHRcdHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxyXG5cdFx0XHR1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcblx0XHRcdHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuXHRcdH0sXHJcblx0XHRlcnIgPT4ge1xyXG5cdFx0XHRpZiAoZXJyKSB0aHJvdyBlcnI7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gbW9uZ29kYi4nKTtcclxuXHRcdH1cclxuXHQpO1xyXG5cdGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gbW9uZ29kYi4nKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlLWRlbGV0ZVwiKTsiXSwibmFtZXMiOlsiand0IiwiVXNlciIsImF1dGgiLCJyZXEiLCJyZXMiLCJ0b2tlbiIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwianNvbiIsImVyciIsImRlY29kZWQiLCJ2ZXJpZnkiLCJwcm9jZXNzIiwiZW52IiwiQUNDRVNTX1RPS0VOX1NFQ1JFVCIsInVzZXIiLCJmaW5kT25lIiwiX2lkIiwiaWQiLCJyb2xlIiwicm9vdCIsIm1vbmdvb3NlIiwib3JkZXJTY2hlbWEiLCJTY2hlbWEiLCJ0eXBlIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsImFkZHJlc3MiLCJTdHJpbmciLCJwaG9uZSIsImZ1bGxOYW1lIiwiY2FydCIsIkFycmF5IiwidG90YWwiLCJOdW1iZXIiLCJwYXltZW50TWV0aG9kIiwiZGVmYXVsdCIsImRlbGl2ZXJlZCIsIkJvb2xlYW4iLCJpc1BhaWQiLCJwYWlkQXQiLCJEYXRlIiwiZ3Vlc3RPcmRlciIsInRpbWVzdGFtcHMiLCJPcmRlciIsIm1vZGVscyIsIm9yZGVyIiwibW9kZWwiLCJtb25nb29zZV9kZWxldGUiLCJyZXF1aXJlIiwicHJvZHVjdFNjaGVtYSIsInRpdGxlIiwicmVxdWlyZWQiLCJ0cmltIiwicHJpY2VPcmlnaW4iLCJwcmljZVNhbGUiLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJjYXRlZ29yeSIsImltYWdlcyIsInNpemVzIiwiY29sb3JzIiwiaW5TdG9jayIsInNvbGQiLCJwbHVnaW4iLCJvdmVycmlkZU1ldGhvZHMiLCJpbmRleCIsIlByb2R1Y3QiLCJwcm9kdWN0IiwidXNlclNjaGVtYSIsIm5hbWUiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwiYXZhdGFyIiwiY29ubmVjdERCIiwibWV0aG9kIiwiY3JlYXRlT3JkZXIiLCJnZXRPcmRlcnMiLCJib2R5IiwicmVzdWx0IiwiR1VFU1RfSUQiLCJzdGF0dXMiLCJlcnJvciIsIm5ld09yZGVyIiwiZmlsdGVyIiwiaXRlbSIsInF1YW50aXR5Iiwic2F2ZSIsIm1zZyIsIm1lc3NhZ2UiLCJvbGRJblN0b2NrIiwib2xkU29sZCIsImZpbmRPbmVBbmRVcGRhdGUiLCJvcmRlcnMiLCJmaW5kIiwicG9wdWxhdGUiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsIk1PTkdPREJfVVJMIiwidXNlQ3JlYXRlSW5kZXgiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5Il0sInNvdXJjZVJvb3QiOiIifQ==