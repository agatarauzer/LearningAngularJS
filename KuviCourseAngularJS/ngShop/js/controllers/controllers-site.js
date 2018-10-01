'use strict';

var controllersSite = angular.module( 'controllersSite' , []);


controllersSite.controller( 'siteProducts' , [ '$scope' , '$http' , function( $scope , $http ) {

	$http.get( 'model/products.json' ).then( successCallback, errorCallback);

	function successCallback( response ) {
		$scope.products = response.data;
	};

	function errorCallback(){
		console.log( 'Błąd pobrania pliku json' )
	};

	$scope.deleteProduct = function( product , $index ) {
		//TODO: connect with API 

		$scope.products.splice( $index , 1 );
	};

}]);


controllersSite.controller( 'siteProduct' , [ '$scope' , '$http' , '$routeParams' , function( $scope , $http , $routeParams ) {

	$http.get( 'model/products.json' ).then( successCallback, errorCallback);

	function successCallback( response ) {
		var products = response.data;
		$scope.product = products[$routeParams.id]
	};

	function errorCallback(){
		console.log( 'Błąd pobrania pliku json' )
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