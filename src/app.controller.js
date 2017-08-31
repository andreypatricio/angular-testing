'use strict';

angular.module('app').controller('AppController', AppController);

function AppController($scope, AppService) {
	var vm = this;
	
	$scope.simpleValue = 'jasmine';
	vm.service = AppService;
	
	vm.returnValue = function(valor) {
		return valor;
	};
	
}