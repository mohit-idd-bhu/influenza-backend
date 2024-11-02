const Mongoose = require('mongoose');

const transactionSchema = Mongoose.Schema({
    productId:{
        type:String,
        required:true
    },
    customerId:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    isCompleted:{
        type:Boolean,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    paymentMode:{
        type:String,
        required:true
    },
    trackingId:{
        type:String,
        required:true,
        unique:true
    }
});

module.exports = Mongoose.model('Blog',blogSchema);