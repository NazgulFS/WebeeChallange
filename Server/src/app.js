const express = require('express');
const cors = require('cors');

const app = express();

const sensorRoutes = require('./routes/sensorRoutes');
const authRoutes = require('./routes/authRoutes');
const globalErrHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');

// parse application/x-www-form-urlencoded
app.use(express.json());

// Allow Cross-Origin requests
app.use(cors());

// base route
app.use('/api', sensorRoutes);

app.use('/auth', authRoutes);

// undefined Routes
app.use('*', (req, res, next) => {
    const err = new AppError(404, 'error', 'undefined route');
    next(err, req, res, next);
});

app.use(globalErrHandler);

module.exports = app;