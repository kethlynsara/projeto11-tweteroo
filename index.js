import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let users = [];
let tweets = [];

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;
  const signUp = { username, avatar };
  users.push(signUp);
  res.statusMessage = "OK";
  res.status(200).end();
});

app.post("/tweets", (req, res) => {
  const { username, tweet } = req.body;
  const data = { username, tweet };
  const usuario = users.find((user) => user.username === data.username);
  const tweetNovo = {...data, avatar: usuario.avatar};
  tweets.push(tweetNovo);
  res.status(200).send("OK");
});

app.get("/tweets", (req, res) => {
  const tweets10 = tweets.slice(-10);
  res.send(tweets10);
});

app.listen(5000);
