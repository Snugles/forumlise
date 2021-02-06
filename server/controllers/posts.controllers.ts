'use strict';

const Topic = require('../models').Topic;
const Post = require('../models').Post;

exports.getAll = async (_:any, res:any) => {
  try {
    Topic.create(
      {
        content: 'content',
        title: 'title',
      })
      .catch((e:string)=>console.error(e));
    Post.findAll()
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
    Topic.findOne({where: {id: 1}})
      .then((topic:any)=>{
        topic.createPost(req.body)
          .then((data:Array<any>)=>{
            res.status(201);
            res.send(data);
          });
      })
      .catch((e:string)=>console.error(e));
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};
