const express = require("express")
const app = express()

app.get("api/posts", (req,res) => {
    res.send("returning all posts")
})
app.get("api/posts/:id", (req,res) => {
    res.send("returning one post")
})
app.post("api/posts", (req,res) => {
    res.send("created a post")
})
app.put("api/posts", (req,res) => {
    res.send("updated a post")
})
app.delete("api/posts", (req,res) => {
    res.send("deleted a post")
})