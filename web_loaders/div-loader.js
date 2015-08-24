// div-loader.js
var loaderUtils = require('loader-utils');

module.exports = function() {};
module.exports.pitch = function(remainingRequest) {
  return [
    'var $ = require("jquery");',
    'var $div = $("<div>");',
    'function update() {',
    '  var content = require(' +
      loaderUtils.stringifyRequest(this, '!!' + remainingRequest) +
      ');',
    '  $div.html(content);',
    '}',
    'update();',
    'if (module.hot) {',
    '  module.hot.accept(' +
      loaderUtils.stringifyRequest(this, '!!' + remainingRequest) +
      ', update);',
    '}',
    'module.exports = $div;',
  ].join('\n');
};
