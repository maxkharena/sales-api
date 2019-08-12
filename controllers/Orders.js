const models = require('../models');
const { orderDataValidate } = require('../helpers/validations/order');

class Orders {
  static async getList(_, res) {
    res.send(await models.Orders.findAll());
  }

  static async getOrder(req, res) {
    res.send(await models.Orders.findOne({ where: { id: req.query.id } }));
  }

  static async createOrder(req, res) {
    const { error } = orderDataValidate(req.body);

    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }

    try {
      const createdOrder = await models.Orders.create({
        orderNumber: req.body.orderNumber,
        trackNumber: req.body.trackNumber,
        status: req.body.status,
        customer: req.body.customer,
      });

      res.send(createdOrder);
    } catch (err) {
      res.status(500).send(error);
    }
  }

  static async updateOrder(req, res) {
    const { error } = orderDataValidate(req.body, true);

    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }

    try {
      const order = await models.Orders.findOne({ where: { id: req.body.orderId } });

      if (!order) {
        res.status(400).send(`No one order with id ${req.body.orderId}`);
        return;
      }

      const updatedProduct = await order.update({
        orderNumber: req.body.orderNumber,
        trackNumber: req.body.trackNumber,
        status: req.body.status,
        customer: req.body.customer,
      });

      res.send(updatedProduct);
    } catch (err) {
      res.status(500).send(err);
    }
  }
}

module.exports = Orders;
