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
                <button className="navbar-toggler navbar-light " type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link active link-color" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/servicedetails" className="nav-link link-color">ServiceDetails</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link-color" href="/">Dashboard</a>
                        </li>
                    </ul>
                    <div className="navbar-text d-flex align-items-center">
                        <div className="dashboard">
                            <h5>{user.email? user.displayName: ""}</h5>
                        </div>
                        <div className="login">
                            {
                                user.email? <button onClick={() => logOut()} className="logout-btn">Logout<i className="fas fa-sign-in-alt"></i></button>:
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