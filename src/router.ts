import {Application} from 'express';
import { createBook, deleteBook, listBooks, retrieveBook, updateBook } from './controller/book.controller';

export const router = (app: Application) =>{        
    app.post('/books', createBook); //http://localhost:5000/players    
    app.get('/books/:id', retrieveBook);
    app.put('/books/:id',updateBook);
    app.delete('/books/:id',deleteBook)
    app.get('/books', listBooks);  
}