const mongoose = require("mongoose");

const SensorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please fill the sensor name"],
  },
  active: {
    type: Boolean,

  },
  location: {
    lat: {
      type:Number
    },
    long: {
      type:Number
    }
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
