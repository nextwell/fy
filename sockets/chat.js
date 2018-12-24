//----------------------------------------------------------------------------------------
// IO Chat

let fs 	   = require('fs'), 
	Logger = require('../helpers/logger.js'),	// Logger
	cfg    = require('./../config.js');			// Option config


module.exports = (io, db) => {

	io.on('connection', (socket) => {
		Logger.write({source: "SocketIO", action: "DEBUG", text:`User connected`});

		socket.on('disconnect', () => {
	    	io.emit('disconnected');
	    	Logger.write({source: "SocketIO", action: "DEBUG", text:`User disconnected`});
	    });

	    socket.on('msg', async (data) => {

	    	/*
				/ data must be like /

				data = {
					sender: userID,
					recipient: userID/compaignID,          / ???????
					text: 'Hello, i need it!'
				}

			*/
	    	console.log(data);
	    		
	    })

	   
	});
}