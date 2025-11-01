import { ToastContainer } from "react-toastify";
import AuthContext from "./context/AuthContext";
import Register from "./pages/Register";
import AppRouter from "./router/AppRouter";


function App() {
  return (
  <div>
     
    <AuthContext>
     <AppRouter/>
    <ToastContainer/>
    </AuthContext>
  </div>

  );
}

export default App;
