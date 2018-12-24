//----------------------------------------------------------------------------------------
// Sign-up campaign route '/campaign/sign-up'

let md5 = require('md5');

// !!!! MUST BE md5 hash / md5(req.body.password)

module.exports = (app, db) => {
	app.post("/campaign/sign-up", (req, res) => {

		let data = {
			login: req.body.login,
			password: md5(req.body.password),
			name: req.body.name,
			currency: req.body.currency || "RUB",
			description: "Its our first campaign",
			design_photo: "campaigndefaultphoto.png",
			design_background: "campaigndefaultbackground.png"
		};
		db.Campaigns.create(data)
			.then(async data => {
				data.password = null;
				req.session.userData = data;			// ??
				req.session.accType = 'campaign';
				res.json(data);
			})
			.catch(err => { 
				console.log("Campaign Sign-up error | Login already used");
				res.json({err: "Campaign Sign-up error", data: "Login already used"});
				//console.log(err);
			});
	});
}