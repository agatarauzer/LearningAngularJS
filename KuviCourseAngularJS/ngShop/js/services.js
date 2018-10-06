'use strict';

var appServices = angular.module( 'appServices' , []);

appServices.factory( 'cartService' , [ 'store' , function( store ) {
	

	if ( store.get( 'cart' ) ) {
		var cart = store.get( 'cart' );
	}
	else {
		var cart = [];
	}

	cart.show = function() {
		return cart;

	};

	cart.add = function( product ) {

		if (product.quantity == null) {
			product.quantity = 0;
		};

		if ( cart.length < 0 ) {
			cart.push( product );
		};

		var addNew = true;

		angular.forEach( cart , function( value , key ) {

			if (value.name == product.name) {
				addNew = false;
				cart[key].quantity += product.quantity;
			}
		});

		if ( addNew ) {
			cart.push( product );
		};

		store.set( 'cart' , cart );
	};

	cart.clear = function() {
		store.remove( 'cart' );
		cart.length = 0;
	};

	cart.removeItem = function( newCart ) {
		store.set( 'cart' , newCart );

	};

	return cart;

}]);


