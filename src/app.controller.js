'use strict';

angular.module('app').controller('AppController', AppController);

function AppController($scope, AppService) {
	var vm = this;
	
	$scope.simpleValue = 'jasmine';
	$scope.serviceValue = AppService.value;
	
	console.log('AppService.get: '+ AppService.value);
	
	vm.returnValue = function(valor) {
		return valor;
	};
	
}