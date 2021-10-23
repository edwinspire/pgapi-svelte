// Modulo que realiza las conexiones a PostgreSQL
const dotenv = require("dotenv");
dotenv.config();
const { Pool } = require('pg')
const {DATABASE_URL, PG_WITH_SSL_REJECTUNAUTHORIZED_FALSE} = process.env;

let pgClientParams = {connectionString: DATABASE_URL,    
  // number of milliseconds a client must sit idle in the pool and not be checked out
  // before it is disconnected from the backend and discarded
  // default is 10000 (10 seconds) - set to 0 to disable auto-disconnection of idle clients
  idleTimeoutMillis: 500,
  // maximum number of clients the pool should contain
  // by default this is set to 10.
  max: 80,
//  ssl: {
//    rejectUnauthorized: false
//  }

};

if (PG_WITH_SSL_REJECTUNAUTHORIZED_FALSE === 'true'){
  pgClientParams = {connectionString: DATABASE_URL,    
    // number of milliseconds a client must sit idle in the pool and not be checked out
    // before it is disconnected from the backend and discarded
    // default is 10000 (10 seconds) - set to 0 to disable auto-disconnection of idle clients
    idleTimeoutMillis: 500,
    // maximum number of clients the pool should contain
    // by default this is set to 10.
    max: 100,
    // Solo Heroku
    ssl: {
      rejectUnauthorized: false
    }

  };
}

const pool = new Pool(pgClientParams);




//console.log('POSTGRES', process.env.DATABASE_URL);
module.exports = {
  query: (text, params) => pool.query(text, params)
}