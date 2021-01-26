'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router');
const db = require('./database.ts');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(router);

db.authenticate()
  .then(()=>console.log('db connected'))
  .catch((err:string)=>console.log(err));

app.listen( port, () => {
  console.log( `server started at http://localhost:${ port }` );
} );
