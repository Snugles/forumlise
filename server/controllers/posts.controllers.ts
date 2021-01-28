'use strict';

const PostModel = require('../models/Post.models.ts');

exports.getAll = async (_:any, res:any) => {
  try {
    PostModel.findAll()
      .then((data:Array<any>)=>{
        console.log(data);
        res.status(200);
        res.send(data);
      });
  } catch (e) {
    console.error('e', e);
    res.sendStatus(500);
  }
};

exports.postOne = async (req:any, res:any) => {
  try {
    PostModel.create(req.body)
      .then((data:Array<any>)=>{
        console.log(data);
        res.status(201);
        res.send(data);
      });
  } catch (e) {
    console.error('e', e);
    res.sendStatus(500);
  }
};
