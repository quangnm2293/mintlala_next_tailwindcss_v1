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
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
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
        lineNumber: 69,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tailwind_Header__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "grid grid-cols-6",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "bg-green-100 col-span-6 lg:col-span-2 xl:col-span-1 p-10 flex flex-col font-semibold min-w-[300px]",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex items-center space-x-2 bg-green-400 p-3 rounded-md",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.UserCircleIcon, {
            className: "h-7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "",
            children: "Th\xF4ng tin t\xE0i kho\u1EA3n"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex items-center space-x-2 p-3 cursor-pointer",
          onClick: function onClick() {
            return router.push('/profile/order-history');
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.DocumentSearchIcon, {
            className: "h-7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "",
            children: "L\u1ECBch s\u1EED \u0111\u1EB7t h\xE0ng"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 6
        }, this), auth.user && auth.user.role === 'admin' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex items-center space-x-2 p-3 rounded-md cursor-pointer",
            onClick: function onClick() {
              return router.push('/product');
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.DatabaseIcon, {
              className: "h-7"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "",
              children: "Qu\u1EA3n l\xFD s\u1EA3n ph\u1EA9m"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex items-center space-x-2 p-3 rounded-md cursor-pointer",
            onClick: function onClick() {
              return router.push('/categories');
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.ViewListIcon, {
              className: "h-7"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "",
              children: "Qu\u1EA3n l\xFD danh m\u1EE5c"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex items-center space-x-2 p-3 rounded-md cursor-pointer",
            onClick: function onClick() {
              return router.push('/users');
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.UsersIcon, {
              className: "h-7"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "",
              children: "Qu\u1EA3n l\xFD Users"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-span-6 lg:col-span-4 xl:col-span-5 flex justify-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          className: "text-center my-4 text-xl font-semibold",
          children: ["Danh s\xE1ch ng\u01B0\u1EDDi d\xF9ng (", result, " users)"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "overflow-x-auto scrollbar-hide mx-2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductTable__WEBPACK_IMPORTED_MODULE_7__.default, {
            columns: columns,
            data: users
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_9__.default, {
      result: result
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMuZmEyOGMwMGYzOWNhZDVjNDU4MTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTaUIsS0FBVCxHQUFpQjtBQUFBOztBQUNoQixNQUFNQyxNQUFNLEdBQUdULHNEQUFTLEVBQXhCOztBQURnQixvQkFFWVIsaURBQVUsQ0FBQ00sMkRBQUQsQ0FGdEI7QUFBQSxNQUVSWSxLQUZRLGVBRVJBLEtBRlE7QUFBQSxNQUVEQyxRQUZDLGVBRURBLFFBRkM7O0FBQUEsTUFHUkMsSUFIUSxHQUdDRixLQUhELENBR1JFLElBSFE7QUFBQSxNQUlSQyxLQUpRLEdBSUVELElBSkYsQ0FJUkMsS0FKUTs7QUFBQSxrQkFNVWxCLCtDQUFRLENBQUMsRUFBRCxDQU5sQjtBQUFBLE1BTVRtQixLQU5TO0FBQUEsTUFNRkMsUUFORTs7QUFBQSxtQkFPWXBCLCtDQUFRLENBQUMsRUFBRCxDQVBwQjtBQUFBLE1BT1RxQixNQVBTO0FBQUEsTUFPREMsU0FQQzs7QUFTaEIsTUFBTUMsSUFBSSxHQUFHVCxNQUFNLENBQUNVLEtBQVAsQ0FBYUQsSUFBYixJQUFxQixDQUFsQztBQUNBLE1BQU1FLEtBQUssR0FBR1gsTUFBTSxDQUFDVSxLQUFQLENBQWFDLEtBQWIsSUFBc0IsRUFBcEM7QUFFQTNCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNmLFFBQU00QixRQUFRO0FBQUEsK1VBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNoQlYsZ0JBQUFBLFFBQVEsQ0FBQztBQUFFVyxrQkFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0JDLGtCQUFBQSxPQUFPLEVBQUU7QUFBRUMsb0JBQUFBLE9BQU8sRUFBRTtBQUFYO0FBQTNCLGlCQUFELENBQVI7QUFEZ0I7QUFBQSx1QkFHVjNCLGdEQUFB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cUJBQVMsRUFBQywyREFEWDtBQUVDLG1CQUFPLEVBQUU7QUFBQSxxQkFBTXZCLE1BQU0sQ0FBQ3VCLElBQVAsQ0FBWSxRQUFaLENBQU47QUFBQSxhQUZWO0FBQUEsb0NBSUMsOERBQUMsZ0VBQUQ7QUFBVyx1QkFBUyxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkQsZUFLQztBQUFHLHVCQUFTLEVBQUMsRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBaEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQTJDQztBQUFLLGlCQUFTLEVBQUMsNERBQWY7QUFBQSxnQ0FDQztBQUFJLG1CQUFTLEVBQUMsd0NBQWQ7QUFBQSwrREFDd0JoQixNQUR4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFJQztBQUFLLG1CQUFTLEVBQUMscUNBQWY7QUFBQSxpQ0FDQyw4REFBQyw2REFBRDtBQUFjLG1CQUFPLEVBQUVzQixPQUF2QjtBQUFnQyxnQkFBSSxFQUFFeEI7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0NEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBELGVBNERDLDhEQUFDLDJEQUFEO0FBQVksWUFBTSxFQUFFRTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBZ0VBOztHQXRIUVI7VUFDT1I7OztLQURQUTtBQXdIVCwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2Vycy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnLi4vLi4vc3RvcmUvR2xvYmFsU3RhdGUnO1xyXG5pbXBvcnQgUHJvZHVjdFRhYmxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdFRhYmxlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGFpbHdpbmQvSGVhZGVyJztcclxuaW1wb3J0IHsgRGF0YWJhc2VJY29uLCBEb2N1bWVudFNlYXJjaEljb24sIFVzZXJDaXJjbGVJY29uLCBVc2Vyc0ljb24sIFZpZXdMaXN0SWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZSc7XHJcblxyXG5mdW5jdGlvbiBVc2VycygpIHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcblx0Y29uc3QgeyBhdXRoIH0gPSBzdGF0ZTtcclxuXHRjb25zdCB7IHRva2VuIH0gPSBhdXRoO1xyXG5cclxuXHRjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoMTIpO1xyXG5cclxuXHRjb25zdCBwYWdlID0gcm91dGVyLnF1ZXJ5LnBhZ2UgfHwgMTtcclxuXHRjb25zdCBsaW1pdCA9IHJvdXRlci5xdWVyeS5saW1pdCB8fCAxMjtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IGdldFVzZXJzID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuXHJcblx0XHRcdGF3YWl0IGF4aW9zXHJcblx0XHRcdFx0LmdldChgL2FwaS91c2VyP3BhZ2U9JHtwYWdlfSZsaW1pdD0ke2xpbWl0fWAsIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9IH0pXHJcblx0XHRcdFx0LnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5lcnIpIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge30gfSk7XHJcblx0XHRcdFx0XHRcdHJldHVybiByb3V0ZXIucHVzaCgnL25vdEhhdmVQZXJtaXNzaW9uJyk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgZGF0YSA9IHJlcy5kYXRhLnVzZXJzLm1hcCh1c2VyID0+IHtcclxuXHRcdFx0XHRcdFx0dXNlci5jcmVhdGVkQXQgPSBuZXcgRGF0ZSh1c2VyLmNyZWF0ZWRBdCkudG9Mb2NhbGVTdHJpbmcoKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHVzZXI7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRzZXRVc2VycyhkYXRhKTtcclxuXHRcdFx0XHRcdHNldFJlc3VsdChyZXMuZGF0YS5yZXN1bHQpO1xyXG5cclxuXHRcdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHRcdGlmICh0b2tlbikgZ2V0VXNlcnMoKTtcclxuXHR9LCBbYXV0aC51c2VyLCByb3V0ZXIucXVlcnkucGFnZSwgdG9rZW5dKTtcclxuXHJcblx0Y29uc3QgY29sdW1ucyA9IHVzZU1lbW8oXHJcblx0XHQoKSA9PiBbXHJcblx0XHRcdHsgSGVhZGVyOiAnSUQnLCBhY2Nlc3NvcjogJ19pZCcgfSxcclxuXHRcdFx0eyBIZWFkZXI6ICdUw6puIG5nxrDhu51pIGTDuW5nJywgYWNjZXNzb3I6ICduYW1lJyB9LFxyXG5cdFx0XHR7IEhlYWRlcjogJ0VtYWlsJywgYWNjZXNzb3I6ICdlbWFpbCcgfSxcclxuXHRcdFx0eyBIZWFkZXI6ICdBZG1pbicsIGFjY2Vzc29yOiAncm9sZScgfSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdEhlYWRlcjogJ05nw6B5IHThuqFvJyxcclxuXHRcdFx0XHRhY2Nlc3NvcjogJ2NyZWF0ZWRBdCcsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdFx0W11cclxuXHQpO1xyXG5cclxuXHRpZiAodXNlcnMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdDx0aXRsZT5RdeG6o24gbMO9IG5nxrDhu51pIGTDuW5nPC90aXRsZT5cclxuXHRcdFx0PC9IZWFkPlxyXG5cclxuXHRcdFx0PEhlYWRlciAvPlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTYnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdiZy1ncmVlbi0xMDAgY29sLXNwYW4tNiBsZzpjb2wtc3Bhbi0yIHhsOmNvbC1zcGFuLTEgcC0xMCBmbGV4IGZsZXgtY29sIGZvbnQtc2VtaWJvbGQgbWluLXctWzMwMHB4XSc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIGJnLWdyZWVuLTQwMCBwLTMgcm91bmRlZC1tZCc+XHJcblx0XHRcdFx0XHRcdDxVc2VyQ2lyY2xlSWNvbiBjbGFzc05hbWU9J2gtNycgLz5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPScnPlRow7RuZyB0aW4gdMOgaSBraG/huqNuPC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBwLTMgY3Vyc29yLXBvaW50ZXInXHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvcHJvZmlsZS9vcmRlci1oaXN0b3J5Jyl9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxEb2N1bWVudFNlYXJjaEljb24gY2xhc3NOYW1lPSdoLTcnIC8+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nJz5M4buLY2ggc+G7rSDEkeG6t3QgaMOgbmc8L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHR7YXV0aC51c2VyICYmIGF1dGgudXNlci5yb2xlID09PSAnYWRtaW4nICYmIChcclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBwLTMgcm91bmRlZC1tZCBjdXJzb3ItcG9pbnRlcidcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvcHJvZHVjdCcpfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdDxEYXRhYmFzZUljb24gY2xhc3NOYW1lPSdoLTcnIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9Jyc+UXXhuqNuIGzDvSBz4bqjbiBwaOG6qW08L3A+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIHAtMyByb3VuZGVkLW1kIGN1cnNvci1wb2ludGVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9jYXRlZ29yaWVzJyl9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFZpZXdMaXN0SWNvbiBjbGFzc05hbWU9J2gtNycgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nJz5RdeG6o24gbMO9IGRhbmggbeG7pWM8L3A+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgcC0zIHJvdW5kZWQtbWQgY3Vyc29yLXBvaW50ZXInXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3VzZXJzJyl9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFVzZXJzSWNvbiBjbGFzc05hbWU9J2gtNycgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nJz5RdeG6o24gbMO9IFVzZXJzPC9wPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtc3Bhbi02IGxnOmNvbC1zcGFuLTQgeGw6Y29sLXNwYW4tNSBmbGV4IGp1c3RpZnktY2VudGVyJz5cclxuXHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J3RleHQtY2VudGVyIG15LTQgdGV4dC14bCBmb250LXNlbWlib2xkJz5cclxuXHRcdFx0XHRcdFx0RGFuaCBzw6FjaCBuZ8aw4budaSBkw7luZyAoe3Jlc3VsdH0gdXNlcnMpXHJcblx0XHRcdFx0XHQ8L2g0PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J292ZXJmbG93LXgtYXV0byBzY3JvbGxiYXItaGlkZSBteC0yJz5cclxuXHRcdFx0XHRcdFx0PFByb2R1Y3RUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXt1c2Vyc30gLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxQYWdpbmF0aW9uIHJlc3VsdD17cmVzdWx0fSAvPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcnM7XHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwiSGVhZCIsImF4aW9zIiwiRGF0YUNvbnRleHQiLCJQcm9kdWN0VGFibGUiLCJ1c2VSb3V0ZXIiLCJQYWdpbmF0aW9uIiwiSGVhZGVyIiwiRGF0YWJhc2VJY29uIiwiRG9jdW1lbnRTZWFyY2hJY29uIiwiVXNlckNpcmNsZUljb24iLCJVc2Vyc0ljb24iLCJWaWV3TGlzdEljb24iLCJVc2VycyIsInJvdXRlciIsInN0YXRlIiwiZGlzcGF0Y2giLCJhdXRoIiwidG9rZW4iLCJ1c2VycyIsInNldFVzZXJzIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwicGFnZSIsInF1ZXJ5IiwibGltaXQiLCJnZXRVc2VycyIsInR5cGUiLCJwYXlsb2FkIiwibG9hZGluZyIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlcyIsImRhdGEiLCJlcnIiLCJwdXNoIiwibWFwIiwidXNlciIsImNyZWF0ZWRBdCIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImNvbHVtbnMiLCJhY2Nlc3NvciIsImxlbmd0aCIsInJvbGUiXSwic291cmNlUm9vdCI6IiJ9