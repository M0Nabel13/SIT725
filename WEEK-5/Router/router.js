const express = require('express');
const controller = require('../Controller/controller');
const router = express.Router();

router.get('/tasks', controller.fetchTasks);
router.post('/tasks', controller.createTask);

module.exports = router;
