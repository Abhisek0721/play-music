import { Link } from 'react-router-dom';
import logo from "../assets/playmusic.png";
import "../css/signup.css";
import { Form, Button } from 'react-bootstrap';

const Signup = (): JSX.Element => {
    return (
        <div className="container-fluid signup-container position-absolute top-0 bg-dark text-white min-vh-100">
            <div className="d-flex flex-column align-items-center">
                {/* Logo */}
                <div className='mt-5'>
                    <Link to={"/"} className="text-decoration-none align-itemcenter ms-4">
                        <img src={logo} className="logo" alt="" srcSet="" />
                        <span id="logo" className="fs-4 pt-4 align-middle">Play Music</span>
                    </Link>
                </div>
                {/* Signup Form */}
                <span className='fs-4 fw-bold my-3'>Sign up for free to start listening.</span>
                <Form className='mt-5'>
                    <div className='input-field-container'>
                        <Form.Label 
                            className='input-label' htmlFor="name">What should we call you?</Form.Label>
                        <Form.Control 
                            id='name' name='name' className='input-field fs-5' 
                            type="text" placeholder="Enter a profile name" />
                    </div>
                    <div className='input-field-container'>
                        <Form.Label 
                            className='input-label' htmlFor="email">What's your email?</Form.Label>
                        <Form.Control 
                            id='email' name='email' className='input-field fs-5' 
                            type="email" placeholder="Enter email" />
                    </div>
                    <div className='input-field-container'>
                        <Form.Label 
                            className='input-label' htmlFor="password">Create Password</Form.Label>
                        <Form.Control 
                            id='password' name='password' className='input-field fs-5' 
                            type="password" placeholder="Create a password" />
                    </div>
                    <p className='small-text-1 text-center'>
                        By clicking on sign-up, you agree to Spotify's <a href="#">Terms and Conditions of Use</a>.
                    </p>
                    <div className='container row'>
                        <Button className='mx-auto ms-2'>Signup</Button>
                    </div>
                </Form>
                {/* Go to login page */}
                <div className='mt-5'>
                    <p className='text-center'>
                        Already have an account? 
                        <Link to={"/login"} className='ms-1'>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;