import React from 'react';
import Payment from '../../../Payment/Payment';

const Dashboard = () => {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        Link with href
                    </a>
                </div>
            </nav>
            <Payment></Payment>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                    </div>
                    <div class="dropdown mt-3">
                        <a class="dropdown-item" href="/dashboard/payment">Action</a>
                        <a class="dropdown-item" href="/">Another action</a>
                        <a class="dropdown-item" href="/">Something else here</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;