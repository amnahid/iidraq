const courseDB = require('../database/models/course')

// logic for course searching, all course viewing, sending recommended courses
const courseGateway = async ({ pageNumber, limitPerPage, category, queryText }) => {
    const course = await courseDB.find({}).limit(limitPerPage).skip(pageNumber * limitPerPage)
    return course
}

const courseManager = async (courseData) => {
    const { title, metaDescription, description, authors, organization, thumbnail, curriculum, price } = courseData // extracting needed only values
    const filteredCourseData = { title, metaDescription, description, authors, organization, thumbnail, curriculum, price } // declaring courseData obj to assigning needed only values in this
    const course = await courseDB.create(filteredCourseData) // course data storing on DB
    return course
}

module.exports = { courseGateway, courseManager }