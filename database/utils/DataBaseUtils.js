let mongoose 	 = require('mongoose'),
	campaigns 	 = require('./CampaignUtils.js'),
	products 	 = require('./ProductUtils.js'),
	orders 	     = require('./OrderUtils.js'),
	users 	     = require('./UserUtils.js'),
	transactions = require('./TransactionUtils.js'),
	messages 	 = require('./MessageUtils.js');

mongoose.set('useCreateIndex', true);

mongoose.Promise = global.Promise;

module.exports.setUpConnection = () => {
	mongoose.connect(`mongodb://localhost/fy`, { useNewUrlParser: true } );
}

module.exports.Campaigns    = campaigns;

module.exports.Products     = products;

module.exports.Orders       = orders;

module.exports.Users        = users;

module.exports.Transactions = transactions;

module.exports.Messages 	= messages;


/* ------- DEV  ------- */
		
	/*campaigns.create({
		login: 'admin',
		password: 'admin',
		name: 'ADMIN NAME',
		description: 'ADMIN DESC',
		design_photo: '/defaultphoto.png',			
		design_background: '/defaultbackground.png'  
	})*/

	/*products.create({
		campaignID: '5c1a1aa0cfbd8e0ed01e3163',
		name: 'T-SHORT PROJECT-X',
		description: 'Product Description',
		categories: ['t-short', 'project-x'],
		price: 1499,
		currency: 'RUB',
		sizes: ['S', 'M', 'L', 'XL', 'XXL'],
		available: 'true',
		regions: ['RU', 'UA']
	})*/

	/*users.create({
		login: 'user',
		password: 'user',
		name: 'USER NAME',
		photo: '/user.png',
		currency: 'RUB'
	})*/

	/*orders.create({
		userID: '5c1a1c6c0410eb20685a5068',	
		campaignID: '5c1a1aa0cfbd8e0ed01e3163',
		productID: '5c1a1b766f459d22dcabbec5',
		price: 1499,
		currency: 'RUB'
	})*/

	/*transactions.create({	
		campaignID: '5c1a1aa0cfbd8e0ed01e3163',
		value: 999,
		currency: 'RUB',
		status: 'success'
	})*/

	/*transactions.create({	
		campaignID: '5c1a1aa0cfbd8e0ed01e3163',
		value: 1299,
		currency: 'RUB',
		status: 'failed'
	})*/

	/*messages.create({	
		campaignID: '5c1a1aa0cfbd8e0ed01e3163',
		userID: '5c1a1c6c0410eb20685a5068',
		text: 'hi, i need this ****, its awesome!'
	})*/

/* -------------------- */