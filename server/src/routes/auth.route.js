import express from "express"
import {handleLogin,handleSignup,handleLogout,logout} from "../controllers/auth.controller.js"

const router=express.Router()



router.post("/login",handleLogin)


router.post("/signup",handleSignup)

router.post("/logout",logout)




export default router