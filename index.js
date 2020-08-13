const express = require("express")
const postsRouter = require("./routes/posts")
require("dotenv").config()
require('./database/client')

const app = express()
app.use(express.json());

app.use('/api/posts', postsRouter);
app.listen(3000, () => console.log("running on 3000"))