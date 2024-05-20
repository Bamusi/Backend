const express = require('express')

const router = express.Router();

const {
    getAllServiceTasks,
    createServiceTask,
    getServiceTask,
    updateServiceTask,
    deleteServiceTask,
} = require('../controllers/service')

// Routes for services
router.route('/').get(getAllServiceTasks).post(createServiceTask)
router.route('/:id').get(getServiceTask).patch(updateServiceTask).delete(deleteServiceTask)
module.exports = router