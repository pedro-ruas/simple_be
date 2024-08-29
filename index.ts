import actions from "./src/actions.json";
import names from "./src/names.json";
import topics from "./src/topics.json";

function getRandomNumber() {
  return Math.floor(Math.random() * 200);
}

const express = require("express");
const app = express();

app.get("/person", (req, res) => {
  res.send(names[getRandomNumber()]);
});

app.get("/action", (req, res) => {
  res.send(actions[getRandomNumber()]);
});

app.get("/objective", (req, res) => {
  res.send(topics[getRandomNumber()]);
});

app.get("/", (req, res) => {
  res.send({
    person: names[getRandomNumber()],
    action: actions[getRandomNumber()],
    objective: topics[getRandomNumber()],
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
