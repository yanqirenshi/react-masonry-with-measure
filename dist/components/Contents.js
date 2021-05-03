"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Contents;

var _react = _interopRequireDefault(require("react"));

var _reactMasonryComponent = _interopRequireDefault(require("react-masonry-component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Contents(props) {
  var options = props.options;
  var column_width = options.columnWidth;
  var gutter = options.gutter;
  var colnum = Math.floor(props.w / (column_width + gutter));
  var w = (column_width + gutter) * colnum - gutter;
  var style = {
    width: w || 'auto',
    marginLeft: 'auto',
    marginRight: 'auto'
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: style
  }, /*#__PURE__*/_react["default"].createElement(_reactMasonryComponent["default"], {
    options: options
  }, props.children));
}