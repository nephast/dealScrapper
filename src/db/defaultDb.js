import pool from './pool';

class defaultDb {
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
}

export {
  defaultDb
};
