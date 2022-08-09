const route = require('express').Router();
const course = require('./course')

// routes
route.use('/course', course)

module.exports= route