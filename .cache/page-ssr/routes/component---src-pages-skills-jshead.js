"use strict";
exports.id = "component---src-pages-skills-jshead";
exports.ids = ["component---src-pages-skills-jshead"];
exports.modules = {

/***/ "./src/components/skill-card.js":
/*!**************************************!*\
  !*** ./src/components/skill-card.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");


const SkillCardStyles = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "skill-card__SkillCardStyles"
})(["border:1px solid ", ";border-radius:1em;padding:1em .5em;text-align:center;.skill-icon{display:flex;justify-content:center;margin-bottom:.5em;svg{width:auto;height:2.5em;path{fill:", ";}}}h2{text-transform:uppercase;font-size:.625em;line-height:1.4em;margin-bottom:.8em;}meter{margin-bottom:.25em;width:100%;&::-webkit-meter-bar{background:", ";padding:1px;display:flex;align-items:center;}&::-webkit-meter-optimum-value{background:", ";height:.25em;border-radius:1em;}}.tag{width:fit-content;margin:auto;}"], props => props.theme.mainText, props => props.theme.mainText, props => props.theme.mainText, props => props.theme.mainBackground);

const SkillCard = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SkillCardStyles, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    dangerouslySetInnerHTML: {
      __html: props.icon
    },
    className: "skill-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, props.title), props.progress ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meter", {
    id: props.id,
    max: "100",
    value: props.progress
  }, props.progress, " %"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tag"
  }, props.progress, " %")) : null);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkillCard);

/***/ }),

/***/ "./src/pages/skills.js?export=head":
/*!*****************************************!*\
  !*** ./src/pages/skills.js?export=head ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Head": () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _components_skill_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/skill-card */ "./src/components/skill-card.js");



const SkillsPageStyles = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "skills__SkillsPageStyles"
})([".skill-category{font-size:1em;font-weight:900;color:", ";margin-bottom:1em;}.skill-cards-container{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:1em;margin-bottom:2em;&:last-of-type{margin-bottom:0;}@media screen and (min-width:640px){grid-template-columns:repeat(4,1fr);}@media screen and (min-width:960px){grid-template-columns:repeat(5,1fr);}@media screen and (min-width:1200px){grid-template-columns:repeat(6,1fr);}}"], props => props.theme.cardLabel);

const SkillsPage = ({
  data
}) => {
  const languages = data.languageQuery.nodes;
  const hobbies = data.hobbyQuery.nodes;
  const webTechs = data.webTechQuery.nodes;
  const softwares = data.softwareQuery.nodes;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SkillsPageStyles, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "skill-category"
  }, "Informatique"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "skill-cards-container"
  }, softwares.map(software => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_skill_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: software.id,
    icon: software.skill_icon.localFile.svg.content,
    title: software.skill_title,
    progress: software.skill_rating,
    category: software.category
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "skill-category"
  }, "Technologies Web"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "skill-cards-container"
  }, webTechs.map(webTech => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_skill_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: webTech.id,
    icon: webTech.skill_icon.localFile.svg.content,
    title: webTech.skill_title,
    progress: webTech.skill_rating,
    category: webTech.category
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "skill-category"
  }, "Langues"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "skill-cards-container"
  }, languages.map(language => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_skill_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: language.id,
    icon: language.skill_icon.localFile.svg.content,
    title: language.skill_title,
    progress: language.skill_rating,
    category: language.category
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "skill-category"
  }, "Hobbies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "skill-cards-container"
  }, hobbies.map(hobby => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_skill_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: hobby.id,
    icon: hobby.skill_icon.localFile.svg.content,
    title: hobby.skill_title,
    progress: hobby.skill_rating,
    category: hobby.category
  }))))));
};

const query = "3928680654";
const Head = ({
  data
}) => {
  const seoData = data.seoQuery.nodes[0].SEO;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, seoData.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: seoData.description
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkillsPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-skills-jshead.js.map