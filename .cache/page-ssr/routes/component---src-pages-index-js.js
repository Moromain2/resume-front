"use strict";
exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./src/components/experience-card.js":
/*!*******************************************!*\
  !*** ./src/components/experience-card.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _images_icons_arrow_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/icons/arrow-icon.svg */ "./src/images/icons/arrow-icon.svg");
/* harmony import */ var _images_icons_arrow_icon_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_icons_arrow_icon_svg__WEBPACK_IMPORTED_MODULE_2__);




const ExperienceCardStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link).withConfig({
  displayName: "experience-card__ExperienceCardStyles"
})(["display:flex;justify-content:space-between;align-items:center;margin-bottom:.75em;padding:1.5em 1em;border:1px solid ", ";border-radius:1em;&:last-of-type{margin-bottom:0;}.tags-list{display:flex;li{margin-right:.25em;}}.arrow-icon{width:1.5em;height:1.5em;path{fill:", ";}}"], props => props.theme.mainText, props => props.theme.mainText);

const ExperienceCard = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ExperienceCardStyles, {
    to: props.slug
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "card-subheader"
  }, props.company, ", ", props.location), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "card-header"
  }, props.title), props.endDate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "card-label"
  }, props.startDate.charAt(0).toUpperCase() + props.startDate.slice(1), " \xE0 ", props.endDate) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "card-label"
  }, "Depuis ", props.startDate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "tags-list"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_images_icons_arrow_icon_svg__WEBPACK_IMPORTED_MODULE_2___default()), {
    className: "arrow-icon"
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExperienceCard);

/***/ }),

/***/ "./src/pages/index.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/index.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Head": () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_experience_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/experience-card */ "./src/components/experience-card.js");



const IndexPage = ({
  data
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "experience-cards-container"
  }, data.experiencesQuery.nodes.map(experience => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_experience_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: experience.id,
    company: experience.experience_company,
    location: experience.experience_location,
    title: experience.experience_title,
    startDate: experience.experience_start_date,
    endDate: experience.experience_end_date,
    slug: 'experiences/' + experience.slug // tags={experience.tag}

  }))));
};

const query = "1267082071";
const Head = ({
  data
}) => {
  const seoData = data.seoQuery.nodes[0].SEO;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, seoData.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "description",
    content: seoData.description
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map