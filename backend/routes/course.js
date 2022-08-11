const course = require('express').Router();
const {getCourses, createCourse} = require('../controllers/course')

// getting all course
course.get('/', getCourses)

// creating course
course.post("/create", createCourse)

module.exports= course