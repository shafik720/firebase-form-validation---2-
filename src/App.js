import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import app from './firebase.init';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from 'react';



function App() {
  const auth = getAuth(app);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[error, setError] = useState('');
  const[registered, setRegistered] = useState(false);

  function emailHandle(e) {
    setEmail(e.target.value);
  }
  function passwordHandle(e) {
    setPassword(e.target.value);
  }
  function checkBoxHandle(e){
    setRegistered(e.target.checked);
  }
  function signUp(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {        
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode);
        console.log(error)
      });

  }
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <Form>
              <h2 className="text-center text-primary"> {registered ? 'Log In' : 'Sign Up' } </h2>

              { registered && <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User Name :</Form.Label>
                <Form.Control onBlur={emailHandle} type="email" placeholder="Username" required />
              </Form.Group>}

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={emailHandle} type="email" placeholder="Enter email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={passwordHandle} type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onChange={checkBoxHandle} type="checkbox" label="Already a Member" />
              </Form.Group>
              {/* error message  */}
              <h4 className="text-danger">{error}</h4>
              <Button onClick={signUp} variant="primary" type="submit">
                {registered ? 'Log in' : 'Sign up'}                
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
