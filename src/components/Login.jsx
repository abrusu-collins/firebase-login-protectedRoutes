import { Form, Button } from "react-bootstrap";
// import GoogleButton from "react-google-button";
import { Link} from "react-router-dom";
import {useUserAuth} from "../auth/userAuth";
import { useState } from "react";
import { useNavigate} from "react-router-dom"


function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error, setError] =useState("");
  const navigate = useNavigate();

  const {logIn} = useUserAuth();

  const login = async () =>{
     try{
      await logIn(email,password);
      setError("")
      navigate("/home")
    }catch(err){
      setError(err.message);
      console.log(error);
    }
  }

  return (
    <div className="login">
      <div className="p-4 box text-center">
        <h2 className="mb-3">Firebase Auth Login</h2>
        <Form onSubmit={(e)=>{e.preventDefault()}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={login}>
            Login
          </Button>
        </Form>
        {/* <div className="gb mt-3">
          <GoogleButton />
        </div> */}
        <div className="noAccount mt-3">
          <p>Don't have an Account?</p>
          <Link to="/signup" >Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
