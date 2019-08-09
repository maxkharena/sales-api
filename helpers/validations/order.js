const Joi = require('@hapi/joi');

const orderDataValidate = (data, isEdit) => {
  const schema = {
    orderNumber: Joi.string().min(1),
    trackNumber: Joi.string().min(1),
    status: Joi.string().min(1),
    customer: Joi.string().min(1),
  };

  if (isEdit) schema.orderId = Joi.number().min(1);

  return Joi.validate(data, schema);
};

module.exports.orderDataValidate = orderDataValidate;
