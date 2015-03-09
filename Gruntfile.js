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
      files: ['src/*.js'],
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

    jasmine : {
      src : 'src/*.js',
      options : {
        specs : 'spec/*.js'
      }
    },

    watch: {
      scripts: {
        files: ['src/*', 'spec/*', 'Gruntfile.js'],
        tasks: ['default'],
        options: {
          interrupt: true,
        },
      },
    },

    karma: {
      options: {
        frameworks: ['jasmine'],
        files: ['spec/*.js', 'src/*.js'],
      },
      unit: {
        browsers: ['PhantomJS', 'Safari', 'Firefox'],
      },
      travis: {
        browsers: ['PhantomJS'],
        singleRun: true,
        reporters: ['coverage'],
        coverageReporter: {
          type: "lcov",
          dir: "coverage/"
        },
        preprocessors: {
          "src/*js": "coverage"
        },
      }
    },

    coveralls: {
      options: {
        coverageDir: 'coverage/',
        force: true,
        recursive: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-karma-coveralls');

  grunt.registerTask('test', ['jshint', 'karma:travis']);
  grunt.registerTask('default', ['test', 'uglify', 'coveralls']);
};
