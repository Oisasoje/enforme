import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : undefined,
});

export const query = (text: string, params?: any[]) => pool.query(text, params);
export default pool;
