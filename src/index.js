require('!style-loader/url!file-loader!reveal.js/css/reveal.css');
require('reveal.js/css/theme/simple.css');
require('../vendor/prism/prism.css');

var jQuery = require('jquery');

jQuery('body').append('<div class="reveal"><div class="slides">');

require('./init/slides');

require('./init/line-highlights');
require('./init/reveal');
