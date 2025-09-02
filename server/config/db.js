const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

dotenv.config();

let pool;

const connectDB = async () => {
  try {
    // 👇 add here
    console.log("DB_USER:", process.env.DB_USER);
    console.log("DB_PASS:", process.env.DB_PASS);
    console.log("DB_NAME:", process.env.DB_NAME);

    pool = await mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS ,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    console.log("✅ MySQL Connected");
    return pool;
  } catch (err) {
    console.error("❌ MySQL Connection Failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
