const express = require("express");
const router = express.Router();
const endPointRoutes = require("./endPoints");

router.use('/number',endPointRoutes);

module.exports = router;