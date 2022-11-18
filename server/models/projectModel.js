const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema(
    {
        projectTitle: { type: String, required: true },
        projectTask: { type: String, required: true },
        projectDesciption: { type: String },
        projectImage: { type: String },
        projectComments: { type: String },
        projectUser: { type: String },
        projectFiles: { type: String },
    }, { timestamps: true }
);

const projects = mongoose.model("Projects", projectSchema);

module.exports = projects; 