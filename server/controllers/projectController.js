const mongoose = require('mongoose');
const Projects = require('../models/projectModel');


// Get all the data (READ)

const getAllProjects = ((req, res) => {
    Projects.find().sort({ createdAt: -1 })
        .then((results) => {
        res.json(results)
        }).catch((error) => {
        console.log(error)
    })
})


// Post data (CREATE)

const postProjects = ((req, res) => {

    // const { projectTitle, projectTask, projectDesciption, projectImage, projectComments, projectUser, projectFiles } = req.body;

    const project = new Projects(req.body);
    project.save()

    Projects.find()
        .then((results) => {
        res.status(200).json(results)
        }).catch((error) => {
        console.log(error)
    })
})


// Get Single Data
const singleProject = ((req, res) => {
    const id = mongoose.Types.ObjectId(req.params.id);

    Projects.findById(id)
        .then((results) => {
        res.status(200).json(results)
        }).catch((error) => {
        console.log("Something went wrong", error)
    })

})


// Update Single Data (UPDATE)
const updateProject = ((req, res) => {

    const newProject = {
        projectTitle: req.body.projectTitle,
        projectTask: req.body.projectTask,
        projectDesciption: req.body.projectDesciption,
        projectImage: req.body.projectImage,
        projectComments: req.body.projectComments,
        projectUser: req.body.projectUser,
        projectFiles: req.body.projectFiles,
    }

    const id = mongoose.Types.ObjectId(req.params.id);

    Projects.findByIdAndUpdate(id, newProject)
        .then((results) => {
        res.status(200).json(results)
        }).catch((error) => {
        console.log("Something went wrong ", error)
    })
})


// Delete Single data
const deleteProject = ((req, res) => {
     const id = mongoose.Types.ObjectId(req.params.id);

    Projects.findByIdAndRemove(id)
        .then((results) => {
        res.status(200).json(results)
        }).catch((error) => {
        console.log("Something went wrong ", error)
    })
})



module.exports = {
    getAllProjects, 
    postProjects,
    singleProject,
    updateProject,
    deleteProject
}