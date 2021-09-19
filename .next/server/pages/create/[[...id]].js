(() => {
var exports = {};
exports.id = "pages/create/[[...id]]";
exports.ids = ["pages/create/[[...id]]"];
exports.modules = {

/***/ "./components/editor/ReactQuill.js":
/*!*****************************************!*\
  !*** ./components/editor/ReactQuill.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_ImageUpload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/ImageUpload */ "./utils/ImageUpload.js");

var _jsxFileName = "E:\\Works\\VSCode\\NextJS\\next-website-mintlala\\components\\editor\\ReactQuill.js";


const ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! react-quill */ "react-quill", 23)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-quill */ "react-quill")],
    modules: ["..\\components\\editor\\ReactQuill.js -> " + 'react-quill']
  }
});



class MyComponent extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      editorHtml: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html) {
    this.setState({
      editorHtml: html
    });
    this.props.setContent(this.state.editorHtml);
  }

  cfgFont() {
    const {
      Quill
    } = ReactQuill;
    let Font = [];

    if (Quill) {
      Font = Quill.import('formats/font');
      Font.whitelist = ['arial', 'comic-sans', 'courier-new', 'georgia', 'helvetica', 'lucida'];
      Quill.register(Font, true);
    }

    return Font;
  }

  imageHandler() {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const image = await (0,_utils_ImageUpload__WEBPACK_IMPORTED_MODULE_4__.imageUpload)([file]); // Save current cursor state

      const range = this.quill.getSelection(true); // Insert uploaded image

      this.quill.insertEmbed(range.index, 'image', `${image[0].url}`); // Move cursor to right side of image (easier to continue typing)

      this.quill.setSelection(range.index + 1);
    };
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-editor",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ReactQuill, {
        ref: el => {
          this.quill = el;
        },
        onChange: this.handleChange,
        placeholder: "M\xF4 t\u1EA3 chi ti\u1EBFt...",
        modules: {
          toolbar: {
            container: [[{
              header: '1'
            }, {
              header: '2'
            }, {
              header: [3, 4, 5, 6]
            }, {
              font: []
            }], [{
              size: []
            }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{
              list: 'ordered'
            }, {
              list: 'bullet'
            }], [{
              direction: 'rtl'
            }], [{
              align: []
            }], [{
              color: []
            }, {
              background: []
            }], ['link', 'image', 'video'], ['clean'], ['code-block']],
            handlers: {
              image: this.imageHandler
            }
          }
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 4
    }, this);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyComponent);

/***/ }),

/***/ "./pages/create/[[...id]].js":
/*!***********************************!*\
  !*** ./pages/create/[[...id]].js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var _utils_validProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/validProduct */ "./utils/validProduct.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_ImageUpload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/ImageUpload */ "./utils/ImageUpload.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_editor_ReactQuill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/editor/ReactQuill */ "./components/editor/ReactQuill.js");

var _jsxFileName = "E:\\Works\\VSCode\\NextJS\\next-website-mintlala\\pages\\create\\[[...id]].js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @next/next/no-img-element */









function ProductsManager() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  const {
    id
  } = router.query;
  const initialState = {
    _id: '',
    title: '',
    priceOrigin: 0,
    priceSale: 0,
    inStock: 0,
    description: '',
    category: ''
  };
  const {
    0: product,
    1: setProduct
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialState);
  const {
    title,
    priceOrigin,
    priceSale,
    inStock,
    description,
    category
  } = product;
  const {
    0: images,
    1: setImages
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: onEdit,
    1: setOnEdit
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: content,
    1: setContent
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    state,
    dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_GlobalState__WEBPACK_IMPORTED_MODULE_3__.DataContext);
  const {
    categories,
    auth
  } = state;
  const {
    user
  } = auth;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const getProductEdit = async () => {
      try {
        if (id) {
          setOnEdit(true);
          await axios__WEBPACK_IMPORTED_MODULE_5___default().get(`/api/product/${id}`).then(res => {
            if (res.data.err) return;
            setProduct(res.data.product);
            setImages(res.data.product.images);
            setContent(res.data.product.content);
          });
        } else {
          setOnEdit(false);
          setProduct(initialState);
          setImages([]);
        }
      } catch (err) {
        dispatch({
          type: 'NOTIFY',
          payload: {
            error: err.message
          }
        });
      }
    };

    getProductEdit();
  }, [id]);

  const handleChangeInput = e => {
    const {
      value,
      name
    } = e.target;
    setProduct(_objectSpread(_objectSpread({}, product), {}, {
      [name]: value
    }));
  };

  const handleUploadFile = e => {
    let newImages = [];
    let num = images.length;
    let err = '';
    const files = [...e.target.files];
    if (images.length > 9) return dispatch({
      type: 'NOTIFY',
      payload: {
        error: 'Chấp nhận tối đa 10 hình ảnh.'
      }
    });
    if (files.length === 0) return dispatch({
      type: 'NOTIFY',
      payload: {
        error: 'File không tồn tại.'
      }
    });
    files.forEach(file => {
      if (file.size > 1024 * 1024 * 5) return err = 'Kích thước file phải nhỏ hơn 5mb.';
      if (file.type !== 'image/jpeg' && file.type !== 'image/png') return err = 'Định dạng file phải là jpeg/png.';
      num++;
      if (num < 11) newImages.push(file);
      return newImages;
    });
    if (err) return dispatch({
      type: 'NOTIFY',
      payload: {
        error: err
      }
    });
    setImages(images.concat(newImages));
  };

  const handleRemove = index => {
    const newData = [...images];
    newData.splice(index, 1);
    setImages(newData);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errMsg = (0,_utils_validProduct__WEBPACK_IMPORTED_MODULE_4__.validProduct)(title, priceOrigin, priceSale, inStock, description, content, category, images);
    if (errMsg) return dispatch({
      type: 'NOTIFY',
      payload: {
        error: errMsg
      }
    });

    try {
      dispatch({
        type: 'NOTIFY',
        payload: {
          loading: true
        }
      });
      let media;
      const imgNewURL = images.filter(img => !img.url);
      const imgOldURL = images.filter(img => img.url);

      if (imgNewURL.length > 0) {
        media = await (0,_utils_ImageUpload__WEBPACK_IMPORTED_MODULE_6__.imageUpload)(images);
      }

      if (!id) {
        await axios__WEBPACK_IMPORTED_MODULE_5___default().post('/api/product', _objectSpread(_objectSpread({}, product), {}, {
          content,
          images: media ? [...imgOldURL, ...media] : imgOldURL
        }), {
          headers: {
            Authorization: auth.token
          }
        }).then(res => {
          if (res.data.err) return dispatch({
            type: 'NOTIFY',
            payload: {}
          });
          dispatch({
            type: 'NOTIFY',
            payload: {
              success: res.data.msg
            }
          });
        });
      } else {
        await axios__WEBPACK_IMPORTED_MODULE_5___default().put(`/api/product/${id}`, _objectSpread(_objectSpread({}, product), {}, {
          content,
          images: media ? [...imgOldURL, ...media] : imgOldURL
        }), {
          headers: {
            Authorization: auth.token
          }
        }).then(res => {
          if (res.data.err) return dispatch({
            type: 'NOTIFY',
            payload: {}
          });
          dispatch({
            type: 'NOTIFY',
            payload: {
              success: res.data.msg
            }
          });
        });
      }

      setProduct(initialState);
      setImages([]);
    } catch (err) {
      dispatch({
        type: 'NOTIFY',
        payload: {
          error: err.message
        }
      });
    }
  };

  if (!user || user.role !== 'admin') return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Qu\u1EA3n l\xFD s\u1EA3n ph\u1EA9m"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      className: "row",
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-md-12",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "input-group my-4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "custom-file border rounded",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "file",
              className: "custom-file-input",
              onChange: handleUploadFile,
              multiple: true,
              accept: "image/*",
              style: {
                cursor: 'pointer'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "input-group-prepend",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "input-group-text",
              children: "T\u1EA3i \u1EA3nh"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row img-up pl-4",
          children: images.map((img, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "file_img",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: img.url ? img.url : URL.createObjectURL(img),
              alt: "\u1EA2nh m\xF4 t\u1EA3",
              className: "img-thumbnail rounded"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              onClick: () => handleRemove(index),
              children: "X"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 9
            }, this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 8
          }, this) // eslint-disable-next-line no-mixed-spaces-and-tabs
          )
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-md-12",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "input-group-prepend my-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
            name: "category",
            id: "category",
            value: category,
            onChange: e => handleChangeInput(e),
            className: "custom-select text-capitalize",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              value: "all",
              children: "-- Danh m\u1EE5c --"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 8
            }, this), categories.map(category => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              value: category._id,
              children: category.name
            }, category._id, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 9
            }, this))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          name: "product_id",
          value: id ? product._id : '',
          placeholder: "Product ID t\u1EF1 t\u1EA1o \u1EDF DB",
          className: "w-100 d-block mt-4 p-2",
          onChange: e => handleChangeInput(e),
          disabled: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "my-2",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "title",
            style: {
              transform: 'translateY(5px)'
            },
            className: "text-info",
            children: "T\xEAn s\u1EA3n ph\u1EA9m"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "title",
            id: "title",
            value: title,
            placeholder: "T\xEAn s\u1EA3n ph\u1EA9m",
            className: "w-100 d-block p-2",
            onChange: e => handleChangeInput(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-md-6",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "text-info",
              htmlFor: "priceOrigin",
              style: {
                transform: 'translateY(5px)'
              },
              children: "Gi\xE1 g\u1ED1c"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 243,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "number",
              name: "priceOrigin",
              id: "priceOrigin",
              value: priceOrigin === 0 ? '' : priceOrigin,
              placeholder: "Gi\xE1 g\u1ED1c",
              className: "w-100 d-block p-2",
              onChange: e => handleChangeInput(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-md-6",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "text-info",
              htmlFor: "priceSale",
              style: {
                transform: 'translateY(5px)'
              },
              children: "Gi\xE1 khuy\u1EBFn m\xE3i"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "number",
              name: "priceSale",
              id: "priceSale",
              value: priceSale === 0 ? '' : priceSale,
              placeholder: "Gi\xE1 sale",
              className: "w-100 d-block p-2",
              onChange: e => handleChangeInput(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 268,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "my-2",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: "text-info",
            htmlFor: "inStock",
            style: {
              transform: 'translateY(5px)'
            },
            children: "Kho"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 280,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "nuumber",
            name: "inStock",
            value: inStock === 0 ? '' : inStock,
            placeholder: "Kho",
            className: "w-100 d-block p-2",
            onChange: e => handleChangeInput(e),
            id: "inStock"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: "text-info",
            htmlFor: "description",
            style: {
              transform: 'translateY(5px)'
            },
            children: "M\xF4 t\u1EA3 ng\u1EAFn"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
            name: "description",
            id: "description",
            rows: "4",
            value: description,
            className: "w-100",
            onChange: e => handleChangeInput(e),
            placeholder: "M\xF4 t\u1EA3 s\u1EA3n ph\u1EA9m ng\u1EAFn g\u1ECDn."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 305,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-editor",
          style: {
            minHeight: '500px'
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_editor_ReactQuill__WEBPACK_IMPORTED_MODULE_8__.default, {
            setContent: setContent,
            content: content ? content : product.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 317,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        className: "btn btn-info mt-2 py-2 ml-3 mb-4",
        style: {
          minWidth: 200
        },
        children: onEdit ? 'Cập nhật sản phẩm' : 'Đăng sản phẩm'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 154,
    columnNumber: 3
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsManager);

/***/ }),

/***/ "./store/Actions.js":
/*!**************************!*\
  !*** ./store/Actions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./utils/ImageUpload.js":
/*!******************************!*\
  !*** ./utils/ImageUpload.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "imageUpload": () => (/* binding */ imageUpload)
/* harmony export */ });
const imageUpload = async images => {
  let imgArr = [];

  for (const item of images) {
    const formData = new FormData();
    formData.append('file', item);
    formData.append('upload_preset', "nextjs_mintlala");
    formData.append('cloud_name', "dpgsqsnvm");
    const res = await fetch("https://api.cloudinary.com/v1_1/dpgsqsnvm/image/upload", {
      method: 'POST',
      body: formData
    });
    const data = await res.json();
    imgArr.push({
      public_id: data.public_id,
      url: data.secure_url
    });
  }

  return imgArr;
};

/***/ }),

/***/ "./utils/validProduct.js":
/*!*******************************!*\
  !*** ./utils/validProduct.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validProduct": () => (/* binding */ validProduct),
/* harmony export */   "validPhone": () => (/* binding */ validPhone),
/* harmony export */   "validateEmail": () => (/* binding */ validateEmail),
/* harmony export */   "displayPrice": () => (/* binding */ displayPrice)
/* harmony export */ });
const validProduct = (title, priceOrigin, priceSale, inStock, description, content, category, images) => {
  if (!title || !priceOrigin || !priceSale || !inStock || !description || !content || category === 'all' || category === '' || images.length === 0) {
    return 'Vui lòng điền đầy đủ các trường ';
  }
};
function validPhone(phone) {
  const re = /^[+]/g;
  return re.test(phone);
}
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function displayPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

/***/ }),

/***/ "./node_modules/react-quill/dist/quill.snow.css":
/*!******************************************************!*\
  !*** ./node_modules/react-quill/dist/quill.snow.css ***!
  \******************************************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("js-cookie");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-quill":
/*!******************************!*\
  !*** external "react-quill" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-quill");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/create/[[...id]].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1EsT0FMRCxJQU1BUCxRQUFRLEtBQUssS0FOYixJQU9BQSxRQUFRLEtBQUssRUFQYixJQVFBRyxNQUFNLENBQUMyQixNQUFQLEtBQWtCLENBVG5CLEVBVUU7QUFDRCxXQUFPLGtDQUFQO0FBQ0E7QUFDRCxDQWRNO0FBZ0JBLFNBQVM0RixVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUNqQyxRQUFNQyxFQUFFLEdBQUcsT0FBWDtBQUNBLFNBQU9BLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRRixLQUFSLENBQVA7QUFDQTtBQUVNLFNBQVNHLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQ3BDLFFBQU1ILEVBQUUsR0FDUCx1SkFERDtBQUVBLFNBQU9BLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRRyxNQUFNLENBQUNELEtBQUQsQ0FBTixDQUFjRSxXQUFkLEVBQVIsQ0FBUDtBQUNBO0FBRU0sU0FBU0MsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDbkMsU0FBT0EsS0FBSyxDQUFDQyxRQUFOLEdBQWlCQyxPQUFqQixDQUF5Qix1QkFBekIsRUFBa0QsR0FBbEQsQ0FBUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkQ7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvLi9jb21wb25lbnRzL2VkaXRvci9SZWFjdFF1aWxsLmpzIiwid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS8uL3BhZ2VzL2NyZWF0ZS9bWy4uLmlkXV0uanMiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhLy4vc3RvcmUvQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvLi9zdG9yZS9HbG9iYWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvLi9zdG9yZS9SZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvLi91dGlscy9JbWFnZVVwbG9hZC5qcyIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvLi91dGlscy92YWxpZFByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIiIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL25leHQtd2Vic2l0ZS1taW50bGFsYS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dC13ZWJzaXRlLW1pbnRsYWxhL2V4dGVybmFsIFwicmVhY3QtcXVpbGxcIiIsIndlYnBhY2s6Ly9uZXh0LXdlYnNpdGUtbWludGxhbGEvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5jb25zdCBSZWFjdFF1aWxsID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LXF1aWxsJyksIHsgc3NyOiBmYWxzZSB9KTtcclxuaW1wb3J0ICdyZWFjdC1xdWlsbC9kaXN0L3F1aWxsLnNub3cuY3NzJztcclxuaW1wb3J0IHsgaW1hZ2VVcGxvYWQgfSBmcm9tICcuLi8uLi91dGlscy9JbWFnZVVwbG9hZCc7XHJcblxyXG5jbGFzcyBNeUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7IGVkaXRvckh0bWw6ICcnIH07XHJcblx0XHR0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVDaGFuZ2UoaHRtbCkge1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGVkaXRvckh0bWw6IGh0bWwgfSk7XHJcblx0XHR0aGlzLnByb3BzLnNldENvbnRlbnQodGhpcy5zdGF0ZS5lZGl0b3JIdG1sKTtcclxuXHR9XHJcblxyXG5cdGNmZ0ZvbnQoKSB7XHJcblx0XHRjb25zdCB7IFF1aWxsIH0gPSBSZWFjdFF1aWxsO1xyXG5cdFx0bGV0IEZvbnQgPSBbXTtcclxuXHRcdGlmIChRdWlsbCkge1xyXG5cdFx0XHRGb250ID0gUXVpbGwuaW1wb3J0KCdmb3JtYXRzL2ZvbnQnKTtcclxuXHRcdFx0Rm9udC53aGl0ZWxpc3QgPSBbJ2FyaWFsJywgJ2NvbWljLXNhbnMnLCAnY291cmllci1uZXcnLCAnZ2VvcmdpYScsICdoZWx2ZXRpY2EnLCAnbHVjaWRhJ107XHJcblx0XHRcdFF1aWxsLnJlZ2lzdGVyKEZvbnQsIHRydWUpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIEZvbnQ7XHJcblx0fVxyXG5cclxuXHRpbWFnZUhhbmRsZXIoKSB7XHJcblx0XHRjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZmlsZScpO1xyXG5cdFx0aW5wdXQuc2V0QXR0cmlidXRlKCdhY2NlcHQnLCAnaW1hZ2UvKicpO1xyXG5cdFx0aW5wdXQuY2xpY2soKTtcclxuXHJcblx0XHRpbnB1dC5vbmNoYW5nZSA9IGFzeW5jICgpID0+IHtcclxuXHRcdFx0Y29uc3QgZmlsZSA9IGlucHV0LmZpbGVzWzBdO1xyXG5cclxuXHRcdFx0Y29uc3QgaW1hZ2UgPSBhd2FpdCBpbWFnZVVwbG9hZChbZmlsZV0pO1xyXG5cclxuXHRcdFx0Ly8gU2F2ZSBjdXJyZW50IGN1cnNvciBzdGF0ZVxyXG5cdFx0XHRjb25zdCByYW5nZSA9IHRoaXMucXVpbGwuZ2V0U2VsZWN0aW9uKHRydWUpO1xyXG5cclxuXHRcdFx0Ly8gSW5zZXJ0IHVwbG9hZGVkIGltYWdlXHJcblx0XHRcdHRoaXMucXVpbGwuaW5zZXJ0RW1iZWQocmFuZ2UuaW5kZXgsICdpbWFnZScsIGAke2ltYWdlWzBdLnVybH1gKTtcclxuXHJcblx0XHRcdC8vIE1vdmUgY3Vyc29yIHRvIHJpZ2h0IHNpZGUgb2YgaW1hZ2UgKGVhc2llciB0byBjb250aW51ZSB0eXBpbmcpXHJcblx0XHRcdHRoaXMucXVpbGwuc2V0U2VsZWN0aW9uKHJhbmdlLmluZGV4ICsgMSk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGV4dC1lZGl0b3InPlxyXG5cdFx0XHRcdDxSZWFjdFF1aWxsXHJcblx0XHRcdFx0XHRyZWY9e2VsID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5xdWlsbCA9IGVsO1xyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdNw7QgdOG6oyBjaGkgdGnhur90Li4uJ1xyXG5cdFx0XHRcdFx0bW9kdWxlcz17e1xyXG5cdFx0XHRcdFx0XHR0b29sYmFyOiB7XHJcblx0XHRcdFx0XHRcdFx0Y29udGFpbmVyOiBbXHJcblx0XHRcdFx0XHRcdFx0XHRbXHJcblx0XHRcdFx0XHRcdFx0XHRcdHsgaGVhZGVyOiAnMScgfSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0eyBoZWFkZXI6ICcyJyB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7IGhlYWRlcjogWzMsIDQsIDUsIDZdIH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdHsgZm9udDogW10gfSxcclxuXHRcdFx0XHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0XHRcdFx0XHRbeyBzaXplOiBbXSB9XSxcclxuXHRcdFx0XHRcdFx0XHRcdFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZScsICdibG9ja3F1b3RlJ10sXHJcblx0XHRcdFx0XHRcdFx0XHRbeyBsaXN0OiAnb3JkZXJlZCcgfSwgeyBsaXN0OiAnYnVsbGV0JyB9XSxcclxuXHRcdFx0XHRcdFx0XHRcdFt7IGRpcmVjdGlvbjogJ3J0bCcgfV0sXHJcblx0XHRcdFx0XHRcdFx0XHRbeyBhbGlnbjogW10gfV0sXHJcblx0XHRcdFx0XHRcdFx0XHRbeyBjb2xvcjogW10gfSwgeyBiYWNrZ3JvdW5kOiBbXSB9XSxcclxuXHRcdFx0XHRcdFx0XHRcdFsnbGluaycsICdpbWFnZScsICd2aWRlbyddLFxyXG5cdFx0XHRcdFx0XHRcdFx0WydjbGVhbiddLFxyXG5cdFx0XHRcdFx0XHRcdFx0Wydjb2RlLWJsb2NrJ10sXHJcblx0XHRcdFx0XHRcdFx0XSxcclxuXHRcdFx0XHRcdFx0XHRoYW5kbGVyczoge1xyXG5cdFx0XHRcdFx0XHRcdFx0aW1hZ2U6IHRoaXMuaW1hZ2VIYW5kbGVyLFxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15Q29tcG9uZW50O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgQG5leHQvbmV4dC9uby1pbWctZWxlbWVudCAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi8uLi9zdG9yZS9HbG9iYWxTdGF0ZSc7XHJcbmltcG9ydCB7IHZhbGlkUHJvZHVjdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ZhbGlkUHJvZHVjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGltYWdlVXBsb2FkIH0gZnJvbSAnLi4vLi4vdXRpbHMvSW1hZ2VVcGxvYWQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdFF1aWxsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZWRpdG9yL1JlYWN0UXVpbGwnO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdHNNYW5hZ2VyKCkge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcblx0Y29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdFx0X2lkOiAnJyxcclxuXHRcdHRpdGxlOiAnJyxcclxuXHRcdHByaWNlT3JpZ2luOiAwLFxyXG5cdFx0cHJpY2VTYWxlOiAwLFxyXG5cdFx0aW5TdG9jazogMCxcclxuXHRcdGRlc2NyaXB0aW9uOiAnJyxcclxuXHRcdGNhdGVnb3J5OiAnJyxcclxuXHR9O1xyXG5cclxuXHRjb25zdCBbcHJvZHVjdCwgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xyXG5cdGNvbnN0IHsgdGl0bGUsIHByaWNlT3JpZ2luLCBwcmljZVNhbGUsIGluU3RvY2ssIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSB9ID0gcHJvZHVjdDtcclxuXHJcblx0Y29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbb25FZGl0LCBzZXRPbkVkaXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcblx0Y29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xyXG5cdGNvbnN0IHsgY2F0ZWdvcmllcywgYXV0aCB9ID0gc3RhdGU7XHJcblxyXG5cdGNvbnN0IHsgdXNlciB9ID0gYXV0aDtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IGdldFByb2R1Y3RFZGl0ID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGlmIChpZCkge1xyXG5cdFx0XHRcdFx0c2V0T25FZGl0KHRydWUpO1xyXG5cdFx0XHRcdFx0YXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Byb2R1Y3QvJHtpZH1gKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5lcnIpIHJldHVybjtcclxuXHRcdFx0XHRcdFx0c2V0UHJvZHVjdChyZXMuZGF0YS5wcm9kdWN0KTtcclxuXHRcdFx0XHRcdFx0c2V0SW1hZ2VzKHJlcy5kYXRhLnByb2R1Y3QuaW1hZ2VzKTtcclxuXHRcdFx0XHRcdFx0c2V0Q29udGVudChyZXMuZGF0YS5wcm9kdWN0LmNvbnRlbnQpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHNldE9uRWRpdChmYWxzZSk7XHJcblx0XHRcdFx0XHRzZXRQcm9kdWN0KGluaXRpYWxTdGF0ZSk7XHJcblx0XHRcdFx0XHRzZXRJbWFnZXMoW10pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBlcnJvcjogZXJyLm1lc3NhZ2UgfSB9KTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRnZXRQcm9kdWN0RWRpdCgpO1xyXG5cdH0sIFtpZF0pO1xyXG5cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2VJbnB1dCA9IGUgPT4ge1xyXG5cdFx0Y29uc3QgeyB2YWx1ZSwgbmFtZSB9ID0gZS50YXJnZXQ7XHJcblx0XHRzZXRQcm9kdWN0KHsgLi4ucHJvZHVjdCwgW25hbWVdOiB2YWx1ZSB9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVVcGxvYWRGaWxlID0gZSA9PiB7XHJcblx0XHRsZXQgbmV3SW1hZ2VzID0gW107XHJcblx0XHRsZXQgbnVtID0gaW1hZ2VzLmxlbmd0aDtcclxuXHRcdGxldCBlcnIgPSAnJztcclxuXHRcdGNvbnN0IGZpbGVzID0gWy4uLmUudGFyZ2V0LmZpbGVzXTtcclxuXHRcdGlmIChpbWFnZXMubGVuZ3RoID4gOSlcclxuXHRcdFx0cmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgZXJyb3I6ICdDaOG6pXAgbmjhuq1uIHThu5FpIMSRYSAxMCBow6xuaCDhuqNuaC4nIH0gfSk7XHJcblxyXG5cdFx0aWYgKGZpbGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgZXJyb3I6ICdGaWxlIGtow7RuZyB04buTbiB04bqhaS4nIH0gfSk7XHJcblxyXG5cdFx0ZmlsZXMuZm9yRWFjaChmaWxlID0+IHtcclxuXHRcdFx0aWYgKGZpbGUuc2l6ZSA+IDEwMjQgKiAxMDI0ICogNSkgcmV0dXJuIChlcnIgPSAnS8OtY2ggdGjGsOG7m2MgZmlsZSBwaOG6o2kgbmjhu48gaMahbiA1bWIuJyk7XHJcblxyXG5cdFx0XHRpZiAoZmlsZS50eXBlICE9PSAnaW1hZ2UvanBlZycgJiYgZmlsZS50eXBlICE9PSAnaW1hZ2UvcG5nJylcclxuXHRcdFx0XHRyZXR1cm4gKGVyciA9ICfEkOG7i25oIGThuqFuZyBmaWxlIHBo4bqjaSBsw6AganBlZy9wbmcuJyk7XHJcblxyXG5cdFx0XHRudW0rKztcclxuXHJcblx0XHRcdGlmIChudW0gPCAxMSkgbmV3SW1hZ2VzLnB1c2goZmlsZSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gbmV3SW1hZ2VzO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYgKGVycikgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgZXJyb3I6IGVyciB9IH0pO1xyXG5cclxuXHRcdHNldEltYWdlcyhpbWFnZXMuY29uY2F0KG5ld0ltYWdlcykpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVJlbW92ZSA9IGluZGV4ID0+IHtcclxuXHRcdGNvbnN0IG5ld0RhdGEgPSBbLi4uaW1hZ2VzXTtcclxuXHRcdG5ld0RhdGEuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdHNldEltYWdlcyhuZXdEYXRhKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyBlID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRjb25zdCBlcnJNc2cgPSB2YWxpZFByb2R1Y3QodGl0bGUsIHByaWNlT3JpZ2luLCBwcmljZVNhbGUsIGluU3RvY2ssIGRlc2NyaXB0aW9uLCBjb250ZW50LCBjYXRlZ29yeSwgaW1hZ2VzKTtcclxuXHJcblx0XHRpZiAoZXJyTXNnKSByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBlcnJvcjogZXJyTXNnIH0gfSk7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBsb2FkaW5nOiB0cnVlIH0gfSk7XHJcblxyXG5cdFx0XHRsZXQgbWVkaWE7XHJcblx0XHRcdGNvbnN0IGltZ05ld1VSTCA9IGltYWdlcy5maWx0ZXIoaW1nID0+ICFpbWcudXJsKTtcclxuXHRcdFx0Y29uc3QgaW1nT2xkVVJMID0gaW1hZ2VzLmZpbHRlcihpbWcgPT4gaW1nLnVybCk7XHJcblx0XHRcdGlmIChpbWdOZXdVUkwubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdG1lZGlhID0gYXdhaXQgaW1hZ2VVcGxvYWQoaW1hZ2VzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCFpZCkge1xyXG5cdFx0XHRcdGF3YWl0IGF4aW9zXHJcblx0XHRcdFx0XHQucG9zdChcclxuXHRcdFx0XHRcdFx0Jy9hcGkvcHJvZHVjdCcsXHJcblx0XHRcdFx0XHRcdHsgLi4ucHJvZHVjdCwgY29udGVudCwgaW1hZ2VzOiBtZWRpYSA/IFsuLi5pbWdPbGRVUkwsIC4uLm1lZGlhXSA6IGltZ09sZFVSTCB9LFxyXG5cdFx0XHRcdFx0XHR7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYXV0aC50b2tlbiB9IH1cclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdC50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5lcnIpIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHJcblx0XHRcdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgc3VjY2VzczogcmVzLmRhdGEubXNnIH0gfSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRhd2FpdCBheGlvc1xyXG5cdFx0XHRcdFx0LnB1dChcclxuXHRcdFx0XHRcdFx0YC9hcGkvcHJvZHVjdC8ke2lkfWAsXHJcblx0XHRcdFx0XHRcdHsgLi4ucHJvZHVjdCwgY29udGVudCwgaW1hZ2VzOiBtZWRpYSA/IFsuLi5pbWdPbGRVUkwsIC4uLm1lZGlhXSA6IGltZ09sZFVSTCB9LFxyXG5cdFx0XHRcdFx0XHR7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYXV0aC50b2tlbiB9IH1cclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdC50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5lcnIpIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KTtcclxuXHJcblx0XHRcdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgc3VjY2VzczogcmVzLmRhdGEubXNnIH0gfSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c2V0UHJvZHVjdChpbml0aWFsU3RhdGUpO1xyXG5cdFx0XHRzZXRJbWFnZXMoW10pO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgZXJyb3I6IGVyci5tZXNzYWdlIH0gfSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0aWYgKCF1c2VyIHx8IHVzZXIucm9sZSAhPT0gJ2FkbWluJykgcmV0dXJuIG51bGw7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nJz5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PHRpdGxlPlF14bqjbiBsw70gc+G6o24gcGjhuqltPC90aXRsZT5cclxuXHRcdFx0PC9IZWFkPlxyXG5cclxuXHRcdFx0PGZvcm0gY2xhc3NOYW1lPSdyb3cnIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtMTInPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2lucHV0LWdyb3VwIG15LTQnPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY3VzdG9tLWZpbGUgYm9yZGVyIHJvdW5kZWQnPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0nZmlsZSdcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY3VzdG9tLWZpbGUtaW5wdXQnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlVXBsb2FkRmlsZX1cclxuXHRcdFx0XHRcdFx0XHRcdG11bHRpcGxlXHJcblx0XHRcdFx0XHRcdFx0XHRhY2NlcHQ9J2ltYWdlLyonXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2lucHV0LWdyb3VwLXByZXBlbmQnPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAtdGV4dCc+VOG6o2kg4bqjbmg8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JvdyBpbWctdXAgcGwtNCc+XHJcblx0XHRcdFx0XHRcdHtpbWFnZXMubWFwKChpbWcsIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9J2ZpbGVfaW1nJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtpbWcudXJsID8gaW1nLnVybCA6IFVSTC5jcmVhdGVPYmplY3RVUkwoaW1nKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0YWx0PSfhuqJuaCBtw7QgdOG6oydcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdpbWctdGh1bWJuYWlsIHJvdW5kZWQnXHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZShpbmRleCl9Plg8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW1peGVkLXNwYWNlcy1hbmQtdGFic1xyXG5cdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTEyJz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1ncm91cC1wcmVwZW5kIG15LTQnPlxyXG5cdFx0XHRcdFx0XHQ8c2VsZWN0XHJcblx0XHRcdFx0XHRcdFx0bmFtZT0nY2F0ZWdvcnknXHJcblx0XHRcdFx0XHRcdFx0aWQ9J2NhdGVnb3J5J1xyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtjYXRlZ29yeX1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZSA9PiBoYW5kbGVDaGFuZ2VJbnB1dChlKX1cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2N1c3RvbS1zZWxlY3QgdGV4dC1jYXBpdGFsaXplJ1xyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nYWxsJz4tLSBEYW5oIG3hu6VjIC0tPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0e2NhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24ga2V5PXtjYXRlZ29yeS5faWR9IHZhbHVlPXtjYXRlZ29yeS5faWR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Y2F0ZWdvcnkubmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRuYW1lPSdwcm9kdWN0X2lkJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17aWQgPyBwcm9kdWN0Ll9pZCA6ICcnfVxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nUHJvZHVjdCBJRCB04buxIHThuqFvIOG7nyBEQidcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSd3LTEwMCBkLWJsb2NrIG10LTQgcC0yJ1xyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ZSA9PiBoYW5kbGVDaGFuZ2VJbnB1dChlKX1cclxuXHRcdFx0XHRcdFx0ZGlzYWJsZWRcclxuXHRcdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J215LTInPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWxcclxuXHRcdFx0XHRcdFx0XHRodG1sRm9yPSd0aXRsZSdcclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17eyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDVweCknIH19XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSd0ZXh0LWluZm8nXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRUw6puIHPhuqNuIHBo4bqpbVxyXG5cdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdG5hbWU9J3RpdGxlJ1xyXG5cdFx0XHRcdFx0XHRcdGlkPSd0aXRsZSdcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGl0bGV9XHJcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J1TDqm4gc+G6o24gcGjhuqltJ1xyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ndy0xMDAgZC1ibG9jayBwLTInXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2UgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoZSl9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ndGV4dC1pbmZvJ1xyXG5cdFx0XHRcdFx0XHRcdFx0aHRtbEZvcj0ncHJpY2VPcmlnaW4nXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDVweCknIH19XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0R2nDoSBn4buRY1xyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSdudW1iZXInXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPSdwcmljZU9yaWdpbidcclxuXHRcdFx0XHRcdFx0XHRcdGlkPSdwcmljZU9yaWdpbidcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtwcmljZU9yaWdpbiA9PT0gMCA/ICcnIDogcHJpY2VPcmlnaW59XHJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nR2nDoSBn4buRYydcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ndy0xMDAgZC1ibG9jayBwLTInXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZSA9PiBoYW5kbGVDaGFuZ2VJbnB1dChlKX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ndGV4dC1pbmZvJ1xyXG5cdFx0XHRcdFx0XHRcdFx0aHRtbEZvcj0ncHJpY2VTYWxlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSg1cHgpJyB9fVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdEdpw6Ega2h1eeG6v24gbcOjaVxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSdudW1iZXInXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPSdwcmljZVNhbGUnXHJcblx0XHRcdFx0XHRcdFx0XHRpZD0ncHJpY2VTYWxlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3ByaWNlU2FsZSA9PT0gMCA/ICcnIDogcHJpY2VTYWxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0dpw6Egc2FsZSdcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ndy0xMDAgZC1ibG9jayBwLTInXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZSA9PiBoYW5kbGVDaGFuZ2VJbnB1dChlKX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J215LTInPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWxcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3RleHQtaW5mbydcclxuXHRcdFx0XHRcdFx0XHRodG1sRm9yPSdpblN0b2NrJ1xyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoNXB4KScgfX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdEtob1xyXG5cdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHR0eXBlPSdudXVtYmVyJ1xyXG5cdFx0XHRcdFx0XHRcdG5hbWU9J2luU3RvY2snXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2luU3RvY2sgPT09IDAgPyAnJyA6IGluU3RvY2t9XHJcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0tobydcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3ctMTAwIGQtYmxvY2sgcC0yJ1xyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtlID0+IGhhbmRsZUNoYW5nZUlucHV0KGUpfVxyXG5cdFx0XHRcdFx0XHRcdGlkPSdpblN0b2NrJ1xyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWxcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3RleHQtaW5mbydcclxuXHRcdFx0XHRcdFx0XHRodG1sRm9yPSdkZXNjcmlwdGlvbidcclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17eyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDVweCknIH19XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRNw7QgdOG6oyBuZ+G6r25cclxuXHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PHRleHRhcmVhXHJcblx0XHRcdFx0XHRcdFx0bmFtZT0nZGVzY3JpcHRpb24nXHJcblx0XHRcdFx0XHRcdFx0aWQ9J2Rlc2NyaXB0aW9uJ1xyXG5cdFx0XHRcdFx0XHRcdHJvd3M9JzQnXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2Rlc2NyaXB0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ndy0xMDAnXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2UgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoZSl9XHJcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J03DtCB04bqjIHPhuqNuIHBo4bqpbSBuZ+G6r24gZ+G7jW4uJ1xyXG5cdFx0XHRcdFx0XHQ+PC90ZXh0YXJlYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWVkaXRvcicgc3R5bGU9e3sgbWluSGVpZ2h0OiAnNTAwcHgnIH19PlxyXG5cdFx0XHRcdFx0XHQ8UmVhY3RRdWlsbCBzZXRDb250ZW50PXtzZXRDb250ZW50fSBjb250ZW50PXtjb250ZW50ID8gY29udGVudCA6IHByb2R1Y3QuY29udGVudH0gLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG4gYnRuLWluZm8gbXQtMiBweS0yIG1sLTMgbWItNCcgc3R5bGU9e3sgbWluV2lkdGg6IDIwMCB9fT5cclxuXHRcdFx0XHRcdHtvbkVkaXQgPyAnQ+G6rXAgbmjhuq10IHPhuqNuIHBo4bqpbScgOiAnxJDEg25nIHPhuqNuIHBo4bqpbSd9XHJcblx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzTWFuYWdlcjtcclxuIiwiZXhwb3J0IGNvbnN0IEFDVElPTlMgPSB7XHJcblx0Tk9USUZZOiAnTk9USUZZJyxcclxuXHRBVVRIOiAnQVVUSCcsXHJcblx0QUREX0NBUlQ6ICdBRERfQ0FSVCcsXHJcblx0QUREX01PREFMOiAnQUREX01PREFMJyxcclxuXHRBRERfT1JERVJTOiAnQUREX09SREVSUycsXHJcblx0QUREX1NISVBQSU5HX0FERFJFU1M6ICdBRERfU0hJUFBJTkdfQUREUkVTUycsXHJcblx0QUREX0NBVEVHT1JJRVM6ICdBRERfQ0FURUdPUklFUycsXHJcblx0QUREX0VNQUlMOiAnQUREX0VNQUlMJyxcclxuXHRBRERfR1VFU1Q6ICdBRERfR1VFU1QnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFRvQ2FydCA9IChwcm9kdWN0LCBjYXJ0KSA9PiB7XHJcblx0aWYgKHByb2R1Y3QuaW5TdG9jayA8IDEpIHJldHVybiB7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGVycm9yOiAnWGluIGzhu5dpLCBz4bqjbiBwaOG6qW0gdOG6oW0gdGjhu51pIGjhur90IGjDoG5nIScgfSB9O1xyXG5cclxuXHRjb25zdCBjaGVjayA9IGNhcnQuZXZlcnkoaXRlbSA9PiB7XHJcblx0XHRyZXR1cm4gaXRlbS5faWQgIT09IHByb2R1Y3QuX2lkO1xyXG5cdH0pO1xyXG5cdFxyXG5cdGlmICghY2hlY2spIHtcclxuXHRcdGNvbnN0IG5ld0RhdGEgPSBbLi4uY2FydF07XHJcblx0XHRuZXdEYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcblx0XHRcdGlmIChpdGVtLl9pZCA9PT0gcHJvZHVjdC5faWQpIGl0ZW0ucXVhbnRpdHkgKz0gMTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIHsgdHlwZTogJ0FERF9DQVJUJywgcGF5bG9hZDogbmV3RGF0YSB9O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHsgdHlwZTogJ0FERF9DQVJUJywgcGF5bG9hZDogWy4uLmNhcnQsIHsgLi4ucHJvZHVjdCwgcXVhbnRpdHk6IDEgfV0gfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWNyZWFzZSA9IChkYXRhLCBpZCkgPT4ge1xyXG5cdGNvbnN0IG5ld0RhdGEgPSBbLi4uZGF0YV07XHJcblx0bmV3RGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0aWYgKGl0ZW0uX2lkID09PSBpZCkgaXRlbS5xdWFudGl0eSAtPSAxO1xyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4geyB0eXBlOiAnQUREX0NBUlQnLCBwYXlsb2FkOiBuZXdEYXRhIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaW5jcmVhc2UgPSAoZGF0YSwgaWQpID0+IHtcclxuXHRjb25zdCBuZXdEYXRhID0gWy4uLmRhdGFdO1xyXG5cdG5ld0RhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuXHRcdGlmIChpdGVtLl9pZCA9PT0gaWQpIGl0ZW0ucXVhbnRpdHkgKz0gMTtcclxuXHR9KTtcclxuXHRyZXR1cm4geyB0eXBlOiAnQUREX0NBUlQnLCBwYXlsb2FkOiBuZXdEYXRhIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlSXRlbUZyb21DYXJ0ID0gKGRhdGEsIGlkKSA9PiB7XHJcblx0Y29uc3QgbmV3RGF0YSA9IFsuLi5kYXRhXTtcclxuXHRuZXdEYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcblx0XHRpZiAoaXRlbS5faWQgPT09IGlkKSBuZXdEYXRhLnNwbGljZShpbmRleCwgMSk7XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiB7IHR5cGU6ICdBRERfQ0FSVCcsIHBheWxvYWQ6IG5ld0RhdGEgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVJdGVtID0gKGRhdGEsIGlkLCBwb3N0LCB0eXBlKSA9PiB7XHJcblx0Y29uc3QgbmV3RGF0YSA9IGRhdGEubWFwKGl0ZW0gPT4gKGl0ZW0uX2lkID09PSBpZCA/IHBvc3QgOiBpdGVtKSk7XHJcblx0cmV0dXJuIHsgdHlwZSwgcGF5bG9hZDogbmV3RGF0YSB9O1xyXG59OyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcmVkdWNlcnMgfSBmcm9tICcuL1JlZHVjZXJzJztcclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblx0Y29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdFx0bm90aWZ5OiB7fSxcclxuXHRcdGF1dGg6IHt9LFxyXG5cdFx0Y2FydDogW10sXHJcblx0XHRtb2RhbDoge30sXHJcblx0XHRvcmRlcnM6IFtdLFxyXG5cdFx0c2hpcHBpbmdBZGRyZXNzOiB7fSxcclxuXHRcdGNhdGVnb3JpZXM6IFtdLFxyXG5cdFx0dGVtcEVtYWlsOiB7fSxcclxuXHRcdGd1ZXN0OiB7fSxcclxuXHR9O1xyXG5cdGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VycywgaW5pdGlhbFN0YXRlKTtcclxuXHRjb25zdCB7IGNhcnQsIGF1dGggfSA9IHN0YXRlO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgZ2V0Rmlyc3RMb2dpbiA9IGFzeW5jICgpID0+IHtcclxuXHRcdFx0Y29uc3QgZmlyc3RMb2dpbiA9IENvb2tpZXMuZ2V0KCd1c2VySW5mb0luaXQnKTtcclxuXHRcdFx0aWYgKGZpcnN0TG9naW4pIHtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0YXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2F1dGgvYWNjZXNzVG9rZW4nKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5lcnIpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gQ29va2llcy5yZW1vdmUoJ3VzZXJJbmZvSW5pdCcpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnQVVUSCcsXHJcblx0XHRcdFx0XHRcdFx0cGF5bG9hZDogeyB0b2tlbjogcmVzLmRhdGEuYWNjZXNzX3Rva2VuLCB1c2VyOiByZXMuZGF0YS51c2VyIH0sXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGVycm9yOiBlcnIubWVzc2FnZSB9IH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdGdldEZpcnN0TG9naW4oKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBjYXJ0X21pbnRsYWxhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnRfbWludGxhbGEnKTtcclxuXHRcdGlmIChjYXJ0X21pbnRsYWxhKSBkaXNwYXRjaCh7IHR5cGU6ICdBRERfQ0FSVCcsIHBheWxvYWQ6IEpTT04ucGFyc2UoY2FydF9taW50bGFsYSkgfSk7XHJcblxyXG5cdFx0Y29uc3Qgc2hpcHBpbmcgPSBDb29raWVzLmdldCgnc2hpcHBpbmdBZGRyZXNzJyk7XHJcblx0XHRpZiAoc2hpcHBpbmcpIGRpc3BhdGNoKHsgdHlwZTogJ0FERF9TSElQUElOR19BRERSRVNTJywgcGF5bG9hZDogSlNPTi5wYXJzZShzaGlwcGluZykgfSk7XHJcblxyXG5cdFx0YXhpb3MuZ2V0KCcvYXBpL2NhdGVnb3JpZXMnKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdGlmIChyZXMuZGF0YS5lcnIpIHtcclxuXHRcdFx0XHRyZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBlcnJvcjogcmVzLmRhdGEuZXJyIH0gfSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHRcdHR5cGU6ICdBRERfQ0FURUdPUklFUycsXHJcblx0XHRcdFx0cGF5bG9hZDogcmVzLmRhdGEuY2F0ZWdvcmllcyxcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydF9taW50bGFsYScsIEpTT04uc3RyaW5naWZ5KGNhcnQpKTtcclxuXHR9LCBbY2FydF0pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgZ2V0T3JkZXJzID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRpZiAoYXV0aC50b2tlbikge1xyXG5cdFx0XHRcdGF3YWl0IGF4aW9zLmdldCgnL2FwaS9vcmRlcicsIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBhdXRoLnRva2VuIH0gfSkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmVycikgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgZXJyb3I6IHJlcy5kYXRhLmVyciB9IH0pO1xyXG5cdFx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnQUREX09SREVSUycsIHBheWxvYWQ6IHJlcy5kYXRhLm9yZGVycyB9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdGdldE9yZGVycygpO1xyXG5cdH0sIFthdXRoLnRva2VuXSk7XHJcblxyXG5cdHJldHVybiA8RGF0YUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PntjaGlsZHJlbn08L0RhdGFDb250ZXh0LlByb3ZpZGVyPjtcclxufTtcclxuIiwiaW1wb3J0IHsgQUNUSU9OUyB9IGZyb20gJy4vQWN0aW9ucyc7XHJcblxyXG5jb25zdCByZWR1Y2VycyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBBQ1RJT05TLk5PVElGWTpcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIG5vdGlmeTogYWN0aW9uLnBheWxvYWQgfTtcclxuXHRcdGNhc2UgQUNUSU9OUy5BVVRIOlxyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgYXV0aDogYWN0aW9uLnBheWxvYWQgfTtcclxuXHRcdGNhc2UgQUNUSU9OUy5BRERfQ0FSVDpcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIGNhcnQ6IGFjdGlvbi5wYXlsb2FkIH07XHJcblx0XHRjYXNlIEFDVElPTlMuQUREX01PREFMOlxyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgbW9kYWw6IGFjdGlvbi5wYXlsb2FkIH07XHJcblx0XHRjYXNlIEFDVElPTlMuQUREX09SREVSUzpcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIG9yZGVyczogYWN0aW9uLnBheWxvYWQgfTtcclxuXHRcdGNhc2UgQUNUSU9OUy5BRERfU0hJUFBJTkdfQUREUkVTUzpcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHNoaXBwaW5nQWRkcmVzczogYWN0aW9uLnBheWxvYWQgfTtcclxuXHRcdGNhc2UgQUNUSU9OUy5BRERfQ0FURUdPUklFUzpcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIGNhdGVnb3JpZXM6IGFjdGlvbi5wYXlsb2FkIH07XHJcblx0XHRjYXNlIEFDVElPTlMuQUREX0VNQUlMOlxyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgdGVtcEVtYWlsOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG5cdFx0Y2FzZSBBQ1RJT05TLkFERF9HVUVTVDpcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIGd1ZXN0OiBhY3Rpb24ucGF5bG9hZCB9O1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgeyByZWR1Y2VycyB9O1xyXG4iLCJleHBvcnQgY29uc3QgaW1hZ2VVcGxvYWQgPSBhc3luYyBpbWFnZXMgPT4ge1xyXG5cdGxldCBpbWdBcnIgPSBbXTtcclxuXHRmb3IgKGNvbnN0IGl0ZW0gb2YgaW1hZ2VzKSB7XHJcblx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cdFx0Zm9ybURhdGEuYXBwZW5kKCdmaWxlJywgaXRlbSk7XHJcblx0XHRmb3JtRGF0YS5hcHBlbmQoJ3VwbG9hZF9wcmVzZXQnLCBwcm9jZXNzLmVudi5jbG91ZF91cGRhdGVfcHJlc2V0KTtcclxuXHRcdGZvcm1EYXRhLmFwcGVuZCgnY2xvdWRfbmFtZScsIHByb2Nlc3MuZW52LmNsb3VkX25hbWUpO1xyXG5cclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHByb2Nlc3MuZW52LmNsb3VkX2FwaSwge1xyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0Ym9keTogZm9ybURhdGEsXHJcblx0XHR9KTtcclxuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cdFx0aW1nQXJyLnB1c2goeyBwdWJsaWNfaWQ6IGRhdGEucHVibGljX2lkLCB1cmw6IGRhdGEuc2VjdXJlX3VybCB9KTtcclxuXHR9XHJcblx0cmV0dXJuIGltZ0FycjtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHZhbGlkUHJvZHVjdCA9ICh0aXRsZSwgcHJpY2VPcmlnaW4sIHByaWNlU2FsZSwgaW5TdG9jaywgZGVzY3JpcHRpb24sIGNvbnRlbnQsIGNhdGVnb3J5LCBpbWFnZXMpID0+IHtcclxuXHRpZiAoXHJcblx0XHQhdGl0bGUgfHxcclxuXHRcdCFwcmljZU9yaWdpbiB8fFxyXG5cdFx0IXByaWNlU2FsZSB8fFxyXG5cdFx0IWluU3RvY2sgfHxcclxuXHRcdCFkZXNjcmlwdGlvbiB8fFxyXG5cdFx0IWNvbnRlbnQgfHxcclxuXHRcdGNhdGVnb3J5ID09PSAnYWxsJyB8fFxyXG5cdFx0Y2F0ZWdvcnkgPT09ICcnIHx8XHJcblx0XHRpbWFnZXMubGVuZ3RoID09PSAwXHJcblx0KSB7XHJcblx0XHRyZXR1cm4gJ1Z1aSBsw7JuZyDEkWnhu4FuIMSR4bqneSDEkeG7pyBjw6FjIHRyxrDhu51uZyAnO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZFBob25lKHBob25lKSB7XHJcblx0Y29uc3QgcmUgPSAvXlsrXS9nO1xyXG5cdHJldHVybiByZS50ZXN0KHBob25lKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoZW1haWwpIHtcclxuXHRjb25zdCByZSA9XHJcblx0XHQvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcblx0cmV0dXJuIHJlLnRlc3QoU3RyaW5nKGVtYWlsKS50b0xvd2VyQ2FzZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQcmljZShwcmljZSkge1xyXG5cdHJldHVybiBwcmljZS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcuJyk7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1xdWlsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwiZHluYW1pYyIsIlJlYWN0UXVpbGwiLCJzc3IiLCJpbWFnZVVwbG9hZCIsIk15Q29tcG9uZW50IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiZWRpdG9ySHRtbCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJodG1sIiwic2V0U3RhdGUiLCJzZXRDb250ZW50IiwiY2ZnRm9udCIsIlF1aWxsIiwiRm9udCIsImltcG9ydCIsIndoaXRlbGlzdCIsInJlZ2lzdGVyIiwiaW1hZ2VIYW5kbGVyIiwiaW5wdXQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjbGljayIsIm9uY2hhbmdlIiwiZmlsZSIsImZpbGVzIiwiaW1hZ2UiLCJyYW5nZSIsInF1aWxsIiwiZ2V0U2VsZWN0aW9uIiwiaW5zZXJ0RW1iZWQiLCJpbmRleCIsInVybCIsInNldFNlbGVjdGlvbiIsInJlbmRlciIsImVsIiwidG9vbGJhciIsImNvbnRhaW5lciIsImhlYWRlciIsImZvbnQiLCJzaXplIiwibGlzdCIsImRpcmVjdGlvbiIsImFsaWduIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiaGFuZGxlcnMiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkIiwiRGF0YUNvbnRleHQiLCJ2YWxpZFByb2R1Y3QiLCJheGlvcyIsInVzZVJvdXRlciIsIlByb2R1Y3RzTWFuYWdlciIsInJvdXRlciIsImlkIiwicXVlcnkiLCJpbml0aWFsU3RhdGUiLCJfaWQiLCJ0aXRsZSIsInByaWNlT3JpZ2luIiwicHJpY2VTYWxlIiwiaW5TdG9jayIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsImltYWdlcyIsInNldEltYWdlcyIsIm9uRWRpdCIsInNldE9uRWRpdCIsImNvbnRlbnQiLCJkaXNwYXRjaCIsImNhdGVnb3JpZXMiLCJhdXRoIiwidXNlciIsImdldFByb2R1Y3RFZGl0IiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJlcnIiLCJ0eXBlIiwicGF5bG9hZCIsImVycm9yIiwibWVzc2FnZSIsImhhbmRsZUNoYW5nZUlucHV0IiwiZSIsInZhbHVlIiwibmFtZSIsInRhcmdldCIsImhhbmRsZVVwbG9hZEZpbGUiLCJuZXdJbWFnZXMiLCJudW0iLCJsZW5ndGgiLCJmb3JFYWNoIiwicHVzaCIsImNvbmNhdCIsImhhbmRsZVJlbW92ZSIsIm5ld0RhdGEiLCJzcGxpY2UiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImVyck1zZyIsImxvYWRpbmciLCJtZWRpYSIsImltZ05ld1VSTCIsImZpbHRlciIsImltZyIsImltZ09sZFVSTCIsInBvc3QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwic3VjY2VzcyIsIm1zZyIsInB1dCIsInJvbGUiLCJjdXJzb3IiLCJtYXAiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ0cmFuc2Zvcm0iLCJtaW5IZWlnaHQiLCJtaW5XaWR0aCIsIkFDVElPTlMiLCJOT1RJRlkiLCJBVVRIIiwiQUREX0NBUlQiLCJBRERfTU9EQUwiLCJBRERfT1JERVJTIiwiQUREX1NISVBQSU5HX0FERFJFU1MiLCJBRERfQ0FURUdPUklFUyIsIkFERF9FTUFJTCIsIkFERF9HVUVTVCIsImFkZFRvQ2FydCIsImNhcnQiLCJjaGVjayIsImV2ZXJ5IiwiaXRlbSIsInF1YW50aXR5IiwiZGVjcmVhc2UiLCJpbmNyZWFzZSIsImRlbGV0ZUl0ZW1Gcm9tQ2FydCIsInVwZGF0ZUl0ZW0iLCJDb29raWVzIiwiY3JlYXRlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJyZWR1Y2VycyIsIkRhdGFQcm92aWRlciIsImNoaWxkcmVuIiwibm90aWZ5IiwibW9kYWwiLCJvcmRlcnMiLCJzaGlwcGluZ0FkZHJlc3MiLCJ0ZW1wRW1haWwiLCJndWVzdCIsImdldEZpcnN0TG9naW4iLCJmaXJzdExvZ2luIiwicmVtb3ZlIiwiYWNjZXNzX3Rva2VuIiwiY2FydF9taW50bGFsYSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzaGlwcGluZyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJnZXRPcmRlcnMiLCJhY3Rpb24iLCJpbWdBcnIiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicHJvY2VzcyIsImVudiIsImNsb3VkX3VwZGF0ZV9wcmVzZXQiLCJjbG91ZF9uYW1lIiwiZmV0Y2giLCJjbG91ZF9hcGkiLCJtZXRob2QiLCJib2R5IiwianNvbiIsInB1YmxpY19pZCIsInNlY3VyZV91cmwiLCJ2YWxpZFBob25lIiwicGhvbmUiLCJyZSIsInRlc3QiLCJ2YWxpZGF0ZUVtYWlsIiwiZW1haWwiLCJTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsImRpc3BsYXlQcmljZSIsInByaWNlIiwidG9TdHJpbmciLCJyZXBsYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==