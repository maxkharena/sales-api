const router = require('express').Router();
const ProductsController = require('../controllers/Products');

router.get('/list', ProductsController.getList);
router.get('/info', ProductsController.getProduct);
router.post('/create', ProductsController.createProduct);
router.put('/update', ProductsController.updateProduct);

module.exports = router;
