const Customer = require('../models/customer');
const CustomerService={};

CustomerService.getCustomers = async ()=>{
    try{
        const customerList = await Customer.find({});
        return customerList;
    }
    catch(err){
        console.log(err);
        throw err;
    }
}

CustomerService.addCustomer = async (req)=>{
    try{
        const {userName,name,email,age,address}=req;
        const customer = {
            userName:userName,
            name:name,
            email,email,
            age:age,
            address:address
        }
        const res = await Customer.create(customer);
        return res;
    }
    catch(err){
        console.log(err);
        throw err;
    }
}

module.exports = CustomerService;