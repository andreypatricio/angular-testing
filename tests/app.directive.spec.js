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

			describe('Ao compilar a diretiva', function(){
				
				it('o botão está visivel ao usuário.', function() {
					var btn = directive.find('button')
					expect(btn.attr('name')).toBe('directive_btn');
				});
			});

});