import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'
import { Spinner } from 'react-bootstrap';


// Admin Route Set 
const AdminRoute = ({ children, ...rest }) => {

    const { user, isLoading, admin } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;