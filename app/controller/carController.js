const Cars = require("../models/Cars");

const getALLCars = async (req, res) => {
  const manufacturers = await Manufacturers.find({});
  res.status(200).json({
    data: manufacturers,
    success: true,
    message: `${req.method}- request to Manufacturer endpoint`,
  });
};

const getCarById = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method}- request to Manufacturer endpoint`,
  });
};

const createCars = async (req, res) => {
  const { manufacturer } = req.body;
  const newManufacturer = await Manufacturers.create(manufacturer);
  console.log("data >>>", newManufacturer);
  res.status(200).json({
    success: true,
    message: `${req.method}- request to Manufacturer endpoint`,
  });
};

const updateCar = async (req, res) => {
  const { id } = req.params;
  const manufacturer = await Manufacturers.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200).json({
    data: manufacturer,
    success: true,
    message: `${req.method}- request to Manufacturer endpoint`,
  });
};

const deleteCar = async (req, res) => {
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
};

module.exports = {
  createCars,
  updateCar,
  deleteCar,
  getALLCars,
  getCarById,
};
