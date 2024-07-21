const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/isValidToken', authMiddleware, (req, res) => {
    res.status(200).json({ message: 'You have accessed a protected route!' });
});

router.post('/login', authController.login);
router.post('/register', authController.registerAdmin);


module.exports = router;
