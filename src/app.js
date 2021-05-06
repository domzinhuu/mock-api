const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", routes);

app.get("/", (req, res) => {
  return res.sendFile("./index.html", { root: __dirname });
});

module.exports = app;
