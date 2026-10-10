const getALLManufacturers = (req, res) => {
  res.status(200).json({
    success: true,
    message: `${req.method}- request to Manufacturer endpoint`,
  });
};

const getManufacturerById = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method}- request to Manufacturer endpoint`,
  });
};

const createManufacturers = (req, res) => {
  res.status(200).json({
    success: true,
    message: `${req.method}- request to Manufacturer endpoint`,
  });
};

const updateManufacturer = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method}- request to Manufacturer endpoint`,
  });
};

const deleteManufacturer = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
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
