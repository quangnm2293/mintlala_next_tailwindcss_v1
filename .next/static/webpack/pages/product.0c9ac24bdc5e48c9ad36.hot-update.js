"use strict";
self["webpackHotUpdate_N_E"]("pages/product",{

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_filterSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/filterSearch */ "./utils/filterSearch.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\Works\\VSCode\\NextJS\\next-website-mintlala\\components\\Pagination.js",
    _s = $RefreshSig$();

/* eslint-disable no-mixed-spaces-and-tabs */




function range(start, end) {
  return Array(end - start + 1).fill().map(function (_, idx) {
    return start + idx;
  });
}

function Pagination(_ref) {
  _s();

  var _this = this;

  var result = _ref.result;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
      currentPage = _useState[0],
      setCurrentPage = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(12),
      limitNumber = _useState2[0],
      setLimitNumber = _useState2[1];

  var indexPage = result % limitNumber === 0 ? 0 : 1;
  var maxPage = (result - result % limitNumber) / limitNumber + indexPage;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (Object.keys(router.query).length === 0) localStorage.setItem('_ltd', JSON.stringify(limitNumber));
    var ltd = localStorage.getItem('_ltd');
    setLimitNumber(Number(ltd));
  }, [router.query]);
  var totalPage = range(1, maxPage);
  var newTotalPage = [];

  if (maxPage > 6) {
    if (currentPage >= 3 && currentPage <= maxPage - 3) {
      newTotalPage.push(currentPage - 2);
      newTotalPage.push(currentPage - 1);
      newTotalPage.push(currentPage);
      newTotalPage.push(currentPage + 1);
      newTotalPage.push(currentPage + 2);
    } else {
      if (currentPage > maxPage - 3) {
        newTotalPage.push(maxPage - 5);
        newTotalPage.push(maxPage - 4);
        newTotalPage.push(maxPage - 3);
        newTotalPage.push(maxPage - 2);
        newTotalPage.push(maxPage - 1);
      } else {
        newTotalPage.push(1);
        newTotalPage.push(2);
        newTotalPage.push(3);
        newTotalPage.push(4);
        newTotalPage.push(5);
      }
    }

    if (currentPage < maxPage - 3) {
      newTotalPage.push('...');
    }

    newTotalPage.push(maxPage);
  }

  var handlePagination = function handlePagination(e) {
    (0,_utils_filterSearch__WEBPACK_IMPORTED_MODULE_3__.default)({
      router: router,
      page: Number(e.target.innerHTML)
    });
    setCurrentPage(Number(e.target.innerHTML));
  };

  var handlePreviousPage = function handlePreviousPage() {
    (0,_utils_filterSearch__WEBPACK_IMPORTED_MODULE_3__.default)({
      router: router,
      page: currentPage - 1
    });
    setCurrentPage(currentPage - 1);
  };

  var handleNextPage = function handleNextPage() {
    (0,_utils_filterSearch__WEBPACK_IMPORTED_MODULE_3__.default)({
      router: router,
      page: currentPage + 1
    });
    setCurrentPage(currentPage + 1);
  };

  var handleLimit = function handleLimit(value) {
    setLimitNumber(value);
    localStorage.setItem('_ltd', JSON.stringify(value));
    (0,_utils_filterSearch__WEBPACK_IMPORTED_MODULE_3__.default)({
      router: router,
      page: 1,
      limit: value
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex justify-center my-4 pt-4",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: "",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "flex space-x-2 items-center ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "button ".concat(currentPage === 1 && 'cursor-not-allowed'),
            tabIndex: "-1",
            onClick: handlePreviousPage,
            disabled: currentPage === 1,
            children: "\xAB"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 6
        }, this), maxPage > 6 ? newTotalPage.map(function (page) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: handlePagination,
              className: "button ".concat(currentPage === page && 'text-red-600 border border-red-500'),
              children: page
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 10
            }, _this)
          }, page, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 9
          }, _this);
        }) : totalPage.map(function (page) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: handlePagination,
              className: "button ".concat(currentPage === page && 'text-red-600 border border-red-500'),
              children: page
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 10
            }, _this)
          }, page, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 9
          }, _this);
        }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "button ".concat(currentPage === maxPage && 'cursor-not-allowed'),
            tabIndex: "-1",
            onClick: handleNextPage,
            disabled: currentPage === maxPage,
            children: "\xBB"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "group relative z-[99]",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "text-xs text-gray-500",
            onClick: function onClick() {
              return handleLimit(limitNumber === 12 ? 24 : limitNumber === 24 ? 48 : 12);
            },
            children: [limitNumber, "/trang"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "hidden group-hover:flex flex-col absolute bottom-5 left-0 \r border border-gray-300 rounded-md bg-gray-100 py-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "cursor-pointer hover:bg-gray-200 px-5 text-xs text-gray-500",
              onClick: function onClick() {
                return handleLimit(12);
              },
              children: "12"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "cursor-pointer hover:bg-gray-200 px-5 text-xs text-gray-500",
              onClick: function onClick() {
                return handleLimit(24);
              },
              children: "24"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "cursor-pointer hover:bg-gray-200 px-5 text-xs text-gray-500",
              onClick: function onClick() {
                return handleLimit(48);
              },
              children: "48"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 3
  }, this);
}

_s(Pagination, "VBvKtdL3FMeMT2+WKzh1LJk+Ny8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = Pagination;
/* harmony default export */ __webpack_exports__["default"] = (Pagination);

var _c;

$RefreshReg$(_c, "Pagination");

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

/***/ "./pages/product/index.js":
/*!********************************!*\
  !*** ./pages/product/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MainProductManager; }
/* harmony export */ });
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_filterSearch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/filterSearch */ "./utils/filterSearch.js");
/* harmony import */ var _components_tailwind_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/tailwind/Header */ "./components/tailwind/Header.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Pagination */ "./components/Pagination.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "E:\\Works\\VSCode\\NextJS\\next-website-mintlala\\pages\\product\\index.js",
    _s = $RefreshSig$();

/* eslint-disable no-mixed-spaces-and-tabs */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable react-hooks/exhaustive-deps */











function range(start, end) {
  return Array(end - start + 1).fill().map(function (_, idx) {
    return start + idx;
  });
}

function MainProductManager() {
  _s();

  var _this = this;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_store_GlobalState__WEBPACK_IMPORTED_MODULE_5__.DataContext),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var categories = state.categories,
      auth = state.auth;
  var user = auth.user;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      category = _useState2[0],
      setCategory = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      products = _useState3[0],
      setProducts = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    all: true,
    hidden: false,
    act: false
  }),
      active = _useState4[0],
      setActive = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      result = _useState5[0],
      setResult = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1),
      page = _useState6[0],
      setPage = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(10),
      limitNumber = _useState7[0],
      setLimitNumber = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1),
      currentPage = _useState8[0],
      setCurrentPage = _useState8[1];

  var categoryQ = router.query.category || 'all';
  var sort = router.query.sort || '';
  var search = router.query.search || 'all';
  var limit = router.query.limit || limitNumber;
  var indexPage = result % limit === 0 ? 0 : 1;
  var maxPage = (result - result % limit) / limit + indexPage;
  var totalPage = range(1, maxPage);
  var newTotalPage = [];

  if (maxPage > 6) {
    if (currentPage >= 3 && currentPage <= maxPage - 3) {
      newTotalPage.push(currentPage - 2);
      newTotalPage.push(currentPage - 1);
      newTotalPage.push(currentPage);
      newTotalPage.push(currentPage + 1);
      newTotalPage.push(currentPage + 2);
    } else {
      if (currentPage > maxPage - 3) {
        newTotalPage.push(maxPage - 5);
        newTotalPage.push(maxPage - 4);
        newTotalPage.push(maxPage - 3);
        newTotalPage.push(maxPage - 2);
        newTotalPage.push(maxPage - 1);
      } else {
        newTotalPage.push(1);
        newTotalPage.push(2);
        newTotalPage.push(3);
        newTotalPage.push(4);
        newTotalPage.push(5);
      }
    }

    if (currentPage < maxPage - 3) {
      newTotalPage.push('...');
    }

    newTotalPage.push(maxPage);
  }

  var handleChangeTitle = function handleChangeTitle(e) {
    setName(e.target.value);
    (0,_utils_filterSearch__WEBPACK_IMPORTED_MODULE_9__.default)({
      router: router,
      search: e.target.value,
      page: 1
    });
  };

  var handleChangeCategory = function handleChangeCategory(e) {
    setCategory(e.target.value);
    (0,_utils_filterSearch__WEBPACK_IMPORTED_MODULE_9__.default)({
      router: router,
      category: e.target.value,
      page: 1
    });
  };

  var handleSearchBtn = function handleSearchBtn() {
    if (active.all) {
      getProducts(1, 'getListed', category, name);
    }

    if (active.act) {
      getProducts(1, 'getActive', category, name);
    }

    if (active.hidden) {
      getProducts(1, 'getUnListed', category, name);
    }

    (0,_utils_filterSearch__WEBPACK_IMPORTED_MODULE_9__.default)({
      router: router,
      search: 'all'
    });
  };

  var getProducts = /*#__PURE__*/function () {
    var _ref = (0,E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(id, link, cate, sear) {
      return E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: 'NOTIFY',
                payload: {
                  loading: true
                }
              });
              _context.prev = 1;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_8___default().get(encodeURI("/api/product/".concat(link, "?page=").concat(id ? id : page, "&category=").concat(cate ? cate : categoryQ, "&sort=").concat(sort, "&title=").concat(sear ? sear : search, "&limit=").concat(limit)), {
                headers: {
                  Authorization: auth.token
                }
              }).then(function (res) {
                if (res.data.err) return dispatch({
                  type: 'NOTIFY',
                  payload: {
                    error: res.data.err
                  }
                });
                setProducts(res.data.products);
                setResult(res.data.result);
                dispatch({
                  type: 'NOTIFY',
                  payload: {}
                });
              });

            case 4:
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](1);
              dispatch({
                type: 'NOTIFY',
                payload: {
                  error: _context.t0.message
                }
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 6]]);
    }));

    return function getProducts(_x, _x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var getAllProducts = /*#__PURE__*/function () {
      var _ref2 = (0,E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
        return E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                dispatch({
                  type: 'NOTIFY',
                  payload: {
                    loading: true
                  }
                });
                _context2.prev = 1;
                _context2.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_8___default().get(encodeURI("/api/product/getListed?page=".concat(page, "&category=").concat(categoryQ, "&sort=").concat(sort, "&title=").concat(search, "&limit=").concat(limit)), {
                  headers: {
                    Authorization: auth.token
                  }
                }).then(function (res) {
                  if (res.data.err) return dispatch({
                    type: 'NOTIFY',
                    payload: {}
                  });
                  setProducts(res.data.products);
                  setResult(res.data.result);
                  dispatch({
                    type: 'NOTIFY',
                    payload: {}
                  });
                });

              case 4:
                _context2.next = 9;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](1);
                dispatch({
                  type: 'NOTIFY',
                  payload: {}
                });

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 6]]);
      }));

      return function getAllProducts() {
        return _ref2.apply(this, arguments);
      };
    }();

    if (user && user.role === 'admin') getAllProducts();
  }, [user]);

  var handleAll = function handleAll() {
    getProducts(1, 'getListed');
    setCurrentPage(1);
    (0,_utils_filterSearch__WEBPACK_IMPORTED_MODULE_9__.default)({
      router: router,
      page: 1
    });
    setActive({
      all: true,
      hidden: false,
      act: false
    });
  };

  var handleHidden = function handleHidden() {
    getProducts(1, 'getUnListed');
    setCurrentPage(1);
    (0,_utils_filterSearch__WEBPACK_IMPORTED_MODULE_9__.default)({
      router: router,
      page: 1
    });
    setActive({
      all: false,
      hidden: true,
      act: false
    });
  };

  var handleActive = function handleActive() {
    getProducts(1, 'getActive');
    setCurrentPage(1);
    (0,_utils_filterSearch__WEBPACK_IMPORTED_MODULE_9__.default)({
      router: router,
      page: 1
    });
    setActive({
      all: false,
      hidden: false,
      act: true
    });
  };

  var handleDelete = function handleDelete(id) {
    dispatch({
      type: 'ADD_MODAL',
      payload: {
        id: id,
        token: auth.token,
        type: 'PRODUCT',
        role: auth.user.role
      }
    });
  };

  var handleEdit = function handleEdit(id, isDeleted) {
    if (isDeleted) return dispatch({
      type: 'NOTIFY',
      payload: {
        error: 'Vui lòng bỏ ẩn để chỉnh sửa.'
      }
    });
    router.push("/create/".concat(id));
  };

  var handleShow = /*#__PURE__*/function () {
    var _ref3 = (0,E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(id, isDeleted) {
      return E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (isDeleted) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              _context3.prev = 2;
              _context3.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_8___default().patch("/api/product/".concat(id), null, {
                headers: {
                  Authorization: auth.token
                }
              }).then(function (res) {
                if (res.data.err) return;
                dispatch({
                  type: 'NOTIFY',
                  payload: {}
                });
              });

            case 5:
              _context3.next = 10;
              break;

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](2);
              dispatch({
                type: 'NOTIFY',
                payload: {
                  error: _context3.t0.message
                }
              });

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 7]]);
    }));

    return function handleShow(_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }();

  var handlePagination = function handlePagination(e) {
    var index = Number(e.target.innerHTML);
    (0,_utils_filterSearch__WEBPACK_IMPORTED_MODULE_9__.default)({
      router: router,
      page: index
    });
    setCurrentPage(index);
    setPage(index);

    if (active.all) {
      getProducts(index, 'getListed');
    }

    if (active.act) {
      getProducts(index, 'getActive');
    }

    if (active.hidden) {
      getProducts(index, 'getUnListed');
    }
  };

  var handlePreviousPage = function handlePreviousPage() {
    (0,_utils_filterSearch__WEBPACK_IMPORTED_MODULE_9__.default)({
      router: router,
      page: currentPage - 1
    });
    setCurrentPage(currentPage - 1);

    if (active.all) {
      getProducts(currentPage - 1, 'getListed');
    }

    if (active.act) {
      getProducts(currentPage - 1, 'getActive');
    }

    if (active.hidden) {
      getProducts(currentPage - 1, 'getUnListed');
    }
  };

  var handleNextPage = function handleNextPage() {
    (0,_utils_filterSearch__WEBPACK_IMPORTED_MODULE_9__.default)({
      router: router,
      page: currentPage + 1
    });
    setCurrentPage(currentPage + 1);

    if (active.all) {
      getProducts(currentPage + 1, 'getListed');
    }

    if (active.act) {
      getProducts(currentPage + 1, 'getActive');
    }

    if (active.hidden) {
      getProducts(currentPage + 1, 'getUnListed');
    }
  };

  if (!user || user.role !== 'admin') return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "bg-gray-100 min-h-screen",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Qu\u1EA3n l\xFD s\u1EA3n ph\u1EA9m"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tailwind_Header__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "max-w-screen-2xl mx-auto bg-white p-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex justify-evenly px-3 pt-3 text-xl font-semibold text-gray-600 border-b-2 pb-4 border-gray-300",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
          onClick: handleAll,
          className: "hover:outline-black_solid p-2 ".concat(active.all ? 'text-red-400' : 'cursor-pointer'),
          children: "T\u1EA5t c\u1EA3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
          onClick: handleActive,
          className: "hover:outline-black_solid p-2 ".concat(active.act ? 'text-red-400' : 'cursor-pointer'),
          children: "\u0110ang ho\u1EA1t \u0111\u1ED9ng"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
          onClick: handleHidden,
          className: "hover:outline-black_solid p-2 ".concat(active.hidden ? 'text-red-400' : 'cursor-pointer'),
          children: "\u0110\xE3 \u1EA9n"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col lg:flex-row items-center p-5 space-y-4 lg:space-x-10 lg:space-y-0",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-full flex items-center space-x-5",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "text-lg font-semibold",
              children: "T\xEAn s\u1EA3n ph\u1EA9m"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 281,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 280,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            className: "border border-gray-300 p-3 rounded-md flex-grow",
            name: "name",
            value: name,
            onChange: handleChangeTitle,
            placeholder: "Nh\u1EADp t\xEAn"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-full",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex space-x-5 items-center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "text-lg font-semibold",
              children: "Danh m\u1EE5c"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 296,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
              name: "category",
              id: "category",
              value: category,
              onChange: handleChangeCategory,
              className: "flex-grow border border-gray-300 p-3 rounded-md capitalize",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "all",
                children: "-- T\u1EA5t c\u1EA3 --"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 304,
                columnNumber: 9
              }, this), categories.map(function (category) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  value: category._id,
                  children: category.name
                }, category._id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 306,
                  columnNumber: 10
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 297,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 295,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "button w-36 cursor-pointer flex justify-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "",
          onClick: handleSearchBtn,
          children: "T\xECm ki\u1EBFm"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:justify-between my-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "text-xl font-semibold text-gray-700",
          children: [products.length * currentPage < limit * currentPage ? result : products.length * currentPage, "/", result, " S\u1EA3n Ph\u1EA9m"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "button-blue max-w-sm flex justify-center p-3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
            href: "/create",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "",
              children: "+ Th\xEAm s\u1EA3n ph\u1EA9m m\u1EDBi"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 331,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 330,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w-full overflow-x-auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
          className: "",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 400
                },
                children: "T\xEAn s\u1EA3n ph\u1EA9m"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 340,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 80
                },
                children: "Gi\xE1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 341,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 80
                },
                children: "Kho"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 342,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 80
                },
                children: "\u0110\xE3 b\xE1n"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 343,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 100
                },
                children: "Ch\u1EC9nh s\u1EEDa"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 344,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 339,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 338,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
            children: products.map(function (item) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                className: "border-b border-gray-300",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "flex items-center py-4 space-x-2",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: item.images[0].url,
                    alt: "\u1EA2nh b\xECa",
                    className: "".concat(item.deleted ? 'opacity-40' : ''),
                    style: {
                      height: 50,
                      width: 50
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 351,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex flex-col",
                    children: [item.deleted && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
                      className: "text-red-300",
                      children: "\u0110\xE3 \u1EA9n"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 360,
                      columnNumber: 13
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                      className: "capitalize",
                      children: item.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 362,
                      columnNumber: 12
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 358,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 365,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 350,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "text-red-400 align-middle",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
                    children: "\u20AB"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 369,
                    columnNumber: 11
                  }, _this), item.priceSale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 368,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "text-center",
                  children: item.inStock
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 375,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "text-center",
                  children: item.sold
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 376,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "text-center",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex justify-between",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.PencilAltIcon, {
                      onClick: function onClick() {
                        return handleEdit(item._id, item.deleted);
                      },
                      className: "h-5 text-blue-500 cursor-pointer"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 379,
                      columnNumber: 12
                    }, _this), item.deleted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.EyeOffIcon, {
                      onClick: function onClick() {
                        return handleShow(item._id, item.deleted);
                      },
                      className: "h-5 text-red-500 ".concat(item.deleted ? 'cursor-pointer' : '')
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 387,
                      columnNumber: 13
                    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.EyeIcon, {
                      onClick: function onClick() {
                        return handleShow(item._id, item.deleted);
                      },
                      className: "h-5 text-green-500 ".concat(item.deleted ? 'cursor-pointer' : '')
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 396,
                      columnNumber: 13
                    }, _this), active.hidden && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.TrashIcon, {
                      className: "h-5 text-red-500",
                      onClick: function onClick() {
                        return handleDelete(item._id);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 407,
                      columnNumber: 13
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 378,
                    columnNumber: 11
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 377,
                  columnNumber: 10
                }, _this)]
              }, item._id, true, {
                fileName: _jsxFileName,
                lineNumber: 349,
                columnNumber: 9
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 347,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 420,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 241,
    columnNumber: 3
  }, this);
}

_s(MainProductManager, "skXRttxQEhbmNPPR78WrKNDmA6w=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];
});

_c = MainProductManager;

var _c;

$RefreshReg$(_c, "MainProductManager");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC4wYzlhYzI0YmRjNWU0OGM5YWQzNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0ssS0FBVCxDQUFlQyxLQUFmLEVBQXNCQyxHQUF0QixFQUEyQjtBQUMxQixTQUFPQyxLQUFLLENBQUNELEdBQUcsR0FBR0QsS0FBTixHQUFjLENBQWYsQ0FBTCxDQUNMRyxJQURLLEdBRUxDLEdBRkssQ0FFRCxVQUFDQyxDQUFELEVBQUlDLEdBQUo7QUFBQSxXQUFZTixLQUFLLEdBQUdNLEdBQXBCO0FBQUEsR0FGQyxDQUFQO0FBR0E7O0FBRUQsU0FBU0MsVUFBVCxPQUFnQztBQUFBOztBQUFBOztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUMvQixNQUFNQyxNQUFNLEdBQUdmLHNEQUFTLEVBQXhCOztBQUQrQixrQkFHT0csK0NBQVEsQ0FBQyxDQUFELENBSGY7QUFBQSxNQUd4QmEsV0FId0I7QUFBQSxNQUdYQyxjQUhXOztBQUFBLG1CQUlPZCwrQ0FBUSxDQUFDLEVBQUQsQ0FKZjtBQUFBLE1BSXhCZSxXQUp3QjtBQUFBLE1BSVhDLGNBSlc7O0FBTS9CLE1BQU1DLFNBQVMsR0FBR04sTUFBTSxHQUFHSSxXQUFULEtBQXlCLENBQXpCLEdBQTZCLENBQTdCLEdBQWlDLENBQW5EO0FBQ0EsTUFBTUcsT0FBTyxHQUFHLENBQUNQLE1BQU0sR0FBSUEsTUFBTSxHQUFHSSxXQUFwQixJQUFvQ0EsV0FBcEMsR0FBa0RFLFNBQWxFO0FBRUFsQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZixRQUFJb0IsTUFBTSxDQUFDQyxJQUFQLENBQVlSLE1BQU0sQ0FBQ1MsS0FBbkIsRUFBMEJDLE1BQTFCLEtBQXFDLENBQXpDLEVBQTRDQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkJDLElBQUksQ0FBQ0MsU0FBTCxDQUFlWCxX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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhGRCxlQTRLQyw4REFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBNUtEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBd0xBOztHQW5adUJ2RDtVQUlSeEQ7OztLQUpRd0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdpbmF0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLXNwYWNlcy1hbmQtdGFicyAqL1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmlsdGVyU2VhcmNoIGZyb20gJy4uL3V0aWxzL2ZpbHRlclNlYXJjaCc7XHJcblxyXG5mdW5jdGlvbiByYW5nZShzdGFydCwgZW5kKSB7XHJcblx0cmV0dXJuIEFycmF5KGVuZCAtIHN0YXJ0ICsgMSlcclxuXHRcdC5maWxsKClcclxuXHRcdC5tYXAoKF8sIGlkeCkgPT4gc3RhcnQgKyBpZHgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQYWdpbmF0aW9uKHsgcmVzdWx0IH0pIHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0Y29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuXHRjb25zdCBbbGltaXROdW1iZXIsIHNldExpbWl0TnVtYmVyXSA9IHVzZVN0YXRlKDEyKTtcclxuXHJcblx0Y29uc3QgaW5kZXhQYWdlID0gcmVzdWx0ICUgbGltaXROdW1iZXIgPT09IDAgPyAwIDogMTtcclxuXHRjb25zdCBtYXhQYWdlID0gKHJlc3VsdCAtIChyZXN1bHQgJSBsaW1pdE51bWJlcikpIC8gbGltaXROdW1iZXIgKyBpbmRleFBhZ2U7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAoT2JqZWN0LmtleXMocm91dGVyLnF1ZXJ5KS5sZW5ndGggPT09IDApIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdfbHRkJywgSlNPTi5zdHJpbmdpZnkobGltaXROdW1iZXIpKTtcclxuXHRcdGNvbnN0IGx0ZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdfbHRkJyk7XHJcblx0XHRzZXRMaW1pdE51bWJlcihOdW1iZXIobHRkKSk7XHJcblx0fSwgW3JvdXRlci5xdWVyeV0pO1xyXG5cclxuXHRjb25zdCB0b3RhbFBhZ2UgPSByYW5nZSgxLCBtYXhQYWdlKTtcclxuXHJcblx0bGV0IG5ld1RvdGFsUGFnZSA9IFtdO1xyXG5cclxuXHRpZiAobWF4UGFnZSA+IDYpIHtcclxuXHRcdGlmIChjdXJyZW50UGFnZSA+PSAzICYmIGN1cnJlbnRQYWdlIDw9IG1heFBhZ2UgLSAzKSB7XHJcblx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKGN1cnJlbnRQYWdlIC0gMik7XHJcblx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKGN1cnJlbnRQYWdlIC0gMSk7XHJcblx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKGN1cnJlbnRQYWdlKTtcclxuXHRcdFx0bmV3VG90YWxQYWdlLnB1c2goY3VycmVudFBhZ2UgKyAxKTtcclxuXHRcdFx0bmV3VG90YWxQYWdlLnB1c2goY3VycmVudFBhZ2UgKyAyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChjdXJyZW50UGFnZSA+IG1heFBhZ2UgLSAzKSB7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2gobWF4UGFnZSAtIDUpO1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKG1heFBhZ2UgLSA0KTtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChtYXhQYWdlIC0gMyk7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2gobWF4UGFnZSAtIDIpO1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKG1heFBhZ2UgLSAxKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaCgxKTtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaCgyKTtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaCgzKTtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaCg0KTtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaCg1KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKGN1cnJlbnRQYWdlIDwgbWF4UGFnZSAtIDMpIHtcclxuXHRcdFx0bmV3VG90YWxQYWdlLnB1c2goJy4uLicpO1xyXG5cdFx0fVxyXG5cclxuXHRcdG5ld1RvdGFsUGFnZS5wdXNoKG1heFBhZ2UpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgaGFuZGxlUGFnaW5hdGlvbiA9IGUgPT4ge1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBwYWdlOiBOdW1iZXIoZS50YXJnZXQuaW5uZXJIVE1MKSB9KTtcclxuXHRcdHNldEN1cnJlbnRQYWdlKE51bWJlcihlLnRhcmdldC5pbm5lckhUTUwpKTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZVByZXZpb3VzUGFnZSA9ICgpID0+IHtcclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgcGFnZTogY3VycmVudFBhZ2UgLSAxIH0pO1xyXG5cdFx0c2V0Q3VycmVudFBhZ2UoY3VycmVudFBhZ2UgLSAxKTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZU5leHRQYWdlID0gKCkgPT4ge1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBwYWdlOiBjdXJyZW50UGFnZSArIDEgfSk7XHJcblx0XHRzZXRDdXJyZW50UGFnZShjdXJyZW50UGFnZSArIDEpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUxpbWl0ID0gdmFsdWUgPT4ge1xyXG5cdFx0c2V0TGltaXROdW1iZXIodmFsdWUpO1xyXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ19sdGQnLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBwYWdlOiAxLCBsaW1pdDogdmFsdWUgfSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIG15LTQgcHQtNCc+XHJcblx0XHRcdDxuYXYgY2xhc3NOYW1lPScnPlxyXG5cdFx0XHRcdDx1bCBjbGFzc05hbWU9J2ZsZXggc3BhY2UteC0yIGl0ZW1zLWNlbnRlciAnPlxyXG5cdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgYnV0dG9uICR7Y3VycmVudFBhZ2UgPT09IDEgJiYgJ2N1cnNvci1ub3QtYWxsb3dlZCd9YH1cclxuXHRcdFx0XHRcdFx0XHR0YWJJbmRleD0nLTEnXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlUHJldmlvdXNQYWdlfVxyXG5cdFx0XHRcdFx0XHRcdGRpc2FibGVkPXtjdXJyZW50UGFnZSA9PT0gMX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdCZsYXF1bztcclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0e21heFBhZ2UgPiA2XHJcblx0XHRcdFx0XHRcdD8gbmV3VG90YWxQYWdlLm1hcChwYWdlID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxsaSBrZXk9e3BhZ2V9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlUGFnaW5hdGlvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BidXR0b24gJHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlID09PSBwYWdlICYmXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQndGV4dC1yZWQtNjAwIGJvcmRlciBib3JkZXItcmVkLTUwMCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtwYWdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdCAgKSlcclxuXHRcdFx0XHRcdFx0OiB0b3RhbFBhZ2UubWFwKHBhZ2UgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpIGtleT17cGFnZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVQYWdpbmF0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGJ1dHRvbiAke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudFBhZ2UgPT09IHBhZ2UgJiZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd0ZXh0LXJlZC02MDAgYm9yZGVyIGJvcmRlci1yZWQtNTAwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3BhZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0ICApKX1cclxuXHJcblx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BidXR0b24gJHtjdXJyZW50UGFnZSA9PT0gbWF4UGFnZSAmJiAnY3Vyc29yLW5vdC1hbGxvd2VkJ31gfVxyXG5cdFx0XHRcdFx0XHRcdHRhYkluZGV4PSctMSdcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVOZXh0UGFnZX1cclxuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17Y3VycmVudFBhZ2UgPT09IG1heFBhZ2V9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQmcmFxdW87XHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J2dyb3VwIHJlbGF0aXZlIHotWzk5XSc+XHJcblx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3RleHQteHMgdGV4dC1ncmF5LTUwMCdcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0aGFuZGxlTGltaXQobGltaXROdW1iZXIgPT09IDEyID8gMjQgOiBsaW1pdE51bWJlciA9PT0gMjQgPyA0OCA6IDEyKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdHtsaW1pdE51bWJlcn0vdHJhbmdcclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdoaWRkZW4gZ3JvdXAtaG92ZXI6ZmxleCBmbGV4LWNvbCBhYnNvbHV0ZSBib3R0b20tNSBsZWZ0LTAgXHJcblx0XHRcdFx0XHRcdGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBiZy1ncmF5LTEwMCBweS0yJ1xyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctZ3JheS0yMDAgcHgtNSB0ZXh0LXhzIHRleHQtZ3JheS01MDAnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVMaW1pdCgxMil9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0MTJcclxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctZ3JheS0yMDAgcHgtNSB0ZXh0LXhzIHRleHQtZ3JheS01MDAnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVMaW1pdCgyNCl9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0MjRcclxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctZ3JheS0yMDAgcHgtNSB0ZXh0LXhzIHRleHQtZ3JheS01MDAnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVMaW1pdCg0OCl9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0NDhcclxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHQ8L25hdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb247XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLXNwYWNlcy1hbmQtdGFicyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L25vLWltZy1lbGVtZW50ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi8uLi9zdG9yZS9HbG9iYWxTdGF0ZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGZpbHRlclNlYXJjaCBmcm9tICcuLi8uLi91dGlscy9maWx0ZXJTZWFyY2gnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGFpbHdpbmQvSGVhZGVyJztcclxuaW1wb3J0IHsgRXllSWNvbiwgRXllT2ZmSWNvbiwgUGVuY2lsQWx0SWNvbiwgVHJhc2hJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lJztcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uJztcclxuXHJcbmZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBlbmQpIHtcclxuXHRyZXR1cm4gQXJyYXkoZW5kIC0gc3RhcnQgKyAxKVxyXG5cdFx0LmZpbGwoKVxyXG5cdFx0Lm1hcCgoXywgaWR4KSA9PiBzdGFydCArIGlkeCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5Qcm9kdWN0TWFuYWdlcigpIHtcclxuXHRjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcblx0Y29uc3QgeyBjYXRlZ29yaWVzLCBhdXRoIH0gPSBzdGF0ZTtcclxuXHRjb25zdCB7IHVzZXIgfSA9IGF1dGg7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoeyBhbGw6IHRydWUsIGhpZGRlbjogZmFsc2UsIGFjdDogZmFsc2UgfSk7XHJcblx0Y29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKDApO1xyXG5cdGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG5cdGNvbnN0IFtsaW1pdE51bWJlciwgc2V0TGltaXROdW1iZXJdID0gdXNlU3RhdGUoMTApO1xyXG5cdGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcblxyXG5cdGNvbnN0IGNhdGVnb3J5USA9IHJvdXRlci5xdWVyeS5jYXRlZ29yeSB8fCAnYWxsJztcclxuXHRjb25zdCBzb3J0ID0gcm91dGVyLnF1ZXJ5LnNvcnQgfHwgJyc7XHJcblx0Y29uc3Qgc2VhcmNoID0gcm91dGVyLnF1ZXJ5LnNlYXJjaCB8fCAnYWxsJztcclxuXHRjb25zdCBsaW1pdCA9IHJvdXRlci5xdWVyeS5saW1pdCB8fCBsaW1pdE51bWJlcjtcclxuXHJcblx0Y29uc3QgaW5kZXhQYWdlID0gcmVzdWx0ICUgbGltaXQgPT09IDAgPyAwIDogMTtcclxuXHRjb25zdCBtYXhQYWdlID0gKHJlc3VsdCAtIChyZXN1bHQgJSBsaW1pdCkpIC8gbGltaXQgKyBpbmRleFBhZ2U7XHJcblxyXG5cdGNvbnN0IHRvdGFsUGFnZSA9IHJhbmdlKDEsIG1heFBhZ2UpO1xyXG5cclxuXHRsZXQgbmV3VG90YWxQYWdlID0gW107XHJcblxyXG5cdGlmIChtYXhQYWdlID4gNikge1xyXG5cdFx0aWYgKGN1cnJlbnRQYWdlID49IDMgJiYgY3VycmVudFBhZ2UgPD0gbWF4UGFnZSAtIDMpIHtcclxuXHRcdFx0bmV3VG90YWxQYWdlLnB1c2goY3VycmVudFBhZ2UgLSAyKTtcclxuXHRcdFx0bmV3VG90YWxQYWdlLnB1c2goY3VycmVudFBhZ2UgLSAxKTtcclxuXHRcdFx0bmV3VG90YWxQYWdlLnB1c2goY3VycmVudFBhZ2UpO1xyXG5cdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChjdXJyZW50UGFnZSArIDEpO1xyXG5cdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChjdXJyZW50UGFnZSArIDIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKGN1cnJlbnRQYWdlID4gbWF4UGFnZSAtIDMpIHtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChtYXhQYWdlIC0gNSk7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2gobWF4UGFnZSAtIDQpO1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKG1heFBhZ2UgLSAzKTtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChtYXhQYWdlIC0gMik7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2gobWF4UGFnZSAtIDEpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKDEpO1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKDIpO1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKDMpO1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKDQpO1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKDUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoY3VycmVudFBhZ2UgPCBtYXhQYWdlIC0gMykge1xyXG5cdFx0XHRuZXdUb3RhbFBhZ2UucHVzaCgnLi4uJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0bmV3VG90YWxQYWdlLnB1c2gobWF4UGFnZSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2VUaXRsZSA9IGUgPT4ge1xyXG5cdFx0c2V0TmFtZShlLnRhcmdldC52YWx1ZSk7XHJcblx0XHRmaWx0ZXJTZWFyY2goeyByb3V0ZXIsIHNlYXJjaDogZS50YXJnZXQudmFsdWUsIHBhZ2U6IDEgfSk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVDaGFuZ2VDYXRlZ29yeSA9IGUgPT4ge1xyXG5cdFx0c2V0Q2F0ZWdvcnkoZS50YXJnZXQudmFsdWUpO1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBjYXRlZ29yeTogZS50YXJnZXQudmFsdWUsIHBhZ2U6IDEgfSk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVTZWFyY2hCdG4gPSAoKSA9PiB7XHJcblx0XHRpZiAoYWN0aXZlLmFsbCkge1xyXG5cdFx0XHRnZXRQcm9kdWN0cygxLCAnZ2V0TGlzdGVkJywgY2F0ZWdvcnksIG5hbWUpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGFjdGl2ZS5hY3QpIHtcclxuXHRcdFx0Z2V0UHJvZHVjdHMoMSwgJ2dldEFjdGl2ZScsIGNhdGVnb3J5LCBuYW1lKTtcclxuXHRcdH1cclxuXHRcdGlmIChhY3RpdmUuaGlkZGVuKSB7XHJcblx0XHRcdGdldFByb2R1Y3RzKDEsICdnZXRVbkxpc3RlZCcsIGNhdGVnb3J5LCBuYW1lKTtcclxuXHRcdH1cclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgc2VhcmNoOiAnYWxsJyB9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBnZXRQcm9kdWN0cyA9IGFzeW5jIChpZCwgbGluaywgY2F0ZSwgc2VhcikgPT4ge1xyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0YXdhaXQgYXhpb3NcclxuXHRcdFx0XHQuZ2V0KFxyXG5cdFx0XHRcdFx0ZW5jb2RlVVJJKFxyXG5cdFx0XHRcdFx0XHRgL2FwaS9wcm9kdWN0LyR7bGlua30/cGFnZT0ke2lkID8gaWQgOiBwYWdlfSZjYXRlZ29yeT0ke1xyXG5cdFx0XHRcdFx0XHRcdGNhdGUgPyBjYXRlIDogY2F0ZWdvcnlRXHJcblx0XHRcdFx0XHRcdH0mc29ydD0ke3NvcnR9JnRpdGxlPSR7c2VhciA/IHNlYXIgOiBzZWFyY2h9JmxpbWl0PSR7bGltaXR9YFxyXG5cdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBhdXRoLnRva2VuIH0gfVxyXG5cdFx0XHRcdClcclxuXHRcdFx0XHQudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmVycikgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgZXJyb3I6IHJlcy5kYXRhLmVyciB9IH0pO1xyXG5cclxuXHRcdFx0XHRcdHNldFByb2R1Y3RzKHJlcy5kYXRhLnByb2R1Y3RzKTtcclxuXHRcdFx0XHRcdHNldFJlc3VsdChyZXMuZGF0YS5yZXN1bHQpO1xyXG5cclxuXHRcdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgZXJyb3I6IGVyci5tZXNzYWdlIH0gfSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IGdldEFsbFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuXHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0YXdhaXQgYXhpb3NcclxuXHRcdFx0XHRcdC5nZXQoXHJcblx0XHRcdFx0XHRcdGVuY29kZVVSSShcclxuXHRcdFx0XHRcdFx0XHRgL2FwaS9wcm9kdWN0L2dldExpc3RlZD9wYWdlPSR7cGFnZX0mY2F0ZWdvcnk9JHtjYXRlZ29yeVF9JnNvcnQ9JHtzb3J0fSZ0aXRsZT0ke3NlYXJjaH0mbGltaXQ9JHtsaW1pdH1gXHJcblx0XHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHRcdHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBhdXRoLnRva2VuIH0gfVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0LnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmVycikgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0c2V0UHJvZHVjdHMocmVzLmRhdGEucHJvZHVjdHMpO1xyXG5cdFx0XHRcdFx0XHRzZXRSZXN1bHQocmVzLmRhdGEucmVzdWx0KTtcclxuXHJcblx0XHRcdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGlmICh1c2VyICYmIHVzZXIucm9sZSA9PT0gJ2FkbWluJykgZ2V0QWxsUHJvZHVjdHMoKTtcclxuXHR9LCBbdXNlcl0pO1xyXG5cclxuXHRjb25zdCBoYW5kbGVBbGwgPSAoKSA9PiB7XHJcblx0XHRnZXRQcm9kdWN0cygxLCAnZ2V0TGlzdGVkJyk7XHJcblx0XHRzZXRDdXJyZW50UGFnZSgxKTtcclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgcGFnZTogMSB9KTtcclxuXHRcdHNldEFjdGl2ZSh7IGFsbDogdHJ1ZSwgaGlkZGVuOiBmYWxzZSwgYWN0OiBmYWxzZSB9KTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZUhpZGRlbiA9ICgpID0+IHtcclxuXHRcdGdldFByb2R1Y3RzKDEsICdnZXRVbkxpc3RlZCcpO1xyXG5cdFx0c2V0Q3VycmVudFBhZ2UoMSk7XHJcblx0XHRmaWx0ZXJTZWFyY2goeyByb3V0ZXIsIHBhZ2U6IDEgfSk7XHJcblx0XHRzZXRBY3RpdmUoeyBhbGw6IGZhbHNlLCBoaWRkZW46IHRydWUsIGFjdDogZmFsc2UgfSk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVBY3RpdmUgPSAoKSA9PiB7XHJcblx0XHRnZXRQcm9kdWN0cygxLCAnZ2V0QWN0aXZlJyk7XHJcblx0XHRzZXRDdXJyZW50UGFnZSgxKTtcclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgcGFnZTogMSB9KTtcclxuXHRcdHNldEFjdGl2ZSh7IGFsbDogZmFsc2UsIGhpZGRlbjogZmFsc2UsIGFjdDogdHJ1ZSB9KTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZURlbGV0ZSA9IGlkID0+IHtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0FERF9NT0RBTCcsXHJcblx0XHRcdHBheWxvYWQ6IHsgaWQsIHRva2VuOiBhdXRoLnRva2VuLCB0eXBlOiAnUFJPRFVDVCcsIHJvbGU6IGF1dGgudXNlci5yb2xlIH0sXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZUVkaXQgPSAoaWQsIGlzRGVsZXRlZCkgPT4ge1xyXG5cdFx0aWYgKGlzRGVsZXRlZCkgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgZXJyb3I6ICdWdWkgbMOybmcgYuG7jyDhuqluIMSR4buDIGNo4buJbmggc+G7rWEuJyB9IH0pO1xyXG5cdFx0cm91dGVyLnB1c2goYC9jcmVhdGUvJHtpZH1gKTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZVNob3cgPSBhc3luYyAoaWQsIGlzRGVsZXRlZCkgPT4ge1xyXG5cdFx0aWYgKCFpc0RlbGV0ZWQpIHJldHVybjtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGF3YWl0IGF4aW9zXHJcblx0XHRcdFx0LnBhdGNoKGAvYXBpL3Byb2R1Y3QvJHtpZH1gLCBudWxsLCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYXV0aC50b2tlbiB9IH0pXHJcblx0XHRcdFx0LnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5lcnIpIHJldHVybjtcclxuXHJcblx0XHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGVycm9yOiBlcnIubWVzc2FnZSB9IH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVBhZ2luYXRpb24gPSBlID0+IHtcclxuXHRcdGNvbnN0IGluZGV4ID0gTnVtYmVyKGUudGFyZ2V0LmlubmVySFRNTCk7XHJcblx0XHRmaWx0ZXJTZWFyY2goeyByb3V0ZXIsIHBhZ2U6IGluZGV4IH0pO1xyXG5cdFx0c2V0Q3VycmVudFBhZ2UoaW5kZXgpO1xyXG5cdFx0c2V0UGFnZShpbmRleCk7XHJcblxyXG5cdFx0aWYgKGFjdGl2ZS5hbGwpIHtcclxuXHRcdFx0Z2V0UHJvZHVjdHMoaW5kZXgsICdnZXRMaXN0ZWQnKTtcclxuXHRcdH1cclxuXHRcdGlmIChhY3RpdmUuYWN0KSB7XHJcblx0XHRcdGdldFByb2R1Y3RzKGluZGV4LCAnZ2V0QWN0aXZlJyk7XHJcblx0XHR9XHJcblx0XHRpZiAoYWN0aXZlLmhpZGRlbikge1xyXG5cdFx0XHRnZXRQcm9kdWN0cyhpbmRleCwgJ2dldFVuTGlzdGVkJyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVQcmV2aW91c1BhZ2UgPSAoKSA9PiB7XHJcblx0XHRmaWx0ZXJTZWFyY2goeyByb3V0ZXIsIHBhZ2U6IGN1cnJlbnRQYWdlIC0gMSB9KTtcclxuXHRcdHNldEN1cnJlbnRQYWdlKGN1cnJlbnRQYWdlIC0gMSk7XHJcblx0XHRpZiAoYWN0aXZlLmFsbCkge1xyXG5cdFx0XHRnZXRQcm9kdWN0cyhjdXJyZW50UGFnZSAtIDEsICdnZXRMaXN0ZWQnKTtcclxuXHRcdH1cclxuXHRcdGlmIChhY3RpdmUuYWN0KSB7XHJcblx0XHRcdGdldFByb2R1Y3RzKGN1cnJlbnRQYWdlIC0gMSwgJ2dldEFjdGl2ZScpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGFjdGl2ZS5oaWRkZW4pIHtcclxuXHRcdFx0Z2V0UHJvZHVjdHMoY3VycmVudFBhZ2UgLSAxLCAnZ2V0VW5MaXN0ZWQnKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZU5leHRQYWdlID0gKCkgPT4ge1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBwYWdlOiBjdXJyZW50UGFnZSArIDEgfSk7XHJcblx0XHRzZXRDdXJyZW50UGFnZShjdXJyZW50UGFnZSArIDEpO1xyXG5cdFx0aWYgKGFjdGl2ZS5hbGwpIHtcclxuXHRcdFx0Z2V0UHJvZHVjdHMoY3VycmVudFBhZ2UgKyAxLCAnZ2V0TGlzdGVkJyk7XHJcblx0XHR9XHJcblx0XHRpZiAoYWN0aXZlLmFjdCkge1xyXG5cdFx0XHRnZXRQcm9kdWN0cyhjdXJyZW50UGFnZSArIDEsICdnZXRBY3RpdmUnKTtcclxuXHRcdH1cclxuXHRcdGlmIChhY3RpdmUuaGlkZGVuKSB7XHJcblx0XHRcdGdldFByb2R1Y3RzKGN1cnJlbnRQYWdlICsgMSwgJ2dldFVuTGlzdGVkJyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0aWYgKCF1c2VyIHx8IHVzZXIucm9sZSAhPT0gJ2FkbWluJykgcmV0dXJuIG51bGw7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nYmctZ3JheS0xMDAgbWluLWgtc2NyZWVuJz5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PHRpdGxlPlF14bqjbiBsw70gc+G6o24gcGjhuqltPC90aXRsZT5cclxuXHRcdFx0PC9IZWFkPlxyXG5cclxuXHRcdFx0PEhlYWRlciAvPlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J21heC13LXNjcmVlbi0yeGwgbXgtYXV0byBiZy13aGl0ZSBwLTUnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktZXZlbmx5IHB4LTMgcHQtMyB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTYwMCBib3JkZXItYi0yIHBiLTQgYm9yZGVyLWdyYXktMzAwJz5cclxuXHRcdFx0XHRcdDxoNVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVBbGx9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGhvdmVyOm91dGxpbmUtYmxhY2tfc29saWQgcC0yICR7XHJcblx0XHRcdFx0XHRcdFx0YWN0aXZlLmFsbCA/ICd0ZXh0LXJlZC00MDAnIDogJ2N1cnNvci1wb2ludGVyJ1xyXG5cdFx0XHRcdFx0XHR9YH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0VOG6pXQgY+G6o1xyXG5cdFx0XHRcdFx0PC9oNT5cclxuXHJcblx0XHRcdFx0XHQ8aDVcclxuXHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlQWN0aXZlfVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bob3ZlcjpvdXRsaW5lLWJsYWNrX3NvbGlkIHAtMiAke1xyXG5cdFx0XHRcdFx0XHRcdGFjdGl2ZS5hY3QgPyAndGV4dC1yZWQtNDAwJyA6ICdjdXJzb3ItcG9pbnRlcidcclxuXHRcdFx0XHRcdFx0fWB9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdMSQYW5nIGhv4bqhdCDEkeG7mW5nXHJcblx0XHRcdFx0XHQ8L2g1PlxyXG5cclxuXHRcdFx0XHRcdDxoNVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVIaWRkZW59XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGhvdmVyOm91dGxpbmUtYmxhY2tfc29saWQgcC0yICR7XHJcblx0XHRcdFx0XHRcdFx0YWN0aXZlLmhpZGRlbiA/ICd0ZXh0LXJlZC00MDAnIDogJ2N1cnNvci1wb2ludGVyJ1xyXG5cdFx0XHRcdFx0XHR9YH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0xJDDoyDhuqluXHJcblx0XHRcdFx0XHQ8L2g1PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBpdGVtcy1jZW50ZXIgcC01IHNwYWNlLXktNCBsZzpzcGFjZS14LTEwIGxnOnNwYWNlLXktMCc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNSc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPScnPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1sZyBmb250LXNlbWlib2xkJz5Uw6puIHPhuqNuIHBo4bqpbTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwLTMgcm91bmRlZC1tZCBmbGV4LWdyb3cnXHJcblx0XHRcdFx0XHRcdFx0bmFtZT0nbmFtZSdcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17bmFtZX1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlVGl0bGV9XHJcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J05o4bqtcCB0w6puJ1xyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctZnVsbCc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IHNwYWNlLXgtNSBpdGVtcy1jZW50ZXInPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1sZyBmb250LXNlbWlib2xkJz5EYW5oIG3hu6VjPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDxzZWxlY3RcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J2NhdGVnb3J5J1xyXG5cdFx0XHRcdFx0XHRcdFx0aWQ9J2NhdGVnb3J5J1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2NhdGVnb3J5fVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZUNhdGVnb3J5fVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmbGV4LWdyb3cgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwLTMgcm91bmRlZC1tZCBjYXBpdGFsaXplJ1xyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9J2FsbCc+LS0gVOG6pXQgY+G6oyAtLTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0e2NhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBrZXk9e2NhdGVnb3J5Ll9pZH0gdmFsdWU9e2NhdGVnb3J5Ll9pZH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e2NhdGVnb3J5Lm5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdidXR0b24gdy0zNiBjdXJzb3ItcG9pbnRlciBmbGV4IGp1c3RpZnktY2VudGVyJz5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPScnIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaEJ0bn0+XHJcblx0XHRcdFx0XHRcdFTDrG0ga2nhur9tXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgc3BhY2UteS0zIGxnOnNwYWNlLXktMCBsZzpqdXN0aWZ5LWJldHdlZW4gbXktNCc+XHJcblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPSd0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMCc+XHJcblx0XHRcdFx0XHRcdHtwcm9kdWN0cy5sZW5ndGggKiBjdXJyZW50UGFnZSA8IGxpbWl0ICogY3VycmVudFBhZ2VcclxuXHRcdFx0XHRcdFx0XHQ/IHJlc3VsdFxyXG5cdFx0XHRcdFx0XHRcdDogcHJvZHVjdHMubGVuZ3RoICogY3VycmVudFBhZ2V9XHJcblx0XHRcdFx0XHRcdC97cmVzdWx0fSBT4bqjbiBQaOG6qW1cclxuXHRcdFx0XHRcdDwvaDE+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2J1dHRvbi1ibHVlIG1heC13LXNtIGZsZXgganVzdGlmeS1jZW50ZXIgcC0zJz5cclxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2NyZWF0ZSc+XHJcblx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPScnPisgVGjDqm0gc+G6o24gcGjhuqltIG3hu5tpPC9hPlxyXG5cdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctZnVsbCBvdmVyZmxvdy14LWF1dG8nPlxyXG5cdFx0XHRcdFx0PHRhYmxlIGNsYXNzTmFtZT0nJz5cclxuXHRcdFx0XHRcdFx0PHRoZWFkPlxyXG5cdFx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT17eyBtaW5XaWR0aDogNDAwIH19PlTDqm4gc+G6o24gcGjhuqltPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT17eyBtaW5XaWR0aDogODAgfX0+R2nDoTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3sgbWluV2lkdGg6IDgwIH19PktobzwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3sgbWluV2lkdGg6IDgwIH19PsSQw6MgYsOhbjwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3sgbWluV2lkdGg6IDEwMCB9fT5DaOG7iW5oIHPhu61hPC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHRcdFx0XHQ8dGJvZHk+XHJcblx0XHRcdFx0XHRcdFx0e3Byb2R1Y3RzLm1hcChpdGVtID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDx0ciBrZXk9e2l0ZW0uX2lkfSBjbGFzc05hbWU9J2JvcmRlci1iIGJvcmRlci1ncmF5LTMwMCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBweS00IHNwYWNlLXgtMmB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17aXRlbS5pbWFnZXNbMF0udXJsfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PSfhuqJuaCBiw6xhJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgJHtpdGVtLmRlbGV0ZWQgPyAnb3BhY2l0eS00MCcgOiAnJ31gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgaGVpZ2h0OiA1MCwgd2lkdGg6IDUwIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0uZGVsZXRlZCAmJiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzbWFsbCBjbGFzc05hbWU9J3RleHQtcmVkLTMwMCc+xJDDoyDhuqluPC9zbWFsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2NhcGl0YWxpemUnPntpdGVtLnRpdGxlfTwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT0ndGV4dC1yZWQtNDAwIGFsaWduLW1pZGRsZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNtYWxsPiYjeDIwQUI7PC9zbWFsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5wcmljZVNhbGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC50b1N0cmluZygpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJy4nKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9J3RleHQtY2VudGVyJz57aXRlbS5pblN0b2NrfTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9J3RleHQtY2VudGVyJz57aXRlbS5zb2xkfTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFBlbmNpbEFsdEljb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVFZGl0KGl0ZW0uX2lkLCBpdGVtLmRlbGV0ZWQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdoLTUgdGV4dC1ibHVlLTUwMCBjdXJzb3ItcG9pbnRlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0uZGVsZXRlZCA/IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEV5ZU9mZkljb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlU2hvdyhpdGVtLl9pZCwgaXRlbS5kZWxldGVkKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BoLTUgdGV4dC1yZWQtNTAwICR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpdGVtLmRlbGV0ZWQgPyAnY3Vyc29yLXBvaW50ZXInIDogJydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxFeWVJY29uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZVNob3coaXRlbS5faWQsIGl0ZW0uZGVsZXRlZClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgaC01IHRleHQtZ3JlZW4tNTAwICR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpdGVtLmRlbGV0ZWQgPyAnY3Vyc29yLXBvaW50ZXInIDogJydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2FjdGl2ZS5oaWRkZW4gJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VHJhc2hJY29uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdoLTUgdGV4dC1yZWQtNTAwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShpdGVtLl9pZCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0XHRcdDwvdGFibGU+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxQYWdpbmF0aW9uIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImZpbHRlclNlYXJjaCIsInJhbmdlIiwic3RhcnQiLCJlbmQiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaWR4IiwiUGFnaW5hdGlvbiIsInJlc3VsdCIsInJvdXRlciIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJsaW1pdE51bWJlciIsInNldExpbWl0TnVtYmVyIiwiaW5kZXhQYWdlIiwibWF4UGFnZSIsIk9iamVjdCIsImtleXMiLCJxdWVyeSIsImxlbmd0aCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwibHRkIiwiZ2V0SXRlbSIsIk51bWJlciIsInRvdGFsUGFnZSIsIm5ld1RvdGFsUGFnZSIsInB1c2giLCJoYW5kbGVQYWdpbmF0aW9uIiwiZSIsInBhZ2UiLCJ0YXJnZXQiLCJpbm5lckhUTUwiLCJoYW5kbGVQcmV2aW91c1BhZ2UiLCJoYW5kbGVOZXh0UGFnZSIsImhhbmRsZUxpbWl0IiwidmFsdWUiLCJsaW1pdCIsInVzZUNvbnRleHQiLCJIZWFkIiwiRGF0YUNvbnRleHQiLCJMaW5rIiwiYXhpb3MiLCJIZWFkZXIiLCJFeWVJY29uIiwiRXllT2ZmSWNvbiIsIlBlbmNpbEFsdEljb24iLCJUcmFzaEljb24iLCJNYWluUHJvZHVjdE1hbmFnZXIiLCJzdGF0ZSIsImRpc3BhdGNoIiwiY2F0ZWdvcmllcyIsImF1dGgiLCJ1c2VyIiwibmFtZSIsInNldE5hbWUiLCJjYXRlZ29yeSIsInNldENhdGVnb3J5IiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImFsbCIsImhpZGRlbiIsImFjdCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInNldFJlc3VsdCIsInNldFBhZ2UiLCJjYXRlZ29yeVEiLCJzb3J0Iiwic2VhcmNoIiwiaGFuZGxlQ2hhbmdlVGl0bGUiLCJoYW5kbGVDaGFuZ2VDYXRlZ29yeSIsImhhbmRsZVNlYXJjaEJ0biIsImdldFByb2R1Y3RzIiwiaWQiLCJsaW5rIiwiY2F0ZSIsInNlYXIiLCJ0eXBlIiwicGF5bG9hZCIsImxvYWRpbmciLCJnZXQiLCJlbmNvZGVVUkkiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwidGhlbiIsInJlcyIsImRhdGEiLCJlcnIiLCJlcnJvciIsIm1lc3NhZ2UiLCJnZXRBbGxQcm9kdWN0cyIsInJvbGUiLCJoYW5kbGVBbGwiLCJoYW5kbGVIaWRkZW4iLCJoYW5kbGVBY3RpdmUiLCJoYW5kbGVEZWxldGUiLCJoYW5kbGVFZGl0IiwiaXNEZWxldGVkIiwiaGFuZGxlU2hvdyIsInBhdGNoIiwiaW5kZXgiLCJfaWQiLCJtaW5XaWR0aCIsIml0ZW0iLCJpbWFnZXMiLCJ1cmwiLCJkZWxldGVkIiwiaGVpZ2h0Iiwid2lkdGgiLCJ0aXRsZSIsInByaWNlU2FsZSIsInRvU3RyaW5nIiwicmVwbGFjZSIsImluU3RvY2siLCJzb2xkIl0sInNvdXJjZVJvb3QiOiIifQ==