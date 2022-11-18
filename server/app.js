require('dotenv').config();
const express = require('express');
const { default: mongoose } = require('mongoose');
const routerProject = require('./routers/projectRouters');

// express app setup
const app = express();


// Express middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})


// Database Connection
mongoose.connect(process.env.DB_URL)
    .then(() => {
     // Listening to the app
     app.listen(process.env.PORT, () => {
        console.log("The app is listening on port ", process.env.PORT)
    })   
    }).catch(error => {
        console.log(error)
    })



// Router path to the varouis requests

// i) For Project Functionality
app.use('/Project', routerProject);

