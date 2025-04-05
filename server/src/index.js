import express from "express"



const app=express();




const PORT=1212;


app.listen(PORT,()=>{
    console.log("Server Started at",PORT);
})