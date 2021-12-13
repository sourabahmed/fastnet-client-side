import React from 'react';
import Header from '../../../shared/Header/Header';
import './Banner.css';


const Banner = () => {
    return (
        <div className="banner">
            <Header></Header>
            <div className="mt-5 ms-5 banner-description">
                <div>
                    <h3>FastNet Broadcast Service</h3>
                </div>
                <div className="banner-large-text">
                    <h1>Connect The World <br /> With <span>FastNet</span></h1>
                </div>
                <div className="d-flex">
                    <div>
                        <h5>Home Broadband</h5>
                        <h5>Cell Phone Connection</h5>
                        <h5>Home Security</h5>
                        <h5>99% Internet Uptime</h5>
                    </div>
                    <div className="ms-5">
                        <h5>Download 1Gbps</h5>
                        <h5>FastNet TV Box</h5>
                        <h5>Mobile Connection</h5>
                        <h5>24/7 Customer Support</h5>
                    </div>
                </div>
                <div className="mt-5">
                    <button className="banner-button">Our Services</button>
                    <button className="banner-button ms-4">Contact us</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;