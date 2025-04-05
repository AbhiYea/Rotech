import express from "express"
import {handleLogin,handleSignup,handleLogout,logout} from "../controllers/auth.controller.js"

const router=express.Router()



router.post("/login",handleLogin)


router.post("/signup",handleSignup)

router.post("/logout",logout)

router.get("/check",async(req,res)=>{
    const token=req.cookies.token
    if(token){
        return res.json({message:"Done"})
    }else{
        return res.json({message:"gone"})
    }
})


export default router