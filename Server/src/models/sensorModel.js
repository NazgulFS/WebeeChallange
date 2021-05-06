const mongoose = require("mongoose");

const SensorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please fill the sensor name"],
  },
  active: {
    type: Boolean,
    default: false,
  },
  minval: {
    type: Number,
  },
  maxval: {
    type: Number,
  },
});

const Sensor = mongoose.model("Sensor", SensorSchema);
module.exports = Sensor;
