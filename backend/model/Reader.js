const mongoose = require("mongoose");

const readerSchema = new mongoose.Schema({
  name: { type: String },
  surname: { type: String },
  gender: { type: String },
  books: [
    {
      _id: { type: mongoose.Types.ObjectId, ref: "Book" },
      rating: { type: Number, min: 1, max: 5 },
      comments: [{ type: String }],
    },
  ],
});

module.exports = new mongoose.model("Reader", readerSchema);
