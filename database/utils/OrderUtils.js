let mongoose = require('mongoose'),
	Orders 	 = require('../models/Order.js');

const Order = mongoose.model('Orders');

//----------------------------------------------------------------------------------------
// Option config

let cfg = require('./../../config.js');


//----------------------------------------------------------------------------------------
// Create new order

module.exports.create = (data) => {
	let order = new Order({
		userID: data.userID,	
		campaignID: data.campaignID,
		productID: data.productID,
		price: data.price,
		currency: data.currency,
		status: 'step 1',
		createdAt: new Date()
	});
	let promise = order.save();
    return promise;

}

//----------------------------------------------------------------------------------------
// Get array of order(s) with options

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
			return Orders.find({});
			break;
		};
		case 'params': {
			return Orders.find(settings.data);
			break;
		};
		default: {
			return Orders.find({});
			break;
		}
	}
}