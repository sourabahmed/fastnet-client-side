import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';

const PrivateRoute = ({ children }) => {
    const{user} = useAuth();
    console.log(user);

    return (
        <div>
            {user.email ? children : <Navigate to="/login" />}
        </div>
    );
};

export default PrivateRoute;