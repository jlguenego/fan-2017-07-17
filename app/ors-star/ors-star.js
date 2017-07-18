(function () {
	'use strict';

	var app = angular.module('ors-star', []);

	app.directive('orsStar', function () {
		return {
			restrict: 'E',
			// compile: function () {
			// 	console.log('OrsStar compile', arguments);
			// 	return {
			// 		pre: function () {
			// 			console.log('OrsStar preLink', arguments);
			// 		},
			// 		post: function () {
			// 			console.log('OrsStar link', arguments);
			// 		}
			// 	};
			// },
			controller: ['$scope', '$element', function OrsStarCtrl($scope, $element) {
				console.log('OrsStarCtrl', arguments);
				let html = '';
				for (let i = 0; i < 5; i++) {
					html+='<img src="./ors-star/img/yellow_star.png" >';
				}
				$element.html(html);
			}],
		};
	});
})();