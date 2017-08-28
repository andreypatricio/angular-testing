describe('Eu como desenvolvedor, desejo testar as funcionalidades do serviço da aplicação (app.service.js).', function(){

	var service, v2, v3;
	
	beforeEach(module('app'));

	beforeEach(inject(function(_AppService_) {
		service = _AppService_
	}));

	it('Então o controller deve ser corretamente injetado', function() {
		expect(service.show()).toBe("Hello Service!");
	});

});
