let mongoose 	 = require('mongoose'),
	campaigns 	 = require('./CampaignUtils.js'),
	products 	 = require('./ProductUtils.js'),
	orders 	     = require('./OrderUtils.js'),
	users 	     = require('./UserUtils.js');

mongoose.set('useCreateIndex', true);

mongoose.Promise = global.Promise;

module.exports.setUpConnection = () => {
	mongoose.connect(`mongodb://localhost/fy`, { useNewUrlParser: true } );
}

module.exports.Campaigns = campaigns;

module.exports.Products  = products;

module.exports.Orders    = orders;

module.exports.Users     = users;