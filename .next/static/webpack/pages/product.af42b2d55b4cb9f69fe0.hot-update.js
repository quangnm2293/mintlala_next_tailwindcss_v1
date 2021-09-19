"use strict";
self["webpackHotUpdate_N_E"]("pages/product",{

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










function MainProductManager() {
  _s();

  var _this = this;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_store_GlobalState__WEBPACK_IMPORTED_MODULE_5__.DataContext),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var categories = state.categories,
      auth = state.auth;
  var user = auth.user,
      token = auth.token;
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

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('getListed'),
      urlReq = _useState6[0],
      setUrlReq = _useState6[1];

  var categoryQ = router.query.category || 'all';
  var sort = router.query.sort || '';
  var search = router.query.search || 'all';
  var page = router.query.page || 1;
  var limit = router.query.limit || 12;

  var handleChangeTitle = function handleChangeTitle(e) {
    setName(e.target.value);
    console.log(e.target.value);
    (0,_utils_filterSearch__WEBPACK_IMPORTED_MODULE_9__.default)({
      router: router,
      search: e.target.value === '' ? 'all' : e.target.value,
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
    (0,_utils_filterSearch__WEBPACK_IMPORTED_MODULE_9__.default)({
      router: router,
      search: 'all'
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var getAllProducts = /*#__PURE__*/function () {
      var _ref = (0,E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
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
                return axios__WEBPACK_IMPORTED_MODULE_8___default().get(encodeURI("/api/product/".concat(urlReq, "?page=").concat(page, "&category=").concat(categoryQ, "&sort=").concat(sort, "&title=").concat(search, "&limit=").concat(limit)), {
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
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](1);
                dispatch({
                  type: 'NOTIFY',
                  payload: {}
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 6]]);
      }));

      return function getAllProducts() {
        return _ref.apply(this, arguments);
      };
    }();

    if (user && user.role === 'admin') getAllProducts();
  }, [router.query, urlReq]);

  var handleAll = function handleAll() {
    setUrlReq('getListed');
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
    setUrlReq('getUnListed');
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
    setUrlReq('getActive');
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

  var handleHiddenProduct = /*#__PURE__*/function () {
    var _ref2 = (0,E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(id) {
      return E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_8___default().delete("/api/product/".concat(id), {
                headers: {
                  Authorization: token
                }
              }).then(function (res) {
                if (res.data.err) return dispatch({
                  type: 'NOTIFY',
                  payload: {}
                });
                dispatch({
                  type: 'NOTIFY',
                  payload: {}
                });
                var cartLocal = JSON.parse(localStorage.getItem('cart_mintlala'));
                cartLocal.map(function (item, index) {
                  if (item._id === id) {
                    cartLocal.splice(index, 1);
                  }
                });
                localStorage.setItem('cart_mintlala', JSON.stringify(cartLocal));
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleHiddenProduct(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleEdit = function handleEdit(id) {
    router.push("/create/".concat(id));
  };

  var handleShow = /*#__PURE__*/function () {
    var _ref3 = (0,E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(id) {
      return E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
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

            case 3:
              _context3.next = 8;
              break;

            case 5:
              _context3.prev = 5;
              _context3.t0 = _context3["catch"](0);
              dispatch({
                type: 'NOTIFY',
                payload: {
                  error: _context3.t0.message
                }
              });

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 5]]);
    }));

    return function handleShow(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleHardDelete = /*#__PURE__*/function () {
    var _ref4 = (0,E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(id) {
      return E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              console.log(id);

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function handleHardDelete(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  if (!user || user.role !== 'admin') return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "bg-gray-100 min-h-screen",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Qu\u1EA3n l\xFD s\u1EA3n ph\u1EA9m"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tailwind_Header__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "max-w-screen-2xl mx-auto bg-white p-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex justify-evenly px-3 pt-3 text-xl font-semibold text-gray-600 border-b-2 pb-4 border-gray-300",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
          onClick: handleAll,
          className: "hover:outline-black_solid p-2 cursor-pointer ".concat(active.all ? 'text-red-400' : ''),
          children: "T\u1EA5t c\u1EA3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
          onClick: handleActive,
          className: "hover:outline-black_solid p-2 cursor-pointer ".concat(active.act ? 'text-red-400' : ''),
          children: "\u0110ang ho\u1EA1t \u0111\u1ED9ng"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
          onClick: handleHidden,
          className: "hover:outline-black_solid p-2 cursor-pointer ".concat(active.hidden ? 'text-red-400' : ''),
          children: "\u0110\xE3 \u1EA9n"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
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
              lineNumber: 170,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
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
            lineNumber: 173,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 168,
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
              lineNumber: 185,
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
                lineNumber: 193,
                columnNumber: 9
              }, this), categories.map(function (category) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  value: category._id,
                  children: category.name
                }, category._id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 10
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "button w-36 cursor-pointer flex justify-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "",
          onClick: handleSearchBtn,
          children: "T\xECm ki\u1EBFm"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:justify-between my-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "text-xl font-semibold text-gray-700",
          children: [limit * page > result ? result : limit * page, "/", result, " S\u1EA3n Ph\u1EA9m"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 211,
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
              lineNumber: 217,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 210,
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
                lineNumber: 226,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 80
                },
                children: "Gi\xE1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 227,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 80
                },
                children: "Kho"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 80
                },
                children: "\u0110\xE3 b\xE1n"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 100
                },
                children: "Ch\u1EC9nh s\u1EEDa"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 230,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 224,
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
                    lineNumber: 237,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex flex-col",
                    children: [item.deleted && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
                      className: "text-red-300",
                      children: "\u0110\xE3 \u1EA9n"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 246,
                      columnNumber: 13
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                      className: "capitalize",
                      children: item.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 248,
                      columnNumber: 12
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 244,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 251,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 236,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "text-red-400 align-middle",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
                    children: "\u20AB"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 255,
                    columnNumber: 11
                  }, _this), item.priceSale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 254,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "text-center",
                  children: item.inStock
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 261,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "text-center",
                  children: item.sold
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 262,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "text-center",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex justify-center space-x-3",
                    children: [!item.deleted && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.PencilAltIcon, {
                      onClick: function onClick() {
                        return handleEdit(item._id, item.deleted);
                      },
                      className: "h-5 text-blue-500 cursor-pointer"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 266,
                      columnNumber: 13
                    }, _this), item.deleted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.EyeOffIcon, {
                      onClick: function onClick() {
                        return handleShow(item._id, item.deleted);
                      },
                      className: "h-5 text-red-500 cursor-pointer"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 275,
                      columnNumber: 13
                    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.EyeIcon, {
                      onClick: function onClick() {
                        return handleHiddenProduct(item._id);
                      },
                      className: "h-5 text-green-500 cursor-pointer"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 282,
                      columnNumber: 13
                    }, _this), active.hidden && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.TrashIcon, {
                      className: "h-5 text-red-500",
                      onClick: function onClick() {
                        return handleHardDelete(item._id);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 291,
                      columnNumber: 13
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 264,
                    columnNumber: 11
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 263,
                  columnNumber: 10
                }, _this)]
              }, item._id, true, {
                fileName: _jsxFileName,
                lineNumber: 235,
                columnNumber: 9
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_12__.default, {
        result: result
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 130,
    columnNumber: 3
  }, this);
}

_s(MainProductManager, "0tD98x7jBAU+xsEyggHfp/sUgbQ=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC5hZjQyYjJkNTViNGNiOWY2OWZlMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNnQixrQkFBVCxHQUE4QjtBQUFBOztBQUFBOztBQUFBLG9CQUNoQmYsaURBQVUsQ0FBQ0ksMkRBQUQsQ0FETTtBQUFBLE1BQ3BDWSxLQURvQyxlQUNwQ0EsS0FEb0M7QUFBQSxNQUM3QkMsUUFENkIsZUFDN0JBLFFBRDZCOztBQUFBLE1BRXBDQyxVQUZvQyxHQUVmRixLQUZlLENBRXBDRSxVQUZvQztBQUFBLE1BRXhCQyxJQUZ3QixHQUVmSCxLQUZlLENBRXhCRyxJQUZ3QjtBQUFBLE1BR3BDQyxJQUhvQyxHQUdwQkQsSUFIb0IsQ0FHcENDLElBSG9DO0FBQUEsTUFHOUJDLEtBSDhCLEdBR3BCRixJQUhvQixDQUc5QkUsS0FIOEI7QUFJNUMsTUFBTUMsTUFBTSxHQUFHakIsc0RBQVMsRUFBeEI7O0FBSjRDLGtCQU1wQkgsK0NBQVEsQ0FBQyxFQUFELENBTlk7QUFBQSxNQU1yQ3FCLElBTnFDO0FBQUEsTUFNL0JDLE9BTitCOztBQUFBLG1CQU9adEIsK0NBQVEsQ0FBQyxFQUFELENBUEk7QUFBQSxNQU9yQ3VCLFFBUHFDO0FBQUEsTUFPM0JDLFdBUDJCOztBQUFBLG1CQVFaeEIsK0NBQVEsQ0FBQyxFQUFELENBUkk7QUFBQSxNQVFyQ3lCLFFBUnFDO0FBQUEsTUFRM0JDLFdBUjJCOztBQUFBLG1CQVNoQjFCLCtDQUFRLENBQUM7QUFBRTJCLElBQUFBLEdBQUcsRUFBRSxJQUFQO0FBQWFDLElBQUFBLE1BQU0sRUFBRSxLQUFyQjtBQUE0QkMsSUFBQUEsR0FBRyxFQUFFO0FBQWpDLEdBQUQsQ0FUUTtBQUFBLE1BU3JDQyxNQVRxQztBQUFBLE1BUzdCQyxTQVQ2Qjs7QUFBQSxtQkFVaEIvQiwrQ0FBUSxDQUFDLENBQUQsQ0FWUTtBQUFBLE1BVXJDZ0MsTUFWcUM7QUFBQSxNQVU3QkMsU0FWNkI7O0FBQUEsbUJBWWhCakMsK0NBQVEsQ0FBQyxXQUFELENBWlE7QUFBQSxNQVlyQ2tDLE1BWnFDO0FBQUEsTUFZN0JDLFNBWjZCOztBQWM1QyxNQUFNQyxTQUFTLEdBQUdoQixNQUFNLENBQUNpQixLQUFQLENBQWFkLFFBQWIsSUFBeUIsS0FBM0M7QUFDQSxNQUFNZSxJQUFJLEdBQUdsQixNQUFNLENBQUNpQixLQUFQLENBQWFDLElBQWIsSUFBcUIsRUFBbEM7QUFDQSxNQUFNQyxNQUFNLEdBQUduQixNQUFNLENBQUNpQixLQUFQLENBQWFFLE1BQWIsSUFBdUIsS0FBdEM7QUFDQSxNQUFNQyxJQUFJLEdBQUdwQixNQUFNLENBQUNpQixLQUFQLENBQWFHLElBQWIsSUFBcUIsQ0FBbEM7QUFDQSxNQUFNQyxLQUFLLEdBQUdyQixNQUFNLENBQUNpQixLQUFQLENBQWFJLEtBQWIsSUFBc0IsRUFBcEM7O0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBQyxDQUFDLEVBQUk7QUFDOUJyQixJQUFBQSxPQUFPLENBQUNxQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFQO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBckI7QUFDQXZDLElBQUFBLDREQUFZLENBQUM7QUFBRWMsTUFBQUEsTUFBTSxFQUFOQSxNQUFGO0FBQVVtQixNQUFBQSxNQUFNLEVBQUVJLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULEtBQW1CLEVBQW5CLEdBQXdCLEtBQXhCLEdBQWdDRixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBM0Q7QUFBa0VMLE1BQUFBLElBQUksRUFBRTtBQUF4RSxLQUFELENBQVo7QUFDQSxHQUpEOztBQUtBLE1BQU1RLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQUwsQ0FBQyxFQUFJO0FBQ2pDbkIsSUFBQUEsV0FBVyxDQUFDbUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUNBdkMsSUFBQUEsNERBQVksQ0FBQztBQUFFYyxNQUFBQSxNQUFNLEVBQU5BLE1BQUY7QUFBVUcsTUFBQUEsUUFBUSxFQUFFb0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQTdCO0FBQW9DTCxNQUFBQSxJQUFJLEVBQUU7QUFBMUMsS0FBRCxDQUFaO0FBQ0EsR0FIRDs7QUFJQSxNQUFNUyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDN0IzQyxJQUFBQSw0REFBWSxDQUFDO0FBQUVjLE1BQUFBLE1BQU0sRUFBTkEsTUFBRjtBQUFVbUIsTUFBQUEsTUFBTSxFQUFFO0FBQWxCLEtBQUQsQ0FBWjtBQUNBLEdBRkQ7O0FBSUF4QyxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZixRQUFNbUQsY0FBYztBQUFBLCtVQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdEJuQyxnQkFBQUEsUUFBUSxDQUFDO0FBQUVvQyxrQkFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0JDLGtCQUFBQSxPQUFPLEVBQUU7QUFBRUMsb0JBQUFBLE9BQU8sRUFBRTtBQUFYO0FBQTNCLGlCQUFELENBQVI7QUFEc0I7QUFBQTtBQUFBLHVCQUlmaEQsZ0RBQUEsQ0FFSmtELFNBQVMsd0JBQ1FyQixNQURSLG1CQUN1Qk0sSUFEdkIsdUJBQ3dDSixTQUR4QyxtQkFDMERFLElBRDFELG9CQUN3RUMsTUFEeEUsb0JBQ3dGRSxLQUR4RixFQUZMLEVBS0o7QUFBRWUsa0JBQUFBLE9BQU8sRUFBRTtBQUFFQyxvQkFBQUEsYUFBYSxFQUFFeEMsSUFBSSxDQUFDRTtBQUF0QjtBQUFYLGlCQUxJLEVBT0p1QyxJQVBJLENBT0MsVUFBQUMsR0FBRyxFQUFJO0FBQ1osc0JBQUlBLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQyxHQUFiLEVBQWtCLE9BQU85QyxRQUFRLENBQUM7QUFBRW9DLG9CQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkMsb0JBQUFBLE9BQU8sRUFBRTtBQUEzQixtQkFBRCxDQUFmO0FBRWxCMUIsa0JBQUFBLFdBQVcsQ0FBQ2lDLEdBQUcsQ0FBQ0MsSUFBSixDQUFTbkMsUUFBVixDQUFYO0FBQ0FRLGtCQUFBQSxTQUFTLENBQUMwQixHQUFHLENBQUNDLElBQUosQ0FBUzVCLE1BQVYsQ0FBVDtBQUVBakIsa0JBQUFBLFFBQVEsQ0FBQztBQUFFb0Msb0JBQUFBLElBQUksRUFBRSxRQUFSO0FBQWtCQyxvQkFBQUEsT0FBTyxFQUFFO0FBQTNCLG1CQUFELENBQVI7QUFDQSxpQkFkSSxDQUplOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFvQnJCckMsZ0JBQUFBLFFBQVEsQ0FBQztBQUFFb0Msa0JBQUFBLElBQUksRUFBRSxRQUFSO0FBQWtCQyxrQkFBQUEsT0FBTyxFQUFFO0FBQTNCLGlCQUFELENBQVI7O0FBcEJxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFkRixjQUFjO0FBQUE7QUFBQTtBQUFBLE9BQXBCOztBQXdCQSxRQUFJaEMsSUFBSSxJQUFJQSxJQUFJLENBQUM0QyxJQUFMLEtBQWMsT0FBMUIsRUFBbUNaLGNBQWM7QUFDakQsR0ExQlEsRUEwQk4sQ0FBQzlCLE1BQU0sQ0FBQ2lCLEtBQVIsRUFBZUgsTUFBZixDQTFCTSxDQUFUOztBQTRCQSxNQUFNNkIsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN2QjVCLElBQUFBLFNBQVMsQ0FBQyxXQUFELENBQVQ7QUFDQTdCLElBQUFBLDREQUFZLENBQUM7QUFBRWMsTUFBQUEsTUFBTSxFQUFOQSxNQUFGO0FBQVVvQixNQUFBQSxJQUFJLEVBQUU7QUFBaEIsS0FBRCxDQUFaO0FBQ0FULElBQUFBLFNBQVMsQ0FBQztBQUFFSixNQUFBQSxHQUFHLEVBQUUsSUFBUDtBQUFhQyxNQUFBQSxNQUFNLEVBQUUsS0FBckI7QUFBNEJDLE1BQUFBLEdBQUcsRUFBRTtBQUFqQyxLQUFELENBQVQ7QUFDQSxHQUpEOztBQUtBLE1BQU1tQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQzFCN0IsSUFBQUEsU0FBUyxDQUFDLGFBQUQsQ0FBVDtBQUNBN0IsSUFBQUEsNERBQVksQ0FBQztBQUFFYyxNQUFBQSxNQUFNLEVBQU5BLE1BQUY7QUFBVW9CLE1BQUFBLElBQUksRUFBRTtBQUFoQixLQUFELENBQVo7QUFDQVQsSUFBQUEsU0FBUyxDQUFDO0FBQUVKLE1BQUFBLEdBQUcsRUFBRSxLQUFQO0FBQWNDLE1BQUFBLE1BQU0sRUFBRSxJQUF0QjtBQUE0QkMsTUFBQUEsR0FBRyxFQUFFO0FBQWpDLEtBQUQsQ0FBVDtBQUNBLEdBSkQ7O0FBS0EsTUFBTW9DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDMUI5QixJQUFBQSxTQUFTLENBQUMsV0FBRCxDQUFUO0FBQ0E3QixJQUFBQSw0REFBWSxDQUFDO0FBQUVjLE1BQUFBLE1BQU0sRUFBTkEsTUFBRjtBQUFVb0IsTUFBQUEsSUFBSSxFQUFFO0FBQWhCLEtBQUQsQ0FBWjtBQUNBVCxJQUFBQSxTQUFTLENBQUM7QUFBRUosTUFBQUEsR0FBRyxFQUFFLEtBQVA7QUFBY0MsTUFBQUEsTUFBTSxFQUFFLEtBQXRCO0FBQTZCQyxNQUFBQSxHQUFHLEVBQUU7QUFBbEMsS0FBRCxDQUFUO0FBQ0EsR0FKRDs7QUFNQSxNQUFNcUMsbUJBQW1CO0FBQUEsOFVBQUcsa0JBQU1DLEVBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ3JCOUQsbURBQUEsd0JBQTZCOEQsRUFBN0IsR0FBbUM7QUFBRVgsZ0JBQUFBLE9BQU8sRUFBRTtBQUFFQyxrQkFBQUEsYUFBYSxFQUFFdEM7QUFBakI7QUFBWCxlQUFuQyxFQUEwRXVDLElBQTFFLENBQStFLFVBQUFDLEdBQUcsRUFBSTtBQUMzRixvQkFBSUEsR0FBRyxDQUFDQyxJQUFKLENBQVNDLEdBQWIsRUFBa0IsT0FBTzlDLFFBQVEsQ0FBQztBQUFFb0Msa0JBQUFBLElBQUksRUFBRSxRQUFSO0FBQWtCQyxrQkFBQUEsT0FBTyxFQUFFO0FBQTNCLGlCQUFELENBQWY7QUFFbEJyQyxnQkFBQUEsUUFBUSxDQUFDO0FBQUVvQyxrQkFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0JDLGtCQUFBQSxPQUFPLEVBQUU7QUFBM0IsaUJBQUQsQ0FBUjtBQUVBLG9CQUFJZ0IsU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGVBQXJCLENBQVgsQ0FBaEI7QUFDQUosZ0JBQUFBLFNBQVMsQ0FBQ0ssR0FBVixDQUFjLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUM5QixzQkFBSUQsSUFBSSxDQUFDRSxHQUFMLEtBQWFULEVBQWpCLEVBQXFCO0FBQ3BCQyxvQkFBQUEsU0FBUyxDQUFDUyxNQUFWLENBQWlCRixLQUFqQixFQUF3QixDQUF4QjtBQUNBO0FBQ0QsaUJBSkQ7QUFLQUosZ0JBQUFBLFlBQVksQ0FBQ08sT0FBYixDQUFxQixlQUFyQixFQUFzQ1QsSUFBSSxDQUFDVSxTQUFMLENBQWVYLFNBQWYsQ0FBdEM7QUFDQSxlQVpLLENBRHFCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQW5CRixtQkFBbUI7QUFBQTtBQUFBO0FBQUEsS0FBekI7O0FBZUEsTUFBTWMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQWIsRUFBRSxFQUFJO0FBQ3hCL0MsSUFBQUEsTUFBTSxDQUFDNkQsSUFBUCxtQkFBdUJkLEVBQXZCO0FBQ0EsR0FGRDs7QUFHQSxNQUFNZSxVQUFVO0FBQUEsOFVBQUcsa0JBQU1mLEVBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFWDlELGtEQUFBLHdCQUNrQjhELEVBRGxCLEdBQ3dCLElBRHhCLEVBQzhCO0FBQUVYLGdCQUFBQSxPQUFPLEVBQUU7QUFBRUMsa0JBQUFBLGFBQWEsRUFBRXhDLElBQUksQ0FBQ0U7QUFBdEI7QUFBWCxlQUQ5QixFQUVKdUMsSUFGSSxDQUVDLFVBQUFDLEdBQUcsRUFBSTtBQUNaLG9CQUFJQSxHQUFHLENBQUNDLElBQUosQ0FBU0MsR0FBYixFQUFrQjtBQUVsQjlDLGdCQUFBQSxRQUFRLENBQUM7QUFBRW9DLGtCQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkMsa0JBQUFBLE9BQU8sRUFBRTtBQUEzQixpQkFBRCxDQUFSO0FBQ0EsZUFOSSxDQUZXOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFVakJyQyxjQUFBQSxRQUFRLENBQUM7QUFBRW9DLGdCQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkMsZ0JBQUFBLE9BQU8sRUFBRTtBQUFFZ0Msa0JBQUFBLEtBQUssRUFBRSxhQUFJQztBQUFiO0FBQTNCLGVBQUQsQ0FBUjs7QUFWaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVkgsVUFBVTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUFhQSxNQUFNSSxnQkFBZ0I7QUFBQSw4VUFBRyxrQkFBTW5CLEVBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN4QnJCLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZb0IsRUFBWjs7QUFEd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBaEJtQixnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsS0FBdEI7O0FBSUEsTUFBSSxDQUFDcEUsSUFBRCxJQUFTQSxJQUFJLENBQUM0QyxJQUFMLEtBQWMsT0FBM0IsRUFBb0MsT0FBTyxJQUFQO0FBRXBDLHNCQUNDO0FBQUssYUFBUyxFQUFDLDBCQUFmO0FBQUEsNEJBQ0MsOERBQUMsa0RBQUQ7QUFBQSw2QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUtDLDhEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRCxlQU9DO0FBQUssZUFBUyxFQUFDLHVDQUFmO0FBQUEsOEJBQ0M7QUFBSyxpQkFBUyxFQUFDLG1HQUFmO0FBQUEsZ0NBQ0M7QUFDQyxpQkFBTyxFQUFFQyxTQURWO0FBRUMsbUJBQVMseURBQ1JqQyxNQUFNLENBQUNILEdBQVAsR0FBYSxjQUFiLEdBQThCLEVBRHRCLENBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFVQztBQUNDLGlCQUFPLEVBQUVzQyxZQURWO0FBRUMsbUJBQVMseURBQ1JuQyxNQUFNLENBQUNELEdBQVAsR0FBYSxjQUFiLEdBQThCLEVBRHRCLENBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkQsZUFtQkM7QUFDQyxpQkFBTyxFQUFFbUMsWUFEVjtBQUVDLG1CQUFTLHlEQUNSbEMsTUFBTSxDQUFDRixNQUFQLEdBQWdCLGNBQWhCLEdBQWlDLEVBRHpCLENBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbkJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBOEJDO0FBQUssaUJBQVMsRUFBQyxpRkFBZjtBQUFBLGdDQUNDO0FBQUssbUJBQVMsRUFBQyxvQ0FBZjtBQUFBLGtDQUNDO0FBQUsscUJBQVMsRUFBQyxFQUFmO0FBQUEsbUNBQ0M7QUFBTSx1QkFBUyxFQUFDLHVCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFLQztBQUNDLGdCQUFJLEVBQUMsTUFETjtBQUVDLHFCQUFTLEVBQUMsaURBRlg7QUFHQyxnQkFBSSxFQUFDLE1BSE47QUFJQyxpQkFBSyxFQUFFUCxJQUpSO0FBS0Msb0JBQVEsRUFBRXFCLGlCQUxYO0FBTUMsdUJBQVcsRUFBQztBQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBZ0JDO0FBQUssbUJBQVMsRUFBQyxRQUFmO0FBQUEsaUNBQ0M7QUFBSyxxQkFBUyxFQUFDLDZCQUFmO0FBQUEsb0NBQ0M7QUFBTSx1QkFBUyxFQUFDLHVCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERCxlQUVDO0FBQ0Msa0JBQUksRUFBQyxVQUROO0FBRUMsZ0JBQUUsRUFBQyxVQUZKO0FBR0MsbUJBQUssRUFBRW5CLFFBSFI7QUFJQyxzQkFBUSxFQUFFeUIsb0JBSlg7QUFLQyx1QkFBUyxFQUFDLDREQUxYO0FBQUEsc0NBT0M7QUFBUSxxQkFBSyxFQUFDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUEQsRUFRRWhDLFVBQVUsQ0FBQ3lELEdBQVgsQ0FBZSxVQUFBbEQsUUFBUTtBQUFBLG9DQUN2QjtBQUEyQix1QkFBSyxFQUFFQSxRQUFRLENBQUNxRCxHQUEzQztBQUFBLDRCQUNFckQsUUFBUSxDQUFDRjtBQURYLG1CQUFhRSxRQUFRLENBQUNxRCxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUR1QjtBQUFBLGVBQXZCLENBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTlCRCxlQW1FQztBQUFLLGlCQUFTLEVBQUMsZ0RBQWY7QUFBQSwrQkFDQztBQUFRLG1CQUFTLEVBQUMsRUFBbEI7QUFBcUIsaUJBQU8sRUFBRTNCLGVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5FRCxlQXlFQztBQUFLLGlCQUFTLEVBQUMsMEVBQWY7QUFBQSxnQ0FDQztBQUFJLG1CQUFTLEVBQUMscUNBQWQ7QUFBQSxxQkFDRVIsS0FBSyxHQUFHRCxJQUFSLEdBQWVSLE1BQWYsR0FBd0JBLE1BQXhCLEdBQWlDUyxLQUFLLEdBQUdELElBRDNDLE9BQ2tEUixNQURsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFLQztBQUFLLG1CQUFTLEVBQUMsOENBQWY7QUFBQSxpQ0FDQyw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsU0FBWDtBQUFBLG1DQUNDO0FBQUcsdUJBQVMsRUFBQyxFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekVELGVBcUZDO0FBQUssaUJBQVMsRUFBQyx3QkFBZjtBQUFBLCtCQUNDO0FBQU8sbUJBQVMsRUFBQyxFQUFqQjtBQUFBLGtDQUNDO0FBQUEsbUNBQ0M7QUFBQSxzQ0FDQztBQUFJLHFCQUFLLEVBQUU7QUFBRXVELGtCQUFBQSxRQUFRLEVBQUU7QUFBWixpQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERCxlQUVDO0FBQUkscUJBQUssRUFBRTtBQUFFQSxrQkFBQUEsUUFBUSxFQUFFO0FBQVosaUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkQsZUFHQztBQUFJLHFCQUFLLEVBQUU7QUFBRUEsa0JBQUFBLFFBQVEsRUFBRTtBQUFaLGlCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhELGVBSUM7QUFBSSxxQkFBSyxFQUFFO0FBQUVBLGtCQUFBQSxRQUFRLEVBQUU7QUFBWixpQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKRCxlQUtDO0FBQUkscUJBQUssRUFBRTtBQUFFQSxrQkFBQUEsUUFBUSxFQUFFO0FBQVosaUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQVVDO0FBQUEsc0JBQ0U5RCxRQUFRLENBQUNnRCxHQUFULENBQWEsVUFBQUMsSUFBSTtBQUFBLGtDQUNqQjtBQUFtQix5QkFBUyxFQUFDLDBCQUE3QjtBQUFBLHdDQUNDO0FBQUksMkJBQVMsb0NBQWI7QUFBQSwwQ0FDQztBQUNDLHVCQUFHLEVBQUVBLElBQUksQ0FBQ2MsTUFBTCxDQUFZLENBQVosRUFBZUMsR0FEckI7QUFFQyx1QkFBRyxFQUFDLGlCQUZMO0FBR0MsNkJBQVMsWUFBS2YsSUFBSSxDQUFDZ0IsT0FBTCxHQUFlLFlBQWYsR0FBOEIsRUFBbkMsQ0FIVjtBQUlDLHlCQUFLLEVBQUU7QUFBRUMsc0JBQUFBLE1BQU0sRUFBRSxFQUFWO0FBQWNDLHNCQUFBQSxLQUFLLEVBQUU7QUFBckI7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURELGVBUUM7QUFBSyw2QkFBUyxFQUFDLGVBQWY7QUFBQSwrQkFDRWxCLElBQUksQ0FBQ2dCLE9BQUwsaUJBQ0E7QUFBTywrQkFBUyxFQUFDLGNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZGLGVBSUM7QUFBRywrQkFBUyxFQUFDLFlBQWI7QUFBQSxnQ0FBMkJoQixJQUFJLENBQUNtQjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFSRCxlQWVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBZkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURELGVBbUJDO0FBQUksMkJBQVMsRUFBQywyQkFBZDtBQUFBLDBDQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURELEVBRUVuQixJQUFJLENBQUNvQixTQUFMLENBQ0NDLFFBREQsR0FFQ0MsT0FGRCxDQUVTLHVCQUZULEVBRWtDLEdBRmxDLENBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQW5CRCxlQTBCQztBQUFJLDJCQUFTLEVBQUMsYUFBZDtBQUFBLDRCQUE2QnRCLElBQUksQ0FBQ3VCO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBMUJELGVBMkJDO0FBQUksMkJBQVMsRUFBQyxhQUFkO0FBQUEsNEJBQTZCdkIsSUFBSSxDQUFDd0I7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkEzQkQsZUE0QkM7QUFBSSwyQkFBUyxFQUFDLGFBQWQ7QUFBQSx5Q0FDQztBQUFLLDZCQUFTLEVBQUMsK0JBQWY7QUFBQSwrQkFDRSxDQUFDeEIsSUFBSSxDQUFDZ0IsT0FBTixpQkFDQSw4REFBQyxvRUFBRDtBQUNDLDZCQUFPLEVBQUU7QUFBQSwrQkFDUlYsVUFBVSxDQUFDTixJQUFJLENBQUNFLEdBQU4sRUFBV0YsSUFBSSxDQUFDZ0IsT0FBaEIsQ0FERjtBQUFBLHVCQURWO0FBSUMsK0JBQVMsRUFBQztBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRkYsRUFVRWhCLElBQUksQ0FBQ2dCLE9BQUwsZ0JBQ0EsOERBQUMsaUVBQUQ7QUFDQyw2QkFBTyxFQUFFO0FBQUEsK0JBQ1JSLFVBQVUsQ0FBQ1IsSUFBSSxDQUFDRSxHQUFOLEVBQVdGLElBQUksQ0FBQ2dCLE9BQWhCLENBREY7QUFBQSx1QkFEVjtBQUlDLCtCQUFTO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFEQSxnQkFRQSw4REFBQyw4REFBRDtBQUNDLDZCQUFPLEVBQUU7QUFBQSwrQkFDUnhCLG1CQUFtQixDQUFDUSxJQUFJLENBQUNFLEdBQU4sQ0FEWDtBQUFBLHVCQURWO0FBSUMsK0JBQVM7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQWxCRixFQTBCRTlDLE1BQU0sQ0FBQ0YsTUFBUCxpQkFDQSw4REFBQyxnRUFBRDtBQUNDLCtCQUFTLEVBQUMsa0JBRFg7QUFFQyw2QkFBTyxFQUFFO0FBQUEsK0JBQU0wRCxnQkFBZ0IsQ0FBQ1osSUFBSSxDQUFDRSxHQUFOLENBQXRCO0FBQUE7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQTNCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQTVCRDtBQUFBLGlCQUFTRixJQUFJLENBQUNFLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEaUI7QUFBQSxhQUFqQjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJGRCxlQXVLQyw4REFBQyw0REFBRDtBQUFZLGNBQU0sRUFBRTVDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2S0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFtTEE7O0dBclN1Qm5CO1VBSVJWOzs7S0FKUVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1taXhlZC1zcGFjZXMtYW5kLXRhYnMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgQG5leHQvbmV4dC9uby1pbWctZWxlbWVudCAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnLi4vLi4vc3RvcmUvR2xvYmFsU3RhdGUnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBmaWx0ZXJTZWFyY2ggZnJvbSAnLi4vLi4vdXRpbHMvZmlsdGVyU2VhcmNoJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RhaWx3aW5kL0hlYWRlcic7XHJcbmltcG9ydCB7IEV5ZUljb24sIEV5ZU9mZkljb24sIFBlbmNpbEFsdEljb24sIFRyYXNoSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZSc7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGFnaW5hdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluUHJvZHVjdE1hbmFnZXIoKSB7XHJcblx0Y29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xyXG5cdGNvbnN0IHsgY2F0ZWdvcmllcywgYXV0aCB9ID0gc3RhdGU7XHJcblx0Y29uc3QgeyB1c2VyLCB0b2tlbiB9ID0gYXV0aDtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0Y29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSh7IGFsbDogdHJ1ZSwgaGlkZGVuOiBmYWxzZSwgYWN0OiBmYWxzZSB9KTtcclxuXHRjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG5cdGNvbnN0IFt1cmxSZXEsIHNldFVybFJlcV0gPSB1c2VTdGF0ZSgnZ2V0TGlzdGVkJyk7XHJcblxyXG5cdGNvbnN0IGNhdGVnb3J5USA9IHJvdXRlci5xdWVyeS5jYXRlZ29yeSB8fCAnYWxsJztcclxuXHRjb25zdCBzb3J0ID0gcm91dGVyLnF1ZXJ5LnNvcnQgfHwgJyc7XHJcblx0Y29uc3Qgc2VhcmNoID0gcm91dGVyLnF1ZXJ5LnNlYXJjaCB8fCAnYWxsJztcclxuXHRjb25zdCBwYWdlID0gcm91dGVyLnF1ZXJ5LnBhZ2UgfHwgMTtcclxuXHRjb25zdCBsaW1pdCA9IHJvdXRlci5xdWVyeS5saW1pdCB8fCAxMjtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlVGl0bGUgPSBlID0+IHtcclxuXHRcdHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG5cdFx0Y29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBzZWFyY2g6IGUudGFyZ2V0LnZhbHVlID09PSAnJyA/ICdhbGwnIDogZS50YXJnZXQudmFsdWUsIHBhZ2U6IDEgfSk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVDaGFuZ2VDYXRlZ29yeSA9IGUgPT4ge1xyXG5cdFx0c2V0Q2F0ZWdvcnkoZS50YXJnZXQudmFsdWUpO1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBjYXRlZ29yeTogZS50YXJnZXQudmFsdWUsIHBhZ2U6IDEgfSk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVTZWFyY2hCdG4gPSAoKSA9PiB7XHJcblx0XHRmaWx0ZXJTZWFyY2goeyByb3V0ZXIsIHNlYXJjaDogJ2FsbCcgfSk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IGdldEFsbFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuXHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0YXdhaXQgYXhpb3NcclxuXHRcdFx0XHRcdC5nZXQoXHJcblx0XHRcdFx0XHRcdGVuY29kZVVSSShcclxuXHRcdFx0XHRcdFx0XHRgL2FwaS9wcm9kdWN0LyR7dXJsUmVxfT9wYWdlPSR7cGFnZX0mY2F0ZWdvcnk9JHtjYXRlZ29yeVF9JnNvcnQ9JHtzb3J0fSZ0aXRsZT0ke3NlYXJjaH0mbGltaXQ9JHtsaW1pdH1gXHJcblx0XHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHRcdHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBhdXRoLnRva2VuIH0gfVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0LnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmVycikgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0c2V0UHJvZHVjdHMocmVzLmRhdGEucHJvZHVjdHMpO1xyXG5cdFx0XHRcdFx0XHRzZXRSZXN1bHQocmVzLmRhdGEucmVzdWx0KTtcclxuXHJcblx0XHRcdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGlmICh1c2VyICYmIHVzZXIucm9sZSA9PT0gJ2FkbWluJykgZ2V0QWxsUHJvZHVjdHMoKTtcclxuXHR9LCBbcm91dGVyLnF1ZXJ5LCB1cmxSZXFdKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQWxsID0gKCkgPT4ge1xyXG5cdFx0c2V0VXJsUmVxKCdnZXRMaXN0ZWQnKTtcclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgcGFnZTogMSB9KTtcclxuXHRcdHNldEFjdGl2ZSh7IGFsbDogdHJ1ZSwgaGlkZGVuOiBmYWxzZSwgYWN0OiBmYWxzZSB9KTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZUhpZGRlbiA9ICgpID0+IHtcclxuXHRcdHNldFVybFJlcSgnZ2V0VW5MaXN0ZWQnKTtcclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgcGFnZTogMSB9KTtcclxuXHRcdHNldEFjdGl2ZSh7IGFsbDogZmFsc2UsIGhpZGRlbjogdHJ1ZSwgYWN0OiBmYWxzZSB9KTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZUFjdGl2ZSA9ICgpID0+IHtcclxuXHRcdHNldFVybFJlcSgnZ2V0QWN0aXZlJyk7XHJcblx0XHRmaWx0ZXJTZWFyY2goeyByb3V0ZXIsIHBhZ2U6IDEgfSk7XHJcblx0XHRzZXRBY3RpdmUoeyBhbGw6IGZhbHNlLCBoaWRkZW46IGZhbHNlLCBhY3Q6IHRydWUgfSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlSGlkZGVuUHJvZHVjdCA9IGFzeW5jIGlkID0+IHtcclxuXHRcdGF3YWl0IGF4aW9zLmRlbGV0ZShgL2FwaS9wcm9kdWN0LyR7aWR9YCwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IHRva2VuIH0gfSkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRpZiAocmVzLmRhdGEuZXJyKSByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge30gfSk7XHJcblxyXG5cdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHJcblx0XHRcdHZhciBjYXJ0TG9jYWwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0X21pbnRsYWxhJykpO1xyXG5cdFx0XHRjYXJ0TG9jYWwubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRcdGlmIChpdGVtLl9pZCA9PT0gaWQpIHtcclxuXHRcdFx0XHRcdGNhcnRMb2NhbC5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0X21pbnRsYWxhJywgSlNPTi5zdHJpbmdpZnkoY2FydExvY2FsKSk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZUVkaXQgPSBpZCA9PiB7XHJcblx0XHRyb3V0ZXIucHVzaChgL2NyZWF0ZS8ke2lkfWApO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlU2hvdyA9IGFzeW5jIGlkID0+IHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGF3YWl0IGF4aW9zXHJcblx0XHRcdFx0LnBhdGNoKGAvYXBpL3Byb2R1Y3QvJHtpZH1gLCBudWxsLCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYXV0aC50b2tlbiB9IH0pXHJcblx0XHRcdFx0LnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5lcnIpIHJldHVybjtcclxuXHJcblx0XHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGVycm9yOiBlcnIubWVzc2FnZSB9IH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlSGFyZERlbGV0ZSA9IGFzeW5jIGlkID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGlkKTtcclxuXHR9O1xyXG5cclxuXHRpZiAoIXVzZXIgfHwgdXNlci5yb2xlICE9PSAnYWRtaW4nKSByZXR1cm4gbnVsbDtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdiZy1ncmF5LTEwMCBtaW4taC1zY3JlZW4nPlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+UXXhuqNuIGzDvSBz4bqjbiBwaOG6qW08L3RpdGxlPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblxyXG5cdFx0XHQ8SGVhZGVyIC8+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWF4LXctc2NyZWVuLTJ4bCBteC1hdXRvIGJnLXdoaXRlIHAtNSc+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1ldmVubHkgcHgtMyBwdC0zIHRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNjAwIGJvcmRlci1iLTIgcGItNCBib3JkZXItZ3JheS0zMDAnPlxyXG5cdFx0XHRcdFx0PGg1XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZUFsbH1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgaG92ZXI6b3V0bGluZS1ibGFja19zb2xpZCBwLTIgY3Vyc29yLXBvaW50ZXIgJHtcclxuXHRcdFx0XHRcdFx0XHRhY3RpdmUuYWxsID8gJ3RleHQtcmVkLTQwMCcgOiAnJ1xyXG5cdFx0XHRcdFx0XHR9YH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0VOG6pXQgY+G6o1xyXG5cdFx0XHRcdFx0PC9oNT5cclxuXHJcblx0XHRcdFx0XHQ8aDVcclxuXHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlQWN0aXZlfVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bob3ZlcjpvdXRsaW5lLWJsYWNrX3NvbGlkIHAtMiBjdXJzb3ItcG9pbnRlciAke1xyXG5cdFx0XHRcdFx0XHRcdGFjdGl2ZS5hY3QgPyAndGV4dC1yZWQtNDAwJyA6ICcnXHJcblx0XHRcdFx0XHRcdH1gfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHTEkGFuZyBob+G6oXQgxJHhu5luZ1xyXG5cdFx0XHRcdFx0PC9oNT5cclxuXHJcblx0XHRcdFx0XHQ8aDVcclxuXHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlSGlkZGVufVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bob3ZlcjpvdXRsaW5lLWJsYWNrX3NvbGlkIHAtMiBjdXJzb3ItcG9pbnRlciAke1xyXG5cdFx0XHRcdFx0XHRcdGFjdGl2ZS5oaWRkZW4gPyAndGV4dC1yZWQtNDAwJyA6ICcnXHJcblx0XHRcdFx0XHRcdH1gfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHTEkMOjIOG6qW5cclxuXHRcdFx0XHRcdDwvaDU+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBwLTUgc3BhY2UteS00IGxnOnNwYWNlLXgtMTAgbGc6c3BhY2UteS0wJz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC01Jz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9Jyc+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQnPlTDqm4gc+G6o24gcGjhuqltPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdib3JkZXIgYm9yZGVyLWdyYXktMzAwIHAtMyByb3VuZGVkLW1kIGZsZXgtZ3JvdydcclxuXHRcdFx0XHRcdFx0XHRuYW1lPSduYW1lJ1xyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtuYW1lfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUaXRsZX1cclxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nTmjhuq1wIHTDqm4nXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsJz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggc3BhY2UteC01IGl0ZW1zLWNlbnRlcic+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQnPkRhbmggbeG7pWM8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PHNlbGVjdFxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT0nY2F0ZWdvcnknXHJcblx0XHRcdFx0XHRcdFx0XHRpZD0nY2F0ZWdvcnknXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Y2F0ZWdvcnl9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlQ2F0ZWdvcnl9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZsZXgtZ3JvdyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHAtMyByb3VuZGVkLW1kIGNhcGl0YWxpemUnXHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nYWxsJz4tLSBU4bqldCBj4bqjIC0tPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHR7Y2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGtleT17Y2F0ZWdvcnkuX2lkfSB2YWx1ZT17Y2F0ZWdvcnkuX2lkfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Y2F0ZWdvcnkubmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2J1dHRvbiB3LTM2IGN1cnNvci1wb2ludGVyIGZsZXgganVzdGlmeS1jZW50ZXInPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9Jycgb25DbGljaz17aGFuZGxlU2VhcmNoQnRufT5cclxuXHRcdFx0XHRcdFx0VMOsbSBraeG6v21cclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBzcGFjZS15LTMgbGc6c3BhY2UteS0wIGxnOmp1c3RpZnktYmV0d2VlbiBteS00Jz5cclxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9J3RleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwJz5cclxuXHRcdFx0XHRcdFx0e2xpbWl0ICogcGFnZSA+IHJlc3VsdCA/IHJlc3VsdCA6IGxpbWl0ICogcGFnZX0ve3Jlc3VsdH0gU+G6o24gUGjhuqltXHJcblx0XHRcdFx0XHQ8L2gxPlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdidXR0b24tYmx1ZSBtYXgtdy1zbSBmbGV4IGp1c3RpZnktY2VudGVyIHAtMyc+XHJcblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9jcmVhdGUnPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nJz4rIFRow6ptIHPhuqNuIHBo4bqpbSBt4bubaTwvYT5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgb3ZlcmZsb3cteC1hdXRvJz5cclxuXHRcdFx0XHRcdDx0YWJsZSBjbGFzc05hbWU9Jyc+XHJcblx0XHRcdFx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3sgbWluV2lkdGg6IDQwMCB9fT5Uw6puIHPhuqNuIHBo4bqpbTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3sgbWluV2lkdGg6IDgwIH19Pkdpw6E8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt7IG1pbldpZHRoOiA4MCB9fT5LaG88L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt7IG1pbldpZHRoOiA4MCB9fT7EkMOjIGLDoW48L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt7IG1pbldpZHRoOiAxMDAgfX0+Q2jhu4luaCBz4butYTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0PC90aGVhZD5cclxuXHRcdFx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0XHRcdHtwcm9kdWN0cy5tYXAoaXRlbSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8dHIga2V5PXtpdGVtLl9pZH0gY2xhc3NOYW1lPSdib3JkZXItYiBib3JkZXItZ3JheS0zMDAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgcHktNCBzcGFjZS14LTJgfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2l0ZW0uaW1hZ2VzWzBdLnVybH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD0n4bqibmggYsOsYSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YCR7aXRlbS5kZWxldGVkID8gJ29wYWNpdHktNDAnIDogJyd9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGhlaWdodDogNTAsIHdpZHRoOiA1MCB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLmRlbGV0ZWQgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c21hbGwgY2xhc3NOYW1lPSd0ZXh0LXJlZC0zMDAnPsSQw6Mg4bqpbjwvc21hbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdjYXBpdGFsaXplJz57aXRlbS50aXRsZX08L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9J3RleHQtcmVkLTQwMCBhbGlnbi1taWRkbGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzbWFsbD4mI3gyMEFCOzwvc21hbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0ucHJpY2VTYWxlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQudG9TdHJpbmcoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcuJyl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+e2l0ZW0uaW5TdG9ja308L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+e2l0ZW0uc29sZH08L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgc3BhY2UteC0zJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHshaXRlbS5kZWxldGVkICYmIChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFBlbmNpbEFsdEljb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlRWRpdChpdGVtLl9pZCwgaXRlbS5kZWxldGVkKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2gtNSB0ZXh0LWJsdWUtNTAwIGN1cnNvci1wb2ludGVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5kZWxldGVkID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8RXllT2ZmSWNvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVTaG93KGl0ZW0uX2lkLCBpdGVtLmRlbGV0ZWQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGgtNSB0ZXh0LXJlZC01MDAgY3Vyc29yLXBvaW50ZXJgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEV5ZUljb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlSGlkZGVuUHJvZHVjdChpdGVtLl9pZClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgaC01IHRleHQtZ3JlZW4tNTAwIGN1cnNvci1wb2ludGVyYH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2FjdGl2ZS5oaWRkZW4gJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VHJhc2hJY29uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdoLTUgdGV4dC1yZWQtNTAwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZUhhcmREZWxldGUoaXRlbS5faWQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdFx0XHQ8L3RhYmxlPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8UGFnaW5hdGlvbiByZXN1bHQ9e3Jlc3VsdH0gLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJEYXRhQ29udGV4dCIsInVzZVJvdXRlciIsIkxpbmsiLCJheGlvcyIsImZpbHRlclNlYXJjaCIsIkhlYWRlciIsIkV5ZUljb24iLCJFeWVPZmZJY29uIiwiUGVuY2lsQWx0SWNvbiIsIlRyYXNoSWNvbiIsIlBhZ2luYXRpb24iLCJNYWluUHJvZHVjdE1hbmFnZXIiLCJzdGF0ZSIsImRpc3BhdGNoIiwiY2F0ZWdvcmllcyIsImF1dGgiLCJ1c2VyIiwidG9rZW4iLCJyb3V0ZXIiLCJuYW1lIiwic2V0TmFtZSIsImNhdGVnb3J5Iiwic2V0Q2F0ZWdvcnkiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiYWxsIiwiaGlkZGVuIiwiYWN0IiwiYWN0aXZlIiwic2V0QWN0aXZlIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwidXJsUmVxIiwic2V0VXJsUmVxIiwiY2F0ZWdvcnlRIiwicXVlcnkiLCJzb3J0Iiwic2VhcmNoIiwicGFnZSIsImxpbWl0IiwiaGFuZGxlQ2hhbmdlVGl0bGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlQ2F0ZWdvcnkiLCJoYW5kbGVTZWFyY2hCdG4iLCJnZXRBbGxQcm9kdWN0cyIsInR5cGUiLCJwYXlsb2FkIiwibG9hZGluZyIsImdldCIsImVuY29kZVVSSSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlcyIsImRhdGEiLCJlcnIiLCJyb2xlIiwiaGFuZGxlQWxsIiwiaGFuZGxlSGlkZGVuIiwiaGFuZGxlQWN0aXZlIiwiaGFuZGxlSGlkZGVuUHJvZHVjdCIsImlkIiwiY2FydExvY2FsIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIl9pZCIsInNwbGljZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJoYW5kbGVFZGl0IiwicHVzaCIsImhhbmRsZVNob3ciLCJwYXRjaCIsImVycm9yIiwibWVzc2FnZSIsImhhbmRsZUhhcmREZWxldGUiLCJtaW5XaWR0aCIsImltYWdlcyIsInVybCIsImRlbGV0ZWQiLCJoZWlnaHQiLCJ3aWR0aCIsInRpdGxlIiwicHJpY2VTYWxlIiwidG9TdHJpbmciLCJyZXBsYWNlIiwiaW5TdG9jayIsInNvbGQiXSwic291cmNlUm9vdCI6IiJ9