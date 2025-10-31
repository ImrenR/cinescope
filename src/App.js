import { ToastContainer } from "react-toastify";
import AuthContext from "./context/AuthContext";


function App() {
  return (
  <div>
    <AuthContext>
    <ToastContainer/>
    </AuthContext>
  </div>

  );
}

export default App;
