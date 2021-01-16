'use strict';

const routerMiddleWare = require('express').Router();
const posts = require('./controllers/posts.controllers.ts');

routerMiddleWare.get('/posts', posts.getAll);
routerMiddleWare.post('/posts', posts.postOne);

module.exports = routerMiddleWare;
