const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');
const { registrationValidate, loginValidate } = require('../helpers/validations/authorization');

exports.registration = async (req, res) => {
  const { error } = registrationValidate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) {
    res.status(400).send(`Email ${req.body.email} is already exist`);
    return;
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashPassword,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.login = async (req, res) => {
  const { error } = loginValidate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    res.status(400).send('Incrroect email or password');
    return;
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    res.status(400).send('Incrroect email or password');
  }

  // eslint-disable-next-line no-underscore-dangle
  const token = jwt.sign({ _id: user._id }, process.env.SECRET);

  res.header('auth-token', token).send(token);
};
