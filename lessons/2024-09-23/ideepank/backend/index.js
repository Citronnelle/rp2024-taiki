const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Tere, maailm!");
});

app.listen(port, () => {
  console.log(`Kuulab porti ${port}`);
});
