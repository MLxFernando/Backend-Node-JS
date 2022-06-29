import { connect, connection } from "mongoose";
import { MONGODB_URL } from "./config";

export const connectToMongoDB  = async()=> {
    try {
        await connect(MONGODB_URL);
    } catch (error) {
        console.error(error);
    }
}

connection.on("connected",()=>{
    console.log ("DATABASE STARTED ",connection.db.databaseName)
});

connection.on("error",(error)=>{
    console.error ("error", error)
});

connection.off("disconnected",()=>{
    console.log ("DATABASE STOP");
});