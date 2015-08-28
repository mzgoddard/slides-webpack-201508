var $ = require('jquery');
var highlightLines = require('../../vendor/prism/highlight-lines');

var $div = $('<div>');

function update() {
  var content = require('!raw-loader!prism-loader!../10-demo/webpack.config.js');
  $div.html(content);
}

update();

if (module.hot) {
  module.hot.accept('!raw-loader!prism-loader!../10-demo/webpack.config.js', update);
}

module.exports = $div;
