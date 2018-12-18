let mongoose = require('mongoose'),
	Campaigns 	 = require('../models/Campaign.js');

const Campaign = mongoose.model('Campaigns');

//----------------------------------------------------------------------------------------
// Option config

let cfg = require('./../../config.js');

//----------------------------------------------------------------------------------------
// Searching campaign // LOGIN

module.exports.search = (login, password) => {
	return Campaigns.findOne( { login: login, password: password } );
}

//----------------------------------------------------------------------------------------
// Sign up new campaign

module.exports.create = (data) => {
	let campaign = new Campaign({
		login: data.login,
		password: data.password,
		name: data.name,
		description: data.description || 'Empty space',
		balance: 0,
		status: 'deactivated',		// ???????? IDEAS
		soc_vk: 'none',
		soc_instagram: 'none',
		soc_fb: 'none',
		soc_twitter: 'none',
		design_photo: data.photoSrc,			// or default photo
		design_background: data.backgroundSrc,  // or default background
		views: 0,
		products: 0,
		createdAt: new Date()
	});
	let promise = campaign.save();
    return promise;

}

//----------------------------------------------------------------------------------------
// Get campaigns with options

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
			return Campaigns.find({});
			break;
		};
		case 'params': {
			let data = settings.data;
			return Campaigns.find(data);
			break;
		};
		default: {
			return Campaigns.find({});
			break;
		}
	}
}