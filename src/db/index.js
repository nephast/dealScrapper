const DefaultDb = require('./defaultDb');
const { Deal } = require('../models');

const dealDb = new DefaultDb({ table: 'deals', model: Deal });

module.exports = {
  dealDb
};
