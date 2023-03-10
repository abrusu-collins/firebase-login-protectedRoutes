import { useState } from "react";
import { useNavigate} from "react-router-dom"
import { Form, Button } from "react-bootstrap";
import { Link} from "react-router-dom";
import {useUserAuth} from "../auth/userAuth";


function SignUp() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error, setError] =useState("");
  const navigate = useNavigate()


  const {signUp} = useUserAuth();
  const signup = async () => {
    try{    
      await signUp(email, password);
      setError("");
      navigate("/")
    }catch(err){
      setError(err.message);
      console.log(error);
    }
  }


  return (
    <div className="signup">
      <div className="p-4 box text-center">
        <h2 className="mb-3">Firebase Auth SignUp</h2>
        <Form onSubmit={(e)=>{e.preventDefault()}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={signup}>
        SignUp
      </Button>
        </Form>
        <div className="yesAccount mt-3">
          <p>Already have an Account?</p>
          <Link to="/">Log In</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
