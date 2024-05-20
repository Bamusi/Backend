const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        default:'',
    }, 
    location:{
        type:String,
        trim:true,
        default:'',
    }, 
    longitude:{
        type:String,
        trim:true,
        default:'',
    }, 
    latitude:{
        type:String,
        trim:true,
        default:'',
    },
    price:{
        type:String,
        trim:true,
        default:'',
    },
    booked:{
        type:Array,
        default:[],
    },
    hide_post:{
        type:Array,
        default:[],
    },
    add_to_favourites:{
        type:Array,
        default:[],
    },
    service_id:{
        type:Array,
        default:[],
    },
    description:{
        type:String,
        trim:true,
        default:'',
    }, 
    image:{
        type:String,
        trim:true,
        default:'',
    }, 
    category:{
        type:String,
        trim:true,
        default:'',
    }, 
})

const ServiceSchema = new mongoose.Schema({
    company_id:{
        type:String,
        trim:true,
        default:'',
    }, 
    company_services:[TaskSchema], 
})

module.exports = mongoose.model('ServiceSchema', ServiceSchema)
