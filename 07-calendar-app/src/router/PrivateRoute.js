import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    localStorage.setItem('lastPath', rest.location.pathname+rest.location.search);
    return (
        <Route
            {...rest}
            component={(props) => (
                isAuthenticated?
                    <Component {...props} />:
                    <Redirect to="/auth/login" />
            )}
        />
    )
}

export default PrivateRoute

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}