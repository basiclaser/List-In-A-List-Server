var express = require('express');
const GroupedComment = require('../database/models/groupedComments')
var router = express.Router();


router 
    .get("/:postId", (async (req, res, next) => { // get comments for this post 
        const {postId} = req.params
        await GroupedComment.findOne({postId})
            .then(allDocuments => res.json(allDocuments))
            .catch(err => next(new Error(err)))
    }))
    .get("/comment/:commentId", (async (req, res, next) => { // get individual comment 
        const {commentId} = req.params
        await GroupedComment.findById(commentId)
            .then(result => res.json(result))
            .catch(err => next(new Error(err)))
    }))

    .post("/:postId", (async (req, res, next) => { // create a comment
        const {postId} = req.params
        const newComment = {...req.body}
        GroupedComment.findOneAndUpdate(
            { postId },
            { $push: { comments: newComment }},
            {upsert: true, new: true}
        ) // update or insert // if this document doesn't exist, create it and update. If it exists, update it.
        .then(response => res.json(response))
        .catch(err => next(new Error(err)))   
    }))

    .put("/:commentId", (async(req, res, next) => {
        const {commentId} = req.params
        const {body} = req
        await GroupedComment.findByIdAndUpdate(commentId, body, {new:true, useFindAndModify:false})
            .then(updatedDocument => res.json(updatedDocument))
            .catch(err => next(new Error(err)))
    }))
    .delete("/:commentId", (async (req, res, next) => {
        const {commentId} = req.params
        await GroupedComment.findByIdAndDelete(commentId, {useFindAndModify:false})
            .then(response => res.json(response))
            .catch(err => next(new Error(err)))
    }))

module.exports = router;

// // create
// Comment.findOneAndUpdate(
//     { _id: req.body.id }, 
//     { $push: { friends: objFriends  } },
//    function (error, success) {
//          if (error) {
//              console.log(error);
//          } else {
//              console.log(success);
//          }
//      }
// ); // update
// Comment.update({'items.id': 2}, {'$set': {
//     'items.$.name': 'updated item2',
//     'items.$.value': 'two updated'
// }}, function (error, success) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(success);
//     }
// }); // delete
// Favorite.updateOne( {cn: req.params.name}, { $pullAll: {uid: [req.params.deleteUid] } } )
// Page.findOneOrCreate({ key: 'value' }, (err, page) => {
//     // ... code
//     console.log(page)
// })