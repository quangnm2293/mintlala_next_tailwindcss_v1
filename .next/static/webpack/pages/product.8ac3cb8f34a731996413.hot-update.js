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
            lineNumber: 115,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "text-3xl hover:text-red-500",
              onClick: handleCancel,
              children: "\xD7"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "p-5 bg-blue-100",
          children: ["B\u1EA1n ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a", ' ', modal.type === 'USER' ? 'tài khoản' : modal.type === 'PRODUCT' ? 'vĩnh viễn sản phẩm' : 'danh mục', ' ', "n\xE0y?"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 127,
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
            lineNumber: 137,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "button",
            className: "button from-green-500 to-green-200",
            onClick: handleCancel,
            children: "H\u1EE7y"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 107,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC44YWMzY2I4ZjM0YTczMTk5NjQxMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNNLEtBQVQsR0FBaUI7QUFBQTs7QUFDaEIsTUFBTUMsTUFBTSxHQUFHTixzREFBUyxFQUF4Qjs7QUFEZ0Isb0JBRVlFLGlEQUFVLENBQUNFLDJEQUFELENBRnRCO0FBQUEsTUFFUkcsS0FGUSxlQUVSQSxLQUZRO0FBQUEsTUFFREMsUUFGQyxlQUVEQSxRQUZDOztBQUFBLE1BR1JDLEtBSFEsR0FHRUYsS0FIRixDQUdSRSxLQUhROztBQUtoQixNQUFNQyxZQUFZO0FBQUEsNlVBQUcsaUJBQU1DLENBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNoQkYsS0FBSyxDQUFDRyxJQUFOLEtBQWUsT0FEQztBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQ0FFWkosUUFBUSxDQUFDO0FBQUVLLGdCQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkMsZ0JBQUFBLE9BQU8sRUFBRTtBQUFFQyxrQkFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBM0IsZUFBRCxDQUZJOztBQUFBO0FBSXBCUCxjQUFBQSxRQUFRLENBQUM7QUFBRUssZ0JBQUFBLElBQUksRUFBRSxRQUFSO0FBQWtCQyxnQkFBQUEsT0FBTyxFQUFFO0FBQUVFLGtCQUFBQSxPQUFPLEVBQUU7QUFBWDtBQUEzQixlQUFELENBQVI7QUFKb0IsNEJBTVpQLEtBQUssQ0FBQ0ksSUFOTTtBQUFBLDhDQU9kLE1BUGMsdUJBb0JkLFNBcEJjLHVCQXVDZCxVQXZDYztBQUFBOztBQUFBO0FBQUE7QUFBQSxxQkFRWmQsbURBQUEscUJBQ2dCVSxLQUFLLENBQUNRLEVBRHRCLEdBQzRCO0FBQUVDLGdCQUFBQSxPQUFPLEVBQUU7QUFBRUMsa0JBQUFBLGFBQWEsRUFBRVYsS0FBSyxDQUFDVztBQUF2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U0M7QUFDQyxnQkFBSSxFQUFDLFFBRE47QUFFQyxxQkFBUyxFQUFDLG9DQUZYO0FBR0MsbUJBQU8sRUFBRTBDLFlBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXZCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBbURBOztHQXZKUS9DO1VBQ09MOzs7S0FEUEs7QUF5SlQsK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbFVzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uL3N0b3JlL0dsb2JhbFN0YXRlJztcclxuXHJcbmZ1bmN0aW9uIE1vZGFsKCkge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuXHRjb25zdCB7IG1vZGFsIH0gPSBzdGF0ZTtcclxuXHJcblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgZSA9PiB7XHJcblx0XHRpZiAobW9kYWwucm9sZSAhPT0gJ2FkbWluJylcclxuXHRcdFx0cmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgZXJyb3I6ICdC4bqhbiBraMO0bmcgxJHhu6cgcXV54buBbiDEkeG7gyBsw6BtIHZp4buHYyBuw6B5JyB9IH0pO1xyXG5cclxuXHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgbG9hZGluZzogdHJ1ZSB9IH0pO1xyXG5cclxuXHRcdHN3aXRjaCAobW9kYWwudHlwZSkge1xyXG5cdFx0XHRjYXNlICdVU0VSJzpcclxuXHRcdFx0XHRhd2FpdCBheGlvc1xyXG5cdFx0XHRcdFx0LmRlbGV0ZShgL2FwaS91c2VyLyR7bW9kYWwuaWR9YCwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IG1vZGFsLnRva2VuIH0gfSlcclxuXHRcdFx0XHRcdC50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5lcnIpIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHJcblx0XHRcdFx0XHRcdHJvdXRlci5iYWNrKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ1BST0RVQ1QnOlxyXG5cdFx0XHRcdGF3YWl0IGF4aW9zXHJcblx0XHRcdFx0XHQucG9zdChgL2FwaS9wcm9kdWN0L2hhcmREZWxldGVgLCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogbW9kYWwudG9rZW4gfSB9KVxyXG5cdFx0XHRcdFx0LnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmVycikgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge30gfSk7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgY2FydExvY2FsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydF9taW50bGFsYScpKTtcclxuXHRcdFx0XHRcdFx0Y2FydExvY2FsLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoaXRlbS5faWQgPT09IG1vZGFsLmlkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXJ0TG9jYWwuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydF9taW50bGFsYScsIEpTT04uc3RyaW5naWZ5KGNhcnRMb2NhbCkpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnQ0FURUdPUlknOlxyXG5cdFx0XHRcdGF3YWl0IGF4aW9zXHJcblx0XHRcdFx0XHQuZGVsZXRlKGAvYXBpL2NhdGVnb3JpZXMvJHttb2RhbC5pZH1gLCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogbW9kYWwudG9rZW4gfSB9KVxyXG5cdFx0XHRcdFx0LnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmVycilcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBlcnJvcjogcmVzLmRhdGEuZXJyIH0gfSk7XHJcblxyXG5cdFx0XHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0YXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2NhdGVnb3JpZXMnKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5lcnIpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge30gfSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnQUREX0NBVEVHT1JJRVMnLFxyXG5cdFx0XHRcdFx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLmNhdGVnb3JpZXMsXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0ZS50YXJnZXQuY2xvc2VzdCgnI21vZGFsVXNlcicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiAnQUREX01PREFMJywgcGF5bG9hZDoge30gfSk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmIChPYmplY3Qua2V5cyhtb2RhbCkubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRjb25zdCBtb2RhbDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxVc2VyJyk7XHJcblx0XHRcdG1vZGFsMS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuXHRcdH1cclxuXHR9LCBbbW9kYWxdKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2FuY2VsID0gZSA9PiB7XHJcblx0XHRlLnRhcmdldC5jbG9zZXN0KCcjbW9kYWxVc2VyJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6ICdBRERfTU9EQUwnLCBwYXlsb2FkOiB7fSB9KTtcclxuXHR9O1xyXG5cclxuXHQvLyBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcblx0Ly8gXHR3aW5kb3cub25jbGljayA9IGUgPT4ge1xyXG5cdC8vIFx0XHRjb25zdCBtb2RhbFVzZXJFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbFVzZXInKTtcclxuXHQvLyBcdFx0aWYgKGUudGFyZ2V0ID09PSBtb2RhbFVzZXJFbCkge1xyXG5cdC8vIFx0XHRcdG1vZGFsVXNlckVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cdC8vIFx0XHR9XHJcblx0Ly8gXHR9O1xyXG5cdC8vIH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPSdoaWRkZW4gZml4ZWQgei1bMTAwXSB0b3AtMCBsZWZ0LTAgcmlnaHQtMCBib3R0b20tMCBteC1hdXRvIG92ZXJmbG93LWF1dG8gYmctcmdiYVxyXG5cdFx0XHQgc2hhZG93LWxnIHJvdW5kZWQtdC1tZCdcclxuXHRcdFx0aWQ9J21vZGFsVXNlcidcclxuXHRcdD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtZnVsbCc+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21heC13LW1kIG1heC1hdXRvIGFuaW1hdGUtc2NhbGUtMXMnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBiZy1yZWQtMzAwIHB4LTUgcHktMiByb3VuZGVkLXQtbWQnPlxyXG5cdFx0XHRcdFx0XHQ8aDVcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3RleHQtY2FwaXRhbGl6ZSB0ZXh0LXJlZC03MDAgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVyJ1xyXG5cdFx0XHRcdFx0XHRcdGlkPSdleGFtcGxlTW9kYWxMYWJlbCdcclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFdhcm5pbmchXHJcblx0XHRcdFx0XHRcdDwvaDU+XHJcblx0XHRcdFx0XHRcdDxidXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSd0ZXh0LTN4bCBob3Zlcjp0ZXh0LXJlZC01MDAnIG9uQ2xpY2s9e2hhbmRsZUNhbmNlbH0+XHJcblx0XHRcdFx0XHRcdFx0XHQmdGltZXM7XHJcblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3AtNSBiZy1ibHVlLTEwMCc+XHJcblx0XHRcdFx0XHRcdELhuqFuIGNo4bqvYyBjaOG6r24gbXXhu5FuIHjDs2F7JyAnfVxyXG5cdFx0XHRcdFx0XHR7bW9kYWwudHlwZSA9PT0gJ1VTRVInXHJcblx0XHRcdFx0XHRcdFx0PyAndMOgaSBraG/huqNuJ1xyXG5cdFx0XHRcdFx0XHRcdDogbW9kYWwudHlwZSA9PT0gJ1BST0RVQ1QnXHJcblx0XHRcdFx0XHRcdFx0PyAndsSpbmggdmnhu4VuIHPhuqNuIHBo4bqpbSdcclxuXHRcdFx0XHRcdFx0XHQ6ICdkYW5oIG3hu6VjJ317JyAnfVxyXG5cdFx0XHRcdFx0XHRuw6B5P1xyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBzcGFjZS14LTMgcC01IGJnLWJsdWUtMTAwIHJvdW5kZWQtYi1tZCc+XHJcblx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHR0eXBlPSdidXR0b24nXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdidXR0b24gZnJvbS1yZWQtNTAwIHRvLXJlZC0zMDAnXHJcblx0XHRcdFx0XHRcdFx0ZGF0YS1kaXNtaXNzPSdtb2RhbCdcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRYw7NhXHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYnV0dG9uIGZyb20tZ3JlZW4tNTAwIHRvLWdyZWVuLTIwMCdcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVDYW5jZWx9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRI4buneVxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJEYXRhQ29udGV4dCIsIk1vZGFsIiwicm91dGVyIiwic3RhdGUiLCJkaXNwYXRjaCIsIm1vZGFsIiwiaGFuZGxlU3VibWl0IiwiZSIsInJvbGUiLCJ0eXBlIiwicGF5bG9hZCIsImVycm9yIiwibG9hZGluZyIsImlkIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0b2tlbiIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZXJyIiwiYmFjayIsInBvc3QiLCJjYXJ0TG9jYWwiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibWFwIiwiaXRlbSIsImluZGV4IiwiX2lkIiwic3BsaWNlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImdldCIsImNhdGVnb3JpZXMiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiY2xhc3NMaXN0IiwiYWRkIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIm1vZGFsMSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmUiLCJoYW5kbGVDYW5jZWwiXSwic291cmNlUm9vdCI6IiJ9