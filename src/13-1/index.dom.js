var $ = require('jquery');

module.exports = $('<div>')
  .append(require('./index.html.md'))
  .append(require('./me'))
  .append(require('./albums.html'));
