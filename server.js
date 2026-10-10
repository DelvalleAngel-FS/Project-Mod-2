require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = require("./app");
const connectDB = require("./app/db/config");

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
