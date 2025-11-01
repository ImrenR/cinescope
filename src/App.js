import { ToastContainer } from "react-toastify";
import AuthContext from "./context/AuthContext";
import AppRouter from "./router/AppRouter";
import MovieContext from "./context/MovieContext";


function App() {
  return (
  <div>
     
    <AuthContext>
      <MovieContext>
     <AppRouter/>
    <ToastContainer/>
    </MovieContext>
    </AuthContext>
  </div>

  );
}

export default App;
