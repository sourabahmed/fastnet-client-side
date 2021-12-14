import React from 'react';
import Header from '../../../shared/Header/Header';
import './Banner.css';


const Banner = () => {
    return (
        <div className="banner">
            <Header></Header>
            <div className="banner-description">
                <div>
                    <h3> <i className="fas fa-wifi"></i> FastNet Broadcast Service</h3>
                </div>
                <div className="banner-large-text">
                    <h1>Connect The World <br /> With <span>FastNet</span></h1>
                </div>
                <div className="banner-text">
                    <div>
                        <h5> <i className="fas fa-check-square"></i> Home Broadband</h5>
                        <h5> <i className="fas fa-check-square"></i> Cell Phone Connection</h5>
                        <h5> <i className="fas fa-check-square"></i> Home Security</h5>
                        <h5> <i className="fas fa-check-square"></i> 99% Internet Uptime</h5>
                    </div>
                    <div className="ms-lg-5 ms-sm-0">
                        <h5> <i className="fas fa-check-square"></i> Download 1Gbps</h5>
                        <h5> <i className="fas fa-check-square"></i> FastNet TV Box</h5>
                        <h5> <i className="fas fa-check-square"></i> Mobile Connection</h5>
                        <h5> <i className="fas fa-check-square"></i> 24/7 Customer Support</h5>
                    </div>
                </div>
                <div className="mt-5">
                    <button className="banner-button">Our Services</button>
                    {/* <button className="banner-button ms-4">Contact us</button> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;