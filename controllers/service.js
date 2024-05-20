const ServiceSchema = require('../models/ServiceTask');



// TaskPost This is For Post Info

const getAllServiceTasks = async (req, res)=> {
    try {
        const tasks = await ServiceSchema.find({})
        res.status(200).json({tasks}) 
    } catch (error) {
        res.status(500).json({msg:error})
    }

}

const createServiceTask = async (req, res)=> {
    try {
        const task = await ServiceSchema.create(req.body)
        res.status(201).json({task}) 
    } catch (error) {
        res.status(500).json({msg:error})
    }  
}

const getServiceTask = async (req, res)=> {
    try {
        const {id:taskID} = req.params
        const task = await ServiceSchema.findOne({_id:taskID})
        if (!task) {
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }
        res.status(200).json({task}) 
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const deleteServiceTask = async (req, res)=> {
    try {
        const {id:taskID} = req.params;
        const task = await ServiceSchema.findOneAndDelete({_id:taskID});
        if(!task) {
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }
        res.status(200).json({task:null, status:'success'})
    } catch (error) {
        res.status(500).json({msg:error})
    }    
} 

const updateServiceTask = async (req, res)=> {
    
    try {
        const {id:taskID} = req.params;

        const task = await ServiceSchema.findOneAndUpdate({_id:taskID}, req.body, {new:true, runValidators:true,})

        if(!task) {
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }
        res.status(200).json({id:taskID, data:req.body})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}


module.exports = {
    getAllServiceTasks,
    createServiceTask,
    getServiceTask,
    updateServiceTask,
    deleteServiceTask,
}