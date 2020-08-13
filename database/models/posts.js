const mongoose = require("mongoose")
const Schema = mongoose.Schema
const PostSchema = new Schema({
    title: {type: String, min:8, max: 100, required:true},
    content: {type: String, min: 8, max: 1000, required: true},
    createdAt: {type: Number, required: true},
})
const Post = mongoose.model('Post', PostSchema)

module.exports = Post