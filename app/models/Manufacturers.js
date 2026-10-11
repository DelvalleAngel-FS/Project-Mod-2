const mongoose = require("mongoose");

const manufacturersSchema = new mongoose.Schema({
  name: String,
  year: Number,
  location: String,
  isActive: { type: Boolean, default: true },
});

module.exports = mongoose.model("Manufacturer", manufacturersSchema);
