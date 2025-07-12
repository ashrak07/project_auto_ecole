const express = require("express");
const { dashboard } = require("../Controllers/dashboardController");
const router = express.Router();

router.get("/dashboard", dashboard);

module.exports = router;
