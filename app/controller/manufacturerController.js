const Manufacturers = require("../models/Manufacturer");
const Car = require("../models/Car");

const getALLManufacturers = async (req, res) => {
  try {
    const manufacturers = await Manufacturers.find({});
    res.status(200).json({
      data: manufacturers,
      success: true,
      message: `${req.method}- request to Manufacturer endpoint`,
    });
  } catch ({ message }) {
    res.status(500).json({
      success: false,
      message,
    });
  }
};

const getManufacturerById = async (req, res) => {
  try {
    const manufacturer = await Manufacturers.findById(req.params.id);
    res.status(200).json({
      data: manufacturer,
      success: true,
      message: `${req.method}- request to Manufacturer endpoint`,
    });
  } catch ({ message }) {
    res.status(500).json({
      success: false,
      message,
    });
  }
};

const createManufacturers = async (req, res) => {
  try {
    const { manufacturer } = req.body;
    const newManufacturer = await Manufacturers.create(manufacturer);
    console.log("data >>>", newManufacturer);
    res.status(200).json({
      data: newManufacturer,
      success: true,
      message: `${req.method}- request to Manufacturer endpoint`,
    });
  } catch ({ message }) {
    res.status(500).json({
      success: false,
      message,
    });
  }
};

const updateManufacturer = async (req, res) => {
  try {
    const { id } = req.params;
    const manufacturer = await Manufacturers.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      manufacturer,
      id,
      success: true,
      message: `${req.method}- request to Manufacturer endpoint`,
    });
  } catch ({ message }) {
    res.status(500).json({
      success: false,
      message,
    });
  }
};

const deleteManufacturer = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteManufacturer = await Manufacturers.findByIdAndDelete(
      id,
      req.body,
      { new: true },
    );
    res.status(200).json({
      data: deleteManufacturer,
      success: true,
      message: `${req.method}- request to Manufacturer endpoint`,
    });
  } catch ({ message }) {
    res.status(500).json({
      success: false,
      message,
    });
  }
};

module.exports = {
  createManufacturers,
  updateManufacturer,
  deleteManufacturer,
  getALLManufacturers,
  getManufacturerById,
};
