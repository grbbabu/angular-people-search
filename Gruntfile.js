module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        sassFiles: 'app/**/*.scss',

        jshint: {
            all: ['app/**/*.js', 'test/**/*spec.js'],
            options: {
                reporter: require('jshint-stylish')
            }
        },

        sass: {
            dist: {
                files: {
                    'app/site.css': 'app/site.scss'
                }
            }
        },

        watch: {
            sass: {
                tasks: ['sass'],
                files: 'app/**/*.scss'
            }

        },

        copy: {
            main: {
                src: [
                    'app/**/*.js',
                    'app/**/*.json',
                    'app/**/*.html',
                    'app/**/*.css',
                    'app/**/*.png',
                    'bower_components/**/*'
                ],
                expand: true,
                cwd: './',
                dest: 'build'
            }
        },

        serve: {
            path: '/build',
            options: {
                port: 8081
            },
            tasks: ['default']
        },

        clean: [
            'app/**/*.css',
            'build'
        ]
    });


    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-serve');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('dev', ['default', 'watch']);
    grunt.registerTask('default', ['jshint', 'clean', 'sass', 'copy']);
    grunt.registerTask('server', ['default', 'serve']);
};