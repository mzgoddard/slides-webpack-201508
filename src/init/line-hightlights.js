var highlightLines = require('../../vendor/prism/highlight-lines');

jQuery('pre[data-line]').each(function() {
  highlightLines(this, this.dataset.line);
});
