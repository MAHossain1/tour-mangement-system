const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const colors = require("colors");

const app = require("./app");

mongoose
  .connect(process.env.MONGODB_ATLAS_DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`db successfully connected`.blue);
  });

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Running the Tour Management app on port ${port}`.white);
});
