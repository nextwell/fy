let mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
	campaignID: { type: String },
	value: { type: Number },
	currency: { type: String },
	status: { type: String },					
	createdAt: { type: Date }
});

const Transaction = mongoose.model("Transactions", TransactionSchema);

module.exports = Transaction;