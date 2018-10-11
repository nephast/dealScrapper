import { DealsTransformers, DealsDb } from './deal';

const dealDb = new DealsDb({ table: 'deals', transformer: DealsTransformers });

module.exports = {
  dealDb
};
