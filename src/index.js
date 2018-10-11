import 'dotenv/config';
import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import { genericError, notFoundError } from './errors';
import { hourlyBatch, firstBatch } from './helpers';
import { dealsRoute } from './routes/deals';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

app.use('/deals/:id', dealsRoute);

app.use(notFoundError);
app.use(genericError);

app.listen(PORT, () => {
  firstBatch();
  hourlyBatch.start();
  console.log(`Server running on port ${PORT}`);
});