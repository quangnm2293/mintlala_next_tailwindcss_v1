"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/tailwind/Notify.js":
/*!***************************************!*\
  !*** ./components/tailwind/Notify.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Toast */ "./components/tailwind/Toast.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\Works\\VSCode\\NextJS\\next-website-mintlala\\components\\tailwind\\Notify.js",
    _s = $RefreshSig$();


 // import Loading from '../Loading';



function Notify() {
  _s();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_GlobalState__WEBPACK_IMPORTED_MODULE_2__.DataContext),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var notify = state.notify;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [notify.loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Loading, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 23
    }, this), notify.error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Toast__WEBPACK_IMPORTED_MODULE_3__.default, {
      msg: {
        msg: notify.error,
        title: 'Error'
      },
      handleShow: function handleShow() {
        return dispatch({
          type: 'NOTIFY',
          payload: {}
        });
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }, this), notify.success && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Toast__WEBPACK_IMPORTED_MODULE_3__.default, {
      msg: {
        msg: notify.success,
        title: 'Success'
      },
      handleShow: function handleShow() {
        return dispatch({
          type: 'NOTIFY',
          payload: {}
        });
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }, this);
}

_s(Notify, "QMdo+h1+fLbTriZQ0QN6uukzyow=");

_c = Notify;
/* harmony default export */ __webpack_exports__["default"] = (Notify);

var _c;

$RefreshReg$(_c, "Notify");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40YjlhMjcxNmZlY2RlM2FlZDNhYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBOztBQUVBLFNBQVNJLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxvQkFDV0gsaURBQVUsQ0FBQ0MsMkRBQUQsQ0FEckI7QUFBQSxNQUNURyxLQURTLGVBQ1RBLEtBRFM7QUFBQSxNQUNGQyxRQURFLGVBQ0ZBLFFBREU7O0FBQUEsTUFFVEMsTUFGUyxHQUVFRixLQUZGLENBRVRFLE1BRlM7QUFHakIsc0JBQ0M7QUFBQSxlQUNFQSxNQUFNLENBQUNDLE9BQVAsaUJBQWtCLDhEQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURwQixFQUVFRCxNQUFNLENBQUNFLEtBQVAsaUJBQ0EsOERBQUMsMkNBQUQ7QUFDQyxTQUFHLEVBQUU7QUFBRUMsUUFBQUEsR0FBRyxFQUFFSCxNQUFNLENBQUNFLEtBQWQ7QUFBcUJFLFFBQUFBLEtBQUssRUFBRTtBQUE1QixPQUROO0FBRUMsZ0JBQVUsRUFBRTtBQUFBLGVBQU1MLFFBQVEsQ0FBQztBQUFFTSxVQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkMsVUFBQUEsT0FBTyxFQUFFO0FBQTNCLFNBQUQsQ0FBZDtBQUFBO0FBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLEVBUUVOLE1BQU0sQ0FBQ08sT0FBUCxpQkFDQSw4REFBQywyQ0FBRDtBQUNDLFNBQUcsRUFBRTtBQUFFSixRQUFBQSxHQUFHLEVBQUVILE1BQU0sQ0FBQ08sT0FBZDtBQUF1QkgsUUFBQUEsS0FBSyxFQUFFO0FBQTlCLE9BRE47QUFFQyxnQkFBVSxFQUFFO0FBQUEsZUFBTUwsUUFBUSxDQUFDO0FBQUVNLFVBQUFBLElBQUksRUFBRSxRQUFSO0FBQWtCQyxVQUFBQSxPQUFPLEVBQUU7QUFBM0IsU0FBRCxDQUFkO0FBQUE7QUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFpQkE7O0dBcEJRVDs7S0FBQUE7QUFzQlQsK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YWlsd2luZC9Ob3RpZnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnLi4vLi4vc3RvcmUvR2xvYmFsU3RhdGUnO1xyXG4vLyBpbXBvcnQgTG9hZGluZyBmcm9tICcuLi9Mb2FkaW5nJztcclxuaW1wb3J0IFRvYXN0IGZyb20gJy4vVG9hc3QnO1xyXG5cclxuZnVuY3Rpb24gTm90aWZ5KCkge1xyXG5cdGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuXHRjb25zdCB7IG5vdGlmeSB9ID0gc3RhdGU7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdHtub3RpZnkubG9hZGluZyAmJiA8TG9hZGluZyAvPn1cclxuXHRcdFx0e25vdGlmeS5lcnJvciAmJiAoXHJcblx0XHRcdFx0PFRvYXN0XHJcblx0XHRcdFx0XHRtc2c9e3sgbXNnOiBub3RpZnkuZXJyb3IsIHRpdGxlOiAnRXJyb3InIH19XHJcblx0XHRcdFx0XHRoYW5kbGVTaG93PXsoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQpfVxyXG5cdFx0XHR7bm90aWZ5LnN1Y2Nlc3MgJiYgKFxyXG5cdFx0XHRcdDxUb2FzdFxyXG5cdFx0XHRcdFx0bXNnPXt7IG1zZzogbm90aWZ5LnN1Y2Nlc3MsIHRpdGxlOiAnU3VjY2VzcycgfX1cclxuXHRcdFx0XHRcdGhhbmRsZVNob3c9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdCl9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RpZnk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJEYXRhQ29udGV4dCIsIlRvYXN0IiwiTm90aWZ5Iiwic3RhdGUiLCJkaXNwYXRjaCIsIm5vdGlmeSIsImxvYWRpbmciLCJlcnJvciIsIm1zZyIsInRpdGxlIiwidHlwZSIsInBheWxvYWQiLCJzdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==