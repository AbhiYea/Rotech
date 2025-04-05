import {create} from "zustand"
import { axiosInstance } from "../utils/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useAuthStore=create((set)=>({
    authUser:null,
    isSigningUp:false,
    isLoggingIn:false,
    isUpdatingProfile:false,
    isCheckingAuth:true,
    login:async(data)=>{
        try {
            console.log(data)
            const res=await axiosInstance.post("/login",data)
            if(res.data.message==="No User Found" || res.data.message==="Invalid Credentials"){
                toast.error(res.data.message)
            }
            else{
                set({authUser:true})
                toast.success("Succesfully Logged in")
            }
        } catch (error) {
            toast.error(error.res.data.message)
        } 
    },




    signup: async (data)=>{
        if(!data.fullName || !data.email || !data.password){
            return toast.error("All fields Required")
        }
        try {
            const res=await axiosInstance.post("/signup",data)
            set({authUser:res.data})
            toast.success("Account Created Succesfully");
        } catch (error) {

        }
        
    },

    logout:async ()=>{
        try {
            const res=await axiosInstance.post("/logout");
            console.log("hi")
            set({authUser:null})
            toast.success("Logged out Successfully")
            
        } catch (error) {
            toast.error(error.response.data.message)
        }

    },
    check:async()=>{
        const res=await axiosInstance("/check")
        console.log(res)
        if(res.data.message==="Done"){
            set({authUser:true})
        }
        else{
            set({authUser:false})
        }

    }

}))

export default useAuthStore