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
    setCurrentPage(router.query.page);
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

  console.log(currentPage);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC5lOTE3ZGJhNmMxMmNjNjg1ZjkzZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0ssS0FBVCxDQUFlQyxLQUFmLEVBQXNCQyxHQUF0QixFQUEyQjtBQUMxQixTQUFPQyxLQUFLLENBQUNELEdBQUcsR0FBR0QsS0FBTixHQUFjLENBQWYsQ0FBTCxDQUNMRyxJQURLLEdBRUxDLEdBRkssQ0FFRCxVQUFDQyxDQUFELEVBQUlDLEdBQUo7QUFBQSxXQUFZTixLQUFLLEdBQUdNLEdBQXBCO0FBQUEsR0FGQyxDQUFQO0FBR0E7O0FBRUQsU0FBU0MsVUFBVCxPQUFnQztBQUFBOztBQUFBOztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUMvQixNQUFNQyxNQUFNLEdBQUdmLHNEQUFTLEVBQXhCOztBQUQrQixrQkFHT0csK0NBQVEsQ0FBQyxDQUFELENBSGY7QUFBQSxNQUd4QmEsV0FId0I7QUFBQSxNQUdYQyxjQUhXOztBQUFBLG1CQUlPZCwrQ0FBUSxDQUFDLEVBQUQsQ0FKZjtBQUFBLE1BSXhCZSxXQUp3QjtBQUFBLE1BSVhDLGNBSlc7O0FBTS9CLE1BQU1DLFNBQVMsR0FBR04sTUFBTSxHQUFHSSxXQUFULEtBQXlCLENBQXpCLEdBQTZCLENBQTdCLEdBQWlDLENBQW5EO0FBQ0EsTUFBTUcsT0FBTyxHQUFHLENBQUNQLE1BQU0sR0FBSUEsTUFBTSxHQUFHSSxXQUFwQixJQUFvQ0EsV0FBcEMsR0FBa0RFLFNBQWxFO0FBRUFsQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZixRQUFJb0IsTUFBTSxDQUFDQyxJQUFQLENBQVlSLE1BQU0sQ0FBQ1MsS0FBbkIsRUFBMEJDLE1BQTFCLEtBQXFDLENBQXpDLEVBQTRDQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkJDLElBQUksQ0FBQ0MsU0FBTCxD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dUJBTUVBLFdBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBVUM7QUFDQyxxQkFBUyxFQUFDLGlIQURYO0FBQUEsb0NBSUM7QUFDQyx1QkFBUyxFQUFDLDZEQURYO0FBRUMscUJBQU8sRUFBRTtBQUFBLHVCQUFNeUIsV0FBVyxDQUFDLEVBQUQsQ0FBakI7QUFBQSxlQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpELGVBVUM7QUFDQyx1QkFBUyxFQUFDLDZEQURYO0FBRUMscUJBQU8sRUFBRTtBQUFBLHVCQUFNQSxXQUFXLENBQUMsRUFBRCxDQUFqQjtBQUFBLGVBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVkQsZUFnQkM7QUFDQyx1QkFBUyxFQUFDLDZEQURYO0FBRUMscUJBQU8sRUFBRTtBQUFBLHVCQUFNQSxXQUFXLENBQUMsRUFBRCxDQUFqQjtBQUFBLGVBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBaEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFWRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUEwRkE7O0dBbktROUI7VUFDT2I7OztLQURQYTtBQXFLVCwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BhZ2luYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLXNwYWNlcy1hbmQtdGFicyAqL1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmlsdGVyU2VhcmNoIGZyb20gJy4uL3V0aWxzL2ZpbHRlclNlYXJjaCc7XHJcblxyXG5mdW5jdGlvbiByYW5nZShzdGFydCwgZW5kKSB7XHJcblx0cmV0dXJuIEFycmF5KGVuZCAtIHN0YXJ0ICsgMSlcclxuXHRcdC5maWxsKClcclxuXHRcdC5tYXAoKF8sIGlkeCkgPT4gc3RhcnQgKyBpZHgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQYWdpbmF0aW9uKHsgcmVzdWx0IH0pIHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0Y29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuXHRjb25zdCBbbGltaXROdW1iZXIsIHNldExpbWl0TnVtYmVyXSA9IHVzZVN0YXRlKDEyKTtcclxuXHJcblx0Y29uc3QgaW5kZXhQYWdlID0gcmVzdWx0ICUgbGltaXROdW1iZXIgPT09IDAgPyAwIDogMTtcclxuXHRjb25zdCBtYXhQYWdlID0gKHJlc3VsdCAtIChyZXN1bHQgJSBsaW1pdE51bWJlcikpIC8gbGltaXROdW1iZXIgKyBpbmRleFBhZ2U7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAoT2JqZWN0LmtleXMocm91dGVyLnF1ZXJ5KS5sZW5ndGggPT09IDApIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdfbHRkJywgSlNPTi5zdHJpbmdpZnkobGltaXROdW1iZXIpKTtcclxuXHRcdGNvbnN0IGx0ZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdfbHRkJyk7XHJcblx0XHRzZXRMaW1pdE51bWJlcihOdW1iZXIobHRkKSk7XHJcblx0XHRzZXRDdXJyZW50UGFnZShyb3V0ZXIucXVlcnkucGFnZSk7XHJcblx0fSwgW3JvdXRlci5xdWVyeV0pO1xyXG5cclxuXHRjb25zdCB0b3RhbFBhZ2UgPSByYW5nZSgxLCBtYXhQYWdlKTtcclxuXHJcblx0bGV0IG5ld1RvdGFsUGFnZSA9IFtdO1xyXG5cclxuXHRpZiAobWF4UGFnZSA+IDYpIHtcclxuXHRcdGlmIChjdXJyZW50UGFnZSA+PSAzICYmIGN1cnJlbnRQYWdlIDw9IG1heFBhZ2UgLSAzKSB7XHJcblx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKGN1cnJlbnRQYWdlIC0gMik7XHJcblx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKGN1cnJlbnRQYWdlIC0gMSk7XHJcblx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKGN1cnJlbnRQYWdlKTtcclxuXHRcdFx0bmV3VG90YWxQYWdlLnB1c2goY3VycmVudFBhZ2UgKyAxKTtcclxuXHRcdFx0bmV3VG90YWxQYWdlLnB1c2goY3VycmVudFBhZ2UgKyAyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChjdXJyZW50UGFnZSA+IG1heFBhZ2UgLSAzKSB7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2gobWF4UGFnZSAtIDUpO1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKG1heFBhZ2UgLSA0KTtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChtYXhQYWdlIC0gMyk7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2gobWF4UGFnZSAtIDIpO1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKG1heFBhZ2UgLSAxKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaCgxKTtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaCgyKTtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaCgzKTtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaCg0KTtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaCg1KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKGN1cnJlbnRQYWdlIDwgbWF4UGFnZSAtIDMpIHtcclxuXHRcdFx0bmV3VG90YWxQYWdlLnB1c2goJy4uLicpO1xyXG5cdFx0fVxyXG5cclxuXHRcdG5ld1RvdGFsUGFnZS5wdXNoKG1heFBhZ2UpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgaGFuZGxlUGFnaW5hdGlvbiA9IGUgPT4ge1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBwYWdlOiBOdW1iZXIoZS50YXJnZXQuaW5uZXJIVE1MKSB9KTtcclxuXHRcdHNldEN1cnJlbnRQYWdlKHJvdXRlci5xdWVyeS5wYWdlKTtcclxuXHRcdC8vIHNldEN1cnJlbnRQYWdlKE51bWJlcihlLnRhcmdldC5pbm5lckhUTUwpKTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZVByZXZpb3VzUGFnZSA9ICgpID0+IHtcclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgcGFnZTogY3VycmVudFBhZ2UgLSAxIH0pO1xyXG5cdFx0c2V0Q3VycmVudFBhZ2Uocm91dGVyLnF1ZXJ5LnBhZ2UpO1xyXG5cdFx0Ly8gc2V0Q3VycmVudFBhZ2UoY3VycmVudFBhZ2UgLSAxKTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZU5leHRQYWdlID0gKCkgPT4ge1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBwYWdlOiBjdXJyZW50UGFnZSArIDEgfSk7XHJcblx0XHRzZXRDdXJyZW50UGFnZShyb3V0ZXIucXVlcnkucGFnZSk7XHJcblx0XHQvLyBzZXRDdXJyZW50UGFnZShjdXJyZW50UGFnZSArIDEpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUxpbWl0ID0gdmFsdWUgPT4ge1xyXG5cdFx0c2V0TGltaXROdW1iZXIodmFsdWUpO1xyXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ19sdGQnLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xyXG5cdFx0ZmlsdGVyU2VhcmNoKHsgcm91dGVyLCBwYWdlOiAxLCBsaW1pdDogdmFsdWUgfSk7XHJcblx0fTtcclxuXHJcblx0Y29uc29sZS5sb2coY3VycmVudFBhZ2UpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgbXktNCBwdC00Jz5cclxuXHRcdFx0PG5hdiBjbGFzc05hbWU9Jyc+XHJcblx0XHRcdFx0PHVsIGNsYXNzTmFtZT0nZmxleCBzcGFjZS14LTIgaXRlbXMtY2VudGVyICc+XHJcblx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BidXR0b24gJHtjdXJyZW50UGFnZSA9PT0gMSAmJiAnY3Vyc29yLW5vdC1hbGxvd2VkJ31gfVxyXG5cdFx0XHRcdFx0XHRcdHRhYkluZGV4PSctMSdcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVQcmV2aW91c1BhZ2V9XHJcblx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2N1cnJlbnRQYWdlID09PSAxfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0JmxhcXVvO1xyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHR7bWF4UGFnZSA+IDZcclxuXHRcdFx0XHRcdFx0PyBuZXdUb3RhbFBhZ2UubWFwKHBhZ2UgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpIGtleT17cGFnZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVQYWdpbmF0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGJ1dHRvbiAke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudFBhZ2UgPT09IHBhZ2UgJiZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd0ZXh0LXJlZC02MDAgYm9yZGVyIGJvcmRlci1yZWQtNTAwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3BhZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0ICApKVxyXG5cdFx0XHRcdFx0XHQ6IHRvdGFsUGFnZS5tYXAocGFnZSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtwYWdlfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZVBhZ2luYXRpb259XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgYnV0dG9uICR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50UGFnZSA9PT0gcGFnZSAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3RleHQtcmVkLTYwMCBib3JkZXIgYm9yZGVyLXJlZC01MDAnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fWB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7cGFnZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHQgICkpfVxyXG5cclxuXHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGJ1dHRvbiAke2N1cnJlbnRQYWdlID09PSBtYXhQYWdlICYmICdjdXJzb3Itbm90LWFsbG93ZWQnfWB9XHJcblx0XHRcdFx0XHRcdFx0dGFiSW5kZXg9Jy0xJ1xyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZU5leHRQYWdlfVxyXG5cdFx0XHRcdFx0XHRcdGRpc2FibGVkPXtjdXJyZW50UGFnZSA9PT0gbWF4UGFnZX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdCZyYXF1bztcclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nZ3JvdXAgcmVsYXRpdmUgei1bOTldJz5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ndGV4dC14cyB0ZXh0LWdyYXktNTAwJ1xyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRoYW5kbGVMaW1pdChsaW1pdE51bWJlciA9PT0gMTIgPyAyNCA6IGxpbWl0TnVtYmVyID09PSAyNCA/IDQ4IDogMTIpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0e2xpbWl0TnVtYmVyfS90cmFuZ1xyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2hpZGRlbiBncm91cC1ob3ZlcjpmbGV4IGZsZXgtY29sIGFic29sdXRlIGJvdHRvbS01IGxlZnQtMCBcclxuXHRcdFx0XHRcdFx0Ym9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGJnLWdyYXktMTAwIHB5LTInXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ncmF5LTIwMCBweC01IHRleHQteHMgdGV4dC1ncmF5LTUwMCdcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZUxpbWl0KDEyKX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQxMlxyXG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ncmF5LTIwMCBweC01IHRleHQteHMgdGV4dC1ncmF5LTUwMCdcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZUxpbWl0KDI0KX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQyNFxyXG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ncmF5LTIwMCBweC01IHRleHQteHMgdGV4dC1ncmF5LTUwMCdcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZUxpbWl0KDQ4KX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ0OFxyXG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdDwvbmF2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJmaWx0ZXJTZWFyY2giLCJyYW5nZSIsInN0YXJ0IiwiZW5kIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImlkeCIsIlBhZ2luYXRpb24iLCJyZXN1bHQiLCJyb3V0ZXIiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwibGltaXROdW1iZXIiLCJzZXRMaW1pdE51bWJlciIsImluZGV4UGFnZSIsIm1heFBhZ2UiLCJPYmplY3QiLCJrZXlzIiwicXVlcnkiLCJsZW5ndGgiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImx0ZCIsImdldEl0ZW0iLCJOdW1iZXIiLCJwYWdlIiwidG90YWxQYWdlIiwibmV3VG90YWxQYWdlIiwicHVzaCIsImhhbmRsZVBhZ2luYXRpb24iLCJlIiwidGFyZ2V0IiwiaW5uZXJIVE1MIiwiaGFuZGxlUHJldmlvdXNQYWdlIiwiaGFuZGxlTmV4dFBhZ2UiLCJoYW5kbGVMaW1pdCIsInZhbHVlIiwibGltaXQiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==