'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateMarkup = undefined;

var _amphtmlValidator = require('amphtml-validator');

var _amphtmlValidator2 = _interopRequireDefault(_amphtmlValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = require('debug')('rampt:validator');

var validateMarkup = exports.validateMarkup = function validateMarkup(markup, ignoreErrors) {
  debug('validating markup.');
  return _amphtmlValidator2.default.getInstance().then(function (validator) {
    var validationResult = validator.validateString(markup, 'AMP');
    if (!ignoreErrors && validationResult.status !== 'PASS') {
      validationResult.errors.forEach(function (error) {
        debug(error.severity + ' ' + error.params + '\n            line:' + error.code + ' col:' + error.col + ' ' + error.specUrl);
      });
      throw validationResult.errors;
    }
    debug('AMP validation status %s', validationResult.status);
    return markup;
  });
};
//# sourceMappingURL=ampvalidator.js.map