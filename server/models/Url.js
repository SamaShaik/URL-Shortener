const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS, 
  database: process.env.DB_NAME,
});

async function initTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS urls (
      id INT AUTO_INCREMENT PRIMARY KEY,
      longUrl TEXT NOT NULL,
      shortId VARCHAR(10) UNIQUE NOT NULL,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      clicks INT DEFAULT 0
    )
  `;
  await pool.query(query);
  console.log("✅ URLs table is ready");
}

initTable();

module.exports = pool;
