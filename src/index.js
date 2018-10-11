import 'dotenv/config';
import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import { genericError, notFoundError } from './errors';
import { hourlyBatch, firstBatch } from './helpers';
import { dealsRoute } from './routes/deals';
import { dealsControllers } from './controllers';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

const getDeals = async () => {
  const deals = await firstBatch();
  console.log('FIRST DEAL: ', deals[0])
  const { err, data } = await dealsControllers.create({ dealId: 123, dealPicture: deals[0] })
  if (err) {
    console.log('error', err)
    throw new Error(err);
  }
  return { err: null, data };
}

app.use('/deals/:id', dealsRoute);

app.use(notFoundError);
app.use(genericError);

app.listen(PORT, () => {
  getDeals();
  hourlyBatch.start();
  console.log(`Server running on port ${PORT}`);
});