'use strict';

const database = require('../database.ts');
const Sqlize = require('sequelize');

const Post = database.define('Post', {
  content: {
    type: Sqlize.STRING,
  },
  timestamp: {
    type: Sqlize.DATE,
  },
});

module.exports = Post;
