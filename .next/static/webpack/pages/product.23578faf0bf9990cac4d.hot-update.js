"use strict";
self["webpackHotUpdate_N_E"]("pages/product",{

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
              return axios__WEBPACK_IMPORTED_MODULE_3___default().post("/api/product/hardDelete", {
                id: modal.id
              }, {
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
  }; // if (process.browser) {
  // 	window.onclick = e => {
  // 		const modalUserEl = document.getElementById('modalUser');
  // 		if (e.target === modalUserEl) {
  // 			modalUserEl.classList.add('hidden');
  // 		}
  // 	};
  // }


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
            lineNumber: 119,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "text-3xl hover:text-red-500",
              onClick: handleCancel,
              children: "\xD7"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "p-5 bg-blue-100",
          children: ["B\u1EA1n ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a", ' ', modal.type === 'USER' ? 'tài khoản' : modal.type === 'PRODUCT' ? 'vĩnh viễn sản phẩm' : 'danh mục', ' ', "n\xE0y?"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 131,
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
            lineNumber: 141,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "button",
            className: "button from-green-500 to-green-200",
            onClick: handleCancel,
            children: "H\u1EE7y"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 111,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC4yMzU3OGZhZjBiZjk5OTBjYWM0ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNNLEtBQVQsR0FBaUI7QUFBQTs7QUFDaEIsTUFBTUMsTUFBTSxHQUFHTixzREFBUyxFQUF4Qjs7QUFEZ0Isb0JBRVlFLGlEQUFVLENBQUNFLDJEQUFELENBRnRCO0FBQUEsTUFFUkcsS0FGUSxlQUVSQSxLQUZRO0FBQUEsTUFFREMsUUFGQyxlQUVEQSxRQUZDOztBQUFBLE1BR1JDLEtBSFEsR0FHRUYsS0FIRixDQUdSRSxLQUhROztBQUtoQixNQUFNQyxZQUFZO0FBQUEsNlVBQUcsaUJBQU1DLENBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNoQkYsS0FBSyxDQUFDRyxJQUFOLEtBQWUsT0FEQztBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQ0FFWkosUUFBUSxDQUFDO0FBQUVLLGdCQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkMsZ0JBQUFBLE9BQU8sRUFBRTtBQUFFQyxrQkFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBM0IsZUFBRCxDQUZJOztBQUFBO0FBSXBCUCxjQUFBQSxRQUFRLENBQUM7QUFBRUssZ0JBQUFBLElBQUksRUFBRSxRQUFSO0FBQWtCQyxnQkFBQUEsT0FBTyxFQUFFO0FBQUVFLGtCQUFBQSxPQUFPLEVBQUU7QUFBWDtBQUEzQixlQUFELENBQVI7QUFKb0IsNEJBTVpQLEtBQUssQ0FBQ0ksSUFOTTtBQUFBLDhDQU9kLE1BUGMsdUJBb0JkLFNBcEJjLHVCQTJDZCxVQTNDYztBQUFBOztBQUFBO0FBQUE7QUFBQSxxQkFRWmQsbURBQUEscUJBQ2dCVSxLQUFLLENBQUNRLEVBRHRCLEdBQzRCO0FBQUVDLGdCQUFBQSxPQUFPLEVBQUU7QUFBRUMsa0JBQUFBLGFBQWEsRUFBRVYsS0FBSyxDQUFDVztBQUF2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RUFBRUgsWUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQVNDO0FBQ0MsZ0JBQUksRUFBQyxRQUROO0FBRUMscUJBQVMsRUFBQyxvQ0FGWDtBQUdDLG1CQUFPLEVBQUUwQyxZQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQW1EQTs7R0EzSlEvQztVQUNPTDs7O0tBRFBLO0FBNkpULCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTW9kYWxVc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi9zdG9yZS9HbG9iYWxTdGF0ZSc7XHJcblxyXG5mdW5jdGlvbiBNb2RhbCgpIHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcblx0Y29uc3QgeyBtb2RhbCB9ID0gc3RhdGU7XHJcblxyXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xyXG5cdFx0aWYgKG1vZGFsLnJvbGUgIT09ICdhZG1pbicpXHJcblx0XHRcdHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGVycm9yOiAnQuG6oW4ga2jDtG5nIMSR4bunIHF1eeG7gW4gxJHhu4MgbMOgbSB2aeG7h2MgbsOgeScgfSB9KTtcclxuXHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuXHJcblx0XHRzd2l0Y2ggKG1vZGFsLnR5cGUpIHtcclxuXHRcdFx0Y2FzZSAnVVNFUic6XHJcblx0XHRcdFx0YXdhaXQgYXhpb3NcclxuXHRcdFx0XHRcdC5kZWxldGUoYC9hcGkvdXNlci8ke21vZGFsLmlkfWAsIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBtb2RhbC50b2tlbiB9IH0pXHJcblx0XHRcdFx0XHQudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmRhdGEuZXJyKSByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge30gfSk7XHJcblxyXG5cdFx0XHRcdFx0XHRyb3V0ZXIuYmFjaygpO1xyXG5cclxuXHRcdFx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge30gfSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdQUk9EVUNUJzpcclxuXHRcdFx0XHRhd2FpdCBheGlvc1xyXG5cdFx0XHRcdFx0LnBvc3QoXHJcblx0XHRcdFx0XHRcdGAvYXBpL3Byb2R1Y3QvaGFyZERlbGV0ZWAsXHJcblx0XHRcdFx0XHRcdHsgaWQ6IG1vZGFsLmlkIH0sXHJcblx0XHRcdFx0XHRcdHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBtb2RhbC50b2tlbiB9IH1cclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdC50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5lcnIpIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHJcblx0XHRcdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyIGNhcnRMb2NhbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnRfbWludGxhbGEnKSk7XHJcblx0XHRcdFx0XHRcdGNhcnRMb2NhbC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGl0ZW0uX2lkID09PSBtb2RhbC5pZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FydExvY2FsLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnRfbWludGxhbGEnLCBKU09OLnN0cmluZ2lmeShjYXJ0TG9jYWwpKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ0NBVEVHT1JZJzpcclxuXHRcdFx0XHRhd2FpdCBheGlvc1xyXG5cdFx0XHRcdFx0LmRlbGV0ZShgL2FwaS9jYXRlZ29yaWVzLyR7bW9kYWwuaWR9YCwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IG1vZGFsLnRva2VuIH0gfSlcclxuXHRcdFx0XHRcdC50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5lcnIpXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgZXJyb3I6IHJlcy5kYXRhLmVyciB9IH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge30gfSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdGF3YWl0IGF4aW9zLmdldCgnL2FwaS9jYXRlZ29yaWVzJykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmRhdGEuZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdFx0XHRcdFx0dHlwZTogJ0FERF9DQVRFR09SSUVTJyxcclxuXHRcdFx0XHRcdFx0XHRwYXlsb2FkOiByZXMuZGF0YS5jYXRlZ29yaWVzLFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge30gfSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGUudGFyZ2V0LmNsb3Nlc3QoJyNtb2RhbFVzZXInKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuXHRcdGRpc3BhdGNoKHsgdHlwZTogJ0FERF9NT0RBTCcsIHBheWxvYWQ6IHt9IH0pO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAoT2JqZWN0LmtleXMobW9kYWwpLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0Y29uc3QgbW9kYWwxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsVXNlcicpO1xyXG5cdFx0XHRtb2RhbDEuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcblx0XHR9XHJcblx0fSwgW21vZGFsXSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNhbmNlbCA9IGUgPT4ge1xyXG5cdFx0ZS50YXJnZXQuY2xvc2VzdCgnI21vZGFsVXNlcicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiAnQUREX01PREFMJywgcGF5bG9hZDoge30gfSk7XHJcblx0fTtcclxuXHJcblx0Ly8gaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG5cdC8vIFx0d2luZG93Lm9uY2xpY2sgPSBlID0+IHtcclxuXHQvLyBcdFx0Y29uc3QgbW9kYWxVc2VyRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxVc2VyJyk7XHJcblx0Ly8gXHRcdGlmIChlLnRhcmdldCA9PT0gbW9kYWxVc2VyRWwpIHtcclxuXHQvLyBcdFx0XHRtb2RhbFVzZXJFbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuXHQvLyBcdFx0fVxyXG5cdC8vIFx0fTtcclxuXHQvLyB9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT0naGlkZGVuIGZpeGVkIHotWzEwMF0gdG9wLTAgbGVmdC0wIHJpZ2h0LTAgYm90dG9tLTAgbXgtYXV0byBvdmVyZmxvdy1hdXRvIGJnLXJnYmFcclxuXHRcdFx0IHNoYWRvdy1sZyByb3VuZGVkLXQtbWQnXHJcblx0XHRcdGlkPSdtb2RhbFVzZXInXHJcblx0XHQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLWZ1bGwnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtYXgtdy1tZCBtYXgtYXV0byBhbmltYXRlLXNjYWxlLTFzJz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgYmctcmVkLTMwMCBweC01IHB5LTIgcm91bmRlZC10LW1kJz5cclxuXHRcdFx0XHRcdFx0PGg1XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSd0ZXh0LWNhcGl0YWxpemUgdGV4dC1yZWQtNzAwIGZvbnQtYm9sZCB0cmFja2luZy13aWRlcidcclxuXHRcdFx0XHRcdFx0XHRpZD0nZXhhbXBsZU1vZGFsTGFiZWwnXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRXYXJuaW5nIVxyXG5cdFx0XHRcdFx0XHQ8L2g1PlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ndGV4dC0zeGwgaG92ZXI6dGV4dC1yZWQtNTAwJyBvbkNsaWNrPXtoYW5kbGVDYW5jZWx9PlxyXG5cdFx0XHRcdFx0XHRcdFx0JnRpbWVzO1xyXG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwLTUgYmctYmx1ZS0xMDAnPlxyXG5cdFx0XHRcdFx0XHRC4bqhbiBjaOG6r2MgY2jhuq9uIG114buRbiB4w7NheycgJ31cclxuXHRcdFx0XHRcdFx0e21vZGFsLnR5cGUgPT09ICdVU0VSJ1xyXG5cdFx0XHRcdFx0XHRcdD8gJ3TDoGkga2hv4bqjbidcclxuXHRcdFx0XHRcdFx0XHQ6IG1vZGFsLnR5cGUgPT09ICdQUk9EVUNUJ1xyXG5cdFx0XHRcdFx0XHRcdD8gJ3bEqW5oIHZp4buFbiBz4bqjbiBwaOG6qW0nXHJcblx0XHRcdFx0XHRcdFx0OiAnZGFuaCBt4bulYyd9eycgJ31cclxuXHRcdFx0XHRcdFx0bsOgeT9cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggc3BhY2UteC0zIHAtNSBiZy1ibHVlLTEwMCByb3VuZGVkLWItbWQnPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYnV0dG9uIGZyb20tcmVkLTUwMCB0by1yZWQtMzAwJ1xyXG5cdFx0XHRcdFx0XHRcdGRhdGEtZGlzbWlzcz0nbW9kYWwnXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlU3VibWl0fVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0WMOzYVxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9J2J1dHRvbidcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2J1dHRvbiBmcm9tLWdyZWVuLTUwMCB0by1ncmVlbi0yMDAnXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlQ2FuY2VsfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0SOG7p3lcclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiRGF0YUNvbnRleHQiLCJNb2RhbCIsInJvdXRlciIsInN0YXRlIiwiZGlzcGF0Y2giLCJtb2RhbCIsImhhbmRsZVN1Ym1pdCIsImUiLCJyb2xlIiwidHlwZSIsInBheWxvYWQiLCJlcnJvciIsImxvYWRpbmciLCJpZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJ0aGVuIiwicmVzIiwiZGF0YSIsImVyciIsImJhY2siLCJwb3N0IiwiY2FydExvY2FsIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIl9pZCIsInNwbGljZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJnZXQiLCJjYXRlZ29yaWVzIiwidGFyZ2V0IiwiY2xvc2VzdCIsImNsYXNzTGlzdCIsImFkZCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJtb2RhbDEiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVtb3ZlIiwiaGFuZGxlQ2FuY2VsIl0sInNvdXJjZVJvb3QiOiIifQ==