var express = require('express');
var router = express.Router();

router
    .get("/", ((req, res) => {
        res.send("api/posts REQUEST RECEIVED")
    }))
    .get("/:id", ((req, res) => {
        res.send("api/posts/:id REQUEST RECEIVED")
    }))
    .post("/", ((req, res) => {
        res.send("api/posts REQUEST RECEIVED")
    }))
    .put("/:id", ((req, res) => {
        res.send("api/posts/:id REQUEST RECEIVED")
    }))
    .delete("/:id", ((req, res) => {
        res.send("api/posts/:id REQUEST RECEIVED")
    }))

module.exports = router;