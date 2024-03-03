const OrderModel = require("../models/orderModel")




const createOrder = async (req, res) => {
    const { fullname, type, detail, income, initialPrice, date ,norders} = req.body
    const data = await OrderModel.find()
    const count = data.length + 1
    console.log(count);
    const order = OrderModel.create({ fullname, num: count, type, detail, income, initialPrice, date,norders })
    res.status(200).json(order)

}

const getOrders = async (req, res) => {
    const order = await OrderModel.find();
    res.send(order);

}


module.exports = {
    createOrder,
    getOrders


}