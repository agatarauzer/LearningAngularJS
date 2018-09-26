'use strict';

var application = angular.module( 'ngShop' , [ 'ngRoute' , 'appControllers' ] );


application.config( [ '$routeProvider' , '$httpProvider' , function( $routeProvider , $httpProvider ) {

	$routeProvider
	.when( '/products' , {
		controller : 'products',
		templateUrl : 'partials/products.html'
	})

	.when( '/product/edit/:id' , {
		controller : 'productEdit',
		templateUrl : 'partials/product-edit.html'
	})

	.when( '/product/create' , {
		controller : 'productCreate',
		templateUrl : 'partials/product-create.html'
	})

	.otherwise({
		redirectTo: '/home'
	});

}]);


