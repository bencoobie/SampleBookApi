const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(console.log("Connected to db Successfully!"));
