'use strict';

const PostModel = require('../models/Post.models.ts');

exports.getAll = async (req:any, res:any) => {
  try {
    PostModel.findAll()
      .then((data:Array<any>)=>{
        console.log(data);
        res.send(data);
        res.status(200);
      });
  } catch (e) {
    console.error('e', e);
    res.sendStatus(500);
  }
};

exports.postOne = async (req:any, res:any) => {
  try {
    console.log('posted');
    res.status(201);
    res.send('data');
  } catch (e) {
    console.error('e', e);
    res.sendStatus(500);
  }
};
