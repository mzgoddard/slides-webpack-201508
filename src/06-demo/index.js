// index.js
var $ = require('jquery');
var template = require('./albums.hbs');

$('body').append(template(require('./albums.inline.json')));

require('./spin-on-hover');
