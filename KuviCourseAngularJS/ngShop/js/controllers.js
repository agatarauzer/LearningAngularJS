'use strict';

var appControllers = angular.module( 'appControllers' , [ 'ngRoute' ]);

appControllers.controller( 'products' , [ '$scope' , '$http' , function( $scope , $http ) {

		$http.get( 'model/products.json' ).then( successCallback, errorCallback);

		function successCallback( response ) {
			$scope.products = response.data;
		}

		function errorCallback(){
			console.log( 'Błąd pobrania pliku json' )
		}

}]);


appControllers.controller( 'product' , [ '$scope' , '$http' , '$routeParams' , function( $scope , $http , $routeParams ) {

		$http.get( 'model/products.json' ).then( successCallback, errorCallback);

		function successCallback( response ) {
			var products = response.data;
			$scope.product = products[$routeParams.id]
		}

		function errorCallback(){
			console.log( 'Błąd pobrania pliku json' )
		}

}]);