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
        lineNumber: 72,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tailwind_Header__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ModalUser__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
            lineNumber: 81,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "button my-3",
          onClick: handleCreate,
          disabled: name ? false : true,
          children: id ? 'Cập nhật danh mục' : 'Tạo danh mục'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 6
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
                lineNumber: 99,
                columnNumber: 9
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "flex space-x-2",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_9__.PencilAltIcon, {
                  onClick: function onClick() {
                    return handleUpdate(category);
                  },
                  className: "h-5 text-blue-500 cursor-pointer"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_9__.TrashIcon, {
                  className: "h-5 text-red-500 cursor-pointer",
                  onClick: function onClick() {
                    return handleDelete(category._id);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 8
            }, _this)
          }, category._id, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 7
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2F0ZWdvcmllcy42NjI5MmE4ODNkYWRmMjdiYWI4Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTVyxVQUFULEdBQXNCO0FBQUE7O0FBQUE7O0FBQUEsb0JBQ09WLGlEQUFVLENBQUNHLDJEQUFELENBRGpCO0FBQUEsTUFDYlEsS0FEYSxlQUNiQSxLQURhO0FBQUEsTUFDTkMsUUFETSxlQUNOQSxRQURNOztBQUFBLE1BRWJDLFVBRmEsR0FFUUYsS0FGUixDQUViRSxVQUZhO0FBQUEsTUFFREMsSUFGQyxHQUVRSCxLQUZSLENBRURHLElBRkM7QUFBQSxNQUliQyxJQUphLEdBSUpELElBSkksQ0FJYkMsSUFKYTs7QUFBQSxrQkFNR2QsK0NBQVEsQ0FBQyxFQUFELENBTlg7QUFBQSxNQU1kZSxJQU5jO0FBQUEsTUFNUkMsT0FOUTs7QUFBQSxtQkFPRGhCLCtDQUFRLENBQUMsRUFBRCxDQVBQO0FBQUEsTUFPZGlCLEVBUGM7QUFBQSxNQU9WQyxLQVBVOztBQVNyQixNQUFNQyxZQUFZO0FBQUEsNlVBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNoQk4sSUFBSSxDQUFDQyxJQUFMLENBQVVNLElBQVYsS0FBbUIsT0FESDtBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQ0FFWlQsUUFBUSxDQUFDO0FBQUVVLGdCQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkMsZ0JBQUFBLE9BQU8sRUFBRTtBQUFFQyxrQkFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBM0IsZUFBRCxDQUZJOztBQUFBO0FBQUE7QUFLbkJaLGNBQUFBLFFBQVEsQ0FBQztBQUFFVSxnQkFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0JDLGdCQUFBQSxPQUFPLEVBQUU7QUFBRUUsa0JBQUFBLE9BQU8sRUFBRTtB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O0FBQUEsVUFERDtBQWlEQTs7R0EzR1EvQjs7S0FBQUE7QUE2R1QsK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2F0ZWdvcmllcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uLy4uL3N0b3JlL0dsb2JhbFN0YXRlJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXBkYXRlSXRlbSB9IGZyb20gJy4uLy4uL3N0b3JlL0FjdGlvbnMnO1xyXG5pbXBvcnQgeyBQZW5jaWxBbHRJY29uLCBUcmFzaEljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L291dGxpbmUnO1xyXG5pbXBvcnQgTW9kYWxVc2VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTW9kYWxVc2VyJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RhaWx3aW5kL0hlYWRlcic7XHJcblxyXG5mdW5jdGlvbiBDYXRlZ29yaWVzKCkge1xyXG5cdGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuXHRjb25zdCB7IGNhdGVnb3JpZXMsIGF1dGggfSA9IHN0YXRlO1xyXG5cclxuXHRjb25zdCB7IHVzZXIgfSA9IGF1dGg7XHJcblxyXG5cdGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ3JlYXRlID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0aWYgKGF1dGgudXNlci5yb2xlICE9PSAnYWRtaW4nKVxyXG5cdFx0XHRyZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBlcnJvcjogJ0LhuqFuIGtow7RuZyBjw7MgcXV54buBbiB04bqhbyBkYW5oIG3hu6VjLicgfSB9KTtcclxuXHJcblx0XHR0cnkge1xyXG5cdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuXHJcblx0XHRcdGlmIChpZCkge1xyXG5cdFx0XHRcdGF3YWl0IGF4aW9zXHJcblx0XHRcdFx0XHQucHV0KGAvYXBpL2NhdGVnb3JpZXMvJHtpZH1gLCB7IG5hbWUgfSwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGF1dGgudG9rZW4gfSB9KVxyXG5cdFx0XHRcdFx0LnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBzdWNjZXNzOiByZXMuZGF0YS5tc2cgfSB9KTtcclxuXHJcblx0XHRcdFx0XHRcdC8vVXBkYXRlIENhdGVnb3JpZXNcclxuXHRcdFx0XHRcdFx0ZGlzcGF0Y2godXBkYXRlSXRlbShjYXRlZ29yaWVzLCBpZCwgcmVzLmRhdGEuY2F0ZWdvcnksICdBRERfQ0FURUdPUklFUycpKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGF3YWl0IGF4aW9zXHJcblx0XHRcdFx0XHQucG9zdCgnL2FwaS9jYXRlZ29yaWVzJywgeyBuYW1lIH0sIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBhdXRoLnRva2VuIH0gfSlcclxuXHRcdFx0XHRcdC50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgc3VjY2VzczogcmVzLmRhdGEubXNnIH0gfSk7XHJcblx0XHRcdFx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnQUREX0NBVEVHT1JJRVMnLFxyXG5cdFx0XHRcdFx0XHRcdHBheWxvYWQ6IFsuLi5jYXRlZ29yaWVzLCByZXMuZGF0YS5uZXdDYXRlZ29yeV0sXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNldElkKCcnKTtcclxuXHRcdFx0c2V0TmFtZSgnJyk7XHJcblx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBlcnJvcjogZXJyLm1lc3NhZ2UgfSB9KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyBpZCA9PiB7XHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6ICdBRERfTU9EQUwnLCBwYXlsb2FkOiB7IGlkLCB0b2tlbjogYXV0aC50b2tlbiwgdHlwZTogJ0NBVEVHT1JZJywgcm9sZTogYXV0aC51c2VyLnJvbGUgfSB9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVVcGRhdGUgPSBhc3luYyBjYXRlZ29yeSA9PiB7XHJcblx0XHRpZiAodXNlci5yb2xlICE9PSAnYWRtaW4nKVxyXG5cdFx0XHRyZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBlcnJvcjogJ0LhuqFuIGtow7RuZyBjw7MgcXV54buBbiBjaOG7iW5oIHPhu61hIGRhbmggbeG7pWMuJyB9IH0pO1xyXG5cclxuXHRcdHNldElkKGNhdGVnb3J5Ll9pZCk7XHJcblx0XHRzZXROYW1lKGNhdGVnb3J5Lm5hbWUpO1xyXG5cdH07XHJcblxyXG5cdGlmICghdXNlciB8fCB1c2VyLnJvbGUgIT09ICdhZG1pbicpIHJldHVybiBudWxsO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2JnLWJsdWUtMTAwIG1pbi1oLXNjcmVlbic+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdDx0aXRsZT5RdeG6o24gbMO9IGRhbmggbeG7pWM8L3RpdGxlPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblxyXG5cdFx0XHQ8SGVhZGVyIC8+XHJcblxyXG5cdFx0XHQ8TW9kYWxVc2VyIC8+XHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21heC13LW1kIG14LWF1dG8gcC01IG10LTEwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgYmctZ3JheS0xMDAgcm91bmRlZC1tZCBzaGFkb3ctbWQnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9Jyc+XHJcblx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdib3JkZXIgYm9yZGVyLWdyYXktMzAwIHAtMyByb3VuZGVkLW1kIHctZnVsbCdcclxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nVOG6oW8gZGFuaCBt4bulYyBt4bubaSdcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17bmFtZX1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9J2J1dHRvbiBteS0zJyBvbkNsaWNrPXtoYW5kbGVDcmVhdGV9IGRpc2FibGVkPXtuYW1lID8gZmFsc2UgOiB0cnVlfT5cclxuXHRcdFx0XHRcdFx0e2lkID8gJ0Phuq1wIG5o4bqtdCBkYW5oIG3hu6VjJyA6ICdU4bqhbyBkYW5oIG3hu6VjJ31cclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cclxuXHRcdFx0XHRcdHtjYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiAoXHJcblx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRrZXk9e2NhdGVnb3J5Ll9pZH1cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3AtMyBib3JkZXIgYm9yZGVyLWdyYXktNDAwIG15LTIgcm91bmRlZC1tZCBzaGFkb3ctbWQnXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4nPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdjYXBpdGFsaXplJz57Y2F0ZWdvcnkubmFtZX08L3A+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggc3BhY2UteC0yJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFBlbmNpbEFsdEljb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVVcGRhdGUoY2F0ZWdvcnkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naC01IHRleHQtYmx1ZS01MDAgY3Vyc29yLXBvaW50ZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUcmFzaEljb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2gtNSB0ZXh0LXJlZC01MDAgY3Vyc29yLXBvaW50ZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKGNhdGVnb3J5Ll9pZCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yaWVzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJIZWFkIiwiRGF0YUNvbnRleHQiLCJheGlvcyIsInVwZGF0ZUl0ZW0iLCJQZW5jaWxBbHRJY29uIiwiVHJhc2hJY29uIiwiTW9kYWxVc2VyIiwiSGVhZGVyIiwiQ2F0ZWdvcmllcyIsInN0YXRlIiwiZGlzcGF0Y2giLCJjYXRlZ29yaWVzIiwiYXV0aCIsInVzZXIiLCJuYW1lIiwic2V0TmFtZSIsImlkIiwic2V0SWQiLCJoYW5kbGVDcmVhdGUiLCJyb2xlIiwidHlwZSIsInBheWxvYWQiLCJlcnJvciIsImxvYWRpbmciLCJwdXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwidGhlbiIsInJlcyIsInN1Y2Nlc3MiLCJkYXRhIiwibXNnIiwiY2F0ZWdvcnkiLCJwb3N0IiwibmV3Q2F0ZWdvcnkiLCJtZXNzYWdlIiwiaGFuZGxlRGVsZXRlIiwiaGFuZGxlVXBkYXRlIiwiX2lkIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==