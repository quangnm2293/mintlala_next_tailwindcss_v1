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
                children: "H\u1EBFt h\xE0ng"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 33
              }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: ["Kho: ", product.inStock]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 51
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
              lineNumber: 147,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__.StarIcon, {
              className: "h-7 text-yellow-500"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__.StarIcon, {
              className: "h-7 text-yellow-500"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__.StarIcon, {
              className: "h-7 text-yellow-500"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__.StarIcon, {
              className: "h-7 text-yellow-500"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-gray-700 lg:text-xl line-clamp-2 lg:line-clamp-3",
            children: product.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-gray-700 text-xl mb-4 font-bold",
              children: "M\xE0u s\u1EAFc"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex space-x-3 items-center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "h-10 w-10 rounded-full cursor-pointer bg-gray-600 active:ring-2 ring-gray-600 active:ring-offset-4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "cursor-pointer rounded-full border-2 border-red-500 p-1",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "h-10 w-10 rounded-full bg-red-500 active:ring-2 ring-red-500 active:ring-offset-4"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "h-10 w-10 rounded-full cursor-pointer bg-blue-500 active:ring-2 ring-blue-500 active:ring-offset-4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "h-10 w-10 rounded-full cursor-pointer bg-green-500 active:ring-2 ring-green-500 active:ring-offset-4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "h-10 w-10 rounded-full cursor-pointer bg-yellow-500 active:ring-2 ring-yellow-500 active:ring-offset-4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "overflow-x-auto",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-gray-700 text-xl mb-4 font-bold",
              children: "M\xE0u s\u1EAFc"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
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
                  lineNumber: 180,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "w-14 h-10 rounded-md border-4 border-blue-400 flex items-center justify-center cursor-pointer",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "font-bold text-gray-400",
                  children: "S"
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
                  children: "M"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "w-14 h-10 rounded-md border-2 border-gray-300 flex items-center justify-center cursor-pointer",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "font-bold text-gray-400",
                  children: "L"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "w-14 h-10 rounded-md border-2 border-gray-300 flex items-center justify-center cursor-pointer",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "font-bold text-gray-400",
                  children: "XL"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 192,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex space-x-4 py-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "button-green p-4 text-gray-700 font-bold lg:text-xl",
              onClick: addItemToCart,
              children: "Th\xEAm v\xE0o gi\u1ECF h\xE0ng"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "button p-4 text-gray-700 font-bold lg:text-xl",
              onClick: handleCheckout,
              children: "Mua ngay"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 199,
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
            lineNumber: 217,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            dangerouslySetInnerHTML: {
              __html: product.content
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 216,
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
      lineNumber: 224,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC9baWRdLmIyNDJmZDIxNTlmMzlhMmY5ZDM5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNnQixhQUFULEdBQXlCO0FBQUE7O0FBQUE7O0FBQ3hCLE1BQU1DLE1BQU0sR0FBR1Ysc0RBQVMsRUFBeEI7O0FBRHdCLGtCQUdGSiwrQ0FBUSxDQUFDLENBQUQsQ0FITjtBQUFBLE1BR2pCZSxHQUhpQjtBQUFBLE1BR1pDLE1BSFk7O0FBQUEsbUJBSU1oQiwrQ0FBUSxFQUpkO0FBQUEsTUFJakJpQixPQUppQjtBQUFBLE1BSVJDLFVBSlE7O0FBQUEsb0JBTUlwQixpREFBVSxDQUFDSSwyREFBRCxDQU5kO0FBQUEsTUFNaEJpQixLQU5nQixlQU1oQkEsS0FOZ0I7QUFBQSxNQU1UQyxRQU5TLGVBTVRBLFFBTlM7O0FBQUEsTUFPaEJDLElBUGdCLEdBT1BGLEtBUE8sQ0FPaEJFLElBUGdCO0FBU3hCdEIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBSXVCLEVBQUUsR0FBR1IsTUFBTSxDQUFDUyxLQUFQLENBQWFELEVBQXRCOztBQUNBLFFBQUlBLEVBQUosRUFBUTtBQUNQLFVBQU1FLGdCQUFnQjtBQUFBLGlWQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUNsQm5CLGdEQUFBLHdCQUEwQlMsTUFBTSxDQUFDUyxLQUFQLENBQWFELEVBQXZDLEdBQTZDSSxJQUE3QyxDQUFrRCxVQUFBQyxHQUFHLEVBQUk7QUFDOUQsd0JBQUlBLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQyxHQUFiLEVBQWtCLE9BQU9ULFFBQVEsQ0FBQztBQUFFVSxzQkFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0JDLHNCQUFBQSxP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cUJBQVMsRUFBQyxxQkFBZjtBQUFBLG9DQUNDO0FBQ0MsdUJBQVMsRUFBQyxxREFEWDtBQUVDLHFCQUFPLEVBQUVkLGFBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREQsZUFPQztBQUNDLHVCQUFTLEVBQUMsK0NBRFg7QUFFQyxxQkFBTyxFQUFFRyxjQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE3RkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXpDRCxlQXVKQztBQUFLLG1CQUFTLEVBQUMsOEJBQWY7QUFBQSxrQ0FDQztBQUFHLHFCQUFTLEVBQUMsa0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFHQztBQUFHLG1DQUF1QixFQUFFO0FBQUVZLGNBQUFBLE1BQU0sRUFBRS9CLE9BQU8sQ0FBQ2dDO0FBQWxCO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXZKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEQsZUF1S0MsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZLRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQTJLQTs7R0FwTlFwQztVQUNPVDs7O0tBRFBTO0FBc05ULCtEQUFlQSxhQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3QvW2lkXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgQG5leHQvbmV4dC9uby1pbWctZWxlbWVudCAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi8uLi9zdG9yZS9HbG9iYWxTdGF0ZSc7XHJcbmltcG9ydCB7IGFkZFRvQ2FydCB9IGZyb20gJy4uLy4uL3N0b3JlL0FjdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90YWlsd2luZC9IZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyJztcclxuaW1wb3J0IHsgQ2hldnJvbkxlZnRJY29uLCBDaGV2cm9uUmlnaHRJY29uLCBIZWFydEljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L291dGxpbmUnO1xyXG5pbXBvcnQgeyBTdGFySWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnO1xyXG5pbXBvcnQgQ3VycmVuY3kgZnJvbSAncmVhY3QtY3VycmVuY3ktZm9ybWF0dGVyJztcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3REZXRhaWwoKSB7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdGNvbnN0IFt0YWIsIHNldFRhYl0gPSB1c2VTdGF0ZSgwKTtcclxuXHRjb25zdCBbcHJvZHVjdCwgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuXHRjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcblx0Y29uc3QgeyBjYXJ0IH0gPSBzdGF0ZTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxldCBpZCA9IHJvdXRlci5xdWVyeS5pZDtcclxuXHRcdGlmIChpZCkge1xyXG5cdFx0XHRjb25zdCBnZXRQcm9kdWN0RGV0YWlsID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRcdGF3YWl0IGF4aW9zLmdldChgL2FwaS9wcm9kdWN0LyR7cm91dGVyLnF1ZXJ5LmlkfWApLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5lcnIpIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGVycm9yOiByZXMuZGF0YS5lcnIgfSB9KTtcclxuXHRcdFx0XHRcdHNldFByb2R1Y3QocmVzLmRhdGEucHJvZHVjdCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH07XHJcblx0XHRcdGdldFByb2R1Y3REZXRhaWwoKTtcclxuXHRcdH1cclxuXHR9LCBbcm91dGVyLnF1ZXJ5LmlkXSk7XHJcblxyXG5cdGlmICghcHJvZHVjdCkgcmV0dXJuIG51bGw7XHJcblxyXG5cdGNvbnN0IGFkZEl0ZW1Ub0NhcnQgPSAoKSA9PiB7XHJcblx0XHRpZiAocHJvZHVjdC5pblN0b2NrIDw9IDApIHtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBlcnJvcjogJ1hpbiBs4buXaSBz4bqjbiBwaOG6qW0gdOG6oW0gaOG6v3QgaMOgbmchJyB9IH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZGlzcGF0Y2goYWRkVG9DYXJ0KHByb2R1Y3QsIGNhcnQpKTtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBzdWNjZXNzOiAnVGjDqm0gdsOgbyBnaeG7jyB0aMOgbmggY8O0bmchJyB9IH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlQ2hlY2tvdXQgPSAoKSA9PiB7XHJcblx0XHRpZiAocHJvZHVjdC5pblN0b2NrIDw9IDApIHtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBlcnJvcjogJ1hpbiBs4buXaSBz4bqjbiBwaOG6qW0gdOG6oW0gaOG6v3QgaMOgbmchJyB9IH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZGlzcGF0Y2goYWRkVG9DYXJ0KHByb2R1Y3QsIGNhcnQpKTtcclxuXHRcdFx0cm91dGVyLnB1c2goJy9jaGVja291dCcpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nYmctZ3JheS0xMDAnPlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+e3Byb2R1Y3QudGl0bGV9IC0gTUlOVCBMYWxhPC90aXRsZT5cclxuXHRcdFx0PC9IZWFkPlxyXG5cclxuXHRcdFx0PEhlYWRlciAvPlxyXG5cclxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPSdtYXgtdy1zY3JlZW4tMnhsIG14LWF1dG8gbWluLWgtc2NyZWVuJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBsZzpncmlkLWNvbHMtMiBteS00IHAtNSBiZy13aGl0ZSc+XHJcblx0XHRcdFx0XHR7LyogaW1hZ2UgKi99XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbGc6cC01Jz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIGdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17cHJvZHVjdC5pbWFnZXNbdGFiXS51cmx9IGFsdD0naW1hZ2UnIGNsYXNzTmFtZT0ndy1mdWxsJyAvPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRUYWIodGFiID09PSAwID8gcHJvZHVjdC5pbWFnZXMubGVuZ3RoIC0gMSA6IHRhYiAtIDEpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSd3LTEwIGgtMjAgYmctcmdiYSBhYnNvbHV0ZSBsZWZ0LTIgdG9wLVs0NSVdIGdyb3VwLWhvdmVyOmZsZXggaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyIGhpZGRlbidcclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Q2hldnJvbkxlZnRJY29uIGNsYXNzTmFtZT0naC0xMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCcgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0VGFiKHRhYiA9PT0gMCA/IHByb2R1Y3QuaW1hZ2VzLmxlbmd0aCAtIDEgOiB0YWIgLSAxKX1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ndy0xMCBoLTIwIGJnLXJnYmEgYWJzb2x1dGUgcmlnaHQtMiB0b3AtWzQ1JV0gZ3JvdXAtaG92ZXI6ZmxleCBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgaGlkZGVuJ1xyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdDxDaGV2cm9uUmlnaHRJY29uIGNsYXNzTmFtZT0naC0xMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCcgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBzcGFjZS14LTIgbXQtMiBvdmVyZmxvdy1oaWRkZW4nPlxyXG5cdFx0XHRcdFx0XHRcdHtwcm9kdWN0LmltYWdlcy5tYXAoKGltYWdlLCBpKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17aX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdoLTEvNSB3LTEvNSBjdXJzb3ItcG9pbnRlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0VGFiKGkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtpbWFnZS51cmx9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PSdpbWFnZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BvYmplY3QtY29udGFpbiAke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aSA9PT0gdGFiID8gJ2JvcmRlci00IGJvcmRlci1yZWQtNDAwJyA6ICcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fWB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHR7LyogZGV0YWlsICovfVxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xnOnAtNSBteS00IGxnOm15LTAgZmxleCBmbGV4LWNvbCBzcGFjZS15LTQnPlxyXG5cdFx0XHRcdFx0XHR7LyogdGl0bGUgKi99XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXInPlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC14bCBsZzp0ZXh0LTJ4bCBmb250LWJvbGQgY2FwaXRhbGl6ZSc+e3Byb2R1Y3QudGl0bGV9PC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8SGVhcnRJY29uIGNsYXNzTmFtZT0naC0xMCBjdXJzb3ItcG9pbnRlciBhY3RpdmU6dGV4dC1yZWQtNTAwIGhvdmVyOnRleHQtcmVkLTUwMCcgLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHR7LyogcHJpY2UgKi99XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IHNwYWNlLXgtNCBteS00Jz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGV4dC1yZWQtNjAwIGZvbnQtYm9sZCB0ZXh0LTN4bCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Q3VycmVuY3lcclxuXHRcdFx0XHRcdFx0XHRcdFx0cXVhbnRpdHk9e3Byb2R1Y3QucHJpY2VTYWxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW5jeT0nVk5EJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwYXR0ZXJuPScjIywjIyMgISdcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z3JvdXA9Jy4nXHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IHNwYWNlLXgtMiBpdGVtcy1lbmQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHA+R2nDoSBn4buRYzogPC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQtZ3JheS02MDAgbGluZS10aHJvdWdoJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEN1cnJlbmN5XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cXVhbnRpdHk9e3Byb2R1Y3QucHJpY2VPcmlnaW59XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVuY3k9J1ZORCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYXR0ZXJuPScjIywjIyMgISdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRncm91cD0nLidcclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdHsvKiBLaG8gKi99XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHR7cHJvZHVjdC5pblN0b2NrIDw9IDAgPyA8cD5I4bq/dCBow6BuZzwvcD4gOiA8cD5LaG86IHtwcm9kdWN0LmluU3RvY2t9PC9wPn1cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHR7LyogcmF0aW5nICovfVxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XHJcblx0XHRcdFx0XHRcdFx0PFN0YXJJY29uIGNsYXNzTmFtZT0naC03IHRleHQteWVsbG93LTUwMCcgLz5cclxuXHRcdFx0XHRcdFx0XHQ8U3Rhckljb24gY2xhc3NOYW1lPSdoLTcgdGV4dC15ZWxsb3ctNTAwJyAvPlxyXG5cdFx0XHRcdFx0XHRcdDxTdGFySWNvbiBjbGFzc05hbWU9J2gtNyB0ZXh0LXllbGxvdy01MDAnIC8+XHJcblx0XHRcdFx0XHRcdFx0PFN0YXJJY29uIGNsYXNzTmFtZT0naC03IHRleHQteWVsbG93LTUwMCcgLz5cclxuXHRcdFx0XHRcdFx0XHQ8U3Rhckljb24gY2xhc3NOYW1lPSdoLTcgdGV4dC15ZWxsb3ctNTAwJyAvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdHsvKiBkZXNjcmlwdGlvbiAgKi99XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTcwMCBsZzp0ZXh0LXhsIGxpbmUtY2xhbXAtMiBsZzpsaW5lLWNsYW1wLTMnPlxyXG5cdFx0XHRcdFx0XHRcdHtwcm9kdWN0LmRlc2NyaXB0aW9ufVxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblxyXG5cdFx0XHRcdFx0XHR7LyogQ29sb3JzICovfVxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTcwMCB0ZXh0LXhsIG1iLTQgZm9udC1ib2xkJz5Nw6B1IHPhuq9jPC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBzcGFjZS14LTMgaXRlbXMtY2VudGVyJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0naC0xMCB3LTEwIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlciBiZy1ncmF5LTYwMCBhY3RpdmU6cmluZy0yIHJpbmctZ3JheS02MDAgYWN0aXZlOnJpbmctb2Zmc2V0LTQnPjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlciByb3VuZGVkLWZ1bGwgYm9yZGVyLTIgYm9yZGVyLXJlZC01MDAgcC0xJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2gtMTAgdy0xMCByb3VuZGVkLWZ1bGwgYmctcmVkLTUwMCBhY3RpdmU6cmluZy0yIHJpbmctcmVkLTUwMCBhY3RpdmU6cmluZy1vZmZzZXQtNCc+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0naC0xMCB3LTEwIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlciBiZy1ibHVlLTUwMCBhY3RpdmU6cmluZy0yIHJpbmctYmx1ZS01MDAgYWN0aXZlOnJpbmctb2Zmc2V0LTQnPjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0naC0xMCB3LTEwIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlciBiZy1ncmVlbi01MDAgYWN0aXZlOnJpbmctMiByaW5nLWdyZWVuLTUwMCBhY3RpdmU6cmluZy1vZmZzZXQtNCc+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdoLTEwIHctMTAgcm91bmRlZC1mdWxsIGN1cnNvci1wb2ludGVyIGJnLXllbGxvdy01MDAgYWN0aXZlOnJpbmctMiByaW5nLXllbGxvdy01MDAgYWN0aXZlOnJpbmctb2Zmc2V0LTQnPjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHR7LyogU2l6ZSAqL31cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J292ZXJmbG93LXgtYXV0byc+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNzAwIHRleHQteGwgbWItNCBmb250LWJvbGQnPk3DoHUgc+G6r2M8L3A+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtd3JhcCBzcGFjZS14LTInPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctMTQgaC0xMCByb3VuZGVkLW1kIGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBjdXJzb3ItcG9pbnRlcic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtZ3JheS00MDAnPlhTPC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy0xNCBoLTEwIHJvdW5kZWQtbWQgYm9yZGVyLTQgYm9yZGVyLWJsdWUtNDAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGN1cnNvci1wb2ludGVyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC1ncmF5LTQwMCc+UzwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctMTQgaC0xMCByb3VuZGVkLW1kIGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBjdXJzb3ItcG9pbnRlcic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtZ3JheS00MDAnPk08L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTE0IGgtMTAgcm91bmRlZC1tZCBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgY3Vyc29yLXBvaW50ZXInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2ZvbnQtYm9sZCB0ZXh0LWdyYXktNDAwJz5MPC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy0xNCBoLTEwIHJvdW5kZWQtbWQgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGN1cnNvci1wb2ludGVyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC1ncmF5LTQwMCc+WEw8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHR7LyogYnV0dG9uICovfVxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggc3BhY2UteC00IHB5LTQnPlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYnV0dG9uLWdyZWVuIHAtNCB0ZXh0LWdyYXktNzAwIGZvbnQtYm9sZCBsZzp0ZXh0LXhsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17YWRkSXRlbVRvQ2FydH1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRUaMOqbSB2w6BvIGdp4buPIGjDoG5nXHJcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdidXR0b24gcC00IHRleHQtZ3JheS03MDAgZm9udC1ib2xkIGxnOnRleHQteGwnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVDaGVja291dH1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRNdWEgbmdheVxyXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdHsvKiBjb250ZW50ICovfVxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xnOmNvbC1zcGFuLTIgbGc6bXktOCBsZzpwLTUnPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2ZvbnQtYm9sZCB0ZXh0LXhsIHVwcGVyY2FzZSBtYi00Jz5Nw7QgdOG6oyBjaGkgdGnhur90PC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0PHAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwcm9kdWN0LmNvbnRlbnQgfX0+PC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvbWFpbj5cclxuXHJcblx0XHRcdDxGb290ZXIgLz5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REZXRhaWw7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJEYXRhQ29udGV4dCIsImFkZFRvQ2FydCIsInVzZVJvdXRlciIsImF4aW9zIiwiSGVhZGVyIiwiRm9vdGVyIiwiQ2hldnJvbkxlZnRJY29uIiwiQ2hldnJvblJpZ2h0SWNvbiIsIkhlYXJ0SWNvbiIsIlN0YXJJY29uIiwiQ3VycmVuY3kiLCJQcm9kdWN0RGV0YWlsIiwicm91dGVyIiwidGFiIiwic2V0VGFiIiwicHJvZHVjdCIsInNldFByb2R1Y3QiLCJzdGF0ZSIsImRpc3BhdGNoIiwiY2FydCIsImlkIiwicXVlcnkiLCJnZXRQcm9kdWN0RGV0YWlsIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJlcnIiLCJ0eXBlIiwicGF5bG9hZCIsImVycm9yIiwiYWRkSXRlbVRvQ2FydCIsImluU3RvY2siLCJzdWNjZXNzIiwiaGFuZGxlQ2hlY2tvdXQiLCJwdXNoIiwidGl0bGUiLCJpbWFnZXMiLCJ1cmwiLCJsZW5ndGgiLCJtYXAiLCJpbWFnZSIsImkiLCJwcmljZVNhbGUiLCJwcmljZU9yaWdpbiIsImRlc2NyaXB0aW9uIiwiX19odG1sIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=