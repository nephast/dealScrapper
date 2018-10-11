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

  async getById({ id }) {
    if (!id) {
      console.log('ID is mandatory');
      return { err: new Error(), data: null };
    }
    const { err, data } = await this.db.getById({ id });
    if (err) {
      return { err, data: null };
    }
    return { err: null, data };
  }

  async deleteAll() {
    const { err, data } = await this.db.deleteAll();
    if (err) {
      return { err, data: null };
    }
    return { err: null, data };
  }
}

export {
  DealsControllers
};
