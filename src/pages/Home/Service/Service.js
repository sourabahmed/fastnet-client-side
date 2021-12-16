import React from 'react';
import './Service.css'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Service = (props) => {
    const {netSpeed, platform, price} = props.service;

    return (
        <div className="service">
            <span className="promo">Promo</span>
            <div className="progress-bar">
                <CircularProgressbar
                    value={netSpeed}
                    text={`${netSpeed} Mbps`}
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
                <span>{platform}</span>
            </div>
            <div className="benifit">
                <h6><i className="service-icon fas fa-check-circle"></i> Home Broadband</h6>
                <h6><i className="service-icon fas fa-check-circle"></i> Cell Phone Connection</h6>
                <h6><i className="service-icon fas fa-check-circle"></i> Home Security</h6>
                <h6><i className="service-icon fas fa-check-circle"></i> 99% Internet Uptime</h6>
            </div>
            <div className="price">
                <h5><span>${price} </span>/Month</h5>

            </div>
            <div className="service-button">
                <a href="/">Purchase Now</a>
            </div>
        </div>
    );
};

export default Service;