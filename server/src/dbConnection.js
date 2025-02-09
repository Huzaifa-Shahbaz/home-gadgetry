const mysql = require('mysql');


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '_homegadgetry',
    // database: 'homegadgetry',
    // database: 'homeGadgetry',
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
  connection.release();
});

module.exports = pool;