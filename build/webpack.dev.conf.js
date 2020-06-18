'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

// 模拟接口
const express = require('express')
const app = express()
let appData = require('../data.json')
let menuData = appData.menuData
let hotData = appData.hotData
let currentSeasonData = appData.currentSeasonData
let foodCategoryData = appData.foodCategoryData
let findData = appData.findData
let challengeData = appData.challengeData
let userData = appData.userData
let apiRoutes = express.Router()
app.use('/api', apiRoutes)

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },
    before(app) {
      app.get('/api/menuData', (req, res) => {
        res.json({
          code: 0,
          message: 'success',
          data: menuData
        })
      }),
      app.get('/api/hotData', (req, res) => {
        res.json({
          code: 0,
          message: 'success',
          data: hotData
        })
      }),
      app.get('/api/currentSeasonData', (req, res) => {
        res.json({
          code: 0,
          message: 'success',
          data: currentSeasonData
        })
      }),
      app.get('/api/foodCategoryData', (req, res) => {
        res.json({
          code: 0,
          message: 'success',
          data: foodCategoryData
        })
      }),
      app.get('/api/findData', (req, res) => {
        res.json({
          code: 0,
          message: 'success',
          data: findData
        })
      }),
      app.get('/api/challengeData', (req, res) => {
        res.json({
          code: 0,
          message: 'success',
          data: challengeData
        })
      }),
      app.get('/api/userData', (req, res) => {
        res.json({
          code: 0,
          message: 'success',
          data: userData
        })
      }),
      app.get('/api/login', (req, res) => {
        res.json({
          code: 0,
          message: 'success',
          data: "testToken"
        })
      })
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
