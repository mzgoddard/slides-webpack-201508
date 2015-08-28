var $ = require('jquery');

var $div = $('<div>');

function update() {
  var content =
    require('!raw-loader!prism-loader?lang=css!../08-demo-2/style.css') +
    require('!raw-loader!prism-loader?lang=css!../08-demo-2/hover.css');
  $div.html(content);
}

update();

if (module.hot) {
  module.hot.accept([
    '!raw-loader!prism-loader?lang=css!../08-demo-2/style.css',
    '!raw-loader!prism-loader?lang=css!../08-demo-2/hover.css',
  ], update);
}

module.exports = $div;
