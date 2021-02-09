'use strict';

const Topics = require('../models').Topic;

exports.getAll = async (req:any, res:any) => {
  try {
    Topics.findOne({where: {id: req.params.id}})
      .then((topic:any)=>{
        topic.getPosts()
          .then((data:Array<any>)=>{
            res.status(201);
            res.send([topic, data]);
          });
      })
      .catch((e:string)=>console.error(e));
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

exports.postOne = async (req:any, res:any) => {
  try {
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
