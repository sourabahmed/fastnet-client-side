import React from 'react';
import './Services.css';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Services = () => {
    const percentage = 60;
    return (
        <div>
            <div className="text-center mt-5">
                <h5>FastNet pricing</h5>
                <h2>Discover Our Best Plans</h2>
            </div>

            <div className="services">
                <div className="service">
                   <span className="promo">Promo</span>
                    <div className="progress-bar">
                        <CircularProgressbar
                            value={percentage}
                            text={`${percentage} Mbps`}
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
                        <span>Internet </span>
                        <span>+ TV</span>
                        <span>+ Phone</span>
                    </div>
                    <div className="benifit">
                        <h6><i className="service-icon fas fa-check-circle"></i> Home Broadband</h6>
                        <h6><i className="service-icon fas fa-check-circle"></i> Cell Phone Connection</h6>
                        <h6><i className="service-icon fas fa-check-circle"></i> Home Security</h6>
                        <h6><i className="service-icon fas fa-check-circle"></i> 99% Internet Uptime</h6>
                    </div>
                    <div className="price">
                        <h5><span>$24.00 </span>/Month</h5>
                        
                    </div>
                    <div className="service-button">
                        <a href="/">Purchase Now</a>
                    </div>
                </div>
                <div className="text-center service">
                    <h4>Promo</h4>
                    <div className="progress-bar">
                        <CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            styles={buildStyles({
                                // Rotation of path and trail, in number of turns (0-1)
                                rotation: 0.25,

                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                strokeLinecap: 'butt',

                                // Text size
                                textSize: '16px',

                                // How long animation takes to go from one percentage to another, in seconds
                                pathTransitionDuration: 0.5,

                                // Can specify path transition in more detail, or remove it entirely
                                // pathTransition: 'none',

                                // Colors
                                pathColor: `rgba(213, 0, 54, ${95 / 100})`,
                                textColor: 'red',
                                trailColor: 'pink',
                                backgroundColor: 'yellow',
                            })}
                        />
                    </div>
                    <div>
                        <h3>Internet</h3>
                    </div>
                    <div>
                        <h6>Home Broadband</h6>
                        <h6>Cell Phone Connection</h6>
                        <h6>Home Security</h6>
                        <h6>99% Internet Uptime</h6>
                    </div>
                    <div>
                        <h4>$24.00/month</h4>
                    </div>
                    <div>
                        <a href="/">Purchase Now</a>
                    </div>
                </div>
                <div className="text-center service">
                    <h4>Promo</h4>
                    <div className="progress-bar">
                        <CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            styles={buildStyles({
                                // Rotation of path and trail, in number of turns (0-1)
                                rotation: 0.25,

                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                strokeLinecap: 'butt',

                                // Text size
                                textSize: '16px',

                                // How long animation takes to go from one percentage to another, in seconds
                                pathTransitionDuration: 0.5,

                                // Can specify path transition in more detail, or remove it entirely
                                // pathTransition: 'none',

                                // Colors
                                pathColor: `rgba(213, 0, 54, ${95 / 100})`,
                                textColor: 'red',
                                trailColor: 'pink',
                                backgroundColor: 'yellow',
                            })}
                        />
                    </div>
                    <div>
                        <h3>Internet</h3>
                    </div>
                    <div>
                        <h6>Home Broadband</h6>
                        <h6>Cell Phone Connection</h6>
                        <h6>Home Security</h6>
                        <h6>99% Internet Uptime</h6>
                    </div>
                    <div>
                        <h4>$24.00/month</h4>
                    </div>
                    <div>
                        <a href="/">Purchase Now</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;