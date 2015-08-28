var $ = require('jquery');

module.exports = $('<div>')
  .append(require('!div-loader!raw-loader!prism-loader!../03-demo'))
  .append(require('!div-loader!raw-loader!prism-loader!../03-demo/spin-on-hover'));
