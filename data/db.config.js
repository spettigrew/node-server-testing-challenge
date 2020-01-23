
// ./data/dbConfig.js
const knex = require("knex");

const config = require("../knexfile");

// if the environment variable is not set, default to 'development'. dev = development
// this variable is only set when running the "test" npm script using npm run test
const environment = process.env.NODE_ENV || "dev";

// the value of dbEnv will be either 'development' or 'testing'
// we pass it within brackets to select the corresponding configuration. Env = environment
// from knexfile.js
module.exports = knex(config[environment]);
