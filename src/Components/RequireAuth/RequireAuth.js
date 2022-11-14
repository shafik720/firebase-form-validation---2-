import { getAuth } from 'firebase/auth';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import app from '../../firebase.init';
import useFirebase from '../../hooks/useFirebase';

let auth = getAuth(app);

const RequireAuth = ({ children }) => {
    let{user} = useFirebase();
    let location = useLocation();
    console.log(user);
    
    if(user?.uid){
        return children;        
    }else{
        return <Navigate to="/register" state={{ from: location }} replace />;
    }
    
};

export default RequireAuth;