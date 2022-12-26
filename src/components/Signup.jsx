import { Form, Button } from "react-bootstrap";
import { Link} from "react-router-dom";

function SignUp() {
  return (
    <div className="signup">
      <div className="p-4 box text-center">
        <h2 className="mb-3">Firebase Auth SignUp</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
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
