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
                      className: "h-5 text-green-500 ".concat(item.deleted ? 'cursor-pointer' : '')
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
                      lineNumber: 285,
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
        lineNumber: 298,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC5iNDE3ZGVhMjNjNTE1NjNlODExZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNnQixrQkFBVCxHQUE4QjtBQUFBOztBQUFBOztBQUFBLG9CQUNoQmYsaURBQVUsQ0FBQ0ksMkRBQUQsQ0FETTtBQUFBLE1BQ3BDWSxLQURvQyxlQUNwQ0EsS0FEb0M7QUFBQSxNQUM3QkMsUUFENkIsZUFDN0JBLFFBRDZCOztBQUFBLE1BRXBDQyxVQUZvQyxHQUVmRixLQUZlLENBRXBDRSxVQUZvQztBQUFBLE1BRXhCQyxJQUZ3QixHQUVmSCxLQUZlLENBRXhCRyxJQUZ3QjtBQUFBLE1BR3BDQyxJQUhvQyxHQUczQkQsSUFIMkIsQ0FHcENDLElBSG9DO0FBSTVDLE1BQU1DLE1BQU0sR0FBR2hCLHNEQUFTLEVBQXhCOztBQUo0QyxrQkFNcEJILCtDQUFRLENBQUMsRUFBRCxDQU5ZO0FBQUEsTUFNckNvQixJQU5xQztBQUFBLE1BTS9CQyxPQU4rQjs7QUFBQSxtQkFPWnJCLCtDQUFRLENBQUMsRUFBRCxDQVBJO0FBQUEsTUFPckNzQixRQVBxQztBQUFBLE1BTzNCQyxXQVAyQjs7QUFBQSxtQkFRWnZCLCtDQUFRLENBQUMsRUFBRCxDQVJJO0FBQUEsTUFRckN3QixRQVJxQztBQUFBLE1BUTNCQyxXQVIyQjs7QUFBQSxtQkFTaEJ6QiwrQ0FBUSxDQUFDO0FBQUUwQixJQUFBQSxHQUFHLEVBQUUsSUFBUDtBQUFhQyxJQUFBQSxNQUFNLEVBQUUsS0FBckI7QUFBNEJDLElBQUFBLEdBQUcsRUFBRTtBQUFqQyxHQUFELENBVFE7QUFBQSxNQVNyQ0MsTUFUcUM7QUFBQSxNQVM3QkMsU0FUNkI7O0FBQUEsbUJBVWhCOUIsK0NBQVEs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RDFCO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFsQkYsRUE0QkVwRCxNQUFNLENBQUNGLE1BQVAsaUJBQ0EsOERBQUMsZ0VBQUQ7QUFDQywrQkFBUyxFQUFDLGtCQURYO0FBRUMsNkJBQU8sRUFBRTtBQUFBLCtCQUFNdUMsWUFBWSxDQUFDWSxJQUFJLENBQUNGLEdBQU4sQ0FBbEI7QUFBQTtBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBNUJEO0FBQUEsaUJBQVNFLElBQUksQ0FBQ0YsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURpQjtBQUFBLGFBQWpCO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFWRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckZELGVBeUtDLDhEQUFDLDREQUFEO0FBQVksY0FBTSxFQUFFN0M7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXpLRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQXFMQTs7R0EvUnVCbEI7VUFJUlY7OztLQUpRVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLXNwYWNlcy1hbmQtdGFicyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L25vLWltZy1lbGVtZW50ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi8uLi9zdG9yZS9HbG9iYWxTdGF0ZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGZpbHRlclNlYXJjaCBmcm9tICcuLi8uLi91dGlscy9maWx0ZXJTZWFyY2gnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGFpbHdpbmQvSGVhZGVyJztcclxuaW1wb3J0IHsgRXllSWNvbiwgRXllT2ZmSWNvbiwgUGVuY2lsQWx0SWNvbiwgVHJhc2hJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lJztcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5Qcm9kdWN0TWFuYWdlcigpIHtcclxuXHRjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcblx0Y29uc3QgeyBjYXRlZ29yaWVzLCBhdXRoIH0gPSBzdGF0ZTtcclxuXHRjb25zdCB7IHVzZXIgfSA9IGF1dGg7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoeyBhbGw6IHRydWUsIGhpZGRlbjogZmFsc2UsIGFjdDogZmFsc2UgfSk7XHJcblx0Y29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuXHRjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG5cdGNvbnN0IFt1cmxSZXEsIHNldFVybFJlcV0gPSB1c2VTdGF0ZSgnZ2V0TGlzdGVkJyk7XHJcblxyXG5cdGNvbnN0IGNhdGVnb3J5USA9IHJvdXRlci5xdWVyeS5jYXRlZ29yeSB8fCAnYWxsJztcclxuXHRjb25zdCBzb3J0ID0gcm91dGVyLnF1ZXJ5LnNvcnQgfHwgJyc7XHJcblx0Y29uc3Qgc2VhcmNoID0gcm91dGVyLnF1ZXJ5LnNlYXJjaCB8fCAnYWxsJztcclxuXHRjb25zdCBwYWdlID0gcm91dGVyLnF1ZXJ5LnBhZ2UgfHwgMTtcclxuXHRjb25zdCBsaW1pdCA9IHJvdXRlci5xdWVyeS5saW1pdCB8fCAxMjtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlVGl0bGUgPSBlID0+IHtcclxuXHRcdHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBzZWFyY2g6IGUudGFyZ2V0LnZhbHVlLCBwYWdlOiAxIH0pO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlQ2F0ZWdvcnkgPSBlID0+IHtcclxuXHRcdHNldENhdGVnb3J5KGUudGFyZ2V0LnZhbHVlKTtcclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgY2F0ZWdvcnk6IGUudGFyZ2V0LnZhbHVlLCBwYWdlOiAxIH0pO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlU2VhcmNoQnRuID0gKCkgPT4ge1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBzZWFyY2g6ICdhbGwnIH0pO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBnZXRBbGxQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcblxyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGF3YWl0IGF4aW9zXHJcblx0XHRcdFx0XHQuZ2V0KFxyXG5cdFx0XHRcdFx0XHRlbmNvZGVVUkkoXHJcblx0XHRcdFx0XHRcdFx0YC9hcGkvcHJvZHVjdC8ke3VybFJlcX0/cGFnZT0ke3BhZ2V9JmNhdGVnb3J5PSR7Y2F0ZWdvcnlRfSZzb3J0PSR7c29ydH0mdGl0bGU9JHtzZWFyY2h9JmxpbWl0PSR7bGltaXR9YFxyXG5cdFx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0XHR7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYXV0aC50b2tlbiB9IH1cclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdC50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5lcnIpIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHJcblx0XHRcdFx0XHRcdHNldFByb2R1Y3RzKHJlcy5kYXRhLnByb2R1Y3RzKTtcclxuXHRcdFx0XHRcdFx0c2V0UmVzdWx0KHJlcy5kYXRhLnJlc3VsdCk7XHJcblxyXG5cdFx0XHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRpZiAodXNlciAmJiB1c2VyLnJvbGUgPT09ICdhZG1pbicpIGdldEFsbFByb2R1Y3RzKCk7XHJcblx0fSwgW3JvdXRlci5xdWVyeSwgdXJsUmVxXSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUFsbCA9ICgpID0+IHtcclxuXHRcdHNldFVybFJlcSgnZ2V0TGlzdGVkJyk7XHJcblx0XHRzZXRDdXJyZW50UGFnZSgxKTtcclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgcGFnZTogMSB9KTtcclxuXHRcdHNldEFjdGl2ZSh7IGFsbDogdHJ1ZSwgaGlkZGVuOiBmYWxzZSwgYWN0OiBmYWxzZSB9KTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZUhpZGRlbiA9ICgpID0+IHtcclxuXHRcdHNldFVybFJlcSgnZ2V0VW5MaXN0ZWQnKTtcclxuXHRcdHNldEN1cnJlbnRQYWdlKDEpO1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBwYWdlOiAxIH0pO1xyXG5cdFx0c2V0QWN0aXZlKHsgYWxsOiBmYWxzZSwgaGlkZGVuOiB0cnVlLCBhY3Q6IGZhbHNlIH0pO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlQWN0aXZlID0gKCkgPT4ge1xyXG5cdFx0c2V0VXJsUmVxKCdnZXRBY3RpdmUnKTtcclxuXHRcdHNldEN1cnJlbnRQYWdlKDEpO1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBwYWdlOiAxIH0pO1xyXG5cdFx0c2V0QWN0aXZlKHsgYWxsOiBmYWxzZSwgaGlkZGVuOiBmYWxzZSwgYWN0OiB0cnVlIH0pO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlRGVsZXRlID0gaWQgPT4ge1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnQUREX01PREFMJyxcclxuXHRcdFx0cGF5bG9hZDogeyBpZCwgdG9rZW46IGF1dGgudG9rZW4sIHR5cGU6ICdQUk9EVUNUJywgcm9sZTogYXV0aC51c2VyLnJvbGUgfSxcclxuXHRcdH0pO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlRWRpdCA9IChpZCwgaXNEZWxldGVkKSA9PiB7XHJcblx0XHRpZiAoaXNEZWxldGVkKSByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBlcnJvcjogJ1Z1aSBsw7JuZyBi4buPIOG6qW4gxJHhu4MgY2jhu4luaCBz4butYS4nIH0gfSk7XHJcblx0XHRyb3V0ZXIucHVzaChgL2NyZWF0ZS8ke2lkfWApO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlU2hvdyA9IGFzeW5jIChpZCwgaXNEZWxldGVkKSA9PiB7XHJcblx0XHRpZiAoIWlzRGVsZXRlZCkgcmV0dXJuO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0YXdhaXQgYXhpb3NcclxuXHRcdFx0XHQucGF0Y2goYC9hcGkvcHJvZHVjdC8ke2lkfWAsIG51bGwsIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBhdXRoLnRva2VuIH0gfSlcclxuXHRcdFx0XHQudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmVycikgcmV0dXJuO1xyXG5cclxuXHRcdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgZXJyb3I6IGVyci5tZXNzYWdlIH0gfSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0aWYgKCF1c2VyIHx8IHVzZXIucm9sZSAhPT0gJ2FkbWluJykgcmV0dXJuIG51bGw7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nYmctZ3JheS0xMDAgbWluLWgtc2NyZWVuJz5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PHRpdGxlPlF14bqjbiBsw70gc+G6o24gcGjhuqltPC90aXRsZT5cclxuXHRcdFx0PC9IZWFkPlxyXG5cclxuXHRcdFx0PEhlYWRlciAvPlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J21heC13LXNjcmVlbi0yeGwgbXgtYXV0byBiZy13aGl0ZSBwLTUnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktZXZlbmx5IHB4LTMgcHQtMyB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTYwMCBib3JkZXItYi0yIHBiLTQgYm9yZGVyLWdyYXktMzAwJz5cclxuXHRcdFx0XHRcdDxoNVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVBbGx9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGhvdmVyOm91dGxpbmUtYmxhY2tfc29saWQgcC0yIGN1cnNvci1wb2ludGVyICR7XHJcblx0XHRcdFx0XHRcdFx0YWN0aXZlLmFsbCA/ICd0ZXh0LXJlZC00MDAnIDogJydcclxuXHRcdFx0XHRcdFx0fWB9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFThuqV0IGPhuqNcclxuXHRcdFx0XHRcdDwvaDU+XHJcblxyXG5cdFx0XHRcdFx0PGg1XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZUFjdGl2ZX1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgaG92ZXI6b3V0bGluZS1ibGFja19zb2xpZCBwLTIgY3Vyc29yLXBvaW50ZXIgJHtcclxuXHRcdFx0XHRcdFx0XHRhY3RpdmUuYWN0ID8gJ3RleHQtcmVkLTQwMCcgOiAnJ1xyXG5cdFx0XHRcdFx0XHR9YH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0xJBhbmcgaG/huqF0IMSR4buZbmdcclxuXHRcdFx0XHRcdDwvaDU+XHJcblxyXG5cdFx0XHRcdFx0PGg1XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZUhpZGRlbn1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgaG92ZXI6b3V0bGluZS1ibGFja19zb2xpZCBwLTIgY3Vyc29yLXBvaW50ZXIgJHtcclxuXHRcdFx0XHRcdFx0XHRhY3RpdmUuaGlkZGVuID8gJ3RleHQtcmVkLTQwMCcgOiAnJ1xyXG5cdFx0XHRcdFx0XHR9YH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0xJDDoyDhuqluXHJcblx0XHRcdFx0XHQ8L2g1PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBpdGVtcy1jZW50ZXIgcC01IHNwYWNlLXktNCBsZzpzcGFjZS14LTEwIGxnOnNwYWNlLXktMCc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNSc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPScnPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1sZyBmb250LXNlbWlib2xkJz5Uw6puIHPhuqNuIHBo4bqpbTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwLTMgcm91bmRlZC1tZCBmbGV4LWdyb3cnXHJcblx0XHRcdFx0XHRcdFx0bmFtZT0nbmFtZSdcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17bmFtZX1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlVGl0bGV9XHJcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J05o4bqtcCB0w6puJ1xyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctZnVsbCc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IHNwYWNlLXgtNSBpdGVtcy1jZW50ZXInPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1sZyBmb250LXNlbWlib2xkJz5EYW5oIG3hu6VjPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDxzZWxlY3RcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J2NhdGVnb3J5J1xyXG5cdFx0XHRcdFx0XHRcdFx0aWQ9J2NhdGVnb3J5J1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2NhdGVnb3J5fVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZUNhdGVnb3J5fVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmbGV4LWdyb3cgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwLTMgcm91bmRlZC1tZCBjYXBpdGFsaXplJ1xyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9J2FsbCc+LS0gVOG6pXQgY+G6oyAtLTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0e2NhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBrZXk9e2NhdGVnb3J5Ll9pZH0gdmFsdWU9e2NhdGVnb3J5Ll9pZH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e2NhdGVnb3J5Lm5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdidXR0b24gdy0zNiBjdXJzb3ItcG9pbnRlciBmbGV4IGp1c3RpZnktY2VudGVyJz5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPScnIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaEJ0bn0+XHJcblx0XHRcdFx0XHRcdFTDrG0ga2nhur9tXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgc3BhY2UteS0zIGxnOnNwYWNlLXktMCBsZzpqdXN0aWZ5LWJldHdlZW4gbXktNCc+XHJcblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPSd0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMCc+XHJcblx0XHRcdFx0XHRcdHtsaW1pdCAqIHBhZ2UgPiByZXN1bHQgPyByZXN1bHQgOiBsaW1pdCAqIHBhZ2V9L3tyZXN1bHR9IFPhuqNuIFBo4bqpbVxyXG5cdFx0XHRcdFx0PC9oMT5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uLWJsdWUgbWF4LXctc20gZmxleCBqdXN0aWZ5LWNlbnRlciBwLTMnPlxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvY3JlYXRlJz5cclxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9Jyc+KyBUaMOqbSBz4bqjbiBwaOG6qW0gbeG7m2k8L2E+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIG92ZXJmbG93LXgtYXV0byc+XHJcblx0XHRcdFx0XHQ8dGFibGUgY2xhc3NOYW1lPScnPlxyXG5cdFx0XHRcdFx0XHQ8dGhlYWQ+XHJcblx0XHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt7IG1pbldpZHRoOiA0MDAgfX0+VMOqbiBz4bqjbiBwaOG6qW08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt7IG1pbldpZHRoOiA4MCB9fT5HacOhPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT17eyBtaW5XaWR0aDogODAgfX0+S2hvPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT17eyBtaW5XaWR0aDogODAgfX0+xJDDoyBiw6FuPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT17eyBtaW5XaWR0aDogMTAwIH19PkNo4buJbmggc+G7rWE8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdFx0XHR7cHJvZHVjdHMubWFwKGl0ZW0gPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PHRyIGtleT17aXRlbS5faWR9IGNsYXNzTmFtZT0nYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIHB5LTQgc3BhY2UteC0yYH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtpdGVtLmltYWdlc1swXS51cmx9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9J+G6om5oIGLDrGEnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Ake2l0ZW0uZGVsZXRlZCA/ICdvcGFjaXR5LTQwJyA6ICcnfWB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBoZWlnaHQ6IDUwLCB3aWR0aDogNTAgfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5kZWxldGVkICYmIChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNtYWxsIGNsYXNzTmFtZT0ndGV4dC1yZWQtMzAwJz7EkMOjIOG6qW48L3NtYWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nY2FwaXRhbGl6ZSc+e2l0ZW0udGl0bGV9PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj48L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3NOYW1lPSd0ZXh0LXJlZC00MDAgYWxpZ24tbWlkZGxlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c21hbGw+JiN4MjBBQjs8L3NtYWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLnByaWNlU2FsZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnRvU3RyaW5nKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLicpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPntpdGVtLmluU3RvY2t9PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPntpdGVtLnNvbGR9PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIHNwYWNlLXgtMyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IWl0ZW0uZGVsZXRlZCAmJiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxQZW5jaWxBbHRJY29uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZUVkaXQoaXRlbS5faWQsIGl0ZW0uZGVsZXRlZClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdoLTUgdGV4dC1ibHVlLTUwMCBjdXJzb3ItcG9pbnRlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0uZGVsZXRlZCA/IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEV5ZU9mZkljb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlU2hvdyhpdGVtLl9pZCwgaXRlbS5kZWxldGVkKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BoLTUgdGV4dC1yZWQtNTAwIGN1cnNvci1wb2ludGVyYH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxFeWVJY29uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZVNob3coaXRlbS5faWQsIGl0ZW0uZGVsZXRlZClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgaC01IHRleHQtZ3JlZW4tNTAwICR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpdGVtLmRlbGV0ZWQgPyAnY3Vyc29yLXBvaW50ZXInIDogJydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2FjdGl2ZS5oaWRkZW4gJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VHJhc2hJY29uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdoLTUgdGV4dC1yZWQtNTAwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShpdGVtLl9pZCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0XHRcdDwvdGFibGU+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxQYWdpbmF0aW9uIHJlc3VsdD17cmVzdWx0fSAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZCIsIkRhdGFDb250ZXh0IiwidXNlUm91dGVyIiwiTGluayIsImF4aW9zIiwiZmlsdGVyU2VhcmNoIiwiSGVhZGVyIiwiRXllSWNvbiIsIkV5ZU9mZkljb24iLCJQZW5jaWxBbHRJY29uIiwiVHJhc2hJY29uIiwiUGFnaW5hdGlvbiIsIk1haW5Qcm9kdWN0TWFuYWdlciIsInN0YXRlIiwiZGlzcGF0Y2giLCJjYXRlZ29yaWVzIiwiYXV0aCIsInVzZXIiLCJyb3V0ZXIiLCJuYW1lIiwic2V0TmFtZSIsImNhdGVnb3J5Iiwic2V0Q2F0ZWdvcnkiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiYWxsIiwiaGlkZGVuIiwiYWN0IiwiYWN0aXZlIiwic2V0QWN0aXZlIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInVybFJlcSIsInNldFVybFJlcSIsImNhdGVnb3J5USIsInF1ZXJ5Iiwic29ydCIsInNlYXJjaCIsInBhZ2UiLCJsaW1pdCIsImhhbmRsZUNoYW5nZVRpdGxlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlQ2F0ZWdvcnkiLCJoYW5kbGVTZWFyY2hCdG4iLCJnZXRBbGxQcm9kdWN0cyIsInR5cGUiLCJwYXlsb2FkIiwibG9hZGluZyIsImdldCIsImVuY29kZVVSSSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJ0aGVuIiwicmVzIiwiZGF0YSIsImVyciIsInJvbGUiLCJoYW5kbGVBbGwiLCJoYW5kbGVIaWRkZW4iLCJoYW5kbGVBY3RpdmUiLCJoYW5kbGVEZWxldGUiLCJpZCIsImhhbmRsZUVkaXQiLCJpc0RlbGV0ZWQiLCJlcnJvciIsInB1c2giLCJoYW5kbGVTaG93IiwicGF0Y2giLCJtZXNzYWdlIiwibWFwIiwiX2lkIiwibWluV2lkdGgiLCJpdGVtIiwiaW1hZ2VzIiwidXJsIiwiZGVsZXRlZCIsImhlaWdodCIsIndpZHRoIiwidGl0bGUiLCJwcmljZVNhbGUiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJpblN0b2NrIiwic29sZCJdLCJzb3VyY2VSb290IjoiIn0=