import { Deal } from '../models';
import { DefaultDb } from './defaultDb';

class DealsTransformers {
  static toDatabase(deal) {
    if (!deal instanceof Deal){
      console.log({ message: 'deal must be an instance of Deal' });
      throw new TypeError();
    }
    return {
      id: deal.id,
      deal_id: deal.dealId,
      deal_picture: deal.dealPicture
    }
  }

  static fromDatabase(data) {
    return new Deal()
      .setId(data.id)
      .setDealId(data.deal_id)
      .setDealPicture(data.deal_picture)
      .setCreatedOn(data.created_on)
  }
}

class DealsDb extends DefaultDb {}

export {
  DealsTransformers,
  DealsDb
};
