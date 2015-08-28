// 08-2/index.js
// Leave this file verbose for reference by a later slide.
var $ = require('jquery');

var $div = $('<div>');

function update() {
  $div
    .empty()
    .append(require(
      '!raw-loader!prism-loader?lang=css!../08-demo-1/style.css'
    ));
}

update();

if (module.hot) {
  module.hot.accept([
    '!raw-loader!prism-loader?lang=css!../08-demo-1/style.css',
  ], update);
}

module.exports = $div;
