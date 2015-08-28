// 05/demo/index.js
var $ = require('jquery');
var template = require('./albums.hbs');
require('./style.css');

var data = require('./albums.inline.json');
// Let webpack handle the image files.
var albums = require.context('./albums');
data.albums.forEach(function(album) {
  album.artFile = albums('./' + album.artFile.split('/')[1]);
});

$('body').append(template(data));

require('./spin-on-hover');
