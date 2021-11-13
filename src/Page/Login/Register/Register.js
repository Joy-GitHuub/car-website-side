import React, { useState } from 'react';
import login from '../../../images/login.jpg'
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

// Register Page Start
const Register = () => {

    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    // const location = useLocation();

    // User Auth
    const { user, registerUser, isLoading, error } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }
    // Password Match
    const handleLoginSubmit = e => {

        if (loginData.password !== loginData.password2) {
            alert('Your Password not match');

        }
        else {
            registerUser(loginData?.email, loginData.password, loginData.name, history)
        }
        e.preventDefault();
    }


    return (
        <div>
            {/* Register Section */}
            <div className='row row-cols-1 row-cols-md-3 g-4 container  mx-auto trending-bg  py-5' >

                <div className='col-lg-7 col-md-6 col-12 mt-5 signInForm'>
                    <div className='my-5 mx-3'>
                        <h2 className='text-success text-center'>Register</h2>

                        {!isLoading && <form onSubmit={handleLoginSubmit} className='mx-auto'>
                            <div className="mb-3">
                                <label htmlFor="Your Name" className="form-label">Your Name</label>
                                <input type="text"
                                    name='name'
                                    onBlur={handleOnBlur}
                                    className="form-control w-75"
                                    placeholder='Enter Your Name..'
                                />
                            </div>

                            <div className='mb-3'>
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email"
                                    name='email'
                                    onBlur={handleOnBlur}
                                    className="form-control w-75"
                                    placeholder='Enter Your Email..'
                                    aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password"
                                    name='password'
                                    onBlur={handleOnBlur}
                                    placeholder='Your Password (at least 6 digit)'
                                    className="form-control w-75" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                                <input type="password"
                                    name='password2'
                                    onBlur={handleOnBlur}
                                    placeholder='Your Confirm Password... '
                                    className="form-control w-75" />
                            </div>

                            <div className='text-center'>
                                <button type="submit" className="btn btn-primary login-btn w-50 ">Register</button>
                            </div>

                            <p className='mt-4 text-center'>Already Register ? Please Log-in <span><Link to='/login'>Click Here</Link></span></p>
                        </form>


                        }


                        {isLoading && <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>}
                        {user?.email && <div className="alert alert-success" role="alert">
                            Your registration SuccessFully Done..
                        </div>}

                        {error && <div className="alert alert-danger" role="alert">
                            {error}
                        </div>}


                    </div>

                </div>
                <div className='col-lg-5 col-md-6 col-12 '>
                    <img className='img-fluid' src={login} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Register;