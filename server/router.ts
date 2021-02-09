'use strict';

const routerMiddleWare = require('express').Router();
const posts = require('./controllers/posts.controllers.ts');
const topics = require('./controllers/topics.controllers.ts');

routerMiddleWare.get('/topics', topics.getAll);
routerMiddleWare.post('/topics', topics.postOne);
routerMiddleWare.get('/posts/:id', posts.getAll);
routerMiddleWare.post('/posts', posts.postOne);

module.exports = routerMiddleWare;
