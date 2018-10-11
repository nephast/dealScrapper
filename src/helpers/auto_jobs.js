import { CronJob } from 'cron';
import { run } from './deals';

//this only scrap data for now
//more work needed to allow saving data on a cron task 
const hourlyBatch = new CronJob('0 * * * *', async () => {
  try {
    const deals = await run();
    return deals;
  } catch (e) {
    return new Error(e);
  }
}, null, true, 'Europe/London');

const firstBatch = async () => {
  try {
    const deals = await run();
    return deals;
  } catch (e) {
    return new Error(e);
  }
}

export {
  hourlyBatch,
  firstBatch
};
