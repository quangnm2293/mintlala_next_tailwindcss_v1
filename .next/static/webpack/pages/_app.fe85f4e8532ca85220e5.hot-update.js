"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Loading.js":
/*!*******************************!*\
  !*** ./components/Loading.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/GlobalState */ "./store/GlobalState.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\Works\\VSCode\\NextJS\\next-website-mintlala\\components\\Loading.js",
    _this = undefined,
    _s = $RefreshSig$();



/* eslint-disable @next/next/no-img-element */

var Loading = function Loading() {
  _s();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_GlobalState__WEBPACK_IMPORTED_MODULE_2__.DataContext),
      state = _useContext.state;

  var notify = state.notify;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "".concat(notify.loading ? '' : 'hidden', " fixed w-full h-full left-0 bottom-0 flex justify-center items-center bg-[#0008]"),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: "/images/Rolling-1s-200px1.svg",
      alt: "svg",
      className: "h-16 text-white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }, _this);
};

_s(Loading, "1KanyRZ80sTgEeQF1ogKen7i0wM=");

_c = Loading;
/* harmony default export */ __webpack_exports__["default"] = (Loading);

var _c;

$RefreshReg$(_c, "Loading");

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


/***/ }),

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
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Loading */ "./components/Loading.js");
/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Toast */ "./components/tailwind/Toast.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\Works\\VSCode\\NextJS\\next-website-mintlala\\components\\tailwind\\Notify.js",
    _s = $RefreshSig$();






function Notify() {
  _s();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_GlobalState__WEBPACK_IMPORTED_MODULE_2__.DataContext),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var notify = state.notify;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [notify.loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Loading__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 23
    }, this), notify.error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Toast__WEBPACK_IMPORTED_MODULE_4__.default, {
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
    }, this), notify.success && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Toast__WEBPACK_IMPORTED_MODULE_4__.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mZTg1ZjRlODUzMmNhODUyMjBlNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBQ0EsSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLG9CQUNIRixpREFBVSxDQUFDQywyREFBRCxDQURQO0FBQUEsTUFDYkUsS0FEYSxlQUNiQSxLQURhOztBQUFBLE1BRWJDLE1BRmEsR0FFRkQsS0FGRSxDQUViQyxNQUZhO0FBSXJCLHNCQUNDO0FBQ0MsYUFBUyxZQUNSQSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsRUFBakIsR0FBc0IsUUFEZCxxRkFEVjtBQUFBLDJCQUtDO0FBQUssU0FBRyxFQUFDLCtCQUFUO0FBQXlDLFNBQUcsRUFBQyxLQUE3QztBQUFtRCxlQUFTLEVBQUM7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQVNBLENBYkQ7O0dBQU1IOztLQUFBQTtBQWVOLCtEQUFlQSxPQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU00sTUFBVCxHQUFrQjtBQUFBOztBQUFBLG9CQUNXUixpREFBVSxDQUFDQywyREFBRCxDQURyQjtBQUFBLE1BQ1RFLEtBRFMsZUFDVEEsS0FEUztBQUFBLE1BQ0ZNLFFBREUsZUFDRkEsUUFERTs7QUFBQSxNQUVUTCxNQUZTLEdBRUVELEtBRkYsQ0FFVEMsTUFGUztBQUdqQixzQkFDQztBQUFBLGVBQ0VBLE1BQU0sQ0FBQ0MsT0FBUCxpQkFBa0IsOERBQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURwQixFQUVFRCxNQUFNLENBQUNNLEtBQVAsaUJBQ0EsOERBQUMsMkNBQUQ7QUFDQyxTQUFHLEVBQUU7QUFBRUMsUUFBQUEsR0FBRyxFQUFFUCxNQUFNLENBQUNNLEtBQWQ7QUFBcUJFLFFBQUFBLEtBQUssRUFBRTtBQUE1QixPQUROO0FBRUMsZ0JBQVUsRUFBRTtBQUFBLGVBQU1ILFFBQVEsQ0FBQztBQUFFSSxVQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkMsVUFBQUEsT0FBTyxFQUFFO0FBQTNCLFNBQUQsQ0FBZDtBQUFBO0FBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLEVBUUVWLE1BQU0sQ0FBQ1csT0FBUCxpQkFDQSw4REFBQywyQ0FBRDtBQUNDLFNBQUcsRUFBRTtBQUFFSixRQUFBQSxHQUFHLEVBQUVQLE1BQU0sQ0FBQ1csT0FBZDtBQUF1QkgsUUFBQUEsS0FBSyxFQUFFO0FBQTlCLE9BRE47QUFFQyxnQkFBVSxFQUFFO0FBQUEsZUFBTUgsUUFBUSxDQUFDO0FBQUVJLFVBQUFBLElBQUksRUFBRSxRQUFSO0FBQWtCQyxVQUFBQSxPQUFPLEVBQUU7QUFBM0IsU0FBRCxDQUFkO0FBQUE7QUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFpQkE7O0dBcEJRTjs7S0FBQUE7QUFzQlQsK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2FkaW5nLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RhaWx3aW5kL05vdGlmeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uL3N0b3JlL0dsb2JhbFN0YXRlJztcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cclxuY29uc3QgTG9hZGluZyA9ICgpID0+IHtcclxuXHRjb25zdCB7IHN0YXRlIH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuXHRjb25zdCB7IG5vdGlmeSB9ID0gc3RhdGU7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT17YCR7XHJcblx0XHRcdFx0bm90aWZ5LmxvYWRpbmcgPyAnJyA6ICdoaWRkZW4nXHJcblx0XHRcdH0gZml4ZWQgdy1mdWxsIGgtZnVsbCBsZWZ0LTAgYm90dG9tLTAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctWyMwMDA4XWB9XHJcblx0XHQ+XHJcblx0XHRcdDxpbWcgc3JjPScvaW1hZ2VzL1JvbGxpbmctMXMtMjAwcHgxLnN2ZycgYWx0PSdzdmcnIGNsYXNzTmFtZT0naC0xNiB0ZXh0LXdoaXRlJyAvPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uLy4uL3N0b3JlL0dsb2JhbFN0YXRlJztcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vTG9hZGluZyc7XHJcbmltcG9ydCBUb2FzdCBmcm9tICcuL1RvYXN0JztcclxuXHJcbmZ1bmN0aW9uIE5vdGlmeSgpIHtcclxuXHRjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcblx0Y29uc3QgeyBub3RpZnkgfSA9IHN0YXRlO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHR7bm90aWZ5LmxvYWRpbmcgJiYgPExvYWRpbmcgLz59XHJcblx0XHRcdHtub3RpZnkuZXJyb3IgJiYgKFxyXG5cdFx0XHRcdDxUb2FzdFxyXG5cdFx0XHRcdFx0bXNnPXt7IG1zZzogbm90aWZ5LmVycm9yLCB0aXRsZTogJ0Vycm9yJyB9fVxyXG5cdFx0XHRcdFx0aGFuZGxlU2hvdz17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge30gfSl9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0KX1cclxuXHRcdFx0e25vdGlmeS5zdWNjZXNzICYmIChcclxuXHRcdFx0XHQ8VG9hc3RcclxuXHRcdFx0XHRcdG1zZz17eyBtc2c6IG5vdGlmeS5zdWNjZXNzLCB0aXRsZTogJ1N1Y2Nlc3MnIH19XHJcblx0XHRcdFx0XHRoYW5kbGVTaG93PXsoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90aWZ5O1xyXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0IiwiTG9hZGluZyIsInN0YXRlIiwibm90aWZ5IiwibG9hZGluZyIsIlJlYWN0IiwiVG9hc3QiLCJOb3RpZnkiLCJkaXNwYXRjaCIsImVycm9yIiwibXNnIiwidGl0bGUiLCJ0eXBlIiwicGF5bG9hZCIsInN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9