//----------------------------------------------------------------------------------------
// Sign-in campaign route '/campaign/sign-in'

let md5 = require('md5');

module.exports = (app, db) => {
	app.post("/campaign/sign-in", (req, res) => {

		let data = {
			login: req.body.login,
			password: md5(req.body.password)
		};
		db.Campaigns.search(data.login, data.password)
			.then(async data => {
				/*data = JSON.stringify(data);
				data = JSON.parse(data);
				await delete data['password'];*/
				data.password = null;
				req.session.userData = data;			// ??
				req.session.accType = 'campaign';
				res.json(data);
			})
			.catch(err => { 
				res.json({err: "Campaign | Auth error"});
				console.log(err);
			});
	});
}