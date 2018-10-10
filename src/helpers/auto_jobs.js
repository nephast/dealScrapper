import { CronJob } from 'cron';
import { run } from './deals';

const hourlyBatch = new CronJob('0 * * * *', () => {
  console.log('Hourly data fetching done');
}, null, true, 'Europe/London');

const firstBatch = () => {
  run();
  console.log('FIRST PULL DONE')
}

export {
  hourlyBatch,
  firstBatch
};
