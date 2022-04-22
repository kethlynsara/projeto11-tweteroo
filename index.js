import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

let users = [
    {
        username: "",
        avatar: ""
    }
];
let tweets = [
    {
        username: "",
        avatar: "",
        tweet: ""
    }
];

app.listen(5000);