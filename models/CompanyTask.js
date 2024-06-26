const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        default:'',
    }, 
    email:{
        type:String,
        trim:true,
        default:'',
    }, 
    review:{
        type:String,
        trim:true,
        default:'',
    }, 
})

const RatingSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        default:'',
    }, 
    email:{
        type:String,
        trim:true,
        default:'',
    }, 
    rating:{
        type:String,
        trim:true,
        default:'',
    },
})
const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
    }, 
    email:{
        type:String,
        trim:true,
        default:'',
    }, 
    longitude:{
        type:Number,
        trim:true,
        default:0,
    },
    latitude:{
        type:Number,
        trim:true,
        default:0,
    },
    price:{
        type:Number,
        trim:true,
        default:0,
    },
    about:{
        type:String,
        default:'',
    }, 
    phone:{
        type:String,
        trim:true,
        default:'',
    },
    city:{
        type:String,
        trim:true,
        default:'',
    },
    country:{
        type:String,
        trim:true,
        default:'',
    },
    website:{
        type:String,
        trim:true,
        default:'',
    },
    company_description:{
        type:String,
        default:'',
    },
    company_images:{
        type:Array,
        default:[],
    },
    background_image:{
        type:String,
        default:'',
    },
    profile_image:{
        type:String,
        default:'',
    },
    subscriptions:{
        type:Array,
        default:[],
    },
    working_time:{
        type:String,
        default:'',
    },
    other_location:{
        type:Array,
        default:[],
    },
    completed:{
        type:Boolean,
        default:false,
    },
    available:{
        type:Boolean,
        default:false,
    },
    reviews:[ReviewSchema],
    rating:[RatingSchema],
    hide_post_location:{
        type:Array,
        default:[],
    },
    notifications:{
        type:Array,
        default:[],
    },
    block:{
        type:Array,
        default:[],
    },
    category:{
        type:Array,
        default:[],
    },
})



module.exports = mongoose.model('CompanyTask', TaskSchema)
