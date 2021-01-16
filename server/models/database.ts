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

sequelize.authenticate()
  .then(()=>console.log('db connected'))
  .catch((err:string)=>console.log(err));
