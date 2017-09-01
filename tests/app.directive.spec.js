describe('Eu como desenvolvedor, desejo testar as funcionalidades da diretiva <hello-directive> (app.directive.js).', function() {

			var $compile, $rootScope, directive;

			beforeEach(module('app'));
			beforeEach(module('app.templates'));

			beforeEach(inject(function(_$compile_, _$rootScope_) {
				$compile = _$compile_;
				$rootScope = _$rootScope_;
				directive = $compile("<hello-directive></hello-directive>")($rootScope);
				$rootScope.$digest();
			}));

			it('É possível compilar a diretiva', function() {
				var element = $compile("<hello-directive></hello-directive>")($rootScope);
				$rootScope.$digest();

				var btn = element.find('button')
				console.log(btn.attr('type'));
				console.log(btn.attr('name'));
				expect(element.html()).toContain(", 2 times");
			});
			
			describe('Ao compilar a diretiva', function(){
				
				it('o botão está visivel ao usuário.', function() {
					var btn = directive.find('button')
					expect(btn.attr('name')).toBe('directive_btn');
				});
		
			});

});