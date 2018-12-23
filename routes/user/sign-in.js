//----------------------------------------------------------------------------------------
// Sign-in route '/sign-in'

// !!!! MUST BE md5 hash / md5(req.body.password)

module.exports = (app, db) => {
	app.post("/user/sign-in", (req, res) => {

		let data = {
			login: req.body.login,
			password: req.body.password
		};
		db.Users.search(data.login, data.password)
			.then(async data => {
				/*data = JSON.stringify(data);
				data = JSON.parse(data);
				await delete data['password'];*/

				data.password = null;
				req.session.userData = data;			// ??
				res.json(data);
			})
			.catch(err => { 
				res.json({err: "Auth error"});
				console.log(err);
			});
	});
}