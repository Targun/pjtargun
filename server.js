// REQUIRE FILES =============================================

// ===========================================================
// 3rd-party Modules
var express           = require('express')
var bodyParser        = require('body-parser')
var path              = require('path')

// ===========================================================

// CONFIGURATION =============================================

// ===========================================================
var port              = 5000;
var app               = express();
var http              = require('http').Server(app);

// BOILERPLATE
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

// ===========================================================

// Set Up Public Display =====================================

// ===========================================================

app.use(express.static('./public'))

app.get('/', function(req, res) { res.sendFile(path.resolve('./public/index.html')) })

app.get('/sitemap.xml', function(req, res) { res.sendFile(path.resolve('./sitemap.xml')) }) 
app.get('/robots.txt', function(req, res) { res.sendFile(path.resolve('./robots.txt')) })

app.get('*', function (req, res){ res.sendFile(path.resolve('./public/not-found.html')) })

// ===========================================================

// Connect to db and start app ===============================

// ===========================================================

http.listen(port, function(){
    console.log('Server listening on port ' + port)
})
