import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardHome from '../DashboardHome/DashboardHome';

const Dashboard = () => {
    return (
        <div>
            <DashboardHome></DashboardHome>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;