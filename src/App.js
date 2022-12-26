import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/Signup";

function App() {
  return (
    <>
      <Home />
      <Login />
      <SignUp/>
    </>
  );
}

export default App;
