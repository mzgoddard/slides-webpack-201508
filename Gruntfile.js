module.exports = function(grunt) {
  grunt.loadTasks('tasks');

  grunt.registerTask('default', ['copy', 'webpack-dev-server', 'connect', 'watch']);
  grunt.registerTask('build', ['copy', 'webpack']);
};
