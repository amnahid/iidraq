const {courseGateway, courseManager} = require("../logic/course")

// get '/course' (?page=pageNumber&limit=limitNumber)
const getCourses = async (req, res) => {
    try {
        const pageNumber = req.query.page || 0 // Page number
        const limitPerPage = req.query.limit || 10 // pa
        const courses = await courseGateway({pageNumber, limitPerPage}) // getting courses
        // response
        res.status(200).send({
            status: 200,
            message: 'Requested Courses',
            body: courses
        })
    } catch (e) {
        console.log(e);
    }
}

// post '/course/create'
const createCourse = async (req, res) => {
    try {
        // storing course data on DB
        const course = await courseManager(req.body) // creating course
        // response
        res.status(201).send({
            status: 201,
            message: `Your "${course.title}" Course created successfully`,
            body: course
        })
    } catch (e) {
        console.log(e);
        // response
        res.status(500).send({
            status: 500,
            message: `Error occurred while creating course`,
            body: null
        })
    }
}

module.exports = { getCourses, createCourse }