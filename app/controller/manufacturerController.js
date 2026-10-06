const getAllManufacturer = (req, res) => {
  res.status(200).json({
    success: true,
    message: `${req.method} - request to Manufacturer endpoint`,
  });
};

const getManufacturerById = (req, res) => {
  res.status(200).json({
    success: true,
    message: `${req.method} - request to Manufacturer endpoint`,
  });
};

const createManufacturer = (req, res) => {
  res.status(200).json({
    success: true,
    message: `${req.method} - request to Manufacturer endpoint`,
  });
};

const updateManufacturer = (req, res) => {
  res.status(200).json({
    success: true,
    message: `${req.method} - request to Manufacturer endpoint`,
  });
};

const deleteManufacturer = (req, res) => {
  res.status(200).json({
    success: true,
    message: `${req.method} - request to Manufacturer endpoint`,
  });
};

module.exports = {
  createManufacturer,
  getManufacturerById,
  getAllManufacturer,
  updateManufacturer,
  deleteManufacturer,
};
