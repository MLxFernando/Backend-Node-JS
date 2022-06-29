"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const book_controller_1 = require("./controller/book.controller");
const router = (app) => {
    app.post('/books', book_controller_1.createBook); //http://localhost:5000/players    
    app.get('/books/:id', book_controller_1.retrieveBook);
    app.put('/books/:id', book_controller_1.updateBook);
    app.delete('/books/:id', book_controller_1.deleteBook);
    app.get('/books', book_controller_1.listBooks);
};
exports.router = router;
