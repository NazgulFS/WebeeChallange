const express = require('express');
const cors = require('cors');
const sensorRoutes = require('./routes/sensorRoutes');

const app = express();

// Allow Cross-Origin requests
app.use(cors());

// Routes
app.use('/api/v1/sensors', sensorRoutes);

//undefined Routes
app.use('*', (req, res, next) => {
    const err = new AppError(404, 'error', 'undefined route');
    next(err, req, res, next);
});

module.exports = app;