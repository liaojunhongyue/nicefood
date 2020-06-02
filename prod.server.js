var express = require('express');
var config = require('./config/index');

var port = process.env.PORT || config.build.port;

var app = express();

var router = express.Router();

router.get('/', function(req, res, next) {
	req.url = '/index.html';
	next();
})

app.use(router);

let appData = require('./data.json')
let menuData = appData.menuData
let hotData = appData.hotData
let currentSeasonData = appData.currentSeasonData
let foodCategoryData = appData.foodCategoryData
let findData = appData.findData
let challengeData = appData.challengeData
let userData = appData.userData
let apiRoutes = express.Router()

app.get('/api/menuData', (req, res) => {
	res.json({
	  	errno: 0,
	  	data: menuData
	})
})

app.get('/api/hotData', (req, res) => {
	res.json({
	  	errno: 0,
	  	data: hotData
	})
})

app.get('/api/currentSeasonData', (req, res) => {
	res.json({
	  	errno: 0,
	  	data: currentSeasonData
	})
})

app.get('/api/foodCategoryData', (req, res) => {
	res.json({
	  	errno: 0,
	  	data: foodCategoryData
	})
})

app.get('/api/findData', (req, res) => {
	res.json({
	  	errno: 0,
	  	data: findData
	})
})

app.get('/api/challengeData', (req, res) => {
	res.json({
	  	errno: 0,
	  	data: challengeData
	})
})

app.get('/api/userData', (req, res) => {
	res.json({
	  	errno: 0,
	  	data: userData
	})
})

app.use('/api', apiRoutes);

app.use(express.static('./dist'));

module.exports = app.listen(port, function(err){
	if(err){
		console.log(err);
		return;
	}
	console.log('success');
})