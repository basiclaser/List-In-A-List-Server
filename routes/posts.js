var express = require('express');
var router = express.Router();
const Post = require('../database/models/posts')

router
    .get("/", (async (req, res, next) => {
        await Post.find()
            .then(allDocuments => res.json(allDocuments))
            .catch(err => next(new Error(err)))
    }))
    .get("/:id", (async (req, res, next) => {
        const {id} = req.params
        await Post.findById(id)
            .then(result => res.json(result))
            .catch(err => next(new Error(err)))
    }))

    .post("/", (async (req, res, next) => {
        const doc = {...req.body, createdAt: Date.now()}
        await Post.create(doc)
            .then(newDocument => res.json(newDocument))
            .catch(err => next(new Error(err)))
    }))

    .put("/:id", (async(req, res, next) => {
        const {id} = req.params
        const {body} = req
        await Post.findByIdAndUpdate(id, body, {new:true, useFindAndModify:false})
            .then(updatedDocument => res.json(updatedDocument))
            .catch(err => next(new Error(err)))
    }))
    .delete("/:id", (async (req, res, next) => {
        const {id} = req.params
        await Post.findByIdAndDelete(id, {useFindAndModify:false})
            .then(response => res.json(response))
            .catch(err => next(new Error(err)))
    }))

module.exports = router;
