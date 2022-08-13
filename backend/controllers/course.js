const { courseGateway, CourseCreater, courseDelete, courseUpdater } = require("../logic/course")

// get '/course' (?page=pageNumber&limit=limitNumber)
const getCourses = async (req, res) => {
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
        console.log(e);
    }
}

// post '/course/create'
const createCourse = async (req, res) => {
    try {
        // storing course data on DB
        const course = await CourseCreater(req.body) // creating course
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

// delete '/course/delete'
const deleteCourse = async (req, res) => {
    // deleting course data of DB
    const course = await courseDelete(req.body.id) // deleting course
    if (course) { // failed to delete the course
        // response
        res.status(500).send({
            status: 500,
            message: `Error occurred while deleting course`,
            body: null
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
        console.log(e);
        // response
        res.status(500).send({
            status: 500,
            message: `Error occurred while updating course`,
            body: null
        })
    }
}

module.exports = { getCourses, createCourse, deleteCourse, updateCourse }