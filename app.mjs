import express from "express";
const app = express();
import bodyParser from "body-parser";
import { getMessage, createMessage } from "./req.mjs";
import * as db from "./query.mjs";
import cors from "cors";
const socketPort = 8000;
import { getSocketMessages } from "./req.mjs";
import { createSocketMessage } from "./req.mjs";

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

const emitMostRecentMessage = () =>{
  db.getSocketMessages ()

  .then((result) => io.emit("chat message", result))
      .catch(console.log);
}

io.on("connection", (socket) => {
  console.log("a users connected");
  socket.on("chats message", (msg) => {
     db.createSocketMessage(JSON.parse(msg))
        .then((_) => {
           emitMostRecentMessges();
        })
        .catch((err) => io.emit(err));
});

socket.on("disconnect", () => {
  console.log("user disconnected");
});
});

server.listen(socketPort, () => {
  console.log(`listening on *:${socketPort}`);
});