import React from 'react';
import useFirebase from '../hooks/useFirebase';
import './Home.css'

const Home = () => {
    const{user} = useFirebase();
    return (
        <div>
            <h2 className="text-center">Home is Where the Heart is !</h2>
            
        </div>
    );
};

export default Home;