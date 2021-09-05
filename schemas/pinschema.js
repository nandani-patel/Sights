const mongoose = require('mongoose');

const pin_schema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
        unique:true,
    },

    placeName:{
        type: String,
        require: true,
    },

    content:{
        type: String,
        require: true,
    },

    rating:{
        type: Number,
        require:true,
        min:0,
        max:5,
    },

    latitude:{
        type:Number,
        require:true,
    },

    Longitude:{
        type:Number,
        require:true,
    },

} , {timestamps:true});

module.exports = mongoose.model("pin", pin_schema);