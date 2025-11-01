import { Route, Routes } from "react-router-dom"
import Navbar from "../components/NavBar"
import Main from "../pages/Main"
import Login from "../pages/Login"
import Register from "../pages/Register"
import PrivateRouter from "./PrivateRouter"
import MovieDetail from "../pages/MovieDetail"



const AppRouter = () => {
  return <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>

      <Route path="/details/:idd" element={<PrivateRouter/>}>
<Route path="/" element={<MovieDetail/>}/>
      </Route>
    </Routes>
  </div>
}

export default AppRouter