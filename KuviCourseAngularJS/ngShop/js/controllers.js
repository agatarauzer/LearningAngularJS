'use strict';

var appControllers = angular.module( 'appControllers' , [ 'ngRoute' ]);


appControllers.controller( 'products' , [ '$scope' , '$http' , function( $scope , $http ) {

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


appControllers.controller( 'productEdit' , [ '$scope' , '$http' , '$routeParams' , function( $scope , $http , $routeParams ) {

	$http.get( 'model/products.json' ).then( successCallback, errorCallback);

	function successCallback( response ) {
		var products = response.data;
		$scope.product = products[$routeParams.id]
	};

	function errorCallback(){
		console.log( 'Błąd pobrania pliku json' )
	};

	$scope.saveChanges = function( product ) {
		//TODO: connect with API 

		console.log( product );
		console.log( $routeParams.id);
		};

}]);

appControllers.controller( 'productCreate' , [ '$scope' , '$http' , function( $scope , $http ) {

	$scope.createProduct = function() {

		//TODO: connect with API 

		console.log( $scope.product );
	};

}]);