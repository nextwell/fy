let mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CompaignSchema = new Schema({
	login: { type: String, unique: true },
	password: { type: String },
	name: { type: String },
	description: { type: String },
	balance: { type: Number },
	createdAt: { type: Date },
	status: { type: String },
	soc_vk: { type: String },
	soc_instagram: { type: String },
	soc_fb: { type: String },
	soc_twitter: { type: String },
	design_photo: { type: String },
	design_background: { type: String },
	views: { type: Number },
	products: { type: Number }
});

const Compaign = mongoose.model("Campaigns", CompaignSchema);

module.exports = Compaign;