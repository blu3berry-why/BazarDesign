const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// options for demonstration

app.get("/shop1", (req, res) => {
  res.send("Opció1");
});
app.get("/shop2", (req, res) => {
  res.send("Opció2");
});
app.get("/jegyek", (req, res) => {
  res.send("Jegyek");
});

/* ****************************************************************

                        RESOURCES

******************************************************************* */

app.get("/pic/background.png", (req, res) => {
  res.sendFile(__dirname + "/img/background.png");
});

app.get("/pic/background-palace.png", (req, res) => {
  res.sendFile(__dirname + "/img/background-palace.png");
});

app.get("/pic/shop.png", (req, res) => {
  res.sendFile(__dirname + "/img/shop.png");
});

app.get("/pic/shop2.png", (req, res) => {
  res.sendFile(__dirname + "/img/shop2.png");
});

app.get("/css", (req, res) => {
  res.sendFile(__dirname + "/style.css");
});

app.get("/script", (req, res) => {
  res.sendFile(__dirname + "/script.js");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
