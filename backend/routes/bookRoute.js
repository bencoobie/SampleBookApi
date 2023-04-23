const router = require("express").Router();
const {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
  getReaders,
  addReaderToList,
} = require("../controllers/bookController");

router.get("/", getBooks);
router.get("/:id", getBook);
router.get("/:bookId/readers", getReaders);
router.post("/", createBook);
router.post("/:id", updateBook);
router.post("/:bookId/addreader", addReaderToList);
router.delete("/:id", deleteBook);

module.exports = router;
