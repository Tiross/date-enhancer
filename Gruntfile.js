module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          hostname: '127.0.0.1',
          base: '.',
          port: 8080
        }
      }
    },

    jshint: {
      files: ['src/**/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    uglify: {
      grouped: {
        options: {
          mangle: false,
          compress: false,
          beautify: true
        },
        files: {
          'build/date-enhancer.js': ['src/*.js']
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
          'build/date-enhancer.min.js': ['src/*.js']
        }
      }
    },

    qunit: {
      files: ['test/**/*.html'],
      options: {
        urls: [
          'http://127.0.0.1:8080/tests/index.html'
        ]
      }
    },

    watch: {
      scripts: {
        files: ['*', '*/*', '!node_modules/*', '!build/*', '!*.md'],
        tasks: ['default'],
        options: {
          interrupt: true,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', ['uglify', 'connect', 'qunit']);
  grunt.registerTask('default', ['jshint', 'test']);
};
