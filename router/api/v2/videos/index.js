const express = require("express");
const router = express.Router();
const videos = require('./../../../../collection/videos');

// videos index 
router.get('/', (req, res) =>{
	res.json({videos})
} )

//videos show
router.get('/:videoId', (req, res) => {
	const videoId = req.params.videoId
	const video = videos.find(video=> video.id==videoId)
	res.json({video})
})
module.exports = router; 