import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hallo")
});

app.post("/", (req, res) => {
  res.send(req.body);
})

app.listen(PORT, () => {
  console.log("Server listening on Port " + PORT);
});