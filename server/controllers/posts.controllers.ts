'use strict';

const Topics = require('../models').Topic;
const Acnt = require('../models').Account;

exports.getAll = async (req:any, res:any) => {
  try {
    Topics.findOne({where: {id: req.params.id}})
      .then((topic:any)=>{
        topic.getPosts()
          .then((data:Array<any>)=>{
            res.status(200);
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
    if (req.body.TopicId && req.body.content && req.body.AccountId) {
      Topics.findOne({where: {id: req.body.TopicId}})
        .then((topic:any)=>{
          Acnt.findOne({where: {id: req.body.AccountId}})
            .then((data:any)=> {
              topic.createPost(
                {
                  ...req.body,
                  AccountName: data.dataValues.username,
                })
                .then((data:Array<any>)=>{
                  res.status(201);
                  res.send(data);
                });
            });
        })
        .catch((e:string)=>console.error(e));
    } else {
      res.sendStatus(400);
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};
