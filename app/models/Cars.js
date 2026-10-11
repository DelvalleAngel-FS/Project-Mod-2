const mongoose = require("mongoose");

const carsSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  isActive: { type: Boolean, default: true },
});

module.exports = mongoose.model("Car", carsSchema);
