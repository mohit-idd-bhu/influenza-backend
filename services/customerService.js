const Customer = require('../models/customer');
const CustomerService={};

CustomerService.getAllCustomers = async ()=>{
    try{
        const customerList = await Customer.find({});
        return customerList;
    }
    catch(err){
        console.log(err);
        throw err;
    }
}

CustomerService.getCustomerById = async (id)=>{
    try{
        const customer = await Customer.findOne({_id:id});
        return customer;
    }
    catch(err){
        console.log(err);
        throw err;
    }
}

CustomerService.createCustomer = async (req)=>{
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

CustomerService.updateCustomer = async (req,customer)=>{
    try{
        const {name,age,address} = req;
        customer.name = name, customer.age =age, customer.address = address;
        const response = Customer.findOneAndUpdate({_id:customer._id,customer});
        return response;
    }
    catch(err){
        console.log(err);
        throw err;
    }
}

module.exports = CustomerService;