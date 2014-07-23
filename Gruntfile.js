module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      target : {
        files: {
          'js/animals.min.js' : ['js/animals.js'],
          'js/index.min.js' : ['js/index.js']
        }
      }
    },
    jshint : {
      all : ["js/animals.js", "js/index.js"]
    },
    jasmine : {
      animal : {
        src : "js/animals.js",
        options : {
          specs : "spec/animalsSpec.js",
          keepRunner : true,
          outfile: "output/animalsTest.html"
        }
      },
      index : {
        src: "js/index.js",
        options : {
          specs : "spec/indexSpec.js",
          keepRunner : true,
          outfile: "output/indexTest.html"
        }
      }
    },
     bowercopy: {
        options: {
            destPrefix : "js",
            srcPrefix : "bower_components/"
        },
        libs : {
          options : {

          },
          files : {
          "jquery.min.js" : "jquery/dist/jquery.min.js"
          }   
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.loadNpmTasks('grunt-bowercopy');

  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['bowercopy', 'jshint', 'jasmine', 'uglify']);
  // grunt.registerTask('test', ['jasmine']);

};