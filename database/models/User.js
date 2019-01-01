let mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	login: { type: String, unique: true },
	password: { type: String },
	name: { type: String },
	photo: { type: String },
	balance: { type: Number },
	currency: { type: String },
	campaignSubs: { type: Array },					// follow list 
	wishList: { type: Array },
	/*------ ??????????????? -------*/
	categoriesSubs: { type: Array },
	tagsSubs: { type: Array },
	/*------------------------------*/
	createdAt: { type: Date }
});

const User = mongoose.model("Users", UserSchema);

module.exports = User;