var path = require('path');

var webpack = require('webpack');

function evalConfig(grunt, filepath) {
  return eval([
    'var module = {exports: {}};',
    '(function(module, exports, __dirname) {',
    grunt.file.read(filepath),
    '})(module, module.exports, path.dirname(filepath));',
    'module.exports'
  ].join('\n'));
}

function addUglify(config) {
  config.plugins = config.plugins || [];
  var exists = config.plugins.reduce(function(carry, plugin) {
    return carry || plugin instanceof webpack.optimize.UglifyJsPlugin;
  }, false);
  if (exists) { return config; }

  config.plugins = config.plugins.concat(
    new webpack.optimize.UglifyJsPlugin()
  );

  return config;
}

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-webpack');

  var host = 'localhost';
  var port = 8081;
  var demos = grunt.file.expand({
    filter: function(filepath) {
      return true;
    },
  }, 'src/{*/demo,*-demo{,-*}}/webpack.config.js');
  var demoIds = demos.map(function(demo) { return /\d+(-\d+)?[/-]demo(-\d+)?/.exec(demo)[0]; });
  var ports = demos.map(function() {
    return port++;
  });
  var proxies = demoIds.reduce(function(carry, demo, index) {
    carry['/' + demo + '/*'] = 'http://' + host + ':' + ports[index];
    return carry;
  }, {});
  var hotRegex = /08-/;

  var webpackDevServerConfig = {
    slides: {
      inline: true,
      hot: true,
      host: 'localhost',
      // port: port++,
      contentBase: 'dist',
      webpack: evalConfig(grunt, 'webpack.config.js'),
      proxy: proxies,
    },
  };
  webpackDevServerConfig.slides.webpack.plugins = webpackDevServerConfig.slides.webpack.plugins || [];

  var webpackConfig = {
    slides: evalConfig(grunt, 'webpack.config.js'),
  };
  addUglify(webpackConfig.slides);

  demoIds.forEach(function(id, index) {
    webpackDevServerConfig[id] = {
      inline: true,
      host: host,
      port: ports[index],
      contentBase: 'dist',
      publicPath: '/' + id + '/',
      webpack: evalConfig(grunt, demos[index]),
    };
    webpackDevServerConfig[id].webpack.plugins = webpackDevServerConfig[id].webpack.plugins || [];
    if (hotRegex.test(id)) {
      webpackDevServerConfig[id].hot = true;
    }

    webpackConfig[id] = evalConfig(grunt, demos[index]);
    addUglify(webpackConfig[id]);
  });

  grunt.config.set('webpack-dev-server', webpackDevServerConfig);
  grunt.config.set('webpack', webpackConfig);
};
