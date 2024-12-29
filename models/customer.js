const Mongoose = require('mongoose');

const customerSchema = Mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number
    },
    address:{
        type:[String]
    }
});

module.exports = Mongoose.model('Customer',customerSchema);