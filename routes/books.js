const express = require("express");
const router = express.Router();
const Author = require('../models/author')

// All Books Route
router.get("/", async (req, res) => {
    res.send('All Books')
});

// New Book Route
router.get("/new", (req, res) => {
    res.send('New Book')
});

// Create Book Route
router.post('/', async (req, res) => {
    res.send('Create Book')
})

module.exports = router;