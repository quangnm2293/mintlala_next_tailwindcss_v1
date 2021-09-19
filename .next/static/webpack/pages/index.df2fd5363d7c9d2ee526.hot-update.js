"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/tailwind/CategoryShow.js":
/*!*********************************************!*\
  !*** ./components/tailwind/CategoryShow.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\Works\\VSCode\\NextJS\\next-website-mintlala\\components\\tailwind\\CategoryShow.js",
    _s = $RefreshSig$();


var ProductHome = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ "components_tailwind_ProductHome_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ProductHome */ "./components/tailwind/ProductHome.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./ProductHome */ "./components/tailwind/ProductHome.js")];
    },
    modules: ["..\\components\\tailwind\\CategoryShow.js -> " + './ProductHome']
  }
});
_c2 = ProductHome;



function CategoryShow(_ref) {
  _s();

  var _this = this;

  var products = _ref.products;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex flex-col",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "text-3xl text-red-700 cursor-pointer font-semibold transition duration-200 transform \r animate-pulse origin-left hover:text-red-600 hover:scale-105 my-4",
      onClick: function onClick() {
        return router.push('/categories/all');
      },
      children: "H\xC0NG M\u1EDAI V\u1EC0 !"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "grid grid-cols-2 md:hidden",
        children: products.slice(0, 2).map(function (product) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductHome, {
            product: product
          }, product._id, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 7
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "hidden md:grid md:grid-cols-3 xl:hidden",
        children: products.slice(0, 3).map(function (product) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductHome, {
            product: product
          }, product._id, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 7
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "hidden xl:grid xl:grid-cols-4 2xl:hidden",
        children: products.slice(0, 4).map(function (product) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductHome, {
            product: product
          }, product._id, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 7
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "hidden 2xl:grid 2xl:grid-cols-5",
        children: products.slice(0, 5).map(function (product) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductHome, {
            product: product
          }, product._id, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 7
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-5 my-2 lg:my-5 p-2 lg:p-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "relative w-full lg:w-1/2 cursor-pointer",
        onClick: function onClick() {
          return router.push('/categories/6131eb4875057705f0779079');
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
          src: "/images/1.png",
          alt: "1",
          width: 1000,
          height: 1000,
          objectFit: "cover",
          className: "transition duration-500 ease-in-out transform hover:scale-125"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "absolute bottom-10 right-10 text-red-500 z-10 uppercase font-extrabold text-3xl lg:text-[50px] tracking-wider",
          children: "Ch\xE2n v\xE1y"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w-full lg:w-1/2 flex flex-col space-y-2 lg:space-y-5",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "h-2/3 flex space-x-2 lg:space-x-5",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "relative w-1/2 cursor-pointer",
            onClick: function onClick() {
              return router.push('/categories/6135775a65821722a80dc299');
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
              src: "/images/2.png",
              alt: "1",
              width: 1000 / 2,
              height: 2 / 3 * 1000,
              className: "transition duration-500 ease-in-out transform hover:scale-125"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "absolute bottom-28 lg:bottom-32 -left-16 lg:-left-20 text-blue-600 font-serif z-10 uppercase font-extrabold text-3xl lg:text-[50px] tracking-wider \r transform rotate-[270deg] ",
              children: "T\u1EA5t - V\u1EDB"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "relative w-1/2 cursor-pointer",
            onClick: function onClick() {
              return router.push('/categories/6131f84c75057705f0779081');
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
              src: "/images/3.png",
              alt: "1",
              width: 1000 / 2,
              height: 2 / 3 * 1000,
              objectFit: "cover",
              className: "transition duration-500 ease-in-out transform hover:scale-125"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "absolute bottom-28 lg:bottom-32 -left-16 lg:-left-20 text-yellow-600 font-serif z-10 uppercase font-extrabold text-3xl lg:text-[50px] tracking-wider \r transform rotate-[270deg] ",
              children: "Ph\u1EE5 ki\u1EC7n"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "relative h-1/3 w-full cursor-pointer",
          onClick: function onClick() {
            return router.push('/categories/6131eb6375057705f077907b');
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: "/images/4.png",
            alt: "1",
            width: 1000,
            height: 1 / 3 * 1000,
            objectFit: "cover",
            className: "transition duration-500 ease-in-out transform hover:scale-125"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "absolute bottom-2 lg:bottom-10 right-10 text-purple-600 z-10 uppercase font-extrabold text-3xl lg:text-[50px] tracking-wider",
            children: "T\xFAi x\xE1ch"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }, this);
}

_s(CategoryShow, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c3 = CategoryShow;
/* harmony default export */ __webpack_exports__["default"] = (CategoryShow);

var _c, _c2, _c3;

$RefreshReg$(_c, "ProductHome$dynamic");
$RefreshReg$(_c2, "ProductHome");
$RefreshReg$(_c3, "CategoryShow");

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


/***/ }),

/***/ "./components/tailwind/Header.js":
/*!***************************************!*\
  !*** ./components/tailwind/Header.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var _MenuModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MenuModal */ "./components/tailwind/MenuModal.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\Works\\VSCode\\NextJS\\next-website-mintlala\\components\\tailwind\\Header.js",
    _s = $RefreshSig$();

/* eslint-disable @next/next/no-img-element */








function Header() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_store_GlobalState__WEBPACK_IMPORTED_MODULE_5__.DataContext),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var cart = state.cart,
      auth = state.auth,
      categories = state.categories;

  var handleLogout = function handleLogout() {
    js_cookie__WEBPACK_IMPORTED_MODULE_6__.default.remove('refreshtoken', {
      path: '/api/auth/accessToken'
    });
    js_cookie__WEBPACK_IMPORTED_MODULE_6__.default.remove('userInfoInit');
    dispatch({
      type: 'AUTH',
      payload: {}
    });
    dispatch({
      type: 'ADD_ORDERS',
      payload: []
    });
    router.push('/');
  };

  var handleOpenMenu = function handleOpenMenu() {
    var menuModalEl = document.getElementById('menuModalMobile');
    var menuModalBodyEl = document.getElementById('menuModalBody');
    menuModalEl.classList.remove('hidden');
    menuModalBodyEl.classList.remove('animate-slide-500');
    menuModalBodyEl.classList.add('animate-slideIn-500');
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "pb-12 sm:pb-0 flex items-center bg-amazon_blue trans p-1 px-2 flex-grow relative",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex items-center",
        onClick: handleOpenMenu,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.ViewListIcon, {
          className: "h-8 text-white cursor-pointer sm:hidden"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuModal__WEBPACK_IMPORTED_MODULE_7__.default, {
        user: auth.user,
        router: router,
        categories: categories,
        handleLogout: handleLogout
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onClick: function onClick() {
          return router.push('/');
        },
        className: "py-2 flex items-center mx-2 mr-3 cursor-pointer flex-grow sm:flex-grow-0",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
          src: "/images/logo4.png",
          alt: "Logo",
          width: 150,
          height: 40,
          objectFit: "contain",
          className: "cursor-pointe bg-amazon_blue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "absolute top-[58%] left-3 right-3 sm:static flex items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500 cursor-pointer",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          className: "p-2 h-full w-full flex-grow flex-shrink rounded-l-md focus:outline-none",
          type: "text",
          placeholder: "T\xECm MINT Lala"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.SearchIcon, {
          className: "h-12 p-4 text-black"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex text-gray-300 text-xs md:text-sm space-x-6 mx-5 whitespace-nowrap",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "relative hidden sm:flex space-x-2 items-center cursor-pointer md:hover:outline-while_solid md:p-1 group",
          children: [auth.user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: auth.user.avatar,
            alt: auth.user.name,
            height: "30",
            width: "30",
            className: "rounded-full"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            onClick: function onClick() {
              return router.push("".concat(!auth.user ? '/signin' : '/profile'));
            },
            className: "text-white font-extrabold",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "font-normal",
              children: "Hello,"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 8
            }, this), auth.user ? auth.user.name : 'Sign in']
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 7
          }, this), auth.user && auth.user.role !== 'admin' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "hidden flex-col items-start text-gray-600 space-y-4 pr-5 pb-5 pl-10 absolute top-[105%] right-0 z-[48]\r rounded-md bg-gray-100 shadow-xl md:group-hover:flex animate-scale-1s origin-top-right",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "absolute -top-1 h-1 w-full opacity-0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "hover:text-yellow-700 transition duration-100 transform hover:scale-110",
              onClick: function onClick() {
                return router.push('/profile');
              },
              children: "T\xE0i kho\u1EA3n"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "hover:text-yellow-700 transition duration-100 transform hover:scale-110",
              onClick: function onClick() {
                return router.push('/profile/order-history');
              },
              children: "\u0110\u01A1n h\xE0ng"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "border-t border-gray-300 pt-4 hover:text-yellow-700 transition duration-100 transform hover:scale-110",
              onClick: handleLogout,
              children: "\u0110\u0103ng xu\u1EA5t"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 8
          }, this), auth.user && auth.user.role === 'admin' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "hidden flex-col items-start text-gray-600 space-y-4 pr-5 pb-5 pl-10 absolute top-[105%] right-0 z-[48]\r rounded-md bg-gray-100 shadow-xl md:group-hover:flex animate-scale-1s origin-top-right",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "absolute -top-1 h-1 w-full opacity-0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "hover:text-yellow-700 transition duration-100 transform hover:scale-110",
              onClick: function onClick() {
                return router.push('/profile');
              },
              children: "T\xE0i kho\u1EA3n"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "hover:text-yellow-700 transition duration-100 transform hover:scale-110",
              onClick: function onClick() {
                return router.push('/profile/order-history');
              },
              children: "Qu\u1EA3n l\xFD \u0111\u01A1n h\xE0ng"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "hover:text-yellow-700 transition duration-100 transform hover:scale-110",
              onClick: function onClick() {
                return router.push('/product');
              },
              children: "S\u1EA3n ph\u1EA9m"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "hover:text-yellow-700 transition duration-100 transform hover:scale-110",
              onClick: function onClick() {
                return router.push('/users');
              },
              children: "Users"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "hover:text-yellow-700 transition duration-100 transform hover:scale-110",
              onClick: function onClick() {
                return router.push('/categories');
              },
              children: "Danh m\u1EE5c"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "border-t border-gray-300 pt-4 hover:text-yellow-700 transition duration-100 transform hover:scale-110",
              onClick: handleLogout,
              children: "\u0110\u0103ng xu\u1EA5t"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "hidden sm:flex flex-col link md:hover:outline-while_solid md:p-1",
          onClick: function onClick() {
            return router.push("".concat(!auth.user ? '/signin' : '/profile/order-history'));
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u0110\u01A1n h\u1EE7y"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: " font-extrabold text-white",
            children: "& \u0110\u01A1n h\xE0ng"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          onClick: function onClick() {
            return router.push('/cart');
          },
          className: "flex items-center link relative md:hover:outline-while_solid md:p-1",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "no-underline h-4 w-4 sm:h-5 sm:w-5 bg-yellow-400 text-center rounded-full text-gray-800 absolute left-4 sm:left-6 top-0 font-extrabold",
            children: cart.length
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.ShoppingCartIcon, {
            className: "h-8 sm:h-10 sm:mr-2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "hidden md:inline font-extrabold text-white",
            children: "Gi\u1ECF h\xE0ng"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex items-center bg-amazon_blue sm:bg-amazon_blue-light pl-5 p-1 text-gray-200 space-x-3 whitespace-nowrap overflow-x-auto scrollbar-hide",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "flex md:hover:outline-while_solid p-1 cursor-pointer",
        onClick: function onClick() {
          return router.push('/categories/all');
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.MenuIcon, {
          className: "hidden sm:inline h-6 mr-1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 6
        }, this), "T\u1EA5t c\u1EA3"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "md:hover:outline-while_solid p-1 cursor-pointer",
        children: "N\u1ED5i b\u1EADt h\xF4m nay"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "md:hover:outline-while_solid p-1 cursor-pointer",
        onClick: function onClick() {
          return router.push('/categories/6131eb4875057705f0779079');
        },
        children: "Ch\xE2n v\xE1y"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "md:hover:outline-while_solid p-1 cursor-pointer",
        onClick: function onClick() {
          return router.push('/categories/6131f84c75057705f0779081');
        },
        children: "Ph\u1EE5 ki\u1EC7n"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "md:hover:outline-while_solid p-1 cursor-pointer",
        children: "Voucher"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "md:hover:outline-while_solid p-1 cursor-pointer",
        children: "D\u1ECBch v\u1EE5 kh\xE1ch h\xE0ng"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 3
  }, this);
}

_s(Header, "TVJFR0REv4uRQqgLjfqrLwPssls=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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


/***/ }),

/***/ "./components/tailwind/Notify.js":
/*!***************************************!*\
  !*** ./components/tailwind/Notify.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Toast */ "./components/tailwind/Toast.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\Works\\VSCode\\NextJS\\next-website-mintlala\\components\\tailwind\\Notify.js",
    _s = $RefreshSig$();


 // import Loading from '../Loading';



function Notify() {
  _s();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_GlobalState__WEBPACK_IMPORTED_MODULE_2__.DataContext),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var notify = state.notify;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [notify.error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Toast__WEBPACK_IMPORTED_MODULE_3__.default, {
      msg: {
        msg: notify.error,
        title: 'Error'
      },
      handleShow: function handleShow() {
        return dispatch({
          type: 'NOTIFY',
          payload: {}
        });
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }, this), notify.success && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Toast__WEBPACK_IMPORTED_MODULE_3__.default, {
      msg: {
        msg: notify.success,
        title: 'Success'
      },
      handleShow: function handleShow() {
        return dispatch({
          type: 'NOTIFY',
          payload: {}
        });
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }, this);
}

_s(Notify, "QMdo+h1+fLbTriZQ0QN6uukzyow=");

_c = Notify;
/* harmony default export */ __webpack_exports__["default"] = (Notify);

var _c;

$RefreshReg$(_c, "Notify");

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


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_tailwind_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/tailwind/Header */ "./components/tailwind/Header.js");
/* harmony import */ var _components_tailwind_Banner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/tailwind/Banner */ "./components/tailwind/Banner.js");
/* harmony import */ var _components_tailwind_Notify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/tailwind/Notify */ "./components/tailwind/Notify.js");
/* harmony import */ var _components_tailwind_CategoryShow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/tailwind/CategoryShow */ "./components/tailwind/CategoryShow.js");
/* harmony import */ var _components_Commitment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Commitment */ "./components/Commitment.js");
/* harmony import */ var _components_tailwind_MessageSocial__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/tailwind/MessageSocial */ "./components/tailwind/MessageSocial.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "E:\\Works\\VSCode\\NextJS\\next-website-mintlala\\pages\\index.js",
    _s = $RefreshSig$();

/* eslint-disable react-hooks/exhaustive-deps */











function Home() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)([]),
      products = _useState[0],
      setProducts = _useState[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
  var page = router.query.page || 1;
  var category = router.query.category || 'all';
  var sort = router.query.sort || '';
  var search = router.query.search || 'all';
  var limit = router.query.limit || 20;
  (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(function () {
    var getProducts = /*#__PURE__*/function () {
      var _ref = (0,E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        return E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_13___default().get(encodeURI("/api/product?page=".concat(page, "&category=").concat(category, "&sort=").concat(sort, "&title=").concat(search, "&limit=").concat(limit))).then(function (res) {
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
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Trang ch\u1EE7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tailwind_Header__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tailwind_Notify__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tailwind_MessageSocial__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tailwind_Banner__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "max-w-screen-2xl mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Commitment__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tailwind_CategoryShow__WEBPACK_IMPORTED_MODULE_8__.default, {
        products: products
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 3
  }, this);
}

_s(Home, "3fTaWYocqEuV+s6TPVB+pVwKM+g=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGYyZmQ1MzYzZDdjOWQyZWU1MjYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLElBQU1DLFdBQVcsR0FBR0QsbURBQU8sTUFBQztBQUFBLFNBQU0sNExBQU47QUFBQSxDQUFELEVBQWdDO0FBQUVFLEVBQUFBLEdBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQUFsQiwyREFBa0I7QUFBQTtBQUFBLGdFQUFsQixlQUFrQjtBQUFBO0FBQUEsQ0FBaEMsQ0FBM0I7TUFBTUQ7QUFDTjtBQUNBOztBQUVBLFNBQVNJLFlBQVQsT0FBb0M7QUFBQTs7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDbkMsTUFBTUMsTUFBTSxHQUFHSCxzREFBUyxFQUF4QjtBQUVBLHNCQUNDO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQSw0QkFDQztBQUNDLGVBQVMsRUFBQywySkFEWDtBQUdDLGFBQU8sRUFBRTtBQUFBLGVBQU1HLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLGlCQUFaLENBQU47QUFBQSxPQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFTQztBQUFBLDhCQUNDO0FBQUssaUJBQVMsRUFBQyw0QkFBZjtBQUFBLGtCQUNFRixRQUFRLENBQUNHLEtBQVQsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCQyxHQUFyQixDQUF5QixVQUFBQyxPQUFPO0FBQUEsOEJBQ2hDLDhEQUFDLFdBQUQ7QUFBK0IsbUJBQU8sRUFBRUE7QUFBeEMsYUFBa0JBLE9BQU8sQ0FBQ0MsR0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEZ0M7QUFBQSxTQUFoQztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQU9DO0FBQUssaUJBQVMsRUFBQyx5Q0FBZjtBQUFBLGtCQUNFTixRQUFRLENBQUNHLEtBQVQsQ0FBZSxDQUFmLEVBQWtCLENB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aEI7O0FBWmtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVhULFdBQVc7QUFBQTtBQUFBO0FBQUEsT0FBakI7O0FBZUFBLElBQUFBLFdBQVc7QUFDWCxHQWpCUSxFQWlCTixFQWpCTSxDQUFUO0FBbUJBLHNCQUNDO0FBQUEsNEJBQ0MsOERBQUMsa0RBQUQ7QUFBQSw2QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUlDLDhEQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRCxlQUtDLDhEQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRCxlQU9DLDhEQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRCxlQVNDO0FBQUssZUFBUyxFQUFDLEVBQWY7QUFBQSw2QkFDQyw4REFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRELGVBWUM7QUFBTSxlQUFTLEVBQUMsMEJBQWhCO0FBQUEsOEJBQ0MsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBR0MsOERBQUMsc0VBQUQ7QUFBYyxnQkFBUSxFQUFFOUQ7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpELGVBaUJDLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFxQkE7O0dBbER1QnNEO1VBRVJ4RDs7O0tBRlF3RCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RhaWx3aW5kL0NhdGVnb3J5U2hvdy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YWlsd2luZC9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGFpbHdpbmQvTm90aWZ5LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5jb25zdCBQcm9kdWN0SG9tZSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuL1Byb2R1Y3RIb21lJyksIHsgc3NyOiBmYWxzZSB9KTtcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5mdW5jdGlvbiBDYXRlZ29yeVNob3coeyBwcm9kdWN0cyB9KSB7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCc+XHJcblx0XHRcdDxoMVxyXG5cdFx0XHRcdGNsYXNzTmFtZT0ndGV4dC0zeGwgdGV4dC1yZWQtNzAwIGN1cnNvci1wb2ludGVyIGZvbnQtc2VtaWJvbGQgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgdHJhbnNmb3JtIFxyXG5cdFx0XHRcdFx0XHRhbmltYXRlLXB1bHNlIG9yaWdpbi1sZWZ0IGhvdmVyOnRleHQtcmVkLTYwMCBob3ZlcjpzY2FsZS0xMDUgbXktNCdcclxuXHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL2NhdGVnb3JpZXMvYWxsJyl9XHJcblx0XHRcdD5cclxuXHRcdFx0XHRIw4BORyBN4buaSSBW4buAICFcclxuXHRcdFx0PC9oMT5cclxuXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTIgbWQ6aGlkZGVuJz5cclxuXHRcdFx0XHRcdHtwcm9kdWN0cy5zbGljZSgwLCAyKS5tYXAocHJvZHVjdCA9PiAoXHJcblx0XHRcdFx0XHRcdDxQcm9kdWN0SG9tZSBrZXk9e3Byb2R1Y3QuX2lkfSBwcm9kdWN0PXtwcm9kdWN0fSAvPlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdoaWRkZW4gbWQ6Z3JpZCBtZDpncmlkLWNvbHMtMyB4bDpoaWRkZW4nPlxyXG5cdFx0XHRcdFx0e3Byb2R1Y3RzLnNsaWNlKDAsIDMpLm1hcChwcm9kdWN0ID0+IChcclxuXHRcdFx0XHRcdFx0PFByb2R1Y3RIb21lIGtleT17cHJvZHVjdC5faWR9IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2hpZGRlbiB4bDpncmlkIHhsOmdyaWQtY29scy00IDJ4bDpoaWRkZW4nPlxyXG5cdFx0XHRcdFx0e3Byb2R1Y3RzLnNsaWNlKDAsIDQpLm1hcChwcm9kdWN0ID0+IChcclxuXHRcdFx0XHRcdFx0PFByb2R1Y3RIb21lIGtleT17cHJvZHVjdC5faWR9IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2hpZGRlbiAyeGw6Z3JpZCAyeGw6Z3JpZC1jb2xzLTUnPlxyXG5cdFx0XHRcdFx0e3Byb2R1Y3RzLnNsaWNlKDAsIDUpLm1hcChwcm9kdWN0ID0+IChcclxuXHRcdFx0XHRcdFx0PFByb2R1Y3RIb21lIGtleT17cHJvZHVjdC5faWR9IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBzcGFjZS15LTIgbGc6c3BhY2UteS0wIGxnOnNwYWNlLXgtNSBteS0yIGxnOm15LTUgcC0yIGxnOnAtNSc+XHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdyZWxhdGl2ZSB3LWZ1bGwgbGc6dy0xLzIgY3Vyc29yLXBvaW50ZXInXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL2NhdGVnb3JpZXMvNjEzMWViNDg3NTA1NzcwNWYwNzc5MDc5Jyl9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRcdHNyYz0nL2ltYWdlcy8xLnBuZydcclxuXHRcdFx0XHRcdFx0YWx0PScxJ1xyXG5cdFx0XHRcdFx0XHR3aWR0aD17MTAwMH1cclxuXHRcdFx0XHRcdFx0aGVpZ2h0PXsxMDAwfVxyXG5cdFx0XHRcdFx0XHRvYmplY3RGaXQ9J2NvdmVyJ1xyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J3RyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMjUnXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdhYnNvbHV0ZSBib3R0b20tMTAgcmlnaHQtMTAgdGV4dC1yZWQtNTAwIHotMTAgdXBwZXJjYXNlIGZvbnQtZXh0cmFib2xkIHRleHQtM3hsIGxnOnRleHQtWzUwcHhdIHRyYWNraW5nLXdpZGVyJz5cclxuXHRcdFx0XHRcdFx0Q2jDom4gdsOheVxyXG5cdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGxnOnctMS8yIGZsZXggZmxleC1jb2wgc3BhY2UteS0yIGxnOnNwYWNlLXktNSc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naC0yLzMgZmxleCBzcGFjZS14LTIgbGc6c3BhY2UteC01Jz5cclxuXHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ncmVsYXRpdmUgdy0xLzIgY3Vyc29yLXBvaW50ZXInXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9jYXRlZ29yaWVzLzYxMzU3NzVhNjU4MjE3MjJhODBkYzI5OScpfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRzcmM9Jy9pbWFnZXMvMi5wbmcnXHJcblx0XHRcdFx0XHRcdFx0XHRhbHQ9JzEnXHJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aD17MTAwMCAvIDJ9XHJcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9eygyIC8gMykgKiAxMDAwfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSd0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTI1J1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYWJzb2x1dGUgYm90dG9tLTI4IGxnOmJvdHRvbS0zMiAtbGVmdC0xNiBsZzotbGVmdC0yMCB0ZXh0LWJsdWUtNjAwIGZvbnQtc2VyaWYgei0xMCB1cHBlcmNhc2UgZm9udC1leHRyYWJvbGQgdGV4dC0zeGwgbGc6dGV4dC1bNTBweF0gdHJhY2tpbmctd2lkZXIgXHJcblx0XHRcdFx0XHRcdFx0IHRyYW5zZm9ybSByb3RhdGUtWzI3MGRlZ10gJ1xyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFThuqV0IC0gVuG7m1xyXG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdyZWxhdGl2ZSB3LTEvMiBjdXJzb3ItcG9pbnRlcidcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL2NhdGVnb3JpZXMvNjEzMWY4NGM3NTA1NzcwNWYwNzc5MDgxJyl9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdHNyYz0nL2ltYWdlcy8zLnBuZydcclxuXHRcdFx0XHRcdFx0XHRcdGFsdD0nMSdcclxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoPXsxMDAwIC8gMn1cclxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodD17KDIgLyAzKSAqIDEwMDB9XHJcblx0XHRcdFx0XHRcdFx0XHRvYmplY3RGaXQ9J2NvdmVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSd0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTI1J1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYWJzb2x1dGUgYm90dG9tLTI4IGxnOmJvdHRvbS0zMiAtbGVmdC0xNiBsZzotbGVmdC0yMCB0ZXh0LXllbGxvdy02MDAgZm9udC1zZXJpZiB6LTEwIHVwcGVyY2FzZSBmb250LWV4dHJhYm9sZCB0ZXh0LTN4bCBsZzp0ZXh0LVs1MHB4XSB0cmFja2luZy13aWRlciBcclxuXHRcdFx0XHRcdFx0XHQgdHJhbnNmb3JtIHJvdGF0ZS1bMjcwZGVnXSAnXHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0UGjhu6Uga2nhu4duXHJcblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J3JlbGF0aXZlIGgtMS8zIHctZnVsbCBjdXJzb3ItcG9pbnRlcidcclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9jYXRlZ29yaWVzLzYxMzFlYjYzNzUwNTc3MDVmMDc3OTA3YicpfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdFx0XHRzcmM9Jy9pbWFnZXMvNC5wbmcnXHJcblx0XHRcdFx0XHRcdFx0YWx0PScxJ1xyXG5cdFx0XHRcdFx0XHRcdHdpZHRoPXsxMDAwfVxyXG5cdFx0XHRcdFx0XHRcdGhlaWdodD17KDEgLyAzKSAqIDEwMDB9XHJcblx0XHRcdFx0XHRcdFx0b2JqZWN0Rml0PSdjb3ZlcidcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3RyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMjUnXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nYWJzb2x1dGUgYm90dG9tLTIgbGc6Ym90dG9tLTEwIHJpZ2h0LTEwIHRleHQtcHVycGxlLTYwMCB6LTEwIHVwcGVyY2FzZSBmb250LWV4dHJhYm9sZCB0ZXh0LTN4bCBsZzp0ZXh0LVs1MHB4XSB0cmFja2luZy13aWRlcic+XHJcblx0XHRcdFx0XHRcdFx0VMO6aSB4w6FjaFxyXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeVNob3c7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cclxuaW1wb3J0IHsgTWVudUljb24sIFNlYXJjaEljb24sIFNob3BwaW5nQ2FydEljb24sIFZpZXdMaXN0SWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZSc7XHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnLi4vLi4vc3RvcmUvR2xvYmFsU3RhdGUnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgTWVudU1vZGFsIGZyb20gJy4vTWVudU1vZGFsJztcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcblx0Y29uc3QgeyBjYXJ0LCBhdXRoLCBjYXRlZ29yaWVzIH0gPSBzdGF0ZTtcclxuXHJcblx0Y29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG5cdFx0Q29va2llcy5yZW1vdmUoJ3JlZnJlc2h0b2tlbicsIHsgcGF0aDogJy9hcGkvYXV0aC9hY2Nlc3NUb2tlbicgfSk7XHJcblx0XHRDb29raWVzLnJlbW92ZSgndXNlckluZm9Jbml0Jyk7XHJcblxyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiAnQVVUSCcsIHBheWxvYWQ6IHt9IH0pO1xyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiAnQUREX09SREVSUycsIHBheWxvYWQ6IFtdIH0pO1xyXG5cclxuXHRcdHJvdXRlci5wdXNoKCcvJyk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVPcGVuTWVudSA9ICgpID0+IHtcclxuXHRcdGNvbnN0IG1lbnVNb2RhbEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVNb2RhbE1vYmlsZScpO1xyXG5cdFx0Y29uc3QgbWVudU1vZGFsQm9keUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVNb2RhbEJvZHknKTtcclxuXHJcblx0XHRtZW51TW9kYWxFbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuXHJcblx0XHRtZW51TW9kYWxCb2R5RWwuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1zbGlkZS01MDAnKTtcclxuXHRcdG1lbnVNb2RhbEJvZHlFbC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLXNsaWRlSW4tNTAwJyk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxoZWFkZXI+XHJcblx0XHRcdHsvKiBOYXYgVG9wICovfVxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGItMTIgc206cGItMCBmbGV4IGl0ZW1zLWNlbnRlciBiZy1hbWF6b25fYmx1ZSB0cmFucyBwLTEgcHgtMiBmbGV4LWdyb3cgcmVsYXRpdmUnPlxyXG5cdFx0XHRcdHsvKiBNb2JpbGUgbWVudSBkaXNwbGF5ICovfVxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlcicgb25DbGljaz17aGFuZGxlT3Blbk1lbnV9PlxyXG5cdFx0XHRcdFx0PFZpZXdMaXN0SWNvbiBjbGFzc05hbWU9J2gtOCB0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyIHNtOmhpZGRlbicgLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0ey8qIE1lbnUgTW9kYWwgKi99XHJcblxyXG5cdFx0XHRcdDxNZW51TW9kYWxcclxuXHRcdFx0XHRcdHVzZXI9e2F1dGgudXNlcn1cclxuXHRcdFx0XHRcdHJvdXRlcj17cm91dGVyfVxyXG5cdFx0XHRcdFx0Y2F0ZWdvcmllcz17Y2F0ZWdvcmllc31cclxuXHRcdFx0XHRcdGhhbmRsZUxvZ291dD17aGFuZGxlTG9nb3V0fVxyXG5cdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdHsvKiBCcmFuZCAqL31cclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnLycpfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdweS0yIGZsZXggaXRlbXMtY2VudGVyIG14LTIgbXItMyBjdXJzb3ItcG9pbnRlciBmbGV4LWdyb3cgc206ZmxleC1ncm93LTAnXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRcdHNyYz0nL2ltYWdlcy9sb2dvNC5wbmcnXHJcblx0XHRcdFx0XHRcdGFsdD0nTG9nbydcclxuXHRcdFx0XHRcdFx0d2lkdGg9ezE1MH1cclxuXHRcdFx0XHRcdFx0aGVpZ2h0PXs0MH1cclxuXHRcdFx0XHRcdFx0b2JqZWN0Rml0PSdjb250YWluJ1xyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2N1cnNvci1wb2ludGUgYmctYW1hem9uX2JsdWUnXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdHsvKiBTZWFyY2ggKi99XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIHRvcC1bNTglXSBsZWZ0LTMgcmlnaHQtMyBzbTpzdGF0aWMgZmxleCBpdGVtcy1jZW50ZXIgaC0xMCByb3VuZGVkLW1kIGZsZXgtZ3JvdyBiZy15ZWxsb3ctNDAwIGhvdmVyOmJnLXllbGxvdy01MDAgY3Vyc29yLXBvaW50ZXInPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ncC0yIGgtZnVsbCB3LWZ1bGwgZmxleC1ncm93IGZsZXgtc2hyaW5rIHJvdW5kZWQtbC1tZCBmb2N1czpvdXRsaW5lLW5vbmUnXHJcblx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdUw6xtIE1JTlQgTGFsYSdcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8U2VhcmNoSWNvbiBjbGFzc05hbWU9J2gtMTIgcC00IHRleHQtYmxhY2snIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0ey8qIFJpZ2h0ICovfVxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IHRleHQtZ3JheS0zMDAgdGV4dC14cyBtZDp0ZXh0LXNtIHNwYWNlLXgtNiBteC01IHdoaXRlc3BhY2Utbm93cmFwJz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBoaWRkZW4gc206ZmxleCBzcGFjZS14LTIgaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyIG1kOmhvdmVyOm91dGxpbmUtd2hpbGVfc29saWQgbWQ6cC0xIGdyb3VwJz5cclxuXHRcdFx0XHRcdFx0e2F1dGgudXNlciAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0c3JjPXthdXRoLnVzZXIuYXZhdGFyfVxyXG5cdFx0XHRcdFx0XHRcdFx0YWx0PXthdXRoLnVzZXIubmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodD0nMzAnXHJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aD0nMzAnXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3JvdW5kZWQtZnVsbCdcclxuXHRcdFx0XHRcdFx0XHQ+PC9pbWc+XHJcblx0XHRcdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYCR7IWF1dGgudXNlciA/ICcvc2lnbmluJyA6ICcvcHJvZmlsZSd9YCl9XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSd0ZXh0LXdoaXRlIGZvbnQtZXh0cmFib2xkJ1xyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdmb250LW5vcm1hbCc+SGVsbG8sPC9wPlxyXG5cdFx0XHRcdFx0XHRcdHthdXRoLnVzZXIgPyBhdXRoLnVzZXIubmFtZSA6ICdTaWduIGluJ31cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHR7LyogTW9kYWwgKi99XHJcblx0XHRcdFx0XHRcdHthdXRoLnVzZXIgJiYgYXV0aC51c2VyLnJvbGUgIT09ICdhZG1pbicgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naGlkZGVuIGZsZXgtY29sIGl0ZW1zLXN0YXJ0IHRleHQtZ3JheS02MDAgc3BhY2UteS00IHByLTUgcGItNSBwbC0xMCBhYnNvbHV0ZSB0b3AtWzEwNSVdIHJpZ2h0LTAgei1bNDhdXHJcblx0XHRcdFx0XHRcdCByb3VuZGVkLW1kIGJnLWdyYXktMTAwIHNoYWRvdy14bCBtZDpncm91cC1ob3ZlcjpmbGV4IGFuaW1hdGUtc2NhbGUtMXMgb3JpZ2luLXRvcC1yaWdodCdcclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2Fic29sdXRlIC10b3AtMSBoLTEgdy1mdWxsIG9wYWNpdHktMCc+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHBcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdob3Zlcjp0ZXh0LXllbGxvdy03MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0xMDAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTExMCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9wcm9maWxlJyl9XHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFTDoGkga2hv4bqjblxyXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHBcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdob3Zlcjp0ZXh0LXllbGxvdy03MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0xMDAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTExMCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9wcm9maWxlL29yZGVyLWhpc3RvcnknKX1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0xJDGoW4gaMOgbmdcclxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDxwXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYm9yZGVyLXQgYm9yZGVyLWdyYXktMzAwIHB0LTQgaG92ZXI6dGV4dC15ZWxsb3ctNzAwIHRyYW5zaXRpb24gZHVyYXRpb24tMTAwIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMTAnXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZUxvZ291dH1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0xJDEg25nIHh14bqldFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cclxuXHRcdFx0XHRcdFx0e2F1dGgudXNlciAmJiBhdXRoLnVzZXIucm9sZSA9PT0gJ2FkbWluJyAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdoaWRkZW4gZmxleC1jb2wgaXRlbXMtc3RhcnQgdGV4dC1ncmF5LTYwMCBzcGFjZS15LTQgcHItNSBwYi01IHBsLTEwIGFic29sdXRlIHRvcC1bMTA1JV0gcmlnaHQtMCB6LVs0OF1cclxuXHRcdFx0XHRcdFx0IHJvdW5kZWQtbWQgYmctZ3JheS0xMDAgc2hhZG93LXhsIG1kOmdyb3VwLWhvdmVyOmZsZXggYW5pbWF0ZS1zY2FsZS0xcyBvcmlnaW4tdG9wLXJpZ2h0J1xyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nYWJzb2x1dGUgLXRvcC0xIGgtMSB3LWZ1bGwgb3BhY2l0eS0wJz48L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2hvdmVyOnRleHQteWVsbG93LTcwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTEwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTEwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3Byb2ZpbGUnKX1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0VMOgaSBraG/huqNuXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2hvdmVyOnRleHQteWVsbG93LTcwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTEwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTEwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3Byb2ZpbGUvb3JkZXItaGlzdG9yeScpfVxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRRdeG6o24gbMO9IMSRxqFuIGjDoG5nXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2hvdmVyOnRleHQteWVsbG93LTcwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTEwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTEwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3Byb2R1Y3QnKX1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0U+G6o24gcGjhuqltXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2hvdmVyOnRleHQteWVsbG93LTcwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTEwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTEwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3VzZXJzJyl9XHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFVzZXJzXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2hvdmVyOnRleHQteWVsbG93LTcwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTEwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTEwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL2NhdGVnb3JpZXMnKX1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0RGFuaCBt4bulY1xyXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHBcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdib3JkZXItdCBib3JkZXItZ3JheS0zMDAgcHQtNCBob3Zlcjp0ZXh0LXllbGxvdy03MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0xMDAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTExMCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlTG9nb3V0fVxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHTEkMSDbmcgeHXhuqV0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naGlkZGVuIHNtOmZsZXggZmxleC1jb2wgbGluayBtZDpob3ZlcjpvdXRsaW5lLXdoaWxlX3NvbGlkIG1kOnAtMSdcclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYCR7IWF1dGgudXNlciA/ICcvc2lnbmluJyA6ICcvcHJvZmlsZS9vcmRlci1oaXN0b3J5J31gKX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PHA+xJDGoW4gaOG7p3k8L3A+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nIGZvbnQtZXh0cmFib2xkIHRleHQtd2hpdGUnPiYgxJDGoW4gaMOgbmc8L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvY2FydCcpfVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGxpbmsgcmVsYXRpdmUgbWQ6aG92ZXI6b3V0bGluZS13aGlsZV9zb2xpZCBtZDpwLTEnXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nbm8tdW5kZXJsaW5lIGgtNCB3LTQgc206aC01IHNtOnctNSBiZy15ZWxsb3ctNDAwIHRleHQtY2VudGVyIHJvdW5kZWQtZnVsbCB0ZXh0LWdyYXktODAwIGFic29sdXRlIGxlZnQtNCBzbTpsZWZ0LTYgdG9wLTAgZm9udC1leHRyYWJvbGQnPlxyXG5cdFx0XHRcdFx0XHRcdHtjYXJ0Lmxlbmd0aH1cclxuXHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8U2hvcHBpbmdDYXJ0SWNvbiBjbGFzc05hbWU9J2gtOCBzbTpoLTEwIHNtOm1yLTInIC8+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0naGlkZGVuIG1kOmlubGluZSBmb250LWV4dHJhYm9sZCB0ZXh0LXdoaXRlJz5HaeG7jyBow6BuZzwvcD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ey8qIE5hdiBCb3R0b20gKi99XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBiZy1hbWF6b25fYmx1ZSBzbTpiZy1hbWF6b25fYmx1ZS1saWdodCBwbC01IHAtMSB0ZXh0LWdyYXktMjAwIHNwYWNlLXgtMyB3aGl0ZXNwYWNlLW5vd3JhcCBvdmVyZmxvdy14LWF1dG8gc2Nyb2xsYmFyLWhpZGUnPlxyXG5cdFx0XHRcdDxwXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9J2ZsZXggbWQ6aG92ZXI6b3V0bGluZS13aGlsZV9zb2xpZCBwLTEgY3Vyc29yLXBvaW50ZXInXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL2NhdGVnb3JpZXMvYWxsJyl9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PE1lbnVJY29uIGNsYXNzTmFtZT0naGlkZGVuIHNtOmlubGluZSBoLTYgbXItMScgLz5cclxuXHRcdFx0XHRcdFThuqV0IGPhuqNcclxuXHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0PHAgY2xhc3NOYW1lPSdtZDpob3ZlcjpvdXRsaW5lLXdoaWxlX3NvbGlkIHAtMSBjdXJzb3ItcG9pbnRlcic+TuG7lWkgYuG6rXQgaMO0bSBuYXk8L3A+XHJcblx0XHRcdFx0PHBcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT0nbWQ6aG92ZXI6b3V0bGluZS13aGlsZV9zb2xpZCBwLTEgY3Vyc29yLXBvaW50ZXInXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL2NhdGVnb3JpZXMvNjEzMWViNDg3NTA1NzcwNWYwNzc5MDc5Jyl9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0Q2jDom4gdsOheVxyXG5cdFx0XHRcdDwvcD5cclxuXHRcdFx0XHQ8cFxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdtZDpob3ZlcjpvdXRsaW5lLXdoaWxlX3NvbGlkIHAtMSBjdXJzb3ItcG9pbnRlcidcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvY2F0ZWdvcmllcy82MTMxZjg0Yzc1MDU3NzA1ZjA3NzkwODEnKX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRQaOG7pSBraeG7h25cclxuXHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0PHAgY2xhc3NOYW1lPSdtZDpob3ZlcjpvdXRsaW5lLXdoaWxlX3NvbGlkIHAtMSBjdXJzb3ItcG9pbnRlcic+Vm91Y2hlcjwvcD5cclxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9J21kOmhvdmVyOm91dGxpbmUtd2hpbGVfc29saWQgcC0xIGN1cnNvci1wb2ludGVyJz5E4buLY2ggduG7pSBraMOhY2ggaMOgbmc8L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9oZWFkZXI+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi8uLi9zdG9yZS9HbG9iYWxTdGF0ZSc7XHJcbi8vIGltcG9ydCBMb2FkaW5nIGZyb20gJy4uL0xvYWRpbmcnO1xyXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi9Ub2FzdCc7XHJcblxyXG5mdW5jdGlvbiBOb3RpZnkoKSB7XHJcblx0Y29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xyXG5cdGNvbnN0IHsgbm90aWZ5IH0gPSBzdGF0ZTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0ey8qIHtub3RpZnkubG9hZGluZyAmJiA8TG9hZGluZyAvPn0gKi99XHJcblx0XHRcdHtub3RpZnkuZXJyb3IgJiYgKFxyXG5cdFx0XHRcdDxUb2FzdFxyXG5cdFx0XHRcdFx0bXNnPXt7IG1zZzogbm90aWZ5LmVycm9yLCB0aXRsZTogJ0Vycm9yJyB9fVxyXG5cdFx0XHRcdFx0aGFuZGxlU2hvdz17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge30gfSl9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0KX1cclxuXHRcdFx0e25vdGlmeS5zdWNjZXNzICYmIChcclxuXHRcdFx0XHQ8VG9hc3RcclxuXHRcdFx0XHRcdG1zZz17eyBtc2c6IG5vdGlmeS5zdWNjZXNzLCB0aXRsZTogJ1N1Y2Nlc3MnIH19XHJcblx0XHRcdFx0XHRoYW5kbGVTaG93PXsoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90aWZ5O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgKi9cbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy90YWlsd2luZC9IZWFkZXInO1xuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL3RhaWx3aW5kL0Jhbm5lcic7XG5pbXBvcnQgTm90aWZ5IGZyb20gJy4uL2NvbXBvbmVudHMvdGFpbHdpbmQvTm90aWZ5JztcbmltcG9ydCBDYXRlZ29yeVNob3cgZnJvbSAnLi4vY29tcG9uZW50cy90YWlsd2luZC9DYXRlZ29yeVNob3cnO1xuaW1wb3J0IENvbW1pdG1lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9Db21taXRtZW50JztcbmltcG9ydCBNZXNzYWdlU29jaWFsIGZyb20gJy4uL2NvbXBvbmVudHMvdGFpbHdpbmQvTWVzc2FnZVNvY2lhbCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblx0Y29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cdGNvbnN0IHBhZ2UgPSByb3V0ZXIucXVlcnkucGFnZSB8fCAxO1xuXHRjb25zdCBjYXRlZ29yeSA9IHJvdXRlci5xdWVyeS5jYXRlZ29yeSB8fCAnYWxsJztcblx0Y29uc3Qgc29ydCA9IHJvdXRlci5xdWVyeS5zb3J0IHx8ICcnO1xuXHRjb25zdCBzZWFyY2ggPSByb3V0ZXIucXVlcnkuc2VhcmNoIHx8ICdhbGwnO1xuXHRjb25zdCBsaW1pdCA9IHJvdXRlci5xdWVyeS5saW1pdCB8fCAyMDtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgYXhpb3Ncblx0XHRcdFx0XHQuZ2V0KFxuXHRcdFx0XHRcdFx0ZW5jb2RlVVJJKFxuXHRcdFx0XHRcdFx0XHRgL2FwaS9wcm9kdWN0P3BhZ2U9JHtwYWdlfSZjYXRlZ29yeT0ke2NhdGVnb3J5fSZzb3J0PSR7c29ydH0mdGl0bGU9JHtzZWFyY2h9JmxpbWl0PSR7bGltaXR9YFxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdClcblx0XHRcdFx0XHQudGhlbihyZXMgPT4ge1xuXHRcdFx0XHRcdFx0c2V0UHJvZHVjdHMocmVzLmRhdGEucHJvZHVjdHMuc3BsaWNlKDAsIDUpKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRnZXRQcm9kdWN0cygpO1xuXHR9LCBbXSk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdDx0aXRsZT5UcmFuZyBjaOG7pzwvdGl0bGU+XG5cdFx0XHQ8L0hlYWQ+XG5cdFx0XHQ8SGVhZGVyIC8+XG5cdFx0XHQ8Tm90aWZ5IC8+XG5cblx0XHRcdDxNZXNzYWdlU29jaWFsIC8+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPScnPlxuXHRcdFx0XHQ8QmFubmVyIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxtYWluIGNsYXNzTmFtZT0nbWF4LXctc2NyZWVuLTJ4bCBteC1hdXRvJz5cblx0XHRcdFx0PENvbW1pdG1lbnQgLz5cblxuXHRcdFx0XHQ8Q2F0ZWdvcnlTaG93IHByb2R1Y3RzPXtwcm9kdWN0c30gLz5cblx0XHRcdDwvbWFpbj5cblx0XHRcdDxGb290ZXIgLz5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJkeW5hbWljIiwiUHJvZHVjdEhvbWUiLCJzc3IiLCJJbWFnZSIsInVzZVJvdXRlciIsIkNhdGVnb3J5U2hvdyIsInByb2R1Y3RzIiwicm91dGVyIiwicHVzaCIsInNsaWNlIiwibWFwIiwicHJvZHVjdCIsIl9pZCIsIk1lbnVJY29uIiwiU2VhcmNoSWNvbiIsIlNob3BwaW5nQ2FydEljb24iLCJWaWV3TGlzdEljb24iLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJDb29raWVzIiwiTWVudU1vZGFsIiwiSGVhZGVyIiwic3RhdGUiLCJkaXNwYXRjaCIsImNhcnQiLCJhdXRoIiwiY2F0ZWdvcmllcyIsImhhbmRsZUxvZ291dCIsInJlbW92ZSIsInBhdGgiLCJ0eXBlIiwicGF5bG9hZCIsImhhbmRsZU9wZW5NZW51IiwibWVudU1vZGFsRWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibWVudU1vZGFsQm9keUVsIiwiY2xhc3NMaXN0IiwiYWRkIiwidXNlciIsImF2YXRhciIsIm5hbWUiLCJyb2xlIiwibGVuZ3RoIiwiUmVhY3QiLCJUb2FzdCIsIk5vdGlmeSIsIm5vdGlmeSIsImVycm9yIiwibXNnIiwidGl0bGUiLCJzdWNjZXNzIiwiSGVhZCIsIkZvb3RlciIsIkJhbm5lciIsIkNvbW1pdG1lbnQiLCJNZXNzYWdlU29jaWFsIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkhvbWUiLCJzZXRQcm9kdWN0cyIsInBhZ2UiLCJxdWVyeSIsImNhdGVnb3J5Iiwic29ydCIsInNlYXJjaCIsImxpbWl0IiwiZ2V0UHJvZHVjdHMiLCJnZXQiLCJlbmNvZGVVUkkiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInNwbGljZSIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==