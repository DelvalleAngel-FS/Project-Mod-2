const express = require("express");
const router = express.Router();

const {
  createManufacturer,
  getManufacturerById,
  getAllManufacturer,
  updateManufacturer,
  deleteManufacturer,
} = require("../controller/manufacturerController");

router.get("/", getAllManufacturer);

router.post("/", createManufacturer);

router.get("/:id", getManufacturerById);

router.put("/:id", updateManufacturer);

router.delete("/:id", deleteManufacturer);

module.exports = router;
