"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.onRenderBody = void 0;

var _react = _interopRequireDefault(require("react"));

var _jsxFileName = "/Users/paulwhitaker/Dev/gatsby-plugin-portal/src/gatsby-ssr.js";

var onRenderBody = function onRenderBody(_ref, pluginOptions) {
  var setPostBodyComponents = _ref.setPostBodyComponents;
  setPostBodyComponents([_react.default.createElement("div", {
    key: pluginOptions.key ? pluginOptions.key : 'portal',
    id: pluginOptions.id ? pluginOptions.id : 'portal',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, pluginOptions.text)]);
};

exports.onRenderBody = onRenderBody;