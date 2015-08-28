module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.config.set('copy', {
    index: {
      src: 'index.html',
      dest: 'dist',
      expand: true,
    },
    demoIndexes: {
      cwd: 'src',
      src: '{*/demo,*-demo{,-*}}/index.html',
      dest: 'dist',
      expand: true,
    },
    demoAssets: {
      cwd: 'src',
      src: '{*/demo,*-demo{,-*}}/*/*.{wav,jpg}',
      filter: function(filepath) {
        return parseInt(/\d+/.exec(filepath)[0]) < 7;
      },
      dest: 'dist',
      expand: true,
    },
  });
};
