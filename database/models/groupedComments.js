const mongoose = require("mongoose")
const Schema = mongoose.Schema

const GroupedCommentSchema = new Schema({
    postId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    comments: {
        type: [Object],
        required: true
    },
}, {
    timestamps: true
})


const GroupedComment = mongoose.model('GroupedComment', GroupedCommentSchema)

module.exports = GroupedComment