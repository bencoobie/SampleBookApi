const BookService = require("../services/bookService");
const ReaderService = require("../services/readerService");

const createReader = async (req, res) => {
  const createdReader = await ReaderService.create(req.body);
  res.json(createdReader);
};

const getReaders = async (req, res) => {
  const readers = await ReaderService.get();
  res.json(readers);
};

const readBook = (req, res) => {
  ReaderService.addBookToList("643f29e01c9b6f581ccdb147", req.params.bookId);
  BookService.addReaderToList("643f29e01c9b6f581ccdb147", req.params.bookId);
  res.json({ message: "Successfully added to list." });
};

const rateBook = (req, res) => {
  ReaderService.rate(
    "643f29e01c9b6f581ccdb147",
    req.params.bookId,
    req.body.rating
  );
  res.json({ message: "SUCCESSFULLY RATED." });
};

const commentBook = (req, res) => {
  ReaderService.comment(
    "643f29e01c9b6f581ccdb147",
    req.params.bookId,
    req.body.comment
  );
  res.json({ message: "SUCCESSFULLY Commented." });
};
const getReader = async (req, res) => {
  try {
    const reader = await ReaderService.getOne(req.params.id, "books._id");
    res.json(reader);
  } catch (err) {
    console.log(err);
  }
};

const updateReader = async (req, res) => {
  const updatedReader = await ReaderService.updateOne(req.params.id, req.body);
  res.json(updatedReader);
};

const deleteReader = async (req, res) => {
  await ReaderService.deleteOne(req.params.id);
  res.json({ message: "Reader Successfully deleted." });
};

module.exports = {
  getReaders,
  getReader,
  createReader,
  updateReader,
  deleteReader,
  readBook,
  rateBook,
  commentBook,
};
