const router = require('express').Router();
const ProductsController = require('../controllers/Products');

router.get('/list', ProductsController.getList);
router.get('/product', ProductsController.getProduct);
router.post('/product', ProductsController.createProduct);
router.put('/product', ProductsController.updateProduct);

module.exports = router;
