import React from 'react';
import './ServiceDetails.css'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const ServiceDetails = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="m-sm-1 m-lg-5">
            <div className="service-details">
                <div className="detail-service">
                    <span className="promo">Promo</span>
                    <div className="progress-bar">
                        <CircularProgressbar
                            value={60}
                            text={`${60} Mbps`}
                            styles={buildStyles({
                                rotation: 0,
                                strokeLinecap: 'butt',
                                textSize: '16px',
                                pathTransitionDuration: 1,
                                pathColor: `rgba(233, 26, 47, ${95 / 100})`,
                                textColor: 'red',
                                trailColor: '#dacaca',
                                backgroundColor: 'yellow',
                            })}
                        />
                    </div>
                    <div className="internet">
                        <span>Internet</span>
                    </div>
                    <div className="benifited">
                        <h6><i className="service-icon fas fa-check-circle"></i> Home Broadband</h6>
                        <h6><i className="service-icon fas fa-check-circle"></i> Cell Phone Connection</h6>
                        <h6><i className="service-icon fas fa-check-circle"></i> Home Security</h6>
                        <h6><i className="service-icon fas fa-check-circle"></i> 99% Internet Uptime</h6>
                    </div>
                    <div className="price">
                        <h5><span>$24.00 </span>/Month</h5>

                    </div>
                    <div className="service-button">
                        <Link to="/home">Go Back</Link>
                    </div>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="container mt-5 ">
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-6">
                                    <div className="details-card " id="form1">
                                        <div className="form-data">
                                            <div className="form-input mb-4"> <span>Full Name</span> <input type="text" {...register("fullname")} />
                                                <div className="invalid-feedback">A valid email is required!</div>
                                            </div>
                                            <div className="form-input mb-4"> <span>Email Address</span> <input type="email" {...register("email")} />
                                                <div className="invalid-feedback">Password must be 8 character!</div>
                                            </div>
                                            <div className="form-input mb-4"> <span>Password</span> <input type="password" {...register("password")} />
                                                <div className="invalid-feedback">Password must be 8 character!</div>
                                            </div>
                                            <div className="form-input mb-4"> <span>Re-Enter Password</span> <input type="password" {...register("password2")} />
                                                <div className="invalid-feedback">Password must be 8 character!</div>
                                            </div>
                                            <div className="mb-3"> <input className="login-button w-100" type="submit" /> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form >
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;