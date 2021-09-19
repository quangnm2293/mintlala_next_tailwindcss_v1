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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTVlZTFkMzM1YzVjNzg3YjU0YjYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNRLGNBQVQsR0FBMEI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDU0wsK0NBQVEsQ0FBQyxDQUFELENBRGpCO0FBQUEsTUFDbEJNLFNBRGtCO0FBQUEsTUFDUEMsWUFETzs7QUFFekIsTUFBTUMsTUFBTSxHQUFHVixzREFBUyxFQUF4Qjs7QUFGeUIsbUJBR09FLCtDQUFRLENBQUMsRUFBRCxDQUhmO0FBQUEsTUFHbEJTLFFBSGtCO0FBQUEsTUFHUkMsV0FIUTs7QUFBQSxtQkFJZVYsK0NBQVEsQ0FBQyxFQUFELENBSnZCO0FBQUEsTUFJbEJXLFlBSmtCO0FBQUEsTUFJSkMsZUFKSTs7QUFNekIsTUFBTUMsS0FBSyxHQUFHLENBQ2IsZ0VBRGEsRUFFYiwrREFGYSxxTEFLYiw4REFMYSxDQUFkO0FBUUFkLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNmLFFBQU1lLFFBQVEsR0FBR0MsV0FBVyxDQUFDLFlBQU07QUFDbENSLE1BQUFBLFlBQVksQ0FBQ0QsU0FBUyxLQUFLLENBQWQsR0FBa0IsQ0FBbEIsR0FBc0JBLFNBQVMsR0FBRyxDQUFuQyxDQUFaO0FBQ0EsS0FGMkIsRUFFekIsSUFGeUIsQ0FBNUI7QUFHQSxXQUFPO0FBQUEsYUFBTVUsYUFBYSxDQUFDRixRQUFELENBQW5CO0FBQUEsS0FBUDtBQUNBLEdBTFEsRUFLTixFQUxNLENBQVQ7QUFRQWYsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBTWtCLFdBQVc7QUFBQSwrVUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUVacEIsZ0RBQUEsQ0FDQXNCLFNBQVMsaUVBRFQsRUFFSkMsSUFGSSxDQUVDLFVBQUFD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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBckREO0FBQUEsYUFDTVosT0FBTyxDQUFDSyxHQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRHdCO0FBQUEsU0FBeEI7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFvRkE7O0dBcklRN0I7VUFFT1A7OztLQUZQTztBQXVJVCwrREFBZUEsY0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RhaWx3aW5kL1RvcFNvbGRBbmROZXdzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb2R1Y3RzUHJldmlldyBmcm9tICcuL1Byb2R1Y3RzUHJldmlldyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgU3Rhckljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJztcclxuaW1wb3J0IEN1cnJlbmN5IGZyb20gJ3JlYWN0LWN1cnJlbmN5LWZvcm1hdHRlcic7XHJcblxyXG5mdW5jdGlvbiBUb3BTb2xkQW5kTmV3cygpIHtcclxuXHRjb25zdCBbcHJldlN0YXRlLCBzZXRQcmV2U3RhdGVdID0gdXNlU3RhdGUoMCk7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW3Byb2R1Y3RzU2FsZSwgc2V0UHJvZHVjdHNTYWxlXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3Qgbm90aXMgPSBbXHJcblx0XHQnSE9UOiBTYWxlIDUwJSBjaG8gxJHGoW4gaMOgbmcgdOG7qyAyIHRyaeG7h3UsIG1p4buFbiBwaMOtIHNoaXAgdG/DoG4gcXXhu5FjJyxcclxuXHRcdCdUdeG6p24gbOG7hSBz4bq1biBTQUxFIG3DuWEgZOG7i2NoLCBnaeG6o20gZ2nDoSBr4buLY2ggc8OgbiB0b8OgbiBi4buZIHPhuqNuIHBo4bqpbScsXHJcblx0XHRgVGjDtG5nIGLDoW86IFTDrG5oIGjDrG5oIGThu4tjaCBDb3ZpZC0xOSBNSU5UIExhbGEgY2jhu4kgbmjhuq1uIMSR4bq3dCBow6BuZyBvbmxpbmUga2jDtG5nIHThu5tpIGPhu61hIGjDoG5nIHThu6tcclxuXHRcdFx0XHRcdG5nw6B5IDgvN2AsXHJcblx0XHQnTmjhuq1wIG3DoyBNSU5UTEFMQTUwSyDEkeG7gyDEkcaw4bujYyBnaeG6o20gbmdheSA1MGsgY2jGoSDEkcahbiB04burIDEgdHJp4buHdScsXHJcblx0XTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRzZXRQcmV2U3RhdGUocHJldlN0YXRlID09PSAzID8gMCA6IHByZXZTdGF0ZSArIDEpO1xyXG5cdFx0fSwgNTAwMCk7XHJcblx0XHRyZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGF3YWl0IGF4aW9zXHJcblx0XHRcdFx0XHQuZ2V0KGVuY29kZVVSSShgL2FwaS9wcm9kdWN0P3BhZ2U9MSZjYXRlZ29yeT1hbGwmc29ydD0tc29sZCZsaW1pdD01JnRpdGxlPWFsbGApKVxyXG5cdFx0XHRcdFx0LnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0c2V0UHJvZHVjdHMocmVzLmRhdGEucHJvZHVjdHMuc3BsaWNlKDAsIDUpKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHRnZXRQcm9kdWN0cygpO1xyXG5cdFx0Y29uc3QgZ2V0UHJvZHVjdHNTYWxlID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGF3YWl0IGF4aW9zXHJcblx0XHRcdFx0XHQuZ2V0KGVuY29kZVVSSShgL2FwaS9wcm9kdWN0P3BhZ2U9MSZjYXRlZ29yeT1hbGwmc29ydD1wcmljZVNhbGUmbGltaXQ9NSZ0aXRsZT1hbGxgKSlcclxuXHRcdFx0XHRcdC50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdHNldFByb2R1Y3RzU2FsZShyZXMuZGF0YS5wcm9kdWN0cy5zcGxpY2UoMCwgNSkpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdGdldFByb2R1Y3RzU2FsZSgpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdteS00Jz5cclxuXHRcdFx0ey8qIFRvcCBTb2xkICovfVxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbXktNCc+XHJcblx0XHRcdFx0PFByb2R1Y3RzUHJldmlldyBwcm9kdWN0cz17cHJvZHVjdHN9IHJvdXRlcj17cm91dGVyfSB0aXRsZT17J2LDoW4gY2jhuqF5IG5o4bqldCAhJ30gLz5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHR7LyogTm90aWZ5Y2F0aW9uICovfVxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGgtMjAgYmctcmVkLTUwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XHJcblx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIHRleHQtc20gbGc6dGV4dC14bCc+e25vdGlzW3ByZXZTdGF0ZV19PC9wPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdHsvKiBUb3Agc2FsZSAqL31cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdteS04IHJlbGF0aXZlJz5cclxuXHRcdFx0XHQ8dmlkZW8gbXV0ZWQgbG9vcCBwbGF5c0lubGluZSBhdXRvUGxheSBjbGFzc05hbWU9J2xnOnctMS8yJz5cclxuXHRcdFx0XHRcdDxzb3VyY2VcclxuXHRcdFx0XHRcdFx0c3JjPSdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9kcml2ZS92My9maWxlcy8xazZmUTFlR2ZUMWF3ZU5CWTRrOHMxZXl4Z2U3UmtYTG8/YWx0PW1lZGlhJmtleT1BSXphU3lBdF9zQmluZzU3UHdBQ0RtNzBZTUlKOTVNa2NzRjRzX0UnXHJcblx0XHRcdFx0XHRcdHR5cGU9J3ZpZGVvL21wNCdcclxuXHRcdFx0XHRcdD48L3NvdXJjZT5cclxuXHRcdFx0XHQ8L3ZpZGVvPlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc3RhdGljIGxnOmFic29sdXRlIG15LTggbGc6bXktMCBsZzp3LVsxMDAwcHhdIGgtWzc1JV0gb3ZlcmZsb3cteC1hdXRvIHNjcm9sbGJhci1oaWRlIHJpZ2h0LTAgYm90dG9tLVsxNSVdIGZsZXgnPlxyXG5cdFx0XHRcdFx0e3Byb2R1Y3RzU2FsZS5tYXAocHJvZHVjdCA9PiAoXHJcblx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRrZXk9e3Byb2R1Y3QuX2lkfVxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ncmVsYXRpdmUgZmxleCBmbGV4LWNvbCBtZDptLTIgYmctd2hpdGUgei0zMCBwLTUgcHQtMTAgY3Vyc29yLXBvaW50ZXIgc2hhZG93LW1kIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gaG92ZXI6LXRyYW5zbGF0ZS15LTIgaG92ZXI6c2hhZG93LWxnIG1pbi13LVsyNTBweF0nXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2Fic29sdXRlIHRvcC0yIHJpZ2h0LTIgY2FwaXRhbGl6ZSB0ZXh0LXhzIHRleHQtZ3JheS00MDAgaXRhbGljJz5cclxuXHRcdFx0XHRcdFx0XHRcdHtwcm9kdWN0LmNhdGVnb3J5fVxyXG5cdFx0XHRcdFx0XHRcdDwvcD5cclxuXHJcblx0XHRcdFx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRzcmM9e3Byb2R1Y3QuaW1hZ2VzWzBdLnVybH1cclxuXHRcdFx0XHRcdFx0XHRcdGFsdD0nUHJvZHVjdCdcclxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodD17MzAwfVxyXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg9ezMwMH1cclxuXHRcdFx0XHRcdFx0XHRcdG9iamVjdEZpdD0nY29udGFpbidcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvcHJvZHVjdC8ke3Byb2R1Y3QuX2lkfWApfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxoNFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdteS01IGxpbmUtY2xhbXAtMSBjYXBpdGFsaXplJ1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9wcm9kdWN0LyR7cHJvZHVjdC5faWR9YCl9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0e3Byb2R1Y3QudGl0bGV9XHJcblx0XHRcdFx0XHRcdFx0PC9oND5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuIG1iLTMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7QXJyYXkoNSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuZmlsbCgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lm1hcCgoXywgaSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBrZXk9e2l9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8U3Rhckljb24gY2xhc3NOYW1lPSdoLTUgdGV4dC15ZWxsb3ctNTAwJyAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5gfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXJlZC02MDAgdGV4dC14cyBzbTp0ZXh0LWxnJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEN1cnJlbmN5XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cXVhbnRpdHk9e3Byb2R1Y3QucHJpY2VTYWxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbmN5PSdWTkQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGF0dGVybj0nIyMsIyMjICEnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z3JvdXA9Jy4nXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1ibHVlLTUwMCB0ZXh0LXhzIHNtOnRleHQtbGcnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdMSQw6MgYsOhbjoge3Byb2R1Y3Quc29sZH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXhzIHRleHQtZ3JheS01MDAgbXktMic+VFAuIEjhu5MgQ2jDrSBNaW5oPC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wU29sZEFuZE5ld3M7XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJvZHVjdHNQcmV2aWV3IiwiSW1hZ2UiLCJTdGFySWNvbiIsIkN1cnJlbmN5IiwiVG9wU29sZEFuZE5ld3MiLCJwcmV2U3RhdGUiLCJzZXRQcmV2U3RhdGUiLCJyb3V0ZXIiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwicHJvZHVjdHNTYWxlIiwic2V0UHJvZHVjdHNTYWxlIiwibm90aXMiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImdldFByb2R1Y3RzIiwiZ2V0IiwiZW5jb2RlVVJJIiwidGhlbiIsInJlcyIsImRhdGEiLCJzcGxpY2UiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImdldFByb2R1Y3RzU2FsZSIsIm1hcCIsInByb2R1Y3QiLCJjYXRlZ29yeSIsImltYWdlcyIsInVybCIsInB1c2giLCJfaWQiLCJ0aXRsZSIsIkFycmF5IiwiZmlsbCIsIl8iLCJpIiwicHJpY2VTYWxlIiwic29sZCJdLCJzb3VyY2VSb290IjoiIn0=