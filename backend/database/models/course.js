const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: String,
    metaDescription: String,
    description: String,
    authors: String,
    organization: String,
    thumbnail: String,
    ratings: Number,
    curriculum: String,
    price: Number,
    badges: [],
    genres: [],
    createdAt: {
        type: Date,
        default: Date.now(),
        immutable: true
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    learningSummeries: String,
    students: [],
    testimonials: [],
})

module.exports = mongoose.model('course', courseSchema)


const bulshit = {
    "title": "String",
    "metaDescription": "String",
    "description": "String",
    "authors": "String",
    "organization": "String",
    "thumbnail": "String",
    "curriculum": "String",
    "price": 567,
    "badges": [],
    "genres": [],
    "learningSummeries": "String",
    "students": [],
    "testimonials": []
}