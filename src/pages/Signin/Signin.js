import React from 'react';
import Header from '../../shared/Header/Header';
import './Signin.css';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import useAuth from '../../hooks/useAuth';

const Signin = () => {
    const {registerUser} = useAuth();

    const location = useLocation();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        if (data.password !== data.password2) {
            alert('passwords does not matched')
        }
        registerUser(data.name, data.email, data.password, navigate, location)
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Header></Header>
                <div className="container mt-5 ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-6">
                            <div className="card px-5 py-5" id="form1">
                                <div className="form-data" v-if="!submitted">
                                    <div className="forms-inputs mb-4"> <span>Full Name</span> <input type="text" {...register("name")} />
                                        <div className="invalid-feedback">A valid email is required!</div>
                                    </div>
                                    <div className="forms-inputs mb-4"> <span>Email Address</span> <input type="email" {...register("email")} />
                                        <div className="invalid-feedback">Password must be 8 character!</div>
                                    </div>
                                    <div className="forms-inputs mb-4"> <span>Password</span> <input type="password" {...register("password")} />
                                        <div className="invalid-feedback">Password must be 8 character!</div>
                                    </div>
                                    <div className="forms-inputs mb-4"> <span>Re-Enter Password</span> <input type="password" {...register("password2")} />
                                        <div className="invalid-feedback">Password must be 8 character!</div>
                                    </div>
                                    <div className="mb-3"> <input className="login-button w-100" type="submit" /> </div>
                                </div>
                                <div className="success-data">
                                    <Link to="/login" className="text-center">Have an Account! Please Login</Link>
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

export default Signin;