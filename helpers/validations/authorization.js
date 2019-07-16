const Joi = require('@hapi/joi');

const registrationValidate = (data) => {
  const schema = {
    firstName: Joi.string().min(3),
    lastName: Joi.string().min(3),
    email: Joi.string().min(6).email(),
    password: Joi.string().min(6),
  };

  return Joi.validate(data, schema);
};

const loginValidate = (data) => {
  const schema = {
    email: Joi.string().min(6).email(),
    password: Joi.string().min(6),
  };

  return Joi.validate(data, schema);
};

module.exports.registrationValidate = registrationValidate;
module.exports.loginValidate = loginValidate;
