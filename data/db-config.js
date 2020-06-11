const knex = require('knex');

const config = require('../knexfile');

console.log('config', config);

module.exports = knex(config.development);