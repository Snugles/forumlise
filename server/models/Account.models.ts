'use strict';
module.exports = (sequelize:any, DataTypes:any) => {
  const Account = sequelize.define('Account', {
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  }, {});
  Account.associate = function(models:any) {
    Account.hasMany(models.Post);
    Account.hasMany(models.Topic);
  };
  return Account;
};
