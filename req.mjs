import { pool } from'./query.mjs'

export const getMessage = (req, res) => {
  pool.query(
    "SELECT * FROM message ORDER BY id DESC LIMIT 10",

    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).json(result.rows);
    }
  );
};

export const createMessage = (req, res) => {
  const { text, users } = req.body;

  pool.query(
    "INSERT INTO message(text, users)VALUES ($1, $2, $3) RETURNING text, users, created_at",
    [text, users],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(201).send(result.rows);
    }
  );
};

const emitMesseageRecenteMessage = () => {};
