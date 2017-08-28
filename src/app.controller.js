'use strict';

angular.module('app').controller('AppController', AppController);

function AppController($scope) {
	var vm = this;
	
	$scope.simpleValue = 'jasmine';
	
	vm.returnValue = function(valor) {
		return valor;
	};
	
}