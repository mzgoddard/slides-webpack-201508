module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.config.set('watch', {
    Gruntfile: {
      files: ['Gruntfile.js', 'tasks/*.js', '!tasks/webpack.js', 'webpack.config.js'],
      options: {
        spawn: false,
        reload: true,
      },
    },
    webpack: {
      files: ['webpack.config.js', 'tasks/webpack.js', 'src/*/demo/webpack.config.js'],
      tasks: 'webpack-dev-server',
      options: {
        spawn: false,
        reload: true,
      },
    },
    index: {
      files: ['index.html', 'src/*/demo/{index.html,*.wav}', 'tasks/copy.js'],
      tasks: 'copy',
      options: {
        spawn: false,
        reload: true,
      },
    },
  });
};
