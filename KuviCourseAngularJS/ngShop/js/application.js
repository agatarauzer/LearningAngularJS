'use strict';

var application = angular.module( 'ngShop' , [ 'ngRoute' , 'angular-storage' , 'controllersAdmin' , 'controllersNavigation' , 'controllersSite' , 'appServices' ] );


application.config( [ '$routeProvider' , '$httpProvider' , function( $routeProvider , $httpProvider ) {

	//====== admin products =====

	$routeProvider
	.when( '/admin/products' , {
		controller : 'products',
		templateUrl : 'partials/admin/products.html'
	})

	.when( '/admin/product/edit/:id' , {
		controller : 'productEdit',
		templateUrl : 'partials/admin/product-edit.html'
	})

	.when( '/admin/product/create' , {
		controller : 'productCreate',
		templateUrl : 'partials/admin/product-create.html'
	})

	//===== admin users =====

	.when( '/admin/users' , {
		controller : 'users' ,
		templateUrl : 'partials/admin/users.html'
	})

	.when( '/admin/user/edit/:id' , {
		controller : 'userEdit',
		templateUrl : 'partials/admin/user-edit.html'
	})

	.when( '/admin/user/create' , {
		controller : 'userCreate',
		templateUrl : 'partials/admin/user-create.html'
	})

	//===== admin orders =====

	.when( '/admin/orders' , {
		controller : 'orders' ,
		templateUrl : 'partials/admin/orders.html'
	})

	//====== site products =====

	.when( '/products' , {
		controller : 'siteProducts',
		templateUrl : 'partials/site/products.html'
	})

	.when( '/product/:id' , {
		controller : 'siteProduct',
		templateUrl : 'partials/site/product.html'
	})

	.when( '/cart' , {
		controller : 'cartController',
		templateUrl : 'partials/site/cart.html'
	})

	//===== default =====

	.otherwise({
		redirectTo: '/products'
	});

}]);


