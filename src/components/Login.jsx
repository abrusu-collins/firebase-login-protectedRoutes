import { Form, Button } from "react-bootstrap";
import GoogleButton from "react-google-button";

function Login() {
  return (
    <>
      <div className="p-4 box text-center">
        <h2 className="mb-3">Firebase Auth Login</h2>
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
        Login
      </Button>
        </Form>
      </div>
    </>
  );
}

export default Login;