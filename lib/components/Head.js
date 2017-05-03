'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _innerHTML = require('../utils/innerHTML');

var _innerHTML2 = _interopRequireDefault(_innerHTML);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var boilerplateStyles = 'body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}';
var boilerplateStylesNoScript = 'body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}';

var Head = function Head(_ref) {
  var metas = _ref.metas,
      scripts = _ref.scripts,
      styles = _ref.styles,
      canonical = _ref.canonical,
      title = _ref.title;
  return _react2.default.createElement(
    'head',
    null,
    _react2.default.createElement('meta', { charSet: 'utf-8' }),
    _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width,minimum-scale=1,initial-scale=1' }),
    _react2.default.createElement(
      'title',
      null,
      title
    ),
    _react2.default.createElement('script', { async: true, src: 'https://cdn.ampproject.org/v0.js' }),
    _react2.default.createElement('link', { rel: 'canonical', href: canonical }),
    [metas, scripts],
    _react2.default.createElement(
      'style',
      { 'amp-boilerplate': '' },
      boilerplateStyles
    ),
    _react2.default.createElement(
      'noscript',
      null,
      _react2.default.createElement(
        'style',
        { 'amp-boilerplate': '' },
        boilerplateStylesNoScript
      )
    ),
    styles ? _react2.default.createElement('style', _extends({ 'amp-custom': '' }, (0, _innerHTML2.default)(styles))) : null
  );
};

Head.propTypes = {
  metas: _react.PropTypes.array,
  scripts: _react.PropTypes.array,
  styles: _react.PropTypes.string,
  canonical: _react.PropTypes.string.isRequired,
  title: _react.PropTypes.string
};

exports.default = Head;
//# sourceMappingURL=Head.js.map