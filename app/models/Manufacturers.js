const mongoose = require("mongoose");

const manufacturersSchema = new mongoose.Schema({
  name: String,
  year: Number,
  location: String,
});

module.exports = mongoose.model("Manufacturer", manufacturersSchema);
