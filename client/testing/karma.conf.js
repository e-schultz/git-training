module.exports = function (config) {

  config.set({
    basePath: '/client',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: ['**/*.js'],
    exclude: [],
    reporters: ['progress'],
    port: 9999,
    colors: true,
    logLevel: config.LOG_ERROR,
    autoWatch: true,
    browsers: ['Chrome'], // Alternatively: 'PhantomJS'
    captureTimeout: 6000,
    singleRun: false
  });
};
