const express = require('express');
const router = express.Router();

// GET request for the homepage
router.get('/', (req, res) => {
    res.render('index');  // Renders index.ejs from views directory
});

// POST request handling form submission
router.post('/arts', (req, res) => {
    const { username } = req.body;
    res.render('arts', { username });  // Renders arts.ejs from views directory with username
});

module.exports = router;

