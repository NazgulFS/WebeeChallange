const Sensor = require('../models/sensorModel');
const base = require('./baseController');

exports.delete = async (req, res, next) => {
    try {
        await Sensor.findByIdAndUpdate(req.Sensor.id, {
            active: false
        });
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (error) {
        next(error);
    }
};

exports.getAllSensors = base.getAll(Sensor);
exports.getSensor = base.getOne(Sensor);
exports.createSensor = base.createOne(Sensor);

exports.updateSensor = base.updateOne(Sensor);
exports.deleteSensor = base.deleteOne(Sensor);