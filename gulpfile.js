var gulp = require('gulp');
var rg = require('rangle-gulp');

var karmaVendorFiles = [
  'client/bower_components/angular/angular.js',
  'client/bower_components/angular-mocks/angular-mocks.js',
  'client/bower_components/sinon-chai/lib/sinon-chai.js',
  'client/bower_components/koast-angular/dist/koast.js',
  'client/testing/lib/q.js',
  'client/testing/test-utils.js',
  'client/bower_components/lodash/dist/lodash.js',
  'client/bower_components/sinon-chai/lib/sinon-chai.js'
];

gulp.task('karma-ci', rg.karma({
  // files: specify which folders (optional)
  // karmaConf: specify which karma config file (optional)
  karmaConf: 'client/testing/karma-ci.conf.js',
  vendor: karmaVendorFiles
}));

gulp.task('karma', rg.karma({
  // files: specify which folders (optional)
  // karmaConf: specify which karma config file (optional)
  //karmaConf: 'client/testing/karma.conf.js',
  vendor: karmaVendorFiles
}));