const router = require('express').Router();
const AuthController = require('../controllers/Auth');

router.post('/registration', AuthController.registration);
router.post('/login', AuthController.login);

module.exports = router;
