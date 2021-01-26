'use strict';

require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'forumlise',
  process.env.USERNAME,
  process.env.PASS,
  {
    dialect: 'postgres',
  },
);

module.exports = sequelize;
