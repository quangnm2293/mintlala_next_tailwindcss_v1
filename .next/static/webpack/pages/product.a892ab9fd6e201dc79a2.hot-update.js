"use strict";
self["webpackHotUpdate_N_E"]("pages/product",{

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_filterSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/filterSearch */ "./utils/filterSearch.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\Works\\VSCode\\NextJS\\next-website-mintlala\\components\\Pagination.js",
    _s = $RefreshSig$();

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable no-mixed-spaces-and-tabs */




function range(start, end) {
  return Array(end - start + 1).fill().map(function (_, idx) {
    return start + idx;
  });
}

function Pagination(_ref) {
  _s();

  var _this = this;

  var result = _ref.result;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
      currentPage = _useState[0],
      setCurrentPage = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(12),
      limitNumber = _useState2[0],
      setLimitNumber = _useState2[1];

  var indexPage = result % limitNumber === 0 ? 0 : 1;
  var maxPage = (result - result % limitNumber) / limitNumber + indexPage;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (Object.keys(router.query).length === 0) localStorage.setItem('_ltd', JSON.stringify(limitNumber));
    var ltd = localStorage.getItem('_ltd');
    setLimitNumber(Number(ltd));
  }, [router.query]);
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

  var handlePagination = function handlePagination(e) {
    (0,_utils_filterSearch__WEBPACK_IMPORTED_MODULE_3__.default)({
      router: router,
      page: Number(e.target.innerHTML)
    }); // setCurrentPage(Number(e.target.innerHTML));
  };

  var handlePreviousPage = function handlePreviousPage() {
    (0,_utils_filterSearch__WEBPACK_IMPORTED_MODULE_3__.default)({
      router: router,
      page: currentPage - 1
    }); // setCurrentPage(currentPage - 1);
  };

  var handleNextPage = function handleNextPage() {
    (0,_utils_filterSearch__WEBPACK_IMPORTED_MODULE_3__.default)({
      router: router,
      page: currentPage + 1
    });
    setCurrentPage(currentPage + 1);
  };

  var handleLimit = function handleLimit(value) {
    setLimitNumber(value);
    localStorage.setItem('_ltd', JSON.stringify(value));
    (0,_utils_filterSearch__WEBPACK_IMPORTED_MODULE_3__.default)({
      router: router,
      page: 1,
      limit: value
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex justify-center my-4 pt-4",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: "",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "flex space-x-2 items-center ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "button ".concat(currentPage === 1 && 'cursor-not-allowed'),
            tabIndex: "-1",
            onClick: handlePreviousPage,
            disabled: currentPage === 1,
            children: "\xAB"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 6
        }, this), maxPage > 6 ? newTotalPage.map(function (page) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: handlePagination,
              className: "button ".concat(currentPage === page && 'text-red-600 border border-red-500'),
              children: page
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 10
            }, _this)
          }, page, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 9
          }, _this);
        }) : totalPage.map(function (page) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: handlePagination,
              className: "button ".concat(currentPage === page && 'text-red-600 border border-red-500'),
              children: page
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 10
            }, _this)
          }, page, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 9
          }, _this);
        }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "button ".concat(currentPage === maxPage && 'cursor-not-allowed'),
            tabIndex: "-1",
            onClick: handleNextPage,
            disabled: currentPage === maxPage,
            children: "\xBB"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "group relative z-[99]",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "text-xs text-gray-500",
            onClick: function onClick() {
              return handleLimit(limitNumber === 12 ? 24 : limitNumber === 24 ? 48 : 12);
            },
            children: [limitNumber, "/trang"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "hidden group-hover:flex flex-col absolute bottom-5 left-0 \r border border-gray-300 rounded-md bg-gray-100 py-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "cursor-pointer hover:bg-gray-200 px-5 text-xs text-gray-500",
              onClick: function onClick() {
                return handleLimit(12);
              },
              children: "12"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "cursor-pointer hover:bg-gray-200 px-5 text-xs text-gray-500",
              onClick: function onClick() {
                return handleLimit(24);
              },
              children: "24"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "cursor-pointer hover:bg-gray-200 px-5 text-xs text-gray-500",
              onClick: function onClick() {
                return handleLimit(48);
              },
              children: "48"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 3
  }, this);
}

_s(Pagination, "VBvKtdL3FMeMT2+WKzh1LJk+Ny8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = Pagination;
/* harmony default export */ __webpack_exports__["default"] = (Pagination);

var _c;

$RefreshReg$(_c, "Pagination");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC5hODkyYWI5ZmQ2ZTIwMWRjNzlhMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0ssS0FBVCxDQUFlQyxLQUFmLEVBQXNCQyxHQUF0QixFQUEyQjtBQUMxQixTQUFPQyxLQUFLLENBQUNELEdBQUcsR0FBR0QsS0FBTixHQUFjLENBQWYsQ0FBTCxDQUNMRyxJQURLLEdBRUxDLEdBRkssQ0FFRCxVQUFDQyxDQUFELEVBQUlDLEdBQUo7QUFBQSxXQUFZTixLQUFLLEdBQUdNLEdBQXBCO0FBQUEsR0FGQyxDQUFQO0FBR0E7O0FBRUQsU0FBU0MsVUFBVCxPQUFnQztBQUFBOztBQUFBOztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUMvQixNQUFNQyxNQUFNLEdBQUdmLHNEQUFTLEVBQXhCOztBQUQrQixrQkFHT0csK0NBQVEsQ0FBQyxDQUFELENBSGY7QUFBQSxNQUd4QmEsV0FId0I7QUFBQSxNQUdYQyxjQUhXOztBQUFBLG1CQUlPZCwrQ0FBUSxDQUFDLEVBQUQsQ0FKZjtBQUFBLE1BSXhCZSxXQUp3QjtBQUFBLE1BSVhDLGNBSlc7O0FBTS9CLE1BQU1DLFNBQVMsR0FBR04sTUFBTSxHQUFHSSxXQUFULEtBQXlCLENBQXpCLEdBQTZCLENBQTdCLEdBQWlDLENBQW5EO0FBQ0EsTUFBTUcsT0FBTyxHQUFHLENBQUNQLE1BQU0sR0FBSUEsTUFBTSxHQUFHSSxXQUFwQixJQUFvQ0EsV0FBcEMsR0FBa0RFLFNBQWxFO0FBRUFsQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZixRQUFJb0IsTUFBTSxDQUFDQyxJQUFQLENBQVlSLE1BQU0sQ0FBQ1MsS0FBbkIsRUFBMEJDLE1BQTFCLEtBQXFDLENBQXpDLEVBQTRDQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkJDLElBQUksQ0FBQ0MsU0FBTCxD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QyxxQkFBTyxFQUFFO0FBQUEsdUJBQU1BLFdBQVcsQ0FBQyxFQUFELENBQWpCO0FBQUEsZUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFWRCxlQWdCQztBQUNDLHVCQUFTLEVBQUMsNkRBRFg7QUFFQyxxQkFBTyxFQUFFO0FBQUEsdUJBQU1BLFdBQVcsQ0FBQyxFQUFELENBQWpCO0FBQUEsZUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFoQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQTBGQTs7R0E3SlE5QjtVQUNPYjs7O0tBRFBhO0FBK0pULCtEQUFlQSxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGFnaW5hdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtc3BhY2VzLWFuZC10YWJzICovXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBmaWx0ZXJTZWFyY2ggZnJvbSAnLi4vdXRpbHMvZmlsdGVyU2VhcmNoJztcclxuXHJcbmZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBlbmQpIHtcclxuXHRyZXR1cm4gQXJyYXkoZW5kIC0gc3RhcnQgKyAxKVxyXG5cdFx0LmZpbGwoKVxyXG5cdFx0Lm1hcCgoXywgaWR4KSA9PiBzdGFydCArIGlkeCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFBhZ2luYXRpb24oeyByZXN1bHQgfSkge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHRjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG5cdGNvbnN0IFtsaW1pdE51bWJlciwgc2V0TGltaXROdW1iZXJdID0gdXNlU3RhdGUoMTIpO1xyXG5cclxuXHRjb25zdCBpbmRleFBhZ2UgPSByZXN1bHQgJSBsaW1pdE51bWJlciA9PT0gMCA/IDAgOiAxO1xyXG5cdGNvbnN0IG1heFBhZ2UgPSAocmVzdWx0IC0gKHJlc3VsdCAlIGxpbWl0TnVtYmVyKSkgLyBsaW1pdE51bWJlciArIGluZGV4UGFnZTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmIChPYmplY3Qua2V5cyhyb3V0ZXIucXVlcnkpLmxlbmd0aCA9PT0gMCkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ19sdGQnLCBKU09OLnN0cmluZ2lmeShsaW1pdE51bWJlcikpO1xyXG5cdFx0Y29uc3QgbHRkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ19sdGQnKTtcclxuXHRcdHNldExpbWl0TnVtYmVyKE51bWJlcihsdGQpKTtcclxuXHR9LCBbcm91dGVyLnF1ZXJ5XSk7XHJcblxyXG5cdGNvbnN0IHRvdGFsUGFnZSA9IHJhbmdlKDEsIG1heFBhZ2UpO1xyXG5cclxuXHRsZXQgbmV3VG90YWxQYWdlID0gW107XHJcblxyXG5cdGlmIChtYXhQYWdlID4gNikge1xyXG5cdFx0aWYgKGN1cnJlbnRQYWdlID49IDMgJiYgY3VycmVudFBhZ2UgPD0gbWF4UGFnZSAtIDMpIHtcclxuXHRcdFx0bmV3VG90YWxQYWdlLnB1c2goY3VycmVudFBhZ2UgLSAyKTtcclxuXHRcdFx0bmV3VG90YWxQYWdlLnB1c2goY3VycmVudFBhZ2UgLSAxKTtcclxuXHRcdFx0bmV3VG90YWxQYWdlLnB1c2goY3VycmVudFBhZ2UpO1xyXG5cdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChjdXJyZW50UGFnZSArIDEpO1xyXG5cdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChjdXJyZW50UGFnZSArIDIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKGN1cnJlbnRQYWdlID4gbWF4UGFnZSAtIDMpIHtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChtYXhQYWdlIC0gNSk7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2gobWF4UGFnZSAtIDQpO1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKG1heFBhZ2UgLSAzKTtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChtYXhQYWdlIC0gMik7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2gobWF4UGFnZSAtIDEpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKDEpO1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKDIpO1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKDMpO1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKDQpO1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKDUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoY3VycmVudFBhZ2UgPCBtYXhQYWdlIC0gMykge1xyXG5cdFx0XHRuZXdUb3RhbFBhZ2UucHVzaCgnLi4uJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0bmV3VG90YWxQYWdlLnB1c2gobWF4UGFnZSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBoYW5kbGVQYWdpbmF0aW9uID0gZSA9PiB7XHJcblx0XHRmaWx0ZXJTZWFyY2goeyByb3V0ZXIsIHBhZ2U6IE51bWJlcihlLnRhcmdldC5pbm5lckhUTUwpIH0pO1xyXG5cdFx0Ly8gc2V0Q3VycmVudFBhZ2UoTnVtYmVyKGUudGFyZ2V0LmlubmVySFRNTCkpO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlUHJldmlvdXNQYWdlID0gKCkgPT4ge1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBwYWdlOiBjdXJyZW50UGFnZSAtIDEgfSk7XHJcblx0XHQvLyBzZXRDdXJyZW50UGFnZShjdXJyZW50UGFnZSAtIDEpO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlTmV4dFBhZ2UgPSAoKSA9PiB7XHJcblx0XHRmaWx0ZXJTZWFyY2goeyByb3V0ZXIsIHBhZ2U6IGN1cnJlbnRQYWdlICsgMSB9KTtcclxuXHRcdHNldEN1cnJlbnRQYWdlKGN1cnJlbnRQYWdlICsgMSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlTGltaXQgPSB2YWx1ZSA9PiB7XHJcblx0XHRzZXRMaW1pdE51bWJlcih2YWx1ZSk7XHJcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnX2x0ZCcsIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XHJcblx0XHRmaWx0ZXJTZWFyY2goeyByb3V0ZXIsIHBhZ2U6IDEsIGxpbWl0OiB2YWx1ZSB9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgbXktNCBwdC00Jz5cclxuXHRcdFx0PG5hdiBjbGFzc05hbWU9Jyc+XHJcblx0XHRcdFx0PHVsIGNsYXNzTmFtZT0nZmxleCBzcGFjZS14LTIgaXRlbXMtY2VudGVyICc+XHJcblx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BidXR0b24gJHtjdXJyZW50UGFnZSA9PT0gMSAmJiAnY3Vyc29yLW5vdC1hbGxvd2VkJ31gfVxyXG5cdFx0XHRcdFx0XHRcdHRhYkluZGV4PSctMSdcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVQcmV2aW91c1BhZ2V9XHJcblx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2N1cnJlbnRQYWdlID09PSAxfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0JmxhcXVvO1xyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHR7bWF4UGFnZSA+IDZcclxuXHRcdFx0XHRcdFx0PyBuZXdUb3RhbFBhZ2UubWFwKHBhZ2UgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpIGtleT17cGFnZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVQYWdpbmF0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGJ1dHRvbiAke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudFBhZ2UgPT09IHBhZ2UgJiZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd0ZXh0LXJlZC02MDAgYm9yZGVyIGJvcmRlci1yZWQtNTAwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3BhZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0ICApKVxyXG5cdFx0XHRcdFx0XHQ6IHRvdGFsUGFnZS5tYXAocGFnZSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtwYWdlfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZVBhZ2luYXRpb259XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgYnV0dG9uICR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50UGFnZSA9PT0gcGFnZSAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3RleHQtcmVkLTYwMCBib3JkZXIgYm9yZGVyLXJlZC01MDAnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fWB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7cGFnZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHQgICkpfVxyXG5cclxuXHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGJ1dHRvbiAke2N1cnJlbnRQYWdlID09PSBtYXhQYWdlICYmICdjdXJzb3Itbm90LWFsbG93ZWQnfWB9XHJcblx0XHRcdFx0XHRcdFx0dGFiSW5kZXg9Jy0xJ1xyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZU5leHRQYWdlfVxyXG5cdFx0XHRcdFx0XHRcdGRpc2FibGVkPXtjdXJyZW50UGFnZSA9PT0gbWF4UGFnZX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdCZyYXF1bztcclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nZ3JvdXAgcmVsYXRpdmUgei1bOTldJz5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ndGV4dC14cyB0ZXh0LWdyYXktNTAwJ1xyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRoYW5kbGVMaW1pdChsaW1pdE51bWJlciA9PT0gMTIgPyAyNCA6IGxpbWl0TnVtYmVyID09PSAyNCA/IDQ4IDogMTIpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0e2xpbWl0TnVtYmVyfS90cmFuZ1xyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2hpZGRlbiBncm91cC1ob3ZlcjpmbGV4IGZsZXgtY29sIGFic29sdXRlIGJvdHRvbS01IGxlZnQtMCBcclxuXHRcdFx0XHRcdFx0Ym9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGJnLWdyYXktMTAwIHB5LTInXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ncmF5LTIwMCBweC01IHRleHQteHMgdGV4dC1ncmF5LTUwMCdcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZUxpbWl0KDEyKX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQxMlxyXG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ncmF5LTIwMCBweC01IHRleHQteHMgdGV4dC1ncmF5LTUwMCdcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZUxpbWl0KDI0KX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQyNFxyXG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ncmF5LTIwMCBweC01IHRleHQteHMgdGV4dC1ncmF5LTUwMCdcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZUxpbWl0KDQ4KX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ0OFxyXG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdDwvbmF2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJmaWx0ZXJTZWFyY2giLCJyYW5nZSIsInN0YXJ0IiwiZW5kIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImlkeCIsIlBhZ2luYXRpb24iLCJyZXN1bHQiLCJyb3V0ZXIiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwibGltaXROdW1iZXIiLCJzZXRMaW1pdE51bWJlciIsImluZGV4UGFnZSIsIm1heFBhZ2UiLCJPYmplY3QiLCJrZXlzIiwicXVlcnkiLCJsZW5ndGgiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImx0ZCIsImdldEl0ZW0iLCJOdW1iZXIiLCJ0b3RhbFBhZ2UiLCJuZXdUb3RhbFBhZ2UiLCJwdXNoIiwiaGFuZGxlUGFnaW5hdGlvbiIsImUiLCJwYWdlIiwidGFyZ2V0IiwiaW5uZXJIVE1MIiwiaGFuZGxlUHJldmlvdXNQYWdlIiwiaGFuZGxlTmV4dFBhZ2UiLCJoYW5kbGVMaW1pdCIsInZhbHVlIiwibGltaXQiXSwic291cmNlUm9vdCI6IiJ9