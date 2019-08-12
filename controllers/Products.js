const models = require('../models');
const { productDataValidate } = require('../helpers/validations/product');

class Products {
  static async getList(_, res) {
    res.send(await models.Products.findAll());
  }

  static async getProduct(req, res) {
    res.send(await models.Products.findOne({ where: { id: req.query.id } }));
  }

  static async createProduct(req, res) {
    const { error } = productDataValidate(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }

    try {
      const createProduct = await models.Products.create({
        orderId: req.body.orderId,
        title: req.body.title,
        code: req.body.code,
        count: req.body.count,
        size: req.body.size,
        tax: req.body.tax,
        price: req.body.price,
        additionalPrice: req.body.additionalPrice,
        totalPrice: req.body.totalPrice,
        status: req.body.status,
      });
      res.send(createProduct);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  static async updateProduct(req, res) {
    const { error } = productDataValidate(req.body, true);

    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }

    try {
      const product = await models.Products.findOne({ where: { id: req.body.productId } });

      if (!product) {
        res.status(400).send(`No one product with id ${req.body.productId}`);
        return;
      }

      const updatedProduct = await product.update({
        orderId: req.body.orderId,
        title: req.body.title,
        code: req.body.code,
        count: req.body.count,
        size: req.body.size,
        tax: req.body.tax,
        price: req.body.price,
        additionalPrice: req.body.additionalPrice,
        totalPrice: req.body.totalPrice,
        status: req.body.status,
      });

      res.send(updatedProduct);
    } catch (err) {
      res.status(500).send(err);
    }
  }
}

module.exports = Products;
