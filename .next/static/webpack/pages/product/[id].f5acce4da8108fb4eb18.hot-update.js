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
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: product.inStock <= 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "text-red-500",
                children: "H\u1EBFt h\xE0ng"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 10
              }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: ["Kho: ", product.inStock]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 10
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__.StarIcon, {
              className: "h-7 text-yellow-500"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__.StarIcon, {
              className: "h-7 text-yellow-500"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__.StarIcon, {
              className: "h-7 text-yellow-500"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__.StarIcon, {
              className: "h-7 text-yellow-500"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__.StarIcon, {
              className: "h-7 text-yellow-500"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-gray-700 lg:text-xl line-clamp-2 lg:line-clamp-3",
            children: product.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-gray-700 text-xl mb-4 font-bold",
              children: "M\xE0u s\u1EAFc"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex space-x-3 items-center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "h-10 w-10 rounded-full cursor-pointer bg-gray-600 active:ring-2 ring-gray-600 active:ring-offset-4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "cursor-pointer rounded-full border-2 border-red-500 p-1",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "h-10 w-10 rounded-full bg-red-500 active:ring-2 ring-red-500 active:ring-offset-4"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "h-10 w-10 rounded-full cursor-pointer bg-blue-500 active:ring-2 ring-blue-500 active:ring-offset-4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "h-10 w-10 rounded-full cursor-pointer bg-green-500 active:ring-2 ring-green-500 active:ring-offset-4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "h-10 w-10 rounded-full cursor-pointer bg-yellow-500 active:ring-2 ring-yellow-500 active:ring-offset-4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "overflow-x-auto",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-gray-700 text-xl mb-4 font-bold",
              children: "M\xE0u s\u1EAFc"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
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
                  lineNumber: 184,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "w-14 h-10 rounded-md border-4 border-blue-400 flex items-center justify-center cursor-pointer",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "font-bold text-gray-400",
                  children: "S"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 187,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "w-14 h-10 rounded-md border-2 border-gray-300 flex items-center justify-center cursor-pointer",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "font-bold text-gray-400",
                  children: "M"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 190,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "w-14 h-10 rounded-md border-2 border-gray-300 flex items-center justify-center cursor-pointer",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "font-bold text-gray-400",
                  children: "L"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 193,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "w-14 h-10 rounded-md border-2 border-gray-300 flex items-center justify-center cursor-pointer",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "font-bold text-gray-400",
                  children: "XL"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 196,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 195,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex space-x-4 py-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "button-green p-4 text-gray-700 font-bold lg:text-xl",
              onClick: addItemToCart,
              children: "Th\xEAm v\xE0o gi\u1ECF h\xE0ng"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "button p-4 text-gray-700 font-bold lg:text-xl",
              onClick: handleCheckout,
              children: "Mua ngay"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 203,
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
            lineNumber: 221,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            dangerouslySetInnerHTML: {
              __html: product.content
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 220,
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
      lineNumber: 228,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC9baWRdLmY1YWNjZTRkYTgxMDhmYjRlYjE4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNnQixhQUFULEdBQXlCO0FBQUE7O0FBQUE7O0FBQ3hCLE1BQU1DLE1BQU0sR0FBR1Ysc0RBQVMsRUFBeEI7O0FBRHdCLGtCQUdGSiwrQ0FBUSxDQUFDLENBQUQsQ0FITjtBQUFBLE1BR2pCZSxHQUhpQjtBQUFBLE1BR1pDLE1BSFk7O0FBQUEsbUJBSU1oQiwrQ0FBUSxFQUpkO0FBQUEsTUFJakJpQixPQUppQjtBQUFBLE1BSVJDLFVBSlE7O0FBQUEsb0JBTUlwQixpREFBVSxDQUFDSSwyREFBRCxDQU5kO0FBQUEsTUFNaEJpQixLQU5nQixlQU1oQkEsS0FOZ0I7QUFBQSxNQU1UQyxRQU5TLGVBTVRBLFFBTlM7O0FBQUEsTUFPaEJDLElBUGdCLEdBT1BGLEtBUE8sQ0FPaEJFLElBUGdCO0FBU3hCdEIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBSXVCLEVBQUUsR0FBR1IsTUFBTSxDQUFDUyxLQUFQLENBQWFELEVBQXRCOztBQUNBLFFBQUlBLEVBQUosRUFBUTtBQUNQLFVBQU1FLGdCQUFnQjtBQUFBLGlWQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUNsQm5CLGdEQUFBLHdCQUEwQlMsTUFBTSxDQUFDUyxLQUFQLENBQWFELEVBQXZDLEdBQTZDSSxJQUE3QyxDQUFrRCxVQUFBQyxHQUFHLEVBQUk7QUFDOUQsd0JBQUlBLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQyxHQUFiLEVBQWtCLE9BQU9ULFFBQVEsQ0FBQztBQUFFVSxzQkFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0JDLHNCQUFBQSxP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QkF6RUQsZUFpR0M7QUFBSyxxQkFBUyxFQUFDLHFCQUFmO0FBQUEsb0NBQ0M7QUFDQyx1QkFBUyxFQUFDLHFEQURYO0FBRUMscUJBQU8sRUFBRWQsYUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERCxlQU9DO0FBQ0MsdUJBQVMsRUFBQywrQ0FEWDtBQUVDLHFCQUFPLEVBQUVHLGNBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWpHRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBekNELGVBMkpDO0FBQUssbUJBQVMsRUFBQyw4QkFBZjtBQUFBLGtDQUNDO0FBQUcscUJBQVMsRUFBQyxrQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQUdDO0FBQUcsbUNBQXVCLEVBQUU7QUFBRVksY0FBQUEsTUFBTSxFQUFFL0IsT0FBTyxDQUFDZ0M7QUFBbEI7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBM0pEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRCxlQTJLQyw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0tEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBK0tBOztHQXhOUXBDO1VBQ09UOzs7S0FEUFM7QUEwTlQsK0RBQWVBLGFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9baWRdLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L25vLWltZy1lbGVtZW50ICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uLy4uL3N0b3JlL0dsb2JhbFN0YXRlJztcclxuaW1wb3J0IHsgYWRkVG9DYXJ0IH0gZnJvbSAnLi4vLi4vc3RvcmUvQWN0aW9ucyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RhaWx3aW5kL0hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb290ZXInO1xyXG5pbXBvcnQgeyBDaGV2cm9uTGVmdEljb24sIENoZXZyb25SaWdodEljb24sIEhlYXJ0SWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZSc7XHJcbmltcG9ydCB7IFN0YXJJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCc7XHJcbmltcG9ydCBDdXJyZW5jeSBmcm9tICdyZWFjdC1jdXJyZW5jeS1mb3JtYXR0ZXInO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdERldGFpbCgpIHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0Y29uc3QgW3RhYiwgc2V0VGFiXSA9IHVzZVN0YXRlKDApO1xyXG5cdGNvbnN0IFtwcm9kdWN0LCBzZXRQcm9kdWN0XSA9IHVzZVN0YXRlKCk7XHJcblxyXG5cdGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuXHRjb25zdCB7IGNhcnQgfSA9IHN0YXRlO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGV0IGlkID0gcm91dGVyLnF1ZXJ5LmlkO1xyXG5cdFx0aWYgKGlkKSB7XHJcblx0XHRcdGNvbnN0IGdldFByb2R1Y3REZXRhaWwgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRcdFx0YXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Byb2R1Y3QvJHtyb3V0ZXIucXVlcnkuaWR9YCkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmVycikgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgZXJyb3I6IHJlcy5kYXRhLmVyciB9IH0pO1xyXG5cdFx0XHRcdFx0c2V0UHJvZHVjdChyZXMuZGF0YS5wcm9kdWN0KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fTtcclxuXHRcdFx0Z2V0UHJvZHVjdERldGFpbCgpO1xyXG5cdFx0fVxyXG5cdH0sIFtyb3V0ZXIucXVlcnkuaWRdKTtcclxuXHJcblx0aWYgKCFwcm9kdWN0KSByZXR1cm4gbnVsbDtcclxuXHJcblx0Y29uc3QgYWRkSXRlbVRvQ2FydCA9ICgpID0+IHtcclxuXHRcdGlmIChwcm9kdWN0LmluU3RvY2sgPD0gMCkge1xyXG5cdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGVycm9yOiAnWGluIGzhu5dpIHPhuqNuIHBo4bqpbSB04bqhbSBo4bq/dCBow6BuZyEnIH0gfSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkaXNwYXRjaChhZGRUb0NhcnQocHJvZHVjdCwgY2FydCkpO1xyXG5cdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IHN1Y2Nlc3M6ICdUaMOqbSB2w6BvIGdp4buPIHRow6BuaCBjw7RuZyEnIH0gfSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVDaGVja291dCA9ICgpID0+IHtcclxuXHRcdGlmIChwcm9kdWN0LmluU3RvY2sgPD0gMCkge1xyXG5cdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGVycm9yOiAnWGluIGzhu5dpIHPhuqNuIHBo4bqpbSB04bqhbSBo4bq/dCBow6BuZyEnIH0gfSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkaXNwYXRjaChhZGRUb0NhcnQocHJvZHVjdCwgY2FydCkpO1xyXG5cdFx0XHRyb3V0ZXIucHVzaCgnL2NoZWNrb3V0Jyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdiZy1ncmF5LTEwMCc+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdDx0aXRsZT57cHJvZHVjdC50aXRsZX0gLSBNSU5UIExhbGE8L3RpdGxlPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblxyXG5cdFx0XHQ8SGVhZGVyIC8+XHJcblxyXG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9J21heC13LXNjcmVlbi0yeGwgbXgtYXV0byBtaW4taC1zY3JlZW4nPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdncmlkIGxnOmdyaWQtY29scy0yIG15LTQgcC01IGJnLXdoaXRlJz5cclxuXHRcdFx0XHRcdHsvKiBpbWFnZSAqL31cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsZzpwLTUnPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtwcm9kdWN0LmltYWdlc1t0YWJdLnVybH0gYWx0PSdpbWFnZScgY2xhc3NOYW1lPSd3LWZ1bGwnIC8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldFRhYih0YWIgPT09IDAgPyBwcm9kdWN0LmltYWdlcy5sZW5ndGggLSAxIDogdGFiIC0gMSl9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3ctMTAgaC0yMCBiZy1yZ2JhIGFic29sdXRlIGxlZnQtMiB0b3AtWzQ1JV0gZ3JvdXAtaG92ZXI6ZmxleCBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgaGlkZGVuJ1xyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdDxDaGV2cm9uTGVmdEljb24gY2xhc3NOYW1lPSdoLTEwIHRleHQtd2hpdGUgZm9udC1ib2xkJyAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRUYWIodGFiID09PSAwID8gcHJvZHVjdC5pbWFnZXMubGVuZ3RoIC0gMSA6IHRhYiAtIDEpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSd3LTEwIGgtMjAgYmctcmdiYSBhYnNvbHV0ZSByaWdodC0yIHRvcC1bNDUlXSBncm91cC1ob3ZlcjpmbGV4IGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlciBoaWRkZW4nXHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PENoZXZyb25SaWdodEljb24gY2xhc3NOYW1lPSdoLTEwIHRleHQtd2hpdGUgZm9udC1ib2xkJyAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IHNwYWNlLXgtMiBtdC0yIG92ZXJmbG93LWhpZGRlbic+XHJcblx0XHRcdFx0XHRcdFx0e3Byb2R1Y3QuaW1hZ2VzLm1hcCgoaW1hZ2UsIGkpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2gtMS81IHctMS81IGN1cnNvci1wb2ludGVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRUYWIoaSl9XHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2ltYWdlLnVybH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9J2ltYWdlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YG9iamVjdC1jb250YWluICR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpID09PSB0YWIgPyAnYm9yZGVyLTQgYm9yZGVyLXJlZC00MDAnIDogJydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdHsvKiBkZXRhaWwgKi99XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbGc6cC01IG15LTQgbGc6bXktMCBmbGV4IGZsZXgtY29sIHNwYWNlLXktNCc+XHJcblx0XHRcdFx0XHRcdHsvKiB0aXRsZSAqL31cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlcic+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LXhsIGxnOnRleHQtMnhsIGZvbnQtYm9sZCBjYXBpdGFsaXplJz57cHJvZHVjdC50aXRsZX08L3A+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxIZWFydEljb24gY2xhc3NOYW1lPSdoLTEwIGN1cnNvci1wb2ludGVyIGFjdGl2ZTp0ZXh0LXJlZC01MDAgaG92ZXI6dGV4dC1yZWQtNTAwJyAvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdHsvKiBwcmljZSAqL31cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggc3BhY2UteC00IG15LTQnPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXJlZC02MDAgZm9udC1ib2xkIHRleHQtM3hsJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxDdXJyZW5jeVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRxdWFudGl0eT17cHJvZHVjdC5wcmljZVNhbGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbmN5PSdWTkQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHBhdHRlcm49JyMjLCMjIyAhJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRncm91cD0nLidcclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggc3BhY2UteC0yIGl0ZW1zLWVuZCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cD5HacOhIGfhu5FjOiA8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGV4dC1ncmF5LTYwMCBsaW5lLXRocm91Z2gnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q3VycmVuY3lcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRxdWFudGl0eT17cHJvZHVjdC5wcmljZU9yaWdpbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW5jeT0nVk5EJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhdHRlcm49JyMjLCMjIyAhJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdyb3VwPScuJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0ey8qIEtobyAqL31cclxuXHJcblx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdHtwcm9kdWN0LmluU3RvY2sgPD0gMCA/IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LXJlZC01MDAnPkjhur90IGjDoG5nPC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+S2hvOiB7cHJvZHVjdC5pblN0b2NrfTwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0ey8qIHJhdGluZyAqL31cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxyXG5cdFx0XHRcdFx0XHRcdDxTdGFySWNvbiBjbGFzc05hbWU9J2gtNyB0ZXh0LXllbGxvdy01MDAnIC8+XHJcblx0XHRcdFx0XHRcdFx0PFN0YXJJY29uIGNsYXNzTmFtZT0naC03IHRleHQteWVsbG93LTUwMCcgLz5cclxuXHRcdFx0XHRcdFx0XHQ8U3Rhckljb24gY2xhc3NOYW1lPSdoLTcgdGV4dC15ZWxsb3ctNTAwJyAvPlxyXG5cdFx0XHRcdFx0XHRcdDxTdGFySWNvbiBjbGFzc05hbWU9J2gtNyB0ZXh0LXllbGxvdy01MDAnIC8+XHJcblx0XHRcdFx0XHRcdFx0PFN0YXJJY29uIGNsYXNzTmFtZT0naC03IHRleHQteWVsbG93LTUwMCcgLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHR7LyogZGVzY3JpcHRpb24gICovfVxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtZ3JheS03MDAgbGc6dGV4dC14bCBsaW5lLWNsYW1wLTIgbGc6bGluZS1jbGFtcC0zJz5cclxuXHRcdFx0XHRcdFx0XHR7cHJvZHVjdC5kZXNjcmlwdGlvbn1cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0ey8qIENvbG9ycyAqL31cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtZ3JheS03MDAgdGV4dC14bCBtYi00IGZvbnQtYm9sZCc+TcOgdSBz4bqvYzwvcD5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggc3BhY2UteC0zIGl0ZW1zLWNlbnRlcic+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2gtMTAgdy0xMCByb3VuZGVkLWZ1bGwgY3Vyc29yLXBvaW50ZXIgYmctZ3JheS02MDAgYWN0aXZlOnJpbmctMiByaW5nLWdyYXktNjAwIGFjdGl2ZTpyaW5nLW9mZnNldC00Jz48L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1mdWxsIGJvcmRlci0yIGJvcmRlci1yZWQtNTAwIHAtMSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdoLTEwIHctMTAgcm91bmRlZC1mdWxsIGJnLXJlZC01MDAgYWN0aXZlOnJpbmctMiByaW5nLXJlZC01MDAgYWN0aXZlOnJpbmctb2Zmc2V0LTQnPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2gtMTAgdy0xMCByb3VuZGVkLWZ1bGwgY3Vyc29yLXBvaW50ZXIgYmctYmx1ZS01MDAgYWN0aXZlOnJpbmctMiByaW5nLWJsdWUtNTAwIGFjdGl2ZTpyaW5nLW9mZnNldC00Jz48L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2gtMTAgdy0xMCByb3VuZGVkLWZ1bGwgY3Vyc29yLXBvaW50ZXIgYmctZ3JlZW4tNTAwIGFjdGl2ZTpyaW5nLTIgcmluZy1ncmVlbi01MDAgYWN0aXZlOnJpbmctb2Zmc2V0LTQnPjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0naC0xMCB3LTEwIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlciBiZy15ZWxsb3ctNTAwIGFjdGl2ZTpyaW5nLTIgcmluZy15ZWxsb3ctNTAwIGFjdGl2ZTpyaW5nLW9mZnNldC00Jz48L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0ey8qIFNpemUgKi99XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdvdmVyZmxvdy14LWF1dG8nPlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTcwMCB0ZXh0LXhsIG1iLTQgZm9udC1ib2xkJz5Nw6B1IHPhuq9jPC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXdyYXAgc3BhY2UteC0yJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTE0IGgtMTAgcm91bmRlZC1tZCBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgY3Vyc29yLXBvaW50ZXInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2ZvbnQtYm9sZCB0ZXh0LWdyYXktNDAwJz5YUzwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctMTQgaC0xMCByb3VuZGVkLW1kIGJvcmRlci00IGJvcmRlci1ibHVlLTQwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBjdXJzb3ItcG9pbnRlcic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtZ3JheS00MDAnPlM8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTE0IGgtMTAgcm91bmRlZC1tZCBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgY3Vyc29yLXBvaW50ZXInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2ZvbnQtYm9sZCB0ZXh0LWdyYXktNDAwJz5NPC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy0xNCBoLTEwIHJvdW5kZWQtbWQgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGN1cnNvci1wb2ludGVyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC1ncmF5LTQwMCc+TDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctMTQgaC0xMCByb3VuZGVkLW1kIGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBjdXJzb3ItcG9pbnRlcic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtZ3JheS00MDAnPlhMPC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0ey8qIGJ1dHRvbiAqL31cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IHNwYWNlLXgtNCBweS00Jz5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2J1dHRvbi1ncmVlbiBwLTQgdGV4dC1ncmF5LTcwMCBmb250LWJvbGQgbGc6dGV4dC14bCdcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2FkZEl0ZW1Ub0NhcnR9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0VGjDqm0gdsOgbyBnaeG7jyBow6BuZ1xyXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYnV0dG9uIHAtNCB0ZXh0LWdyYXktNzAwIGZvbnQtYm9sZCBsZzp0ZXh0LXhsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlQ2hlY2tvdXR9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0TXVhIG5nYXlcclxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHR7LyogY29udGVudCAqL31cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsZzpjb2wtc3Bhbi0yIGxnOm15LTggbGc6cC01Jz5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC14bCB1cHBlcmNhc2UgbWItNCc+TcO0IHThuqMgY2hpIHRp4bq/dDwvcD5cclxuXHJcblx0XHRcdFx0XHRcdDxwIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcHJvZHVjdC5jb250ZW50IH19PjwvcD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L21haW4+XHJcblxyXG5cdFx0XHQ8Rm9vdGVyIC8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlsO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkIiwiRGF0YUNvbnRleHQiLCJhZGRUb0NhcnQiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsIkhlYWRlciIsIkZvb3RlciIsIkNoZXZyb25MZWZ0SWNvbiIsIkNoZXZyb25SaWdodEljb24iLCJIZWFydEljb24iLCJTdGFySWNvbiIsIkN1cnJlbmN5IiwiUHJvZHVjdERldGFpbCIsInJvdXRlciIsInRhYiIsInNldFRhYiIsInByb2R1Y3QiLCJzZXRQcm9kdWN0Iiwic3RhdGUiLCJkaXNwYXRjaCIsImNhcnQiLCJpZCIsInF1ZXJ5IiwiZ2V0UHJvZHVjdERldGFpbCIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZXJyIiwidHlwZSIsInBheWxvYWQiLCJlcnJvciIsImFkZEl0ZW1Ub0NhcnQiLCJpblN0b2NrIiwic3VjY2VzcyIsImhhbmRsZUNoZWNrb3V0IiwicHVzaCIsInRpdGxlIiwiaW1hZ2VzIiwidXJsIiwibGVuZ3RoIiwibWFwIiwiaW1hZ2UiLCJpIiwicHJpY2VTYWxlIiwicHJpY2VPcmlnaW4iLCJkZXNjcmlwdGlvbiIsIl9faHRtbCIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9