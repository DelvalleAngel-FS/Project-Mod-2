const Cars = require("../models/Cars");

const getALLCars = async (req, res) => {
  const cars = await Cars.find({});
  res.status(200).json({
    data: cars,
    success: true,
    message: `${req.method}- request to Car endpoint`,
  });
};

const getCarById = async (req, res) => {
  const car = await Cars.findById(req.params.id);
  res.status(200).json({
    data: car,
    success: true,
    message: `${req.method}- request to Car endpoint`,
  });
};

const createCars = async (req, res) => {
  const { car } = req.body;
  const newCar = await Cars.create(car);
  console.log("data >>>", newCar);
  res.status(200).json({
    success: true,
    message: `${req.method}- request to Car endpoint`,
  });
};

const updateCar = async (req, res) => {
  const { id } = req.params;
  const car = await Cars.findByIdAndUpdate(id, req.body, {
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
  const deleteCar = await Cars.findByIdAndDelete(id, req.body, { new: true });
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
