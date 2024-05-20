const express = require('express')

const router = express.Router();

const {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    LoginTask,
    UserData,
    getUserTasks,
} = require('../controllers/task')

// Routes for user info
router.route('/user').post(getUserTasks)
router.route('/').get(getAllTasks).post(createTask)
router.route('/:email').post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)
router.route('/login/:email').post(LoginTask)

module.exports = router