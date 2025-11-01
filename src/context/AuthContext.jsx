import { createContext } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/firebase";
import { toastSuccess } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";




export const AuthContextt = createContext()

const AuthContext = ({children}) => {
const navigate=useNavigate()
const newUser=(email,password, displayName)=>{
  
  createUserWithEmailAndPassword(auth, email, password)
   toastSuccess("Registration successful")

navigate("/")

}


  return <AuthContextt.Provider value={{newUser}}>
    {children}
  </AuthContextt.Provider>




}

export default AuthContext;