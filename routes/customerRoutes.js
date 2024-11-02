const router = require('express').Router();
const CustomerService = require('../services/customerService');

router.get('/',async (req,res)=>{
    try{
        const customerList = await CustomerService.getCustomers();
        res.status(200).json(customerList);
    }
    catch(err){
        res.status(404).json({message:"Not Found"});
    }
});

router.post('/add', async (req,res)=>{
    try{
        const body =  req.body;
        const response = await CustomerService.addCustomer(body);
        res.send(200).json({message:response});
    }
    catch(err){
        console.log(err);
        throw err;
    }
})

module.exports = router;