import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import Promise from 'bluebird';
import { genericError, notFoundError } from './errors';
import { hourlyBatch, firstBatch } from './helpers';
import { dealsRoute } from './routes/deals';
import { dealsControllers } from './controllers';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

const saveDeals = (dealsArray) => {
    return dealsArray.map(async deal => {
      await dealsControllers.create({ dealId: (dealsArray.indexOf(deal) + 1), dealPicture: deal }) ;
  })
}

const getAndSaveDeals = async () => {
  const deals = await firstBatch();
  const { err, data } = await Promise.all(saveDeals(deals));
  if (err) {
    console.log('error', err)
    throw new Error(err);
  }
  return { err: null, data };
};

app.use('/deals', dealsRoute);

app.use(notFoundError);
app.use(genericError);

app.listen(PORT, () => {
  // getAndSaveDeals();
  // hourlyBatch.start();
  console.log(`Server running on port ${PORT}`);
});