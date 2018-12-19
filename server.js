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
    secret: "213jnr436js",			// !! FROM NODE.ENV in prod
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

requireFu(__dirname + '/routes')(app);

app.listen(cfg['PORT'], () => {
    Logger.write({source: "Express", action: "INFO", text:`Express server running on port ${cfg['PORT']}!`});
});

/* dev stuff / express */
let RoutesList = require('express-list-endpoints');
console.log(RoutesList(app));
/* ---------- */