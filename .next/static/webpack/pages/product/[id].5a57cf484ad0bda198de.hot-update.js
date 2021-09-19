"use strict";
self["webpackHotUpdate_N_E"]("pages/product/[id]",{

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
/* harmony import */ var _utils_filterSearch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/filterSearch */ "./utils/filterSearch.js");
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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      search = _useState[0],
      setSearch = _useState[1];

  if ( true && router.pathname === '/') {
    document.addEventListener('keyup', function (e) {
      if (e.code === 'Enter') {
        document.getElementById('searchBtn').click();
      }
    });
  }

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

  var handleChangeSearch = function handleChangeSearch(e) {
    setSearch(e.target.value);
  };

  var handleSearch = function handleSearch(e) {
    e.preventDefault();
    (0,_utils_filterSearch__WEBPACK_IMPORTED_MODULE_8__.default)({
      router: router,
      search: search.toLowerCase(),
      page: 1
    });
    setSearch('');
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
          lineNumber: 68,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuModal__WEBPACK_IMPORTED_MODULE_7__.default, {
        user: auth.user,
        router: router,
        categories: categories,
        handleLogout: handleLogout
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
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
          lineNumber: 85,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "absolute top-[58%] left-3 right-3 sm:static flex items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500 cursor-pointer",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          className: "p-2 h-full w-full flex-grow flex-shrink rounded-l-md focus:outline-none",
          type: "text",
          placeholder: "T\xECm MINT Lala",
          value: search,
          onChange: handleChangeSearch
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          onClick: handleSearch,
          id: "searchBtn",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.SearchIcon, {
            className: "h-12 p-4 text-black"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
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
            lineNumber: 111,
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
              lineNumber: 124,
              columnNumber: 8
            }, this), auth.user ? auth.user.name : 'Sign in']
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 7
          }, this), auth.user && auth.user.role !== 'admin' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "hidden flex-col items-start text-gray-600 space-y-4 pr-5 pb-5 pl-10 absolute top-[105%] right-0 z-[48]\r rounded-md bg-gray-100 shadow-xl md:group-hover:flex animate-scale-1s origin-top-right",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "absolute -top-1 h-1 w-full opacity-0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "hover:text-yellow-700 transition duration-100 transform hover:scale-110",
              onClick: function onClick() {
                return router.push('/profile');
              },
              children: "T\xE0i kho\u1EA3n"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "hover:text-yellow-700 transition duration-100 transform hover:scale-110",
              onClick: function onClick() {
                return router.push('/profile/order-history');
              },
              children: "\u0110\u01A1n h\xE0ng"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "border-t border-gray-300 pt-4 hover:text-yellow-700 transition duration-100 transform hover:scale-110",
              onClick: handleLogout,
              children: "\u0110\u0103ng xu\u1EA5t"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 8
          }, this), auth.user && auth.user.role === 'admin' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "hidden flex-col items-start text-gray-600 space-y-4 pr-5 pb-5 pl-10 absolute top-[105%] right-0 z-[48]\r rounded-md bg-gray-100 shadow-xl md:group-hover:flex animate-scale-1s origin-top-right",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "absolute -top-1 h-1 w-full opacity-0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "hover:text-yellow-700 transition duration-100 transform hover:scale-110",
              onClick: function onClick() {
                return router.push('/profile');
              },
              children: "T\xE0i kho\u1EA3n"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "hover:text-yellow-700 transition duration-100 transform hover:scale-110",
              onClick: function onClick() {
                return router.push('/profile/order-history');
              },
              children: "Qu\u1EA3n l\xFD \u0111\u01A1n h\xE0ng"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "hover:text-yellow-700 transition duration-100 transform hover:scale-110",
              onClick: function onClick() {
                return router.push('/product');
              },
              children: "S\u1EA3n ph\u1EA9m"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "hover:text-yellow-700 transition duration-100 transform hover:scale-110",
              onClick: function onClick() {
                return router.push('/users');
              },
              children: "Users"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "hover:text-yellow-700 transition duration-100 transform hover:scale-110",
              onClick: function onClick() {
                return router.push('/categories');
              },
              children: "Danh m\u1EE5c"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "border-t border-gray-300 pt-4 hover:text-yellow-700 transition duration-100 transform hover:scale-110",
              onClick: handleLogout,
              children: "\u0110\u0103ng xu\u1EA5t"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
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
            lineNumber: 206,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: " font-extrabold text-white",
            children: "& \u0110\u01A1n h\xE0ng"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 202,
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
            lineNumber: 214,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.ShoppingCartIcon, {
            className: "h-8 sm:h-10 sm:mr-2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "hidden md:inline font-extrabold text-white",
            children: "Gi\u1ECF h\xE0ng"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
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
          lineNumber: 228,
          columnNumber: 6
        }, this), "T\u1EA5t c\u1EA3"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "md:hover:outline-while_solid p-1 cursor-pointer",
        children: "N\u1ED5i b\u1EADt h\xF4m nay"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "md:hover:outline-while_solid p-1 cursor-pointer",
        onClick: function onClick() {
          return router.push('/categories/6131eb4875057705f0779079');
        },
        children: "Ch\xE2n v\xE1y"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "md:hover:outline-while_solid p-1 cursor-pointer",
        onClick: function onClick() {
          return router.push('/categories/6131f84c75057705f0779081');
        },
        children: "Ph\u1EE5 ki\u1EC7n"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "md:hover:outline-while_solid p-1 cursor-pointer",
        children: "Voucher"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "md:hover:outline-while_solid p-1 cursor-pointer",
        children: "D\u1ECBch v\u1EE5 kh\xE1ch h\xE0ng"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 3
  }, this);
}

_s(Header, "5Qj50QcVEINUNkt6YN+hqFKb1Vc=", false, function () {
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
                className: "text-red-500 font-semibold",
                children: "H\u1EBFt h\xE0ng"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 10
              }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "text-green-400 font-semibold",
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
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__.StarIcon, {
              className: "h-7 text-yellow-500"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__.StarIcon, {
              className: "h-7 text-yellow-500"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-gray-700 lg:text-xl line-clamp-2 lg:line-clamp-3",
            children: product.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-gray-700 text-xl mb-4 font-bold",
              children: "M\xE0u s\u1EAFc"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex space-x-3 items-center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "h-10 w-10 rounded-full cursor-pointer bg-gray-600 active:ring-2 ring-gray-600 active:ring-offset-4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "cursor-pointer rounded-full border-2 border-red-500 p-1",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "h-10 w-10 rounded-full bg-red-500 active:ring-2 ring-red-500 active:ring-offset-4"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "h-10 w-10 rounded-full cursor-pointer bg-blue-500 active:ring-2 ring-blue-500 active:ring-offset-4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "h-10 w-10 rounded-full cursor-pointer bg-green-500 active:ring-2 ring-green-500 active:ring-offset-4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "h-10 w-10 rounded-full cursor-pointer bg-yellow-500 active:ring-2 ring-yellow-500 active:ring-offset-4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "overflow-x-auto",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-gray-700 text-xl mb-4 font-bold",
              children: "M\xE0u s\u1EAFc"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
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
                  lineNumber: 186,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "w-14 h-10 rounded-md border-4 border-blue-400 flex items-center justify-center cursor-pointer",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "font-bold text-gray-400",
                  children: "S"
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
                  children: "M"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 192,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "w-14 h-10 rounded-md border-2 border-gray-300 flex items-center justify-center cursor-pointer",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "font-bold text-gray-400",
                  children: "L"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "w-14 h-10 rounded-md border-2 border-gray-300 flex items-center justify-center cursor-pointer",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "font-bold text-gray-400",
                  children: "XL"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 198,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex space-x-4 py-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "button-green p-4 text-gray-700 font-bold lg:text-xl",
              onClick: addItemToCart,
              children: "Th\xEAm v\xE0o gi\u1ECF h\xE0ng"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "button p-4 text-gray-700 font-bold lg:text-xl",
              onClick: handleCheckout,
              children: "Mua ngay"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 205,
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
            lineNumber: 223,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            dangerouslySetInnerHTML: {
              __html: product.content
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 222,
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
      lineNumber: 230,
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


/***/ }),

/***/ "./utils/filterSearch.js":
/*!*******************************!*\
  !*** ./utils/filterSearch.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* module decorator */ module = __webpack_require__.hmd(module);
var filterSearch = function filterSearch(_ref) {
  var router = _ref.router,
      page = _ref.page,
      category = _ref.category,
      sort = _ref.sort,
      search = _ref.search,
      limit = _ref.limit;
  var path = router.pathname;
  var query = router.query;
  if (path !== '/product' && path !== '/users') path = '/categories/all';
  if (category) query.category = category;
  if (page) query.page = page;
  if (search) query.search = search;
  if (sort) query.sort = sort;
  if (limit) query.limit = limit;
  router.push({
    pathname: path,
    query: query
  });
};

/* harmony default export */ __webpack_exports__["default"] = (filterSearch);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC9baWRdLjVhNTdjZjQ4NGFkMGJkYTE5OGRlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU1ksTUFBVCxHQUFrQjtBQUFBOztBQUNqQixNQUFNQyxNQUFNLEdBQUdULHNEQUFTLEVBQXhCOztBQURpQixvQkFFV0UsaURBQVUsQ0FBQ0UsMkRBQUQsQ0FGckI7QUFBQSxNQUVUTSxLQUZTLGVBRVRBLEtBRlM7QUFBQSxNQUVGQyxRQUZFLGVBRUZBLFFBRkU7O0FBQUEsTUFHVEMsSUFIUyxHQUdrQkYsS0FIbEIsQ0FHVEUsSUFIUztBQUFBLE1BR0hDLElBSEcsR0FHa0JILEtBSGxCLENBR0hHLElBSEc7QUFBQSxNQUdHQyxVQUhILEdBR2tCSixLQUhsQixDQUdHSSxVQUhIOztBQUFBLGtCQUtXWCwrQ0FBUSxDQUFDLEVBQUQsQ0FMbkI7QUFBQSxNQUtWWSxNQUxVO0FBQUEsTUFLRkMsU0FMRTs7QUFPakIsTUFBSSxTQUFtQlAsTUFBTSxDQUFDUSxRQUFQLEtBQW9CLEdBQTNDLEVBQWdEO0FBQy9DQyxJQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQUFDLENBQUMsRUFBSTtBQUN2QyxVQUFJQSxDQUFDLENBQUNDLElBQUYsS0FBVyxPQUFmLEVBQXdCO0FBQ3ZCSCxRQUFBQSxRQUFRLENBQUNJLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUNDLEtBQXJDO0FBQ0E7QUFDRCxLQUpEO0FBS0E7O0FBRUQsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUMxQm5CLElBQUFBLHFEQUFBLENBQWUsY0FBZixFQUErQjtBQUFFcUIsTUFBQUEsSUFBSSxFQUFFO0FBQVIsS0FBL0I7QUFDQXJCLElBQUFBLHFEQUFBLENBQWUsY0FBZjtBQUVBTSxJQUFBQSxRQUFRLENBQUM7QUFBRWdCLE1BQUFBLElBQUksRUFBRSxNQUFSO0FBQWdCQyxNQUFBQSxPQUFPLEVBQUU7QUFBekIsS0FBRCxDQUFSO0FBQ0FqQixJQUFBQSxRQUFRLENBQUM7QUFBRWdCLE1BQUFBLElBQUksRUFBRSxZQUFSO0FBQXNCQyxNQUFBQSxPQUFPLEVBQUU7QUFBL0IsS0FBRCxDQUFSO0FBRUFuQixJQUFBQSxNQUFNLENBQUNvQixJQUFQLENBQVksR0FBWjtBQUNBLEdBUkQ7O0FBU0EsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzVCLFFBQU1DLFdBQVcsR0FBR2IsUUFBUSxDQUFDSSxjQUFULENBQXdCLGlCQUF4QixDQUFwQjtBQUNBLFFBQU1VLGVBQWUsR0FBR2QsUUFBUSxDQUFDSSxjQUFULENBQXdCLGVBQXhCLENBQXhCO0FBRUFTLElBQUFBLFdBQVcsQ0FBQ0UsU0FBWixDQUFzQlIsTUFBdEIsQ0FBNkIsUUFBN0I7QUFFQU8sSUFBQUEsZUFBZSxDQUFDQyxTQUFoQixDQUEwQlIsTUFBMUIsQ0FBaUMsbUJBQWpDO0FBQ0FPLElBQUFBLGVBQWUsQ0FBQ0MsU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLHFCQUE5QjtBQUNBLEdBUkQ7O0FBVUEsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFBZixDQUFDLEVBQUk7QUFDL0JKLElBQUFBLFNBQVMsQ0FBQ0ksQ0FBQyxDQUFDZ0IsTUFBRixDQUFTQyxLQUFWLENBQVQ7QUFDQSxHQUZEOztBQUlBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFsQixDQUFDLEVBQUk7QUFDekJBLElBQUFBLENBQUMsQ0FBQ21CLGNBQUY7QUFDQWhDLElBQUFBLDREQUFZLENBQUM7QUFDWkUsTUFBQUEsTUFBTSxFQUFOQSxNQURZO0FBRVpNLE1BQUFBLE1BQU0sRUFBRUEsTUFBTSxDQUFDeUIsV0FBUCxFQUZJO0FBR1pDLE1BQUFBLElBQUksRUFBRTtBQUhNLEtBQUQsQ0FBWjtBQU1BekIsSUFBQUEsU0FBUyxDQUFDLEVBQUQsQ0FBVDtBQUNBLEdBVEQ7O0FBV0Esc0JBQ0M7QUFBQSw0QkFFQztBQUFLLGVBQVMsRUFBQyxrRkFBZjtBQUFBLDhCQUVDO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFtQyxlQUFPLEVBQUVjLGNBQTVDO0FBQUEsK0JBQ0MsOERBQUMsa0VBQUQ7QUFBYyxtQkFBUyxFQUFDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQsZUFRQyw4REFBQywrQ0FBRDtBQUNDLFlBQUksRUFBRWpCLElBQUksQ0FBQzZCLElBRFo7QUFFQyxjQUFNLEVBQUVqQyxNQUZUO0FBR0Msa0JBQVUsRUFBRUssVUFIYjtBQUlDLG9CQUFZLEVBQUVVO0FBSmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJELGVBZ0JDO0FBQ0MsZUFBTyxFQUFFO0FBQUEsaUJBQU1mLE1BQU0sQ0FBQ29CLElBQVAsQ0FBWSxHQUFaLENBQU47QUFBQSxTQURWO0FBRUMsaUJBQVMsRUFBQywwRUFGWDtBQUFBLCtCQUlDLDhEQUFDLG1EQUFEO0FBQ0MsYUFBRyxFQUFDLG1CQURMO0FBRUMsYUFBRyxFQUFDLE1BRkw7QUFHQyxlQUFLLEVBQUUsR0FIUjtBQUlDLGdCQUFNLEVBQUUsRUFKVDtBQUtDLG1CQUFTLEVBQUMsU0FMWDtBQU1DLG1CQUFTLEVBQUM7QUFOWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCRCxlQThCQztBQUFLLGlCQUFTLEVBQUMsMElBQWY7QUFBQSxnQ0FDQztBQUNDLG1CQUFTLEVBQUMseUVBRFg7QUFFQyxjQUFJLEVBQUMsTUFGTjtBQUdDLHFCQUFXLEVBQUMsa0JBSGI7QUFJQyxlQUFLLEVBQUVkLE1BSlI7QUFLQyxrQkFBUSxFQUFFb0I7QUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBUUM7QUFBSyxpQkFBTyxFQUFFRyxZQUFkO0FBQTRCLFlBQUUsRUFBQyxXQUEvQjtBQUFBLGlDQUNDLDhEQUFDLGdFQUFEO0FBQVkscUJBQVMsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5QkQsZUEyQ0M7QUFBSyxpQkFBUyxFQUFDLHdFQUFmO0FBQUEsZ0NBQ0M7QUFBSyxtQkFBUyxFQUFDLHlHQUFmO0FBQUEscUJBQ0V6QixJQUFJLENBQUM2QixJQUFMLGlCQUNBO0FBQ0MsZUFBRyxFQUFFN0IsSUFBSSxDQUFDNkIsSUFBTCxDQUFVQyxNQURoQjtBQUVDLGVBQUcsRUFBRTlCLElBQUksQ0FBQzZCLElBQUwsQ0FBVUUsSUFGaEI7QUFHQyxrQkFBTSxFQUFDLElBSFI7QUFJQyxpQkFBSyxFQUFDLElBSlA7QUFLQyxxQkFBUyxFQUFDO0FBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQVdDO0FBQ0MsbUJBQU8sRUFBRTtBQUFBLHFCQUFNbkMsTUFBTSxDQUFDb0IsSUFBUCxXQUFlLENBQUNoQixJQUFJLENBQUM2QixJQUFOLEdBQWEsU0FBYixHQUF5QixVQUF4QyxFQUFOO0FBQUEsYUFEVjtBQUVDLHFCQUFTLEVBQUMsMkJBRlg7QUFBQSxvQ0FJQztBQUFHLHVCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRCxFQUtFN0IsSUFBSSxDQUFDNkIsSUFBTCxHQUFZN0IsSUFBSSxDQUFDNkIsSUFBTCxDQUFVRSxJQUF0QixHQUE2QixTQUwvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWEQsRUFvQkUvQixJQUFJLENBQUM2QixJQUFMLElBQWE3QixJQUFJLENBQUM2QixJQUFMLENBQVVHLElBQVYsS0FBbUIsT0FBaEMsaUJBQ0E7QUFDQyxxQkFBUyxFQUFDLGlNQURYO0FBQUEsb0NBSUM7QUFBTSx1QkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkQsZUFLQztBQUNDLHVCQUFTLEVBQUMseUVBRFg7QUFFQyxxQkFBTyxFQUFFO0FBQUEsdUJBQU1wQyxNQUFNLENBQUNvQixJQUFQLENBQVksVUFBWixDQUFOO0FBQUEsZUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMRCxlQVdDO0FBQ0MsdUJBQVMsRUFBQyx5RUFEWDtBQUVDLHFCQUFPLEVBQUU7QUFBQSx1QkFBTXBCLE1BQU0sQ0FBQ29CLElBQVAsQ0FBWSx3QkFBWixDQUFOO0FBQUEsZUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFYRCxlQWlCQztBQUNDLHVCQUFTLEVBQUMsdUdBRFg7QUFFQyxxQkFBTyxFQUFFTCxZQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWpCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBckJGLEVBK0NFWCxJQUFJLENBQUM2QixJQUFMLElBQWE3QixJQUFJLENBQUM2QixJQUFMLENBQVVHLElBQVYsS0FBbUIsT0FBaEMsaUJBQ0E7QUFDQyxxQkFBUyxFQUFDLGlNQURYO0FBQUEsb0NBSUM7QUFBTSx1QkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkQsZUFLQztBQUNDLHVCQUFTLEVBQUMseUVBRFg7QUFFQyxxQkFBTyxFQUFFO0FBQUEsdUJBQU1wQyxNQUFNLENBQUNvQixJQUFQLENBQVksVUFBWixDQUFOO0FBQUEsZUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMRCxlQVdDO0FBQ0MsdUJBQVMsRUFBQyx5RUFEWDtBQUVDLHFCQUFPLEVBQUU7QUFBQSx1QkFBTXBCLE1BQU0sQ0FBQ29CLElBQVAsQ0FBWSx3QkFBWixDQUFOO0FBQUEsZUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFYRCxlQWlCQztBQUNDLHVCQUFTLEVBQUMseUVBRFg7QUFFQyxxQkFBTyxFQUFFO0FBQUEsdUJBQU1wQixNQUFNLENBQUNvQixJQUFQLENBQVksVUFBWixDQUFOO0FBQUEsZUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFqQkQsZUF1QkM7QUFDQyx1QkFBUyxFQUFDLHlFQURYO0FBRUMscUJBQU8sRUFBRTtBQUFBLHVCQUFNcEIsTUFBTSxDQUFDb0IsSUFBUCxDQUFZLFFBQVosQ0FBTjtBQUFBLGVBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBdkJELGVBNkJDO0FBQ0MsdUJBQVMsRUFBQyx5RUFEWDtBQUVDLHFCQUFPLEVBQUU7QUFBQSx1QkFBTXBCLE1BQU0sQ0FBQ29CLElBQVAsQ0FBWSxhQUFaLENBQU47QUFBQSxlQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQTdCRCxlQW1DQztBQUNDLHVCQUFTLEVBQUMsdUdBRFg7QUFFQyxxQkFBTyxFQUFFTCxZQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQW5DRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBaERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQThGQztBQUNDLG1CQUFTLEVBQUMsa0VBRFg7QUFFQyxpQkFBTyxFQUFFO0FBQUEsbUJBQU1mLE1BQU0sQ0FBQ29CLElBQVAsV0FBZSxDQUFDaEIsSUFBSSxDQUFDNkIsSUFBTixHQUFhLFNBQWIsR0FBeUIsd0JBQXhDLEVBQU47QUFBQSxXQUZWO0FBQUEsa0NBSUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkQsZUFLQztBQUFHLHFCQUFTLEVBQUMsNEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTlGRCxlQXNHQztBQUNDLGlCQUFPLEVBQUU7QUFBQSxtQkFBTWpDLE1BQU0sQ0FBQ29CLElBQVAsQ0FBWSxPQUFaLENBQU47QUFBQSxXQURWO0FBRUMsbUJBQVMsRUFBQyxxRUFGWDtBQUFBLGtDQUlDO0FBQU0scUJBQVMsRUFBQyx3SUFBaEI7QUFBQSxzQkFDRWpCLElBQUksQ0FBQ2tDO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRCxlQU9DLDhEQUFDLHNFQUFEO0FBQWtCLHFCQUFTLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRCxlQVFDO0FBQUcscUJBQVMsRUFBQyw0Q0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdEdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRCxlQWdLQztBQUFLLGVBQVMsRUFBQyw0SUFBZjtBQUFBLDhCQUNDO0FBQ0MsaUJBQVMsRUFBQyxzREFEWDtBQUVDLGVBQU8sRUFBRTtBQUFBLGlCQUFNckMsTUFBTSxDQUFDb0IsSUFBUCxDQUFZLGlCQUFaLENBQU47QUFBQSxTQUZWO0FBQUEsZ0NBSUMsOERBQUMsOERBQUQ7QUFBVSxtQkFBUyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFRQztBQUFHLGlCQUFTLEVBQUMsaURBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRCxlQVNDO0FBQ0MsaUJBQVMsRUFBQyxpREFEWDtBQUVDLGVBQU8sRUFBRTtBQUFBLGlCQUFNcEIsTUFBTSxDQUFDb0IsSUFBUCxDQUFZLHNDQUFaLENBQU47QUFBQSxTQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEQsZUFlQztBQUNDLGlCQUFTLEVBQUMsaURBRFg7QUFFQyxlQUFPLEVBQUU7QUFBQSxpQkFBTXBCLE1BQU0sQ0FBQ29CLElBQVAsQ0FBWSxzQ0FBWixDQUFOO0FBQUEsU0FGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZELGVBcUJDO0FBQUcsaUJBQVMsRUFBQyxpREFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJCRCxlQXNCQztBQUFHLGlCQUFTLEVBQUMsaURBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F0QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEtEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBMkxBOztHQTVPUXJCO1VBQ09SOzs7S0FEUFE7QUE4T1QsK0RBQWVBLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxUEE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNrRCxhQUFULEdBQXlCO0FBQUE7O0FBQUE7O0FBQ3hCLE1BQU1qRCxNQUFNLEdBQUdULHNEQUFTLEVBQXhCOztBQUR3QixrQkFHRkcsK0NBQVEsQ0FBQyxDQUFELENBSE47QUFBQSxNQUdqQndELEdBSGlCO0FBQUEsTUFHWkMsTUFIWTs7QUFBQSxtQkFJTXpELCtDQUFRLEVBSmQ7QUFBQSxNQUlqQjBELE9BSmlCO0FBQUEsTUFJUkMsVUFKUTs7QUFBQSxvQkFNSTVELGlEQUFVLENBQUNFLDJEQUFELENBTmQ7QUFBQSxNQU1oQk0sS0FOZ0IsZUFNaEJBLEtBTmdCO0FBQUEsTUFNVEMsUUFOUyxlQU1UQSxRQU5TOztBQUFBLE1BT2hCQyxJQVBnQixHQU9QRixLQVBPLENBT2hCRSxJQVBnQjtBQVN4Qm9DLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNmLFFBQUllLEVBQUUsR0FBR3RELE1BQU0sQ0FBQ3VELEtBQVAsQ0FBYUQsRUFBdEI7O0FBQ0EsUUFBSUEsRUFBSixFQUFRO0FBQ1AsVUFBTUUsZ0JBQWdCO0FBQUEsaVZBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQ2xCZCxnREFBQSx3QkFBMEIxQyxNQUFNLENBQUN1RCxLQUFQLENBQWFELEVBQXZDLEdBQTZDSSxJQUE3QyxDQUFrRCxVQUFBQyxHQUFHLEVBQUk7QUFDOUQsd0JBQUlBLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQyxHQUFiLEVBQWtCLE9BQU8zRCxRQUFRLENBQUM7QUFBRWdCLHNCQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkMsc0JBQUFBLE9BQU8sRUFBRTtBQUFFMkMsd0JBQUFBLEtBQUssRUFBRUgsR0FBRyxDQUFDQyxJQUFKLENBQVNDO0FBQWxCO0FBQTNCLHFCQUFELENBQWY7QUFDbEJSLG9CQUFBQSxVQUFVLENBQUNNLEdBQUcsQ0FBQ0MsSUFBSixDQUFTUixPQUFWLENBQVY7QUFDQSxtQkFISyxDQURrQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFIOztBQUFBLHdCQUFoQkksZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLFNBQXRCOztBQU1BQSxNQUFBQSxnQkFBZ0I7QUFDaEI7QUFDRCxHQVhRLEVBV04sQ0FBQ3hELE1BQU0sQ0FBQ3VELEtBQVAsQ0FBYUQsRUFBZCxDQVhNLENBQVQ7QUFhQSxNQUFJLENBQUNGLE9BQUwsRUFBYyxPQUFPLElBQVA7O0FBRWQsTUFBTVcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzNCLFFBQUlYLE9BQU8sQ0FBQ1ksT0FBUixJQUFtQixDQUF2QixFQUEwQjtBQUN6QjlELE1BQUFBLFFBQVEsQ0FBQztBQUFFZ0IsUUFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0JDLFFBQUFBLE9BQU8sRUFBRTtBQUFFMkMsVUFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBM0IsT0FBRCxDQUFSO0FBQ0EsS0FGRCxNQUVPO0FBQ041RCxNQUFBQSxRQUFRLENBQUN1Qyx5REFBUyxDQUFDVyxPQUFELEVBQVVqRCxJQUFWLENBQVYsQ0FBUjtBQUNBRCxNQUFBQSxRQUFRLENBQUM7QUFBRWdCLFFBQUFBLElBQUksRUFBRSxRQUFSO0FBQWtCQyxRQUFBQSxPQUFPLEVBQUU7QUFBRThDLFVBQUFBLE9BQU8sRUFBRTtBQUFYO0FBQTNCLE9BQUQsQ0FBUjtBQUNBO0FBQ0QsR0FQRDs7QUFRQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDNUIsUUFBSWQsT0FBTyxDQUFDWSxPQUFSLElBQW1CLENBQXZCLEVBQTBCO0FBQ3pCOUQsTUFBQUEsUUFBUSxDQUFDO0FBQUVnQixRQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkMsUUFBQUEsT0FBTyxFQUFFO0FBQUUyQyxVQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUEzQixPQUFELENBQVI7QUFDQSxLQUZELE1BRU87QUFDTjVELE1BQUFBLFFBQVEsQ0FBQ3VDLHlEQUFTLENBQUNXLE9BQUQsRUFBVWpELElBQVYsQ0FBVixDQUFSO0FBQ0FILE1BQUFBLE1BQU0sQ0FBQ29CLElBQVAsQ0FBWSxXQUFaO0FBQ0E7QUFDRCxHQVBEOztBQVNBLHNCQUNDO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQSw0QkFDQyw4REFBQyxrREFBRDtBQUFBLDZCQUNDO0FBQUEsbUJBQVFnQyxPQUFPLENBQUNlLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUtDLDhEQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRCxlQU9DO0FBQU0sZUFBUyxFQUFDLHVDQUFoQjtBQUFBLDZCQUNDO0FBQUssaUJBQVMsRUFBQyx1Q0FBZjtBQUFBLGdDQUVDO0FBQUssbUJBQVMsRUFBQyxRQUFmO0FBQUEsa0NBQ0M7QUFBSyxxQkFBUyxFQUFDLGdCQUFmO0FBQUEsb0NBQ0M7QUFBSyxpQkFBRyxFQUFFZixPQUFPLENBQUNnQixNQUFSLENBQWVsQixHQUFmLEVBQW9CbUIsR0FBOUI7QUFBbUMsaUJBQUcsRUFBQyxPQUF2QztBQUErQyx1QkFBUyxFQUFDO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREQsZUFHQztBQUNDLHFCQUFPLEVBQUU7QUFBQSx1QkFBTWxCLE1BQU0sQ0FBQ0QsR0FBRyxLQUFLLENBQVIsR0FBWUUsT0FBTyxDQUFDZ0IsTUFBUixDQUFlL0IsTUFBZixHQUF3QixDQUFwQyxHQUF3Q2EsR0FBRyxHQUFHLENBQS9DLENBQVo7QUFBQSxlQURWO0FBRUMsdUJBQVMsRUFBQyxpR0FGWDtBQUFBLHFDQUlDLDhEQUFDLHNFQUFEO0FBQWlCLHlCQUFTLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEQsZUFVQztBQUNDLHFCQUFPLEVBQUU7QUFBQSx1QkFBTUMsTUFBTSxDQUFDRCxHQUFHLEtBQUssQ0FBUixHQUFZRSxPQUFPLENBQUNnQixNQUFSLENBQWUvQixNQUFmLEdBQXdCLENBQXBDLEdBQXdDYSxHQUFHLEdBQUcsQ0FBL0MsQ0FBWjtBQUFBLGVBRFY7QUFFQyx1QkFBUyxFQUFDLGtHQUZYO0FBQUEscUNBSUMsOERBQUMsdUVBQUQ7QUFBa0IseUJBQVMsRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFWRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFtQkM7QUFBSyxxQkFBUyxFQUFDLHFDQUFmO0FBQUEsc0JBQ0VFLE9BQU8sQ0FBQ2dCLE1BQVIsQ0FBZUUsR0FBZixDQUFtQixVQUFDQyxLQUFELEVBQVFDLENBQVI7QUFBQSxrQ0FDbkI7QUFFQyx5QkFBUyxFQUFDLDRCQUZYO0FBR0MsdUJBQU8sRUFBRTtBQUFBLHlCQUFNckIsTUFBTSxDQUFDcUIsQ0FBRCxDQUFaO0FBQUEsaUJBSFY7QUFBQSx1Q0FLQztBQUNDLHFCQUFHLEVBQUVELEtBQUssQ0FBQ0YsR0FEWjtBQUVDLHFCQUFHLEVBQUMsT0FGTDtBQUdDLDJCQUFTLDJCQUNSRyxDQUFDLEtBQUt0QixHQUFOLEdBQVkseUJBQVosR0FBd0MsRUFEaEM7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEQsaUJBQ01zQixDQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRG1CO0FBQUEsYUFBbkI7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQW5CRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkQsZUF5Q0M7QUFBSyxtQkFBUyxFQUFDLDZDQUFmO0FBQUEsa0NBRUM7QUFBSyxxQkFBUyxFQUFDLG1DQUFmO0FBQUEsb0NBQ0M7QUFBRyx1QkFBUyxFQUFDLDBDQUFiO0FBQUEsd0JBQXlEcEIsT0FBTyxDQUFDZTtBQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURELGVBR0MsOERBQUMsZ0VBQUQ7QUFBVyx1QkFBUyxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZELGVBU0M7QUFBSyxxQkFBUyxFQUFDLHFCQUFmO0FBQUEsb0NBQ0M7QUFBSyx1QkFBUyxFQUFDLGlDQUFmO0FBQUEscUNBQ0MsOERBQUMsa0VBQUQ7QUFDQyx3QkFBUSxFQUFFZixPQUFPLENBQUNxQixTQURuQjtBQUVDLHdCQUFRLEVBQUMsS0FGVjtBQUdDLHVCQUFPLEVBQUMsVUFIVDtBQUlDLHFCQUFLLEVBQUM7QUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERCxlQVNDO0FBQUssdUJBQVMsRUFBQywwQkFBZjtBQUFBLHNDQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURELGVBRUM7QUFBSyx5QkFBUyxFQUFDLDRCQUFmO0FBQUEsdUNBQ0MsOERBQUMsa0VBQUQ7QUFDQywwQkFBUSxFQUFFckIsT0FBTyxDQUFDc0IsV0FEbkI7QUFFQywwQkFBUSxFQUFDLEtBRlY7QUFHQyx5QkFBTyxFQUFDLFVBSFQ7QUFJQyx1QkFBSyxFQUFDO0FBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFURCxlQWlDQztBQUFBLG1DQUNDO0FBQUEsd0JBQ0V0QixPQUFPLENBQUNZLE9BQVIsSUFBbUIsQ0FBbkIsZ0JBQ0E7QUFBRyx5QkFBUyxFQUFDLDRCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURBLGdCQUdBO0FBQUcseUJBQVMsRUFBQyw4QkFBYjtBQUFBLG9DQUNPWixPQUFPLENBQUNZLE9BRGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBakNELGVBOENDO0FBQUsscUJBQVMsRUFBQyxNQUFmO0FBQUEsb0NBQ0MsOERBQUMsNkRBQUQ7QUFBVSx1QkFBUyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREQsZUFFQyw4REFBQyw2REFBRDtBQUFVLHVCQUFTLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRCxlQUdDLDhEQUFDLDZEQUFEO0FBQVUsdUJBQVMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhELGVBSUMsOERBQUMsNkRBQUQ7QUFBVSx1QkFBUyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkQsZUFLQyw4REFBQyw2REFBRDtBQUFVLHVCQUFTLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBOUNELGVBdURDO0FBQUcscUJBQVMsRUFBQyx1REFBYjtBQUFBLHNCQUNFWixPQUFPLENBQUN1QjtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBdkRELGVBNERDO0FBQUEsb0NBQ0M7QUFBRyx1QkFBUyxFQUFDLHNDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURELGVBR0M7QUFBSyx1QkFBUyxFQUFDLDZCQUFmO0FBQUEsc0NBQ0M7QUFBTSx5QkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREQsZUFFQztBQUFLLHlCQUFTLEVBQUMseURBQWY7QUFBQSx1Q0FDQztBQUFLLDJCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRCxlQUtDO0FBQU0seUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxELGVBTUM7QUFBTSx5QkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTkQsZUFPQztBQUFNLHlCQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTVERCxlQTJFQztBQUFLLHFCQUFTLEVBQUMsaUJBQWY7QUFBQSxvQ0FDQztBQUFHLHVCQUFTLEVBQUMsc0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREQsZUFHQztBQUFLLHVCQUFTLEVBQUMsMEJBQWY7QUFBQSxzQ0FDQztBQUFLLHlCQUFTLEVBQUMsK0ZBQWY7QUFBQSx1Q0FDQztBQUFHLDJCQUFTLEVBQUMseUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURELGVBSUM7QUFBSyx5QkFBUyxFQUFDLCtGQUFmO0FBQUEsdUNBQ0M7QUFBRywyQkFBUyxFQUFDLHlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKRCxlQU9DO0FBQUsseUJBQVMsRUFBQywrRkFBZjtBQUFBLHVDQUNDO0FBQUcsMkJBQVMsRUFBQyx5QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUEQsZUFVQztBQUFLLHlCQUFTLEVBQUMsK0ZBQWY7QUFBQSx1Q0FDQztBQUFHLDJCQUFTLEVBQUMseUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVZELGVBYUM7QUFBSyx5QkFBUyxFQUFDLCtGQUFmO0FBQUEsdUNBQ0M7QUFBRywyQkFBUyxFQUFDLHlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFiRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTNFRCxlQW1HQztBQUFLLHFCQUFTLEVBQUMscUJBQWY7QUFBQSxvQ0FDQztBQUNDLHVCQUFTLEVBQUMscURBRFg7QUFFQyxxQkFBTyxFQUFFWixhQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURELGVBT0M7QUFDQyx1QkFBUyxFQUFDLCtDQURYO0FBRUMscUJBQU8sRUFBRUcsY0FGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbkdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF6Q0QsZUE2SkM7QUFBSyxtQkFBUyxFQUFDLDhCQUFmO0FBQUEsa0NBQ0M7QUFBRyxxQkFBUyxFQUFDLGtDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBR0M7QUFBRyxtQ0FBdUIsRUFBRTtBQUFFVSxjQUFBQSxNQUFNLEVBQUV4QixPQUFPLENBQUN5QjtBQUFsQjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE3SkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBELGVBNktDLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3S0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFpTEE7O0dBMU5RNUI7VUFDTzFEOzs7S0FEUDBEO0FBNE5ULCtEQUFlQSxhQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxT0EsSUFBTW5ELFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQXFEO0FBQUEsTUFBbERFLE1BQWtELFFBQWxEQSxNQUFrRDtBQUFBLE1BQTFDZ0MsSUFBMEMsUUFBMUNBLElBQTBDO0FBQUEsTUFBcEM4QyxRQUFvQyxRQUFwQ0EsUUFBb0M7QUFBQSxNQUExQkMsSUFBMEIsUUFBMUJBLElBQTBCO0FBQUEsTUFBcEJ6RSxNQUFvQixRQUFwQkEsTUFBb0I7QUFBQSxNQUFaMEUsS0FBWSxRQUFaQSxLQUFZO0FBQ3pFLE1BQUkvRCxJQUFJLEdBQUdqQixNQUFNLENBQUNRLFFBQWxCO0FBQ0EsTUFBTStDLEtBQUssR0FBR3ZELE1BQU0sQ0FBQ3VELEtBQXJCO0FBRUEsTUFBSXRDLElBQUksS0FBSyxVQUFULElBQXVCQSxJQUFJLEtBQUssUUFBcEMsRUFBOENBLElBQUksR0FBRyxpQkFBUDtBQUU5QyxNQUFJNkQsUUFBSixFQUFjdkIsS0FBSyxDQUFDdUIsUUFBTixHQUFpQkEsUUFBakI7QUFDZCxNQUFJOUMsSUFBSixFQUFVdUIsS0FBSyxDQUFDdkIsSUFBTixHQUFhQSxJQUFiO0FBQ1YsTUFBSTFCLE1BQUosRUFBWWlELEtBQUssQ0FBQ2pELE1BQU4sR0FBZUEsTUFBZjtBQUNaLE1BQUl5RSxJQUFKLEVBQVV4QixLQUFLLENBQUN3QixJQUFOLEdBQWFBLElBQWI7QUFDVixNQUFJQyxLQUFKLEVBQVd6QixLQUFLLENBQUN5QixLQUFOLEdBQWNBLEtBQWQ7QUFFWGhGLEVBQUFBLE1BQU0sQ0FBQ29CLElBQVAsQ0FBWTtBQUNYWixJQUFBQSxRQUFRLEVBQUVTLElBREM7QUFFWHNDLElBQUFBLEtBQUssRUFBRUE7QUFGSSxHQUFaO0FBSUEsQ0FoQkQ7O0FBa0JBLCtEQUFlekQsWUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RhaWx3aW5kL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9baWRdLmpzIiwid2VicGFjazovL19OX0UvLi91dGlscy9maWx0ZXJTZWFyY2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5leHQvbmV4dC9uby1pbWctZWxlbWVudCAqL1xyXG5pbXBvcnQgeyBNZW51SWNvbiwgU2VhcmNoSWNvbiwgU2hvcHBpbmdDYXJ0SWNvbiwgVmlld0xpc3RJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lJztcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnLi4vLi4vc3RvcmUvR2xvYmFsU3RhdGUnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgTWVudU1vZGFsIGZyb20gJy4vTWVudU1vZGFsJztcclxuaW1wb3J0IGZpbHRlclNlYXJjaCBmcm9tICcuLi8uLi91dGlscy9maWx0ZXJTZWFyY2gnO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuXHRjb25zdCB7IGNhcnQsIGF1dGgsIGNhdGVnb3JpZXMgfSA9IHN0YXRlO1xyXG5cclxuXHRjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuXHRpZiAocHJvY2Vzcy5icm93c2VyICYmIHJvdXRlci5wYXRobmFtZSA9PT0gJy8nKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4ge1xyXG5cdFx0XHRpZiAoZS5jb2RlID09PSAnRW50ZXInKSB7XHJcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEJ0bicpLmNsaWNrKCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG5cdFx0Q29va2llcy5yZW1vdmUoJ3JlZnJlc2h0b2tlbicsIHsgcGF0aDogJy9hcGkvYXV0aC9hY2Nlc3NUb2tlbicgfSk7XHJcblx0XHRDb29raWVzLnJlbW92ZSgndXNlckluZm9Jbml0Jyk7XHJcblxyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiAnQVVUSCcsIHBheWxvYWQ6IHt9IH0pO1xyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiAnQUREX09SREVSUycsIHBheWxvYWQ6IFtdIH0pO1xyXG5cclxuXHRcdHJvdXRlci5wdXNoKCcvJyk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVPcGVuTWVudSA9ICgpID0+IHtcclxuXHRcdGNvbnN0IG1lbnVNb2RhbEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVNb2RhbE1vYmlsZScpO1xyXG5cdFx0Y29uc3QgbWVudU1vZGFsQm9keUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVNb2RhbEJvZHknKTtcclxuXHJcblx0XHRtZW51TW9kYWxFbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuXHJcblx0XHRtZW51TW9kYWxCb2R5RWwuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1zbGlkZS01MDAnKTtcclxuXHRcdG1lbnVNb2RhbEJvZHlFbC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLXNsaWRlSW4tNTAwJyk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlU2VhcmNoID0gZSA9PiB7XHJcblx0XHRzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVNlYXJjaCA9IGUgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHtcclxuXHRcdFx0cm91dGVyLFxyXG5cdFx0XHRzZWFyY2g6IHNlYXJjaC50b0xvd2VyQ2FzZSgpLFxyXG5cdFx0XHRwYWdlOiAxLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0c2V0U2VhcmNoKCcnKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGhlYWRlcj5cclxuXHRcdFx0ey8qIE5hdiBUb3AgKi99XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYi0xMiBzbTpwYi0wIGZsZXggaXRlbXMtY2VudGVyIGJnLWFtYXpvbl9ibHVlIHRyYW5zIHAtMSBweC0yIGZsZXgtZ3JvdyByZWxhdGl2ZSc+XHJcblx0XHRcdFx0ey8qIE1vYmlsZSBtZW51IGRpc3BsYXkgKi99XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyJyBvbkNsaWNrPXtoYW5kbGVPcGVuTWVudX0+XHJcblx0XHRcdFx0XHQ8Vmlld0xpc3RJY29uIGNsYXNzTmFtZT0naC04IHRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXIgc206aGlkZGVuJyAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHR7LyogTWVudSBNb2RhbCAqL31cclxuXHJcblx0XHRcdFx0PE1lbnVNb2RhbFxyXG5cdFx0XHRcdFx0dXNlcj17YXV0aC51c2VyfVxyXG5cdFx0XHRcdFx0cm91dGVyPXtyb3V0ZXJ9XHJcblx0XHRcdFx0XHRjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfVxyXG5cdFx0XHRcdFx0aGFuZGxlTG9nb3V0PXtoYW5kbGVMb2dvdXR9XHJcblx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0ey8qIEJyYW5kICovfVxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvJyl9XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9J3B5LTIgZmxleCBpdGVtcy1jZW50ZXIgbXgtMiBtci0zIGN1cnNvci1wb2ludGVyIGZsZXgtZ3JvdyBzbTpmbGV4LWdyb3ctMCdcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdFx0c3JjPScvaW1hZ2VzL2xvZ280LnBuZydcclxuXHRcdFx0XHRcdFx0YWx0PSdMb2dvJ1xyXG5cdFx0XHRcdFx0XHR3aWR0aD17MTUwfVxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ9ezQwfVxyXG5cdFx0XHRcdFx0XHRvYmplY3RGaXQ9J2NvbnRhaW4nXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZSBiZy1hbWF6b25fYmx1ZSdcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0ey8qIFNlYXJjaCAqL31cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgdG9wLVs1OCVdIGxlZnQtMyByaWdodC0zIHNtOnN0YXRpYyBmbGV4IGl0ZW1zLWNlbnRlciBoLTEwIHJvdW5kZWQtbWQgZmxleC1ncm93IGJnLXllbGxvdy00MDAgaG92ZXI6YmcteWVsbG93LTUwMCBjdXJzb3ItcG9pbnRlcic+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdwLTIgaC1mdWxsIHctZnVsbCBmbGV4LWdyb3cgZmxleC1zaHJpbmsgcm91bmRlZC1sLW1kIGZvY3VzOm91dGxpbmUtbm9uZSdcclxuXHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J1TDrG0gTUlOVCBMYWxhJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17c2VhcmNofVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlU2VhcmNofVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxkaXYgb25DbGljaz17aGFuZGxlU2VhcmNofSBpZD0nc2VhcmNoQnRuJz5cclxuXHRcdFx0XHRcdFx0PFNlYXJjaEljb24gY2xhc3NOYW1lPSdoLTEyIHAtNCB0ZXh0LWJsYWNrJyAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0ey8qIFJpZ2h0ICovfVxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IHRleHQtZ3JheS0zMDAgdGV4dC14cyBtZDp0ZXh0LXNtIHNwYWNlLXgtNiBteC01IHdoaXRlc3BhY2Utbm93cmFwJz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBoaWRkZW4gc206ZmxleCBzcGFjZS14LTIgaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyIG1kOmhvdmVyOm91dGxpbmUtd2hpbGVfc29saWQgbWQ6cC0xIGdyb3VwJz5cclxuXHRcdFx0XHRcdFx0e2F1dGgudXNlciAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0c3JjPXthdXRoLnVzZXIuYXZhdGFyfVxyXG5cdFx0XHRcdFx0XHRcdFx0YWx0PXthdXRoLnVzZXIubmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodD0nMzAnXHJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aD0nMzAnXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3JvdW5kZWQtZnVsbCdcclxuXHRcdFx0XHRcdFx0XHQ+PC9pbWc+XHJcblx0XHRcdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYCR7IWF1dGgudXNlciA/ICcvc2lnbmluJyA6ICcvcHJvZmlsZSd9YCl9XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSd0ZXh0LXdoaXRlIGZvbnQtZXh0cmFib2xkJ1xyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdmb250LW5vcm1hbCc+SGVsbG8sPC9wPlxyXG5cdFx0XHRcdFx0XHRcdHthdXRoLnVzZXIgPyBhdXRoLnVzZXIubmFtZSA6ICdTaWduIGluJ31cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHR7LyogTW9kYWwgKi99XHJcblx0XHRcdFx0XHRcdHthdXRoLnVzZXIgJiYgYXV0aC51c2VyLnJvbGUgIT09ICdhZG1pbicgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naGlkZGVuIGZsZXgtY29sIGl0ZW1zLXN0YXJ0IHRleHQtZ3JheS02MDAgc3BhY2UteS00IHByLTUgcGItNSBwbC0xMCBhYnNvbHV0ZSB0b3AtWzEwNSVdIHJpZ2h0LTAgei1bNDhdXHJcblx0XHRcdFx0XHRcdCByb3VuZGVkLW1kIGJnLWdyYXktMTAwIHNoYWRvdy14bCBtZDpncm91cC1ob3ZlcjpmbGV4IGFuaW1hdGUtc2NhbGUtMXMgb3JpZ2luLXRvcC1yaWdodCdcclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2Fic29sdXRlIC10b3AtMSBoLTEgdy1mdWxsIG9wYWNpdHktMCc+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHBcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdob3Zlcjp0ZXh0LXllbGxvdy03MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0xMDAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTExMCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9wcm9maWxlJyl9XHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFTDoGkga2hv4bqjblxyXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHBcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdob3Zlcjp0ZXh0LXllbGxvdy03MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0xMDAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTExMCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9wcm9maWxlL29yZGVyLWhpc3RvcnknKX1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0xJDGoW4gaMOgbmdcclxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDxwXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYm9yZGVyLXQgYm9yZGVyLWdyYXktMzAwIHB0LTQgaG92ZXI6dGV4dC15ZWxsb3ctNzAwIHRyYW5zaXRpb24gZHVyYXRpb24tMTAwIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMTAnXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZUxvZ291dH1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0xJDEg25nIHh14bqldFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cclxuXHRcdFx0XHRcdFx0e2F1dGgudXNlciAmJiBhdXRoLnVzZXIucm9sZSA9PT0gJ2FkbWluJyAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdoaWRkZW4gZmxleC1jb2wgaXRlbXMtc3RhcnQgdGV4dC1ncmF5LTYwMCBzcGFjZS15LTQgcHItNSBwYi01IHBsLTEwIGFic29sdXRlIHRvcC1bMTA1JV0gcmlnaHQtMCB6LVs0OF1cclxuXHRcdFx0XHRcdFx0IHJvdW5kZWQtbWQgYmctZ3JheS0xMDAgc2hhZG93LXhsIG1kOmdyb3VwLWhvdmVyOmZsZXggYW5pbWF0ZS1zY2FsZS0xcyBvcmlnaW4tdG9wLXJpZ2h0J1xyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nYWJzb2x1dGUgLXRvcC0xIGgtMSB3LWZ1bGwgb3BhY2l0eS0wJz48L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2hvdmVyOnRleHQteWVsbG93LTcwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTEwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTEwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3Byb2ZpbGUnKX1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0VMOgaSBraG/huqNuXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2hvdmVyOnRleHQteWVsbG93LTcwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTEwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTEwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3Byb2ZpbGUvb3JkZXItaGlzdG9yeScpfVxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRRdeG6o24gbMO9IMSRxqFuIGjDoG5nXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2hvdmVyOnRleHQteWVsbG93LTcwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTEwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTEwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3Byb2R1Y3QnKX1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0U+G6o24gcGjhuqltXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2hvdmVyOnRleHQteWVsbG93LTcwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTEwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTEwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3VzZXJzJyl9XHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFVzZXJzXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2hvdmVyOnRleHQteWVsbG93LTcwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTEwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTEwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL2NhdGVnb3JpZXMnKX1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0RGFuaCBt4bulY1xyXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHBcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdib3JkZXItdCBib3JkZXItZ3JheS0zMDAgcHQtNCBob3Zlcjp0ZXh0LXllbGxvdy03MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0xMDAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTExMCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlTG9nb3V0fVxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHTEkMSDbmcgeHXhuqV0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naGlkZGVuIHNtOmZsZXggZmxleC1jb2wgbGluayBtZDpob3ZlcjpvdXRsaW5lLXdoaWxlX3NvbGlkIG1kOnAtMSdcclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYCR7IWF1dGgudXNlciA/ICcvc2lnbmluJyA6ICcvcHJvZmlsZS9vcmRlci1oaXN0b3J5J31gKX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PHA+xJDGoW4gaOG7p3k8L3A+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nIGZvbnQtZXh0cmFib2xkIHRleHQtd2hpdGUnPiYgxJDGoW4gaMOgbmc8L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvY2FydCcpfVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGxpbmsgcmVsYXRpdmUgbWQ6aG92ZXI6b3V0bGluZS13aGlsZV9zb2xpZCBtZDpwLTEnXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nbm8tdW5kZXJsaW5lIGgtNCB3LTQgc206aC01IHNtOnctNSBiZy15ZWxsb3ctNDAwIHRleHQtY2VudGVyIHJvdW5kZWQtZnVsbCB0ZXh0LWdyYXktODAwIGFic29sdXRlIGxlZnQtNCBzbTpsZWZ0LTYgdG9wLTAgZm9udC1leHRyYWJvbGQnPlxyXG5cdFx0XHRcdFx0XHRcdHtjYXJ0Lmxlbmd0aH1cclxuXHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8U2hvcHBpbmdDYXJ0SWNvbiBjbGFzc05hbWU9J2gtOCBzbTpoLTEwIHNtOm1yLTInIC8+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0naGlkZGVuIG1kOmlubGluZSBmb250LWV4dHJhYm9sZCB0ZXh0LXdoaXRlJz5HaeG7jyBow6BuZzwvcD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ey8qIE5hdiBCb3R0b20gKi99XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBiZy1hbWF6b25fYmx1ZSBzbTpiZy1hbWF6b25fYmx1ZS1saWdodCBwbC01IHAtMSB0ZXh0LWdyYXktMjAwIHNwYWNlLXgtMyB3aGl0ZXNwYWNlLW5vd3JhcCBvdmVyZmxvdy14LWF1dG8gc2Nyb2xsYmFyLWhpZGUnPlxyXG5cdFx0XHRcdDxwXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9J2ZsZXggbWQ6aG92ZXI6b3V0bGluZS13aGlsZV9zb2xpZCBwLTEgY3Vyc29yLXBvaW50ZXInXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL2NhdGVnb3JpZXMvYWxsJyl9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PE1lbnVJY29uIGNsYXNzTmFtZT0naGlkZGVuIHNtOmlubGluZSBoLTYgbXItMScgLz5cclxuXHRcdFx0XHRcdFThuqV0IGPhuqNcclxuXHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0PHAgY2xhc3NOYW1lPSdtZDpob3ZlcjpvdXRsaW5lLXdoaWxlX3NvbGlkIHAtMSBjdXJzb3ItcG9pbnRlcic+TuG7lWkgYuG6rXQgaMO0bSBuYXk8L3A+XHJcblx0XHRcdFx0PHBcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT0nbWQ6aG92ZXI6b3V0bGluZS13aGlsZV9zb2xpZCBwLTEgY3Vyc29yLXBvaW50ZXInXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL2NhdGVnb3JpZXMvNjEzMWViNDg3NTA1NzcwNWYwNzc5MDc5Jyl9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0Q2jDom4gdsOheVxyXG5cdFx0XHRcdDwvcD5cclxuXHRcdFx0XHQ8cFxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdtZDpob3ZlcjpvdXRsaW5lLXdoaWxlX3NvbGlkIHAtMSBjdXJzb3ItcG9pbnRlcidcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvY2F0ZWdvcmllcy82MTMxZjg0Yzc1MDU3NzA1ZjA3NzkwODEnKX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRQaOG7pSBraeG7h25cclxuXHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0PHAgY2xhc3NOYW1lPSdtZDpob3ZlcjpvdXRsaW5lLXdoaWxlX3NvbGlkIHAtMSBjdXJzb3ItcG9pbnRlcic+Vm91Y2hlcjwvcD5cclxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9J21kOmhvdmVyOm91dGxpbmUtd2hpbGVfc29saWQgcC0xIGN1cnNvci1wb2ludGVyJz5E4buLY2ggduG7pSBraMOhY2ggaMOgbmc8L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9oZWFkZXI+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgQG5leHQvbmV4dC9uby1pbWctZWxlbWVudCAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi8uLi9zdG9yZS9HbG9iYWxTdGF0ZSc7XHJcbmltcG9ydCB7IGFkZFRvQ2FydCB9IGZyb20gJy4uLy4uL3N0b3JlL0FjdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90YWlsd2luZC9IZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyJztcclxuaW1wb3J0IHsgQ2hldnJvbkxlZnRJY29uLCBDaGV2cm9uUmlnaHRJY29uLCBIZWFydEljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L291dGxpbmUnO1xyXG5pbXBvcnQgeyBTdGFySWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnO1xyXG5pbXBvcnQgQ3VycmVuY3kgZnJvbSAncmVhY3QtY3VycmVuY3ktZm9ybWF0dGVyJztcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3REZXRhaWwoKSB7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdGNvbnN0IFt0YWIsIHNldFRhYl0gPSB1c2VTdGF0ZSgwKTtcclxuXHRjb25zdCBbcHJvZHVjdCwgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuXHRjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcblx0Y29uc3QgeyBjYXJ0IH0gPSBzdGF0ZTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxldCBpZCA9IHJvdXRlci5xdWVyeS5pZDtcclxuXHRcdGlmIChpZCkge1xyXG5cdFx0XHRjb25zdCBnZXRQcm9kdWN0RGV0YWlsID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRcdGF3YWl0IGF4aW9zLmdldChgL2FwaS9wcm9kdWN0LyR7cm91dGVyLnF1ZXJ5LmlkfWApLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5lcnIpIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGVycm9yOiByZXMuZGF0YS5lcnIgfSB9KTtcclxuXHRcdFx0XHRcdHNldFByb2R1Y3QocmVzLmRhdGEucHJvZHVjdCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH07XHJcblx0XHRcdGdldFByb2R1Y3REZXRhaWwoKTtcclxuXHRcdH1cclxuXHR9LCBbcm91dGVyLnF1ZXJ5LmlkXSk7XHJcblxyXG5cdGlmICghcHJvZHVjdCkgcmV0dXJuIG51bGw7XHJcblxyXG5cdGNvbnN0IGFkZEl0ZW1Ub0NhcnQgPSAoKSA9PiB7XHJcblx0XHRpZiAocHJvZHVjdC5pblN0b2NrIDw9IDApIHtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBlcnJvcjogJ1hpbiBs4buXaSBz4bqjbiBwaOG6qW0gdOG6oW0gaOG6v3QgaMOgbmchJyB9IH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZGlzcGF0Y2goYWRkVG9DYXJ0KHByb2R1Y3QsIGNhcnQpKTtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBzdWNjZXNzOiAnVGjDqm0gdsOgbyBnaeG7jyB0aMOgbmggY8O0bmchJyB9IH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlQ2hlY2tvdXQgPSAoKSA9PiB7XHJcblx0XHRpZiAocHJvZHVjdC5pblN0b2NrIDw9IDApIHtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBlcnJvcjogJ1hpbiBs4buXaSBz4bqjbiBwaOG6qW0gdOG6oW0gaOG6v3QgaMOgbmchJyB9IH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZGlzcGF0Y2goYWRkVG9DYXJ0KHByb2R1Y3QsIGNhcnQpKTtcclxuXHRcdFx0cm91dGVyLnB1c2goJy9jaGVja291dCcpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nYmctZ3JheS0xMDAnPlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+e3Byb2R1Y3QudGl0bGV9IC0gTUlOVCBMYWxhPC90aXRsZT5cclxuXHRcdFx0PC9IZWFkPlxyXG5cclxuXHRcdFx0PEhlYWRlciAvPlxyXG5cclxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPSdtYXgtdy1zY3JlZW4tMnhsIG14LWF1dG8gbWluLWgtc2NyZWVuJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBsZzpncmlkLWNvbHMtMiBteS00IHAtNSBiZy13aGl0ZSc+XHJcblx0XHRcdFx0XHR7LyogaW1hZ2UgKi99XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbGc6cC01Jz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIGdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17cHJvZHVjdC5pbWFnZXNbdGFiXS51cmx9IGFsdD0naW1hZ2UnIGNsYXNzTmFtZT0ndy1mdWxsJyAvPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRUYWIodGFiID09PSAwID8gcHJvZHVjdC5pbWFnZXMubGVuZ3RoIC0gMSA6IHRhYiAtIDEpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSd3LTEwIGgtMjAgYmctcmdiYSBhYnNvbHV0ZSBsZWZ0LTIgdG9wLVs0NSVdIGdyb3VwLWhvdmVyOmZsZXggaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyIGhpZGRlbidcclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Q2hldnJvbkxlZnRJY29uIGNsYXNzTmFtZT0naC0xMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCcgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0VGFiKHRhYiA9PT0gMCA/IHByb2R1Y3QuaW1hZ2VzLmxlbmd0aCAtIDEgOiB0YWIgLSAxKX1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ndy0xMCBoLTIwIGJnLXJnYmEgYWJzb2x1dGUgcmlnaHQtMiB0b3AtWzQ1JV0gZ3JvdXAtaG92ZXI6ZmxleCBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgaGlkZGVuJ1xyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdDxDaGV2cm9uUmlnaHRJY29uIGNsYXNzTmFtZT0naC0xMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCcgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBzcGFjZS14LTIgbXQtMiBvdmVyZmxvdy1oaWRkZW4nPlxyXG5cdFx0XHRcdFx0XHRcdHtwcm9kdWN0LmltYWdlcy5tYXAoKGltYWdlLCBpKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17aX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdoLTEvNSB3LTEvNSBjdXJzb3ItcG9pbnRlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0VGFiKGkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtpbWFnZS51cmx9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PSdpbWFnZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BvYmplY3QtY29udGFpbiAke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aSA9PT0gdGFiID8gJ2JvcmRlci00IGJvcmRlci1yZWQtNDAwJyA6ICcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fWB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHR7LyogZGV0YWlsICovfVxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xnOnAtNSBteS00IGxnOm15LTAgZmxleCBmbGV4LWNvbCBzcGFjZS15LTQnPlxyXG5cdFx0XHRcdFx0XHR7LyogdGl0bGUgKi99XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXInPlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC14bCBsZzp0ZXh0LTJ4bCBmb250LWJvbGQgY2FwaXRhbGl6ZSc+e3Byb2R1Y3QudGl0bGV9PC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8SGVhcnRJY29uIGNsYXNzTmFtZT0naC0xMCBjdXJzb3ItcG9pbnRlciBhY3RpdmU6dGV4dC1yZWQtNTAwIGhvdmVyOnRleHQtcmVkLTUwMCcgLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHR7LyogcHJpY2UgKi99XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IHNwYWNlLXgtNCBteS00Jz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGV4dC1yZWQtNjAwIGZvbnQtYm9sZCB0ZXh0LTN4bCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Q3VycmVuY3lcclxuXHRcdFx0XHRcdFx0XHRcdFx0cXVhbnRpdHk9e3Byb2R1Y3QucHJpY2VTYWxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW5jeT0nVk5EJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwYXR0ZXJuPScjIywjIyMgISdcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z3JvdXA9Jy4nXHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IHNwYWNlLXgtMiBpdGVtcy1lbmQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHA+R2nDoSBn4buRYzogPC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQtZ3JheS02MDAgbGluZS10aHJvdWdoJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEN1cnJlbmN5XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cXVhbnRpdHk9e3Byb2R1Y3QucHJpY2VPcmlnaW59XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVuY3k9J1ZORCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYXR0ZXJuPScjIywjIyMgISdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRncm91cD0nLidcclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdHsvKiBLaG8gKi99XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHR7cHJvZHVjdC5pblN0b2NrIDw9IDAgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1yZWQtNTAwIGZvbnQtc2VtaWJvbGQnPkjhur90IGjDoG5nPC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LWdyZWVuLTQwMCBmb250LXNlbWlib2xkJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRLaG86IHtwcm9kdWN0LmluU3RvY2t9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0ey8qIHJhdGluZyAqL31cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxyXG5cdFx0XHRcdFx0XHRcdDxTdGFySWNvbiBjbGFzc05hbWU9J2gtNyB0ZXh0LXllbGxvdy01MDAnIC8+XHJcblx0XHRcdFx0XHRcdFx0PFN0YXJJY29uIGNsYXNzTmFtZT0naC03IHRleHQteWVsbG93LTUwMCcgLz5cclxuXHRcdFx0XHRcdFx0XHQ8U3Rhckljb24gY2xhc3NOYW1lPSdoLTcgdGV4dC15ZWxsb3ctNTAwJyAvPlxyXG5cdFx0XHRcdFx0XHRcdDxTdGFySWNvbiBjbGFzc05hbWU9J2gtNyB0ZXh0LXllbGxvdy01MDAnIC8+XHJcblx0XHRcdFx0XHRcdFx0PFN0YXJJY29uIGNsYXNzTmFtZT0naC03IHRleHQteWVsbG93LTUwMCcgLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHR7LyogZGVzY3JpcHRpb24gICovfVxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtZ3JheS03MDAgbGc6dGV4dC14bCBsaW5lLWNsYW1wLTIgbGc6bGluZS1jbGFtcC0zJz5cclxuXHRcdFx0XHRcdFx0XHR7cHJvZHVjdC5kZXNjcmlwdGlvbn1cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0ey8qIENvbG9ycyAqL31cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtZ3JheS03MDAgdGV4dC14bCBtYi00IGZvbnQtYm9sZCc+TcOgdSBz4bqvYzwvcD5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggc3BhY2UteC0zIGl0ZW1zLWNlbnRlcic+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2gtMTAgdy0xMCByb3VuZGVkLWZ1bGwgY3Vyc29yLXBvaW50ZXIgYmctZ3JheS02MDAgYWN0aXZlOnJpbmctMiByaW5nLWdyYXktNjAwIGFjdGl2ZTpyaW5nLW9mZnNldC00Jz48L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1mdWxsIGJvcmRlci0yIGJvcmRlci1yZWQtNTAwIHAtMSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdoLTEwIHctMTAgcm91bmRlZC1mdWxsIGJnLXJlZC01MDAgYWN0aXZlOnJpbmctMiByaW5nLXJlZC01MDAgYWN0aXZlOnJpbmctb2Zmc2V0LTQnPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2gtMTAgdy0xMCByb3VuZGVkLWZ1bGwgY3Vyc29yLXBvaW50ZXIgYmctYmx1ZS01MDAgYWN0aXZlOnJpbmctMiByaW5nLWJsdWUtNTAwIGFjdGl2ZTpyaW5nLW9mZnNldC00Jz48L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2gtMTAgdy0xMCByb3VuZGVkLWZ1bGwgY3Vyc29yLXBvaW50ZXIgYmctZ3JlZW4tNTAwIGFjdGl2ZTpyaW5nLTIgcmluZy1ncmVlbi01MDAgYWN0aXZlOnJpbmctb2Zmc2V0LTQnPjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0naC0xMCB3LTEwIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlciBiZy15ZWxsb3ctNTAwIGFjdGl2ZTpyaW5nLTIgcmluZy15ZWxsb3ctNTAwIGFjdGl2ZTpyaW5nLW9mZnNldC00Jz48L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0ey8qIFNpemUgKi99XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdvdmVyZmxvdy14LWF1dG8nPlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTcwMCB0ZXh0LXhsIG1iLTQgZm9udC1ib2xkJz5Nw6B1IHPhuq9jPC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXdyYXAgc3BhY2UteC0yJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTE0IGgtMTAgcm91bmRlZC1tZCBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgY3Vyc29yLXBvaW50ZXInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2ZvbnQtYm9sZCB0ZXh0LWdyYXktNDAwJz5YUzwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctMTQgaC0xMCByb3VuZGVkLW1kIGJvcmRlci00IGJvcmRlci1ibHVlLTQwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBjdXJzb3ItcG9pbnRlcic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtZ3JheS00MDAnPlM8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTE0IGgtMTAgcm91bmRlZC1tZCBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgY3Vyc29yLXBvaW50ZXInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2ZvbnQtYm9sZCB0ZXh0LWdyYXktNDAwJz5NPC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy0xNCBoLTEwIHJvdW5kZWQtbWQgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGN1cnNvci1wb2ludGVyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC1ncmF5LTQwMCc+TDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctMTQgaC0xMCByb3VuZGVkLW1kIGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBjdXJzb3ItcG9pbnRlcic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtZ3JheS00MDAnPlhMPC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0ey8qIGJ1dHRvbiAqL31cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IHNwYWNlLXgtNCBweS00Jz5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2J1dHRvbi1ncmVlbiBwLTQgdGV4dC1ncmF5LTcwMCBmb250LWJvbGQgbGc6dGV4dC14bCdcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2FkZEl0ZW1Ub0NhcnR9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0VGjDqm0gdsOgbyBnaeG7jyBow6BuZ1xyXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYnV0dG9uIHAtNCB0ZXh0LWdyYXktNzAwIGZvbnQtYm9sZCBsZzp0ZXh0LXhsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlQ2hlY2tvdXR9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0TXVhIG5nYXlcclxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHR7LyogY29udGVudCAqL31cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsZzpjb2wtc3Bhbi0yIGxnOm15LTggbGc6cC01Jz5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC14bCB1cHBlcmNhc2UgbWItNCc+TcO0IHThuqMgY2hpIHRp4bq/dDwvcD5cclxuXHJcblx0XHRcdFx0XHRcdDxwIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcHJvZHVjdC5jb250ZW50IH19PjwvcD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L21haW4+XHJcblxyXG5cdFx0XHQ8Rm9vdGVyIC8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlsO1xyXG4iLCJjb25zdCBmaWx0ZXJTZWFyY2ggPSAoeyByb3V0ZXIsIHBhZ2UsIGNhdGVnb3J5LCBzb3J0LCBzZWFyY2gsIGxpbWl0IH0pID0+IHtcclxuXHRsZXQgcGF0aCA9IHJvdXRlci5wYXRobmFtZTtcclxuXHRjb25zdCBxdWVyeSA9IHJvdXRlci5xdWVyeTtcclxuXHJcblx0aWYgKHBhdGggIT09ICcvcHJvZHVjdCcgJiYgcGF0aCAhPT0gJy91c2VycycpIHBhdGggPSAnL2NhdGVnb3JpZXMvYWxsJztcclxuXHRcclxuXHRpZiAoY2F0ZWdvcnkpIHF1ZXJ5LmNhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcblx0aWYgKHBhZ2UpIHF1ZXJ5LnBhZ2UgPSBwYWdlO1xyXG5cdGlmIChzZWFyY2gpIHF1ZXJ5LnNlYXJjaCA9IHNlYXJjaDtcclxuXHRpZiAoc29ydCkgcXVlcnkuc29ydCA9IHNvcnQ7XHJcblx0aWYgKGxpbWl0KSBxdWVyeS5saW1pdCA9IGxpbWl0O1xyXG5cclxuXHRyb3V0ZXIucHVzaCh7XHJcblx0XHRwYXRobmFtZTogcGF0aCxcclxuXHRcdHF1ZXJ5OiBxdWVyeSxcclxuXHR9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpbHRlclNlYXJjaDtcclxuIl0sIm5hbWVzIjpbIk1lbnVJY29uIiwiU2VhcmNoSWNvbiIsIlNob3BwaW5nQ2FydEljb24iLCJWaWV3TGlzdEljb24iLCJ1c2VSb3V0ZXIiLCJJbWFnZSIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkRhdGFDb250ZXh0IiwiQ29va2llcyIsIk1lbnVNb2RhbCIsImZpbHRlclNlYXJjaCIsIkhlYWRlciIsInJvdXRlciIsInN0YXRlIiwiZGlzcGF0Y2giLCJjYXJ0IiwiYXV0aCIsImNhdGVnb3JpZXMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJwYXRobmFtZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb2RlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGljayIsImhhbmRsZUxvZ291dCIsInJlbW92ZSIsInBhdGgiLCJ0eXBlIiwicGF5bG9hZCIsInB1c2giLCJoYW5kbGVPcGVuTWVudSIsIm1lbnVNb2RhbEVsIiwibWVudU1vZGFsQm9keUVsIiwiY2xhc3NMaXN0IiwiYWRkIiwiaGFuZGxlQ2hhbmdlU2VhcmNoIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTZWFyY2giLCJwcmV2ZW50RGVmYXVsdCIsInRvTG93ZXJDYXNlIiwicGFnZSIsInVzZXIiLCJhdmF0YXIiLCJuYW1lIiwicm9sZSIsImxlbmd0aCIsIlJlYWN0IiwidXNlRWZmZWN0IiwiSGVhZCIsImFkZFRvQ2FydCIsImF4aW9zIiwiRm9vdGVyIiwiQ2hldnJvbkxlZnRJY29uIiwiQ2hldnJvblJpZ2h0SWNvbiIsIkhlYXJ0SWNvbiIsIlN0YXJJY29uIiwiQ3VycmVuY3kiLCJQcm9kdWN0RGV0YWlsIiwidGFiIiwic2V0VGFiIiwicHJvZHVjdCIsInNldFByb2R1Y3QiLCJpZCIsInF1ZXJ5IiwiZ2V0UHJvZHVjdERldGFpbCIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZXJyIiwiZXJyb3IiLCJhZGRJdGVtVG9DYXJ0IiwiaW5TdG9jayIsInN1Y2Nlc3MiLCJoYW5kbGVDaGVja291dCIsInRpdGxlIiwiaW1hZ2VzIiwidXJsIiwibWFwIiwiaW1hZ2UiLCJpIiwicHJpY2VTYWxlIiwicHJpY2VPcmlnaW4iLCJkZXNjcmlwdGlvbiIsIl9faHRtbCIsImNvbnRlbnQiLCJjYXRlZ29yeSIsInNvcnQiLCJsaW1pdCJdLCJzb3VyY2VSb290IjoiIn0=