const express = require("express");
const dotenv = require("dotenv");
const db = require("./src/config/db");
const router = require("./src/routers/index");

const app = express();
dotenv.config();
db();

app.use(express.json());
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(5000, () => {
  console.log("Server is running at http://localhost:5000");
});
