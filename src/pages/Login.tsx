import { Link } from 'react-router-dom';
import logo from "../assets/playmusic.png";
import "../css/signup.css";
import { Form, Button } from 'react-bootstrap';

const Login = ():JSX.Element => {
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
                {/* Login Form */}
                <span className='fs-4 fw-bold mt-5'>To continue, log in to Playmusic.</span>
                <Form className='mt-5'>
                    <div className='input-field-container'>
                        <Form.Label 
                            className='input-label' htmlFor="email">Email address</Form.Label>
                        <Form.Control 
                            id='email' name='email' className='input-field fs-5' 
                            type="email" placeholder="Enter email" />
                    </div>
                    <div className='input-field-container'>
                        <Form.Label 
                            className='input-label' htmlFor="password">Password</Form.Label>
                        <Form.Control 
                            id='password' name='password' className='input-field fs-5' 
                            type="password" placeholder="Enter password" />
                    </div>
                    <div className='container row'>
                        <Button className='ms-2'>Login</Button>
                    </div>
                    <div className="hr-line w-100 mt-5"></div>
                </Form>
                {/* Go to signup page */}
                <div className='mt-5'>
                    <p className='text-center fs-5 semi-bold'>
                        Don't have an account?
                    </p>
                    <div className='d-flex justify-content-center'>
                    <Link to={"/signup"} className='ms-1'>
                        <button className='m-auto common-btn bg-light text-dark'>Signup</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;