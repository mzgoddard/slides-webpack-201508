// prism-loader.js
var loaderUtils = require('loader-utils');

var prism = require('../vendor/prism/prism');

module.exports = function(content) {
  var query = loaderUtils.parseQuery(this.query);
  var language = query.lang || query.language || 'javascript';
  var preAttrs = ' class="language-' + language + '"';
  return '<pre' + preAttrs + '>' +
    prism.highlight(content, prism.languages[language]) +
    '</pre>';
};
