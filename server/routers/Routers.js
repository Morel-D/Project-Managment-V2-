const express = require('express');

const router = express.Router();


// CRUD Operation....


// Get all the data (READ)
router.get('/', (req, res) => { 
    res.json({msg : "Data has been rendered"})
})

// Create data (CREATE)
router.post('/', (req, res) => {
    res.json({msg : "Data has been created"})
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