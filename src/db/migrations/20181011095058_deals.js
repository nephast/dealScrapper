module.exports = {
  async up(pool) {
    await pool.schema.raw(`
    CREATE TABLE deals (
      id UUID PRIMARY KEY,
      deal_id INT NOT NULL,
      deal_picture TEXT NOT NULL,
      created_on TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
    );`);
  },
  async down(pool) {
    await pool.schema.raw('DROP TABLE IF EXISTS deals');
  }
};