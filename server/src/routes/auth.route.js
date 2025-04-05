import express from "express"
import {handleLogin,handleSignup,handleLogout} from "../controllers/auth.controller.js"

const router=express.Router()



router.post("/login",handleLogin)


router.post("/signup",handleSignup)

router.get("/logout",handleLogout)

export default router