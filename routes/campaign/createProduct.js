//----------------------------------------------------------------------------------------
// Sign-up campaign route '/campaign/add-product'

module.exports = (app, db) => {
	app.post("/campaign/add-product", (req, res) => {

		if ( req.session.accType == 'campaign' && req.session.userData ){


			let data = {
				campaignID: req.session.userData._id,
				name: req.body.name,
				description: req.body.description,
				categories: req.body.categories,
				price: req.body.price,
				currency: req.body.currency,
				sizes: req.body.sizes,
				available: req.body.available,
				regions: req.body.regions,
				photos: upload(req.files)

			};
			db.Campaigns.create(data)
				.then(async data => {
					data.password = null;
					req.session.userData = data;			// ??
					req.session.accType = 'campaign';
					res.json(data);
				})
				.catch(err => { 
					console.log("Campaign CreateProduct error");
					res.json({err: "Campaign CreateProduct error", data: "Campaign CreateProduct error"});
					//console.log(err);
				});



		}

		
	});
}