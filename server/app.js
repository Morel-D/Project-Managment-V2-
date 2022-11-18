require('dotenv').config();
const express = require('express');
const routerPath = require('./routers/Routers');

// express app setup
const app = express();


// Express middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})


// Router path to the varouis requests
app.use('/Project', routerPath);

// Listening to the app
app.listen(process.env.PORT, () => {
    console.log("Listening on port", process.env.PORT)
})


