"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_tailwind_Product_js-_730a0"],{

/***/ "./components/tailwind/Product.js":
/*!****************************************!*\
  !*** ./components/tailwind/Product.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-currency-formatter */ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/GlobalState */ "./store/GlobalState.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\Works\\VSCode\\NextJS\\next-website-mintlala\\components\\tailwind\\Product.js",
    _s = $RefreshSig$();







var MAX_RATING = 5;
var MIN_RATING = 3;

function Product(_ref) {
  _s();

  var _this = this;

  var product = _ref.product;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_store_GlobalState__WEBPACK_IMPORTED_MODULE_6__.DataContext),
      state = _useContext.state;

  var categories = state.categories;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)),
      rating = _useState[0];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(Math.random() < 0.5),
      hasPrime = _useState2[0];

  var findCategoryNameFromId = function findCategoryNameFromId(id) {
    return categories.filter(function (category) {
      return category._id === id;
    }).map(function (category) {
      return category.name;
    });
  };

  return (
    /*#__PURE__*/
    //transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "relative flex flex-col m-5 md:m-2 bg-white z-30 p-5 pt-10 cursor-pointer \r shadow-md transition duration-300 transform hover:-translate-y-2 hover:shadow-lg",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "absolute top-2 right-2 capitalize text-xs text-gray-400 italic",
        children: findCategoryNameFromId(product.category)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 4
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: product.images[0].url,
        alt: "Product",
        height: 300,
        width: 300,
        objectFit: "contain",
        onClick: function onClick() {
          return router.push("/product/".concat(product._id));
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 4
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        className: "my-5 line-clamp-2 capitalize",
        onClick: function onClick() {
          return router.push("/product/".concat(product._id));
        },
        children: product.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 4
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex justify-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex",
          children: Array(rating).fill().map(function (_, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.StarIcon, {
                className: "h-5 text-yellow-500"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 9
              }, _this)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 8
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: product.inStock <= 0 ? 'text-red-500' : 'text-green-600',
          children: product.inStock <= 0 ? "H\u1EBFt h\xE0ng" : "Kho: ".concat(product.inStock)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 4
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-xs my-2 line-clamp-2",
        children: product.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 4
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex space-x-5 ".concat(hasPrime ? '' : 'mb-4'),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-gray-600 line-through",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_5___default()), {
            quantity: product.priceOrigin,
            currency: "VND",
            pattern: "##,### !",
            group: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 6
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-red-600",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_5___default()), {
            quantity: product.priceSale,
            currency: "VND",
            pattern: "##,### !",
            group: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 6
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 4
      }, this), hasPrime ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex items-center space-x-2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "https://links.papareact.com/fdw",
          alt: "Giao h\xE0ng mi\u1EC5n ph\xED",
          className: "w-12"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-xs text-gray-500",
          children: "Giao h\xE0ng mi\u1EC5n ph\xED"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 5
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-xs text-gray-500 my-2",
        children: "TP. H\u1ED3 Ch\xED Minh"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: function onClick() {
          return router.push("/product/".concat(product._id));
        },
        className: "mx-auto button-blue p-2 text-gray-700 font-semibold text-xl",
        children: "Xem chi ti\u1EBFt"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 4
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 3
    }, this)
  );
}

_s(Product, "vVpKyvvxpnRdVK+Z+IYLOAWt01I=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = Product;
/* harmony default export */ __webpack_exports__["default"] = (Product);

var _c;

$RefreshReg$(_c, "Product");

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9jb21wb25lbnRzX3RhaWx3aW5kX1Byb2R1Y3RfanMtXzczMGEwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNTyxVQUFVLEdBQUcsQ0FBbkI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsQ0FBbkI7O0FBRUEsU0FBU0MsT0FBVCxPQUE4QjtBQUFBOztBQUFBOztBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVztBQUM3QixNQUFNQyxNQUFNLEdBQUdULHNEQUFTLEVBQXhCOztBQUQ2QixvQkFFWEMsaURBQVUsQ0FBQ0csMkRBQUQsQ0FGQztBQUFBLE1BRXJCTSxLQUZxQixlQUVyQkEsS0FGcUI7O0FBQUEsTUFHckJDLFVBSHFCLEdBR05ELEtBSE0sQ0FHckJDLFVBSHFCOztBQUFBLGtCQUtaVCwrQ0FBUSxDQUFDVSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCVCxVQUFVLEdBQUdDLFVBQWIsR0FBMEIsQ0FBM0MsSUFBZ0RBLFVBQTNELENBQUQsQ0FMSTtBQUFBLE1BS3RCUyxNQUxzQjs7QUFBQSxtQkFNVmIsK0NBQVEsQ0FBQ1UsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEdBQWpCLENBTkU7QUFBQSxNQU10QkUsUUFOc0I7O0FBUTdCLE1BQU1DLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQUMsRUFBRSxFQUFJO0FBQ3BDLFdBQU9QLFVBQVUsQ0FBQ1EsTUFBWCxDQUFrQixVQUFBQyxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDQyxHQUFULEtBQWlCSCxFQUFyQjtBQUFBLEtBQTFCLEVBQW1ESSxHQUFuRCxDQUF1RCxVQUFBRixRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDRyxJQUFiO0FBQUEsS0FBL0QsQ0FBUDtBQUNBLEdBRkQ7O0FBSUE7QUFBQTtBQUNDO0FBQ0E7QUFDQyxlQUFTLEVBQUMsOEpBRFg7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RUFBQyx1QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEUSxnQkFPUjtBQUFLLGlCQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4REYsZUEyREM7QUFDQyxlQUFPLEVBQUU7QUFBQSxpQkFBTVAsTUFBTSxDQUFDaUIsSUFBUCxvQkFBd0JsQixPQUFPLENBQUNhLEdBQWhDLEVBQU47QUFBQSxTQURWO0FBRUMsaUJBQVMsRUFBQyw2REFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRDtBQXFFQTs7R0FqRlFkO1VBQ09QOzs7S0FEUE87QUFtRlQsK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YWlsd2luZC9Qcm9kdWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXJJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEN1cnJlbmN5IGZyb20gJ3JlYWN0LWN1cnJlbmN5LWZvcm1hdHRlcic7XHJcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnLi4vLi4vc3RvcmUvR2xvYmFsU3RhdGUnO1xyXG5cclxuY29uc3QgTUFYX1JBVElORyA9IDU7XHJcbmNvbnN0IE1JTl9SQVRJTkcgPSAzO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdCh7IHByb2R1Y3QgfSkge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0IHsgc3RhdGUgfSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xyXG5cdGNvbnN0IHsgY2F0ZWdvcmllcyB9ID0gc3RhdGU7XHJcblxyXG5cdGNvbnN0IFtyYXRpbmddID0gdXNlU3RhdGUoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKE1BWF9SQVRJTkcgLSBNSU5fUkFUSU5HICsgMSkgKyBNSU5fUkFUSU5HKSk7XHJcblx0Y29uc3QgW2hhc1ByaW1lXSA9IHVzZVN0YXRlKE1hdGgucmFuZG9tKCkgPCAwLjUpO1xyXG5cclxuXHRjb25zdCBmaW5kQ2F0ZWdvcnlOYW1lRnJvbUlkID0gaWQgPT4ge1xyXG5cdFx0cmV0dXJuIGNhdGVnb3JpZXMuZmlsdGVyKGNhdGVnb3J5ID0+IGNhdGVnb3J5Ll9pZCA9PT0gaWQpLm1hcChjYXRlZ29yeSA9PiBjYXRlZ29yeS5uYW1lKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0Ly90cmFuc2l0aW9uIGR1cmF0aW9uLTEwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTI1IGhvdmVyOnRleHQtd2hpdGUgYWN0aXZlOnRleHQtcmVkLTUwMFxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9J3JlbGF0aXZlIGZsZXggZmxleC1jb2wgbS01IG1kOm0tMiBiZy13aGl0ZSB6LTMwIHAtNSBwdC0xMCBjdXJzb3ItcG9pbnRlciBcclxuXHRcdFx0XHRcdHNoYWRvdy1tZCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gaG92ZXI6LXRyYW5zbGF0ZS15LTIgaG92ZXI6c2hhZG93LWxnJ1xyXG5cdFx0PlxyXG5cdFx0XHQ8cCBjbGFzc05hbWU9J2Fic29sdXRlIHRvcC0yIHJpZ2h0LTIgY2FwaXRhbGl6ZSB0ZXh0LXhzIHRleHQtZ3JheS00MDAgaXRhbGljJz5cclxuXHRcdFx0XHR7ZmluZENhdGVnb3J5TmFtZUZyb21JZChwcm9kdWN0LmNhdGVnb3J5KX1cclxuXHRcdFx0PC9wPlxyXG5cclxuXHRcdFx0PEltYWdlXHJcblx0XHRcdFx0c3JjPXtwcm9kdWN0LmltYWdlc1swXS51cmx9XHJcblx0XHRcdFx0YWx0PSdQcm9kdWN0J1xyXG5cdFx0XHRcdGhlaWdodD17MzAwfVxyXG5cdFx0XHRcdHdpZHRoPXszMDB9XHJcblx0XHRcdFx0b2JqZWN0Rml0PSdjb250YWluJ1xyXG5cdFx0XHRcdG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvcHJvZHVjdC8ke3Byb2R1Y3QuX2lkfWApfVxyXG5cdFx0XHQvPlxyXG5cclxuXHRcdFx0PGg0IGNsYXNzTmFtZT0nbXktNSBsaW5lLWNsYW1wLTIgY2FwaXRhbGl6ZScgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9wcm9kdWN0LyR7cHJvZHVjdC5faWR9YCl9PlxyXG5cdFx0XHRcdHtwcm9kdWN0LnRpdGxlfVxyXG5cdFx0XHQ8L2g0PlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XHJcblx0XHRcdFx0XHR7QXJyYXkocmF0aW5nKVxyXG5cdFx0XHRcdFx0XHQuZmlsbCgpXHJcblx0XHRcdFx0XHRcdC5tYXAoKF8sIGkpID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGtleT17aX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8U3Rhckljb24gY2xhc3NOYW1lPSdoLTUgdGV4dC15ZWxsb3ctNTAwJyAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3Byb2R1Y3QuaW5TdG9jayA8PSAwID8gJ3RleHQtcmVkLTUwMCcgOiAndGV4dC1ncmVlbi02MDAnfT5cclxuXHRcdFx0XHRcdHtwcm9kdWN0LmluU3RvY2sgPD0gMCA/IGBI4bq/dCBow6BuZ2AgOiBgS2hvOiAke3Byb2R1Y3QuaW5TdG9ja31gfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC14cyBteS0yIGxpbmUtY2xhbXAtMic+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2BmbGV4IHNwYWNlLXgtNSAke2hhc1ByaW1lID8gJycgOiAnbWItNCd9YH0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQtZ3JheS02MDAgbGluZS10aHJvdWdoJz5cclxuXHRcdFx0XHRcdDxDdXJyZW5jeSBxdWFudGl0eT17cHJvZHVjdC5wcmljZU9yaWdpbn0gY3VycmVuY3k9J1ZORCcgcGF0dGVybj0nIyMsIyMjICEnIGdyb3VwPScuJyAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGV4dC1yZWQtNjAwJz5cclxuXHRcdFx0XHRcdDxDdXJyZW5jeSBxdWFudGl0eT17cHJvZHVjdC5wcmljZVNhbGV9IGN1cnJlbmN5PSdWTkQnIHBhdHRlcm49JyMjLCMjIyAhJyBncm91cD0nLicgLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHR7aGFzUHJpbWUgPyAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMic+XHJcblx0XHRcdFx0XHR7LyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi99XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz0naHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL2ZkdycgYWx0PSdHaWFvIGjDoG5nIG1p4buFbiBwaMOtJyBjbGFzc05hbWU9J3ctMTInIC8+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQteHMgdGV4dC1ncmF5LTUwMCc+R2lhbyBow6BuZyBtaeG7hW4gcGjDrTwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KSA6IChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGV4dC14cyB0ZXh0LWdyYXktNTAwIG15LTInPlRQLiBI4buTIENow60gTWluaDwvZGl2PlxyXG5cdFx0XHQpfVxyXG5cclxuXHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvcHJvZHVjdC8ke3Byb2R1Y3QuX2lkfWApfVxyXG5cdFx0XHRcdGNsYXNzTmFtZT0nbXgtYXV0byBidXR0b24tYmx1ZSBwLTIgdGV4dC1ncmF5LTcwMCBmb250LXNlbWlib2xkIHRleHQteGwnXHJcblx0XHRcdD5cclxuXHRcdFx0XHRYZW0gY2hpIHRp4bq/dFxyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XHJcbiJdLCJuYW1lcyI6WyJTdGFySWNvbiIsIkltYWdlIiwidXNlUm91dGVyIiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiQ3VycmVuY3kiLCJEYXRhQ29udGV4dCIsIk1BWF9SQVRJTkciLCJNSU5fUkFUSU5HIiwiUHJvZHVjdCIsInByb2R1Y3QiLCJyb3V0ZXIiLCJzdGF0ZSIsImNhdGVnb3JpZXMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYXRpbmciLCJoYXNQcmltZSIsImZpbmRDYXRlZ29yeU5hbWVGcm9tSWQiLCJpZCIsImZpbHRlciIsImNhdGVnb3J5IiwiX2lkIiwibWFwIiwibmFtZSIsImltYWdlcyIsInVybCIsInB1c2giLCJ0aXRsZSIsIkFycmF5IiwiZmlsbCIsIl8iLCJpIiwiaW5TdG9jayIsImRlc2NyaXB0aW9uIiwicHJpY2VPcmlnaW4iLCJwcmljZVNhbGUiXSwic291cmNlUm9vdCI6IiJ9