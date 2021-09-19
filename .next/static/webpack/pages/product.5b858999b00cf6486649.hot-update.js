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
    }); // setCurrentPage(currentPage + 1);
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
            lineNumber: 86,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 6
        }, this), maxPage > 6 ? newTotalPage.map(function (page) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: handlePagination,
              className: "button ".concat(currentPage === page && 'text-red-600 border border-red-500'),
              children: page
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 10
            }, _this)
          }, page, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
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
              lineNumber: 111,
              columnNumber: 10
            }, _this)
          }, page, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
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
            lineNumber: 124,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
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
            lineNumber: 134,
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
              lineNumber: 147,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "cursor-pointer hover:bg-gray-200 px-5 text-xs text-gray-500",
              onClick: function onClick() {
                return handleLimit(24);
              },
              children: "24"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "cursor-pointer hover:bg-gray-200 px-5 text-xs text-gray-500",
              onClick: function onClick() {
                return handleLimit(48);
              },
              children: "48"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 82,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC41Yjg1ODk5OWIwMGNmNjQ4NjY0OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0ssS0FBVCxDQUFlQyxLQUFmLEVBQXNCQyxHQUF0QixFQUEyQjtBQUMxQixTQUFPQyxLQUFLLENBQUNELEdBQUcsR0FBR0QsS0FBTixHQUFjLENBQWYsQ0FBTCxDQUNMRyxJQURLLEdBRUxDLEdBRkssQ0FFRCxVQUFDQyxDQUFELEVBQUlDLEdBQUo7QUFBQSxXQUFZTixLQUFLLEdBQUdNLEdBQXBCO0FBQUEsR0FGQyxDQUFQO0FBR0E7O0FBRUQsU0FBU0MsVUFBVCxPQUFnQztBQUFBOztBQUFBOztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUMvQixNQUFNQyxNQUFNLEdBQUdmLHNEQUFTLEVBQXhCOztBQUQrQixrQkFHT0csK0NBQVEsQ0FBQyxDQUFELENBSGY7QUFBQSxNQUd4QmEsV0FId0I7QUFBQSxNQUdYQyxjQUhXOztBQUFBLG1CQUlPZCwrQ0FBUSxDQUFDLEVBQUQsQ0FKZjtBQUFBLE1BSXhCZSxXQUp3QjtBQUFBLE1BSVhDLGNBSlc7O0FBTS9CLE1BQU1DLFNBQVMsR0FBR04sTUFBTSxHQUFHSSxXQUFULEtBQXlCLENBQXpCLEdBQTZCLENBQTdCLEdBQWlDLENBQW5EO0FBQ0EsTUFBTUcsT0FBTyxHQUFHLENBQUNQLE1BQU0sR0FBSUEsTUFBTSxHQUFHSSxXQUFwQixJQUFvQ0EsV0FBcEMsR0FBa0RFLFNBQWxFO0FBRUFsQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZixRQUFJb0IsTUFBTSxDQUFDQyxJQUFQLENBQVlSLE1BQU0sQ0FBQ1MsS0FBbkIsRUFBMEJDLE1BQTFCLEtBQXFDLENBQXpDLEVBQTRDQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkJDLElBQUksQ0FBQ0MsU0FBTCxDQUFlWCxXQUFmLENBQTdCO0FBQzVDLFFBQU1ZLEdBQUcsR0FBR0osWUFBWSxDQUFDSyxPQUFiLENBQXFCLE1BQXJCLENBQVo7QUFDQVosSUFBQUEsY0FBYyxDQUFDYSxNQUFNLENBQUNGLEdBQUQsQ0FBUCxDQUFkO0FBQ0FiLElBQUFBLGNBQWMsQ0FBQ0YsTUFBTSxDQUFDUyxLQUFQLENBQWFTLElBQWQsQ0FBZDtBQUNBLEdBTFEsRUFLTixDQUFDbEIsTUFBTSxDQUFDUyxLQUFSLENBTE0sQ0FBVDtBQU9BLE1BQU1VLFNBQVMsR0FBRzdCLEtBQUssQ0FBQyxDQUFELEVBQUlnQixPQUFKLENBQXZCO0FBRUEsTUFBSWMsWUFBWSxHQUFHLEVBQW5COztBQUVBLE1BQUlkLE9BQU8sR0FBRyxDQUFkLEVBQWlCO0FBQ2hCLFFBQUlMLFdBQVcsSUFBSSxDQUFmLElBQW9CQSxXQUFXLElBQUlLLE9BQU8sR0FBRyxDQUFqRCxFQUFvRDtBQUNuRGMsTUFBQUEsWUFBWSxDQUFDQyxJQUFiLENBQWtCcEIsV0FBVyxHQUFHLENBQWhDO0FBQ0FtQixNQUFBQSxZQUFZLENBQUNDLElBQWIsQ0FBa0JwQixXQUFXLEdBQUcsQ0FBaEM7QUFDQW1CLE1BQUFBLFlBQVksQ0FBQ0MsSUFBYixDQUFrQnBCLFdBQWxCO0FBQ0FtQixNQUFBQSxZQUFZLENBQUNDLElBQWIsQ0FBa0JwQixXQUFXLEdBQUcsQ0FBaEM7QUFDQW1CLE1BQUFBLFlBQVksQ0FBQ0MsSUFBYixDQUFrQnBCLFdBQVcsR0FBRyxDQUFoQztBQUNBLEtBTkQsTUFNTztBQUNOLFVBQUlBLFdBQVcsR0FBR0ssT0FBTyxHQUFHLENBQTVCLEVBQStCO0FBQzlCYyxRQUFBQSxZQUFZLENBQUNDLElBQWIsQ0FBa0JmLE9BQU8sR0FBRyxDQUE1QjtBQUNBYyxRQUFBQSxZQUFZLENBQUNDLElBQWIsQ0FBa0JmLE9BQU8sR0FBRyxDQUE1QjtBQUNBYyxRQUFBQSxZQUFZLENBQUNDLElBQWIsQ0FBa0JmLE9BQU8sR0FBRyxDQUE1QjtBQUNBYyxRQUFBQSxZQUFZLENBQUNDLElBQWIsQ0FBa0JmLE9BQU8sR0FBRyxDQUE1QjtBQUNBYyxRQUFBQSxZQUFZLENBQUNDLElBQWIsQ0FBa0JmLE9BQU8sR0FBRyxDQUE1QjtBQUNBLE9BTkQsTUFNTztBQUNOYyxRQUFBQSxZQUFZLENBQUNDLElBQWIsQ0FBa0IsQ0FBbEI7QUFDQUQsUUFBQUEsWUFBWSxDQUFDQyxJQUFiLENBQWtCLENBQWxCO0FBQ0FELFFBQUFBLFlBQVksQ0FBQ0MsSUFBYixDQUFrQixDQUFsQjtBQUNBRCxRQUFBQSxZQUFZLENBQUNDLElBQWIsQ0FBa0IsQ0FBbEI7QUFDQUQsUUFBQUEsWUFBWSxDQUFDQyxJQUFiLENBQWtCLENBQWxCO0FBQ0E7QUFDRDs7QUFDRCxRQUFJcEIsV0FBVyxHQUFHSyxPQUFPLEdBQUcsQ0FBNUIsRUFBK0I7QUFDOUJjLE1BQUFBLFlBQVksQ0FBQ0MsSUFBYixDQUFrQixLQUFsQjtBQUNBOztBQUVERCxJQUFBQSxZQUFZLENBQUNDLElBQWIsQ0FBa0JmLE9BQWxCO0FBQ0E7O0FBRUQsTUFBTWdCLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQUMsQ0FBQyxFQUFJO0FBQzdCbEMsSUFBQUEsNERBQVksQ0FBQztBQUFFVyxNQUFBQSxNQUFNLEVBQU5BLE1BQUY7QUFBVWtCLE1BQUFBLElBQUksRUFBRUQsTUFBTSxDQUFDTSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsU0FBVjtBQUF0QixLQUFELENBQVosQ0FENkIsQ0FFN0I7QUFDQSxHQUhEOztBQUlBLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUNoQ3JDLElBQUFBLDREQUFZLENBQUM7QUFBRVcsTUFBQUEsTUFBTSxFQUFOQSxNQUFGO0FBQVVrQixNQUFBQSxJQUFJLEVBQUVqQixXQUFXLEdBQUc7QUFBOUIsS0FBRCxDQUFaLENBRGdDLENBRWhDO0FBQ0EsR0FIRDs7QUFJQSxNQUFNMEIsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzVCdEMsSUFBQUEsNERBQVksQ0FBQztBQUFFVyxNQUFBQSxNQUFNLEVBQU5BLE1BQUY7QUFBVWtCLE1BQUFBLElBQUksRUFBRWpCLFdBQVcsR0FBRztBQUE5QixLQUFELENBQVosQ0FENEIsQ0FFNUI7QUFDQSxHQUhEOztBQUtBLE1BQU0yQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBQyxLQUFLLEVBQUk7QUFDNUJ6QixJQUFBQSxjQUFjLENBQUN5QixLQUFELENBQWQ7QUFDQWxCLElBQUFBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixFQUE2QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVlLEtBQWYsQ0FBN0I7QUFDQXhDLElBQUFBLDREQUFZLENBQUM7QUFBRVcsTUFBQUEsTUFBTSxFQUFOQSxNQUFGO0FBQVVrQixNQUFBQSxJQUFJLEVBQUUsQ0FBaEI7QUFBbUJZLE1BQUFBLEtBQUssRUFBRUQ7QUFBMUIsS0FBRCxDQUFaO0FBQ0EsR0FKRDs7QUFNQSxzQkFDQztBQUFLLGFBQVMsRUFBQywrQkFBZjtBQUFBLDJCQUNDO0FBQUssZUFBUyxFQUFDLEVBQWY7QUFBQSw2QkFDQztBQUFJLGlCQUFTLEVBQUMsOEJBQWQ7QUFBQSxnQ0FDQztBQUFBLGlDQUNDO0FBQ0MscUJBQVMsbUJBQVk1QixXQUFXLEtBQUssQ0FBaEIsSUFBcUIsb0JBQWpDLENBRFY7QUFFQyxvQkFBUSxFQUFDLElBRlY7QUFHQyxtQkFBTyxFQUFFeUIsa0JBSFY7QUFJQyxvQkFBUSxFQUFFekIsV0FBVyxLQUFLLENBSjNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxFQVdFSyxPQUFPLEdBQUcsQ0FBVixHQUNFYyxZQUFZLENBQUN6QixHQUFiLENBQWlCLFVBQUF1QixJQUFJO0FBQUEsOEJBQ3JCO0FBQUEsbUNBQ0M7QUFDQyxxQkFBTyxFQUFFSSxnQkFEVjtBQUVDLHVCQUFTLG1CQUNSckIsV0FBVyxLQUFLaUIsSUFBaEIsSUFDQSxvQ0FGUSxDQUZWO0FBQUEsd0JBT0VBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELGFBQVNBLElBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEcUI7QUFBQSxTQUFyQixDQURGLEdBY0VDLFNBQVMsQ0FBQ3hCLEdBQVYsQ0FBYyxVQUFBdUIsSUFBSTtBQUFBLDhCQUNsQjtBQUFBLG1DQUNDO0FBQ0MscUJBQU8sRUFBRUksZ0JBRFY7QUFFQyx1QkFBUyxtQkFDUnJCLFdBQVcsS0FBS2lCLElBQWhCLElBQ0Esb0NBRlEsQ0FGVjtBQUFBLHdCQU9FQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxhQUFTQSxJQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGtCO0FBQUEsU0FBbEIsQ0F6QkosZUF1Q0M7QUFBQSxpQ0FDQztBQUNDLHFCQUFTLG1CQUFZakIsV0FBVyxLQUFLSyxPQUFoQixJQUEyQixvQkFBdkMsQ0FEVjtBQUVDLG9CQUFRLEVBQUMsSUFGVjtBQUdDLG1CQUFPLEVBQUVxQixjQUhWO0FBSUMsb0JBQVEsRUFBRTFCLFdBQVcsS0FBS0ssT0FKM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXZDRCxlQWlEQztBQUFJLG1CQUFTLEVBQUMsdUJBQWQ7QUFBQSxrQ0FDQztBQUNDLHFCQUFTLEVBQUMsdUJBRFg7QUFFQyxtQkFBTyxFQUFFO0FBQUEscUJBQ1JzQixXQUFXLENBQUN6QixXQUFXLEtBQUssRUFBaEIsR0FBcUIsRUFBckIsR0FBMEJBLFdBQVcsS0FBSyxFQUFoQixHQUFxQixFQUFyQixHQUEwQixFQUFyRCxDQURIO0FBQUEsYUFGVjtBQUFBLHVCQU1FQSxXQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQVVDO0FBQ0MscUJBQVMsRUFBQyxpSEFEWDtBQUFBLG9DQUlDO0FBQ0MsdUJBQVMsRUFBQyw2REFEWDtBQUVDLHFCQUFPLEVBQUU7QUFBQSx1QkFBTXlCLFdBQVcsQ0FBQyxFQUFELENBQWpCO0FBQUEsZUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRCxlQVVDO0FBQ0MsdUJBQVMsRUFBQyw2REFEWDtBQUVDLHFCQUFPLEVBQUU7QUFBQSx1QkFBTUEsV0FBVyxDQUFDLEVBQUQsQ0FBakI7QUFBQSxlQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVZELGVBZ0JDO0FBQ0MsdUJBQVMsRUFBQyw2REFEWDtBQUVDLHFCQUFPLEVBQUU7QUFBQSx1QkFBTUEsV0FBVyxDQUFDLEVBQUQsQ0FBakI7QUFBQSxlQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWhCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBMEZBOztHQTlKUTlCO1VBQ09iOzs7S0FEUGE7QUFnS1QsK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdpbmF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1taXhlZC1zcGFjZXMtYW5kLXRhYnMgKi9cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZpbHRlclNlYXJjaCBmcm9tICcuLi91dGlscy9maWx0ZXJTZWFyY2gnO1xyXG5cclxuZnVuY3Rpb24gcmFuZ2Uoc3RhcnQsIGVuZCkge1xyXG5cdHJldHVybiBBcnJheShlbmQgLSBzdGFydCArIDEpXHJcblx0XHQuZmlsbCgpXHJcblx0XHQubWFwKChfLCBpZHgpID0+IHN0YXJ0ICsgaWR4KTtcclxufVxyXG5cclxuZnVuY3Rpb24gUGFnaW5hdGlvbih7IHJlc3VsdCB9KSB7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcblx0Y29uc3QgW2xpbWl0TnVtYmVyLCBzZXRMaW1pdE51bWJlcl0gPSB1c2VTdGF0ZSgxMik7XHJcblxyXG5cdGNvbnN0IGluZGV4UGFnZSA9IHJlc3VsdCAlIGxpbWl0TnVtYmVyID09PSAwID8gMCA6IDE7XHJcblx0Y29uc3QgbWF4UGFnZSA9IChyZXN1bHQgLSAocmVzdWx0ICUgbGltaXROdW1iZXIpKSAvIGxpbWl0TnVtYmVyICsgaW5kZXhQYWdlO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKE9iamVjdC5rZXlzKHJvdXRlci5xdWVyeSkubGVuZ3RoID09PSAwKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnX2x0ZCcsIEpTT04uc3RyaW5naWZ5KGxpbWl0TnVtYmVyKSk7XHJcblx0XHRjb25zdCBsdGQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnX2x0ZCcpO1xyXG5cdFx0c2V0TGltaXROdW1iZXIoTnVtYmVyKGx0ZCkpO1xyXG5cdFx0c2V0Q3VycmVudFBhZ2Uocm91dGVyLnF1ZXJ5LnBhZ2UpO1xyXG5cdH0sIFtyb3V0ZXIucXVlcnldKTtcclxuXHJcblx0Y29uc3QgdG90YWxQYWdlID0gcmFuZ2UoMSwgbWF4UGFnZSk7XHJcblxyXG5cdGxldCBuZXdUb3RhbFBhZ2UgPSBbXTtcclxuXHJcblx0aWYgKG1heFBhZ2UgPiA2KSB7XHJcblx0XHRpZiAoY3VycmVudFBhZ2UgPj0gMyAmJiBjdXJyZW50UGFnZSA8PSBtYXhQYWdlIC0gMykge1xyXG5cdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChjdXJyZW50UGFnZSAtIDIpO1xyXG5cdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChjdXJyZW50UGFnZSAtIDEpO1xyXG5cdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChjdXJyZW50UGFnZSk7XHJcblx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKGN1cnJlbnRQYWdlICsgMSk7XHJcblx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKGN1cnJlbnRQYWdlICsgMik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoY3VycmVudFBhZ2UgPiBtYXhQYWdlIC0gMykge1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKG1heFBhZ2UgLSA1KTtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChtYXhQYWdlIC0gNCk7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2gobWF4UGFnZSAtIDMpO1xyXG5cdFx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKG1heFBhZ2UgLSAyKTtcclxuXHRcdFx0XHRuZXdUb3RhbFBhZ2UucHVzaChtYXhQYWdlIC0gMSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2goMSk7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2goMik7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2goMyk7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2goNCk7XHJcblx0XHRcdFx0bmV3VG90YWxQYWdlLnB1c2goNSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChjdXJyZW50UGFnZSA8IG1heFBhZ2UgLSAzKSB7XHJcblx0XHRcdG5ld1RvdGFsUGFnZS5wdXNoKCcuLi4nKTtcclxuXHRcdH1cclxuXHJcblx0XHRuZXdUb3RhbFBhZ2UucHVzaChtYXhQYWdlKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGhhbmRsZVBhZ2luYXRpb24gPSBlID0+IHtcclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgcGFnZTogTnVtYmVyKGUudGFyZ2V0LmlubmVySFRNTCkgfSk7XHJcblx0XHQvLyBzZXRDdXJyZW50UGFnZShOdW1iZXIoZS50YXJnZXQuaW5uZXJIVE1MKSk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVQcmV2aW91c1BhZ2UgPSAoKSA9PiB7XHJcblx0XHRmaWx0ZXJTZWFyY2goeyByb3V0ZXIsIHBhZ2U6IGN1cnJlbnRQYWdlIC0gMSB9KTtcclxuXHRcdC8vIHNldEN1cnJlbnRQYWdlKGN1cnJlbnRQYWdlIC0gMSk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVOZXh0UGFnZSA9ICgpID0+IHtcclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgcGFnZTogY3VycmVudFBhZ2UgKyAxIH0pO1xyXG5cdFx0Ly8gc2V0Q3VycmVudFBhZ2UoY3VycmVudFBhZ2UgKyAxKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVMaW1pdCA9IHZhbHVlID0+IHtcclxuXHRcdHNldExpbWl0TnVtYmVyKHZhbHVlKTtcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdfbHRkJywgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuXHRcdGZpbHRlclNlYXJjaCh7IHJvdXRlciwgcGFnZTogMSwgbGltaXQ6IHZhbHVlIH0pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBteS00IHB0LTQnPlxyXG5cdFx0XHQ8bmF2IGNsYXNzTmFtZT0nJz5cclxuXHRcdFx0XHQ8dWwgY2xhc3NOYW1lPSdmbGV4IHNwYWNlLXgtMiBpdGVtcy1jZW50ZXIgJz5cclxuXHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGJ1dHRvbiAke2N1cnJlbnRQYWdlID09PSAxICYmICdjdXJzb3Itbm90LWFsbG93ZWQnfWB9XHJcblx0XHRcdFx0XHRcdFx0dGFiSW5kZXg9Jy0xJ1xyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzUGFnZX1cclxuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17Y3VycmVudFBhZ2UgPT09IDF9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQmbGFxdW87XHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdHttYXhQYWdlID4gNlxyXG5cdFx0XHRcdFx0XHQ/IG5ld1RvdGFsUGFnZS5tYXAocGFnZSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtwYWdlfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZVBhZ2luYXRpb259XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgYnV0dG9uICR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50UGFnZSA9PT0gcGFnZSAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3RleHQtcmVkLTYwMCBib3JkZXIgYm9yZGVyLXJlZC01MDAnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fWB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7cGFnZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHQgICkpXHJcblx0XHRcdFx0XHRcdDogdG90YWxQYWdlLm1hcChwYWdlID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxsaSBrZXk9e3BhZ2V9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlUGFnaW5hdGlvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BidXR0b24gJHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlID09PSBwYWdlICYmXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQndGV4dC1yZWQtNjAwIGJvcmRlciBib3JkZXItcmVkLTUwMCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtwYWdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdCAgKSl9XHJcblxyXG5cdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgYnV0dG9uICR7Y3VycmVudFBhZ2UgPT09IG1heFBhZ2UgJiYgJ2N1cnNvci1ub3QtYWxsb3dlZCd9YH1cclxuXHRcdFx0XHRcdFx0XHR0YWJJbmRleD0nLTEnXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlTmV4dFBhZ2V9XHJcblx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2N1cnJlbnRQYWdlID09PSBtYXhQYWdlfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0JnJhcXVvO1xyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSdncm91cCByZWxhdGl2ZSB6LVs5OV0nPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSd0ZXh0LXhzIHRleHQtZ3JheS01MDAnXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdGhhbmRsZUxpbWl0KGxpbWl0TnVtYmVyID09PSAxMiA/IDI0IDogbGltaXROdW1iZXIgPT09IDI0ID8gNDggOiAxMilcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHR7bGltaXROdW1iZXJ9L3RyYW5nXHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naGlkZGVuIGdyb3VwLWhvdmVyOmZsZXggZmxleC1jb2wgYWJzb2x1dGUgYm90dG9tLTUgbGVmdC0wIFxyXG5cdFx0XHRcdFx0XHRib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgYmctZ3JheS0xMDAgcHktMidcclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2N1cnNvci1wb2ludGVyIGhvdmVyOmJnLWdyYXktMjAwIHB4LTUgdGV4dC14cyB0ZXh0LWdyYXktNTAwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlTGltaXQoMTIpfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdDEyXHJcblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2N1cnNvci1wb2ludGVyIGhvdmVyOmJnLWdyYXktMjAwIHB4LTUgdGV4dC14cyB0ZXh0LWdyYXktNTAwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlTGltaXQoMjQpfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdDI0XHJcblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2N1cnNvci1wb2ludGVyIGhvdmVyOmJnLWdyYXktMjAwIHB4LTUgdGV4dC14cyB0ZXh0LWdyYXktNTAwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlTGltaXQoNDgpfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdDQ4XHJcblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0PC91bD5cclxuXHRcdFx0PC9uYXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uO1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImZpbHRlclNlYXJjaCIsInJhbmdlIiwic3RhcnQiLCJlbmQiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaWR4IiwiUGFnaW5hdGlvbiIsInJlc3VsdCIsInJvdXRlciIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJsaW1pdE51bWJlciIsInNldExpbWl0TnVtYmVyIiwiaW5kZXhQYWdlIiwibWF4UGFnZSIsIk9iamVjdCIsImtleXMiLCJxdWVyeSIsImxlbmd0aCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwibHRkIiwiZ2V0SXRlbSIsIk51bWJlciIsInBhZ2UiLCJ0b3RhbFBhZ2UiLCJuZXdUb3RhbFBhZ2UiLCJwdXNoIiwiaGFuZGxlUGFnaW5hdGlvbiIsImUiLCJ0YXJnZXQiLCJpbm5lckhUTUwiLCJoYW5kbGVQcmV2aW91c1BhZ2UiLCJoYW5kbGVOZXh0UGFnZSIsImhhbmRsZUxpbWl0IiwidmFsdWUiLCJsaW1pdCJdLCJzb3VyY2VSb290IjoiIn0=