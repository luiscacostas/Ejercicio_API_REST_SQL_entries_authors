// const { Pool } = require('pg');
const { Pool} = require('pg');

const pool = new Pool({
    host: 'dpg-cpoqo9ij1k6c73adc7v0-a.frankfurt-postgres.render.com',
    user: 'userapipg',
    port: '5432',
    database: 'authors_entries',
    password: 'm66nQmv3AtEPi8N189WmQRAIs4StIoOs',
ssl: {
  rejectUnauthorized: false
}
});

module.exports = pool;

  
  // const pool = new Pool({
  //   connectionString: 'postgres://userapipg:m66nQmv3AtEPi8N189WmQRAIs4StIoOs@dpg-cpoqo9ij1k6c73adc7v0-a.frankfurt-postgres.render.com/bbddpg',
  //   ssl: {
  //     rejectUnauthorized: false
  //   }
  // });
