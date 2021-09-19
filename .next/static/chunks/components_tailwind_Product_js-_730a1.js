(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_tailwind_Product_js-_730a1"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9jb21wb25lbnRzX3RhaWx3aW5kX1Byb2R1Y3RfanMtXzczMGExLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNTyxVQUFVLEdBQUcsQ0FBbkI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsQ0FBbkI7O0FBRUEsU0FBU0MsT0FBVCxPQUE4QjtBQUFBOztBQUFBOztBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVztBQUM3QixNQUFNQyxNQUFNLEdBQUdULHNEQUFTLEVBQXhCOztBQUQ2QixvQkFFWEMsaURBQVUsQ0FBQ0csMkRBQUQsQ0FGQztBQUFBLE1BRXJCTSxLQUZxQixlQUVyQkEsS0FGcUI7O0FBQUEsTUFHckJDLFVBSHFCLEdBR05ELEtBSE0sQ0FHckJDLFVBSHFCOztBQUFBLGtCQUtaVCwrQ0FBUSxDQUFDVSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCVCxVQUFVLEdBQUdDLFVBQWIsR0FBMEIsQ0FBM0MsSUFBZ0RBLFVBQTNELENBQUQsQ0FMSTtBQUFBLE1BS3RCUyxNQUxzQjs7QUFBQSxtQkFNVmIsK0NBQVEsQ0FBQ1UsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEdBQWpCLENBTkU7QUFBQSxNQU10QkUsUUFOc0I7O0FBUTdCLE1BQU1DLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQUMsRUFBRSxFQUFJO0FBQ3BDLFdBQU9QLFVBQVUsQ0FBQ1EsTUFBWCxDQUFrQixVQUFBQyxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDQyxHQUFULEtBQWlCSCxFQUFyQjtBQUFBLEtBQTFCLEVBQW1ESSxHQUFuRCxDQUF1RCxVQUFBRixRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDRyxJQUFiO0FBQUEsS0FBL0QsQ0FBUDtBQUNBLEdBRkQ7O0FBSUE7QUFBQTtBQUNDO0FBQ0E7QUFDQyxlQUFTLEVBQUMsOEpBRFg7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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFNBQVMsS0FBcUM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isc0JBQXNCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw0REFBNEQ7O0FBRTVEOztBQUVBLGdEQUFnRDs7QUFFaEQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzQkFBc0Isb0JBQW9CO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLG1DQUFtQztBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTs7QUFFWjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YWlsd2luZC9Qcm9kdWN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWN1cnJlbmN5LWZvcm1hdHRlci9kaXN0L3JlYWN0LWN1cnJlbmN5LWZvcm1hdHRlci51bWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3Rhckljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ3VycmVuY3kgZnJvbSAncmVhY3QtY3VycmVuY3ktZm9ybWF0dGVyJztcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi8uLi9zdG9yZS9HbG9iYWxTdGF0ZSc7XHJcblxyXG5jb25zdCBNQVhfUkFUSU5HID0gNTtcclxuY29uc3QgTUlOX1JBVElORyA9IDM7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0KHsgcHJvZHVjdCB9KSB7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3QgeyBzdGF0ZSB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcblx0Y29uc3QgeyBjYXRlZ29yaWVzIH0gPSBzdGF0ZTtcclxuXHJcblx0Y29uc3QgW3JhdGluZ10gPSB1c2VTdGF0ZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoTUFYX1JBVElORyAtIE1JTl9SQVRJTkcgKyAxKSArIE1JTl9SQVRJTkcpKTtcclxuXHRjb25zdCBbaGFzUHJpbWVdID0gdXNlU3RhdGUoTWF0aC5yYW5kb20oKSA8IDAuNSk7XHJcblxyXG5cdGNvbnN0IGZpbmRDYXRlZ29yeU5hbWVGcm9tSWQgPSBpZCA9PiB7XHJcblx0XHRyZXR1cm4gY2F0ZWdvcmllcy5maWx0ZXIoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuX2lkID09PSBpZCkubWFwKGNhdGVnb3J5ID0+IGNhdGVnb3J5Lm5hbWUpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQvL3RyYW5zaXRpb24gZHVyYXRpb24tMTAwIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMjUgaG92ZXI6dGV4dC13aGl0ZSBhY3RpdmU6dGV4dC1yZWQtNTAwXHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT0ncmVsYXRpdmUgZmxleCBmbGV4LWNvbCBtLTUgbWQ6bS0yIGJnLXdoaXRlIHotMzAgcC01IHB0LTEwIGN1cnNvci1wb2ludGVyIFxyXG5cdFx0XHRcdFx0c2hhZG93LW1kIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIHRyYW5zZm9ybSBob3ZlcjotdHJhbnNsYXRlLXktMiBob3ZlcjpzaGFkb3ctbGcnXHJcblx0XHQ+XHJcblx0XHRcdDxwIGNsYXNzTmFtZT0nYWJzb2x1dGUgdG9wLTIgcmlnaHQtMiBjYXBpdGFsaXplIHRleHQteHMgdGV4dC1ncmF5LTQwMCBpdGFsaWMnPlxyXG5cdFx0XHRcdHtmaW5kQ2F0ZWdvcnlOYW1lRnJvbUlkKHByb2R1Y3QuY2F0ZWdvcnkpfVxyXG5cdFx0XHQ8L3A+XHJcblxyXG5cdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRzcmM9e3Byb2R1Y3QuaW1hZ2VzWzBdLnVybH1cclxuXHRcdFx0XHRhbHQ9J1Byb2R1Y3QnXHJcblx0XHRcdFx0aGVpZ2h0PXszMDB9XHJcblx0XHRcdFx0d2lkdGg9ezMwMH1cclxuXHRcdFx0XHRvYmplY3RGaXQ9J2NvbnRhaW4nXHJcblx0XHRcdFx0b25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9wcm9kdWN0LyR7cHJvZHVjdC5faWR9YCl9XHJcblx0XHRcdC8+XHJcblxyXG5cdFx0XHQ8aDQgY2xhc3NOYW1lPSdteS01IGxpbmUtY2xhbXAtMiBjYXBpdGFsaXplJyBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL3Byb2R1Y3QvJHtwcm9kdWN0Ll9pZH1gKX0+XHJcblx0XHRcdFx0e3Byb2R1Y3QudGl0bGV9XHJcblx0XHRcdDwvaDQ+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4nPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4Jz5cclxuXHRcdFx0XHRcdHtBcnJheShyYXRpbmcpXHJcblx0XHRcdFx0XHRcdC5maWxsKClcclxuXHRcdFx0XHRcdFx0Lm1hcCgoXywgaSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxkaXYga2V5PXtpfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxTdGFySWNvbiBjbGFzc05hbWU9J2gtNSB0ZXh0LXllbGxvdy01MDAnIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17cHJvZHVjdC5pblN0b2NrIDw9IDAgPyAndGV4dC1yZWQtNTAwJyA6ICd0ZXh0LWdyZWVuLTYwMCd9PlxyXG5cdFx0XHRcdFx0e3Byb2R1Y3QuaW5TdG9jayA8PSAwID8gYEjhur90IGjDoG5nYCA6IGBLaG86ICR7cHJvZHVjdC5pblN0b2NrfWB9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LXhzIG15LTIgbGluZS1jbGFtcC0yJz57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGZsZXggc3BhY2UteC01ICR7aGFzUHJpbWUgPyAnJyA6ICdtYi00J31gfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGV4dC1ncmF5LTYwMCBsaW5lLXRocm91Z2gnPlxyXG5cdFx0XHRcdFx0PEN1cnJlbmN5IHF1YW50aXR5PXtwcm9kdWN0LnByaWNlT3JpZ2lufSBjdXJyZW5jeT0nVk5EJyBwYXR0ZXJuPScjIywjIyMgIScgZ3JvdXA9Jy4nIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXJlZC02MDAnPlxyXG5cdFx0XHRcdFx0PEN1cnJlbmN5IHF1YW50aXR5PXtwcm9kdWN0LnByaWNlU2FsZX0gY3VycmVuY3k9J1ZORCcgcGF0dGVybj0nIyMsIyMjICEnIGdyb3VwPScuJyAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdHtoYXNQcmltZSA/IChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yJz5cclxuXHRcdFx0XHRcdHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQG5leHQvbmV4dC9uby1pbWctZWxlbWVudCAqL31cclxuXHRcdFx0XHRcdDxpbWcgc3JjPSdodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vZmR3JyBhbHQ9J0dpYW8gaMOgbmcgbWnhu4VuIHBow60nIGNsYXNzTmFtZT0ndy0xMicgLz5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC14cyB0ZXh0LWdyYXktNTAwJz5HaWFvIGjDoG5nIG1p4buFbiBwaMOtPC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXhzIHRleHQtZ3JheS01MDAgbXktMic+VFAuIEjhu5MgQ2jDrSBNaW5oPC9kaXY+XHJcblx0XHRcdCl9XHJcblxyXG5cdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0b25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9wcm9kdWN0LyR7cHJvZHVjdC5faWR9YCl9XHJcblx0XHRcdFx0Y2xhc3NOYW1lPSdteC1hdXRvIGJ1dHRvbi1ibHVlIHAtMiB0ZXh0LWdyYXktNzAwIGZvbnQtc2VtaWJvbGQgdGV4dC14bCdcclxuXHRcdFx0PlxyXG5cdFx0XHRcdFhlbSBjaGkgdGnhur90XHJcblx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcclxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgK1xuICAgICAgICAgICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdGYWlsZWQgJyArIGxvY2F0aW9uICsgJyB0eXBlOiAnICsgZXJyb3IubWVzc2FnZSArIChzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVzZXRzIHdhcm5pbmcgY2FjaGUgd2hlbiB0ZXN0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAvKiBnbG9iYWwgU3ltYm9sICovXG4gIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbiAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZXJhdG9yIG1ldGhvZCBmdW5jdGlvbiBjb250YWluZWQgb24gdGhlIGl0ZXJhYmxlIG9iamVjdC5cbiAgICpcbiAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG4gICAqXG4gICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG4gICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgKiAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobXlJdGVyYWJsZSk7XG4gICAqICAgICAgIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcbiAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdGhhdCBhbGxvdyBkZWNsYXJhdGlvbiBhbmQgdmFsaWRhdGlvbiBvZiBwcm9wcyB0aGF0IGFyZVxuICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxuICAgKlxuICAgKiAgIHZhciBQcm9wcyA9IHJlcXVpcmUoJ1JlYWN0UHJvcFR5cGVzJyk7XG4gICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgcHJvcCBuYW1lZCBcImRlc2NyaXB0aW9uXCIuXG4gICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcmVxdWlyZWQgZW51bSBwcm9wIG5hbWVkIFwiY2F0ZWdvcnlcIi5cbiAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHByb3AgbmFtZWQgXCJkaWFsb2dcIiB0aGF0IHJlcXVpcmVzIGFuIGluc3RhbmNlIG9mIERpYWxvZy5cbiAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxuICAgKiAgICAgfSxcbiAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7IC4uLiB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIEEgbW9yZSBmb3JtYWwgc3BlY2lmaWNhdGlvbiBvZiBob3cgdGhlc2UgbWV0aG9kcyBhcmUgdXNlZDpcbiAgICpcbiAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG4gICAqICAgZGVjbCA6PSBSZWFjdFByb3BUeXBlcy57dHlwZX0oLmlzUmVxdWlyZWQpP1xuICAgKlxuICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG4gICAqIGFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb25zLiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cbiAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICogICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcbiAgICogICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xuICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICogICAgICAgICAgKTtcbiAgICogICAgICAgIH1cbiAgICogICAgICB9XG4gICAqICAgIH0sXG4gICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxuICAgKiAgfSk7XG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdhcnJheScpLFxuICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG4gICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3ltYm9sJyksXG5cbiAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuICAgIGVsZW1lbnRUeXBlOiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBwcm9wIG9uIGAnICsgY29tcG9uZW50TmFtZSAgKyAnYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIVJlYWN0SXMuaXNWYWxpZEVsZW1lbnRUeXBlKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50IHR5cGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudHMgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LCBnb3QgJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIGFyZ3VtZW50cy4gJyArXG4gICAgICAgICAgICAnQSBjb21tb24gbWlzdGFrZSBpcyB0byB3cml0ZSBvbmVPZih4LCB5LCB6KSBpbnN0ZWFkIG9mIG9uZU9mKFt4LCB5LCB6XSkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheS4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMsIGZ1bmN0aW9uIHJlcGxhY2VyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgICAgIGlmICh0eXBlID09PSAnc3ltYm9sJykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIFN0cmluZyhwcm9wVmFsdWUpICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChoYXMocHJvcFZhbHVlLCBrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAnICsgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpICsgJyBhdCBpbmRleCAnICsgaSArICcuJ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxuICAgICAgLy8gcHJvcHMuXG4gICAgICB2YXIgYWxsS2V5cyA9IGFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG4gICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gZmFsc3kgdmFsdWUgY2FuJ3QgYmUgYSBTeW1ib2xcbiAgICBpZiAoIXByb3BWYWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGU7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgncmVhY3QnKSwgcmVxdWlyZSgncHJvcC10eXBlcycpKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ3JlYWN0JywgJ3Byb3AtdHlwZXMnXSwgZmFjdG9yeSkgOlxuXHQoZ2xvYmFsLnJlYWN0Q3VycmVuY3lGb3JtYXR0ZXIgPSBmYWN0b3J5KGdsb2JhbC5SZWFjdCxnbG9iYWwuUHJvcFR5cGVzKSk7XG59KHRoaXMsIChmdW5jdGlvbiAocmVhY3QsUHJvcFR5cGVzKSB7ICd1c2Ugc3RyaWN0JztcblxucmVhY3QgPSByZWFjdCAmJiByZWFjdC5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdCcpID8gcmVhY3RbJ2RlZmF1bHQnXSA6IHJlYWN0O1xuUHJvcFR5cGVzID0gUHJvcFR5cGVzICYmIFByb3BUeXBlcy5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdCcpID8gUHJvcFR5cGVzWydkZWZhdWx0J10gOiBQcm9wVHlwZXM7XG5cbnZhciBsb2NhbGVzID0ge1xuICBhZjoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgYWZfTkE6IHtcbiAgICBoOiAnYWYnXG4gIH0sXG4gIGFmX1pBOiB7XG4gICAgaDogJ2FmJ1xuICB9LFxuICBhZ3E6IHtcbiAgICBwOiAnIywjIzAuMDAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGFncV9DTToge1xuICAgIGg6ICdhZ3EnXG4gIH0sXG4gIGFrOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBha19HSDoge1xuICAgIGg6ICdhaydcbiAgfSxcbiAgYW06IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGFtX0VUOiB7XG4gICAgaDogJ2FtJ1xuICB9LFxuICBhcjoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGFyXzAwMToge1xuICAgIGg6ICdhcidcbiAgfSxcbiAgYXJfQUU6IHtcbiAgICBoOiAnYXInXG4gIH0sXG4gIGFyX0JIOiB7XG4gICAgaDogJ2FyJ1xuICB9LFxuICBhcl9ESjoge1xuICAgIGg6ICdhcidcbiAgfSxcbiAgYXJfRFo6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBhcl9FRzoge1xuICAgIGg6ICdhcidcbiAgfSxcbiAgYXJfRUg6IHtcbiAgICBoOiAnYXInXG4gIH0sXG4gIGFyX0VSOiB7XG4gICAgaDogJ2FyJ1xuICB9LFxuICBhcl9JTDoge1xuICAgIGg6ICdhcidcbiAgfSxcbiAgYXJfSVE6IHtcbiAgICBoOiAnYXInXG4gIH0sXG4gIGFyX0pPOiB7XG4gICAgaDogJ2FyJ1xuICB9LFxuICBhcl9LTToge1xuICAgIGg6ICdhcidcbiAgfSxcbiAgYXJfS1c6IHtcbiAgICBoOiAnYXInXG4gIH0sXG4gIGFyX0xCOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgYXJfTFk6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBhcl9NQToge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGFyX01SOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgYXJfT006IHtcbiAgICBoOiAnYXInXG4gIH0sXG4gIGFyX1BTOiB7XG4gICAgaDogJ2FyJ1xuICB9LFxuICBhcl9RQToge1xuICAgIGg6ICdhcidcbiAgfSxcbiAgYXJfU0E6IHtcbiAgICBoOiAnYXInXG4gIH0sXG4gIGFyX1NEOiB7XG4gICAgaDogJ2FyJ1xuICB9LFxuICBhcl9TTzoge1xuICAgIGg6ICdhcidcbiAgfSxcbiAgYXJfU1M6IHtcbiAgICBoOiAnYXInXG4gIH0sXG4gIGFyX1NZOiB7XG4gICAgaDogJ2FyJ1xuICB9LFxuICBhcl9URDoge1xuICAgIGg6ICdhcidcbiAgfSxcbiAgYXJfVE46IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBhcl9ZRToge1xuICAgIGg6ICdhcidcbiAgfSxcbiAgYXM6IHtcbiAgICBwOiAnISAjLCMjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBhc19JTjoge1xuICAgIGg6ICdhcydcbiAgfSxcbiAgYXNhOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgYXNhX1RaOiB7XG4gICAgaDogJ2FzYSdcbiAgfSxcbiAgYXN0OiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgYXN0X0VTOiB7XG4gICAgaDogJ2FzdCdcbiAgfSxcbiAgYXo6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBhel9DeXJsOiB7XG4gICAgaDogJ2F6J1xuICB9LFxuICBhel9DeXJsX0FaOiB7XG4gICAgaDogJ2F6J1xuICB9LFxuICBhel9MYXRuOiB7XG4gICAgaDogJ2F6J1xuICB9LFxuICBhel9MYXRuX0FaOiB7XG4gICAgaDogJ2F6J1xuICB9LFxuICBiYXM6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBiYXNfQ006IHtcbiAgICBoOiAnYmFzJ1xuICB9LFxuICBiZToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGJlX0JZOiB7XG4gICAgaDogJ2JlJ1xuICB9LFxuICBiZW06IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGJlbV9aTToge1xuICAgIGg6ICdiZW0nXG4gIH0sXG4gIGJlejoge1xuICAgIHA6ICcjLCMjMC4wMCEnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgYmV6X1RaOiB7XG4gICAgaDogJ2JleidcbiAgfSxcbiAgYmc6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBiZ19CRzoge1xuICAgIGg6ICdiZydcbiAgfSxcbiAgYm06IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGJtX01MOiB7XG4gICAgaDogJ2JtJ1xuICB9LFxuICBibjoge1xuICAgIHA6ICcjLCMjLCMjMC4wMCEnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgYm5fQkQ6IHtcbiAgICBoOiAnYm4nXG4gIH0sXG4gIGJuX0lOOiB7XG4gICAgaDogJ2JuJ1xuICB9LFxuICBibzoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGJvX0NOOiB7XG4gICAgaDogJ2JvJ1xuICB9LFxuICBib19JTjoge1xuICAgIGg6ICdibydcbiAgfSxcbiAgYnI6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBicl9GUjoge1xuICAgIGg6ICdicidcbiAgfSxcbiAgYnJ4OiB7XG4gICAgcDogJyEgIywjIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgYnJ4X0lOOiB7XG4gICAgaDogJ2JyeCdcbiAgfSxcbiAgYnM6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBic19DeXJsOiB7XG4gICAgaDogJ2JzJ1xuICB9LFxuICBic19DeXJsX0JBOiB7XG4gICAgaDogJ2JzJ1xuICB9LFxuICBic19MYXRuOiB7XG4gICAgaDogJ2JzJ1xuICB9LFxuICBic19MYXRuX0JBOiB7XG4gICAgaDogJ2JzJ1xuICB9LFxuICBjYToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGNhX0FEOiB7XG4gICAgaDogJ2NhJ1xuICB9LFxuICBjYV9FUzoge1xuICAgIGg6ICdjYSdcbiAgfSxcbiAgY2FfRVNfVkFMRU5DSUE6IHtcbiAgICBoOiAnY2EnXG4gIH0sXG4gIGNhX0ZSOiB7XG4gICAgaDogJ2NhJ1xuICB9LFxuICBjYV9JVDoge1xuICAgIGg6ICdjYSdcbiAgfSxcbiAgY2U6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBjZV9SVToge1xuICAgIGg6ICdjZSdcbiAgfSxcbiAgY2dnOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBjZ2dfVUc6IHtcbiAgICBoOiAnY2dnJ1xuICB9LFxuICBjaHI6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGNocl9VUzoge1xuICAgIGg6ICdjaHInXG4gIH0sXG4gIGNrYjoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgY2tiX0lROiB7XG4gICAgaDogJ2NrYidcbiAgfSxcbiAgY2tiX0lSOiB7XG4gICAgaDogJ2NrYidcbiAgfSxcbiAgY3M6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBjc19DWjoge1xuICAgIGg6ICdjcydcbiAgfSxcbiAgY3U6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBjdV9SVToge1xuICAgIGg6ICdjdSdcbiAgfSxcbiAgY3k6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGN5X0dCOiB7XG4gICAgaDogJ2N5J1xuICB9LFxuICBkYToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGRhX0RLOiB7XG4gICAgaDogJ2RhJ1xuICB9LFxuICBkYV9HTDoge1xuICAgIGg6ICdkYSdcbiAgfSxcbiAgZGF2OiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBkYXZfS0U6IHtcbiAgICBoOiAnZGF2J1xuICB9LFxuICBkZToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGRlX0FUOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZGVfQkU6IHtcbiAgICBoOiAnZGUnXG4gIH0sXG4gIGRlX0NIOiB7XG4gICAgcDogJyEgIywjIzAuMDA7IS0jLCMjMC4wMCcsXG4gICAgZzogJ1xcJycsXG4gICAgZDogJy4nXG4gIH0sXG4gIGRlX0RFOiB7XG4gICAgaDogJ2RlJ1xuICB9LFxuICBkZV9MSToge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnXFwnJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZGVfTFU6IHtcbiAgICBoOiAnZGUnXG4gIH0sXG4gIGRqZToge1xuICAgIHA6ICcjLCMjMC4wMCEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZGplX05FOiB7XG4gICAgaDogJ2RqZSdcbiAgfSxcbiAgZHNiOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZHNiX0RFOiB7XG4gICAgaDogJ2RzYidcbiAgfSxcbiAgZHVhOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZHVhX0NNOiB7XG4gICAgaDogJ2R1YSdcbiAgfSxcbiAgZHlvOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZHlvX1NOOiB7XG4gICAgaDogJ2R5bydcbiAgfSxcbiAgZHo6IHtcbiAgICBwOiAnISMsIyMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGR6X0JUOiB7XG4gICAgaDogJ2R6J1xuICB9LFxuICBlYnU6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGVidV9LRToge1xuICAgIGg6ICdlYnUnXG4gIH0sXG4gIGVlOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBlZV9HSDoge1xuICAgIGg6ICdlZSdcbiAgfSxcbiAgZWVfVEc6IHtcbiAgICBoOiAnZWUnXG4gIH0sXG4gIGVsOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZWxfQ1k6IHtcbiAgICBoOiAnZWwnXG4gIH0sXG4gIGVsX0dSOiB7XG4gICAgaDogJ2VsJ1xuICB9LFxuICBlbjoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZW5fMDAxOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl8xNTA6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBlbl9BRzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fQUk6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0FTOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9BVDoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGVuX0FVOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9CQjoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fQkU6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBlbl9CSToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fQk06IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0JTOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9CVzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fQlo6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0NBOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9DQzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fQ0g6IHtcbiAgICBwOiAnISAjLCMjMC4wMDshLSMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGVuX0NLOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9DTToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fQ1g6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0NZOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9ERToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fREc6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0RLOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9ETToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fRVI6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0ZJOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBlbl9GSjoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fRks6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0ZNOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9HQjoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fR0Q6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0dHOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9HSDoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fR0k6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0dNOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9HVToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fR1k6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0hLOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9JRToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fSUw6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0lNOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9JTjoge1xuICAgIHA6ICchICMsIyMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGVuX0lPOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9KRToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fSk06IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0tFOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9LSToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fS046IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0tZOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9MQzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fTFI6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0xTOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9NRzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fTUg6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX01POiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9NUDoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fTVM6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX01UOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9NVToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fTVc6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX01ZOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9OQToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fTkY6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX05HOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9OTDoge1xuICAgIHA6ICchICMsIyMwLjAwOyEgLSMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGVuX05SOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9OVToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fTlo6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1BHOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9QSDoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fUEs6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1BOOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9QUjoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fUFc6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1JXOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9TQjoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fU0M6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1NEOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9TRToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZW5fU0c6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1NIOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9TSToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fU0w6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1NTOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9TWDoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fU1o6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1RDOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9USzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fVE86IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1RUOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9UVjoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fVFo6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1VHOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9VTToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fVVM6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1VTX1BPU0lYOiB7XG4gICAgcDogJyEgIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZW5fVkM6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1ZHOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9WSToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fVlU6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1dTOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9aQToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZW5fWk06IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1pXOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbzoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZW9fMDAxOiB7XG4gICAgaDogJ2VvJ1xuICB9LFxuICBlczoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGVzXzQxOToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZXNfQVI6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBlc19CTzoge1xuICAgIGg6ICdlcydcbiAgfSxcbiAgZXNfQlI6IHtcbiAgICBoOiAnZXMnXG4gIH0sXG4gIGVzX0NMOiB7XG4gICAgcDogJyEjLCMjMC4wMDshLSMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGVzX0NPOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZXNfQ1I6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBlc19DVToge1xuICAgIGg6ICdlcydcbiAgfSxcbiAgZXNfRE86IHtcbiAgICBoOiAnZXMnXG4gIH0sXG4gIGVzX0VBOiB7XG4gICAgaDogJ2VzJ1xuICB9LFxuICBlc19FQzoge1xuICAgIHA6ICchIywjIzAuMDA7IS0jLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBlc19FUzoge1xuICAgIGg6ICdlcydcbiAgfSxcbiAgZXNfR1E6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGVzX0dUOiB7XG4gICAgaDogJ2VzJ1xuICB9LFxuICBlc19ITjoge1xuICAgIGg6ICdlcydcbiAgfSxcbiAgZXNfSUM6IHtcbiAgICBoOiAnZXMnXG4gIH0sXG4gIGVzX01YOiB7XG4gICAgaDogJ2VzJ1xuICB9LFxuICBlc19OSToge1xuICAgIGg6ICdlcydcbiAgfSxcbiAgZXNfUEE6IHtcbiAgICBoOiAnZXMnXG4gIH0sXG4gIGVzX1BFOiB7XG4gICAgaDogJ2VzJ1xuICB9LFxuICBlc19QSDoge1xuICAgIGg6ICdlcydcbiAgfSxcbiAgZXNfUFI6IHtcbiAgICBoOiAnZXMnXG4gIH0sXG4gIGVzX1BZOiB7XG4gICAgcDogJyEgIywjIzAuMDA7ISAtIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZXNfU1Y6IHtcbiAgICBoOiAnZXMnXG4gIH0sXG4gIGVzX1VTOiB7XG4gICAgaDogJ2VzJ1xuICB9LFxuICBlc19VWToge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGVzX1ZFOiB7XG4gICAgcDogJyEjLCMjMC4wMDshLSMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGV0OiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZXRfRUU6IHtcbiAgICBoOiAnZXQnXG4gIH0sXG4gIGV1OiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZXVfRVM6IHtcbiAgICBoOiAnZXUnXG4gIH0sXG4gIGV3bzoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGV3b19DTToge1xuICAgIGg6ICdld28nXG4gIH0sXG4gIGZhOiB7XG4gICAgcDogJ+KAjiEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBmYV9BRjoge1xuICAgIGg6ICdmYSdcbiAgfSxcbiAgZmFfSVI6IHtcbiAgICBoOiAnZmEnXG4gIH0sXG4gIGZmOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZmZfQ006IHtcbiAgICBoOiAnZmYnXG4gIH0sXG4gIGZmX0dOOiB7XG4gICAgaDogJ2ZmJ1xuICB9LFxuICBmZl9NUjoge1xuICAgIGg6ICdmZidcbiAgfSxcbiAgZmZfU046IHtcbiAgICBoOiAnZmYnXG4gIH0sXG4gIGZpOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZmlfRkk6IHtcbiAgICBoOiAnZmknXG4gIH0sXG4gIGZpbDoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZmlsX1BIOiB7XG4gICAgaDogJ2ZpbCdcbiAgfSxcbiAgZm86IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBmb19ESzoge1xuICAgIGg6ICdmbydcbiAgfSxcbiAgZm9fRk86IHtcbiAgICBoOiAnZm8nXG4gIH0sXG4gIGZyOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZnJfQkU6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBmcl9CRjoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfQkk6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX0JKOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9CTDoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfQ0E6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX0NEOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9DRjoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfQ0c6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX0NIOiB7XG4gICAgcDogJyEgIywjIzAuMDA7IS0jLCMjMC4wMCcsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBmcl9DSToge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfQ006IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX0RKOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9EWjoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfRlI6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX0dBOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9HRjoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfR046IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX0dQOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9HUToge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfSFQ6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX0tNOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9MVToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGZyX01BOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZnJfTUM6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX01GOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9NRzoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfTUw6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX01ROiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9NUjoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfTVU6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX05DOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9ORToge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfUEY6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX1BNOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9SRToge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfUlc6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX1NDOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9TTjoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfU1k6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX1REOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9URzoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfVE46IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX1ZVOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9XRjoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfWVQ6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZ1cjoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGZ1cl9JVDoge1xuICAgIGg6ICdmdXInXG4gIH0sXG4gIGZ5OiB7XG4gICAgcDogJyEgIywjIzAuMDA7ISAjLCMjMC4wMC0nLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZnlfTkw6IHtcbiAgICBoOiAnZnknXG4gIH0sXG4gIGdhOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBnYV9JRToge1xuICAgIGg6ICdnYSdcbiAgfSxcbiAgZ2Q6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGdkX0dCOiB7XG4gICAgaDogJ2dkJ1xuICB9LFxuICBnbDoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGdsX0VTOiB7XG4gICAgaDogJ2dsJ1xuICB9LFxuICBnc3c6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJ+KAmScsXG4gICAgZDogJy4nXG4gIH0sXG4gIGdzd19DSDoge1xuICAgIGg6ICdnc3cnXG4gIH0sXG4gIGdzd19GUjoge1xuICAgIGg6ICdnc3cnXG4gIH0sXG4gIGdzd19MSToge1xuICAgIGg6ICdnc3cnXG4gIH0sXG4gIGd1OiB7XG4gICAgcDogJyEjLCMjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBndV9JTjoge1xuICAgIGg6ICdndSdcbiAgfSxcbiAgZ3V6OiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBndXpfS0U6IHtcbiAgICBoOiAnZ3V6J1xuICB9LFxuICBndjoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZ3ZfSU06IHtcbiAgICBoOiAnZ3YnXG4gIH0sXG4gIGhhOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgaGFfR0g6IHtcbiAgICBoOiAnaGEnXG4gIH0sXG4gIGhhX05FOiB7XG4gICAgaDogJ2hhJ1xuICB9LFxuICBoYV9ORzoge1xuICAgIGg6ICdoYSdcbiAgfSxcbiAgaGF3OiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBoYXdfVVM6IHtcbiAgICBoOiAnaGF3J1xuICB9LFxuICBoZToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGhlX0lMOiB7XG4gICAgaDogJ2hlJ1xuICB9LFxuICBoaToge1xuICAgIHA6ICchIywjIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgaGlfSU46IHtcbiAgICBoOiAnaGknXG4gIH0sXG4gIGhyOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgaHJfQkE6IHtcbiAgICBoOiAnaHInXG4gIH0sXG4gIGhyX0hSOiB7XG4gICAgaDogJ2hyJ1xuICB9LFxuICBoc2I6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBoc2JfREU6IHtcbiAgICBoOiAnaHNiJ1xuICB9LFxuICBodToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGh1X0hVOiB7XG4gICAgaDogJ2h1J1xuICB9LFxuICBoeToge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGh5X0FNOiB7XG4gICAgaDogJ2h5J1xuICB9LFxuICBpZDoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgaWRfSUQ6IHtcbiAgICBoOiAnaWQnXG4gIH0sXG4gIGlnOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBpZ19ORzoge1xuICAgIGg6ICdpZydcbiAgfSxcbiAgaWk6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGlpX0NOOiB7XG4gICAgaDogJ2lpJ1xuICB9LFxuICBpczoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGlzX0lTOiB7XG4gICAgaDogJ2lzJ1xuICB9LFxuICBpdDoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGl0X0NIOiB7XG4gICAgcDogJyEgIywjIzAuMDA7IS0jLCMjMC4wMCcsXG4gICAgZzogJ1xcJycsXG4gICAgZDogJy4nXG4gIH0sXG4gIGl0X0lUOiB7XG4gICAgaDogJ2l0J1xuICB9LFxuICBpdF9TTToge1xuICAgIGg6ICdpdCdcbiAgfSxcbiAgamE6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGphX0pQOiB7XG4gICAgaDogJ2phJ1xuICB9LFxuICBqZ286IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBqZ29fQ006IHtcbiAgICBoOiAnamdvJ1xuICB9LFxuICBqbWM6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGptY19UWjoge1xuICAgIGg6ICdqbWMnXG4gIH0sXG4gIGthOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAga2FfR0U6IHtcbiAgICBoOiAna2EnXG4gIH0sXG4gIGthYjoge1xuICAgIHA6ICcjLCMjMC4wMCEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAga2FiX0RaOiB7XG4gICAgaDogJ2thYidcbiAgfSxcbiAga2FtOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBrYW1fS0U6IHtcbiAgICBoOiAna2FtJ1xuICB9LFxuICBrZGU6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGtkZV9UWjoge1xuICAgIGg6ICdrZGUnXG4gIH0sXG4gIGtlYToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGtlYV9DVjoge1xuICAgIGg6ICdrZWEnXG4gIH0sXG4gIGtocToge1xuICAgIHA6ICcjLCMjMC4wMCEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLidcbiAgfSxcbiAga2hxX01MOiB7XG4gICAgaDogJ2tocSdcbiAgfSxcbiAga2k6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGtpX0tFOiB7XG4gICAgaDogJ2tpJ1xuICB9LFxuICBrazoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGtrX0taOiB7XG4gICAgaDogJ2trJ1xuICB9LFxuICBra2o6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGtral9DTToge1xuICAgIGg6ICdra2onXG4gIH0sXG4gIGtsOiB7XG4gICAgcDogJyEjLCMjMC4wMDshLSMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGtsX0dMOiB7XG4gICAgaDogJ2tsJ1xuICB9LFxuICBrbG46IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGtsbl9LRToge1xuICAgIGg6ICdrbG4nXG4gIH0sXG4gIGttOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBrbV9LSDoge1xuICAgIGg6ICdrbSdcbiAgfSxcbiAga246IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGtuX0lOOiB7XG4gICAgaDogJ2tuJ1xuICB9LFxuICBrbzoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAga29fS1A6IHtcbiAgICBoOiAna28nXG4gIH0sXG4gIGtvX0tSOiB7XG4gICAgaDogJ2tvJ1xuICB9LFxuICBrb2s6IHtcbiAgICBwOiAnISAjLCMjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBrb2tfSU46IHtcbiAgICBoOiAna29rJ1xuICB9LFxuICBrczoge1xuICAgIHA6ICchICMsIyMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGtzX0lOOiB7XG4gICAgaDogJ2tzJ1xuICB9LFxuICBrc2I6IHtcbiAgICBwOiAnIywjIzAuMDAhJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGtzYl9UWjoge1xuICAgIGg6ICdrc2InXG4gIH0sXG4gIGtzZjoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGtzZl9DTToge1xuICAgIGg6ICdrc2YnXG4gIH0sXG4gIGtzaDoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGtzaF9ERToge1xuICAgIGg6ICdrc2gnXG4gIH0sXG4gIGt3OiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBrd19HQjoge1xuICAgIGg6ICdrdydcbiAgfSxcbiAga3k6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBreV9LRzoge1xuICAgIGg6ICdreSdcbiAgfSxcbiAgbGFnOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBsYWdfVFo6IHtcbiAgICBoOiAnbGFnJ1xuICB9LFxuICBsYjoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGxiX0xVOiB7XG4gICAgaDogJ2xiJ1xuICB9LFxuICBsZzoge1xuICAgIHA6ICcjLCMjMC4wMCEnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgbGdfVUc6IHtcbiAgICBoOiAnbGcnXG4gIH0sXG4gIGxrdDoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgbGt0X1VTOiB7XG4gICAgaDogJ2xrdCdcbiAgfSxcbiAgbG46IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBsbl9BTzoge1xuICAgIGg6ICdsbidcbiAgfSxcbiAgbG5fQ0Q6IHtcbiAgICBoOiAnbG4nXG4gIH0sXG4gIGxuX0NGOiB7XG4gICAgaDogJ2xuJ1xuICB9LFxuICBsbl9DRzoge1xuICAgIGg6ICdsbidcbiAgfSxcbiAgbG86IHtcbiAgICBwOiAnISMsIyMwLjAwOyEtIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgbG9fTEE6IHtcbiAgICBoOiAnbG8nXG4gIH0sXG4gIGxyYzoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGxyY19JUToge1xuICAgIGg6ICdscmMnXG4gIH0sXG4gIGxyY19JUjoge1xuICAgIGg6ICdscmMnXG4gIH0sXG4gIGx0OiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgbHRfTFQ6IHtcbiAgICBoOiAnbHQnXG4gIH0sXG4gIGx1OiB7XG4gICAgcDogJyMsIyMwLjAwIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBsdV9DRDoge1xuICAgIGg6ICdsdSdcbiAgfSxcbiAgbHVvOiB7XG4gICAgcDogJyMsIyMwLjAwIScsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBsdW9fS0U6IHtcbiAgICBoOiAnbHVvJ1xuICB9LFxuICBsdXk6IHtcbiAgICBwOiAnISMsIyMwLjAwOyEtICMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGx1eV9LRToge1xuICAgIGg6ICdsdXknXG4gIH0sXG4gIGx2OiB7XG4gICAgcDogJyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgbHZfTFY6IHtcbiAgICBoOiAnbHYnXG4gIH0sXG4gIG1hczoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgbWFzX0tFOiB7XG4gICAgaDogJ21hcydcbiAgfSxcbiAgbWFzX1RaOiB7XG4gICAgaDogJ21hcydcbiAgfSxcbiAgbWVyOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBtZXJfS0U6IHtcbiAgICBoOiAnbWVyJ1xuICB9LFxuICBtZmU6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnICcsXG4gICAgZDogJy4nXG4gIH0sXG4gIG1mZV9NVToge1xuICAgIGg6ICdtZmUnXG4gIH0sXG4gIG1nOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBtZ19NRzoge1xuICAgIGg6ICdtZydcbiAgfSxcbiAgbWdoOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBtZ2hfTVo6IHtcbiAgICBoOiAnbWdoJ1xuICB9LFxuICBtZ286IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBtZ29fQ006IHtcbiAgICBoOiAnbWdvJ1xuICB9LFxuICBtazoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIG1rX01LOiB7XG4gICAgaDogJ21rJ1xuICB9LFxuICBtbDoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgbWxfSU46IHtcbiAgICBoOiAnbWwnXG4gIH0sXG4gIG1uOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgbW5fTU46IHtcbiAgICBoOiAnbW4nXG4gIH0sXG4gIG1yOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBtcl9JTjoge1xuICAgIGg6ICdtcidcbiAgfSxcbiAgbXM6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIG1zX0JOOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgbXNfTVk6IHtcbiAgICBoOiAnbXMnXG4gIH0sXG4gIG1zX1NHOiB7XG4gICAgaDogJ21zJ1xuICB9LFxuICBtdDoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgbXRfTVQ6IHtcbiAgICBoOiAnbXQnXG4gIH0sXG4gIG11YToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgbXVhX0NNOiB7XG4gICAgaDogJ211YSdcbiAgfSxcbiAgbXk6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBteV9NTToge1xuICAgIGg6ICdteSdcbiAgfSxcbiAgbXpuOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBtem5fSVI6IHtcbiAgICBoOiAnbXpuJ1xuICB9LFxuICBuYXE6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIG5hcV9OQToge1xuICAgIGg6ICduYXEnXG4gIH0sXG4gIG5iOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgbmJfTk86IHtcbiAgICBoOiAnbmInXG4gIH0sXG4gIG5iX1NKOiB7XG4gICAgaDogJ25iJ1xuICB9LFxuICBuZDoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgbmRfWlc6IHtcbiAgICBoOiAnbmQnXG4gIH0sXG4gIG5lOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgbmVfSU46IHtcbiAgICBoOiAnbmUnXG4gIH0sXG4gIG5lX05QOiB7XG4gICAgaDogJ25lJ1xuICB9LFxuICBubDoge1xuICAgIHA6ICchICMsIyMwLjAwOyEgLSMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIG5sX0FXOiB7XG4gICAgaDogJ25sJ1xuICB9LFxuICBubF9CRToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIG5sX0JROiB7XG4gICAgaDogJ25sJ1xuICB9LFxuICBubF9DVzoge1xuICAgIGg6ICdubCdcbiAgfSxcbiAgbmxfTkw6IHtcbiAgICBoOiAnbmwnXG4gIH0sXG4gIG5sX1NSOiB7XG4gICAgaDogJ25sJ1xuICB9LFxuICBubF9TWDoge1xuICAgIGg6ICdubCdcbiAgfSxcbiAgbm1nOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgbm1nX0NNOiB7XG4gICAgaDogJ25tZydcbiAgfSxcbiAgbm46IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBubl9OTzoge1xuICAgIGg6ICdubidcbiAgfSxcbiAgbm5oOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgbm5oX0NNOiB7XG4gICAgaDogJ25uaCdcbiAgfSxcbiAgbnVzOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBudXNfU1M6IHtcbiAgICBoOiAnbnVzJ1xuICB9LFxuICBueW46IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIG55bl9VRzoge1xuICAgIGg6ICdueW4nXG4gIH0sXG4gIG9tOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBvbV9FVDoge1xuICAgIGg6ICdvbSdcbiAgfSxcbiAgb21fS0U6IHtcbiAgICBoOiAnb20nXG4gIH0sXG4gIG9yOiB7XG4gICAgcDogJyEgIywjIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgb3JfSU46IHtcbiAgICBoOiAnb3InXG4gIH0sXG4gIG9zOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgb3NfR0U6IHtcbiAgICBoOiAnb3MnXG4gIH0sXG4gIG9zX1JVOiB7XG4gICAgaDogJ29zJ1xuICB9LFxuICBwYToge1xuICAgIHA6ICchICMsIyMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHBhX0FyYWI6IHtcbiAgICBoOiAncGEnXG4gIH0sXG4gIHBhX0FyYWJfUEs6IHtcbiAgICBoOiAncGEnXG4gIH0sXG4gIHBhX0d1cnU6IHtcbiAgICBoOiAncGEnXG4gIH0sXG4gIHBhX0d1cnVfSU46IHtcbiAgICBoOiAncGEnXG4gIH0sXG4gIHBsOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgcGxfUEw6IHtcbiAgICBoOiAncGwnXG4gIH0sXG4gIHByZzoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIHByZ18wMDE6IHtcbiAgICBoOiAncHJnJ1xuICB9LFxuICBwczoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIHBzX0FGOiB7XG4gICAgaDogJ3BzJ1xuICB9LFxuICBwdDoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgcHRfQU86IHtcbiAgICBoOiAncHQnXG4gIH0sXG4gIHB0X0JSOiB7XG4gICAgaDogJ3B0J1xuICB9LFxuICBwdF9DSDoge1xuICAgIGg6ICdwdCdcbiAgfSxcbiAgcHRfQ1Y6IHtcbiAgICBoOiAncHQnXG4gIH0sXG4gIHB0X0dROiB7XG4gICAgaDogJ3B0J1xuICB9LFxuICBwdF9HVzoge1xuICAgIGg6ICdwdCdcbiAgfSxcbiAgcHRfTFU6IHtcbiAgICBoOiAncHQnXG4gIH0sXG4gIHB0X01POiB7XG4gICAgaDogJ3B0J1xuICB9LFxuICBwdF9NWjoge1xuICAgIGg6ICdwdCdcbiAgfSxcbiAgcHRfUFQ6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBwdF9TVDoge1xuICAgIGg6ICdwdCdcbiAgfSxcbiAgcHRfVEw6IHtcbiAgICBoOiAncHQnXG4gIH0sXG4gIHF1OiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgcXVfQk86IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBxdV9FQzoge1xuICAgIGg6ICdxdSdcbiAgfSxcbiAgcXVfUEU6IHtcbiAgICBoOiAncXUnXG4gIH0sXG4gIHJtOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICfigJknLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBybV9DSDoge1xuICAgIGg6ICdybSdcbiAgfSxcbiAgcm46IHtcbiAgICBwOiAnIywjIzAuMDAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIHJuX0JJOiB7XG4gICAgaDogJ3JuJ1xuICB9LFxuICBybzoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIHJvX01EOiB7XG4gICAgaDogJ3JvJ1xuICB9LFxuICByb19STzoge1xuICAgIGg6ICdybydcbiAgfSxcbiAgcm9mOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICByb2ZfVFo6IHtcbiAgICBoOiAncm9mJ1xuICB9LFxuICByb290OiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgcnU6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBydV9CWToge1xuICAgIGg6ICdydSdcbiAgfSxcbiAgcnVfS0c6IHtcbiAgICBoOiAncnUnXG4gIH0sXG4gIHJ1X0taOiB7XG4gICAgaDogJ3J1J1xuICB9LFxuICBydV9NRDoge1xuICAgIGg6ICdydSdcbiAgfSxcbiAgcnVfUlU6IHtcbiAgICBoOiAncnUnXG4gIH0sXG4gIHJ1X1VBOiB7XG4gICAgaDogJ3J1J1xuICB9LFxuICBydzoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgcndfUlc6IHtcbiAgICBoOiAncncnXG4gIH0sXG4gIHJ3azoge1xuICAgIHA6ICcjLCMjMC4wMCEnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgcndrX1RaOiB7XG4gICAgaDogJ3J3aydcbiAgfSxcbiAgc2FoOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBzYWhfUlU6IHtcbiAgICBoOiAnc2FoJ1xuICB9LFxuICBzYXE6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHNhcV9LRToge1xuICAgIGg6ICdzYXEnXG4gIH0sXG4gIHNicDoge1xuICAgIHA6ICcjLCMjMC4wMCEnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgc2JwX1RaOiB7XG4gICAgaDogJ3NicCdcbiAgfSxcbiAgc2U6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBzZV9GSToge1xuICAgIGg6ICdzZSdcbiAgfSxcbiAgc2VfTk86IHtcbiAgICBoOiAnc2UnXG4gIH0sXG4gIHNlX1NFOiB7XG4gICAgaDogJ3NlJ1xuICB9LFxuICBzZWg6IHtcbiAgICBwOiAnIywjIzAuMDAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIHNlaF9NWjoge1xuICAgIGg6ICdzZWgnXG4gIH0sXG4gIHNlczoge1xuICAgIHA6ICcjLCMjMC4wMCEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgc2VzX01MOiB7XG4gICAgaDogJ3NlcydcbiAgfSxcbiAgc2c6IHtcbiAgICBwOiAnISMsIyMwLjAwOyEtIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgc2dfQ0Y6IHtcbiAgICBoOiAnc2cnXG4gIH0sXG4gIHNoaToge1xuICAgIHA6ICcjLCMjMC4wMCEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgc2hpX0xhdG46IHtcbiAgICBoOiAnc2hpJ1xuICB9LFxuICBzaGlfTGF0bl9NQToge1xuICAgIGg6ICdzaGknXG4gIH0sXG4gIHNoaV9UZm5nOiB7XG4gICAgaDogJ3NoaSdcbiAgfSxcbiAgc2hpX1RmbmdfTUE6IHtcbiAgICBoOiAnc2hpJ1xuICB9LFxuICBzaToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgc2lfTEs6IHtcbiAgICBoOiAnc2knXG4gIH0sXG4gIHNrOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgc2tfU0s6IHtcbiAgICBoOiAnc2snXG4gIH0sXG4gIHNsOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgc2xfU0k6IHtcbiAgICBoOiAnc2wnXG4gIH0sXG4gIHNtbjoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgc21uX0ZJOiB7XG4gICAgaDogJ3NtbidcbiAgfSxcbiAgc246IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHNuX1pXOiB7XG4gICAgaDogJ3NuJ1xuICB9LFxuICBzbzoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgc29fREo6IHtcbiAgICBoOiAnc28nXG4gIH0sXG4gIHNvX0VUOiB7XG4gICAgaDogJ3NvJ1xuICB9LFxuICBzb19LRToge1xuICAgIGg6ICdzbydcbiAgfSxcbiAgc29fU086IHtcbiAgICBoOiAnc28nXG4gIH0sXG4gIHNxOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgc3FfQUw6IHtcbiAgICBoOiAnc3EnXG4gIH0sXG4gIHNxX01LOiB7XG4gICAgaDogJ3NxJ1xuICB9LFxuICBzcV9YSzoge1xuICAgIGg6ICdzcSdcbiAgfSxcbiAgc3I6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBzcl9DeXJsOiB7XG4gICAgaDogJ3NyJ1xuICB9LFxuICBzcl9DeXJsX0JBOiB7XG4gICAgaDogJ3NyJ1xuICB9LFxuICBzcl9DeXJsX01FOiB7XG4gICAgaDogJ3NyJ1xuICB9LFxuICBzcl9DeXJsX1JTOiB7XG4gICAgaDogJ3NyJ1xuICB9LFxuICBzcl9DeXJsX1hLOiB7XG4gICAgaDogJ3NyJ1xuICB9LFxuICBzcl9MYXRuOiB7XG4gICAgaDogJ3NyJ1xuICB9LFxuICBzcl9MYXRuX0JBOiB7XG4gICAgaDogJ3NyJ1xuICB9LFxuICBzcl9MYXRuX01FOiB7XG4gICAgaDogJ3NyJ1xuICB9LFxuICBzcl9MYXRuX1JTOiB7XG4gICAgaDogJ3NyJ1xuICB9LFxuICBzcl9MYXRuX1hLOiB7XG4gICAgaDogJ3NyJ1xuICB9LFxuICBzdjoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIHN2X0FYOiB7XG4gICAgaDogJ3N2J1xuICB9LFxuICBzdl9GSToge1xuICAgIGg6ICdzdidcbiAgfSxcbiAgc3ZfU0U6IHtcbiAgICBoOiAnc3YnXG4gIH0sXG4gIHN3OiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBzd19DRDoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgc3dfS0U6IHtcbiAgICBoOiAnc3cnXG4gIH0sXG4gIHN3X1RaOiB7XG4gICAgaDogJ3N3J1xuICB9LFxuICBzd19VRzoge1xuICAgIGg6ICdzdydcbiAgfSxcbiAgdGE6IHtcbiAgICBwOiAnISAjLCMjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICB0YV9JTjoge1xuICAgIGg6ICd0YSdcbiAgfSxcbiAgdGFfTEs6IHtcbiAgICBoOiAndGEnXG4gIH0sXG4gIHRhX01ZOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgdGFfU0c6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICB0ZToge1xuICAgIHA6ICchIywjIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgdGVfSU46IHtcbiAgICBoOiAndGUnXG4gIH0sXG4gIHRlbzoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgdGVvX0tFOiB7XG4gICAgaDogJ3RlbydcbiAgfSxcbiAgdGVvX1VHOiB7XG4gICAgaDogJ3RlbydcbiAgfSxcbiAgdGg6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHRoX1RIOiB7XG4gICAgaDogJ3RoJ1xuICB9LFxuICB0aToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgdGlfRVI6IHtcbiAgICBoOiAndGknXG4gIH0sXG4gIHRpX0VUOiB7XG4gICAgaDogJ3RpJ1xuICB9LFxuICB0azoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIHRrX1RNOiB7XG4gICAgaDogJ3RrJ1xuICB9LFxuICB0bzoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHRvX1RPOiB7XG4gICAgaDogJ3RvJ1xuICB9LFxuICB0cjoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIHRyX0NZOiB7XG4gICAgaDogJ3RyJ1xuICB9LFxuICB0cl9UUjoge1xuICAgIGg6ICd0cidcbiAgfSxcbiAgdHdxOiB7XG4gICAgcDogJyMsIyMwLjAwIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICB0d3FfTkU6IHtcbiAgICBoOiAndHdxJ1xuICB9LFxuICB0em06IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICB0em1fTUE6IHtcbiAgICBoOiAndHptJ1xuICB9LFxuICB1Zzoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgdWdfQ046IHtcbiAgICBoOiAndWcnXG4gIH0sXG4gIHVrOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgdWtfVUE6IHtcbiAgICBoOiAndWsnXG4gIH0sXG4gIHVyOiB7XG4gICAgcDogJyEgIywjIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgdXJfSU46IHtcbiAgICBoOiAndXInXG4gIH0sXG4gIHVyX1BLOiB7XG4gICAgaDogJ3VyJ1xuICB9LFxuICB1ejoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIHV6X0FyYWI6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICB1el9BcmFiX0FGOiB7XG4gICAgaDogJ3V6J1xuICB9LFxuICB1el9DeXJsOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgdXpfQ3lybF9VWjoge1xuICAgIGg6ICd1eidcbiAgfSxcbiAgdXpfTGF0bjoge1xuICAgIGg6ICd1eidcbiAgfSxcbiAgdXpfTGF0bl9VWjoge1xuICAgIGg6ICd1eidcbiAgfSxcbiAgdmFpOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICB2YWlfTGF0bjoge1xuICAgIGg6ICd2YWknXG4gIH0sXG4gIHZhaV9MYXRuX0xSOiB7XG4gICAgaDogJ3ZhaSdcbiAgfSxcbiAgdmFpX1ZhaWk6IHtcbiAgICBoOiAndmFpJ1xuICB9LFxuICB2YWlfVmFpaV9MUjoge1xuICAgIGg6ICd2YWknXG4gIH0sXG4gIHZpOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgdmlfVk46IHtcbiAgICBoOiAndmknXG4gIH0sXG4gIHZvOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICB2b18wMDE6IHtcbiAgICBoOiAndm8nXG4gIH0sXG4gIHZ1bjoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgdnVuX1RaOiB7XG4gICAgaDogJ3Z1bidcbiAgfSxcbiAgd2FlOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJ+KAmScsXG4gICAgZDogJywnXG4gIH0sXG4gIHdhZV9DSDoge1xuICAgIGg6ICd3YWUnXG4gIH0sXG4gIHhvZzoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHhvZ19VRzoge1xuICAgIGg6ICd4b2cnXG4gIH0sXG4gIHlhdjoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIHlhdl9DTToge1xuICAgIGg6ICd5YXYnXG4gIH0sXG4gIHlpOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICB5aV8wMDE6IHtcbiAgICBoOiAneWknXG4gIH0sXG4gIHlvOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICB5b19CSjoge1xuICAgIGg6ICd5bydcbiAgfSxcbiAgeW9fTkc6IHtcbiAgICBoOiAneW8nXG4gIH0sXG4gIHl1ZToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgeXVlX0hLOiB7XG4gICAgaDogJ3l1ZSdcbiAgfSxcbiAgemdoOiB7XG4gICAgcDogJyMsIyMwLjAwIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICB6Z2hfTUE6IHtcbiAgICBoOiAnemdoJ1xuICB9LFxuICB6aDoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgemhfSGFuczoge1xuICAgIGg6ICd6aCdcbiAgfSxcbiAgemhfSGFuc19DTjoge1xuICAgIGg6ICd6aCdcbiAgfSxcbiAgemhfSGFuc19ISzoge1xuICAgIGg6ICd6aCdcbiAgfSxcbiAgemhfSGFuc19NTzoge1xuICAgIGg6ICd6aCdcbiAgfSxcbiAgemhfSGFuc19TRzoge1xuICAgIGg6ICd6aCdcbiAgfSxcbiAgemhfSGFudDoge1xuICAgIGg6ICd6aCdcbiAgfSxcbiAgemhfSGFudF9ISzoge1xuICAgIGg6ICd6aCdcbiAgfSxcbiAgemhfSGFudF9NTzoge1xuICAgIGg6ICd6aCdcbiAgfSxcbiAgemhfSGFudF9UVzoge1xuICAgIGg6ICd6aCdcbiAgfSxcbiAgenU6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHp1X1pBOiB7XG4gICAgaDogJ3p1J1xuICB9XG59O1xuXG52YXIgZGVmYXVsdExvY2FsZXMgPSB7XG4gIEFFRDogJ2FyX0FFJyxcbiAgQUZOOiAnZmFfQUYnLFxuICBBTEw6ICdzcScsXG4gIEFNRDogJ2h5JyxcbiAgQU5HOiAnbmwnLFxuICBBT0E6ICdwdF9BTycsXG4gIEFSUzogJ2VzX0FSJyxcbiAgQVVEOiAnZW4nLFxuICBBV0c6ICdubF9BVycsXG4gIEFaTjogJ2F6JyxcbiAgQkFNOiAnYnMnLFxuICBCQkQ6ICdlbl9CQicsXG4gIEJEVDogJ2JuX0JEJyxcbiAgQkdOOiAnYmcnLFxuICBCSEQ6ICdhcl9CSCcsXG4gIEJJRjogJ2ZyX0JJJyxcbiAgQk1EOiAnZW5fQk0nLFxuICBCTkQ6ICdtc19CTicsXG4gIEJPQjogJ2VzX0JPJyxcbiAgQlJMOiAncHRfQlInLFxuICBCU0Q6ICdlbl9CUycsXG4gIEJUTjogJ2R6JyxcbiAgQldQOiAnZW5fQlcnLFxuICBCWVI6ICdiZScsXG4gIEJaRDogJ2VuX0JaJyxcbiAgQ0FEOiAnZW5fQ0EnLFxuICBDREY6ICdmcl9DRCcsXG4gIENIRjogJ2RlX0NIJyxcbiAgQ0xQOiAnZXNfQ0wnLFxuICBDTlk6ICd6aF9IYW5zX0NOJyxcbiAgQ09QOiAnZXNfQ08nLFxuICBDUkM6ICdlc19DUicsXG4gIENVUDogJ2VzX0NVJyxcbiAgQ1ZFOiAncHRfQ1YnLFxuICBDWks6ICdjcycsXG4gIERKRjogJ2ZyX0RKJyxcbiAgREtLOiAnZGFfREsnLFxuICBET1A6ICdlc19ETycsXG4gIERaRDogJ2FyX0RaJyxcbiAgRUdQOiAnYXJfRUcnLFxuICBFUk46ICd0aV9FUicsXG4gIEVUQjogJ2FtJyxcbiAgRVVSOiAnZGUnLFxuICBGSkQ6ICdlbl9GSicsXG4gIEZLUDogJ2VuX0ZLJyxcbiAgR0JQOiAnZW4nLFxuICBHRUw6ICdrYScsXG4gIEdIUzogJ2VuX0dIJyxcbiAgR0lQOiAnZW5fR0knLFxuICBHTUQ6ICdlbl9HTScsXG4gIEdORjogJ2ZyX0dOJyxcbiAgR1RROiAnZXNfR1QnLFxuICBHWUQ6ICdlbl9HWScsXG4gIEhLRDogJ3poX0hhbnNfSEsnLFxuICBITkw6ICdlc19ITicsXG4gIEhSSzogJ2hyX0hSJyxcbiAgSFRHOiAnZW4nLFxuICBIVUY6ICdodV9IVScsXG4gIElEUjogJ2lkJyxcbiAgSUxTOiAnaGUnLFxuICBJTlI6ICdlbl9JTicsXG4gIElRRDogJ2FyX0lRJyxcbiAgSVJSOiAnZmFfSVInLFxuICBJU0s6ICdpcycsXG4gIEpNRDogJ2VuX0pNJyxcbiAgSk9EOiAnYXJfSk8nLFxuICBKUFk6ICdqYScsXG4gIEtFUzogJ2VuX0tFJyxcbiAgS0dTOiAna3knLFxuICBLSFI6ICdrbScsXG4gIEtNRjogJ2FyJyxcbiAgS1BXOiAna29fS1AnLFxuICBLUlc6ICdrb19LUicsXG4gIEtXRDogJ2FyX0tXJyxcbiAgS1lEOiAnZW5fS1knLFxuICBLWlQ6ICdraycsXG4gIExBSzogJ2xvJyxcbiAgTEJQOiAnYXJfTEInLFxuICBMS1I6ICdzaScsXG4gIExSRDogJ2VuX0xSJyxcbiAgTFNMOiAnZW5fTFMnLFxuICBMWUQ6ICdhcl9MWScsXG4gIE1BRDogJ2FyJyxcbiAgTURMOiAncm8nLFxuICBNR0E6ICdmcl9NRycsXG4gIE1LRDogJ21rJyxcbiAgTU1LOiAnbXknLFxuICBNTlQ6ICdtbicsXG4gIE1PUDogJ3poJyxcbiAgTVJPOiAnYXJfTVInLFxuICBNVVI6ICdlbl9NVScsXG4gIE1WUjogJ2VuJyxcbiAgTVdLOiAnZW4nLFxuICBNWE46ICdlc19NWCcsXG4gIE1ZUjogJ21zX01ZJyxcbiAgTVpOOiAncHRfTVonLFxuICBOQUQ6ICdlbl9OQScsXG4gIE5HTjogJ2VuX05HJyxcbiAgTklPOiAnZXNfTkknLFxuICBOT0s6ICduYl9OTycsXG4gIE5QUjogJ25lJyxcbiAgTlpEOiAnZW5fTlonLFxuICBPTVI6ICdhcl9PTScsXG4gIFBBQjogJ2VzX1BBJyxcbiAgUEVOOiAnZXNfUEUnLFxuICBQR0s6ICdlbl9QRycsXG4gIFBIUDogJ2ZpbCcsXG4gIFBLUjogJ3VyX1BLJyxcbiAgUExOOiAncGwnLFxuICBQWUc6ICdlc19QWScsXG4gIFFBUjogJ2FyX1FBJyxcbiAgUk9OOiAncm8nLFxuICBSU0Q6ICdzcicsXG4gIFJVQjogJ3J1JyxcbiAgUldGOiAncncnLFxuICBTQVI6ICdhcl9TQScsXG4gIFNCRDogJ2VuX1NCJyxcbiAgU0NSOiAnZW5fU0MnLFxuICBTREc6ICdhcl9TRCcsXG4gIFNFSzogJ3N2X1NFJyxcbiAgU0dEOiAnZW5fU0cnLFxuICBTSFA6ICdlbl9TSCcsXG4gIFNMTDogJ2VuX1NMJyxcbiAgU09TOiAnc29fU08nLFxuICBTUkQ6ICdubF9TUicsXG4gIFNTUDogJ2VuJyxcbiAgU1REOiAncHRfU1QnLFxuICBTWVA6ICdhcl9TWScsXG4gIFNaTDogJ2VuX1NaJyxcbiAgVEhCOiAndGgnLFxuICBUSlM6ICdlbicsXG4gIFRNVDogJ3RrJyxcbiAgVE5EOiAnYXJfVE4nLFxuICBUT1A6ICd0bycsXG4gIFRSWTogJ3RyX1RSJyxcbiAgVFREOiAnZW5fVFQnLFxuICBUV0Q6ICd6aF9IYW50X1RXJyxcbiAgVFpTOiAnc3dfVFonLFxuICBVQUg6ICd1aycsXG4gIFVHWDogJ2VuX1VHJyxcbiAgVVNEOiAnZW5fVVMnLFxuICBVWVU6ICdlc19VWScsXG4gIFVaUzogJ3V6JyxcbiAgVkVGOiAnZXNfVkUnLFxuICBWTkQ6ICd2aScsXG4gIFZVVjogJ2VuX0JJJyxcbiAgV1NUOiAnZW5fQVMnLFxuICBYQUY6ICdmcicsXG4gIFhDRDogJ2VuJyxcbiAgWE9GOiAnZnInLFxuICBYUEY6ICdmcl9QRicsXG4gIFlFUjogJ2FyX1lFJyxcbiAgWkFSOiAnenUnLFxuICBaTVc6ICdlbl9aTScsXG4gIFpXTDogJ2VuX1pXJ1xufTtcblxudmFyIHN5bWJvbHMgPSB7XG4gICdBRUQnOiAn2K8u2KUnLFxuICAnQUZOJzogJ9iLJyxcbiAgJ0FMTCc6ICdMJyxcbiAgJ0FNRCc6ICdBTUQnLFxuICAnQU5HJzogJ8aSJyxcbiAgJ0FPQSc6ICdLeicsXG4gICdBUlMnOiAnJCcsXG4gICdBVUQnOiAnJCcsXG4gICdBV0cnOiAnxpInLFxuICAnQVpOJzogJ+KCvCcsXG4gICdCQU0nOiAnS00nLFxuICAnQkJEJzogJyQnLFxuICAnQkRUJzogJ+CnsycsXG4gICdCR04nOiAn0LvQsicsXG4gICdCSEQnOiAnLtivLtioJyxcbiAgJ0JJRic6ICdGQnUnLFxuICAnQk1EJzogJyQnLFxuICAnQk5EJzogJyQnLFxuICAnQk9CJzogJ0JzLicsXG4gICdCUkwnOiAnUiQnLFxuICAnQlNEJzogJyQnLFxuICAnQlRDJzogJ+C4vycsXG4gICdCVE4nOiAnTnUuJyxcbiAgJ0JXUCc6ICdQJyxcbiAgJ0JZUic6ICdwLicsXG4gICdCWkQnOiAnQlokJyxcbiAgJ0NBRCc6ICckJyxcbiAgJ0NERic6ICdGQycsXG4gICdDSEYnOiAnRnIuJyxcbiAgJ0NMUCc6ICckJyxcbiAgJ0NOWSc6ICfCpScsXG4gICdDT1AnOiAnJCcsXG4gICdDUkMnOiAn4oKhJyxcbiAgJ0NVQyc6ICckJyxcbiAgJ0NVUCc6ICfigrEnLFxuICAnQ1ZFJzogJyQnLFxuICAnQ1pLJzogJ0vEjScsXG4gICdESkYnOiAnRmRqJyxcbiAgJ0RLSyc6ICdrcicsXG4gICdET1AnOiAnUkQkJyxcbiAgJ0RaRCc6ICfYr9isJyxcbiAgJ0VFSyc6ICdrcicsXG4gICdFR1AnOiAnwqMnLFxuICAnRVJOJzogJ05maycsXG4gICdFVEInOiAnQnInLFxuICAnRVRIJzogJ86eJyxcbiAgJ0VVUic6ICfigqwnLFxuICAnRkpEJzogJyQnLFxuICAnRktQJzogJ8KjJyxcbiAgJ0dCUCc6ICfCoycsXG4gICdHRUwnOiAn4oK+JyxcbiAgJ0dHUCc6ICfCoycsXG4gICdHSEMnOiAn4oK1JyxcbiAgJ0dIUyc6ICdHSOKCtScsXG4gICdHSVAnOiAnwqMnLFxuICAnR01EJzogJ0QnLFxuICAnR05GJzogJ0ZHJyxcbiAgJ0dUUSc6ICdRJyxcbiAgJ0dZRCc6ICckJyxcbiAgJ0hLRCc6ICckJyxcbiAgJ0hOTCc6ICdMJyxcbiAgJ0hSSyc6ICdrbicsXG4gICdIVEcnOiAnRycsXG4gICdIVUYnOiAnRnQnLFxuICAnSURSJzogJ1JwJyxcbiAgJ0lMUyc6ICfigqonLFxuICAnSU1QJzogJ8KjJyxcbiAgJ0lOUic6ICfigrknLFxuICAnSVFEJzogJ9i5LtivJyxcbiAgJ0lSUic6ICfvt7wnLFxuICAnSVNLJzogJ2tyJyxcbiAgJ0pFUCc6ICfCoycsXG4gICdKTUQnOiAnSiQnLFxuICAnSk9EJzogJ0pEJyxcbiAgJ0pQWSc6ICfCpScsXG4gICdLRVMnOiAnS1NoJyxcbiAgJ0tHUyc6ICfQu9CyJyxcbiAgJ0tIUic6ICfhn5snLFxuICAnS01GJzogJ0NGJyxcbiAgJ0tQVyc6ICfigqknLFxuICAnS1JXJzogJ+KCqScsXG4gICdLV0QnOiAnS0QnLFxuICAnS1lEJzogJyQnLFxuICAnS1pUJzogJ+KCuCcsXG4gICdMQUsnOiAn4oKtJyxcbiAgJ0xCUCc6ICfCoycsXG4gICdMS1InOiAn4oKoJyxcbiAgJ0xSRCc6ICckJyxcbiAgJ0xTTCc6ICdNJyxcbiAgJ0xUQyc6ICfFgScsXG4gICdMVEwnOiAnTHQnLFxuICAnTFZMJzogJ0xzJyxcbiAgJ0xZRCc6ICdMRCcsXG4gICdNQUQnOiAnTUFEJyxcbiAgJ01ETCc6ICdsZWknLFxuICAnTUdBJzogJ0FyJyxcbiAgJ01LRCc6ICfQtNC10L0nLFxuICAnTU1LJzogJ0snLFxuICAnTU5UJzogJ+KCricsXG4gICdNT1AnOiAnTU9QJCcsXG4gICdNVVInOiAn4oKoJyxcbiAgJ01WUic6ICdSZicsXG4gICdNV0snOiAnTUsnLFxuICAnTVhOJzogJyQnLFxuICAnTVlSJzogJ1JNJyxcbiAgJ01aTic6ICdNVCcsXG4gICdOQUQnOiAnJCcsXG4gICdOR04nOiAn4oKmJyxcbiAgJ05JTyc6ICdDJCcsXG4gICdOT0snOiAna3InLFxuICAnTlBSJzogJ+KCqCcsXG4gICdOWkQnOiAnJCcsXG4gICdPTVInOiAn77e8JyxcbiAgJ1BBQic6ICdCLy4nLFxuICAnUEVOJzogJ1MvLicsXG4gICdQR0snOiAnSycsXG4gICdQSFAnOiAn4oKxJyxcbiAgJ1BLUic6ICfigqgnLFxuICAnUExOJzogJ3rFgicsXG4gICdQWUcnOiAnR3MnLFxuICAnUUFSJzogJ++3vCcsXG4gICdSTUInOiAn77+lJyxcbiAgJ1JPTic6ICdsZWknLFxuICAnUlNEJzogJ9CU0LjQvS4nLFxuICAnUlVCJzogJ+KCvScsXG4gICdSV0YnOiAnUuKCoycsXG4gICdTQVInOiAn77e8JyxcbiAgJ1NCRCc6ICckJyxcbiAgJ1NDUic6ICfigqgnLFxuICAnU0RHJzogJ9isLtizLicsXG4gICdTRUsnOiAna3InLFxuICAnU0dEJzogJyQnLFxuICAnU0hQJzogJ8KjJyxcbiAgJ1NMTCc6ICdMZScsXG4gICdTT1MnOiAnUycsXG4gICdTUkQnOiAnJCcsXG4gICdTU1AnOiAnwqMnLFxuICAnU1REJzogJ0RiJyxcbiAgJ1NWQyc6ICckJyxcbiAgJ1NZUCc6ICfCoycsXG4gICdTWkwnOiAnRScsXG4gICdUSEInOiAn4Li/JyxcbiAgJ1RKUyc6ICdTTScsXG4gICdUTVQnOiAnVCcsXG4gICdUTkQnOiAn2K8u2KonLFxuICAnVE9QJzogJ1QkJyxcbiAgJ1RSTCc6ICfigqQnLFxuICAnVFJZJzogJ+KCuicsXG4gICdUVEQnOiAnVFQkJyxcbiAgJ1RWRCc6ICckJyxcbiAgJ1RXRCc6ICdOVCQnLFxuICAnVFpTJzogJ1RTaCcsXG4gICdVQUgnOiAn4oK0JyxcbiAgJ1VHWCc6ICdVU2gnLFxuICAnVVNEJzogJyQnLFxuICAnVVlVJzogJyRVJyxcbiAgJ1VaUyc6ICfQu9CyJyxcbiAgJ1ZFRic6ICdCcycsXG4gICdWTkQnOiAn4oKrJyxcbiAgJ1ZVVic6ICdWVCcsXG4gICdXU1QnOiAnV1MkJyxcbiAgJ1hBRic6ICdGQ0ZBJyxcbiAgJ1hCVCc6ICfJgycsXG4gICdYQ0QnOiAnJCcsXG4gICdYT0YnOiAnQ0ZBJyxcbiAgJ1hQRic6ICfigqMnLFxuICAnWUVSJzogJ++3vCcsXG4gICdaQVInOiAnUicsXG4gICdaV0QnOiAnWiQnXG59O1xuXG52YXIgUmVhY3RDdXJyZW5jeUZvcm1hdHRlciA9IGZ1bmN0aW9uIFJlYWN0Q3VycmVuY3lGb3JtYXR0ZXIocHJvcHMpIHtcbiAgdmFyIGdldEZvcm1hdHRlciA9IGZ1bmN0aW9uIGdldEZvcm1hdHRlcihvcHRpb25zKSB7XG4gICAgdmFyIGxvY2FsZSA9IHZvaWQgMCxcbiAgICAgICAgY3VycmVuY3kgPSB2b2lkIDAsXG4gICAgICAgIHN5bWJvbCA9IHZvaWQgMCxcbiAgICAgICAgcGF0dGVybiA9IHZvaWQgMCxcbiAgICAgICAgZGVjaW1hbCA9IHZvaWQgMCxcbiAgICAgICAgZ3JvdXAgPSB2b2lkIDA7XG5cbiAgICAvLyBIZWxwZXIgRnVuY3Rpb25zXG4gICAgdmFyIGlzVW5kZWZpbmVkID0gZnVuY3Rpb24gaXNVbmRlZmluZWQobykge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvID09PSAndW5kZWZpbmVkJztcbiAgICB9O1xuXG4gICAgdmFyIHRvRml4ZWQgPSBmdW5jdGlvbiB0b0ZpeGVkKG4sIHByZWNpc2lvbikge1xuICAgICAgcmV0dXJuICgrKE1hdGgucm91bmQoKyhuICsgJ2UnICsgcHJlY2lzaW9uKSkgKyAnZScgKyAtcHJlY2lzaW9uKSkudG9GaXhlZChwcmVjaXNpb24pO1xuICAgIH07XG5cbiAgICAvLyBQZXJmb3JtIGNoZWNrcyBvbiBpbnB1dHMgYW5kIHNldCB1cCBkZWZhdWx0cyBhcyBuZWVkZWQgKGRlZmF1bHRzIHRvIGVuLCBVU0QpXG4gICAgaWYgKGlzVW5kZWZpbmVkKG9wdGlvbnMpKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgY3VycmVuY3kgPSBpc1VuZGVmaW5lZChvcHRpb25zLmN1cnJlbmN5KSA/ICdVU0QnIDogb3B0aW9ucy5jdXJyZW5jeS50b1VwcGVyQ2FzZSgpO1xuICAgIGxvY2FsZSA9IGlzVW5kZWZpbmVkKG9wdGlvbnMubG9jYWxlKSA/IGxvY2FsZXNbZGVmYXVsdExvY2FsZXNbY3VycmVuY3ldXSA6IGxvY2FsZXNbb3B0aW9ucy5sb2NhbGVdO1xuXG4gICAgaWYgKCFpc1VuZGVmaW5lZChsb2NhbGUuaCkpIGxvY2FsZSA9IGxvY2FsZXNbbG9jYWxlLmhdOyAvLyBMb2NhbGUgaW5oZXJpdGFuY2VcblxuICAgIHN5bWJvbCA9IGlzVW5kZWZpbmVkKG9wdGlvbnMuc3ltYm9sKSA/IHN5bWJvbHNbY3VycmVuY3ldIDogb3B0aW9ucy5zeW1ib2w7XG5cbiAgICBpZiAoaXNVbmRlZmluZWQoc3ltYm9sKSkgc3ltYm9sID0gY3VycmVuY3k7IC8vIEluIGNhc2Ugd2UgZG9uJ3QgaGF2ZSB0aGUgc3ltYm9sLCBqdXN0IHVzZSB0aGUgY2N5IGNvZGVcblxuICAgIHBhdHRlcm4gPSBpc1VuZGVmaW5lZChvcHRpb25zLnBhdHRlcm4pID8gbG9jYWxlLnAgOiBvcHRpb25zLnBhdHRlcm47XG4gICAgZGVjaW1hbCA9IGlzVW5kZWZpbmVkKG9wdGlvbnMuZGVjaW1hbCkgPyBsb2NhbGUuZCA6IG9wdGlvbnMuZGVjaW1hbDtcbiAgICBncm91cCA9IGlzVW5kZWZpbmVkKG9wdGlvbnMuZ3JvdXApID8gbG9jYWxlLmcgOiBvcHRpb25zLmdyb3VwO1xuXG4gICAgLy9jb25zb2xlLmxvZyhsb2NhbGUpO1xuXG4gICAgLy8gZW5jb2RlUGF0dGVybiBGdW5jdGlvbiAtIHJldHVybnMgYSBmZXcgc2ltcGxlIGNoYXJhY3RlcmlzdGljcyBvZiB0aGUgcGF0dGVybiBwcm92aWRlZFxuICAgIHZhciBlbmNvZGVQYXR0ZXJuID0gZnVuY3Rpb24gZW5jb2RlUGF0dGVybihwYXR0ZXJuKSB7XG4gICAgICB2YXIgZGVjaW1hbFBsYWNlcyA9IDA7XG4gICAgICB2YXIgZnJvbnRQYWRkaW5nID0gJyc7XG4gICAgICB2YXIgYmFja1BhZGRpbmcgPSAnJztcbiAgICAgIHZhciBncm91cExlbmd0aHMgPSBbXTtcblxuICAgICAgLy9jb25zb2xlLmxvZyhwYXR0ZXJuKTtcblxuICAgICAgdmFyIHBhdHRlcm5TdGFydGVkID0gZmFsc2U7XG4gICAgICB2YXIgZGVjaW1hbHNTdGFydGVkID0gZmFsc2U7XG4gICAgICB2YXIgcGF0dGVybkVuZGVkID0gZmFsc2U7XG5cbiAgICAgIHZhciBjdXJyZW50R3JvdXBMZW5ndGggPSAwO1xuICAgICAgdmFyIHplcm9MZW5ndGggPSAwO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdHRlcm4ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGMgPSBwYXR0ZXJuW2ldO1xuXG4gICAgICAgIGlmICghcGF0dGVyblN0YXJ0ZWQgJiYgWycjJywgJzAnLCAnLCcsICcuJ10uaW5kZXhPZihjKSA+IC0xKSB7XG4gICAgICAgICAgcGF0dGVyblN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwYXR0ZXJuU3RhcnRlZCkge1xuICAgICAgICAgIGZyb250UGFkZGluZyArPSBjO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChjKSB7XG4gICAgICAgICAgY2FzZSAnIyc6XG4gICAgICAgICAgICArK2N1cnJlbnRHcm91cExlbmd0aDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnMCc6XG4gICAgICAgICAgICBpZiAoZGVjaW1hbHNTdGFydGVkKSB7XG4gICAgICAgICAgICAgICsrZGVjaW1hbFBsYWNlcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICsrY3VycmVudEdyb3VwTGVuZ3RoOysremVyb0xlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnLCc6XG4gICAgICAgICAgICBncm91cExlbmd0aHMucHVzaChjdXJyZW50R3JvdXBMZW5ndGgpO1xuICAgICAgICAgICAgY3VycmVudEdyb3VwTGVuZ3RoID0gMDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnLic6XG4gICAgICAgICAgICBncm91cExlbmd0aHMucHVzaChjdXJyZW50R3JvdXBMZW5ndGgpO1xuICAgICAgICAgICAgZGVjaW1hbHNTdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhdHRlcm5TdGFydGVkICYmICEoWycjJywgJzAnLCAnLCcsICcuJ10uaW5kZXhPZihjKSA+IC0xKSkge1xuICAgICAgICAgIHBhdHRlcm5FbmRlZCA9IHRydWU7XG5cbiAgICAgICAgICBpZiAoIWRlY2ltYWxzU3RhcnRlZCkge1xuICAgICAgICAgICAgZ3JvdXBMZW5ndGhzLnB1c2goY3VycmVudEdyb3VwTGVuZ3RoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGF0dGVybkVuZGVkKSB7XG4gICAgICAgICAgYmFja1BhZGRpbmcgKz0gYztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgZW5jb2RlZFBhdHRlcm4gPSB7XG4gICAgICAgIGRlY2ltYWxQbGFjZXM6IGRlY2ltYWxQbGFjZXMsXG4gICAgICAgIGZyb250UGFkZGluZzogZnJvbnRQYWRkaW5nLFxuICAgICAgICBiYWNrUGFkZGluZzogYmFja1BhZGRpbmcsXG4gICAgICAgIGdyb3VwTGVuZ3RoczogZ3JvdXBMZW5ndGhzLFxuICAgICAgICB6ZXJvTGVuZ3RoOiB6ZXJvTGVuZ3RoXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gZW5jb2RlZFBhdHRlcm47XG4gICAgfTtcblxuICAgIC8vIFplcm8gUGFkZGluZyBoZWxwZXIgZnVuY3Rpb25cbiAgICB2YXIgcGFkID0gZnVuY3Rpb24gcGFkKG4sIHdpZHRoKSB7XG4gICAgICBuID0gbiArICcnO1xuICAgICAgcmV0dXJuIG4ubGVuZ3RoID49IHdpZHRoID8gbiA6IG5ldyBBcnJheSh3aWR0aCAtIG4ubGVuZ3RoICsgMSkuam9pbignMCcpICsgbjtcbiAgICB9O1xuXG4gICAgLy8gRm9ybWF0IGZ1bmN0aW9uXG4gICAgdmFyIGZvcm1hdCA9IGZ1bmN0aW9uIGZvcm1hdChuLCBmKSB7XG4gICAgICB2YXIgZm9ybWF0dGVkTnVtYmVyID0gdG9GaXhlZChNYXRoLmFicyhuKSwgZi5kZWNpbWFsUGxhY2VzKTtcblxuICAgICAgdmFyIHNwbGl0TnVtYmVyID0gZm9ybWF0dGVkTnVtYmVyLnNwbGl0KFwiLlwiKTtcblxuICAgICAgLy8gaS5lLiB3ZSBhY3R1YWxseSBoYXZlIHNvbWUgc29ydCBvZiBncm91cGluZyBpbiB0aGUgdmFsdWVzXG4gICAgICBpZiAoZi5ncm91cExlbmd0aHMubGVuZ3RoID4gMSkge1xuICAgICAgICB2YXIgc2VnbWVudCA9IFwiXCI7XG4gICAgICAgIHZhciBjdXJzb3IgPSBzcGxpdE51bWJlclswXS5sZW5ndGg7XG4gICAgICAgIHZhciBncm91cEluZGV4ID0gZi5ncm91cExlbmd0aHMubGVuZ3RoIC0gMTtcblxuICAgICAgICB3aGlsZSAoY3Vyc29yID4gMCkge1xuICAgICAgICAgIGlmIChncm91cEluZGV4IDw9IDApIHtcbiAgICAgICAgICAgIGdyb3VwSW5kZXggPSAxO1xuICAgICAgICAgIH0gLy8gQWx3YXlzIHJlc2V0IHRvIHRoZSBmaXJzdCBncm91cCBsZW5ndGggaWYgdGhlIG51bWJlciBpcyBiaWdcblxuICAgICAgICAgIHZhciBjdXJyZW50R3JvdXBMZW5ndGggPSBmLmdyb3VwTGVuZ3Roc1tncm91cEluZGV4XTtcblxuICAgICAgICAgIHZhciBzdGFydCA9IGN1cnNvciAtIGN1cnJlbnRHcm91cExlbmd0aDtcblxuICAgICAgICAgIHNlZ21lbnQgPSBzcGxpdE51bWJlclswXS5zdWJzdHJpbmcoc3RhcnQsIGN1cnNvcikgKyBmLmdyb3VwICsgc2VnbWVudDtcblxuICAgICAgICAgIGN1cnNvciAtPSBjdXJyZW50R3JvdXBMZW5ndGg7XG5cbiAgICAgICAgICAtLWdyb3VwSW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBzZWdtZW50ID0gc2VnbWVudC5zdWJzdHJpbmcoMCwgc2VnbWVudC5sZW5ndGggLSAxKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhzZWdtZW50KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlZ21lbnQubGVuZ3RoIDwgZi56ZXJvTGVuZ3RoKSB7XG4gICAgICAgIHNlZ21lbnQgPSBwYWQoc2VnbWVudCwgZi56ZXJvTGVuZ3RoKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZvcm1hdHRlZE51bWJlciA9IGYuZnJvbnRQYWRkaW5nICsgc2VnbWVudCArIChpc1VuZGVmaW5lZChzcGxpdE51bWJlclsxXSkgPyAnJyA6IGYuZGVjaW1hbCArIHNwbGl0TnVtYmVyWzFdKSArIGYuYmFja1BhZGRpbmc7XG5cbiAgICAgIHJldHVybiBmb3JtYXR0ZWROdW1iZXIucmVwbGFjZSgnIScsIHN5bWJvbCk7XG4gICAgfTtcblxuICAgIC8vIFVzZSBlbmNvZGUgZnVuY3Rpb24gdG8gd29yayBvdXQgcGF0dGVyblxuICAgIHZhciBwYXR0ZXJuQXJyYXkgPSBwYXR0ZXJuLnNwbGl0KFwiO1wiKTtcbiAgICB2YXIgcG9zaXRpdmVGb3JtYXQgPSBlbmNvZGVQYXR0ZXJuKHBhdHRlcm5BcnJheVswXSk7XG5cbiAgICBwb3NpdGl2ZUZvcm1hdC5zeW1ib2wgPSBzeW1ib2w7XG4gICAgcG9zaXRpdmVGb3JtYXQuZGVjaW1hbCA9IGRlY2ltYWw7XG4gICAgcG9zaXRpdmVGb3JtYXQuZ3JvdXAgPSBncm91cDtcblxuICAgIHZhciBuZWdhdGl2ZUZvcm1hdCA9IGlzVW5kZWZpbmVkKHBhdHRlcm5BcnJheVsxXSkgPyBlbmNvZGVQYXR0ZXJuKFwiLVwiICsgcGF0dGVybkFycmF5WzBdKSA6IGVuY29kZVBhdHRlcm4ocGF0dGVybkFycmF5WzFdKTtcblxuICAgIG5lZ2F0aXZlRm9ybWF0LnN5bWJvbCA9IHN5bWJvbDtcbiAgICBuZWdhdGl2ZUZvcm1hdC5kZWNpbWFsID0gZGVjaW1hbDtcbiAgICBuZWdhdGl2ZUZvcm1hdC5ncm91cCA9IGdyb3VwO1xuXG4gICAgdmFyIHplcm8gPSBpc1VuZGVmaW5lZChwYXR0ZXJuQXJyYXlbMl0pID8gZm9ybWF0KDAsIHBvc2l0aXZlRm9ybWF0KSA6IHBhdHRlcm5BcnJheVsyXTtcblxuICAgIGlmICghaXNVbmRlZmluZWQocGF0dGVybkFycmF5WzJdKSkge1xuICAgICAgemVyb0Zvcm1hdCA9IHBhdHRlcm5BcnJheVsyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKG4pIHtcbiAgICAgIHZhciBmb3JtYXR0ZWROdW1iZXIgPSB2b2lkIDA7XG4gICAgICBuID0gTnVtYmVyKG4pO1xuICAgICAgaWYgKG4gPiAwKSB7XG4gICAgICAgIGZvcm1hdHRlZE51bWJlciA9IGZvcm1hdChuLCBwb3NpdGl2ZUZvcm1hdCk7XG4gICAgICB9IGVsc2UgaWYgKG4gPT0gMCkge1xuICAgICAgICBmb3JtYXR0ZWROdW1iZXIgPSB6ZXJvLnJlcGxhY2UoJyEnLCBzeW1ib2wpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9ybWF0dGVkTnVtYmVyID0gZm9ybWF0KG4sIG5lZ2F0aXZlRm9ybWF0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmb3JtYXR0ZWROdW1iZXI7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgZm9ybWF0ID0gZnVuY3Rpb24gZm9ybWF0KG51bWJlciwgb3B0aW9ucykge1xuICAgIHZhciBmb3JtYXR0ZXJGdW5jdGlvbiA9IGdldEZvcm1hdHRlcihvcHRpb25zKTtcblxuICAgIHJldHVybiBmb3JtYXR0ZXJGdW5jdGlvbihudW1iZXIpO1xuICB9O1xuXG4gIHZhciBxdWFudGl0eSA9IHByb3BzLnF1YW50aXR5LFxuICAgICAgY3VycmVuY3kgPSBwcm9wcy5jdXJyZW5jeSxcbiAgICAgIHN5bWJvbCA9IHByb3BzLnN5bWJvbCxcbiAgICAgIGxvY2FsZSA9IHByb3BzLmxvY2FsZSxcbiAgICAgIGRlY2ltYWwgPSBwcm9wcy5kZWNpbWFsLFxuICAgICAgZ3JvdXAgPSBwcm9wcy5ncm91cCxcbiAgICAgIHBhdHRlcm4gPSBwcm9wcy5wYXR0ZXJuO1xuXG5cbiAgcmV0dXJuIGZvcm1hdChwcm9wcy5xdWFudGl0eSwge1xuICAgIGN1cnJlbmN5OiBjdXJyZW5jeSxcbiAgICBzeW1ib2w6IHN5bWJvbCxcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBkZWNpbWFsOiBkZWNpbWFsLFxuICAgIGdyb3VwOiBncm91cCxcbiAgICBwYXR0ZXJuOiBwYXR0ZXJuXG4gIH0pO1xufTtcblxuUmVhY3RDdXJyZW5jeUZvcm1hdHRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGN1cnJlbmN5OiAnVVNEJ1xufTtcblxuUmVhY3RDdXJyZW5jeUZvcm1hdHRlci5wcm9wVHlwZXMgPSB7XG4gIHF1YW50aXR5OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGN1cnJlbmN5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzeW1ib2w6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxvY2FsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVjaW1hbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZ3JvdXA6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBhdHRlcm46IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbnJldHVybiBSZWFjdEN1cnJlbmN5Rm9ybWF0dGVyO1xuXG59KSkpO1xuIl0sIm5hbWVzIjpbIlN0YXJJY29uIiwiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJDdXJyZW5jeSIsIkRhdGFDb250ZXh0IiwiTUFYX1JBVElORyIsIk1JTl9SQVRJTkciLCJQcm9kdWN0IiwicHJvZHVjdCIsInJvdXRlciIsInN0YXRlIiwiY2F0ZWdvcmllcyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhdGluZyIsImhhc1ByaW1lIiwiZmluZENhdGVnb3J5TmFtZUZyb21JZCIsImlkIiwiZmlsdGVyIiwiY2F0ZWdvcnkiLCJfaWQiLCJtYXAiLCJuYW1lIiwiaW1hZ2VzIiwidXJsIiwicHVzaCIsInRpdGxlIiwiQXJyYXkiLCJmaWxsIiwiXyIsImkiLCJpblN0b2NrIiwiZGVzY3JpcHRpb24iLCJwcmljZU9yaWdpbiIsInByaWNlU2FsZSJdLCJzb3VyY2VSb290IjoiIn0=