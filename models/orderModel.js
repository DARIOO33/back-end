const { Double } = require("mongodb")
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const orderSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    num: {
        type: Number,
        required: false
    },
    type: {
        type: String,
        required: true,
    },
    detail: {
        type: String,
    },
    income: {
        type: Number,
        required: true
    },
    initialPrice: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    num_orders: {
        type: Number,
        required: false
    },


}, { timestamps: true })

module.exports = mongoose.model("Order", orderSchema)

