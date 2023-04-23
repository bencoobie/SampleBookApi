const BaseService = require("./baseService");
const Reader = require("../model/Reader");

class ReaderService extends BaseService {
  async addBookToList(readerId, bookId) {
    const reader = await this.model.findById(readerId);
    reader.books.push(bookId);
    reader.save();
    return reader;
  }

  async rate(readerId, bookId, objects) {
    const reader = await this.model.findById(readerId);
    console.log("READER", reader);
    let book = await reader.books.find((book) => book._id == bookId);
    book.rating = objects;
    reader.save();
    return reader;
  }

  async comment(readerId, bookId, objects) {
    const reader = await this.model.findById(readerId);
    console.log("READER", reader);
    let book = await reader.books.find((book) => book._id == bookId);
    book.comments.push(objects);
    reader.save();
    return reader;
  }
}

module.exports = new ReaderService(Reader);
