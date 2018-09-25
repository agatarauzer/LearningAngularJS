'use strict';

var application = angular.module( 'ngShop' , [ 'ngRoute' , 'appControllers' ] );


application.config( [ '$routeProvider' , '$httpProvider' , function( $routeProvider , $httpProvider ) {

	$routeProvider
	.when( '/products' , {
		controller : 'products',
		templateUrl : 'partials/products.html'
	})
	.when( '/product/:id' , {
		controller : 'product',
		templateUrl : 'partials/product.html'
	})
	.otherwise({
		redirectTo: '/home'
	});

}]);


