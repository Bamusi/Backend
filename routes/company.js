const express = require('express')

const router = express.Router();

const {
    getAllCompanyTasks,
    createCompanyTask,
    getCompanyTask,
    updateCompanyTask,
    deleteCompanyTask,
} = require('../controllers/company')

// Routes for user info

router.route('/').get(getAllCompanyTasks).post(createCompanyTask)
router.route('/:id').get(getCompanyTask).patch(updateCompanyTask).delete(deleteCompanyTask)
// Routes for services
module.exports = router