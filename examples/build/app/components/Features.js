'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'section',
    { className: css(section) },
    _react2.default.createElement(
      'h2',
      null,
      'Features'
    ),
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        'React server side rendering.'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Modular CSS'
      ),
      _react2.default.createElement(
        'li',
        null,
        'AMP ready!'
      )
    )
  );
};
//# sourceMappingURL=Features.js.map