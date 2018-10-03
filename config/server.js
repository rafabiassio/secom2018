const express = require('express')
const bodyParser = require('body-parser')
const consign = require('consign')

const app = express()

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(bodyParser.urlencoded({extended: true}))

consign()
	.include('src/controllers')
	.then('src/models')
	.then('src/routes')
	.into(app)

module.exports = app