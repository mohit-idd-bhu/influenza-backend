const router = require('express').Router();
const OrderService = require('../services/orderService');

router.get('/:id',async (req,res)=>{
    try{
        const id = req.params.id;
        const response = await OrderService.getOrderById(id);
        res.status(200).json({message:response});
    }
    catch(err){
        return res.status(500).json({message:"Server Error"});
    }
});

router.post('/',async (req,res)=>{
    try{
        const body = req.body;
        const response = await OrderService.createOrder(body);
        res.status(200).json({message:response});
    }
    catch(err){
        return res.status(500).json({message:"Server Error"});
    }
})