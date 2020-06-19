var express = require('express')
var config = require('./config/index')

var port = process.env.PORT || config.build.port

var app = express()

// 解决跨域问题
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  if (req.method === 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
})

var router = express.Router()

router.get('/', function(req, res, next) {
  req.url = '/index.html'
  next()
})

app.use(router)

const appData = require('./data.json')
const menuData = appData.menuData
const hotData = appData.hotData
const currentSeasonData = appData.currentSeasonData
const foodCategoryData = appData.foodCategoryData
const findData = appData.findData
const challengeData = appData.challengeData
const userData = appData.userData
const apiRoutes = express.Router()

app.get('/api/menuData', (req, res) => {
  res.json({
    code: 0,
    message: 'success',
    data: menuData
  })
})

app.get('/api/hotData', (req, res) => {
  res.json({
    code: 0,
    message: 'success',
    data: hotData
  })
})

app.get('/api/currentSeasonData', (req, res) => {
  res.json({
    code: 0,
    message: 'success',
    data: currentSeasonData
  })
})

app.get('/api/foodCategoryData', (req, res) => {
  res.json({
    code: 0,
    message: 'success',
    data: foodCategoryData
  })
})

app.get('/api/findData', (req, res) => {
  res.json({
    code: 0,
    message: 'success',
    data: findData
  })
})

app.get('/api/challengeData', (req, res) => {
  res.json({
    code: 0,
    message: 'success',
    data: challengeData
  })
})

app.get('/api/userData', (req, res) => {
  res.json({
    code: 0,
    message: 'success',
    data: userData
  })
})

app.post('/api/login', (req, res) => {
  res.json({
    code: 0,
    message: 'success',
    data: 'testToken'
  })
})

app.post('/api/logout', (req, res) => {
  res.json({
    code: 0,
    message: 'success',
    data: null
  })
})

app.use('/api', apiRoutes)

app.use(express.static('./dist'))

module.exports = app.listen(port, function(err) {
  console.log(port)
  if (err) {
    console.log(err)
    return
  }
  console.log('success')
})
