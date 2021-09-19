(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_tailwind_Product_js"],{

/***/ "./components/tailwind/Product.js":
/*!****************************************!*\
  !*** ./components/tailwind/Product.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-currency-formatter */ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/GlobalState */ "./store/GlobalState.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\Works\\VSCode\\NextJS\\next-website-mintlala\\components\\tailwind\\Product.js",
    _s = $RefreshSig$();







var MAX_RATING = 5;
var MIN_RATING = 3;

function Product(_ref) {
  _s();

  var _this = this;

  var product = _ref.product;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_store_GlobalState__WEBPACK_IMPORTED_MODULE_6__.DataContext),
      state = _useContext.state;

  var categories = state.categories;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)),
      rating = _useState[0];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(Math.random() < 0.5),
      hasPrime = _useState2[0];

  var findCategoryNameFromId = function findCategoryNameFromId(id) {
    return categories.filter(function (category) {
      return category._id === id;
    }).map(function (category) {
      return category.name;
    });
  };

  return (
    /*#__PURE__*/
    //transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "relative flex flex-col m-5 md:m-2 bg-white z-30 p-5 pt-10 cursor-pointer \r shadow-md transition duration-300 transform hover:-translate-y-2 hover:shadow-lg",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "absolute top-2 right-2 capitalize text-xs text-gray-400 italic",
        children: findCategoryNameFromId(product.category)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 4
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: product.images[0].url,
        alt: "Product",
        height: 300,
        width: 300,
        objectFit: "contain",
        onClick: function onClick() {
          return router.push("/product/".concat(product._id));
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 4
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        className: "my-5 line-clamp-2 capitalize",
        onClick: function onClick() {
          return router.push("/product/".concat(product._id));
        },
        children: product.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 4
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex justify-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex",
          children: Array(rating).fill().map(function (_, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.StarIcon, {
                className: "h-5 text-yellow-500"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 9
              }, _this)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 8
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: product.inStock <= 0 ? 'text-red-500' : 'text-green-600',
          children: product.inStock <= 0 ? "H\u1EBFt h\xE0ng" : "Kho: ".concat(product.inStock)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 4
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-xs my-2 line-clamp-2",
        children: product.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 4
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex space-x-5 ".concat(hasPrime ? '' : 'mb-4'),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-gray-600 line-through",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_5___default()), {
            quantity: product.priceOrigin,
            currency: "VND",
            pattern: "##,### !",
            group: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 6
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-red-600",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_5___default()), {
            quantity: product.priceSale,
            currency: "VND",
            pattern: "##,### !",
            group: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 6
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 4
      }, this), hasPrime ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex items-center space-x-2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "https://links.papareact.com/fdw",
          alt: "Giao h\xE0ng mi\u1EC5n ph\xED",
          className: "w-12"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-xs text-gray-500",
          children: "Giao h\xE0ng mi\u1EC5n ph\xED"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 5
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-xs text-gray-500 my-2",
        children: "TP. H\u1ED3 Ch\xED Minh"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: function onClick() {
          return router.push("/product/".concat(product._id));
        },
        className: "mx-auto button-blue p-2 text-gray-700 font-semibold text-xl",
        children: "Xem chi ti\u1EBFt"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 4
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 3
    }, this)
  );
}

_s(Product, "vVpKyvvxpnRdVK+Z+IYLOAWt01I=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = Product;
/* harmony default export */ __webpack_exports__["default"] = (Product);

var _c;

$RefreshReg$(_c, "Product");

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

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js ***!
  \************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory(__webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")) :
	0;
}(this, (function (react,PropTypes) { 'use strict';

react = react && react.hasOwnProperty('default') ? react['default'] : react;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;

var locales = {
  af: {
    p: '!#,##0.00',
    g: ' ',
    d: ','
  },
  af_NA: {
    h: 'af'
  },
  af_ZA: {
    h: 'af'
  },
  agq: {
    p: '#,##0.00!',
    g: ' ',
    d: ','
  },
  agq_CM: {
    h: 'agq'
  },
  ak: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ak_GH: {
    h: 'ak'
  },
  am: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  am_ET: {
    h: 'am'
  },
  ar: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  ar_001: {
    h: 'ar'
  },
  ar_AE: {
    h: 'ar'
  },
  ar_BH: {
    h: 'ar'
  },
  ar_DJ: {
    h: 'ar'
  },
  ar_DZ: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  ar_EG: {
    h: 'ar'
  },
  ar_EH: {
    h: 'ar'
  },
  ar_ER: {
    h: 'ar'
  },
  ar_IL: {
    h: 'ar'
  },
  ar_IQ: {
    h: 'ar'
  },
  ar_JO: {
    h: 'ar'
  },
  ar_KM: {
    h: 'ar'
  },
  ar_KW: {
    h: 'ar'
  },
  ar_LB: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  ar_LY: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  ar_MA: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  ar_MR: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  ar_OM: {
    h: 'ar'
  },
  ar_PS: {
    h: 'ar'
  },
  ar_QA: {
    h: 'ar'
  },
  ar_SA: {
    h: 'ar'
  },
  ar_SD: {
    h: 'ar'
  },
  ar_SO: {
    h: 'ar'
  },
  ar_SS: {
    h: 'ar'
  },
  ar_SY: {
    h: 'ar'
  },
  ar_TD: {
    h: 'ar'
  },
  ar_TN: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  ar_YE: {
    h: 'ar'
  },
  as: {
    p: '! #,##,##0.00',
    g: ',',
    d: '.'
  },
  as_IN: {
    h: 'as'
  },
  asa: {
    p: '#,##0.00 !',
    g: ',',
    d: '.'
  },
  asa_TZ: {
    h: 'asa'
  },
  ast: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  ast_ES: {
    h: 'ast'
  },
  az: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  az_Cyrl: {
    h: 'az'
  },
  az_Cyrl_AZ: {
    h: 'az'
  },
  az_Latn: {
    h: 'az'
  },
  az_Latn_AZ: {
    h: 'az'
  },
  bas: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  bas_CM: {
    h: 'bas'
  },
  be: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  be_BY: {
    h: 'be'
  },
  bem: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  bem_ZM: {
    h: 'bem'
  },
  bez: {
    p: '#,##0.00!',
    g: ',',
    d: '.'
  },
  bez_TZ: {
    h: 'bez'
  },
  bg: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  bg_BG: {
    h: 'bg'
  },
  bm: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  bm_ML: {
    h: 'bm'
  },
  bn: {
    p: '#,##,##0.00!',
    g: ',',
    d: '.'
  },
  bn_BD: {
    h: 'bn'
  },
  bn_IN: {
    h: 'bn'
  },
  bo: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  bo_CN: {
    h: 'bo'
  },
  bo_IN: {
    h: 'bo'
  },
  br: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  br_FR: {
    h: 'br'
  },
  brx: {
    p: '! #,##,##0.00',
    g: ',',
    d: '.'
  },
  brx_IN: {
    h: 'brx'
  },
  bs: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  bs_Cyrl: {
    h: 'bs'
  },
  bs_Cyrl_BA: {
    h: 'bs'
  },
  bs_Latn: {
    h: 'bs'
  },
  bs_Latn_BA: {
    h: 'bs'
  },
  ca: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  ca_AD: {
    h: 'ca'
  },
  ca_ES: {
    h: 'ca'
  },
  ca_ES_VALENCIA: {
    h: 'ca'
  },
  ca_FR: {
    h: 'ca'
  },
  ca_IT: {
    h: 'ca'
  },
  ce: {
    p: '#,##0.00 !',
    g: ',',
    d: '.'
  },
  ce_RU: {
    h: 'ce'
  },
  cgg: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  cgg_UG: {
    h: 'cgg'
  },
  chr: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  chr_US: {
    h: 'chr'
  },
  ckb: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ckb_IQ: {
    h: 'ckb'
  },
  ckb_IR: {
    h: 'ckb'
  },
  cs: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  cs_CZ: {
    h: 'cs'
  },
  cu: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  cu_RU: {
    h: 'cu'
  },
  cy: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  cy_GB: {
    h: 'cy'
  },
  da: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  da_DK: {
    h: 'da'
  },
  da_GL: {
    h: 'da'
  },
  dav: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  dav_KE: {
    h: 'dav'
  },
  de: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  de_AT: {
    p: '! #,##0.00',
    g: ' ',
    d: ','
  },
  de_BE: {
    h: 'de'
  },
  de_CH: {
    p: '! #,##0.00;!-#,##0.00',
    g: '\'',
    d: '.'
  },
  de_DE: {
    h: 'de'
  },
  de_LI: {
    p: '! #,##0.00',
    g: '\'',
    d: '.'
  },
  de_LU: {
    h: 'de'
  },
  dje: {
    p: '#,##0.00!',
    g: ' ',
    d: '.'
  },
  dje_NE: {
    h: 'dje'
  },
  dsb: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  dsb_DE: {
    h: 'dsb'
  },
  dua: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  dua_CM: {
    h: 'dua'
  },
  dyo: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  dyo_SN: {
    h: 'dyo'
  },
  dz: {
    p: '!#,##,##0.00',
    g: ',',
    d: '.'
  },
  dz_BT: {
    h: 'dz'
  },
  ebu: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ebu_KE: {
    h: 'ebu'
  },
  ee: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ee_GH: {
    h: 'ee'
  },
  ee_TG: {
    h: 'ee'
  },
  el: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  el_CY: {
    h: 'el'
  },
  el_GR: {
    h: 'el'
  },
  en: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  en_001: {
    h: 'en'
  },
  en_150: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  en_AG: {
    h: 'en'
  },
  en_AI: {
    h: 'en'
  },
  en_AS: {
    h: 'en'
  },
  en_AT: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  en_AU: {
    h: 'en'
  },
  en_BB: {
    h: 'en'
  },
  en_BE: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  en_BI: {
    h: 'en'
  },
  en_BM: {
    h: 'en'
  },
  en_BS: {
    h: 'en'
  },
  en_BW: {
    h: 'en'
  },
  en_BZ: {
    h: 'en'
  },
  en_CA: {
    h: 'en'
  },
  en_CC: {
    h: 'en'
  },
  en_CH: {
    p: '! #,##0.00;!-#,##0.00',
    g: ',',
    d: '.'
  },
  en_CK: {
    h: 'en'
  },
  en_CM: {
    h: 'en'
  },
  en_CX: {
    h: 'en'
  },
  en_CY: {
    h: 'en'
  },
  en_DE: {
    h: 'en'
  },
  en_DG: {
    h: 'en'
  },
  en_DK: {
    h: 'en'
  },
  en_DM: {
    h: 'en'
  },
  en_ER: {
    h: 'en'
  },
  en_FI: {
    p: '!#,##0.00',
    g: ' ',
    d: '.'
  },
  en_FJ: {
    h: 'en'
  },
  en_FK: {
    h: 'en'
  },
  en_FM: {
    h: 'en'
  },
  en_GB: {
    h: 'en'
  },
  en_GD: {
    h: 'en'
  },
  en_GG: {
    h: 'en'
  },
  en_GH: {
    h: 'en'
  },
  en_GI: {
    h: 'en'
  },
  en_GM: {
    h: 'en'
  },
  en_GU: {
    h: 'en'
  },
  en_GY: {
    h: 'en'
  },
  en_HK: {
    h: 'en'
  },
  en_IE: {
    h: 'en'
  },
  en_IL: {
    h: 'en'
  },
  en_IM: {
    h: 'en'
  },
  en_IN: {
    p: '! #,##,##0.00',
    g: ',',
    d: '.'
  },
  en_IO: {
    h: 'en'
  },
  en_JE: {
    h: 'en'
  },
  en_JM: {
    h: 'en'
  },
  en_KE: {
    h: 'en'
  },
  en_KI: {
    h: 'en'
  },
  en_KN: {
    h: 'en'
  },
  en_KY: {
    h: 'en'
  },
  en_LC: {
    h: 'en'
  },
  en_LR: {
    h: 'en'
  },
  en_LS: {
    h: 'en'
  },
  en_MG: {
    h: 'en'
  },
  en_MH: {
    h: 'en'
  },
  en_MO: {
    h: 'en'
  },
  en_MP: {
    h: 'en'
  },
  en_MS: {
    h: 'en'
  },
  en_MT: {
    h: 'en'
  },
  en_MU: {
    h: 'en'
  },
  en_MW: {
    h: 'en'
  },
  en_MY: {
    h: 'en'
  },
  en_NA: {
    h: 'en'
  },
  en_NF: {
    h: 'en'
  },
  en_NG: {
    h: 'en'
  },
  en_NL: {
    p: '! #,##0.00;! -#,##0.00',
    g: ',',
    d: '.'
  },
  en_NR: {
    h: 'en'
  },
  en_NU: {
    h: 'en'
  },
  en_NZ: {
    h: 'en'
  },
  en_PG: {
    h: 'en'
  },
  en_PH: {
    h: 'en'
  },
  en_PK: {
    h: 'en'
  },
  en_PN: {
    h: 'en'
  },
  en_PR: {
    h: 'en'
  },
  en_PW: {
    h: 'en'
  },
  en_RW: {
    h: 'en'
  },
  en_SB: {
    h: 'en'
  },
  en_SC: {
    h: 'en'
  },
  en_SD: {
    h: 'en'
  },
  en_SE: {
    p: '!#,##0.00',
    g: ' ',
    d: '.'
  },
  en_SG: {
    h: 'en'
  },
  en_SH: {
    h: 'en'
  },
  en_SI: {
    h: 'en'
  },
  en_SL: {
    h: 'en'
  },
  en_SS: {
    h: 'en'
  },
  en_SX: {
    h: 'en'
  },
  en_SZ: {
    h: 'en'
  },
  en_TC: {
    h: 'en'
  },
  en_TK: {
    h: 'en'
  },
  en_TO: {
    h: 'en'
  },
  en_TT: {
    h: 'en'
  },
  en_TV: {
    h: 'en'
  },
  en_TZ: {
    h: 'en'
  },
  en_UG: {
    h: 'en'
  },
  en_UM: {
    h: 'en'
  },
  en_US: {
    h: 'en'
  },
  en_US_POSIX: {
    p: '! #0.00',
    g: ',',
    d: '.'
  },
  en_VC: {
    h: 'en'
  },
  en_VG: {
    h: 'en'
  },
  en_VI: {
    h: 'en'
  },
  en_VU: {
    h: 'en'
  },
  en_WS: {
    h: 'en'
  },
  en_ZA: {
    p: '!#,##0.00',
    g: ' ',
    d: ','
  },
  en_ZM: {
    h: 'en'
  },
  en_ZW: {
    h: 'en'
  },
  eo: {
    p: '!#,##0.00',
    g: ' ',
    d: ','
  },
  eo_001: {
    h: 'eo'
  },
  es: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  es_419: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  es_AR: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  es_BO: {
    h: 'es'
  },
  es_BR: {
    h: 'es'
  },
  es_CL: {
    p: '!#,##0.00;!-#,##0.00',
    g: '.',
    d: ','
  },
  es_CO: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  es_CR: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  es_CU: {
    h: 'es'
  },
  es_DO: {
    h: 'es'
  },
  es_EA: {
    h: 'es'
  },
  es_EC: {
    p: '!#,##0.00;!-#,##0.00',
    g: '.',
    d: ','
  },
  es_ES: {
    h: 'es'
  },
  es_GQ: {
    p: '!#,##0.00',
    g: '.',
    d: ','
  },
  es_GT: {
    h: 'es'
  },
  es_HN: {
    h: 'es'
  },
  es_IC: {
    h: 'es'
  },
  es_MX: {
    h: 'es'
  },
  es_NI: {
    h: 'es'
  },
  es_PA: {
    h: 'es'
  },
  es_PE: {
    h: 'es'
  },
  es_PH: {
    h: 'es'
  },
  es_PR: {
    h: 'es'
  },
  es_PY: {
    p: '! #,##0.00;! -#,##0.00',
    g: '.',
    d: ','
  },
  es_SV: {
    h: 'es'
  },
  es_US: {
    h: 'es'
  },
  es_UY: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  es_VE: {
    p: '!#,##0.00;!-#,##0.00',
    g: '.',
    d: ','
  },
  et: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  et_EE: {
    h: 'et'
  },
  eu: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  eu_ES: {
    h: 'eu'
  },
  ewo: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  ewo_CM: {
    h: 'ewo'
  },
  fa: {
    p: '‎!#,##0.00',
    g: ',',
    d: '.'
  },
  fa_AF: {
    h: 'fa'
  },
  fa_IR: {
    h: 'fa'
  },
  ff: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  ff_CM: {
    h: 'ff'
  },
  ff_GN: {
    h: 'ff'
  },
  ff_MR: {
    h: 'ff'
  },
  ff_SN: {
    h: 'ff'
  },
  fi: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  fi_FI: {
    h: 'fi'
  },
  fil: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  fil_PH: {
    h: 'fil'
  },
  fo: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  fo_DK: {
    h: 'fo'
  },
  fo_FO: {
    h: 'fo'
  },
  fr: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  fr_BE: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  fr_BF: {
    h: 'fr'
  },
  fr_BI: {
    h: 'fr'
  },
  fr_BJ: {
    h: 'fr'
  },
  fr_BL: {
    h: 'fr'
  },
  fr_CA: {
    h: 'fr'
  },
  fr_CD: {
    h: 'fr'
  },
  fr_CF: {
    h: 'fr'
  },
  fr_CG: {
    h: 'fr'
  },
  fr_CH: {
    p: '! #,##0.00;!-#,##0.00',
    g: ' ',
    d: '.'
  },
  fr_CI: {
    h: 'fr'
  },
  fr_CM: {
    h: 'fr'
  },
  fr_DJ: {
    h: 'fr'
  },
  fr_DZ: {
    h: 'fr'
  },
  fr_FR: {
    h: 'fr'
  },
  fr_GA: {
    h: 'fr'
  },
  fr_GF: {
    h: 'fr'
  },
  fr_GN: {
    h: 'fr'
  },
  fr_GP: {
    h: 'fr'
  },
  fr_GQ: {
    h: 'fr'
  },
  fr_HT: {
    h: 'fr'
  },
  fr_KM: {
    h: 'fr'
  },
  fr_LU: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  fr_MA: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  fr_MC: {
    h: 'fr'
  },
  fr_MF: {
    h: 'fr'
  },
  fr_MG: {
    h: 'fr'
  },
  fr_ML: {
    h: 'fr'
  },
  fr_MQ: {
    h: 'fr'
  },
  fr_MR: {
    h: 'fr'
  },
  fr_MU: {
    h: 'fr'
  },
  fr_NC: {
    h: 'fr'
  },
  fr_NE: {
    h: 'fr'
  },
  fr_PF: {
    h: 'fr'
  },
  fr_PM: {
    h: 'fr'
  },
  fr_RE: {
    h: 'fr'
  },
  fr_RW: {
    h: 'fr'
  },
  fr_SC: {
    h: 'fr'
  },
  fr_SN: {
    h: 'fr'
  },
  fr_SY: {
    h: 'fr'
  },
  fr_TD: {
    h: 'fr'
  },
  fr_TG: {
    h: 'fr'
  },
  fr_TN: {
    h: 'fr'
  },
  fr_VU: {
    h: 'fr'
  },
  fr_WF: {
    h: 'fr'
  },
  fr_YT: {
    h: 'fr'
  },
  fur: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  fur_IT: {
    h: 'fur'
  },
  fy: {
    p: '! #,##0.00;! #,##0.00-',
    g: '.',
    d: ','
  },
  fy_NL: {
    h: 'fy'
  },
  ga: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ga_IE: {
    h: 'ga'
  },
  gd: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  gd_GB: {
    h: 'gd'
  },
  gl: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  gl_ES: {
    h: 'gl'
  },
  gsw: {
    p: '#,##0.00 !',
    g: '’',
    d: '.'
  },
  gsw_CH: {
    h: 'gsw'
  },
  gsw_FR: {
    h: 'gsw'
  },
  gsw_LI: {
    h: 'gsw'
  },
  gu: {
    p: '!#,##,##0.00',
    g: ',',
    d: '.'
  },
  gu_IN: {
    h: 'gu'
  },
  guz: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  guz_KE: {
    h: 'guz'
  },
  gv: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  gv_IM: {
    h: 'gv'
  },
  ha: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  ha_GH: {
    h: 'ha'
  },
  ha_NE: {
    h: 'ha'
  },
  ha_NG: {
    h: 'ha'
  },
  haw: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  haw_US: {
    h: 'haw'
  },
  he: {
    p: '#,##0.00 !',
    g: ',',
    d: '.'
  },
  he_IL: {
    h: 'he'
  },
  hi: {
    p: '!#,##,##0.00',
    g: ',',
    d: '.'
  },
  hi_IN: {
    h: 'hi'
  },
  hr: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  hr_BA: {
    h: 'hr'
  },
  hr_HR: {
    h: 'hr'
  },
  hsb: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  hsb_DE: {
    h: 'hsb'
  },
  hu: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  hu_HU: {
    h: 'hu'
  },
  hy: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  hy_AM: {
    h: 'hy'
  },
  id: {
    p: '!#,##0.00',
    g: '.',
    d: ','
  },
  id_ID: {
    h: 'id'
  },
  ig: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ig_NG: {
    h: 'ig'
  },
  ii: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ii_CN: {
    h: 'ii'
  },
  is: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  is_IS: {
    h: 'is'
  },
  it: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  it_CH: {
    p: '! #,##0.00;!-#,##0.00',
    g: '\'',
    d: '.'
  },
  it_IT: {
    h: 'it'
  },
  it_SM: {
    h: 'it'
  },
  ja: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ja_JP: {
    h: 'ja'
  },
  jgo: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  jgo_CM: {
    h: 'jgo'
  },
  jmc: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  jmc_TZ: {
    h: 'jmc'
  },
  ka: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  ka_GE: {
    h: 'ka'
  },
  kab: {
    p: '#,##0.00!',
    g: ' ',
    d: ','
  },
  kab_DZ: {
    h: 'kab'
  },
  kam: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  kam_KE: {
    h: 'kam'
  },
  kde: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  kde_TZ: {
    h: 'kde'
  },
  kea: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  kea_CV: {
    h: 'kea'
  },
  khq: {
    p: '#,##0.00!',
    g: ' ',
    d: '.'
  },
  khq_ML: {
    h: 'khq'
  },
  ki: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ki_KE: {
    h: 'ki'
  },
  kk: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  kk_KZ: {
    h: 'kk'
  },
  kkj: {
    p: '!#,##0.00',
    g: '.',
    d: ','
  },
  kkj_CM: {
    h: 'kkj'
  },
  kl: {
    p: '!#,##0.00;!-#,##0.00',
    g: '.',
    d: ','
  },
  kl_GL: {
    h: 'kl'
  },
  kln: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  kln_KE: {
    h: 'kln'
  },
  km: {
    p: '!#,##0.00',
    g: '.',
    d: ','
  },
  km_KH: {
    h: 'km'
  },
  kn: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  kn_IN: {
    h: 'kn'
  },
  ko: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ko_KP: {
    h: 'ko'
  },
  ko_KR: {
    h: 'ko'
  },
  kok: {
    p: '! #,##,##0.00',
    g: ',',
    d: '.'
  },
  kok_IN: {
    h: 'kok'
  },
  ks: {
    p: '! #,##,##0.00',
    g: ',',
    d: '.'
  },
  ks_IN: {
    h: 'ks'
  },
  ksb: {
    p: '#,##0.00!',
    g: ',',
    d: '.'
  },
  ksb_TZ: {
    h: 'ksb'
  },
  ksf: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  ksf_CM: {
    h: 'ksf'
  },
  ksh: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  ksh_DE: {
    h: 'ksh'
  },
  kw: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  kw_GB: {
    h: 'kw'
  },
  ky: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  ky_KG: {
    h: 'ky'
  },
  lag: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  lag_TZ: {
    h: 'lag'
  },
  lb: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  lb_LU: {
    h: 'lb'
  },
  lg: {
    p: '#,##0.00!',
    g: ',',
    d: '.'
  },
  lg_UG: {
    h: 'lg'
  },
  lkt: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  lkt_US: {
    h: 'lkt'
  },
  ln: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  ln_AO: {
    h: 'ln'
  },
  ln_CD: {
    h: 'ln'
  },
  ln_CF: {
    h: 'ln'
  },
  ln_CG: {
    h: 'ln'
  },
  lo: {
    p: '!#,##0.00;!-#,##0.00',
    g: '.',
    d: ','
  },
  lo_LA: {
    h: 'lo'
  },
  lrc: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  lrc_IQ: {
    h: 'lrc'
  },
  lrc_IR: {
    h: 'lrc'
  },
  lt: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  lt_LT: {
    h: 'lt'
  },
  lu: {
    p: '#,##0.00!',
    g: '.',
    d: ','
  },
  lu_CD: {
    h: 'lu'
  },
  luo: {
    p: '#,##0.00!',
    g: ',',
    d: '.'
  },
  luo_KE: {
    h: 'luo'
  },
  luy: {
    p: '!#,##0.00;!- #,##0.00',
    g: ',',
    d: '.'
  },
  luy_KE: {
    h: 'luy'
  },
  lv: {
    p: '#0.00 !',
    g: ' ',
    d: ','
  },
  lv_LV: {
    h: 'lv'
  },
  mas: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  mas_KE: {
    h: 'mas'
  },
  mas_TZ: {
    h: 'mas'
  },
  mer: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  mer_KE: {
    h: 'mer'
  },
  mfe: {
    p: '!#,##0.00',
    g: ' ',
    d: '.'
  },
  mfe_MU: {
    h: 'mfe'
  },
  mg: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  mg_MG: {
    h: 'mg'
  },
  mgh: {
    p: '!#,##0.00',
    g: '.',
    d: ','
  },
  mgh_MZ: {
    h: 'mgh'
  },
  mgo: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  mgo_CM: {
    h: 'mgo'
  },
  mk: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  mk_MK: {
    h: 'mk'
  },
  ml: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ml_IN: {
    h: 'ml'
  },
  mn: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  mn_MN: {
    h: 'mn'
  },
  mr: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  mr_IN: {
    h: 'mr'
  },
  ms: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ms_BN: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  ms_MY: {
    h: 'ms'
  },
  ms_SG: {
    h: 'ms'
  },
  mt: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  mt_MT: {
    h: 'mt'
  },
  mua: {
    p: '!#,##0.00',
    g: '.',
    d: ','
  },
  mua_CM: {
    h: 'mua'
  },
  my: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  my_MM: {
    h: 'my'
  },
  mzn: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  mzn_IR: {
    h: 'mzn'
  },
  naq: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  naq_NA: {
    h: 'naq'
  },
  nb: {
    p: '! #,##0.00',
    g: ' ',
    d: ','
  },
  nb_NO: {
    h: 'nb'
  },
  nb_SJ: {
    h: 'nb'
  },
  nd: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  nd_ZW: {
    h: 'nd'
  },
  ne: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  ne_IN: {
    h: 'ne'
  },
  ne_NP: {
    h: 'ne'
  },
  nl: {
    p: '! #,##0.00;! -#,##0.00',
    g: '.',
    d: ','
  },
  nl_AW: {
    h: 'nl'
  },
  nl_BE: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  nl_BQ: {
    h: 'nl'
  },
  nl_CW: {
    h: 'nl'
  },
  nl_NL: {
    h: 'nl'
  },
  nl_SR: {
    h: 'nl'
  },
  nl_SX: {
    h: 'nl'
  },
  nmg: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  nmg_CM: {
    h: 'nmg'
  },
  nn: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  nn_NO: {
    h: 'nn'
  },
  nnh: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  nnh_CM: {
    h: 'nnh'
  },
  nus: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  nus_SS: {
    h: 'nus'
  },
  nyn: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  nyn_UG: {
    h: 'nyn'
  },
  om: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  om_ET: {
    h: 'om'
  },
  om_KE: {
    h: 'om'
  },
  or: {
    p: '! #,##,##0.00',
    g: ',',
    d: '.'
  },
  or_IN: {
    h: 'or'
  },
  os: {
    p: '! #,##0.00',
    g: ' ',
    d: ','
  },
  os_GE: {
    h: 'os'
  },
  os_RU: {
    h: 'os'
  },
  pa: {
    p: '! #,##,##0.00',
    g: ',',
    d: '.'
  },
  pa_Arab: {
    h: 'pa'
  },
  pa_Arab_PK: {
    h: 'pa'
  },
  pa_Guru: {
    h: 'pa'
  },
  pa_Guru_IN: {
    h: 'pa'
  },
  pl: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  pl_PL: {
    h: 'pl'
  },
  prg: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  prg_001: {
    h: 'prg'
  },
  ps: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  ps_AF: {
    h: 'ps'
  },
  pt: {
    p: '!#,##0.00',
    g: '.',
    d: ','
  },
  pt_AO: {
    h: 'pt'
  },
  pt_BR: {
    h: 'pt'
  },
  pt_CH: {
    h: 'pt'
  },
  pt_CV: {
    h: 'pt'
  },
  pt_GQ: {
    h: 'pt'
  },
  pt_GW: {
    h: 'pt'
  },
  pt_LU: {
    h: 'pt'
  },
  pt_MO: {
    h: 'pt'
  },
  pt_MZ: {
    h: 'pt'
  },
  pt_PT: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  pt_ST: {
    h: 'pt'
  },
  pt_TL: {
    h: 'pt'
  },
  qu: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  qu_BO: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  qu_EC: {
    h: 'qu'
  },
  qu_PE: {
    h: 'qu'
  },
  rm: {
    p: '#,##0.00 !',
    g: '’',
    d: '.'
  },
  rm_CH: {
    h: 'rm'
  },
  rn: {
    p: '#,##0.00!',
    g: '.',
    d: ','
  },
  rn_BI: {
    h: 'rn'
  },
  ro: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  ro_MD: {
    h: 'ro'
  },
  ro_RO: {
    h: 'ro'
  },
  rof: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  rof_TZ: {
    h: 'rof'
  },
  root: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  ru: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  ru_BY: {
    h: 'ru'
  },
  ru_KG: {
    h: 'ru'
  },
  ru_KZ: {
    h: 'ru'
  },
  ru_MD: {
    h: 'ru'
  },
  ru_RU: {
    h: 'ru'
  },
  ru_UA: {
    h: 'ru'
  },
  rw: {
    p: '!#,##0.00',
    g: '.',
    d: ','
  },
  rw_RW: {
    h: 'rw'
  },
  rwk: {
    p: '#,##0.00!',
    g: ',',
    d: '.'
  },
  rwk_TZ: {
    h: 'rwk'
  },
  sah: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  sah_RU: {
    h: 'sah'
  },
  saq: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  saq_KE: {
    h: 'saq'
  },
  sbp: {
    p: '#,##0.00!',
    g: ',',
    d: '.'
  },
  sbp_TZ: {
    h: 'sbp'
  },
  se: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  se_FI: {
    h: 'se'
  },
  se_NO: {
    h: 'se'
  },
  se_SE: {
    h: 'se'
  },
  seh: {
    p: '#,##0.00!',
    g: '.',
    d: ','
  },
  seh_MZ: {
    h: 'seh'
  },
  ses: {
    p: '#,##0.00!',
    g: ' ',
    d: '.'
  },
  ses_ML: {
    h: 'ses'
  },
  sg: {
    p: '!#,##0.00;!-#,##0.00',
    g: '.',
    d: ','
  },
  sg_CF: {
    h: 'sg'
  },
  shi: {
    p: '#,##0.00!',
    g: ' ',
    d: ','
  },
  shi_Latn: {
    h: 'shi'
  },
  shi_Latn_MA: {
    h: 'shi'
  },
  shi_Tfng: {
    h: 'shi'
  },
  shi_Tfng_MA: {
    h: 'shi'
  },
  si: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  si_LK: {
    h: 'si'
  },
  sk: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  sk_SK: {
    h: 'sk'
  },
  sl: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  sl_SI: {
    h: 'sl'
  },
  smn: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  smn_FI: {
    h: 'smn'
  },
  sn: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  sn_ZW: {
    h: 'sn'
  },
  so: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  so_DJ: {
    h: 'so'
  },
  so_ET: {
    h: 'so'
  },
  so_KE: {
    h: 'so'
  },
  so_SO: {
    h: 'so'
  },
  sq: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  sq_AL: {
    h: 'sq'
  },
  sq_MK: {
    h: 'sq'
  },
  sq_XK: {
    h: 'sq'
  },
  sr: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  sr_Cyrl: {
    h: 'sr'
  },
  sr_Cyrl_BA: {
    h: 'sr'
  },
  sr_Cyrl_ME: {
    h: 'sr'
  },
  sr_Cyrl_RS: {
    h: 'sr'
  },
  sr_Cyrl_XK: {
    h: 'sr'
  },
  sr_Latn: {
    h: 'sr'
  },
  sr_Latn_BA: {
    h: 'sr'
  },
  sr_Latn_ME: {
    h: 'sr'
  },
  sr_Latn_RS: {
    h: 'sr'
  },
  sr_Latn_XK: {
    h: 'sr'
  },
  sv: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  sv_AX: {
    h: 'sv'
  },
  sv_FI: {
    h: 'sv'
  },
  sv_SE: {
    h: 'sv'
  },
  sw: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  sw_CD: {
    p: '!#,##0.00',
    g: '.',
    d: ','
  },
  sw_KE: {
    h: 'sw'
  },
  sw_TZ: {
    h: 'sw'
  },
  sw_UG: {
    h: 'sw'
  },
  ta: {
    p: '! #,##,##0.00',
    g: ',',
    d: '.'
  },
  ta_IN: {
    h: 'ta'
  },
  ta_LK: {
    h: 'ta'
  },
  ta_MY: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  ta_SG: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  te: {
    p: '!#,##,##0.00',
    g: ',',
    d: '.'
  },
  te_IN: {
    h: 'te'
  },
  teo: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  teo_KE: {
    h: 'teo'
  },
  teo_UG: {
    h: 'teo'
  },
  th: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  th_TH: {
    h: 'th'
  },
  ti: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ti_ER: {
    h: 'ti'
  },
  ti_ET: {
    h: 'ti'
  },
  tk: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  tk_TM: {
    h: 'tk'
  },
  to: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  to_TO: {
    h: 'to'
  },
  tr: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  tr_CY: {
    h: 'tr'
  },
  tr_TR: {
    h: 'tr'
  },
  twq: {
    p: '#,##0.00!',
    g: ' ',
    d: '.'
  },
  twq_NE: {
    h: 'twq'
  },
  tzm: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  tzm_MA: {
    h: 'tzm'
  },
  ug: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ug_CN: {
    h: 'ug'
  },
  uk: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  uk_UA: {
    h: 'uk'
  },
  ur: {
    p: '! #,##,##0.00',
    g: ',',
    d: '.'
  },
  ur_IN: {
    h: 'ur'
  },
  ur_PK: {
    h: 'ur'
  },
  uz: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  uz_Arab: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  uz_Arab_AF: {
    h: 'uz'
  },
  uz_Cyrl: {
    p: '! #,##0.00',
    g: ' ',
    d: ','
  },
  uz_Cyrl_UZ: {
    h: 'uz'
  },
  uz_Latn: {
    h: 'uz'
  },
  uz_Latn_UZ: {
    h: 'uz'
  },
  vai: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  vai_Latn: {
    h: 'vai'
  },
  vai_Latn_LR: {
    h: 'vai'
  },
  vai_Vaii: {
    h: 'vai'
  },
  vai_Vaii_LR: {
    h: 'vai'
  },
  vi: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  vi_VN: {
    h: 'vi'
  },
  vo: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  vo_001: {
    h: 'vo'
  },
  vun: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  vun_TZ: {
    h: 'vun'
  },
  wae: {
    p: '!#,##0.00',
    g: '’',
    d: ','
  },
  wae_CH: {
    h: 'wae'
  },
  xog: {
    p: '#,##0.00 !',
    g: ',',
    d: '.'
  },
  xog_UG: {
    h: 'xog'
  },
  yav: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  yav_CM: {
    h: 'yav'
  },
  yi: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  yi_001: {
    h: 'yi'
  },
  yo: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  yo_BJ: {
    h: 'yo'
  },
  yo_NG: {
    h: 'yo'
  },
  yue: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  yue_HK: {
    h: 'yue'
  },
  zgh: {
    p: '#,##0.00!',
    g: ' ',
    d: ','
  },
  zgh_MA: {
    h: 'zgh'
  },
  zh: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  zh_Hans: {
    h: 'zh'
  },
  zh_Hans_CN: {
    h: 'zh'
  },
  zh_Hans_HK: {
    h: 'zh'
  },
  zh_Hans_MO: {
    h: 'zh'
  },
  zh_Hans_SG: {
    h: 'zh'
  },
  zh_Hant: {
    h: 'zh'
  },
  zh_Hant_HK: {
    h: 'zh'
  },
  zh_Hant_MO: {
    h: 'zh'
  },
  zh_Hant_TW: {
    h: 'zh'
  },
  zu: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  zu_ZA: {
    h: 'zu'
  }
};

var defaultLocales = {
  AED: 'ar_AE',
  AFN: 'fa_AF',
  ALL: 'sq',
  AMD: 'hy',
  ANG: 'nl',
  AOA: 'pt_AO',
  ARS: 'es_AR',
  AUD: 'en',
  AWG: 'nl_AW',
  AZN: 'az',
  BAM: 'bs',
  BBD: 'en_BB',
  BDT: 'bn_BD',
  BGN: 'bg',
  BHD: 'ar_BH',
  BIF: 'fr_BI',
  BMD: 'en_BM',
  BND: 'ms_BN',
  BOB: 'es_BO',
  BRL: 'pt_BR',
  BSD: 'en_BS',
  BTN: 'dz',
  BWP: 'en_BW',
  BYR: 'be',
  BZD: 'en_BZ',
  CAD: 'en_CA',
  CDF: 'fr_CD',
  CHF: 'de_CH',
  CLP: 'es_CL',
  CNY: 'zh_Hans_CN',
  COP: 'es_CO',
  CRC: 'es_CR',
  CUP: 'es_CU',
  CVE: 'pt_CV',
  CZK: 'cs',
  DJF: 'fr_DJ',
  DKK: 'da_DK',
  DOP: 'es_DO',
  DZD: 'ar_DZ',
  EGP: 'ar_EG',
  ERN: 'ti_ER',
  ETB: 'am',
  EUR: 'de',
  FJD: 'en_FJ',
  FKP: 'en_FK',
  GBP: 'en',
  GEL: 'ka',
  GHS: 'en_GH',
  GIP: 'en_GI',
  GMD: 'en_GM',
  GNF: 'fr_GN',
  GTQ: 'es_GT',
  GYD: 'en_GY',
  HKD: 'zh_Hans_HK',
  HNL: 'es_HN',
  HRK: 'hr_HR',
  HTG: 'en',
  HUF: 'hu_HU',
  IDR: 'id',
  ILS: 'he',
  INR: 'en_IN',
  IQD: 'ar_IQ',
  IRR: 'fa_IR',
  ISK: 'is',
  JMD: 'en_JM',
  JOD: 'ar_JO',
  JPY: 'ja',
  KES: 'en_KE',
  KGS: 'ky',
  KHR: 'km',
  KMF: 'ar',
  KPW: 'ko_KP',
  KRW: 'ko_KR',
  KWD: 'ar_KW',
  KYD: 'en_KY',
  KZT: 'kk',
  LAK: 'lo',
  LBP: 'ar_LB',
  LKR: 'si',
  LRD: 'en_LR',
  LSL: 'en_LS',
  LYD: 'ar_LY',
  MAD: 'ar',
  MDL: 'ro',
  MGA: 'fr_MG',
  MKD: 'mk',
  MMK: 'my',
  MNT: 'mn',
  MOP: 'zh',
  MRO: 'ar_MR',
  MUR: 'en_MU',
  MVR: 'en',
  MWK: 'en',
  MXN: 'es_MX',
  MYR: 'ms_MY',
  MZN: 'pt_MZ',
  NAD: 'en_NA',
  NGN: 'en_NG',
  NIO: 'es_NI',
  NOK: 'nb_NO',
  NPR: 'ne',
  NZD: 'en_NZ',
  OMR: 'ar_OM',
  PAB: 'es_PA',
  PEN: 'es_PE',
  PGK: 'en_PG',
  PHP: 'fil',
  PKR: 'ur_PK',
  PLN: 'pl',
  PYG: 'es_PY',
  QAR: 'ar_QA',
  RON: 'ro',
  RSD: 'sr',
  RUB: 'ru',
  RWF: 'rw',
  SAR: 'ar_SA',
  SBD: 'en_SB',
  SCR: 'en_SC',
  SDG: 'ar_SD',
  SEK: 'sv_SE',
  SGD: 'en_SG',
  SHP: 'en_SH',
  SLL: 'en_SL',
  SOS: 'so_SO',
  SRD: 'nl_SR',
  SSP: 'en',
  STD: 'pt_ST',
  SYP: 'ar_SY',
  SZL: 'en_SZ',
  THB: 'th',
  TJS: 'en',
  TMT: 'tk',
  TND: 'ar_TN',
  TOP: 'to',
  TRY: 'tr_TR',
  TTD: 'en_TT',
  TWD: 'zh_Hant_TW',
  TZS: 'sw_TZ',
  UAH: 'uk',
  UGX: 'en_UG',
  USD: 'en_US',
  UYU: 'es_UY',
  UZS: 'uz',
  VEF: 'es_VE',
  VND: 'vi',
  VUV: 'en_BI',
  WST: 'en_AS',
  XAF: 'fr',
  XCD: 'en',
  XOF: 'fr',
  XPF: 'fr_PF',
  YER: 'ar_YE',
  ZAR: 'zu',
  ZMW: 'en_ZM',
  ZWL: 'en_ZW'
};

var symbols = {
  'AED': 'د.إ',
  'AFN': '؋',
  'ALL': 'L',
  'AMD': 'AMD',
  'ANG': 'ƒ',
  'AOA': 'Kz',
  'ARS': '$',
  'AUD': '$',
  'AWG': 'ƒ',
  'AZN': '₼',
  'BAM': 'KM',
  'BBD': '$',
  'BDT': '৳',
  'BGN': 'лв',
  'BHD': '.د.ب',
  'BIF': 'FBu',
  'BMD': '$',
  'BND': '$',
  'BOB': 'Bs.',
  'BRL': 'R$',
  'BSD': '$',
  'BTC': '฿',
  'BTN': 'Nu.',
  'BWP': 'P',
  'BYR': 'p.',
  'BZD': 'BZ$',
  'CAD': '$',
  'CDF': 'FC',
  'CHF': 'Fr.',
  'CLP': '$',
  'CNY': '¥',
  'COP': '$',
  'CRC': '₡',
  'CUC': '$',
  'CUP': '₱',
  'CVE': '$',
  'CZK': 'Kč',
  'DJF': 'Fdj',
  'DKK': 'kr',
  'DOP': 'RD$',
  'DZD': 'دج',
  'EEK': 'kr',
  'EGP': '£',
  'ERN': 'Nfk',
  'ETB': 'Br',
  'ETH': 'Ξ',
  'EUR': '€',
  'FJD': '$',
  'FKP': '£',
  'GBP': '£',
  'GEL': '₾',
  'GGP': '£',
  'GHC': '₵',
  'GHS': 'GH₵',
  'GIP': '£',
  'GMD': 'D',
  'GNF': 'FG',
  'GTQ': 'Q',
  'GYD': '$',
  'HKD': '$',
  'HNL': 'L',
  'HRK': 'kn',
  'HTG': 'G',
  'HUF': 'Ft',
  'IDR': 'Rp',
  'ILS': '₪',
  'IMP': '£',
  'INR': '₹',
  'IQD': 'ع.د',
  'IRR': '﷼',
  'ISK': 'kr',
  'JEP': '£',
  'JMD': 'J$',
  'JOD': 'JD',
  'JPY': '¥',
  'KES': 'KSh',
  'KGS': 'лв',
  'KHR': '៛',
  'KMF': 'CF',
  'KPW': '₩',
  'KRW': '₩',
  'KWD': 'KD',
  'KYD': '$',
  'KZT': '₸',
  'LAK': '₭',
  'LBP': '£',
  'LKR': '₨',
  'LRD': '$',
  'LSL': 'M',
  'LTC': 'Ł',
  'LTL': 'Lt',
  'LVL': 'Ls',
  'LYD': 'LD',
  'MAD': 'MAD',
  'MDL': 'lei',
  'MGA': 'Ar',
  'MKD': 'ден',
  'MMK': 'K',
  'MNT': '₮',
  'MOP': 'MOP$',
  'MUR': '₨',
  'MVR': 'Rf',
  'MWK': 'MK',
  'MXN': '$',
  'MYR': 'RM',
  'MZN': 'MT',
  'NAD': '$',
  'NGN': '₦',
  'NIO': 'C$',
  'NOK': 'kr',
  'NPR': '₨',
  'NZD': '$',
  'OMR': '﷼',
  'PAB': 'B/.',
  'PEN': 'S/.',
  'PGK': 'K',
  'PHP': '₱',
  'PKR': '₨',
  'PLN': 'zł',
  'PYG': 'Gs',
  'QAR': '﷼',
  'RMB': '￥',
  'RON': 'lei',
  'RSD': 'Дин.',
  'RUB': '₽',
  'RWF': 'R₣',
  'SAR': '﷼',
  'SBD': '$',
  'SCR': '₨',
  'SDG': 'ج.س.',
  'SEK': 'kr',
  'SGD': '$',
  'SHP': '£',
  'SLL': 'Le',
  'SOS': 'S',
  'SRD': '$',
  'SSP': '£',
  'STD': 'Db',
  'SVC': '$',
  'SYP': '£',
  'SZL': 'E',
  'THB': '฿',
  'TJS': 'SM',
  'TMT': 'T',
  'TND': 'د.ت',
  'TOP': 'T$',
  'TRL': '₤',
  'TRY': '₺',
  'TTD': 'TT$',
  'TVD': '$',
  'TWD': 'NT$',
  'TZS': 'TSh',
  'UAH': '₴',
  'UGX': 'USh',
  'USD': '$',
  'UYU': '$U',
  'UZS': 'лв',
  'VEF': 'Bs',
  'VND': '₫',
  'VUV': 'VT',
  'WST': 'WS$',
  'XAF': 'FCFA',
  'XBT': 'Ƀ',
  'XCD': '$',
  'XOF': 'CFA',
  'XPF': '₣',
  'YER': '﷼',
  'ZAR': 'R',
  'ZWD': 'Z$'
};

var ReactCurrencyFormatter = function ReactCurrencyFormatter(props) {
  var getFormatter = function getFormatter(options) {
    var locale = void 0,
        currency = void 0,
        symbol = void 0,
        pattern = void 0,
        decimal = void 0,
        group = void 0;

    // Helper Functions
    var isUndefined = function isUndefined(o) {
      return typeof o === 'undefined';
    };

    var toFixed = function toFixed(n, precision) {
      return (+(Math.round(+(n + 'e' + precision)) + 'e' + -precision)).toFixed(precision);
    };

    // Perform checks on inputs and set up defaults as needed (defaults to en, USD)
    if (isUndefined(options)) {
      options = {};
    }

    currency = isUndefined(options.currency) ? 'USD' : options.currency.toUpperCase();
    locale = isUndefined(options.locale) ? locales[defaultLocales[currency]] : locales[options.locale];

    if (!isUndefined(locale.h)) locale = locales[locale.h]; // Locale inheritance

    symbol = isUndefined(options.symbol) ? symbols[currency] : options.symbol;

    if (isUndefined(symbol)) symbol = currency; // In case we don't have the symbol, just use the ccy code

    pattern = isUndefined(options.pattern) ? locale.p : options.pattern;
    decimal = isUndefined(options.decimal) ? locale.d : options.decimal;
    group = isUndefined(options.group) ? locale.g : options.group;

    //console.log(locale);

    // encodePattern Function - returns a few simple characteristics of the pattern provided
    var encodePattern = function encodePattern(pattern) {
      var decimalPlaces = 0;
      var frontPadding = '';
      var backPadding = '';
      var groupLengths = [];

      //console.log(pattern);

      var patternStarted = false;
      var decimalsStarted = false;
      var patternEnded = false;

      var currentGroupLength = 0;
      var zeroLength = 0;

      for (var i = 0; i < pattern.length; ++i) {
        var c = pattern[i];

        if (!patternStarted && ['#', '0', ',', '.'].indexOf(c) > -1) {
          patternStarted = true;
        }

        if (!patternStarted) {
          frontPadding += c;
        }

        switch (c) {
          case '#':
            ++currentGroupLength;
            break;

          case '0':
            if (decimalsStarted) {
              ++decimalPlaces;
            } else {
              ++currentGroupLength;++zeroLength;
            }
            break;

          case ',':
            groupLengths.push(currentGroupLength);
            currentGroupLength = 0;
            break;

          case '.':
            groupLengths.push(currentGroupLength);
            decimalsStarted = true;
            break;
        }

        if (patternStarted && !(['#', '0', ',', '.'].indexOf(c) > -1)) {
          patternEnded = true;

          if (!decimalsStarted) {
            groupLengths.push(currentGroupLength);
          }
        }

        if (patternEnded) {
          backPadding += c;
        }
      }

      var encodedPattern = {
        decimalPlaces: decimalPlaces,
        frontPadding: frontPadding,
        backPadding: backPadding,
        groupLengths: groupLengths,
        zeroLength: zeroLength
      };

      return encodedPattern;
    };

    // Zero Padding helper function
    var pad = function pad(n, width) {
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
    };

    // Format function
    var format = function format(n, f) {
      var formattedNumber = toFixed(Math.abs(n), f.decimalPlaces);

      var splitNumber = formattedNumber.split(".");

      // i.e. we actually have some sort of grouping in the values
      if (f.groupLengths.length > 1) {
        var segment = "";
        var cursor = splitNumber[0].length;
        var groupIndex = f.groupLengths.length - 1;

        while (cursor > 0) {
          if (groupIndex <= 0) {
            groupIndex = 1;
          } // Always reset to the first group length if the number is big

          var currentGroupLength = f.groupLengths[groupIndex];

          var start = cursor - currentGroupLength;

          segment = splitNumber[0].substring(start, cursor) + f.group + segment;

          cursor -= currentGroupLength;

          --groupIndex;
        }

        segment = segment.substring(0, segment.length - 1);
        //console.log(segment);
      }

      if (segment.length < f.zeroLength) {
        segment = pad(segment, f.zeroLength);
      }

      var formattedNumber = f.frontPadding + segment + (isUndefined(splitNumber[1]) ? '' : f.decimal + splitNumber[1]) + f.backPadding;

      return formattedNumber.replace('!', symbol);
    };

    // Use encode function to work out pattern
    var patternArray = pattern.split(";");
    var positiveFormat = encodePattern(patternArray[0]);

    positiveFormat.symbol = symbol;
    positiveFormat.decimal = decimal;
    positiveFormat.group = group;

    var negativeFormat = isUndefined(patternArray[1]) ? encodePattern("-" + patternArray[0]) : encodePattern(patternArray[1]);

    negativeFormat.symbol = symbol;
    negativeFormat.decimal = decimal;
    negativeFormat.group = group;

    var zero = isUndefined(patternArray[2]) ? format(0, positiveFormat) : patternArray[2];

    if (!isUndefined(patternArray[2])) {
      zeroFormat = patternArray[2];
    }

    return function (n) {
      var formattedNumber = void 0;
      n = Number(n);
      if (n > 0) {
        formattedNumber = format(n, positiveFormat);
      } else if (n == 0) {
        formattedNumber = zero.replace('!', symbol);
      } else {
        formattedNumber = format(n, negativeFormat);
      }
      return formattedNumber;
    };
  };

  var format = function format(number, options) {
    var formatterFunction = getFormatter(options);

    return formatterFunction(number);
  };

  var quantity = props.quantity,
      currency = props.currency,
      symbol = props.symbol,
      locale = props.locale,
      decimal = props.decimal,
      group = props.group,
      pattern = props.pattern;


  return format(props.quantity, {
    currency: currency,
    symbol: symbol,
    locale: locale,
    decimal: decimal,
    group: group,
    pattern: pattern
  });
};

ReactCurrencyFormatter.defaultProps = {
  currency: 'USD'
};

ReactCurrencyFormatter.propTypes = {
  quantity: PropTypes.number.isRequired,
  currency: PropTypes.string,
  symbol: PropTypes.string,
  locale: PropTypes.string,
  decimal: PropTypes.string,
  group: PropTypes.string,
  pattern: PropTypes.string
};

return ReactCurrencyFormatter;

})));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9jb21wb25lbnRzX3RhaWx3aW5kX1Byb2R1Y3RfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1PLFVBQVUsR0FBRyxDQUFuQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxDQUFuQjs7QUFFQSxTQUFTQyxPQUFULE9BQThCO0FBQUE7O0FBQUE7O0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBQzdCLE1BQU1DLE1BQU0sR0FBR1Qsc0RBQVMsRUFBeEI7O0FBRDZCLG9CQUVYQyxpREFBVSxDQUFDRywyREFBRCxDQUZDO0FBQUEsTUFFckJNLEtBRnFCLGVBRXJCQSxLQUZxQjs7QUFBQSxNQUdyQkMsVUFIcUIsR0FHTkQsS0FITSxDQUdyQkMsVUFIcUI7O0FBQUEsa0JBS1pULCtDQUFRLENBQUNVLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsTUFBaUJULFVBQVUsR0FBR0MsVUFBYixHQUEwQixDQUEzQyxJQUFnREEsVUFBM0QsQ0FBRCxDQUxJO0FBQUEsTUFLdEJTLE1BTHNCOztBQUFBLG1CQU1WYiwrQ0FBUSxDQUFDVSxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsR0FBakIsQ0FORTtBQUFBLE1BTXRCRSxRQU5zQjs7QUFRN0IsTUFBTUMsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFBQyxFQUFFLEVBQUk7QUFDcEMsV0FBT1AsVUFBVSxDQUFDUSxNQUFYLENBQWtCLFVBQUFDLFFBQVE7QUFBQSxhQUFJQSxRQUFRLENBQUNDLEdBQVQsS0FBaUJILEVBQXJCO0FBQUEsS0FBMUIsRUFBbURJLEdBQW5ELENBQXVELFVBQUFGLFFBQVE7QUFBQSxhQUFJQSxRQUFRLENBQUNHLElBQWI7QUFBQSxLQUEvRCxDQUFQO0FBQ0EsR0FGRDs7QUFJQTtBQUFBO0FBQ0M7QUFDQTtBQUNDLGVBQVMsRUFBQyw4SkFEWDtBQUFBLDhCQUlDO0FBQUcsaUJBQVMsRUFBQyxnRUFBYjtBQUFBLGtCQUNFTixzQkFBc0IsQ0FBQ1QsT0FBTyxDQUFDWSxRQUFUO0FBRHhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRCxlQVFDLDhEQUFDLG1EQUFEO0FBQ0MsV0FBRyxFQUFFWixPQUFPLENBQUNnQixNQUFSLENBQWUsQ0FBZixFQUFrQkMsR0FEeEI7QUFFQyxXQUFHLEVBQUMsU0FGTDtBQUdDLGNBQU0sRUFBRSxHQUhUO0FBSUMsYUFBSyxFQUFFLEdBSlI7QUFLQyxpQkFBUyxFQUFDLFNBTFg7QUFNQyxlQUFPLEVBQUU7QUFBQSxpQkFBTWhCLE1BQU0sQ0FBQ2lCLElBQVAsb0JBQXdCbEIsT0FBTyxDQUFDYSxHQUFoQyxFQUFOO0FBQUE7QUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkQsZUFpQkM7QUFBSSxpQkFBUyxFQUFDLDhCQUFkO0FBQTZDLGVBQU8sRUFBRTtBQUFBLGlCQUFNWixNQUFNLENBQUNpQixJQUFQLG9CQUF3QmxCLE9BQU8sQ0FBQ2EsR0FBaEMsRUFBTjtBQUFBLFNBQXREO0FBQUEsa0JBQ0ViLE9BQU8sQ0FBQ21CO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCRCxlQXFCQztBQUFLLGlCQUFTLEVBQUMsc0JBQWY7QUFBQSxnQ0FDQztBQUFLLG1CQUFTLEVBQUMsTUFBZjtBQUFBLG9CQUNFQyxLQUFLLENBQUNiLE1BQUQsQ0FBTCxDQUNDYyxJQURELEdBRUNQLEdBRkQsQ0FFSyxVQUFDUSxDQUFELEVBQUlDLENBQUo7QUFBQSxnQ0FDSjtBQUFBLHFDQUNDLDhEQUFDLDREQUFEO0FBQVUseUJBQVMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsZUFBVUEsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURJO0FBQUEsV0FGTDtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFXQztBQUFLLG1CQUFTLEVBQUV2QixPQUFPLENBQUN3QixPQUFSLElBQW1CLENBQW5CLEdBQXVCLGNBQXZCLEdBQXdDLGdCQUF4RDtBQUFBLG9CQUNFeEIsT0FBTyxDQUFDd0IsT0FBUixJQUFtQixDQUFuQix1Q0FBNEN4QixPQUFPLENBQUN3QixPQUFwRDtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckJELGVBcUNDO0FBQUcsaUJBQVMsRUFBQywyQkFBYjtBQUFBLGtCQUEwQ3hCLE9BQU8sQ0FBQ3lCO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyQ0QsZUF1Q0M7QUFBSyxpQkFBUywyQkFBb0JqQixRQUFRLEdBQUcsRUFBSCxHQUFRLE1BQXBDLENBQWQ7QUFBQSxnQ0FDQztBQUFLLG1CQUFTLEVBQUMsNEJBQWY7QUFBQSxpQ0FDQyw4REFBQyxpRUFBRDtBQUFVLG9CQUFRLEVBQUVSLE9BQU8sQ0FBQzBCLFdBQTVCO0FBQXlDLG9CQUFRLEVBQUMsS0FBbEQ7QUFBd0QsbUJBQU8sRUFBQyxVQUFoRTtBQUEyRSxpQkFBSyxFQUFDO0FBQWpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBS0M7QUFBSyxtQkFBUyxFQUFDLGNBQWY7QUFBQSxpQ0FDQyw4REFBQyxpRUFBRDtBQUFVLG9CQUFRLEVBQUUxQixPQUFPLENBQUMyQixTQUE1QjtBQUF1QyxvQkFBUSxFQUFDLEtBQWhEO0FBQXNELG1CQUFPLEVBQUMsVUFBOUQ7QUFBeUUsaUJBQUssRUFBQztBQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2Q0QsRUFpREVuQixRQUFRLGdCQUNSO0FBQUssaUJBQVMsRUFBQyw2QkFBZjtBQUFBLGdDQUVDO0FBQUssYUFBRyxFQUFDLGlDQUFUO0FBQTJDLGFBQUcsRUFBQywrQkFBL0M7QUFBb0UsbUJBQVMsRUFBQztBQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZELGVBR0M7QUFBRyxtQkFBUyxFQUFDLHVCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURRLGdCQU9SO0FBQUssaUJBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhERixlQTJEQztBQUNDLGVBQU8sRUFBRTtBQUFBLGlCQUFNUCxNQUFNLENBQUNpQixJQUFQLG9CQUF3QmxCLE9BQU8sQ0FBQ2EsR0FBaEMsRUFBTjtBQUFBLFNBRFY7QUFFQyxpQkFBUyxFQUFDLDZEQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0REO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZEO0FBcUVBOztHQWpGUWQ7VUFDT1A7OztLQURQTztBQW1GVCwrREFBZUEsT0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViOztBQUVBLElBQUksSUFBcUM7QUFDekMsNkJBQTZCLG1CQUFPLENBQUMseUZBQTRCO0FBQ2pFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFdBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkdBQTZHO0FBQzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWIsY0FBYyxtQkFBTyxDQUFDLDBFQUFVO0FBQ2hDLGFBQWEsbUJBQU8sQ0FBQyxnRkFBZTs7QUFFcEMsMkJBQTJCLG1CQUFPLENBQUMseUZBQTRCO0FBQy9ELHFCQUFxQixtQkFBTyxDQUFDLHFFQUFrQjs7QUFFL0M7QUFDQTs7QUFFQSxJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQzs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDhCQUE4QjtBQUM5QixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsS0FBSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDRCQUE0QjtBQUM1QixPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsU0FBUyxLQUFxQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzQkFBc0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDREQUE0RDs7QUFFNUQ7O0FBRUEsZ0RBQWdEOztBQUVoRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNCQUFzQixvQkFBb0I7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsbUNBQW1DO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZOztBQUVaOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RhaWx3aW5kL1Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtY3VycmVuY3ktZm9ybWF0dGVyL2Rpc3QvcmVhY3QtY3VycmVuY3ktZm9ybWF0dGVyLnVtZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGFySWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDdXJyZW5jeSBmcm9tICdyZWFjdC1jdXJyZW5jeS1mb3JtYXR0ZXInO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uLy4uL3N0b3JlL0dsb2JhbFN0YXRlJztcclxuXHJcbmNvbnN0IE1BWF9SQVRJTkcgPSA1O1xyXG5jb25zdCBNSU5fUkFUSU5HID0gMztcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3QoeyBwcm9kdWN0IH0pIHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCB7IHN0YXRlIH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuXHRjb25zdCB7IGNhdGVnb3JpZXMgfSA9IHN0YXRlO1xyXG5cclxuXHRjb25zdCBbcmF0aW5nXSA9IHVzZVN0YXRlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChNQVhfUkFUSU5HIC0gTUlOX1JBVElORyArIDEpICsgTUlOX1JBVElORykpO1xyXG5cdGNvbnN0IFtoYXNQcmltZV0gPSB1c2VTdGF0ZShNYXRoLnJhbmRvbSgpIDwgMC41KTtcclxuXHJcblx0Y29uc3QgZmluZENhdGVnb3J5TmFtZUZyb21JZCA9IGlkID0+IHtcclxuXHRcdHJldHVybiBjYXRlZ29yaWVzLmZpbHRlcihjYXRlZ29yeSA9PiBjYXRlZ29yeS5faWQgPT09IGlkKS5tYXAoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkubmFtZSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdC8vdHJhbnNpdGlvbiBkdXJhdGlvbi0xMDAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEyNSBob3Zlcjp0ZXh0LXdoaXRlIGFjdGl2ZTp0ZXh0LXJlZC01MDBcclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPSdyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIG0tNSBtZDptLTIgYmctd2hpdGUgei0zMCBwLTUgcHQtMTAgY3Vyc29yLXBvaW50ZXIgXHJcblx0XHRcdFx0XHRzaGFkb3ctbWQgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIGhvdmVyOi10cmFuc2xhdGUteS0yIGhvdmVyOnNoYWRvdy1sZydcclxuXHRcdD5cclxuXHRcdFx0PHAgY2xhc3NOYW1lPSdhYnNvbHV0ZSB0b3AtMiByaWdodC0yIGNhcGl0YWxpemUgdGV4dC14cyB0ZXh0LWdyYXktNDAwIGl0YWxpYyc+XHJcblx0XHRcdFx0e2ZpbmRDYXRlZ29yeU5hbWVGcm9tSWQocHJvZHVjdC5jYXRlZ29yeSl9XHJcblx0XHRcdDwvcD5cclxuXHJcblx0XHRcdDxJbWFnZVxyXG5cdFx0XHRcdHNyYz17cHJvZHVjdC5pbWFnZXNbMF0udXJsfVxyXG5cdFx0XHRcdGFsdD0nUHJvZHVjdCdcclxuXHRcdFx0XHRoZWlnaHQ9ezMwMH1cclxuXHRcdFx0XHR3aWR0aD17MzAwfVxyXG5cdFx0XHRcdG9iamVjdEZpdD0nY29udGFpbidcclxuXHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL3Byb2R1Y3QvJHtwcm9kdWN0Ll9pZH1gKX1cclxuXHRcdFx0Lz5cclxuXHJcblx0XHRcdDxoNCBjbGFzc05hbWU9J215LTUgbGluZS1jbGFtcC0yIGNhcGl0YWxpemUnIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvcHJvZHVjdC8ke3Byb2R1Y3QuX2lkfWApfT5cclxuXHRcdFx0XHR7cHJvZHVjdC50aXRsZX1cclxuXHRcdFx0PC9oND5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2Vlbic+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxyXG5cdFx0XHRcdFx0e0FycmF5KHJhdGluZylcclxuXHRcdFx0XHRcdFx0LmZpbGwoKVxyXG5cdFx0XHRcdFx0XHQubWFwKChfLCBpKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBrZXk9e2l9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFN0YXJJY29uIGNsYXNzTmFtZT0naC01IHRleHQteWVsbG93LTUwMCcgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtwcm9kdWN0LmluU3RvY2sgPD0gMCA/ICd0ZXh0LXJlZC01MDAnIDogJ3RleHQtZ3JlZW4tNjAwJ30+XHJcblx0XHRcdFx0XHR7cHJvZHVjdC5pblN0b2NrIDw9IDAgPyBgSOG6v3QgaMOgbmdgIDogYEtobzogJHtwcm9kdWN0LmluU3RvY2t9YH1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQteHMgbXktMiBsaW5lLWNsYW1wLTInPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgZmxleCBzcGFjZS14LTUgJHtoYXNQcmltZSA/ICcnIDogJ21iLTQnfWB9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNjAwIGxpbmUtdGhyb3VnaCc+XHJcblx0XHRcdFx0XHQ8Q3VycmVuY3kgcXVhbnRpdHk9e3Byb2R1Y3QucHJpY2VPcmlnaW59IGN1cnJlbmN5PSdWTkQnIHBhdHRlcm49JyMjLCMjIyAhJyBncm91cD0nLicgLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQtcmVkLTYwMCc+XHJcblx0XHRcdFx0XHQ8Q3VycmVuY3kgcXVhbnRpdHk9e3Byb2R1Y3QucHJpY2VTYWxlfSBjdXJyZW5jeT0nVk5EJyBwYXR0ZXJuPScjIywjIyMgIScgZ3JvdXA9Jy4nIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0e2hhc1ByaW1lID8gKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTInPlxyXG5cdFx0XHRcdFx0ey8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAbmV4dC9uZXh0L25vLWltZy1lbGVtZW50ICovfVxyXG5cdFx0XHRcdFx0PGltZyBzcmM9J2h0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9mZHcnIGFsdD0nR2lhbyBow6BuZyBtaeG7hW4gcGjDrScgY2xhc3NOYW1lPSd3LTEyJyAvPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LXhzIHRleHQtZ3JheS01MDAnPkdpYW8gaMOgbmcgbWnhu4VuIHBow608L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCkgOiAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQteHMgdGV4dC1ncmF5LTUwMCBteS0yJz5UUC4gSOG7kyBDaMOtIE1pbmg8L2Rpdj5cclxuXHRcdFx0KX1cclxuXHJcblx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL3Byb2R1Y3QvJHtwcm9kdWN0Ll9pZH1gKX1cclxuXHRcdFx0XHRjbGFzc05hbWU9J214LWF1dG8gYnV0dG9uLWJsdWUgcC0yIHRleHQtZ3JheS03MDAgZm9udC1zZW1pYm9sZCB0ZXh0LXhsJ1xyXG5cdFx0XHQ+XHJcblx0XHRcdFx0WGVtIGNoaSB0aeG6v3RcclxuXHRcdFx0PC9idXR0b24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xyXG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgZWxlbWVudFR5cGU6IGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICArICdgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghUmVhY3RJcy5pc1ZhbGlkRWxlbWVudFR5cGUocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQgdHlwZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50cyBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXksIGdvdCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLiAnICtcbiAgICAgICAgICAgICdBIGNvbW1vbiBtaXN0YWtlIGlzIHRvIHdyaXRlIG9uZU9mKHgsIHksIHopIGluc3RlYWQgb2Ygb25lT2YoW3gsIHksIHpdKS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcywgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgU3RyaW5nKHByb3BWYWx1ZSkgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKGhhcyhwcm9wVmFsdWUsIGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICcgKyBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlcikgKyAnIGF0IGluZGV4ICcgKyBpICsgJy4nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBmYWxzeSB2YWx1ZSBjYW4ndCBiZSBhIFN5bWJvbFxuICAgIGlmICghcHJvcFZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBjaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZTtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdyZWFjdCcpLCByZXF1aXJlKCdwcm9wLXR5cGVzJykpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsncmVhY3QnLCAncHJvcC10eXBlcyddLCBmYWN0b3J5KSA6XG5cdChnbG9iYWwucmVhY3RDdXJyZW5jeUZvcm1hdHRlciA9IGZhY3RvcnkoZ2xvYmFsLlJlYWN0LGdsb2JhbC5Qcm9wVHlwZXMpKTtcbn0odGhpcywgKGZ1bmN0aW9uIChyZWFjdCxQcm9wVHlwZXMpIHsgJ3VzZSBzdHJpY3QnO1xuXG5yZWFjdCA9IHJlYWN0ICYmIHJlYWN0Lmhhc093blByb3BlcnR5KCdkZWZhdWx0JykgPyByZWFjdFsnZGVmYXVsdCddIDogcmVhY3Q7XG5Qcm9wVHlwZXMgPSBQcm9wVHlwZXMgJiYgUHJvcFR5cGVzLmhhc093blByb3BlcnR5KCdkZWZhdWx0JykgPyBQcm9wVHlwZXNbJ2RlZmF1bHQnXSA6IFByb3BUeXBlcztcblxudmFyIGxvY2FsZXMgPSB7XG4gIGFmOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBhZl9OQToge1xuICAgIGg6ICdhZidcbiAgfSxcbiAgYWZfWkE6IHtcbiAgICBoOiAnYWYnXG4gIH0sXG4gIGFncToge1xuICAgIHA6ICcjLCMjMC4wMCEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgYWdxX0NNOiB7XG4gICAgaDogJ2FncSdcbiAgfSxcbiAgYWs6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGFrX0dIOiB7XG4gICAgaDogJ2FrJ1xuICB9LFxuICBhbToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgYW1fRVQ6IHtcbiAgICBoOiAnYW0nXG4gIH0sXG4gIGFyOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgYXJfMDAxOiB7XG4gICAgaDogJ2FyJ1xuICB9LFxuICBhcl9BRToge1xuICAgIGg6ICdhcidcbiAgfSxcbiAgYXJfQkg6IHtcbiAgICBoOiAnYXInXG4gIH0sXG4gIGFyX0RKOiB7XG4gICAgaDogJ2FyJ1xuICB9LFxuICBhcl9EWjoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGFyX0VHOiB7XG4gICAgaDogJ2FyJ1xuICB9LFxuICBhcl9FSDoge1xuICAgIGg6ICdhcidcbiAgfSxcbiAgYXJfRVI6IHtcbiAgICBoOiAnYXInXG4gIH0sXG4gIGFyX0lMOiB7XG4gICAgaDogJ2FyJ1xuICB9LFxuICBhcl9JUToge1xuICAgIGg6ICdhcidcbiAgfSxcbiAgYXJfSk86IHtcbiAgICBoOiAnYXInXG4gIH0sXG4gIGFyX0tNOiB7XG4gICAgaDogJ2FyJ1xuICB9LFxuICBhcl9LVzoge1xuICAgIGg6ICdhcidcbiAgfSxcbiAgYXJfTEI6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBhcl9MWToge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGFyX01BOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgYXJfTVI6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBhcl9PTToge1xuICAgIGg6ICdhcidcbiAgfSxcbiAgYXJfUFM6IHtcbiAgICBoOiAnYXInXG4gIH0sXG4gIGFyX1FBOiB7XG4gICAgaDogJ2FyJ1xuICB9LFxuICBhcl9TQToge1xuICAgIGg6ICdhcidcbiAgfSxcbiAgYXJfU0Q6IHtcbiAgICBoOiAnYXInXG4gIH0sXG4gIGFyX1NPOiB7XG4gICAgaDogJ2FyJ1xuICB9LFxuICBhcl9TUzoge1xuICAgIGg6ICdhcidcbiAgfSxcbiAgYXJfU1k6IHtcbiAgICBoOiAnYXInXG4gIH0sXG4gIGFyX1REOiB7XG4gICAgaDogJ2FyJ1xuICB9LFxuICBhcl9UTjoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGFyX1lFOiB7XG4gICAgaDogJ2FyJ1xuICB9LFxuICBhczoge1xuICAgIHA6ICchICMsIyMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGFzX0lOOiB7XG4gICAgaDogJ2FzJ1xuICB9LFxuICBhc2E6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBhc2FfVFo6IHtcbiAgICBoOiAnYXNhJ1xuICB9LFxuICBhc3Q6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBhc3RfRVM6IHtcbiAgICBoOiAnYXN0J1xuICB9LFxuICBhejoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGF6X0N5cmw6IHtcbiAgICBoOiAnYXonXG4gIH0sXG4gIGF6X0N5cmxfQVo6IHtcbiAgICBoOiAnYXonXG4gIH0sXG4gIGF6X0xhdG46IHtcbiAgICBoOiAnYXonXG4gIH0sXG4gIGF6X0xhdG5fQVo6IHtcbiAgICBoOiAnYXonXG4gIH0sXG4gIGJhczoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGJhc19DTToge1xuICAgIGg6ICdiYXMnXG4gIH0sXG4gIGJlOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgYmVfQlk6IHtcbiAgICBoOiAnYmUnXG4gIH0sXG4gIGJlbToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgYmVtX1pNOiB7XG4gICAgaDogJ2JlbSdcbiAgfSxcbiAgYmV6OiB7XG4gICAgcDogJyMsIyMwLjAwIScsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBiZXpfVFo6IHtcbiAgICBoOiAnYmV6J1xuICB9LFxuICBiZzoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGJnX0JHOiB7XG4gICAgaDogJ2JnJ1xuICB9LFxuICBibToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgYm1fTUw6IHtcbiAgICBoOiAnYm0nXG4gIH0sXG4gIGJuOiB7XG4gICAgcDogJyMsIyMsIyMwLjAwIScsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBibl9CRDoge1xuICAgIGg6ICdibidcbiAgfSxcbiAgYm5fSU46IHtcbiAgICBoOiAnYm4nXG4gIH0sXG4gIGJvOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgYm9fQ046IHtcbiAgICBoOiAnYm8nXG4gIH0sXG4gIGJvX0lOOiB7XG4gICAgaDogJ2JvJ1xuICB9LFxuICBicjoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGJyX0ZSOiB7XG4gICAgaDogJ2JyJ1xuICB9LFxuICBicng6IHtcbiAgICBwOiAnISAjLCMjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBicnhfSU46IHtcbiAgICBoOiAnYnJ4J1xuICB9LFxuICBiczoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGJzX0N5cmw6IHtcbiAgICBoOiAnYnMnXG4gIH0sXG4gIGJzX0N5cmxfQkE6IHtcbiAgICBoOiAnYnMnXG4gIH0sXG4gIGJzX0xhdG46IHtcbiAgICBoOiAnYnMnXG4gIH0sXG4gIGJzX0xhdG5fQkE6IHtcbiAgICBoOiAnYnMnXG4gIH0sXG4gIGNhOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgY2FfQUQ6IHtcbiAgICBoOiAnY2EnXG4gIH0sXG4gIGNhX0VTOiB7XG4gICAgaDogJ2NhJ1xuICB9LFxuICBjYV9FU19WQUxFTkNJQToge1xuICAgIGg6ICdjYSdcbiAgfSxcbiAgY2FfRlI6IHtcbiAgICBoOiAnY2EnXG4gIH0sXG4gIGNhX0lUOiB7XG4gICAgaDogJ2NhJ1xuICB9LFxuICBjZToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGNlX1JVOiB7XG4gICAgaDogJ2NlJ1xuICB9LFxuICBjZ2c6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGNnZ19VRzoge1xuICAgIGg6ICdjZ2cnXG4gIH0sXG4gIGNocjoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgY2hyX1VTOiB7XG4gICAgaDogJ2NocidcbiAgfSxcbiAgY2tiOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBja2JfSVE6IHtcbiAgICBoOiAnY2tiJ1xuICB9LFxuICBja2JfSVI6IHtcbiAgICBoOiAnY2tiJ1xuICB9LFxuICBjczoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGNzX0NaOiB7XG4gICAgaDogJ2NzJ1xuICB9LFxuICBjdToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGN1X1JVOiB7XG4gICAgaDogJ2N1J1xuICB9LFxuICBjeToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgY3lfR0I6IHtcbiAgICBoOiAnY3knXG4gIH0sXG4gIGRhOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZGFfREs6IHtcbiAgICBoOiAnZGEnXG4gIH0sXG4gIGRhX0dMOiB7XG4gICAgaDogJ2RhJ1xuICB9LFxuICBkYXY6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGRhdl9LRToge1xuICAgIGg6ICdkYXYnXG4gIH0sXG4gIGRlOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZGVfQVQ6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBkZV9CRToge1xuICAgIGg6ICdkZSdcbiAgfSxcbiAgZGVfQ0g6IHtcbiAgICBwOiAnISAjLCMjMC4wMDshLSMsIyMwLjAwJyxcbiAgICBnOiAnXFwnJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZGVfREU6IHtcbiAgICBoOiAnZGUnXG4gIH0sXG4gIGRlX0xJOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICdcXCcnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBkZV9MVToge1xuICAgIGg6ICdkZSdcbiAgfSxcbiAgZGplOiB7XG4gICAgcDogJyMsIyMwLjAwIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBkamVfTkU6IHtcbiAgICBoOiAnZGplJ1xuICB9LFxuICBkc2I6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBkc2JfREU6IHtcbiAgICBoOiAnZHNiJ1xuICB9LFxuICBkdWE6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBkdWFfQ006IHtcbiAgICBoOiAnZHVhJ1xuICB9LFxuICBkeW86IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBkeW9fU046IHtcbiAgICBoOiAnZHlvJ1xuICB9LFxuICBkejoge1xuICAgIHA6ICchIywjIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZHpfQlQ6IHtcbiAgICBoOiAnZHonXG4gIH0sXG4gIGVidToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZWJ1X0tFOiB7XG4gICAgaDogJ2VidSdcbiAgfSxcbiAgZWU6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGVlX0dIOiB7XG4gICAgaDogJ2VlJ1xuICB9LFxuICBlZV9URzoge1xuICAgIGg6ICdlZSdcbiAgfSxcbiAgZWw6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBlbF9DWToge1xuICAgIGg6ICdlbCdcbiAgfSxcbiAgZWxfR1I6IHtcbiAgICBoOiAnZWwnXG4gIH0sXG4gIGVuOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBlbl8wMDE6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuXzE1MDoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGVuX0FHOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9BSToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fQVM6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0FUOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZW5fQVU6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0JCOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9CRToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGVuX0JJOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9CTToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fQlM6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0JXOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9CWjoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fQ0E6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0NDOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9DSDoge1xuICAgIHA6ICchICMsIyMwLjAwOyEtIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZW5fQ0s6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0NNOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9DWDoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fQ1k6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0RFOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9ERzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fREs6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0RNOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9FUjoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fRkk6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnICcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGVuX0ZKOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9GSzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fRk06IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0dCOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9HRDoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fR0c6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0dIOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9HSToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fR006IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0dVOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9HWToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fSEs6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0lFOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9JTDoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fSU06IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0lOOiB7XG4gICAgcDogJyEgIywjIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZW5fSU86IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0pFOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9KTToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fS0U6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0tJOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9LTjoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fS1k6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0xDOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9MUjoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fTFM6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX01HOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9NSDoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fTU86IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX01QOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9NUzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fTVQ6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX01VOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9NVzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fTVk6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX05BOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9ORjoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fTkc6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX05MOiB7XG4gICAgcDogJyEgIywjIzAuMDA7ISAtIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZW5fTlI6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX05VOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9OWjoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fUEc6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1BIOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9QSzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fUE46IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1BSOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9QVzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fUlc6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1NCOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9TQzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fU0Q6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1NFOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBlbl9TRzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fU0g6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1NJOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9TTDoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fU1M6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1NYOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9TWjoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fVEM6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1RLOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9UTzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fVFQ6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1RWOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9UWjoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fVUc6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1VNOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9VUzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fVVNfUE9TSVg6IHtcbiAgICBwOiAnISAjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBlbl9WQzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fVkc6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1ZJOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9WVToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fV1M6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1pBOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBlbl9aTToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fWlc6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVvOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBlb18wMDE6IHtcbiAgICBoOiAnZW8nXG4gIH0sXG4gIGVzOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZXNfNDE5OiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBlc19BUjoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGVzX0JPOiB7XG4gICAgaDogJ2VzJ1xuICB9LFxuICBlc19CUjoge1xuICAgIGg6ICdlcydcbiAgfSxcbiAgZXNfQ0w6IHtcbiAgICBwOiAnISMsIyMwLjAwOyEtIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZXNfQ086IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBlc19DUjoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGVzX0NVOiB7XG4gICAgaDogJ2VzJ1xuICB9LFxuICBlc19ETzoge1xuICAgIGg6ICdlcydcbiAgfSxcbiAgZXNfRUE6IHtcbiAgICBoOiAnZXMnXG4gIH0sXG4gIGVzX0VDOiB7XG4gICAgcDogJyEjLCMjMC4wMDshLSMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGVzX0VTOiB7XG4gICAgaDogJ2VzJ1xuICB9LFxuICBlc19HUToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZXNfR1Q6IHtcbiAgICBoOiAnZXMnXG4gIH0sXG4gIGVzX0hOOiB7XG4gICAgaDogJ2VzJ1xuICB9LFxuICBlc19JQzoge1xuICAgIGg6ICdlcydcbiAgfSxcbiAgZXNfTVg6IHtcbiAgICBoOiAnZXMnXG4gIH0sXG4gIGVzX05JOiB7XG4gICAgaDogJ2VzJ1xuICB9LFxuICBlc19QQToge1xuICAgIGg6ICdlcydcbiAgfSxcbiAgZXNfUEU6IHtcbiAgICBoOiAnZXMnXG4gIH0sXG4gIGVzX1BIOiB7XG4gICAgaDogJ2VzJ1xuICB9LFxuICBlc19QUjoge1xuICAgIGg6ICdlcydcbiAgfSxcbiAgZXNfUFk6IHtcbiAgICBwOiAnISAjLCMjMC4wMDshIC0jLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBlc19TVjoge1xuICAgIGg6ICdlcydcbiAgfSxcbiAgZXNfVVM6IHtcbiAgICBoOiAnZXMnXG4gIH0sXG4gIGVzX1VZOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZXNfVkU6IHtcbiAgICBwOiAnISMsIyMwLjAwOyEtIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZXQ6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBldF9FRToge1xuICAgIGg6ICdldCdcbiAgfSxcbiAgZXU6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBldV9FUzoge1xuICAgIGg6ICdldSdcbiAgfSxcbiAgZXdvOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZXdvX0NNOiB7XG4gICAgaDogJ2V3bydcbiAgfSxcbiAgZmE6IHtcbiAgICBwOiAn4oCOISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGZhX0FGOiB7XG4gICAgaDogJ2ZhJ1xuICB9LFxuICBmYV9JUjoge1xuICAgIGg6ICdmYSdcbiAgfSxcbiAgZmY6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBmZl9DTToge1xuICAgIGg6ICdmZidcbiAgfSxcbiAgZmZfR046IHtcbiAgICBoOiAnZmYnXG4gIH0sXG4gIGZmX01SOiB7XG4gICAgaDogJ2ZmJ1xuICB9LFxuICBmZl9TTjoge1xuICAgIGg6ICdmZidcbiAgfSxcbiAgZmk6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBmaV9GSToge1xuICAgIGg6ICdmaSdcbiAgfSxcbiAgZmlsOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBmaWxfUEg6IHtcbiAgICBoOiAnZmlsJ1xuICB9LFxuICBmbzoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGZvX0RLOiB7XG4gICAgaDogJ2ZvJ1xuICB9LFxuICBmb19GTzoge1xuICAgIGg6ICdmbydcbiAgfSxcbiAgZnI6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBmcl9CRToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGZyX0JGOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9CSToge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfQko6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX0JMOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9DQToge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfQ0Q6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX0NGOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9DRzoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfQ0g6IHtcbiAgICBwOiAnISAjLCMjMC4wMDshLSMsIyMwLjAwJyxcbiAgICBnOiAnICcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGZyX0NJOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9DTToge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfREo6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX0RaOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9GUjoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfR0E6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX0dGOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9HTjoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfR1A6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX0dROiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9IVDoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfS006IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX0xVOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZnJfTUE6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBmcl9NQzoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfTUY6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX01HOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9NTDoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfTVE6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX01SOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9NVToge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfTkM6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX05FOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9QRjoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfUE06IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX1JFOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9SVzoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfU0M6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX1NOOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9TWToge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfVEQ6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX1RHOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9UTjoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfVlU6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX1dGOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9ZVDoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnVyOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZnVyX0lUOiB7XG4gICAgaDogJ2Z1cidcbiAgfSxcbiAgZnk6IHtcbiAgICBwOiAnISAjLCMjMC4wMDshICMsIyMwLjAwLScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBmeV9OTDoge1xuICAgIGg6ICdmeSdcbiAgfSxcbiAgZ2E6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGdhX0lFOiB7XG4gICAgaDogJ2dhJ1xuICB9LFxuICBnZDoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZ2RfR0I6IHtcbiAgICBoOiAnZ2QnXG4gIH0sXG4gIGdsOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZ2xfRVM6IHtcbiAgICBoOiAnZ2wnXG4gIH0sXG4gIGdzdzoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAn4oCZJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZ3N3X0NIOiB7XG4gICAgaDogJ2dzdydcbiAgfSxcbiAgZ3N3X0ZSOiB7XG4gICAgaDogJ2dzdydcbiAgfSxcbiAgZ3N3X0xJOiB7XG4gICAgaDogJ2dzdydcbiAgfSxcbiAgZ3U6IHtcbiAgICBwOiAnISMsIyMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGd1X0lOOiB7XG4gICAgaDogJ2d1J1xuICB9LFxuICBndXo6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGd1el9LRToge1xuICAgIGg6ICdndXonXG4gIH0sXG4gIGd2OiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBndl9JTToge1xuICAgIGg6ICdndidcbiAgfSxcbiAgaGE6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBoYV9HSDoge1xuICAgIGg6ICdoYSdcbiAgfSxcbiAgaGFfTkU6IHtcbiAgICBoOiAnaGEnXG4gIH0sXG4gIGhhX05HOiB7XG4gICAgaDogJ2hhJ1xuICB9LFxuICBoYXc6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGhhd19VUzoge1xuICAgIGg6ICdoYXcnXG4gIH0sXG4gIGhlOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgaGVfSUw6IHtcbiAgICBoOiAnaGUnXG4gIH0sXG4gIGhpOiB7XG4gICAgcDogJyEjLCMjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBoaV9JTjoge1xuICAgIGg6ICdoaSdcbiAgfSxcbiAgaHI6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBocl9CQToge1xuICAgIGg6ICdocidcbiAgfSxcbiAgaHJfSFI6IHtcbiAgICBoOiAnaHInXG4gIH0sXG4gIGhzYjoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGhzYl9ERToge1xuICAgIGg6ICdoc2InXG4gIH0sXG4gIGh1OiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgaHVfSFU6IHtcbiAgICBoOiAnaHUnXG4gIH0sXG4gIGh5OiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgaHlfQU06IHtcbiAgICBoOiAnaHknXG4gIH0sXG4gIGlkOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBpZF9JRDoge1xuICAgIGg6ICdpZCdcbiAgfSxcbiAgaWc6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGlnX05HOiB7XG4gICAgaDogJ2lnJ1xuICB9LFxuICBpaToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgaWlfQ046IHtcbiAgICBoOiAnaWknXG4gIH0sXG4gIGlzOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgaXNfSVM6IHtcbiAgICBoOiAnaXMnXG4gIH0sXG4gIGl0OiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgaXRfQ0g6IHtcbiAgICBwOiAnISAjLCMjMC4wMDshLSMsIyMwLjAwJyxcbiAgICBnOiAnXFwnJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgaXRfSVQ6IHtcbiAgICBoOiAnaXQnXG4gIH0sXG4gIGl0X1NNOiB7XG4gICAgaDogJ2l0J1xuICB9LFxuICBqYToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgamFfSlA6IHtcbiAgICBoOiAnamEnXG4gIH0sXG4gIGpnbzoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGpnb19DTToge1xuICAgIGg6ICdqZ28nXG4gIH0sXG4gIGptYzoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgam1jX1RaOiB7XG4gICAgaDogJ2ptYydcbiAgfSxcbiAga2E6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBrYV9HRToge1xuICAgIGg6ICdrYSdcbiAgfSxcbiAga2FiOiB7XG4gICAgcDogJyMsIyMwLjAwIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBrYWJfRFo6IHtcbiAgICBoOiAna2FiJ1xuICB9LFxuICBrYW06IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGthbV9LRToge1xuICAgIGg6ICdrYW0nXG4gIH0sXG4gIGtkZToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAga2RlX1RaOiB7XG4gICAgaDogJ2tkZSdcbiAgfSxcbiAga2VhOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAga2VhX0NWOiB7XG4gICAgaDogJ2tlYSdcbiAgfSxcbiAga2hxOiB7XG4gICAgcDogJyMsIyMwLjAwIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBraHFfTUw6IHtcbiAgICBoOiAna2hxJ1xuICB9LFxuICBraToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAga2lfS0U6IHtcbiAgICBoOiAna2knXG4gIH0sXG4gIGtrOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAga2tfS1o6IHtcbiAgICBoOiAna2snXG4gIH0sXG4gIGtrajoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAga2tqX0NNOiB7XG4gICAgaDogJ2traidcbiAgfSxcbiAga2w6IHtcbiAgICBwOiAnISMsIyMwLjAwOyEtIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAga2xfR0w6IHtcbiAgICBoOiAna2wnXG4gIH0sXG4gIGtsbjoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAga2xuX0tFOiB7XG4gICAgaDogJ2tsbidcbiAgfSxcbiAga206IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGttX0tIOiB7XG4gICAgaDogJ2ttJ1xuICB9LFxuICBrbjoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAga25fSU46IHtcbiAgICBoOiAna24nXG4gIH0sXG4gIGtvOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBrb19LUDoge1xuICAgIGg6ICdrbydcbiAgfSxcbiAga29fS1I6IHtcbiAgICBoOiAna28nXG4gIH0sXG4gIGtvazoge1xuICAgIHA6ICchICMsIyMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGtva19JTjoge1xuICAgIGg6ICdrb2snXG4gIH0sXG4gIGtzOiB7XG4gICAgcDogJyEgIywjIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAga3NfSU46IHtcbiAgICBoOiAna3MnXG4gIH0sXG4gIGtzYjoge1xuICAgIHA6ICcjLCMjMC4wMCEnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAga3NiX1RaOiB7XG4gICAgaDogJ2tzYidcbiAgfSxcbiAga3NmOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAga3NmX0NNOiB7XG4gICAgaDogJ2tzZidcbiAgfSxcbiAga3NoOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAga3NoX0RFOiB7XG4gICAgaDogJ2tzaCdcbiAgfSxcbiAga3c6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGt3X0dCOiB7XG4gICAgaDogJ2t3J1xuICB9LFxuICBreToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGt5X0tHOiB7XG4gICAgaDogJ2t5J1xuICB9LFxuICBsYWc6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGxhZ19UWjoge1xuICAgIGg6ICdsYWcnXG4gIH0sXG4gIGxiOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgbGJfTFU6IHtcbiAgICBoOiAnbGInXG4gIH0sXG4gIGxnOiB7XG4gICAgcDogJyMsIyMwLjAwIScsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBsZ19VRzoge1xuICAgIGg6ICdsZydcbiAgfSxcbiAgbGt0OiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBsa3RfVVM6IHtcbiAgICBoOiAnbGt0J1xuICB9LFxuICBsbjoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGxuX0FPOiB7XG4gICAgaDogJ2xuJ1xuICB9LFxuICBsbl9DRDoge1xuICAgIGg6ICdsbidcbiAgfSxcbiAgbG5fQ0Y6IHtcbiAgICBoOiAnbG4nXG4gIH0sXG4gIGxuX0NHOiB7XG4gICAgaDogJ2xuJ1xuICB9LFxuICBsbzoge1xuICAgIHA6ICchIywjIzAuMDA7IS0jLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBsb19MQToge1xuICAgIGg6ICdsbydcbiAgfSxcbiAgbHJjOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgbHJjX0lROiB7XG4gICAgaDogJ2xyYydcbiAgfSxcbiAgbHJjX0lSOiB7XG4gICAgaDogJ2xyYydcbiAgfSxcbiAgbHQ6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBsdF9MVDoge1xuICAgIGg6ICdsdCdcbiAgfSxcbiAgbHU6IHtcbiAgICBwOiAnIywjIzAuMDAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGx1X0NEOiB7XG4gICAgaDogJ2x1J1xuICB9LFxuICBsdW86IHtcbiAgICBwOiAnIywjIzAuMDAhJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGx1b19LRToge1xuICAgIGg6ICdsdW8nXG4gIH0sXG4gIGx1eToge1xuICAgIHA6ICchIywjIzAuMDA7IS0gIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgbHV5X0tFOiB7XG4gICAgaDogJ2x1eSdcbiAgfSxcbiAgbHY6IHtcbiAgICBwOiAnIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBsdl9MVjoge1xuICAgIGg6ICdsdidcbiAgfSxcbiAgbWFzOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBtYXNfS0U6IHtcbiAgICBoOiAnbWFzJ1xuICB9LFxuICBtYXNfVFo6IHtcbiAgICBoOiAnbWFzJ1xuICB9LFxuICBtZXI6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIG1lcl9LRToge1xuICAgIGg6ICdtZXInXG4gIH0sXG4gIG1mZToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgbWZlX01VOiB7XG4gICAgaDogJ21mZSdcbiAgfSxcbiAgbWc6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIG1nX01HOiB7XG4gICAgaDogJ21nJ1xuICB9LFxuICBtZ2g6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIG1naF9NWjoge1xuICAgIGg6ICdtZ2gnXG4gIH0sXG4gIG1nbzoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIG1nb19DTToge1xuICAgIGg6ICdtZ28nXG4gIH0sXG4gIG1rOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgbWtfTUs6IHtcbiAgICBoOiAnbWsnXG4gIH0sXG4gIG1sOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBtbF9JTjoge1xuICAgIGg6ICdtbCdcbiAgfSxcbiAgbW46IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBtbl9NTjoge1xuICAgIGg6ICdtbidcbiAgfSxcbiAgbXI6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIG1yX0lOOiB7XG4gICAgaDogJ21yJ1xuICB9LFxuICBtczoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgbXNfQk46IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBtc19NWToge1xuICAgIGg6ICdtcydcbiAgfSxcbiAgbXNfU0c6IHtcbiAgICBoOiAnbXMnXG4gIH0sXG4gIG10OiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBtdF9NVDoge1xuICAgIGg6ICdtdCdcbiAgfSxcbiAgbXVhOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBtdWFfQ006IHtcbiAgICBoOiAnbXVhJ1xuICB9LFxuICBteToge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIG15X01NOiB7XG4gICAgaDogJ215J1xuICB9LFxuICBtem46IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIG16bl9JUjoge1xuICAgIGg6ICdtem4nXG4gIH0sXG4gIG5hcToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgbmFxX05BOiB7XG4gICAgaDogJ25hcSdcbiAgfSxcbiAgbmI6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBuYl9OTzoge1xuICAgIGg6ICduYidcbiAgfSxcbiAgbmJfU0o6IHtcbiAgICBoOiAnbmInXG4gIH0sXG4gIG5kOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBuZF9aVzoge1xuICAgIGg6ICduZCdcbiAgfSxcbiAgbmU6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBuZV9JTjoge1xuICAgIGg6ICduZSdcbiAgfSxcbiAgbmVfTlA6IHtcbiAgICBoOiAnbmUnXG4gIH0sXG4gIG5sOiB7XG4gICAgcDogJyEgIywjIzAuMDA7ISAtIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgbmxfQVc6IHtcbiAgICBoOiAnbmwnXG4gIH0sXG4gIG5sX0JFOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgbmxfQlE6IHtcbiAgICBoOiAnbmwnXG4gIH0sXG4gIG5sX0NXOiB7XG4gICAgaDogJ25sJ1xuICB9LFxuICBubF9OTDoge1xuICAgIGg6ICdubCdcbiAgfSxcbiAgbmxfU1I6IHtcbiAgICBoOiAnbmwnXG4gIH0sXG4gIG5sX1NYOiB7XG4gICAgaDogJ25sJ1xuICB9LFxuICBubWc6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBubWdfQ006IHtcbiAgICBoOiAnbm1nJ1xuICB9LFxuICBubjoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIG5uX05POiB7XG4gICAgaDogJ25uJ1xuICB9LFxuICBubmg6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBubmhfQ006IHtcbiAgICBoOiAnbm5oJ1xuICB9LFxuICBudXM6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIG51c19TUzoge1xuICAgIGg6ICdudXMnXG4gIH0sXG4gIG55bjoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgbnluX1VHOiB7XG4gICAgaDogJ255bidcbiAgfSxcbiAgb206IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIG9tX0VUOiB7XG4gICAgaDogJ29tJ1xuICB9LFxuICBvbV9LRToge1xuICAgIGg6ICdvbSdcbiAgfSxcbiAgb3I6IHtcbiAgICBwOiAnISAjLCMjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBvcl9JTjoge1xuICAgIGg6ICdvcidcbiAgfSxcbiAgb3M6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBvc19HRToge1xuICAgIGg6ICdvcydcbiAgfSxcbiAgb3NfUlU6IHtcbiAgICBoOiAnb3MnXG4gIH0sXG4gIHBhOiB7XG4gICAgcDogJyEgIywjIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgcGFfQXJhYjoge1xuICAgIGg6ICdwYSdcbiAgfSxcbiAgcGFfQXJhYl9QSzoge1xuICAgIGg6ICdwYSdcbiAgfSxcbiAgcGFfR3VydToge1xuICAgIGg6ICdwYSdcbiAgfSxcbiAgcGFfR3VydV9JTjoge1xuICAgIGg6ICdwYSdcbiAgfSxcbiAgcGw6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBwbF9QTDoge1xuICAgIGg6ICdwbCdcbiAgfSxcbiAgcHJnOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgcHJnXzAwMToge1xuICAgIGg6ICdwcmcnXG4gIH0sXG4gIHBzOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgcHNfQUY6IHtcbiAgICBoOiAncHMnXG4gIH0sXG4gIHB0OiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBwdF9BTzoge1xuICAgIGg6ICdwdCdcbiAgfSxcbiAgcHRfQlI6IHtcbiAgICBoOiAncHQnXG4gIH0sXG4gIHB0X0NIOiB7XG4gICAgaDogJ3B0J1xuICB9LFxuICBwdF9DVjoge1xuICAgIGg6ICdwdCdcbiAgfSxcbiAgcHRfR1E6IHtcbiAgICBoOiAncHQnXG4gIH0sXG4gIHB0X0dXOiB7XG4gICAgaDogJ3B0J1xuICB9LFxuICBwdF9MVToge1xuICAgIGg6ICdwdCdcbiAgfSxcbiAgcHRfTU86IHtcbiAgICBoOiAncHQnXG4gIH0sXG4gIHB0X01aOiB7XG4gICAgaDogJ3B0J1xuICB9LFxuICBwdF9QVDoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIHB0X1NUOiB7XG4gICAgaDogJ3B0J1xuICB9LFxuICBwdF9UTDoge1xuICAgIGg6ICdwdCdcbiAgfSxcbiAgcXU6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBxdV9CTzoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIHF1X0VDOiB7XG4gICAgaDogJ3F1J1xuICB9LFxuICBxdV9QRToge1xuICAgIGg6ICdxdSdcbiAgfSxcbiAgcm06IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJ+KAmScsXG4gICAgZDogJy4nXG4gIH0sXG4gIHJtX0NIOiB7XG4gICAgaDogJ3JtJ1xuICB9LFxuICBybjoge1xuICAgIHA6ICcjLCMjMC4wMCEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgcm5fQkk6IHtcbiAgICBoOiAncm4nXG4gIH0sXG4gIHJvOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgcm9fTUQ6IHtcbiAgICBoOiAncm8nXG4gIH0sXG4gIHJvX1JPOiB7XG4gICAgaDogJ3JvJ1xuICB9LFxuICByb2Y6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHJvZl9UWjoge1xuICAgIGg6ICdyb2YnXG4gIH0sXG4gIHJvb3Q6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBydToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIHJ1X0JZOiB7XG4gICAgaDogJ3J1J1xuICB9LFxuICBydV9LRzoge1xuICAgIGg6ICdydSdcbiAgfSxcbiAgcnVfS1o6IHtcbiAgICBoOiAncnUnXG4gIH0sXG4gIHJ1X01EOiB7XG4gICAgaDogJ3J1J1xuICB9LFxuICBydV9SVToge1xuICAgIGg6ICdydSdcbiAgfSxcbiAgcnVfVUE6IHtcbiAgICBoOiAncnUnXG4gIH0sXG4gIHJ3OiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICByd19SVzoge1xuICAgIGg6ICdydydcbiAgfSxcbiAgcndrOiB7XG4gICAgcDogJyMsIyMwLjAwIScsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICByd2tfVFo6IHtcbiAgICBoOiAncndrJ1xuICB9LFxuICBzYWg6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHNhaF9SVToge1xuICAgIGg6ICdzYWgnXG4gIH0sXG4gIHNhcToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgc2FxX0tFOiB7XG4gICAgaDogJ3NhcSdcbiAgfSxcbiAgc2JwOiB7XG4gICAgcDogJyMsIyMwLjAwIScsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBzYnBfVFo6IHtcbiAgICBoOiAnc2JwJ1xuICB9LFxuICBzZToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIHNlX0ZJOiB7XG4gICAgaDogJ3NlJ1xuICB9LFxuICBzZV9OTzoge1xuICAgIGg6ICdzZSdcbiAgfSxcbiAgc2VfU0U6IHtcbiAgICBoOiAnc2UnXG4gIH0sXG4gIHNlaDoge1xuICAgIHA6ICcjLCMjMC4wMCEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgc2VoX01aOiB7XG4gICAgaDogJ3NlaCdcbiAgfSxcbiAgc2VzOiB7XG4gICAgcDogJyMsIyMwLjAwIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBzZXNfTUw6IHtcbiAgICBoOiAnc2VzJ1xuICB9LFxuICBzZzoge1xuICAgIHA6ICchIywjIzAuMDA7IS0jLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBzZ19DRjoge1xuICAgIGg6ICdzZydcbiAgfSxcbiAgc2hpOiB7XG4gICAgcDogJyMsIyMwLjAwIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBzaGlfTGF0bjoge1xuICAgIGg6ICdzaGknXG4gIH0sXG4gIHNoaV9MYXRuX01BOiB7XG4gICAgaDogJ3NoaSdcbiAgfSxcbiAgc2hpX1Rmbmc6IHtcbiAgICBoOiAnc2hpJ1xuICB9LFxuICBzaGlfVGZuZ19NQToge1xuICAgIGg6ICdzaGknXG4gIH0sXG4gIHNpOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBzaV9MSzoge1xuICAgIGg6ICdzaSdcbiAgfSxcbiAgc2s6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBza19TSzoge1xuICAgIGg6ICdzaydcbiAgfSxcbiAgc2w6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBzbF9TSToge1xuICAgIGg6ICdzbCdcbiAgfSxcbiAgc21uOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBzbW5fRkk6IHtcbiAgICBoOiAnc21uJ1xuICB9LFxuICBzbjoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgc25fWlc6IHtcbiAgICBoOiAnc24nXG4gIH0sXG4gIHNvOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBzb19ESjoge1xuICAgIGg6ICdzbydcbiAgfSxcbiAgc29fRVQ6IHtcbiAgICBoOiAnc28nXG4gIH0sXG4gIHNvX0tFOiB7XG4gICAgaDogJ3NvJ1xuICB9LFxuICBzb19TTzoge1xuICAgIGg6ICdzbydcbiAgfSxcbiAgc3E6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBzcV9BTDoge1xuICAgIGg6ICdzcSdcbiAgfSxcbiAgc3FfTUs6IHtcbiAgICBoOiAnc3EnXG4gIH0sXG4gIHNxX1hLOiB7XG4gICAgaDogJ3NxJ1xuICB9LFxuICBzcjoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIHNyX0N5cmw6IHtcbiAgICBoOiAnc3InXG4gIH0sXG4gIHNyX0N5cmxfQkE6IHtcbiAgICBoOiAnc3InXG4gIH0sXG4gIHNyX0N5cmxfTUU6IHtcbiAgICBoOiAnc3InXG4gIH0sXG4gIHNyX0N5cmxfUlM6IHtcbiAgICBoOiAnc3InXG4gIH0sXG4gIHNyX0N5cmxfWEs6IHtcbiAgICBoOiAnc3InXG4gIH0sXG4gIHNyX0xhdG46IHtcbiAgICBoOiAnc3InXG4gIH0sXG4gIHNyX0xhdG5fQkE6IHtcbiAgICBoOiAnc3InXG4gIH0sXG4gIHNyX0xhdG5fTUU6IHtcbiAgICBoOiAnc3InXG4gIH0sXG4gIHNyX0xhdG5fUlM6IHtcbiAgICBoOiAnc3InXG4gIH0sXG4gIHNyX0xhdG5fWEs6IHtcbiAgICBoOiAnc3InXG4gIH0sXG4gIHN2OiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgc3ZfQVg6IHtcbiAgICBoOiAnc3YnXG4gIH0sXG4gIHN2X0ZJOiB7XG4gICAgaDogJ3N2J1xuICB9LFxuICBzdl9TRToge1xuICAgIGg6ICdzdidcbiAgfSxcbiAgc3c6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHN3X0NEOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBzd19LRToge1xuICAgIGg6ICdzdydcbiAgfSxcbiAgc3dfVFo6IHtcbiAgICBoOiAnc3cnXG4gIH0sXG4gIHN3X1VHOiB7XG4gICAgaDogJ3N3J1xuICB9LFxuICB0YToge1xuICAgIHA6ICchICMsIyMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHRhX0lOOiB7XG4gICAgaDogJ3RhJ1xuICB9LFxuICB0YV9MSzoge1xuICAgIGg6ICd0YSdcbiAgfSxcbiAgdGFfTVk6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICB0YV9TRzoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHRlOiB7XG4gICAgcDogJyEjLCMjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICB0ZV9JTjoge1xuICAgIGg6ICd0ZSdcbiAgfSxcbiAgdGVvOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICB0ZW9fS0U6IHtcbiAgICBoOiAndGVvJ1xuICB9LFxuICB0ZW9fVUc6IHtcbiAgICBoOiAndGVvJ1xuICB9LFxuICB0aDoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgdGhfVEg6IHtcbiAgICBoOiAndGgnXG4gIH0sXG4gIHRpOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICB0aV9FUjoge1xuICAgIGg6ICd0aSdcbiAgfSxcbiAgdGlfRVQ6IHtcbiAgICBoOiAndGknXG4gIH0sXG4gIHRrOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgdGtfVE06IHtcbiAgICBoOiAndGsnXG4gIH0sXG4gIHRvOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgdG9fVE86IHtcbiAgICBoOiAndG8nXG4gIH0sXG4gIHRyOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgdHJfQ1k6IHtcbiAgICBoOiAndHInXG4gIH0sXG4gIHRyX1RSOiB7XG4gICAgaDogJ3RyJ1xuICB9LFxuICB0d3E6IHtcbiAgICBwOiAnIywjIzAuMDAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHR3cV9ORToge1xuICAgIGg6ICd0d3EnXG4gIH0sXG4gIHR6bToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIHR6bV9NQToge1xuICAgIGg6ICd0em0nXG4gIH0sXG4gIHVnOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICB1Z19DTjoge1xuICAgIGg6ICd1ZydcbiAgfSxcbiAgdWs6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICB1a19VQToge1xuICAgIGg6ICd1aydcbiAgfSxcbiAgdXI6IHtcbiAgICBwOiAnISAjLCMjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICB1cl9JTjoge1xuICAgIGg6ICd1cidcbiAgfSxcbiAgdXJfUEs6IHtcbiAgICBoOiAndXInXG4gIH0sXG4gIHV6OiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgdXpfQXJhYjoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIHV6X0FyYWJfQUY6IHtcbiAgICBoOiAndXonXG4gIH0sXG4gIHV6X0N5cmw6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICB1el9DeXJsX1VaOiB7XG4gICAgaDogJ3V6J1xuICB9LFxuICB1el9MYXRuOiB7XG4gICAgaDogJ3V6J1xuICB9LFxuICB1el9MYXRuX1VaOiB7XG4gICAgaDogJ3V6J1xuICB9LFxuICB2YWk6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHZhaV9MYXRuOiB7XG4gICAgaDogJ3ZhaSdcbiAgfSxcbiAgdmFpX0xhdG5fTFI6IHtcbiAgICBoOiAndmFpJ1xuICB9LFxuICB2YWlfVmFpaToge1xuICAgIGg6ICd2YWknXG4gIH0sXG4gIHZhaV9WYWlpX0xSOiB7XG4gICAgaDogJ3ZhaSdcbiAgfSxcbiAgdmk6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICB2aV9WTjoge1xuICAgIGg6ICd2aSdcbiAgfSxcbiAgdm86IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHZvXzAwMToge1xuICAgIGg6ICd2bydcbiAgfSxcbiAgdnVuOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICB2dW5fVFo6IHtcbiAgICBoOiAndnVuJ1xuICB9LFxuICB3YWU6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAn4oCZJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgd2FlX0NIOiB7XG4gICAgaDogJ3dhZSdcbiAgfSxcbiAgeG9nOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgeG9nX1VHOiB7XG4gICAgaDogJ3hvZydcbiAgfSxcbiAgeWF2OiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgeWF2X0NNOiB7XG4gICAgaDogJ3lhdidcbiAgfSxcbiAgeWk6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHlpXzAwMToge1xuICAgIGg6ICd5aSdcbiAgfSxcbiAgeW86IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHlvX0JKOiB7XG4gICAgaDogJ3lvJ1xuICB9LFxuICB5b19ORzoge1xuICAgIGg6ICd5bydcbiAgfSxcbiAgeXVlOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICB5dWVfSEs6IHtcbiAgICBoOiAneXVlJ1xuICB9LFxuICB6Z2g6IHtcbiAgICBwOiAnIywjIzAuMDAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIHpnaF9NQToge1xuICAgIGg6ICd6Z2gnXG4gIH0sXG4gIHpoOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICB6aF9IYW5zOiB7XG4gICAgaDogJ3poJ1xuICB9LFxuICB6aF9IYW5zX0NOOiB7XG4gICAgaDogJ3poJ1xuICB9LFxuICB6aF9IYW5zX0hLOiB7XG4gICAgaDogJ3poJ1xuICB9LFxuICB6aF9IYW5zX01POiB7XG4gICAgaDogJ3poJ1xuICB9LFxuICB6aF9IYW5zX1NHOiB7XG4gICAgaDogJ3poJ1xuICB9LFxuICB6aF9IYW50OiB7XG4gICAgaDogJ3poJ1xuICB9LFxuICB6aF9IYW50X0hLOiB7XG4gICAgaDogJ3poJ1xuICB9LFxuICB6aF9IYW50X01POiB7XG4gICAgaDogJ3poJ1xuICB9LFxuICB6aF9IYW50X1RXOiB7XG4gICAgaDogJ3poJ1xuICB9LFxuICB6dToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgenVfWkE6IHtcbiAgICBoOiAnenUnXG4gIH1cbn07XG5cbnZhciBkZWZhdWx0TG9jYWxlcyA9IHtcbiAgQUVEOiAnYXJfQUUnLFxuICBBRk46ICdmYV9BRicsXG4gIEFMTDogJ3NxJyxcbiAgQU1EOiAnaHknLFxuICBBTkc6ICdubCcsXG4gIEFPQTogJ3B0X0FPJyxcbiAgQVJTOiAnZXNfQVInLFxuICBBVUQ6ICdlbicsXG4gIEFXRzogJ25sX0FXJyxcbiAgQVpOOiAnYXonLFxuICBCQU06ICdicycsXG4gIEJCRDogJ2VuX0JCJyxcbiAgQkRUOiAnYm5fQkQnLFxuICBCR046ICdiZycsXG4gIEJIRDogJ2FyX0JIJyxcbiAgQklGOiAnZnJfQkknLFxuICBCTUQ6ICdlbl9CTScsXG4gIEJORDogJ21zX0JOJyxcbiAgQk9COiAnZXNfQk8nLFxuICBCUkw6ICdwdF9CUicsXG4gIEJTRDogJ2VuX0JTJyxcbiAgQlROOiAnZHonLFxuICBCV1A6ICdlbl9CVycsXG4gIEJZUjogJ2JlJyxcbiAgQlpEOiAnZW5fQlonLFxuICBDQUQ6ICdlbl9DQScsXG4gIENERjogJ2ZyX0NEJyxcbiAgQ0hGOiAnZGVfQ0gnLFxuICBDTFA6ICdlc19DTCcsXG4gIENOWTogJ3poX0hhbnNfQ04nLFxuICBDT1A6ICdlc19DTycsXG4gIENSQzogJ2VzX0NSJyxcbiAgQ1VQOiAnZXNfQ1UnLFxuICBDVkU6ICdwdF9DVicsXG4gIENaSzogJ2NzJyxcbiAgREpGOiAnZnJfREonLFxuICBES0s6ICdkYV9ESycsXG4gIERPUDogJ2VzX0RPJyxcbiAgRFpEOiAnYXJfRFonLFxuICBFR1A6ICdhcl9FRycsXG4gIEVSTjogJ3RpX0VSJyxcbiAgRVRCOiAnYW0nLFxuICBFVVI6ICdkZScsXG4gIEZKRDogJ2VuX0ZKJyxcbiAgRktQOiAnZW5fRksnLFxuICBHQlA6ICdlbicsXG4gIEdFTDogJ2thJyxcbiAgR0hTOiAnZW5fR0gnLFxuICBHSVA6ICdlbl9HSScsXG4gIEdNRDogJ2VuX0dNJyxcbiAgR05GOiAnZnJfR04nLFxuICBHVFE6ICdlc19HVCcsXG4gIEdZRDogJ2VuX0dZJyxcbiAgSEtEOiAnemhfSGFuc19ISycsXG4gIEhOTDogJ2VzX0hOJyxcbiAgSFJLOiAnaHJfSFInLFxuICBIVEc6ICdlbicsXG4gIEhVRjogJ2h1X0hVJyxcbiAgSURSOiAnaWQnLFxuICBJTFM6ICdoZScsXG4gIElOUjogJ2VuX0lOJyxcbiAgSVFEOiAnYXJfSVEnLFxuICBJUlI6ICdmYV9JUicsXG4gIElTSzogJ2lzJyxcbiAgSk1EOiAnZW5fSk0nLFxuICBKT0Q6ICdhcl9KTycsXG4gIEpQWTogJ2phJyxcbiAgS0VTOiAnZW5fS0UnLFxuICBLR1M6ICdreScsXG4gIEtIUjogJ2ttJyxcbiAgS01GOiAnYXInLFxuICBLUFc6ICdrb19LUCcsXG4gIEtSVzogJ2tvX0tSJyxcbiAgS1dEOiAnYXJfS1cnLFxuICBLWUQ6ICdlbl9LWScsXG4gIEtaVDogJ2trJyxcbiAgTEFLOiAnbG8nLFxuICBMQlA6ICdhcl9MQicsXG4gIExLUjogJ3NpJyxcbiAgTFJEOiAnZW5fTFInLFxuICBMU0w6ICdlbl9MUycsXG4gIExZRDogJ2FyX0xZJyxcbiAgTUFEOiAnYXInLFxuICBNREw6ICdybycsXG4gIE1HQTogJ2ZyX01HJyxcbiAgTUtEOiAnbWsnLFxuICBNTUs6ICdteScsXG4gIE1OVDogJ21uJyxcbiAgTU9QOiAnemgnLFxuICBNUk86ICdhcl9NUicsXG4gIE1VUjogJ2VuX01VJyxcbiAgTVZSOiAnZW4nLFxuICBNV0s6ICdlbicsXG4gIE1YTjogJ2VzX01YJyxcbiAgTVlSOiAnbXNfTVknLFxuICBNWk46ICdwdF9NWicsXG4gIE5BRDogJ2VuX05BJyxcbiAgTkdOOiAnZW5fTkcnLFxuICBOSU86ICdlc19OSScsXG4gIE5PSzogJ25iX05PJyxcbiAgTlBSOiAnbmUnLFxuICBOWkQ6ICdlbl9OWicsXG4gIE9NUjogJ2FyX09NJyxcbiAgUEFCOiAnZXNfUEEnLFxuICBQRU46ICdlc19QRScsXG4gIFBHSzogJ2VuX1BHJyxcbiAgUEhQOiAnZmlsJyxcbiAgUEtSOiAndXJfUEsnLFxuICBQTE46ICdwbCcsXG4gIFBZRzogJ2VzX1BZJyxcbiAgUUFSOiAnYXJfUUEnLFxuICBST046ICdybycsXG4gIFJTRDogJ3NyJyxcbiAgUlVCOiAncnUnLFxuICBSV0Y6ICdydycsXG4gIFNBUjogJ2FyX1NBJyxcbiAgU0JEOiAnZW5fU0InLFxuICBTQ1I6ICdlbl9TQycsXG4gIFNERzogJ2FyX1NEJyxcbiAgU0VLOiAnc3ZfU0UnLFxuICBTR0Q6ICdlbl9TRycsXG4gIFNIUDogJ2VuX1NIJyxcbiAgU0xMOiAnZW5fU0wnLFxuICBTT1M6ICdzb19TTycsXG4gIFNSRDogJ25sX1NSJyxcbiAgU1NQOiAnZW4nLFxuICBTVEQ6ICdwdF9TVCcsXG4gIFNZUDogJ2FyX1NZJyxcbiAgU1pMOiAnZW5fU1onLFxuICBUSEI6ICd0aCcsXG4gIFRKUzogJ2VuJyxcbiAgVE1UOiAndGsnLFxuICBUTkQ6ICdhcl9UTicsXG4gIFRPUDogJ3RvJyxcbiAgVFJZOiAndHJfVFInLFxuICBUVEQ6ICdlbl9UVCcsXG4gIFRXRDogJ3poX0hhbnRfVFcnLFxuICBUWlM6ICdzd19UWicsXG4gIFVBSDogJ3VrJyxcbiAgVUdYOiAnZW5fVUcnLFxuICBVU0Q6ICdlbl9VUycsXG4gIFVZVTogJ2VzX1VZJyxcbiAgVVpTOiAndXonLFxuICBWRUY6ICdlc19WRScsXG4gIFZORDogJ3ZpJyxcbiAgVlVWOiAnZW5fQkknLFxuICBXU1Q6ICdlbl9BUycsXG4gIFhBRjogJ2ZyJyxcbiAgWENEOiAnZW4nLFxuICBYT0Y6ICdmcicsXG4gIFhQRjogJ2ZyX1BGJyxcbiAgWUVSOiAnYXJfWUUnLFxuICBaQVI6ICd6dScsXG4gIFpNVzogJ2VuX1pNJyxcbiAgWldMOiAnZW5fWlcnXG59O1xuXG52YXIgc3ltYm9scyA9IHtcbiAgJ0FFRCc6ICfYry7YpScsXG4gICdBRk4nOiAn2IsnLFxuICAnQUxMJzogJ0wnLFxuICAnQU1EJzogJ0FNRCcsXG4gICdBTkcnOiAnxpInLFxuICAnQU9BJzogJ0t6JyxcbiAgJ0FSUyc6ICckJyxcbiAgJ0FVRCc6ICckJyxcbiAgJ0FXRyc6ICfGkicsXG4gICdBWk4nOiAn4oK8JyxcbiAgJ0JBTSc6ICdLTScsXG4gICdCQkQnOiAnJCcsXG4gICdCRFQnOiAn4KezJyxcbiAgJ0JHTic6ICfQu9CyJyxcbiAgJ0JIRCc6ICcu2K8u2KgnLFxuICAnQklGJzogJ0ZCdScsXG4gICdCTUQnOiAnJCcsXG4gICdCTkQnOiAnJCcsXG4gICdCT0InOiAnQnMuJyxcbiAgJ0JSTCc6ICdSJCcsXG4gICdCU0QnOiAnJCcsXG4gICdCVEMnOiAn4Li/JyxcbiAgJ0JUTic6ICdOdS4nLFxuICAnQldQJzogJ1AnLFxuICAnQllSJzogJ3AuJyxcbiAgJ0JaRCc6ICdCWiQnLFxuICAnQ0FEJzogJyQnLFxuICAnQ0RGJzogJ0ZDJyxcbiAgJ0NIRic6ICdGci4nLFxuICAnQ0xQJzogJyQnLFxuICAnQ05ZJzogJ8KlJyxcbiAgJ0NPUCc6ICckJyxcbiAgJ0NSQyc6ICfigqEnLFxuICAnQ1VDJzogJyQnLFxuICAnQ1VQJzogJ+KCsScsXG4gICdDVkUnOiAnJCcsXG4gICdDWksnOiAnS8SNJyxcbiAgJ0RKRic6ICdGZGonLFxuICAnREtLJzogJ2tyJyxcbiAgJ0RPUCc6ICdSRCQnLFxuICAnRFpEJzogJ9iv2KwnLFxuICAnRUVLJzogJ2tyJyxcbiAgJ0VHUCc6ICfCoycsXG4gICdFUk4nOiAnTmZrJyxcbiAgJ0VUQic6ICdCcicsXG4gICdFVEgnOiAnzp4nLFxuICAnRVVSJzogJ+KCrCcsXG4gICdGSkQnOiAnJCcsXG4gICdGS1AnOiAnwqMnLFxuICAnR0JQJzogJ8KjJyxcbiAgJ0dFTCc6ICfigr4nLFxuICAnR0dQJzogJ8KjJyxcbiAgJ0dIQyc6ICfigrUnLFxuICAnR0hTJzogJ0dI4oK1JyxcbiAgJ0dJUCc6ICfCoycsXG4gICdHTUQnOiAnRCcsXG4gICdHTkYnOiAnRkcnLFxuICAnR1RRJzogJ1EnLFxuICAnR1lEJzogJyQnLFxuICAnSEtEJzogJyQnLFxuICAnSE5MJzogJ0wnLFxuICAnSFJLJzogJ2tuJyxcbiAgJ0hURyc6ICdHJyxcbiAgJ0hVRic6ICdGdCcsXG4gICdJRFInOiAnUnAnLFxuICAnSUxTJzogJ+KCqicsXG4gICdJTVAnOiAnwqMnLFxuICAnSU5SJzogJ+KCuScsXG4gICdJUUQnOiAn2Lku2K8nLFxuICAnSVJSJzogJ++3vCcsXG4gICdJU0snOiAna3InLFxuICAnSkVQJzogJ8KjJyxcbiAgJ0pNRCc6ICdKJCcsXG4gICdKT0QnOiAnSkQnLFxuICAnSlBZJzogJ8KlJyxcbiAgJ0tFUyc6ICdLU2gnLFxuICAnS0dTJzogJ9C70LInLFxuICAnS0hSJzogJ+GfmycsXG4gICdLTUYnOiAnQ0YnLFxuICAnS1BXJzogJ+KCqScsXG4gICdLUlcnOiAn4oKpJyxcbiAgJ0tXRCc6ICdLRCcsXG4gICdLWUQnOiAnJCcsXG4gICdLWlQnOiAn4oK4JyxcbiAgJ0xBSyc6ICfigq0nLFxuICAnTEJQJzogJ8KjJyxcbiAgJ0xLUic6ICfigqgnLFxuICAnTFJEJzogJyQnLFxuICAnTFNMJzogJ00nLFxuICAnTFRDJzogJ8WBJyxcbiAgJ0xUTCc6ICdMdCcsXG4gICdMVkwnOiAnTHMnLFxuICAnTFlEJzogJ0xEJyxcbiAgJ01BRCc6ICdNQUQnLFxuICAnTURMJzogJ2xlaScsXG4gICdNR0EnOiAnQXInLFxuICAnTUtEJzogJ9C00LXQvScsXG4gICdNTUsnOiAnSycsXG4gICdNTlQnOiAn4oKuJyxcbiAgJ01PUCc6ICdNT1AkJyxcbiAgJ01VUic6ICfigqgnLFxuICAnTVZSJzogJ1JmJyxcbiAgJ01XSyc6ICdNSycsXG4gICdNWE4nOiAnJCcsXG4gICdNWVInOiAnUk0nLFxuICAnTVpOJzogJ01UJyxcbiAgJ05BRCc6ICckJyxcbiAgJ05HTic6ICfigqYnLFxuICAnTklPJzogJ0MkJyxcbiAgJ05PSyc6ICdrcicsXG4gICdOUFInOiAn4oKoJyxcbiAgJ05aRCc6ICckJyxcbiAgJ09NUic6ICfvt7wnLFxuICAnUEFCJzogJ0IvLicsXG4gICdQRU4nOiAnUy8uJyxcbiAgJ1BHSyc6ICdLJyxcbiAgJ1BIUCc6ICfigrEnLFxuICAnUEtSJzogJ+KCqCcsXG4gICdQTE4nOiAnesWCJyxcbiAgJ1BZRyc6ICdHcycsXG4gICdRQVInOiAn77e8JyxcbiAgJ1JNQic6ICfvv6UnLFxuICAnUk9OJzogJ2xlaScsXG4gICdSU0QnOiAn0JTQuNC9LicsXG4gICdSVUInOiAn4oK9JyxcbiAgJ1JXRic6ICdS4oKjJyxcbiAgJ1NBUic6ICfvt7wnLFxuICAnU0JEJzogJyQnLFxuICAnU0NSJzogJ+KCqCcsXG4gICdTREcnOiAn2Kwu2LMuJyxcbiAgJ1NFSyc6ICdrcicsXG4gICdTR0QnOiAnJCcsXG4gICdTSFAnOiAnwqMnLFxuICAnU0xMJzogJ0xlJyxcbiAgJ1NPUyc6ICdTJyxcbiAgJ1NSRCc6ICckJyxcbiAgJ1NTUCc6ICfCoycsXG4gICdTVEQnOiAnRGInLFxuICAnU1ZDJzogJyQnLFxuICAnU1lQJzogJ8KjJyxcbiAgJ1NaTCc6ICdFJyxcbiAgJ1RIQic6ICfguL8nLFxuICAnVEpTJzogJ1NNJyxcbiAgJ1RNVCc6ICdUJyxcbiAgJ1RORCc6ICfYry7YqicsXG4gICdUT1AnOiAnVCQnLFxuICAnVFJMJzogJ+KCpCcsXG4gICdUUlknOiAn4oK6JyxcbiAgJ1RURCc6ICdUVCQnLFxuICAnVFZEJzogJyQnLFxuICAnVFdEJzogJ05UJCcsXG4gICdUWlMnOiAnVFNoJyxcbiAgJ1VBSCc6ICfigrQnLFxuICAnVUdYJzogJ1VTaCcsXG4gICdVU0QnOiAnJCcsXG4gICdVWVUnOiAnJFUnLFxuICAnVVpTJzogJ9C70LInLFxuICAnVkVGJzogJ0JzJyxcbiAgJ1ZORCc6ICfigqsnLFxuICAnVlVWJzogJ1ZUJyxcbiAgJ1dTVCc6ICdXUyQnLFxuICAnWEFGJzogJ0ZDRkEnLFxuICAnWEJUJzogJ8mDJyxcbiAgJ1hDRCc6ICckJyxcbiAgJ1hPRic6ICdDRkEnLFxuICAnWFBGJzogJ+KCoycsXG4gICdZRVInOiAn77e8JyxcbiAgJ1pBUic6ICdSJyxcbiAgJ1pXRCc6ICdaJCdcbn07XG5cbnZhciBSZWFjdEN1cnJlbmN5Rm9ybWF0dGVyID0gZnVuY3Rpb24gUmVhY3RDdXJyZW5jeUZvcm1hdHRlcihwcm9wcykge1xuICB2YXIgZ2V0Rm9ybWF0dGVyID0gZnVuY3Rpb24gZ2V0Rm9ybWF0dGVyKG9wdGlvbnMpIHtcbiAgICB2YXIgbG9jYWxlID0gdm9pZCAwLFxuICAgICAgICBjdXJyZW5jeSA9IHZvaWQgMCxcbiAgICAgICAgc3ltYm9sID0gdm9pZCAwLFxuICAgICAgICBwYXR0ZXJuID0gdm9pZCAwLFxuICAgICAgICBkZWNpbWFsID0gdm9pZCAwLFxuICAgICAgICBncm91cCA9IHZvaWQgMDtcblxuICAgIC8vIEhlbHBlciBGdW5jdGlvbnNcbiAgICB2YXIgaXNVbmRlZmluZWQgPSBmdW5jdGlvbiBpc1VuZGVmaW5lZChvKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG8gPT09ICd1bmRlZmluZWQnO1xuICAgIH07XG5cbiAgICB2YXIgdG9GaXhlZCA9IGZ1bmN0aW9uIHRvRml4ZWQobiwgcHJlY2lzaW9uKSB7XG4gICAgICByZXR1cm4gKCsoTWF0aC5yb3VuZCgrKG4gKyAnZScgKyBwcmVjaXNpb24pKSArICdlJyArIC1wcmVjaXNpb24pKS50b0ZpeGVkKHByZWNpc2lvbik7XG4gICAgfTtcblxuICAgIC8vIFBlcmZvcm0gY2hlY2tzIG9uIGlucHV0cyBhbmQgc2V0IHVwIGRlZmF1bHRzIGFzIG5lZWRlZCAoZGVmYXVsdHMgdG8gZW4sIFVTRClcbiAgICBpZiAoaXNVbmRlZmluZWQob3B0aW9ucykpIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICBjdXJyZW5jeSA9IGlzVW5kZWZpbmVkKG9wdGlvbnMuY3VycmVuY3kpID8gJ1VTRCcgOiBvcHRpb25zLmN1cnJlbmN5LnRvVXBwZXJDYXNlKCk7XG4gICAgbG9jYWxlID0gaXNVbmRlZmluZWQob3B0aW9ucy5sb2NhbGUpID8gbG9jYWxlc1tkZWZhdWx0TG9jYWxlc1tjdXJyZW5jeV1dIDogbG9jYWxlc1tvcHRpb25zLmxvY2FsZV07XG5cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGxvY2FsZS5oKSkgbG9jYWxlID0gbG9jYWxlc1tsb2NhbGUuaF07IC8vIExvY2FsZSBpbmhlcml0YW5jZVxuXG4gICAgc3ltYm9sID0gaXNVbmRlZmluZWQob3B0aW9ucy5zeW1ib2wpID8gc3ltYm9sc1tjdXJyZW5jeV0gOiBvcHRpb25zLnN5bWJvbDtcblxuICAgIGlmIChpc1VuZGVmaW5lZChzeW1ib2wpKSBzeW1ib2wgPSBjdXJyZW5jeTsgLy8gSW4gY2FzZSB3ZSBkb24ndCBoYXZlIHRoZSBzeW1ib2wsIGp1c3QgdXNlIHRoZSBjY3kgY29kZVxuXG4gICAgcGF0dGVybiA9IGlzVW5kZWZpbmVkKG9wdGlvbnMucGF0dGVybikgPyBsb2NhbGUucCA6IG9wdGlvbnMucGF0dGVybjtcbiAgICBkZWNpbWFsID0gaXNVbmRlZmluZWQob3B0aW9ucy5kZWNpbWFsKSA/IGxvY2FsZS5kIDogb3B0aW9ucy5kZWNpbWFsO1xuICAgIGdyb3VwID0gaXNVbmRlZmluZWQob3B0aW9ucy5ncm91cCkgPyBsb2NhbGUuZyA6IG9wdGlvbnMuZ3JvdXA7XG5cbiAgICAvL2NvbnNvbGUubG9nKGxvY2FsZSk7XG5cbiAgICAvLyBlbmNvZGVQYXR0ZXJuIEZ1bmN0aW9uIC0gcmV0dXJucyBhIGZldyBzaW1wbGUgY2hhcmFjdGVyaXN0aWNzIG9mIHRoZSBwYXR0ZXJuIHByb3ZpZGVkXG4gICAgdmFyIGVuY29kZVBhdHRlcm4gPSBmdW5jdGlvbiBlbmNvZGVQYXR0ZXJuKHBhdHRlcm4pIHtcbiAgICAgIHZhciBkZWNpbWFsUGxhY2VzID0gMDtcbiAgICAgIHZhciBmcm9udFBhZGRpbmcgPSAnJztcbiAgICAgIHZhciBiYWNrUGFkZGluZyA9ICcnO1xuICAgICAgdmFyIGdyb3VwTGVuZ3RocyA9IFtdO1xuXG4gICAgICAvL2NvbnNvbGUubG9nKHBhdHRlcm4pO1xuXG4gICAgICB2YXIgcGF0dGVyblN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgIHZhciBkZWNpbWFsc1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgIHZhciBwYXR0ZXJuRW5kZWQgPSBmYWxzZTtcblxuICAgICAgdmFyIGN1cnJlbnRHcm91cExlbmd0aCA9IDA7XG4gICAgICB2YXIgemVyb0xlbmd0aCA9IDA7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0dGVybi5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgYyA9IHBhdHRlcm5baV07XG5cbiAgICAgICAgaWYgKCFwYXR0ZXJuU3RhcnRlZCAmJiBbJyMnLCAnMCcsICcsJywgJy4nXS5pbmRleE9mKGMpID4gLTEpIHtcbiAgICAgICAgICBwYXR0ZXJuU3RhcnRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBhdHRlcm5TdGFydGVkKSB7XG4gICAgICAgICAgZnJvbnRQYWRkaW5nICs9IGM7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGMpIHtcbiAgICAgICAgICBjYXNlICcjJzpcbiAgICAgICAgICAgICsrY3VycmVudEdyb3VwTGVuZ3RoO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICcwJzpcbiAgICAgICAgICAgIGlmIChkZWNpbWFsc1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgICAgKytkZWNpbWFsUGxhY2VzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgKytjdXJyZW50R3JvdXBMZW5ndGg7Kyt6ZXJvTGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICcsJzpcbiAgICAgICAgICAgIGdyb3VwTGVuZ3Rocy5wdXNoKGN1cnJlbnRHcm91cExlbmd0aCk7XG4gICAgICAgICAgICBjdXJyZW50R3JvdXBMZW5ndGggPSAwO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICcuJzpcbiAgICAgICAgICAgIGdyb3VwTGVuZ3Rocy5wdXNoKGN1cnJlbnRHcm91cExlbmd0aCk7XG4gICAgICAgICAgICBkZWNpbWFsc1N0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGF0dGVyblN0YXJ0ZWQgJiYgIShbJyMnLCAnMCcsICcsJywgJy4nXS5pbmRleE9mKGMpID4gLTEpKSB7XG4gICAgICAgICAgcGF0dGVybkVuZGVkID0gdHJ1ZTtcblxuICAgICAgICAgIGlmICghZGVjaW1hbHNTdGFydGVkKSB7XG4gICAgICAgICAgICBncm91cExlbmd0aHMucHVzaChjdXJyZW50R3JvdXBMZW5ndGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXR0ZXJuRW5kZWQpIHtcbiAgICAgICAgICBiYWNrUGFkZGluZyArPSBjO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBlbmNvZGVkUGF0dGVybiA9IHtcbiAgICAgICAgZGVjaW1hbFBsYWNlczogZGVjaW1hbFBsYWNlcyxcbiAgICAgICAgZnJvbnRQYWRkaW5nOiBmcm9udFBhZGRpbmcsXG4gICAgICAgIGJhY2tQYWRkaW5nOiBiYWNrUGFkZGluZyxcbiAgICAgICAgZ3JvdXBMZW5ndGhzOiBncm91cExlbmd0aHMsXG4gICAgICAgIHplcm9MZW5ndGg6IHplcm9MZW5ndGhcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBlbmNvZGVkUGF0dGVybjtcbiAgICB9O1xuXG4gICAgLy8gWmVybyBQYWRkaW5nIGhlbHBlciBmdW5jdGlvblxuICAgIHZhciBwYWQgPSBmdW5jdGlvbiBwYWQobiwgd2lkdGgpIHtcbiAgICAgIG4gPSBuICsgJyc7XG4gICAgICByZXR1cm4gbi5sZW5ndGggPj0gd2lkdGggPyBuIDogbmV3IEFycmF5KHdpZHRoIC0gbi5sZW5ndGggKyAxKS5qb2luKCcwJykgKyBuO1xuICAgIH07XG5cbiAgICAvLyBGb3JtYXQgZnVuY3Rpb25cbiAgICB2YXIgZm9ybWF0ID0gZnVuY3Rpb24gZm9ybWF0KG4sIGYpIHtcbiAgICAgIHZhciBmb3JtYXR0ZWROdW1iZXIgPSB0b0ZpeGVkKE1hdGguYWJzKG4pLCBmLmRlY2ltYWxQbGFjZXMpO1xuXG4gICAgICB2YXIgc3BsaXROdW1iZXIgPSBmb3JtYXR0ZWROdW1iZXIuc3BsaXQoXCIuXCIpO1xuXG4gICAgICAvLyBpLmUuIHdlIGFjdHVhbGx5IGhhdmUgc29tZSBzb3J0IG9mIGdyb3VwaW5nIGluIHRoZSB2YWx1ZXNcbiAgICAgIGlmIChmLmdyb3VwTGVuZ3Rocy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHZhciBzZWdtZW50ID0gXCJcIjtcbiAgICAgICAgdmFyIGN1cnNvciA9IHNwbGl0TnVtYmVyWzBdLmxlbmd0aDtcbiAgICAgICAgdmFyIGdyb3VwSW5kZXggPSBmLmdyb3VwTGVuZ3Rocy5sZW5ndGggLSAxO1xuXG4gICAgICAgIHdoaWxlIChjdXJzb3IgPiAwKSB7XG4gICAgICAgICAgaWYgKGdyb3VwSW5kZXggPD0gMCkge1xuICAgICAgICAgICAgZ3JvdXBJbmRleCA9IDE7XG4gICAgICAgICAgfSAvLyBBbHdheXMgcmVzZXQgdG8gdGhlIGZpcnN0IGdyb3VwIGxlbmd0aCBpZiB0aGUgbnVtYmVyIGlzIGJpZ1xuXG4gICAgICAgICAgdmFyIGN1cnJlbnRHcm91cExlbmd0aCA9IGYuZ3JvdXBMZW5ndGhzW2dyb3VwSW5kZXhdO1xuXG4gICAgICAgICAgdmFyIHN0YXJ0ID0gY3Vyc29yIC0gY3VycmVudEdyb3VwTGVuZ3RoO1xuXG4gICAgICAgICAgc2VnbWVudCA9IHNwbGl0TnVtYmVyWzBdLnN1YnN0cmluZyhzdGFydCwgY3Vyc29yKSArIGYuZ3JvdXAgKyBzZWdtZW50O1xuXG4gICAgICAgICAgY3Vyc29yIC09IGN1cnJlbnRHcm91cExlbmd0aDtcblxuICAgICAgICAgIC0tZ3JvdXBJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlZ21lbnQgPSBzZWdtZW50LnN1YnN0cmluZygwLCBzZWdtZW50Lmxlbmd0aCAtIDEpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHNlZ21lbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VnbWVudC5sZW5ndGggPCBmLnplcm9MZW5ndGgpIHtcbiAgICAgICAgc2VnbWVudCA9IHBhZChzZWdtZW50LCBmLnplcm9MZW5ndGgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgZm9ybWF0dGVkTnVtYmVyID0gZi5mcm9udFBhZGRpbmcgKyBzZWdtZW50ICsgKGlzVW5kZWZpbmVkKHNwbGl0TnVtYmVyWzFdKSA/ICcnIDogZi5kZWNpbWFsICsgc3BsaXROdW1iZXJbMV0pICsgZi5iYWNrUGFkZGluZztcblxuICAgICAgcmV0dXJuIGZvcm1hdHRlZE51bWJlci5yZXBsYWNlKCchJywgc3ltYm9sKTtcbiAgICB9O1xuXG4gICAgLy8gVXNlIGVuY29kZSBmdW5jdGlvbiB0byB3b3JrIG91dCBwYXR0ZXJuXG4gICAgdmFyIHBhdHRlcm5BcnJheSA9IHBhdHRlcm4uc3BsaXQoXCI7XCIpO1xuICAgIHZhciBwb3NpdGl2ZUZvcm1hdCA9IGVuY29kZVBhdHRlcm4ocGF0dGVybkFycmF5WzBdKTtcblxuICAgIHBvc2l0aXZlRm9ybWF0LnN5bWJvbCA9IHN5bWJvbDtcbiAgICBwb3NpdGl2ZUZvcm1hdC5kZWNpbWFsID0gZGVjaW1hbDtcbiAgICBwb3NpdGl2ZUZvcm1hdC5ncm91cCA9IGdyb3VwO1xuXG4gICAgdmFyIG5lZ2F0aXZlRm9ybWF0ID0gaXNVbmRlZmluZWQocGF0dGVybkFycmF5WzFdKSA/IGVuY29kZVBhdHRlcm4oXCItXCIgKyBwYXR0ZXJuQXJyYXlbMF0pIDogZW5jb2RlUGF0dGVybihwYXR0ZXJuQXJyYXlbMV0pO1xuXG4gICAgbmVnYXRpdmVGb3JtYXQuc3ltYm9sID0gc3ltYm9sO1xuICAgIG5lZ2F0aXZlRm9ybWF0LmRlY2ltYWwgPSBkZWNpbWFsO1xuICAgIG5lZ2F0aXZlRm9ybWF0Lmdyb3VwID0gZ3JvdXA7XG5cbiAgICB2YXIgemVybyA9IGlzVW5kZWZpbmVkKHBhdHRlcm5BcnJheVsyXSkgPyBmb3JtYXQoMCwgcG9zaXRpdmVGb3JtYXQpIDogcGF0dGVybkFycmF5WzJdO1xuXG4gICAgaWYgKCFpc1VuZGVmaW5lZChwYXR0ZXJuQXJyYXlbMl0pKSB7XG4gICAgICB6ZXJvRm9ybWF0ID0gcGF0dGVybkFycmF5WzJdO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAobikge1xuICAgICAgdmFyIGZvcm1hdHRlZE51bWJlciA9IHZvaWQgMDtcbiAgICAgIG4gPSBOdW1iZXIobik7XG4gICAgICBpZiAobiA+IDApIHtcbiAgICAgICAgZm9ybWF0dGVkTnVtYmVyID0gZm9ybWF0KG4sIHBvc2l0aXZlRm9ybWF0KTtcbiAgICAgIH0gZWxzZSBpZiAobiA9PSAwKSB7XG4gICAgICAgIGZvcm1hdHRlZE51bWJlciA9IHplcm8ucmVwbGFjZSgnIScsIHN5bWJvbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3JtYXR0ZWROdW1iZXIgPSBmb3JtYXQobiwgbmVnYXRpdmVGb3JtYXQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZvcm1hdHRlZE51bWJlcjtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBmb3JtYXQgPSBmdW5jdGlvbiBmb3JtYXQobnVtYmVyLCBvcHRpb25zKSB7XG4gICAgdmFyIGZvcm1hdHRlckZ1bmN0aW9uID0gZ2V0Rm9ybWF0dGVyKG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIGZvcm1hdHRlckZ1bmN0aW9uKG51bWJlcik7XG4gIH07XG5cbiAgdmFyIHF1YW50aXR5ID0gcHJvcHMucXVhbnRpdHksXG4gICAgICBjdXJyZW5jeSA9IHByb3BzLmN1cnJlbmN5LFxuICAgICAgc3ltYm9sID0gcHJvcHMuc3ltYm9sLFxuICAgICAgbG9jYWxlID0gcHJvcHMubG9jYWxlLFxuICAgICAgZGVjaW1hbCA9IHByb3BzLmRlY2ltYWwsXG4gICAgICBncm91cCA9IHByb3BzLmdyb3VwLFxuICAgICAgcGF0dGVybiA9IHByb3BzLnBhdHRlcm47XG5cblxuICByZXR1cm4gZm9ybWF0KHByb3BzLnF1YW50aXR5LCB7XG4gICAgY3VycmVuY3k6IGN1cnJlbmN5LFxuICAgIHN5bWJvbDogc3ltYm9sLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIGRlY2ltYWw6IGRlY2ltYWwsXG4gICAgZ3JvdXA6IGdyb3VwLFxuICAgIHBhdHRlcm46IHBhdHRlcm5cbiAgfSk7XG59O1xuXG5SZWFjdEN1cnJlbmN5Rm9ybWF0dGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY3VycmVuY3k6ICdVU0QnXG59O1xuXG5SZWFjdEN1cnJlbmN5Rm9ybWF0dGVyLnByb3BUeXBlcyA9IHtcbiAgcXVhbnRpdHk6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgY3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN5bWJvbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbG9jYWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWNpbWFsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBncm91cDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGF0dGVybjogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxucmV0dXJuIFJlYWN0Q3VycmVuY3lGb3JtYXR0ZXI7XG5cbn0pKSk7XG4iXSwibmFtZXMiOlsiU3Rhckljb24iLCJJbWFnZSIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkN1cnJlbmN5IiwiRGF0YUNvbnRleHQiLCJNQVhfUkFUSU5HIiwiTUlOX1JBVElORyIsIlByb2R1Y3QiLCJwcm9kdWN0Iiwicm91dGVyIiwic3RhdGUiLCJjYXRlZ29yaWVzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmF0aW5nIiwiaGFzUHJpbWUiLCJmaW5kQ2F0ZWdvcnlOYW1lRnJvbUlkIiwiaWQiLCJmaWx0ZXIiLCJjYXRlZ29yeSIsIl9pZCIsIm1hcCIsIm5hbWUiLCJpbWFnZXMiLCJ1cmwiLCJwdXNoIiwidGl0bGUiLCJBcnJheSIsImZpbGwiLCJfIiwiaSIsImluU3RvY2siLCJkZXNjcmlwdGlvbiIsInByaWNlT3JpZ2luIiwicHJpY2VTYWxlIl0sInNvdXJjZVJvb3QiOiIifQ==