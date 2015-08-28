// 08-2/index.js
var $ = require('jquery');

var $div = $('<div>');

function update() {
  $div
    .empty()
    .append(require('!raw-loader!prism-loader?!../08-demo-1/webpack.config.example.js'));
}

update();

if (module.hot) {
  module.hot.accept([
    '!raw-loader!prism-loader?!../08-demo-1/webpack.config.example.js'
  ], update);
}

module.exports = $div;
