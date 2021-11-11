const express = require('express');
const router = express.Router({ mergeParams: true });

const videosController = require('../controllers/videos.controller');

router.route('/:searchQuery/:pageNumber')
    .get(videosController.get);

module.exports = router;