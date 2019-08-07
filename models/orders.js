
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    orderId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    code: DataTypes.STRING,
    count: DataTypes.INTEGER,
    size: DataTypes.STRING,
    tax: DataTypes.DOUBLE,
    price: DataTypes.DOUBLE,
    additionalPrice: DataTypes.DOUBLE,
    totalPrice: DataTypes.DOUBLE,
    status: DataTypes.STRING,
  }, {});
  return Orders;
};
