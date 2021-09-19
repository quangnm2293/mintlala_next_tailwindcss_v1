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
                  objectFit: "contain",
                  className: "".concat(i === tab ? 'border-4 border-red-400' : '')
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
              lineNumber: 108,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.HeartIcon, {
              className: "h-10 cursor-pointer active:text-red-500 hover:text-red-500"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
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
                lineNumber: 116,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex space-x-2 items-end",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: "Gi\xE1 g\u1ED1c: "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
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
                  lineNumber: 126,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__.StarIcon, {
              className: "h-7 text-yellow-500"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__.StarIcon, {
              className: "h-7 text-yellow-500"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__.StarIcon, {
              className: "h-7 text-yellow-500"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__.StarIcon, {
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
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-gray-700 lg:text-xl line-clamp-2 lg:line-clamp-3",
            children: product.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-gray-700 text-xl mb-4 font-bold",
              children: "M\xE0u s\u1EAFc"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex space-x-3 items-center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "h-10 w-10 rounded-full cursor-pointer bg-gray-600 active:ring-2 ring-gray-600 active:ring-offset-4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "cursor-pointer rounded-full border-2 border-red-500 p-1",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "h-10 w-10 rounded-full bg-red-500 active:ring-2 ring-red-500 active:ring-offset-4"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "h-10 w-10 rounded-full cursor-pointer bg-blue-500 active:ring-2 ring-blue-500 active:ring-offset-4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "h-10 w-10 rounded-full cursor-pointer bg-green-500 active:ring-2 ring-green-500 active:ring-offset-4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "h-10 w-10 rounded-full cursor-pointer bg-yellow-500 active:ring-2 ring-yellow-500 active:ring-offset-4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "overflow-x-auto",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-gray-700 text-xl mb-4 font-bold",
              children: "M\xE0u s\u1EAFc"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
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
                  lineNumber: 171,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "w-14 h-10 rounded-md border-4 border-blue-400 flex items-center justify-center cursor-pointer",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "font-bold text-gray-400",
                  children: "S"
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
                className: "w-14 h-10 rounded-md border-2 border-gray-300 flex items-center justify-center cursor-pointer",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "font-bold text-gray-400",
                  children: "M"
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
                  children: "L"
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
                  children: "XL"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 183,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
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
            className: "flex space-x-4 py-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "button-green p-4 text-gray-700 font-bold lg:text-xl",
              onClick: addItemToCart,
              children: "Th\xEAm v\xE0o gi\u1ECF h\xE0ng"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "button p-4 text-gray-700 font-bold lg:text-xl",
              onClick: handleCheckout,
              children: "Mua ngay"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "lg:col-span-2 lg:my-8 lg:p-5",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "font-bold text-xl uppercase mb-4",
            children: "M\xF4 t\u1EA3 chi ti\u1EBFt"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            dangerouslySetInnerHTML: {
              __html: product.content
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 207,
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
      lineNumber: 215,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC9baWRdLmRmMmZkNTM2M2Q3YzlkMmVlNTI2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU1UsTUFBVCxHQUFrQjtBQUFBOztBQUNqQixNQUFNQyxNQUFNLEdBQUdQLHNEQUFTLEVBQXhCOztBQURpQixvQkFFV0UsaURBQVUsQ0FBQ0MsMkRBQUQsQ0FGckI7QUFBQSxNQUVUSyxLQUZTLGVBRVRBLEtBRlM7QUFBQSxNQUVGQyxRQUZFLGVBRUZBLFFBRkU7O0FBQUEsTUFHVEMsSUFIUyxHQUdrQkYsS0FIbEIsQ0FHVEUsSUFIUztBQUFBLE1BR0hDLElBSEcsR0FHa0JILEtBSGxCLENBR0hHLElBSEc7QUFBQSxNQUdHQyxVQUhILEdBR2tCSixLQUhsQixDQUdHSSxVQUhIOztBQUtqQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQzFCVCxJQUFBQSxxREFBQSxDQUFlLGNBQWYsRUFBK0I7QUFBRVcsTUFBQUEsSUFBSSxFQUFFO0FBQVIsS0FBL0I7QUFDQVgsSUFBQUEscURBQUEsQ0FBZSxjQUFmO0FBRUFLLElBQUFBLFFBQVEsQ0FBQztBQUFFTyxNQUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQkMsTUFBQUEsT0FBTyxFQUFFO0FBQXpCLEtBQUQsQ0FBUjtBQUNBUixJQUFBQSxRQUFRLENBQUM7QUFBRU8sTUFBQUEsSUFBSSxFQUFFLFlBQVI7QUFBc0JDLE1BQUFBLE9BQU8sRUFBRTtBQUEvQixLQUFELENBQVI7QUFFQVYsSUFBQUEsTUFBTSxDQUFDVyxJQUFQLENBQVksR0FBWjtBQUNBLEdBUkQ7O0FBU0EsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzVCLFFBQU1DLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixDQUFwQjtBQUNBLFFBQU1DLGVBQWUsR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLENBQXhCO0FBRUFGLElBQUFBLFdBQVcsQ0FBQ0ksU0FBWixDQUFzQlYsTUFBdEIsQ0FBNkIsUUFBN0I7QUFFQVMsSUFBQUEsZUFBZSxDQUFDQyxTQUFoQixDQUEwQlYsTUFBMUIsQ0FBaUMsbUJBQWpDO0FBQ0FTLElBQUFBLGVBQWUsQ0FBQ0MsU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLHFCQUE5QjtBQUNBLEdBUkQ7O0FBVUEsc0JBQ0M7QUFBQSw0QkFFQztBQUFLLGVBQVMsRUFBQyxrRkFBZjtBQUFBLDhCQUVDO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFtQyxlQUFPLEVBQUVOLGNBQTVDO0FBQUEsK0JBQ0MsOERBQUMsa0VBQUQ7QUFBYyxtQkFBUyxFQUFDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQsZUFRQyw4REFBQywrQ0FBRDtBQUNDLFlBQUksRUFBRVIsSUFBSSxDQUFDZSxJQURaO0FBRUMsY0FBTSxFQUFFbkIsTUFGVDtBQUdDLGtCQUFVLEVBQUVLLFVBSGI7QUFJQyxvQkFBWSxFQUFFQztBQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRCxlQWdCQztBQUNDLGVBQU8sRUFBRTtBQUFBLGlCQUFNTixNQUFNLENBQUNXLElBQVAsQ0FBWSxHQUFaLENBQU47QUFBQSxTQURWO0FBRUMsaUJBQVMsRUFBQywwRUFGWDtBQUFBLCtCQUlDLDhEQUFDLG1EQUFEO0FBQ0MsYUFBRyxFQUFDLG1CQURMO0FBRUMsYUFBRyxFQUFDLE1BRkw7QUFHQyxlQUFLLEVBQUUsR0FIUjtBQUlDLGdCQUFNLEVBQUUsRUFKVDtBQUtDLG1CQUFTLEVBQUMsU0FMWDtBQU1DLG1CQUFTLEVBQUM7QUFOWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCRCxlQThCQztBQUFLLGlCQUFTLEVBQUMsMElBQWY7QUFBQSxnQ0FDQztBQUNDLG1CQUFTLEVBQUMseUVBRFg7QUFFQyxjQUFJLEVBQUMsTUFGTjtBQUdDLHFCQUFXLEVBQUM7QUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBTUMsOERBQUMsZ0VBQUQ7QUFBWSxtQkFBUyxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBOUJELGVBdUNDO0FBQUssaUJBQVMsRUFBQyx3RUFBZjtBQUFBLGdDQUNDO0FBQUssbUJBQVMsRUFBQyx5R0FBZjtBQUFBLHFCQUNFUCxJQUFJLENBQUNlLElBQUwsaUJBQ0E7QUFDQyxlQUFHLEVBQUVmLElBQUksQ0FBQ2UsSUFBTCxDQUFVQyxNQURoQjtBQUVDLGVBQUcsRUFBRWhCLElBQUksQ0FBQ2UsSUFBTCxDQUFVRSxJQUZoQjtBQUdDLGtCQUFNLEVBQUMsSUFIUjtBQUlDLGlCQUFLLEVBQUMsSUFKUDtBQUtDLHFCQUFTLEVBQUM7QUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLGVBV0M7QUFDQyxtQkFBTyxFQUFFO0FBQUEscUJBQU1yQixNQUFNLENBQUNXLElBQVAsV0FBZSxDQUFDUCxJQUFJLENBQUNlLElBQU4sR0FBYSxTQUFiLEdBQXlCLFVBQXhDLEVBQU47QUFBQSxhQURWO0FBRUMscUJBQVMsRUFBQywyQkFGWDtBQUFBLG9DQUlDO0FBQUcsdUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpELEVBS0VmLElBQUksQ0FBQ2UsSUFBTCxHQUFZZixJQUFJLENBQUNlLElBQUwsQ0FBVUUsSUFBdEIsR0FBNkIsU0FML0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVhELEVBb0JFakIsSUFBSSxDQUFDZSxJQUFMLElBQWFmLElBQUksQ0FBQ2UsSUFBTCxDQUFVRyxJQUFWLEtBQW1CLE9BQWhDLGlCQUNBO0FBQ0MscUJBQVMsRUFBQyxpTUFEWDtBQUFBLG9DQUlDO0FBQU0sdUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpELGVBS0M7QUFDQyx1QkFBUyxFQUFDLHlFQURYO0FBRUMscUJBQU8sRUFBRTtBQUFBLHVCQUFNdEIsTUFBTSxDQUFDVyxJQUFQLENBQVksVUFBWixDQUFOO0FBQUEsZUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMRCxlQVdDO0FBQ0MsdUJBQVMsRUFBQyx5RUFEWDtBQUVDLHFCQUFPLEVBQUU7QUFBQSx1QkFBTVgsTUFBTSxDQUFDVyxJQUFQLENBQVksd0JBQVosQ0FBTjtBQUFBLGVBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBWEQsZUFpQkM7QUFDQyx1QkFBUyxFQUFDLHVHQURYO0FBRUMscUJBQU8sRUFBRUwsWUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFqQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXJCRixFQStDRUYsSUFBSSxDQUFDZSxJQUFMLElBQWFmLElBQUksQ0FBQ2UsSUFBTCxDQUFVRyxJQUFWLEtBQW1CLE9BQWhDLGlCQUNBO0FBQ0MscUJBQVMsRUFBQyxpTUFEWDtBQUFBLG9DQUlDO0FBQU0sdUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpELGVBS0M7QUFDQyx1QkFBUyxFQUFDLHlFQURYO0FBRUMscUJBQU8sRUFBRTtBQUFBLHVCQUFNdEIsTUFBTSxDQUFDVyxJQUFQLENBQVksVUFBWixDQUFOO0FBQUEsZUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMRCxlQVdDO0FBQ0MsdUJBQVMsRUFBQyx5RUFEWDtBQUVDLHFCQUFPLEVBQUU7QUFBQSx1QkFBTVgsTUFBTSxDQUFDVyxJQUFQLENBQVksd0JBQVosQ0FBTjtBQUFBLGVBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBWEQsZUFpQkM7QUFDQyx1QkFBUyxFQUFDLHlFQURYO0FBRUMscUJBQU8sRUFBRTtBQUFBLHVCQUFNWCxNQUFNLENBQUNXLElBQVAsQ0FBWSxVQUFaLENBQU47QUFBQSxlQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWpCRCxlQXVCQztBQUNDLHVCQUFTLEVBQUMseUVBRFg7QUFFQyxxQkFBTyxFQUFFO0FBQUEsdUJBQU1YLE1BQU0sQ0FBQ1csSUFBUCxDQUFZLFFBQVosQ0FBTjtBQUFBLGVBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBdkJELGVBNkJDO0FBQ0MsdUJBQVMsRUFBQyx5RUFEWDtBQUVDLHFCQUFPLEVBQUU7QUFBQSx1QkFBTVgsTUFBTSxDQUFDVyxJQUFQLENBQVksYUFBWixDQUFOO0FBQUEsZUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkE3QkQsZUFtQ0M7QUFDQyx1QkFBUyxFQUFDLHVHQURYO0FBRUMscUJBQU8sRUFBRUwsWUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFuQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWhERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUE4RkM7QUFDQyxtQkFBUyxFQUFDLGtFQURYO0FBRUMsaUJBQU8sRUFBRTtBQUFBLG1CQUFNTixNQUFNLENBQUNXLElBQVAsV0FBZSxDQUFDUCxJQUFJLENBQUNlLElBQU4sR0FBYSxTQUFiLEdBQXlCLHdCQUF4QyxFQUFOO0FBQUEsV0FGVjtBQUFBLGtDQUlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpELGVBS0M7QUFBRyxxQkFBUyxFQUFDLDRCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE5RkQsZUFzR0M7QUFDQyxpQkFBTyxFQUFFO0FBQUEsbUJBQU1uQixNQUFNLENBQUNXLElBQVAsQ0FBWSxPQUFaLENBQU47QUFBQSxXQURWO0FBRUMsbUJBQVMsRUFBQyxxRUFGWDtBQUFBLGtDQUlDO0FBQU0scUJBQVMsRUFBQyx3SUFBaEI7QUFBQSxzQkFDRVIsSUFBSSxDQUFDb0I7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpELGVBT0MsOERBQUMsc0VBQUQ7QUFBa0IscUJBQVMsRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBELGVBUUM7QUFBRyxxQkFBUyxFQUFDLDRDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF0R0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZELGVBNEpDO0FBQUssZUFBUyxFQUFDLDRJQUFmO0FBQUEsOEJBQ0M7QUFDQyxpQkFBUyxFQUFDLHNEQURYO0FBRUMsZUFBTyxFQUFFO0FBQUEsaUJBQU12QixNQUFNLENBQUNXLElBQVAsQ0FBWSxpQkFBWixDQUFOO0FBQUEsU0FGVjtBQUFBLGdDQUlDLDhEQUFDLDhEQUFEO0FBQVUsbUJBQVMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBUUM7QUFBRyxpQkFBUyxFQUFDLGlEQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkQsZUFTQztBQUNDLGlCQUFTLEVBQUMsaURBRFg7QUFFQyxlQUFPLEVBQUU7QUFBQSxpQkFBTVgsTUFBTSxDQUFDVyxJQUFQLENBQVksc0NBQVosQ0FBTjtBQUFBLFNBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURCxlQWVDO0FBQ0MsaUJBQVMsRUFBQyxpREFEWDtBQUVDLGVBQU8sRUFBRTtBQUFBLGlCQUFNWCxNQUFNLENBQUNXLElBQVAsQ0FBWSxzQ0FBWixDQUFOO0FBQUEsU0FGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZELGVBcUJDO0FBQUcsaUJBQVMsRUFBQyxpREFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJCRCxlQXNCQztBQUFHLGlCQUFTLEVBQUMsaURBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F0QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBdUxBOztHQS9NUVo7VUFDT047OztLQURQTTtBQWlOVCwrREFBZUEsTUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVOQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU3FDLGFBQVQsR0FBeUI7QUFBQTs7QUFBQTs7QUFDeEIsTUFBTXBDLE1BQU0sR0FBR1Asc0RBQVMsRUFBeEI7O0FBRHdCLGtCQUdGaUMsK0NBQVEsQ0FBQyxDQUFELENBSE47QUFBQSxNQUdqQlcsR0FIaUI7QUFBQSxNQUdaQyxNQUhZOztBQUFBLG1CQUlNWiwrQ0FBUSxFQUpkO0FBQUEsTUFJakJhLE9BSmlCO0FBQUEsTUFJUkMsVUFKUTs7QUFBQSxvQkFNSTdDLGlEQUFVLENBQUNDLDJEQUFELENBTmQ7QUFBQSxNQU1oQkssS0FOZ0IsZUFNaEJBLEtBTmdCO0FBQUEsTUFNVEMsUUFOUyxlQU1UQSxRQU5TOztBQUFBLE1BT2hCQyxJQVBnQixHQU9QRixLQVBPLENBT2hCRSxJQVBnQjtBQVN4QnNCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNmLFFBQUlnQixFQUFFLEdBQUd6QyxNQUFNLENBQUMwQyxLQUFQLENBQWFELEVBQXRCOztBQUNBLFFBQUlBLEVBQUosRUFBUTtBQUNQLFVBQU1FLGdCQUFnQjtBQUFBLGlWQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUNsQmQsZ0RBQUEsd0JBQTBCN0IsTUFBTSxDQUFDMEMsS0FBUCxDQUFhRCxFQUF2QyxHQUE2Q0ksSUFBN0MsQ0FBa0QsVUFBQUMsR0FBRyxFQUFJO0FBQzlELHdCQUFJQSxHQUFHLENBQUNDLElBQUosQ0FBU0MsR0FBYixFQUFrQixPQUFPOUMsUUFBUSxDQUFDO0FBQUVPLHNCQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkMsc0JBQUFBLE9BQU8sRUFBRTtBQUFFdUMsd0JBQUFBLEtBQUssRUFBRUgsR0FBRyxDQUFDQyxJQUFKLENBQVNDO0FBQWxCO0FBQTNCLHFCQUFELENBQWY7QUFDbEJSLG9CQUFBQSxVQUFVLENBQUNNLEdBQUcsQ0FBQ0MsSUFBSixDQUFTUixPQUFWLENBQVY7QUFDQSxtQkFISyxDQURrQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFIOztBQUFBLHdCQUFoQkksZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLFNBQXRCOztBQU1BQSxNQUFBQSxnQkFBZ0I7QUFDaEI7QUFDRCxHQVhRLEVBV04sQ0FBQzNDLE1BQU0sQ0FBQzBDLEtBQVAsQ0FBYUQsRUFBZCxDQVhNLENBQVQ7QUFhQSxNQUFJLENBQUNGLE9BQUwsRUFBYyxPQUFPLElBQVA7O0FBRWQsTUFBTVcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzNCLFFBQUlYLE9BQU8sQ0FBQ1ksT0FBUixJQUFtQixDQUF2QixFQUEwQjtBQUN6QmpELE1BQUFBLFFBQVEsQ0FBQztBQUFFTyxRQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkMsUUFBQUEsT0FBTyxFQUFFO0FBQUV1QyxVQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUEzQixPQUFELENBQVI7QUFDQSxLQUZELE1BRU87QUFDTi9DLE1BQUFBLFFBQVEsQ0FBQzBCLHlEQUFTLENBQUNXLE9BQUQsRUFBVXBDLElBQVYsQ0FBVixDQUFSO0FBQ0FELE1BQUFBLFFBQVEsQ0FBQztBQUFFTyxRQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkMsUUFBQUEsT0FBTyxFQUFFO0FBQUUwQyxVQUFBQSxPQUFPLEVBQUU7QUFBWDtBQUEzQixPQUFELENBQVI7QUFDQTtBQUNELEdBUEQ7O0FBUUEsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzVCLFFBQUlkLE9BQU8sQ0FBQ1ksT0FBUixJQUFtQixDQUF2QixFQUEwQjtBQUN6QmpELE1BQUFBLFFBQVEsQ0FBQztBQUFFTyxRQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkMsUUFBQUEsT0FBTyxFQUFFO0FBQUV1QyxVQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUEzQixPQUFELENBQVI7QUFDQSxLQUZELE1BRU87QUFDTi9DLE1BQUFBLFFBQVEsQ0FBQzBCLHlEQUFTLENBQUNXLE9BQUQsRUFBVXBDLElBQVYsQ0FBVixDQUFSO0FBQ0FILE1BQUFBLE1BQU0sQ0FBQ1csSUFBUCxDQUFZLFdBQVo7QUFDQTtBQUNELEdBUEQ7O0FBU0Esc0JBQ0M7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBLDRCQUNDLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0M7QUFBQSxtQkFBUTRCLE9BQU8sQ0FBQ2UsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBS0MsOERBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxELGVBT0M7QUFBTSxlQUFTLEVBQUMsdUNBQWhCO0FBQUEsNkJBQ0M7QUFBSyxpQkFBUyxFQUFDLHVDQUFmO0FBQUEsZ0NBRUM7QUFBSyxtQkFBUyxFQUFDLFFBQWY7QUFBQSxrQ0FDQztBQUFLLHFCQUFTLEVBQUMsZ0JBQWY7QUFBQSxvQ0FDQztBQUFLLGlCQUFHLEVBQUVmLE9BQU8sQ0FBQ2dCLE1BQVIsQ0FBZWxCLEdBQWYsRUFBb0JtQixHQUE5QjtBQUFtQyxpQkFBRyxFQUFDLE9BQXZDO0FBQStDLHVCQUFTLEVBQUM7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERCxlQUdDO0FBQ0MscUJBQU8sRUFBRTtBQUFBLHVCQUFNbEIsTUFBTSxDQUFDRCxHQUFHLEtBQUssQ0FBUixHQUFZRSxPQUFPLENBQUNnQixNQUFSLENBQWVoQyxNQUFmLEdBQXdCLENBQXBDLEdBQXdDYyxHQUFHLEdBQUcsQ0FBL0MsQ0FBWjtBQUFBLGVBRFY7QUFFQyx1QkFBUyxFQUFDLGlHQUZYO0FBQUEscUNBSUMsOERBQUMsc0VBQUQ7QUFBaUIseUJBQVMsRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFIRCxlQVVDO0FBQ0MscUJBQU8sRUFBRTtBQUFBLHVCQUFNQyxNQUFNLENBQUNELEdBQUcsS0FBSyxDQUFSLEdBQVlFLE9BQU8sQ0FBQ2dCLE1BQVIsQ0FBZWhDLE1BQWYsR0FBd0IsQ0FBcEMsR0FBd0NjLEdBQUcsR0FBRyxDQUEvQyxDQUFaO0FBQUEsZUFEVjtBQUVDLHVCQUFTLEVBQUMsa0dBRlg7QUFBQSxxQ0FJQyw4REFBQyx1RUFBRDtBQUFrQix5QkFBUyxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQW1CQztBQUFLLHFCQUFTLEVBQUMscUNBQWY7QUFBQSxzQkFDRUUsT0FBTyxDQUFDZ0IsTUFBUixDQUFlRSxHQUFmLENBQW1CLFVBQUNDLEtBQUQsRUFBUUMsQ0FBUjtBQUFBLGtDQUNuQjtBQUVDLHlCQUFTLEVBQUMsNEJBRlg7QUFHQyx1QkFBTyxFQUFFO0FBQUEseUJBQU1yQixNQUFNLENBQUNxQixDQUFELENBQVo7QUFBQSxpQkFIVjtBQUFBLHVDQUtDO0FBQ0MscUJBQUcsRUFBRUQsS0FBSyxDQUFDRixHQURaO0FBRUMscUJBQUcsRUFBQyxPQUZMO0FBR0MsMkJBQVMsRUFBQyxTQUhYO0FBSUMsMkJBQVMsWUFBS0csQ0FBQyxLQUFLdEIsR0FBTixHQUFZLHlCQUFaLEdBQXdDLEVBQTdDO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxELGlCQUNNc0IsQ0FETjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURtQjtBQUFBLGFBQW5CO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFuQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZELGVBd0NDO0FBQUssbUJBQVMsRUFBQyw2Q0FBZjtBQUFBLGtDQUVDO0FBQUsscUJBQVMsRUFBQyxtQ0FBZjtBQUFBLG9DQUNDO0FBQUcsdUJBQVMsRUFBQywwQ0FBYjtBQUFBLHdCQUF5RHBCLE9BQU8sQ0FBQ2U7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERCxlQUdDLDhEQUFDLGdFQUFEO0FBQVcsdUJBQVMsRUFBQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRCxlQVNDO0FBQUsscUJBQVMsRUFBQyxxQkFBZjtBQUFBLG9DQUNDO0FBQUssdUJBQVMsRUFBQyxpQ0FBZjtBQUFBLHFDQUNDLDhEQUFDLGtFQUFEO0FBQ0Msd0JBQVEsRUFBRWYsT0FBTyxDQUFDcUIsU0FEbkI7QUFFQyx3QkFBUSxFQUFDLEtBRlY7QUFHQyx1QkFBTyxFQUFDLFVBSFQ7QUFJQyxxQkFBSyxFQUFDO0FBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREQsZUFTQztBQUFLLHVCQUFTLEVBQUMsMEJBQWY7QUFBQSxzQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERCxlQUVDO0FBQUsseUJBQVMsRUFBQyw0QkFBZjtBQUFBLHVDQUNDLDhEQUFDLGtFQUFEO0FBQ0MsMEJBQVEsRUFBRXJCLE9BQU8sQ0FBQ3NCLFdBRG5CO0FBRUMsMEJBQVEsRUFBQyxLQUZWO0FBR0MseUJBQU8sRUFBQyxVQUhUO0FBSUMsdUJBQUssRUFBQztBQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFURDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVEQsZUFnQ0M7QUFBSyxxQkFBUyxFQUFDLE1BQWY7QUFBQSxvQ0FDQyw4REFBQyw2REFBRDtBQUFVLHVCQUFTLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERCxlQUVDLDhEQUFDLDZEQUFEO0FBQVUsdUJBQVMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZELGVBR0MsOERBQUMsNkRBQUQ7QUFBVSx1QkFBUyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEQsZUFJQyw4REFBQyw2REFBRDtBQUFVLHVCQUFTLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRCxlQUtDLDhEQUFDLDZEQUFEO0FBQVUsdUJBQVMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFoQ0QsZUF5Q0M7QUFBRyxxQkFBUyxFQUFDLHVEQUFiO0FBQUEsc0JBQ0V0QixPQUFPLENBQUN1QjtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBekNELGVBOENDO0FBQUEsb0NBQ0M7QUFBRyx1QkFBUyxFQUFDLHNDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURELGVBR0M7QUFBSyx1QkFBUyxFQUFDLDZCQUFmO0FBQUEsc0NBQ0M7QUFBTSx5QkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREQsZUFFQztBQUFLLHlCQUFTLEVBQUMseURBQWY7QUFBQSx1Q0FDQztBQUFLLDJCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRCxlQUtDO0FBQU0seUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxELGVBTUM7QUFBTSx5QkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTkQsZUFPQztBQUFNLHlCQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTlDRCxlQTZEQztBQUFLLHFCQUFTLEVBQUMsaUJBQWY7QUFBQSxvQ0FDQztBQUFHLHVCQUFTLEVBQUMsc0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREQsZUFHQztBQUFLLHVCQUFTLEVBQUMsMEJBQWY7QUFBQSxzQ0FDQztBQUFLLHlCQUFTLEVBQUMsK0ZBQWY7QUFBQSx1Q0FDQztBQUFHLDJCQUFTLEVBQUMseUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURELGVBSUM7QUFBSyx5QkFBUyxFQUFDLCtGQUFmO0FBQUEsdUNBQ0M7QUFBRywyQkFBUyxFQUFDLHlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKRCxlQU9DO0FBQUsseUJBQVMsRUFBQywrRkFBZjtBQUFBLHVDQUNDO0FBQUcsMkJBQVMsRUFBQyx5QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUEQsZUFVQztBQUFLLHlCQUFTLEVBQUMsK0ZBQWY7QUFBQSx1Q0FDQztBQUFHLDJCQUFTLEVBQUMseUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVZELGVBYUM7QUFBSyx5QkFBUyxFQUFDLCtGQUFmO0FBQUEsdUNBQ0M7QUFBRywyQkFBUyxFQUFDLHlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFiRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTdERCxlQXFGQztBQUFLLHFCQUFTLEVBQUMscUJBQWY7QUFBQSxvQ0FDQztBQUNDLHVCQUFTLEVBQUMscURBRFg7QUFFQyxxQkFBTyxFQUFFWixhQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURELGVBT0M7QUFDQyx1QkFBUyxFQUFDLCtDQURYO0FBRUMscUJBQU8sRUFBRUcsY0FGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBckZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF4Q0QsZUE4SUM7QUFBSyxtQkFBUyxFQUFDLDhCQUFmO0FBQUEsa0NBQ0M7QUFBRyxxQkFBUyxFQUFDLGtDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBR0M7QUFBRyxtQ0FBdUIsRUFBRTtBQUFFVSxjQUFBQSxNQUFNLEVBQUV4QixPQUFPLENBQUN5QjtBQUFsQjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE5SUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBELGVBOEpDLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE5SkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFrS0E7O0dBM01RNUI7VUFDTzNDOzs7S0FEUDJDO0FBNk1ULCtEQUFlQSxhQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGFpbHdpbmQvSGVhZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0L1tpZF0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5leHQvbmV4dC9uby1pbWctZWxlbWVudCAqL1xyXG5pbXBvcnQgeyBNZW51SWNvbiwgU2VhcmNoSWNvbiwgU2hvcHBpbmdDYXJ0SWNvbiwgVmlld0xpc3RJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lJztcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi8uLi9zdG9yZS9HbG9iYWxTdGF0ZSc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBNZW51TW9kYWwgZnJvbSAnLi9NZW51TW9kYWwnO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuXHRjb25zdCB7IGNhcnQsIGF1dGgsIGNhdGVnb3JpZXMgfSA9IHN0YXRlO1xyXG5cclxuXHRjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcblx0XHRDb29raWVzLnJlbW92ZSgncmVmcmVzaHRva2VuJywgeyBwYXRoOiAnL2FwaS9hdXRoL2FjY2Vzc1Rva2VuJyB9KTtcclxuXHRcdENvb2tpZXMucmVtb3ZlKCd1c2VySW5mb0luaXQnKTtcclxuXHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6ICdBVVRIJywgcGF5bG9hZDoge30gfSk7XHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6ICdBRERfT1JERVJTJywgcGF5bG9hZDogW10gfSk7XHJcblxyXG5cdFx0cm91dGVyLnB1c2goJy8nKTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZU9wZW5NZW51ID0gKCkgPT4ge1xyXG5cdFx0Y29uc3QgbWVudU1vZGFsRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudU1vZGFsTW9iaWxlJyk7XHJcblx0XHRjb25zdCBtZW51TW9kYWxCb2R5RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudU1vZGFsQm9keScpO1xyXG5cclxuXHRcdG1lbnVNb2RhbEVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG5cclxuXHRcdG1lbnVNb2RhbEJvZHlFbC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLXNsaWRlLTUwMCcpO1xyXG5cdFx0bWVudU1vZGFsQm9keUVsLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtc2xpZGVJbi01MDAnKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGhlYWRlcj5cclxuXHRcdFx0ey8qIE5hdiBUb3AgKi99XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYi0xMiBzbTpwYi0wIGZsZXggaXRlbXMtY2VudGVyIGJnLWFtYXpvbl9ibHVlIHRyYW5zIHAtMSBweC0yIGZsZXgtZ3JvdyByZWxhdGl2ZSc+XHJcblx0XHRcdFx0ey8qIE1vYmlsZSBtZW51IGRpc3BsYXkgKi99XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyJyBvbkNsaWNrPXtoYW5kbGVPcGVuTWVudX0+XHJcblx0XHRcdFx0XHQ8Vmlld0xpc3RJY29uIGNsYXNzTmFtZT0naC04IHRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXIgc206aGlkZGVuJyAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHR7LyogTWVudSBNb2RhbCAqL31cclxuXHJcblx0XHRcdFx0PE1lbnVNb2RhbFxyXG5cdFx0XHRcdFx0dXNlcj17YXV0aC51c2VyfVxyXG5cdFx0XHRcdFx0cm91dGVyPXtyb3V0ZXJ9XHJcblx0XHRcdFx0XHRjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfVxyXG5cdFx0XHRcdFx0aGFuZGxlTG9nb3V0PXtoYW5kbGVMb2dvdXR9XHJcblx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0ey8qIEJyYW5kICovfVxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvJyl9XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9J3B5LTIgZmxleCBpdGVtcy1jZW50ZXIgbXgtMiBtci0zIGN1cnNvci1wb2ludGVyIGZsZXgtZ3JvdyBzbTpmbGV4LWdyb3ctMCdcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdFx0c3JjPScvaW1hZ2VzL2xvZ280LnBuZydcclxuXHRcdFx0XHRcdFx0YWx0PSdMb2dvJ1xyXG5cdFx0XHRcdFx0XHR3aWR0aD17MTUwfVxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ9ezQwfVxyXG5cdFx0XHRcdFx0XHRvYmplY3RGaXQ9J2NvbnRhaW4nXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZSBiZy1hbWF6b25fYmx1ZSdcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0ey8qIFNlYXJjaCAqL31cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgdG9wLVs1OCVdIGxlZnQtMyByaWdodC0zIHNtOnN0YXRpYyBmbGV4IGl0ZW1zLWNlbnRlciBoLTEwIHJvdW5kZWQtbWQgZmxleC1ncm93IGJnLXllbGxvdy00MDAgaG92ZXI6YmcteWVsbG93LTUwMCBjdXJzb3ItcG9pbnRlcic+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdwLTIgaC1mdWxsIHctZnVsbCBmbGV4LWdyb3cgZmxleC1zaHJpbmsgcm91bmRlZC1sLW1kIGZvY3VzOm91dGxpbmUtbm9uZSdcclxuXHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J1TDrG0gTUlOVCBMYWxhJ1xyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxTZWFyY2hJY29uIGNsYXNzTmFtZT0naC0xMiBwLTQgdGV4dC1ibGFjaycgLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHR7LyogUmlnaHQgKi99XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggdGV4dC1ncmF5LTMwMCB0ZXh0LXhzIG1kOnRleHQtc20gc3BhY2UteC02IG14LTUgd2hpdGVzcGFjZS1ub3dyYXAnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIGhpZGRlbiBzbTpmbGV4IHNwYWNlLXgtMiBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgbWQ6aG92ZXI6b3V0bGluZS13aGlsZV9zb2xpZCBtZDpwLTEgZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHR7YXV0aC51c2VyICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRzcmM9e2F1dGgudXNlci5hdmF0YXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRhbHQ9e2F1dGgudXNlci5uYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PSczMCdcclxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoPSczMCdcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ncm91bmRlZC1mdWxsJ1xyXG5cdFx0XHRcdFx0XHRcdD48L2ltZz5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHJcblx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgJHshYXV0aC51c2VyID8gJy9zaWduaW4nIDogJy9wcm9maWxlJ31gKX1cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3RleHQtd2hpdGUgZm9udC1leHRyYWJvbGQnXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2ZvbnQtbm9ybWFsJz5IZWxsbyw8L3A+XHJcblx0XHRcdFx0XHRcdFx0e2F1dGgudXNlciA/IGF1dGgudXNlci5uYW1lIDogJ1NpZ24gaW4nfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdHsvKiBNb2RhbCAqL31cclxuXHRcdFx0XHRcdFx0e2F1dGgudXNlciAmJiBhdXRoLnVzZXIucm9sZSAhPT0gJ2FkbWluJyAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdoaWRkZW4gZmxleC1jb2wgaXRlbXMtc3RhcnQgdGV4dC1ncmF5LTYwMCBzcGFjZS15LTQgcHItNSBwYi01IHBsLTEwIGFic29sdXRlIHRvcC1bMTA1JV0gcmlnaHQtMCB6LVs0OF1cclxuXHRcdFx0XHRcdFx0IHJvdW5kZWQtbWQgYmctZ3JheS0xMDAgc2hhZG93LXhsIG1kOmdyb3VwLWhvdmVyOmZsZXggYW5pbWF0ZS1zY2FsZS0xcyBvcmlnaW4tdG9wLXJpZ2h0J1xyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nYWJzb2x1dGUgLXRvcC0xIGgtMSB3LWZ1bGwgb3BhY2l0eS0wJz48L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2hvdmVyOnRleHQteWVsbG93LTcwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTEwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTEwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3Byb2ZpbGUnKX1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0VMOgaSBraG/huqNuXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2hvdmVyOnRleHQteWVsbG93LTcwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTEwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTEwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3Byb2ZpbGUvb3JkZXItaGlzdG9yeScpfVxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHTEkMahbiBow6BuZ1xyXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHBcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdib3JkZXItdCBib3JkZXItZ3JheS0zMDAgcHQtNCBob3Zlcjp0ZXh0LXllbGxvdy03MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0xMDAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTExMCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlTG9nb3V0fVxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHTEkMSDbmcgeHXhuqV0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdFx0XHR7YXV0aC51c2VyICYmIGF1dGgudXNlci5yb2xlID09PSAnYWRtaW4nICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2hpZGRlbiBmbGV4LWNvbCBpdGVtcy1zdGFydCB0ZXh0LWdyYXktNjAwIHNwYWNlLXktNCBwci01IHBiLTUgcGwtMTAgYWJzb2x1dGUgdG9wLVsxMDUlXSByaWdodC0wIHotWzQ4XVxyXG5cdFx0XHRcdFx0XHQgcm91bmRlZC1tZCBiZy1ncmF5LTEwMCBzaGFkb3cteGwgbWQ6Z3JvdXAtaG92ZXI6ZmxleCBhbmltYXRlLXNjYWxlLTFzIG9yaWdpbi10b3AtcmlnaHQnXHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdhYnNvbHV0ZSAtdG9wLTEgaC0xIHctZnVsbCBvcGFjaXR5LTAnPjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxwXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naG92ZXI6dGV4dC15ZWxsb3ctNzAwIHRyYW5zaXRpb24gZHVyYXRpb24tMTAwIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMTAnXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvcHJvZmlsZScpfVxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRUw6BpIGtob+G6o25cclxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDxwXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naG92ZXI6dGV4dC15ZWxsb3ctNzAwIHRyYW5zaXRpb24gZHVyYXRpb24tMTAwIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMTAnXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvcHJvZmlsZS9vcmRlci1oaXN0b3J5Jyl9XHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFF14bqjbiBsw70gxJHGoW4gaMOgbmdcclxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDxwXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naG92ZXI6dGV4dC15ZWxsb3ctNzAwIHRyYW5zaXRpb24gZHVyYXRpb24tMTAwIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMTAnXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvcHJvZHVjdCcpfVxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRT4bqjbiBwaOG6qW1cclxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDxwXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naG92ZXI6dGV4dC15ZWxsb3ctNzAwIHRyYW5zaXRpb24gZHVyYXRpb24tMTAwIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMTAnXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvdXNlcnMnKX1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0VXNlcnNcclxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDxwXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naG92ZXI6dGV4dC15ZWxsb3ctNzAwIHRyYW5zaXRpb24gZHVyYXRpb24tMTAwIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMTAnXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvY2F0ZWdvcmllcycpfVxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHREYW5oIG3hu6VjXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2JvcmRlci10IGJvcmRlci1ncmF5LTMwMCBwdC00IGhvdmVyOnRleHQteWVsbG93LTcwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTEwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTEwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVMb2dvdXR9XHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdMSQxINuZyB4deG6pXRcclxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdoaWRkZW4gc206ZmxleCBmbGV4LWNvbCBsaW5rIG1kOmhvdmVyOm91dGxpbmUtd2hpbGVfc29saWQgbWQ6cC0xJ1xyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgJHshYXV0aC51c2VyID8gJy9zaWduaW4nIDogJy9wcm9maWxlL29yZGVyLWhpc3RvcnknfWApfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8cD7EkMahbiBo4buneTwvcD5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPScgZm9udC1leHRyYWJvbGQgdGV4dC13aGl0ZSc+JiDEkMahbiBow6BuZzwvcD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9jYXJ0Jyl9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgbGluayByZWxhdGl2ZSBtZDpob3ZlcjpvdXRsaW5lLXdoaWxlX3NvbGlkIG1kOnAtMSdcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSduby11bmRlcmxpbmUgaC00IHctNCBzbTpoLTUgc206dy01IGJnLXllbGxvdy00MDAgdGV4dC1jZW50ZXIgcm91bmRlZC1mdWxsIHRleHQtZ3JheS04MDAgYWJzb2x1dGUgbGVmdC00IHNtOmxlZnQtNiB0b3AtMCBmb250LWV4dHJhYm9sZCc+XHJcblx0XHRcdFx0XHRcdFx0e2NhcnQubGVuZ3RofVxyXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDxTaG9wcGluZ0NhcnRJY29uIGNsYXNzTmFtZT0naC04IHNtOmgtMTAgc206bXItMicgLz5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdoaWRkZW4gbWQ6aW5saW5lIGZvbnQtZXh0cmFib2xkIHRleHQtd2hpdGUnPkdp4buPIGjDoG5nPC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHR7LyogTmF2IEJvdHRvbSAqL31cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGJnLWFtYXpvbl9ibHVlIHNtOmJnLWFtYXpvbl9ibHVlLWxpZ2h0IHBsLTUgcC0xIHRleHQtZ3JheS0yMDAgc3BhY2UteC0zIHdoaXRlc3BhY2Utbm93cmFwIG92ZXJmbG93LXgtYXV0byBzY3JvbGxiYXItaGlkZSc+XHJcblx0XHRcdFx0PHBcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT0nZmxleCBtZDpob3ZlcjpvdXRsaW5lLXdoaWxlX3NvbGlkIHAtMSBjdXJzb3ItcG9pbnRlcidcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvY2F0ZWdvcmllcy9hbGwnKX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8TWVudUljb24gY2xhc3NOYW1lPSdoaWRkZW4gc206aW5saW5lIGgtNiBtci0xJyAvPlxyXG5cdFx0XHRcdFx0VOG6pXQgY+G6o1xyXG5cdFx0XHRcdDwvcD5cclxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9J21kOmhvdmVyOm91dGxpbmUtd2hpbGVfc29saWQgcC0xIGN1cnNvci1wb2ludGVyJz5O4buVaSBi4bqtdCBow7RtIG5heTwvcD5cclxuXHRcdFx0XHQ8cFxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdtZDpob3ZlcjpvdXRsaW5lLXdoaWxlX3NvbGlkIHAtMSBjdXJzb3ItcG9pbnRlcidcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvY2F0ZWdvcmllcy82MTMxZWI0ODc1MDU3NzA1ZjA3NzkwNzknKX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRDaMOibiB2w6F5XHJcblx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdDxwXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9J21kOmhvdmVyOm91dGxpbmUtd2hpbGVfc29saWQgcC0xIGN1cnNvci1wb2ludGVyJ1xyXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9jYXRlZ29yaWVzLzYxMzFmODRjNzUwNTc3MDVmMDc3OTA4MScpfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdFBo4bulIGtp4buHblxyXG5cdFx0XHRcdDwvcD5cclxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9J21kOmhvdmVyOm91dGxpbmUtd2hpbGVfc29saWQgcC0xIGN1cnNvci1wb2ludGVyJz5Wb3VjaGVyPC9wPlxyXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT0nbWQ6aG92ZXI6b3V0bGluZS13aGlsZV9zb2xpZCBwLTEgY3Vyc29yLXBvaW50ZXInPkThu4tjaCB24bulIGtow6FjaCBow6BuZzwvcD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2hlYWRlcj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L25vLWltZy1lbGVtZW50ICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uLy4uL3N0b3JlL0dsb2JhbFN0YXRlJztcclxuaW1wb3J0IHsgYWRkVG9DYXJ0IH0gZnJvbSAnLi4vLi4vc3RvcmUvQWN0aW9ucyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RhaWx3aW5kL0hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb290ZXInO1xyXG5pbXBvcnQgeyBDaGV2cm9uTGVmdEljb24sIENoZXZyb25SaWdodEljb24sIEhlYXJ0SWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZSc7XHJcbmltcG9ydCB7IFN0YXJJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCc7XHJcbmltcG9ydCBDdXJyZW5jeSBmcm9tICdyZWFjdC1jdXJyZW5jeS1mb3JtYXR0ZXInO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdERldGFpbCgpIHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0Y29uc3QgW3RhYiwgc2V0VGFiXSA9IHVzZVN0YXRlKDApO1xyXG5cdGNvbnN0IFtwcm9kdWN0LCBzZXRQcm9kdWN0XSA9IHVzZVN0YXRlKCk7XHJcblxyXG5cdGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuXHRjb25zdCB7IGNhcnQgfSA9IHN0YXRlO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGV0IGlkID0gcm91dGVyLnF1ZXJ5LmlkO1xyXG5cdFx0aWYgKGlkKSB7XHJcblx0XHRcdGNvbnN0IGdldFByb2R1Y3REZXRhaWwgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRcdFx0YXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Byb2R1Y3QvJHtyb3V0ZXIucXVlcnkuaWR9YCkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmVycikgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgZXJyb3I6IHJlcy5kYXRhLmVyciB9IH0pO1xyXG5cdFx0XHRcdFx0c2V0UHJvZHVjdChyZXMuZGF0YS5wcm9kdWN0KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fTtcclxuXHRcdFx0Z2V0UHJvZHVjdERldGFpbCgpO1xyXG5cdFx0fVxyXG5cdH0sIFtyb3V0ZXIucXVlcnkuaWRdKTtcclxuXHJcblx0aWYgKCFwcm9kdWN0KSByZXR1cm4gbnVsbDtcclxuXHJcblx0Y29uc3QgYWRkSXRlbVRvQ2FydCA9ICgpID0+IHtcclxuXHRcdGlmIChwcm9kdWN0LmluU3RvY2sgPD0gMCkge1xyXG5cdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGVycm9yOiAnWGluIGzhu5dpIHPhuqNuIHBo4bqpbSB04bqhbSBo4bq/dCBow6BuZyEnIH0gfSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkaXNwYXRjaChhZGRUb0NhcnQocHJvZHVjdCwgY2FydCkpO1xyXG5cdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IHN1Y2Nlc3M6ICdUaMOqbSB2w6BvIGdp4buPIHRow6BuaCBjw7RuZyEnIH0gfSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVDaGVja291dCA9ICgpID0+IHtcclxuXHRcdGlmIChwcm9kdWN0LmluU3RvY2sgPD0gMCkge1xyXG5cdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGVycm9yOiAnWGluIGzhu5dpIHPhuqNuIHBo4bqpbSB04bqhbSBo4bq/dCBow6BuZyEnIH0gfSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkaXNwYXRjaChhZGRUb0NhcnQocHJvZHVjdCwgY2FydCkpO1xyXG5cdFx0XHRyb3V0ZXIucHVzaCgnL2NoZWNrb3V0Jyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdiZy1ncmF5LTEwMCc+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdDx0aXRsZT57cHJvZHVjdC50aXRsZX0gLSBNSU5UIExhbGE8L3RpdGxlPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblxyXG5cdFx0XHQ8SGVhZGVyIC8+XHJcblxyXG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9J21heC13LXNjcmVlbi0yeGwgbXgtYXV0byBtaW4taC1zY3JlZW4nPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdncmlkIGxnOmdyaWQtY29scy0yIG15LTQgcC01IGJnLXdoaXRlJz5cclxuXHRcdFx0XHRcdHsvKiBpbWFnZSAqL31cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsZzpwLTUnPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtwcm9kdWN0LmltYWdlc1t0YWJdLnVybH0gYWx0PSdpbWFnZScgY2xhc3NOYW1lPSd3LWZ1bGwnIC8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldFRhYih0YWIgPT09IDAgPyBwcm9kdWN0LmltYWdlcy5sZW5ndGggLSAxIDogdGFiIC0gMSl9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3ctMTAgaC0yMCBiZy1yZ2JhIGFic29sdXRlIGxlZnQtMiB0b3AtWzQ1JV0gZ3JvdXAtaG92ZXI6ZmxleCBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgaGlkZGVuJ1xyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdDxDaGV2cm9uTGVmdEljb24gY2xhc3NOYW1lPSdoLTEwIHRleHQtd2hpdGUgZm9udC1ib2xkJyAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRUYWIodGFiID09PSAwID8gcHJvZHVjdC5pbWFnZXMubGVuZ3RoIC0gMSA6IHRhYiAtIDEpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSd3LTEwIGgtMjAgYmctcmdiYSBhYnNvbHV0ZSByaWdodC0yIHRvcC1bNDUlXSBncm91cC1ob3ZlcjpmbGV4IGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlciBoaWRkZW4nXHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PENoZXZyb25SaWdodEljb24gY2xhc3NOYW1lPSdoLTEwIHRleHQtd2hpdGUgZm9udC1ib2xkJyAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IHNwYWNlLXgtMiBtdC0yIG92ZXJmbG93LWhpZGRlbic+XHJcblx0XHRcdFx0XHRcdFx0e3Byb2R1Y3QuaW1hZ2VzLm1hcCgoaW1hZ2UsIGkpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2gtMS81IHctMS81IGN1cnNvci1wb2ludGVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRUYWIoaSl9XHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2ltYWdlLnVybH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9J2ltYWdlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9iamVjdEZpdD0nY29udGFpbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Ake2kgPT09IHRhYiA/ICdib3JkZXItNCBib3JkZXItcmVkLTQwMCcgOiAnJ31gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0ey8qIGRldGFpbCAqL31cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsZzpwLTUgbXktNCBsZzpteS0wIGZsZXggZmxleC1jb2wgc3BhY2UteS00Jz5cclxuXHRcdFx0XHRcdFx0ey8qIHRpdGxlICovfVxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyJz5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQteGwgbGc6dGV4dC0yeGwgZm9udC1ib2xkIGNhcGl0YWxpemUnPntwcm9kdWN0LnRpdGxlfTwvcD5cclxuXHJcblx0XHRcdFx0XHRcdFx0PEhlYXJ0SWNvbiBjbGFzc05hbWU9J2gtMTAgY3Vyc29yLXBvaW50ZXIgYWN0aXZlOnRleHQtcmVkLTUwMCBob3Zlcjp0ZXh0LXJlZC01MDAnIC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0ey8qIHByaWNlICovfVxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBzcGFjZS14LTQgbXktNCc+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQtcmVkLTYwMCBmb250LWJvbGQgdGV4dC0zeGwnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEN1cnJlbmN5XHJcblx0XHRcdFx0XHRcdFx0XHRcdHF1YW50aXR5PXtwcm9kdWN0LnByaWNlU2FsZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVuY3k9J1ZORCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGF0dGVybj0nIyMsIyMjICEnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdyb3VwPScuJ1xyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBzcGFjZS14LTIgaXRlbXMtZW5kJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxwPkdpw6EgZ+G7kWM6IDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNjAwIGxpbmUtdGhyb3VnaCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxDdXJyZW5jeVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHF1YW50aXR5PXtwcm9kdWN0LnByaWNlT3JpZ2lufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbmN5PSdWTkQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGF0dGVybj0nIyMsIyMjICEnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z3JvdXA9Jy4nXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHR7LyogcmF0aW5nICovfVxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XHJcblx0XHRcdFx0XHRcdFx0PFN0YXJJY29uIGNsYXNzTmFtZT0naC03IHRleHQteWVsbG93LTUwMCcgLz5cclxuXHRcdFx0XHRcdFx0XHQ8U3Rhckljb24gY2xhc3NOYW1lPSdoLTcgdGV4dC15ZWxsb3ctNTAwJyAvPlxyXG5cdFx0XHRcdFx0XHRcdDxTdGFySWNvbiBjbGFzc05hbWU9J2gtNyB0ZXh0LXllbGxvdy01MDAnIC8+XHJcblx0XHRcdFx0XHRcdFx0PFN0YXJJY29uIGNsYXNzTmFtZT0naC03IHRleHQteWVsbG93LTUwMCcgLz5cclxuXHRcdFx0XHRcdFx0XHQ8U3Rhckljb24gY2xhc3NOYW1lPSdoLTcgdGV4dC15ZWxsb3ctNTAwJyAvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdHsvKiBkZXNjcmlwdGlvbiAgKi99XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTcwMCBsZzp0ZXh0LXhsIGxpbmUtY2xhbXAtMiBsZzpsaW5lLWNsYW1wLTMnPlxyXG5cdFx0XHRcdFx0XHRcdHtwcm9kdWN0LmRlc2NyaXB0aW9ufVxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblxyXG5cdFx0XHRcdFx0XHR7LyogQ29sb3JzICovfVxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTcwMCB0ZXh0LXhsIG1iLTQgZm9udC1ib2xkJz5Nw6B1IHPhuq9jPC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBzcGFjZS14LTMgaXRlbXMtY2VudGVyJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0naC0xMCB3LTEwIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlciBiZy1ncmF5LTYwMCBhY3RpdmU6cmluZy0yIHJpbmctZ3JheS02MDAgYWN0aXZlOnJpbmctb2Zmc2V0LTQnPjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlciByb3VuZGVkLWZ1bGwgYm9yZGVyLTIgYm9yZGVyLXJlZC01MDAgcC0xJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2gtMTAgdy0xMCByb3VuZGVkLWZ1bGwgYmctcmVkLTUwMCBhY3RpdmU6cmluZy0yIHJpbmctcmVkLTUwMCBhY3RpdmU6cmluZy1vZmZzZXQtNCc+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0naC0xMCB3LTEwIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlciBiZy1ibHVlLTUwMCBhY3RpdmU6cmluZy0yIHJpbmctYmx1ZS01MDAgYWN0aXZlOnJpbmctb2Zmc2V0LTQnPjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0naC0xMCB3LTEwIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlciBiZy1ncmVlbi01MDAgYWN0aXZlOnJpbmctMiByaW5nLWdyZWVuLTUwMCBhY3RpdmU6cmluZy1vZmZzZXQtNCc+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdoLTEwIHctMTAgcm91bmRlZC1mdWxsIGN1cnNvci1wb2ludGVyIGJnLXllbGxvdy01MDAgYWN0aXZlOnJpbmctMiByaW5nLXllbGxvdy01MDAgYWN0aXZlOnJpbmctb2Zmc2V0LTQnPjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHR7LyogU2l6ZSAqL31cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J292ZXJmbG93LXgtYXV0byc+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNzAwIHRleHQteGwgbWItNCBmb250LWJvbGQnPk3DoHUgc+G6r2M8L3A+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtd3JhcCBzcGFjZS14LTInPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctMTQgaC0xMCByb3VuZGVkLW1kIGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBjdXJzb3ItcG9pbnRlcic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtZ3JheS00MDAnPlhTPC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy0xNCBoLTEwIHJvdW5kZWQtbWQgYm9yZGVyLTQgYm9yZGVyLWJsdWUtNDAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGN1cnNvci1wb2ludGVyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC1ncmF5LTQwMCc+UzwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctMTQgaC0xMCByb3VuZGVkLW1kIGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBjdXJzb3ItcG9pbnRlcic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtZ3JheS00MDAnPk08L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTE0IGgtMTAgcm91bmRlZC1tZCBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgY3Vyc29yLXBvaW50ZXInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2ZvbnQtYm9sZCB0ZXh0LWdyYXktNDAwJz5MPC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy0xNCBoLTEwIHJvdW5kZWQtbWQgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGN1cnNvci1wb2ludGVyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC1ncmF5LTQwMCc+WEw8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHR7LyogYnV0dG9uICovfVxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggc3BhY2UteC00IHB5LTQnPlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYnV0dG9uLWdyZWVuIHAtNCB0ZXh0LWdyYXktNzAwIGZvbnQtYm9sZCBsZzp0ZXh0LXhsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17YWRkSXRlbVRvQ2FydH1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRUaMOqbSB2w6BvIGdp4buPIGjDoG5nXHJcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdidXR0b24gcC00IHRleHQtZ3JheS03MDAgZm9udC1ib2xkIGxnOnRleHQteGwnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVDaGVja291dH1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRNdWEgbmdheVxyXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdHsvKiBjb250ZW50ICovfVxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xnOmNvbC1zcGFuLTIgbGc6bXktOCBsZzpwLTUnPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2ZvbnQtYm9sZCB0ZXh0LXhsIHVwcGVyY2FzZSBtYi00Jz5Nw7QgdOG6oyBjaGkgdGnhur90PC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0PHAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwcm9kdWN0LmNvbnRlbnQgfX0+PC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvbWFpbj5cclxuXHJcblx0XHRcdDxGb290ZXIgLz5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REZXRhaWw7XHJcbiJdLCJuYW1lcyI6WyJNZW51SWNvbiIsIlNlYXJjaEljb24iLCJTaG9wcGluZ0NhcnRJY29uIiwiVmlld0xpc3RJY29uIiwidXNlUm91dGVyIiwiSW1hZ2UiLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJDb29raWVzIiwiTWVudU1vZGFsIiwiSGVhZGVyIiwicm91dGVyIiwic3RhdGUiLCJkaXNwYXRjaCIsImNhcnQiLCJhdXRoIiwiY2F0ZWdvcmllcyIsImhhbmRsZUxvZ291dCIsInJlbW92ZSIsInBhdGgiLCJ0eXBlIiwicGF5bG9hZCIsInB1c2giLCJoYW5kbGVPcGVuTWVudSIsIm1lbnVNb2RhbEVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1lbnVNb2RhbEJvZHlFbCIsImNsYXNzTGlzdCIsImFkZCIsInVzZXIiLCJhdmF0YXIiLCJuYW1lIiwicm9sZSIsImxlbmd0aCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkIiwiYWRkVG9DYXJ0IiwiYXhpb3MiLCJGb290ZXIiLCJDaGV2cm9uTGVmdEljb24iLCJDaGV2cm9uUmlnaHRJY29uIiwiSGVhcnRJY29uIiwiU3Rhckljb24iLCJDdXJyZW5jeSIsIlByb2R1Y3REZXRhaWwiLCJ0YWIiLCJzZXRUYWIiLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsImlkIiwicXVlcnkiLCJnZXRQcm9kdWN0RGV0YWlsIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJlcnIiLCJlcnJvciIsImFkZEl0ZW1Ub0NhcnQiLCJpblN0b2NrIiwic3VjY2VzcyIsImhhbmRsZUNoZWNrb3V0IiwidGl0bGUiLCJpbWFnZXMiLCJ1cmwiLCJtYXAiLCJpbWFnZSIsImkiLCJwcmljZVNhbGUiLCJwcmljZU9yaWdpbiIsImRlc2NyaXB0aW9uIiwiX19odG1sIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=