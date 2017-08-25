describe('Eu como desenvolvedor, desejo testar as funcionalidades da classe app.controller.js', function(){
	
	var $controller, vm;

	beforeEach(module('app'));
	
	beforeEach(inject(function (_$controller_){
		$controller = _$controller_;
		vm = $controller('AppController');
	}));
	
	describe('E ao validar as funcionalidades da function devolver...', function(){

		it('a function deve retornar o mesmo string informado.', function() {
			expect(vm.devolver("Hello World!")).toBe("Hello World!");
		});
		
		it('a function deve retornar o mesmo integer informado.', function() {
			expect(vm.devolver(1)).toBe(1);
		});
		
	});
	

	
	
});

describe('Eu como desenvolvedor, desejo testar as funcionalidades da classe app.controller.js', function(){
	
	
});