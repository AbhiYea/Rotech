import {create} from "zustand"

const useAuthState=create((set)=>({
    authUser:null,
    isLoggingIn:false,
    isSigningUp:false
}))

export default useAuthState