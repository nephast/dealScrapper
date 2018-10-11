import { CronJob } from 'cron';
import { run } from './deals';

const hourlyBatch = new CronJob('0 * * * *', async () => {
  const deals = await run();
  console.log('Hourly data fetching done');
  return deals;
}, null, true, 'Europe/London');

const firstBatch = async () => {
  const deals = await run();
  console.log('FIRST PULL DONE')
  return deals;
}

export {
  hourlyBatch,
  firstBatch
};
