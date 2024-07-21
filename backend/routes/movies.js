const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

// Получить список фильмов с сеансами
router.get('/', movieController.getMoviesWithSeances);

module.exports = router;
