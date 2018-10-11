import { dealDb } from '../db';
import { Deal } from './deals';

const dealsControllers = new Deal(dealDb);

export {
  dealsControllers
};
