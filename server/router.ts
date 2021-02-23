'use strict';

const routerMiddleWare = require('express').Router();
const posts = require('./controllers/posts.controllers.ts');
const topics = require('./controllers/topics.controllers.ts');
const accounts = require('./controllers/accounts.controllers.ts');
const auth = require('./controllers/jwtAuth.controllers.ts');
require('dotenv').config();

routerMiddleWare.post('/accounts', accounts.login);
routerMiddleWare.post('/accounts/register', accounts.createOne);
routerMiddleWare.get('/topics', topics.getAll);
routerMiddleWare.post('/topics', auth.authenticateJWT, topics.postOne);
routerMiddleWare.get('/posts/:id', posts.getAll);
routerMiddleWare.post('/posts', auth.authenticateJWT, posts.postOne);

module.exports = routerMiddleWare;
