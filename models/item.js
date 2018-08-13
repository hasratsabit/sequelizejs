
module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define('Items', {
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.DECIMAL
  });

  return item;
}