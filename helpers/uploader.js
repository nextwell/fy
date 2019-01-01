let fs     = require('fs'),
	mkdirp = require('mkdirp'),
	cfg	   = require('./../config.js'),
	Logger = require('logger.js');

async function upload(files){
	console.log("Upload started")
	let time     = new Date(),
	    dirTime  = time.getTime(),
	    dirStr   =  Math.random()
	    				.toString(36)
	    				.slice(2, 2 + Math.max(1, Math.min(15, 25)) ),
	    finalDir = `${dirTime}${dirStr}`;


	let publicDir = `${time.getFullYear()}-${parseInt(time.getMonth()+1)}-${time.getDate()}`;
    let datesDir = `${cfg["UPLOAD_DIR"]}/${[publicDir]}`;

    await mkdirp(datesDir, (err) => { /* nothing ¯\_(ツ)_/¯, cuz its ok */ });


    let finalFilesURL = [];


	let assetsFiles = files;
	await mkdirp(`${__dirname}/../${datesDir}/${finalDir}`, async (err) => { 
		if ( err ) console.log(`Trying to create dir after save, but dir already exist!`)

		await assetsFiles.forEach(function(item, i, arr) {
			finalFilesURL.push(`${publicDir}/${finalDir}/${item.name}`);
			item.mv(`${__dirname}/../${datesDir}/${finalDir}/${item.name}`, function(err) {
				if (err){
			    	console.log(err);
			    	return false;
			    }
			})
		});
	});

	return finalFilesURL;
}
