'use strict';

var application = angular.module( 'ngShop' , [ 'ngRoute' , 'appControllers' ] );


application.config( [ '$routeProvider' , '$httpProvider' , function( $routeProvider , $httpProvider ) {

	//====== products =====

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

	//===== users =====

	.when( '/users' , {
		controller : 'users' ,
		templateUrl : 'partials/users.html'
	})

	.when( '/user/edit/:id' , {
		controller : 'userEdit',
		templateUrl : 'partials/user-edit.html'
	})

	.when( '/user/create' , {
		controller : 'userCreate',
		templateUrl : 'partials/user-create.html'
	})

	//===== orders =====

	.when( '/orders' , {
		controller : 'orders' ,
		templateUrl : 'partials/orders.html'
	})

	//===== default =====

	.otherwise({
		redirectTo: '/home'
	});

}]);


