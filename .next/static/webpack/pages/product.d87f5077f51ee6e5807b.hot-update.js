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
        lineNumber: 242,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tailwind_Header__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 245,
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
          lineNumber: 249,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
          onClick: handleActive,
          className: "hover:outline-black_solid p-2 ".concat(active.act ? 'text-red-400' : 'cursor-pointer'),
          children: "\u0110ang ho\u1EA1t \u0111\u1ED9ng"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
          onClick: handleHidden,
          className: "hover:outline-black_solid p-2 ".concat(active.hidden ? 'text-red-400' : 'cursor-pointer'),
          children: "\u0110\xE3 \u1EA9n"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 248,
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
              lineNumber: 280,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 279,
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
            lineNumber: 283,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 278,
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
              lineNumber: 295,
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
                lineNumber: 303,
                columnNumber: 9
              }, this), categories.map(function (category) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  value: category._id,
                  children: category.name
                }, category._id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 305,
                  columnNumber: 10
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 296,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 294,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "button w-36 cursor-pointer flex justify-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "",
          onClick: handleSearchBtn,
          children: "T\xECm ki\u1EBFm"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:justify-between my-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "text-xl font-semibold text-gray-700",
          children: [products.length * currentPage < limit * currentPage ? result : products.length * currentPage, "/", result, " S\u1EA3n Ph\u1EA9m"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 321,
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
              lineNumber: 330,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 329,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 328,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 320,
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
                lineNumber: 339,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 80
                },
                children: "Gi\xE1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 340,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 80
                },
                children: "Kho"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 341,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 80
                },
                children: "\u0110\xE3 b\xE1n"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 342,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 100
                },
                children: "Ch\u1EC9nh s\u1EEDa"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 343,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 338,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 337,
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
                    lineNumber: 350,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex flex-col",
                    children: [item.deleted && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
                      className: "text-red-300",
                      children: "\u0110\xE3 \u1EA9n"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 359,
                      columnNumber: 13
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                      className: "capitalize",
                      children: item.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 361,
                      columnNumber: 12
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 357,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 364,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 349,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "text-red-400 align-middle",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
                    children: "\u20AB"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 368,
                    columnNumber: 11
                  }, _this), item.priceSale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 367,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "text-center",
                  children: item.inStock
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 374,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "text-center",
                  children: item.sold
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 375,
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
                      lineNumber: 378,
                      columnNumber: 12
                    }, _this), item.deleted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.EyeOffIcon, {
                      onClick: function onClick() {
                        return handleShow(item._id, item.deleted);
                      },
                      className: "h-5 text-red-500 ".concat(item.deleted ? 'cursor-pointer' : '')
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 386,
                      columnNumber: 13
                    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.EyeIcon, {
                      onClick: function onClick() {
                        return handleShow(item._id, item.deleted);
                      },
                      className: "h-5 text-green-500 ".concat(item.deleted ? 'cursor-pointer' : '')
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 395,
                      columnNumber: 13
                    }, _this), active.hidden && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.TrashIcon, {
                      className: "h-5 text-red-500",
                      onClick: function onClick() {
                        return handleDelete(item._id);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 406,
                      columnNumber: 13
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 377,
                    columnNumber: 11
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 376,
                  columnNumber: 10
                }, _this)]
              }, item._id, true, {
                fileName: _jsxFileName,
                lineNumber: 348,
                columnNumber: 9
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 346,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "d-flex justify-content-center my-4 pt-4",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "pagination",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "btn page-item ".concat(currentPage === 1 ? 'disabled' : ''),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "page-link text-danger font-weight-bold",
              tabIndex: "-1",
              onClick: handlePreviousPage,
              children: "\xAB"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 424,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 423,
            columnNumber: 7
          }, this), maxPage > 6 ? newTotalPage.map(function (page) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "btn page-item ".concat(page == '...' ? 'disabled' : '', " ").concat(currentPage === page ? 'active' : ''),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: handlePagination,
                className: "page-link font-weight-bold ".concat(currentPage === page ? 'text-light' : 'text-danger'),
                children: page
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 440,
                columnNumber: 11
              }, _this)
            }, page, false, {
              fileName: _jsxFileName,
              lineNumber: 434,
              columnNumber: 10
            }, _this);
          }) : totalPage.map(function (page) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "btn page-item ".concat(page == '...' ? 'disabled' : '', " ").concat(currentPage === page ? 'active' : ''),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: handlePagination,
                className: "page-link font-weight-bold ".concat(currentPage === page ? 'text-light' : 'text-danger'),
                children: page
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 459,
                columnNumber: 11
              }, _this)
            }, page, false, {
              fileName: _jsxFileName,
              lineNumber: 453,
              columnNumber: 10
            }, _this);
          }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "btn page-item ".concat(currentPage === maxPage ? 'disabled' : ''),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "page-link text-danger font-weight-bold",
              tabIndex: "-1",
              onClick: handleNextPage,
              children: "\xBB"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 473,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 472,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "mobile_hidden",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "btn-group dropup",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                type: "button",
                className: "btn btn-outlined dropdown-toggle mt-2 text-secondary",
                "data-toggle": "dropdown",
                "aria-haspopup": "true",
                "aria-expanded": "false",
                children: [limitNumber, "/trang"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 484,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "dropdown-menu",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  className: "dropdown-item",
                  onClick: function onClick() {
                    return setLimitNumber(12);
                  },
                  children: "12"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 495,
                  columnNumber: 10
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  className: "dropdown-item",
                  onClick: function onClick() {
                    return setLimitNumber(24);
                  },
                  children: "24"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 501,
                  columnNumber: 10
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  className: "dropdown-item",
                  onClick: function onClick() {
                    return setLimitNumber(48);
                  },
                  children: "48"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 507,
                  columnNumber: 10
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 494,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 483,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 482,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 422,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 421,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 240,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC5kODdmNTA3N2Y1MWVlNmU1ODA3Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTZSxLQUFULENBQWVDLEtBQWYsRUFBc0JDLEdBQXRCLEVBQTJCO0FBQzFCLFNBQU9DLEtBQUssQ0FBQ0QsR0FBRyxHQUFHRCxLQUFOLEdBQWMsQ0FBZixDQUFMLENBQ0xHLElBREssR0FFTEMsR0FGSyxDQUVELFVBQUNDLENBQUQsRUFBSUMsR0FBSjtBQUFBLFdBQVlOLEtBQUssR0FBR00sR0FBcEI7QUFBQSxHQUZDLENBQVA7QUFHQTs7QUFFYyxTQUFTQyxrQkFBVCxHQUE4QjtBQUFBOztBQUFBOztBQUFBLG9CQUNoQnRCLGlEQUFVLENBQUNJLDJEQUFELENBRE07QUFBQSxNQUNwQ21CLEtBRG9DLGVBQ3BDQSxLQURvQztBQUFBLE1BQzdCQyxRQUQ2QixlQUM3QkEsUUFENkI7O0FBQUEsTUFFcENDLFVBRm9DLEdBRWZGLEtBRmUsQ0FFcENFLFVBRm9DO0FBQUEsTUFFeEJDLElBRndCLEdBRWZILEtBRmUsQ0FFeEJHLElBRndCO0FBQUEsTUFHcENDLElBSG9DLEdBRzNCRCxJQUgyQixDQUdwQ0MsSUFIb0M7QUFJNUMsTUFBTUMsTUFBTSxHQUFHdkIsc0RBQVMsRUFBeEI7O0FBSjRDLGtCQU1wQkgsK0NBQVEsQ0FBQyxFQUFELENBTlk7QUFBQSxNQU1yQzJCLElBTnFDO0FBQUEsTUFNL0JDLE9BTitCOztBQUFBLG1CQU9aNUIsK0NBQVEsQ0FBQyxFQUFELENBUEk7QUFBQSxNQU9yQzZCLFFBUHFDO0FBQUEsTUFPM0JDLFdBUDJCOztBQUFBLG1CQVFaOUIsK0NBQVEsQ0FBQyxFQUFELENBUkk7QUFBQSxNQVFyQytCLFFBUnFDO0FB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QUFBLHNDQUNDO0FBQ0Msb0JBQUksRUFBQyxRQUROO0FBRUMseUJBQVMsRUFBQyxzREFGWDtBQUdDLCtCQUFZLFVBSGI7QUFJQyxpQ0FBYyxNQUpmO0FBS0MsaUNBQWMsT0FMZjtBQUFBLDJCQU9FdEQsV0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREQsZUFXQztBQUFLLHlCQUFTLEVBQUMsZUFBZjtBQUFBLHdDQUNDO0FBQ0MsMkJBQVMsRUFBQyxlQURYO0FBRUMseUJBQU8sRUFBRTtBQUFBLDJCQUFNQyxjQUFjLENBQUMsRUFBRCxDQUFwQjtBQUFBLG1CQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURELGVBT0M7QUFDQywyQkFBUyxFQUFDLGVBRFg7QUFFQyx5QkFBTyxFQUFFO0FBQUEsMkJBQU1BLGNBQWMsQ0FBQyxFQUFELENBQXBCO0FBQUEsbUJBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBUEQsZUFhQztBQUNDLDJCQUFTLEVBQUMsZUFEWDtBQUVDLHlCQUFPLEVBQUU7QUFBQSwyQkFBTUEsY0FBYyxDQUFDLEVBQUQsQ0FBcEI7QUFBQSxtQkFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFiRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE1REQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUEwUkE7O0dBcmZ1QnZCO1VBSVJqQjs7O0tBSlFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLXNwYWNlcy1hbmQtdGFicyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L25vLWltZy1lbGVtZW50ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi8uLi9zdG9yZS9HbG9iYWxTdGF0ZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGZpbHRlclNlYXJjaCBmcm9tICcuLi8uLi91dGlscy9maWx0ZXJTZWFyY2gnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGFpbHdpbmQvSGVhZGVyJztcclxuaW1wb3J0IHsgRXllSWNvbiwgRXllT2ZmSWNvbiwgUGVuY2lsQWx0SWNvbiwgVHJhc2hJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lJztcclxuXHJcbmZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBlbmQpIHtcclxuXHRyZXR1cm4gQXJyYXkoZW5kIC0gc3RhcnQgKyAxKVxyXG5cdFx0LmZpbGwoKVxyXG5cdFx0Lm1hcCgoXywgaWR4KSA9PiBzdGFydCArIGlkeCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5Qcm9kdWN0TWFuYWdlcigpIHtcclxuXHRjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcblx0Y29uc3QgeyBjYXRlZ29yaWVzLCBhdXRoIH0gPSBzdGF0ZTtcclxuXHRjb25zdCB7IHVzZXIgfSA9IGF1dGg7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoeyBhbGw6IHRydWUsIGhpZGRlbjogZmFsc2UsIGFjdDogZmFsc2UgfSk7XHJcblx0Y29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKDApO1xyXG5cdGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG5cdGNvbnN0IFtsaW1pdE51bWJlciwgc2V0TGltaXROdW1iZXJdID0gdXNlU3RhdGUoMTApO1xyXG5cdGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcblxyXG5cdGNvbnN0IGNhdGVnb3J5USA9IHJvdXRlci5xdWVyeS5jYXRlZ29yeSB8fCAnYWxsJztcclxuXHRjb25zdCBzb3J0ID0gcm91dGVyLnF1ZXJ5LnNvcnQgfHwgJyc7XHJcblx0Y29uc3Qgc2VhcmNoID0gcm91dGVyLnF1ZXJ5LnNlYXJjaCB8fCAnYWxsJztcclxuXHRjb25zdCBsaW1pdCA9IHJvdXRlci5xdWVyeS5saW1pdCB8fCBsaW1pdE51bWJlcjtcclxuXHJcblx0Y29uc3QgaW5kZXhQYWdlID0gcmVzdWx0ICUgbGltaXQgPT09IDAgPyAwIDogMTtcclxuXHRjb25zdCBtYXhQYWdlID0gKHJlc3VsdCAtIChyZXN1bHQgJSBsaW1pdCkpIC8gbGltaXQgKyBpbmRleFBhZ2U7XHJcblxyXG5cdGNvbnN0IHRvdGFsUGFnZSA9IHJhbmdlKDEsIG1heFBhZ2UpO1xyXG5cclxuXHRsZXQgbmV3VG90YWxQYWdlID0gW107XHJcblxyXG5cdGlmIChtYXhQYWdlID4gNikge1xyXG5cdFx0aWYgKGN1cnJlbnRQYWdlID49IDMgJiYgY3VycmVudFBhZ2UgPD0gbWF4UGFnZSAtIDMpIHtcclxuXHRcdFx0bmV3VG90YWxQYWdlLnB1c2goY3VycmVudFBhZ2UgLSAyKTtcclxuXHRcdFx0bmV3VG90YWxQYWdlLnB1c2goY3VycmVudFBhZ2UgLSAxKTtcclxuXHRcdFx0bmV3VG90YWxQYWdlLnB1c2goY3VycmVudFBhZ2UpO1xyXG5cdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChjdXJyZW50UGFnZSArIDEpO1xyXG5cdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChjdXJyZW50UGFnZSArIDIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKGN1cnJlbnRQYWdlID4gbWF4UGFnZSAtIDMpIHtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChtYXhQYWdlIC0gNSk7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2gobWF4UGFnZSAtIDQpO1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKG1heFBhZ2UgLSAzKTtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChtYXhQYWdlIC0gMik7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2gobWF4UGFnZSAtIDEpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKDEpO1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKDIpO1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKDMpO1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKDQpO1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKDUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoY3VycmVudFBhZ2UgPCBtYXhQYWdlIC0gMykge1xyXG5cdFx0XHRuZXdUb3RhbFBhZ2UucHVzaCgnLi4uJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0bmV3VG90YWxQYWdlLnB1c2gobWF4UGFnZSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2VUaXRsZSA9IGUgPT4ge1xyXG5cdFx0c2V0TmFtZShlLnRhcmdldC52YWx1ZSk7XHJcblx0XHRmaWx0ZXJTZWFyY2goeyByb3V0ZXIsIHNlYXJjaDogZS50YXJnZXQudmFsdWUsIHBhZ2U6IDEgfSk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVDaGFuZ2VDYXRlZ29yeSA9IGUgPT4ge1xyXG5cdFx0c2V0Q2F0ZWdvcnkoZS50YXJnZXQudmFsdWUpO1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBjYXRlZ29yeTogZS50YXJnZXQudmFsdWUsIHBhZ2U6IDEgfSk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVTZWFyY2hCdG4gPSAoKSA9PiB7XHJcblx0XHRpZiAoYWN0aXZlLmFsbCkge1xyXG5cdFx0XHRnZXRQcm9kdWN0cygxLCAnZ2V0TGlzdGVkJywgY2F0ZWdvcnksIG5hbWUpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGFjdGl2ZS5hY3QpIHtcclxuXHRcdFx0Z2V0UHJvZHVjdHMoMSwgJ2dldEFjdGl2ZScsIGNhdGVnb3J5LCBuYW1lKTtcclxuXHRcdH1cclxuXHRcdGlmIChhY3RpdmUuaGlkZGVuKSB7XHJcblx0XHRcdGdldFByb2R1Y3RzKDEsICdnZXRVbkxpc3RlZCcsIGNhdGVnb3J5LCBuYW1lKTtcclxuXHRcdH1cclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgc2VhcmNoOiAnYWxsJyB9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBnZXRQcm9kdWN0cyA9IGFzeW5jIChpZCwgbGluaywgY2F0ZSwgc2VhcikgPT4ge1xyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0YXdhaXQgYXhpb3NcclxuXHRcdFx0XHQuZ2V0KFxyXG5cdFx0XHRcdFx0ZW5jb2RlVVJJKFxyXG5cdFx0XHRcdFx0XHRgL2FwaS9wcm9kdWN0LyR7bGlua30/cGFnZT0ke2lkID8gaWQgOiBwYWdlfSZjYXRlZ29yeT0ke1xyXG5cdFx0XHRcdFx0XHRcdGNhdGUgPyBjYXRlIDogY2F0ZWdvcnlRXHJcblx0XHRcdFx0XHRcdH0mc29ydD0ke3NvcnR9JnRpdGxlPSR7c2VhciA/IHNlYXIgOiBzZWFyY2h9JmxpbWl0PSR7bGltaXR9YFxyXG5cdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBhdXRoLnRva2VuIH0gfVxyXG5cdFx0XHRcdClcclxuXHRcdFx0XHQudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmVycikgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgZXJyb3I6IHJlcy5kYXRhLmVyciB9IH0pO1xyXG5cclxuXHRcdFx0XHRcdHNldFByb2R1Y3RzKHJlcy5kYXRhLnByb2R1Y3RzKTtcclxuXHRcdFx0XHRcdHNldFJlc3VsdChyZXMuZGF0YS5yZXN1bHQpO1xyXG5cclxuXHRcdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgZXJyb3I6IGVyci5tZXNzYWdlIH0gfSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IGdldEFsbFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuXHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0YXdhaXQgYXhpb3NcclxuXHRcdFx0XHRcdC5nZXQoXHJcblx0XHRcdFx0XHRcdGVuY29kZVVSSShcclxuXHRcdFx0XHRcdFx0XHRgL2FwaS9wcm9kdWN0L2dldExpc3RlZD9wYWdlPSR7cGFnZX0mY2F0ZWdvcnk9JHtjYXRlZ29yeVF9JnNvcnQ9JHtzb3J0fSZ0aXRsZT0ke3NlYXJjaH0mbGltaXQ9JHtsaW1pdH1gXHJcblx0XHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHRcdHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBhdXRoLnRva2VuIH0gfVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0LnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmVycikgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0c2V0UHJvZHVjdHMocmVzLmRhdGEucHJvZHVjdHMpO1xyXG5cdFx0XHRcdFx0XHRzZXRSZXN1bHQocmVzLmRhdGEucmVzdWx0KTtcclxuXHJcblx0XHRcdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGlmICh1c2VyICYmIHVzZXIucm9sZSA9PT0gJ2FkbWluJykgZ2V0QWxsUHJvZHVjdHMoKTtcclxuXHR9LCBbdXNlcl0pO1xyXG5cclxuXHRjb25zdCBoYW5kbGVBbGwgPSAoKSA9PiB7XHJcblx0XHRnZXRQcm9kdWN0cygxLCAnZ2V0TGlzdGVkJyk7XHJcblx0XHRzZXRDdXJyZW50UGFnZSgxKTtcclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgcGFnZTogMSB9KTtcclxuXHRcdHNldEFjdGl2ZSh7IGFsbDogdHJ1ZSwgaGlkZGVuOiBmYWxzZSwgYWN0OiBmYWxzZSB9KTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZUhpZGRlbiA9ICgpID0+IHtcclxuXHRcdGdldFByb2R1Y3RzKDEsICdnZXRVbkxpc3RlZCcpO1xyXG5cdFx0c2V0Q3VycmVudFBhZ2UoMSk7XHJcblx0XHRmaWx0ZXJTZWFyY2goeyByb3V0ZXIsIHBhZ2U6IDEgfSk7XHJcblx0XHRzZXRBY3RpdmUoeyBhbGw6IGZhbHNlLCBoaWRkZW46IHRydWUsIGFjdDogZmFsc2UgfSk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVBY3RpdmUgPSAoKSA9PiB7XHJcblx0XHRnZXRQcm9kdWN0cygxLCAnZ2V0QWN0aXZlJyk7XHJcblx0XHRzZXRDdXJyZW50UGFnZSgxKTtcclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgcGFnZTogMSB9KTtcclxuXHRcdHNldEFjdGl2ZSh7IGFsbDogZmFsc2UsIGhpZGRlbjogZmFsc2UsIGFjdDogdHJ1ZSB9KTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZURlbGV0ZSA9IGlkID0+IHtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0FERF9NT0RBTCcsXHJcblx0XHRcdHBheWxvYWQ6IHsgaWQsIHRva2VuOiBhdXRoLnRva2VuLCB0eXBlOiAnUFJPRFVDVCcsIHJvbGU6IGF1dGgudXNlci5yb2xlIH0sXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZUVkaXQgPSAoaWQsIGlzRGVsZXRlZCkgPT4ge1xyXG5cdFx0aWYgKGlzRGVsZXRlZCkgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgZXJyb3I6ICdWdWkgbMOybmcgYuG7jyDhuqluIMSR4buDIGNo4buJbmggc+G7rWEuJyB9IH0pO1xyXG5cdFx0cm91dGVyLnB1c2goYC9jcmVhdGUvJHtpZH1gKTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZVNob3cgPSBhc3luYyAoaWQsIGlzRGVsZXRlZCkgPT4ge1xyXG5cdFx0aWYgKCFpc0RlbGV0ZWQpIHJldHVybjtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGF3YWl0IGF4aW9zXHJcblx0XHRcdFx0LnBhdGNoKGAvYXBpL3Byb2R1Y3QvJHtpZH1gLCBudWxsLCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYXV0aC50b2tlbiB9IH0pXHJcblx0XHRcdFx0LnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5lcnIpIHJldHVybjtcclxuXHJcblx0XHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGVycm9yOiBlcnIubWVzc2FnZSB9IH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVBhZ2luYXRpb24gPSBlID0+IHtcclxuXHRcdGNvbnN0IGluZGV4ID0gTnVtYmVyKGUudGFyZ2V0LmlubmVySFRNTCk7XHJcblx0XHRmaWx0ZXJTZWFyY2goeyByb3V0ZXIsIHBhZ2U6IGluZGV4IH0pO1xyXG5cdFx0c2V0Q3VycmVudFBhZ2UoaW5kZXgpO1xyXG5cdFx0c2V0UGFnZShpbmRleCk7XHJcblxyXG5cdFx0aWYgKGFjdGl2ZS5hbGwpIHtcclxuXHRcdFx0Z2V0UHJvZHVjdHMoaW5kZXgsICdnZXRMaXN0ZWQnKTtcclxuXHRcdH1cclxuXHRcdGlmIChhY3RpdmUuYWN0KSB7XHJcblx0XHRcdGdldFByb2R1Y3RzKGluZGV4LCAnZ2V0QWN0aXZlJyk7XHJcblx0XHR9XHJcblx0XHRpZiAoYWN0aXZlLmhpZGRlbikge1xyXG5cdFx0XHRnZXRQcm9kdWN0cyhpbmRleCwgJ2dldFVuTGlzdGVkJyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVQcmV2aW91c1BhZ2UgPSAoKSA9PiB7XHJcblx0XHRmaWx0ZXJTZWFyY2goeyByb3V0ZXIsIHBhZ2U6IGN1cnJlbnRQYWdlIC0gMSB9KTtcclxuXHRcdHNldEN1cnJlbnRQYWdlKGN1cnJlbnRQYWdlIC0gMSk7XHJcblx0XHRpZiAoYWN0aXZlLmFsbCkge1xyXG5cdFx0XHRnZXRQcm9kdWN0cyhjdXJyZW50UGFnZSAtIDEsICdnZXRMaXN0ZWQnKTtcclxuXHRcdH1cclxuXHRcdGlmIChhY3RpdmUuYWN0KSB7XHJcblx0XHRcdGdldFByb2R1Y3RzKGN1cnJlbnRQYWdlIC0gMSwgJ2dldEFjdGl2ZScpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGFjdGl2ZS5oaWRkZW4pIHtcclxuXHRcdFx0Z2V0UHJvZHVjdHMoY3VycmVudFBhZ2UgLSAxLCAnZ2V0VW5MaXN0ZWQnKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZU5leHRQYWdlID0gKCkgPT4ge1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBwYWdlOiBjdXJyZW50UGFnZSArIDEgfSk7XHJcblx0XHRzZXRDdXJyZW50UGFnZShjdXJyZW50UGFnZSArIDEpO1xyXG5cdFx0aWYgKGFjdGl2ZS5hbGwpIHtcclxuXHRcdFx0Z2V0UHJvZHVjdHMoY3VycmVudFBhZ2UgKyAxLCAnZ2V0TGlzdGVkJyk7XHJcblx0XHR9XHJcblx0XHRpZiAoYWN0aXZlLmFjdCkge1xyXG5cdFx0XHRnZXRQcm9kdWN0cyhjdXJyZW50UGFnZSArIDEsICdnZXRBY3RpdmUnKTtcclxuXHRcdH1cclxuXHRcdGlmIChhY3RpdmUuaGlkZGVuKSB7XHJcblx0XHRcdGdldFByb2R1Y3RzKGN1cnJlbnRQYWdlICsgMSwgJ2dldFVuTGlzdGVkJyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0aWYgKCF1c2VyIHx8IHVzZXIucm9sZSAhPT0gJ2FkbWluJykgcmV0dXJuIG51bGw7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nYmctZ3JheS0xMDAgbWluLWgtc2NyZWVuJz5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PHRpdGxlPlF14bqjbiBsw70gc+G6o24gcGjhuqltPC90aXRsZT5cclxuXHRcdFx0PC9IZWFkPlxyXG5cclxuXHRcdFx0PEhlYWRlciAvPlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J21heC13LXNjcmVlbi0yeGwgbXgtYXV0byBiZy13aGl0ZSBwLTUnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktZXZlbmx5IHB4LTMgcHQtMyB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTYwMCBib3JkZXItYi0yIHBiLTQgYm9yZGVyLWdyYXktMzAwJz5cclxuXHRcdFx0XHRcdDxoNVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVBbGx9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGhvdmVyOm91dGxpbmUtYmxhY2tfc29saWQgcC0yICR7XHJcblx0XHRcdFx0XHRcdFx0YWN0aXZlLmFsbCA/ICd0ZXh0LXJlZC00MDAnIDogJ2N1cnNvci1wb2ludGVyJ1xyXG5cdFx0XHRcdFx0XHR9YH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0VOG6pXQgY+G6o1xyXG5cdFx0XHRcdFx0PC9oNT5cclxuXHJcblx0XHRcdFx0XHQ8aDVcclxuXHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlQWN0aXZlfVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bob3ZlcjpvdXRsaW5lLWJsYWNrX3NvbGlkIHAtMiAke1xyXG5cdFx0XHRcdFx0XHRcdGFjdGl2ZS5hY3QgPyAndGV4dC1yZWQtNDAwJyA6ICdjdXJzb3ItcG9pbnRlcidcclxuXHRcdFx0XHRcdFx0fWB9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdMSQYW5nIGhv4bqhdCDEkeG7mW5nXHJcblx0XHRcdFx0XHQ8L2g1PlxyXG5cclxuXHRcdFx0XHRcdDxoNVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVIaWRkZW59XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGhvdmVyOm91dGxpbmUtYmxhY2tfc29saWQgcC0yICR7XHJcblx0XHRcdFx0XHRcdFx0YWN0aXZlLmhpZGRlbiA/ICd0ZXh0LXJlZC00MDAnIDogJ2N1cnNvci1wb2ludGVyJ1xyXG5cdFx0XHRcdFx0XHR9YH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0xJDDoyDhuqluXHJcblx0XHRcdFx0XHQ8L2g1PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBpdGVtcy1jZW50ZXIgcC01IHNwYWNlLXktNCBsZzpzcGFjZS14LTEwIGxnOnNwYWNlLXktMCc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNSc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPScnPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1sZyBmb250LXNlbWlib2xkJz5Uw6puIHPhuqNuIHBo4bqpbTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwLTMgcm91bmRlZC1tZCBmbGV4LWdyb3cnXHJcblx0XHRcdFx0XHRcdFx0bmFtZT0nbmFtZSdcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17bmFtZX1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlVGl0bGV9XHJcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J05o4bqtcCB0w6puJ1xyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctZnVsbCc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IHNwYWNlLXgtNSBpdGVtcy1jZW50ZXInPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1sZyBmb250LXNlbWlib2xkJz5EYW5oIG3hu6VjPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDxzZWxlY3RcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J2NhdGVnb3J5J1xyXG5cdFx0XHRcdFx0XHRcdFx0aWQ9J2NhdGVnb3J5J1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2NhdGVnb3J5fVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZUNhdGVnb3J5fVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmbGV4LWdyb3cgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwLTMgcm91bmRlZC1tZCBjYXBpdGFsaXplJ1xyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9J2FsbCc+LS0gVOG6pXQgY+G6oyAtLTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0e2NhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBrZXk9e2NhdGVnb3J5Ll9pZH0gdmFsdWU9e2NhdGVnb3J5Ll9pZH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e2NhdGVnb3J5Lm5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdidXR0b24gdy0zNiBjdXJzb3ItcG9pbnRlciBmbGV4IGp1c3RpZnktY2VudGVyJz5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPScnIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaEJ0bn0+XHJcblx0XHRcdFx0XHRcdFTDrG0ga2nhur9tXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgc3BhY2UteS0zIGxnOnNwYWNlLXktMCBsZzpqdXN0aWZ5LWJldHdlZW4gbXktNCc+XHJcblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPSd0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMCc+XHJcblx0XHRcdFx0XHRcdHtwcm9kdWN0cy5sZW5ndGggKiBjdXJyZW50UGFnZSA8IGxpbWl0ICogY3VycmVudFBhZ2VcclxuXHRcdFx0XHRcdFx0XHQ/IHJlc3VsdFxyXG5cdFx0XHRcdFx0XHRcdDogcHJvZHVjdHMubGVuZ3RoICogY3VycmVudFBhZ2V9XHJcblx0XHRcdFx0XHRcdC97cmVzdWx0fSBT4bqjbiBQaOG6qW1cclxuXHRcdFx0XHRcdDwvaDE+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2J1dHRvbi1ibHVlIG1heC13LXNtIGZsZXgganVzdGlmeS1jZW50ZXIgcC0zJz5cclxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2NyZWF0ZSc+XHJcblx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPScnPisgVGjDqm0gc+G6o24gcGjhuqltIG3hu5tpPC9hPlxyXG5cdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctZnVsbCBvdmVyZmxvdy14LWF1dG8nPlxyXG5cdFx0XHRcdFx0PHRhYmxlIGNsYXNzTmFtZT0nJz5cclxuXHRcdFx0XHRcdFx0PHRoZWFkPlxyXG5cdFx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT17eyBtaW5XaWR0aDogNDAwIH19PlTDqm4gc+G6o24gcGjhuqltPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT17eyBtaW5XaWR0aDogODAgfX0+R2nDoTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3sgbWluV2lkdGg6IDgwIH19PktobzwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3sgbWluV2lkdGg6IDgwIH19PsSQw6MgYsOhbjwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3sgbWluV2lkdGg6IDEwMCB9fT5DaOG7iW5oIHPhu61hPC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHRcdFx0XHQ8dGJvZHk+XHJcblx0XHRcdFx0XHRcdFx0e3Byb2R1Y3RzLm1hcChpdGVtID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDx0ciBrZXk9e2l0ZW0uX2lkfSBjbGFzc05hbWU9J2JvcmRlci1iIGJvcmRlci1ncmF5LTMwMCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBweS00IHNwYWNlLXgtMmB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17aXRlbS5pbWFnZXNbMF0udXJsfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PSfhuqJuaCBiw6xhJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgJHtpdGVtLmRlbGV0ZWQgPyAnb3BhY2l0eS00MCcgOiAnJ31gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgaGVpZ2h0OiA1MCwgd2lkdGg6IDUwIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0uZGVsZXRlZCAmJiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzbWFsbCBjbGFzc05hbWU9J3RleHQtcmVkLTMwMCc+xJDDoyDhuqluPC9zbWFsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2NhcGl0YWxpemUnPntpdGVtLnRpdGxlfTwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT0ndGV4dC1yZWQtNDAwIGFsaWduLW1pZGRsZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNtYWxsPiYjeDIwQUI7PC9zbWFsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5wcmljZVNhbGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC50b1N0cmluZygpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJy4nKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9J3RleHQtY2VudGVyJz57aXRlbS5pblN0b2NrfTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9J3RleHQtY2VudGVyJz57aXRlbS5zb2xkfTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFBlbmNpbEFsdEljb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVFZGl0KGl0ZW0uX2lkLCBpdGVtLmRlbGV0ZWQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdoLTUgdGV4dC1ibHVlLTUwMCBjdXJzb3ItcG9pbnRlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0uZGVsZXRlZCA/IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEV5ZU9mZkljb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlU2hvdyhpdGVtLl9pZCwgaXRlbS5kZWxldGVkKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BoLTUgdGV4dC1yZWQtNTAwICR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpdGVtLmRlbGV0ZWQgPyAnY3Vyc29yLXBvaW50ZXInIDogJydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxFeWVJY29uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZVNob3coaXRlbS5faWQsIGl0ZW0uZGVsZXRlZClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgaC01IHRleHQtZ3JlZW4tNTAwICR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpdGVtLmRlbGV0ZWQgPyAnY3Vyc29yLXBvaW50ZXInIDogJydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2FjdGl2ZS5oaWRkZW4gJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VHJhc2hJY29uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdoLTUgdGV4dC1yZWQtNTAwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShpdGVtLl9pZCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0XHRcdDwvdGFibGU+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG15LTQgcHQtNCc+XHJcblx0XHRcdFx0PG5hdj5cclxuXHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9J3BhZ2luYXRpb24nPlxyXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXtgYnRuIHBhZ2UtaXRlbSAke2N1cnJlbnRQYWdlID09PSAxID8gJ2Rpc2FibGVkJyA6ICcnfWB9PlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ncGFnZS1saW5rIHRleHQtZGFuZ2VyIGZvbnQtd2VpZ2h0LWJvbGQnXHJcblx0XHRcdFx0XHRcdFx0XHR0YWJJbmRleD0nLTEnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVQcmV2aW91c1BhZ2V9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0JmxhcXVvO1xyXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHR7bWF4UGFnZSA+IDZcclxuXHRcdFx0XHRcdFx0XHQ/IG5ld1RvdGFsUGFnZS5tYXAocGFnZSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17cGFnZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BidG4gcGFnZS1pdGVtICR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWdlID09ICcuLi4nID8gJ2Rpc2FibGVkJyA6ICcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSAke2N1cnJlbnRQYWdlID09PSBwYWdlID8gJ2FjdGl2ZScgOiAnJ31gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlUGFnaW5hdGlvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YHBhZ2UtbGluayBmb250LXdlaWdodC1ib2xkICR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlID09PSBwYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyAndGV4dC1saWdodCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICd0ZXh0LWRhbmdlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtwYWdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdCAgKSlcclxuXHRcdFx0XHRcdFx0XHQ6IHRvdGFsUGFnZS5tYXAocGFnZSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17cGFnZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BidG4gcGFnZS1pdGVtICR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWdlID09ICcuLi4nID8gJ2Rpc2FibGVkJyA6ICcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSAke2N1cnJlbnRQYWdlID09PSBwYWdlID8gJ2FjdGl2ZScgOiAnJ31gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlUGFnaW5hdGlvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YHBhZ2UtbGluayBmb250LXdlaWdodC1ib2xkICR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlID09PSBwYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyAndGV4dC1saWdodCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICd0ZXh0LWRhbmdlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtwYWdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdCAgKSl9XHJcblxyXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXtgYnRuIHBhZ2UtaXRlbSAke2N1cnJlbnRQYWdlID09PSBtYXhQYWdlID8gJ2Rpc2FibGVkJyA6ICcnfWB9PlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ncGFnZS1saW5rIHRleHQtZGFuZ2VyIGZvbnQtd2VpZ2h0LWJvbGQnXHJcblx0XHRcdFx0XHRcdFx0XHR0YWJJbmRleD0nLTEnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVOZXh0UGFnZX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQmcmFxdW87XHJcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdDwvbGk+XHJcblxyXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSdtb2JpbGVfaGlkZGVuJz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYnRuLWdyb3VwIGRyb3B1cCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J2J1dHRvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdidG4gYnRuLW91dGxpbmVkIGRyb3Bkb3duLXRvZ2dsZSBtdC0yIHRleHQtc2Vjb25kYXJ5J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXRvZ2dsZT0nZHJvcGRvd24nXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtaGFzcG9wdXA9J3RydWUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtZXhwYW5kZWQ9J2ZhbHNlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7bGltaXROdW1iZXJ9L3RyYW5nXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZHJvcGRvd24tbWVudSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Ryb3Bkb3duLWl0ZW0nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0TGltaXROdW1iZXIoMTIpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0MTJcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Ryb3Bkb3duLWl0ZW0nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0TGltaXROdW1iZXIoMjQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0MjRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Ryb3Bkb3duLWl0ZW0nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0TGltaXROdW1iZXIoNDgpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0NDhcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9uYXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkIiwiRGF0YUNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwiYXhpb3MiLCJmaWx0ZXJTZWFyY2giLCJIZWFkZXIiLCJFeWVJY29uIiwiRXllT2ZmSWNvbiIsIlBlbmNpbEFsdEljb24iLCJUcmFzaEljb24iLCJyYW5nZSIsInN0YXJ0IiwiZW5kIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImlkeCIsIk1haW5Qcm9kdWN0TWFuYWdlciIsInN0YXRlIiwiZGlzcGF0Y2giLCJjYXRlZ29yaWVzIiwiYXV0aCIsInVzZXIiLCJyb3V0ZXIiLCJuYW1lIiwic2V0TmFtZSIsImNhdGVnb3J5Iiwic2V0Q2F0ZWdvcnkiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiYWxsIiwiaGlkZGVuIiwiYWN0IiwiYWN0aXZlIiwic2V0QWN0aXZlIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwicGFnZSIsInNldFBhZ2UiLCJsaW1pdE51bWJlciIsInNldExpbWl0TnVtYmVyIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsImNhdGVnb3J5USIsInF1ZXJ5Iiwic29ydCIsInNlYXJjaCIsImxpbWl0IiwiaW5kZXhQYWdlIiwibWF4UGFnZSIsInRvdGFsUGFnZSIsIm5ld1RvdGFsUGFnZSIsInB1c2giLCJoYW5kbGVDaGFuZ2VUaXRsZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZUNhdGVnb3J5IiwiaGFuZGxlU2VhcmNoQnRuIiwiZ2V0UHJvZHVjdHMiLCJpZCIsImxpbmsiLCJjYXRlIiwic2VhciIsInR5cGUiLCJwYXlsb2FkIiwibG9hZGluZyIsImdldCIsImVuY29kZVVSSSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJ0aGVuIiwicmVzIiwiZGF0YSIsImVyciIsImVycm9yIiwibWVzc2FnZSIsImdldEFsbFByb2R1Y3RzIiwicm9sZSIsImhhbmRsZUFsbCIsImhhbmRsZUhpZGRlbiIsImhhbmRsZUFjdGl2ZSIsImhhbmRsZURlbGV0ZSIsImhhbmRsZUVkaXQiLCJpc0RlbGV0ZWQiLCJoYW5kbGVTaG93IiwicGF0Y2giLCJoYW5kbGVQYWdpbmF0aW9uIiwiaW5kZXgiLCJOdW1iZXIiLCJpbm5lckhUTUwiLCJoYW5kbGVQcmV2aW91c1BhZ2UiLCJoYW5kbGVOZXh0UGFnZSIsIl9pZCIsImxlbmd0aCIsIm1pbldpZHRoIiwiaXRlbSIsImltYWdlcyIsInVybCIsImRlbGV0ZWQiLCJoZWlnaHQiLCJ3aWR0aCIsInRpdGxlIiwicHJpY2VTYWxlIiwidG9TdHJpbmciLCJyZXBsYWNlIiwiaW5TdG9jayIsInNvbGQiXSwic291cmNlUm9vdCI6IiJ9