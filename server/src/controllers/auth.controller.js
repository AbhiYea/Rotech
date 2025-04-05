import User from "../models/auth.model.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import {generateToken} from "../lib/utils.js"

export const handleLogin=async(req,res)=>{
    try {
        console.log("hi")
        const {email,password}=req.body
        console.log(email)
        const user=await User.findOne({email})

        if(!user){
            return res.status(201).json({message:"No User Found"})
        }

        const ifPasswordCorrect=await bcrypt.compare(password,user.password)

        if(!ifPasswordCorrect){
            return res.status(201).json({message:"Invalid Credentials"})
        }
        
        generateToken(user._id,res)
        res.status(200).json({
            _id:user.id,
            fullName:user.fullName,
            email:user.email
        })
    } catch (error) {
        console.log("Error in login controller")
        res.status(501).json({message:error.message})
    }
}

export const handleSignup=async(req,res)=>{
    try {
        const {fullName,email,password}=req.body;
        if(!fullName || !email || !password){
            return res.status(400).json({message:"All fields required"})
        }
        const user=await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User Already exists"})
        }

        const salt=await bcrypt.genSalt(10);

        const hashedPassword=await bcrypt.hash(password,salt)
        console.log(hashedPassword)
        const newUser = new User({fullName,email,password:hashedPassword});
        if(newUser){
            generateToken(newUser._id,res);
            const userFinal=await newUser.save()
            res.status(201).json({
            _id:newUser.id,
            fullName:newUser.fullName,
            email:newUser.email
        })


        }
    } catch (error) {
        console.log("error in handle signup controller")
        return res.status(501).json({message:error.message})
    }
}

export const handleLogout= async (req,res)=>{
    try {
        res.cookie("token",{maxAge:0})
        res.status(200).json({message:"Logged out succesfully"})
    } catch (error) {
        console.log("Error in handleLogout controller")
    }
}

export const logout=(req,res)=>{
    try {
        res.cookie("token","",{maxAge:0})
        res.status(200).json({message:"Logged out successfully"})
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
    }
}
