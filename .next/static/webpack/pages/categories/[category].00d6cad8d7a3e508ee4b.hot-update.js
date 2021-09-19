"use strict";
self["webpackHotUpdate_N_E"]("pages/categories/[category]",{

/***/ "./components/tailwind/ProductFeed.js":
/*!********************************************!*\
  !*** ./components/tailwind/ProductFeed.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var _FilterBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FilterBar */ "./components/tailwind/FilterBar.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\Works\\VSCode\\NextJS\\next-website-mintlala\\components\\tailwind\\ProductFeed.js",
    _s = $RefreshSig$();






var Product = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ "components_tailwind_Product_js-_730a1").then(__webpack_require__.bind(__webpack_require__, /*! ./Product */ "./components/tailwind/Product.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./Product */ "./components/tailwind/Product.js")];
    },
    modules: ["..\\components\\tailwind\\ProductFeed.js -> " + './Product']
  }
});
_c2 = Product;

function ProductFeed(_ref) {
  _s();

  var _this = this;

  var products = _ref.products;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_store_GlobalState__WEBPACK_IMPORTED_MODULE_4__.DataContext),
      state = _useContext.state;

  var categories = state.categories;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex divide-x-4",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "hidden lg:w-1/5 lg:flex flex-col divide-y-2 space-y-5 p-5",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBar__WEBPACK_IMPORTED_MODULE_5__.default, {
        router: router,
        categories: categories
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-full lg:w-[83%] lg:pl-5",
      children: products.length !== 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "grid grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        children: products.map(function (product) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Product, {
            product: product
          }, product._id, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 8
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 6
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-xl text-blue-400 font-bold",
        children: "Kh\xF4ng t\xECm th\u1EA5y s\u1EA3n ph\u1EA9m n\xE0o..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 6
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 3
  }, this);
}

_s(ProductFeed, "dnQQSiZfR9hvtKHYCe1OqPvKung=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c3 = ProductFeed;
/* harmony default export */ __webpack_exports__["default"] = (ProductFeed);

var _c, _c2, _c3;

$RefreshReg$(_c, "Product$dynamic");
$RefreshReg$(_c2, "Product");
$RefreshReg$(_c3, "ProductFeed");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2F0ZWdvcmllcy9bY2F0ZWdvcnldLjAwZDZjYWQ4ZDdhM2U1MDhlZTRiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUssT0FBTyxHQUFHTCxtREFBTyxNQUFDO0FBQUEsU0FBTSx1TEFBTjtBQUFBLENBQUQsRUFBNEI7QUFBRU0sRUFBQUEsR0FBRyxFQUFFLEtBQVA7QUFBQTtBQUFBO0FBQUEsa0NBQWQsbURBQWM7QUFBQTtBQUFBLCtEQUFkLFdBQWM7QUFBQTtBQUFBLENBQTVCLENBQXZCO01BQU1EOztBQUVOLFNBQVNFLFdBQVQsT0FBbUM7QUFBQTs7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsb0JBQ2hCTixpREFBVSxDQUFDQywyREFBRCxDQURNO0FBQUEsTUFDMUJNLEtBRDBCLGVBQzFCQSxLQUQwQjs7QUFBQSxNQUUxQkMsVUFGMEIsR0FFWEQsS0FGVyxDQUUxQkMsVUFGMEI7QUFJbEMsTUFBTUMsTUFBTSxHQUFHVixzREFBUyxFQUF4QjtBQUVBLHNCQUNDO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUEsNEJBRUM7QUFBSyxlQUFTLEVBQUMsMkRBQWY7QUFBQSw2QkFDQyw4REFBQywrQ0FBRDtBQUFXLGNBQU0sRUFBRVUsTUFBbkI7QUFBMkIsa0JBQVUsRUFBRUQ7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRCxlQU1DO0FBQUssZUFBUyxFQUFDLDJCQUFmO0FBQUEsZ0JBQ0VGLFFBQVEsQ0FBQ0ksTUFBVCxLQUFvQixDQUFwQixnQkFDQTtBQUFLLGlCQUFTLEVBQUMsdUVBQWY7QUFBQSxrQkFDRUosUUFBUSxDQUFDSyxHQUFULENBQWEsVUFBQUMsT0FBTztBQUFBLDhCQUNwQiw4REFBQyxPQUFEO0FBQTJCLG1CQUFPLEVBQUVBO0FBQXBDLGFBQWNBLE9BQU8sQ0FBQ0MsR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEb0I7QUFBQSxTQUFwQjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxnQkFPQTtBQUFHLGlCQUFTLEVBQUMsaUNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFvQkE7O0dBMUJRUjtVQUlPTjs7O01BSlBNO0FBNEJULCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGFpbHdpbmQvUHJvZHVjdEZlZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uLy4uL3N0b3JlL0dsb2JhbFN0YXRlJztcclxuaW1wb3J0IEZpbHRlckJhciBmcm9tICcuL0ZpbHRlckJhcic7XHJcbmNvbnN0IFByb2R1Y3QgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi9Qcm9kdWN0JyksIHsgc3NyOiBmYWxzZSB9KTtcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RGZWVkKHsgcHJvZHVjdHMgfSkge1xyXG5cdGNvbnN0IHsgc3RhdGUgfSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xyXG5cdGNvbnN0IHsgY2F0ZWdvcmllcyB9ID0gc3RhdGU7XHJcblxyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZGl2aWRlLXgtNCc+XHJcblx0XHRcdHsvKiBMZWZ0IG5hdiAqL31cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2hpZGRlbiBsZzp3LTEvNSBsZzpmbGV4IGZsZXgtY29sIGRpdmlkZS15LTIgc3BhY2UteS01IHAtNSc+XHJcblx0XHRcdFx0PEZpbHRlckJhciByb3V0ZXI9e3JvdXRlcn0gY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gLz5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGxnOnctWzgzJV0gbGc6cGwtNSc+XHJcblx0XHRcdFx0e3Byb2R1Y3RzLmxlbmd0aCAhPT0gMCA/IChcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtZmxvdy1yb3ctZGVuc2Ugc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQnPlxyXG5cdFx0XHRcdFx0XHR7cHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxQcm9kdWN0IGtleT17cHJvZHVjdC5faWR9IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC14bCB0ZXh0LWJsdWUtNDAwIGZvbnQtYm9sZCc+S2jDtG5nIHTDrG0gdGjhuqV5IHPhuqNuIHBo4bqpbSBuw6BvLi4uPC9wPlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEZlZWQ7XHJcbiJdLCJuYW1lcyI6WyJkeW5hbWljIiwidXNlUm91dGVyIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0IiwiRmlsdGVyQmFyIiwiUHJvZHVjdCIsInNzciIsIlByb2R1Y3RGZWVkIiwicHJvZHVjdHMiLCJzdGF0ZSIsImNhdGVnb3JpZXMiLCJyb3V0ZXIiLCJsZW5ndGgiLCJtYXAiLCJwcm9kdWN0IiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==