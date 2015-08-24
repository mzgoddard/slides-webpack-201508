require('!style-loader/url!file-loader!reveal.js/css/reveal.css');
require('reveal.js/css/theme/simple.css');
require('../vendor/prism/prism.css');

var jQuery = require('exports-loader?jQuery!script-loader!jquery');

jQuery('body').append('<div class="reveal"><div class="slides">');

var slides = require.context('.', true, /^\.\/\d+(-\d+)?\/index$/);
slides.keys().forEach((key) => {
  if (/\d+-\d+/.test(key)) {
    if (/\d+-1/.test(key)) {
      jQuery('.slides').append('<section>');
    }
    jQuery('<section>').appendTo('.slides > section:last').html(slides(key));
  }
  else {
    jQuery('.slides > section:last').before('<section>');
    jQuery('.slides > section:eq(-2)').append(slides(key));
  }
});

require('./init/line-highlights');
require('./init/reveal');
