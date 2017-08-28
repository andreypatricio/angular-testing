'use strict';

angular.module('app').service('AppService', AppService);

function AppService() {
	
	this.show = function () {
        return "Hello Service!";
    }
	
}
