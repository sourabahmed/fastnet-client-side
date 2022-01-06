import React from 'react';
import './Header.css';
import Logo from '../../../src/images/logo.png';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const{user, logOut} = useAuth();
 

    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid logo">
                <img className="img-fluid" src={Logo} alt="" />
                <button className="navbar-toggler navbar-dark " type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ms-sm-0 ms-lg-5 me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link active link-color" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link link-color">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#services" className="nav-link link-color">Services</a>
                        </li>
                        <li className="nav-item">
                            {
                                user.email? <Link to="/dashboard" className="nav-link link-color">Dashboard</Link>: " "
                            }
                        </li>
                    </ul>
                    <div className="navbar-text d-flex align-items-center">
                        <div className="dashboard">
                            <h6><span>{user.email? "Hello, ":""}</span>{user.email? user.displayName: ""}</h6>
                        </div>
                        <div className="login">
                            {
                                user.email? <Link onClick={logOut} to="/login">Logout <i className="fas fa-sign-in-alt"></i></Link>:
                                <Link to="/login">Login <i className="fas fa-sign-in-alt"></i></Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;