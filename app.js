const express = require("express");
const app = express();
const cors = require("cors");

// Middleware
app.use(cors());
app.use(express.json());

const packageRouter = require("./routes/package.route");

app.use("/api/v1/package", packageRouter);

app.get("/", (req, res) => {
  res.send("Yay Assignment server is Running");
});

module.exports = app;
