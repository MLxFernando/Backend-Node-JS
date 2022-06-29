import express from "express";
import { PORT } from "./config";
import { connectToMongoDB } from "./database";
import { router } from "./router";

const main = async()=> {
    await connectToMongoDB();
    const server = express();
    server.use(express.json());
    router(server);

    //start server books
    server.listen(PORT, () =>{
    console.log("server started on port "+ PORT)
    })
}    

main();