import { DataSource }  from 'apollo-datasource';

export class RoomService extends DataSource {
    constructor() {
        super();
    }

    initialize() {}

    getRooms() {
        return Promise.resolve(rooms);
    }

    getRoom(description) {
        return Promise.resolve(findRoom(description));
    }

    // getAuthorBooks(authorId) {
    //     const filteredBooks = bookAuthors
    //         .filter(bookAuthor => bookAuthor.authorId === authorId)
    //         .map(bookAuthor => findBook(bookAuthor.bookId));
    //     return Promise.resolve(filteredBooks);
    // }

    // createAuthor(authorInput) {
    //     const author = Object.assign({}, authorInput, { id: newId() });
    //     authors.push(author);
    //     return Promise.resolve(author);
    // }

    // updateAuthor(authorId, authorInput) {
    //     let author = findAuthor(authorId);
    //     author = author ? Object.assign(author, authorInput) : null;
    //     return Promise.resolve(author);
    // }

    // getPublishers() {
    //     return Promise.resolve(publishers);
    // }

    // getPublisher(id) {
    //     return Promise.resolve(findPublisher(id));
    // }

    // getPublisherBooks(publisherId) {
    //     return Promise.resolve(
    //         books.filter(book => book.publisherId === publisherId)
    //     );
    // }

    // createPublisher(publisherInput) {
    //     const publisher = Object.assign({}, publisherInput, { id: newId() });
    //     publishers.push(publisher);
    //     return Promise.resolve(publisher);
    // }

    // updatePublisher(publisherId, publisherInput) {
    //     let publisher = findPublisher(publisherId);
    //     publisher = publisher ? Object.assign(publisher, publisherInput) : null;
    //     return Promise.resolve(publisher);
    // }

    // getBooks() {
    //     return Promise.resolve(books);
    // }

    // getBook(id) {
    //     return Promise.resolve(findBook(id));
    // }

    // getBookPublisher(bookId) {
    //     const book = findBook(bookId);
    //     const publisher = book ? findPublisher(book.publisherId) : null;
    //     return Promise.resolve(publisher);
    // }

    // getBookAuthors(bookId) {
    //     const filteredAuthors = bookAuthors
    //         .filter(bookAuthor => bookAuthor.bookId === bookId)
    //         .map(bookAuthor => findAuthor(bookAuthor.authorId));
    //     return Promise.resolve(filteredAuthors);
    // }

    // createBook(bookInput, publisherId) {
    //     const book = Object.assign({}, bookInput, { id: newId(), publisherId });
    //     books.push(book);
    //     return Promise.resolve(book);
    // }

    // updateBook(bookId, bookInput, publisherId) {
    //     let book = findBook(bookId);
    //     book = book ? Object.assign(book, bookInput) : null;
    //     if (book) {
    //         book = Object.assign(book, bookInput, { publisherId: publisherId });
    //     }
    //     return Promise.resolve(book);
    // }

    // setBookAuthors(bookId, authorIds) {
    //     const book = findBook(bookId);
    //     if (book) {
    //         // Remove current book authors
    //         bookAuthors = bookAuthors.filter(
    //             bookAuthor => bookAuthor.bookId !== bookId
    //         );

    //         // Add new book authors
    //         authorIds.forEach(authorId => {
    //             bookAuthors.push({
    //                 id: `${bookId}-${authorId}`,
    //                 bookId: bookId,
    //                 authorId: authorId
    //             });
    //         });
    //     }
    //     return Promise.resolve(book);
    // }
}

// ----- Helper Functions -----
function newId() {
    return Math.random()
        .toString(36)
        .substring(7);
}

function findRoom(description) {
    return rooms.find(room => room.description === description);
}

// function findPublisher(id) {
//     return publishers.find(publisher => publisher.id === id);
// }

// function findBook(id) {
//     return books.find(book => book.id === id);
// }

// ----- Initial Data -----
let rooms = [
    {
      "name":"Salle Google",
      "description":"Salle Google",
      "capacity":5,
      "equipements":[
          {
            "name":"TV"
          },
          {
            "name":"Retro Projecteur"
          }
      ],
      "createdAt":"2016-12-07T12:39:29.812Z",
      "updatedAt":"2016-12-08T17:31:39.489Z"
    },
    {
      "name":"Salle Apple",
      "description":"Salle Apple",
      "capacity":10,
      "equipements":[
          {
            "name":"Retro Projecteur"
          }
      ],
      "createdAt":"2016-12-07T12:39:55.384Z",
      "updatedAt":"2016-12-07T13:33:37.184Z"
    },
    {
      "name":"Salle Facebook",
      "description":"Salle Facebook",
      "capacity":11,
      "equipements":[],
      "createdAt":"2016-12-07T14:15:55.733Z",
      "updatedAt":"2016-12-09T16:45:19.025Z"
    },
    {
      "name":"Salle Amazon",
      "description":"Salle Amazon",
      "capacity":10,
      "equipements":[
          {
            "name":"TV"
          },
          {
            "name":"Retro Projecteur"
          }
      ],
      "createdAt":"2016-12-09T16:45:34.419Z",
      "updatedAt":"2016-12-09T16:45:34.419Z"
    },
    {
      "name":"Salle Baidu",
      "description":"Salle Baidu",
      "capacity":26,
      "equipements":[
          {
            "name":"TV"
          },
          {
            "name":"Retro Projecteur"
          }
      ],
      "createdAt":"2016-12-09T16:45:49.096Z",
      "updatedAt":"2016-12-09T16:45:49.096Z"
    },
  {
      "name":"Salle Tencent",
      "description":"Salle Tencent",
      "capacity":8,
      "equipements":[
          {
            "name":"TV"
          }
      ],
      "createdAt":"2016-12-07T12:39:55.384Z",
      "updatedAt":"2016-12-07T13:33:37.184Z"
    }
]

