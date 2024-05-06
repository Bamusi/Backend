const express = require('express')

const router = express.Router();

const {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    getAllPostTasks,
    createPostTask,
    getPostTask,
    updatePostTask,
    deletePostTask,
    getAllCompanyTasks,
    createCompanyTask,
    getCompanyTask,
    updateCompanyTask,
    deleteCompanyTask,
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

// Routes for post info
router.route('/post').get(getAllPostTasks).post(createPostTask)
router.route('/post/:id').get(getPostTask).patch(updatePostTask).delete(deletePostTask)
// Routes for company info
router.route('/company').get(getAllCompanyTasks).post(createCompanyTask)
router.route('/company/:id').get(getCompanyTask).patch(updateCompanyTask).delete(deleteCompanyTask)
module.exports = router