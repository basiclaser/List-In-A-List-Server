const mongoose = require("mongoose")
const Schema = mongoose.Schema
const CommentSchema = new Schema({
    content: {type: String, min: 8, max: 1000, required: true},
    postId: {type: Schema.Types.ObjectId, required: true},
    createdAt: {type: Number, required: true},
})
const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment