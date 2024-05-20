const Task = require('../models/Task')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// Task This is For User Info
const JWT_SECRET = 'qQ90()/DGBAgGVhvhH{n}'


const getAllTasks = async (req, res)=> {
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks}) 
    } catch (error) {
        res.status(500).json({msg:error})
    }

}

const LoginTask = async (req, res)=> {
    try {     
        const {email:taskID} = req.params
        const checkUser = await Task.findOne({email:taskID})
        const {email, password} = req.body
        if(checkUser) {
            const checkPassword = await bcrypt.compare(password, checkUser.password)
            if (checkPassword) {
                const token = jwt.sign({email: checkUser.email}, JWT_SECRET);
                res.status(200).json({msg:'Logged-In', status:200,setup:checkUser.setup, data:token})
            } else {
                res.status(200).json({msg:'Wrong email or password', status:0}); 
            }   
        } else {
            res.status(200).json({msg:'Wrong email or password', status:0});
        }    
    } catch (error) {
        res.status(500).json({msg:error})
    }
}


const getUserTasks = async (req, res)=> {
    try {
        const {token} = req.body
        const user = jwt.verify(token, JWT_SECRET);
        const useremail = user.email;
        
        const task = await Task.findOne({ email: useremail})
        if (task) {
            res.send({status:200, data:task});
        } else {
            res.status(201).json({msg:'User Not Found'})
        }
    } catch (error) {
        res.status(500).json({msg:error})
    }

}

const UserData = async (req, res)=> {
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks}) 
    } catch (error) {
        res.status(500).json({msg:error})
    }
    // try {
    //     const {token} = req.body
    //     const user = jwt.verify(token, JWT_SECRET);
    //     const useremail = user.email;

    //     const task = Task.findOne({ email: useremail})
    //     if (task) {
    //         res.send({status:200, data:task.data});
    //     } else {
    //         res.status(201).json({msg:'User Not Found'})
    //     }
    // } catch (error) {
    //     res.status(500).json({msg:error})
    // }
} 

const createTask = async (req, res)=> {
    try {
        const {email:taskID} = req.params
        const checkUser = await Task.findOne({email:taskID})
        const {name, email, phone, password} = req.body
        if(!checkUser) {
            const encryptedPassword = await bcrypt.hash(password, 10);
            const data = {name,email,phone,password:encryptedPassword}
            const task = await Task.create(data);
            res.status(200).json({msg:'Registered Successfull', status:200}) 
        } else {
            res.status(200).json({msg:'Email already exist', status:0});
        }
        
    } catch (error) {
        res.status(500).json({msg:error})
    }
    
}

const getTask = async (req, res)=> {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if (!task) {
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }
        res.status(200).json({task}) 
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const deleteTask = async (req, res)=> {
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        if(!task) {
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }
        res.status(200).json({task:null, status:'success'})
    } catch (error) {
        res.status(500).json({msg:error})
    }    
} 

const updateTask = async (req, res)=> {
    
    try {
        const {id:taskID} = req.params;

        const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {new:true, runValidators:true,})

        if(!task) {
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    LoginTask,
    UserData,
    getUserTasks,
}