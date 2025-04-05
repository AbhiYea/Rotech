import express from "express"
import mongoose from "mongoose"
import authRouter from "./routes/auth.route.js"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
dotenv.config()



const app=express();


app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(cookieParser())
app.use(express.json())
app.use("/api/auth",authRouter)


const PORT=1212;


app.listen(PORT,()=>{
    console.log("Server Started at",PORT);
    mongoose.connect("mongodb+srv://bhavya:bhavya%2331@sadconcorde.vhlrngs.mongodb.net/Rotech?retryWrites=true&w=majority&appName=SadConcorde"    ).then(()=>{
        console.log("Mongo DB connected")
    })
})