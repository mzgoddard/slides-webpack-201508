module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.config.set('connect', {
    slides: {
      options: {
        base: 'dist',
      },
    },
  });
};
