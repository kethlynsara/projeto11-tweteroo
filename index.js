import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let users = [];
let tweets = [];

app.post("/sign-up", (req, res) => {
    const {username, avatar} = req.body;
    const signUp = {username, avatar};
    users.push(signUp);
    res.statusMessage = "OK";
    res.status(200).end();
});

app.post("/tweets", (req, res) => {
    const {username, tweet} = req.body;
    const data = {username, tweet};
    tweets.push(data);
    res.status(200).send("OK");
});

app.get("/tweets", (req, res) => {
    res.send(tweets);
});

app.listen(5000);