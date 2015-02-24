module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    uglify: {
      grouped: {
        options: {
          mangle: false,
          compress: false
        },
        files: {
          'date-enhancer.js': ['src/*.js']
        }
      },
      minified: {
        options: {
          mangle: true,
          compress: {
            sequences: true,
            properties: true,
            dead_code: true,
            booleans: true,
            loops: true,
            if_return: true,
            join_vars: true,
            drop_console: true,
          }
        },
        files: {
          'date-enhancer.min.js': ['src/*.js']
        }
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    watch: {
      scripts: {
        files: '**/*.js',
        tasks: ['jshint', 'watch'],
        options: {
          interrupt: true,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'uglify', 'qunit']);
};
