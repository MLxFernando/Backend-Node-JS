import { Schema, model } from 'mongoose';

//Interface Book
export interface IBook {
    title:              null| string; 
    dateOfPublication:  Date;
    autor:              string;
    languageNative:     string;
    category:           string;
} 

//Schema Book
const bookSchema = new Schema<IBook>({
    title:              {type:String}, 
    dateOfPublication:  {type:Date},
    autor:              {type:String},
    languageNative:     {type:String},
    category:           {type:String}
});

//Model Book
const Book = model<IBook>('Book', bookSchema);

export {Book}

