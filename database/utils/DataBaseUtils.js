let mongoose = require('mongoose'),
	campaigns 	 = require('./CampaignUtils.js');

mongoose.set('useCreateIndex', true);

mongoose.Promise = global.Promise;

module.exports.setUpConnection = () => {
	mongoose.connect(`mongodb://localhost/fy`, { useNewUrlParser: true } );
}

module.exports.Campaigns = campaigns;