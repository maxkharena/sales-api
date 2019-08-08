const models = require('../models');
const { orderDataValidate } = require('../helpers/validations/order');

class Orders {
  static async getList(_, res) {
    res.send(await models.Orders.findAll());
  }

  static async getOrder(req, res) {
    res.send(await models.Orders.findOne({ where: { id: req.body.id } }));
  }

  static async createOrder(req, res) {

  }
}

module.exports = Orders;
