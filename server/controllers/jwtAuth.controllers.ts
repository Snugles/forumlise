'use strict';

const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.authenticateJWT = (req:any, res:any, next:any) => {
  console.log('called');
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err:string, user:any)=>{
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

exports.JWT = jwt;
