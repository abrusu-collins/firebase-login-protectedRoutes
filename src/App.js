import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {UserAuthContextProvider} from "./auth/userAuth";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
    
      <Router>
        <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/home" element={
            <ProtectedRoute>
          <Home />
          </ProtectedRoute>
          }/>
          <Route path="/signup" element={<SignUp />}/>
        </Routes>
        </UserAuthContextProvider>
      </Router>
    </>
  );
}

export default App;
