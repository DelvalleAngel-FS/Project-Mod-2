const Car = require("../models/Car");
const Manufacturer = require("../models/Manufacturer");

const getALLCars = async (req, res) => {
  const car = await Car.find({});
  res.status(200).json({
    data: car,
    success: true,
    message: `${req.method}- request to Car endpoint`,
  });
};

const getCarById = async (req, res) => {
  const car = await Car.findById(req.params.id);
  res.status(200).json({
    data: car,
    success: true,
    message: `${req.method}- request to Car endpoint`,
  });
};

const createCars = async (req, res) => {
  const { car } = req.body;
  const newCar = await Car.create(car);
  console.log("data >>>", newCar);
  res.status(200).json({
    data: newCar,
    success: true,
    message: `${req.method}- request to Manufacturer endpoint`,
  });
};

const updateCar = async (req, res) => {
  const { id } = req.params;
  const car = await Car.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200).json({
    data: car,
    success: true,
    message: `${req.method}- request to Car endpoint`,
  });
};

const deleteCar = async (req, res) => {
  const { id } = req.params;
  const deleteCar = await Car.findByIdAndDelete(id, req.body, { new: true });
  res.status(200).json({
    data: deleteCar,
    success: true,
    message: `${req.method}- request to Car endpoint`,
  });
};

module.exports = {
  createCars,
  updateCar,
  deleteCar,
  getALLCars,
  getCarById,
};
