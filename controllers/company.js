const CompanyTask = require('../models/CompanyTask')

// TaskPost This is For Company Info

const getAllCompanyTasks = async (req, res)=> {
    try {
        const tasks = await CompanyTask.find({})
        res.status(200).json({tasks}) 
    } catch (error) {
        res.status(500).json({msg:error})
    }

}

const createCompanyTask = async (req, res)=> {
    try {
        const task = await CompanyTask.create(req.body)
        res.status(200).json({task}) 
    } catch (error) {
        res.status(501).json({msg:error})
    }
    
}

const getCompanyTask = async (req, res)=> {
    try {
        const {id:taskID} = req.params
        const task = await CompanyTask.findOne({_id:taskID})
        if (!task) {
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }
        res.status(200).json({task}) 
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const deleteCompanyTask = async (req, res)=> {
    try {
        const {id:taskID} = req.params;
        const task = await CompanyTask.findOneAndDelete({_id:taskID});
        if(!task) {
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }
        res.status(200).json({task:null, status:'success'})
    } catch (error) {
        res.status(500).json({msg:error})
    }    
} 

const updateCompanyTask = async (req, res)=> {
    
    try {
        const {id:taskID} = req.params;

        const task = await CompanyTask.findOneAndUpdate({_id:taskID}, req.body, {new:true, runValidators:true,})

        if(!task) {
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }
        res.status(200).json({id:taskID, data:req.body})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}


module.exports = {
    getAllCompanyTasks,
    createCompanyTask,
    getCompanyTask,
    updateCompanyTask,
    deleteCompanyTask,
}