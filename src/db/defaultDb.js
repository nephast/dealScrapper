import pool from './pool';

class DefaultDb {
  constructor({ table, transformer }) {
    this.db = pool;
    this.table = table;
    this.fromDatabase = transformer.fromDatabase;
    this.toDatabase = transformer.toDatabase;
  }

  async create({ model }) {
   try {
    const dbModel = this.toDatabase(model);
    const result = await this.db(this.table)
      .insert(dbModel).returning('*');
    return { err: null, data: result };
   } catch (e) {
    console.log({ message: 'Error DB create', error: e });
    return { err: new Error(), data: null };
   }
  }

  async getById({ id }) {
    try {
      const data = await this.db(this.table)
        .select('*')
        .where({ deal_id: id });

    if (data.length === 0) {
      return { err: new Error(), data: null };
    }
    return { err: null, data: this.fromDatabase(data[0]) };
    } catch (e) {
      console.log({ message: 'Error retrieving data', error: e });
      return { err: new Error(), data: null }
    }
  }
}

export {
  DefaultDb
};
