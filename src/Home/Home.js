import React from 'react';
import useFirebase from '../hooks/useFirebase';
import './Home.css'

const Home = () => {
    const{user} = useFirebase();
    return (
        <div className='text-center'>
            <h2 className="text-center">Home is Where the Heart is !</h2>
            {
                user?.uid ? <h2 className='text-success'>User : {user.displayName} </h2>  : <h2 className='text-danger'>Nobody</h2>
            }
        </div>
    );
};

export default Home;