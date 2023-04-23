require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./db");
const cors = require("cors");
const bookRoute = require("./routes/bookRoute");
const readerRoute = require("./routes/readerRoute");

var corsOptions = {
  origin: "http://localhost:3001",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

db;
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/books", bookRoute);
app.use("/readers", readerRoute);

app.listen(3000, () => {
  console.log("SERVER listening port 3000");
});
