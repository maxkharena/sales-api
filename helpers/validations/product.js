const Joi = require('@hapi/joi');

const productDataValidate = (data, isEdit) => {
  const schema = {
    orderId: Joi.number().min(1),
    title: Joi.string().min(1),
    code: Joi.string().min(1),
    count: Joi.number().min(1),
    size: Joi.string().min(1),
    tax: Joi.number().min(1),
    price: Joi.number().min(1),
    additionalPrice: Joi.number().min(1),
    totalPrice: Joi.number(),
    status: Joi.string().min(1),
  };

  if (isEdit) schema.productId = Joi.number().min(1);

  return Joi.validate(data, schema);
};

module.exports.productDataValidate = productDataValidate;
