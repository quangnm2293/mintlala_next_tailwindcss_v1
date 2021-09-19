"use strict";
self["webpackHotUpdate_N_E"]("components_tailwind_ProductHome_js",{

/***/ "./components/tailwind/ProductHome.js":
/*!********************************************!*\
  !*** ./components/tailwind/ProductHome.js ***!
  \********************************************/
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


var _jsxFileName = "E:\\Works\\VSCode\\NextJS\\next-website-mintlala\\components\\tailwind\\ProductHome.js",
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
      className: "relative flex flex-col md:m-2 bg-white z-30 p-5 pt-10 cursor-pointer shadow-md transition duration-300 transform hover:-translate-y-2 hover:shadow-lg",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "absolute top-2 right-2 capitalize text-xs text-gray-400 italic",
        children: findCategoryNameFromId(product.category)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
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
        lineNumber: 30,
        columnNumber: 4
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        className: "my-5 line-clamp-2 capitalize",
        onClick: function onClick() {
          return router.push("/product/".concat(product._id));
        },
        children: product.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 4
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex justify-between mb-3",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex",
          children: Array(rating).fill().map(function (_, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.StarIcon, {
                className: "h-5 text-yellow-500"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 9
              }, _this)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 8
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 4
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex items-center justify-between ".concat(hasPrime ? '' : 'mb-4'),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-red-600 text-xs sm:text-lg",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_5___default()), {
            quantity: product.priceSale,
            currency: "VND",
            pattern: "##,### !",
            group: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 6
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-blue-500 text-xs sm:text-lg",
            children: ["\u0110\xE3 b\xE1n: ", product.sold]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 6
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 4
      }, this), hasPrime ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex items-center space-x-2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "https://links.papareact.com/fdw",
          alt: "Giao h\xE0ng mi\u1EC5n ph\xED",
          className: "w-12"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-xs text-gray-500",
          children: "Giao h\xE0ng mi\u1EC5n ph\xED"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 5
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-xs text-gray-500 my-2",
        children: "TP. H\u1ED3 Ch\xED Minh"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 5
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

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svY29tcG9uZW50c190YWlsd2luZF9Qcm9kdWN0SG9tZV9qcy41YTU3Y2Y0ODRhZDBiZGExOThkZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNTyxVQUFVLEdBQUcsQ0FBbkI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsQ0FBbkI7O0FBRUEsU0FBU0MsT0FBVCxPQUE4QjtBQUFBOztBQUFBOztBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVztBQUM3QixNQUFNQyxNQUFNLEdBQUdULHNEQUFTLEVBQXhCOztBQUQ2QixvQkFFWEMsaURBQVUsQ0FBQ0csMkRBQUQsQ0FGQztBQUFBLE1BRXJCTSxLQUZxQixlQUVyQkEsS0FGcUI7O0FBQUEsTUFHckJDLFVBSHFCLEdBR05ELEtBSE0sQ0FHckJDLFVBSHFCOztBQUFBLGtCQUtaVCwrQ0FBUSxDQUFDVSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCVCxVQUFVLEdBQUdDLFVBQWIsR0FBMEIsQ0FBM0MsSUFBZ0RBLFVBQTNELENBQUQsQ0FMSTtBQUFBLE1BS3RCUyxNQUxzQjs7QUFBQSxtQkFNVmIsK0NBQVEsQ0FBQ1UsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEdBQWpCLENBTkU7QUFBQSxNQU10QkUsUUFOc0I7O0FBUTdCLE1BQU1DLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQUMsRUFBRSxFQUFJO0FBQ3BDLFdBQU9QLFVBQVUsQ0FBQ1EsTUFBWCxDQUFrQixVQUFBQyxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDQyxHQUFULEtBQWlCSCxFQUFyQjtBQUFBLEtBQTFCLEVBQW1ESSxHQUFuRCxDQUF1RCxVQUFBRixRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDRyxJQUFiO0FBQUEsS0FBL0QsQ0FBUDtBQUNBLEdBRkQ7O0FBSUE7QUFBQTtBQUNDO0FBQ0E7QUFBSyxlQUFTLEVBQUMsdUpBQWY7QUFBQSw4QkFDQztBQUFHLGlCQUFTLEVBQUMsZ0VBQWI7QUFBQSxrQkFDRU4sc0JBQXNCLENBQUNULE9BQU8sQ0FBQ1ksUUFBVDtBQUR4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFLQyw4REFBQyxtREFBRDtBQUNDLFdBQUcsRUFBRVosT0FBTyxDQUFDZ0IsTUFBUixDQUFlLENBQWYsRUFBa0JDLEdBRHhCO0FBRUMsV0FBRyxFQUFDLFNBRkw7QUFHQyxjQUFNLEVBQUUsR0FIVDtBQUlDLGFBQUssRUFBRSxHQUpSO0FBS0MsaUJBQVMsRUFBQyxTQUxYO0FBTUMsZUFBTyxFQUFFO0FBQUEsaUJBQU1oQixNQUFNLENBQUNpQixJQUFQLG9CQUF3QmxCLE9BQU8sQ0FBQ2EsR0FBaEMsRUFBTjtBQUFBO0FBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxELGVBY0M7QUFBSSxpQkFBUyxFQUFDLDhCQUFkO0FBQTZDLGVBQU8sRUFBRTtBQUFBLGlCQUFNWixNQUFNLENBQUNpQixJQUFQLG9CQUF3QmxCLE9BQU8sQ0FBQ2EsR0FBaEMsRUFBTjtBQUFBLFNBQXREO0FBQUEsa0JBQ0ViLE9BQU8sQ0FBQ21CO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRELGVBa0JDO0FBQUssaUJBQVMsRUFBQywyQkFBZjtBQUFBLCtCQUNDO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQUEsb0JBQ0VDLEtBQUssQ0FBQ2IsTUFBRCxDQUFMLENBQ0NjLElBREQsR0FFQ1AsR0FGRCxDQUVLLFVBQUNRLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGdDQUNKO0FBQUEscUNBQ0MsOERBQUMsNERBQUQ7QUFBVSx5QkFBUyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxlQUFVQSxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREk7QUFBQSxXQUZMO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQkQsZUE4QkM7QUFBSyxpQkFBUyw4Q0FBdUNmLFFBQVEsR0FBRyxFQUFILEdBQVEsTUFBdkQsQ0FBZDtBQUFBLGdDQUNDO0FBQUssbUJBQVMsRUFBQyxpQ0FBZjtBQUFBLGlDQUNDLDhEQUFDLGlFQUFEO0FBQVUsb0JBQVEsRUFBRVIsT0FBTyxDQUFDd0IsU0FBNUI7QUFBdUMsb0JBQVEsRUFBQyxLQUFoRDtBQUFzRCxtQkFBTyxFQUFDLFVBQTlEO0FBQXlFLGlCQUFLLEVBQUM7QUFBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFJQztBQUFBLGlDQUNDO0FBQUcscUJBQVMsRUFBQyxrQ0FBYjtBQUFBLDhDQUF5RHhCLE9BQU8sQ0FBQ3lCLElBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBOUJELEVBdUNFakIsUUFBUSxnQkFDUjtBQUFLLGlCQUFTLEVBQUMsNkJBQWY7QUFBQSxnQ0FFQztBQUFLLGFBQUcsRUFBQyxpQ0FBVDtBQUEyQyxhQUFHLEVBQUMsK0JBQS9DO0FBQW9FLG1CQUFTLEVBQUM7QUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRCxlQUdDO0FBQUcsbUJBQVMsRUFBQyx1QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEUSxnQkFPUjtBQUFLLGlCQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkQ7QUFvREE7O0dBaEVRVDtVQUNPUDs7O0tBRFBPO0FBa0VULCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGFpbHdpbmQvUHJvZHVjdEhvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3Rhckljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ3VycmVuY3kgZnJvbSAncmVhY3QtY3VycmVuY3ktZm9ybWF0dGVyJztcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi8uLi9zdG9yZS9HbG9iYWxTdGF0ZSc7XHJcblxyXG5jb25zdCBNQVhfUkFUSU5HID0gNTtcclxuY29uc3QgTUlOX1JBVElORyA9IDM7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0KHsgcHJvZHVjdCB9KSB7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3QgeyBzdGF0ZSB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcblx0Y29uc3QgeyBjYXRlZ29yaWVzIH0gPSBzdGF0ZTtcclxuXHJcblx0Y29uc3QgW3JhdGluZ10gPSB1c2VTdGF0ZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoTUFYX1JBVElORyAtIE1JTl9SQVRJTkcgKyAxKSArIE1JTl9SQVRJTkcpKTtcclxuXHRjb25zdCBbaGFzUHJpbWVdID0gdXNlU3RhdGUoTWF0aC5yYW5kb20oKSA8IDAuNSk7XHJcblxyXG5cdGNvbnN0IGZpbmRDYXRlZ29yeU5hbWVGcm9tSWQgPSBpZCA9PiB7XHJcblx0XHRyZXR1cm4gY2F0ZWdvcmllcy5maWx0ZXIoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuX2lkID09PSBpZCkubWFwKGNhdGVnb3J5ID0+IGNhdGVnb3J5Lm5hbWUpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQvL3RyYW5zaXRpb24gZHVyYXRpb24tMTAwIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMjUgaG92ZXI6dGV4dC13aGl0ZSBhY3RpdmU6dGV4dC1yZWQtNTAwXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgZmxleCBmbGV4LWNvbCBtZDptLTIgYmctd2hpdGUgei0zMCBwLTUgcHQtMTAgY3Vyc29yLXBvaW50ZXIgc2hhZG93LW1kIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIHRyYW5zZm9ybSBob3ZlcjotdHJhbnNsYXRlLXktMiBob3ZlcjpzaGFkb3ctbGcnPlxyXG5cdFx0XHQ8cCBjbGFzc05hbWU9J2Fic29sdXRlIHRvcC0yIHJpZ2h0LTIgY2FwaXRhbGl6ZSB0ZXh0LXhzIHRleHQtZ3JheS00MDAgaXRhbGljJz5cclxuXHRcdFx0XHR7ZmluZENhdGVnb3J5TmFtZUZyb21JZChwcm9kdWN0LmNhdGVnb3J5KX1cclxuXHRcdFx0PC9wPlxyXG5cclxuXHRcdFx0PEltYWdlXHJcblx0XHRcdFx0c3JjPXtwcm9kdWN0LmltYWdlc1swXS51cmx9XHJcblx0XHRcdFx0YWx0PSdQcm9kdWN0J1xyXG5cdFx0XHRcdGhlaWdodD17MzAwfVxyXG5cdFx0XHRcdHdpZHRoPXszMDB9XHJcblx0XHRcdFx0b2JqZWN0Rml0PSdjb250YWluJ1xyXG5cdFx0XHRcdG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvcHJvZHVjdC8ke3Byb2R1Y3QuX2lkfWApfVxyXG5cdFx0XHQvPlxyXG5cclxuXHRcdFx0PGg0IGNsYXNzTmFtZT0nbXktNSBsaW5lLWNsYW1wLTIgY2FwaXRhbGl6ZScgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9wcm9kdWN0LyR7cHJvZHVjdC5faWR9YCl9PlxyXG5cdFx0XHRcdHtwcm9kdWN0LnRpdGxlfVxyXG5cdFx0XHQ8L2g0PlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuIG1iLTMnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4Jz5cclxuXHRcdFx0XHRcdHtBcnJheShyYXRpbmcpXHJcblx0XHRcdFx0XHRcdC5maWxsKClcclxuXHRcdFx0XHRcdFx0Lm1hcCgoXywgaSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxkaXYga2V5PXtpfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxTdGFySWNvbiBjbGFzc05hbWU9J2gtNSB0ZXh0LXllbGxvdy01MDAnIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuICR7aGFzUHJpbWUgPyAnJyA6ICdtYi00J31gfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGV4dC1yZWQtNjAwIHRleHQteHMgc206dGV4dC1sZyc+XHJcblx0XHRcdFx0XHQ8Q3VycmVuY3kgcXVhbnRpdHk9e3Byb2R1Y3QucHJpY2VTYWxlfSBjdXJyZW5jeT0nVk5EJyBwYXR0ZXJuPScjIywjIyMgIScgZ3JvdXA9Jy4nIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1ibHVlLTUwMCB0ZXh0LXhzIHNtOnRleHQtbGcnPsSQw6MgYsOhbjoge3Byb2R1Y3Quc29sZH08L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0e2hhc1ByaW1lID8gKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTInPlxyXG5cdFx0XHRcdFx0ey8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAbmV4dC9uZXh0L25vLWltZy1lbGVtZW50ICovfVxyXG5cdFx0XHRcdFx0PGltZyBzcmM9J2h0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9mZHcnIGFsdD0nR2lhbyBow6BuZyBtaeG7hW4gcGjDrScgY2xhc3NOYW1lPSd3LTEyJyAvPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LXhzIHRleHQtZ3JheS01MDAnPkdpYW8gaMOgbmcgbWnhu4VuIHBow608L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCkgOiAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQteHMgdGV4dC1ncmF5LTUwMCBteS0yJz5UUC4gSOG7kyBDaMOtIE1pbmg8L2Rpdj5cclxuXHRcdFx0KX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XHJcbiJdLCJuYW1lcyI6WyJTdGFySWNvbiIsIkltYWdlIiwidXNlUm91dGVyIiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiQ3VycmVuY3kiLCJEYXRhQ29udGV4dCIsIk1BWF9SQVRJTkciLCJNSU5fUkFUSU5HIiwiUHJvZHVjdCIsInByb2R1Y3QiLCJyb3V0ZXIiLCJzdGF0ZSIsImNhdGVnb3JpZXMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYXRpbmciLCJoYXNQcmltZSIsImZpbmRDYXRlZ29yeU5hbWVGcm9tSWQiLCJpZCIsImZpbHRlciIsImNhdGVnb3J5IiwiX2lkIiwibWFwIiwibmFtZSIsImltYWdlcyIsInVybCIsInB1c2giLCJ0aXRsZSIsIkFycmF5IiwiZmlsbCIsIl8iLCJpIiwicHJpY2VTYWxlIiwic29sZCJdLCJzb3VyY2VSb290IjoiIn0=