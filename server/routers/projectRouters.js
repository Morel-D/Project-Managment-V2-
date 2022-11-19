const express = require('express');
const Projects = require('../models/projectModel');
const controller = require('../controllers/projectController');

const router = express.Router();


// CRUD Operation....


// Get all the data (READ)
router.get('/', controller.getAllProjects);

// Post data (CREATE)
router.post('/', controller.postProjects);

// Get Single Data 
router.get('/:id', controller.singleProject)

// Update Single Data (UPDATE)
router.patch('/:id', controller.updateProject)

// Delete Single data 
router.delete('/:id', controller.deleteProject)


module.exports = router;