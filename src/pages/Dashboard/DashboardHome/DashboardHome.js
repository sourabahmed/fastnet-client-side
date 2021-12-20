import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const DashboardHome = () => {
    const { user, logOut, admin } = useAuth();
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="btn btn-danger" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        Dashboard
                    </a>
                    <Link to="/home"><button className="btn btn-danger">Home</button></Link>
                </div>
            </nav>
            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Dashboard</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <h3>{user.displayName}</h3>
                        <h6>{user.email}</h6>
                        <button onClick={logOut} className="btn btn-danger">Logout</button>
                    </div>
                    <div className="dropdown mt-3">
                        <Link className="dropdown-item" to="/dashboard/payment">Payment</Link>
                        <Link className="dropdown-item" to="/dashboard/myorders">MyOrders</Link>
                        {
                            admin && <Link className="dropdown-item" to="/dashboard/manageorders">Manage orders</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;