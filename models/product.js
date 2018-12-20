const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema({
    category: String,
    name: String,
    price: Number,
    image: String,
    reviews: [{type: String, ref: "review"}]
})

module.exports = mongoose.model("product", productSchema)