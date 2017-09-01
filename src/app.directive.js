'use strict';

angular.module('app').directive('helloDirective', function () {
    return {
    	templateUrl: 'directive.html',
//    	template: '<h1>Say hello to my directive, {{1 + 1}} times</h1>',
//    	template: require('directive.html'),
        restrict: 'E',
        replace: true,
    };
});