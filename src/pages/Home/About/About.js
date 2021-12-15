import React from 'react';
import './About.css';
import AboutImage from '../../../images/about.jpg'

const About = () => {
    return (
        <div className="row about">
            <div className="col-sm-12 col-lg-7 pe-sm-1 pe-lg-5">
                <div>
                    <h4>About FastNet</h4>
                    <h2>Discover A Wider World Of <br /> Recreation</h2>
                    <p>Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa dolor imperdiet nec consequata congue idsem. Maecenas malesuada faucibus finibus. Donec vitae libero porttitor laoreet sapiena ultrices leo. Duis dictum vestibulum ante vitae ullamcorper. Phasellus ullamcorper odio vitae eleifend ultricies lectus orci congue magna in egestas nulla libero nonnis.</p>
                </div>
                <hr />
                <div>
                    <h2>Here will be something</h2>
                </div>
            </div>
            <div className="col-sm-5 col-lg-5 about-image">
                <img className="about-pic img-fluid" src={AboutImage} alt="" />
                <div className="about-offer">
                    <h4>Up To</h4>
                    <h1>100 MB</h1>
                    <h4>Per Second</h4>
                </div>
                <div className="about-price">
                    <h4>Just</h4>
                    <h1>$23</h1>
                </div>
            </div>
        </div>
    );
};

export default About;