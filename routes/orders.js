const router = require('express').Router();
const OrdersController = require('../controllers/Orders');

router.get('/list', OrdersController.getList);
router.get('/info', OrdersController.getOrder);
router.post('/create', OrdersController.createOrder);
router.put('/update', OrdersController.updateOrder);

module.exports = router;
