import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../auth/firebase";
import { toastError, toastSuccess } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContextt = createContext();

const AuthContext = ({ children }) => {
  const navigate = useNavigate();
const [currentUser, setCurrentUser] = useState();

 useEffect(() => {
   userTakip()
 }, [])
 
  

  const newUser =async (email, password, displayName) => {
  await  createUserWithEmailAndPassword(auth, email, password);
    toastSuccess("Registration successful");

    navigate("/");

    updateProfile(auth.currentUser, {
  displayName:displayName
}).then(() => {
 
}).catch((error) => {
  
});
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

  const userTakip=()=> {
    onAuthStateChanged(auth, (user) => {
  if (user) {
    setCurrentUser({
      email:user.email,
      photoURL:user.photoURL,
      displayName:user.displayName,
    })
  } else {
    setCurrentUser(false)
  }
});
  }

  return (
    <AuthContextt.Provider value={{ newUser ,signGoogle, login, cikis, currentUser}}>
      {children}
    </AuthContextt.Provider>
  );
};

export default AuthContext;
