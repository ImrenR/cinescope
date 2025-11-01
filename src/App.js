import { ToastContainer } from "react-toastify";
import AuthContext from "./context/AuthContext";
import Register from "./pages/Register";


function App() {
  return (
  <div>
     
    <AuthContext>
      <Register/>
    <ToastContainer/>
    </AuthContext>
  </div>

  );
}

export default App;
