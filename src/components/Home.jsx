import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {useUserAuth} from "../auth/userAuth";

function Home() {
  const {logOut} = useUserAuth();
  const navigate = useNavigate()
  const logout = async () => {
      try{await logOut();
      navigate("/")
      }
      catch(error){
        console.log(error.message);
      }
  }
  return (
    <div className="home">
      <p className="p-4  mt-3 text-center">Welcome Home</p>
      <div className="text-center">
      <Button variant="primary" onClick={logout}>Log Out</Button>
      </div>
    </div>
  );
}

export default Home;
