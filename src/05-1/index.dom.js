var $ = require('jquery');

module.exports =
  $('<div>')
    .append(require('!div-loader!raw-loader!prism-loader?lang=markup!../05-demo/albums.hbs'))
    .append(require('!div-loader!raw-loader!prism-loader!../05-demo/index.js'));
