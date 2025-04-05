import { useState } from "react"
import logo from "../Assets/login.png"
import useAuthStore from "../GlobalState/auth.state"


import "./signup.css"

export default function Signup(){
    const {signup} = useAuthStore()
    const [formData,setFormData]=useState({
        fullName:"",
        email:"",
        password:""
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        signup(formData)

    }

    return (
        <div class="flex justify-center items-center main-signup min-h-screen main-signup bg-gray-900">
            <div class="flex flex-row bg-gray-800 rounded-xl p-8  shadow-[0_0_40px_rgba(249,115,22,0.7)] space-x-6">
            
            {/*Image*/}
            <div class="flex flex-col items-center justify-center">
                <img src={logo} alt="Logo" class="w-20 h-20 object-contain" />
                <h2 class="text-2xl font-medium text-white ">Sign Up</h2>
            </div>
        
            {/*Signup form*/}
            <form class="space-y-4 w-72" onSubmit={handleSubmit}>
                <div class="rounded-xl border border-gray-600 bg-gray-700 px-4 py-2 signupDa">
                <input
                    type="text"
                    placeholder="Full Name"
                    class="bg-transparent outline-none text-white w-full placeholder-gray-400 signupDa"
                    value={formData.fullName}
                    onChange={(e)=>{setFormData({...formData,fullName:e.currentTarget.value})}}
                />
                </div>

                <div class="rounded-xl border border-gray-600 bg-gray-700 px-4 py-2 signupDa">
                <input
                    type="text"
                    placeholder="Email"
                    class="bg-transparent outline-none text-white w-full placeholder-gray-400  signupDa"
                    value={formData.email}
                    onChange={(e)=>{setFormData({...formData,email:e.currentTarget.value})}}
                />
                </div>
        
                <div class="rounded-xl border border-gray-600 bg-gray-700 px-4 py-2 signupDa">
                <input
                    type="password"
                    placeholder="Password"
                    class="bg-transparent outline-none text-white w-full placeholder-gray-400 signupDa"
                    value={formData.password}
                    onChange={(e)=>{setFormData({...formData,password:e.currentTarget.value})}}
                />
                </div>
        
                <div>
                <button
                    type="submit"
                    class="w-full rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 transition duration-300"
                >
                    Sign Up
                </button>
                </div>

            </form>
            </div>
        </div>
    )
}