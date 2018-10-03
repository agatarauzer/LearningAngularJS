'use strict';

var controllersSite = angular.module( 'controllersSite' , []);


controllersSite.controller( 'siteProducts' , [ '$scope' , '$http' , 'cartService' , function( $scope , $http , cartService ) {

	$http.get( 'model/products.json' ).then( successCallback, errorCallback);

	function successCallback( response ) {
		$scope.products = response.data;
	};

	function errorCallback(){
		console.log( 'Błąd pobrania pliku json' )
	};

	$scope.addToCart = function( product ) {
		cartService.add( product );
	};

}]);


controllersSite.controller( 'siteProduct' , [ '$scope' , '$http' , '$routeParams' , 'cartService' , function( $scope , $http , $routeParams , cartService ) {

	$http.get( 'model/products.json' ).then( successCallback, errorCallback);

	function successCallback( response ) {
		var products = response.data;
		$scope.product = products[$routeParams.id]
	};

	function errorCallback(){
		console.log( 'Błąd pobrania pliku json' )
	};

	$scope.addToCart = function( product ) {
		cartService.add( product );
	};

}]);


controllersSite.controller( 'siteOrders' , [ '$scope' , '$http' , function( $scope , $http ) {
	
	$http.get( 'model/orders.json' ).then( successCallback, errorCallback);

	function successCallback( response ) {
		$scope.orders = response.data;
	};

	function errorCallback(){
		console.log( 'Błąd pobrania pliku json' )
	};
	
}]);

controllersSite.controller( 'cartController' , [ '$scope' , '$http' , 'cartService' , function( $scope , $http , cartService ) {
	
	$scope.cart = cartService.show();

	$scope.clearCart = function() {
		cartService.clear();
	};

}]);