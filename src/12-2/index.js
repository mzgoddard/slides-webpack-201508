var $ = require('jquery');

var $div = $('<div>');
$div.append(require('div-loader!./index.html.md'));
$div.append('<audio src="' + require('./inception.mp3') + '">');

$div.find('*:first').on('click', function() {
  $div.find('audio')[0].play();
});

module.exports = $div;
