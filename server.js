let express    = require('express'),
	requireFu  = require('require-fu'),
	session    = require('express-session'),
	bodyParser = require('body-parser');



let cfg    = require('./config.js'),
	Logger = require('./helpers/logger.js');



//----------------------------------------------------------------------------------------
// Mongo DB Settings

let db = require('./database/utils/DataBaseUtils.js');
db.setUpConnection();




//----------------------------------------------------------------------------------------
// Express Settings

let sessionMiddleware = session({
    secret: process.env.sessionKey || "213jnr436js",
    resave: true,
    saveUninitialized: true
});

let app = express();


app.use( bodyParser.json() );      
app.use( bodyParser.urlencoded({     
  extended: true
})); 


app.use(sessionMiddleware);

app.use(express.static('public_files'));	// Public access

requireFu(__dirname + '/routes')(app, db);

app.listen(cfg['PORT'], () => {
    Logger.write({source: "Express", action: "INFO", text:`Express server running on port ${cfg['PORT']}!`});
});

/* dev stuff / express */
let RoutesList = require('express-list-endpoints');
console.log(RoutesList(app));
/* ------------------- */



//----------------------------------------------------------------------------------------
// Socket.io Settings

let server = require('http').Server(app);
let io = require("socket.io")(server);

io.use(function(socket, next) {
    sessionMiddleware(socket.request, socket.request.res, next);			// share session with socket.io
});

requireFu(__dirname + '/sockets')(io, db);		// require all sockets

server.listen(cfg['IO-PORT']);

Logger.write({source: "Socket.io", action: "INFO", text:`Socket.io running on port ${cfg['IO-PORT']}!`});