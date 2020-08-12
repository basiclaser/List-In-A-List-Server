const express = require("express")
const postsRouter = require("./routes/posts")

const app = express()
app.use(express.json());

app.use('/api/posts', postsRouter);
app.listen(3000, () => console.log("running on 3000"))