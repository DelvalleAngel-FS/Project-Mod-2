const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: `${req.method}- request to Manufacturer endpoint`,
  });
});

router.post("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: `${req.method}- request to Manufacturer endpoint`,
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method}- request to Manufacturer endpoint`,
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method}- request to Manufacturer endpoint`,
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method}- request to Manufacturer endpoint`,
  });
});

module.exports = router;
