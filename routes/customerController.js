const router = require('express').Router();
const CustomerService = require('../services/customerService');
const OrderService = require('../services/orderService');

router.get('/',async (req,res)=>{
    try{
        const customerList = await CustomerService.getAllCustomers();
        return res.status(200).json(customerList);
    }
    catch(err){
        return res.status(500).json({message:"Not Found"});
    }
});

router.get('/:id',async (req,res)=>{
    try{
        const id = req.params.id;
        const customer = await CustomerService.getCustomerById(id);
        if(customer===undefined)
            return res.status(404).json({message:"Not Found"});
        return res.status(200).json({message:customer});
    }
    catch(err){
        return res.status(500).json({message:"Server Error"});
    }
});

router.get('/orders/:id',async (req,res)=>{
    try{
        const id = req.params.id;
        const response = await OrderService.getOrdersByCustomerId(id);
        return res.status(200).json({message:response});
    }
    catch(err){
        return res.status(500).json({message:"Server Error"});
    }
});

router.put('/update/:id',async (req,res)=>{
    try{
        const id = req.params.id;
        const details = req.body;
        const customer = await CustomerService.getCustomerById(id);
        if(customer===undefined)
            return res.status(404).json({message:"User Not Found"});
        const response = await CustomerService.updateCustomer(details,customer);
        return res.status(200).json({message:response});
    }
    catch(err){
        res.status(500).send({message:"Server Error"});
    }
});

router.post('/add', async (req,res)=>{
    try{
        const body =  req.body;
        const response = await CustomerService.createCustomer(body);
        return res.send(200).json({message:response});
    }
    catch(err){
        return res.status(500).json({message:"Server Error"});
    }
})

module.exports = router;