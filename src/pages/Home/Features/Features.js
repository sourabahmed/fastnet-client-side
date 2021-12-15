import React from 'react';
import './Features.css'

const Features = () => {
    return (
        <div className="pt-5 mt-5">
            <div className="text-center features-title">
                <h4 className="">FastNet Features</h4>
                <h1>We are internet service <br /> provider company</h1>
            </div>
            <div className="features">
                <div className="features-item">
                    
                    <h2>Wifi Seamless</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                <div className="features-item">
                    
                    <h2>Speed On Demand</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                <div className="features-item">

                    <h2>Upgrade Speed</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                <div className="features-item">

                    <h2>Download 1Gbps</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
            </div>
        </div>
    );
};

export default Features;