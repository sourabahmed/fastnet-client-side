import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const DashboardHome = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="btn btn-danger" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        Dashboard
                    </a>
                </div>
            </nav>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Dashboard</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        <h3>{user.displayName}</h3>
                        <h6>{user.email}</h6>
                        <button onClick={logOut} className="btn btn-danger">Logout</button>
                    </div>
                    <div class="dropdown mt-3">
                        <Link class="dropdown-item" to="/dashboard/payment">Payment</Link>
                        <Link class="dropdown-item" to="/dashboard/myorders">My orders</Link>
                        <a class="dropdown-item" href="/">Something else here</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;