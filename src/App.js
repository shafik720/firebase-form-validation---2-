import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import app from './firebase.init';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';



function App() {
  const auth = getAuth(app);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [registered, setRegistered] = useState(false);

  function emailHandle(e) {
    setEmail(e.target.value);
  }
  function passwordHandle(e) {
    setPassword(e.target.value);
  }
  function checkBoxHandle(e) {
    setRegistered(e.target.checked);
  }
  function verification() {
    const auth = getAuth();
    sendEmailVerification(auth.currentUser)
      .then(() => {
        console.log('Verification email sent');
      });
  }
  function signUp(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        verification();
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode);
        console.log(error)
      });
  }
  function signIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode);
        console.log(errorCode);
      });
  }
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <Form>
              <h2 className="text-center text-primary"> {registered ? 'Log In' : 'Sign Up'} </h2>

              {registered && <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User Name :</Form.Label>
                <Form.Control onBlur={emailHandle} type="email" placeholder="Username" />
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
              {registered ?
                <Button onClick={signIn} variant="primary" type="submit">
                  Log In
                </Button>
                :
                <Button onClick={signUp} variant="primary" type="submit">
                  Sign Up
              </Button>
              }

            </Form>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mx-auto my-5">
            <div className="">
              <button>Connect With Facebook</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
