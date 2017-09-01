module.exports = function(config) {
  config.set({
	  
	basePath: '',
	
    frameworks: ['jasmine', 'angular-filesort'],
    
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-route/angular-route.js',
      'src/**/*.js',
      'src/**/*.html',
      'tests/*.spec.js'
    ],
    
    exclude: [
    ],
    
    preprocessors: {
        '**/*.html': ['ng-html2js'],
        '**/*.js': ['sourcemap']
    },
    
    reporters: ['dots', 'junit'],
    junitReporter: {
        outputFile: 'test-results.xml'
    },
    
    ngHtml2JsPreprocessor: {
        stripPrefix: 'src/',
        moduleName: 'app.templates'
    },
    
    port: 9876,
    
    colors: true,
    
    logLevel: config.LOG_DEBUG,
    
    autoWatch: true,
    
    browsers: ['PhantomJS'],
//    browsers: ['Chrome'],
//    browsers: ['Firefox'],
    
    singleRun: true
  })
}
