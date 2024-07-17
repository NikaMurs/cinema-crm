const express = require('express');
const router = express.Router();
const seanceController = require('../controllers/seanceController');

router.get('/', seanceController.getAllSeances);
router.post('/', seanceController.createSeance);
router.put('/:id', seanceController.updateSeance);
router.delete('/:id', seanceController.deleteSeance);

module.exports = router;
