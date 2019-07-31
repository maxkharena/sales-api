
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    title: DataTypes.STRING,
    code: DataTypes.STRING,
    count: DataTypes.INTEGER,
    size: DataTypes.STRING,
    tax: DataTypes.DOUBLE,
    price: DataTypes.DOUBLE,
    additionalPrice: DataTypes.DOUBLE,
    totalPrice: DataTypes.DOUBLE,
    status: DataTypes.STRING,
    trackNumber: DataTypes.STRING,
  }, {});
  return Products;
};
