'use strict';

const routerMiddleWare = require('express').Router();
const posts = require('./controllers/posts.controllers.ts');
const topics = require('./controllers/topics.controllers.ts');
const accounts = require('./controllers/accounts.controllers.ts');

routerMiddleWare.post('/accounts', accounts.login);
routerMiddleWare.post('/accounts/register', accounts.createOne);
routerMiddleWare.get('/topics', topics.getAll);
routerMiddleWare.post('/topics', topics.postOne);
routerMiddleWare.get('/posts/:id', posts.getAll);
routerMiddleWare.post('/posts', posts.postOne);

module.exports = routerMiddleWare;
