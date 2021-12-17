import React from 'react';
import { Navigate } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const PrivateRoute = ({ children }) => {
    const{user} = useFirebase();
    console.log(user);

    return (
        <div>
            {user.email ? children : <Navigate to="/login" />}
        </div>
    );
};

export default PrivateRoute;