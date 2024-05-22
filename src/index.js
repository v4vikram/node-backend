import dotenv from "dotenv";
import dbConnect from "./db/dbConnect.js";
import { app } from "./app.js";
dotenv.config();

dbConnect().then(()=>{
    app.listen(process.env.PORT || 6000, ()=>{
        console.log(`server runing on this port: ${process.env.PORT}`)
    })
}).catch((error)=>{
    console.error(`DB not connected ${error}`)
})