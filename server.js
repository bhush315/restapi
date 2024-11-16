import express from "express";
import dotenv from 'dotenv'
import bodyParser from "body-parser";
import userRouter from "./routes/userRoutes.js";
import mongoose from "mongoose";


dotenv.config();

const app =express();

app.use(bodyParser.urlencoded({extended:true}));
 app.use(bodyParser.urlencoded({extended:true}));

 app.use(express.json())
 app.use(bodyParser.json())


 app.use("/users",userRouter );

const PORT =process.env.PORT
const MONGO_URI= process.env.MONGO_URI


mongoose.connect(MONGO_URI)
.then(()=>{console.log("connected to database")})
.catch((err)=>{
    console.log({message: err.message})
})




app.listen(PORT,()=>{console.log(`conneted to port ${PORT}`)})

 






