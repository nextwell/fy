//----------------------------------------------------------------------------------------
// dev tools for list of users

module.exports = (app, db) => {
	app.get("/dev/users", (req, res) => {

		db.Users.get({action: 'empty'})
			.then(async data => {

				res.json(data);
			})
			.catch(err => { 
				console.log(err);
			});
	});
}