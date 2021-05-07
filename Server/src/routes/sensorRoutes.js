const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middleware/authMiddleware')

const sensorController = require('../controllers/sensorController');

router.delete('/delete', sensorController.delete);

router
    .route('/')
    .get(sensorController.getAllSensors)
    .post(sensorController.createSensor);

router
    .route('/:id')
    .get(sensorController.getSensor)
    .patch(sensorController.updateSensor)
    .delete(sensorController.deleteSensor);

module.exports = router;