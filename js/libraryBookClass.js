"use strict";

class Book {
  constructor({ title, author } = {}) {
    this._title = title;
    this._author = author;
  }
  get title() {
    return this._title;
  }
  get author() {
    return this._author;
  }
  set title(value) {
    this._title = value;
  }
  set author(value) {
    this._author = value;
  }
  toString() {
    return `${this._title} ${this._author}`;
  }
  isTheSameBook(book) {
    if (book.title === firstBook._title && book.author === firstBook._author) {
      return true;
    } else {
      return false;
    }
  }
}

const book = {
  title: "Samvel",
  author: "Raffi",
};
let book2 = book;
let book3 = {
  title: "Hovhannes",
  author: "Tumanyan",
};

const firstBook = new Book(book);
const secondBook = new Book(book3);
// console.log(firstBook.toString());
// console.log(firstBook);
// console.log(firstBook.isTheSameBook(book2));

class LibraryBookBase extends Book {
  constructor({ bookInfo, bookId } = {}) {
    super(bookInfo);
    this._bookId = bookId;
  }
  get bookid() {
    return this._bookId;
  }
  set bookid(value) {
    this._bookId = value;
  }
  toString() {
    return `It is ${this._title} which author is ${this._author} and id: ${this._bookId}`;
  }
}
class LibraryBook extends LibraryBookBase {
  constructor({ base, quantity } = {}) {
    super(base);
    this._quantity = quantity;
  }
  get quantity() {
    return this._quantity;
  }
  set quantity(value) {
    if (typeof value === this.quantity) {
      this._quantity = value;
    } else {
      return `Its not a number`;
    }
  }
  get bookid() {
    return this._bookId;
  }
  set bookid(value) {
    this._bookId = value;
  }
  get author() {
    return this._author;
  }
  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
  }
  set author(value) {
    this._author = value;
  }
  toString() {
    return `It is ${this._title} which author is ${this._author} id: ${this._bookId} qauantity: ${this._quantity} `;
  }
  increaseQuantityBy(amount) {
    const increaseQuantity = this._quantity + amount;
    return (this._quantity = increaseQuantity);
  }
  decreaseQuantityBy(amount) {
    const decreaseQuantity = this._quantity - amount;
    return decreaseQuantity;
  }
}

const libraryBookBase = {
  bookInfo: book,
  bookId: 0,
};
const libraryBookBaseOne = new LibraryBookBase(libraryBookBase);
// console.log(libraryBookBaseOne);
const libraryBook = {
  base: libraryBookBase,
  quantity: 150,
};
const libraryBookOne = new LibraryBook(libraryBook);
// console.log(libraryBookOne.toString());
// console.log(libraryBookOne.increaseQuantityBy(15));
// console.log(libraryBookOne.decreaseQuantityBy(15));

// console.log(libraryBookBaseOne.toString());
class ReaderBook extends LibraryBookBase {
  constructor({ inheritanse, expirationDate, isReturned }) {
    super(inheritanse);
    this._expirationDate = expirationDate;
    this._isReturned = isReturned;
  }
  toString() {
    return `It is ${this._title} which author is ${this._author} id: ${this._bookId} expirationDate: ${this._expirationDate} isReturned: ${this._isReturned} `;
  }
}
const readerBookOne = {
  inheritanse: libraryBookBase,
  expirationDate: "31.03.2021",
  isReturned: true,
};
const readerBook = new ReaderBook(readerBookOne);

// c

// console.log(libraryBookOne.toString());
// console.log(readerBook.toString());

class Reader {
  constructor({ firstName, lastName, readerId, books }) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._readerId = readerId;
    this._books = books;
  }
  toString() {
    return `Readers firstname: is ${this._firstName} lastname: ${this._lastName} `;
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get readerId() {
    return this._readerId;
  }
  get books() {
    return this._books;
  }
  set firstName(value) {
    this._firstName = value;
  }
  set lastName(value) {
    this._lastName = value;
  }
  set readerId(value) {
    this._readerId = value;
  }
  set books(value) {
    if (Array.isArray(value)) {
      this._books = [...value];
    }
  }
  borrowBook(book, library) {
    const borroedBook = library.find((el) => book.title === el.title);
    if (borroedBook && book instanceof ReaderBook) {
      this._books.push(borroedBook);
    }
  }
}

const readerObj = {
  firstName: "Arsen",
  lastName: "Grigoryan",
  readerId: 111,
  books: [readerBook],
};

const readerChild = new Reader(readerObj);
// console.log(readerChild.toString());
// console.log(readerChild);

class Library {
  constructor({ books, readers }) {
    this._books = books;
    this._readers = readers;
  }
  get books() {
    return this._books;
  }
  get readers() {
    return this._readers;
  }
  doHaveBook(requestedBook) {
    return requestedBook instanceof Book && this._books.includes(requestedBook);
  }
  addBook(newBook) {
    const index = this._books.findIndex((el) => el === newBook);
    console.log(index);
    if (newBook instanceof LibraryBook && index > 0) {
      this._books[index].quantity++;
    } else if (newBook instanceof LibraryBook) {
      this._books.push(newBook);
      return this._books;
    }
  }
  addBooks(newBooks) {
    for (let book of newBooks) {
      this.addBook(book);
    }
    return this._books;
  }

  checkReaderId(readerId) {
    return (
      this._readers.findIndex((reader) => reader._readerId === readerId) >= 0
    );
  }
  lendBook(book, readerId) {
    return this.doHaveBook(book) && this.checkReaderId(readerId) ? book : false;
  }
}

const library = {
  books: [libraryBookOne],
  readers: [readerChild],
};

const libraryOne = new Library(library);
console.log(readerChild.borrowBook(firstBook, libraryOne));

// console.log(libraryOne);
// console.log(firstBook);
// console.log(secondBook);
// console.log(libraryOne.doHaveBook(firstBook));
// console.log(libraryOne.addBook(firstBook));
// console.log(libraryOne.checkReaderId(111));
