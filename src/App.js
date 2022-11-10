import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import app from './firebase.init';
import { getAuth } from "firebase/auth";
import { useState } from 'react';



function App() {
  const auth = getAuth(app);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function emailHandle(e){
    setEmail(e.target.value);
  }
  function passwordHandle(e){
    setPassword(e.target.value);
  }
  function signUp(e) {
    e.preventDefault();
    
  }
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <Form>
              <h2 className="text-center text-primary">Sign Up</h2>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={emailHandle} type="email" placeholder="Enter email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={passwordHandle} type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Already a Member" />
              </Form.Group>
              <Button onClick={signUp} variant="primary" type="submit">
                Sign up
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
