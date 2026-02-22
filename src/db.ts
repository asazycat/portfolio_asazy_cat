import mysql from 'mysql2/promise';

let attempts = 0;
const MAX_ATTEMPTS = 10;
const BASE_DELAY_MS = 2000; // 2 seconds

const dbCon = async () => {
  return mysql.createConnection({
    host: process.env.MYSQLHOST ?? 'localhost',
    user: process.env.MYSQLUSER ?? 'root',
    password: process.env.MYSQLPASSWORD ?? 'kiloloki',
    database: process.env.MYSQLDATABASE ?? 'portfolio'
  });
};

const connectWithRetry = async (): Promise<mysql.Connection> => {
  try {
    const connection = await dbCon();
    console.log('✅ Connected to MySQL');
    return connection;
  } catch (err) {
    attempts++;

    if (attempts >= MAX_ATTEMPTS) {
      console.error('❌ Failed to connect to MySQL after max retries');
      throw err;
    }

    const delay = BASE_DELAY_MS * attempts;
    console.warn(`⏳ MySQL not ready. Retrying in ${delay / 1000}s... (${attempts}/${MAX_ATTEMPTS})`);

    await new Promise((resolve) => setTimeout(resolve, delay));
    return connectWithRetry();
  }
};

export const db: Promise<mysql.Connection> = connectWithRetry();