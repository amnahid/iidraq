const { courseGateway, CourseCreator, courseDelete, courseUpdater } = require("../logic/course")
const { COURSE } = require('../utilities/error_response') // error response for course

// post '/course/create'
const createCourse = async (req, res, next) => {
    try {
        // storing course data on DB
        const course = await CourseCreator(req.body) // creating course
        // response
        res.status(201).send({
            status: 201,
            message: `Your "${course.title}" Course created successfully`,
            body: course
        })
    } catch (e) {
        // response
        next({
            status: COURSE.ERR_IN_COURSE_CREATION.status,
            message: COURSE.ERR_IN_COURSE_CREATION.message
        })
    }
}

// get '/course' (?page=pageNumber&limit=limitNumber)
const getCourses = async (req, res, next) => {
    try {
        const pageNumber = req.query.page || 0 // Page number
        const limitPerPage = req.body.limit || 10 // viewing course per page
        const queryValues = req.body.queryValues || {} // req.query.queryValues must has to be object and this values is for finding courses on DB
        const courses = await courseGateway({ pageNumber, limitPerPage, queryValues }) // getting courses
        // response
        res.status(200).send({
            status: 200,
            message: 'Requested Courses',
            body: courses
        })
    } catch (e) {
        // response
        next({
            status: COURSE.ERR_IN_GETTING_COURSE.status,
            message: COURSE.ERR_IN_GETTING_COURSE.message
        })
    }
}

// put '/course/update'
const updateCourse = async (req, res) => {
    try {
        // updating course data on DB
        const course = await courseUpdater(req.body) // updating course and getting the course title in return
        // response
        res.status(200).send({
            status: 200,
            message: `Your "${course}" Course updated successfully`,
            body: course
        })
    } catch (e) {
        // response
        next({
            status: COURSE.ERR_IN_UPDATING_COURSE.status,
            message: COURSE.ERR_IN_UPDATING_COURSE.message
        })
    }
}

// delete '/course/delete'
const deleteCourse = async (req, res) => {
    // deleting course data of DB
    const course = await courseDelete(req.body.id) // deleting course
    if (course) { // failed to delete the course
        // response
        next({
            status: COURSE.ERR_IN_DELETING_COURSE.status,
            message: COURSE.ERR_IN_DELETING_COURSE.message
        })

    } else { // succeed to delete the course
        // response
        res.status(200).send({
            status: 200,
            message: `Your Course deleted successfully`,
            body: null
        })
    }
}

module.exports = { getCourses, createCourse, deleteCourse, updateCourse }