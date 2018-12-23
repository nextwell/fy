let mongoose = require('mongoose'),
	Messages = require('../models/Message.js');

const Message = mongoose.model('Messages');

//----------------------------------------------------------------------------------------
// Option config

let cfg = require('./../../config.js');


//----------------------------------------------------------------------------------------
// Create new chat message

module.exports.create = (data) => {
	let message = new Message({	
		campaignID: data.campaignID,
		userID: data.userID,
		text: data.text,
		status: 'ok',					// ???
		createdAt: new Date()
	});
	let promise = message.save();
    return promise;

}

//----------------------------------------------------------------------------------------
// Get array of message(s) with options

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
		// no way empty case!! security hhhhhhh, maybe some other 
		/*case 'empty': {
			return Messages.find({});
			break;
		};*/
		case 'params': {
			return Messages.find(settings.data);
			break;
		};
		/*default: {
			return Messages.find({});
			break;
		}*/
	}
}