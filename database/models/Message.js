let mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
	campaignID: { type: String },
	userID: { type: String },
	text: { type: String },
	status: { type: String },				// status like delivered, read or other	/ maybe deleted hmhmhmhmhm		
	createdAt: { type: Date }
});

const Message = mongoose.model("Messages", MessageSchema);

module.exports = Message;


/* ----------- NOTE ----------- */
// just for start, i guess, chat must be realize other way ( GOD PLEASE )
/* ----------- NOTE ----------- */