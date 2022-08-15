const route = require('express').Router();
const course = require('./course')
const account = require('./account')

// routes
route.use('/course', course)
route.use('/account', account)

module.exports= route