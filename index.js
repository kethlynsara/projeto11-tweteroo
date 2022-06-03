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
  res.sendStatus(200);
});

app.post("/tweets", (req, res) => {
  const username = req.headers.user;
  const { tweet } = req.body;
  const data = { username, tweet };

  const usuario = users.find((user) => user.username === data.username);
  const tweetNovo = {...data, avatar: usuario.avatar};
  
  tweets.push(tweetNovo);
  res.sendStatus(200);
});

app.get("/tweets", (req, res) => {
  const tweets10 = tweets.slice(-10);
  res.send(tweets10);
});

app.listen(5000);