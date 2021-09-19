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

/* eslint-disable react-hooks/exhaustive-deps */








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
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    var interval = setInterval(function () {
      setPrevState(prevState === 3 ? 0 : prevState + 1);
    }, 5000);
    return function () {
      return clearInterval(interval);
    };
  }, []);
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
        lineNumber: 62,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-full h-20 bg-red-500 flex items-center justify-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-white text-sm lg:text-xl",
        children: notis[prevState]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
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
          lineNumber: 74,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
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
              lineNumber: 87,
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
              lineNumber: 91,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              className: "my-5 line-clamp-1 capitalize",
              onClick: function onClick() {
                return router.push("/product/".concat(product._id));
              },
              children: product.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
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
                      lineNumber: 113,
                      columnNumber: 13
                    }, _this)
                  }, i, false, {
                    fileName: _jsxFileName,
                    lineNumber: 112,
                    columnNumber: 12
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
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
                  lineNumber: 121,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 9
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "text-blue-500 text-xs sm:text-lg",
                  children: ["\u0110\xE3 b\xE1n: ", product.sold]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-xs text-gray-500 my-2",
              children: "TP. H\u1ED3 Ch\xED Minh"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 8
            }, _this)]
          }, product._id, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 7
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 3
  }, this);
}

_s(TopSoldAndNews, "EvdkgAmJ55E7clOHenrNQZRTBeA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWEzNDA2M2E0ZmU4OGExMjIxMmQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU1EsY0FBVCxHQUEwQjtBQUFBOztBQUFBOztBQUFBLGtCQUNTTCwrQ0FBUSxDQUFDLENBQUQsQ0FEakI7QUFBQSxNQUNsQk0sU0FEa0I7QUFBQSxNQUNQQyxZQURPOztBQUV6QixNQUFNQyxNQUFNLEdBQUdWLHNEQUFTLEVBQXhCOztBQUZ5QixtQkFHT0UsK0NBQVEsQ0FBQyxFQUFELENBSGY7QUFBQSxNQUdsQlMsUUFIa0I7QUFBQSxNQUdSQyxXQUhROztBQUFBLG1CQUllViwrQ0FBUSxDQUFDLEVBQUQsQ0FKdkI7QUFBQSxNQUlsQlcsWUFKa0I7QUFBQSxNQUlKQyxlQUpJOztBQU16QixNQUFNQyxLQUFLLEdBQUcsQ0FDYixnRUFEYSxFQUViLCtEQUZhLHFMQUtiLDhEQUxhLENBQWQ7QUFRQWQsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBTWUsUUFBUSxHQUFHQyxXQUFXLENBQUMsWUFBTTtBQUNsQ1IsTUFBQUEsWUFBWSxDQUFDRCxTQUFTLEtBQUssQ0FBZCxHQUFrQixDQUFsQixHQUFzQkEsU0FBUyxHQUFHLENBQW5DLENBQVo7QUFDQSxLQUYyQixFQUV6QixJQUZ5QixDQUE1QjtBQUdBLFdBQU87QUFBQSxhQUFNVSxhQUFhLENBQUNGLFFBQUQsQ0FBbkI7QUFBQSxLQUFQO0FBQ0EsR0FMUSxFQUtOLEVBTE0sQ0FBVDtBQU9BZixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZixRQUFNa0IsV0FBVztBQUFBLCtVQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRVpwQixnREFBQSxDQUNBc0IsU0FBUyxpRUFEVCxFQUVKQyxJQUZJLENBRUMs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QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFyREQ7QUFBQSxhQUNNWixPQUFPLENBQUNLLEdBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEd0I7QUFBQSxTQUF4QjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQW9GQTs7R0FwSVE3QjtVQUVPUDs7O0tBRlBPO0FBc0lULCtEQUFlQSxjQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGFpbHdpbmQvVG9wU29sZEFuZE5ld3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb2R1Y3RzUHJldmlldyBmcm9tICcuL1Byb2R1Y3RzUHJldmlldyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgU3Rhckljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJztcclxuaW1wb3J0IEN1cnJlbmN5IGZyb20gJ3JlYWN0LWN1cnJlbmN5LWZvcm1hdHRlcic7XHJcblxyXG5mdW5jdGlvbiBUb3BTb2xkQW5kTmV3cygpIHtcclxuXHRjb25zdCBbcHJldlN0YXRlLCBzZXRQcmV2U3RhdGVdID0gdXNlU3RhdGUoMCk7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW3Byb2R1Y3RzU2FsZSwgc2V0UHJvZHVjdHNTYWxlXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3Qgbm90aXMgPSBbXHJcblx0XHQnSE9UOiBTYWxlIDUwJSBjaG8gxJHGoW4gaMOgbmcgdOG7qyAyIHRyaeG7h3UsIG1p4buFbiBwaMOtIHNoaXAgdG/DoG4gcXXhu5FjJyxcclxuXHRcdCdUdeG6p24gbOG7hSBz4bq1biBTQUxFIG3DuWEgZOG7i2NoLCBnaeG6o20gZ2nDoSBr4buLY2ggc8OgbiB0b8OgbiBi4buZIHPhuqNuIHBo4bqpbScsXHJcblx0XHRgVGjDtG5nIGLDoW86IFTDrG5oIGjDrG5oIGThu4tjaCBDb3ZpZC0xOSBNSU5UIExhbGEgY2jhu4kgbmjhuq1uIMSR4bq3dCBow6BuZyBvbmxpbmUga2jDtG5nIHThu5tpIGPhu61hIGjDoG5nIHThu6tcclxuXHRcdFx0XHRcdG5nw6B5IDgvN2AsXHJcblx0XHQnTmjhuq1wIG3DoyBNSU5UTEFMQTUwSyDEkeG7gyDEkcaw4bujYyBnaeG6o20gbmdheSA1MGsgY2jGoSDEkcahbiB04burIDEgdHJp4buHdScsXHJcblx0XTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRzZXRQcmV2U3RhdGUocHJldlN0YXRlID09PSAzID8gMCA6IHByZXZTdGF0ZSArIDEpO1xyXG5cdFx0fSwgNTAwMCk7XHJcblx0XHRyZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0YXdhaXQgYXhpb3NcclxuXHRcdFx0XHRcdC5nZXQoZW5jb2RlVVJJKGAvYXBpL3Byb2R1Y3Q/cGFnZT0xJmNhdGVnb3J5PWFsbCZzb3J0PS1zb2xkJmxpbWl0PTUmdGl0bGU9YWxsYCkpXHJcblx0XHRcdFx0XHQudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRQcm9kdWN0cyhyZXMuZGF0YS5wcm9kdWN0cy5zcGxpY2UoMCwgNSkpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdGdldFByb2R1Y3RzKCk7XHJcblx0XHRjb25zdCBnZXRQcm9kdWN0c1NhbGUgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0YXdhaXQgYXhpb3NcclxuXHRcdFx0XHRcdC5nZXQoZW5jb2RlVVJJKGAvYXBpL3Byb2R1Y3Q/cGFnZT0xJmNhdGVnb3J5PWFsbCZzb3J0PXByaWNlU2FsZSZsaW1pdD01JnRpdGxlPWFsbGApKVxyXG5cdFx0XHRcdFx0LnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0c2V0UHJvZHVjdHNTYWxlKHJlcy5kYXRhLnByb2R1Y3RzLnNwbGljZSgwLCA1KSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0Z2V0UHJvZHVjdHNTYWxlKCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J215LTQnPlxyXG5cdFx0XHR7LyogVG9wIFNvbGQgKi99XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdteS00Jz5cclxuXHRcdFx0XHQ8UHJvZHVjdHNQcmV2aWV3IHByb2R1Y3RzPXtwcm9kdWN0c30gcm91dGVyPXtyb3V0ZXJ9IHRpdGxlPXsnYsOhbiBjaOG6oXkgbmjhuqV0ICEnfSAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdHsvKiBOb3RpZnljYXRpb24gKi99XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgaC0yMCBiZy1yZWQtNTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJz5cclxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtd2hpdGUgdGV4dC1zbSBsZzp0ZXh0LXhsJz57bm90aXNbcHJldlN0YXRlXX08L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0ey8qIFRvcCBzYWxlICovfVxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J215LTggcmVsYXRpdmUnPlxyXG5cdFx0XHRcdDx2aWRlbyBtdXRlZCBsb29wIHBsYXlzSW5saW5lIGF1dG9QbGF5IGNsYXNzTmFtZT0nbGc6dy0xLzInPlxyXG5cdFx0XHRcdFx0PHNvdXJjZVxyXG5cdFx0XHRcdFx0XHRzcmM9J2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2RyaXZlL3YzL2ZpbGVzLzFrNmZRMWVHZlQxYXdlTkJZNGs4czFleXhnZTdSa1hMbz9hbHQ9bWVkaWEma2V5PUFJemFTeUF0X3NCaW5nNTdQd0FDRG03MFlNSUo5NU1rY3NGNHNfRSdcclxuXHRcdFx0XHRcdFx0dHlwZT0ndmlkZW8vbXA0J1xyXG5cdFx0XHRcdFx0Pjwvc291cmNlPlxyXG5cdFx0XHRcdDwvdmlkZW8+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzdGF0aWMgbGc6YWJzb2x1dGUgbXktOCBsZzpteS0wIGxnOnctWzEwMDBweF0gaC1bNzUlXSBvdmVyZmxvdy14LWF1dG8gc2Nyb2xsYmFyLWhpZGUgcmlnaHQtMCBib3R0b20tWzE1JV0gZmxleCc+XHJcblx0XHRcdFx0XHR7cHJvZHVjdHNTYWxlLm1hcChwcm9kdWN0ID0+IChcclxuXHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdGtleT17cHJvZHVjdC5faWR9XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIG1kOm0tMiBiZy13aGl0ZSB6LTMwIHAtNSBwdC0xMCBjdXJzb3ItcG9pbnRlciBzaGFkb3ctbWQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIHRyYW5zZm9ybSBob3ZlcjotdHJhbnNsYXRlLXktMiBob3ZlcjpzaGFkb3ctbGcgbWluLXctWzI1MHB4XSdcclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nYWJzb2x1dGUgdG9wLTIgcmlnaHQtMiBjYXBpdGFsaXplIHRleHQteHMgdGV4dC1ncmF5LTQwMCBpdGFsaWMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0e3Byb2R1Y3QuY2F0ZWdvcnl9XHJcblx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdHNyYz17cHJvZHVjdC5pbWFnZXNbMF0udXJsfVxyXG5cdFx0XHRcdFx0XHRcdFx0YWx0PSdQcm9kdWN0J1xyXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PXszMDB9XHJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aD17MzAwfVxyXG5cdFx0XHRcdFx0XHRcdFx0b2JqZWN0Rml0PSdjb250YWluJ1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9wcm9kdWN0LyR7cHJvZHVjdC5faWR9YCl9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGg0XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J215LTUgbGluZS1jbGFtcC0xIGNhcGl0YWxpemUnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL3Byb2R1Y3QvJHtwcm9kdWN0Ll9pZH1gKX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHR7cHJvZHVjdC50aXRsZX1cclxuXHRcdFx0XHRcdFx0XHQ8L2g0PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4gbWItMyc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtBcnJheSg1KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5maWxsKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQubWFwKChfLCBpKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGtleT17aX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxTdGFySWNvbiBjbGFzc05hbWU9J2gtNSB0ZXh0LXllbGxvdy01MDAnIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbmB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQtcmVkLTYwMCB0ZXh0LXhzIHNtOnRleHQtbGcnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q3VycmVuY3lcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRxdWFudGl0eT17cHJvZHVjdC5wcmljZVNhbGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVuY3k9J1ZORCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYXR0ZXJuPScjIywjIyMgISdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRncm91cD0nLidcclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LWJsdWUtNTAwIHRleHQteHMgc206dGV4dC1sZyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0xJDDoyBiw6FuOiB7cHJvZHVjdC5zb2xkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQteHMgdGV4dC1ncmF5LTUwMCBteS0yJz5UUC4gSOG7kyBDaMOtIE1pbmg8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BTb2xkQW5kTmV3cztcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQcm9kdWN0c1ByZXZpZXciLCJJbWFnZSIsIlN0YXJJY29uIiwiQ3VycmVuY3kiLCJUb3BTb2xkQW5kTmV3cyIsInByZXZTdGF0ZSIsInNldFByZXZTdGF0ZSIsInJvdXRlciIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJwcm9kdWN0c1NhbGUiLCJzZXRQcm9kdWN0c1NhbGUiLCJub3RpcyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZ2V0UHJvZHVjdHMiLCJnZXQiLCJlbmNvZGVVUkkiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInNwbGljZSIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiZ2V0UHJvZHVjdHNTYWxlIiwibWFwIiwicHJvZHVjdCIsImNhdGVnb3J5IiwiaW1hZ2VzIiwidXJsIiwicHVzaCIsIl9pZCIsInRpdGxlIiwiQXJyYXkiLCJmaWxsIiwiXyIsImkiLCJwcmljZVNhbGUiLCJzb2xkIl0sInNvdXJjZVJvb3QiOiIifQ==