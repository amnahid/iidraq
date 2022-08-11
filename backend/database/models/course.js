const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: String,
    metaDescription: String,
    description: String,
    authors: [],
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
    learningSummaries: String,
    students: [],
    testimonials: [],
})

module.exports = mongoose.model('course', courseSchema)


const bullshit = {
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
    "learningSummaries": "String",
    "students": [],
    "testimonials": []
}