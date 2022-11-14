import { getAuth } from 'firebase/auth';
import React, { Children } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import app from '../../firebase.init';
import useFirebase from '../../hooks/useFirebase';

let auth = getAuth(app);

const RequireAuth = ({ children }) => {
    let{user} = useFirebase();
    let location = useLocation();
    
    if(!user?.email){
        return <Navigate to="/register" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;