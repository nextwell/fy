let mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	campaignID: { type: String },
	name: { type: String },
	description: { type: String },
	categories: { type: Array },
	price: { type: Number },
	currency: { type: String },
	sizes: { type: Array },
	available: { type: String },
	views: { type: Number },
	orders: { type: Number },
	regions: { type: Array },
	createdAt: { type: Date },
	photos: { type: Array },
	status: { type: String }			// ???
});

const Product = mongoose.model("Products", ProductSchema);

module.exports = Product;