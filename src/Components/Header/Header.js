import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    let {user, handleSignOut} = useFirebase();
    return (
        <div className="headerDiv text-center">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/shop">Shop</Link>
            {
                user?.uid 
                ?                 
                <button onClick={handleSignOut}>Log Out</button>
                :
                <button>Log In</button>
            }
            
            <Link to="/register">Register</Link>
        </div>
    );
};

export default Header;