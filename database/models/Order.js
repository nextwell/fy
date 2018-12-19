let mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
	userID: { type: String },	
	campaignID: { type: String },
	productID: { type: String },
	price: { type: Number },
	currency: { type: String },
	status: { type: String },					// ??????????? SOME STEPS, idk
	createdAt: { type: Date }
});

const Order = mongoose.model("Orders", OrderSchema);

module.exports = Order;