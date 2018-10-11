import { dealDb } from '../db';
import { DealsControllers } from './deals';

const dealsControllers = new DealsControllers(dealDb);

export {
  dealsControllers
};
