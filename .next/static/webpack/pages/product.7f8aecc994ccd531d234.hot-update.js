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
      currentPage = _useState6[0],
      setCurrentPage = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('getListed'),
      urlReq = _useState7[0],
      setUrlReq = _useState7[1];

  var categoryQ = router.query.category || 'all';
  var sort = router.query.sort || '';
  var search = router.query.search || 'all';
  var page = router.query.page || 1;
  var limit = router.query.limit || 12;

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
    setUrlReq('getUnListed');
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
    setUrlReq('getActive');
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
    var _ref2 = (0,E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(id, isDeleted) {
      return E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (isDeleted) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              _context2.prev = 2;
              _context2.next = 5;
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
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](2);
              dispatch({
                type: 'NOTIFY',
                payload: {
                  error: _context2.t0.message
                }
              });

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 7]]);
    }));

    return function handleShow(_x, _x2) {
      return _ref2.apply(this, arguments);
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
        lineNumber: 124,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tailwind_Header__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
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
          lineNumber: 131,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
          onClick: handleActive,
          className: "hover:outline-black_solid p-2 cursor-pointer ".concat(active.act ? 'text-red-400' : ''),
          children: "\u0110ang ho\u1EA1t \u0111\u1ED9ng"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
          onClick: handleHidden,
          className: "hover:outline-black_solid p-2 cursor-pointer ".concat(active.hidden ? 'text-red-400' : ''),
          children: "\u0110\xE3 \u1EA9n"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
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
              lineNumber: 162,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
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
            lineNumber: 165,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 160,
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
              lineNumber: 177,
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
                lineNumber: 185,
                columnNumber: 9
              }, this), categories.map(function (category) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  value: category._id,
                  children: category.name
                }, category._id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 187,
                  columnNumber: 10
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "button w-36 cursor-pointer flex justify-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "",
          onClick: handleSearchBtn,
          children: "T\xECm ki\u1EBFm"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:justify-between my-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "text-xl font-semibold text-gray-700",
          children: [limit * page > result ? result : limit * page, "/", result, " S\u1EA3n Ph\u1EA9m"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 203,
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
              lineNumber: 209,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 202,
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
                lineNumber: 218,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 80
                },
                children: "Gi\xE1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 80
                },
                children: "Kho"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 80
                },
                children: "\u0110\xE3 b\xE1n"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 100
                },
                children: "Ch\u1EC9nh s\u1EEDa"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 222,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
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
                    lineNumber: 229,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex flex-col",
                    children: [item.deleted && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
                      className: "text-red-300",
                      children: "\u0110\xE3 \u1EA9n"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 238,
                      columnNumber: 13
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                      className: "capitalize",
                      children: item.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 240,
                      columnNumber: 12
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 236,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 243,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 228,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "text-red-400 align-middle",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
                    children: "\u20AB"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 247,
                    columnNumber: 11
                  }, _this), item.priceSale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 246,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "text-center",
                  children: item.inStock
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 253,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "text-center",
                  children: item.sold
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 254,
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
                      lineNumber: 258,
                      columnNumber: 13
                    }, _this), item.deleted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.EyeOffIcon, {
                      onClick: function onClick() {
                        return handleShow(item._id, item.deleted);
                      },
                      className: "h-5 text-red-500 cursor-pointer"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 267,
                      columnNumber: 13
                    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.EyeIcon, {
                      onClick: function onClick() {
                        return handleShow(item._id, item.deleted);
                      },
                      className: "h-5 text-green-500 cursor-pointer"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 274,
                      columnNumber: 13
                    }, _this), active.hidden && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.TrashIcon, {
                      className: "h-5 text-red-500",
                      onClick: function onClick() {
                        return handleDelete(item._id);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 283,
                      columnNumber: 13
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 256,
                    columnNumber: 11
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 255,
                  columnNumber: 10
                }, _this)]
              }, item._id, true, {
                fileName: _jsxFileName,
                lineNumber: 227,
                columnNumber: 9
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_12__.default, {
        result: result
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 122,
    columnNumber: 3
  }, this);
}

_s(MainProductManager, "q2STxJmO9G4d4AZ3HaHMgHbJG+M=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC43ZjhhZWNjOTk0Y2NkNTMxZDIzNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNnQixrQkFBVCxHQUE4QjtBQUFBOztBQUFBOztBQUFBLG9CQUNoQmYsaURBQVUsQ0FBQ0ksMkRBQUQsQ0FETTtBQUFBLE1BQ3BDWSxLQURvQyxlQUNwQ0EsS0FEb0M7QUFBQSxNQUM3QkMsUUFENkIsZUFDN0JBLFFBRDZCOztBQUFBLE1BRXBDQyxVQUZvQyxHQUVmRixLQUZlLENBRXBDRSxVQUZvQztBQUFBLE1BRXhCQyxJQUZ3QixHQUVmSCxLQUZlLENBRXhCRyxJQUZ3QjtBQUFBLE1BR3BDQyxJQUhvQyxHQUczQkQsSUFIMkIsQ0FHcENDLElBSG9DO0FBSTVDLE1BQU1DLE1BQU0sR0FBR2hCLHNEQUFTLEVBQXhCOztBQUo0QyxrQkFNcEJILCtDQUFRLENBQUMsRUFBRCxDQU5ZO0FBQUEsTUFNckNvQixJQU5xQztBQUFBLE1BTS9CQyxPQU4rQjs7QUFBQSxtQkFPWnJCLCtDQUFRLENBQUMsRUFBRCxDQVBJO0FBQUEsTUFPckNzQixRQVBxQztBQUFBLE1BTzNCQyxXQVAyQjs7QUFBQSxtQkFRWnZCLCtDQUFRLENBQUMsRUFBRCxDQVJJO0FBQUEsTUFRckN3QixRQVJxQztBQUFBLE1BUTNCQyxXQVIyQjs7QUFBQSxtQkFTaEJ6QiwrQ0FBUSxDQUFDO0FBQUUwQixJQUFBQSxHQUFHLEVBQUUsSUFBUDtBQUFhQyxJQUFBQSxNQUFNLEVBQUUsS0FBckI7QUFBNEJDLElBQUFBLEdBQUcsRUFBRTtBQUFqQyxHQUFELENBVFE7QUFBQSxNQVNyQ0MsTUFUcUM7QUFBQSxNQVM3QkMsU0FUNkI7O0FBQUEsbUJBVWhCOUIsK0NBQVEs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QU0sQ0FBQ0YsTUFBUCxpQkFDQSw4REFBQyxnRUFBRDtBQUNDLCtCQUFTLEVBQUMsa0JBRFg7QUFFQyw2QkFBTyxFQUFFO0FBQUEsK0JBQU11QyxZQUFZLENBQUNZLElBQUksQ0FBQ0YsR0FBTixDQUFsQjtBQUFBO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkEzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkE1QkQ7QUFBQSxpQkFBU0UsSUFBSSxDQUFDRixHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRGlCO0FBQUEsYUFBakI7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyRkQsZUF1S0MsOERBQUMsNERBQUQ7QUFBWSxjQUFNLEVBQUU3QztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdktEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBbUxBOztHQTdSdUJsQjtVQUlSVjs7O0tBSlFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3QvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtc3BhY2VzLWFuZC10YWJzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uLy4uL3N0b3JlL0dsb2JhbFN0YXRlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgZmlsdGVyU2VhcmNoIGZyb20gJy4uLy4uL3V0aWxzL2ZpbHRlclNlYXJjaCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90YWlsd2luZC9IZWFkZXInO1xyXG5pbXBvcnQgeyBFeWVJY29uLCBFeWVPZmZJY29uLCBQZW5jaWxBbHRJY29uLCBUcmFzaEljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L291dGxpbmUnO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpblByb2R1Y3RNYW5hZ2VyKCkge1xyXG5cdGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuXHRjb25zdCB7IGNhdGVnb3JpZXMsIGF1dGggfSA9IHN0YXRlO1xyXG5cdGNvbnN0IHsgdXNlciB9ID0gYXV0aDtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0Y29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSh7IGFsbDogdHJ1ZSwgaGlkZGVuOiBmYWxzZSwgYWN0OiBmYWxzZSB9KTtcclxuXHRjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG5cdGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcblx0Y29uc3QgW3VybFJlcSwgc2V0VXJsUmVxXSA9IHVzZVN0YXRlKCdnZXRMaXN0ZWQnKTtcclxuXHJcblx0Y29uc3QgY2F0ZWdvcnlRID0gcm91dGVyLnF1ZXJ5LmNhdGVnb3J5IHx8ICdhbGwnO1xyXG5cdGNvbnN0IHNvcnQgPSByb3V0ZXIucXVlcnkuc29ydCB8fCAnJztcclxuXHRjb25zdCBzZWFyY2ggPSByb3V0ZXIucXVlcnkuc2VhcmNoIHx8ICdhbGwnO1xyXG5cdGNvbnN0IHBhZ2UgPSByb3V0ZXIucXVlcnkucGFnZSB8fCAxO1xyXG5cdGNvbnN0IGxpbWl0ID0gcm91dGVyLnF1ZXJ5LmxpbWl0IHx8IDEyO1xyXG5cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2VUaXRsZSA9IGUgPT4ge1xyXG5cdFx0c2V0TmFtZShlLnRhcmdldC52YWx1ZSk7XHJcblx0XHRmaWx0ZXJTZWFyY2goeyByb3V0ZXIsIHNlYXJjaDogZS50YXJnZXQudmFsdWUsIHBhZ2U6IDEgfSk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVDaGFuZ2VDYXRlZ29yeSA9IGUgPT4ge1xyXG5cdFx0c2V0Q2F0ZWdvcnkoZS50YXJnZXQudmFsdWUpO1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBjYXRlZ29yeTogZS50YXJnZXQudmFsdWUsIHBhZ2U6IDEgfSk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVTZWFyY2hCdG4gPSAoKSA9PiB7XHJcblx0XHRmaWx0ZXJTZWFyY2goeyByb3V0ZXIsIHNlYXJjaDogJ2FsbCcgfSk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IGdldEFsbFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuXHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0YXdhaXQgYXhpb3NcclxuXHRcdFx0XHRcdC5nZXQoXHJcblx0XHRcdFx0XHRcdGVuY29kZVVSSShcclxuXHRcdFx0XHRcdFx0XHRgL2FwaS9wcm9kdWN0LyR7dXJsUmVxfT9wYWdlPSR7cGFnZX0mY2F0ZWdvcnk9JHtjYXRlZ29yeVF9JnNvcnQ9JHtzb3J0fSZ0aXRsZT0ke3NlYXJjaH0mbGltaXQ9JHtsaW1pdH1gXHJcblx0XHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHRcdHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBhdXRoLnRva2VuIH0gfVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0LnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmVycikgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0c2V0UHJvZHVjdHMocmVzLmRhdGEucHJvZHVjdHMpO1xyXG5cdFx0XHRcdFx0XHRzZXRSZXN1bHQocmVzLmRhdGEucmVzdWx0KTtcclxuXHJcblx0XHRcdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGlmICh1c2VyICYmIHVzZXIucm9sZSA9PT0gJ2FkbWluJykgZ2V0QWxsUHJvZHVjdHMoKTtcclxuXHR9LCBbcm91dGVyLnF1ZXJ5LCB1cmxSZXFdKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQWxsID0gKCkgPT4ge1xyXG5cdFx0c2V0VXJsUmVxKCdnZXRMaXN0ZWQnKTtcclxuXHRcdHNldEN1cnJlbnRQYWdlKDEpO1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBwYWdlOiAxIH0pO1xyXG5cdFx0c2V0QWN0aXZlKHsgYWxsOiB0cnVlLCBoaWRkZW46IGZhbHNlLCBhY3Q6IGZhbHNlIH0pO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlSGlkZGVuID0gKCkgPT4ge1xyXG5cdFx0c2V0VXJsUmVxKCdnZXRVbkxpc3RlZCcpO1xyXG5cdFx0c2V0Q3VycmVudFBhZ2UoMSk7XHJcblx0XHRmaWx0ZXJTZWFyY2goeyByb3V0ZXIsIHBhZ2U6IDEgfSk7XHJcblx0XHRzZXRBY3RpdmUoeyBhbGw6IGZhbHNlLCBoaWRkZW46IHRydWUsIGFjdDogZmFsc2UgfSk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVBY3RpdmUgPSAoKSA9PiB7XHJcblx0XHRzZXRVcmxSZXEoJ2dldEFjdGl2ZScpO1xyXG5cdFx0c2V0Q3VycmVudFBhZ2UoMSk7XHJcblx0XHRmaWx0ZXJTZWFyY2goeyByb3V0ZXIsIHBhZ2U6IDEgfSk7XHJcblx0XHRzZXRBY3RpdmUoeyBhbGw6IGZhbHNlLCBoaWRkZW46IGZhbHNlLCBhY3Q6IHRydWUgfSk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVEZWxldGUgPSBpZCA9PiB7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdBRERfTU9EQUwnLFxyXG5cdFx0XHRwYXlsb2FkOiB7IGlkLCB0b2tlbjogYXV0aC50b2tlbiwgdHlwZTogJ1BST0RVQ1QnLCByb2xlOiBhdXRoLnVzZXIucm9sZSB9LFxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVFZGl0ID0gKGlkLCBpc0RlbGV0ZWQpID0+IHtcclxuXHRcdGlmIChpc0RlbGV0ZWQpIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGVycm9yOiAnVnVpIGzDsm5nIGLhu48g4bqpbiDEkeG7gyBjaOG7iW5oIHPhu61hLicgfSB9KTtcclxuXHRcdHJvdXRlci5wdXNoKGAvY3JlYXRlLyR7aWR9YCk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVTaG93ID0gYXN5bmMgKGlkLCBpc0RlbGV0ZWQpID0+IHtcclxuXHRcdGlmICghaXNEZWxldGVkKSByZXR1cm47XHJcblx0XHR0cnkge1xyXG5cdFx0XHRhd2FpdCBheGlvc1xyXG5cdFx0XHRcdC5wYXRjaChgL2FwaS9wcm9kdWN0LyR7aWR9YCwgbnVsbCwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGF1dGgudG9rZW4gfSB9KVxyXG5cdFx0XHRcdC50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuZXJyKSByZXR1cm47XHJcblxyXG5cdFx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge30gfSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBlcnJvcjogZXJyLm1lc3NhZ2UgfSB9KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRpZiAoIXVzZXIgfHwgdXNlci5yb2xlICE9PSAnYWRtaW4nKSByZXR1cm4gbnVsbDtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdiZy1ncmF5LTEwMCBtaW4taC1zY3JlZW4nPlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+UXXhuqNuIGzDvSBz4bqjbiBwaOG6qW08L3RpdGxlPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblxyXG5cdFx0XHQ8SGVhZGVyIC8+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWF4LXctc2NyZWVuLTJ4bCBteC1hdXRvIGJnLXdoaXRlIHAtNSc+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1ldmVubHkgcHgtMyBwdC0zIHRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNjAwIGJvcmRlci1iLTIgcGItNCBib3JkZXItZ3JheS0zMDAnPlxyXG5cdFx0XHRcdFx0PGg1XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZUFsbH1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgaG92ZXI6b3V0bGluZS1ibGFja19zb2xpZCBwLTIgY3Vyc29yLXBvaW50ZXIgJHtcclxuXHRcdFx0XHRcdFx0XHRhY3RpdmUuYWxsID8gJ3RleHQtcmVkLTQwMCcgOiAnJ1xyXG5cdFx0XHRcdFx0XHR9YH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0VOG6pXQgY+G6o1xyXG5cdFx0XHRcdFx0PC9oNT5cclxuXHJcblx0XHRcdFx0XHQ8aDVcclxuXHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlQWN0aXZlfVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bob3ZlcjpvdXRsaW5lLWJsYWNrX3NvbGlkIHAtMiBjdXJzb3ItcG9pbnRlciAke1xyXG5cdFx0XHRcdFx0XHRcdGFjdGl2ZS5hY3QgPyAndGV4dC1yZWQtNDAwJyA6ICcnXHJcblx0XHRcdFx0XHRcdH1gfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHTEkGFuZyBob+G6oXQgxJHhu5luZ1xyXG5cdFx0XHRcdFx0PC9oNT5cclxuXHJcblx0XHRcdFx0XHQ8aDVcclxuXHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlSGlkZGVufVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bob3ZlcjpvdXRsaW5lLWJsYWNrX3NvbGlkIHAtMiBjdXJzb3ItcG9pbnRlciAke1xyXG5cdFx0XHRcdFx0XHRcdGFjdGl2ZS5oaWRkZW4gPyAndGV4dC1yZWQtNDAwJyA6ICcnXHJcblx0XHRcdFx0XHRcdH1gfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHTEkMOjIOG6qW5cclxuXHRcdFx0XHRcdDwvaDU+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBwLTUgc3BhY2UteS00IGxnOnNwYWNlLXgtMTAgbGc6c3BhY2UteS0wJz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC01Jz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9Jyc+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQnPlTDqm4gc+G6o24gcGjhuqltPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdib3JkZXIgYm9yZGVyLWdyYXktMzAwIHAtMyByb3VuZGVkLW1kIGZsZXgtZ3JvdydcclxuXHRcdFx0XHRcdFx0XHRuYW1lPSduYW1lJ1xyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtuYW1lfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUaXRsZX1cclxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nTmjhuq1wIHTDqm4nXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsJz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggc3BhY2UteC01IGl0ZW1zLWNlbnRlcic+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQnPkRhbmggbeG7pWM8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PHNlbGVjdFxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT0nY2F0ZWdvcnknXHJcblx0XHRcdFx0XHRcdFx0XHRpZD0nY2F0ZWdvcnknXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Y2F0ZWdvcnl9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlQ2F0ZWdvcnl9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZsZXgtZ3JvdyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHAtMyByb3VuZGVkLW1kIGNhcGl0YWxpemUnXHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nYWxsJz4tLSBU4bqldCBj4bqjIC0tPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHR7Y2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGtleT17Y2F0ZWdvcnkuX2lkfSB2YWx1ZT17Y2F0ZWdvcnkuX2lkfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Y2F0ZWdvcnkubmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2J1dHRvbiB3LTM2IGN1cnNvci1wb2ludGVyIGZsZXgganVzdGlmeS1jZW50ZXInPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9Jycgb25DbGljaz17aGFuZGxlU2VhcmNoQnRufT5cclxuXHRcdFx0XHRcdFx0VMOsbSBraeG6v21cclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBzcGFjZS15LTMgbGc6c3BhY2UteS0wIGxnOmp1c3RpZnktYmV0d2VlbiBteS00Jz5cclxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9J3RleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwJz5cclxuXHRcdFx0XHRcdFx0e2xpbWl0ICogcGFnZSA+IHJlc3VsdCA/IHJlc3VsdCA6IGxpbWl0ICogcGFnZX0ve3Jlc3VsdH0gU+G6o24gUGjhuqltXHJcblx0XHRcdFx0XHQ8L2gxPlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdidXR0b24tYmx1ZSBtYXgtdy1zbSBmbGV4IGp1c3RpZnktY2VudGVyIHAtMyc+XHJcblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9jcmVhdGUnPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nJz4rIFRow6ptIHPhuqNuIHBo4bqpbSBt4bubaTwvYT5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgb3ZlcmZsb3cteC1hdXRvJz5cclxuXHRcdFx0XHRcdDx0YWJsZSBjbGFzc05hbWU9Jyc+XHJcblx0XHRcdFx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3sgbWluV2lkdGg6IDQwMCB9fT5Uw6puIHPhuqNuIHBo4bqpbTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3sgbWluV2lkdGg6IDgwIH19Pkdpw6E8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt7IG1pbldpZHRoOiA4MCB9fT5LaG88L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt7IG1pbldpZHRoOiA4MCB9fT7EkMOjIGLDoW48L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt7IG1pbldpZHRoOiAxMDAgfX0+Q2jhu4luaCBz4butYTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0PC90aGVhZD5cclxuXHRcdFx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0XHRcdHtwcm9kdWN0cy5tYXAoaXRlbSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8dHIga2V5PXtpdGVtLl9pZH0gY2xhc3NOYW1lPSdib3JkZXItYiBib3JkZXItZ3JheS0zMDAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgcHktNCBzcGFjZS14LTJgfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2l0ZW0uaW1hZ2VzWzBdLnVybH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD0n4bqibmggYsOsYSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YCR7aXRlbS5kZWxldGVkID8gJ29wYWNpdHktNDAnIDogJyd9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGhlaWdodDogNTAsIHdpZHRoOiA1MCB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLmRlbGV0ZWQgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c21hbGwgY2xhc3NOYW1lPSd0ZXh0LXJlZC0zMDAnPsSQw6Mg4bqpbjwvc21hbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdjYXBpdGFsaXplJz57aXRlbS50aXRsZX08L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9J3RleHQtcmVkLTQwMCBhbGlnbi1taWRkbGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzbWFsbD4mI3gyMEFCOzwvc21hbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0ucHJpY2VTYWxlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQudG9TdHJpbmcoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcuJyl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+e2l0ZW0uaW5TdG9ja308L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+e2l0ZW0uc29sZH08L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgc3BhY2UteC0zJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHshaXRlbS5kZWxldGVkICYmIChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFBlbmNpbEFsdEljb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlRWRpdChpdGVtLl9pZCwgaXRlbS5kZWxldGVkKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2gtNSB0ZXh0LWJsdWUtNTAwIGN1cnNvci1wb2ludGVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5kZWxldGVkID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8RXllT2ZmSWNvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVTaG93KGl0ZW0uX2lkLCBpdGVtLmRlbGV0ZWQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGgtNSB0ZXh0LXJlZC01MDAgY3Vyc29yLXBvaW50ZXJgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEV5ZUljb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlU2hvdyhpdGVtLl9pZCwgaXRlbS5kZWxldGVkKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BoLTUgdGV4dC1ncmVlbi01MDAgY3Vyc29yLXBvaW50ZXJgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7YWN0aXZlLmhpZGRlbiAmJiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUcmFzaEljb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2gtNSB0ZXh0LXJlZC01MDAnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKGl0ZW0uX2lkKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHQ8L3Rib2R5PlxyXG5cdFx0XHRcdFx0PC90YWJsZT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PFBhZ2luYXRpb24gcmVzdWx0PXtyZXN1bHR9IC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkIiwiRGF0YUNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwiYXhpb3MiLCJmaWx0ZXJTZWFyY2giLCJIZWFkZXIiLCJFeWVJY29uIiwiRXllT2ZmSWNvbiIsIlBlbmNpbEFsdEljb24iLCJUcmFzaEljb24iLCJQYWdpbmF0aW9uIiwiTWFpblByb2R1Y3RNYW5hZ2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsImNhdGVnb3JpZXMiLCJhdXRoIiwidXNlciIsInJvdXRlciIsIm5hbWUiLCJzZXROYW1lIiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJhbGwiLCJoaWRkZW4iLCJhY3QiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwidXJsUmVxIiwic2V0VXJsUmVxIiwiY2F0ZWdvcnlRIiwicXVlcnkiLCJzb3J0Iiwic2VhcmNoIiwicGFnZSIsImxpbWl0IiwiaGFuZGxlQ2hhbmdlVGl0bGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDaGFuZ2VDYXRlZ29yeSIsImhhbmRsZVNlYXJjaEJ0biIsImdldEFsbFByb2R1Y3RzIiwidHlwZSIsInBheWxvYWQiLCJsb2FkaW5nIiwiZ2V0IiwiZW5jb2RlVVJJIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0b2tlbiIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZXJyIiwicm9sZSIsImhhbmRsZUFsbCIsImhhbmRsZUhpZGRlbiIsImhhbmRsZUFjdGl2ZSIsImhhbmRsZURlbGV0ZSIsImlkIiwiaGFuZGxlRWRpdCIsImlzRGVsZXRlZCIsImVycm9yIiwicHVzaCIsImhhbmRsZVNob3ciLCJwYXRjaCIsIm1lc3NhZ2UiLCJtYXAiLCJfaWQiLCJtaW5XaWR0aCIsIml0ZW0iLCJpbWFnZXMiLCJ1cmwiLCJkZWxldGVkIiwiaGVpZ2h0Iiwid2lkdGgiLCJ0aXRsZSIsInByaWNlU2FsZSIsInRvU3RyaW5nIiwicmVwbGFjZSIsImluU3RvY2siLCJzb2xkIl0sInNvdXJjZVJvb3QiOiIifQ==