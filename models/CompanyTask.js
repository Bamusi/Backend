const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    company_name:{
        type:String,
        required:[true,'Must provide name'],
        trim:true,
        maxlength:[100, 'name cannot be more than 100 char']
    }, 
    company_email:{
        type:String,
        required:[true,'Must provide email'],
        trim:true,
    }, 
    about:{
        type:String,
        required:[true,'Must provide email'],
        default:'',
    }, 
    phone:{
        type:String,
        required:[true,'Must provide email'],
        trim:true,
        default:'',
    },
    company_profile:{
        type:String,
        default:'',
    },
    company_images:{
        type:Array,
        default:[],
    },
    status:{
        type:String,
        default:'',
    },
    subscriptions:{
        type:Array,
        default:[],
    },
    report:{
        type:String,
        default:'',
    },
    completed:{
        type:Boolean,
        default:false,
    },
})

module.exports = mongoose.model('CompanyTask', TaskSchema)
