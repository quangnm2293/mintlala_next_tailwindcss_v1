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
          className: active.all ? 'tag_active' : '',
          children: "T\u1EA5t c\u1EA3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
          onClick: handleActive,
          className: active.act ? 'tag_active' : '',
          children: "\u0110ang ho\u1EA1t \u0111\u1ED9ng"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
          onClick: handleHidden,
          className: active.hidden ? 'tag_active' : '',
          children: "\u0110\xE3 \u1EA9n"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex justify-between p-5 space-x-10",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex-grow flex flex-col",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "",
              children: "T\xEAn s\u1EA3n ph\u1EA9m"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 264,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 263,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            className: "border border-gray-300 p-3 rounded-md",
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
          lineNumber: 262,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex-grow",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex",
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
              className: "flex-grow capitalize",
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
        lineNumber: 261,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC44YmY5OTY4MzUwOTU1MjQ5MDUzMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTVyxLQUFULENBQWVDLEtBQWYsRUFBc0JDLEdBQXRCLEVBQTJCO0FBQzFCLFNBQU9DLEtBQUssQ0FBQ0QsR0FBRyxHQUFHRCxLQUFOLEdBQWMsQ0FBZixDQUFMLENBQ0xHLElBREssR0FFTEMsR0FGSyxDQUVELFVBQUNDLENBQUQsRUFBSUMsR0FBSjtBQUFBLFdBQVlOLEtBQUssR0FBR00sR0FBcEI7QUFBQSxHQUZDLENBQVA7QUFHQTs7QUFFYyxTQUFTQyxrQkFBVCxHQUE4QjtBQUFBOztBQUFBOztBQUFBLG9CQUNoQmxCLGlEQUFVLENBQUNJLDJEQUFELENBRE07QUFBQSxNQUNwQ2UsS0FEb0MsZUFDcENBLEtBRG9DO0FBQUEsTUFDN0JDLFFBRDZCLGVBQzdCQSxRQUQ2Qjs7QUFBQSxNQUVwQ0MsVUFGb0MsR0FFZkYsS0FGZSxDQUVwQ0UsVUFGb0M7QUFBQSxNQUV4QkMsSUFGd0IsR0FFZkgsS0FGZSxDQUV4QkcsSUFGd0I7QUFBQSxNQUdwQ0MsSUFIb0MsR0FHM0JELElBSDJCLENBR3BDQyxJQUhvQztBQUk1QyxNQUFNQyxNQUFNLEdBQUduQixzREFBUyxFQUF4Qjs7QUFKNEMsa0JBTXBCSCwrQ0FBUSxDQUFDLEVBQUQsQ0FOWTtBQUFBLE1BTXJDdUIsSUFOcUM7QUFBQSxNQU0vQkMsT0FOK0I7O0FBQUEsbUJBT1p4QiwrQ0FBUSxDQUFDLEVBQUQsQ0FQSTtBQUFBLE1BT3JDeUIsUUFQcUM7QUFBQSxNQU8zQkMsV0FQMkI7O0FBQUEsbUJBUVoxQiwrQ0FBUSxDQUFDLEVBQUQsQ0FSSTtBQUFBLE1BUXJDMkIsUUFScUM7QUFBQSxNQVEz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UUFETjtBQUVDLHlCQUFTLEVBQUMsc0RBRlg7QUFHQywrQkFBWSxVQUhiO0FBSUMsaUNBQWMsTUFKZjtBQUtDLGlDQUFjLE9BTGY7QUFBQSwyQkFPRXRELFdBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURELGVBV0M7QUFBSyx5QkFBUyxFQUFDLGVBQWY7QUFBQSx3Q0FDQztBQUNDLDJCQUFTLEVBQUMsZUFEWDtBQUVDLHlCQUFPLEVBQUU7QUFBQSwyQkFBTUMsY0FBYyxDQUFDLEVBQUQsQ0FBcEI7QUFBQSxtQkFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERCxlQU9DO0FBQ0MsMkJBQVMsRUFBQyxlQURYO0FBRUMseUJBQU8sRUFBRTtBQUFBLDJCQUFNQSxjQUFjLENBQUMsRUFBRCxDQUFwQjtBQUFBLG1CQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVBELGVBYUM7QUFDQywyQkFBUyxFQUFDLGVBRFg7QUFFQyx5QkFBTyxFQUFFO0FBQUEsMkJBQU1BLGNBQWMsQ0FBQyxFQUFELENBQXBCO0FBQUEsbUJBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBYkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBNUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBektEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBK1FBOztHQTFldUJ2QjtVQUlSYjs7O0tBSlFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3QvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtc3BhY2VzLWFuZC10YWJzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uLy4uL3N0b3JlL0dsb2JhbFN0YXRlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgZmlsdGVyU2VhcmNoIGZyb20gJy4uLy4uL3V0aWxzL2ZpbHRlclNlYXJjaCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90YWlsd2luZC9IZWFkZXInO1xyXG5cclxuZnVuY3Rpb24gcmFuZ2Uoc3RhcnQsIGVuZCkge1xyXG5cdHJldHVybiBBcnJheShlbmQgLSBzdGFydCArIDEpXHJcblx0XHQuZmlsbCgpXHJcblx0XHQubWFwKChfLCBpZHgpID0+IHN0YXJ0ICsgaWR4KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpblByb2R1Y3RNYW5hZ2VyKCkge1xyXG5cdGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuXHRjb25zdCB7IGNhdGVnb3JpZXMsIGF1dGggfSA9IHN0YXRlO1xyXG5cdGNvbnN0IHsgdXNlciB9ID0gYXV0aDtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0Y29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSh7IGFsbDogdHJ1ZSwgaGlkZGVuOiBmYWxzZSwgYWN0OiBmYWxzZSB9KTtcclxuXHRjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoMCk7XHJcblx0Y29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcblx0Y29uc3QgW2xpbWl0TnVtYmVyLCBzZXRMaW1pdE51bWJlcl0gPSB1c2VTdGF0ZSgxMCk7XHJcblx0Y29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcblx0Y29uc3QgY2F0ZWdvcnlRID0gcm91dGVyLnF1ZXJ5LmNhdGVnb3J5IHx8ICdhbGwnO1xyXG5cdGNvbnN0IHNvcnQgPSByb3V0ZXIucXVlcnkuc29ydCB8fCAnJztcclxuXHRjb25zdCBzZWFyY2ggPSByb3V0ZXIucXVlcnkuc2VhcmNoIHx8ICdhbGwnO1xyXG5cdGNvbnN0IGxpbWl0ID0gcm91dGVyLnF1ZXJ5LmxpbWl0IHx8IGxpbWl0TnVtYmVyO1xyXG5cclxuXHRjb25zdCBpbmRleFBhZ2UgPSByZXN1bHQgJSBsaW1pdCA9PT0gMCA/IDAgOiAxO1xyXG5cdGNvbnN0IG1heFBhZ2UgPSAocmVzdWx0IC0gKHJlc3VsdCAlIGxpbWl0KSkgLyBsaW1pdCArIGluZGV4UGFnZTtcclxuXHJcblx0Y29uc3QgdG90YWxQYWdlID0gcmFuZ2UoMSwgbWF4UGFnZSk7XHJcblxyXG5cdGxldCBuZXdUb3RhbFBhZ2UgPSBbXTtcclxuXHJcblx0aWYgKG1heFBhZ2UgPiA2KSB7XHJcblx0XHRpZiAoY3VycmVudFBhZ2UgPj0gMyAmJiBjdXJyZW50UGFnZSA8PSBtYXhQYWdlIC0gMykge1xyXG5cdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChjdXJyZW50UGFnZSAtIDIpO1xyXG5cdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChjdXJyZW50UGFnZSAtIDEpO1xyXG5cdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChjdXJyZW50UGFnZSk7XHJcblx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKGN1cnJlbnRQYWdlICsgMSk7XHJcblx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKGN1cnJlbnRQYWdlICsgMik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoY3VycmVudFBhZ2UgPiBtYXhQYWdlIC0gMykge1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKG1heFBhZ2UgLSA1KTtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChtYXhQYWdlIC0gNCk7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2gobWF4UGFnZSAtIDMpO1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKG1heFBhZ2UgLSAyKTtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChtYXhQYWdlIC0gMSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2goMSk7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2goMik7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2goMyk7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2goNCk7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2goNSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChjdXJyZW50UGFnZSA8IG1heFBhZ2UgLSAzKSB7XHJcblx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKCcuLi4nKTtcclxuXHRcdH1cclxuXHJcblx0XHRuZXdUb3RhbFBhZ2UucHVzaChtYXhQYWdlKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNoYW5nZVRpdGxlID0gZSA9PiB7XHJcblx0XHRzZXROYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgc2VhcmNoOiBlLnRhcmdldC52YWx1ZSwgcGFnZTogMSB9KTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZUNoYW5nZUNhdGVnb3J5ID0gZSA9PiB7XHJcblx0XHRzZXRDYXRlZ29yeShlLnRhcmdldC52YWx1ZSk7XHJcblx0XHRmaWx0ZXJTZWFyY2goeyByb3V0ZXIsIGNhdGVnb3J5OiBlLnRhcmdldC52YWx1ZSwgcGFnZTogMSB9KTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZVNlYXJjaEJ0biA9ICgpID0+IHtcclxuXHRcdGlmIChhY3RpdmUuYWxsKSB7XHJcblx0XHRcdGdldFByb2R1Y3RzKDEsICdnZXRMaXN0ZWQnLCBjYXRlZ29yeSwgbmFtZSk7XHJcblx0XHR9XHJcblx0XHRpZiAoYWN0aXZlLmFjdCkge1xyXG5cdFx0XHRnZXRQcm9kdWN0cygxLCAnZ2V0QWN0aXZlJywgY2F0ZWdvcnksIG5hbWUpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGFjdGl2ZS5oaWRkZW4pIHtcclxuXHRcdFx0Z2V0UHJvZHVjdHMoMSwgJ2dldFVuTGlzdGVkJywgY2F0ZWdvcnksIG5hbWUpO1xyXG5cdFx0fVxyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBzZWFyY2g6ICdhbGwnIH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKGlkLCBsaW5rLCBjYXRlLCBzZWFyKSA9PiB7XHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuXHJcblx0XHR0cnkge1xyXG5cdFx0XHRhd2FpdCBheGlvc1xyXG5cdFx0XHRcdC5nZXQoXHJcblx0XHRcdFx0XHRlbmNvZGVVUkkoXHJcblx0XHRcdFx0XHRcdGAvYXBpL3Byb2R1Y3QvJHtsaW5rfT9wYWdlPSR7aWQgPyBpZCA6IHBhZ2V9JmNhdGVnb3J5PSR7XHJcblx0XHRcdFx0XHRcdFx0Y2F0ZSA/IGNhdGUgOiBjYXRlZ29yeVFcclxuXHRcdFx0XHRcdFx0fSZzb3J0PSR7c29ydH0mdGl0bGU9JHtzZWFyID8gc2VhciA6IHNlYXJjaH0mbGltaXQ9JHtsaW1pdH1gXHJcblx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0eyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGF1dGgudG9rZW4gfSB9XHJcblx0XHRcdFx0KVxyXG5cdFx0XHRcdC50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuZXJyKSByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBlcnJvcjogcmVzLmRhdGEuZXJyIH0gfSk7XHJcblxyXG5cdFx0XHRcdFx0c2V0UHJvZHVjdHMocmVzLmRhdGEucHJvZHVjdHMpO1xyXG5cdFx0XHRcdFx0c2V0UmVzdWx0KHJlcy5kYXRhLnJlc3VsdCk7XHJcblxyXG5cdFx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge30gfSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBlcnJvcjogZXJyLm1lc3NhZ2UgfSB9KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgZ2V0QWxsUHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgbG9hZGluZzogdHJ1ZSB9IH0pO1xyXG5cclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRhd2FpdCBheGlvc1xyXG5cdFx0XHRcdFx0LmdldChcclxuXHRcdFx0XHRcdFx0ZW5jb2RlVVJJKFxyXG5cdFx0XHRcdFx0XHRcdGAvYXBpL3Byb2R1Y3QvZ2V0TGlzdGVkP3BhZ2U9JHtwYWdlfSZjYXRlZ29yeT0ke2NhdGVnb3J5UX0mc29ydD0ke3NvcnR9JnRpdGxlPSR7c2VhcmNofSZsaW1pdD0ke2xpbWl0fWBcclxuXHRcdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdFx0eyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGF1dGgudG9rZW4gfSB9XHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHQudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmRhdGEuZXJyKSByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge30gfSk7XHJcblxyXG5cdFx0XHRcdFx0XHRzZXRQcm9kdWN0cyhyZXMuZGF0YS5wcm9kdWN0cyk7XHJcblx0XHRcdFx0XHRcdHNldFJlc3VsdChyZXMuZGF0YS5yZXN1bHQpO1xyXG5cclxuXHRcdFx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge30gfSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge30gfSk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0aWYgKHVzZXIgJiYgdXNlci5yb2xlID09PSAnYWRtaW4nKSBnZXRBbGxQcm9kdWN0cygpO1xyXG5cdH0sIFt1c2VyXSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUFsbCA9ICgpID0+IHtcclxuXHRcdGdldFByb2R1Y3RzKDEsICdnZXRMaXN0ZWQnKTtcclxuXHRcdHNldEN1cnJlbnRQYWdlKDEpO1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBwYWdlOiAxIH0pO1xyXG5cdFx0c2V0QWN0aXZlKHsgYWxsOiB0cnVlLCBoaWRkZW46IGZhbHNlLCBhY3Q6IGZhbHNlIH0pO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlSGlkZGVuID0gKCkgPT4ge1xyXG5cdFx0Z2V0UHJvZHVjdHMoMSwgJ2dldFVuTGlzdGVkJyk7XHJcblx0XHRzZXRDdXJyZW50UGFnZSgxKTtcclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgcGFnZTogMSB9KTtcclxuXHRcdHNldEFjdGl2ZSh7IGFsbDogZmFsc2UsIGhpZGRlbjogdHJ1ZSwgYWN0OiBmYWxzZSB9KTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZUFjdGl2ZSA9ICgpID0+IHtcclxuXHRcdGdldFByb2R1Y3RzKDEsICdnZXRBY3RpdmUnKTtcclxuXHRcdHNldEN1cnJlbnRQYWdlKDEpO1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBwYWdlOiAxIH0pO1xyXG5cdFx0c2V0QWN0aXZlKHsgYWxsOiBmYWxzZSwgaGlkZGVuOiBmYWxzZSwgYWN0OiB0cnVlIH0pO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlRGVsZXRlID0gaWQgPT4ge1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnQUREX01PREFMJyxcclxuXHRcdFx0cGF5bG9hZDogeyBpZCwgdG9rZW46IGF1dGgudG9rZW4sIHR5cGU6ICdQUk9EVUNUJywgcm9sZTogYXV0aC51c2VyLnJvbGUgfSxcclxuXHRcdH0pO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlRWRpdCA9IChpZCwgaXNEZWxldGVkKSA9PiB7XHJcblx0XHRpZiAoaXNEZWxldGVkKSByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBlcnJvcjogJ1Z1aSBsw7JuZyBi4buPIOG6qW4gxJHhu4MgY2jhu4luaCBz4butYS4nIH0gfSk7XHJcblx0XHRyb3V0ZXIucHVzaChgL2NyZWF0ZS8ke2lkfWApO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlU2hvdyA9IGFzeW5jIChpZCwgaXNEZWxldGVkKSA9PiB7XHJcblx0XHRpZiAoIWlzRGVsZXRlZCkgcmV0dXJuO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0YXdhaXQgYXhpb3NcclxuXHRcdFx0XHQucGF0Y2goYC9hcGkvcHJvZHVjdC8ke2lkfWAsIG51bGwsIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBhdXRoLnRva2VuIH0gfSlcclxuXHRcdFx0XHQudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmVycikgcmV0dXJuO1xyXG5cclxuXHRcdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgZXJyb3I6IGVyci5tZXNzYWdlIH0gfSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlUGFnaW5hdGlvbiA9IGUgPT4ge1xyXG5cdFx0Y29uc3QgaW5kZXggPSBOdW1iZXIoZS50YXJnZXQuaW5uZXJIVE1MKTtcclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgcGFnZTogaW5kZXggfSk7XHJcblx0XHRzZXRDdXJyZW50UGFnZShpbmRleCk7XHJcblx0XHRzZXRQYWdlKGluZGV4KTtcclxuXHJcblx0XHRpZiAoYWN0aXZlLmFsbCkge1xyXG5cdFx0XHRnZXRQcm9kdWN0cyhpbmRleCwgJ2dldExpc3RlZCcpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGFjdGl2ZS5hY3QpIHtcclxuXHRcdFx0Z2V0UHJvZHVjdHMoaW5kZXgsICdnZXRBY3RpdmUnKTtcclxuXHRcdH1cclxuXHRcdGlmIChhY3RpdmUuaGlkZGVuKSB7XHJcblx0XHRcdGdldFByb2R1Y3RzKGluZGV4LCAnZ2V0VW5MaXN0ZWQnKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZVByZXZpb3VzUGFnZSA9ICgpID0+IHtcclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgcGFnZTogY3VycmVudFBhZ2UgLSAxIH0pO1xyXG5cdFx0c2V0Q3VycmVudFBhZ2UoY3VycmVudFBhZ2UgLSAxKTtcclxuXHRcdGlmIChhY3RpdmUuYWxsKSB7XHJcblx0XHRcdGdldFByb2R1Y3RzKGN1cnJlbnRQYWdlIC0gMSwgJ2dldExpc3RlZCcpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGFjdGl2ZS5hY3QpIHtcclxuXHRcdFx0Z2V0UHJvZHVjdHMoY3VycmVudFBhZ2UgLSAxLCAnZ2V0QWN0aXZlJyk7XHJcblx0XHR9XHJcblx0XHRpZiAoYWN0aXZlLmhpZGRlbikge1xyXG5cdFx0XHRnZXRQcm9kdWN0cyhjdXJyZW50UGFnZSAtIDEsICdnZXRVbkxpc3RlZCcpO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlTmV4dFBhZ2UgPSAoKSA9PiB7XHJcblx0XHRmaWx0ZXJTZWFyY2goeyByb3V0ZXIsIHBhZ2U6IGN1cnJlbnRQYWdlICsgMSB9KTtcclxuXHRcdHNldEN1cnJlbnRQYWdlKGN1cnJlbnRQYWdlICsgMSk7XHJcblx0XHRpZiAoYWN0aXZlLmFsbCkge1xyXG5cdFx0XHRnZXRQcm9kdWN0cyhjdXJyZW50UGFnZSArIDEsICdnZXRMaXN0ZWQnKTtcclxuXHRcdH1cclxuXHRcdGlmIChhY3RpdmUuYWN0KSB7XHJcblx0XHRcdGdldFByb2R1Y3RzKGN1cnJlbnRQYWdlICsgMSwgJ2dldEFjdGl2ZScpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGFjdGl2ZS5oaWRkZW4pIHtcclxuXHRcdFx0Z2V0UHJvZHVjdHMoY3VycmVudFBhZ2UgKyAxLCAnZ2V0VW5MaXN0ZWQnKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRpZiAoIXVzZXIgfHwgdXNlci5yb2xlICE9PSAnYWRtaW4nKSByZXR1cm4gbnVsbDtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdiZy1ncmF5LTEwMCc+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdDx0aXRsZT5RdeG6o24gbMO9IHPhuqNuIHBo4bqpbTwvdGl0bGU+XHJcblx0XHRcdDwvSGVhZD5cclxuXHJcblx0XHRcdDxIZWFkZXIgLz5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtYXgtdy1zY3JlZW4tMnhsIG14LWF1dG8gYmctd2hpdGUgcC01Jz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWV2ZW5seSBweC0zIHB0LTMgdGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS02MDAgYm9yZGVyLWItMiBwYi00IGJvcmRlci1ncmF5LTMwMCc+XHJcblx0XHRcdFx0XHQ8aDUgb25DbGljaz17aGFuZGxlQWxsfSBjbGFzc05hbWU9e2FjdGl2ZS5hbGwgPyAndGFnX2FjdGl2ZScgOiAnJ30+XHJcblx0XHRcdFx0XHRcdFThuqV0IGPhuqNcclxuXHRcdFx0XHRcdDwvaDU+XHJcblxyXG5cdFx0XHRcdFx0PGg1IG9uQ2xpY2s9e2hhbmRsZUFjdGl2ZX0gY2xhc3NOYW1lPXthY3RpdmUuYWN0ID8gJ3RhZ19hY3RpdmUnIDogJyd9PlxyXG5cdFx0XHRcdFx0XHTEkGFuZyBob+G6oXQgxJHhu5luZ1xyXG5cdFx0XHRcdFx0PC9oNT5cclxuXHJcblx0XHRcdFx0XHQ8aDUgb25DbGljaz17aGFuZGxlSGlkZGVufSBjbGFzc05hbWU9e2FjdGl2ZS5oaWRkZW4gPyAndGFnX2FjdGl2ZScgOiAnJ30+XHJcblx0XHRcdFx0XHRcdMSQw6Mg4bqpblxyXG5cdFx0XHRcdFx0PC9oNT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuIHAtNSBzcGFjZS14LTEwJz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4LWdyb3cgZmxleCBmbGV4LWNvbCc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPScnPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nJz5Uw6puIHPhuqNuIHBo4bqpbTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwLTMgcm91bmRlZC1tZCdcclxuXHRcdFx0XHRcdFx0XHRuYW1lPSduYW1lJ1xyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtuYW1lfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUaXRsZX1cclxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nTmjhuq1wIHTDqm4nXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleC1ncm93Jz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAtdGV4dCc+RGFuaCBt4bulYzwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8c2VsZWN0XHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPSdjYXRlZ29yeSdcclxuXHRcdFx0XHRcdFx0XHRcdGlkPSdjYXRlZ29yeSdcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtjYXRlZ29yeX1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VDYXRlZ29yeX1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZmxleC1ncm93IGNhcGl0YWxpemUnXHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nYWxsJz4tLSBU4bqldCBj4bqjIC0tPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHR7Y2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGtleT17Y2F0ZWdvcnkuX2lkfSB2YWx1ZT17Y2F0ZWdvcnkuX2lkfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Y2F0ZWdvcnkubmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC0xMic+XHJcblx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYnRuIGJ0bi1kYW5nZXIgYnRuLXNtIG15LTInXHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnIH19XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZVNlYXJjaEJ0bn1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0VMOsbSBraeG6v21cclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93IG1iLTInPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT0ncHgtNCBtdC0yJz5cclxuXHRcdFx0XHRcdFx0XHR7cHJvZHVjdHMubGVuZ3RoICogY3VycmVudFBhZ2UgPCBsaW1pdCAqIGN1cnJlbnRQYWdlXHJcblx0XHRcdFx0XHRcdFx0XHQ/IHJlc3VsdFxyXG5cdFx0XHRcdFx0XHRcdFx0OiBwcm9kdWN0cy5sZW5ndGggKiBjdXJyZW50UGFnZX1cclxuXHRcdFx0XHRcdFx0XHQve3Jlc3VsdH0gU+G6o24gUGjhuqltXHJcblx0XHRcdFx0XHRcdDwvaDE+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPlxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvY3JlYXRlJz5cclxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9J2J0biBidG4taW5mbyBteS1hdXRvJyBzdHlsZT17eyBtaW5XaWR0aDogMjUwIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0KyBUaMOqbSBz4bqjbiBwaOG6qW0gbeG7m2lcclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYm9keV9wYWdlX21hbmFnZXIgdGFibGUtcmVzcG9uc2l2ZSc+XHJcblx0XHRcdFx0XHQ8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkJz5cclxuXHRcdFx0XHRcdFx0PHRoZWFkPlxyXG5cdFx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT17eyBtaW5XaWR0aDogNDAwIH19PlTDqm4gc+G6o24gcGjhuqltPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT17eyBtaW5XaWR0aDogODAgfX0+R2nDoTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3sgbWluV2lkdGg6IDgwIH19PktobzwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3sgbWluV2lkdGg6IDgwIH19PsSQw6MgYsOhbjwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3sgbWluV2lkdGg6IDEwMCB9fT5DaOG7iW5oIHPhu61hPC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHRcdFx0XHQ8dGJvZHk+XHJcblx0XHRcdFx0XHRcdFx0e3Byb2R1Y3RzLm1hcChpdGVtID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDx0ciBrZXk9e2l0ZW0uX2lkfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciAke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXRlbS5kZWxldGVkID8gJ2ltZ19oaWRkZW4nIDogJydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17aXRlbS5pbWFnZXNbMF0udXJsfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PSfhuqJuaCBiw6xhJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdyb3VuZGVkIG1yLTInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBoZWlnaHQ6IDUwLCB3aWR0aDogNTAgfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+PC9pbWc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2QtZmxleCBmbGV4LWNvbHVtbic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5kZWxldGVkICYmIChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNtYWxsIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPsSQw6Mg4bqpbjwvc21hbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0udGl0bGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXIgYWxpZ24tbWlkZGxlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c21hbGw+JiN4MjBBQjs8L3NtYWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLnByaWNlU2FsZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnRvU3RyaW5nKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLicpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3NOYW1lPSdhbGlnbi1taWRkbGUnPntpdGVtLmluU3RvY2t9PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT0nYWxpZ24tbWlkZGxlJz57aXRlbS5zb2xkfTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9J2FsaWduLW1pZGRsZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWhpZGRlblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZhcyBmYS1lZGl0IHB5LTEgdGV4dC1pbmZvJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZUVkaXQoaXRlbS5faWQsIGl0ZW0uZGVsZXRlZClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PjwvaT5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWhpZGRlblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BmYXMgJHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpdGVtLmRlbGV0ZWQgPyAnZmEtZXllLXNsYXNoJyA6ICdmYS1leWUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gcHktMSB0ZXh0LXByaW1hcnlgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZVNob3coaXRlbS5faWQsIGl0ZW0uZGVsZXRlZClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PjwvaT5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWhpZGRlblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZhcyBmYS10cmFzaC1hbHQgcHktMSB0ZXh0LWRhbmdlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKGl0ZW0uX2lkKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS10b2dnbGU9J21vZGFsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXRhcmdldD0nI2RlbGV0ZVVzZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0XHRcdDwvdGFibGU+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG15LTQgcHQtNCc+XHJcblx0XHRcdFx0PG5hdj5cclxuXHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9J3BhZ2luYXRpb24nPlxyXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXtgYnRuIHBhZ2UtaXRlbSAke2N1cnJlbnRQYWdlID09PSAxID8gJ2Rpc2FibGVkJyA6ICcnfWB9PlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ncGFnZS1saW5rIHRleHQtZGFuZ2VyIGZvbnQtd2VpZ2h0LWJvbGQnXHJcblx0XHRcdFx0XHRcdFx0XHR0YWJJbmRleD0nLTEnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVQcmV2aW91c1BhZ2V9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0JmxhcXVvO1xyXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHR7bWF4UGFnZSA+IDZcclxuXHRcdFx0XHRcdFx0XHQ/IG5ld1RvdGFsUGFnZS5tYXAocGFnZSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17cGFnZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BidG4gcGFnZS1pdGVtICR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWdlID09ICcuLi4nID8gJ2Rpc2FibGVkJyA6ICcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSAke2N1cnJlbnRQYWdlID09PSBwYWdlID8gJ2FjdGl2ZScgOiAnJ31gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlUGFnaW5hdGlvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YHBhZ2UtbGluayBmb250LXdlaWdodC1ib2xkICR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlID09PSBwYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyAndGV4dC1saWdodCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICd0ZXh0LWRhbmdlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtwYWdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdCAgKSlcclxuXHRcdFx0XHRcdFx0XHQ6IHRvdGFsUGFnZS5tYXAocGFnZSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17cGFnZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BidG4gcGFnZS1pdGVtICR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWdlID09ICcuLi4nID8gJ2Rpc2FibGVkJyA6ICcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSAke2N1cnJlbnRQYWdlID09PSBwYWdlID8gJ2FjdGl2ZScgOiAnJ31gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlUGFnaW5hdGlvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YHBhZ2UtbGluayBmb250LXdlaWdodC1ib2xkICR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlID09PSBwYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyAndGV4dC1saWdodCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICd0ZXh0LWRhbmdlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtwYWdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdCAgKSl9XHJcblxyXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXtgYnRuIHBhZ2UtaXRlbSAke2N1cnJlbnRQYWdlID09PSBtYXhQYWdlID8gJ2Rpc2FibGVkJyA6ICcnfWB9PlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ncGFnZS1saW5rIHRleHQtZGFuZ2VyIGZvbnQtd2VpZ2h0LWJvbGQnXHJcblx0XHRcdFx0XHRcdFx0XHR0YWJJbmRleD0nLTEnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVOZXh0UGFnZX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQmcmFxdW87XHJcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdDwvbGk+XHJcblxyXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSdtb2JpbGVfaGlkZGVuJz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYnRuLWdyb3VwIGRyb3B1cCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J2J1dHRvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdidG4gYnRuLW91dGxpbmVkIGRyb3Bkb3duLXRvZ2dsZSBtdC0yIHRleHQtc2Vjb25kYXJ5J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXRvZ2dsZT0nZHJvcGRvd24nXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtaGFzcG9wdXA9J3RydWUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtZXhwYW5kZWQ9J2ZhbHNlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7bGltaXROdW1iZXJ9L3RyYW5nXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZHJvcGRvd24tbWVudSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Ryb3Bkb3duLWl0ZW0nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0TGltaXROdW1iZXIoMTIpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0MTJcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Ryb3Bkb3duLWl0ZW0nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0TGltaXROdW1iZXIoMjQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0MjRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Ryb3Bkb3duLWl0ZW0nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0TGltaXROdW1iZXIoNDgpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0NDhcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9uYXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkIiwiRGF0YUNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwiYXhpb3MiLCJmaWx0ZXJTZWFyY2giLCJIZWFkZXIiLCJyYW5nZSIsInN0YXJ0IiwiZW5kIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImlkeCIsIk1haW5Qcm9kdWN0TWFuYWdlciIsInN0YXRlIiwiZGlzcGF0Y2giLCJjYXRlZ29yaWVzIiwiYXV0aCIsInVzZXIiLCJyb3V0ZXIiLCJuYW1lIiwic2V0TmFtZSIsImNhdGVnb3J5Iiwic2V0Q2F0ZWdvcnkiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiYWxsIiwiaGlkZGVuIiwiYWN0IiwiYWN0aXZlIiwic2V0QWN0aXZlIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwicGFnZSIsInNldFBhZ2UiLCJsaW1pdE51bWJlciIsInNldExpbWl0TnVtYmVyIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsImNhdGVnb3J5USIsInF1ZXJ5Iiwic29ydCIsInNlYXJjaCIsImxpbWl0IiwiaW5kZXhQYWdlIiwibWF4UGFnZSIsInRvdGFsUGFnZSIsIm5ld1RvdGFsUGFnZSIsInB1c2giLCJoYW5kbGVDaGFuZ2VUaXRsZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZUNhdGVnb3J5IiwiaGFuZGxlU2VhcmNoQnRuIiwiZ2V0UHJvZHVjdHMiLCJpZCIsImxpbmsiLCJjYXRlIiwic2VhciIsInR5cGUiLCJwYXlsb2FkIiwibG9hZGluZyIsImdldCIsImVuY29kZVVSSSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJ0aGVuIiwicmVzIiwiZGF0YSIsImVyciIsImVycm9yIiwibWVzc2FnZSIsImdldEFsbFByb2R1Y3RzIiwicm9sZSIsImhhbmRsZUFsbCIsImhhbmRsZUhpZGRlbiIsImhhbmRsZUFjdGl2ZSIsImhhbmRsZURlbGV0ZSIsImhhbmRsZUVkaXQiLCJpc0RlbGV0ZWQiLCJoYW5kbGVTaG93IiwicGF0Y2giLCJoYW5kbGVQYWdpbmF0aW9uIiwiaW5kZXgiLCJOdW1iZXIiLCJpbm5lckhUTUwiLCJoYW5kbGVQcmV2aW91c1BhZ2UiLCJoYW5kbGVOZXh0UGFnZSIsIl9pZCIsIndpZHRoIiwibGVuZ3RoIiwibWluV2lkdGgiLCJpdGVtIiwiZGVsZXRlZCIsImltYWdlcyIsInVybCIsImhlaWdodCIsInRpdGxlIiwicHJpY2VTYWxlIiwidG9TdHJpbmciLCJyZXBsYWNlIiwiaW5TdG9jayIsInNvbGQiLCJjdXJzb3IiXSwic291cmNlUm9vdCI6IiJ9