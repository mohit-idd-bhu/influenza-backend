const router = require('express').Router();
const CustomerService = require('../services/customerService');

router.get('/',async (req,res)=>{
    try{
        const customerList = await CustomerService.getAllCustomers();
        res.status(200).json(customerList);
    }
    catch(err){
        res.status(500).json({message:"Not Found"});
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
        res.status(500).json({message:"Server Error"});
    }
});

router.post('/add', async (req,res)=>{
    try{
        const body =  req.body;
        const response = await CustomerService.createCustomer(body);
        res.send(200).json({message:response});
    }
    catch(err){
        res.status(500).json({message:"Server Error"});
    }
})

router.get('/orders/:id',async (req,res)=>{
    try{
        const id = req.params.id;
        const response = await OrderService.getOrderByCustomerId(id);
    }
    catch(err){
        res.status(500).json({message:"Server Error"});
    }
});

module.exports = router;