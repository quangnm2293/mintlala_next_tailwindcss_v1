"use strict";
self["webpackHotUpdate_N_E"]("pages/categories",{

/***/ "./pages/categories/index.js":
/*!***********************************!*\
  !*** ./pages/categories/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_Actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/Actions */ "./store/Actions.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var _components_ModalUser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/ModalUser */ "./components/ModalUser.js");
/* harmony import */ var _components_tailwind_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/tailwind/Header */ "./components/tailwind/Header.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "E:\\Works\\VSCode\\NextJS\\next-website-mintlala\\pages\\categories\\index.js",
    _s = $RefreshSig$();

/* eslint-disable react-hooks/exhaustive-deps */









function Categories() {
  _s();

  var _this = this;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_store_GlobalState__WEBPACK_IMPORTED_MODULE_6__.DataContext),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var categories = state.categories,
      auth = state.auth;
  var user = auth.user;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      id = _useState2[0],
      setId = _useState2[1];

  var handleCreate = /*#__PURE__*/function () {
    var _ref = (0,E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      return E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(auth.user.role !== 'admin')) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", dispatch({
                type: 'NOTIFY',
                payload: {
                  error: 'Bạn không có quyền tạo danh mục.'
                }
              }));

            case 2:
              _context.prev = 2;
              dispatch({
                type: 'NOTIFY',
                payload: {
                  loading: true
                }
              });

              if (!id) {
                _context.next = 9;
                break;
              }

              _context.next = 7;
              return axios__WEBPACK_IMPORTED_MODULE_7___default().put("/api/categories/".concat(id), {
                name: name
              }, {
                headers: {
                  Authorization: auth.token
                }
              }).then(function (res) {
                dispatch({
                  type: 'NOTIFY',
                  payload: {
                    success: res.data.msg
                  }
                }); //Update Categories

                dispatch((0,_store_Actions__WEBPACK_IMPORTED_MODULE_8__.updateItem)(categories, id, res.data.category, 'ADD_CATEGORIES'));
              });

            case 7:
              _context.next = 11;
              break;

            case 9:
              _context.next = 11;
              return axios__WEBPACK_IMPORTED_MODULE_7___default().post('/api/categories', {
                name: name
              }, {
                headers: {
                  Authorization: auth.token
                }
              }).then(function (res) {
                dispatch({
                  type: 'NOTIFY',
                  payload: {
                    success: res.data.msg
                  }
                });
                dispatch({
                  type: 'ADD_CATEGORIES',
                  payload: [].concat((0,E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(categories), [res.data.newCategory])
                });
              });

            case 11:
              setId('');
              setName('');
              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](2);
              dispatch({
                type: 'NOTIFY',
                payload: {
                  error: _context.t0.message
                }
              });

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 15]]);
    }));

    return function handleCreate() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleDelete = /*#__PURE__*/function () {
    var _ref2 = (0,E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(id) {
      return E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch({
                type: 'ADD_MODAL',
                payload: {
                  id: id,
                  token: auth.token,
                  type: 'CATEGORY',
                  role: auth.user.role
                }
              });

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleDelete(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleUpdate = /*#__PURE__*/function () {
    var _ref3 = (0,E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(category) {
      return E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(user.role !== 'admin')) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return", dispatch({
                type: 'NOTIFY',
                payload: {
                  error: 'Bạn không có quyền chỉnh sửa danh mục.'
                }
              }));

            case 2:
              setId(category._id);
              setName(category.name);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleUpdate(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  if (!user || user.role !== 'admin') return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "bg-blue-100 min-h-screen",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Qu\u1EA3n l\xFD danh m\u1EE5c"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tailwind_Header__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ModalUser__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "grid grid-cols-6",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "bg-green-100 col-span-6 lg:col-span-2 xl:col-span-1 p-10 flex flex-col font-semibold min-w-[300px]",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex items-center space-x-2 bg-green-400 p-3 rounded-md",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_9__.UserCircleIcon, {
            className: "h-7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "",
            children: "Th\xF4ng tin t\xE0i kho\u1EA3n"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex items-center space-x-2 p-3 cursor-pointer",
          onClick: function onClick() {
            return router.push('/profile/order-history');
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_9__.DocumentSearchIcon, {
            className: "h-7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "",
            children: "L\u1ECBch s\u1EED \u0111\u1EB7t h\xE0ng"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 6
        }, this), auth.user && auth.user.role === 'admin' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex items-center space-x-2 p-3 rounded-md cursor-pointer",
            onClick: function onClick() {
              return router.push('/product');
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_9__.DatabaseIcon, {
              className: "h-7"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "",
              children: "Qu\u1EA3n l\xFD s\u1EA3n ph\u1EA9m"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex items-center space-x-2 p-3 rounded-md cursor-pointer",
            onClick: function onClick() {
              return router.push('/categories');
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_9__.ViewListIcon, {
              className: "h-7"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "",
              children: "Qu\u1EA3n l\xFD danh m\u1EE5c"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex items-center space-x-2 p-3 rounded-md cursor-pointer",
            onClick: function onClick() {
              return router.push('/users');
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_9__.UsersIcon, {
              className: "h-7"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "",
              children: "Qu\u1EA3n l\xFD Users"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-span-6 lg:col-span-4 xl:col-span-5 flex justify-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "max-w-md mx-auto p-5 mt-10 border border-gray-300 bg-gray-100 rounded-md shadow-md",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "text",
              className: "border border-gray-300 p-3 rounded-md w-full",
              placeholder: "T\u1EA1o danh m\u1EE5c m\u1EDBi",
              value: name,
              onChange: function onChange(e) {
                return setName(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "button my-3",
            onClick: handleCreate,
            disabled: name ? false : true,
            children: id ? 'Cập nhật danh mục' : 'Tạo danh mục'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 7
          }, this), categories.map(function (category) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "p-3 border border-gray-400 my-2 rounded-md shadow-md",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "flex justify-between",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "capitalize",
                  children: category.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 155,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "flex space-x-2",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_9__.PencilAltIcon, {
                    onClick: function onClick() {
                      return handleUpdate(category);
                    },
                    className: "h-5 text-blue-500 cursor-pointer"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 158,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_9__.TrashIcon, {
                    className: "h-5 text-red-500 cursor-pointer",
                    onClick: function onClick() {
                      return handleDelete(category._id);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 162,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 9
              }, _this)
            }, category._id, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 8
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 3
  }, this);
}

_s(Categories, "BFbud8Tagmeu8itSLjL9IWdyoiE=");

_c = Categories;
/* harmony default export */ __webpack_exports__["default"] = (Categories);

var _c;

$RefreshReg$(_c, "Categories");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2F0ZWdvcmllcy5mZjU5YWMxN2I3NTNlOTcwY2ZlZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTs7QUFFQSxTQUFTZ0IsVUFBVCxHQUFzQjtBQUFBOztBQUFBOztBQUFBLG9CQUNPZixpREFBVSxDQUFDRywyREFBRCxDQURqQjtBQUFBLE1BQ2JhLEtBRGEsZUFDYkEsS0FEYTtBQUFBLE1BQ05DLFFBRE0sZUFDTkEsUUFETTs7QUFBQSxNQUViQyxVQUZhLEdBRVFGLEtBRlIsQ0FFYkUsVUFGYTtBQUFBLE1BRURDLElBRkMsR0FFUUgsS0FGUixDQUVERyxJQUZDO0FBQUEsTUFJYkMsSUFKYSxHQUlKRCxJQUpJLENBSWJDLElBSmE7O0FBQUEsa0JBTUduQiwrQ0FBUSxDQUFDLEVBQUQsQ0FOWDtBQUFBLE1BTWRvQixJQU5jO0FBQUEsTUFNUkMsT0FOUTs7QUFBQSxtQkFPRHJCLCtDQUFRLENBQUMsRUFBRCxDQVBQO0FBQUEsTUFPZHNCLEVBUGM7QUFBQSxNQU9WQyxLQVBVOztBQVNyQixNQUFNQyxZQUFZO0FBQUEsNlVBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNoQk4sSUFBSSxDQUFDQyxJQUFMLENBQVVNLElBQVYsS0FBbUIsT0FESDtBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQ0FFWlQsUUFBUSxDQUFDO0FBQUVVLGdCQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkMsZ0JBQUFBLE9BQU8sRUFBRTtBQUFFQyxrQkFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBM0IsZUFBRCxDQUZJOztBQUFBO0FBQUE7QUFLbkJaLGNBQUFBLFFBQVEsQ0FBQztBQUFFVSxnQkFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0JDLGdCQUFBQSxPQUFPLEVBQUU7QUFBRUUsa0JBQUFBLE9BQU8sRUFBRTtBQUFYO0FBQTNCLGVBQUQsQ0FBUjs7QUFMbUIsbUJBT2ZQLEVBUGU7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkFRWm5CLGdEQUFBLDJCQUNtQm1CLEVBRG5CLEdBQ3lCO0FBQUVGLGdCQUFBQSxJQUFJLEVBQUpBO0FBQUYsZUFEekIsRUFDbUM7QUFBRVcsZ0JBQUFBLE9BQU8sRUFBRTtBQUFFQyxrQkFBQUEsYUFBYSxFQUFFZCxJQUFJLENBQUNlO0FBQXRCO0FBQVgsZUFEbkMsRUFFSkMsSUFGSSxDQUVDLFVBQUFDLEdBQUcsRUFBSTtBQUNabkIsZ0JBQUFBLFFBQVEsQ0FBQztBQUFFVSxrQkFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0JDLGtCQUFBQSxPQUFPLEVBQUU7QUFBRVMsb0JBQUFBLE9BQU8sRUFBRUQsR0FBRyxDQUFDRSxJQUFKLENBQVNDO0FBQXBCO0FBQTNCLGlCQUFELENBQVIsQ0FEWSxDQUdaOztBQUNBdEIsZ0JBQUFBLFFBQVEsQ0FBQ1osMERBQVUsQ0FBQ2EsVUFBRCxFQUFhSyxFQUFiLEVBQWlCYSxHQUFHLENBQUNFLElBQUosQ0FBU0UsUUFBMUIsRUFBb0MsZ0JBQXBDLENBQVgsQ0FBUjtBQUNBLGVBUEksQ0FSWTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHFCQWlCWnBDLGlEQUFBLENBQ0MsaUJBREQsRUFDb0I7QUFBRWlCLGdCQUFBQSxJQUFJLEVBQUpBO0FBQUYsZUFEcEIsRUFDOEI7QUFBRVcsZ0JBQUFBLE9BQU8sRUFBRTtBQUFFQyxrQkFBQUEsYUFBYSxFQUFFZCxJQUFJLENBQUNlO0FBQXRCO0FBQVgsZUFEOUIsRUFFSkMsSUFGSSxDQUVDLFVBQUFDLEdBQUcsRUFBSTtBQUNabkIsZ0JBQUFBLFFBQVEsQ0FBQztBQUFFVSxrQkFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0JDLGtCQUFBQSxPQUFPLEVBQUU7QUFBRVMsb0JBQUFBLE9BQU8sRUFBRUQsR0FBRyxDQUFDRSxJQUFKLENBQVNDO0FBQXBCO0FBQTNCLGlCQUFELENBQVI7QUFDQXRCLGdCQUFBQSxRQUFRLENBQUM7QUFDUlUsa0JBQUFBLElBQUksRUFBRSxnQkFERTtBQUVSQyxrQkFBQUEsT0FBTyw0S0FBTVYsVUFBTixJQUFrQmtCLEdBQUcsQ0FBQ0UsSUFBSixDQUFTSSxXQUEzQjtBQUZDLGlCQUFELENBQVI7QUFJQSxlQVJJLENBakJZOztBQUFBO0FBNEJuQmxCLGNBQUFBLEtBQUssQ0FBQyxFQUFELENBQUw7QUFDQUYsY0FBQUEsT0FBTyxDQUFDLEVBQUQsQ0FBUDtBQTdCbUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUErQm5CTCxjQUFBQSxRQUFRLENBQUM7QUFBRVUsZ0JBQUFBLElBQUksRUFBRSxRQUFSO0FBQWtCQyxnQkFBQUEsT0FBTyxFQUFFO0FBQUVDLGtCQUFBQSxLQUFLLEVBQUUsWUFBSWM7QUFBYjtBQUEzQixlQUFELENBQVI7O0FBL0JtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFabEIsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFtQ0EsTUFBTW1CLFlBQVk7QUFBQSw4VUFBRyxrQkFBTXJCLEVBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNwQk4sY0FBQUEsUUFBUSxDQUFDO0FBQUVVLGdCQUFBQSxJQUFJLEVBQUUsV0FBUjtBQUFxQkMsZ0JBQUFBLE9BQU8sRUFBRTtBQUFFTCxrQkFBQUEsRUFBRSxFQUFGQSxFQUFGO0FBQU1XLGtCQUFBQSxLQUFLLEVBQUVmLElBQUksQ0FBQ2UsS0FBbEI7QUFBeUJQLGtCQUFBQSxJQUFJLEVBQUUsVUFBL0I7QUFBMkNELGtCQUFBQSxJQUFJLEVBQUVQLElBQUksQ0FBQ0MsSUFBTCxDQUFVTTtBQUEzRDtBQUE5QixlQUFELENBQVI7O0FBRG9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVprQixZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQUlBLE1BQU1DLFlBQVk7QUFBQSw4VUFBRyxrQkFBTUwsUUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQ2hCcEIsSUFBSSxDQUFDTSxJQUFMLEtBQWMsT0FERTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxnREFFWlQsUUFBUSxDQUFDO0FBQUVVLGdCQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkMsZ0JBQUFBLE9BQU8sRUFBRTtBQUFFQyxrQkFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBM0IsZUFBRCxDQUZJOztBQUFBO0FBSXBCTCxjQUFBQSxLQUFLLENBQUNnQixRQUFRLENBQUNNLEdBQVYsQ0FBTDtBQUNBeEIsY0FBQUEsT0FBTyxDQUFDa0IsUUFBUSxDQUFDbkIsSUFBVixDQUFQOztBQUxvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFad0IsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFRQSxNQUFJLENBQUN6QixJQUFELElBQVNBLElBQUksQ0FBQ00sSUFBTCxLQUFjLE9BQTNCLEVBQW9DLE9BQU8sSUFBUDtBQUVwQyxzQkFDQztBQUFLLGFBQVMsRUFBQywwQkFBZjtBQUFBLDRCQUNDLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFLQyw4REFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEQsZUFPQyw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEQsZUFTQztBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFBLDhCQUNDO0FBQUssaUJBQVMsRUFBQyxvR0FBZjtBQUFBLGdDQUNDO0FBQUssbUJBQVMsRUFBQyx5REFBZjtBQUFBLGtDQUNDLDhEQUFDLG9FQUFEO0FBQWdCLHFCQUFTLEVBQUM7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQUVDO0FBQUcscUJBQVMsRUFBQyxFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQU1DO0FBQ0MsbUJBQVMsRUFBQyxnREFEWDtBQUVDLGlCQUFPLEVBQUU7QUFBQSxtQkFBTXFCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLHdCQUFaLENBQU47QUFBQSxXQUZWO0FBQUEsa0NBSUMsOERBQUMsd0VBQUQ7QUFBb0IscUJBQVMsRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpELGVBS0M7QUFBRyxxQkFBUyxFQUFDLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5ELEVBY0U3QixJQUFJLENBQUNDLElBQUwsSUFBYUQsSUFBSSxDQUFDQyxJQUFMLENBQVVNLElBQVYsS0FBbUIsT0FBaEMsaUJBQ0E7QUFBQSxrQ0FDQztBQUNDLHFCQUFTLEVBQUMsMkRBRFg7QUFFQyxtQkFBTyxFQUFFO0FBQUEscUJBQU1xQixNQUFNLENBQUNDLElBQVAsQ0FBWSxVQUFaLENBQU47QUFBQSxhQUZWO0FBQUEsb0NBSUMsOERBQUMsa0VBQUQ7QUFBYyx1QkFBUyxFQUFDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkQsZUFLQztBQUFHLHVCQUFTLEVBQUMsRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFTQztBQUNDLHFCQUFTLEVBQUMsMkRBRFg7QUFFQyxtQkFBTyxFQUFFO0FBQUEscUJBQU1ELE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLGFBQVosQ0FBTjtBQUFBLGFBRlY7QUFBQSxvQ0FJQyw4REFBQyxrRUFBRDtBQUFjLHVCQUFTLEVBQUM7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRCxlQUtDO0FBQUcsdUJBQVMsRUFBQyxFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFURCxlQWdCQztBQUNDLHFCQUFTLEVBQUMsMkRBRFg7QUFFQyxtQkFBTyxFQUFFO0FBQUEscUJBQU1ELE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVosQ0FBTjtBQUFBLGFBRlY7QUFBQSxvQ0FJQyw4REFBQywrREFBRDtBQUFXLHVCQUFTLEVBQUM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRCxlQUtDO0FBQUcsdUJBQVMsRUFBQyxFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFoQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBMkNDO0FBQUssaUJBQVMsRUFBQyw0REFBZjtBQUFBLCtCQUNDO0FBQUssbUJBQVMsRUFBQyxvRkFBZjtBQUFBLGtDQUNDO0FBQUsscUJBQVMsRUFBQyxFQUFmO0FBQUEsbUNBQ0M7QUFDQyxrQkFBSSxFQUFDLE1BRE47QUFFQyx1QkFBUyxFQUFDLDhDQUZYO0FBR0MseUJBQVcsRUFBQyxpQ0FIYjtBQUlDLG1CQUFLLEVBQUUzQixJQUpSO0FBS0Msc0JBQVEsRUFBRSxrQkFBQTRCLENBQUM7QUFBQSx1QkFBSTNCLE9BQU8sQ0FBQzJCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFBQTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBVUM7QUFDQyxxQkFBUyxFQUFDLGFBRFg7QUFFQyxtQkFBTyxFQUFFMUIsWUFGVjtBQUdDLG9CQUFRLEVBQUVKLElBQUksR0FBRyxLQUFILEdBQVcsSUFIMUI7QUFBQSxzQkFLRUUsRUFBRSxHQUFHLG1CQUFILEdBQXlCO0FBTDdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVkQsRUFrQkVMLFVBQVUsQ0FBQ2tDLEdBQVgsQ0FBZSxVQUFBWixRQUFRO0FBQUEsZ0NBQ3ZCO0FBRUMsdUJBQVMsRUFBQyxzREFGWDtBQUFBLHFDQUlDO0FBQUsseUJBQVMsRUFBQyxzQkFBZjtBQUFBLHdDQUNDO0FBQUcsMkJBQVMsRUFBQyxZQUFiO0FBQUEsNEJBQTJCQSxRQUFRLENBQUNuQjtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURELGVBR0M7QUFBSywyQkFBUyxFQUFDLGdCQUFmO0FBQUEsMENBQ0MsOERBQUMsbUVBQUQ7QUFDQywyQkFBTyxFQUFFO0FBQUEsNkJBQU13QixZQUFZLENBQUNMLFFBQUQsQ0FBbEI7QUFBQSxxQkFEVjtBQUVDLDZCQUFTLEVBQUM7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURELGVBS0MsOERBQUMsK0RBQUQ7QUFDQyw2QkFBUyxFQUFDLGlDQURYO0FBRUMsMkJBQU8sRUFBRTtBQUFBLDZCQUFNSSxZQUFZLENBQUNKLFFBQVEsQ0FBQ00sR0FBVixDQUFsQjtBQUFBO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkQsZUFDTU4sUUFBUSxDQUFDTSxHQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRHVCO0FBQUEsV0FBdkIsQ0FsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQWtHQTs7R0E1SlEvQjs7S0FBQUE7QUE4SlQsK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2F0ZWdvcmllcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uLy4uL3N0b3JlL0dsb2JhbFN0YXRlJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXBkYXRlSXRlbSB9IGZyb20gJy4uLy4uL3N0b3JlL0FjdGlvbnMnO1xyXG5pbXBvcnQge1xyXG5cdERhdGFiYXNlSWNvbixcclxuXHREb2N1bWVudFNlYXJjaEljb24sXHJcblx0UGVuY2lsQWx0SWNvbixcclxuXHRUcmFzaEljb24sXHJcblx0VXNlckNpcmNsZUljb24sXHJcblx0VXNlcnNJY29uLFxyXG5cdFZpZXdMaXN0SWNvbixcclxufSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L291dGxpbmUnO1xyXG5pbXBvcnQgTW9kYWxVc2VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTW9kYWxVc2VyJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RhaWx3aW5kL0hlYWRlcic7XHJcblxyXG5mdW5jdGlvbiBDYXRlZ29yaWVzKCkge1xyXG5cdGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuXHRjb25zdCB7IGNhdGVnb3JpZXMsIGF1dGggfSA9IHN0YXRlO1xyXG5cclxuXHRjb25zdCB7IHVzZXIgfSA9IGF1dGg7XHJcblxyXG5cdGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ3JlYXRlID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0aWYgKGF1dGgudXNlci5yb2xlICE9PSAnYWRtaW4nKVxyXG5cdFx0XHRyZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBlcnJvcjogJ0LhuqFuIGtow7RuZyBjw7MgcXV54buBbiB04bqhbyBkYW5oIG3hu6VjLicgfSB9KTtcclxuXHJcblx0XHR0cnkge1xyXG5cdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuXHJcblx0XHRcdGlmIChpZCkge1xyXG5cdFx0XHRcdGF3YWl0IGF4aW9zXHJcblx0XHRcdFx0XHQucHV0KGAvYXBpL2NhdGVnb3JpZXMvJHtpZH1gLCB7IG5hbWUgfSwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGF1dGgudG9rZW4gfSB9KVxyXG5cdFx0XHRcdFx0LnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBzdWNjZXNzOiByZXMuZGF0YS5tc2cgfSB9KTtcclxuXHJcblx0XHRcdFx0XHRcdC8vVXBkYXRlIENhdGVnb3JpZXNcclxuXHRcdFx0XHRcdFx0ZGlzcGF0Y2godXBkYXRlSXRlbShjYXRlZ29yaWVzLCBpZCwgcmVzLmRhdGEuY2F0ZWdvcnksICdBRERfQ0FURUdPUklFUycpKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGF3YWl0IGF4aW9zXHJcblx0XHRcdFx0XHQucG9zdCgnL2FwaS9jYXRlZ29yaWVzJywgeyBuYW1lIH0sIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBhdXRoLnRva2VuIH0gfSlcclxuXHRcdFx0XHRcdC50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgc3VjY2VzczogcmVzLmRhdGEubXNnIH0gfSk7XHJcblx0XHRcdFx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnQUREX0NBVEVHT1JJRVMnLFxyXG5cdFx0XHRcdFx0XHRcdHBheWxvYWQ6IFsuLi5jYXRlZ29yaWVzLCByZXMuZGF0YS5uZXdDYXRlZ29yeV0sXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNldElkKCcnKTtcclxuXHRcdFx0c2V0TmFtZSgnJyk7XHJcblx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBlcnJvcjogZXJyLm1lc3NhZ2UgfSB9KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyBpZCA9PiB7XHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6ICdBRERfTU9EQUwnLCBwYXlsb2FkOiB7IGlkLCB0b2tlbjogYXV0aC50b2tlbiwgdHlwZTogJ0NBVEVHT1JZJywgcm9sZTogYXV0aC51c2VyLnJvbGUgfSB9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVVcGRhdGUgPSBhc3luYyBjYXRlZ29yeSA9PiB7XHJcblx0XHRpZiAodXNlci5yb2xlICE9PSAnYWRtaW4nKVxyXG5cdFx0XHRyZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBlcnJvcjogJ0LhuqFuIGtow7RuZyBjw7MgcXV54buBbiBjaOG7iW5oIHPhu61hIGRhbmggbeG7pWMuJyB9IH0pO1xyXG5cclxuXHRcdHNldElkKGNhdGVnb3J5Ll9pZCk7XHJcblx0XHRzZXROYW1lKGNhdGVnb3J5Lm5hbWUpO1xyXG5cdH07XHJcblxyXG5cdGlmICghdXNlciB8fCB1c2VyLnJvbGUgIT09ICdhZG1pbicpIHJldHVybiBudWxsO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2JnLWJsdWUtMTAwIG1pbi1oLXNjcmVlbic+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdDx0aXRsZT5RdeG6o24gbMO9IGRhbmggbeG7pWM8L3RpdGxlPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblxyXG5cdFx0XHQ8SGVhZGVyIC8+XHJcblxyXG5cdFx0XHQ8TW9kYWxVc2VyIC8+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtNic+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2JnLWdyZWVuLTEwMCBjb2wtc3Bhbi02IGxnOmNvbC1zcGFuLTIgeGw6Y29sLXNwYW4tMSBwLTEwIGZsZXggZmxleC1jb2wgZm9udC1zZW1pYm9sZCBtaW4tdy1bMzAwcHhdJz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgYmctZ3JlZW4tNDAwIHAtMyByb3VuZGVkLW1kJz5cclxuXHRcdFx0XHRcdFx0PFVzZXJDaXJjbGVJY29uIGNsYXNzTmFtZT0naC03JyAvPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9Jyc+VGjDtG5nIHRpbiB0w6BpIGtob+G6o248L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIHAtMyBjdXJzb3ItcG9pbnRlcidcclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9wcm9maWxlL29yZGVyLWhpc3RvcnknKX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PERvY3VtZW50U2VhcmNoSWNvbiBjbGFzc05hbWU9J2gtNycgLz5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPScnPkzhu4tjaCBz4butIMSR4bq3dCBow6BuZzwvcD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdHthdXRoLnVzZXIgJiYgYXV0aC51c2VyLnJvbGUgPT09ICdhZG1pbicgJiYgKFxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIHAtMyByb3VuZGVkLW1kIGN1cnNvci1wb2ludGVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9wcm9kdWN0Jyl9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PERhdGFiYXNlSWNvbiBjbGFzc05hbWU9J2gtNycgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nJz5RdeG6o24gbMO9IHPhuqNuIHBo4bqpbTwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgcC0zIHJvdW5kZWQtbWQgY3Vyc29yLXBvaW50ZXInXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL2NhdGVnb3JpZXMnKX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Vmlld0xpc3RJY29uIGNsYXNzTmFtZT0naC03JyAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPScnPlF14bqjbiBsw70gZGFuaCBt4bulYzwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBwLTMgcm91bmRlZC1tZCBjdXJzb3ItcG9pbnRlcidcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvdXNlcnMnKX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VXNlcnNJY29uIGNsYXNzTmFtZT0naC03JyAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPScnPlF14bqjbiBsw70gVXNlcnM8L3A+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1zcGFuLTYgbGc6Y29sLXNwYW4tNCB4bDpjb2wtc3Bhbi01IGZsZXgganVzdGlmeS1jZW50ZXInPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21heC13LW1kIG14LWF1dG8gcC01IG10LTEwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgYmctZ3JheS0xMDAgcm91bmRlZC1tZCBzaGFkb3ctbWQnPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nJz5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2JvcmRlciBib3JkZXItZ3JheS0zMDAgcC0zIHJvdW5kZWQtbWQgdy1mdWxsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J1ThuqFvIGRhbmggbeG7pWMgbeG7m2knXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17bmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtlID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdidXR0b24gbXktMydcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVDcmVhdGV9XHJcblx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e25hbWUgPyBmYWxzZSA6IHRydWV9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHR7aWQgPyAnQ+G6rXAgbmjhuq10IGRhbmggbeG7pWMnIDogJ1ThuqFvIGRhbmggbeG7pWMnfVxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHJcblx0XHRcdFx0XHRcdHtjYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtjYXRlZ29yeS5faWR9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3AtMyBib3JkZXIgYm9yZGVyLWdyYXktNDAwIG15LTIgcm91bmRlZC1tZCBzaGFkb3ctbWQnXHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdjYXBpdGFsaXplJz57Y2F0ZWdvcnkubmFtZX08L3A+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBzcGFjZS14LTInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxQZW5jaWxBbHRJY29uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVVcGRhdGUoY2F0ZWdvcnkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdoLTUgdGV4dC1ibHVlLTUwMCBjdXJzb3ItcG9pbnRlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUcmFzaEljb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naC01IHRleHQtcmVkLTUwMCBjdXJzb3ItcG9pbnRlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShjYXRlZ29yeS5faWQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcmllcztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiSGVhZCIsIkRhdGFDb250ZXh0IiwiYXhpb3MiLCJ1cGRhdGVJdGVtIiwiRGF0YWJhc2VJY29uIiwiRG9jdW1lbnRTZWFyY2hJY29uIiwiUGVuY2lsQWx0SWNvbiIsIlRyYXNoSWNvbiIsIlVzZXJDaXJjbGVJY29uIiwiVXNlcnNJY29uIiwiVmlld0xpc3RJY29uIiwiTW9kYWxVc2VyIiwiSGVhZGVyIiwiQ2F0ZWdvcmllcyIsInN0YXRlIiwiZGlzcGF0Y2giLCJjYXRlZ29yaWVzIiwiYXV0aCIsInVzZXIiLCJuYW1lIiwic2V0TmFtZSIsImlkIiwic2V0SWQiLCJoYW5kbGVDcmVhdGUiLCJyb2xlIiwidHlwZSIsInBheWxvYWQiLCJlcnJvciIsImxvYWRpbmciLCJwdXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwidGhlbiIsInJlcyIsInN1Y2Nlc3MiLCJkYXRhIiwibXNnIiwiY2F0ZWdvcnkiLCJwb3N0IiwibmV3Q2F0ZWdvcnkiLCJtZXNzYWdlIiwiaGFuZGxlRGVsZXRlIiwiaGFuZGxlVXBkYXRlIiwiX2lkIiwicm91dGVyIiwicHVzaCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=