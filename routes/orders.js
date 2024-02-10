const express = require("express")
const router = express.Router()

const {
    createOrder,
    getOrders
} = require("../controllers/orderController.js");



router.post("/create", createOrder)
router.get("/collect", getOrders)

module.exports = router
