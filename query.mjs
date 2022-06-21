import pg from "pg";
const { Pool } = pg;

export const pool = new Pool({
  user: "myprojectadmin",
  //host: "localhost",
  database: "myproject",
  password: "t123",
  //port: 5432,
});

await pool.connect();
