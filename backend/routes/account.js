const account = require('express').Router()
const {signup} = require('../logic/account')

account.post('/signup', signup)

module.exports = account