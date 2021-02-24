'use strict';

const Topic = require('../models').Topic;
const Account = require('../models').Account;

exports.getAll = async (_:any, res:any) => {
  try {
    Topic.findAll()
      .then((data:Array<any>)=>{
        res.status(200);
        res.send(data);
      });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

exports.postOne = async (req:any, res:any) => {
  try {
    if (req.body.title && req.body.content && req.body.AccountId) {
      Account.findOne({where: {id: req.body.AccountId}})
        .then((data:any)=> {
          Topic.create(
            {
              ...req.body,
              AccountName: data.dataValues.username,
            })
            .then((data:Array<any>)=>{
              res.status(201);
              res.send(data);
            });
        });
    } else {
      res.sendStatus(400);
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};
