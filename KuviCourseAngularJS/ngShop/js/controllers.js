'use strict';

var appControllers = angular.module( 'appControllers' , [ 'ngRoute' ]);


appControllers.controller( 'appNavigation' , [ '$scope' , '$location' , function( $scope , $location ) {

	console.log( $location.path());

	$scope.isActive = function( path ) {
		return $location.path() === path;
	};

}]);


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

appControllers.controller( 'users' , [ '$scope' , '$http' , function( $scope , $http ) {
	
	$http.get( 'model/users.json' ).then( successCallback, errorCallback);

	function successCallback( response ) {
		$scope.users = response.data;
	};

	function errorCallback(){
		console.log( 'Błąd pobrania pliku json' )
	};

	$scope.deleteUser = function( user , $index ) {
		//TODO: connect with API 

		$scope.users.splice( $index , 1 );
	};
}]);

appControllers.controller( 'userEdit' , [ '$scope' , '$http' , '$routeParams' , function( $scope , $http , $routeParams ) {

	$http.get( 'model/users.json' ).then( successCallback, errorCallback);

	function successCallback( response ) {
		var users = response.data;
		$scope.user = users[$routeParams.id]
	};

	function errorCallback(){
		console.log( 'Błąd pobrania pliku json' )
	};

	$scope.saveChanges = function( user) {
		//TODO: connect with API 

		console.log( user );
		console.log( $routeParams.id);
		};

}]);

appControllers.controller( 'userCreate' , [ '$scope' , '$http' , function( $scope , $http ) {

	$scope.createUser = function() {

		//TODO: connect with API 

		console.log( $scope.user );
	};

}]);

appControllers.controller( 'orders' , [ '$scope' , '$http' , function( $scope , $http ) {
	
	$http.get( 'model/orders.json' ).then( successCallback, errorCallback);

	function successCallback( response ) {
		$scope.orders = response.data;
	};

	function errorCallback(){
		console.log( 'Błąd pobrania pliku json' )
	};

	$scope.deleteOrder = function( order , $index ) {
		//TODO: connect with API 

		$scope.orders.splice( $index , 1 );
	};

	$scope.changeStatus = function( order) {

		if (order.status == 0) {
			order.status = 1;
		}
		else {
			order.status = 0;
		}
		
	};
}]);