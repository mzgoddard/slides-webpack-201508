// spin-on-hover.js
var forEach =
  Array.prototype.forEach.call.bind(Array.prototype.forEach);
forEach(document.querySelectorAll('img'), function(el) {
  el.addEventListener('mouseover', function() {
    var start = Date.now();
    var step = function() {
      var t = ((Date.now() - start) / 1000) * (33 / 60);
      if (t < 10) {
        requestAnimationFrame(step);
        el.style.transform = 'rotateZ(' + t * 360 + 'deg)';
      }
      else {
        el.style.transform = '';
      }
    };
    step();
  });
});
