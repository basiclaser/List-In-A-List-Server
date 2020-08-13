const express = require("express")
const postsRouter = require("./routes/posts")
const cors = require("cors")
require("dotenv").config()
require('./database/client')

const app = express()
app.use(express.json());
app.use(cors())

app.use('/api/posts', postsRouter);
app.listen(process.env.PORT, () => console.log("running on " + process.env.PORT))