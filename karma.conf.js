module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['mocha'],
    files: [
      'dest/**/*.js',
      'test/**/*.spec.js'
    ]
  });
};