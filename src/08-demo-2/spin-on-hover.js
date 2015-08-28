// spin-on-hover.js
var forEach =
  Array.prototype.forEach.call.bind(Array.prototype.forEach);
forEach(document.querySelectorAll('img'), function(el) {
  var start;
  var target;
  el.addEventListener('mouseover', function() {
    target = Infinity;
    if (el.style.transform) { return; }
    start = Date.now();
    var step = function() {
      var t = ((Date.now() - start) / 1000) * (33/ 60);
      if (t < target) {
        requestAnimationFrame(step);
        el.style.transform = 'rotateZ(' + t * 360 + 'deg)';
      }
      else {
        el.style.transform = '';
      }
    };
    step();
  });

  el.addEventListener('mouseout', function() {
    target = Math.ceil(((Date.now() - start) / 1000) * (33/ 60));
  });
});
