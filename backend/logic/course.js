const CourseDB = require('../database/models/course')

// logic for course searching, all course viewing, sending recommended courses
const courseGateway = async ({ pageNumber, limitPerPage, queryValues }) => {
    const course = await CourseDB.find(queryValues).limit(limitPerPage).skip(pageNumber * limitPerPage)
    return course
}

// logic for course creating
const CourseCreator = async (courseData) => {
    const { title, metaDescription, description, authors, organization, thumbnail, curriculum, price } = courseData // extracting needed only values
    const filteredCourseData = { title, metaDescription, description, authors, organization, thumbnail, curriculum, price } // assigning needed only values in here to simplify
    const course = await CourseDB.create(filteredCourseData) // course data storing on DB
    return course
}

// logic for delete course request
const courseDelete = async (id) => {
    try {
        await CourseDB.deleteOne({_id: id})
        return null
    } catch (e) {
        console.log(e);
        return e
    }
}

// logic for updating course
const courseUpdater = async (courseData) => {
    const { _id, title, metaDescription, description, authors, organization, thumbnail, curriculum, price } = courseData // extracting needed only values
    const filteredCourseData = { title, metaDescription, description, authors, organization, thumbnail, curriculum, price } // assigning needed only values in here to simplify
    const updatedData = {} // This object will store the updated properties of course
    const courseDataProperties = Object.keys(filteredCourseData)
    await courseDataProperties.map(prop => filteredCourseData[prop] ? updatedData[prop] = filteredCourseData[prop] : true) // assigning updated properties to updatedData objects

    // updating course
    const course = await CourseDB.findById(_id).updateOne(updatedData).get("title")
    console.log(course)
    return course
}

module.exports = { courseGateway, CourseCreator, courseDelete, courseUpdater }