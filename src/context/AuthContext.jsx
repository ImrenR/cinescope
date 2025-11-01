import { createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../auth/firebase";
import { toastError, toastSuccess } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContextt = createContext();

const AuthContext = ({ children }) => {
  const navigate = useNavigate();


  const newUser =async (email, password, displayName) => {
  await  createUserWithEmailAndPassword(auth, email, password);
    toastSuccess("Registration successful");

    navigate("/");
  };

  const login=(email,password)=> {
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   toastSuccess("Logged in")
  })
  .catch((error) => {
    toastError("Unsuccessful")
  });
  }

  const signGoogle =()=> {
const provider = new GoogleAuthProvider(); 

signInWithPopup(auth, provider)
  .then((result) => {
    toastSuccess("Signin with Google successful")
    navigate("/")
  }).catch((error) => {
    toastError("Signin with Google unsuccessful")
  });
  }

  const cikis =()=> {
   
signOut(auth).then(() => {
  toastSuccess("Signout  successful")
}).catch((error) => {
  toastError("Signout unsuccessful")
});
  }

  return (
    <AuthContextt.Provider value={{ newUser ,signGoogle, login, cikis}}>
      {children}
    </AuthContextt.Provider>
  );
};

export default AuthContext;
