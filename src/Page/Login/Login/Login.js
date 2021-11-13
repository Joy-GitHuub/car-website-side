import React, { useState } from 'react';
import './Login.css'
import login from '../../../images/login.jpg'
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, error, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSign = () => {
        signInWithGoogle(location, history);
    };

    return (
        <div className=''>

            <div className='row row-cols-1 row-cols-md-3 g-5 container  mx-auto trending-bg d-flex  align-items-center  py-5' >

                <div className='col-lg-7 col-md-7 col-12 mt-5 signInForm'>
                    <div className='my-5 mx-3'>
                        <h3 className='text-center fs-1'><i className="fas fa-user text-info"></i> </h3>
                        <h2 className='text-success text-center'>Please Login</h2>

                        {!isLoading && <form onSubmit={handleLoginSubmit}>

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input onBlur={handleOnBlur} type="email"
                                    name='email'
                                    className="form-control w-75"
                                    placeholder='Enter Your Email..'
                                    aria-describedby="emailHelp" />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1"
                                    className="form-label">Password</label>
                                <input type="password"
                                    onBlur={handleOnBlur}
                                    name='password'
                                    placeholder='Your Password (at least 6 digit)'
                                    className="form-control w-75" />
                            </div>

                            <div className='text-center'>
                                <button type="submit" className="btn btn-primary login-btn w-50 ">Log in</button>
                            </div>

                            <div className='text-center my-3'>
                                <button className="g-btn"
                                    onClick={handleGoogleSign}
                                ><i className="fab fa-google"></i> Sign In with Google</button>
                            </div>


                        </form>}
                        {isLoading && <div className="spinner-border text-center" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>}
                        {user?.email && <div className="alert alert-success" role="alert">
                            Your Log-in SuccessFully Done..
                        </div>}

                        {user?.error && <div className="alert alert-danger" role="alert">
                            {error}
                        </div>}


                        <p className='mt-4 text-center'>Need To Create New Account? <span><Link to='/register'>Click Here</Link></span></p>
                    </div>

                </div>
                <div className='col-lg-5 col-md-5 col-12 '>
                    <img className='img-fluid' src={login} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Login;