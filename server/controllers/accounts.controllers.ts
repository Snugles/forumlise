'use strict';

const Accounts = require('../models').Account;
const authentication = require('./jwtAuth.controllers');

exports.login = async (req:any, res:any) => {
  try {
    if (req.body.username && req.body.password) {
      Accounts.findOne({where: {username: req.body.username}})
        .then((account:any)=>{
          if (req.body.password===account.password) {
            res.status(200);
            res.send({token: authentication.JWT
              .sign(req.body.username, process.env.ACCESS_TOKEN_SECRET),
            id: account.id,
            });
          } else {
            res.status(200);
            res.send({accepted: false});
          }
        });
    } else {
      res.sendStatus(400);
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

exports.createOne = async (req:any, res:any) => {
  try {
    if (req.body.username && req.body.password) {
      Accounts.create(req.body)
        .then((account:any)=>{
          res.status(201);
          res.send(account);
        });
    } else {
      res.sendStatus(400);
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};
