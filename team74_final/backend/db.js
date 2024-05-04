const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "127.0.0.1",
  user: "coms319", // standard account I have for db at the moment
  password: "COMS319",
  database: "secoms319"
});

module.exports = db;
