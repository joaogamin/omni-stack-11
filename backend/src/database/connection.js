const knex = require('knex');
const configuratuion = require('../../knexfile');
const connection = knex(configuratuion.development);

module.exports = connection;