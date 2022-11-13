import React from 'react';
import { Form , Button } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';
import './Register.css'

const Register = () => {
    let {useGoogleAuth, user} = useFirebase();
    console.log(user);
    return (
        <div>
            <div className="login-div">
            <h2 className="text-center">Register</h2>
            <div className="text-center my-4">
                <button onClick={useGoogleAuth} className="mx-auto text-center">Register With Google</button>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="">
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button onClick={useGoogleAuth} variant="success" type="submit">
                                    Register
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register;