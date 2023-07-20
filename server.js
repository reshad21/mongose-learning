const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
const app = require("./app.js");
// const DBConnect = require("./utils/dbConnect");

// database connection
// DBConnect();
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
  console.log("Database connection is successful");
});

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});

