const BookService = require("../services/bookService");
const ReaderService = require("../services/readerService");

const createBook = async (req, res) => {
  const createdBook = await BookService.create(req.body);
  res.json(createdBook);
};

const getBooks = async (req, res) => {
  const books = await BookService.get();
  res.json(books);
};

const getBook = async (req, res) => {
  try {
    const book = await BookService.getOne(req.params.id, "readers");
    res.json(book);
  } catch (err) {
    console.log(err);
  }
};

const addReaderToList = (req, res) => {
  BookService.addReaderToList("643f29e01c9b6f581ccdb147", req.params.bookId);
  ReaderService.addBookToList("643f29e01c9b6f581ccdb147", req.params.bookId);
  res.json({ message: "BAŞARIYLA EKLENDİ" });
};

const getReaders = (req, res) => {
  const readers = BookService.readers(req.params.bookId);
  res.json(readers);
};

const updateBook = async (req, res) => {
  const updatedBook = await BookService.updateOne(req.params.id, req.body);
  res.json(updatedBook);
};

const deleteBook = async (req, res) => {
  await BookService.deleteOne(req.params.id);
  res.json({ message: "Successfully deleted." });
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
  getReaders,
  addReaderToList,
};
