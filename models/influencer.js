const Mongoose = require('mongoose');

const influencerSchema = Mongoose.Schema({
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
        type:Number,
    },
    onboardingStatus:{
        type:String,
        required:true,
    },
    isSeller:{
        type:Boolean,
        required:true
    }
});

module.exports = Mongoose.model('Influencer',influencerSchema);