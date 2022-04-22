import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(
    express.urlencoded({
      extended: true
    })
  )
app.use(express.json())

let users = [];
let tweets = [
    {
        username: "",
        avatar: "",
        tweet: ""
    }
];

app.post("/sign-up", (req, res) => {
    const user = req.body;
    users.push(user);
    res.send("OK");
})

app.listen(5000);