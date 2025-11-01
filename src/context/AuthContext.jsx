import { createContext } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth";
export const AuthContextt = createContext()

const AuthContext = ({children}) => {

const newUser=(email,password, displayName)=>{
  
  createUserWithEmailAndPassword(auth, email, password)

}


  return <AuthContextt.Provider value={{newUser}}>
    {children}
  </AuthContextt.Provider>




}

export default AuthContext