var express = require('express');
var router = express.Router();
const Post = require('../database/models/posts')

router
    .get("/", (async (req, res) => {
        const results = await Post.find()
        res.json(results)
    }))
    .get("/:id", (async (req, res) => {
        const {id} = req.params
        const results = await Post.findById(id)
        res.json(results)
    }))
    .post("/", (async (req, res) => {
        const {
            title,
            content
        } = req.body
        
        if (!title ||
            !content) {
            return res
                .status(400)
                .send('Missing information to save a Post')
        }
        const result = await Post.create({...req.body, createdAt: Date.now()})
        res.json(result)
    }))

    .put("/:id", (async(req, res) => {
        const {id} = req.params
        const {body} = req
        const updatedDocument = await Post.findByIdAndUpdate(id, body)
        res.send(updatedDocument)
    }))

    .delete("/:id", (async (req, res) => {
        const {id} = req.params
        const response = await Post.findByIdAndDelete(id)
        res.sendStatus(204)
    }))

module.exports = router;
