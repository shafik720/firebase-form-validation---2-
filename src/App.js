import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import app from './firebase.init';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from 'react';
import Header from './Components/Header/Header';



function App() { 
  
  return (
    <div>
      <Header></Header>
    </div>
  );
}

export default App;
