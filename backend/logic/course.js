const { json } = require('body-parser')
const courseDB = require('../database/models/course')

// get '/course' (?page=pageNumber&limit=limitNumber)
const getAllCourse = async (req, res) => {
    try {
        const page = req.query.page || 0
        const pagePerLimit = req.query.limit || 10
        const course = await courseDB.find({}).limit(pagePerLimit).skip(page * pagePerLimit)
        console.log(page, pagePerLimit);
        res.send(course)
    } catch (e) {
        console.log(e);
    }
}

// post '/course/create'
const createCourse = async (req, res) => {
    try {
        const course = await courseDB.create(req.body)
        res.send(course)
    } catch (e) {
        console.log(e);
    }
}

module.exports = { getAllCourse, createCourse }