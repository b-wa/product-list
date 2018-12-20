const mongoose = require("mongoose")
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    userName: String,
    reviewText: String,
    product: {type: Schema.Types.ObjectId, ref: "product"}
})

module.exports = mongoose.model("review", reviewSchema)