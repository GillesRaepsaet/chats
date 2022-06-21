import { pool } from "./query.mjs";

export const getMessage = (req, res) => {
  pool.query(
    "SELECT * FROM message ORDER BY id DESC LIMIT 10",

    (error, result) => {
      if (error) {
        res.json(error.message);
      }
      response.status(200).json(result.rows);
    }
  );
};

export const createMessage = (req, res) => {
  const { text, users } = req.body;

  pool.query(
    "INSERT INTO message( email, nickname, password)VALUES ($1, $2, $3) RETURNING text, users, created_at",
    [text, users],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(201).send(result.rows);
    }
  );
};



export const getSocketMessages = () => {
  return new Promise((resolve) => {
     piscine.query(
        "SELECT * FROM messages ORDER BY id DESC LIMIT 10",
        (error, résultats) => {
           if (error) {
               message.errorr ;
           }
           resolve(results.rows);
         }
     );
  });
};


export const createSocketMessage = (message) => {
  return new Promise((resolve) => {
     pool.query(
        "INSERT INTO messages (email, nickname, password) VALUES ($1, $2, $3) RETURNING email, nickname, password,  created_at"
       
        [message.email, message.nickname, message.password],
        (error, results) => {
           if (error) {
              message.error;
           }
           resolve(results.rows);
        }
     );
  });
};

