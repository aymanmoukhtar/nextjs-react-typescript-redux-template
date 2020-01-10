webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/Layout.tsx":
/*!***********************************!*\
  !*** ./src/components/Layout.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/home */ "./src/reducers/home.ts");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _jsxFileName = "C:\\Personal\\Work\\next-demo\\src\\components\\Layout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];





var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};
var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_4__["combineReducers"])({
  home: _reducers_home__WEBPACK_IMPORTED_MODULE_3__["homeReducer"]
});
var store = Object(redux__WEBPACK_IMPORTED_MODULE_4__["createStore"])(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__());

function withLayout(Component) {
  return function (props) {
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
      store: store,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("div", {
      style: layoutStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "NextJS Template")), __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }))));
  };
}

;
/* harmony default export */ __webpack_exports__["default"] = (withLayout);

/***/ })

})
//# sourceMappingURL=index.js.f1a346b83a2bea6efe0a.hot-update.js.map