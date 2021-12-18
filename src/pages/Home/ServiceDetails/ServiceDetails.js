import React, { useEffect, useState } from 'react';
import './ServiceDetails.css'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Header from '../../../shared/Header/Header';
import useAuth from '../../../hooks/useAuth';

const ServiceDetails = () => {
    const {user} = useAuth();

    const [service, setService] = useState();
    const {serviceId} = useParams();
    console.log(service);
    useEffect(() => {
        fetch(`http://localhost:5000/singleService/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Package Purchased')
            }
        })
    }


    return (
        <div className="">
            <Header></Header>
            <div className="service-details m-sm-1 m-lg-5">
                <div className="detail-service">
                    <span className="promo">Promo</span>
                    <div className="progress-bar">
                        <CircularProgressbar
                            value={service?.netSpeed}
                            text={`${service?.netSpeed} Mbps`}
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
                        <span>{service?.platform}</span>
                    </div>
                    <div className="benifited">
                        <h6><i className="service-icon fas fa-check-circle"></i> Home Broadband</h6>
                        <h6><i className="service-icon fas fa-check-circle"></i> Cell Phone Connection</h6>
                        <h6><i className="service-icon fas fa-check-circle"></i> Home Security</h6>
                        <h6><i className="service-icon fas fa-check-circle"></i> 99% Internet Uptime</h6>
                    </div>
                    <div className="price">
                        <h5><span>${service?.price} </span>/Month</h5>

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
                                            <div className="form-input mb-4"> <span>Full Name</span> <input type="text" {...register("name")} defaultValue={user.displayName}/>
                                                <div className="invalid-feedback">A valid email is required!</div>
                                            </div>
                                            <div className="form-input mb-4"> <span>Email Address</span> <input type="email" {...register("email")} defaultValue={user.email}/>
                                                <div className="invalid-feedback">Password must be 8 character!</div>
                                            </div>
                                            <div className="form-input mb-4"> <span>Price</span> <input type="text" {...register("price")} defaultValue={service?.price}/>
                                                <div className="invalid-feedback">Password must be 8 character!</div>
                                            </div>
                                            <div className="form-input mb-4"> <span>Mobile Number</span> <input type="text" {...register("number")} />
                                                <div className="invalid-feedback">Password must be 8 character!</div>
                                            </div>
                                            <div className="mb-3"> <input className="login-button w-100" type="submit" value="Purchase"/> </div>
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