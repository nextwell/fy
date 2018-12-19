let mongoose = require('mongoose'),
	Users 	 = require('../models/User.js');

const User = mongoose.model('Users');

//----------------------------------------------------------------------------------------
// Option config

let cfg = require('./../../config.js');

//----------------------------------------------------------------------------------------
// Searching user // LOGIN

module.exports.search = (login, password) => {
	return Users.findOne( { login: login, password: password } );
}

//----------------------------------------------------------------------------------------
// Sign up new user

module.exports.create = (data) => {
	let user = new User({
		login: data.login,
		password: data.password,
		name: data.name,
		photo: data.photosrc,
		balance: 0,
		currency: data.currency,
		campaignSubs: data.campaignSubs || [],
		wishList: data.wishList || [],
		categoriesSubs: data.categoriesSubs || [],
		tagsSubs: data.tagsSubs || [],
		createdAt: new Date()
	});
	let promise = user.save();
    return promise;

}

//----------------------------------------------------------------------------------------
// Get array of user(s) with options

module.exports.get = (settings) => {
	/*
		!settings must be like 

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
			return Users.find({});
			break;
		};
		case 'params': {
			return Users.find(settings.data);
			break;
		};
		default: {
			return Users.find({});
			break;
		}
	}
}