const Mongoose = require('mongoose');

const productSchema = Mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        unique:true
    },
    stockLeft:{
        type:Number,
        required:true
    },
    influencerId:{
        type:String,
        required:true
    }
});

module.exports = Mongoose.model('Product',productSchema);