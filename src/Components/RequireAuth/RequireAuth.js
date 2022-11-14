import { getAuth } from 'firebase/auth';
import React from 'react';
import { useLocation } from 'react-router-dom';
import app from '../../firebase.init';

const RequireAuth = ({ children }) => {
    let auth = getAuth(app);
    let location = useLocation();
    
    return (
        <div>
            
        </div>
    );
};

export default RequireAuth;