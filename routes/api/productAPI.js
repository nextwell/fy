//----------------------------------------------------------------------------------------
// Product API


module.exports = (app, db) => {

//------------------------------
// GET Product by id

	app.get("/api/product/:id", (req, res) => {
		let data = {
			_id: req.params.id
		};
		db.Products.get({ action: 'params', data })
			.then(data => {
				res.json(data);
			})
	});


//------------------------------
// GET Product(s) by campaignID
	
	app.get("/api/product/campaign/:id", (req, res) => {
		let data = {
			campaignID: req.params.id
		};
		db.Products.get({ action: 'params', data })
			.then(data => {
				res.json(data);
			})
	});


//------------------------------
// GET Product(s) by region ( !!!!!! NO MULTIPLY !!!!!! )	    / DO SOMETHING WITH IT
	
	app.get("/api/product/region/:region", (req, res) => {
		let data = {
			regions: req.params.region
		};
		console.log(data);
		db.Products.get({ action: 'params', data })
			.then(data => {
				res.json(data);
			})
	});


//------------------------------
// GET Product(s) by category ( !!!!!! NO MULTIPLY !!!FIX!!! )	/ DO SOMETHING WITH IT
	
	app.get("/api/product/category/:category", (req, res) => {
		let data = {
			categories: req.params.category
		};
		console.log(data);
		db.Products.get({ action: 'params', data })
			.then(data => {
				res.json(data);
			})
	});
}
