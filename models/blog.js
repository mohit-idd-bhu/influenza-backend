const Mongoose = require('mongoose');

const blogSchema = Mongoose.Schema({
    blogUserId:{
        type:String,
        required:true,
        unique:true
    },
    content:{
        type:String,
        required:true
    },
    likes:{
        type:Number
    }
});

module.exports = Mongoose.model('Blog',blogSchema);