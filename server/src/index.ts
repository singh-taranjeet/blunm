import 'express-async-errors';
import express from 'express';

const serverApp = express();

serverApp.listen(4000, () => {
    console.log('Data Service: Server is Listening!');
  });