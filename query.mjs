const Pool = require("pg").Pool;
const pool = new Pool({
  user: "projectadmin",
  host: "localhsot",
  database: "project",
  password: "t123",
  port: 5423
});

const getMessage = (req, res) => {
  pool.query(
    "SELECT * FROM message ORDER BY id DESC LIMIE 10",

    (error, result) => {
      if (error) {
        throw error;
      }
    }
  );
};
