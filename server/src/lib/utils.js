import jwt from "jsonwebtoken"

export const generateToken=async(user,res)=>{
    const secret = process.env.JWT_SECRET;
    const token =jwt.sign({user},secret)

    res.cookie("token",token)

    return token;
}
