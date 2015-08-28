var $ = require('jquery');

module.exports =
  $('<div>')
    .append(require('./list-1'))
    .append('<br>')
    .append(require('!div-loader!raw-loader!prism-loader!./require-1'))
    .append('<br>')
    .append(require('./list-2'));
