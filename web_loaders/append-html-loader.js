var loaderUtils = require('loader-utils');

module.exports = function() {};
module.exports.pitch = function(remainingRequest) {
  return [
    'var jQuery = require("exports-loader?jQuery!script-loader!jquery");',
    'var content = require(' + loaderUtils.stringifyRequest(this, "!!" + remainingRequest) + ');',
    'jQuery("<section>").appendTo(".slides").append(content);',
  ].join('\n');
};
