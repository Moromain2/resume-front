"use strict";
exports.id = "component---src-pages-education-js";
exports.ids = ["component---src-pages-education-js"];
exports.modules = {

/***/ "./src/components/education-card.js":
/*!******************************************!*\
  !*** ./src/components/education-card.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");


const EducationCardStyles = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "education-card__EducationCardStyles"
})(["margin-bottom:.75em;padding:1.5em 1em;border:1px solid ", ";border-radius:1em;&:last-of-type{margin-bottom:0;}.card-label{margin-bottom:0;}"], props => props.theme.mainText);

const EducationCard = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EducationCardStyles, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "card-subheader"
  }, props.school), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "card-header"
  }, props.diploma), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "card-label"
  }, props.gradYear));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EducationCard);

/***/ }),

/***/ "./src/pages/education.js?export=default":
/*!***********************************************!*\
  !*** ./src/pages/education.js?export=default ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Head": () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_education_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/education-card */ "./src/components/education-card.js");



const EducationPage = ({
  data
}) => {
  const educationData = data.educationQuery.nodes;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, educationData.map(education => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_education_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: education.id,
    school: education.education_university,
    diploma: education.education_diploma,
    gradYear: education.education_graduation_date
  }))));
};

const query = "427963668";
const Head = ({
  data
}) => {
  const seoData = data.seoQuery.nodes[0].SEO;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, seoData.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: seoData.description
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EducationPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-education-js.js.map