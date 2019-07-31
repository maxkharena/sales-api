const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const models = require('../models');
const { registrationValidate, loginValidate } = require('../helpers/validations/authorization');

class Auth {
  static async registration(req, res) {
    const { error } = registrationValidate(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }

    const emailExist = await models.Users.findOne({ where: { email: req.body.email } });
    if (emailExist) {
      res.status(400).send(`Email ${req.body.email} is already exist`);
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    try {
      const savedUser = await models.Users.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashPassword,
      });
      res.send(savedUser);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  static async login(req, res) {
    const { error } = loginValidate(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }

    const user = await models.Users.findOne({ where: { email: req.body.email } });

    if (!user) {
      res.status(400).send('Incrroect email or password');
      return;
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      res.status(400).send('Incrroect email or password');
      return;
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET);

    res.header('auth-token', token).send(token);
  }
}

module.exports = Auth;
