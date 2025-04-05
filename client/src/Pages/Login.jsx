import useAuthState from "../GlobalState/auth.state.js"
import logo from "../Assets/login.png"

export default function Login(){ 

    return (
        <div class="flex justify-center items-center min-h-  bg-gray-900">
            <div class="flex flex-row bg-gray-800 rounded-xl my-37 mr-24 p-8 shadow-[0_0_40px_rgba(59,130,246,0.7)] space-x-6">
            
            {/*Image section*/}
            <div class="flex flex-col items-center justify-center px-3">
                <img src={logo} alt="Logo" class="w-20 h-20 object-contain" />
                <h2 class="text-2xl font-medium text-white ">Log In</h2>
            </div>
        
            {/*form*/}
            <form class="space-y-4 w-72">
                <div class="rounded-xl border border-gray-600 bg-gray-700 px-4 py-2">
                <input
                    type="text"
                    placeholder="Email"
                    class="bg-transparent outline-none text-white w-full placeholder-gray-400"
                />
                </div>
        
                <div class="rounded-xl border border-gray-600 bg-gray-700 px-4 py-2">
                <input
                    type="password"
                    placeholder="Password"
                    class="bg-transparent outline-none text-white w-full placeholder-gray-400"
                />
                </div>
        
                <div>
                <button
                    type="submit"
                    class="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 transition duration-300"
                >
                    Log In
                </button>
                </div>

                <hr />

                <div>
                <button
                class="w-full rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 transition duration-300"
                >
                    Sign up Here!
                </button>
                </div>
            </form>
            </div>
        </div>
    );
}   