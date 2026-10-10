const express = require("express");
const router = express.Router();
const manufacturerRoutes = require("./manufacturerRoutes");

router.get("/", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `${req.method} - Request made` });
});

router.use("/manufacturer", manufacturerRoutes);

module.exports = router;
