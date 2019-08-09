const router = require('express').Router();
const OrdersController = require('../controllers/Orders');

router.get('/list', OrdersController.getList);
router.get('/order', OrdersController.getOrder);
router.post('/order', OrdersController.createOrder);
// router.put('/product', ProductsController.updateProduct);

module.exports = router;
