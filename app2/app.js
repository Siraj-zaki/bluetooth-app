const express = require('express');

const app = express();

// Serve static files for frontend
app.use(express.static('public'));

module.exports = app;
