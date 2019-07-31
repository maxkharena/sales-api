const models = require('../models');

class Products {
  static async getList(req, res) {
    const products = await models.Products.findAll();
    res.send(products);
  }

  static async getProduct(req, res) {
    const products = await models.Products.findAll();
    res.send(products);
  }
}

module.exports = Products;
