const express = require('express');
const Projects = require('../models/projectModel');

const router = express.Router();


// CRUD Operation....


// Get all the data (READ)
router.get('/', (req, res) => { 
    res.json({msg : "Data has been rendered"})
})

// Post data (CREATE)
router.post('/', (req, res) => {
    
    // const { projectTitle, projectTask, projectDesciption, projectImage, projectComments, projectUser, projectFiles } = req.body;

    const project = new Projects(req.body)
    project.save()

    Projects.find()
        .then((results) => {
        res.status(200).json(results)
        }).catch((error) => {
        res.status(400).json(error)
    })
})

// Get Single Data 
router.get('/:id', (req, res) => {
    res.json({msg : "Single data hes been selected"})
})

// Update Single Data (UPDATE)
router.patch('/:id', (req, res) => {
    res.json({msg : "Data has been updated"})
})

// Delete Single data 
router.delete('/:id', (req, res) => {
    res.json({msg : "Delete single data"})
})


module.exports = router;