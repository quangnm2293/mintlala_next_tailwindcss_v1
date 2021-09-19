"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/tailwind/TopSoldAndNews.js":
/*!***********************************************!*\
  !*** ./components/tailwind/TopSoldAndNews.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ProductsPreview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductsPreview */ "./components/tailwind/ProductsPreview.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-currency-formatter */ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "E:\\Works\\VSCode\\NextJS\\next-website-mintlala\\components\\tailwind\\TopSoldAndNews.js",
    _s = $RefreshSig$();









function TopSoldAndNews() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0),
      prevState = _useState[0],
      setPrevState = _useState[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      products = _useState2[0],
      setProducts = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      productsSale = _useState3[0],
      setProductsSale = _useState3[1];

  var notis = ['HOT: Sale 50% cho đơn hàng từ 2 triệu, miễn phí ship toàn quốc', 'Tuần lễ sẵn SALE mùa dịch, giảm giá kịch sàn toàn bộ sản phẩm', "Th\xF4ng b\xE1o: T\xECnh h\xECnh d\u1ECBch Covid-19 MINT Lala ch\u1EC9 nh\u1EADn \u0111\u1EB7t h\xE0ng online kh\xF4ng t\u1EDBi c\u1EEDa h\xE0ng t\u1EEB\n\t\t\t\t\tng\xE0y 8/7", 'Nhập mã MINTLALA50K để được giảm ngay 50k chơ đơn từ 1 triệu'];
  setInterval(function () {
    setPrevState(prevState === 3 ? 0 : prevState + 1);
  }, 5000);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    var getProducts = /*#__PURE__*/function () {
      var _ref = (0,E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        return E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_3___default().get(encodeURI("/api/product?page=1&category=all&sort=-sold&limit=5&title=all")).then(function (res) {
                  setProducts(res.data.products.splice(0, 5));
                });

              case 3:
                _context.next = 8;
                break;

              case 5:
                _context.prev = 5;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0.message);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 5]]);
      }));

      return function getProducts() {
        return _ref.apply(this, arguments);
      };
    }();

    getProducts();

    var getProductsSale = /*#__PURE__*/function () {
      var _ref2 = (0,E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
        return E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_3___default().get(encodeURI("/api/product?page=1&category=all&sort=priceSale&limit=5&title=all")).then(function (res) {
                  setProductsSale(res.data.products.splice(0, 5));
                });

              case 3:
                _context2.next = 8;
                break;

              case 5:
                _context2.prev = 5;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0.message);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 5]]);
      }));

      return function getProductsSale() {
        return _ref2.apply(this, arguments);
      };
    }();

    getProductsSale();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "my-4",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "my-4",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductsPreview__WEBPACK_IMPORTED_MODULE_6__.default, {
        products: products,
        router: router,
        title: 'bán chạy nhất !'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-full h-20 bg-red-500 flex items-center justify-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-white text-sm lg:text-xl",
        children: notis[prevState]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "my-8 relative",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("video", {
        muted: true,
        loop: true,
        playsInline: true,
        autoPlay: true,
        className: "lg:w-1/2",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("source", {
          src: "https://www.googleapis.com/drive/v3/files/1k6fQ1eGfT1aweNBY4k8s1eyxge7RkXLo?alt=media&key=AIzaSyAt_sBing57PwACDm70YMIJ95MkcsF4s_E",
          type: "video/mp4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "static lg:absolute my-8 lg:my-0 lg:w-[1000px] h-[75%] overflow-x-auto scrollbar-hide right-0 bottom-[15%] flex",
        children: productsSale.map(function (product) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "relative flex flex-col md:m-2 bg-white z-30 p-5 pt-10 cursor-pointer shadow-md \r transition duration-300 transform hover:-translate-y-2 hover:shadow-lg min-w-[250px]",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "absolute top-2 right-2 capitalize text-xs text-gray-400 italic",
              children: product.category
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
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
              lineNumber: 87,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              className: "my-5 line-clamp-1 capitalize",
              onClick: function onClick() {
                return router.push("/product/".concat(product._id));
              },
              children: product.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex justify-between mb-3",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "flex",
                children: Array(5).fill().map(function (_, i) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_8__.StarIcon, {
                      className: "h-5 text-yellow-500"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 109,
                      columnNumber: 13
                    }, _this)
                  }, i, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 12
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex items-center justify-between",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "text-red-600 text-xs sm:text-lg",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_9___default()), {
                  quantity: product.priceSale,
                  currency: "VND",
                  pattern: "##,### !",
                  group: "."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 9
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "text-blue-500 text-xs sm:text-lg",
                  children: ["\u0110\xE3 b\xE1n: ", product.sold]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-xs text-gray-500 my-2",
              children: "TP. H\u1ED3 Ch\xED Minh"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 8
            }, _this)]
          }, product._id, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 7
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 3
  }, this);
}

_s(TopSoldAndNews, "RvNIast/6InFgGPtSEnRfVligJY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = TopSoldAndNews;
/* harmony default export */ __webpack_exports__["default"] = (TopSoldAndNews);

var _c;

$RefreshReg$(_c, "TopSoldAndNews");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzI2MWZjY2E3NTdiZTdiYzNhZDEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNRLGNBQVQsR0FBMEI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDU0wsK0NBQVEsQ0FBQyxDQUFELENBRGpCO0FBQUEsTUFDbEJNLFNBRGtCO0FBQUEsTUFDUEMsWUFETzs7QUFFekIsTUFBTUMsTUFBTSxHQUFHVixzREFBUyxFQUF4Qjs7QUFGeUIsbUJBR09FLCtDQUFRLENBQUMsRUFBRCxDQUhmO0FBQUEsTUFHbEJTLFFBSGtCO0FBQUEsTUFHUkMsV0FIUTs7QUFBQSxtQkFJZVYsK0NBQVEsQ0FBQyxFQUFELENBSnZCO0FBQUEsTUFJbEJXLFlBSmtCO0FBQUEsTUFJSkMsZUFKSTs7QUFNekIsTUFBTUMsS0FBSyxHQUFHLENBQ2IsZ0VBRGEsRUFFYiwrREFGYSxxTEFLYiw4REFMYSxDQUFkO0FBUUFDLEVBQUFBLFdBQVcsQ0FBQyxZQUFNO0FBQ2pCUCxJQUFBQSxZQUFZLENBQUNELFNBQVMsS0FBSyxDQUFkLEdBQWtCLENBQWxCLEdBQXNCQSxTQUFTLEdBQUcsQ0FBbkMsQ0FBWjtBQUNBLEdBRlUsRUFFUixJQUZRLENBQVg7QUFJQVAsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBTWdCLFdBQVc7QUFBQSwrVUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUVabEIsZ0RBQUEsQ0FDQW9CLFNBQVMsaUVBRFQsRUFFSkMsSUFGSSxDQUVDLFVBQUFDLEdBQUcsRUFBSTtBQUNaVCxrQkFBQUEsV0FBVyxDQUFDUyxHQUFHLENBQUNDLElBQUosQ0FBU1gsUUFBVCxDQUFrQlksTUFBbEIsQ0FBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FBRCxDQUFYO0FBQ0EsaUJBSkks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O0FBQUEsY0FSRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQW9GQTs7R0FqSVEzQjtVQUVPUDs7O0tBRlBPO0FBbUlULCtEQUFlQSxjQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGFpbHdpbmQvVG9wU29sZEFuZE5ld3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvZHVjdHNQcmV2aWV3IGZyb20gJy4vUHJvZHVjdHNQcmV2aWV3JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBTdGFySWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnO1xyXG5pbXBvcnQgQ3VycmVuY3kgZnJvbSAncmVhY3QtY3VycmVuY3ktZm9ybWF0dGVyJztcclxuXHJcbmZ1bmN0aW9uIFRvcFNvbGRBbmROZXdzKCkge1xyXG5cdGNvbnN0IFtwcmV2U3RhdGUsIHNldFByZXZTdGF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbcHJvZHVjdHNTYWxlLCBzZXRQcm9kdWN0c1NhbGVdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHRjb25zdCBub3RpcyA9IFtcclxuXHRcdCdIT1Q6IFNhbGUgNTAlIGNobyDEkcahbiBow6BuZyB04burIDIgdHJp4buHdSwgbWnhu4VuIHBow60gc2hpcCB0b8OgbiBxdeG7kWMnLFxyXG5cdFx0J1R14bqnbiBs4buFIHPhurVuIFNBTEUgbcO5YSBk4buLY2gsIGdp4bqjbSBnacOhIGvhu4tjaCBzw6BuIHRvw6BuIGLhu5kgc+G6o24gcGjhuqltJyxcclxuXHRcdGBUaMO0bmcgYsOhbzogVMOsbmggaMOsbmggZOG7i2NoIENvdmlkLTE5IE1JTlQgTGFsYSBjaOG7iSBuaOG6rW4gxJHhurd0IGjDoG5nIG9ubGluZSBraMO0bmcgdOG7m2kgY+G7rWEgaMOgbmcgdOG7q1xyXG5cdFx0XHRcdFx0bmfDoHkgOC83YCxcclxuXHRcdCdOaOG6rXAgbcOjIE1JTlRMQUxBNTBLIMSR4buDIMSRxrDhu6NjIGdp4bqjbSBuZ2F5IDUwayBjaMahIMSRxqFuIHThu6sgMSB0cmnhu4d1JyxcclxuXHRdO1xyXG5cclxuXHRzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRzZXRQcmV2U3RhdGUocHJldlN0YXRlID09PSAzID8gMCA6IHByZXZTdGF0ZSArIDEpO1xyXG5cdH0sIDUwMDApO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0YXdhaXQgYXhpb3NcclxuXHRcdFx0XHRcdC5nZXQoZW5jb2RlVVJJKGAvYXBpL3Byb2R1Y3Q/cGFnZT0xJmNhdGVnb3J5PWFsbCZzb3J0PS1zb2xkJmxpbWl0PTUmdGl0bGU9YWxsYCkpXHJcblx0XHRcdFx0XHQudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRQcm9kdWN0cyhyZXMuZGF0YS5wcm9kdWN0cy5zcGxpY2UoMCwgNSkpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdGdldFByb2R1Y3RzKCk7XHJcblx0XHRjb25zdCBnZXRQcm9kdWN0c1NhbGUgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0YXdhaXQgYXhpb3NcclxuXHRcdFx0XHRcdC5nZXQoZW5jb2RlVVJJKGAvYXBpL3Byb2R1Y3Q/cGFnZT0xJmNhdGVnb3J5PWFsbCZzb3J0PXByaWNlU2FsZSZsaW1pdD01JnRpdGxlPWFsbGApKVxyXG5cdFx0XHRcdFx0LnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0c2V0UHJvZHVjdHNTYWxlKHJlcy5kYXRhLnByb2R1Y3RzLnNwbGljZSgwLCA1KSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0Z2V0UHJvZHVjdHNTYWxlKCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J215LTQnPlxyXG5cdFx0XHR7LyogVG9wIFNvbGQgKi99XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdteS00Jz5cclxuXHRcdFx0XHQ8UHJvZHVjdHNQcmV2aWV3IHByb2R1Y3RzPXtwcm9kdWN0c30gcm91dGVyPXtyb3V0ZXJ9IHRpdGxlPXsnYsOhbiBjaOG6oXkgbmjhuqV0ICEnfSAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdHsvKiBOb3RpZnljYXRpb24gKi99XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgaC0yMCBiZy1yZWQtNTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJz5cclxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtd2hpdGUgdGV4dC1zbSBsZzp0ZXh0LXhsJz57bm90aXNbcHJldlN0YXRlXX08L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0ey8qIFRvcCBzYWxlICovfVxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J215LTggcmVsYXRpdmUnPlxyXG5cdFx0XHRcdDx2aWRlbyBtdXRlZCBsb29wIHBsYXlzSW5saW5lIGF1dG9QbGF5IGNsYXNzTmFtZT0nbGc6dy0xLzInPlxyXG5cdFx0XHRcdFx0PHNvdXJjZVxyXG5cdFx0XHRcdFx0XHRzcmM9J2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2RyaXZlL3YzL2ZpbGVzLzFrNmZRMWVHZlQxYXdlTkJZNGs4czFleXhnZTdSa1hMbz9hbHQ9bWVkaWEma2V5PUFJemFTeUF0X3NCaW5nNTdQd0FDRG03MFlNSUo5NU1rY3NGNHNfRSdcclxuXHRcdFx0XHRcdFx0dHlwZT0ndmlkZW8vbXA0J1xyXG5cdFx0XHRcdFx0Pjwvc291cmNlPlxyXG5cdFx0XHRcdDwvdmlkZW8+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzdGF0aWMgbGc6YWJzb2x1dGUgbXktOCBsZzpteS0wIGxnOnctWzEwMDBweF0gaC1bNzUlXSBvdmVyZmxvdy14LWF1dG8gc2Nyb2xsYmFyLWhpZGUgcmlnaHQtMCBib3R0b20tWzE1JV0gZmxleCc+XHJcblx0XHRcdFx0XHR7cHJvZHVjdHNTYWxlLm1hcChwcm9kdWN0ID0+IChcclxuXHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdGtleT17cHJvZHVjdC5faWR9XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIG1kOm0tMiBiZy13aGl0ZSB6LTMwIHAtNSBwdC0xMCBjdXJzb3ItcG9pbnRlciBzaGFkb3ctbWQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIHRyYW5zZm9ybSBob3ZlcjotdHJhbnNsYXRlLXktMiBob3ZlcjpzaGFkb3ctbGcgbWluLXctWzI1MHB4XSdcclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nYWJzb2x1dGUgdG9wLTIgcmlnaHQtMiBjYXBpdGFsaXplIHRleHQteHMgdGV4dC1ncmF5LTQwMCBpdGFsaWMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0e3Byb2R1Y3QuY2F0ZWdvcnl9XHJcblx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdHNyYz17cHJvZHVjdC5pbWFnZXNbMF0udXJsfVxyXG5cdFx0XHRcdFx0XHRcdFx0YWx0PSdQcm9kdWN0J1xyXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PXszMDB9XHJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aD17MzAwfVxyXG5cdFx0XHRcdFx0XHRcdFx0b2JqZWN0Rml0PSdjb250YWluJ1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9wcm9kdWN0LyR7cHJvZHVjdC5faWR9YCl9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGg0XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J215LTUgbGluZS1jbGFtcC0xIGNhcGl0YWxpemUnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL3Byb2R1Y3QvJHtwcm9kdWN0Ll9pZH1gKX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHR7cHJvZHVjdC50aXRsZX1cclxuXHRcdFx0XHRcdFx0XHQ8L2g0PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4gbWItMyc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtBcnJheSg1KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5maWxsKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQubWFwKChfLCBpKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGtleT17aX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxTdGFySWNvbiBjbGFzc05hbWU9J2gtNSB0ZXh0LXllbGxvdy01MDAnIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbmB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQtcmVkLTYwMCB0ZXh0LXhzIHNtOnRleHQtbGcnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q3VycmVuY3lcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRxdWFudGl0eT17cHJvZHVjdC5wcmljZVNhbGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVuY3k9J1ZORCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYXR0ZXJuPScjIywjIyMgISdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRncm91cD0nLidcclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LWJsdWUtNTAwIHRleHQteHMgc206dGV4dC1sZyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0xJDDoyBiw6FuOiB7cHJvZHVjdC5zb2xkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQteHMgdGV4dC1ncmF5LTUwMCBteS0yJz5UUC4gSOG7kyBDaMOtIE1pbmg8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BTb2xkQW5kTmV3cztcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQcm9kdWN0c1ByZXZpZXciLCJJbWFnZSIsIlN0YXJJY29uIiwiQ3VycmVuY3kiLCJUb3BTb2xkQW5kTmV3cyIsInByZXZTdGF0ZSIsInNldFByZXZTdGF0ZSIsInJvdXRlciIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJwcm9kdWN0c1NhbGUiLCJzZXRQcm9kdWN0c1NhbGUiLCJub3RpcyIsInNldEludGVydmFsIiwiZ2V0UHJvZHVjdHMiLCJnZXQiLCJlbmNvZGVVUkkiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInNwbGljZSIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiZ2V0UHJvZHVjdHNTYWxlIiwibWFwIiwicHJvZHVjdCIsImNhdGVnb3J5IiwiaW1hZ2VzIiwidXJsIiwicHVzaCIsIl9pZCIsInRpdGxlIiwiQXJyYXkiLCJmaWxsIiwiXyIsImkiLCJwcmljZVNhbGUiLCJzb2xkIl0sInNvdXJjZVJvb3QiOiIifQ==