import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

async function connect() {
    if (global.connection) {
        return global.connection.connect();
    }

    const pool = new pg.Pool({
      host: process.env.PG_HOST,
      port: process.env.PG_PORT,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
    });
    global.connection = pool;
    
    return await pool.connect();
}

export {
    connect
}