const Order = require('../models/order');
const OrderService = {};

OrderService.getOrderById = async (id)=>{
    try{
        const response = await Order.find({_id:id});
        return response;
    }
    catch(err){
        console.log(err);
        throw err;
    }
};

OrderService.getOrdersByCustomerId = async (customerId)=>{
    try{
        const response = await Order.find({customerId:customerId});
        return response;
    }
    catch(err){
        console.log(err);
        throw err;
    }
};

OrderService.createOrder = async (req)=>{
    try{
        const order = {
            productList: req.productList,
            customerId: req.customerId,
            transactionId: req.transactionId,
            orderDate: req.orderDate,
            trackingIdList: req.trackingIdList
        }
        const response = await Order.create(order);
        return response;
    }
    catch(err){
        console.log(err);
        throw err;
    }
}

module.exports = OrderService;