'use strict';

const db = require('../models/database.ts');

exports.getAll = async (req:any, res:any) => {
  try {
    console.log('gotted');
    res.status(200);
    res.send('data');
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
