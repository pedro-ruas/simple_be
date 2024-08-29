import actions from "./src/actions.json";
import names from "./src/names.json";
import topics from "./src/topics.json";

function getRandomNumber() {
  return Math.floor(Math.random() * 200);
}

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    person: names[getRandomNumber()],
    action: actions[getRandomNumber()],
    objective: topics[getRandomNumber()],
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
