var express = require('express');
var router = express.Router();
const Post = require('../database/models/posts')

router
    .get("/", ((req, res) => {
        res.send("api/posts REQUEST RECEIVED")
    }))
    .get("/:id", ((req, res) => {
        res.send("api/posts/:id REQUEST RECEIVED")
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

    .put("/:id", ((req, res) => {
        res.send("api/posts/:id REQUEST RECEIVED")
    }))
    .delete("/:id", ((req, res) => {
        res.send("api/posts/:id REQUEST RECEIVED")
    }))

module.exports = router;
