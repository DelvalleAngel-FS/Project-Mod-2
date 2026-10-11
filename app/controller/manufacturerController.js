const Manufacturers = require("../models/Manufacturers");

const getALLManufacturers = async (req, res) => {
  const manufacturers = await Manufacturers.find({});
  res.status(200).json({
    data: manufacturers,
    success: true,
    message: `${req.method}- request to Manufacturer endpoint`,
  });
};

const getManufacturerById = async (req, res) => {
  const manufacturer = await Manufacturers.findById(req.params.id);
  res.status(200).json({
    data: manufacturer,
    success: true,
    message: `${req.method}- request to Manufacturer endpoint`,
  });
};

const createManufacturers = async (req, res) => {
  const { manufacturer } = req.body;
  const newManufacturer = await Manufacturers.create(manufacturer);
  console.log("data >>>", newManufacturer);
  res.status(200).json({
    success: true,
    message: `${req.method}- request to Manufacturer endpoint`,
  });
};

const updateManufacturer = async (req, res) => {
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

const deleteManufacturer = async (req, res) => {
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
  createManufacturers,
  updateManufacturer,
  deleteManufacturer,
  getALLManufacturers,
  getManufacturerById,
};
