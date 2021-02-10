'use strict';

const Accounts = require('../models').Account;

exports.login = async (req:any, res:any) => {
  try {
    Accounts.findOne({where: {username: req.body.username}})
      .then((account:any)=>{
        if (req.body.password===account.password) {
          res.status(200);
          res.send('recieved');
        } else {
          res.status(200);
          res.send('denied');
        }
      });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

exports.createOne = async (req:any, res:any) => {
  try {
    Accounts.create(req.body)
      .then((account:any)=>{
        res.status(201);
        res.send(account);
      });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};
