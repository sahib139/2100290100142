const express = require("express");
const router = express.Router();
const endPointRoutes = require("./calculator-route");

router.use('/number',endPointRoutes);

module.exports = router;