describe('Eu como desenvolvedor, desejo testar as funcionalidades do serviço da aplicação (app.service.js).', function(){

	var service;
	
	beforeEach(module('app'));
	
	beforeEach(inject(function(_AppService_) {
		service = _AppService_;
	}));
	
	it('Então o service deve estar devidamente instanciado', function() {
		expect(service.show()).toBe("Hello Service!");
	});

});
