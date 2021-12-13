import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <a className="navbar-brand link-color" href="/">FastNet</a>
                <button className="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active link-color" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link-color" href="/">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link-color" href="/">Pricing</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        Navbar text with an inline element
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Header;