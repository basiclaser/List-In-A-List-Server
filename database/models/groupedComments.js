const mongoose = require("mongoose")
const Schema = mongoose.Schema
const CommentSchema = require("./comments")
  
const GroupedCommentSchema = new Schema({
    postId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    comments: {
        type: [CommentSchema],
        required: true
    },
}, {
    timestamps: true
})


const GroupedComment = mongoose.model('GroupedComment', GroupedCommentSchema)

module.exports = GroupedComment