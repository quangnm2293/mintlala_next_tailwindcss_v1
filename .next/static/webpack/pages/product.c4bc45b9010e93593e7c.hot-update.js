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
    className: "bg-gray-100",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Qu\u1EA3n l\xFD s\u1EA3n ph\u1EA9m"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tailwind_Header__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 244,
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
          lineNumber: 248,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
          onClick: handleActive,
          className: "hover:outline-black_solid p-2 ".concat(active.act ? 'text-red-400' : 'cursor-pointer'),
          children: "\u0110ang ho\u1EA1t \u0111\u1ED9ng"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
          onClick: handleHidden,
          className: "hover:outline-black_solid p-2 ".concat(active.hidden ? 'text-red-400' : 'cursor-pointer'),
          children: "\u0110\xE3 \u1EA9n"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 247,
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
              lineNumber: 279,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 278,
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
            lineNumber: 282,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 277,
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
              lineNumber: 294,
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
                lineNumber: 302,
                columnNumber: 9
              }, this), categories.map(function (category) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  value: category._id,
                  children: category.name
                }, category._id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 304,
                  columnNumber: 10
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "button w-36 cursor-pointer flex justify-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "",
          onClick: handleSearchBtn,
          children: "T\xECm ki\u1EBFm"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:justify-between my-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "text-xl font-semibold text-gray-700",
          children: [products.length * currentPage < limit * currentPage ? result : products.length * currentPage, "/", result, " S\u1EA3n Ph\u1EA9m"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 320,
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
              lineNumber: 329,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 328,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 319,
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
                lineNumber: 338,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 80
                },
                children: "Gi\xE1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 339,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 80
                },
                children: "Kho"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 340,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 80
                },
                children: "\u0110\xE3 b\xE1n"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 341,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 100
                },
                children: "Ch\u1EC9nh s\u1EEDa"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 342,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 337,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 336,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
            children: products.map(function (item) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "flex items-center ".concat(item.deleted ? 'img_hidden' : ''),
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: item.images[0].url,
                    alt: "\u1EA2nh b\xECa",
                    className: "rounded mr-2",
                    style: {
                      height: 50,
                      width: 50
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 353,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex flex-col",
                    children: [item.deleted && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
                      className: "text-red-300",
                      children: "\u0110\xE3 \u1EA9n"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 361,
                      columnNumber: 13
                    }, _this), item.title]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 359,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 366,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 348,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "text-danger align-middle",
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
                  className: "align-middle",
                  children: item.inStock
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 374,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "align-middle",
                  children: item.sold
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 375,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "align-middle",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "d-flex justify-content-between",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      "aria-hidden": true,
                      className: "fas fa-edit py-1 text-info",
                      onClick: function onClick() {
                        return handleEdit(item._id, item.deleted);
                      },
                      style: {
                        cursor: 'pointer'
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 378,
                      columnNumber: 12
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      "aria-hidden": true,
                      className: "fas ".concat(item.deleted ? 'fa-eye-slash' : 'fa-eye', " py-1 text-primary"),
                      onClick: function onClick() {
                        return handleShow(item._id, item.deleted);
                      },
                      style: {
                        cursor: 'pointer'
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 387,
                      columnNumber: 12
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      "aria-hidden": true,
                      className: "fas fa-trash-alt py-1 text-danger",
                      onClick: function onClick() {
                        return handleDelete(item._id);
                      },
                      style: {
                        cursor: 'pointer'
                      },
                      "data-toggle": "modal",
                      "data-target": "#deleteUser"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 398,
                      columnNumber: 12
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
                lineNumber: 347,
                columnNumber: 9
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 345,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 246,
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
              lineNumber: 419,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 418,
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
                lineNumber: 435,
                columnNumber: 11
              }, _this)
            }, page, false, {
              fileName: _jsxFileName,
              lineNumber: 429,
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
                lineNumber: 454,
                columnNumber: 11
              }, _this)
            }, page, false, {
              fileName: _jsxFileName,
              lineNumber: 448,
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
              lineNumber: 468,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 467,
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
                lineNumber: 479,
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
                  lineNumber: 490,
                  columnNumber: 10
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  className: "dropdown-item",
                  onClick: function onClick() {
                    return setLimitNumber(24);
                  },
                  children: "24"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 496,
                  columnNumber: 10
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  className: "dropdown-item",
                  onClick: function onClick() {
                    return setLimitNumber(48);
                  },
                  children: "48"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 502,
                  columnNumber: 10
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 489,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 478,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 477,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 417,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 416,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 239,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC5jNGJjNDViOTAxMGU5MzU5M2U3Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTVyxLQUFULENBQWVDLEtBQWYsRUFBc0JDLEdBQXRCLEVBQTJCO0FBQzFCLFNBQU9DLEtBQUssQ0FBQ0QsR0FBRyxHQUFHRCxLQUFOLEdBQWMsQ0FBZixDQUFMLENBQ0xHLElBREssR0FFTEMsR0FGSyxDQUVELFVBQUNDLENBQUQsRUFBSUMsR0FBSjtBQUFBLFdBQVlOLEtBQUssR0FBR00sR0FBcEI7QUFBQSxHQUZDLENBQVA7QUFHQTs7QUFFYyxTQUFTQyxrQkFBVCxHQUE4QjtBQUFBOztBQUFBOztBQUFBLG9CQUNoQmxCLGlEQUFVLENBQUNJLDJEQUFELENBRE07QUFBQSxNQUNwQ2UsS0FEb0MsZUFDcENBLEtBRG9DO0FBQUEsTUFDN0JDLFFBRDZCLGVBQzdCQSxRQUQ2Qjs7QUFBQSxNQUVwQ0MsVUFGb0MsR0FFZkYsS0FGZSxDQUVwQ0UsVUFGb0M7QUFBQSxNQUV4QkMsSUFGd0IsR0FFZkgsS0FGZSxDQUV4QkcsSUFGd0I7QUFBQSxNQUdwQ0MsSUFIb0MsR0FHM0JELElBSDJCLENBR3BDQyxJQUhvQztBQUk1QyxNQUFNQyxNQUFNLEdBQUduQixzREFBUyxFQUF4Qjs7QUFKNEMsa0JBTXBCSCwrQ0FBUSxDQUFDLEVBQUQsQ0FOWTtBQUFBLE1BTXJDdUIsSUFOcUM7QUFBQSxNQU0vQkMsT0FOK0I7O0FBQUEsbUJBT1p4QiwrQ0FBUSxDQUFDLEVBQUQsQ0FQSTtBQUFBLE1BT3JDeUIsUUFQcUM7QUFBQSxNQU8zQkMsV0FQMkI7O0FBQUEsbUJBUVoxQiwrQ0FBUSxDQUFDLEVBQUQsQ0FSSTtBQUFBLE1BUXJDMkIsUUFScUM7QUFBQSxNQVEz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O0FBQUsseUJBQVMsRUFBQyxlQUFmO0FBQUEsd0NBQ0M7QUFDQywyQkFBUyxFQUFDLGVBRFg7QUFFQyx5QkFBTyxFQUFFO0FBQUEsMkJBQU1DLGNBQWMsQ0FBQyxFQUFELENBQXBCO0FBQUEsbUJBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREQsZUFPQztBQUNDLDJCQUFTLEVBQUMsZUFEWDtBQUVDLHlCQUFPLEVBQUU7QUFBQSwyQkFBTUEsY0FBYyxDQUFDLEVBQUQsQ0FBcEI7QUFBQSxtQkFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFQRCxlQWFDO0FBQ0MsMkJBQVMsRUFBQyxlQURYO0FBRUMseUJBQU8sRUFBRTtBQUFBLDJCQUFNQSxjQUFjLENBQUMsRUFBRCxDQUFwQjtBQUFBLG1CQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQWJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFYRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTVERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQXNSQTs7R0FqZnVCdkI7VUFJUmI7OztLQUpRYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLXNwYWNlcy1hbmQtdGFicyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L25vLWltZy1lbGVtZW50ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi8uLi9zdG9yZS9HbG9iYWxTdGF0ZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGZpbHRlclNlYXJjaCBmcm9tICcuLi8uLi91dGlscy9maWx0ZXJTZWFyY2gnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGFpbHdpbmQvSGVhZGVyJztcclxuXHJcbmZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBlbmQpIHtcclxuXHRyZXR1cm4gQXJyYXkoZW5kIC0gc3RhcnQgKyAxKVxyXG5cdFx0LmZpbGwoKVxyXG5cdFx0Lm1hcCgoXywgaWR4KSA9PiBzdGFydCArIGlkeCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5Qcm9kdWN0TWFuYWdlcigpIHtcclxuXHRjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcblx0Y29uc3QgeyBjYXRlZ29yaWVzLCBhdXRoIH0gPSBzdGF0ZTtcclxuXHRjb25zdCB7IHVzZXIgfSA9IGF1dGg7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoeyBhbGw6IHRydWUsIGhpZGRlbjogZmFsc2UsIGFjdDogZmFsc2UgfSk7XHJcblx0Y29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKDApO1xyXG5cdGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG5cdGNvbnN0IFtsaW1pdE51bWJlciwgc2V0TGltaXROdW1iZXJdID0gdXNlU3RhdGUoMTApO1xyXG5cdGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcblxyXG5cdGNvbnN0IGNhdGVnb3J5USA9IHJvdXRlci5xdWVyeS5jYXRlZ29yeSB8fCAnYWxsJztcclxuXHRjb25zdCBzb3J0ID0gcm91dGVyLnF1ZXJ5LnNvcnQgfHwgJyc7XHJcblx0Y29uc3Qgc2VhcmNoID0gcm91dGVyLnF1ZXJ5LnNlYXJjaCB8fCAnYWxsJztcclxuXHRjb25zdCBsaW1pdCA9IHJvdXRlci5xdWVyeS5saW1pdCB8fCBsaW1pdE51bWJlcjtcclxuXHJcblx0Y29uc3QgaW5kZXhQYWdlID0gcmVzdWx0ICUgbGltaXQgPT09IDAgPyAwIDogMTtcclxuXHRjb25zdCBtYXhQYWdlID0gKHJlc3VsdCAtIChyZXN1bHQgJSBsaW1pdCkpIC8gbGltaXQgKyBpbmRleFBhZ2U7XHJcblxyXG5cdGNvbnN0IHRvdGFsUGFnZSA9IHJhbmdlKDEsIG1heFBhZ2UpO1xyXG5cclxuXHRsZXQgbmV3VG90YWxQYWdlID0gW107XHJcblxyXG5cdGlmIChtYXhQYWdlID4gNikge1xyXG5cdFx0aWYgKGN1cnJlbnRQYWdlID49IDMgJiYgY3VycmVudFBhZ2UgPD0gbWF4UGFnZSAtIDMpIHtcclxuXHRcdFx0bmV3VG90YWxQYWdlLnB1c2goY3VycmVudFBhZ2UgLSAyKTtcclxuXHRcdFx0bmV3VG90YWxQYWdlLnB1c2goY3VycmVudFBhZ2UgLSAxKTtcclxuXHRcdFx0bmV3VG90YWxQYWdlLnB1c2goY3VycmVudFBhZ2UpO1xyXG5cdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChjdXJyZW50UGFnZSArIDEpO1xyXG5cdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChjdXJyZW50UGFnZSArIDIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKGN1cnJlbnRQYWdlID4gbWF4UGFnZSAtIDMpIHtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChtYXhQYWdlIC0gNSk7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2gobWF4UGFnZSAtIDQpO1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKG1heFBhZ2UgLSAzKTtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChtYXhQYWdlIC0gMik7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2gobWF4UGFnZSAtIDEpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKDEpO1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKDIpO1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKDMpO1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKDQpO1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKDUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoY3VycmVudFBhZ2UgPCBtYXhQYWdlIC0gMykge1xyXG5cdFx0XHRuZXdUb3RhbFBhZ2UucHVzaCgnLi4uJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0bmV3VG90YWxQYWdlLnB1c2gobWF4UGFnZSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2VUaXRsZSA9IGUgPT4ge1xyXG5cdFx0c2V0TmFtZShlLnRhcmdldC52YWx1ZSk7XHJcblx0XHRmaWx0ZXJTZWFyY2goeyByb3V0ZXIsIHNlYXJjaDogZS50YXJnZXQudmFsdWUsIHBhZ2U6IDEgfSk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVDaGFuZ2VDYXRlZ29yeSA9IGUgPT4ge1xyXG5cdFx0c2V0Q2F0ZWdvcnkoZS50YXJnZXQudmFsdWUpO1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBjYXRlZ29yeTogZS50YXJnZXQudmFsdWUsIHBhZ2U6IDEgfSk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVTZWFyY2hCdG4gPSAoKSA9PiB7XHJcblx0XHRpZiAoYWN0aXZlLmFsbCkge1xyXG5cdFx0XHRnZXRQcm9kdWN0cygxLCAnZ2V0TGlzdGVkJywgY2F0ZWdvcnksIG5hbWUpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGFjdGl2ZS5hY3QpIHtcclxuXHRcdFx0Z2V0UHJvZHVjdHMoMSwgJ2dldEFjdGl2ZScsIGNhdGVnb3J5LCBuYW1lKTtcclxuXHRcdH1cclxuXHRcdGlmIChhY3RpdmUuaGlkZGVuKSB7XHJcblx0XHRcdGdldFByb2R1Y3RzKDEsICdnZXRVbkxpc3RlZCcsIGNhdGVnb3J5LCBuYW1lKTtcclxuXHRcdH1cclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgc2VhcmNoOiAnYWxsJyB9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBnZXRQcm9kdWN0cyA9IGFzeW5jIChpZCwgbGluaywgY2F0ZSwgc2VhcikgPT4ge1xyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0YXdhaXQgYXhpb3NcclxuXHRcdFx0XHQuZ2V0KFxyXG5cdFx0XHRcdFx0ZW5jb2RlVVJJKFxyXG5cdFx0XHRcdFx0XHRgL2FwaS9wcm9kdWN0LyR7bGlua30/cGFnZT0ke2lkID8gaWQgOiBwYWdlfSZjYXRlZ29yeT0ke1xyXG5cdFx0XHRcdFx0XHRcdGNhdGUgPyBjYXRlIDogY2F0ZWdvcnlRXHJcblx0XHRcdFx0XHRcdH0mc29ydD0ke3NvcnR9JnRpdGxlPSR7c2VhciA/IHNlYXIgOiBzZWFyY2h9JmxpbWl0PSR7bGltaXR9YFxyXG5cdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBhdXRoLnRva2VuIH0gfVxyXG5cdFx0XHRcdClcclxuXHRcdFx0XHQudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmVycikgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgZXJyb3I6IHJlcy5kYXRhLmVyciB9IH0pO1xyXG5cclxuXHRcdFx0XHRcdHNldFByb2R1Y3RzKHJlcy5kYXRhLnByb2R1Y3RzKTtcclxuXHRcdFx0XHRcdHNldFJlc3VsdChyZXMuZGF0YS5yZXN1bHQpO1xyXG5cclxuXHRcdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgZXJyb3I6IGVyci5tZXNzYWdlIH0gfSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IGdldEFsbFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuXHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0YXdhaXQgYXhpb3NcclxuXHRcdFx0XHRcdC5nZXQoXHJcblx0XHRcdFx0XHRcdGVuY29kZVVSSShcclxuXHRcdFx0XHRcdFx0XHRgL2FwaS9wcm9kdWN0L2dldExpc3RlZD9wYWdlPSR7cGFnZX0mY2F0ZWdvcnk9JHtjYXRlZ29yeVF9JnNvcnQ9JHtzb3J0fSZ0aXRsZT0ke3NlYXJjaH0mbGltaXQ9JHtsaW1pdH1gXHJcblx0XHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHRcdHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBhdXRoLnRva2VuIH0gfVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0LnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmVycikgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0c2V0UHJvZHVjdHMocmVzLmRhdGEucHJvZHVjdHMpO1xyXG5cdFx0XHRcdFx0XHRzZXRSZXN1bHQocmVzLmRhdGEucmVzdWx0KTtcclxuXHJcblx0XHRcdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGlmICh1c2VyICYmIHVzZXIucm9sZSA9PT0gJ2FkbWluJykgZ2V0QWxsUHJvZHVjdHMoKTtcclxuXHR9LCBbdXNlcl0pO1xyXG5cclxuXHRjb25zdCBoYW5kbGVBbGwgPSAoKSA9PiB7XHJcblx0XHRnZXRQcm9kdWN0cygxLCAnZ2V0TGlzdGVkJyk7XHJcblx0XHRzZXRDdXJyZW50UGFnZSgxKTtcclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgcGFnZTogMSB9KTtcclxuXHRcdHNldEFjdGl2ZSh7IGFsbDogdHJ1ZSwgaGlkZGVuOiBmYWxzZSwgYWN0OiBmYWxzZSB9KTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZUhpZGRlbiA9ICgpID0+IHtcclxuXHRcdGdldFByb2R1Y3RzKDEsICdnZXRVbkxpc3RlZCcpO1xyXG5cdFx0c2V0Q3VycmVudFBhZ2UoMSk7XHJcblx0XHRmaWx0ZXJTZWFyY2goeyByb3V0ZXIsIHBhZ2U6IDEgfSk7XHJcblx0XHRzZXRBY3RpdmUoeyBhbGw6IGZhbHNlLCBoaWRkZW46IHRydWUsIGFjdDogZmFsc2UgfSk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVBY3RpdmUgPSAoKSA9PiB7XHJcblx0XHRnZXRQcm9kdWN0cygxLCAnZ2V0QWN0aXZlJyk7XHJcblx0XHRzZXRDdXJyZW50UGFnZSgxKTtcclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgcGFnZTogMSB9KTtcclxuXHRcdHNldEFjdGl2ZSh7IGFsbDogZmFsc2UsIGhpZGRlbjogZmFsc2UsIGFjdDogdHJ1ZSB9KTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZURlbGV0ZSA9IGlkID0+IHtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0FERF9NT0RBTCcsXHJcblx0XHRcdHBheWxvYWQ6IHsgaWQsIHRva2VuOiBhdXRoLnRva2VuLCB0eXBlOiAnUFJPRFVDVCcsIHJvbGU6IGF1dGgudXNlci5yb2xlIH0sXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZUVkaXQgPSAoaWQsIGlzRGVsZXRlZCkgPT4ge1xyXG5cdFx0aWYgKGlzRGVsZXRlZCkgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgZXJyb3I6ICdWdWkgbMOybmcgYuG7jyDhuqluIMSR4buDIGNo4buJbmggc+G7rWEuJyB9IH0pO1xyXG5cdFx0cm91dGVyLnB1c2goYC9jcmVhdGUvJHtpZH1gKTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZVNob3cgPSBhc3luYyAoaWQsIGlzRGVsZXRlZCkgPT4ge1xyXG5cdFx0aWYgKCFpc0RlbGV0ZWQpIHJldHVybjtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGF3YWl0IGF4aW9zXHJcblx0XHRcdFx0LnBhdGNoKGAvYXBpL3Byb2R1Y3QvJHtpZH1gLCBudWxsLCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYXV0aC50b2tlbiB9IH0pXHJcblx0XHRcdFx0LnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5lcnIpIHJldHVybjtcclxuXHJcblx0XHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGVycm9yOiBlcnIubWVzc2FnZSB9IH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVBhZ2luYXRpb24gPSBlID0+IHtcclxuXHRcdGNvbnN0IGluZGV4ID0gTnVtYmVyKGUudGFyZ2V0LmlubmVySFRNTCk7XHJcblx0XHRmaWx0ZXJTZWFyY2goeyByb3V0ZXIsIHBhZ2U6IGluZGV4IH0pO1xyXG5cdFx0c2V0Q3VycmVudFBhZ2UoaW5kZXgpO1xyXG5cdFx0c2V0UGFnZShpbmRleCk7XHJcblxyXG5cdFx0aWYgKGFjdGl2ZS5hbGwpIHtcclxuXHRcdFx0Z2V0UHJvZHVjdHMoaW5kZXgsICdnZXRMaXN0ZWQnKTtcclxuXHRcdH1cclxuXHRcdGlmIChhY3RpdmUuYWN0KSB7XHJcblx0XHRcdGdldFByb2R1Y3RzKGluZGV4LCAnZ2V0QWN0aXZlJyk7XHJcblx0XHR9XHJcblx0XHRpZiAoYWN0aXZlLmhpZGRlbikge1xyXG5cdFx0XHRnZXRQcm9kdWN0cyhpbmRleCwgJ2dldFVuTGlzdGVkJyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVQcmV2aW91c1BhZ2UgPSAoKSA9PiB7XHJcblx0XHRmaWx0ZXJTZWFyY2goeyByb3V0ZXIsIHBhZ2U6IGN1cnJlbnRQYWdlIC0gMSB9KTtcclxuXHRcdHNldEN1cnJlbnRQYWdlKGN1cnJlbnRQYWdlIC0gMSk7XHJcblx0XHRpZiAoYWN0aXZlLmFsbCkge1xyXG5cdFx0XHRnZXRQcm9kdWN0cyhjdXJyZW50UGFnZSAtIDEsICdnZXRMaXN0ZWQnKTtcclxuXHRcdH1cclxuXHRcdGlmIChhY3RpdmUuYWN0KSB7XHJcblx0XHRcdGdldFByb2R1Y3RzKGN1cnJlbnRQYWdlIC0gMSwgJ2dldEFjdGl2ZScpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGFjdGl2ZS5oaWRkZW4pIHtcclxuXHRcdFx0Z2V0UHJvZHVjdHMoY3VycmVudFBhZ2UgLSAxLCAnZ2V0VW5MaXN0ZWQnKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZU5leHRQYWdlID0gKCkgPT4ge1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBwYWdlOiBjdXJyZW50UGFnZSArIDEgfSk7XHJcblx0XHRzZXRDdXJyZW50UGFnZShjdXJyZW50UGFnZSArIDEpO1xyXG5cdFx0aWYgKGFjdGl2ZS5hbGwpIHtcclxuXHRcdFx0Z2V0UHJvZHVjdHMoY3VycmVudFBhZ2UgKyAxLCAnZ2V0TGlzdGVkJyk7XHJcblx0XHR9XHJcblx0XHRpZiAoYWN0aXZlLmFjdCkge1xyXG5cdFx0XHRnZXRQcm9kdWN0cyhjdXJyZW50UGFnZSArIDEsICdnZXRBY3RpdmUnKTtcclxuXHRcdH1cclxuXHRcdGlmIChhY3RpdmUuaGlkZGVuKSB7XHJcblx0XHRcdGdldFByb2R1Y3RzKGN1cnJlbnRQYWdlICsgMSwgJ2dldFVuTGlzdGVkJyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0aWYgKCF1c2VyIHx8IHVzZXIucm9sZSAhPT0gJ2FkbWluJykgcmV0dXJuIG51bGw7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nYmctZ3JheS0xMDAnPlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+UXXhuqNuIGzDvSBz4bqjbiBwaOG6qW08L3RpdGxlPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblxyXG5cdFx0XHQ8SGVhZGVyIC8+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWF4LXctc2NyZWVuLTJ4bCBteC1hdXRvIGJnLXdoaXRlIHAtNSc+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1ldmVubHkgcHgtMyBwdC0zIHRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNjAwIGJvcmRlci1iLTIgcGItNCBib3JkZXItZ3JheS0zMDAnPlxyXG5cdFx0XHRcdFx0PGg1XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZUFsbH1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgaG92ZXI6b3V0bGluZS1ibGFja19zb2xpZCBwLTIgJHtcclxuXHRcdFx0XHRcdFx0XHRhY3RpdmUuYWxsID8gJ3RleHQtcmVkLTQwMCcgOiAnY3Vyc29yLXBvaW50ZXInXHJcblx0XHRcdFx0XHRcdH1gfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRU4bqldCBj4bqjXHJcblx0XHRcdFx0XHQ8L2g1PlxyXG5cclxuXHRcdFx0XHRcdDxoNVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVBY3RpdmV9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGhvdmVyOm91dGxpbmUtYmxhY2tfc29saWQgcC0yICR7XHJcblx0XHRcdFx0XHRcdFx0YWN0aXZlLmFjdCA/ICd0ZXh0LXJlZC00MDAnIDogJ2N1cnNvci1wb2ludGVyJ1xyXG5cdFx0XHRcdFx0XHR9YH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0xJBhbmcgaG/huqF0IMSR4buZbmdcclxuXHRcdFx0XHRcdDwvaDU+XHJcblxyXG5cdFx0XHRcdFx0PGg1XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZUhpZGRlbn1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgaG92ZXI6b3V0bGluZS1ibGFja19zb2xpZCBwLTIgJHtcclxuXHRcdFx0XHRcdFx0XHRhY3RpdmUuaGlkZGVuID8gJ3RleHQtcmVkLTQwMCcgOiAnY3Vyc29yLXBvaW50ZXInXHJcblx0XHRcdFx0XHRcdH1gfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHTEkMOjIOG6qW5cclxuXHRcdFx0XHRcdDwvaDU+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBwLTUgc3BhY2UteS00IGxnOnNwYWNlLXgtMTAgbGc6c3BhY2UteS0wJz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC01Jz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9Jyc+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQnPlTDqm4gc+G6o24gcGjhuqltPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdib3JkZXIgYm9yZGVyLWdyYXktMzAwIHAtMyByb3VuZGVkLW1kIGZsZXgtZ3JvdydcclxuXHRcdFx0XHRcdFx0XHRuYW1lPSduYW1lJ1xyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtuYW1lfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUaXRsZX1cclxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nTmjhuq1wIHTDqm4nXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsJz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggc3BhY2UteC01IGl0ZW1zLWNlbnRlcic+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQnPkRhbmggbeG7pWM8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PHNlbGVjdFxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT0nY2F0ZWdvcnknXHJcblx0XHRcdFx0XHRcdFx0XHRpZD0nY2F0ZWdvcnknXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Y2F0ZWdvcnl9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlQ2F0ZWdvcnl9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZsZXgtZ3JvdyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHAtMyByb3VuZGVkLW1kIGNhcGl0YWxpemUnXHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nYWxsJz4tLSBU4bqldCBj4bqjIC0tPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHR7Y2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGtleT17Y2F0ZWdvcnkuX2lkfSB2YWx1ZT17Y2F0ZWdvcnkuX2lkfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Y2F0ZWdvcnkubmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2J1dHRvbiB3LTM2IGN1cnNvci1wb2ludGVyIGZsZXgganVzdGlmeS1jZW50ZXInPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9Jycgb25DbGljaz17aGFuZGxlU2VhcmNoQnRufT5cclxuXHRcdFx0XHRcdFx0VMOsbSBraeG6v21cclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBzcGFjZS15LTMgbGc6c3BhY2UteS0wIGxnOmp1c3RpZnktYmV0d2VlbiBteS00Jz5cclxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9J3RleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwJz5cclxuXHRcdFx0XHRcdFx0e3Byb2R1Y3RzLmxlbmd0aCAqIGN1cnJlbnRQYWdlIDwgbGltaXQgKiBjdXJyZW50UGFnZVxyXG5cdFx0XHRcdFx0XHRcdD8gcmVzdWx0XHJcblx0XHRcdFx0XHRcdFx0OiBwcm9kdWN0cy5sZW5ndGggKiBjdXJyZW50UGFnZX1cclxuXHRcdFx0XHRcdFx0L3tyZXN1bHR9IFPhuqNuIFBo4bqpbVxyXG5cdFx0XHRcdFx0PC9oMT5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uLWJsdWUgbWF4LXctc20gZmxleCBqdXN0aWZ5LWNlbnRlciBwLTMnPlxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvY3JlYXRlJz5cclxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9Jyc+KyBUaMOqbSBz4bqjbiBwaOG6qW0gbeG7m2k8L2E+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIG92ZXJmbG93LXgtYXV0byc+XHJcblx0XHRcdFx0XHQ8dGFibGUgY2xhc3NOYW1lPScnPlxyXG5cdFx0XHRcdFx0XHQ8dGhlYWQ+XHJcblx0XHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt7IG1pbldpZHRoOiA0MDAgfX0+VMOqbiBz4bqjbiBwaOG6qW08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt7IG1pbldpZHRoOiA4MCB9fT5HacOhPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT17eyBtaW5XaWR0aDogODAgfX0+S2hvPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT17eyBtaW5XaWR0aDogODAgfX0+xJDDoyBiw6FuPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT17eyBtaW5XaWR0aDogMTAwIH19PkNo4buJbmggc+G7rWE8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdFx0XHR7cHJvZHVjdHMubWFwKGl0ZW0gPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PHRyIGtleT17aXRlbS5faWR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciAke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXRlbS5kZWxldGVkID8gJ2ltZ19oaWRkZW4nIDogJydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17aXRlbS5pbWFnZXNbMF0udXJsfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PSfhuqJuaCBiw6xhJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdyb3VuZGVkIG1yLTInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBoZWlnaHQ6IDUwLCB3aWR0aDogNTAgfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+PC9pbWc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0uZGVsZXRlZCAmJiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzbWFsbCBjbGFzc05hbWU9J3RleHQtcmVkLTMwMCc+xJDDoyDhuqluPC9zbWFsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS50aXRsZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlciBhbGlnbi1taWRkbGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzbWFsbD4mI3gyMEFCOzwvc21hbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0ucHJpY2VTYWxlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQudG9TdHJpbmcoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcuJyl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9J2FsaWduLW1pZGRsZSc+e2l0ZW0uaW5TdG9ja308L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3NOYW1lPSdhbGlnbi1taWRkbGUnPntpdGVtLnNvbGR9PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT0nYWxpZ24tbWlkZGxlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtaGlkZGVuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZmFzIGZhLWVkaXQgcHktMSB0ZXh0LWluZm8nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlRWRpdChpdGVtLl9pZCwgaXRlbS5kZWxldGVkKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+PC9pPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtaGlkZGVuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZhcyAke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGl0ZW0uZGVsZXRlZCA/ICdmYS1leWUtc2xhc2gnIDogJ2ZhLWV5ZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBweS0xIHRleHQtcHJpbWFyeWB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlU2hvdyhpdGVtLl9pZCwgaXRlbS5kZWxldGVkKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+PC9pPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtaGlkZGVuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZmFzIGZhLXRyYXNoLWFsdCBweS0xIHRleHQtZGFuZ2VyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoaXRlbS5faWQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXRvZ2dsZT0nbW9kYWwnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtdGFyZ2V0PScjZGVsZXRlVXNlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHQ8L3Rib2R5PlxyXG5cdFx0XHRcdFx0PC90YWJsZT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXktNCBwdC00Jz5cclxuXHRcdFx0XHQ8bmF2PlxyXG5cdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT0ncGFnaW5hdGlvbic+XHJcblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e2BidG4gcGFnZS1pdGVtICR7Y3VycmVudFBhZ2UgPT09IDEgPyAnZGlzYWJsZWQnIDogJyd9YH0+XHJcblx0XHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdwYWdlLWxpbmsgdGV4dC1kYW5nZXIgZm9udC13ZWlnaHQtYm9sZCdcclxuXHRcdFx0XHRcdFx0XHRcdHRhYkluZGV4PSctMSdcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzUGFnZX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQmbGFxdW87XHJcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdHttYXhQYWdlID4gNlxyXG5cdFx0XHRcdFx0XHRcdD8gbmV3VG90YWxQYWdlLm1hcChwYWdlID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtwYWdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGJ0biBwYWdlLWl0ZW0gJHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZ2UgPT0gJy4uLicgPyAnZGlzYWJsZWQnIDogJydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICR7Y3VycmVudFBhZ2UgPT09IHBhZ2UgPyAnYWN0aXZlJyA6ICcnfWB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVQYWdpbmF0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgcGFnZS1saW5rIGZvbnQtd2VpZ2h0LWJvbGQgJHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudFBhZ2UgPT09IHBhZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/ICd0ZXh0LWxpZ2h0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJ3RleHQtZGFuZ2VyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fWB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3BhZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0ICApKVxyXG5cdFx0XHRcdFx0XHRcdDogdG90YWxQYWdlLm1hcChwYWdlID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtwYWdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGJ0biBwYWdlLWl0ZW0gJHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZ2UgPT0gJy4uLicgPyAnZGlzYWJsZWQnIDogJydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICR7Y3VycmVudFBhZ2UgPT09IHBhZ2UgPyAnYWN0aXZlJyA6ICcnfWB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVQYWdpbmF0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgcGFnZS1saW5rIGZvbnQtd2VpZ2h0LWJvbGQgJHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudFBhZ2UgPT09IHBhZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/ICd0ZXh0LWxpZ2h0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJ3RleHQtZGFuZ2VyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fWB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3BhZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0ICApKX1cclxuXHJcblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e2BidG4gcGFnZS1pdGVtICR7Y3VycmVudFBhZ2UgPT09IG1heFBhZ2UgPyAnZGlzYWJsZWQnIDogJyd9YH0+XHJcblx0XHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdwYWdlLWxpbmsgdGV4dC1kYW5nZXIgZm9udC13ZWlnaHQtYm9sZCdcclxuXHRcdFx0XHRcdFx0XHRcdHRhYkluZGV4PSctMSdcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZU5leHRQYWdlfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdCZyYXF1bztcclxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9saT5cclxuXHJcblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J21vYmlsZV9oaWRkZW4nPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdidG4tZ3JvdXAgZHJvcHVwJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2J0biBidG4tb3V0bGluZWQgZHJvcGRvd24tdG9nZ2xlIG10LTIgdGV4dC1zZWNvbmRhcnknXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtdG9nZ2xlPSdkcm9wZG93bidcclxuXHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1oYXNwb3B1cD0ndHJ1ZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD0nZmFsc2UnXHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtsaW1pdE51bWJlcn0vdHJhbmdcclxuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkcm9wZG93bi1tZW51Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZHJvcGRvd24taXRlbSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRMaW1pdE51bWJlcigxMil9XHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQxMlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZHJvcGRvd24taXRlbSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRMaW1pdE51bWJlcigyNCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQyNFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZHJvcGRvd24taXRlbSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRMaW1pdE51bWJlcig0OCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ0OFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L25hdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJEYXRhQ29udGV4dCIsInVzZVJvdXRlciIsIkxpbmsiLCJheGlvcyIsImZpbHRlclNlYXJjaCIsIkhlYWRlciIsInJhbmdlIiwic3RhcnQiLCJlbmQiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaWR4IiwiTWFpblByb2R1Y3RNYW5hZ2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsImNhdGVnb3JpZXMiLCJhdXRoIiwidXNlciIsInJvdXRlciIsIm5hbWUiLCJzZXROYW1lIiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJhbGwiLCJoaWRkZW4iLCJhY3QiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJwYWdlIiwic2V0UGFnZSIsImxpbWl0TnVtYmVyIiwic2V0TGltaXROdW1iZXIiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwiY2F0ZWdvcnlRIiwicXVlcnkiLCJzb3J0Iiwic2VhcmNoIiwibGltaXQiLCJpbmRleFBhZ2UiLCJtYXhQYWdlIiwidG90YWxQYWdlIiwibmV3VG90YWxQYWdlIiwicHVzaCIsImhhbmRsZUNoYW5nZVRpdGxlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlQ2F0ZWdvcnkiLCJoYW5kbGVTZWFyY2hCdG4iLCJnZXRQcm9kdWN0cyIsImlkIiwibGluayIsImNhdGUiLCJzZWFyIiwidHlwZSIsInBheWxvYWQiLCJsb2FkaW5nIiwiZ2V0IiwiZW5jb2RlVVJJIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0b2tlbiIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZXJyIiwiZXJyb3IiLCJtZXNzYWdlIiwiZ2V0QWxsUHJvZHVjdHMiLCJyb2xlIiwiaGFuZGxlQWxsIiwiaGFuZGxlSGlkZGVuIiwiaGFuZGxlQWN0aXZlIiwiaGFuZGxlRGVsZXRlIiwiaGFuZGxlRWRpdCIsImlzRGVsZXRlZCIsImhhbmRsZVNob3ciLCJwYXRjaCIsImhhbmRsZVBhZ2luYXRpb24iLCJpbmRleCIsIk51bWJlciIsImlubmVySFRNTCIsImhhbmRsZVByZXZpb3VzUGFnZSIsImhhbmRsZU5leHRQYWdlIiwiX2lkIiwibGVuZ3RoIiwibWluV2lkdGgiLCJpdGVtIiwiZGVsZXRlZCIsImltYWdlcyIsInVybCIsImhlaWdodCIsIndpZHRoIiwidGl0bGUiLCJwcmljZVNhbGUiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJpblN0b2NrIiwic29sZCIsImN1cnNvciJdLCJzb3VyY2VSb290IjoiIn0=