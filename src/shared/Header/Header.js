import React from 'react';
import './Header.css';
import Logo from '../../../src/images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid logo">
                <img className="img-fluid" src={Logo} alt="" />
                <button className="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link active link-color" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link-color" href="/">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link-color" href="/">Pricing</a>
                        </li>
                    </ul>
                    <span className="navbar-text d-flex">
                        <div className="dashboard">
                            <a href="/">Dashboard</a>
                        </div>
                        <div className="login">
                            <Link to="/login">Log in <i className="fas fa-sign-in-alt"></i></Link>
                        </div>
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Header;