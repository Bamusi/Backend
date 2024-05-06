const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,'Must provide name'],
        trim:true,
        maxlength:[20, 'name cannot be more than 20 char']
    }, 
    email:{
        type:String,
        required:[true,'Must provide email'],
        trim:true,
    }, 
    personal:{
        type:String,
        required:[true,'Must provide email'],
        trim:true,
        default:'',
    }, 
    comments:{
        type:Array,
        required:[true,'Must provide email'],
        trim:true,
        default:[],
    },
    reviews:{
        type:Array,
        required:[true,'Must provide email'],
        trim:true,
        default:[],
    },
    image:{
        type:String,
        default:'null',
    },
    completed:{
        type:Boolean,
        default:false,
    },
    status:{
        type:Boolean,
        default:'null',
    },
    promotion:{
        type:Boolean,
        default:'null',
    },
    report:{
        type:Array,
        default:[],
    },
})

module.exports = mongoose.model('PostTask', TaskSchema)
