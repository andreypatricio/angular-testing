describe('app controller', function(){
	
	var $controller, vm;

	beforeEach(module('app'));
	
	beforeEach(inject(function (_$controller_){
		$controller = _$controller_;
		vm = $controller('AppController');
	}));
	
	it('valida a igualdade entre a string informada e a retornada pela função', function() {
		expect('OI').toBe('OI');
	});
	
	
});