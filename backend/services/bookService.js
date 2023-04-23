const Book = require("../model/Book");
const BaseService = require("./baseService");

class BookService extends BaseService {
  async readers(bookId) {
    const book = await this.model.findById(bookId);
    return book.readers;
  }

  async addReaderToList(readerId, bookId) {
    const book = await this.model.findById(bookId);
    console.log(book);
    await book.readers.push(readerId);
    book.save();
    return book;
  }
}

module.exports = new BookService(Book);
