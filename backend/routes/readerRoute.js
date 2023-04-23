const router = require("express").Router();
const {
  getReaders,
  getReader,
  createReader,
  updateReader,
  deleteReader,
  readBook,
  rateBook,
  commentBook,
} = require("../controllers/readerController");

router.get("/", getReaders);
router.get("/:id", getReader);
router.post("/", createReader);
router.post("/:id", updateReader);
router.post("/:bookId/read", readBook);
router.post("/:bookId/rate", rateBook);
router.post("/:bookId/comment", commentBook);
router.delete("/:id", deleteReader);

module.exports = router;
