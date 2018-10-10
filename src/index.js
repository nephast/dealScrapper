import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import { CronJob } from 'cron';
import { genericError, notFoundError } from './errors';
import { dealsRoute } from './routes/deals';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

const hourlyBatch = new CronJob('0 * * * *', () => {
  console.log('Hourly data fetching done');
}, null, true, 'Europe/London');

const firstBatch = () => {
  console.log('FIRST PULL DONE')
}

app.use('/deals/:id', dealsRoute);

app.use(notFoundError);
app.use(genericError);

app.listen(PORT, () => {
  firstBatch();
  hourlyBatch.start();
  console.log(`Server running on port ${PORT}`);
});