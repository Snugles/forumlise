'use strict';

const Sqlize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const post = require('./Post.models');
const topic = require('./Topic.models');
const database:any = {};

const sqlize = new Sqlize(config.database,
  config.username,
  config.password,
  config,
);

let model = post(sqlize, Sqlize);
database[model.name] = model;

model = topic(sqlize, Sqlize);
database[model.name] = model;

Object.keys(database).forEach((modelName:any) => {
  if (database[modelName].associate) {
    database[modelName].associate(database);
  }
});

database.sequelize = sqlize;
database.Sequelize = Sqlize;

module.exports = database;
