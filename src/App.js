import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import app from './firebase.init';
import { getAuth } from "firebase/auth";
import { useState } from 'react';



function App() {
  const auth = getAuth(app);
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  function signUp(e){
    e.preventDefault();
    console.log('hello');
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
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
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
