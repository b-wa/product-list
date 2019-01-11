const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const dbUrl = "mongodb://localhost:27017/products";

mongoose.connect(dbUrl, {useNewUrlParser: true}).then(() => console.log(`Mongo connected to ${dbUrl}`))

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors())

const mainRoutes = require("./routes/main")

app.use(mainRoutes)

app.listen(8000, () => {
    console.log("Node.js is listening on port " + 8000)
}); 