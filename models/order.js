const Mongoose = require('mongoose');

const orderSchema = Mongoose.Schema({
    productList:{
        type:[String],
        required:true
    },
    transactionId:{
        type:String,
        required:true
    },
    orderDate:{
        type:Date,
        required:true
    },
    trackingIdList:{
        type:[String],
        required:true
    }
});

module.exports = Mongoose.model('Order',orderSchema);