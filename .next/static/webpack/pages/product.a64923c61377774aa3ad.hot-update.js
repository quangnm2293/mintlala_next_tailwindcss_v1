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

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('getListed'),
      urlReq = _useState9[0],
      setUrlReq = _useState9[1];

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
        lineNumber: 244,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tailwind_Header__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 247,
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
          lineNumber: 251,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
          onClick: handleActive,
          className: "hover:outline-black_solid p-2 ".concat(active.act ? 'text-red-400' : 'cursor-pointer'),
          children: "\u0110ang ho\u1EA1t \u0111\u1ED9ng"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
          onClick: handleHidden,
          className: "hover:outline-black_solid p-2 ".concat(active.hidden ? 'text-red-400' : 'cursor-pointer'),
          children: "\u0110\xE3 \u1EA9n"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 250,
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
              lineNumber: 282,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 281,
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
            lineNumber: 285,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 280,
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
              lineNumber: 297,
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
                lineNumber: 305,
                columnNumber: 9
              }, this), categories.map(function (category) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  value: category._id,
                  children: category.name
                }, category._id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 307,
                  columnNumber: 10
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 298,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 296,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "button w-36 cursor-pointer flex justify-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "",
          onClick: handleSearchBtn,
          children: "T\xECm ki\u1EBFm"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:justify-between my-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "text-xl font-semibold text-gray-700",
          children: [products.length * currentPage < limit * currentPage ? result : products.length * currentPage, "/", result, " S\u1EA3n Ph\u1EA9m"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 323,
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
              lineNumber: 332,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 331,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 322,
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
                lineNumber: 341,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 80
                },
                children: "Gi\xE1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 342,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 80
                },
                children: "Kho"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 343,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 80
                },
                children: "\u0110\xE3 b\xE1n"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 344,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 100
                },
                children: "Ch\u1EC9nh s\u1EEDa"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 345,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 340,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 339,
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
                    lineNumber: 352,
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
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                      className: "capitalize",
                      children: item.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 363,
                      columnNumber: 12
                    }, _this)]
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
                  lineNumber: 351,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "text-red-400 align-middle",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
                    children: "\u20AB"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 370,
                    columnNumber: 11
                  }, _this), item.priceSale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 369,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "text-center",
                  children: item.inStock
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 376,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "text-center",
                  children: item.sold
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 377,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "text-center",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex justify-between",
                    children: [!item.deleted && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.PencilAltIcon, {
                      onClick: function onClick() {
                        return handleEdit(item._id, item.deleted);
                      },
                      className: "h-5 text-blue-500 cursor-pointer"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 381,
                      columnNumber: 13
                    }, _this), item.deleted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.EyeOffIcon, {
                      onClick: function onClick() {
                        return handleShow(item._id, item.deleted);
                      },
                      className: "h-5 text-red-500 ".concat(item.deleted ? 'cursor-pointer' : '')
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 390,
                      columnNumber: 13
                    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.EyeIcon, {
                      onClick: function onClick() {
                        return handleShow(item._id, item.deleted);
                      },
                      className: "h-5 text-green-500 ".concat(item.deleted ? 'cursor-pointer' : '')
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 399,
                      columnNumber: 13
                    }, _this), active.hidden && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.TrashIcon, {
                      className: "h-5 text-red-500",
                      onClick: function onClick() {
                        return handleDelete(item._id);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 410,
                      columnNumber: 13
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 379,
                    columnNumber: 11
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 378,
                  columnNumber: 10
                }, _this)]
              }, item._id, true, {
                fileName: _jsxFileName,
                lineNumber: 350,
                columnNumber: 9
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 348,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 338,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_12__.default, {
        result: result
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 423,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 242,
    columnNumber: 3
  }, this);
}

_s(MainProductManager, "6kCSHQTy2PJvZljlR9D5Bt5OSos=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC5hNjQ5MjNjNjEzNzc3NzRhYTNhZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTZ0IsS0FBVCxDQUFlQyxLQUFmLEVBQXNCQyxHQUF0QixFQUEyQjtBQUMxQixTQUFPQyxLQUFLLENBQUNELEdBQUcsR0FBR0QsS0FBTixHQUFjLENBQWYsQ0FBTCxDQUNMRyxJQURLLEdBRUxDLEdBRkssQ0FFRCxVQUFDQyxDQUFELEVBQUlDLEdBQUo7QUFBQSxXQUFZTixLQUFLLEdBQUdNLEdBQXBCO0FBQUEsR0FGQyxDQUFQO0FBR0E7O0FBRWMsU0FBU0Msa0JBQVQsR0FBOEI7QUFBQTs7QUFBQTs7QUFBQSxvQkFDaEJ2QixpREFBVSxDQUFDSSwyREFBRCxDQURNO0FBQUEsTUFDcENvQixLQURvQyxlQUNwQ0EsS0FEb0M7QUFBQSxNQUM3QkMsUUFENkIsZUFDN0JBLFFBRDZCOztBQUFBLE1BRXBDQyxVQUZvQyxHQUVmRixLQUZlLENBRXBDRSxVQUZvQztBQUFBLE1BRXhCQyxJQUZ3QixHQUVmSCxLQUZlLENBRXhCRyxJQUZ3QjtBQUFBLE1BR3BDQyxJQUhvQyxHQUczQkQsSUFIMkIsQ0FHcENDLElBSG9DO0FBSTVDLE1BQU1DLE1BQU0sR0FBR3hCLHNEQUFTLEVBQXhCOztBQUo0QyxrQkFNcEJILCtDQUFRLENBQUMsRUFBRCxDQU5ZO0FBQUEsTUFNckM0QixJQU5xQztBQUFBLE1BTS9CQyxPQU4rQjs7QUFBQSxtQkFPWjdCLCtDQUFRLENBQUMsRUFBRCxDQVBJO0FBQUEsTUFPckM4QixRQVBxQztBQUFBLE1BTzNCQyxXQVAyQjs7QUFBQSxtQkFRWi9CLCtDQUFRLENBQUMsRUFBRCxDQVJJO0FBQUEsTUFRckNnQyxR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QUFBQTtBQUFBO0FBQUEsNkJBREEsZ0JBVUEsOERBQUMsOERBQUQ7QUFDQyw2QkFBTyxFQUFFO0FBQUEsK0JBQ1JkLFVBQVUsQ0FBQ1csSUFBSSxDQUFDSCxHQUFOLEVBQVdHLElBQUksQ0FBQ0csT0FBaEIsQ0FERjtBQUFBLHVCQURWO0FBSUMsK0JBQVMsK0JBQ1JILElBQUksQ0FBQ0csT0FBTCxHQUFlLGdCQUFmLEdBQWtDLEVBRDFCO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFwQkYsRUE4QkVyRSxNQUFNLENBQUNGLE1BQVAsaUJBQ0EsOERBQUMsZ0VBQUQ7QUFDQywrQkFBUyxFQUFDLGtCQURYO0FBRUMsNkJBQU8sRUFBRTtBQUFBLCtCQUFNc0QsWUFBWSxDQUFDYyxJQUFJLENBQUNILEdBQU4sQ0FBbEI7QUFBQTtBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBL0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBNUJEO0FBQUEsaUJBQVNHLElBQUksQ0FBQ0gsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURpQjtBQUFBLGFBQWpCO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFWRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeEZELGVBOEtDLDhEQUFDLDREQUFEO0FBQVksY0FBTSxFQUFFN0Q7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTlLRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQTBMQTs7R0F0WnVCbEI7VUFJUmxCOzs7S0FKUWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3QvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtc3BhY2VzLWFuZC10YWJzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uLy4uL3N0b3JlL0dsb2JhbFN0YXRlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgZmlsdGVyU2VhcmNoIGZyb20gJy4uLy4uL3V0aWxzL2ZpbHRlclNlYXJjaCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90YWlsd2luZC9IZWFkZXInO1xyXG5pbXBvcnQgeyBFeWVJY29uLCBFeWVPZmZJY29uLCBQZW5jaWxBbHRJY29uLCBUcmFzaEljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L291dGxpbmUnO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xyXG5cclxuZnVuY3Rpb24gcmFuZ2Uoc3RhcnQsIGVuZCkge1xyXG5cdHJldHVybiBBcnJheShlbmQgLSBzdGFydCArIDEpXHJcblx0XHQuZmlsbCgpXHJcblx0XHQubWFwKChfLCBpZHgpID0+IHN0YXJ0ICsgaWR4KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpblByb2R1Y3RNYW5hZ2VyKCkge1xyXG5cdGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuXHRjb25zdCB7IGNhdGVnb3JpZXMsIGF1dGggfSA9IHN0YXRlO1xyXG5cdGNvbnN0IHsgdXNlciB9ID0gYXV0aDtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0Y29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSh7IGFsbDogdHJ1ZSwgaGlkZGVuOiBmYWxzZSwgYWN0OiBmYWxzZSB9KTtcclxuXHRjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoMCk7XHJcblx0Y29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcblx0Y29uc3QgW2xpbWl0TnVtYmVyLCBzZXRMaW1pdE51bWJlcl0gPSB1c2VTdGF0ZSgxMCk7XHJcblx0Y29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuXHRjb25zdCBbdXJsUmVxLCBzZXRVcmxSZXFdID0gdXNlU3RhdGUoJ2dldExpc3RlZCcpO1xyXG5cclxuXHRjb25zdCBjYXRlZ29yeVEgPSByb3V0ZXIucXVlcnkuY2F0ZWdvcnkgfHwgJ2FsbCc7XHJcblx0Y29uc3Qgc29ydCA9IHJvdXRlci5xdWVyeS5zb3J0IHx8ICcnO1xyXG5cdGNvbnN0IHNlYXJjaCA9IHJvdXRlci5xdWVyeS5zZWFyY2ggfHwgJ2FsbCc7XHJcblx0Y29uc3QgbGltaXQgPSByb3V0ZXIucXVlcnkubGltaXQgfHwgbGltaXROdW1iZXI7XHJcblxyXG5cdGNvbnN0IGluZGV4UGFnZSA9IHJlc3VsdCAlIGxpbWl0ID09PSAwID8gMCA6IDE7XHJcblx0Y29uc3QgbWF4UGFnZSA9IChyZXN1bHQgLSAocmVzdWx0ICUgbGltaXQpKSAvIGxpbWl0ICsgaW5kZXhQYWdlO1xyXG5cclxuXHRjb25zdCB0b3RhbFBhZ2UgPSByYW5nZSgxLCBtYXhQYWdlKTtcclxuXHJcblx0bGV0IG5ld1RvdGFsUGFnZSA9IFtdO1xyXG5cclxuXHRpZiAobWF4UGFnZSA+IDYpIHtcclxuXHRcdGlmIChjdXJyZW50UGFnZSA+PSAzICYmIGN1cnJlbnRQYWdlIDw9IG1heFBhZ2UgLSAzKSB7XHJcblx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKGN1cnJlbnRQYWdlIC0gMik7XHJcblx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKGN1cnJlbnRQYWdlIC0gMSk7XHJcblx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKGN1cnJlbnRQYWdlKTtcclxuXHRcdFx0bmV3VG90YWxQYWdlLnB1c2goY3VycmVudFBhZ2UgKyAxKTtcclxuXHRcdFx0bmV3VG90YWxQYWdlLnB1c2goY3VycmVudFBhZ2UgKyAyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChjdXJyZW50UGFnZSA+IG1heFBhZ2UgLSAzKSB7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2gobWF4UGFnZSAtIDUpO1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKG1heFBhZ2UgLSA0KTtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChtYXhQYWdlIC0gMyk7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2gobWF4UGFnZSAtIDIpO1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKG1heFBhZ2UgLSAxKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaCgxKTtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaCgyKTtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaCgzKTtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaCg0KTtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaCg1KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKGN1cnJlbnRQYWdlIDwgbWF4UGFnZSAtIDMpIHtcclxuXHRcdFx0bmV3VG90YWxQYWdlLnB1c2goJy4uLicpO1xyXG5cdFx0fVxyXG5cclxuXHRcdG5ld1RvdGFsUGFnZS5wdXNoKG1heFBhZ2UpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlVGl0bGUgPSBlID0+IHtcclxuXHRcdHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBzZWFyY2g6IGUudGFyZ2V0LnZhbHVlLCBwYWdlOiAxIH0pO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlQ2F0ZWdvcnkgPSBlID0+IHtcclxuXHRcdHNldENhdGVnb3J5KGUudGFyZ2V0LnZhbHVlKTtcclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgY2F0ZWdvcnk6IGUudGFyZ2V0LnZhbHVlLCBwYWdlOiAxIH0pO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlU2VhcmNoQnRuID0gKCkgPT4ge1xyXG5cdFx0aWYgKGFjdGl2ZS5hbGwpIHtcclxuXHRcdFx0Z2V0UHJvZHVjdHMoMSwgJ2dldExpc3RlZCcsIGNhdGVnb3J5LCBuYW1lKTtcclxuXHRcdH1cclxuXHRcdGlmIChhY3RpdmUuYWN0KSB7XHJcblx0XHRcdGdldFByb2R1Y3RzKDEsICdnZXRBY3RpdmUnLCBjYXRlZ29yeSwgbmFtZSk7XHJcblx0XHR9XHJcblx0XHRpZiAoYWN0aXZlLmhpZGRlbikge1xyXG5cdFx0XHRnZXRQcm9kdWN0cygxLCAnZ2V0VW5MaXN0ZWQnLCBjYXRlZ29yeSwgbmFtZSk7XHJcblx0XHR9XHJcblx0XHRmaWx0ZXJTZWFyY2goeyByb3V0ZXIsIHNlYXJjaDogJ2FsbCcgfSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAoaWQsIGxpbmssIGNhdGUsIHNlYXIpID0+IHtcclxuXHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgbG9hZGluZzogdHJ1ZSB9IH0pO1xyXG5cclxuXHRcdHRyeSB7XHJcblx0XHRcdGF3YWl0IGF4aW9zXHJcblx0XHRcdFx0LmdldChcclxuXHRcdFx0XHRcdGVuY29kZVVSSShcclxuXHRcdFx0XHRcdFx0YC9hcGkvcHJvZHVjdC8ke2xpbmt9P3BhZ2U9JHtpZCA/IGlkIDogcGFnZX0mY2F0ZWdvcnk9JHtcclxuXHRcdFx0XHRcdFx0XHRjYXRlID8gY2F0ZSA6IGNhdGVnb3J5UVxyXG5cdFx0XHRcdFx0XHR9JnNvcnQ9JHtzb3J0fSZ0aXRsZT0ke3NlYXIgPyBzZWFyIDogc2VhcmNofSZsaW1pdD0ke2xpbWl0fWBcclxuXHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHR7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYXV0aC50b2tlbiB9IH1cclxuXHRcdFx0XHQpXHJcblx0XHRcdFx0LnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5lcnIpIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGVycm9yOiByZXMuZGF0YS5lcnIgfSB9KTtcclxuXHJcblx0XHRcdFx0XHRzZXRQcm9kdWN0cyhyZXMuZGF0YS5wcm9kdWN0cyk7XHJcblx0XHRcdFx0XHRzZXRSZXN1bHQocmVzLmRhdGEucmVzdWx0KTtcclxuXHJcblx0XHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGVycm9yOiBlcnIubWVzc2FnZSB9IH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBnZXRBbGxQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcblxyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGF3YWl0IGF4aW9zXHJcblx0XHRcdFx0XHQuZ2V0KFxyXG5cdFx0XHRcdFx0XHRlbmNvZGVVUkkoXHJcblx0XHRcdFx0XHRcdFx0YC9hcGkvcHJvZHVjdC8ke3VybFJlcX0/cGFnZT0ke3BhZ2V9JmNhdGVnb3J5PSR7Y2F0ZWdvcnlRfSZzb3J0PSR7c29ydH0mdGl0bGU9JHtzZWFyY2h9JmxpbWl0PSR7bGltaXR9YFxyXG5cdFx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0XHR7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYXV0aC50b2tlbiB9IH1cclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdC50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5lcnIpIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHJcblx0XHRcdFx0XHRcdHNldFByb2R1Y3RzKHJlcy5kYXRhLnByb2R1Y3RzKTtcclxuXHRcdFx0XHRcdFx0c2V0UmVzdWx0KHJlcy5kYXRhLnJlc3VsdCk7XHJcblxyXG5cdFx0XHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRpZiAodXNlciAmJiB1c2VyLnJvbGUgPT09ICdhZG1pbicpIGdldEFsbFByb2R1Y3RzKCk7XHJcblx0fSwgW3JvdXRlci5xdWVyeSwgdXJsUmVxXSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUFsbCA9ICgpID0+IHtcclxuXHRcdHNldFVybFJlcSgnZ2V0TGlzdGVkJyk7XHJcblx0XHRzZXRDdXJyZW50UGFnZSgxKTtcclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgcGFnZTogMSB9KTtcclxuXHRcdHNldEFjdGl2ZSh7IGFsbDogdHJ1ZSwgaGlkZGVuOiBmYWxzZSwgYWN0OiBmYWxzZSB9KTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZUhpZGRlbiA9ICgpID0+IHtcclxuXHRcdHNldFVybFJlcSgnZ2V0VW5MaXN0ZWQnKTtcclxuXHRcdHNldEN1cnJlbnRQYWdlKDEpO1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBwYWdlOiAxIH0pO1xyXG5cdFx0c2V0QWN0aXZlKHsgYWxsOiBmYWxzZSwgaGlkZGVuOiB0cnVlLCBhY3Q6IGZhbHNlIH0pO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlQWN0aXZlID0gKCkgPT4ge1xyXG5cdFx0c2V0VXJsUmVxKCdnZXRBY3RpdmUnKTtcclxuXHRcdHNldEN1cnJlbnRQYWdlKDEpO1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBwYWdlOiAxIH0pO1xyXG5cdFx0c2V0QWN0aXZlKHsgYWxsOiBmYWxzZSwgaGlkZGVuOiBmYWxzZSwgYWN0OiB0cnVlIH0pO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlRGVsZXRlID0gaWQgPT4ge1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnQUREX01PREFMJyxcclxuXHRcdFx0cGF5bG9hZDogeyBpZCwgdG9rZW46IGF1dGgudG9rZW4sIHR5cGU6ICdQUk9EVUNUJywgcm9sZTogYXV0aC51c2VyLnJvbGUgfSxcclxuXHRcdH0pO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlRWRpdCA9IChpZCwgaXNEZWxldGVkKSA9PiB7XHJcblx0XHRpZiAoaXNEZWxldGVkKSByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBlcnJvcjogJ1Z1aSBsw7JuZyBi4buPIOG6qW4gxJHhu4MgY2jhu4luaCBz4butYS4nIH0gfSk7XHJcblx0XHRyb3V0ZXIucHVzaChgL2NyZWF0ZS8ke2lkfWApO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlU2hvdyA9IGFzeW5jIChpZCwgaXNEZWxldGVkKSA9PiB7XHJcblx0XHRpZiAoIWlzRGVsZXRlZCkgcmV0dXJuO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0YXdhaXQgYXhpb3NcclxuXHRcdFx0XHQucGF0Y2goYC9hcGkvcHJvZHVjdC8ke2lkfWAsIG51bGwsIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBhdXRoLnRva2VuIH0gfSlcclxuXHRcdFx0XHQudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmVycikgcmV0dXJuO1xyXG5cclxuXHRcdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgZXJyb3I6IGVyci5tZXNzYWdlIH0gfSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlUGFnaW5hdGlvbiA9IGUgPT4ge1xyXG5cdFx0Y29uc3QgaW5kZXggPSBOdW1iZXIoZS50YXJnZXQuaW5uZXJIVE1MKTtcclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgcGFnZTogaW5kZXggfSk7XHJcblx0XHRzZXRDdXJyZW50UGFnZShpbmRleCk7XHJcblx0XHRzZXRQYWdlKGluZGV4KTtcclxuXHJcblx0XHRpZiAoYWN0aXZlLmFsbCkge1xyXG5cdFx0XHRnZXRQcm9kdWN0cyhpbmRleCwgJ2dldExpc3RlZCcpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGFjdGl2ZS5hY3QpIHtcclxuXHRcdFx0Z2V0UHJvZHVjdHMoaW5kZXgsICdnZXRBY3RpdmUnKTtcclxuXHRcdH1cclxuXHRcdGlmIChhY3RpdmUuaGlkZGVuKSB7XHJcblx0XHRcdGdldFByb2R1Y3RzKGluZGV4LCAnZ2V0VW5MaXN0ZWQnKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZVByZXZpb3VzUGFnZSA9ICgpID0+IHtcclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgcGFnZTogY3VycmVudFBhZ2UgLSAxIH0pO1xyXG5cdFx0c2V0Q3VycmVudFBhZ2UoY3VycmVudFBhZ2UgLSAxKTtcclxuXHRcdGlmIChhY3RpdmUuYWxsKSB7XHJcblx0XHRcdGdldFByb2R1Y3RzKGN1cnJlbnRQYWdlIC0gMSwgJ2dldExpc3RlZCcpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGFjdGl2ZS5hY3QpIHtcclxuXHRcdFx0Z2V0UHJvZHVjdHMoY3VycmVudFBhZ2UgLSAxLCAnZ2V0QWN0aXZlJyk7XHJcblx0XHR9XHJcblx0XHRpZiAoYWN0aXZlLmhpZGRlbikge1xyXG5cdFx0XHRnZXRQcm9kdWN0cyhjdXJyZW50UGFnZSAtIDEsICdnZXRVbkxpc3RlZCcpO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlTmV4dFBhZ2UgPSAoKSA9PiB7XHJcblx0XHRmaWx0ZXJTZWFyY2goeyByb3V0ZXIsIHBhZ2U6IGN1cnJlbnRQYWdlICsgMSB9KTtcclxuXHRcdHNldEN1cnJlbnRQYWdlKGN1cnJlbnRQYWdlICsgMSk7XHJcblx0XHRpZiAoYWN0aXZlLmFsbCkge1xyXG5cdFx0XHRnZXRQcm9kdWN0cyhjdXJyZW50UGFnZSArIDEsICdnZXRMaXN0ZWQnKTtcclxuXHRcdH1cclxuXHRcdGlmIChhY3RpdmUuYWN0KSB7XHJcblx0XHRcdGdldFByb2R1Y3RzKGN1cnJlbnRQYWdlICsgMSwgJ2dldEFjdGl2ZScpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGFjdGl2ZS5oaWRkZW4pIHtcclxuXHRcdFx0Z2V0UHJvZHVjdHMoY3VycmVudFBhZ2UgKyAxLCAnZ2V0VW5MaXN0ZWQnKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRpZiAoIXVzZXIgfHwgdXNlci5yb2xlICE9PSAnYWRtaW4nKSByZXR1cm4gbnVsbDtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdiZy1ncmF5LTEwMCBtaW4taC1zY3JlZW4nPlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+UXXhuqNuIGzDvSBz4bqjbiBwaOG6qW08L3RpdGxlPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblxyXG5cdFx0XHQ8SGVhZGVyIC8+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWF4LXctc2NyZWVuLTJ4bCBteC1hdXRvIGJnLXdoaXRlIHAtNSc+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1ldmVubHkgcHgtMyBwdC0zIHRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNjAwIGJvcmRlci1iLTIgcGItNCBib3JkZXItZ3JheS0zMDAnPlxyXG5cdFx0XHRcdFx0PGg1XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZUFsbH1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgaG92ZXI6b3V0bGluZS1ibGFja19zb2xpZCBwLTIgJHtcclxuXHRcdFx0XHRcdFx0XHRhY3RpdmUuYWxsID8gJ3RleHQtcmVkLTQwMCcgOiAnY3Vyc29yLXBvaW50ZXInXHJcblx0XHRcdFx0XHRcdH1gfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRU4bqldCBj4bqjXHJcblx0XHRcdFx0XHQ8L2g1PlxyXG5cclxuXHRcdFx0XHRcdDxoNVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVBY3RpdmV9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGhvdmVyOm91dGxpbmUtYmxhY2tfc29saWQgcC0yICR7XHJcblx0XHRcdFx0XHRcdFx0YWN0aXZlLmFjdCA/ICd0ZXh0LXJlZC00MDAnIDogJ2N1cnNvci1wb2ludGVyJ1xyXG5cdFx0XHRcdFx0XHR9YH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0xJBhbmcgaG/huqF0IMSR4buZbmdcclxuXHRcdFx0XHRcdDwvaDU+XHJcblxyXG5cdFx0XHRcdFx0PGg1XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZUhpZGRlbn1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgaG92ZXI6b3V0bGluZS1ibGFja19zb2xpZCBwLTIgJHtcclxuXHRcdFx0XHRcdFx0XHRhY3RpdmUuaGlkZGVuID8gJ3RleHQtcmVkLTQwMCcgOiAnY3Vyc29yLXBvaW50ZXInXHJcblx0XHRcdFx0XHRcdH1gfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHTEkMOjIOG6qW5cclxuXHRcdFx0XHRcdDwvaDU+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBwLTUgc3BhY2UteS00IGxnOnNwYWNlLXgtMTAgbGc6c3BhY2UteS0wJz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC01Jz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9Jyc+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQnPlTDqm4gc+G6o24gcGjhuqltPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdib3JkZXIgYm9yZGVyLWdyYXktMzAwIHAtMyByb3VuZGVkLW1kIGZsZXgtZ3JvdydcclxuXHRcdFx0XHRcdFx0XHRuYW1lPSduYW1lJ1xyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtuYW1lfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUaXRsZX1cclxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nTmjhuq1wIHTDqm4nXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsJz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggc3BhY2UteC01IGl0ZW1zLWNlbnRlcic+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQnPkRhbmggbeG7pWM8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PHNlbGVjdFxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT0nY2F0ZWdvcnknXHJcblx0XHRcdFx0XHRcdFx0XHRpZD0nY2F0ZWdvcnknXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Y2F0ZWdvcnl9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlQ2F0ZWdvcnl9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZsZXgtZ3JvdyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHAtMyByb3VuZGVkLW1kIGNhcGl0YWxpemUnXHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nYWxsJz4tLSBU4bqldCBj4bqjIC0tPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHR7Y2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGtleT17Y2F0ZWdvcnkuX2lkfSB2YWx1ZT17Y2F0ZWdvcnkuX2lkfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Y2F0ZWdvcnkubmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2J1dHRvbiB3LTM2IGN1cnNvci1wb2ludGVyIGZsZXgganVzdGlmeS1jZW50ZXInPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9Jycgb25DbGljaz17aGFuZGxlU2VhcmNoQnRufT5cclxuXHRcdFx0XHRcdFx0VMOsbSBraeG6v21cclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBzcGFjZS15LTMgbGc6c3BhY2UteS0wIGxnOmp1c3RpZnktYmV0d2VlbiBteS00Jz5cclxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9J3RleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwJz5cclxuXHRcdFx0XHRcdFx0e3Byb2R1Y3RzLmxlbmd0aCAqIGN1cnJlbnRQYWdlIDwgbGltaXQgKiBjdXJyZW50UGFnZVxyXG5cdFx0XHRcdFx0XHRcdD8gcmVzdWx0XHJcblx0XHRcdFx0XHRcdFx0OiBwcm9kdWN0cy5sZW5ndGggKiBjdXJyZW50UGFnZX1cclxuXHRcdFx0XHRcdFx0L3tyZXN1bHR9IFPhuqNuIFBo4bqpbVxyXG5cdFx0XHRcdFx0PC9oMT5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uLWJsdWUgbWF4LXctc20gZmxleCBqdXN0aWZ5LWNlbnRlciBwLTMnPlxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvY3JlYXRlJz5cclxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9Jyc+KyBUaMOqbSBz4bqjbiBwaOG6qW0gbeG7m2k8L2E+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIG92ZXJmbG93LXgtYXV0byc+XHJcblx0XHRcdFx0XHQ8dGFibGUgY2xhc3NOYW1lPScnPlxyXG5cdFx0XHRcdFx0XHQ8dGhlYWQ+XHJcblx0XHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt7IG1pbldpZHRoOiA0MDAgfX0+VMOqbiBz4bqjbiBwaOG6qW08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt7IG1pbldpZHRoOiA4MCB9fT5HacOhPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT17eyBtaW5XaWR0aDogODAgfX0+S2hvPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT17eyBtaW5XaWR0aDogODAgfX0+xJDDoyBiw6FuPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT17eyBtaW5XaWR0aDogMTAwIH19PkNo4buJbmggc+G7rWE8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdFx0XHR7cHJvZHVjdHMubWFwKGl0ZW0gPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PHRyIGtleT17aXRlbS5faWR9IGNsYXNzTmFtZT0nYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIHB5LTQgc3BhY2UteC0yYH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtpdGVtLmltYWdlc1swXS51cmx9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9J+G6om5oIGLDrGEnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Ake2l0ZW0uZGVsZXRlZCA/ICdvcGFjaXR5LTQwJyA6ICcnfWB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBoZWlnaHQ6IDUwLCB3aWR0aDogNTAgfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5kZWxldGVkICYmIChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNtYWxsIGNsYXNzTmFtZT0ndGV4dC1yZWQtMzAwJz7EkMOjIOG6qW48L3NtYWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nY2FwaXRhbGl6ZSc+e2l0ZW0udGl0bGV9PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj48L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3NOYW1lPSd0ZXh0LXJlZC00MDAgYWxpZ24tbWlkZGxlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c21hbGw+JiN4MjBBQjs8L3NtYWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLnByaWNlU2FsZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnRvU3RyaW5nKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLicpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPntpdGVtLmluU3RvY2t9PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPntpdGVtLnNvbGR9PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2Vlbic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IWl0ZW0uZGVsZXRlZCAmJiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxQZW5jaWxBbHRJY29uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZUVkaXQoaXRlbS5faWQsIGl0ZW0uZGVsZXRlZClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdoLTUgdGV4dC1ibHVlLTUwMCBjdXJzb3ItcG9pbnRlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0uZGVsZXRlZCA/IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEV5ZU9mZkljb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlU2hvdyhpdGVtLl9pZCwgaXRlbS5kZWxldGVkKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BoLTUgdGV4dC1yZWQtNTAwICR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpdGVtLmRlbGV0ZWQgPyAnY3Vyc29yLXBvaW50ZXInIDogJydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxFeWVJY29uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZVNob3coaXRlbS5faWQsIGl0ZW0uZGVsZXRlZClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgaC01IHRleHQtZ3JlZW4tNTAwICR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpdGVtLmRlbGV0ZWQgPyAnY3Vyc29yLXBvaW50ZXInIDogJydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2FjdGl2ZS5oaWRkZW4gJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VHJhc2hJY29uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdoLTUgdGV4dC1yZWQtNTAwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShpdGVtLl9pZCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0XHRcdDwvdGFibGU+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxQYWdpbmF0aW9uIHJlc3VsdD17cmVzdWx0fSAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZCIsIkRhdGFDb250ZXh0IiwidXNlUm91dGVyIiwiTGluayIsImF4aW9zIiwiZmlsdGVyU2VhcmNoIiwiSGVhZGVyIiwiRXllSWNvbiIsIkV5ZU9mZkljb24iLCJQZW5jaWxBbHRJY29uIiwiVHJhc2hJY29uIiwiUGFnaW5hdGlvbiIsInJhbmdlIiwic3RhcnQiLCJlbmQiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaWR4IiwiTWFpblByb2R1Y3RNYW5hZ2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsImNhdGVnb3JpZXMiLCJhdXRoIiwidXNlciIsInJvdXRlciIsIm5hbWUiLCJzZXROYW1lIiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJhbGwiLCJoaWRkZW4iLCJhY3QiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJwYWdlIiwic2V0UGFnZSIsImxpbWl0TnVtYmVyIiwic2V0TGltaXROdW1iZXIiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwidXJsUmVxIiwic2V0VXJsUmVxIiwiY2F0ZWdvcnlRIiwicXVlcnkiLCJzb3J0Iiwic2VhcmNoIiwibGltaXQiLCJpbmRleFBhZ2UiLCJtYXhQYWdlIiwidG90YWxQYWdlIiwibmV3VG90YWxQYWdlIiwicHVzaCIsImhhbmRsZUNoYW5nZVRpdGxlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlQ2F0ZWdvcnkiLCJoYW5kbGVTZWFyY2hCdG4iLCJnZXRQcm9kdWN0cyIsImlkIiwibGluayIsImNhdGUiLCJzZWFyIiwidHlwZSIsInBheWxvYWQiLCJsb2FkaW5nIiwiZ2V0IiwiZW5jb2RlVVJJIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0b2tlbiIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZXJyIiwiZXJyb3IiLCJtZXNzYWdlIiwiZ2V0QWxsUHJvZHVjdHMiLCJyb2xlIiwiaGFuZGxlQWxsIiwiaGFuZGxlSGlkZGVuIiwiaGFuZGxlQWN0aXZlIiwiaGFuZGxlRGVsZXRlIiwiaGFuZGxlRWRpdCIsImlzRGVsZXRlZCIsImhhbmRsZVNob3ciLCJwYXRjaCIsImhhbmRsZVBhZ2luYXRpb24iLCJpbmRleCIsIk51bWJlciIsImlubmVySFRNTCIsImhhbmRsZVByZXZpb3VzUGFnZSIsImhhbmRsZU5leHRQYWdlIiwiX2lkIiwibGVuZ3RoIiwibWluV2lkdGgiLCJpdGVtIiwiaW1hZ2VzIiwidXJsIiwiZGVsZXRlZCIsImhlaWdodCIsIndpZHRoIiwidGl0bGUiLCJwcmljZVNhbGUiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJpblN0b2NrIiwic29sZCJdLCJzb3VyY2VSb290IjoiIn0=