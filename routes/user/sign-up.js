//----------------------------------------------------------------------------------------
// Sign-up user route '/user/sign-up'

let md5 = require('md5');

// !!!! MUST BE md5 hash / md5(req.body.password)

module.exports = (app, db) => {
	app.post("/user/sign-up", (req, res) => {

		let data = {
			login: req.body.login,
			password: md5(req.body.password),
			name: req.body.name,
			currency: req.body.currency || "RUB"
		};
		db.Users.create(data)
			.then(async data => {
				data.password = null;
				req.session.userData = data;			// ??
				req.session.accType = 'user';
				res.json(data);
			})
			.catch(err => { 
				console.log("User | Sign-up error | Login already used");
				res.json({err: "User | Sign-up error", data: "Login already used"});
				//console.log(err);
			});
	});
}