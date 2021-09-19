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

            case 5:
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
        lineNumber: 136,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tailwind_Header__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 139,
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
          lineNumber: 143,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
          onClick: handleActive,
          className: "hover:outline-black_solid p-2 cursor-pointer ".concat(active.act ? 'text-red-400' : ''),
          children: "\u0110ang ho\u1EA1t \u0111\u1ED9ng"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
          onClick: handleHidden,
          className: "hover:outline-black_solid p-2 cursor-pointer ".concat(active.hidden ? 'text-red-400' : ''),
          children: "\u0110\xE3 \u1EA9n"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 142,
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
              lineNumber: 174,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
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
            lineNumber: 177,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 172,
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
              lineNumber: 189,
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
                lineNumber: 197,
                columnNumber: 9
              }, this), categories.map(function (category) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  value: category._id,
                  children: category.name
                }, category._id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 199,
                  columnNumber: 10
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "button w-36 cursor-pointer flex justify-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "",
          onClick: handleSearchBtn,
          children: "T\xECm ki\u1EBFm"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:justify-between my-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "text-xl font-semibold text-gray-700",
          children: [limit * page > result ? result : limit * page, "/", result, " S\u1EA3n Ph\u1EA9m"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 215,
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
              lineNumber: 221,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 214,
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
                lineNumber: 230,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 80
                },
                children: "Gi\xE1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 231,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 80
                },
                children: "Kho"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 232,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 80
                },
                children: "\u0110\xE3 b\xE1n"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 100
                },
                children: "Ch\u1EC9nh s\u1EEDa"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 234,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
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
                    lineNumber: 241,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex flex-col",
                    children: [item.deleted && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
                      className: "text-red-300",
                      children: "\u0110\xE3 \u1EA9n"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 250,
                      columnNumber: 13
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                      className: "capitalize",
                      children: item.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 252,
                      columnNumber: 12
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 248,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 255,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 240,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "text-red-400 align-middle",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
                    children: "\u20AB"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 259,
                    columnNumber: 11
                  }, _this), item.priceSale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 258,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "text-center",
                  children: item.inStock
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 265,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "text-center",
                  children: item.sold
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 266,
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
                      lineNumber: 270,
                      columnNumber: 13
                    }, _this), item.deleted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.EyeOffIcon, {
                      onClick: function onClick() {
                        return handleShow(item._id, item.deleted);
                      },
                      className: "h-5 text-red-500 cursor-pointer"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 279,
                      columnNumber: 13
                    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.EyeIcon, {
                      onClick: function onClick() {
                        return handleHiddenProduct(item._id);
                      },
                      className: "h-5 text-green-500 cursor-pointer"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 286,
                      columnNumber: 13
                    }, _this), active.hidden && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.TrashIcon, {
                      className: "h-5 text-red-500",
                      onClick: function onClick() {
                        return handleHardDelete(item._id);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 295,
                      columnNumber: 13
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 268,
                    columnNumber: 11
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 267,
                  columnNumber: 10
                }, _this)]
              }, item._id, true, {
                fileName: _jsxFileName,
                lineNumber: 239,
                columnNumber: 9
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_12__.default, {
        result: result
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 134,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC5hNWY2NTBhZTQ4YTk5MDBhMzk4ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNnQixrQkFBVCxHQUE4QjtBQUFBOztBQUFBOztBQUFBLG9CQUNoQmYsaURBQVUsQ0FBQ0ksMkRBQUQsQ0FETTtBQUFBLE1BQ3BDWSxLQURvQyxlQUNwQ0EsS0FEb0M7QUFBQSxNQUM3QkMsUUFENkIsZUFDN0JBLFFBRDZCOztBQUFBLE1BRXBDQyxVQUZvQyxHQUVmRixLQUZlLENBRXBDRSxVQUZvQztBQUFBLE1BRXhCQyxJQUZ3QixHQUVmSCxLQUZlLENBRXhCRyxJQUZ3QjtBQUFBLE1BR3BDQyxJQUhvQyxHQUdwQkQsSUFIb0IsQ0FHcENDLElBSG9DO0FBQUEsTUFHOUJDLEtBSDhCLEdBR3BCRixJQUhvQixDQUc5QkUsS0FIOEI7QUFJNUMsTUFBTUMsTUFBTSxHQUFHakIsc0RBQVMsRUFBeEI7O0FBSjRDLGtCQU1wQkgsK0NBQVEsQ0FBQyxFQUFELENBTlk7QUFBQSxNQU1yQ3FCLElBTnFDO0FBQUEsTUFNL0JDLE9BTitCOztBQUFBLG1CQU9adEIsK0NBQVEsQ0FBQyxFQUFELENBUEk7QUFBQSxNQU9yQ3VCLFFBUHFDO0FBQUEsTUFPM0JDLFdBUDJCOztBQUFBLG1CQVFaeEIsK0NBQVEsQ0FBQyxFQUFELENBUkk7QUFBQSxNQVFyQ3lCLFFBUnFDO0FBQUEsTUFRM0JDLFdBUjJCOztBQUFBLG1CQVNoQjFCLCtDQUFRLENBQUM7QUFBRTJCLElBQUFBLEdBQUcsRUFBRSxJQUFQO0FBQWFDLElBQUFBLE1BQU0sRUFBRSxLQUFyQjtBQUE0QkMsSUFBQUEsR0FBRyxFQUFFO0FBQWpDLEdBQUQsQ0FUUTtBQUFBLE1BU3JDQyxN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Z0JBQWdCLENBQUNaLElBQUksQ0FBQ0UsR0FBTixDQUF0QjtBQUFBO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkEzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkE1QkQ7QUFBQSxpQkFBU0YsSUFBSSxDQUFDRSxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRGlCO0FBQUEsYUFBakI7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyRkQsZUF1S0MsOERBQUMsNERBQUQ7QUFBWSxjQUFNLEVBQUU1QztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdktEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBbUxBOztHQXpTdUJuQjtVQUlSVjs7O0tBSlFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3QvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtc3BhY2VzLWFuZC10YWJzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uLy4uL3N0b3JlL0dsb2JhbFN0YXRlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgZmlsdGVyU2VhcmNoIGZyb20gJy4uLy4uL3V0aWxzL2ZpbHRlclNlYXJjaCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90YWlsd2luZC9IZWFkZXInO1xyXG5pbXBvcnQgeyBFeWVJY29uLCBFeWVPZmZJY29uLCBQZW5jaWxBbHRJY29uLCBUcmFzaEljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L291dGxpbmUnO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpblByb2R1Y3RNYW5hZ2VyKCkge1xyXG5cdGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuXHRjb25zdCB7IGNhdGVnb3JpZXMsIGF1dGggfSA9IHN0YXRlO1xyXG5cdGNvbnN0IHsgdXNlciwgdG9rZW4gfSA9IGF1dGg7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoeyBhbGw6IHRydWUsIGhpZGRlbjogZmFsc2UsIGFjdDogZmFsc2UgfSk7XHJcblx0Y29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuXHRjb25zdCBbdXJsUmVxLCBzZXRVcmxSZXFdID0gdXNlU3RhdGUoJ2dldExpc3RlZCcpO1xyXG5cclxuXHRjb25zdCBjYXRlZ29yeVEgPSByb3V0ZXIucXVlcnkuY2F0ZWdvcnkgfHwgJ2FsbCc7XHJcblx0Y29uc3Qgc29ydCA9IHJvdXRlci5xdWVyeS5zb3J0IHx8ICcnO1xyXG5cdGNvbnN0IHNlYXJjaCA9IHJvdXRlci5xdWVyeS5zZWFyY2ggfHwgJ2FsbCc7XHJcblx0Y29uc3QgcGFnZSA9IHJvdXRlci5xdWVyeS5wYWdlIHx8IDE7XHJcblx0Y29uc3QgbGltaXQgPSByb3V0ZXIucXVlcnkubGltaXQgfHwgMTI7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNoYW5nZVRpdGxlID0gZSA9PiB7XHJcblx0XHRzZXROYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuXHRcdGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgc2VhcmNoOiBlLnRhcmdldC52YWx1ZSA9PT0gJycgPyAnYWxsJyA6IGUudGFyZ2V0LnZhbHVlLCBwYWdlOiAxIH0pO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlQ2F0ZWdvcnkgPSBlID0+IHtcclxuXHRcdHNldENhdGVnb3J5KGUudGFyZ2V0LnZhbHVlKTtcclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgY2F0ZWdvcnk6IGUudGFyZ2V0LnZhbHVlLCBwYWdlOiAxIH0pO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlU2VhcmNoQnRuID0gKCkgPT4ge1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBzZWFyY2g6ICdhbGwnIH0pO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBnZXRBbGxQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcblxyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGF3YWl0IGF4aW9zXHJcblx0XHRcdFx0XHQuZ2V0KFxyXG5cdFx0XHRcdFx0XHRlbmNvZGVVUkkoXHJcblx0XHRcdFx0XHRcdFx0YC9hcGkvcHJvZHVjdC8ke3VybFJlcX0/cGFnZT0ke3BhZ2V9JmNhdGVnb3J5PSR7Y2F0ZWdvcnlRfSZzb3J0PSR7c29ydH0mdGl0bGU9JHtzZWFyY2h9JmxpbWl0PSR7bGltaXR9YFxyXG5cdFx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0XHR7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYXV0aC50b2tlbiB9IH1cclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdC50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5lcnIpIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHJcblx0XHRcdFx0XHRcdHNldFByb2R1Y3RzKHJlcy5kYXRhLnByb2R1Y3RzKTtcclxuXHRcdFx0XHRcdFx0c2V0UmVzdWx0KHJlcy5kYXRhLnJlc3VsdCk7XHJcblxyXG5cdFx0XHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRpZiAodXNlciAmJiB1c2VyLnJvbGUgPT09ICdhZG1pbicpIGdldEFsbFByb2R1Y3RzKCk7XHJcblx0fSwgW3JvdXRlci5xdWVyeSwgdXJsUmVxXSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUFsbCA9ICgpID0+IHtcclxuXHRcdHNldFVybFJlcSgnZ2V0TGlzdGVkJyk7XHJcblx0XHRmaWx0ZXJTZWFyY2goeyByb3V0ZXIsIHBhZ2U6IDEgfSk7XHJcblx0XHRzZXRBY3RpdmUoeyBhbGw6IHRydWUsIGhpZGRlbjogZmFsc2UsIGFjdDogZmFsc2UgfSk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVIaWRkZW4gPSAoKSA9PiB7XHJcblx0XHRzZXRVcmxSZXEoJ2dldFVuTGlzdGVkJyk7XHJcblx0XHRmaWx0ZXJTZWFyY2goeyByb3V0ZXIsIHBhZ2U6IDEgfSk7XHJcblx0XHRzZXRBY3RpdmUoeyBhbGw6IGZhbHNlLCBoaWRkZW46IHRydWUsIGFjdDogZmFsc2UgfSk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVBY3RpdmUgPSAoKSA9PiB7XHJcblx0XHRzZXRVcmxSZXEoJ2dldEFjdGl2ZScpO1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBwYWdlOiAxIH0pO1xyXG5cdFx0c2V0QWN0aXZlKHsgYWxsOiBmYWxzZSwgaGlkZGVuOiBmYWxzZSwgYWN0OiB0cnVlIH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUhpZGRlblByb2R1Y3QgPSBhc3luYyBpZCA9PiB7XHJcblx0XHRhd2FpdCBheGlvcy5kZWxldGUoYC9hcGkvcHJvZHVjdC8ke2lkfWAsIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9IH0pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0aWYgKHJlcy5kYXRhLmVycikgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pO1xyXG5cclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge30gfSk7XHJcblxyXG5cdFx0XHR2YXIgY2FydExvY2FsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydF9taW50bGFsYScpKTtcclxuXHRcdFx0Y2FydExvY2FsLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuXHRcdFx0XHRpZiAoaXRlbS5faWQgPT09IGlkKSB7XHJcblx0XHRcdFx0XHRjYXJ0TG9jYWwuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydF9taW50bGFsYScsIEpTT04uc3RyaW5naWZ5KGNhcnRMb2NhbCkpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0c2V0VXJsUmVxKCdnZXRVbkxpc3RlZCcpO1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBwYWdlOiAxIH0pO1xyXG5cdFx0c2V0QWN0aXZlKHsgYWxsOiBmYWxzZSwgaGlkZGVuOiB0cnVlLCBhY3Q6IGZhbHNlIH0pO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlRWRpdCA9IGlkID0+IHtcclxuXHRcdHJvdXRlci5wdXNoKGAvY3JlYXRlLyR7aWR9YCk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVTaG93ID0gYXN5bmMgaWQgPT4ge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0YXdhaXQgYXhpb3NcclxuXHRcdFx0XHQucGF0Y2goYC9hcGkvcHJvZHVjdC8ke2lkfWAsIG51bGwsIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBhdXRoLnRva2VuIH0gfSlcclxuXHRcdFx0XHQudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmVycikgcmV0dXJuO1xyXG5cclxuXHRcdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgZXJyb3I6IGVyci5tZXNzYWdlIH0gfSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVIYXJkRGVsZXRlID0gYXN5bmMgaWQgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coaWQpO1xyXG5cdH07XHJcblxyXG5cdGlmICghdXNlciB8fCB1c2VyLnJvbGUgIT09ICdhZG1pbicpIHJldHVybiBudWxsO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2JnLWdyYXktMTAwIG1pbi1oLXNjcmVlbic+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdDx0aXRsZT5RdeG6o24gbMO9IHPhuqNuIHBo4bqpbTwvdGl0bGU+XHJcblx0XHRcdDwvSGVhZD5cclxuXHJcblx0XHRcdDxIZWFkZXIgLz5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtYXgtdy1zY3JlZW4tMnhsIG14LWF1dG8gYmctd2hpdGUgcC01Jz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWV2ZW5seSBweC0zIHB0LTMgdGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS02MDAgYm9yZGVyLWItMiBwYi00IGJvcmRlci1ncmF5LTMwMCc+XHJcblx0XHRcdFx0XHQ8aDVcclxuXHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlQWxsfVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bob3ZlcjpvdXRsaW5lLWJsYWNrX3NvbGlkIHAtMiBjdXJzb3ItcG9pbnRlciAke1xyXG5cdFx0XHRcdFx0XHRcdGFjdGl2ZS5hbGwgPyAndGV4dC1yZWQtNDAwJyA6ICcnXHJcblx0XHRcdFx0XHRcdH1gfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRU4bqldCBj4bqjXHJcblx0XHRcdFx0XHQ8L2g1PlxyXG5cclxuXHRcdFx0XHRcdDxoNVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVBY3RpdmV9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGhvdmVyOm91dGxpbmUtYmxhY2tfc29saWQgcC0yIGN1cnNvci1wb2ludGVyICR7XHJcblx0XHRcdFx0XHRcdFx0YWN0aXZlLmFjdCA/ICd0ZXh0LXJlZC00MDAnIDogJydcclxuXHRcdFx0XHRcdFx0fWB9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdMSQYW5nIGhv4bqhdCDEkeG7mW5nXHJcblx0XHRcdFx0XHQ8L2g1PlxyXG5cclxuXHRcdFx0XHRcdDxoNVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVIaWRkZW59XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGhvdmVyOm91dGxpbmUtYmxhY2tfc29saWQgcC0yIGN1cnNvci1wb2ludGVyICR7XHJcblx0XHRcdFx0XHRcdFx0YWN0aXZlLmhpZGRlbiA/ICd0ZXh0LXJlZC00MDAnIDogJydcclxuXHRcdFx0XHRcdFx0fWB9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdMSQw6Mg4bqpblxyXG5cdFx0XHRcdFx0PC9oNT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgaXRlbXMtY2VudGVyIHAtNSBzcGFjZS15LTQgbGc6c3BhY2UteC0xMCBsZzpzcGFjZS15LTAnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTUnPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nJz5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1zZW1pYm9sZCc+VMOqbiBz4bqjbiBwaOG6qW08L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2JvcmRlciBib3JkZXItZ3JheS0zMDAgcC0zIHJvdW5kZWQtbWQgZmxleC1ncm93J1xyXG5cdFx0XHRcdFx0XHRcdG5hbWU9J25hbWUnXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e25hbWV9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZVRpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdOaOG6rXAgdMOqbidcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwnPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBzcGFjZS14LTUgaXRlbXMtY2VudGVyJz5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1zZW1pYm9sZCc+RGFuaCBt4bulYzwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8c2VsZWN0XHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPSdjYXRlZ29yeSdcclxuXHRcdFx0XHRcdFx0XHRcdGlkPSdjYXRlZ29yeSdcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtjYXRlZ29yeX1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VDYXRlZ29yeX1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZmxleC1ncm93IGJvcmRlciBib3JkZXItZ3JheS0zMDAgcC0zIHJvdW5kZWQtbWQgY2FwaXRhbGl6ZSdcclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPSdhbGwnPi0tIFThuqV0IGPhuqMgLS08L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdHtjYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24ga2V5PXtjYXRlZ29yeS5faWR9IHZhbHVlPXtjYXRlZ29yeS5faWR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtjYXRlZ29yeS5uYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uIHctMzYgY3Vyc29yLXBvaW50ZXIgZmxleCBqdXN0aWZ5LWNlbnRlcic+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0nJyBvbkNsaWNrPXtoYW5kbGVTZWFyY2hCdG59PlxyXG5cdFx0XHRcdFx0XHRUw6xtIGtp4bq/bVxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IHNwYWNlLXktMyBsZzpzcGFjZS15LTAgbGc6anVzdGlmeS1iZXR3ZWVuIG15LTQnPlxyXG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT0ndGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS03MDAnPlxyXG5cdFx0XHRcdFx0XHR7bGltaXQgKiBwYWdlID4gcmVzdWx0ID8gcmVzdWx0IDogbGltaXQgKiBwYWdlfS97cmVzdWx0fSBT4bqjbiBQaOG6qW1cclxuXHRcdFx0XHRcdDwvaDE+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2J1dHRvbi1ibHVlIG1heC13LXNtIGZsZXgganVzdGlmeS1jZW50ZXIgcC0zJz5cclxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2NyZWF0ZSc+XHJcblx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPScnPisgVGjDqm0gc+G6o24gcGjhuqltIG3hu5tpPC9hPlxyXG5cdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctZnVsbCBvdmVyZmxvdy14LWF1dG8nPlxyXG5cdFx0XHRcdFx0PHRhYmxlIGNsYXNzTmFtZT0nJz5cclxuXHRcdFx0XHRcdFx0PHRoZWFkPlxyXG5cdFx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT17eyBtaW5XaWR0aDogNDAwIH19PlTDqm4gc+G6o24gcGjhuqltPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT17eyBtaW5XaWR0aDogODAgfX0+R2nDoTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3sgbWluV2lkdGg6IDgwIH19PktobzwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3sgbWluV2lkdGg6IDgwIH19PsSQw6MgYsOhbjwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3sgbWluV2lkdGg6IDEwMCB9fT5DaOG7iW5oIHPhu61hPC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHRcdFx0XHQ8dGJvZHk+XHJcblx0XHRcdFx0XHRcdFx0e3Byb2R1Y3RzLm1hcChpdGVtID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDx0ciBrZXk9e2l0ZW0uX2lkfSBjbGFzc05hbWU9J2JvcmRlci1iIGJvcmRlci1ncmF5LTMwMCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBweS00IHNwYWNlLXgtMmB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17aXRlbS5pbWFnZXNbMF0udXJsfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PSfhuqJuaCBiw6xhJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgJHtpdGVtLmRlbGV0ZWQgPyAnb3BhY2l0eS00MCcgOiAnJ31gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgaGVpZ2h0OiA1MCwgd2lkdGg6IDUwIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0uZGVsZXRlZCAmJiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzbWFsbCBjbGFzc05hbWU9J3RleHQtcmVkLTMwMCc+xJDDoyDhuqluPC9zbWFsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2NhcGl0YWxpemUnPntpdGVtLnRpdGxlfTwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT0ndGV4dC1yZWQtNDAwIGFsaWduLW1pZGRsZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNtYWxsPiYjeDIwQUI7PC9zbWFsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5wcmljZVNhbGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC50b1N0cmluZygpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJy4nKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9J3RleHQtY2VudGVyJz57aXRlbS5pblN0b2NrfTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9J3RleHQtY2VudGVyJz57aXRlbS5zb2xkfTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBzcGFjZS14LTMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyFpdGVtLmRlbGV0ZWQgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8UGVuY2lsQWx0SWNvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVFZGl0KGl0ZW0uX2lkLCBpdGVtLmRlbGV0ZWQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naC01IHRleHQtYmx1ZS01MDAgY3Vyc29yLXBvaW50ZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLmRlbGV0ZWQgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxFeWVPZmZJY29uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZVNob3coaXRlbS5faWQsIGl0ZW0uZGVsZXRlZClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgaC01IHRleHQtcmVkLTUwMCBjdXJzb3ItcG9pbnRlcmB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8RXllSWNvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVIaWRkZW5Qcm9kdWN0KGl0ZW0uX2lkKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BoLTUgdGV4dC1ncmVlbi01MDAgY3Vyc29yLXBvaW50ZXJgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7YWN0aXZlLmhpZGRlbiAmJiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUcmFzaEljb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2gtNSB0ZXh0LXJlZC01MDAnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlSGFyZERlbGV0ZShpdGVtLl9pZCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0XHRcdDwvdGFibGU+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxQYWdpbmF0aW9uIHJlc3VsdD17cmVzdWx0fSAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZCIsIkRhdGFDb250ZXh0IiwidXNlUm91dGVyIiwiTGluayIsImF4aW9zIiwiZmlsdGVyU2VhcmNoIiwiSGVhZGVyIiwiRXllSWNvbiIsIkV5ZU9mZkljb24iLCJQZW5jaWxBbHRJY29uIiwiVHJhc2hJY29uIiwiUGFnaW5hdGlvbiIsIk1haW5Qcm9kdWN0TWFuYWdlciIsInN0YXRlIiwiZGlzcGF0Y2giLCJjYXRlZ29yaWVzIiwiYXV0aCIsInVzZXIiLCJ0b2tlbiIsInJvdXRlciIsIm5hbWUiLCJzZXROYW1lIiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJhbGwiLCJoaWRkZW4iLCJhY3QiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJ1cmxSZXEiLCJzZXRVcmxSZXEiLCJjYXRlZ29yeVEiLCJxdWVyeSIsInNvcnQiLCJzZWFyY2giLCJwYWdlIiwibGltaXQiLCJoYW5kbGVDaGFuZ2VUaXRsZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2VDYXRlZ29yeSIsImhhbmRsZVNlYXJjaEJ0biIsImdldEFsbFByb2R1Y3RzIiwidHlwZSIsInBheWxvYWQiLCJsb2FkaW5nIiwiZ2V0IiwiZW5jb2RlVVJJIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0aGVuIiwicmVzIiwiZGF0YSIsImVyciIsInJvbGUiLCJoYW5kbGVBbGwiLCJoYW5kbGVIaWRkZW4iLCJoYW5kbGVBY3RpdmUiLCJoYW5kbGVIaWRkZW5Qcm9kdWN0IiwiaWQiLCJjYXJ0TG9jYWwiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibWFwIiwiaXRlbSIsImluZGV4IiwiX2lkIiwic3BsaWNlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImhhbmRsZUVkaXQiLCJwdXNoIiwiaGFuZGxlU2hvdyIsInBhdGNoIiwiZXJyb3IiLCJtZXNzYWdlIiwiaGFuZGxlSGFyZERlbGV0ZSIsIm1pbldpZHRoIiwiaW1hZ2VzIiwidXJsIiwiZGVsZXRlZCIsImhlaWdodCIsIndpZHRoIiwidGl0bGUiLCJwcmljZVNhbGUiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJpblN0b2NrIiwic29sZCJdLCJzb3VyY2VSb290IjoiIn0=