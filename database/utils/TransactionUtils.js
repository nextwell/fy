let mongoose = require('mongoose'),
	Transactions 	 = require('../models/Transaction.js');

const Transaction = mongoose.model('Transactions');

//----------------------------------------------------------------------------------------
// Option config

let cfg = require('./../../config.js');


//----------------------------------------------------------------------------------------
// Create new transaction

module.exports.create = (data) => {
	let transaction = new Transaction({	
		campaignID: data.campaignID,
		value: data.value,
		currency: data.currency,
		status: data.status,
		createdAt: new Date()
	});
	let promise = transaction.save();
    return promise;

}

//----------------------------------------------------------------------------------------
// Get array of transaction(s) with options

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
			return Transactions.find({});
			break;
		};
		case 'params': {
			return Transactions.find(settings.data);
			break;
		};
		default: {
			return Transactions.find({});
			break;
		}
	}
}