
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    orderNumber: DataTypes.STRING,
    trackNumber: DataTypes.STRING,
    status: DataTypes.STRING,
    customer: DataTypes.STRING,
  }, {});
  return Orders;
};
