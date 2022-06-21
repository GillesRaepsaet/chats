import express from "express";
const app = express();
import bodyParser from "body-parser";
import { getMessage, createMessage } from "./req.mjs";
import cors from "cors";
const socketPort = 8000;
//import { emit } from "process";
import server from "http";
const PORT = 3000;

app.use(cors());

app.get("/message", getMessage);
app.post("/message", createMessage);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/", (req, res) => {
  res.json({ info: "test" });
});

app.listen(PORT, () => {
  console.log(`Test app ${PORT}/`);
});
