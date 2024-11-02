const router = require('express').Router();
const Transaction = require('../models/transaction');
const OrderService = {};

OrderService.getOrderById = async (id)=>{
    try{
        const response = await Transaction.findById({_id:id});
        return response;
    }
    catch(err){
        console.log(err);
        throw err;
    }
}

module.exports = OrderService;