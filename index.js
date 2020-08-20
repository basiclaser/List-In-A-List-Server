const express = require("express")
const postsRouter = require("./routes/posts")
// const commentsRouter = require("./routes/comments")
const groupedCommentsRouter = require("./routes/groupedComments")

const cors = require("cors")
require("dotenv").config()
require('./database/client')

const app = express()

app.use(express.json());
app.use(cors())

app.use('/api/posts', postsRouter);
// app.use('/api/comments', commentsRouter);
app.use('/api/groupedcomments', groupedCommentsRouter);

// error middleware
app.use((err, req, res, next) => {
    console.error(new Date(), err.message)
    res.send(`Sorry! there was a problem with your last action: ${err.message}`)
})

app.listen(process.env.PORT, () => console.log("running on " + process.env.PORT))


// in server, add basic error handling to our API 
// in server, make the routes of our second list ("comments", "tasks", "songs")
// in react, make a view to CRUD the second list 