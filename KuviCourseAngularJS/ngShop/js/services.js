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

		if ( !cart.length ) {
			product.quantity = 0;
			cart.push( product );
		}

		var addNew = true;

		angular.forEach( cart , function( value , key ) {

			if (value.name == product.name) {
				addNew = false;
				cart[key].quantity++;
			}
		});

		if ( addNew ) {
			product.quantity = 1;
			cart.push( product );
		};

		store.set( 'cart' , cart );
	};

	cart.clear = function() {
		store.remove( 'cart' );
		cart.length = 0;

	};

	return cart;

}]);


