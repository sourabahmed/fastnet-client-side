import React from 'react';
import Header from '../../shared/Header/Header';
import './Login.css';
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {logInUser} = useAuth();

    const location = useLocation();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        logInUser(data.email, data.password, location, navigate)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Header></Header>
                <div className="container mt-5 ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-6">
                            <div className="card px-5 py-5" id="form1">
                                <div className="form-data" v-if="!submitted">
                                    <div className="forms-inputs mb-4"> <span>Email</span> <input type="email" {...register("email")} />
                                        <div className="invalid-feedback">A valid email is required!</div>
                                    </div>
                                    <div className="forms-inputs mb-4"> <span>Password</span> <input type="password" {...register("password")} />
                                        <div className="invalid-feedback">Password must be 8 character!</div>
                                    </div>
                                    <div className="mb-3"> <input className="login-button w-100" type="submit" value="Login"/> </div>
                                </div>
                                <div className="success-data">
                                    <Link to="/signin" className="text-center">New user! Please Sign in</Link>
                                    <div className="text-center d-flex flex-column"> <i className='bx bxs-badge-check'></i> <span className="text-center fs-1">Sign In With Google</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form >
        </div >

    );
};

export default Login;