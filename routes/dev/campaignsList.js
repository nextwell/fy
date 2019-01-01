//----------------------------------------------------------------------------------------
// dev tools for list of campaigns

module.exports = (app, db) => {
	app.get("/dev/campaigns", (req, res) => {

		db.Campaigns.get({action: 'empty'})
			.then(async data => {

				res.json(data);
			})
			.catch(err => { 
				console.log(err);
			});
	});
}