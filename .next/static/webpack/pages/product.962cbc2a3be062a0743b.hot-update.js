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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Qu\u1EA3n l\xFD s\u1EA3n ph\u1EA9m"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "max-w-screen-2xl mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "d-flex justify-content-between px-3 pt-3",
        style: {
          cursor: 'pointer'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
          onClick: handleAll,
          className: active.all ? 'tag_active' : '',
          children: "T\u1EA5t c\u1EA3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
          onClick: handleActive,
          className: active.act ? 'tag_active' : '',
          children: "\u0110ang ho\u1EA1t \u0111\u1ED9ng"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
          onClick: handleHidden,
          className: active.hidden ? 'tag_active' : '',
          children: "\u0110\xE3 \u1EA9n"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "dropdown-divider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "input-group mb-3 col-md-6",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "input-group-prepend",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "input-group-text",
              children: "T\xEAn s\u1EA3n ph\u1EA9m"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 265,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            className: "form-control",
            name: "name",
            value: name,
            onChange: handleChangeTitle,
            placeholder: "Nh\u1EADp t\xEAn"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 267,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "input-group mb-3 col-md-6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "input-group-prepend w-100",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "input-group-text",
              children: "Danh m\u1EE5c"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
              name: "category",
              id: "category",
              value: category,
              onChange: handleChangeCategory,
              className: "custom-select text-capitalize",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "all",
                children: "-- T\u1EA5t c\u1EA3 --"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 287,
                columnNumber: 9
              }, this), categories.map(function (category) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  value: category._id,
                  children: category.name
                }, category._id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 289,
                  columnNumber: 10
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 280,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-md-12",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "btn btn-danger btn-sm my-2",
          style: {
            width: '100px'
          },
          onClick: handleSearchBtn,
          children: "T\xECm ki\u1EBFm"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row mb-2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-md-6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "px-4 mt-2",
            children: [products.length * currentPage < limit * currentPage ? result : products.length * currentPage, "/", result, " S\u1EA3n Ph\u1EA9m"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 310,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-md-6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
            href: "/create",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "btn btn-info my-auto",
              style: {
                minWidth: 250
              },
              children: "+ Th\xEAm s\u1EA3n ph\u1EA9m m\u1EDBi"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 320,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 319,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "body_page_manager table-responsive",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
          className: "table table-striped table-bordered",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 400
                },
                children: "T\xEAn s\u1EA3n ph\u1EA9m"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 331,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 80
                },
                children: "Gi\xE1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 332,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 80
                },
                children: "Kho"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 333,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 80
                },
                children: "\u0110\xE3 b\xE1n"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 334,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                style: {
                  minWidth: 100
                },
                children: "Ch\u1EC9nh s\u1EEDa"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 335,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 330,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 329,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
            children: products.map(function (item) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "d-flex align-items-center ".concat(item.deleted ? 'img_hidden' : ''),
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
                    lineNumber: 346,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "d-flex flex-column",
                    children: [item.deleted && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
                      className: "text-danger",
                      children: "\u0110\xE3 \u1EA9n"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 354,
                      columnNumber: 13
                    }, _this), item.title]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 352,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 359,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 341,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "text-danger align-middle",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
                    children: "\u20AB"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 362,
                    columnNumber: 11
                  }, _this), item.priceSale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 361,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "align-middle",
                  children: item.inStock
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 367,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "align-middle",
                  children: item.sold
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 368,
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
                      lineNumber: 371,
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
                      lineNumber: 380,
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
                      lineNumber: 391,
                      columnNumber: 12
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 370,
                    columnNumber: 11
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 369,
                  columnNumber: 10
                }, _this)]
              }, item._id, true, {
                fileName: _jsxFileName,
                lineNumber: 340,
                columnNumber: 9
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 338,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 328,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 245,
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
              lineNumber: 412,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 411,
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
                lineNumber: 428,
                columnNumber: 11
              }, _this)
            }, page, false, {
              fileName: _jsxFileName,
              lineNumber: 422,
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
                lineNumber: 447,
                columnNumber: 11
              }, _this)
            }, page, false, {
              fileName: _jsxFileName,
              lineNumber: 441,
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
              lineNumber: 461,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 460,
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
                lineNumber: 472,
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
                  lineNumber: 483,
                  columnNumber: 10
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  className: "dropdown-item",
                  onClick: function onClick() {
                    return setLimitNumber(24);
                  },
                  children: "24"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 489,
                  columnNumber: 10
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  className: "dropdown-item",
                  onClick: function onClick() {
                    return setLimitNumber(48);
                  },
                  children: "48"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 495,
                  columnNumber: 10
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 482,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 471,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 470,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 410,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 409,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 238,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC45NjJjYmMyYTNiZTA2MmEwNzQzYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTVSxLQUFULENBQWVDLEtBQWYsRUFBc0JDLEdBQXRCLEVBQTJCO0FBQzFCLFNBQU9DLEtBQUssQ0FBQ0QsR0FBRyxHQUFHRCxLQUFOLEdBQWMsQ0FBZixDQUFMLENBQ0xHLElBREssR0FFTEMsR0FGSyxDQUVELFVBQUNDLENBQUQsRUFBSUMsR0FBSjtBQUFBLFdBQVlOLEtBQUssR0FBR00sR0FBcEI7QUFBQSxHQUZDLENBQVA7QUFHQTs7QUFFYyxTQUFTQyxrQkFBVCxHQUE4QjtBQUFBOztBQUFBOztBQUFBLG9CQUNoQmpCLGlEQUFVLENBQUNJLDJEQUFELENBRE07QUFBQSxNQUNwQ2MsS0FEb0MsZUFDcENBLEtBRG9DO0FBQUEsTUFDN0JDLFFBRDZCLGVBQzdCQSxRQUQ2Qjs7QUFBQSxNQUVwQ0MsVUFGb0MsR0FFZkYsS0FGZSxDQUVwQ0UsVUFGb0M7QUFBQSxNQUV4QkMsSUFGd0IsR0FFZkgsS0FGZSxDQUV4QkcsSUFGd0I7QUFBQSxNQUdwQ0MsSUFIb0MsR0FHM0JELElBSDJCLENBR3BDQyxJQUhvQztBQUk1QyxNQUFNQyxNQUFNLEdBQUdsQixzREFBUyxFQUF4Qjs7QUFKNEMsa0JBTXBCSCwrQ0FBUSxDQUFDLEVBQUQsQ0FOWTtBQUFBLE1BTXJDc0IsSUFOcUM7QUFBQSxNQU0vQkMsT0FOK0I7O0FBQUEsbUJBT1p2QiwrQ0FBUSxDQUFDLEVBQUQsQ0FQSTtBQUFBLE1BT3JDd0IsUUFQcUM7QUFBQSxNQU8zQkMsV0FQMkI7O0FBQUEsbUJBUVp6QiwrQ0FBUSxDQUFDLEVBQUQsQ0FSSTtBQUFBLE1BUXJDMEIsUUFScUM7QUFBQSxNQVEzQkMsV0FS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LGVBQWQ7QUFBQSxtQ0FDQztBQUFLLHVCQUFTLEVBQUMsa0JBQWY7QUFBQSxzQ0FDQztBQUNDLG9CQUFJLEVBQUMsUUFETjtBQUVDLHlCQUFTLEVBQUMsc0RBRlg7QUFHQywrQkFBWSxVQUhiO0FBSUMsaUNBQWMsTUFKZjtBQUtDLGlDQUFjLE9BTGY7QUFBQSwyQkFPRXRELFdBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURELGVBV0M7QUFBSyx5QkFBUyxFQUFDLGVBQWY7QUFBQSx3Q0FDQztBQUNDLDJCQUFTLEVBQUMsZUFEWDtBQUVDLHlCQUFPLEVBQUU7QUFBQSwyQkFBTUMsY0FBYyxDQUFDLEVBQUQsQ0FBcEI7QUFBQSxtQkFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERCxlQU9DO0FBQ0MsMkJBQVMsRUFBQyxlQURYO0FBRUMseUJBQU8sRUFBRTtBQUFBLDJCQUFNQSxjQUFjLENBQUMsRUFBRCxDQUFwQjtBQUFBLG1CQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVBELGVBYUM7QUFDQywyQkFBUyxFQUFDLGVBRFg7QUFFQyx5QkFBTyxFQUFFO0FBQUEsMkJBQU1BLGNBQWMsQ0FBQyxFQUFELENBQXBCO0FBQUEsbUJBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBYkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBNUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUtEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBZ1JBOztHQTNldUJ2QjtVQUlSWjs7O0tBSlFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3QvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtc3BhY2VzLWFuZC10YWJzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uLy4uL3N0b3JlL0dsb2JhbFN0YXRlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgZmlsdGVyU2VhcmNoIGZyb20gJy4uLy4uL3V0aWxzL2ZpbHRlclNlYXJjaCc7XHJcblxyXG5mdW5jdGlvbiByYW5nZShzdGFydCwgZW5kKSB7XHJcblx0cmV0dXJuIEFycmF5KGVuZCAtIHN0YXJ0ICsgMSlcclxuXHRcdC5maWxsKClcclxuXHRcdC5tYXAoKF8sIGlkeCkgPT4gc3RhcnQgKyBpZHgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluUHJvZHVjdE1hbmFnZXIoKSB7XHJcblx0Y29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xyXG5cdGNvbnN0IHsgY2F0ZWdvcmllcywgYXV0aCB9ID0gc3RhdGU7XHJcblx0Y29uc3QgeyB1c2VyIH0gPSBhdXRoO1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHRjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKHsgYWxsOiB0cnVlLCBoaWRkZW46IGZhbHNlLCBhY3Q6IGZhbHNlIH0pO1xyXG5cdGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSgwKTtcclxuXHRjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuXHRjb25zdCBbbGltaXROdW1iZXIsIHNldExpbWl0TnVtYmVyXSA9IHVzZVN0YXRlKDEwKTtcclxuXHRjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuXHRjb25zdCBjYXRlZ29yeVEgPSByb3V0ZXIucXVlcnkuY2F0ZWdvcnkgfHwgJ2FsbCc7XHJcblx0Y29uc3Qgc29ydCA9IHJvdXRlci5xdWVyeS5zb3J0IHx8ICcnO1xyXG5cdGNvbnN0IHNlYXJjaCA9IHJvdXRlci5xdWVyeS5zZWFyY2ggfHwgJ2FsbCc7XHJcblx0Y29uc3QgbGltaXQgPSByb3V0ZXIucXVlcnkubGltaXQgfHwgbGltaXROdW1iZXI7XHJcblxyXG5cdGNvbnN0IGluZGV4UGFnZSA9IHJlc3VsdCAlIGxpbWl0ID09PSAwID8gMCA6IDE7XHJcblx0Y29uc3QgbWF4UGFnZSA9IChyZXN1bHQgLSAocmVzdWx0ICUgbGltaXQpKSAvIGxpbWl0ICsgaW5kZXhQYWdlO1xyXG5cclxuXHRjb25zdCB0b3RhbFBhZ2UgPSByYW5nZSgxLCBtYXhQYWdlKTtcclxuXHJcblx0bGV0IG5ld1RvdGFsUGFnZSA9IFtdO1xyXG5cclxuXHRpZiAobWF4UGFnZSA+IDYpIHtcclxuXHRcdGlmIChjdXJyZW50UGFnZSA+PSAzICYmIGN1cnJlbnRQYWdlIDw9IG1heFBhZ2UgLSAzKSB7XHJcblx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKGN1cnJlbnRQYWdlIC0gMik7XHJcblx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKGN1cnJlbnRQYWdlIC0gMSk7XHJcblx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKGN1cnJlbnRQYWdlKTtcclxuXHRcdFx0bmV3VG90YWxQYWdlLnB1c2goY3VycmVudFBhZ2UgKyAxKTtcclxuXHRcdFx0bmV3VG90YWxQYWdlLnB1c2goY3VycmVudFBhZ2UgKyAyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChjdXJyZW50UGFnZSA+IG1heFBhZ2UgLSAzKSB7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2gobWF4UGFnZSAtIDUpO1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKG1heFBhZ2UgLSA0KTtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChtYXhQYWdlIC0gMyk7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2gobWF4UGFnZSAtIDIpO1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKG1heFBhZ2UgLSAxKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaCgxKTtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaCgyKTtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaCgzKTtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaCg0KTtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaCg1KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKGN1cnJlbnRQYWdlIDwgbWF4UGFnZSAtIDMpIHtcclxuXHRcdFx0bmV3VG90YWxQYWdlLnB1c2goJy4uLicpO1xyXG5cdFx0fVxyXG5cclxuXHRcdG5ld1RvdGFsUGFnZS5wdXNoKG1heFBhZ2UpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlVGl0bGUgPSBlID0+IHtcclxuXHRcdHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBzZWFyY2g6IGUudGFyZ2V0LnZhbHVlLCBwYWdlOiAxIH0pO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlQ2F0ZWdvcnkgPSBlID0+IHtcclxuXHRcdHNldENhdGVnb3J5KGUudGFyZ2V0LnZhbHVlKTtcclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgY2F0ZWdvcnk6IGUudGFyZ2V0LnZhbHVlLCBwYWdlOiAxIH0pO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlU2VhcmNoQnRuID0gKCkgPT4ge1xyXG5cdFx0aWYgKGFjdGl2ZS5hbGwpIHtcclxuXHRcdFx0Z2V0UHJvZHVjdHMoMSwgJ2dldExpc3RlZCcsIGNhdGVnb3J5LCBuYW1lKTtcclxuXHRcdH1cclxuXHRcdGlmIChhY3RpdmUuYWN0KSB7XHJcblx0XHRcdGdldFByb2R1Y3RzKDEsICdnZXRBY3RpdmUnLCBjYXRlZ29yeSwgbmFtZSk7XHJcblx0XHR9XHJcblx0XHRpZiAoYWN0aXZlLmhpZGRlbikge1xyXG5cdFx0XHRnZXRQcm9kdWN0cygxLCAnZ2V0VW5MaXN0ZWQnLCBjYXRlZ29yeSwgbmFtZSk7XHJcblx0XHR9XHJcblx0XHRmaWx0ZXJTZWFyY2goeyByb3V0ZXIsIHNlYXJjaDogJ2FsbCcgfSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAoaWQsIGxpbmssIGNhdGUsIHNlYXIpID0+IHtcclxuXHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgbG9hZGluZzogdHJ1ZSB9IH0pO1xyXG5cclxuXHRcdHRyeSB7XHJcblx0XHRcdGF3YWl0IGF4aW9zXHJcblx0XHRcdFx0LmdldChcclxuXHRcdFx0XHRcdGVuY29kZVVSSShcclxuXHRcdFx0XHRcdFx0YC9hcGkvcHJvZHVjdC8ke2xpbmt9P3BhZ2U9JHtpZCA/IGlkIDogcGFnZX0mY2F0ZWdvcnk9JHtcclxuXHRcdFx0XHRcdFx0XHRjYXRlID8gY2F0ZSA6IGNhdGVnb3J5UVxyXG5cdFx0XHRcdFx0XHR9JnNvcnQ9JHtzb3J0fSZ0aXRsZT0ke3NlYXIgPyBzZWFyIDogc2VhcmNofSZsaW1pdD0ke2xpbWl0fWBcclxuXHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHR7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYXV0aC50b2tlbiB9IH1cclxuXHRcdFx0XHQpXHJcblx0XHRcdFx0LnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5lcnIpIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGVycm9yOiByZXMuZGF0YS5lcnIgfSB9KTtcclxuXHJcblx0XHRcdFx0XHRzZXRQcm9kdWN0cyhyZXMuZGF0YS5wcm9kdWN0cyk7XHJcblx0XHRcdFx0XHRzZXRSZXN1bHQocmVzLmRhdGEucmVzdWx0KTtcclxuXHJcblx0XHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGVycm9yOiBlcnIubWVzc2FnZSB9IH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBnZXRBbGxQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcblxyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGF3YWl0IGF4aW9zXHJcblx0XHRcdFx0XHQuZ2V0KFxyXG5cdFx0XHRcdFx0XHRlbmNvZGVVUkkoXHJcblx0XHRcdFx0XHRcdFx0YC9hcGkvcHJvZHVjdC9nZXRMaXN0ZWQ/cGFnZT0ke3BhZ2V9JmNhdGVnb3J5PSR7Y2F0ZWdvcnlRfSZzb3J0PSR7c29ydH0mdGl0bGU9JHtzZWFyY2h9JmxpbWl0PSR7bGltaXR9YFxyXG5cdFx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0XHR7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYXV0aC50b2tlbiB9IH1cclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdC50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5lcnIpIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHJcblx0XHRcdFx0XHRcdHNldFByb2R1Y3RzKHJlcy5kYXRhLnByb2R1Y3RzKTtcclxuXHRcdFx0XHRcdFx0c2V0UmVzdWx0KHJlcy5kYXRhLnJlc3VsdCk7XHJcblxyXG5cdFx0XHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRpZiAodXNlciAmJiB1c2VyLnJvbGUgPT09ICdhZG1pbicpIGdldEFsbFByb2R1Y3RzKCk7XHJcblx0fSwgW3VzZXJdKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQWxsID0gKCkgPT4ge1xyXG5cdFx0Z2V0UHJvZHVjdHMoMSwgJ2dldExpc3RlZCcpO1xyXG5cdFx0c2V0Q3VycmVudFBhZ2UoMSk7XHJcblx0XHRmaWx0ZXJTZWFyY2goeyByb3V0ZXIsIHBhZ2U6IDEgfSk7XHJcblx0XHRzZXRBY3RpdmUoeyBhbGw6IHRydWUsIGhpZGRlbjogZmFsc2UsIGFjdDogZmFsc2UgfSk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVIaWRkZW4gPSAoKSA9PiB7XHJcblx0XHRnZXRQcm9kdWN0cygxLCAnZ2V0VW5MaXN0ZWQnKTtcclxuXHRcdHNldEN1cnJlbnRQYWdlKDEpO1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBwYWdlOiAxIH0pO1xyXG5cdFx0c2V0QWN0aXZlKHsgYWxsOiBmYWxzZSwgaGlkZGVuOiB0cnVlLCBhY3Q6IGZhbHNlIH0pO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlQWN0aXZlID0gKCkgPT4ge1xyXG5cdFx0Z2V0UHJvZHVjdHMoMSwgJ2dldEFjdGl2ZScpO1xyXG5cdFx0c2V0Q3VycmVudFBhZ2UoMSk7XHJcblx0XHRmaWx0ZXJTZWFyY2goeyByb3V0ZXIsIHBhZ2U6IDEgfSk7XHJcblx0XHRzZXRBY3RpdmUoeyBhbGw6IGZhbHNlLCBoaWRkZW46IGZhbHNlLCBhY3Q6IHRydWUgfSk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVEZWxldGUgPSBpZCA9PiB7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdBRERfTU9EQUwnLFxyXG5cdFx0XHRwYXlsb2FkOiB7IGlkLCB0b2tlbjogYXV0aC50b2tlbiwgdHlwZTogJ1BST0RVQ1QnLCByb2xlOiBhdXRoLnVzZXIucm9sZSB9LFxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVFZGl0ID0gKGlkLCBpc0RlbGV0ZWQpID0+IHtcclxuXHRcdGlmIChpc0RlbGV0ZWQpIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGVycm9yOiAnVnVpIGzDsm5nIGLhu48g4bqpbiDEkeG7gyBjaOG7iW5oIHPhu61hLicgfSB9KTtcclxuXHRcdHJvdXRlci5wdXNoKGAvY3JlYXRlLyR7aWR9YCk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVTaG93ID0gYXN5bmMgKGlkLCBpc0RlbGV0ZWQpID0+IHtcclxuXHRcdGlmICghaXNEZWxldGVkKSByZXR1cm47XHJcblx0XHR0cnkge1xyXG5cdFx0XHRhd2FpdCBheGlvc1xyXG5cdFx0XHRcdC5wYXRjaChgL2FwaS9wcm9kdWN0LyR7aWR9YCwgbnVsbCwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGF1dGgudG9rZW4gfSB9KVxyXG5cdFx0XHRcdC50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuZXJyKSByZXR1cm47XHJcblxyXG5cdFx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge30gfSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBlcnJvcjogZXJyLm1lc3NhZ2UgfSB9KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVQYWdpbmF0aW9uID0gZSA9PiB7XHJcblx0XHRjb25zdCBpbmRleCA9IE51bWJlcihlLnRhcmdldC5pbm5lckhUTUwpO1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBwYWdlOiBpbmRleCB9KTtcclxuXHRcdHNldEN1cnJlbnRQYWdlKGluZGV4KTtcclxuXHRcdHNldFBhZ2UoaW5kZXgpO1xyXG5cclxuXHRcdGlmIChhY3RpdmUuYWxsKSB7XHJcblx0XHRcdGdldFByb2R1Y3RzKGluZGV4LCAnZ2V0TGlzdGVkJyk7XHJcblx0XHR9XHJcblx0XHRpZiAoYWN0aXZlLmFjdCkge1xyXG5cdFx0XHRnZXRQcm9kdWN0cyhpbmRleCwgJ2dldEFjdGl2ZScpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGFjdGl2ZS5oaWRkZW4pIHtcclxuXHRcdFx0Z2V0UHJvZHVjdHMoaW5kZXgsICdnZXRVbkxpc3RlZCcpO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlUHJldmlvdXNQYWdlID0gKCkgPT4ge1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBwYWdlOiBjdXJyZW50UGFnZSAtIDEgfSk7XHJcblx0XHRzZXRDdXJyZW50UGFnZShjdXJyZW50UGFnZSAtIDEpO1xyXG5cdFx0aWYgKGFjdGl2ZS5hbGwpIHtcclxuXHRcdFx0Z2V0UHJvZHVjdHMoY3VycmVudFBhZ2UgLSAxLCAnZ2V0TGlzdGVkJyk7XHJcblx0XHR9XHJcblx0XHRpZiAoYWN0aXZlLmFjdCkge1xyXG5cdFx0XHRnZXRQcm9kdWN0cyhjdXJyZW50UGFnZSAtIDEsICdnZXRBY3RpdmUnKTtcclxuXHRcdH1cclxuXHRcdGlmIChhY3RpdmUuaGlkZGVuKSB7XHJcblx0XHRcdGdldFByb2R1Y3RzKGN1cnJlbnRQYWdlIC0gMSwgJ2dldFVuTGlzdGVkJyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVOZXh0UGFnZSA9ICgpID0+IHtcclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgcGFnZTogY3VycmVudFBhZ2UgKyAxIH0pO1xyXG5cdFx0c2V0Q3VycmVudFBhZ2UoY3VycmVudFBhZ2UgKyAxKTtcclxuXHRcdGlmIChhY3RpdmUuYWxsKSB7XHJcblx0XHRcdGdldFByb2R1Y3RzKGN1cnJlbnRQYWdlICsgMSwgJ2dldExpc3RlZCcpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGFjdGl2ZS5hY3QpIHtcclxuXHRcdFx0Z2V0UHJvZHVjdHMoY3VycmVudFBhZ2UgKyAxLCAnZ2V0QWN0aXZlJyk7XHJcblx0XHR9XHJcblx0XHRpZiAoYWN0aXZlLmhpZGRlbikge1xyXG5cdFx0XHRnZXRQcm9kdWN0cyhjdXJyZW50UGFnZSArIDEsICdnZXRVbkxpc3RlZCcpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGlmICghdXNlciB8fCB1c2VyLnJvbGUgIT09ICdhZG1pbicpIHJldHVybiBudWxsO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PHRpdGxlPlF14bqjbiBsw70gc+G6o24gcGjhuqltPC90aXRsZT5cclxuXHRcdFx0PC9IZWFkPlxyXG5cclxuXHRcdFx0PEhlYWRlciAvPlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J21heC13LXNjcmVlbi0yeGwgbXgtYXV0byc+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBweC0zIHB0LTMnIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxyXG5cdFx0XHRcdFx0PGg1IG9uQ2xpY2s9e2hhbmRsZUFsbH0gY2xhc3NOYW1lPXthY3RpdmUuYWxsID8gJ3RhZ19hY3RpdmUnIDogJyd9PlxyXG5cdFx0XHRcdFx0XHRU4bqldCBj4bqjXHJcblx0XHRcdFx0XHQ8L2g1PlxyXG5cclxuXHRcdFx0XHRcdDxoNSBvbkNsaWNrPXtoYW5kbGVBY3RpdmV9IGNsYXNzTmFtZT17YWN0aXZlLmFjdCA/ICd0YWdfYWN0aXZlJyA6ICcnfT5cclxuXHRcdFx0XHRcdFx0xJBhbmcgaG/huqF0IMSR4buZbmdcclxuXHRcdFx0XHRcdDwvaDU+XHJcblxyXG5cdFx0XHRcdFx0PGg1IG9uQ2xpY2s9e2hhbmRsZUhpZGRlbn0gY2xhc3NOYW1lPXthY3RpdmUuaGlkZGVuID8gJ3RhZ19hY3RpdmUnIDogJyd9PlxyXG5cdFx0XHRcdFx0XHTEkMOjIOG6qW5cclxuXHRcdFx0XHRcdDwvaDU+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkcm9wZG93bi1kaXZpZGVyJz48L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAgbWItMyBjb2wtbWQtNic+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1ncm91cC1wcmVwZW5kJz5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2lucHV0LWdyb3VwLXRleHQnPlTDqm4gc+G6o24gcGjhuqltPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRuYW1lPSduYW1lJ1xyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtuYW1lfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUaXRsZX1cclxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nTmjhuq1wIHTDqm4nXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAgbWItMyBjb2wtbWQtNic+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1ncm91cC1wcmVwZW5kIHctMTAwJz5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2lucHV0LWdyb3VwLXRleHQnPkRhbmggbeG7pWM8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PHNlbGVjdFxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT0nY2F0ZWdvcnknXHJcblx0XHRcdFx0XHRcdFx0XHRpZD0nY2F0ZWdvcnknXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Y2F0ZWdvcnl9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlQ2F0ZWdvcnl9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2N1c3RvbS1zZWxlY3QgdGV4dC1jYXBpdGFsaXplJ1xyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9J2FsbCc+LS0gVOG6pXQgY+G6oyAtLTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0e2NhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBrZXk9e2NhdGVnb3J5Ll9pZH0gdmFsdWU9e2NhdGVnb3J5Ll9pZH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e2NhdGVnb3J5Lm5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtMTInPlxyXG5cdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2J0biBidG4tZGFuZ2VyIGJ0bi1zbSBteS0yJ1xyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogJzEwMHB4JyB9fVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVTZWFyY2hCdG59XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFTDrG0ga2nhur9tXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JvdyBtYi0yJz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9J3B4LTQgbXQtMic+XHJcblx0XHRcdFx0XHRcdFx0e3Byb2R1Y3RzLmxlbmd0aCAqIGN1cnJlbnRQYWdlIDwgbGltaXQgKiBjdXJyZW50UGFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0PyByZXN1bHRcclxuXHRcdFx0XHRcdFx0XHRcdDogcHJvZHVjdHMubGVuZ3RoICogY3VycmVudFBhZ2V9XHJcblx0XHRcdFx0XHRcdFx0L3tyZXN1bHR9IFPhuqNuIFBo4bqpbVxyXG5cdFx0XHRcdFx0XHQ8L2gxPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2NyZWF0ZSc+XHJcblx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPSdidG4gYnRuLWluZm8gbXktYXV0bycgc3R5bGU9e3sgbWluV2lkdGg6IDI1MCB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdCsgVGjDqm0gc+G6o24gcGjhuqltIG3hu5tpXHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2JvZHlfcGFnZV9tYW5hZ2VyIHRhYmxlLXJlc3BvbnNpdmUnPlxyXG5cdFx0XHRcdFx0PHRhYmxlIGNsYXNzTmFtZT0ndGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ib3JkZXJlZCc+XHJcblx0XHRcdFx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3sgbWluV2lkdGg6IDQwMCB9fT5Uw6puIHPhuqNuIHBo4bqpbTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3sgbWluV2lkdGg6IDgwIH19Pkdpw6E8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt7IG1pbldpZHRoOiA4MCB9fT5LaG88L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt7IG1pbldpZHRoOiA4MCB9fT7EkMOjIGLDoW48L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt7IG1pbldpZHRoOiAxMDAgfX0+Q2jhu4luaCBz4butYTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0PC90aGVhZD5cclxuXHRcdFx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0XHRcdHtwcm9kdWN0cy5tYXAoaXRlbSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8dHIga2V5PXtpdGVtLl9pZH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgJHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGl0ZW0uZGVsZXRlZCA/ICdpbWdfaGlkZGVuJyA6ICcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fWB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2l0ZW0uaW1hZ2VzWzBdLnVybH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD0n4bqibmggYsOsYSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ncm91bmRlZCBtci0yJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgaGVpZ2h0OiA1MCwgd2lkdGg6IDUwIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PjwvaW1nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggZmxleC1jb2x1bW4nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0uZGVsZXRlZCAmJiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzbWFsbCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz7EkMOjIOG6qW48L3NtYWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLnRpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj48L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyIGFsaWduLW1pZGRsZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNtYWxsPiYjeDIwQUI7PC9zbWFsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5wcmljZVNhbGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC50b1N0cmluZygpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJy4nKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT0nYWxpZ24tbWlkZGxlJz57aXRlbS5pblN0b2NrfTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9J2FsaWduLW1pZGRsZSc+e2l0ZW0uc29sZH08L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3NOYW1lPSdhbGlnbi1taWRkbGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1oaWRkZW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmYXMgZmEtZWRpdCBweS0xIHRleHQtaW5mbydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVFZGl0KGl0ZW0uX2lkLCBpdGVtLmRlbGV0ZWQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD48L2k+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1oaWRkZW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZmFzICR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXRlbS5kZWxldGVkID8gJ2ZhLWV5ZS1zbGFzaCcgOiAnZmEtZXllJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IHB5LTEgdGV4dC1wcmltYXJ5YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVTaG93KGl0ZW0uX2lkLCBpdGVtLmRlbGV0ZWQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD48L2k+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1oaWRkZW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmYXMgZmEtdHJhc2gtYWx0IHB5LTEgdGV4dC1kYW5nZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShpdGVtLl9pZCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtdG9nZ2xlPSdtb2RhbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS10YXJnZXQ9JyNkZWxldGVVc2VyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdFx0XHQ8L3RhYmxlPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBteS00IHB0LTQnPlxyXG5cdFx0XHRcdDxuYXY+XHJcblx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPSdwYWdpbmF0aW9uJz5cclxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17YGJ0biBwYWdlLWl0ZW0gJHtjdXJyZW50UGFnZSA9PT0gMSA/ICdkaXNhYmxlZCcgOiAnJ31gfT5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3BhZ2UtbGluayB0ZXh0LWRhbmdlciBmb250LXdlaWdodC1ib2xkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0dGFiSW5kZXg9Jy0xJ1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlUHJldmlvdXNQYWdlfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdCZsYXF1bztcclxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0e21heFBhZ2UgPiA2XHJcblx0XHRcdFx0XHRcdFx0PyBuZXdUb3RhbFBhZ2UubWFwKHBhZ2UgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9e3BhZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgYnRuIHBhZ2UtaXRlbSAke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFnZSA9PSAnLi4uJyA/ICdkaXNhYmxlZCcgOiAnJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gJHtjdXJyZW50UGFnZSA9PT0gcGFnZSA/ICdhY3RpdmUnIDogJyd9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZVBhZ2luYXRpb259XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BwYWdlLWxpbmsgZm9udC13ZWlnaHQtYm9sZCAke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50UGFnZSA9PT0gcGFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gJ3RleHQtbGlnaHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAndGV4dC1kYW5nZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cGFnZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQgICkpXHJcblx0XHRcdFx0XHRcdFx0OiB0b3RhbFBhZ2UubWFwKHBhZ2UgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9e3BhZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgYnRuIHBhZ2UtaXRlbSAke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFnZSA9PSAnLi4uJyA/ICdkaXNhYmxlZCcgOiAnJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gJHtjdXJyZW50UGFnZSA9PT0gcGFnZSA/ICdhY3RpdmUnIDogJyd9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZVBhZ2luYXRpb259XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BwYWdlLWxpbmsgZm9udC13ZWlnaHQtYm9sZCAke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50UGFnZSA9PT0gcGFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gJ3RleHQtbGlnaHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAndGV4dC1kYW5nZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cGFnZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQgICkpfVxyXG5cclxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17YGJ0biBwYWdlLWl0ZW0gJHtjdXJyZW50UGFnZSA9PT0gbWF4UGFnZSA/ICdkaXNhYmxlZCcgOiAnJ31gfT5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3BhZ2UtbGluayB0ZXh0LWRhbmdlciBmb250LXdlaWdodC1ib2xkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0dGFiSW5kZXg9Jy0xJ1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlTmV4dFBhZ2V9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0JnJhcXVvO1xyXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L2xpPlxyXG5cclxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbW9iaWxlX2hpZGRlbic+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2J0bi1ncm91cCBkcm9wdXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdidXR0b24nXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYnRuIGJ0bi1vdXRsaW5lZCBkcm9wZG93bi10b2dnbGUgbXQtMiB0ZXh0LXNlY29uZGFyeSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS10b2dnbGU9J2Ryb3Bkb3duJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWhhc3BvcHVwPSd0cnVlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWV4cGFuZGVkPSdmYWxzZSdcclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2xpbWl0TnVtYmVyfS90cmFuZ1xyXG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Ryb3Bkb3duLW1lbnUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdkcm9wZG93bi1pdGVtJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldExpbWl0TnVtYmVyKDEyKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDEyXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdkcm9wZG93bi1pdGVtJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldExpbWl0TnVtYmVyKDI0KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDI0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdkcm9wZG93bi1pdGVtJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldExpbWl0TnVtYmVyKDQ4KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDQ4XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvbmF2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZCIsIkRhdGFDb250ZXh0IiwidXNlUm91dGVyIiwiTGluayIsImF4aW9zIiwiZmlsdGVyU2VhcmNoIiwicmFuZ2UiLCJzdGFydCIsImVuZCIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpZHgiLCJNYWluUHJvZHVjdE1hbmFnZXIiLCJzdGF0ZSIsImRpc3BhdGNoIiwiY2F0ZWdvcmllcyIsImF1dGgiLCJ1c2VyIiwicm91dGVyIiwibmFtZSIsInNldE5hbWUiLCJjYXRlZ29yeSIsInNldENhdGVnb3J5IiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImFsbCIsImhpZGRlbiIsImFjdCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInJlc3VsdCIsInNldFJlc3VsdCIsInBhZ2UiLCJzZXRQYWdlIiwibGltaXROdW1iZXIiLCJzZXRMaW1pdE51bWJlciIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJjYXRlZ29yeVEiLCJxdWVyeSIsInNvcnQiLCJzZWFyY2giLCJsaW1pdCIsImluZGV4UGFnZSIsIm1heFBhZ2UiLCJ0b3RhbFBhZ2UiLCJuZXdUb3RhbFBhZ2UiLCJwdXNoIiwiaGFuZGxlQ2hhbmdlVGl0bGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDaGFuZ2VDYXRlZ29yeSIsImhhbmRsZVNlYXJjaEJ0biIsImdldFByb2R1Y3RzIiwiaWQiLCJsaW5rIiwiY2F0ZSIsInNlYXIiLCJ0eXBlIiwicGF5bG9hZCIsImxvYWRpbmciLCJnZXQiLCJlbmNvZGVVUkkiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwidGhlbiIsInJlcyIsImRhdGEiLCJlcnIiLCJlcnJvciIsIm1lc3NhZ2UiLCJnZXRBbGxQcm9kdWN0cyIsInJvbGUiLCJoYW5kbGVBbGwiLCJoYW5kbGVIaWRkZW4iLCJoYW5kbGVBY3RpdmUiLCJoYW5kbGVEZWxldGUiLCJoYW5kbGVFZGl0IiwiaXNEZWxldGVkIiwiaGFuZGxlU2hvdyIsInBhdGNoIiwiaGFuZGxlUGFnaW5hdGlvbiIsImluZGV4IiwiTnVtYmVyIiwiaW5uZXJIVE1MIiwiaGFuZGxlUHJldmlvdXNQYWdlIiwiaGFuZGxlTmV4dFBhZ2UiLCJjdXJzb3IiLCJfaWQiLCJ3aWR0aCIsImxlbmd0aCIsIm1pbldpZHRoIiwiaXRlbSIsImRlbGV0ZWQiLCJpbWFnZXMiLCJ1cmwiLCJoZWlnaHQiLCJ0aXRsZSIsInByaWNlU2FsZSIsInRvU3RyaW5nIiwicmVwbGFjZSIsImluU3RvY2siLCJzb2xkIl0sInNvdXJjZVJvb3QiOiIifQ==