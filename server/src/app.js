// Imports
const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const api = require('./routes/api');

const app = express();

// Middlewares
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(morgan('combined'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
// API versioning: all routes will follow /v1/launches, /v1/planets etc
app.use('/v1', api);

// Load index.html at server's start up
app.get('/*', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;