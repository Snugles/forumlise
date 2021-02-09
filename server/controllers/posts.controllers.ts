'use strict';

const Topics = require('../models').Topic;
const Post = require('../models').Post;

exports.getAll = async (req:any, res:any) => {
  try {
    Post.findAll({where: {TopicId: req.params.id}})
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
    console.log(req.body);
    Topics.findOne({where: {id: req.body.TopicId}})
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
