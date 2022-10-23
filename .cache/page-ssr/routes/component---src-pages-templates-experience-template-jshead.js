exports.id = "component---src-pages-templates-experience-template-jshead";
exports.ids = ["component---src-pages-templates-experience-template-jshead"];
exports.modules = {

/***/ "./src/pages/templates/experience-template.js?export=head":
/*!****************************************************************!*\
  !*** ./src/pages/templates/experience-template.js?export=head ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Head": () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _images_icons_close_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/icons/close-icon.svg */ "./src/images/icons/close-icon.svg");
/* harmony import */ var _images_icons_close_icon_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_icons_close_icon_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_icons_arrow_nav_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/icons/arrow-nav-icon.svg */ "./src/images/icons/arrow-nav-icon.svg");
/* harmony import */ var _images_icons_arrow_nav_icon_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_icons_arrow_nav_icon_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");






const ExperiencePageStyles = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "experience-template__ExperiencePageStyles"
})([".experience-page-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5em;.experience-breadcrumbs{display:flex;align-items:center;li{font-size:1em;margin-right:.125em;font-weight:900;color:", ";&:last-of-type{margin-right:0;}&.current-page-breadcrumb{color:", ";}&.arrow-nav{display:flex;justify-content:center;align-items:center;svg{height:.75em;width:.75em;}path{fill:", ";}}}}.close-page-button{height:2.5em;width:2.5em;border:1px solid ", ";background-color:", ";border-radius:.5em;display:flex;justify-content:center;align-items:center;cursor:pointer;.close-icon{height:1.75em;width:1.75em;svg{height:1.75em;width:1.75em;path{fill:", ";}}}}}h1{margin-bottom:.1em;}h2{color:", ";font-size:1em;margin-bottom:1em;}ul.tasks-list{padding-left:1.5em;li{list-style-type:circle;padding-left:.5em;line-height:1.5em;}}"], props => props.theme.cardLabel, props => props.theme.accentColor, props => props.theme.cardLabel, props => props.theme.mainText, props => props.theme.mainBackground, props => props.theme.mainText, props => props.theme.cardLabel);
const pageContentMotion = {
  hidden: {
    opacity: 0,
    y: 160
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: .35
    }
  }
};

const experiencePage = ({
  data
}) => {
  var _experience$task;

  const experience = data.strapiExperience;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ExperiencePageStyles, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "experience-page-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "experience-breadcrumbs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, "Experiences")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "arrow-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_images_icons_arrow_nav_icon_svg__WEBPACK_IMPORTED_MODULE_3___default()), null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "current-page-breadcrumb"
  }, experience.experience_company, ", ", experience.experience_location)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "close-page-button",
    onClick: () => (0,gatsby__WEBPACK_IMPORTED_MODULE_1__.navigate)(-1)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "close-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_images_icons_close_icon_svg__WEBPACK_IMPORTED_MODULE_2___default()), null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
    variants: pageContentMotion,
    initial: "hidden",
    animate: "show"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "page-header"
  }, experience.experience_title), experience.experience_end_date ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "card-label"
  }, experience.experience_start_date.charAt(0).toUpperCase() + experience.experience_start_date.slice(1), " \xE0 ", experience.experience_end_date) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "card-label"
  }, "Depuis ", experience.experience_start_date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, experience.experience_description.data.experience_description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "tasks-list"
  }, (_experience$task = experience.task) === null || _experience$task === void 0 ? void 0 : _experience$task.map(task => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: task.id
  }, task.task)))))));
};

const query = "4249491833";
const Head = ({
  data
}) => {
  const seoData = data.strapiExperience.SEO;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, seoData.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: seoData.description
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (experiencePage);

/***/ }),

/***/ "./src/images/icons/arrow-nav-icon.svg":
/*!*********************************************!*\
  !*** ./src/images/icons/arrow-nav-icon.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function ArrowNavIcon (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M5.23 8.99997C5.07298 8.99905 4.91793 8.96497 4.775 8.89997C4.62041 8.83183 4.48871 8.72064 4.39561 8.57966C4.30252 8.43869 4.25197 8.2739 4.25 8.10497V3.89497C4.25197 3.72605 4.30252 3.56126 4.39561 3.42028C4.48871 3.27931 4.62041 3.16811 4.775 3.09997C4.95287 3.01596 5.15077 2.9836 5.34613 3.00658C5.5415 3.02957 5.72648 3.10697 5.88 3.22997L8.43 5.33497C8.53 5.41458 8.61075 5.51572 8.66626 5.63085C8.72177 5.74599 8.75059 5.87216 8.75059 5.99997C8.75059 6.12779 8.72177 6.25396 8.66626 6.36909C8.61075 6.48423 8.53 6.58536 8.43 6.66497L5.88 8.76997C5.69619 8.91904 5.46666 9.00026 5.23 8.99997Z","fill":"#82969B"}));
}

ArrowNavIcon.defaultProps = {"width":"12","height":"12","viewBox":"0 0 12 12","fill":"none"};

module.exports = ArrowNavIcon;

ArrowNavIcon.default = ArrowNavIcon;


/***/ }),

/***/ "./src/images/icons/close-icon.svg":
/*!*****************************************!*\
  !*** ./src/images/icons/close-icon.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function CloseIcon (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M13.4099 12.0002L17.7099 7.71019C17.8982 7.52188 18.004 7.26649 18.004 7.00019C18.004 6.73388 17.8982 6.47849 17.7099 6.29019C17.5216 6.10188 17.2662 5.99609 16.9999 5.99609C16.7336 5.99609 16.4782 6.10188 16.2899 6.29019L11.9999 10.5902L7.70994 6.29019C7.52164 6.10188 7.26624 5.99609 6.99994 5.99609C6.73364 5.99609 6.47824 6.10188 6.28994 6.29019C6.10164 6.47849 5.99585 6.73388 5.99585 7.00019C5.99585 7.26649 6.10164 7.52188 6.28994 7.71019L10.5899 12.0002L6.28994 16.2902C6.19621 16.3831 6.12182 16.4937 6.07105 16.6156C6.02028 16.7375 5.99414 16.8682 5.99414 17.0002C5.99414 17.1322 6.02028 17.2629 6.07105 17.3848C6.12182 17.5066 6.19621 17.6172 6.28994 17.7102C6.3829 17.8039 6.4935 17.8783 6.61536 17.9291C6.73722 17.9798 6.86793 18.006 6.99994 18.006C7.13195 18.006 7.26266 17.9798 7.38452 17.9291C7.50638 17.8783 7.61698 17.8039 7.70994 17.7102L11.9999 13.4102L16.2899 17.7102C16.3829 17.8039 16.4935 17.8783 16.6154 17.9291C16.7372 17.9798 16.8679 18.006 16.9999 18.006C17.132 18.006 17.2627 17.9798 17.3845 17.9291C17.5064 17.8783 17.617 17.8039 17.7099 17.7102C17.8037 17.6172 17.8781 17.5066 17.9288 17.3848C17.9796 17.2629 18.0057 17.1322 18.0057 17.0002C18.0057 16.8682 17.9796 16.7375 17.9288 16.6156C17.8781 16.4937 17.8037 16.3831 17.7099 16.2902L13.4099 12.0002Z","fill":"#F5FFFF"}));
}

CloseIcon.defaultProps = {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none"};

module.exports = CloseIcon;

CloseIcon.default = CloseIcon;


/***/ })

};
;
//# sourceMappingURL=component---src-pages-templates-experience-template-jshead.js.map