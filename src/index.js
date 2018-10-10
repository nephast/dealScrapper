import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import { genericError, notFoundError } from './errors';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

app.get('/', async (req, res, next) => {
  return res.status(200).json('hello');
});

app.use(notFoundError);

app.use(genericError);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});