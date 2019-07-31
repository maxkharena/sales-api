const router = require('express').Router();
const ProductsController = require('../controllers/Products');

router.get('/list', ProductsController.getList);
router.get('/product', ProductsController.getProduct);

module.exports = router;
