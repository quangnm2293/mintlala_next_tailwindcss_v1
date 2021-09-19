"use strict";
(() => {
var exports = {};
exports.id = "pages/users/edit/[id]";
exports.ids = ["pages/users/edit/[id]"];
exports.modules = {

/***/ "./components/ModalUser.js":
/*!*********************************!*\
  !*** ./components/ModalUser.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/GlobalState */ "./store/GlobalState.js");

var _jsxFileName = "E:\\Works\\VSCode\\NextJS\\next-website-mintlala\\components\\ModalUser.js";





function Modal() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    state,
    dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_store_GlobalState__WEBPACK_IMPORTED_MODULE_4__.DataContext);
  const {
    modal
  } = state;

  const handleSubmit = async e => {
    if (modal.role !== 'admin') return dispatch({
      type: 'NOTIFY',
      payload: {
        error: 'Bạn không đủ quyền để làm việc này'
      }
    });
    dispatch({
      type: 'NOTIFY',
      payload: {
        loading: true
      }
    });

    switch (modal.type) {
      case 'USER':
        await axios__WEBPACK_IMPORTED_MODULE_1___default().delete(`/api/user/${modal.id}`, {
          headers: {
            Authorization: modal.token
          }
        }).then(res => {
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
        break;

      case 'PRODUCT':
        await axios__WEBPACK_IMPORTED_MODULE_1___default().delete(`/api/product/${modal.id}`, {
          headers: {
            Authorization: modal.token
          }
        }).then(res => {
          if (res.data.err) return dispatch({
            type: 'NOTIFY',
            payload: {}
          });
          dispatch({
            type: 'NOTIFY',
            payload: {}
          });
          var cartLocal = JSON.parse(localStorage.getItem('cart_mintlala'));
          cartLocal.map((item, index) => {
            if (item._id === modal.id) {
              cartLocal.splice(index, 1);
            }
          });
          localStorage.setItem('cart_mintlala', JSON.stringify(cartLocal));
        });
        break;

      case 'CATEGORY':
        await axios__WEBPACK_IMPORTED_MODULE_1___default().delete(`/api/categories/${modal.id}`, {
          headers: {
            Authorization: modal.token
          }
        }).then(res => {
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

        try {
          await axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/categories').then(res => {
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
        } catch (err) {
          dispatch({
            type: 'NOTIFY',
            payload: {}
          });
        }

        break;

      default:
        return;
    }

    e.target.closest('#modalUser').classList.add('hidden');
    dispatch({
      type: 'ADD_MODAL',
      payload: {}
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (Object.keys(modal).length > 0) {
      const modal1 = document.getElementById('modalUser');
      modal1.classList.remove('hidden');
    }
  }, [modal]);

  const handleCancel = e => {
    e.target.closest('#modalUser').classList.add('hidden');
    dispatch({
      type: 'ADD_MODAL',
      payload: {}
    });
  };

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
            lineNumber: 106,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "text-3xl hover:text-red-500",
              onClick: handleCancel,
              children: "\xD7"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "p-5 bg-blue-100",
          children: ["B\u1EA1n ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a", ' ', modal.type === 'USER' ? 'tài khoản' : modal.type === 'PRODUCT' ? 'sản phẩm' : 'danh mục', ' ', "n\xE0y?"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 118,
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
            lineNumber: 128,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "button",
            className: "button from-green-500 to-green-200",
            onClick: handleCancel,
            children: "H\u1EE7y"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 3
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ "./pages/users/edit/[id].js":
/*!**********************************!*\
  !*** ./pages/users/edit/[id].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ModalUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ModalUser */ "./components/ModalUser.js");

var _jsxFileName = "E:\\Works\\VSCode\\NextJS\\next-website-mintlala\\pages\\users\\edit\\[id].js";

/* eslint-disable react-hooks/exhaustive-deps */







function UserDetail() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    state,
    dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_store_GlobalState__WEBPACK_IMPORTED_MODULE_4__.DataContext);
  const {
    auth
  } = state;
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const {
    0: checkAdmin,
    1: setCheckAdmin
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    let isCancelled = false;

    const getUser = async () => {
      dispatch({
        type: 'NOTIFY',
        payload: {
          loading: true
        }
      });
      await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/user/${router.query.id}`, {
        headers: {
          Authorization: auth.token
        }
      }).then(res => {
        if (!isCancelled) {
          if (res.data.err) return dispatch({
            type: 'NOTIFY',
            payload: {
              error: res.data.err
            }
          });
          setUser(res.data.user);
          if (res.data.user.role === 'admin') setCheckAdmin(true);
          dispatch({
            type: 'NOTIFY',
            payload: {}
          });
        }
      });
    };

    getUser();
    return () => {
      isCancelled = true;
    };
  }, []);

  const handleCheck = () => {
    setCheckAdmin(!checkAdmin);
  };

  const handleDelete = async () => {
    dispatch({
      type: 'ADD_MODAL',
      payload: {
        id: router.query.id,
        token: auth.token,
        type: 'USER',
        role: auth.user.role
      }
    });
  };

  const handleUpdate = async () => {
    let role = checkAdmin ? 'admin' : 'user';
    dispatch({
      type: 'NOTIFY',
      payload: {
        loading: true
      }
    });
    await axios__WEBPACK_IMPORTED_MODULE_1___default().patch(`/api/user/${router.query.id}`, {
      role
    }, {
      headers: {
        Authorization: auth.token
      }
    }).then(res => {
      if (res.data.err) return dispatch({
        type: 'NOTIFY',
        payload: {
          error: res.data.err
        }
      });
      dispatch({
        type: 'NOTIFY',
        payload: {
          success: res.data.msg
        }
      });
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "bg-khoi-pattern min-h-screen pt-10",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Ch\u1EC9nh s\u1EEDa ng\u01B0\u1EDDi d\xF9ng"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ModalUser__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mx-3 max-w-md md:mx-auto border border-gray-300 shadow-md rounded-md bg-blue-100 p-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "button-blue",
          onClick: () => router.back(),
          style: {
            minWidth: 120
          },
          children: "\u2190 Tr\u1EDF l\u1EA1i"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        className: "text-purple-400 text-center font-bold uppercase my-4",
        children: "Ch\u1EC9nh s\u1EEDa User"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "text-xs font-bold ml-4 mt-4 mb-2",
          htmlFor: "name",
          children: "T\xEAn"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          name: "name",
          id: "name",
          defaultValue: user.name,
          disabled: true,
          className: "border border-blue-200 p-2 pl-4 rounded-md"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "text-xs font-bold ml-4 mt-4 mb-2",
          htmlFor: "email",
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          name: "email",
          id: "email",
          defaultValue: user.email,
          disabled: true,
          className: "border border-blue-200 p-2 pl-4 rounded-md"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex space-x-4 items-center my-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "isAdmin",
          children: "Admin"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "checkbox",
          name: "isAdmin",
          id: "isAdmin",
          disabled: user.root ? true : false,
          checked: checkAdmin,
          onChange: handleCheck,
          className: "w-5 h-5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col space-y-2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "button-green",
          onClick: handleUpdate,
          disabled: user.root ? true : false,
          children: "Thay \u0111\u1ED5i"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "button-red",
          "data-toggle": "modal",
          "data-target": "#deleteUser",
          onClick: handleDelete,
          disabled: user.root ? true : false,
          children: "X\xF3a User"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 3
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserDetail);

/***/ }),

/***/ "./store/Actions.js":
/*!**************************!*\
  !*** ./store/Actions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTIONS": () => (/* binding */ ACTIONS),
/* harmony export */   "addToCart": () => (/* binding */ addToCart),
/* harmony export */   "decrease": () => (/* binding */ decrease),
/* harmony export */   "increase": () => (/* binding */ increase),
/* harmony export */   "deleteItemFromCart": () => (/* binding */ deleteItemFromCart),
/* harmony export */   "updateItem": () => (/* binding */ updateItem)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ACTIONS = {
  NOTIFY: 'NOTIFY',
  AUTH: 'AUTH',
  ADD_CART: 'ADD_CART',
  ADD_MODAL: 'ADD_MODAL',
  ADD_ORDERS: 'ADD_ORDERS',
  ADD_SHIPPING_ADDRESS: 'ADD_SHIPPING_ADDRESS',
  ADD_CATEGORIES: 'ADD_CATEGORIES',
  ADD_EMAIL: 'ADD_EMAIL',
  ADD_GUEST: 'ADD_GUEST'
};
const addToCart = (product, cart) => {
  if (product.inStock < 1) return {
    type: 'NOTIFY',
    payload: {
      error: 'Xin lỗi, sản phẩm tạm thời hết hàng!'
    }
  };
  const check = cart.every(item => {
    return item._id !== product._id;
  });

  if (!check) {
    const newData = [...cart];
    newData.forEach(item => {
      if (item._id === product._id) item.quantity += 1;
    });
    return {
      type: 'ADD_CART',
      payload: newData
    };
  }

  return {
    type: 'ADD_CART',
    payload: [...cart, _objectSpread(_objectSpread({}, product), {}, {
      quantity: 1
    })]
  };
};
const decrease = (data, id) => {
  const newData = [...data];
  newData.forEach(item => {
    if (item._id === id) item.quantity -= 1;
  });
  return {
    type: 'ADD_CART',
    payload: newData
  };
};
const increase = (data, id) => {
  const newData = [...data];
  newData.forEach(item => {
    if (item._id === id) item.quantity += 1;
  });
  return {
    type: 'ADD_CART',
    payload: newData
  };
};
const deleteItemFromCart = (data, id) => {
  const newData = [...data];
  newData.forEach((item, index) => {
    if (item._id === id) newData.splice(index, 1);
  });
  return {
    type: 'ADD_CART',
    payload: newData
  };
};
const updateItem = (data, id, post, type) => {
  const newData = data.map(item => item._id === id ? post : item);
  return {
    type,
    payload: newData
  };
};

/***/ }),

/***/ "./store/GlobalState.js":
/*!******************************!*\
  !*** ./store/GlobalState.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataContext": () => (/* binding */ DataContext),
/* harmony export */   "DataProvider": () => (/* binding */ DataProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Reducers */ "./store/Reducers.js");

var _jsxFileName = "E:\\Works\\VSCode\\NextJS\\next-website-mintlala\\store\\GlobalState.js";




const DataContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)();
const DataProvider = ({
  children
}) => {
  const initialState = {
    notify: {},
    auth: {},
    cart: [],
    modal: {},
    orders: [],
    shippingAddress: {},
    categories: [],
    tempEmail: {},
    guest: {}
  };
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(_Reducers__WEBPACK_IMPORTED_MODULE_4__.reducers, initialState);
  const {
    cart,
    auth
  } = state;
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    const getFirstLogin = async () => {
      const firstLogin = js_cookie__WEBPACK_IMPORTED_MODULE_2___default().get('userInfoInit');

      if (firstLogin) {
        try {
          await axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/auth/accessToken').then(res => {
            if (res.data.err) {
              return js_cookie__WEBPACK_IMPORTED_MODULE_2___default().remove('userInfoInit');
            }

            dispatch({
              type: 'AUTH',
              payload: {
                token: res.data.access_token,
                user: res.data.user
              }
            });
          });
        } catch (err) {
          dispatch({
            type: 'NOTIFY',
            payload: {
              error: err.message
            }
          });
        }
      }
    };

    getFirstLogin();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    const cart_mintlala = localStorage.getItem('cart_mintlala');
    if (cart_mintlala) dispatch({
      type: 'ADD_CART',
      payload: JSON.parse(cart_mintlala)
    });
    const shipping = js_cookie__WEBPACK_IMPORTED_MODULE_2___default().get('shippingAddress');
    if (shipping) dispatch({
      type: 'ADD_SHIPPING_ADDRESS',
      payload: JSON.parse(shipping)
    });
    axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/categories').then(res => {
      if (res.data.err) {
        return dispatch({
          type: 'NOTIFY',
          payload: {
            error: res.data.err
          }
        });
      }

      dispatch({
        type: 'ADD_CATEGORIES',
        payload: res.data.categories
      });
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    localStorage.setItem('cart_mintlala', JSON.stringify(cart));
  }, [cart]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    const getOrders = async () => {
      if (auth.token) {
        await axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/order', {
          headers: {
            Authorization: auth.token
          }
        }).then(res => {
          if (res.data.err) return dispatch({
            type: 'NOTIFY',
            payload: {
              error: res.data.err
            }
          });
          dispatch({
            type: 'ADD_ORDERS',
            payload: res.data.orders
          });
        });
      }
    };

    getOrders();
  }, [auth.token]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DataContext.Provider, {
    value: {
      state,
      dispatch
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./store/Reducers.js":
/*!***************************!*\
  !*** ./store/Reducers.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducers": () => (/* binding */ reducers)
/* harmony export */ });
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actions */ "./store/Actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const reducers = (state, action) => {
  switch (action.type) {
    case _Actions__WEBPACK_IMPORTED_MODULE_0__.ACTIONS.NOTIFY:
      return _objectSpread(_objectSpread({}, state), {}, {
        notify: action.payload
      });

    case _Actions__WEBPACK_IMPORTED_MODULE_0__.ACTIONS.AUTH:
      return _objectSpread(_objectSpread({}, state), {}, {
        auth: action.payload
      });

    case _Actions__WEBPACK_IMPORTED_MODULE_0__.ACTIONS.ADD_CART:
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: action.payload
      });

    case _Actions__WEBPACK_IMPORTED_MODULE_0__.ACTIONS.ADD_MODAL:
      return _objectSpread(_objectSpread({}, state), {}, {
        modal: action.payload
      });

    case _Actions__WEBPACK_IMPORTED_MODULE_0__.ACTIONS.ADD_ORDERS:
      return _objectSpread(_objectSpread({}, state), {}, {
        orders: action.payload
      });

    case _Actions__WEBPACK_IMPORTED_MODULE_0__.ACTIONS.ADD_SHIPPING_ADDRESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        shippingAddress: action.payload
      });

    case _Actions__WEBPACK_IMPORTED_MODULE_0__.ACTIONS.ADD_CATEGORIES:
      return _objectSpread(_objectSpread({}, state), {}, {
        categories: action.payload
      });

    case _Actions__WEBPACK_IMPORTED_MODULE_0__.ACTIONS.ADD_EMAIL:
      return _objectSpread(_objectSpread({}, state), {}, {
        tempEmail: action.payload
      });

    case _Actions__WEBPACK_IMPORTED_MODULE_0__.ACTIONS.ADD_GUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        guest: action.payload
      });

    default:
      return state;
  }
};



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/users/edit/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0QsU0FBSzZELHVEQUFMO0FBQ0MsNkNBQVlwRSxLQUFaO0FBQW1CRSxRQUFBQSxLQUFLLEVBQUU2RyxNQUFNLENBQUN4RztBQUFqQzs7QUFDRCxTQUFLNkQsd0RBQUw7QUFDQyw2Q0FBWXBFLEtBQVo7QUFBbUJvRyxRQUFBQSxNQUFNLEVBQUVXLE1BQU0sQ0FBQ3hHO0FBQWxDOztBQUNELFNBQUs2RCxrRUFBTDtBQUNDLDZDQUFZcEUsS0FBWjtBQUFtQnFHLFFBQUFBLGVBQWUsRUFBRVUsTUFBTSxDQUFDeEc7QUFBM0M7O0FBQ0QsU0FBSzZELDREQUFMO0FBQ0MsNkNBQVlwRSxLQUFaO0FBQW1CaUMsUUFBQUEsVUFBVSxFQUFFOEUsTUFBTSxDQUFDeEc7QUFBdEM7O0FBQ0QsU0FBSzZELHVEQUFMO0FBQ0MsNkNBQVlwRSxLQUFaO0FBQW1Cc0csUUFBQUEsU0FBUyxFQUFFUyxNQUFNLENBQUN4RztBQUFyQzs7QUFDRCxTQUFLNkQsdURBQUw7QUFDQyw2Q0FBWXBFLEtBQVo7QUFBbUJ1RyxRQUFBQSxLQUFLLEVBQUVRLE1BQU0sQ0FBQ3hHO0FBQWpDOztBQUVEO0FBQ0MsYUFBT1AsS0FBUDtBQXJCRjtBQXVCQSxDQXhCRDs7Ozs7Ozs7Ozs7O0FDRkE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhLy4vY29tcG9uZW50cy9Nb2RhbFVzZXIuanMiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhLy4vcGFnZXMvdXNlcnMvZWRpdC9baWRdLmpzIiwid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS8uL3N0b3JlL0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhLy4vc3RvcmUvR2xvYmFsU3RhdGUuanMiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhLy4vc3RvcmUvUmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uL3N0b3JlL0dsb2JhbFN0YXRlJztcclxuXHJcbmZ1bmN0aW9uIE1vZGFsKCkge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuXHRjb25zdCB7IG1vZGFsIH0gPSBzdGF0ZTtcclxuXHJcblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgZSA9PiB7XHJcblx0XHRpZiAobW9kYWwucm9sZSAhPT0gJ2FkbWluJylcclxuXHRcdFx0cmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgZXJyb3I6ICdC4bqhbiBraMO0bmcgxJHhu6cgcXV54buBbiDEkeG7gyBsw6BtIHZp4buHYyBuw6B5JyB9IH0pO1xyXG5cclxuXHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgbG9hZGluZzogdHJ1ZSB9IH0pO1xyXG5cclxuXHRcdHN3aXRjaCAobW9kYWwudHlwZSkge1xyXG5cdFx0XHRjYXNlICdVU0VSJzpcclxuXHRcdFx0XHRhd2FpdCBheGlvc1xyXG5cdFx0XHRcdFx0LmRlbGV0ZShgL2FwaS91c2VyLyR7bW9kYWwuaWR9YCwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IG1vZGFsLnRva2VuIH0gfSlcclxuXHRcdFx0XHRcdC50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5lcnIpIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHJcblx0XHRcdFx0XHRcdHJvdXRlci5iYWNrKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ1BST0RVQ1QnOlxyXG5cdFx0XHRcdGF3YWl0IGF4aW9zXHJcblx0XHRcdFx0XHQuZGVsZXRlKGAvYXBpL3Byb2R1Y3QvJHttb2RhbC5pZH1gLCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogbW9kYWwudG9rZW4gfSB9KVxyXG5cdFx0XHRcdFx0LnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmVycikgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge30gfSk7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgY2FydExvY2FsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydF9taW50bGFsYScpKTtcclxuXHRcdFx0XHRcdFx0Y2FydExvY2FsLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoaXRlbS5faWQgPT09IG1vZGFsLmlkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXJ0TG9jYWwuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydF9taW50bGFsYScsIEpTT04uc3RyaW5naWZ5KGNhcnRMb2NhbCkpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnQ0FURUdPUlknOlxyXG5cdFx0XHRcdGF3YWl0IGF4aW9zXHJcblx0XHRcdFx0XHQuZGVsZXRlKGAvYXBpL2NhdGVnb3JpZXMvJHttb2RhbC5pZH1gLCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogbW9kYWwudG9rZW4gfSB9KVxyXG5cdFx0XHRcdFx0LnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmVycilcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBlcnJvcjogcmVzLmRhdGEuZXJyIH0gfSk7XHJcblxyXG5cdFx0XHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0YXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2NhdGVnb3JpZXMnKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5lcnIpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge30gfSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnQUREX0NBVEVHT1JJRVMnLFxyXG5cdFx0XHRcdFx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLmNhdGVnb3JpZXMsXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0ZS50YXJnZXQuY2xvc2VzdCgnI21vZGFsVXNlcicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiAnQUREX01PREFMJywgcGF5bG9hZDoge30gfSk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmIChPYmplY3Qua2V5cyhtb2RhbCkubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRjb25zdCBtb2RhbDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxVc2VyJyk7XHJcblx0XHRcdG1vZGFsMS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuXHRcdH1cclxuXHR9LCBbbW9kYWxdKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2FuY2VsID0gZSA9PiB7XHJcblx0XHRlLnRhcmdldC5jbG9zZXN0KCcjbW9kYWxVc2VyJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6ICdBRERfTU9EQUwnLCBwYXlsb2FkOiB7fSB9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9J2hpZGRlbiBmaXhlZCB6LVsxMDBdIHRvcC0wIGxlZnQtMCByaWdodC0wIGJvdHRvbS0wIG14LWF1dG8gb3ZlcmZsb3ctYXV0byBiZy1yZ2JhXHJcblx0XHRcdCBzaGFkb3ctbGcgcm91bmRlZC10LW1kJ1xyXG5cdFx0XHRpZD0nbW9kYWxVc2VyJ1xyXG5cdFx0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1mdWxsJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWF4LXctbWQgbWF4LWF1dG8gYW5pbWF0ZS1zY2FsZS0xcyc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGJnLXJlZC0zMDAgcHgtNSBweS0yIHJvdW5kZWQtdC1tZCc+XHJcblx0XHRcdFx0XHRcdDxoNVxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ndGV4dC1jYXBpdGFsaXplIHRleHQtcmVkLTcwMCBmb250LWJvbGQgdHJhY2tpbmctd2lkZXInXHJcblx0XHRcdFx0XHRcdFx0aWQ9J2V4YW1wbGVNb2RhbExhYmVsJ1xyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0V2FybmluZyFcclxuXHRcdFx0XHRcdFx0PC9oNT5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3RleHQtM3hsIGhvdmVyOnRleHQtcmVkLTUwMCcgb25DbGljaz17aGFuZGxlQ2FuY2VsfT5cclxuXHRcdFx0XHRcdFx0XHRcdCZ0aW1lcztcclxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncC01IGJnLWJsdWUtMTAwJz5cclxuXHRcdFx0XHRcdFx0QuG6oW4gY2jhuq9jIGNo4bqvbiBtdeG7kW4geMOzYXsnICd9XHJcblx0XHRcdFx0XHRcdHttb2RhbC50eXBlID09PSAnVVNFUidcclxuXHRcdFx0XHRcdFx0XHQ/ICd0w6BpIGtob+G6o24nXHJcblx0XHRcdFx0XHRcdFx0OiBtb2RhbC50eXBlID09PSAnUFJPRFVDVCdcclxuXHRcdFx0XHRcdFx0XHQ/ICdz4bqjbiBwaOG6qW0nXHJcblx0XHRcdFx0XHRcdFx0OiAnZGFuaCBt4bulYyd9eycgJ31cclxuXHRcdFx0XHRcdFx0bsOgeT9cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggc3BhY2UteC0zIHAtNSBiZy1ibHVlLTEwMCByb3VuZGVkLWItbWQnPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYnV0dG9uIGZyb20tcmVkLTUwMCB0by1yZWQtMzAwJ1xyXG5cdFx0XHRcdFx0XHRcdGRhdGEtZGlzbWlzcz0nbW9kYWwnXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlU3VibWl0fVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0WMOzYVxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9J2J1dHRvbidcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2J1dHRvbiBmcm9tLWdyZWVuLTUwMCB0by1ncmVlbi0yMDAnXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlQ2FuY2VsfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0SOG7p3lcclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvR2xvYmFsU3RhdGUnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTW9kYWxVc2VyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTW9kYWxVc2VyJztcclxuXHJcbmZ1bmN0aW9uIFVzZXJEZXRhaWwoKSB7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xyXG5cdGNvbnN0IHsgYXV0aCB9ID0gc3RhdGU7XHJcblxyXG5cdGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbY2hlY2tBZG1pbiwgc2V0Q2hlY2tBZG1pbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRsZXQgaXNDYW5jZWxsZWQgPSBmYWxzZTtcclxuXHJcblx0XHRjb25zdCBnZXRVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuXHJcblx0XHRcdGF3YWl0IGF4aW9zXHJcblx0XHRcdFx0LmdldChgL2FwaS91c2VyLyR7cm91dGVyLnF1ZXJ5LmlkfWAsIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBhdXRoLnRva2VuIH0gfSlcclxuXHRcdFx0XHQudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKCFpc0NhbmNlbGxlZCkge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmRhdGEuZXJyKVxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGVycm9yOiByZXMuZGF0YS5lcnIgfSB9KTtcclxuXHJcblx0XHRcdFx0XHRcdHNldFVzZXIocmVzLmRhdGEudXNlcik7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS51c2VyLnJvbGUgPT09ICdhZG1pbicpIHNldENoZWNrQWRtaW4odHJ1ZSk7XHJcblxyXG5cdFx0XHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdH07XHJcblxyXG5cdFx0Z2V0VXNlcigpO1xyXG5cclxuXHRcdHJldHVybiAoKSA9PiB7XHJcblx0XHRcdGlzQ2FuY2VsbGVkID0gdHJ1ZTtcclxuXHRcdH07XHJcblx0fSwgW10pO1xyXG5cclxuXHRjb25zdCBoYW5kbGVDaGVjayA9ICgpID0+IHtcclxuXHRcdHNldENoZWNrQWRtaW4oIWNoZWNrQWRtaW4pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jICgpID0+IHtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0FERF9NT0RBTCcsXHJcblx0XHRcdHBheWxvYWQ6IHsgaWQ6IHJvdXRlci5xdWVyeS5pZCwgdG9rZW46IGF1dGgudG9rZW4sIHR5cGU6ICdVU0VSJywgcm9sZTogYXV0aC51c2VyLnJvbGUgfSxcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVVwZGF0ZSA9IGFzeW5jICgpID0+IHtcclxuXHRcdGxldCByb2xlID0gY2hlY2tBZG1pbiA/ICdhZG1pbicgOiAndXNlcic7XHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGxvYWRpbmc6IHRydWUgfSB9KTtcclxuXHJcblx0XHRhd2FpdCBheGlvc1xyXG5cdFx0XHQucGF0Y2goYC9hcGkvdXNlci8ke3JvdXRlci5xdWVyeS5pZH1gLCB7IHJvbGUgfSwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGF1dGgudG9rZW4gfSB9KVxyXG5cdFx0XHQudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdGlmIChyZXMuZGF0YS5lcnIpIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGVycm9yOiByZXMuZGF0YS5lcnIgfSB9KTtcclxuXHJcblx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBzdWNjZXNzOiByZXMuZGF0YS5tc2cgfSB9KTtcclxuXHRcdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdiZy1raG9pLXBhdHRlcm4gbWluLWgtc2NyZWVuIHB0LTEwJz5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PHRpdGxlPkNo4buJbmggc+G7rWEgbmfGsOG7nWkgZMO5bmc8L3RpdGxlPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblxyXG5cdFx0XHQ8TW9kYWxVc2VyIC8+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbXgtMyBtYXgtdy1tZCBtZDpteC1hdXRvIGJvcmRlciBib3JkZXItZ3JheS0zMDAgc2hhZG93LW1kIHJvdW5kZWQtbWQgYmctYmx1ZS0xMDAgcC01Jz5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9J2J1dHRvbi1ibHVlJyBvbkNsaWNrPXsoKSA9PiByb3V0ZXIuYmFjaygpfSBzdHlsZT17eyBtaW5XaWR0aDogMTIwIH19PlxyXG5cdFx0XHRcdFx0XHQmbGFycjsgVHLhu58gbOG6oWlcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSd0ZXh0LXB1cnBsZS00MDAgdGV4dC1jZW50ZXIgZm9udC1ib2xkIHVwcGVyY2FzZSBteS00Jz5DaOG7iW5oIHPhu61hIFVzZXI8L2g0PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCc+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LXhzIGZvbnQtYm9sZCBtbC00IG10LTQgbWItMicgaHRtbEZvcj0nbmFtZSc+XHJcblx0XHRcdFx0XHRcdFTDqm5cclxuXHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0bmFtZT0nbmFtZSdcclxuXHRcdFx0XHRcdFx0aWQ9J25hbWUnXHJcblx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17dXNlci5uYW1lfVxyXG5cdFx0XHRcdFx0XHRkaXNhYmxlZFxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2JvcmRlciBib3JkZXItYmx1ZS0yMDAgcC0yIHBsLTQgcm91bmRlZC1tZCdcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sJz5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQteHMgZm9udC1ib2xkIG1sLTQgbXQtNCBtYi0yJyBodG1sRm9yPSdlbWFpbCc+XHJcblx0XHRcdFx0XHRcdEVtYWlsXHJcblx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdG5hbWU9J2VtYWlsJ1xyXG5cdFx0XHRcdFx0XHRpZD0nZW1haWwnXHJcblx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17dXNlci5lbWFpbH1cclxuXHRcdFx0XHRcdFx0ZGlzYWJsZWRcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdib3JkZXIgYm9yZGVyLWJsdWUtMjAwIHAtMiBwbC00IHJvdW5kZWQtbWQnXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBzcGFjZS14LTQgaXRlbXMtY2VudGVyIG15LTQnPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9J2lzQWRtaW4nPkFkbWluPC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPSdjaGVja2JveCdcclxuXHRcdFx0XHRcdFx0bmFtZT0naXNBZG1pbidcclxuXHRcdFx0XHRcdFx0aWQ9J2lzQWRtaW4nXHJcblx0XHRcdFx0XHRcdGRpc2FibGVkPXt1c2VyLnJvb3QgPyB0cnVlIDogZmFsc2V9XHJcblx0XHRcdFx0XHRcdGNoZWNrZWQ9e2NoZWNrQWRtaW59XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGVja31cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSd3LTUgaC01J1xyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgc3BhY2UteS0yJz5cclxuXHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdidXR0b24tZ3JlZW4nXHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZVVwZGF0ZX1cclxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e3VzZXIucm9vdCA/IHRydWUgOiBmYWxzZX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0VGhheSDEkeG7lWlcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cclxuXHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdidXR0b24tcmVkJ1xyXG5cdFx0XHRcdFx0XHRkYXRhLXRvZ2dsZT0nbW9kYWwnXHJcblx0XHRcdFx0XHRcdGRhdGEtdGFyZ2V0PScjZGVsZXRlVXNlcidcclxuXHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlRGVsZXRlfVxyXG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17dXNlci5yb290ID8gdHJ1ZSA6IGZhbHNlfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRYw7NhIFVzZXJcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJEZXRhaWw7XHJcbiIsImV4cG9ydCBjb25zdCBBQ1RJT05TID0ge1xyXG5cdE5PVElGWTogJ05PVElGWScsXHJcblx0QVVUSDogJ0FVVEgnLFxyXG5cdEFERF9DQVJUOiAnQUREX0NBUlQnLFxyXG5cdEFERF9NT0RBTDogJ0FERF9NT0RBTCcsXHJcblx0QUREX09SREVSUzogJ0FERF9PUkRFUlMnLFxyXG5cdEFERF9TSElQUElOR19BRERSRVNTOiAnQUREX1NISVBQSU5HX0FERFJFU1MnLFxyXG5cdEFERF9DQVRFR09SSUVTOiAnQUREX0NBVEVHT1JJRVMnLFxyXG5cdEFERF9FTUFJTDogJ0FERF9FTUFJTCcsXHJcblx0QUREX0dVRVNUOiAnQUREX0dVRVNUJyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRUb0NhcnQgPSAocHJvZHVjdCwgY2FydCkgPT4ge1xyXG5cdGlmIChwcm9kdWN0LmluU3RvY2sgPCAxKSByZXR1cm4geyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBlcnJvcjogJ1hpbiBs4buXaSwgc+G6o24gcGjhuqltIHThuqFtIHRo4budaSBo4bq/dCBow6BuZyEnIH0gfTtcclxuXHJcblx0Y29uc3QgY2hlY2sgPSBjYXJ0LmV2ZXJ5KGl0ZW0gPT4ge1xyXG5cdFx0cmV0dXJuIGl0ZW0uX2lkICE9PSBwcm9kdWN0Ll9pZDtcclxuXHR9KTtcclxuXHRcclxuXHRpZiAoIWNoZWNrKSB7XHJcblx0XHRjb25zdCBuZXdEYXRhID0gWy4uLmNhcnRdO1xyXG5cdFx0bmV3RGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0XHRpZiAoaXRlbS5faWQgPT09IHByb2R1Y3QuX2lkKSBpdGVtLnF1YW50aXR5ICs9IDE7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiB7IHR5cGU6ICdBRERfQ0FSVCcsIHBheWxvYWQ6IG5ld0RhdGEgfTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB7IHR5cGU6ICdBRERfQ0FSVCcsIHBheWxvYWQ6IFsuLi5jYXJ0LCB7IC4uLnByb2R1Y3QsIHF1YW50aXR5OiAxIH1dIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVjcmVhc2UgPSAoZGF0YSwgaWQpID0+IHtcclxuXHRjb25zdCBuZXdEYXRhID0gWy4uLmRhdGFdO1xyXG5cdG5ld0RhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuXHRcdGlmIChpdGVtLl9pZCA9PT0gaWQpIGl0ZW0ucXVhbnRpdHkgLT0gMTtcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIHsgdHlwZTogJ0FERF9DQVJUJywgcGF5bG9hZDogbmV3RGF0YSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGluY3JlYXNlID0gKGRhdGEsIGlkKSA9PiB7XHJcblx0Y29uc3QgbmV3RGF0YSA9IFsuLi5kYXRhXTtcclxuXHRuZXdEYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcblx0XHRpZiAoaXRlbS5faWQgPT09IGlkKSBpdGVtLnF1YW50aXR5ICs9IDE7XHJcblx0fSk7XHJcblx0cmV0dXJuIHsgdHlwZTogJ0FERF9DQVJUJywgcGF5bG9hZDogbmV3RGF0YSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUl0ZW1Gcm9tQ2FydCA9IChkYXRhLCBpZCkgPT4ge1xyXG5cdGNvbnN0IG5ld0RhdGEgPSBbLi4uZGF0YV07XHJcblx0bmV3RGF0YS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG5cdFx0aWYgKGl0ZW0uX2lkID09PSBpZCkgbmV3RGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4geyB0eXBlOiAnQUREX0NBUlQnLCBwYXlsb2FkOiBuZXdEYXRhIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlSXRlbSA9IChkYXRhLCBpZCwgcG9zdCwgdHlwZSkgPT4ge1xyXG5cdGNvbnN0IG5ld0RhdGEgPSBkYXRhLm1hcChpdGVtID0+IChpdGVtLl9pZCA9PT0gaWQgPyBwb3N0IDogaXRlbSkpO1xyXG5cdHJldHVybiB7IHR5cGUsIHBheWxvYWQ6IG5ld0RhdGEgfTtcclxufTsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHJlZHVjZXJzIH0gZnJvbSAnLi9SZWR1Y2Vycyc7XHJcblxyXG5leHBvcnQgY29uc3QgRGF0YUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgRGF0YVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cdGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRcdG5vdGlmeToge30sXHJcblx0XHRhdXRoOiB7fSxcclxuXHRcdGNhcnQ6IFtdLFxyXG5cdFx0bW9kYWw6IHt9LFxyXG5cdFx0b3JkZXJzOiBbXSxcclxuXHRcdHNoaXBwaW5nQWRkcmVzczoge30sXHJcblx0XHRjYXRlZ29yaWVzOiBbXSxcclxuXHRcdHRlbXBFbWFpbDoge30sXHJcblx0XHRndWVzdDoge30sXHJcblx0fTtcclxuXHRjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlcnMsIGluaXRpYWxTdGF0ZSk7XHJcblx0Y29uc3QgeyBjYXJ0LCBhdXRoIH0gPSBzdGF0ZTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IGdldEZpcnN0TG9naW4gPSBhc3luYyAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IGZpcnN0TG9naW4gPSBDb29raWVzLmdldCgndXNlckluZm9Jbml0Jyk7XHJcblx0XHRcdGlmIChmaXJzdExvZ2luKSB7XHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdGF3YWl0IGF4aW9zLmdldCgnL2FwaS9hdXRoL2FjY2Vzc1Rva2VuJykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmRhdGEuZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIENvb2tpZXMucmVtb3ZlKCd1c2VySW5mb0luaXQnKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdFx0XHRcdFx0dHlwZTogJ0FVVEgnLFxyXG5cdFx0XHRcdFx0XHRcdHBheWxvYWQ6IHsgdG9rZW46IHJlcy5kYXRhLmFjY2Vzc190b2tlbiwgdXNlcjogcmVzLmRhdGEudXNlciB9LFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBlcnJvcjogZXJyLm1lc3NhZ2UgfSB9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHRnZXRGaXJzdExvZ2luKCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgY2FydF9taW50bGFsYSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0X21pbnRsYWxhJyk7XHJcblx0XHRpZiAoY2FydF9taW50bGFsYSkgZGlzcGF0Y2goeyB0eXBlOiAnQUREX0NBUlQnLCBwYXlsb2FkOiBKU09OLnBhcnNlKGNhcnRfbWludGxhbGEpIH0pO1xyXG5cclxuXHRcdGNvbnN0IHNoaXBwaW5nID0gQ29va2llcy5nZXQoJ3NoaXBwaW5nQWRkcmVzcycpO1xyXG5cdFx0aWYgKHNoaXBwaW5nKSBkaXNwYXRjaCh7IHR5cGU6ICdBRERfU0hJUFBJTkdfQUREUkVTUycsIHBheWxvYWQ6IEpTT04ucGFyc2Uoc2hpcHBpbmcpIH0pO1xyXG5cclxuXHRcdGF4aW9zLmdldCgnL2FwaS9jYXRlZ29yaWVzJykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRpZiAocmVzLmRhdGEuZXJyKSB7XHJcblx0XHRcdFx0cmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgZXJyb3I6IHJlcy5kYXRhLmVyciB9IH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHR0eXBlOiAnQUREX0NBVEVHT1JJRVMnLFxyXG5cdFx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLmNhdGVnb3JpZXMsXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fSwgW10pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnRfbWludGxhbGEnLCBKU09OLnN0cmluZ2lmeShjYXJ0KSk7XHJcblx0fSwgW2NhcnRdKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IGdldE9yZGVycyA9IGFzeW5jICgpID0+IHtcclxuXHRcdFx0aWYgKGF1dGgudG9rZW4pIHtcclxuXHRcdFx0XHRhd2FpdCBheGlvcy5nZXQoJy9hcGkvb3JkZXInLCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYXV0aC50b2tlbiB9IH0pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5lcnIpIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGVycm9yOiByZXMuZGF0YS5lcnIgfSB9KTtcclxuXHRcdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ0FERF9PUkRFUlMnLCBwYXlsb2FkOiByZXMuZGF0YS5vcmRlcnMgfSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHRnZXRPcmRlcnMoKTtcclxuXHR9LCBbYXV0aC50b2tlbl0pO1xyXG5cclxuXHRyZXR1cm4gPERhdGFDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCB9fT57Y2hpbGRyZW59PC9EYXRhQ29udGV4dC5Qcm92aWRlcj47XHJcbn07XHJcbiIsImltcG9ydCB7IEFDVElPTlMgfSBmcm9tICcuL0FjdGlvbnMnO1xyXG5cclxuY29uc3QgcmVkdWNlcnMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgQUNUSU9OUy5OT1RJRlk6XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBub3RpZnk6IGFjdGlvbi5wYXlsb2FkIH07XHJcblx0XHRjYXNlIEFDVElPTlMuQVVUSDpcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIGF1dGg6IGFjdGlvbi5wYXlsb2FkIH07XHJcblx0XHRjYXNlIEFDVElPTlMuQUREX0NBUlQ6XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBjYXJ0OiBhY3Rpb24ucGF5bG9hZCB9O1xyXG5cdFx0Y2FzZSBBQ1RJT05TLkFERF9NT0RBTDpcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIG1vZGFsOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG5cdFx0Y2FzZSBBQ1RJT05TLkFERF9PUkRFUlM6XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBvcmRlcnM6IGFjdGlvbi5wYXlsb2FkIH07XHJcblx0XHRjYXNlIEFDVElPTlMuQUREX1NISVBQSU5HX0FERFJFU1M6XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBzaGlwcGluZ0FkZHJlc3M6IGFjdGlvbi5wYXlsb2FkIH07XHJcblx0XHRjYXNlIEFDVElPTlMuQUREX0NBVEVHT1JJRVM6XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBjYXRlZ29yaWVzOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG5cdFx0Y2FzZSBBQ1RJT05TLkFERF9FTUFJTDpcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHRlbXBFbWFpbDogYWN0aW9uLnBheWxvYWQgfTtcclxuXHRcdGNhc2UgQUNUSU9OUy5BRERfR1VFU1Q6XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBndWVzdDogYWN0aW9uLnBheWxvYWQgfTtcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IHsgcmVkdWNlcnMgfTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbImF4aW9zIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiRGF0YUNvbnRleHQiLCJNb2RhbCIsInJvdXRlciIsInN0YXRlIiwiZGlzcGF0Y2giLCJtb2RhbCIsImhhbmRsZVN1Ym1pdCIsImUiLCJyb2xlIiwidHlwZSIsInBheWxvYWQiLCJlcnJvciIsImxvYWRpbmciLCJkZWxldGUiLCJpZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJ0aGVuIiwicmVzIiwiZGF0YSIsImVyciIsImJhY2siLCJjYXJ0TG9jYWwiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibWFwIiwiaXRlbSIsImluZGV4IiwiX2lkIiwic3BsaWNlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImdldCIsImNhdGVnb3JpZXMiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiY2xhc3NMaXN0IiwiYWRkIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIm1vZGFsMSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmUiLCJoYW5kbGVDYW5jZWwiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJNb2RhbFVzZXIiLCJVc2VyRGV0YWlsIiwiYXV0aCIsInVzZXIiLCJzZXRVc2VyIiwiY2hlY2tBZG1pbiIsInNldENoZWNrQWRtaW4iLCJpc0NhbmNlbGxlZCIsImdldFVzZXIiLCJxdWVyeSIsImhhbmRsZUNoZWNrIiwiaGFuZGxlRGVsZXRlIiwiaGFuZGxlVXBkYXRlIiwicGF0Y2giLCJzdWNjZXNzIiwibXNnIiwibWluV2lkdGgiLCJuYW1lIiwiZW1haWwiLCJyb290IiwiQUNUSU9OUyIsIk5PVElGWSIsIkFVVEgiLCJBRERfQ0FSVCIsIkFERF9NT0RBTCIsIkFERF9PUkRFUlMiLCJBRERfU0hJUFBJTkdfQUREUkVTUyIsIkFERF9DQVRFR09SSUVTIiwiQUREX0VNQUlMIiwiQUREX0dVRVNUIiwiYWRkVG9DYXJ0IiwicHJvZHVjdCIsImNhcnQiLCJpblN0b2NrIiwiY2hlY2siLCJldmVyeSIsIm5ld0RhdGEiLCJmb3JFYWNoIiwicXVhbnRpdHkiLCJkZWNyZWFzZSIsImluY3JlYXNlIiwiZGVsZXRlSXRlbUZyb21DYXJ0IiwidXBkYXRlSXRlbSIsInBvc3QiLCJDb29raWVzIiwiY3JlYXRlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJyZWR1Y2VycyIsIkRhdGFQcm92aWRlciIsImNoaWxkcmVuIiwiaW5pdGlhbFN0YXRlIiwibm90aWZ5Iiwib3JkZXJzIiwic2hpcHBpbmdBZGRyZXNzIiwidGVtcEVtYWlsIiwiZ3Vlc3QiLCJnZXRGaXJzdExvZ2luIiwiZmlyc3RMb2dpbiIsImFjY2Vzc190b2tlbiIsIm1lc3NhZ2UiLCJjYXJ0X21pbnRsYWxhIiwic2hpcHBpbmciLCJnZXRPcmRlcnMiLCJhY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9