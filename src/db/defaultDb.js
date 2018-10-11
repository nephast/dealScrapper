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
    return { err: new Error('Error creating data'), data: null };
   }
  }

  async getById({ id }) {
    try {
      const data = await this.db(this.table)
        .select('*')
        .where({ deal_id: id });

    if (data.length === 0) {
      return { err: new Error('No deal available with this ID'), data: null };
    }
    return { err: null, data: this.fromDatabase(data[0]) };
    } catch (e) {
      return { err: new Error('Error retrieving data'), data: null };
    }
  }

  async deleteAll() {
    try {
      const data = await  this.db(this.table)
        .delete('*');
      return { err: null, data: this.fromDatabase(data) };  
    } catch (e) {
      return { err: new Error('Error deleting data'), data: null };
    }
  }
}

export {
  DefaultDb
};
