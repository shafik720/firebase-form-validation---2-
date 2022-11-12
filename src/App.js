import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import app from './firebase.init';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from 'react';
import Header from './Components/Header/Header';
import { Route, Router, Routes } from 'react-router';
import Login from './Components/Login/Login';
import Home from './Home/Home';



function App() { 
  
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={}></Route>
      </Routes>
    </div>
  );
}

export default App;
