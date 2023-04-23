const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookName: { type: String },
  page: { type: Number },
  cover: { type: String },
  publisher: { type: String },
  readers: [{ type: mongoose.Types.ObjectId, ref: "Reader" }],
});

module.exports = new mongoose.model("Book", bookSchema);
