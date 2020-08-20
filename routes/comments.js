var express = require('express');
var router = express.Router();
const Comment = require('../database/models/comments')

router 
    .get("/:postId", (async (req, res, next) => { // get comments for this post 
        const {postId} = req.params
        await Comment.findOne({postId})
            .then(allDocuments => res.json(allDocuments))
            .catch(err => next(new Error(err)))
    }))
    .get("/comment/:commentId", (async (req, res, next) => { // get individual comment 
        const {commentId} = req.params
        await Comment.findById(commentId)
            .then(result => res.json(result))
            .catch(err => next(new Error(err)))
    }))
    .post("/:postId", (async (req, res, next) => { // create a comment
        const {postId} = req.params
        const doc = {...req.body, postId, createdAt: Date.now()}
        await Comment.create(doc)
            .then(newDocument => res.json(newDocument))
            .catch(err => next(new Error(err)))
    }))
    .put("/:commentId", (async(req, res, next) => {
        const {commentId} = req.params
        const {body} = req
        await Comment.findByIdAndUpdate(commentId, body, {new:true, useFindAndModify:false})
            .then(updatedDocument => res.json(updatedDocument))
            .catch(err => next(new Error(err)))
    }))
    .delete("/:commentId", (async (req, res, next) => {
        const {commentId} = req.params
        await Comment.findByIdAndDelete(commentId, {useFindAndModify:false})
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