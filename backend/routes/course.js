const course = require('express').Router();
const {getAllCourse, createCourse} = require('../logic/course')

// getting all course
course.get('/', getAllCourse)

// creating course
course.post("/create", createCourse)

module.exports= course