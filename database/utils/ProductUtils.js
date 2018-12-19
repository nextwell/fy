let mongoose = require('mongoose'),
	Products 	 = require('../models/Product.js');

const Product = mongoose.model('Products');

//----------------------------------------------------------------------------------------
// Option config

let cfg = require('./../../config.js');


//----------------------------------------------------------------------------------------
// Create new product

module.exports.create = (data) => {
	let product = new Product({
		campaignID: data.campaignID,
		name: data.name,
		description: data.description,
		categories: data.categories,
		price: data.price,
		currency: data.currency,
		sizes: data.sizes,
		available: data.available,
		views: 0,
		orders: 0,
		regions: data.regions,
		status: 'ok',			// ???
		createdAt: new Date()
	});
	let promise = product.save();
    return promise;

}

//----------------------------------------------------------------------------------------
// Get array of product(s) with options

module.exports.get = (settings) => {
	/*
		/ settings must be like /

		settings = { 	
			action: 'params',
			data: {
				params1: 'value',
			  	params2: 'value2' 
		  	}
		}

	*/

	switch(settings.action){
		case 'empty': {
			return Products.find({});
			break;
		};
		case 'params': {
			return Products.find(settings.data);
			break;
		};
		default: {
			return Products.find({});
			break;
		}
	}
}