describe('Eu como desenvolvedor, desejo testar as funcionalidades do serviço da aplicação (app.service.js).', function(){
	
	var service;

	beforeEach(module('app'));
	
	beforeEach(inject(function (_AppService_){
		service = _AppService_;
	}));
	
	describe('Ao validar as funcionalidades do serviço', function(){
		
		it('o mesmo deve estar devidamente estanciado.', function() {
			expect(service).toBeDefined();
		});
		
	});
	
});