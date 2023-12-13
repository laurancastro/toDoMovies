const express = require("express");
const router = express.Router();
const videos = require('./../../../../collection/videos');
router.get('/', (req, res) =>{
	res.json(videos)
} )
module.exports = router; 