var jQuery = require('jquery');

var update = function(slides) {
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
};

var slides = require.context('..', true, /^\.\/\d+(-\d+)?\/index$/);
update(slides);

// if (module.hot) {
//   module.hot.accept(slides.id, function() {
//     console.log('hot accept', slides.id);
//     jQuery('.slides').empty();
//     var newSlides = require.context('..', true, /^\.\/\d+(-\d+)?\/index$/);
//     update(newSlides);
//   });
// }
