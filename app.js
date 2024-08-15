const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up EJS as the view engine
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

// Routes
const routes = require('./routes');  // Adjusted require statement
app.use('/', routes);

// Start server
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

