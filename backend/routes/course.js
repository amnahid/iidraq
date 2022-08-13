const course = require('express').Router();
const {getCourses, createCourse, deleteCourse, updateCourse} = require('../controllers/course')

// getting all course
course.get('/', getCourses)

// creating course
course.post("/create", createCourse)

// deleting course
course.delete("/delete", deleteCourse)

// updating course
course.put("/update", updateCourse)

module.exports= course