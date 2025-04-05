import {create} from "zustand"
import { axiosInstance } from "../utils/axios";
import toast from "react-hot-toast";
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
            if(res.data.message==="No User Found"){
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

        try {
            console.log("hi")
            const res=await axiosInstance.post("/signup",data)
            console.log(authUser)
            set({authUser:res.data})
            toast.success("Account Created Succesfully");
        } catch (error) {

        }
        
    },

    logout:async ()=>{
        try {
            const res=axiosInstance.post("/auth/logout");
            set({authUser:null})
            toast.success("Logged out Successfully")
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

}))

export default useAuthStore