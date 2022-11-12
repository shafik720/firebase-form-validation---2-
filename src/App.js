import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import app from './firebase.init';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from 'react';
import Header from './Components/Header/Header';
import { Router, Routes } from 'react-router';



function App() { 
  
  return (
    <div>
      <Header></Header>
      <Routes>
        <Router ></Router>
      </Routes>
    </div>
  );
}

export default App;
