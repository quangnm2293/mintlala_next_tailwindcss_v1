"use strict";
self["webpackHotUpdate_N_E"]("pages/users",{

/***/ "./pages/users/index.js":
/*!******************************!*\
  !*** ./pages/users/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var _components_ProductTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ProductTable */ "./components/ProductTable.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Pagination */ "./components/Pagination.js");
/* harmony import */ var _components_tailwind_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/tailwind/Header */ "./components/tailwind/Header.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "E:\\Works\\VSCode\\NextJS\\next-website-mintlala\\pages\\users\\index.js",
    _s = $RefreshSig$();

/* eslint-disable react-hooks/exhaustive-deps */









function Users() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_store_GlobalState__WEBPACK_IMPORTED_MODULE_6__.DataContext),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var auth = state.auth;
  var token = auth.token;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      users = _useState[0],
      setUsers = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(12),
      result = _useState2[0],
      setResult = _useState2[1];

  var page = router.query.page || 1;
  var limit = router.query.limit || 12;
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var getUsers = /*#__PURE__*/function () {
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
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_5___default().get("/api/user?page=".concat(page, "&limit=").concat(limit), {
                  headers: {
                    Authorization: token
                  }
                }).then(function (res) {
                  if (res.data.err) {
                    dispatch({
                      type: 'NOTIFY',
                      payload: {}
                    });
                    return router.push('/notHavePermission');
                  }

                  var data = res.data.users.map(function (user) {
                    user.createdAt = new Date(user.createdAt).toLocaleString();
                    return user;
                  });
                  setUsers(data);
                  setResult(res.data.result);
                  dispatch({
                    type: 'NOTIFY',
                    payload: {}
                  });
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getUsers() {
        return _ref.apply(this, arguments);
      };
    }();

    if (token) getUsers();
  }, [auth.user, router.query.page, token]);
  var columns = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
    return [{
      Header: 'ID',
      accessor: '_id'
    }, {
      Header: 'Tên người dùng',
      accessor: 'name'
    }, {
      Header: 'Email',
      accessor: 'email'
    }, {
      Header: 'Admin',
      accessor: 'role'
    }, {
      Header: 'Ngày tạo',
      accessor: 'createdAt'
    }];
  }, []);
  if (users.length === 0) return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Qu\u1EA3n l\xFD ng\u01B0\u1EDDi d\xF9ng"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tailwind_Header__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "bg-green-100 col-span-6 lg:col-span-2 xl:col-span-1 p-10 flex flex-col font-semibold min-w-[300px]",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex items-center space-x-2 bg-green-400 p-3 rounded-md",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserCircleIcon, {
          className: "h-7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "",
          children: "Th\xF4ng tin t\xE0i kho\u1EA3n"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex items-center space-x-2 p-3 cursor-pointer",
        onClick: function onClick() {
          return router.push('/profile/order-history');
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DocumentSearchIcon, {
          className: "h-7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "",
          children: "L\u1ECBch s\u1EED \u0111\u1EB7t h\xE0ng"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 5
      }, this), auth.user && auth.user.role === 'admin' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex items-center space-x-2 p-3 rounded-md cursor-pointer",
          onClick: function onClick() {
            return router.push('/product');
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DatabaseIcon, {
            className: "h-7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "",
            children: "Qu\u1EA3n l\xFD s\u1EA3n ph\u1EA9m"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex items-center space-x-2 p-3 rounded-md cursor-pointer",
          onClick: function onClick() {
            return router.push('/categories');
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ViewListIcon, {
            className: "h-7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "",
            children: "Qu\u1EA3n l\xFD danh m\u1EE5c"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex items-center space-x-2 p-3 rounded-md cursor-pointer",
          onClick: function onClick() {
            return router.push('/users');
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UsersIcon, {
            className: "h-7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "",
            children: "Qu\u1EA3n l\xFD Users"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 6
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        className: "text-center my-4 text-xl font-semibold",
        children: ["Danh s\xE1ch ng\u01B0\u1EDDi d\xF9ng (", result, " users)"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "overflow-x-auto scrollbar-hide mx-2",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductTable__WEBPACK_IMPORTED_MODULE_7__.default, {
          columns: columns,
          data: users
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_9__.default, {
      result: result
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 3
  }, this);
}

_s(Users, "vMlEJcZ+pF0+7yIIa3wAgFTUMwk=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter];
});

_c = Users;
/* harmony default export */ __webpack_exports__["default"] = (Users);

var _c;

$RefreshReg$(_c, "Users");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMuNDE3MzU0Y2U0MDhiNjhmNGY1OWEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTWSxLQUFULEdBQWlCO0FBQUE7O0FBQ2hCLE1BQU1DLE1BQU0sR0FBR0osc0RBQVMsRUFBeEI7O0FBRGdCLG9CQUVZUixpREFBVSxDQUFDTSwyREFBRCxDQUZ0QjtBQUFBLE1BRVJPLEtBRlEsZUFFUkEsS0FGUTtBQUFBLE1BRURDLFFBRkMsZUFFREEsUUFGQzs7QUFBQSxNQUdSQyxJQUhRLEdBR0NGLEtBSEQsQ0FHUkUsSUFIUTtBQUFBLE1BSVJDLEtBSlEsR0FJRUQsSUFKRixDQUlSQyxLQUpROztBQUFBLGtCQU1VYiwrQ0FBUSxDQUFDLEVBQUQsQ0FObEI7QUFBQSxNQU1UYyxLQU5TO0FBQUEsTUFNRkMsUUFORTs7QUFBQSxtQkFPWWYsK0NBQVEsQ0FBQyxFQUFELENBUHBCO0FBQUEsTUFPVGdCLE1BUFM7QUFBQSxNQU9EQyxTQVBDOztBQVNoQixNQUFNQyxJQUFJLEdBQUdULE1BQU0sQ0FBQ1UsS0FBUCxDQUFhRCxJQUFiLElBQXFCLENBQWxDO0FBQ0EsTUFBTUUsS0FBSyxHQUFHWCxNQUFNLENBQUNVLEtBQVAsQ0FBYUMsS0FBYixJQUFzQixFQUFwQztBQUVBdEIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBTXVCLFFBQVE7QUFBQSwrVUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCVixnQkFBQUEsUUFBUSxDQUFDO0FBQUVXLGtCQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkMsa0JBQUFBLE9BQU8sRUFBRTtBQUFFQyxvQkFBQUEsT0FBTyxFQUFFO0FBQVg7QUFBM0IsaUJBQUQsQ0FBUjtBQURnQjtBQUFBLHVCQUdWdEIsZ0RBQUEsMEJBQ2tCZ0Is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TSxDQUFDdUIsSUFBUCxDQUFZLFFBQVosQ0FBTjtBQUFBLFdBRlY7QUFBQSxrQ0FJQyw4REFBQyxTQUFEO0FBQVcscUJBQVMsRUFBQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpELGVBS0M7QUFBRyxxQkFBUyxFQUFDLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRCxlQWlEQztBQUFBLDhCQUNDO0FBQUksaUJBQVMsRUFBQyx3Q0FBZDtBQUFBLDZEQUN3QmhCLE1BRHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBSUM7QUFBSyxpQkFBUyxFQUFDLHFDQUFmO0FBQUEsK0JBQ0MsOERBQUMsNkRBQUQ7QUFBYyxpQkFBTyxFQUFFc0IsT0FBdkI7QUFBZ0MsY0FBSSxFQUFFeEI7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqREQsZUEwREMsOERBQUMsMkRBQUQ7QUFBWSxZQUFNLEVBQUVFO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUE4REE7O0dBcEhRUjtVQUNPSDs7O0tBRFBHO0FBc0hULCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXJzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi8uLi9zdG9yZS9HbG9iYWxTdGF0ZSc7XHJcbmltcG9ydCBQcm9kdWN0VGFibGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0VGFibGUnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGFnaW5hdGlvbic7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90YWlsd2luZC9IZWFkZXInO1xyXG5cclxuZnVuY3Rpb24gVXNlcnMoKSB7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xyXG5cdGNvbnN0IHsgYXV0aCB9ID0gc3RhdGU7XHJcblx0Y29uc3QgeyB0b2tlbiB9ID0gYXV0aDtcclxuXHJcblx0Y29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKDEyKTtcclxuXHJcblx0Y29uc3QgcGFnZSA9IHJvdXRlci5xdWVyeS5wYWdlIHx8IDE7XHJcblx0Y29uc3QgbGltaXQgPSByb3V0ZXIucXVlcnkubGltaXQgfHwgMTI7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBnZXRVc2VycyA9IGFzeW5jICgpID0+IHtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcblxyXG5cdFx0XHRhd2FpdCBheGlvc1xyXG5cdFx0XHRcdC5nZXQoYC9hcGkvdXNlcj9wYWdlPSR7cGFnZX0mbGltaXQ9JHtsaW1pdH1gLCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogdG9rZW4gfSB9KVxyXG5cdFx0XHRcdC50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEuZXJyKSB7XHJcblx0XHRcdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gcm91dGVyLnB1c2goJy9ub3RIYXZlUGVybWlzc2lvbicpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGNvbnN0IGRhdGEgPSByZXMuZGF0YS51c2Vycy5tYXAodXNlciA9PiB7XHJcblx0XHRcdFx0XHRcdHVzZXIuY3JlYXRlZEF0ID0gbmV3IERhdGUodXNlci5jcmVhdGVkQXQpLnRvTG9jYWxlU3RyaW5nKCk7XHJcblx0XHRcdFx0XHRcdHJldHVybiB1c2VyO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0c2V0VXNlcnMoZGF0YSk7XHJcblx0XHRcdFx0XHRzZXRSZXN1bHQocmVzLmRhdGEucmVzdWx0KTtcclxuXHJcblx0XHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH07XHJcblx0XHRpZiAodG9rZW4pIGdldFVzZXJzKCk7XHJcblx0fSwgW2F1dGgudXNlciwgcm91dGVyLnF1ZXJ5LnBhZ2UsIHRva2VuXSk7XHJcblxyXG5cdGNvbnN0IGNvbHVtbnMgPSB1c2VNZW1vKFxyXG5cdFx0KCkgPT4gW1xyXG5cdFx0XHR7IEhlYWRlcjogJ0lEJywgYWNjZXNzb3I6ICdfaWQnIH0sXHJcblx0XHRcdHsgSGVhZGVyOiAnVMOqbiBuZ8aw4budaSBkw7luZycsIGFjY2Vzc29yOiAnbmFtZScgfSxcclxuXHRcdFx0eyBIZWFkZXI6ICdFbWFpbCcsIGFjY2Vzc29yOiAnZW1haWwnIH0sXHJcblx0XHRcdHsgSGVhZGVyOiAnQWRtaW4nLCBhY2Nlc3NvcjogJ3JvbGUnIH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRIZWFkZXI6ICdOZ8OgeSB04bqhbycsXHJcblx0XHRcdFx0YWNjZXNzb3I6ICdjcmVhdGVkQXQnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHRcdFtdXHJcblx0KTtcclxuXHJcblx0aWYgKHVzZXJzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+UXXhuqNuIGzDvSBuZ8aw4budaSBkw7luZzwvdGl0bGU+XHJcblx0XHRcdDwvSGVhZD5cclxuXHJcblx0XHRcdDxIZWFkZXIgLz5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdiZy1ncmVlbi0xMDAgY29sLXNwYW4tNiBsZzpjb2wtc3Bhbi0yIHhsOmNvbC1zcGFuLTEgcC0xMCBmbGV4IGZsZXgtY29sIGZvbnQtc2VtaWJvbGQgbWluLXctWzMwMHB4XSc+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBiZy1ncmVlbi00MDAgcC0zIHJvdW5kZWQtbWQnPlxyXG5cdFx0XHRcdFx0PFVzZXJDaXJjbGVJY29uIGNsYXNzTmFtZT0naC03JyAvPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPScnPlRow7RuZyB0aW4gdMOgaSBraG/huqNuPC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBwLTMgY3Vyc29yLXBvaW50ZXInXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3Byb2ZpbGUvb3JkZXItaGlzdG9yeScpfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxEb2N1bWVudFNlYXJjaEljb24gY2xhc3NOYW1lPSdoLTcnIC8+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9Jyc+TOG7i2NoIHPhu60gxJHhurd0IGjDoG5nPC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHR7YXV0aC51c2VyICYmIGF1dGgudXNlci5yb2xlID09PSAnYWRtaW4nICYmIChcclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBwLTMgcm91bmRlZC1tZCBjdXJzb3ItcG9pbnRlcidcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3Byb2R1Y3QnKX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxEYXRhYmFzZUljb24gY2xhc3NOYW1lPSdoLTcnIC8+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPScnPlF14bqjbiBsw70gc+G6o24gcGjhuqltPC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBwLTMgcm91bmRlZC1tZCBjdXJzb3ItcG9pbnRlcidcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL2NhdGVnb3JpZXMnKX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxWaWV3TGlzdEljb24gY2xhc3NOYW1lPSdoLTcnIC8+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPScnPlF14bqjbiBsw70gZGFuaCBt4bulYzwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBwLTMgcm91bmRlZC1tZCBjdXJzb3ItcG9pbnRlcidcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3VzZXJzJyl9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8VXNlcnNJY29uIGNsYXNzTmFtZT0naC03JyAvPlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nJz5RdeG6o24gbMO9IFVzZXJzPC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBteS00IHRleHQteGwgZm9udC1zZW1pYm9sZCc+XHJcblx0XHRcdFx0XHREYW5oIHPDoWNoIG5nxrDhu51pIGTDuW5nICh7cmVzdWx0fSB1c2VycylcclxuXHRcdFx0XHQ8L2g0PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdvdmVyZmxvdy14LWF1dG8gc2Nyb2xsYmFyLWhpZGUgbXgtMic+XHJcblx0XHRcdFx0XHQ8UHJvZHVjdFRhYmxlIGNvbHVtbnM9e2NvbHVtbnN9IGRhdGE9e3VzZXJzfSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxQYWdpbmF0aW9uIHJlc3VsdD17cmVzdWx0fSAvPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcnM7XHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwiSGVhZCIsImF4aW9zIiwiRGF0YUNvbnRleHQiLCJQcm9kdWN0VGFibGUiLCJ1c2VSb3V0ZXIiLCJQYWdpbmF0aW9uIiwiSGVhZGVyIiwiVXNlcnMiLCJyb3V0ZXIiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYXV0aCIsInRva2VuIiwidXNlcnMiLCJzZXRVc2VycyIsInJlc3VsdCIsInNldFJlc3VsdCIsInBhZ2UiLCJxdWVyeSIsImxpbWl0IiwiZ2V0VXNlcnMiLCJ0eXBlIiwicGF5bG9hZCIsImxvYWRpbmciLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZXJyIiwicHVzaCIsIm1hcCIsInVzZXIiLCJjcmVhdGVkQXQiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJjb2x1bW5zIiwiYWNjZXNzb3IiLCJsZW5ndGgiLCJyb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==