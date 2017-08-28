describe('Eu como desenvolvedor, desejo testar as funcionalidades do controller da aplicação (app.controller.js).', function(){
	
	var $controller,
		scope,
		vm;

	beforeEach(module('app'));
	
	beforeEach(inject(function (_$controller_, _$rootScope_){
		scope = _$rootScope_.$new();
		$controller = _$controller_;
		
		vm = $controller('AppController', {
			$scope : scope,
		});
	}));
	
	describe('Ao validar as funcionalidades do controller', function(){
		
		it('o controller deve estar devidamente instanciado.', function() {
			expect(scope).toBeDefined();
			expect(scope.simpleValue).toBe('jasmine')
		});
		
		it('o $scope do meu controller está acessível.', function() {
			expect(vm).toBeDefined();
		});

		it('a function returnValue deve retornar o mesmo string informado.', function() {
			expect(vm.returnValue("Hello controller!")).toBe("Hello controller!");
		});
		
		it('a function returnValue deve retornar o mesmo integer informado.', function() {
			expect(vm.returnValue(1)).toBe(1);
		});
		
	});
	
});