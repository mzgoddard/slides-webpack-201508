var $ = require('jquery');
module.exports =
  $('<div>')
    .append(require('!div-loader!raw-loader!prism-loader!../06-demo'))
    .append(require('!div-loader!raw-loader!prism-loader!../06-demo/albums.inline.json'));
