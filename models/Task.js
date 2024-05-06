const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
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
    profession:{
        type:String,
        trim:true,
        default:'',
    }, 
    phone:{
        type:String,
        required:[true,'Must provide email'],
        trim:true,
        default:'',
    },
    password:{
        type:String,
        required:[true,'Must provide password'],
        trim:true,
        default:'',
    },
    image:{
        type:String,
        default:'',
    },
    completed:{
        type:Boolean,
        default:false,
    },
    setup:{
        type:Boolean,
        default:false,
    },
})

module.exports = mongoose.model('Task', TaskSchema)
