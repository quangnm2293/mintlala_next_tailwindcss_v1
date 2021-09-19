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
    setCurrentPage(Number(router.query.page));
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
    });
    setCurrentPage(router.query.page); // setCurrentPage(Number(e.target.innerHTML));
  };

  var handlePreviousPage = function handlePreviousPage() {
    (0,_utils_filterSearch__WEBPACK_IMPORTED_MODULE_3__.default)({
      router: router,
      page: currentPage - 1
    });
    setCurrentPage(router.query.page); // setCurrentPage(currentPage - 1);
  };

  var handleNextPage = function handleNextPage() {
    (0,_utils_filterSearch__WEBPACK_IMPORTED_MODULE_3__.default)({
      router: router,
      page: currentPage + 1
    });
    setCurrentPage(router.query.page); // setCurrentPage(currentPage + 1);
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
            lineNumber: 91,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 6
        }, this), maxPage > 6 ? newTotalPage.map(function (page) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: handlePagination,
              className: "button ".concat(currentPage === page && 'text-red-600 border border-red-500'),
              children: page
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 10
            }, _this)
          }, page, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
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
              lineNumber: 116,
              columnNumber: 10
            }, _this)
          }, page, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
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
            lineNumber: 129,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
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
            lineNumber: 139,
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
              lineNumber: 152,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "cursor-pointer hover:bg-gray-200 px-5 text-xs text-gray-500",
              onClick: function onClick() {
                return handleLimit(24);
              },
              children: "24"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "cursor-pointer hover:bg-gray-200 px-5 text-xs text-gray-500",
              onClick: function onClick() {
                return handleLimit(48);
              },
              children: "48"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 87,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC45NGYyM2IyY2E5ZDM5NmMyYzE0Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0ssS0FBVCxDQUFlQyxLQUFmLEVBQXNCQyxHQUF0QixFQUEyQjtBQUMxQixTQUFPQyxLQUFLLENBQUNELEdBQUcsR0FBR0QsS0FBTixHQUFjLENBQWYsQ0FBTCxDQUNMRyxJQURLLEdBRUxDLEdBRkssQ0FFRCxVQUFDQyxDQUFELEVBQUlDLEdBQUo7QUFBQSxXQUFZTixLQUFLLEdBQUdNLEdBQXBCO0FBQUEsR0FGQyxDQUFQO0FBR0E7O0FBRUQsU0FBU0MsVUFBVCxPQUFnQztBQUFBOztBQUFBOztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUMvQixNQUFNQyxNQUFNLEdBQUdmLHNEQUFTLEVBQXhCOztBQUQrQixrQkFHT0csK0NBQVEsQ0FBQyxDQUFELENBSGY7QUFBQSxNQUd4QmEsV0FId0I7QUFBQSxNQUdYQyxjQUhXOztBQUFBLG1CQUlPZCwrQ0FBUSxDQUFDLEVBQUQsQ0FKZjtBQUFBLE1BSXhCZSxXQUp3QjtBQUFBLE1BSVhDLGNBSlc7O0FBTS9CLE1BQU1DLFNBQVMsR0FBR04sTUFBTSxHQUFHSSxXQUFULEtBQXlCLENBQXpCLEdBQTZCLENBQTdCLEdBQWlDLENBQW5EO0FBQ0EsTUFBTUcsT0FBTyxHQUFHLENBQUNQLE1BQU0sR0FBSUEsTUFBTSxHQUFHSSxXQUFwQixJQUFvQ0EsV0FBcEMsR0FBa0RFLFNBQWxFO0FBRUFsQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZixRQUFJb0IsTUFBTSxDQUFDQyxJQUFQLENBQVlSLE1BQU0sQ0FBQ1MsS0FBbkIsRUFBMEJDLE1BQTFCLEtBQXFDLENBQXpDLEVBQTRDQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkJDLElBQUksQ0FBQ0MsU0FBTCxD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QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFVQztBQUNDLHFCQUFTLEVBQUMsaUhBRFg7QUFBQSxvQ0FJQztBQUNDLHVCQUFTLEVBQUMsNkRBRFg7QUFFQyxxQkFBTyxFQUFFO0FBQUEsdUJBQU15QixXQUFXLENBQUMsRUFBRCxDQUFqQjtBQUFBLGVBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkQsZUFVQztBQUNDLHVCQUFTLEVBQUMsNkRBRFg7QUFFQyxxQkFBTyxFQUFFO0FBQUEsdUJBQU1BLFdBQVcsQ0FBQyxFQUFELENBQWpCO0FBQUEsZUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFWRCxlQWdCQztBQUNDLHVCQUFTLEVBQUMsNkRBRFg7QUFFQyxxQkFBTyxFQUFFO0FBQUEsdUJBQU1BLFdBQVcsQ0FBQyxFQUFELENBQWpCO0FBQUEsZUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFoQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQTBGQTs7R0FuS1E5QjtVQUNPYjs7O0tBRFBhO0FBcUtULCtEQUFlQSxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGFnaW5hdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtc3BhY2VzLWFuZC10YWJzICovXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBmaWx0ZXJTZWFyY2ggZnJvbSAnLi4vdXRpbHMvZmlsdGVyU2VhcmNoJztcclxuXHJcbmZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBlbmQpIHtcclxuXHRyZXR1cm4gQXJyYXkoZW5kIC0gc3RhcnQgKyAxKVxyXG5cdFx0LmZpbGwoKVxyXG5cdFx0Lm1hcCgoXywgaWR4KSA9PiBzdGFydCArIGlkeCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFBhZ2luYXRpb24oeyByZXN1bHQgfSkge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHRjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG5cdGNvbnN0IFtsaW1pdE51bWJlciwgc2V0TGltaXROdW1iZXJdID0gdXNlU3RhdGUoMTIpO1xyXG5cclxuXHRjb25zdCBpbmRleFBhZ2UgPSByZXN1bHQgJSBsaW1pdE51bWJlciA9PT0gMCA/IDAgOiAxO1xyXG5cdGNvbnN0IG1heFBhZ2UgPSAocmVzdWx0IC0gKHJlc3VsdCAlIGxpbWl0TnVtYmVyKSkgLyBsaW1pdE51bWJlciArIGluZGV4UGFnZTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmIChPYmplY3Qua2V5cyhyb3V0ZXIucXVlcnkpLmxlbmd0aCA9PT0gMCkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ19sdGQnLCBKU09OLnN0cmluZ2lmeShsaW1pdE51bWJlcikpO1xyXG5cdFx0Y29uc3QgbHRkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ19sdGQnKTtcclxuXHRcdHNldExpbWl0TnVtYmVyKE51bWJlcihsdGQpKTtcclxuXHRcdHNldEN1cnJlbnRQYWdlKE51bWJlcihyb3V0ZXIucXVlcnkucGFnZSkpO1xyXG5cdH0sIFtyb3V0ZXIucXVlcnldKTtcclxuXHJcblx0Y29uc3QgdG90YWxQYWdlID0gcmFuZ2UoMSwgbWF4UGFnZSk7XHJcblxyXG5cdGxldCBuZXdUb3RhbFBhZ2UgPSBbXTtcclxuXHJcblx0aWYgKG1heFBhZ2UgPiA2KSB7XHJcblx0XHRpZiAoY3VycmVudFBhZ2UgPj0gMyAmJiBjdXJyZW50UGFnZSA8PSBtYXhQYWdlIC0gMykge1xyXG5cdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChjdXJyZW50UGFnZSAtIDIpO1xyXG5cdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChjdXJyZW50UGFnZSAtIDEpO1xyXG5cdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChjdXJyZW50UGFnZSk7XHJcblx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKGN1cnJlbnRQYWdlICsgMSk7XHJcblx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKGN1cnJlbnRQYWdlICsgMik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoY3VycmVudFBhZ2UgPiBtYXhQYWdlIC0gMykge1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKG1heFBhZ2UgLSA1KTtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChtYXhQYWdlIC0gNCk7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2gobWF4UGFnZSAtIDMpO1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKG1heFBhZ2UgLSAyKTtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChtYXhQYWdlIC0gMSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2goMSk7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2goMik7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2goMyk7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2goNCk7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2goNSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChjdXJyZW50UGFnZSA8IG1heFBhZ2UgLSAzKSB7XHJcblx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKCcuLi4nKTtcclxuXHRcdH1cclxuXHJcblx0XHRuZXdUb3RhbFBhZ2UucHVzaChtYXhQYWdlKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGhhbmRsZVBhZ2luYXRpb24gPSBlID0+IHtcclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgcGFnZTogTnVtYmVyKGUudGFyZ2V0LmlubmVySFRNTCkgfSk7XHJcblx0XHRzZXRDdXJyZW50UGFnZShyb3V0ZXIucXVlcnkucGFnZSk7XHJcblx0XHQvLyBzZXRDdXJyZW50UGFnZShOdW1iZXIoZS50YXJnZXQuaW5uZXJIVE1MKSk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVQcmV2aW91c1BhZ2UgPSAoKSA9PiB7XHJcblx0XHRmaWx0ZXJTZWFyY2goeyByb3V0ZXIsIHBhZ2U6IGN1cnJlbnRQYWdlIC0gMSB9KTtcclxuXHRcdHNldEN1cnJlbnRQYWdlKHJvdXRlci5xdWVyeS5wYWdlKTtcclxuXHRcdC8vIHNldEN1cnJlbnRQYWdlKGN1cnJlbnRQYWdlIC0gMSk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVOZXh0UGFnZSA9ICgpID0+IHtcclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgcGFnZTogY3VycmVudFBhZ2UgKyAxIH0pO1xyXG5cdFx0c2V0Q3VycmVudFBhZ2Uocm91dGVyLnF1ZXJ5LnBhZ2UpO1xyXG5cdFx0Ly8gc2V0Q3VycmVudFBhZ2UoY3VycmVudFBhZ2UgKyAxKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVMaW1pdCA9IHZhbHVlID0+IHtcclxuXHRcdHNldExpbWl0TnVtYmVyKHZhbHVlKTtcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdfbHRkJywgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgcGFnZTogMSwgbGltaXQ6IHZhbHVlIH0pO1xyXG5cdH07XHJcblxyXG5cdFxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgbXktNCBwdC00Jz5cclxuXHRcdFx0PG5hdiBjbGFzc05hbWU9Jyc+XHJcblx0XHRcdFx0PHVsIGNsYXNzTmFtZT0nZmxleCBzcGFjZS14LTIgaXRlbXMtY2VudGVyICc+XHJcblx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BidXR0b24gJHtjdXJyZW50UGFnZSA9PT0gMSAmJiAnY3Vyc29yLW5vdC1hbGxvd2VkJ31gfVxyXG5cdFx0XHRcdFx0XHRcdHRhYkluZGV4PSctMSdcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVQcmV2aW91c1BhZ2V9XHJcblx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2N1cnJlbnRQYWdlID09PSAxfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0JmxhcXVvO1xyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHR7bWF4UGFnZSA+IDZcclxuXHRcdFx0XHRcdFx0PyBuZXdUb3RhbFBhZ2UubWFwKHBhZ2UgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpIGtleT17cGFnZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVQYWdpbmF0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGJ1dHRvbiAke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudFBhZ2UgPT09IHBhZ2UgJiZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd0ZXh0LXJlZC02MDAgYm9yZGVyIGJvcmRlci1yZWQtNTAwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3BhZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0ICApKVxyXG5cdFx0XHRcdFx0XHQ6IHRvdGFsUGFnZS5tYXAocGFnZSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtwYWdlfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZVBhZ2luYXRpb259XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgYnV0dG9uICR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50UGFnZSA9PT0gcGFnZSAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3RleHQtcmVkLTYwMCBib3JkZXIgYm9yZGVyLXJlZC01MDAnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fWB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7cGFnZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHQgICkpfVxyXG5cclxuXHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGJ1dHRvbiAke2N1cnJlbnRQYWdlID09PSBtYXhQYWdlICYmICdjdXJzb3Itbm90LWFsbG93ZWQnfWB9XHJcblx0XHRcdFx0XHRcdFx0dGFiSW5kZXg9Jy0xJ1xyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZU5leHRQYWdlfVxyXG5cdFx0XHRcdFx0XHRcdGRpc2FibGVkPXtjdXJyZW50UGFnZSA9PT0gbWF4UGFnZX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdCZyYXF1bztcclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nZ3JvdXAgcmVsYXRpdmUgei1bOTldJz5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ndGV4dC14cyB0ZXh0LWdyYXktNTAwJ1xyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRoYW5kbGVMaW1pdChsaW1pdE51bWJlciA9PT0gMTIgPyAyNCA6IGxpbWl0TnVtYmVyID09PSAyNCA/IDQ4IDogMTIpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0e2xpbWl0TnVtYmVyfS90cmFuZ1xyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2hpZGRlbiBncm91cC1ob3ZlcjpmbGV4IGZsZXgtY29sIGFic29sdXRlIGJvdHRvbS01IGxlZnQtMCBcclxuXHRcdFx0XHRcdFx0Ym9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGJnLWdyYXktMTAwIHB5LTInXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ncmF5LTIwMCBweC01IHRleHQteHMgdGV4dC1ncmF5LTUwMCdcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZUxpbWl0KDEyKX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQxMlxyXG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ncmF5LTIwMCBweC01IHRleHQteHMgdGV4dC1ncmF5LTUwMCdcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZUxpbWl0KDI0KX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQyNFxyXG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ncmF5LTIwMCBweC01IHRleHQteHMgdGV4dC1ncmF5LTUwMCdcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZUxpbWl0KDQ4KX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ0OFxyXG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdDwvbmF2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJmaWx0ZXJTZWFyY2giLCJyYW5nZSIsInN0YXJ0IiwiZW5kIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImlkeCIsIlBhZ2luYXRpb24iLCJyZXN1bHQiLCJyb3V0ZXIiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwibGltaXROdW1iZXIiLCJzZXRMaW1pdE51bWJlciIsImluZGV4UGFnZSIsIm1heFBhZ2UiLCJPYmplY3QiLCJrZXlzIiwicXVlcnkiLCJsZW5ndGgiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImx0ZCIsImdldEl0ZW0iLCJOdW1iZXIiLCJwYWdlIiwidG90YWxQYWdlIiwibmV3VG90YWxQYWdlIiwicHVzaCIsImhhbmRsZVBhZ2luYXRpb24iLCJlIiwidGFyZ2V0IiwiaW5uZXJIVE1MIiwiaGFuZGxlUHJldmlvdXNQYWdlIiwiaGFuZGxlTmV4dFBhZ2UiLCJoYW5kbGVMaW1pdCIsInZhbHVlIiwibGltaXQiXSwic291cmNlUm9vdCI6IiJ9