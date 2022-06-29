import { Request, Response } from "express";
import { IBook, Book } from "../model/book.model";
import { IResponse } from "../model/response.model";


export const createBook = async (req: Request, res: Response)=> {           
    const { title, dateOfPublication, autor, languageNative, category } : IBook = req.body;
    const response = await new BookController().create({ title, dateOfPublication, autor, languageNative, category });         
    return res.status(response.status).json(response);   
}

export const retrieveBook = async (req: Request, res: Response) => {
   const docId : String = req.params.id; 
   const response = await new BookController().retrieve(docId);         
   return res.status(response.status).json(response);   
}

export const updateBook = async (req: Request, res: Response)=> {           
    const { title, dateOfPublication, autor, languageNative, category } : IBook = req.body;
    const docId : String = req.params.id; 
    const response = await new BookController().update(docId, { title, dateOfPublication, autor, languageNative, category });         
    return res.status(response.status).json(response);   
}

export const deleteBook = async (req: Request, res: Response) => {
    const docId : String = req.params.id; 
    const response = await new BookController().delete(docId);         
    return res.status(response.status).json(response);   
 }

export const listBooks = async (req: Request, res: Response) => {
    const response = await new BookController().list();         
    return res.status(200).json(response);    
}

class BookController {

    public async create(books : IBook) : Promise<IResponse> {
        const book = new Book(books);
        return book.save().then(data => {
            return {
                message: " Book Create ",
                status: 201,
                content : data
            }
        }).catch(err => {
            return {
                message: "Error on create Book",
                status: 500,
                content : err
            }
        });        
    }

    public async retrieve(docId: String) : Promise<IResponse> {        
        return Book.findOne({_id: docId}).then(data => {
            if(data === null) {
                return {
                    message: "NOT FOUND: Book not found",
                    status: 404,
                    content : data
                };
            }
            return {
                message: "Book Retrieve",
                status: 200,
                content : data
            };
        }).catch(err => {
            return {
                message: "INTERNAL SERVER ERROR: " + err.name ,
                status: 500,
                content : err
            };
        });        
    }

    public async update(docId: String, books : IBook) : Promise<IResponse>{
        return Book.updateOne({_id: docId} , { $set: { 
            title: books.title, 
            dateOfPublication: books.dateOfPublication, 
            autor: books.autor, 
            languageNative: books.languageNative, 
            category: books.category
          } }).then(data => {            
            return {
                message: "Book Update",
                status: 200,
                content : data
            }
        }).catch(err => {
            return {
                message: "INTERNAL SERVER ERROR: Book not found",
                status: 500,
                content : err
            }
        });
    }
    
    public async delete(docId: String) : Promise<IResponse> {
        return Book.deleteOne({_id: docId}).then(data => {
            if (data.deletedCount == 0) {
                return {
                    message: "NOT FOUND: Book not found",
                    status: 404,
                    content : data
                };
            }
            return {
                message: "Book delete",
                status: 200,
                content : data
            }
        }).catch(err => {
            return {
                message: "INTERNAL SERVER ERROR: " + err.name,
                status: 500,
                content : err
            }
        });
    }

    public async list() : Promise<IResponse> {
        return Book.find({}).then(data => {
                return {
                    message: "All Books retrieve",
                    status: 200,
                    content : data
                };
            }).catch(err => {
                return { message: "Error on retrieve Books", status: 500, content : err }
        });       
    }

}