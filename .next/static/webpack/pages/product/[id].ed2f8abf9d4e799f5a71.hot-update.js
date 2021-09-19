"use strict";
self["webpackHotUpdate_N_E"]("pages/product/[id]",{

/***/ "./pages/product/[id].js":
/*!*******************************!*\
  !*** ./pages/product/[id].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var _store_Actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/Actions */ "./store/Actions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_tailwind_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/tailwind/Header */ "./components/tailwind/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-currency-formatter */ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_13__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "E:\\Works\\VSCode\\NextJS\\next-website-mintlala\\pages\\product\\[id].js",
    _s = $RefreshSig$();

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @next/next/no-img-element */












function ProductDetail() {
  _s();

  var _this = this;

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      tab = _useState[0],
      setTab = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      product = _useState2[0],
      setProduct = _useState2[1];

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_store_GlobalState__WEBPACK_IMPORTED_MODULE_5__.DataContext),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var cart = state.cart;
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var id = router.query.id;

    if (id) {
      var getProductDetail = /*#__PURE__*/function () {
        var _ref = (0,E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
          return E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return axios__WEBPACK_IMPORTED_MODULE_8___default().get("/api/product/".concat(router.query.id)).then(function (res) {
                    if (res.data.err) return dispatch({
                      type: 'NOTIFY',
                      payload: {
                        error: res.data.err
                      }
                    });
                    setProduct(res.data.product);
                  });

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function getProductDetail() {
          return _ref.apply(this, arguments);
        };
      }();

      getProductDetail();
    }
  }, [router.query.id]);
  if (!product) return null;

  var addItemToCart = function addItemToCart() {
    if (product.inStock <= 0) {
      dispatch({
        type: 'NOTIFY',
        payload: {
          error: 'Xin lỗi sản phẩm tạm hết hàng!'
        }
      });
    } else {
      dispatch((0,_store_Actions__WEBPACK_IMPORTED_MODULE_6__.addToCart)(product, cart));
      dispatch({
        type: 'NOTIFY',
        payload: {
          success: 'Thêm vào giỏ thành công!'
        }
      });
    }
  };

  var handleCheckout = function handleCheckout() {
    if (product.inStock <= 0) {
      dispatch({
        type: 'NOTIFY',
        payload: {
          error: 'Xin lỗi sản phẩm tạm hết hàng!'
        }
      });
    } else {
      dispatch((0,_store_Actions__WEBPACK_IMPORTED_MODULE_6__.addToCart)(product, cart));
      router.push('/checkout');
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "bg-gray-100",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: [product.title, " - MINT Lala"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tailwind_Header__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "max-w-screen-2xl mx-auto min-h-screen",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "grid lg:grid-cols-2 my-4 p-5 bg-white",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "lg:p-5",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "relative group",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: product.images[tab].url,
              alt: "image",
              className: "w-full"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              onClick: function onClick() {
                return setTab(tab === 0 ? product.images.length - 1 : tab - 1);
              },
              className: "w-10 h-20 bg-rgba absolute left-2 top-[45%] group-hover:flex items-center cursor-pointer hidden",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.ChevronLeftIcon, {
                className: "h-10 text-white font-bold"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              onClick: function onClick() {
                return setTab(tab === 0 ? product.images.length - 1 : tab - 1);
              },
              className: "w-10 h-20 bg-rgba absolute right-2 top-[45%] group-hover:flex items-center cursor-pointer hidden",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.ChevronRightIcon, {
                className: "h-10 text-white font-bold"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex space-x-2 mt-2 overflow-hidden",
            children: product.images.map(function (image, i) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "h-1/5 w-1/5 cursor-pointer",
                onClick: function onClick() {
                  return setTab(i);
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: image.url,
                  alt: "image",
                  className: "object-contain ".concat(i === tab ? 'border-4 border-red-400' : '')
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 10
                }, _this)
              }, i, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 9
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "lg:p-5 my-4 lg:my-0 flex flex-col space-y-4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex justify-between items-center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-xl lg:text-2xl font-bold capitalize",
              children: product.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.HeartIcon, {
              className: "h-10 cursor-pointer active:text-red-500 hover:text-red-500"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex space-x-4 my-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-red-600 font-bold text-3xl",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_13___default()), {
                quantity: product.priceSale,
                currency: "VND",
                pattern: "##,### !",
                group: "."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex space-x-2 items-end",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: "Gi\xE1 g\u1ED1c: "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "text-gray-600 line-through",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_13___default()), {
                  quantity: product.priceOrigin,
                  currency: "VND",
                  pattern: "##,### !",
                  group: "."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__.StarIcon, {
              className: "h-7 text-yellow-500"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__.StarIcon, {
              className: "h-7 text-yellow-500"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__.StarIcon, {
              className: "h-7 text-yellow-500"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__.StarIcon, {
              className: "h-7 text-yellow-500"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__.StarIcon, {
              className: "h-7 text-yellow-500"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-gray-700 lg:text-xl line-clamp-2 lg:line-clamp-3",
            children: product.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-gray-700 text-xl mb-4 font-bold",
              children: "M\xE0u s\u1EAFc"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex space-x-3 items-center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "h-10 w-10 rounded-full cursor-pointer bg-gray-600 active:ring-2 ring-gray-600 active:ring-offset-4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "cursor-pointer rounded-full border-2 border-red-500 p-1",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "h-10 w-10 rounded-full bg-red-500 active:ring-2 ring-red-500 active:ring-offset-4"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 160,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "h-10 w-10 rounded-full cursor-pointer bg-blue-500 active:ring-2 ring-blue-500 active:ring-offset-4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "h-10 w-10 rounded-full cursor-pointer bg-green-500 active:ring-2 ring-green-500 active:ring-offset-4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "h-10 w-10 rounded-full cursor-pointer bg-yellow-500 active:ring-2 ring-yellow-500 active:ring-offset-4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "overflow-x-auto",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-gray-700 text-xl mb-4 font-bold",
              children: "M\xE0u s\u1EAFc"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex flex-wrap space-x-2",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "w-14 h-10 rounded-md border-2 border-gray-300 flex items-center justify-center cursor-pointer",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "font-bold text-gray-400",
                  children: "XS"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "w-14 h-10 rounded-md border-4 border-blue-400 flex items-center justify-center cursor-pointer",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "font-bold text-gray-400",
                  children: "S"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "w-14 h-10 rounded-md border-2 border-gray-300 flex items-center justify-center cursor-pointer",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "font-bold text-gray-400",
                  children: "M"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 180,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "w-14 h-10 rounded-md border-2 border-gray-300 flex items-center justify-center cursor-pointer",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "font-bold text-gray-400",
                  children: "L"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 183,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "w-14 h-10 rounded-md border-2 border-gray-300 flex items-center justify-center cursor-pointer",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "font-bold text-gray-400",
                  children: "XL"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex space-x-4 py-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "button-green p-4 text-gray-700 font-bold lg:text-xl",
              onClick: addItemToCart,
              children: "Th\xEAm v\xE0o gi\u1ECF h\xE0ng"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "button p-4 text-gray-700 font-bold lg:text-xl",
              onClick: handleCheckout,
              children: "Mua ngay"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "lg:col-span-2 lg:my-8 lg:p-5",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "font-bold text-xl uppercase mb-4",
            children: "M\xF4 t\u1EA3 chi ti\u1EBFt"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            dangerouslySetInnerHTML: {
              __html: product.content
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 3
  }, this);
}

_s(ProductDetail, "9EshhDPgymiLkMrbZhirQtM8wzQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter];
});

_c = ProductDetail;
/* harmony default export */ __webpack_exports__["default"] = (ProductDetail);

var _c;

$RefreshReg$(_c, "ProductDetail");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC9baWRdLmVkMmY4YWJmOWQ0ZTc5OWY1YTcxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNnQixhQUFULEdBQXlCO0FBQUE7O0FBQUE7O0FBQ3hCLE1BQU1DLE1BQU0sR0FBR1Ysc0RBQVMsRUFBeEI7O0FBRHdCLGtCQUdGSiwrQ0FBUSxDQUFDLENBQUQsQ0FITjtBQUFBLE1BR2pCZSxHQUhpQjtBQUFBLE1BR1pDLE1BSFk7O0FBQUEsbUJBSU1oQiwrQ0FBUSxFQUpkO0FBQUEsTUFJakJpQixPQUppQjtBQUFBLE1BSVJDLFVBSlE7O0FBQUEsb0JBTUlwQixpREFBVSxDQUFDSSwyREFBRCxDQU5kO0FBQUEsTUFNaEJpQixLQU5nQixlQU1oQkEsS0FOZ0I7QUFBQSxNQU1UQyxRQU5TLGVBTVRBLFFBTlM7O0FBQUEsTUFPaEJDLElBUGdCLEdBT1BGLEtBUE8sQ0FPaEJFLElBUGdCO0FBU3hCdEIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBSXVCLEVBQUUsR0FBR1IsTUFBTSxDQUFDUyxLQUFQLENBQWFELEVBQXRCOztBQUNBLFFBQUlBLEVBQUosRUFBUTtBQUNQLFVBQU1FLGdCQUFnQjtBQUFBLGlWQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUNsQm5CLGdEQUFBLHdCQUEwQlMsTUFBTSxDQUFDUyxLQUFQLENBQWFELEVBQXZDLEdBQTZDSSxJQUE3QyxDQUFrRCxVQUFBQyxHQUFHLEVBQUk7QUFDOUQsd0JBQUlBLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQyxHQUFiLEVBQWtCLE9BQU9ULFFBQVEsQ0FBQztBQUFFVSxzQkFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0JDLHNCQUFBQSxP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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF6Q0QsZUFpSkM7QUFBSyxtQkFBUyxFQUFDLDhCQUFmO0FBQUEsa0NBQ0M7QUFBRyxxQkFBUyxFQUFDLGtDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBR0M7QUFBRyxtQ0FBdUIsRUFBRTtBQUFFWSxjQUFBQSxNQUFNLEVBQUUvQixPQUFPLENBQUNnQztBQUFsQjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBELGVBaUtDLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqS0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFxS0E7O0dBOU1RcEM7VUFDT1Q7OztLQURQUztBQWdOVCwrREFBZUEsYUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0L1tpZF0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnLi4vLi4vc3RvcmUvR2xvYmFsU3RhdGUnO1xyXG5pbXBvcnQgeyBhZGRUb0NhcnQgfSBmcm9tICcuLi8uLi9zdG9yZS9BY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGFpbHdpbmQvSGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvb3Rlcic7XHJcbmltcG9ydCB7IENoZXZyb25MZWZ0SWNvbiwgQ2hldnJvblJpZ2h0SWNvbiwgSGVhcnRJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lJztcclxuaW1wb3J0IHsgU3Rhckljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJztcclxuaW1wb3J0IEN1cnJlbmN5IGZyb20gJ3JlYWN0LWN1cnJlbmN5LWZvcm1hdHRlcic7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0RGV0YWlsKCkge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHRjb25zdCBbdGFiLCBzZXRUYWJdID0gdXNlU3RhdGUoMCk7XHJcblx0Y29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUoKTtcclxuXHJcblx0Y29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xyXG5cdGNvbnN0IHsgY2FydCB9ID0gc3RhdGU7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRsZXQgaWQgPSByb3V0ZXIucXVlcnkuaWQ7XHJcblx0XHRpZiAoaWQpIHtcclxuXHRcdFx0Y29uc3QgZ2V0UHJvZHVjdERldGFpbCA9IGFzeW5jICgpID0+IHtcclxuXHRcdFx0XHRhd2FpdCBheGlvcy5nZXQoYC9hcGkvcHJvZHVjdC8ke3JvdXRlci5xdWVyeS5pZH1gKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuZXJyKSByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBlcnJvcjogcmVzLmRhdGEuZXJyIH0gfSk7XHJcblx0XHRcdFx0XHRzZXRQcm9kdWN0KHJlcy5kYXRhLnByb2R1Y3QpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRnZXRQcm9kdWN0RGV0YWlsKCk7XHJcblx0XHR9XHJcblx0fSwgW3JvdXRlci5xdWVyeS5pZF0pO1xyXG5cclxuXHRpZiAoIXByb2R1Y3QpIHJldHVybiBudWxsO1xyXG5cclxuXHRjb25zdCBhZGRJdGVtVG9DYXJ0ID0gKCkgPT4ge1xyXG5cdFx0aWYgKHByb2R1Y3QuaW5TdG9jayA8PSAwKSB7XHJcblx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgZXJyb3I6ICdYaW4gbOG7l2kgc+G6o24gcGjhuqltIHThuqFtIGjhur90IGjDoG5nIScgfSB9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGRpc3BhdGNoKGFkZFRvQ2FydChwcm9kdWN0LCBjYXJ0KSk7XHJcblx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgc3VjY2VzczogJ1Row6ptIHbDoG8gZ2nhu48gdGjDoG5oIGPDtG5nIScgfSB9KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZUNoZWNrb3V0ID0gKCkgPT4ge1xyXG5cdFx0aWYgKHByb2R1Y3QuaW5TdG9jayA8PSAwKSB7XHJcblx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgZXJyb3I6ICdYaW4gbOG7l2kgc+G6o24gcGjhuqltIHThuqFtIGjhur90IGjDoG5nIScgfSB9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGRpc3BhdGNoKGFkZFRvQ2FydChwcm9kdWN0LCBjYXJ0KSk7XHJcblx0XHRcdHJvdXRlci5wdXNoKCcvY2hlY2tvdXQnKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2JnLWdyYXktMTAwJz5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PHRpdGxlPntwcm9kdWN0LnRpdGxlfSAtIE1JTlQgTGFsYTwvdGl0bGU+XHJcblx0XHRcdDwvSGVhZD5cclxuXHJcblx0XHRcdDxIZWFkZXIgLz5cclxuXHJcblx0XHRcdDxtYWluIGNsYXNzTmFtZT0nbWF4LXctc2NyZWVuLTJ4bCBteC1hdXRvIG1pbi1oLXNjcmVlbic+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2dyaWQgbGc6Z3JpZC1jb2xzLTIgbXktNCBwLTUgYmctd2hpdGUnPlxyXG5cdFx0XHRcdFx0ey8qIGltYWdlICovfVxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xnOnAtNSc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e3Byb2R1Y3QuaW1hZ2VzW3RhYl0udXJsfSBhbHQ9J2ltYWdlJyBjbGFzc05hbWU9J3ctZnVsbCcgLz5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0VGFiKHRhYiA9PT0gMCA/IHByb2R1Y3QuaW1hZ2VzLmxlbmd0aCAtIDEgOiB0YWIgLSAxKX1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ndy0xMCBoLTIwIGJnLXJnYmEgYWJzb2x1dGUgbGVmdC0yIHRvcC1bNDUlXSBncm91cC1ob3ZlcjpmbGV4IGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlciBoaWRkZW4nXHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PENoZXZyb25MZWZ0SWNvbiBjbGFzc05hbWU9J2gtMTAgdGV4dC13aGl0ZSBmb250LWJvbGQnIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldFRhYih0YWIgPT09IDAgPyBwcm9kdWN0LmltYWdlcy5sZW5ndGggLSAxIDogdGFiIC0gMSl9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3ctMTAgaC0yMCBiZy1yZ2JhIGFic29sdXRlIHJpZ2h0LTIgdG9wLVs0NSVdIGdyb3VwLWhvdmVyOmZsZXggaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyIGhpZGRlbidcclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Q2hldnJvblJpZ2h0SWNvbiBjbGFzc05hbWU9J2gtMTAgdGV4dC13aGl0ZSBmb250LWJvbGQnIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggc3BhY2UteC0yIG10LTIgb3ZlcmZsb3ctaGlkZGVuJz5cclxuXHRcdFx0XHRcdFx0XHR7cHJvZHVjdC5pbWFnZXMubWFwKChpbWFnZSwgaSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2l9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naC0xLzUgdy0xLzUgY3Vyc29yLXBvaW50ZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldFRhYihpKX1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17aW1hZ2UudXJsfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD0naW1hZ2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgb2JqZWN0LWNvbnRhaW4gJHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGkgPT09IHRhYiA/ICdib3JkZXItNCBib3JkZXItcmVkLTQwMCcgOiAnJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0ey8qIGRldGFpbCAqL31cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsZzpwLTUgbXktNCBsZzpteS0wIGZsZXggZmxleC1jb2wgc3BhY2UteS00Jz5cclxuXHRcdFx0XHRcdFx0ey8qIHRpdGxlICovfVxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyJz5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQteGwgbGc6dGV4dC0yeGwgZm9udC1ib2xkIGNhcGl0YWxpemUnPntwcm9kdWN0LnRpdGxlfTwvcD5cclxuXHJcblx0XHRcdFx0XHRcdFx0PEhlYXJ0SWNvbiBjbGFzc05hbWU9J2gtMTAgY3Vyc29yLXBvaW50ZXIgYWN0aXZlOnRleHQtcmVkLTUwMCBob3Zlcjp0ZXh0LXJlZC01MDAnIC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0ey8qIHByaWNlICovfVxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBzcGFjZS14LTQgbXktNCc+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQtcmVkLTYwMCBmb250LWJvbGQgdGV4dC0zeGwnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEN1cnJlbmN5XHJcblx0XHRcdFx0XHRcdFx0XHRcdHF1YW50aXR5PXtwcm9kdWN0LnByaWNlU2FsZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVuY3k9J1ZORCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGF0dGVybj0nIyMsIyMjICEnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdyb3VwPScuJ1xyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBzcGFjZS14LTIgaXRlbXMtZW5kJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxwPkdpw6EgZ+G7kWM6IDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNjAwIGxpbmUtdGhyb3VnaCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxDdXJyZW5jeVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHF1YW50aXR5PXtwcm9kdWN0LnByaWNlT3JpZ2lufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbmN5PSdWTkQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGF0dGVybj0nIyMsIyMjICEnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z3JvdXA9Jy4nXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHR7LyogS2hvICovfVxyXG5cclxuXHRcdFx0XHRcdFx0ey8qIHJhdGluZyAqL31cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxyXG5cdFx0XHRcdFx0XHRcdDxTdGFySWNvbiBjbGFzc05hbWU9J2gtNyB0ZXh0LXllbGxvdy01MDAnIC8+XHJcblx0XHRcdFx0XHRcdFx0PFN0YXJJY29uIGNsYXNzTmFtZT0naC03IHRleHQteWVsbG93LTUwMCcgLz5cclxuXHRcdFx0XHRcdFx0XHQ8U3Rhckljb24gY2xhc3NOYW1lPSdoLTcgdGV4dC15ZWxsb3ctNTAwJyAvPlxyXG5cdFx0XHRcdFx0XHRcdDxTdGFySWNvbiBjbGFzc05hbWU9J2gtNyB0ZXh0LXllbGxvdy01MDAnIC8+XHJcblx0XHRcdFx0XHRcdFx0PFN0YXJJY29uIGNsYXNzTmFtZT0naC03IHRleHQteWVsbG93LTUwMCcgLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHR7LyogZGVzY3JpcHRpb24gICovfVxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtZ3JheS03MDAgbGc6dGV4dC14bCBsaW5lLWNsYW1wLTIgbGc6bGluZS1jbGFtcC0zJz5cclxuXHRcdFx0XHRcdFx0XHR7cHJvZHVjdC5kZXNjcmlwdGlvbn1cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0ey8qIENvbG9ycyAqL31cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtZ3JheS03MDAgdGV4dC14bCBtYi00IGZvbnQtYm9sZCc+TcOgdSBz4bqvYzwvcD5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggc3BhY2UteC0zIGl0ZW1zLWNlbnRlcic+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2gtMTAgdy0xMCByb3VuZGVkLWZ1bGwgY3Vyc29yLXBvaW50ZXIgYmctZ3JheS02MDAgYWN0aXZlOnJpbmctMiByaW5nLWdyYXktNjAwIGFjdGl2ZTpyaW5nLW9mZnNldC00Jz48L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1mdWxsIGJvcmRlci0yIGJvcmRlci1yZWQtNTAwIHAtMSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdoLTEwIHctMTAgcm91bmRlZC1mdWxsIGJnLXJlZC01MDAgYWN0aXZlOnJpbmctMiByaW5nLXJlZC01MDAgYWN0aXZlOnJpbmctb2Zmc2V0LTQnPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2gtMTAgdy0xMCByb3VuZGVkLWZ1bGwgY3Vyc29yLXBvaW50ZXIgYmctYmx1ZS01MDAgYWN0aXZlOnJpbmctMiByaW5nLWJsdWUtNTAwIGFjdGl2ZTpyaW5nLW9mZnNldC00Jz48L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2gtMTAgdy0xMCByb3VuZGVkLWZ1bGwgY3Vyc29yLXBvaW50ZXIgYmctZ3JlZW4tNTAwIGFjdGl2ZTpyaW5nLTIgcmluZy1ncmVlbi01MDAgYWN0aXZlOnJpbmctb2Zmc2V0LTQnPjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0naC0xMCB3LTEwIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlciBiZy15ZWxsb3ctNTAwIGFjdGl2ZTpyaW5nLTIgcmluZy15ZWxsb3ctNTAwIGFjdGl2ZTpyaW5nLW9mZnNldC00Jz48L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0ey8qIFNpemUgKi99XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdvdmVyZmxvdy14LWF1dG8nPlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTcwMCB0ZXh0LXhsIG1iLTQgZm9udC1ib2xkJz5Nw6B1IHPhuq9jPC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXdyYXAgc3BhY2UteC0yJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTE0IGgtMTAgcm91bmRlZC1tZCBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgY3Vyc29yLXBvaW50ZXInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2ZvbnQtYm9sZCB0ZXh0LWdyYXktNDAwJz5YUzwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctMTQgaC0xMCByb3VuZGVkLW1kIGJvcmRlci00IGJvcmRlci1ibHVlLTQwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBjdXJzb3ItcG9pbnRlcic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtZ3JheS00MDAnPlM8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTE0IGgtMTAgcm91bmRlZC1tZCBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgY3Vyc29yLXBvaW50ZXInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2ZvbnQtYm9sZCB0ZXh0LWdyYXktNDAwJz5NPC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy0xNCBoLTEwIHJvdW5kZWQtbWQgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGN1cnNvci1wb2ludGVyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC1ncmF5LTQwMCc+TDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctMTQgaC0xMCByb3VuZGVkLW1kIGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBjdXJzb3ItcG9pbnRlcic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtZ3JheS00MDAnPlhMPC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0ey8qIGJ1dHRvbiAqL31cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IHNwYWNlLXgtNCBweS00Jz5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2J1dHRvbi1ncmVlbiBwLTQgdGV4dC1ncmF5LTcwMCBmb250LWJvbGQgbGc6dGV4dC14bCdcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2FkZEl0ZW1Ub0NhcnR9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0VGjDqm0gdsOgbyBnaeG7jyBow6BuZ1xyXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYnV0dG9uIHAtNCB0ZXh0LWdyYXktNzAwIGZvbnQtYm9sZCBsZzp0ZXh0LXhsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlQ2hlY2tvdXR9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0TXVhIG5nYXlcclxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHR7LyogY29udGVudCAqL31cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsZzpjb2wtc3Bhbi0yIGxnOm15LTggbGc6cC01Jz5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC14bCB1cHBlcmNhc2UgbWItNCc+TcO0IHThuqMgY2hpIHRp4bq/dDwvcD5cclxuXHJcblx0XHRcdFx0XHRcdDxwIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcHJvZHVjdC5jb250ZW50IH19PjwvcD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L21haW4+XHJcblxyXG5cdFx0XHQ8Rm9vdGVyIC8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlsO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkIiwiRGF0YUNvbnRleHQiLCJhZGRUb0NhcnQiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsIkhlYWRlciIsIkZvb3RlciIsIkNoZXZyb25MZWZ0SWNvbiIsIkNoZXZyb25SaWdodEljb24iLCJIZWFydEljb24iLCJTdGFySWNvbiIsIkN1cnJlbmN5IiwiUHJvZHVjdERldGFpbCIsInJvdXRlciIsInRhYiIsInNldFRhYiIsInByb2R1Y3QiLCJzZXRQcm9kdWN0Iiwic3RhdGUiLCJkaXNwYXRjaCIsImNhcnQiLCJpZCIsInF1ZXJ5IiwiZ2V0UHJvZHVjdERldGFpbCIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZXJyIiwidHlwZSIsInBheWxvYWQiLCJlcnJvciIsImFkZEl0ZW1Ub0NhcnQiLCJpblN0b2NrIiwic3VjY2VzcyIsImhhbmRsZUNoZWNrb3V0IiwicHVzaCIsInRpdGxlIiwiaW1hZ2VzIiwidXJsIiwibGVuZ3RoIiwibWFwIiwiaW1hZ2UiLCJpIiwicHJpY2VTYWxlIiwicHJpY2VPcmlnaW4iLCJkZXNjcmlwdGlvbiIsIl9faHRtbCIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9