import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';

const app = express();
const router = express.Router();

const API_PORT = process.env.API_PORT || 3001;
//configure API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

//set route path & initialise API_PORT
router.get('/', (res, req) => {
  res.json({ message: 'Hello world!' });
});

//use our router configuration when we call /API
app.use('/api', router);

app.listen(API_PORT, () => console.log('Listening on port ${API_PORT}'));
