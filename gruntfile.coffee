module.exports = (grunt) ->
  require('time-grunt')(grunt)

  require('load-grunt-config') grunt,
    jitGrunt: true

  grunt.registerTask 'default', ['deploy']

  grunt.registerTask 'deploy', ['gh-pages']
