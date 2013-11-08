'use strict';

module.exports = function(grunt) {
  var files;

  files = {
    gruntfile: 'Gruntfile.js',
    jshintrc: '.jshintrc',
    tests: [ 'test/**/*.js', 'test/**/**/*.js' ],
    lib: [ 'lib/**/*.js', 'lib/**/**/*.js' ],
    lib_test: [].concat(this.tests, this.lib)
  };

  // Project configuration.
  grunt.initConfig({
    jshint: {
      options: files.jshintrc,
      gruntfile: {
        src: files.gruntfile
      },
      lib_test: {
        src: files.lib_test
      }
    },
    watch: {
      gruntfile: {
        files: '<%= files.gruntfile %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= files.lib_test %>',
        tasks: ['jshint:lib_test', 'mochaTest']
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          require: [
            "./test/test-setup"
          ]
        },
        src: files.tests
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');

  // Default task.
  grunt.registerTask('default', ['jshint', 'mochaTest']);

};
