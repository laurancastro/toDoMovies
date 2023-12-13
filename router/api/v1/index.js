const express = require("express");
const router = express.Router();

const videoRoutes = require('./videos'); 
router.use('/videos', videoRoutes);
module.exports = router; 
