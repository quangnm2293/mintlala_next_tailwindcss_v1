"use strict";
self["webpackHotUpdate_N_E"]("pages/categories",{

/***/ "./components/ModalUser.js":
/*!*********************************!*\
  !*** ./components/ModalUser.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/GlobalState */ "./store/GlobalState.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "E:\\Works\\VSCode\\NextJS\\next-website-mintlala\\components\\ModalUser.js",
    _s = $RefreshSig$();






function Modal() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_store_GlobalState__WEBPACK_IMPORTED_MODULE_6__.DataContext),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var modal = state.modal;

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = (0,E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      return E_Works_VSCode_NextJS_next_website_mintlala_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(modal.role !== 'admin')) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", dispatch({
                type: 'NOTIFY',
                payload: {
                  error: 'Bạn không đủ quyền để làm việc này'
                }
              }));

            case 2:
              dispatch({
                type: 'NOTIFY',
                payload: {
                  loading: true
                }
              });
              _context.t0 = modal.type;
              _context.next = _context.t0 === 'USER' ? 6 : _context.t0 === 'PRODUCT' ? 9 : _context.t0 === 'CATEGORY' ? 12 : 23;
              break;

            case 6:
              _context.next = 8;
              return axios__WEBPACK_IMPORTED_MODULE_3___default().delete("/api/user/".concat(modal.id), {
                headers: {
                  Authorization: modal.token
                }
              }).then(function (res) {
                if (res.data.err) return dispatch({
                  type: 'NOTIFY',
                  payload: {}
                });
                router.back();
                dispatch({
                  type: 'NOTIFY',
                  payload: {}
                });
              });

            case 8:
              return _context.abrupt("break", 24);

            case 9:
              _context.next = 11;
              return axios__WEBPACK_IMPORTED_MODULE_3___default().delete("/api/product/".concat(modal.id), {
                headers: {
                  Authorization: modal.token
                }
              }).then(function (res) {
                if (res.data.err) return dispatch({
                  type: 'NOTIFY',
                  payload: {}
                });
                dispatch({
                  type: 'NOTIFY',
                  payload: {}
                });
                var cartLocal = JSON.parse(localStorage.getItem('cart_mintlala'));
                cartLocal.map(function (item, index) {
                  if (item._id === modal.id) {
                    cartLocal.splice(index, 1);
                  }
                });
                localStorage.setItem('cart_mintlala', JSON.stringify(cartLocal));
              });

            case 11:
              return _context.abrupt("break", 24);

            case 12:
              _context.next = 14;
              return axios__WEBPACK_IMPORTED_MODULE_3___default().delete("/api/categories/".concat(modal.id), {
                headers: {
                  Authorization: modal.token
                }
              }).then(function (res) {
                if (res.data.err) return dispatch({
                  type: 'NOTIFY',
                  payload: {
                    error: res.data.err
                  }
                });
                dispatch({
                  type: 'NOTIFY',
                  payload: {}
                });
              });

            case 14:
              _context.prev = 14;
              _context.next = 17;
              return axios__WEBPACK_IMPORTED_MODULE_3___default().get('/api/categories').then(function (res) {
                if (res.data.err) {
                  return dispatch({
                    type: 'NOTIFY',
                    payload: {}
                  });
                }

                dispatch({
                  type: 'ADD_CATEGORIES',
                  payload: res.data.categories
                });
              });

            case 17:
              _context.next = 22;
              break;

            case 19:
              _context.prev = 19;
              _context.t1 = _context["catch"](14);
              dispatch({
                type: 'NOTIFY',
                payload: {}
              });

            case 22:
              return _context.abrupt("break", 24);

            case 23:
              return _context.abrupt("return");

            case 24:
              e.target.closest('#modalUser').classList.add('hidden');
              dispatch({
                type: 'ADD_MODAL',
                payload: {}
              });

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[14, 19]]);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    if (Object.keys(modal).length > 0) {
      var modal1 = document.getElementById('modalUser');
      modal1.classList.remove('hidden');
    }
  }, [modal]);

  var handleCancel = function handleCancel(e) {
    e.target.closest('#modalUser').classList.add('hidden');
    dispatch({
      type: 'ADD_MODAL',
      payload: {}
    });
  };

  if (true) {
    var modalUserEl = document.getElementById('modalUser');
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "hidden fixed z-[100] top-0 left-0 right-0 bottom-0 mx-auto overflow-auto bg-rgba\r shadow-lg rounded-t-md",
    id: "modalUser",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex justify-center items-center h-full",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "max-w-md max-auto animate-scale-1s",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex justify-between items-center bg-red-300 px-5 py-2 rounded-t-md",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
            className: "text-capitalize text-red-700 font-bold tracking-wider",
            id: "exampleModalLabel",
            children: "Warning!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "text-3xl hover:text-red-500",
              onClick: handleCancel,
              children: "\xD7"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "p-5 bg-blue-100",
          children: ["B\u1EA1n ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a", ' ', modal.type === 'USER' ? 'tài khoản' : modal.type === 'PRODUCT' ? 'sản phẩm' : 'danh mục', ' ', "n\xE0y?"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex space-x-3 p-5 bg-blue-100 rounded-b-md",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "button",
            className: "button from-red-500 to-red-300",
            "data-dismiss": "modal",
            onClick: handleSubmit,
            children: "X\xF3a"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "button",
            className: "button from-green-500 to-green-200",
            onClick: handleCancel,
            children: "H\u1EE7y"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 3
  }, this);
}

_s(Modal, "YeWD8oBgu78bu90vh1ZETWIKJjk=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = Modal;
/* harmony default export */ __webpack_exports__["default"] = (Modal);

var _c;

$RefreshReg$(_c, "Modal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2F0ZWdvcmllcy5jMDk5YTFiNWE5N2YzMTZhMmU5Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNNLEtBQVQsR0FBaUI7QUFBQTs7QUFDaEIsTUFBTUMsTUFBTSxHQUFHTixzREFBUyxFQUF4Qjs7QUFEZ0Isb0JBRVlFLGlEQUFVLENBQUNFLDJEQUFELENBRnRCO0FBQUEsTUFFUkcsS0FGUSxlQUVSQSxLQUZRO0FBQUEsTUFFREMsUUFGQyxlQUVEQSxRQUZDOztBQUFBLE1BR1JDLEtBSFEsR0FHRUYsS0FIRixDQUdSRSxLQUhROztBQUtoQixNQUFNQyxZQUFZO0FBQUEsNlVBQUcsaUJBQU1DLENBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNoQkYsS0FBSyxDQUFDRyxJQUFOLEtBQWUsT0FEQztBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQ0FFWkosUUFBUSxDQUFDO0FBQUVLLGdCQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkMsZ0JBQUFBLE9BQU8sRUFBRTtBQUFFQyxrQkFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBM0IsZUFBRCxDQUZJOztBQUFBO0FBSXBCUCxjQUFBQSxRQUFRLENBQUM7QUFBRUssZ0JBQUFBLElBQUksRUFBRSxRQUFSO0FBQWtCQyxnQkFBQUEsT0FBTyxFQUFFO0FBQUVFLGtCQUFBQSxPQUFPLEVBQUU7QUFBWDtBQUEzQixlQUFELENBQVI7QUFKb0IsNEJBTVpQLEtBQUssQ0FBQ0ksSUFOTTtBQUFBLDhDQU9kLE1BUGMsdUJBb0JkLFNBcEJjLHVCQXVDZCxVQXZDYztBQUFBOztBQUFBO0FBQUE7QUFBQSxxQkFRWmQsbURBQUEscUJBQ2dCVSxLQUFLLENBQUNRLEVBRHRCLEdBQzRCO0FBQUVDLGdCQUFBQSxPQUFPLEVBQUU7QUFBRUMsa0JBQUFBLGFBQWEsRUFBRVYsS0FBSyxDQUFDVztB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RUFBRUgsWUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQVNDO0FBQ0MsZ0JBQUksRUFBQyxRQUROO0FBRUMscUJBQVMsRUFBQyxvQ0FGWDtBQUdDLG1CQUFPLEVBQUV5QyxZQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQW1EQTs7R0FsSlE5QztVQUNPTDs7O0tBRFBLO0FBb0pULCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTW9kYWxVc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi9zdG9yZS9HbG9iYWxTdGF0ZSc7XHJcblxyXG5mdW5jdGlvbiBNb2RhbCgpIHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcblx0Y29uc3QgeyBtb2RhbCB9ID0gc3RhdGU7XHJcblxyXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xyXG5cdFx0aWYgKG1vZGFsLnJvbGUgIT09ICdhZG1pbicpXHJcblx0XHRcdHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGVycm9yOiAnQuG6oW4ga2jDtG5nIMSR4bunIHF1eeG7gW4gxJHhu4MgbMOgbSB2aeG7h2MgbsOgeScgfSB9KTtcclxuXHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuXHJcblx0XHRzd2l0Y2ggKG1vZGFsLnR5cGUpIHtcclxuXHRcdFx0Y2FzZSAnVVNFUic6XHJcblx0XHRcdFx0YXdhaXQgYXhpb3NcclxuXHRcdFx0XHRcdC5kZWxldGUoYC9hcGkvdXNlci8ke21vZGFsLmlkfWAsIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBtb2RhbC50b2tlbiB9IH0pXHJcblx0XHRcdFx0XHQudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmRhdGEuZXJyKSByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge30gfSk7XHJcblxyXG5cdFx0XHRcdFx0XHRyb3V0ZXIuYmFjaygpO1xyXG5cclxuXHRcdFx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge30gfSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdQUk9EVUNUJzpcclxuXHRcdFx0XHRhd2FpdCBheGlvc1xyXG5cdFx0XHRcdFx0LmRlbGV0ZShgL2FwaS9wcm9kdWN0LyR7bW9kYWwuaWR9YCwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IG1vZGFsLnRva2VuIH0gfSlcclxuXHRcdFx0XHRcdC50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5lcnIpIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHJcblx0XHRcdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyIGNhcnRMb2NhbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnRfbWludGxhbGEnKSk7XHJcblx0XHRcdFx0XHRcdGNhcnRMb2NhbC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGl0ZW0uX2lkID09PSBtb2RhbC5pZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FydExvY2FsLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnRfbWludGxhbGEnLCBKU09OLnN0cmluZ2lmeShjYXJ0TG9jYWwpKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ0NBVEVHT1JZJzpcclxuXHRcdFx0XHRhd2FpdCBheGlvc1xyXG5cdFx0XHRcdFx0LmRlbGV0ZShgL2FwaS9jYXRlZ29yaWVzLyR7bW9kYWwuaWR9YCwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IG1vZGFsLnRva2VuIH0gfSlcclxuXHRcdFx0XHRcdC50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5lcnIpXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgZXJyb3I6IHJlcy5kYXRhLmVyciB9IH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge30gfSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdGF3YWl0IGF4aW9zLmdldCgnL2FwaS9jYXRlZ29yaWVzJykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmRhdGEuZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdFx0XHRcdFx0dHlwZTogJ0FERF9DQVRFR09SSUVTJyxcclxuXHRcdFx0XHRcdFx0XHRwYXlsb2FkOiByZXMuZGF0YS5jYXRlZ29yaWVzLFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge30gfSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGUudGFyZ2V0LmNsb3Nlc3QoJyNtb2RhbFVzZXInKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuXHRcdGRpc3BhdGNoKHsgdHlwZTogJ0FERF9NT0RBTCcsIHBheWxvYWQ6IHt9IH0pO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAoT2JqZWN0LmtleXMobW9kYWwpLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0Y29uc3QgbW9kYWwxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsVXNlcicpO1xyXG5cdFx0XHRtb2RhbDEuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcblx0XHR9XHJcblx0fSwgW21vZGFsXSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNhbmNlbCA9IGUgPT4ge1xyXG5cdFx0ZS50YXJnZXQuY2xvc2VzdCgnI21vZGFsVXNlcicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiAnQUREX01PREFMJywgcGF5bG9hZDoge30gfSk7XHJcblx0fTtcclxuXHJcblx0aWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG5cdFx0Y29uc3QgbW9kYWxVc2VyRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxVc2VyJyk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9J2hpZGRlbiBmaXhlZCB6LVsxMDBdIHRvcC0wIGxlZnQtMCByaWdodC0wIGJvdHRvbS0wIG14LWF1dG8gb3ZlcmZsb3ctYXV0byBiZy1yZ2JhXHJcblx0XHRcdCBzaGFkb3ctbGcgcm91bmRlZC10LW1kJ1xyXG5cdFx0XHRpZD0nbW9kYWxVc2VyJ1xyXG5cdFx0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1mdWxsJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWF4LXctbWQgbWF4LWF1dG8gYW5pbWF0ZS1zY2FsZS0xcyc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGJnLXJlZC0zMDAgcHgtNSBweS0yIHJvdW5kZWQtdC1tZCc+XHJcblx0XHRcdFx0XHRcdDxoNVxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ndGV4dC1jYXBpdGFsaXplIHRleHQtcmVkLTcwMCBmb250LWJvbGQgdHJhY2tpbmctd2lkZXInXHJcblx0XHRcdFx0XHRcdFx0aWQ9J2V4YW1wbGVNb2RhbExhYmVsJ1xyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0V2FybmluZyFcclxuXHRcdFx0XHRcdFx0PC9oNT5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3RleHQtM3hsIGhvdmVyOnRleHQtcmVkLTUwMCcgb25DbGljaz17aGFuZGxlQ2FuY2VsfT5cclxuXHRcdFx0XHRcdFx0XHRcdCZ0aW1lcztcclxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncC01IGJnLWJsdWUtMTAwJz5cclxuXHRcdFx0XHRcdFx0QuG6oW4gY2jhuq9jIGNo4bqvbiBtdeG7kW4geMOzYXsnICd9XHJcblx0XHRcdFx0XHRcdHttb2RhbC50eXBlID09PSAnVVNFUidcclxuXHRcdFx0XHRcdFx0XHQ/ICd0w6BpIGtob+G6o24nXHJcblx0XHRcdFx0XHRcdFx0OiBtb2RhbC50eXBlID09PSAnUFJPRFVDVCdcclxuXHRcdFx0XHRcdFx0XHQ/ICdz4bqjbiBwaOG6qW0nXHJcblx0XHRcdFx0XHRcdFx0OiAnZGFuaCBt4bulYyd9eycgJ31cclxuXHRcdFx0XHRcdFx0bsOgeT9cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggc3BhY2UteC0zIHAtNSBiZy1ibHVlLTEwMCByb3VuZGVkLWItbWQnPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYnV0dG9uIGZyb20tcmVkLTUwMCB0by1yZWQtMzAwJ1xyXG5cdFx0XHRcdFx0XHRcdGRhdGEtZGlzbWlzcz0nbW9kYWwnXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlU3VibWl0fVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0WMOzYVxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9J2J1dHRvbidcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2J1dHRvbiBmcm9tLWdyZWVuLTUwMCB0by1ncmVlbi0yMDAnXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlQ2FuY2VsfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0SOG7p3lcclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiRGF0YUNvbnRleHQiLCJNb2RhbCIsInJvdXRlciIsInN0YXRlIiwiZGlzcGF0Y2giLCJtb2RhbCIsImhhbmRsZVN1Ym1pdCIsImUiLCJyb2xlIiwidHlwZSIsInBheWxvYWQiLCJlcnJvciIsImxvYWRpbmciLCJpZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJ0aGVuIiwicmVzIiwiZGF0YSIsImVyciIsImJhY2siLCJjYXJ0TG9jYWwiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibWFwIiwiaXRlbSIsImluZGV4IiwiX2lkIiwic3BsaWNlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImdldCIsImNhdGVnb3JpZXMiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiY2xhc3NMaXN0IiwiYWRkIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIm1vZGFsMSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmUiLCJoYW5kbGVDYW5jZWwiLCJtb2RhbFVzZXJFbCJdLCJzb3VyY2VSb290IjoiIn0=