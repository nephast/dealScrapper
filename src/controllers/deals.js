import uuid from 'uuidv4';
import { Deal } from '../models';

class DealsControllers {
  constructor(database) {
    this.db = database;
  }

  async create({ dealId, dealPicture }) {
    const deal = new Deal()
      .setId(uuid())
      .setDealId(dealId)
      .setDealPicture(dealPicture);
    const { err, data } = await this.db.create({ model: deal })
    if (err) {
      return { err, data: null };
    }
    return { err: null, data };
  }
}

export {
  DealsControllers
};
