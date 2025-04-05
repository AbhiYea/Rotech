import {create} from "zustand"

const useAuthState=create((set)=>({
    authUser:true,
    isLoggingIn:false,
    isSigningUp:false
}))

export default useAuthState