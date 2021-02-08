'use strict';

const Topic = require('../models').Topic;

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
    Topic.create(req.body)
      .then((data:Array<any>)=>{
        res.status(201);
        res.send(data);
      });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};
