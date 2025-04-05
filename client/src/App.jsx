import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home.jsx"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Health from "./Pages/Mode/Health"
import GovtScheme from "./Pages/Mode/GovtScheme"
import Religious from "./Pages/Mode/Religious"
import Food from "./Pages/Mode/Food"
import Amazon from "./Pages/Mode/Amazon"
import Social from "./Pages/Mode/Social"
import useAuthState from "./GlobalState/auth.state.js"

export default function App(){
  const {authUser}=useAuthState

  return (
    <>
    <Home />
    <Routes>
      <Route path="/home" element={authUser ?<Home/>:<Navigate to="/login" />} ></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/chat/health" element={authUser ?<Health/>:<Navigate to="/login" />} />
      <Route path="/chat/govt-scheme" element={authUser ?<GovtScheme/>:<Navigate to="/login" />} />
      <Route path="/chat/religious" element={authUser ?<Religious/>:<Navigate to="/login" />} />
      <Route path="/chat/order-food" element={authUser ?<Food/>:<Navigate to="/login" />} />
      <Route path="/chat/order" element={authUser ?<Amazon/>:<Navigate to="/login" />} />
      <Route path="/chat/social" element={authUser ?<Social/>:<Navigate to="/login" />} />
    </Routes>
    </>
  )
}