module.exports = function(grunt) {

  grunt.registerTask('default', 'sass');
  grunt.registerTask('watch', [ 'watch' ]);
 
  grunt.initConfig({
    sass: {
      style: {
        options: {
          style: "nested"
        },
        files: {
          "css/style.css": "style.scss"
        }
      }
    },
    watch: {
      css: {
        files: ['*.scss', '*.html'],
        tasks: ['sass:style'],
        options: {
          livereload: true,
        }
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
 
};