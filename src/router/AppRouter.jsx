import { Route, Routes } from "react-router-dom"
import Navbar from "../components/NavBar"
import Main from "../pages/Main"
import Login from "../pages/Login"



const AppRouter = () => {
  return <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  </div>
}

export default AppRouter