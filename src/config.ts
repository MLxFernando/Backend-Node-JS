import {config} from 'dotenv';
config();

export const PORT=process.env.PORT || 3001;
export const MONGODB_URL= process.env.MONGODB_URL || "mongodb://localhost/BooksDB";