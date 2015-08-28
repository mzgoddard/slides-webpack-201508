var $ = require('jquery');

var $div = $('<div>');
var $example = $('<div>').appendTo($div);

$div.append('<iframe src="08-demo-2" width="95%" height="95%">');

function update() {
  var content = require('!raw-loader!prism-loader!../08-demo-2/hover.css');
  $example.html(content);
}

update();

if (module.hot) {
  module.hot.accept('!raw-loader!prism-loader!../08-demo-2/hover.css', update);
}

module.exports = $div;
